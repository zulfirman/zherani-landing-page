import { component$ } from "@builder.io/qwik";

const FAQS = [
  {
    question: "What is Zherani?",
    answer:
      "Zherani is a shared money manager built for individuals, couples, families, roommates, and friends who want complete control and seamless collaboration. It helps you stay within budget before adding new expenses — not just review past spending.",
  },
  {
    question: "Who is Zherani for?",
    answer:
      "Anyone who wants a simple way to manage money — alone or with others. It’s especially useful for couples managing shared expenses, families tracking income and spending together, roommates splitting rent and utilities, friends organizing trip or event costs, and individuals building better financial habits.",
  },
  {
    question: "Can I share a workspace with others?",
    answer:
      "Yes. Invite family members, partners, or friends to join your workspaces. Track expenses collaboratively in real time, see who spent what and when, and stay aligned on budgets and goals.",
  },
  {
    question: "Can I separate personal and shared money?",
    answer:
      "Yes. With multi-workspace, you can organize personal expenses, a family shared budget, and business or freelance cash flow — each with better visibility and control.",
  },
  {
    question: "What smart features are included?",
    answer:
      "Fast expense and income entry, multi-account management (cash, bank, e-wallets), smart budgets with alerts, recurring transactions and bills, shared workspaces, customizable categories, and beautiful reports and insights.",
  },
  {
    question: "How is my data handled?",
    answer:
      "Privacy-first design — your data stays secure. Workspaces are isolated, you control sharing via invitations or links, data is encrypted in transit, and you can request that data be deleted.",
  },
] as const;

export const FAQ = component$(() => {
  return (
    <section id="FAQ" class="bg-base-100">
      <div class="mx-auto max-w-screen-md px-4 py-20 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p class="mt-4 text-lg text-base-content/70">
            Need to know how Zherani works? Start here.
          </p>
        </div>

        <div class="mt-12 space-y-3">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              class="collapse-arrow collapse border border-base-300 bg-base-100"
            >
              <input type="radio" name="zherani-faq" />
              <div class="collapse-title font-semibold text-base-content">
                {faq.question}
              </div>
              <div class="collapse-content text-base-content/70">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
