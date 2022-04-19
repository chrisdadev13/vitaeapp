import React from "react";

const SectionMap: React.FC<{currentSection: number}> = ({currentSection}) => {
  return(
    <div className="flex">
        <div className="flex items-center">
          <p className={`${1 < 2 ? "bg-blue-400" : "bg-gray-300 text-gray-700"} mr-1 rounded-full h-6 w-6 items-center justify-center flex text-white text-1xl`}>1</p>
          <p>Introduce tus datos</p>
        </div>
        <div className="flex items-center mx-4">
          <p className={`${currentSection == 2 || currentSection == 3 ? "bg-blue-400" : "bg-gray-300 text-gray-700"} mr-1 rounded-full h-6 w-6 items-center justify-center flex text-white text-1xl`}>2</p>
          <p className={`${currentSection == 2 || currentSection == 3 ? "text-black" : "text-gray-600"}`}>Selecciona una planilla</p>
        </div>
        <div className="flex items-center">
          <p className={`${currentSection == 3 ? "bg-blue-400" : "bg-gray-300 text-gray-700"} mr-1 rounded-full h-6 w-6 items-center justify-center flex text-white text-1xl`}>3</p>
          <p className={`${currentSection == 3 ? "text-black" : "text-gray-600"}`}>Descargar tu CV</p>
        </div>
    </div>
  )
}

export default SectionMap;
