import React, { useState } from "react";

export default function About() {
  const [title] = useState("Demo DAO");
  const [link] = useState("superdao.co/demodao");
  const [description] =
    useState(`Welcome to the demo DAO Enjoy your experience of being part of
  your first DAO`);
  const [tags] = useState(["Smart Contract", "Support", "Creator guide"]);
  const [amountOfNFTs] = useState(3);
  const [amountInCrypto] = useState("5000 MATIC");
  const [amountInUSD] = useState("3 126.52USD");
  const [heldTokens] = useState(8);
  const [overallTokens] = useState(1000);
  return (
    <>
      <div className="rounded-lg bg-[#2A2F3B] overflow-hidden">
        <div className="bg-[#9A6AE7] h-24"></div>
        <div className="p-6">
          <div className="text-white">
            <div className="mb-5">
              <div className="font-bold text-xl">{title}</div>
              <div className="text-[#767F91]">{link}</div>
            </div>
            <div className="text-[#F5F5F5] mb-4 text-md">{description}</div>
            <div className="flex gap-5 text-sm">
              {tags.map((tag, index) => {
                return (
                  <div className="bg-[#333A46] rounded-md p-2" key={index}>
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-5">
        <div className="flex justify-between w-full">
          <div className="text-white font-bold">
            Membership NFTs
            <span className="text-slate-600 ml-2">{amountOfNFTs}</span>
          </div>
          <div className="text-[#F07300] font-semibold">Customize</div>
        </div>
        <div className="mt-5 mb-24">
          <div className="bg-[#2A2F3B] w-60 p-3 rounded-lg flex flex-col">
            <div className="h-60 w-52 bg-zinc-500 rounded-md mt-3 self-center"></div>
            <div className="text-[#767F91] mt-3 text-sm">
              {title} . {heldTokens} of {overallTokens}
            </div>
            <div className="text-white font-bold mt-2">Core team</div>
            <div className="text-[#F07300] mt-1 mb-3">
              {amountInCrypto}
              <span className="text-[#767F91] text-sm ml-2">
                ({amountInUSD})
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
