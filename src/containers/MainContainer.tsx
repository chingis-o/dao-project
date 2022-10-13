import React from "react";
import DaoLists from "../components/DaoLists";
import Sidebar from "../components/Sidebar";

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

export default function MainContainer({ children }: IProps) {
  return (
    <div className="container flex min-h-screen bg-gradient-to-br from-[#23272c] to-[#13171c]">
      <Sidebar />
      <DaoLists />
      <div className="py-[20px] px-20 w-9/12">{children}</div>
    </div>
  );
}
