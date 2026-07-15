import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { Stats } from "../components/stats/stats";
import { HowItWorks } from "../components/how-it-works/how-it-works";
import { Features } from "../components/features/features";
import { Screenshots } from "../components/screenshots/screenshots";
import { FAQ } from "../components/faq/faq";
import { Testimonials } from "../components/testimonials/testimonials";
import { DownloadCta } from "../components/download-cta/download-cta";
import { Footer } from "../components/footer/footer";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Screenshots />
        <FAQ />
        <Testimonials />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Zherani: Shared Money Manager",
  meta: [
    {
      name: "description",
      content:
        "Zherani is a shared money manager for individuals, couples, families, roommates, and friends. Collaborate in real time, stay within budget before you spend, and organize personal, family, and business money.",
    },
    {
      name: "keywords",
      content:
        "shared money manager, expense tracker, family budget, couples budget, roommate expenses, workspace sharing, budget planner",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "theme-color",
      content: "#7dd3c0",
    },
    {
      property: "og:title",
      content: "Zherani: Shared Money Manager",
    },
    {
      property: "og:description",
      content:
        "Complete control and seamless collaboration — share workspaces, track expenses together, and stay aligned on budgets.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: "/imgs/logo.webp",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Zherani: Shared Money Manager",
    },
    {
      name: "twitter:description",
      content:
        "Shared money manager for couples, families, roommates, and friends. Stay within budget before you spend.",
    },
  ],
  links: [
    {
      rel: "preload",
      href: "/imgs/logo.webp",
      as: "image",
      type: "image/webp",
    },
    {
      rel: "preload",
      href: "/imgs/screenshots/hero.webp",
      as: "image",
      type: "image/jpeg",
    },
  ],
};
