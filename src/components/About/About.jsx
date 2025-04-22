import React from "react";

export default function About() {
  return (
    <div className="flex m-20 items-center justify-center gap-10 font-roboto">
      <div className="w-1/2">
        <h1 className=" text-6xl font-extrabold mt-20">
          About <span className="">Us</span>
        </h1>
        <p className=" text-2xl mt-10 text-accent">
          We are passionate team of AI developers, educators, and innovators
          committed 10 transforming math education. Our e accessible o every K12
          student through the power of R e e e evidence based instructions
          practices,we aim 1o lose learning gaps, boost confidence,and help
          students thrive in math, Our solution s built on specialized
          foundation models, designed specifically for math
          instructions,ensuring each leaner receives talced support that aligns
          with core standards and individual needs .
        </p>
      </div>
      <div className="h-[600px] w-1/2">
        <img className="h-full" src="https://i.imgur.com/kbxnbN7.png" alt="" />
      </div>
    </div>
  );
}
