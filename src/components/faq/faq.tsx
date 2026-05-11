import { component$ } from "@builder.io/qwik";

export const FAQ = component$(() => {
  const faqs = [
    {
      question: "What is Zherani?",
      answer:
        "Zherani is an expenses & income tracker that lets you record entries with categories, accounts, dates and notes, plan monthly budgets and explore insights across workspaces.",
    },
    {
      question: "Does Zherani support multiple currencies?",
      answer:
        "Yes. Workspaces can use IDR, USD, EUR or JPY with consistent calculations.",
    },
    {
      question: "Can I share a workspace?",
      answer:
        "Yes. Share with email invitations or shareable links to collaborate.",
    },
    {
      question: "Is there a calendar and search?",
      answer:
        "Zherani includes a calendar with monthly totals, detailed date views and powerful search and filters.",
    },
    {
      question: "Is there authentication?",
      answer:
        "Yes. Signup, login, password change and profile management are supported.",
    },
    {
      question: "Can I set budgets and templates?",
      answer:
        "Yes. Set monthly budgets per category with progress indicators. Create templates and quick amounts for recurring entries.",
    },
    {
      question: "How is my data handled?",
      answer:
        "Workspaces are isolated. You control sharing via invitations or links. Export options will be available for your records.",
    },
  ];

  return (
    <section id="FAQ" class="bg-[#f1f1f1]">
      <div class="mx-auto sm:px-7 px-4 max-w-screen-xl py-20">
        <div class="flex items-center">
          <h2 class="text-2xl font-bold lg:text-5xl pb-8">
            <span class="text-primary">Frequently</span> Asked Questions
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div class="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                class="group bg-white rounded-lg shadow p-4"
                data-aos="fade-up"
              >
                <summary class="flex justify-between items-center cursor-pointer">
                  <span class="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <i class="bi bi-chevron-down transition-transform group-open:rotate-180"></i>
                </summary>
                <div class="mt-3 text-gray-700">{faq.answer}</div>
              </details>
            ))}
          </div>
          <div class="flex justify-center md:justify-end lg:justify-center items-start">
            <img
              src="/imgs/device-pic-2.webp"
              alt="Zherani app on a device"
              class="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
