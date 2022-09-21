import React, { useState } from "react";
import CreateDao from "../components/CreateDao";
import DaoCard from "../components/DaoCard";
import NftCard from "../components/NftCard";

export default function TableContent() {
  const [daosList] = useState([
    {
      name: "Verification DAO",
      role: "admin",
      description: "This DAO grants you special NFT as a Proof of Verification",
      members: 2,
    },
  ]);
  const [nftsList] = useState([
    { role: "Сreator", collectionName: "DAO Heroes", daoName: "My first DAO" },
  ]);
  return (
    <div className="w-full pt-5">
      <div className="flex justify-between w-full">
        <div className="text-white font-bold text-2xl">
          DAOs
          <span className="text-slate-600 ml-2 text-lg">{daosList.length}</span>
        </div>
      </div>
      <div className="my-5">
        {daosList.length ? (
          daosList.map((value, index) => {
            return <DaoCard key={index} {...value} />;
          })
        ) : (
          <CreateDao />
        )}
      </div>
      {nftsList.length ? (
        <>
          <div className="flex justify-between w-full">
            <div className="text-white font-bold text-2xl">
              NFTs
              <span className="text-slate-600 ml-2 text-lg">
                {daosList.length}
              </span>
            </div>
          </div>
          <div className="my-5">
            {nftsList.map((value, index) => {
              return <NftCard key={index} {...value} />;
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
