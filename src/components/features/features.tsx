import { component$ } from "@builder.io/qwik";

export const Features = component$(() => {
  return (
    <section id="features">
      <div class="mx-auto sm:px-7 px-4 max-w-screen-xl py-20">
        <div class="flex flex-col md:flex-row gap-10 items-center">
          <div class="w-full max-w-[200px]">
            <img class="w-full max-w-[200px]" src="/imgs/4.Globe.png" alt="" />
          </div>
          <div class="grid gap-12">
            <div>
              <h2 class="text-3xl font-bold lg:text-6xl pb-8">
                <span>Key</span> Features
              </h2>
              <p class="mt-3">
                Built for productively managing personal finance: categories for
                expenses and income, accounts per workspace, powerful search and
                filters, and multi-currency support (IDR, USD, EUR, JPY).
              </p>
            </div>
            <div class="space-y-6 lg:space-y-10">
              <div class="flex">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-lg sm:text-xl font-semibold">
                    Workspace Management & Sharing
                  </h3>
                  <p class="mt-1">
                    Create multiple workspaces, set default categories,
                    accounts, currency and quick amounts. Share via email or
                    links.
                  </p>
                </div>
              </div>
              <div class="flex">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-lg sm:text-xl font-semibold">
                    Category & Template System
                  </h3>
                  <p class="mt-1">
                    Organize entries with income/expense types. Use quick
                    templates and preset amounts for recurring items.
                  </p>
                </div>
              </div>
              <div class="flex">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-lg sm:text-xl font-semibold">
                    Insights, Calendar & Search
                  </h3>
                  <p class="mt-1">
                    Calendar view, monthly totals, detailed date views and
                    powerful search/filter by notes, category and date range.
                  </p>
                </div>
              </div>
              <div class="flex">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-lg sm:text-xl font-semibold">
                    Multi-Currency & Accounts
                  </h3>
                  <p class="mt-1">
                    Use IDR, USD, EUR or JPY per workspace. Track money sources
                    with account-level insights.
                  </p>
                </div>
              </div>
              <div class="flex">
                <svg
                  class="flex-shrink-0 mt-2 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </svg>
                <div class="ms-5 sm:ms-8">
                  <h3 class="text-lg sm:text-xl font-semibold">
                    Templates, Quick Amounts & Batch Setup
                  </h3>
                  <p class="mt-1">
                    Create quick templates, preset amounts, and set up a
                    workspace in one step with defaults.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
