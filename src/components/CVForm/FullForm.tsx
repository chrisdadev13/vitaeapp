import React, { FormEventHandler } from "react";
import PersonalData from "./PersonalData";

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
    </>
  )
}

export default FullForm;
