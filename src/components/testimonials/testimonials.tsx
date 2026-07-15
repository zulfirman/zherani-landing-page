import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { Pagination, Autoplay } from "swiper/modules";

const TESTIMONIALS = [
  {
    text: "My partner and I finally share one household budget. We see who spent what in real time — no more arguing over chat receipts.",
    name: "Ryan Thompson",
    role: "Couples · shared expenses",
  },
  {
    text: "Our family tracks income and daily spending in one workspace. Everyone stays aligned on budgets and goals.",
    name: "Emily Watson",
    role: "Families · shared budget",
  },
  {
    text: "Roommates life got easier — rent, utilities, and groceries are logged together so splitting costs is fair and clear.",
    name: "Anathan Pham",
    role: "Roommates · shared costs",
  },
  {
    text: "We used Zherani for a trip with friends. Shared expenses for events without spreadsheets or confusion.",
    name: "Daniel Hoffman",
    role: "Friends · trips & events",
  },
  {
    text: "I like that it helps me stay within budget before I add an expense — not only after I’ve already spent.",
    name: "Michael Carter",
    role: "Individuals · better habits",
  },
  {
    text: "Personal and freelance money live in separate workspaces. Simple, collaborative when I need it, and easy every day.",
    name: "Jonathan Reed",
    role: "Solo & freelance cash flow",
  },
] as const;

export const Testimonials = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const root = document.querySelector(".testimonials-swiper");
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        observer.disconnect();

        void (async () => {
          await Promise.all([
            import("swiper/css"),
            import("swiper/css/pagination"),
          ]);
          const { default: Swiper } = await import("swiper");

          new Swiper(".testimonials-swiper", {
            modules: [Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 16,
            loop: true,
            autoplay: {
              delay: 5000,
            },
            pagination: {
              el: ".testimonials-pagination",
              clickable: true,
            },
            breakpoints: {
              700: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            },
          });
        })();
      },
      { rootMargin: "200px" },
    );

    observer.observe(root);
  });

  return (
    <section id="testimonials" class="bg-base-200">
      <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built for how people actually share money
          </h2>
          <p class="mt-4 text-lg text-base-content/70">
            Couples, families, roommates, friends, and individuals — better
            visibility and control without unnecessary complexity.
          </p>
        </div>

        <div class="testimonials-swiper swiper mt-14">
          <div class="swiper-wrapper">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} class="swiper-slide h-auto!">
                <blockquote class="flex h-full flex-col justify-between rounded-box border border-base-300 bg-base-100 p-6">
                  <p class="text-base-content/80">
                    <span class="font-semibold text-base-content">“</span>
                    {t.text}
                    <span class="font-semibold text-base-content">”</span>
                  </p>
                  <footer class="mt-6">
                    <cite class="not-italic">
                      <span class="block text-sm font-semibold text-base-content">
                        {t.name}
                      </span>
                      <span class="block text-xs text-base-content/60">
                        {t.role}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          <div class="testimonials-pagination mt-10 text-center"></div>
        </div>
      </div>
    </section>
  );
});
