import React, { useState } from "react";
import Header from "./Header";
import CVForm from "./CVForm/CVForm";

const Main = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentForm, setCurrentForm] = useState<number>(1);

  return(
    <>
      <Header section={currentPage}/>
      <CVForm />
      <button onClick={() => setCurrentPage(currentPage + 1)}>Test button</button>
    </>
  )
}

export default Main;
