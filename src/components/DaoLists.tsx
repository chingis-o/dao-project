import React, { useState } from "react";
import Image from "next/image";
import Plus from "../icons/Plus";

export default function DaoLists() {
  const [daos] = useState([
    { name: "Charm Verse", membersAmount: "2.3k members" },
  ]);

  return (
    <aside className="bg-[#252B36] w-72 min-h-screen">
      <div className="flex justify-between mb-8 mt-8 mx-6">
        <div className="text-[#FAFAFB] text-2xl font-bold">DAOs</div>
        <button className="grid place-items-center">
          <Plus />
        </button>
      </div>

      <ul className="mx-3">
        {daos.map((data, index) => {
          return (
            <li className="flex flex-row px-3 py-3" key={index}>
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
                <div className="text-white font-medium">{data.name}</div>
                <div className="text-[#B3B9C5] font-light">
                  {data.membersAmount}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
