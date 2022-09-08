import React from "react";

export default function Feed() {
  return (
    <div>
      <div className="bg-slate-700 rounded-lg py-3 pr-6 mt-4 flex items-center">
        <div className="mx-5">Logo</div>
        <div className="bg-slate-500 rounded-md py-2 px-5 w-full">
          Write a post
        </div>
      </div>
      <div className="bg-slate-700 rounded-lg p-5 mt-4 text-gray-200">
        <div className="flex justify-between mb-5">
          <div>Demo DAO</div>
          <div className="text-gray-500">14m</div>
        </div>
        <p className="my-1">Wow!</p>
        <p className="my-1">Demo DAO hit another milestone! The first 100 members joined it!</p>
      </div>
    </div>
  );
}
