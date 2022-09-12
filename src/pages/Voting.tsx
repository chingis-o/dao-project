import React from "react";

export default function Voting() {
  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-5">
        <div className="font-bold text-xl">Proposals</div>
        <div className="flex bg-[#2A2F3B] rounded-lg p-3">
          <div>demodao.eth</div>
          <div className="after:content-[''] after:inset-0 after:bg-orange-500 ml-2 rounded-lg">
            Add proposals
          </div>
        </div>
      </div>

      <div className="flex gap-5 text-sm font-medium">
        <div className="px-[20px] py-[10px] bg-[#F07300] rounded-full text-white">
          All
        </div>
        <div className="px-[20px] py-[10px] bg-[#39404C] rounded-full text-[#F5F5F5]">
          Active
        </div>
        <div className="px-[20px] py-[10px] bg-[#39404C] rounded-full text-[#F5F5F5]">
          Upcoming
        </div>
        <div className="px-[20px] py-[10px] bg-[#39404C] rounded-full text-[#F5F5F5]">
          Closed
        </div>
      </div>
      <div className="bg-[#2A2F3B] rounded-lg p-5 mt-4 text-gray-200">
        <div className="flex justify-between mb-5 font-semibold">
          <div>Superdao Demo DAO</div>
          <div className="text-gray-400 text-sm">Active</div>
        </div>
        <div className="font-semibold mb-3">
          Which NFT artwork from our collection do you like most?
        </div>
        <div className="text-gray-400 mb-3">Choose one of the artwork</div>
        <div className="text-gray-500 text-sm">Ends in 1 day</div>
      </div>
    </div>
  );
}
