import React from 'react'

const Verification = ({values}) => {
  return (
        <div>
            <p className="mb-4 text-blue-500 text-center">Verificación</p>
            <div className="mb-4">
            <label for="document">Seleccione el documento</label>
            <input
                type="file"
                id="document"
                name="document"
                className="w-full border p-2 border-gray-300 focus:border-blue-500"
                placeholder="Suba el documento"
                accept="image/png,application/pdf"
                onChange={values.handleChange}
            />
            <p className="text-slate-500 text-sm italic">Solo se permiten archivos PNG y PDF</p>
            {values.errors.document && <p className="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.document}</p>}
            </div>
            <div className="mb-4">
            <input
                type="text"
                name="numId"
                className="w-full border p-2 border-gray-300 focus:border-blue-500"
                placeholder="Número de identificación"
                value={values.data.numId}
                onChange={values.handleChange}
            />
            <p className="text-slate-500 text-sm italic">(ej: 324-TDF-4DT)</p>
            {values.errors.numId && <p className="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.numId}</p>}
            </div>
            <div className="mb-4">
            <input
                type="text"
                name="cDate"
                className="w-full border p-2 border-gray-300 focus:border-blue-500"
                placeholder="Fecha de vencimiento"
                onFocus={(e) => e.target.type = "date"} 
                value={values.data.cDate}
                onChange={values.handleChange}
            />
            {values.errors.cDate && <p className="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.cDate}</p>}
            </div>
        </div>
  )
}

export default Verification