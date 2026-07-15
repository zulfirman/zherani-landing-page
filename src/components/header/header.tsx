import { component$ } from "@builder.io/qwik";
import { GooglePlayIcon } from "../icons/icons";

export const Header = component$(() => {
  return (
    <header class="sticky top-0 z-50 border-b border-base-300/60 bg-base-100/90 backdrop-blur-md">
      <div class="navbar mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="navbar-start">
          <a href="/" class="flex items-center gap-2.5">
            <img
              src="/imgs/logo.webp"
              alt="Zherani"
              class="h-9 w-auto sm:h-10"
              width={40}
              height={40}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <span class="text-lg font-bold sm:text-xl">Zherani</span>
          </a>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal gap-1 px-1">
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#screenshots">Screenshots</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
          </ul>
        </div>

        <div class="navbar-end gap-2">
          <a
            href="https://app.zherani.my.id"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-ghost btn-sm hidden sm:inline-flex"
          >
            Open in browser
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary btn-sm sm:btn-md gap-2"
          >
            <GooglePlayIcon />
            <span>Get the app</span>
          </a>
        </div>
      </div>
    </header>
  );
});
