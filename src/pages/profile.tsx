import React from "react";
import MainContainer from "../containers/MainContainer";
import Header from "../components/Header";
import TableContent from "../containers/TableContent";

export default function profile() {
  return (
    <MainContainer>
      <Header />
      <TableContent />
    </MainContainer>
  );
}
