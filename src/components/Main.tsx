import React, { ChangeEvent, FormEventHandler, useState } from "react";
import Header from "./Header";
import CVForm from "./CVForm/CVForm";

const Main: React.FC = () => {

  type Object = {
    [key: string]: any 
  }

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentForm, setCurrentForm] = useState<number>(1);

  const [cv, setCv] = useState<Object>({
    userName: "",
    userLastName: "",
    userEmail: "",
  });

  const handleData: FormEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setCv({
      ...cv,
      [name]: value
    })
  }

  return(
    <>
      <Header section={currentPage} />
      <CVForm cvData={cv} handleChange={handleData} />
      <button onClick={() => console.log(cv)}>Test button</button>
    </>
  )
}

export default Main;
