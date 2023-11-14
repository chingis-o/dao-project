import React, { useState } from "react";
import Plus from "../icons/Plus";
import Link from "next/link";
import daosList from "../mocks/daosList";

export default function DaoLists() {
  const [daos] = useState(daosList);
  const [scrollbarPosition, setScrollPosition] = useState(0);

  return (
    <aside
      onScroll={(e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const scrollHeight = e.currentTarget.scrollHeight;
        const offsetHeight = e.currentTarget.offsetHeight;
        const scrollTop = e.currentTarget.scrollTop;
        const coefficient = scrollTop / (scrollHeight - offsetHeight);

        setScrollPosition(coefficient * scrollHeight - 60 * coefficient);
      }}
      className="bg-[#292D32] fixed w-72 max-h-screen min-h-screen ml-14 overflow-y-scroll scrollbar-hide"
    >
      <>
        <div className="flex justify-between mb-8 mt-8 mx-6">
          <div className="text-[#FAFAFB] text-xl font-bold">Your DAOs</div>
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
                    <div className="bg-gray-500 border-gray-800 rounded-full h-[50px] w-[50px]"></div>
                  </div>
                  <div className="text-lg">
                    <div className="text-white font-medium truncate w-44">
                      {data.name}
                    </div>
                    <div className="text-[#B3B9C5] font-light">
                      {data.membersAmount}
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="hover:bg-[rgba(208,220,245,.08)] my-5 mx-3 px-4 py-4 cursor-pointer rounded-lg transition-all">
          <button>
            <span className="text-white font-bold">Log out</span>
          </button>
        </div>
        <div className="absolute h-screen w-1 top-0 right-1">
          <div
            style={{
              top: `${scrollbarPosition}px`,
            }}
            className="absolute h-[50px] w-1 bg-neutral right-0 rounded-sm"
          />
        </div>
      </>

      <div className="mx-3 mt-auto">
        <div className="bg-[rgba(208,220,245,.08)] my-5 w-full rounded-md px-4 py-5">
          <div className="mb-3">Connect your wallet to start using the app</div>
          <button className="px-4 py-1 text-[15px] rounded-md bg-accent cursor-pointer hover:brightness-110 text-lg font-semibold duration-300 text-white">
            Connect wallet
          </button>
        </div>
      </div>
    </aside>
  );
}
