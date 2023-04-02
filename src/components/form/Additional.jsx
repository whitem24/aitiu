import React from 'react'

const Additional = ({values}) => {
  return (
    <div>
        <p className="mb-8 text-blue-500 text-center">Datos adicionales</p>
        <div className="mb-4">
        <input
            type="text"
            name="curp"
            className="w-full border p-2 border-gray-300 focus:border-blue-500"
            placeholder="Curp"
            value={values.data.curp}
            onChange={values.handleChange}
        />
        {values.errors.curp && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.curp}</p>}
        </div>
        <div className="mb-4">
        <input
            type="text"
            name="rfc"
            className="w-full border p-2 border-gray-300 focus:border-blue-500"
            placeholder="RFC"
            value={values.data.rfc}
            onChange={values.handleChange}
        />
        {values.errors.rfc && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.rfc}</p>}
        </div>
        <div className="mb-4">
        <input
            type="text"
            name="birthdate"
            className="w-full border p-2 border-gray-300 focus:border-blue-500"
            placeholder="Fecha de nacimiento"
            onFocus={(e) => e.target.type = "date"} 
            value={values.data.birthdate}
            onChange={values.handleChange}
        />
        {values.errors.birthdate && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.birthdate}</p>}
        </div>
    </div>
  )
}

export default Additional