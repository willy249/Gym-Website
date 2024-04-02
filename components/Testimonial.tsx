"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// 導入 Swiper React 組件
import { Swiper, SwiperSlide } from "swiper/react";
// 導入所需的模組
import { Pagination } from "swiper/modules";
// 導入 Swiper 樣式
import "swiper/css";
import "swiper/css/pagination"; // 分頁樣式

const testimonialData = [
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dignissimos.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dignissimos.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dignissimos.",
    name: "Maria Garcia",
  },
  {
    img: "/assets/img/testimonial/lucy.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dignissimos.",
    name: "Lucy Anthony",
  },
  {
    img: "/assets/img/testimonial/michael.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dignissimos.",
    name: "Michael Smith",
  },
  {
    img: "/assets/img/testimonial/maria.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dignissimos.",
    name: "Maria Garcia",
  },
];

const Testimonial = () => {
  return (
    <section className=" py-12 xl:py-28" id="testimonial">
      <div className=" container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-center"
        >
          Our Testimonials
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className=" h-[320px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className=" flex flex-col justify-center items-center gap-6 text-center h-full">
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className=" rounded-full border-2 border-accent"
                    />
                    <div className=" flex flex-col justify-center items-center">
                      <FaQuoteLeft className=" text-2xl text-gray-300" />
                      <p className=" max-w-[380px] mb-4">{person.message}</p>
                      <span className=" text-2xl text-accent">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
