import React, { FormEventHandler } from "react";

type Object = {
  [key: string]: any
}

interface Props {
  cvData: Object;
  handleChange: FormEventHandler;
}

const CVProfile = ({cvData, handleChange}: Props) => {
  return(
    <div className="flex items-center flex-col mt-12">
      <div className="flex flex-col items-center mb-3">
        <h1 className="text-blue-400 text-1xl font-semibold">Perfil personal</h1>
        <p className="text-gray-500">Añade datos</p>
      </div>
      <div className="w-7/12 lg:w-5/12 sm:w-3/5 md:w-3/5">
        <textarea 
          className="bg-gray-100 w-full h-40 resize-none"
          placeholder="p.ej. Profesor con 9 años de experiencia y una trayectoria de..."
          value={cvData.userProfile}
          name="userProfile"
          onChange={handleChange}
          spellCheck="false"
          />
      </div>
    </div>
  )
}

export default CVProfile;
