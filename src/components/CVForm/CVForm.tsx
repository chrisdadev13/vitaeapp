import React, { 
  useState,
  useEffect,
  FormEventHandler, 
  MouseEventHandler 
} from "react";
import NameForm from "./NameForm";
import EmailForm from "./EmailForm";
import FullForm from "./FullForm";

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
  const [showEmailError, setErrorEmail] = useState<boolean>(false);

  const nextForm: Function = () => {
    if(cvData.userName == undefined
     && cvData.userLastName == undefined
     || cvData.userName.length == ""
     && cvData.userLastName.length == ""
    ){
      setError(showError => showError = true)
    }else if(currentForm == 1 && cvData.userName != undefined
     && cvData.userLastName != undefined
     || cvData.userName.length != ""
     && cvData.userLastName.length != ""
    ){
      setForm(currentForm + 1)
    }
  }

  const nextFormEmail: Function = () => {
    if(cvData.userEmail == undefined || cvData.userEmail.length == ""){
      setErrorEmail(showEmailError => showEmailError = true)
    }else if(cvData.userEmail != undefined || cvData.userEmail.length != "" && currentForm == 2){
      setForm(currentForm + 1)
    }
  }

  const goBack: Function = () => {
    if(currentForm == 2){
      setForm(currentForm - 1)
      setError(showError => showError = false)
      console.log(currentForm);
    }else if(currentForm != 2){
      console.log("nothing")
    }
  }

  return(
    <>
      {currentForm == 1 &&
        <NameForm cvData={cvData} handleChange={handleChange} formError={showError}/>
      }
      {currentForm == 2 &&
        <EmailForm cvData={cvData} handleChange={handleChange} formError={showEmailError}/>
      }
      {currentForm == 3 &&
        <FullForm cvData={cvData} handleChange={handleChange}/>
      }
      <div className="flex items-center justify-center mt-10">
        {currentForm == 2 &&
          <div>
            <button className="bg-blue-500 mr-6 hover:bg-blue-600 text-white p-2 transition rounded-sm" onClick={() => goBack()}>Retroceder</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 transition rounded-sm" onClick={() => nextFormEmail()}>Avanzar</button>
          </div>

        }
        {currentForm == 1 &&
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 transition rounded-sm" onClick={() => nextForm()}>Avanzar</button>
        }
      </div>
    </>
  )
}

export default CVForm;
