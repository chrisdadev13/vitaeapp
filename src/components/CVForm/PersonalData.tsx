import React from "react";

const PersonalData = () => {
  return(
    <div className="w-1/2 m-auto bg-red-100 mt-10">
      <div>
        <h1 className="text-1xl font-semibold">Datos personales</h1>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-1">
        <div>
          <p>Puesto laboral</p>
          <input type="text" className="bg-gray-100 w-96 h-10 rounded-md"/>
        </div>
        <div>
          <p>otro dato</p>
          <input type="text" className="bg-gray-100 w-96 h-10 rounded-md" />
        </div>
      </div>
    </div>
  )
}

export default PersonalData;
