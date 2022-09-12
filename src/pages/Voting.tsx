import React, { useState } from "react";
import DaoLists from "../components/DaoLists";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

export default function Voting() {
  const [publicAddress] = useState("demodao.eth");
  const [proposals] = useState([
    {
      daoName: "Demo DAO",
      status: "Active",
      title: "Which NFT artwork from our collection do you like most?",
      description: "Choose one of the artwork",
      deadline: "Ends in 1 day",
    },
  ]);
  const [filterTags] = useState([
    { name: "All", isActive: true },
    { name: "Active", isActive: false },
    { name: "Upcoming", isActive: false },
    { name: "Closed", isActive: false },
  ]);

  return (
    <div className="container flex bg-[#1B202A] min-h-screen">
      <Sidebar />
      <DaoLists />
      <div className="pt-[20px] px-9 grow">
        <Navigation />
        <div className="text-white">
          <div className="flex justify-between items-center mb-5">
            <div className="font-bold text-xl">Proposals</div>
            <div className="flex bg-[#2A2F3B] rounded-lg p-3">
              <div>{publicAddress}</div>
              <div className="after:content-[''] after:inset-0 after:bg-orange-500 ml-2 rounded-lg">
                Add proposals
              </div>
            </div>
          </div>

          <ul className="flex gap-5 text-sm font-medium">
            {filterTags.map((data, index) => {
              return (
                <li
                  key={index}
                  className={`px-[20px] py-[10px] ${
                    data.isActive ? "bg-[#F07300]" : "bg-[#39404C]"
                  } rounded-full text-white`}
                >
                  {data.name}
                </li>
              );
            })}
          </ul>
          {proposals.map((proposal, index) => {
            return (
              <div
                key={index}
                className="bg-[#2A2F3B] rounded-lg p-5 mt-4 text-gray-200"
              >
                <div className="flex justify-between mb-5 font-semibold">
                  <div>{proposal.daoName}</div>
                  <div className="text-gray-400 text-sm">{proposal.status}</div>
                </div>
                <div className="font-semibold mb-3">{proposal.title}</div>
                <div className="text-gray-400 mb-3">{proposal.description}</div>
                <div className="text-gray-500 text-sm">{proposal.deadline}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
