import { component$, useVisibleTask$ } from "@builder.io/qwik";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

export const Testimonials = component$(() => {
  const testimonials = [
    {
      text: "Zherani makes budgeting feel simple and organized. The category budgets and quick templates save me so much time.",
      name: "Michael Carter",
      role: "Small Business Owner",
      img: "https://i.pravatar.cc/100?img=11",
    },
    {
      text: "The account insights view helps me track balances across all my wallets in one place. Super helpful.",
      name: "Anathan Pham",
      role: "Freelance Designer",
      img: "https://i.pravatar.cc/100?img=12",
    },
    {
      text: "Multi-currency support is a lifesaver when I travel. I can manage everything without switching apps.",
      name: "Daniel Hoffman",
      role: "Digital Nomad",
      img: "https://i.pravatar.cc/100?img=13",
    },
    {
      text: "The calendar and search features make it easy to find old transactions in seconds.",
      name: "Amer Al-Barkawi",
      role: "Marketing Manager",
      img: "https://i.pravatar.cc/100?img=14",
    },
    {
      text: "Shared workspace keeps my partner and me aligned on our monthly budget goals.",
      name: "Ryan Thompson",
      role: "Startup Founder",
      img: "https://i.pravatar.cc/100?img=15",
    },
    {
      text: "Templates and quick amounts make recurring bills effortless to log.",
      name: "Emily Watson",
      role: "Accountant",
      img: "https://i.pravatar.cc/100?img=16",
    },
    {
      text: "Switching between workspaces is smooth and secure. Authentication feels seamless.",
      name: "Jonathan Reed",
      role: "Software Engineer",
      img: "https://i.pravatar.cc/100?img=17",
    },
    {
      text: "The clean interface and modern theme make it enjoyable to use every day.",
      name: "Jimmy Kim",
      role: "Product Consultant",
      img: "https://i.pravatar.cc/100?img=18",
    },
  ];

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    new Swiper(".swiper", {
      modules: [Pagination, Autoplay],
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1320: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
        },
      },
    });
  });

  return (
    <section id="testimonials">
      <div class="mx-auto sm:px-7 px-4 max-w-screen-xl py-20">
        <h2 class="text-2xl font-bold lg:text-5xl pb-12 text-center">
          <span class="text-primary">What Our Users Say</span>
        </h2>

        <div class="swiper">
          <div class="swiper-wrapper items-center flex flex-row">
            {testimonials.map((t, index) => (
              <div key={index} class="swiper-slide">
                <div
                  class="bg-gradient-to-b w-72 h-64 flex flex-col justify-between shadow-lg mx-auto rounded-xl p-4 text-center"
                  data-aos="fade-up"
                >
                  <p class="text-gray-700">
                    <span class="text-lg font-bold text-slate-800">"</span>
                    {t.text}
                    <span class="text-lg font-bold text-slate-800">"</span>
                  </p>
                  <div class="flex flex-col items-center">
                    <img
                      alt="profile"
                      src={t.img}
                      class="object-cover rounded-full h-10 w-10"
                    />
                    <div class="mt-2">
                      <span class="text-sm font-semibold text-slate-800">
                        {t.name}
                      </span>
                      <span class="block text-xs text-gray-500">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
});
