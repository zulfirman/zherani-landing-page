import { component$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AOS from "aos";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { Why } from "../components/why/why";
import { Features } from "../components/features/features";
import { FAQ } from "../components/faq/faq";
import { Testimonials } from "../components/testimonials/testimonials";
import { Footer } from "../components/footer/footer";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    AOS.init();
  });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Why />
        <Features />
        <FAQ />
        <Testimonials />
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
        "Zherani helps you track expenses, incomes, accounts, budgets, categories and insights across workspaces with multi-currency support.",
    },
    {
      name: "keywords",
      content:
        "expense tracker, budget planner, income tracking, multi-currency, accounts, categories, workspace sharing",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Zherani: Shared Money Manager",
    },
    {
      property: "og:description",
      content:
        "Track expenses and incomes, plan monthly budgets, manage accounts, and get insights.",
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
        "Track expenses and incomes, plan monthly budgets, manage accounts, and get insights.",
    },
  ],
};
