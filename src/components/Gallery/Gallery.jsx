import React from "react";

export default function Gallery() {
  return (
    <div className="m-20 flex items-center justify-center gap-20">
      <p className="w-1/2 text-accent text-2xl">
        Our team brings together experts in Al development, math education, and
        instructional design, united by a shared mission to transform student
        learning through innovative technology. With experience in building
        scalable GenAl solutions and a deep understanding of K-12 education, we
        are committed to creating impactful tools that support teachers, engage
        students, and improve math outcomes.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-10 w-1/2">
        <div>
          <img className="h-[192px] rounded-2xl" src="https://i.imgur.com/kRBh2vx.png" alt="" />
          <img className="h-[192px] rounded-2xl" src="https://i.imgur.com/5QUMPLK.png" alt="" />
        </div>
        <div>
          <img className="h-[192px] rounded-2xl" src="https://i.imgur.com/o5anYe3.png" alt="" />
          <img className="h-[192px] rounded-2xl" src="https://i.imgur.com/PebYWmt.png" alt="" />
        </div>
      </div>
    </div>
  );
}
