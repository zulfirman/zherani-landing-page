import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-[#f1f1f1]">
      <div class="mx-auto sm:px-7 px-4 max-w-screen-xl py-10">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <nav class="flex gap-4 text-sm text-gray-700">
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
          <p class="md:ml-auto text-sm text-center text-gray-700">
            © Copyright {new Date().getFullYear()} Zherani. All Rights
            Reserved.
          </p>
          <div class="md:ml-auto flex flex-wrap gap-3">
            <a href="#" class="hidden" aria-hidden="true" tabIndex={-1}>
              <span>App Store</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm"
            >
              <i class="bi bi-google-play text-lg"></i>
              <span>Play Store</span>
            </a>
            <a
              href="https://app.zherani.my.id"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm"
            >
              <i class="bi bi-globe2 text-lg"></i>
              <span>Browser</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
