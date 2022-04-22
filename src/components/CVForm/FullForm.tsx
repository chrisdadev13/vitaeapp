import React, { FormEventHandler } from "react";
import PersonalData from "./PersonalData";
import CVProfile from "./CVProfile";
import WorkExp from "./WorkExp";

type Object = {
  [key: string]: any
}

interface Props {
  cvData: Object;
  handleChange: FormEventHandler;
}

const FullForm = ({cvData, handleChange}: Props) => {
  return(
    <>
      <PersonalData cvData={cvData} handleChange={handleChange}/>
      <CVProfile cvData={cvData} handleChange={handleChange}/>
      <WorkExp />
    </>
  )
}

export default FullForm;
