import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { TechStack } from "@/components/sections/TechStack";
import { HashScroll } from "@/components/layout/HashScroll";
import { site } from "@/constants/site";
import { profile } from "@/data/profile";

export function Landing() {
  return (
    <>
      <HashScroll />
      <PersonJsonLd />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <TechStack />
      <Contact />
    </>
  );
}

function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.sub,
    url: site.url,
    email: `mailto:${profile.email}`,
    sameAs: profile.socials.filter((social) => social.href.startsWith("http")).map((social) => social.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
