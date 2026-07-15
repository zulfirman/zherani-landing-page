import { component$ } from "@builder.io/qwik";

const STEPS = [
  {
    step: "01",
    title: "Track expenses & income",
    description:
      "Fast entry with customizable categories and multiple accounts — cash, bank, e-wallets, and more.",
  },
  {
    step: "02",
    title: "Share a workspace",
    description:
      "Invite family, partners, roommates, or friends. Collaborate in real time and see who spent what and when.",
  },
  {
    step: "03",
    title: "Stay within budget",
    description:
      "Use smart budgets with alerts so you stay aware of your spending limits before recording new expenses.",
  },
] as const;

export const HowItWorks = component$(() => {
  return (
    <section id="how-it-works" class="bg-base-200">
      <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Manage money together — simply
          </h2>
          <p class="mt-4 text-lg text-base-content/70">
            Whether you’re on your own or sharing expenses with others, Zherani
            helps you stay organized and in control.
          </p>
        </div>

        <ol class="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((item) => (
            <li key={item.step} class="relative text-center md:text-left">
              <span class="text-sm font-bold tracking-wider text-primary">
                Step {item.step}
              </span>
              <h3 class="mt-3 text-xl font-semibold sm:text-2xl">
                {item.title}
              </h3>
              <p class="mt-3 text-base text-base-content/70">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
});
