import { Dot } from "lucide-react";
import React from "react";

export default function WhyUse() {
  return (
    <div className="m-20 flex items-center justify-center gap-20 font-roboto">
      <div className=" h-[760px]">
        <img className="h-full" src="https://i.imgur.com/AZV0vIT.png" alt="" />
      </div>
      <div>
        <h2 className="text-5xl font-extrabold mb-20">
          Why you use <span className="text-secondary">Our ai</span>
        </h2>
        <pre className="">
          <span className="flex text-4xl font-medium leading-loose items-center">
            <Dot /> Personalized 1-on-1 Tutoring
          </span>
          <span className="flex text-4xl font-medium leading-loose items-center">
            <Dot /> Al-Powered Real-Time Feedback{" "}
          </span>
          <div className="flex text-4xl font-medium leading-loose items-center">
            <Dot /> Aligned with State Standards
          </div>
          <div className="flex text-4xl font-medium leading-loose items-center">
            <Dot /> Easy Classroom Integration
          </div>
        </pre>
      </div>
    </div>
  );
}
