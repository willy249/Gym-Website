"use client";

import Image from "next/image";
// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
// components
import CustomButton from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, autem laborum temporibus.",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, autem laborum temporibus.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, autem laborum temporibus.",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, autem laborum temporibus.",
  },
];

const Classes = () => {
  return (
    <section id="class">
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return (
            <div
              className=" relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
              key={index}
            >
              {/* overlay */}
              <div className=" bg-black/50 absolute w-full h-full top-0 z-10"></div>
              {/* image */}
              <Image
                src={item.img}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className=" object-cover"
                alt=""
              />
              {/* text & btn */}
              <div className=" z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className="h3 text-accent"
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                  className=" text-white"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn("up", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CustomButton
                    containerStyles="w-[164px] h-[46px]"
                    text="Read more"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Classes;
