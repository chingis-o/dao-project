import React from "react";
import Image from "next/image";

export default function DaoLists() {
  return (
    <aside className="bg-[#252B36] w-72 min-h-screen">
      <div className="flex justify-between mb-8 mt-8 mx-6">
        <div className="text-[#FAFAFB] text-2xl font-bold">DAOs</div>
        <button className="grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 stroke-[#B3B9C5]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <ul className="mx-3">
        <li className="flex flex-row px-3 py-3">
          <div className="mr-[20px] h-12 w-12">
            <Image
              src={"/"}
              alt={" "}
              className="bg-gray-500 border-gray-800 rounded-full"
              height="50px"
              width="50px"
            />
          </div>
          <div className="text-lg">
            <div className="text-white font-medium">Charm Verse</div>
            <div className="text-[#B3B9C5] font-light">2.3k members</div>
          </div>
        </li>
        <li className="flex flex-row px-3 py-3 after:content-[''] inset-0 bg-[#333945] rounded-lg">
          <div className="mr-[20px] h-12 w-12">
            <Image
              src={"/"}
              alt={" "}
              className="bg-gray-500 border-gray-800 rounded-full"
              height="50px"
              width="50px"
            />
          </div>
          <div className="text-lg">
            <div className="text-white font-medium">Charm Verse</div>
            <div className="text-[#B3B9C5] font-light">2.3k members</div>
          </div>
        </li>
      </ul>
    </aside>
  );
}
