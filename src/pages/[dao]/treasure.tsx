import Head from "next/head";
import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import MainContainer from "../../containers/MainContainer";
import treasure from "../../mocks/treasure";

export default function Treasure() {
  const [totalFunds] = useState(treasure.totalFunds);
  const [walletList] = useState(treasure.walletList);
  const [assetsList] = useState(treasure.assetsList);
  return (
    <>
      <Head>
        <title>Treasure</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Navigation />
        <>
          <div className="bg-secondary rounded-lg p-5 relative">
            <div className="text-white font-bold text-2xl">
              ${totalFunds.beforeFp}
              <span className="text-[#717A8C]">.{totalFunds.afterFp}</span>
            </div>
            <div className="absolute right-5 top-5 text-slate-800">
              ${totalFunds.beforeFp}.{totalFunds.afterFp}
            </div>
            <div className="text-[#767F91]">Total funds</div>
            <div className="py-2 px-4 w-max rounded-lg bg-[#333A46] mt-7 text-[#F5F5F5]">
              {assetsList.length} assets
            </div>
            <div className="absolute right-5 bottom-5 text-slate-800">
              100,451.30
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-5 mt-4">
            <div className="flex justify-between mb-3">
              <div className="text-white font-bold text-lg">
                Wallet<span className="text-[#717A8C] ml-2">2</span>
              </div>
              <div className="text-accent font-semibold cursor-pointer">
                Add wallet
              </div>
            </div>
            {walletList.map((wallet, index) => {
              return (
                <div
                  className="flex justify-between mb-5 last-of-type:mb-0"
                  key={index}
                >
                  <div className="text-[#717A8C]">
                    <div className="text-white font-semibold">
                      {wallet.name}
                      <span className="text-[#717A8C] ml-3 text-sm">
                        {wallet.address}
                      </span>
                    </div>
                    <div className="text-[#767F91]">{wallet.total} USD</div>
                    <div className="mt-2 text-[#717A8C]">
                      {wallet.assetsAmount} assets
                    </div>
                  </div>
                  <div className="bg-[#333A46] h-max p-2 rounded-md text-sm text-gray-300 cursor-pointer">
                    {wallet.type}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-secondary rounded-lg p-5 my-4 text-white">
            <div className="text-lg font-bold">
              Assets
              <span className="text-[#717A8C] ml-2">{assetsList.length}</span>
            </div>
            <div className="flex justify-between gap-5 my-3 text-[#717A8C] font-semibold">
              <span className="flex-1">Type</span>
              <span className="w-36 text-right">Balance</span>
              <span className="w-36 text-right">Price, USD</span>
              <span className="w-36 text-right">Value, USD</span>
            </div>
            {assetsList.map((asset, index) => {
              return (
                <div className="flex justify-between gap-5 my-5" key={index}>
                  <span className="flex-1 font-semibold">{asset.type}</span>
                  <span className="w-36 text-right">{asset.balance}</span>
                  <span className="w-36 text-right">{asset.price}</span>
                  <span className="w-36 text-right">{asset.value}</span>
                </div>
              );
            })}
          </div>
        </>
      </MainContainer>
    </>
  );
}
