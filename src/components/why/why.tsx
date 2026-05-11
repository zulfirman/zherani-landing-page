import { component$ } from "@builder.io/qwik";

export const Why = component$(() => {
  return (
    <section id="why" class="bg-[#f1f1f1]">
      <div class="mx-auto sm:px-7 px-4 max-w-screen-xl py-20">
        <h2 class="text-3xl font-bold lg:text-6xl pb-8">
          Why use <span class="text-primary">Zherani</span>?
        </h2>
        <p class="mb-16 text-2xl">
          Designed for clarity and speed: add expenses and incomes, set monthly
          budgets per category, and see account-level insights instantly.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 lg:gap-x-24 gap-y-20">
          <div data-aos="fade-up">
            <div class="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-lg sm:text-xl font-semibold leading-tight text-gray-900">
              Expense Tracking
            </h3>
            <p class="text-base text-gray-600">
              Add expenses with category, date, notes, amount and account
              selection.
            </p>
          </div>
          <div data-aos="fade-up">
            <div class="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-lg sm:text-xl font-semibold leading-tight text-gray-900">
              Income Tracking
            </h3>
            <p class="text-base text-gray-600">
              Record incomes with date, notes, amount and account selection.
            </p>
          </div>
          <div data-aos="fade-up">
            <div class="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-lg sm:text-xl font-semibold leading-tight text-gray-900">
              Monthly Budgets
            </h3>
            <p class="text-base text-gray-600">
              Set budgets per category and track progress with visual
              indicators.
            </p>
          </div>
          <div data-aos="fade-up">
            <div class="flex items-center justify-center w-12 h-12 mb-4 text-white bg-primary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-lg sm:text-xl font-semibold leading-tight text-gray-900">
              Account Insights
            </h3>
            <p class="text-base text-gray-600">
              See income, expense and net balance by account at a glance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
