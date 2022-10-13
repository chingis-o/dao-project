import React from "react";
import PlusCircle from "../icons/PlusCircle";

export default function CreateDao() {
  return (
    <div className=" mt-2 bg-bg-secondary p-6 rounded-lg">
      <div className="text-[#767F91]">You don`t have any DAOs yet</div>
      <button className="mt-3 flex items-center">
        <div className="w-10 h-10">
          <PlusCircle />
        </div>
        <div className="ml-5">
          <div className="text-white font-semibold text-start">Create DAO</div>
          <div className="text-[#767F91]">
            To grow your community in minutes
          </div>
        </div>
      </button>
    </div>
  );
}
