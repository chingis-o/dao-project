import React from "react";
import CreateDao from "../components/CreateDao";
import DaoCard from "../components/DaoCard";
import NftCard from "../components/NftCard";

interface ITableContent {
  daosList?: {
    name: string;
    role: string;
    description: string;
    members: number;
  }[];
  nftsList?: { role: string; collectionName: string; daoName: string }[];
}

export default function TableContent({ daosList, nftsList }: ITableContent) {
  return (
    <div className="w-full pt-5">
      {daosList ? (
        <>
          <div className="flex justify-between w-full">
            <div className="text-white font-bold text-2xl">
              DAOs
              <span className="text-slate-600 ml-2 text-lg">
                {daosList ? daosList.length : ""}
              </span>
            </div>
          </div>
          <div className="my-5">
            {daosList ? (
              daosList.length ? (
                daosList.map((value, index) => {
                  return <DaoCard key={index} {...value} />;
                })
              ) : (
                <CreateDao />
              )
            ) : null}
          </div>
          ?
        </>
      ) : null}

      {nftsList ? (
        nftsList.length ? (
          <>
            <div className="flex justify-between w-full">
              <div className="text-white font-bold text-2xl">
                NFTs
                <span className="text-slate-600 ml-2 text-lg">
                  {daosList ? daosList.length : null}
                </span>
              </div>
            </div>
            <div className="my-5">
              {nftsList.map((value, index) => {
                return <NftCard key={index} {...value} />;
              })}
            </div>
          </>
        ) : null
      ) : null}
    </div>
  );
}
