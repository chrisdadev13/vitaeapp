import React, { FormEventHandler, useState } from "react";
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

type Object = {
  [key: string]: any
}

interface Props {
  cvData: Object;
  handleChange: FormEventHandler;
}

const upArrow = () => {
  return <MdOutlineKeyboardArrowUp />
} 

const downArrow = () => {
  return <MdOutlineKeyboardArrowDown />
}

const PersonalData = ({cvData, handleChange}: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const activateData: Function = () => {
    setActive(active => active = !active)
  }

  return(
    <div className="lg:m-auto mt-10 w-2/5 h-2/3 p-4 mx-64">
      <div id="title-container">
        <h3 className="animate-fadeIn-3 text-blue-400 flex text-1xl lg:text-2xl font-semibold">Datos personales</h3>
      </div>
        <div className="flex mt-5">
          <div className="mr-5">
            <p className="text-1xl text-gray-600">Title</p>
            <input 
              type="text" 
              className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm"
              placeholder="p. ej. Profesor, Contador, etc"
              value={cvData.userTitle}
              name="userTitle"
              onChange={handleChange}
              />
          </div>
          <div>
            <p className="text-1xl text-gray-600">LinkedIn</p>
            <input 
              type="text" 
              className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm" 
              />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="mr-5">
            <p className="text-1xl text-gray-600">Nombre</p>
            <input 
              type="text" 
              className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm"
              value={cvData.userName}
              name="userName"
              onChange={handleChange}
              />
          </div>
          <div>
            <p className="text-1xl text-gray-600">Apellido</p>
            <input 
              type="text" 
              className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm" 
              value={cvData.userLastName}
              name="userLastName"
              onChange={handleChange}
              />
          </div>
        </div>
        <div className="flex mt-2">
          <div className="mr-5">
            <p className="text-1xl text-gray-600">Email</p>
            <input 
              type="text" 
              className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm"
              value={cvData.userEmail}
              name="userEmail"
              onChange={handleChange}
              />
          </div>
          <div>
            <p className="text-1xl text-gray-600">Teléfono</p>
            <input 
              type="text" 
              className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm" 
              />
          </div>
        </div>
        {active == true &&
        <div>
          <div className="flex mt-2 animate-fadeIn-1">
            <div className="mr-5">
              <p className="text-1xl text-gray-600">Pais</p>
              <input 
                type="text" 
                className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm"
                />
            </div>
            <div>
              <p className="text-1xl text-gray-600">Ciudad</p>
              <input 
                type="text" 
                className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm" 
                />
            </div>
          </div>
          <div className="flex mt-2 animate-fadeIn-1">
            <div className="mr-5">
              <p className="text-1xl text-gray-600">Dirección</p>
              <input 
                type="text" 
                className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm"
                />
            </div>
            <div>
              <p className="text-1xl text-gray-600">Código postal</p>
              <input 
                type="text" 
                className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm" 
                />
            </div>
          </div>
          <div className="flex mt-2 animate-fadeIn-1">
            <div className="mr-5">
              <p className="text-1xl text-gray-600">Nacionalidad</p>
              <input 
                type="text" 
                className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm"
                />
            </div>
            <div>
              <p className="text-1xl text-gray-600">Fecha de nacimiento</p>
              <input 
                placeholder="p. ej. 14 de Marzo de 1879"
                type="text" 
                className="bg-gray-100 h-10 lg:w-96 w-64 rounded-sm" 
                />
            </div>
          </div>
        </div>
        }
        <p 
        className="flex items-center text-1xl text-blue-400 cursor-pointer mt-4"
        onClick={() => activateData()}
      >Mostrar detalles adicionales<span className="animate-bounce">{active == false ? downArrow() : upArrow()}</span></p>
    </div>
  )
}

export default PersonalData;
