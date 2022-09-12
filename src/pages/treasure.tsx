import React from "react";
import DaoLists from "../components/DaoLists";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

export default function Treasure() {
  return (
    <div className="container flex bg-[#1B202A] min-h-screen">
      <Sidebar />
      <DaoLists />
      <div className="pt-[20px] px-9 grow">
        <Navigation />
        <div>
          <div className="bg-[#2A2F3B] rounded-lg p-5 relative">
            <div className="text-white font-bold text-2xl">
              $302,535<span className="text-slate-600">.50</span>
            </div>
            <div className="absolute right-5 top-5 text-slate-800">
              $302,535.50
            </div>
            <div className="text-[#767F91]">Total funds</div>
            <div className="p-2 w-max rounded-lg bg-[#333A46] mt-7 text-[#F5F5F5]">
              7 assets
            </div>
            <div className="absolute right-5 bottom-5 text-slate-800">
              100,451.30
            </div>
          </div>
          <div className="bg-[#2A2F3B] rounded-lg p-5 mt-4">
            <div className="flex justify-between mb-3">
              <div className="text-white font-bold text-2xl">
                Wallet <span className="text-slate-400">2</span>
              </div>
              <div className="text-orange-500 font-semibold cursor-pointer">
                Add wallet
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-gray-300">
                  <div className="text-white font-semibold">
                    Investment wallet
                    <span className="text-gray-500 ml-3">0x968...4A35</span>
                  </div>
                  <div className="text-sm">232,527.50 USD</div>
                  <div className="mt-2">4 assets</div>
                </div>
                <div className="bg-gray-800 h-max p-2 rounded-md text-sm text-gray-300 cursor-pointer">
                  Gnosis safe
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2A2F3B] rounded-lg p-5 mt-4">
            <div>
              Assets <span>7</span>
            </div>
            <div>
              <div>Type</div>
              <div>Balance</div>
              <div>Price, USD</div>
              <div>Value, USD</div>
            </div>
            <div>
              <div>Ethereum</div>
              <div>35.00</div>
              <div>1821.28</div>
              <div>63.710.21</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
