import { component$ } from "@builder.io/qwik";
import {
  DownloadStatIcon,
  LaurelWreath,
  ReviewsStatIcon,
  StarStatIcon,
} from "../icons/icons";

/**
 * Fictional placeholders — replace values when real Play Store metrics are available.
 */
export const APP_STATS = [
  {
    value: "5K+",
    label: "Downloads",
    icon: "download" as const,
  },
  {
    value: "120",
    label: "Reviews",
    icon: "reviews" as const,
  },
  {
    value: "4.8",
    label: "Ratings",
    icon: "star" as const,
  },
  {
    value: "Google Play",
    label: "Available on",
    icon: "badge" as const,
  },
] as const;

const StatIcon = component$<{ type: (typeof APP_STATS)[number]["icon"] }>(
  (props) => {
    switch (props.type) {
      case "download":
        return <DownloadStatIcon />;
      case "reviews":
        return <ReviewsStatIcon />;
      case "star":
        return <StarStatIcon />;
      default:
        return null;
    }
  },
);

export const Stats = component$(() => {
  return (
    <section
      id="stats"
      class="border-y border-base-300 bg-base-100 py-12 sm:py-14"
      aria-label="App statistics"
    >
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <ul class="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {APP_STATS.map((stat) => (
            <li key={stat.label} class="flex items-center justify-center gap-2 sm:gap-3">
              <LaurelWreath class="hidden sm:block -scale-x-100" />
              <div class="flex min-w-0 flex-col items-center text-center">
                {stat.icon !== "badge" && (
                  <div class="mb-2">
                    <StatIcon type={stat.icon} />
                  </div>
                )}
                <p class="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
                  {stat.value}
                </p>
                <p class="mt-1 text-sm text-base-content/60 sm:text-base">
                  {stat.label}
                </p>
              </div>
              <LaurelWreath class="hidden sm:block" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
