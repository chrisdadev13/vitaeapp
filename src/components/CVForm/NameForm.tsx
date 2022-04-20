import React, { FormEventHandler } from "react";

type Object = {
  [key: string]: any
}

interface iProps {
  cvData: Object;
  handleChange: FormEventHandler;
}

const NameForm= ({cvData, handleChange}: iProps) => {
  return(
    <div className="mt-10">
      <div id="title" className="flex justify-center flex-col items-center">
        <h2 className="text-blue-500 font-semibold text-5xl">Añade tu nombre</h2>
        <p className="mt-4 text-gray-800">Añade la inicial de tu segundo nombre, justo al lado del primero!</p>
      </div>
      <div id="form" className="flex flex-col items-center ">
        <div className="mt-8">
          <p className="text-1xl text-gray-600">Nombre:</p>
          <input 
            type="text" 
            className="bg-gray-100 w-96 h-10 rounded-md"
            name={"userName"}
            value={cvData.userName}
            onChange={handleChange}
            />
          <p className="text-1xl text-gray-600 mt-8">Apellido:</p>
          <input 
            type="text" 
            className="bg-gray-100 w-96 h-10 rounded-md"
            name={"userLastName"}
            onChange={handleChange}
            />
        </div>
      </div>
    </div>
  )
}

export default NameForm;
