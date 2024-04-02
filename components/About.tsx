"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

// components
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum nostrum nesciunt at odit quisquam.",
  },
  {
    icon: <IoIosPricetag />,
    title: "excellent prices",
    subtitle:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum nostrum nesciunt at odit quisquam.",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum nostrum nesciunt at odit quisquam.",
  },
];

const About = () => {
  return (
    <section className=" pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className=" container mx-auto">
        {/* 描述 */}
        <div className=" flex flex-col items-center gap-2 mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            About us
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=" max-w-[600px] mx-auto text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit
            similique velit magnam unde placeat!
          </motion.p>
        </div>
        {/* 精選內容 */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((item, index) => {
            return (
              <div
                className=" flex flex-col justify-center items-center gap-4 borer p-10"
                key={index}
              >
                <div className=" text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
                  {item.icon}
                </div>
                <div className=" flex flex-col justify-center items-center gap-2">
                  <h4 className="h4 text-accent">{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        {/* 成就 */}
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
