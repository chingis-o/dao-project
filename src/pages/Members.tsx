import React, { useState } from "react";
import Image from "next/image";
import DaoLists from "../components/DaoLists";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import ArrowUpTray from "../icons/ArrowUpTray";

export default function Members() {
  const [filterTags] = useState([
    { name: "All", isActive: true, amount: 124 },
    { name: "Admin", isActive: false, amount: 5 },
    { name: "Member", isActive: false, amount: 95 },
    { name: "Unsigned", isActive: false, amount: 24 },
    { name: "Whitelist", isActive: false, amount: 52 },
  ]);
  const [members] = useState([
    {
      name: "rndmking.eth",
      role: "Admin",
      team: "Core Team",
    },
  ]);

  return (
    <>
      <div className="container flex bg-[#1B202A] min-h-screen">
        <Sidebar />
        <DaoLists />
        <div className="pt-[20px] px-9 grow">
          <Navigation />
          <div className="flex justify-between">
            <input
              type="search"
              name=""
              id=""
              placeholder="Name or wallet address "
              className="bg-[#252B36] w-[340px] h-11 px-[14px] pl-[43px] rounded-[8px] font-xl text-white outline-none"
            />
            <div className="flex">
              <div className="h-11 w-[50px] bg-[#2A2F3B] rounded-[11px] grid place-items-center mr-[20px] cursor-pointer">
                <ArrowUpTray />
              </div>
              <input
                type="button"
                value="Add members"
                className="h-11 px-[30px] grid place-items-center bg-[#F07300] text-white text-base font-bold rounded-lg cursor-pointer"
              />
            </div>
          </div>
          <main className="mt-[20px] bg-[#242A35] pt-[30px] px-[30px] rounded-[15px]">
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
                    <span className="font-normal ml-2">{data.amount}</span>
                  </li>
                );
              })}
            </ul>
            <table className="mt-[25px] text-left text-[#B3B9C5]">
              <thead className="h-[50px]">
                <tr>
                  <th className="w-[200px]" colSpan={2}>
                    Member
                  </th>
                  <th className="w-[250px]">Role</th>
                  <th>Tier</th>
                </tr>
              </thead>
              <tbody>
                {members.map((data, index) => {
                  return (
                    <tr className="h-[60px]" key={index}>
                      <td className="h-[60px] w-[30px] flex items-center justify-start">
                        <Image
                          src="/"
                          alt=" "
                          height="28px"
                          width="28px"
                          className="bg-[#D9D9D9] rounded-full"
                        />
                      </td>
                      <td className="text-white">{data.name}</td>
                      <td>{data.role}</td>
                      <td>{data.team}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  );
}
