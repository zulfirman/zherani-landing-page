import { component$ } from "@builder.io/qwik";
import { PhoneShot } from "../phone-shot/phone-shot";
import { GlobeIcon, GooglePlayIcon } from "../icons/icons";

export const Hero = component$(() => {
  return (
    <section
      id="hero"
      class="relative overflow-x-hidden bg-linear-to-b from-primary/15 via-base-100 to-base-100"
    >
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div class="max-w-xl text-center lg:text-left">
            <h1 class="text-5xl font-bold tracking-tight text-base-content sm:text-6xl lg:text-7xl">
              Zherani
            </h1>
            <p class="mt-4 text-2xl font-semibold tracking-tight text-base-content sm:text-3xl">
              Shared Money Manager
            </p>
            <p class="mt-5 text-lg text-base-content/70 sm:text-xl">
              Built for individuals, couples, families, roommates, and friends
              who want complete control and seamless collaboration — stay within
              budget before you spend.
            </p>

            <div class="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary gap-2"
              >
                <GooglePlayIcon />
                <span>Google Play</span>
              </a>
              <a href="#" class="hidden" aria-hidden="true" tabIndex={-1}>
                <span>App Store</span>
              </a>
              <a
                href="https://app.zherani.my.id"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline gap-2"
              >
                <GlobeIcon />
                <span>Try in browser</span>
              </a>
            </div>

            <p class="mt-6 text-sm text-base-content/60">
              Free to start · Couples, families, roommates & friends ·
              Privacy-first
            </p>
          </div>

          <div class="flex justify-center lg:justify-end">
            <PhoneShot
              src="/imgs/screenshots/download-cta.webp"
              alt="Zherani Shared Money Manager app"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
});
