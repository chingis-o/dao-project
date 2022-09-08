import React from "react";

export default function About() {
  return (
    <div>
      <div className="rounded-lg bg-slate-800 overflow-hidden">
        <div className="bg-[#9A6AE7] h-24"></div>
        <div className="p-6">
          <div className="text-white">
            <div className="mb-5">
              <div className="font-bold text-xl">Demo DAO</div>
              <div className="text-slate-600">superdao.co/demodao</div>
            </div>
            <div className="text-gray-300 mb-4 text-md">
              Welcome to the demo DAO Enjoy your experience of being part of
              your first DAO
            </div>
            <div className="flex gap-5 text-sm">
              <div className="bg-slate-700 rounded-md p-2">Smart Contract</div>
              <div className="bg-slate-700 rounded-md p-2">Support</div>
              <div className="bg-slate-700 rounded-md p-2">Creator guide</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-5">
        <div className="flex justify-between w-full">
          <div className="text-white font-bold">
            Membership NFTs <span className="text-slate-600">3</span>
          </div>
          <div className="text-orange-500 font-semibold">Customize</div>
        </div>
        <div className="mt-5 mb-24">
          <div className="bg-slate-800 w-60 p-3 rounded-lg flex flex-col">
            <div className="h-60 w-52 bg-zinc-500 rounded-md mt-3 self-center"></div>
            <div className="text-gray-500 mt-3 text-sm">Demo DAO . 8 of 1000</div>
            <div className="text-white font-bold mt-2">Core team</div>
            <div className="text-orange-500 mt-1 mb-3">
              5000 MATIC <span className="text-gray-500 text-sm">(3 126.52USD)</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
