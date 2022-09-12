import React from "react";
import Image from "next/image";
import Squares from "../icons/Squares";
import Fire from "../icons/Fire";
import GlobeAlt from "../icons/GlobeAlt";
import QuestionMarkCircle from "../icons/QuestionMarkCircle";

export default function Sidebar() {
  return (
    <aside className="bg-[#343A46] w-14 min-h-screen flex flex-col justify-between">
      <div>
        <div className="h-14 grid place-items-center border-l-2 border-[#F07300]">
          <Squares />
        </div>
        <div className="h-14 grid place-items-center">
          <Fire />
        </div>
        <div className="h-14 grid place-items-center">
          <GlobeAlt />
        </div>
      </div>
      <div className="mb-12">
        <div className="h-14 grid place-items-center">
          <QuestionMarkCircle />
          <div className="h-7 w-7">
            <Image
              src={"/"}
              alt={" "}
              className="bg-gray-500 border-gray-800 rounded-full"
              height="30px"
              width="30px"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
