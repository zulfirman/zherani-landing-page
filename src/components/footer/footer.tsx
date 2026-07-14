import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-[#f1f1f1]">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-7 sm:py-10">
        <div class="flex flex-col gap-6 lg:gap-8">
          <div class="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-700 lg:justify-start lg:max-w-md xl:max-w-none">
              <a href="#hero" class="text-primary hover:underline">
                Home
              </a>
              <a href="#why" class="text-primary hover:underline">
                Why Zherani
              </a>
              <a href="#features" class="text-primary hover:underline">
                Features
              </a>
              <a href="#FAQ" class="text-primary hover:underline">
                FAQ
              </a>
              <a href="#testimonials" class="text-primary hover:underline">
                Testimonials
              </a>
            </nav>

            <div class="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-end">
              <div class="grid w-full max-w-xs grid-cols-2 gap-2 sm:flex sm:w-auto sm:max-w-none">
                <a href="#" class="hidden" aria-hidden="true" tabIndex={-1}>
                  <span>App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm w-full sm:w-auto"
                >
                  <i class="bi bi-google-play text-lg"></i>
                  <span>Play Store</span>
                </a>
                <a
                  href="https://app.zherani.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-sm w-full sm:w-auto"
                >
                  <i class="bi bi-globe2 text-lg"></i>
                  <span>Browser</span>
                </a>
              </div>

              <a
                href="https://fazier.com/launches/zherani.my.id"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex shrink-0 items-center"
              >
                <img
                  src="https://fazier.com/api/v1/public/badges/launch_badges.svg?badge_type=launched&theme=neutral"
                  width={120}
                  height={40}
                  alt="Fazier badge"
                  class="h-8 w-auto sm:h-10"
                />
              </a>
            </div>
          </div>

          <p class="text-center text-sm text-gray-700 lg:text-left">
            © Copyright {new Date().getFullYear()} Zherani. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
