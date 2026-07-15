import { component$ } from "@builder.io/qwik";
import { PhoneShot } from "../phone-shot/phone-shot";

const FEATURE_BLOCKS = [
  {
    title: "Collaborate in real time",
    description:
      "Invite family members, partners, or friends to join your workspaces and manage finances together — so everyone works from the same up-to-date data.",
    points: [
      "Share workspaces with your family, partner, or friends",
      "Track expenses collaboratively in real time",
      "See who spent what and when",
      "Stay aligned on budgets and financial goals",
      "Perfect for couples, families, roommates, and friends",
    ],
    src: "/imgs/screenshots/feature-collaborate.webp",
    alt: "Zherani shared workspace collaboration",
  },
  {
    title: "One app, multiple financial worlds",
    description:
      "With Zherani’s multi-workspace system, you can effortlessly separate and organize different areas of your life — no more messy spreadsheets or confusing chats.",
    points: [
      "Personal expenses",
      "Family shared budget",
      "Business or freelance cash flow",
      "Each workspace with its own accounts and categories",
    ],
    src: "/imgs/screenshots/feature-workspaces.webp",
    alt: "Zherani multi-workspace overview",
  },
  {
    title: "Stay within budget before you spend",
    description:
      "Most expense trackers only show what you’ve already spent. Zherani helps you stay aware of your budget before recording new expenses — with smart budgets and clear progress.",
    points: [
      "Smart budgets with alerts",
      "Budget tracking to stay within spending limits",
      "Customizable categories that fit your habits",
      "Recurring transactions and bills",
    ],
    src: "/imgs/screenshots/feature-budgets.webp",
    alt: "Zherani budget tracking screen",
  },
  {
    title: "Beautiful reports and insights",
    description:
      "Understand where your money goes with clear reports and insights across all your accounts — so you keep better visibility and control without unnecessary complexity.",
    points: [
      "Fast expense and income entry",
      "Multi-account management (cash, bank, e-wallets)",
      "Calendar views and monthly totals",
      "Beautiful reports and insights",
    ],
    src: "/imgs/screenshots/feature-reports.webp",
    alt: "Zherani reports and insights",
  },
] as const;

const SMART_FEATURES = [
  {
    title: "Fast expense & income entry",
    description: "Record daily transactions in seconds.",
  },
  {
    title: "Multi-account management",
    description: "Organize cash, bank accounts, e-wallets, and more.",
  },
  {
    title: "Smart budgets with alerts",
    description: "Stay within limits before you overspend.",
  },
  {
    title: "Recurring transactions & bills",
    description: "Never lose track of repeating payments.",
  },
  {
    title: "Shared workspaces",
    description: "Manage money together with people you trust.",
  },
  {
    title: "Customizable categories",
    description: "Fit categories to your personal spending habits.",
  },
] as const;

export const Features = component$(() => {
  return (
    <section id="features" class="bg-base-100">
      <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Smart features that make tracking easy
          </h2>
          <p class="mt-4 text-lg text-base-content/70">
            Zherani is built for individuals, couples, families, roommates, and
            friends who want complete control and seamless collaboration —
            simple, practical features people actually need to manage money
            together.
          </p>
        </div>

        <div class="mt-16 space-y-20 lg:space-y-28">
          {FEATURE_BLOCKS.map((feature, index) => {
            const reverse = index % 2 === 1;
            return (
              <div
                key={feature.title}
                class={[
                  "flex flex-col items-center gap-10 lg:gap-16",
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row",
                ]}
              >
                <div class="flex shrink-0 justify-center">
                  <PhoneShot src={feature.src} alt={feature.alt} />
                </div>
                <div class="w-full max-w-xl text-center lg:text-left">
                  <h3 class="text-2xl font-bold sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p class="mt-4 text-lg text-base-content/70">
                    {feature.description}
                  </p>
                  <ul class="mt-6 space-y-3 text-left">
                    {feature.points.map((point) => (
                      <li key={point} class="flex gap-3 text-base-content/80">
                        <span
                          class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        ></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div class="mt-24">
          <h3 class="text-center text-2xl font-bold sm:text-3xl">
            Everything you need — nothing you don’t
          </h3>
          <p class="mx-auto mt-3 max-w-2xl text-center text-base-content/70">
            Shared workspaces, budget tracking, multiple accounts, and
            customizable categories in an intuitive interface.
          </p>
          <ul class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SMART_FEATURES.map((item) => (
              <li key={item.title}>
                <h4 class="text-lg font-semibold text-base-content">
                  {item.title}
                </h4>
                <p class="mt-2 text-base-content/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
