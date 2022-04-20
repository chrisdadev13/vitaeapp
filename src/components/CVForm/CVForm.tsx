import React, { 
  useState,
  useEffect,
  FormEventHandler, 
  MouseEventHandler 
} from "react";
import NameForm from "./NameForm";

type Object = {
  [key: string]: any
}

interface iProps {
  cvData: Object;
  handleChange: FormEventHandler;
}

const CVForm = ({cvData, handleChange}: iProps) => {
  const [currentForm, setForm] = useState<number>(1);
  const [showError, setError] = useState<boolean>(false);

  const nextForm: Function = () => {
    if(cvData.userName == undefined
     && cvData.userLastName == undefined
     || cvData.userName.length == ""
     && cvData.userLastName.length == ""
    ){
      setError(showError => showError = true)
    }else if(cvData.userName != undefined
     && cvData.userLastName != undefined
     || cvData.userName.length != ""
     && cvData.userLastName.length != ""
    ){
      setForm(currentForm + 1)
    }
  }

  return(
    <>
      {currentForm == 1 &&
        <NameForm cvData={cvData} handleChange={handleChange} formError={showError}/>
      }
      <div className="flex items-center justify-center mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 transition rounded-sm" onClick={() => nextForm()}>Avanzar</button>
      </div>
    </>
  )
}

export default CVForm;
