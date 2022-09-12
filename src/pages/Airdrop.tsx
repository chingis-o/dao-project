import React from "react";

export default function Airdrop() {
  return (
    <div className="text-white">
      <div className="text-2xl font-bold mb-7">Airdrop - Import CSV</div>
      <div>
        <div className="mb-5">
          <div className="flex justify-between">
            <div className="font-semibold">Uploaded file</div>
            <div className="text-orange-500">Change CSV</div>
          </div>
          <div className="bg-[#2A2F3B] rounded-lg p-5 mt-4">
            <div>dao_whitelist.csv</div>
            <div className="flex gap-3">
              <div className="text-green-500 font-semibold">
                5 ready to send
              </div>
              <div className="text-gray-500">5 total</div>
            </div>
          </div>
          <div className="pl-5 text-gray-500 mt-1">
            Make sure no wallets in the file gave already received an NFT
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="pr-14">
          <div className="mb-3">Tier from CSV</div>
          <div className="bg-[#2A2F3B] rounded-lg p-5 pl-20 mb-10">
            <div className="font-bold">Not found</div>
            <div className="text-gray-500">2 wallets</div>
          </div>
          <div className="h-11 px-[30px] w-max grid place-items-center bg-[#F07300] text-white text-base font-bold rounded-lg cursor-pointer">
            Send 5 NFTs
          </div>
        </div>
        <div className="pr-14">
          <div className="mb-3">NFT tier</div>
          <div className="bg-[#2A2F3B] rounded-lg p-5 mb-5 pl-20">
            <div className="font-bold">Member</div>
            <div className="text-gray-500">1000 units available</div>
          </div>
          <div className="bg-[#2A2F3B] rounded-lg p-5 pl-20">
            <div className="font-bold">Not assigned</div>
            <div className="text-gray-500">Dont send NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
