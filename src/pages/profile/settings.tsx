import Head from "next/head";
import React from "react";
import MainContainer from "../../containers/MainContainer";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Profile Edit</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <div className="flex justify-center">
          <div className="w-[560px] text-white">
            <div className="text-2xl font-bold">Edit profile</div>
            <div className="mt-5 flex gap-3 font-semibold">
              <div className="w-32">
                Profile image
                <div className="mt-2 rounded-full w-20 h-20 bg-[rgb(255,26,91)]"></div>
              </div>
              <div className="w-full">
                Cover image
                <div className="mt-2 rounded-md h-20 bg-[rgb(26,224,255)]"></div>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">Display name</label>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Enter your display name"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">Public URL</label>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Enter your display name"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">Bio</label>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Enter your bio"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">Email (for notifications only)</label>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">Wallet address</label>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Enter your display name"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="">Links</label>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Personal site link"
                />
              </div>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Twitter"
                />
              </div>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Instagram"
                />
              </div>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Telegram"
                />
              </div>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Discord"
                />
              </div>
            </div>
            <div className="mt-7 mb-7">
              <input
                type="button"
                value="Save"
                className="h-11 px-[30px] grid place-items-center bg-[#F07300] text-white text-base font-bold rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
}
