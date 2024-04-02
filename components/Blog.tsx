"use client";

import Image from "next/image";
import Link from "next/link";

// 導入 Swiper React 組件
import { Swiper, SwiperSlide } from "swiper/react";
// 導入 Swiper 樣式
import "swiper/css";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import CustomButton from "./CustomButton";
import SwiperNavButton from "./SwiperNavButton";

const blogData = [
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/assets/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
];

const Blog = () => {
  return (
    <section className=" bg-primary-300 text-white py-24" id="blog">
      <div className=" container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-center mb-8"
        >
          Blogs
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
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className=" h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" flex flex-col justify-start h-full max-w-[320px]  mx-auto">
                    <Image
                      src={item.img}
                      width={320}
                      height={266}
                      alt=""
                      className="mb-6"
                    />
                    <div className=" flex flex-col  items-start">
                      <p className=" max-w-[380px] uppercase text-[12px] tracking-[3px] mb-1">
                        {item.date}
                      </p>
                      <Link
                        className=" hover:text-accent transition-all duration-300"
                        href={item.href}
                      >
                        <h5 className="h5">{item.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButton
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="block w-[196px] h-[62px] mx-auto"
            text="View all"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
