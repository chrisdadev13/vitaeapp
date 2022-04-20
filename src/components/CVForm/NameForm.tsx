import React, { FormEventHandler } from "react";

type Object = {
  [key: string]: any
}

interface iProps {
  cvData: Object;
  handleChange: FormEventHandler;
  formError: Boolean;
}

const NameForm = ({cvData, handleChange, formError}: iProps) => {
  return(
    <div className="mt-10">
      <div id="title" className="flex justify-center flex-col items-center">
        <h2 className="text-blue-500 font-semibold text-5xl">Añade tu nombre</h2>
        <p className="mt-4 text-gray-800">Añade la inicial de tu segundo nombre, justo al lado del primero!</p>
      </div>
      <div id="form" className="flex flex-col items-center ">
        <div className="mt-8 animate-fadeIn-1">
          <p className={`text-1xl text-gray-600 ${formError == true ? "text-red-400 transition duration-500" : ""}`}>Nombre:</p>
          <input 
            type="text" 
            className={`bg-gray-100 w-96 h-10 rounded-md ${formError == true ? "border-b-2 border-red-400 placeholder-red-400 transition duration-500 placeholder:transition placeholder:duration-1000" : "placeholder-transparent"}`}
            placeholder="Este campo es obligatorio, ingrese su nombre"
            name={"userName"}
            value={cvData.userName}
            onChange={handleChange}
            />
          <p className={`text-1xl text-gray-600 mt-8 ${formError == true ? "text-red-400 transition duration-500" : ""}`}>Apellido:</p>
          <input 
            type="text" 
            className={`bg-gray-100 w-96 h-10 rounded-md ${formError == true ? "border-b-2 border-red-400 placeholder-red-400 transition duration-500 placeholder:transition placeholder:duration-1000" : "placeholder-transparent"}`}
            placeholder="Este campo es obligatorio"
            name={"userLastName"}
            value={cvData.userLastName}
            onChange={handleChange}
            />
        </div>
      </div>
    </div>
  )
}

export default NameForm;
