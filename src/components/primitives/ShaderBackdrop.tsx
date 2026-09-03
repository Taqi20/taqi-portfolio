"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

/**
 * Lightweight WebGL noise + gradient wash for the hero backdrop.
 * ~5KB, 60fps, pauses off-screen, respects prefers-reduced-motion.
 */
export function ShaderBackdrop({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: true });
    if (!gl) return;

    const vertSrc = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragSrc = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_dark;

      // 2D simplex-ish noise (Ashima)
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
              + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m; m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.05;
        float n1 = snoise(p * 1.1 + vec2(t, -t * 0.8));
        float n2 = snoise(p * 2.3 + vec2(-t * 0.6, t * 1.1));
        float n = 0.5 + 0.5 * (n1 * 0.6 + n2 * 0.4);

        // brand palette
        vec3 cobalt  = vec3(0.145, 0.388, 0.922);
        vec3 indigo  = vec3(0.388, 0.400, 0.945);
        vec3 violet  = vec3(0.655, 0.545, 0.980);
        vec3 bgLight = vec3(0.980, 0.980, 0.968);
        vec3 bgDark  = vec3(0.035, 0.035, 0.043);

        vec3 wash = mix(cobalt, indigo, n);
        wash = mix(wash, violet, smoothstep(0.4, 1.0, n));

        // radial vignette pulling to bg
        float d = length(p * vec2(0.85, 1.0));
        float vignette = smoothstep(0.2, 1.6, d);

        vec3 base = mix(bgLight, bgDark, u_dark);
        float washStrength = mix(0.08, 0.18, u_dark);
        vec3 color = mix(wash * washStrength + base * (1.0 - washStrength * 0.5), base, vignette * 0.85);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uDark = gl.getUniformLocation(program, "u_dark");

    const isDark = () => document.documentElement.classList.contains("dark");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1 : 1.5);
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    let raf = 0;
    let visible = true;
    const start = performance.now();

    const render = (now: number) => {
      if (!visible) return;
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform1f(uDark, isDark() ? 1.0 : 0.0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible && raf === 0) raf = requestAnimationFrame(render);
        if (!visible && raf !== 0) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    window.addEventListener("resize", resize);
    resize();
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      gl.deleteProgram(program);
    };
  }, [reduced]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      {reduced ? (
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-emerald-soft)] via-transparent to-[color:var(--color-bg)]" />
      ) : (
        <canvas ref={canvasRef} className="h-full w-full" />
      )}
    </div>
  );
}
