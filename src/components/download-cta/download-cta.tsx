import { component$ } from "@builder.io/qwik";
import { PhoneShot } from "../phone-shot/phone-shot";
import { GlobeIcon, GooglePlayIcon } from "../icons/icons";

export const DownloadCta = component$(() => {
  return (
    <section id="download" class="overflow-hidden bg-primary text-primary-content">
      <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div
          class="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-primary-content/10"
          aria-hidden="true"
        ></div>
        <div
          class="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary-content/10"
          aria-hidden="true"
        ></div>
        <div
          class="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-primary-content/5"
          aria-hidden="true"
        ></div>

        <div class="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-end lg:justify-center lg:gap-25">
          <div class="max-w-xl py-16 text-center lg:py-20 lg:pb-24 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Download Zherani
            </h2>
            <p class="mt-4 text-lg text-primary-content/90 sm:text-xl">
              Manage your money more conveniently — together.
            </p>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-neutral gap-2"
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
                class="btn btn-outline border-primary-content text-primary-content hover:border-primary-content hover:bg-primary-content/10 hover:text-primary-content gap-2"
              >
                <GlobeIcon />
                <span>Open in browser</span>
              </a>
            </div>
            <p class="mt-5 text-sm text-primary-content/70">
              Free to start · Scalable to unlimited workspaces
            </p>
          </div>

          <div class="relative flex justify-center lg:justify-end">
            <div
              class="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-content/10 lg:left-auto lg:right-8 lg:translate-x-0"
              aria-hidden="true"
            ></div>
            <PhoneShot
              src="/imgs/screenshots/hero.webp"
              alt="Zherani app on a phone"
              class="relative z-10 mb-[-3rem] w-[240px] sm:w-[260px] lg:mb-[-4rem] lg:w-[280px] shadow-2xl ring-primary-content/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
