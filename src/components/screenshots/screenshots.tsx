import { component$ } from "@builder.io/qwik";
import { PhoneShot } from "../phone-shot/phone-shot";

const SHOTS = [
  {
    src: "/imgs/screenshots/gallery-01.webp",
    alt: "Zherani calendar view",
  },
  {
    src: "/imgs/screenshots/gallery-02.webp",
    alt: "Zherani account balance details",
  },
  {
    src: "/imgs/screenshots/gallery-03.webp",
    alt: "Zherani recurring entries",
  },
  {
    src: "/imgs/screenshots/gallery-04.webp",
    alt: "Zherani profile screen",
  },
] as const;

export const Screenshots = component$(() => {
  return (
    <section id="screenshots" class="bg-base-200">
      <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            See Zherani in action
          </h2>
          <p class="mt-4 text-lg text-base-content/70">
            Browse shared workspaces, budgets, accounts, and reports — a clean,
            modern interface that’s easy to use every day.
          </p>
        </div>

        <div class="carousel carousel-center mt-14 w-full gap-6 px-2 py-4">
          {SHOTS.map((shot) => (
            <div key={shot.src} class="carousel-item">
              <PhoneShot src={shot.src} alt={shot.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
