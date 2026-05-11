import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  return (
    <header>
      <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" class="flex items-center gap-3 shrink-0">
            <img
              src="/imgs/logo.png"
              alt="Zherani Logo"
              class="h-10 w-auto sm:h-12"
            />
            <span class="text-xl font-bold">Zherani</span>
          </a>

          {/* Buttons - wrap on small screens, smaller padding */}
          <div class="flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm sm:btn-md"
            >
              <i class="bi bi-google-play text-base sm:text-lg"></i>
              <span class="hidden xs:inline">Play Store</span>
            </a>

            <a href="#" class="hidden" aria-hidden="true" tabIndex={-1}>
              <span>App Store</span>
            </a>

            <a
              href="https://app.zherani.my.id"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm sm:btn-md"
            >
              <i class="bi bi-globe2 text-base sm:text-lg"></i>
              <span class="hidden xs:inline">Browser</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});
