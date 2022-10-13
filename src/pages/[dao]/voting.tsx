import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import MainContainer from "../../containers/MainContainer";
import voting from "../../mocks/voting";

export default function Voting() {
  const [proposals] = useState(voting.proposals);
  const [filterTags] = useState(voting.filteringTags);

  return (
    <>
      <Head>
        <title>Voting</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Navigation />
        <div className="text-white">
          <div className="flex justify-between items-center mb-5">
            <div className="font-bold text-xl">Proposals</div>
            <Link href="/createVoting">
              <button className="flex bg-accent rounded-lg p-3">
                <div className="after:content-[''] after:inset-0 after:bg-accent ml-2 rounded-lg">
                  Add proposals
                </div>
              </button>
            </Link>
          </div>

          <ul className="flex gap-5 text-sm font-medium">
            {filterTags.map((data, index) => {
              return (
                <li
                  key={index}
                  className={`px-[20px] py-[10px] ${
                    data.isActive ? "bg-accent" : "bg-secondary-content"
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
                className="bg-secondary rounded-lg p-5 mt-4 text-gray-200"
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
      </MainContainer>
    </>
  );
}
