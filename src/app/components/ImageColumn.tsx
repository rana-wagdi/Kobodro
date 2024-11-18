"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { imagesList } from "@/app/static";
import Union from "../icons/Union";

export default function ImageColumn({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof imagesList.top;
  reverse?: boolean;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2 -my-[30px] "
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="ml-[20px] mr-[30px] grid grid-cols-[14rem,_1fr] rounded-lg "
          >
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute top-[50%] right-[-37px] z-20 transform rotate-[90deg]">
                <Union />
              </div>
              <Image
                src={t.img}
                alt={"products-img"}
                className="w-full h-full transform rotate-[90deg] object-center object-contain border border-white rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
