"use client";

// framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
// components
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <section
      className=" py-8 xl:py-0 lg:h-full bg-membership bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      id="prices"
    >
      <div className=" container mx-auto px-0 text-white h-full flex flex-col xl:pt-24 relative z-20">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="h2 text-white text-center mb-8"
        >
          Membership
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <MembershipSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;
