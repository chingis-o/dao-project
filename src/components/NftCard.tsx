import React from "react";

interface INftCard {
  role: string;
  collectionName: string;
  daoName: string;
}

export default function NftCard({ role, collectionName, daoName }: INftCard) {
  return (
    <div className="bg-secondary w-60 p-3 rounded-lg flex flex-col">
      <div className="h-60 w-full bg-zinc-500 rounded-md mt-3 self-center"></div>
      <div className="text-[#767F91] mt-3 text-sm">{role}</div>
      <div className="text-white font-bold mt-2">{collectionName}</div>
      <div className="text-[#767F91] text-sm mt-1 mb-3">{daoName}</div>
    </div>
  );
}
