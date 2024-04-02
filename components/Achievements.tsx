"use client";

import { useRef } from "react";

import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

// framer-motion
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "training courses",
  },
  {
    number: 879,
    icon: FaClock,
    text: "training courses",
  },
  {
    number: 150,
    icon: ImUsers,
    text: "happy customers",
  },
  {
    number: 9,
    icon: FaTrophy,
    text: "international awards",
  },
];

// animation
const statsContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // 子組件的動畫可以按此時間 "錯開"
      duration: 0.5,
      ease: "linear",
    },
  },
};

const statsItems = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section>
      <div className=" container mx-auto">
        <motion.div
          variants={statsContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" grid grid-cols-2 md:grid-cols-4 gap-16"
        >
          {stats.map((item, index) => {
            return (
              <motion.div
                variants={statsItems}
                className=" flex flex-col justify-center items-center"
                key={index}
              >
                {/* 圓形邊框 */}
                <div className=" border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  {/* 計數器 */}
                  <div
                    ref={ref}
                    className=" border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full "
                  >
                    {isInView && (
                      <CountUp start={0} end={item.number} duration={6} />
                    )}
                  </div>
                </div>
                {/* text */}
                <div className=" flex flex-col justify-center items-center text-center">
                  <item.icon className=" text-3xl mb-2" />
                  <h4 className="h4">{item.text}</h4>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
