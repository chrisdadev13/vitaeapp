import React, { FormEventHandler } from "react";
import NameForm from "./NameForm";

type Object = {
  [key: string]: any
}

interface iProps {
  cvData: Object;
  handleChange: FormEventHandler;
}

const CVForm = ({cvData, handleChange}: iProps) => {
  return(
    <div>
      <NameForm cvData={cvData} handleChange={handleChange}/>
    </div>
  )
}

export default CVForm;
