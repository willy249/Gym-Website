"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
// components
import CustomButton from "./CustomButton";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
];

const Team = () => {
  return (
    <section className=" py-12 xl:h-[110vh]" id="team">
      <div className=" container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-center mb-6"
        >
          Our trainers
        </motion.h2>
        {/* 1_教練資訊 */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12"
        >
          {trainerData.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className=" relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image
                    src={item.image}
                    fill
                    sizes="(max-width: 768px) 100vw,(max-width: 1440px) 50vw,  25vw"
                    alt=""
                  />
                </div>
                {/* text */}
                <h4 className="h4 mb-2">{item.name}</h4>
                <p className=" uppercase text-xs tracking-[3px] mb-2">
                  {item.role}
                </p>
                <p className="mb-6 max-w-[320px] mx-auto">{item.description}</p>
                <div className=" flex gap-12 justify-center">
                  {item.social.map((social, index) => {
                    return (
                      <div key={index}>
                        <Link
                          target="_blank"
                          href={social.href}
                          className=" hover:text-accent transition-all"
                        >
                          <social.icon className=" text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* 2_btn */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
