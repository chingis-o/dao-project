import React, { useState } from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Image from "next/image";
import Plus from "../icons/Plus";
import Link from "next/link";

export default function DaoLists() {
  const [daos] = useState([
    { name: "Demo DAO", membersAmount: "6 members", link: "demo" },
  ]);
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <aside className="bg-[#252B36] w-72 min-h-screen ml-14">
      <div className="flex justify-between mb-8 mt-8 mx-6">
        <div className="text-[#FAFAFB] text-2xl font-bold">DAOs</div>
        <Link href="/createDao">
          <button className="grid place-items-center">
            <Plus />
          </button>
        </Link>
      </div>

      <ul className="mx-3">
        {daos.map((data, index) => {
          return (
            <Link href={`/${data.link}`} key={index}>
              <li className="flex flex-row px-3 py-3 cursor-pointer">
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
            </Link>
          );
        })}
      </ul>
      {!address ? (
        <div className="mx-3 mt-auto">
          <div className="bg-[rgba(208,220,245,.08)] my-5 w-full rounded-md px-4 py-5">
            <span className="mt-4 text-white text-[15px] font-bold">
              Join DAO
            </span>
            <div className="text-[rgb(162,168,180)] mb-4">
              Create your DAO in one click
            </div>
            <button
              onClick={connectWithMetamask}
              className="px-4 py-1 text-[15px] rounded-md bg-[rgb(252,121,0)] cursor-pointer hover:bg-[rgb(255,147,47)] text-lg font-semibold duration-100 text-white"
            >
              Connect wallet
            </button>
          </div>
        </div>
      ) : (
        <div className="hover:bg-[rgba(208,220,245,.08)] my-5 mx-3 px-4 py-4 cursor-pointer rounded-lg transition-all">
          <button
            className="foregroundPrimary css-1o9ssmv e1ehzyln1"
            onClick={disconnect}
          >
            <span className="text-white font-bold">Log out</span>
          </button>
        </div>
      )}
    </aside>
  );
}
