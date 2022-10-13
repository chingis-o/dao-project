import React from "react";
import DaoLists from "../components/DaoLists";
import Sidebar from "../components/Sidebar";

interface IProps {
  children: JSX.Element[] | JSX.Element;
}

export default function MainContainer({ children }: IProps) {
  return (
    <div className="container flex bg-[#1B202A] min-h-screen">
      <Sidebar />
      <DaoLists />
      <div className="py-[20px] px-20 w-9/12">{children}</div>
    </div>
  );
}
