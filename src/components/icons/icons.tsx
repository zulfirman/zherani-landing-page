import { component$ } from "@builder.io/qwik";

type IconProps = {
  class?: string;
};

export const GooglePlayIcon = component$<IconProps>((props) => (
  <svg
    class={["h-5 w-5 shrink-0", props.class]}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M14.222 7.374 1.555 0.812A1 1 0 0 0 0 1.726v12.548a1 1 0 0 0 1.555.914L14.222 8.626a1 1 0 0 0 0-1.252zM3.05 13.623V2.377L11.222 8 3.05 13.623z" />
  </svg>
));

export const GlobeIcon = component$<IconProps>((props) => (
  <svg
    class={["h-5 w-5 shrink-0", props.class]}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 0 1 11.436-4.033 9.4 9.4 0 0 0-2.858 2.227 14 14 0 0 0-1.54 3.12A6.5 6.5 0 0 1 1.5 8zm12.986 4.033A6.5 6.5 0 0 1 4.05 12.314a14 14 0 0 0 1.54-3.12 9.4 9.4 0 0 0 2.858-2.227A6.5 6.5 0 0 1 14.486 8a6.5 6.5 0 0 1-.001 4.033zM8 4.5a9.6 9.6 0 0 1 2.773 3.988 14 14 0 0 1-5.546 0A9.6 9.6 0 0 1 8 4.5z" />
  </svg>
));

export const DownloadStatIcon = component$<IconProps>((props) => (
  <svg
    class={["h-6 w-6 shrink-0 text-base-content/50", props.class]}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 11.25 12 15.75m0 0 4.5-4.5M12 15.75V3"
    />
  </svg>
));

export const ReviewsStatIcon = component$<IconProps>((props) => (
  <svg
    class={["h-6 w-6 shrink-0 text-base-content/50", props.class]}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    />
  </svg>
));

export const StarStatIcon = component$<IconProps>((props) => (
  <svg
    class={["h-6 w-6 shrink-0 text-base-content/50", props.class]}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l2.955 6.052 6.608.96-4.782 4.66 1.128 6.58L12 17.77l-5.909 3.11 1.128-6.58L2.437 9.012l6.608-.96L12 2z" />
  </svg>
));

export const LaurelWreath = component$<IconProps>((props) => (
  <svg
    class={["h-16 w-8 shrink-0 text-base-content/15 sm:h-20 sm:w-10", props.class]}
    viewBox="0 0 32 64"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16 4c-2 8-6 14-10 18 4 2 8 2 10 2s6 0 10-2c-4-4-8-10-10-18zm0 56c2-8 6-14 10-18-4-2-8-2-10-2s-6 0-10 2c4 4 8 10 10 18zM6 20c3 4 5 9 5 12s-2 8-5 12c-2-5-3-10-3-12s1-7 3-12zm20 0c2 5 3 10 3 12s-1 7-3 12c-3-4-5-9-5-12s2-8 5-12z" />
  </svg>
));
