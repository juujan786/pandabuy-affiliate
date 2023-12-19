import React, { useRef } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const FeaturedProducts = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (
      swiperRef.current !== null &&
      swiperRef.current.swiper.autoplay.running
    ) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (
      swiperRef.current !== null &&
      !swiperRef.current.swiper.autoplay.running
    ) {
      swiperRef.current.swiper.autoplay.start();
    }
  };
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div class="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                  Featured Items
                </h2>

                <p class="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <a
                href="#"
                class="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div
            class="lg:col-span-2 lg:py-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              loop={true}
              ref={swiperRef}
              className="swiper-wrapper"
              modules={[Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                waitForTransition: true,
              }}
              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              // pagination={{ clickable: true }}
              // scrollbar={{ hide: true }}
            >
              <SwiperSlide>
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
