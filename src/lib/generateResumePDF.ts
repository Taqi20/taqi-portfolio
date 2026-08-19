import { profile } from "@/data/profile";
import { resumeExperience, resumeSkills } from "@/lib/resumeContent";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 46;
const MARGIN_TOP = 46;
const MARGIN_BOTTOM = 46;
const CONTENT_W = PAGE_W - MARGIN_X * 2;
const MAX_Y = PAGE_H - MARGIN_BOTTOM;

const INK = "#0f1214";
const INK_SOFT = "#4a5057";
const INK_MUTE = "#7c8289";
const EMERALD = "#0f7a4a";
const RULE = "#d6d9dc";

type Doc = import("jspdf").jsPDF;

export async function generateResumePDF() {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4", compress: true });

  const github = profile.socials.find((s) => s.label === "GitHub")?.href;

  let y = MARGIN_TOP;
  y = drawHeader(doc, y, { github });
  y = drawDivider(doc, y);
  y = drawSummary(doc, y);
  y = drawDivider(doc, y);
  y = drawExperience(doc, y);
  y = drawDivider(doc, y);
  drawSkills(doc, y);
  drawFooter(doc);

  const safeName = profile.name.replace(/\s+/g, "_");
  doc.save(`${safeName}_Resume.pdf`);
}

function drawHeader(
  doc: Doc,
  y: number,
  meta: { github?: string }
): number {
  doc.setTextColor(INK_MUTE);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text(`RÉSUMÉ · ${new Date().getFullYear()}`, MARGIN_X, y);

  y += 22;

  doc.setTextColor(INK);
  doc.setFont("times", "bold");
  doc.setFontSize(28);
  doc.text(profile.name, MARGIN_X, y);

  y += 18;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(INK_SOFT);
  doc.text(`${profile.role} · ${profile.tagline}`, MARGIN_X, y);

  y += 18;

  const contactParts: string[] = [profile.email];
  contactParts.push(profile.location, profile.timezone);
  if (meta.github) contactParts.push(meta.github.replace(/^https?:\/\//, ""));

  doc.setFontSize(8);
  doc.setTextColor(INK_MUTE);
  const contactLines = wrap(doc, contactParts.join("   ·   "), CONTENT_W);
  writeLines(doc, contactLines, MARGIN_X, y, 8, 1.4);
  y += contactLines.length * 8 * 1.4;

  return y + 6;
}

function drawSummary(doc: Doc, y: number): number {
  y = drawSectionHeading(doc, y, "Summary");
  doc.setTextColor(INK);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const lines = wrap(doc, profile.sub, CONTENT_W);
  writeLines(doc, lines, MARGIN_X, y, 9.5, 1.45);
  y += lines.length * 9.5 * 1.45;
  return y + 8;
}

function drawExperience(doc: Doc, y: number): number {
  y = drawSectionHeading(doc, y, "Experience");

  const LABEL_W = 138;
  const BODY_X = MARGIN_X + LABEL_W + 8;
  const BULLET_INDENT = 10;
  const BODY_W = CONTENT_W - LABEL_W - 8;
  const BULLET_W = BODY_W - BULLET_INDENT;

  const roles = resumeExperience();

  roles.forEach((role, roleIdx) => {
    doc.setTextColor(INK_MUTE);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(
      `${role.start.toUpperCase()} — ${role.end.toUpperCase()}`,
      MARGIN_X,
      y
    );

    doc.setTextColor(INK);
    doc.setFont("times", "bold");
    doc.setFontSize(13);
    doc.text(role.company, BODY_X, y);
    const companyW = doc.getTextWidth(role.company);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9.5);
    doc.setTextColor(INK_SOFT);
    doc.text(`  ·  ${role.role}`, BODY_X + companyW, y);

    y += 14;

    doc.setTextColor(INK);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    role.achievements.forEach((achievement) => {
      const lines = wrap(doc, achievement, BULLET_W);

      doc.setFillColor(EMERALD);
      doc.circle(BODY_X + 2, y - 3, 1.2, "F");

      doc.setTextColor(INK);
      writeLines(doc, lines, BODY_X + BULLET_INDENT, y, 9, 1.4);
      y += lines.length * 9 * 1.4 + 2;
    });

    y += 4;
    doc.setTextColor(INK_MUTE);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    const stackLines = wrap(
      doc,
      role.stack.join("  ·  ").toUpperCase(),
      BODY_W
    );
    writeLines(doc, stackLines, BODY_X, y, 7.5, 1.5);
    y += stackLines.length * 7.5 * 1.5;

    if (roleIdx < roles.length - 1) y += 12;
  });

  return y + 8;
}

function drawSkills(doc: Doc, y: number) {
  y = drawSectionHeading(doc, y, "Skills");

  const LABEL_W = 138;
  const BODY_X = MARGIN_X + LABEL_W + 8;
  const BODY_W = CONTENT_W - LABEL_W - 8;

  const cats = resumeSkills();

  cats.forEach((cat) => {
    if (y + 14 > MAX_Y - 20) return;

    doc.setTextColor(INK_MUTE);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(sanitize(cat.label.toUpperCase()), MARGIN_X, y);

    doc.setTextColor(INK);
    doc.setFontSize(9);
    const line = cat.skills.map((s) => sanitize(s.name)).join("  ·  ");
    const lines = wrap(doc, line, BODY_W);
    writeLines(doc, lines, BODY_X, y, 9, 1.4);
    y += Math.max(11, lines.length * 9 * 1.4) + 4;
  });
}

function drawSectionHeading(doc: Doc, y: number, label: string): number {
  y += 4;
  doc.setDrawColor(RULE);
  doc.setLineWidth(0.5);
  doc.line(MARGIN_X, y - 4, MARGIN_X + 18, y - 4);

  doc.setTextColor(INK_MUTE);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text(label.toUpperCase(), MARGIN_X + 24, y - 2);

  return y + 14;
}

function drawDivider(doc: Doc, y: number): number {
  y += 4;
  doc.setDrawColor(RULE);
  doc.setLineWidth(0.5);
  doc.line(MARGIN_X, y, PAGE_W - MARGIN_X, y);
  return y + 10;
}

function drawFooter(doc: Doc) {
  const y = PAGE_H - MARGIN_BOTTOM + 20;

  doc.setDrawColor(RULE);
  doc.setLineWidth(0.5);
  doc.line(MARGIN_X, y - 14, PAGE_W - MARGIN_X, y - 14);

  doc.setTextColor(INK_MUTE);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);

  const parts: string[] = [profile.name.toUpperCase(), profile.email.toUpperCase()];
  doc.text(parts.join("   ·   "), MARGIN_X, y);
}

function wrap(doc: Doc, text: string, maxWidth: number): string[] {
  return doc.splitTextToSize(sanitize(text), maxWidth) as string[];
}

function sanitize(text: string): string {
  return text
    .replace(/→/g, "->")
    .replace(/←/g, "<-")
    .replace(/↔/g, "<->")
    .replace(/·/g, "·")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/–/g, "-");
}

function writeLines(
  doc: Doc,
  lines: string[],
  x: number,
  y: number,
  fontSize: number,
  lineHeightFactor: number,
  opts?: { charSpace?: number }
) {
  const lineHeight = fontSize * lineHeightFactor;
  lines.forEach((line, i) => {
    doc.text(line, x, y + i * lineHeight, opts);
  });
}
