import React, { FormEventHandler } from "react";

type Object = {
  [key: string]: any
}

interface iProps {
  cvData: Object;
  handleChange: FormEventHandler;
  formError: Boolean;
}

const EmailForm = ({cvData, handleChange, formError}: iProps) => {
  return(
    <div className="mt-10">
      <div id="title" className="flex justify-center flex-col items-center">
        <h2 className="text-blue-500 font-semibold text-5xl">Añade tu información de contacto</h2>
        <p className="mt-4 text-gray-800">vitaeapp aun no puede verificar si la información proporcionada es correcta :/</p>
      </div>
      <div id="form" className="flex flex-col items-center ">
        <div className="mt-8">
          <p className={`text-1xl text-gray-600 ${formError == true ? "text-red-400 transition duration-500" : ""}`}>Email:</p>
          <input 
            type="text" 
            className={`bg-gray-100 w-96 h-10 rounded-md ${formError == true ? "border-b-2 border-red-400 placeholder-red-400 transition duration-500 placeholder:transition placeholder:duration-1000" : "placeholder-transparent"}`}
            placeholder="Este campo es obligatorio, ingrese su correo electronico"
            name={"userEmail"}
            value={cvData.userEmail}
            onChange={handleChange}
            />
        </div>
      </div>
    </div>
  )
}

export default EmailForm;
