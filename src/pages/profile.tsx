import React from "react";
import DaoLists from "../components/DaoLists";
import Sidebar from "../components/Sidebar";

export default function profile() {
  return (
    <div>
      <Sidebar />
      <DaoLists />
      <div className="pt-[20px] px-9 grow">
        <div className="rounded-lg bg-[#2A2F3B] overflow-hidden">
          <div className="bg-[#9A6AE7] h-24"></div>
          <div className="p-6">
            <div className="text-white">
              <div className="mb-5">
                <div className="font-bold text-xl">Username</div>
                <div className="text-[#767F91]">Username</div>
              </div>
              <div className="text-[#F5F5F5] mb-4 text-md"></div>
              <div className="flex gap-5 text-sm"></div>
            </div>
          </div>
        </div>
        <div className="w-full pt-5">
          <div className="flex justify-between w-full">
            <div className="text-white font-bold">
              DAOs
              <span className="text-slate-600 ml-2">2</span>
            </div>
            <div className="text-[#F07300] font-semibold">Customize</div>
          </div>
          <div className="mt-5 mb-24">
            <div className="bg-[#2A2F3B] w-60 p-3 rounded-lg flex flex-col">
              <div className="h-60 w-52 bg-zinc-500 rounded-md mt-3 self-center"></div>
              <div className="text-[#767F91] mt-3 text-sm">
                {/* {title} . {heldTokens} of {overallTokens} */}
              </div>
              <div className="text-white font-bold mt-2">Core team</div>
              <div className="text-[#F07300] mt-1 mb-3">
                {/* {amountInCrypto} */}
                <span className="text-[#767F91] text-sm ml-2">
                  {/* ({amountInUSD}) */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
