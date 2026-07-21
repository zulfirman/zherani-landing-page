import { component$ } from "@builder.io/qwik";
import { GlobeIcon, GooglePlayIcon } from "../icons/icons";

const FOOTER_BADGES = [
    {
        href: "https://fazier.com/launches/zherani.my.id",
        src: "https://fazier.com/api/v1/public/badges/launch_badges.svg?badge_type=launched&theme=neutral",
        alt: "Fazier badge",
    },
    {
        href: "https://www.uneed.best/tool/zherani",
        src: "/imgs/uneed-logo.webp",
        alt: "Uneed Embed Badge",
    },
    {
        href: "https://www.launchpact.io/p/zherani-shared-money-manager",
        src: "https://www.launchpact.io/badge/zherani-shared-money-manager.png",
        alt: "Listed on LaunchPact",
    },
    {
        href: "https://www.producthunt.com/products/zherani-shared-money-manager/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-zherani&#0045;shared&#0045;money&#0045;manager",
        src: "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1260438&theme=light",
        alt: "Zherani&#0058;&#0032;Shared&#0032;Money&#0032;Manager - Managing&#0032;money&#0032;together&#0032;made&#0032;simple | Product Hunt",
    },
] as const;

export const Footer = component$(() => {
  return (
    <footer class="footer footer-horizontal footer-center bg-base-200 p-10 text-base-content">
      <nav class="grid grid-flow-col gap-4">
        <a href="#hero" class="link link-hover">
          Home
        </a>
        <a href="#how-it-works" class="link link-hover">
          How it works
        </a>
        <a href="#features" class="link link-hover">
          Features
        </a>
        <a href="#screenshots" class="link link-hover">
          Screenshots
        </a>
        <a href="#FAQ" class="link link-hover">
          FAQ
        </a>
      </nav>

      <nav class="flex flex-wrap items-center justify-center gap-2">
        <a
          href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary btn-sm gap-2"
        >
          <GooglePlayIcon />
          <span>Play Store</span>
        </a>
        <a href="#" class="hidden" aria-hidden="true" tabIndex={-1}>
          <span>App Store</span>
        </a>
        <a
          href="https://app.zherani.my.id"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline btn-sm gap-2"
        >
          <GlobeIcon />
          <span>Browser</span>
        </a>
      </nav>

      <nav class="flex flex-wrap items-center justify-center gap-3">
        {FOOTER_BADGES.map((badge) => (
          <a
            key={badge.href}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex shrink-0 items-center"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              width={160}
              height={40}
              loading="lazy"
              decoding="async"
              class="h-8 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[160px]"
            />
          </a>
        ))}
      </nav>

      <aside>
        <p class="text-sm text-base-content/70">
          © Copyright {new Date().getFullYear()} Zherani. All Rights Reserved.
        </p>
      </aside>
    </footer>
  );
});
