import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section id="hero" class="overflow-x-hidden">
      <div class="mx-auto sm:px-7 px-4 max-w-screen-lg py-10 pb-20">
        <div class="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
          <div data-aos="fade-left" data-aos-delay="200">
            <h1 class="text-2xl font-bold lg:text-5xl pb-8">
              <span>Zherani</span>
              <br />
              Expense & Income Tracker, built for clarity
            </h1>
            <p class="text-xl pb-8">
              Track expenses and incomes, manage accounts and categories, plan
              monthly budgets, explore insights, and share workspaces - with
              multi-currency support.
            </p>
            <p class="text-lg pb-10 font-medium text-gray-800">
              Get started in seconds -{" "}
              <span class="text-primary decoration-2">Try it for FREE</span>, no
              credit card needed.
            </p>
            <div class="flex flex-wrap gap-3 mb-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                <i class="bi bi-google-play text-lg"></i>
                <span>Play Store</span>
              </a>
              <a href="#" class="hidden" aria-hidden="true" tabIndex={-1}>
                <span>App Store</span>
              </a>
              <a
                href="https://app.zherani.my.id"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                <i class="bi bi-globe2 text-lg"></i>
                <span>Browser</span>
              </a>
            </div>
            <div class="bg-gray-100 p-5 rounded max-w-[292px] flex gap-2 items-center text-center">
              <div class="flex item-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    class="w-5 h-5 text-gray-900 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
              <span class="text-dark text-xs">4.9/5 (275k Reviews)</span>
            </div>
          </div>
          <div
            class="w-full flex justify-center md:justify-start md:w-auto shrink-0"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <img
              class="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px] h-auto object-contain"
              src="/imgs/device-pic-1.webp"
              alt="Zherani expense tracker on a device"
              width={340}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
