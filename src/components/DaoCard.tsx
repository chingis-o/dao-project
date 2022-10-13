import React from "react";
import Users from "../icons/Users";

interface IDaoCards {
  name?: string;
  role?: string;
  description?: string;
  members?: number;
}

export default function DaoCard({
  name,
  role,
  description,
  members,
}: IDaoCards) {
  return (
    <div className="bg-secondary w-60 p-4 rounded-lg flex flex-col">
      <div className="flex justify-between">
        <div className="bg-[#767F91] text-sm h-10 w-10 rounded-full"></div>
        <div className="text-[#36BED9] text-sm bg-[rgba(54,190,217,0.15)] px-2 py-1 rounded-sm h-fit">
          {role}
        </div>
      </div>
      <div className="text-white text-lg font-bold mt-4">{name}</div>
      <div className="text-[#A2A8B4] mt-1 text-md truncate">{description}</div>
      <div className="text-[#767F91] mt-2 flex items-center">
        <span className="w-4 h-4 mr-2">
          <Users />
        </span>
        {members} <span className="ml-1">members</span>
      </div>
    </div>
  );
}
