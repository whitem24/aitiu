import React from 'react'

const Controls = ({values}) => {
  return (
        <div className={(values.step>1 ? "justify-between " : "float-right ") + "flex mt-3"}>
                {values.step > 1 && (
                    <button
                    className="mt-8 bg-gray-300 px-6 py-1.5 rounded-full-lg text-gray-700 hover:bg-gray-400"
                    onClick={values.handleBack}
                    >
                    Atrás
                    </button>
                )}
                {values.step < 3 && (
                    <button
                    className="mt-8 bg-blue-500 px-6 py-1.5 rounded-full-lg text-white hover:bg-blue-700"
                    onClick={values.handleNext}
                    >
                    Siguiente
                    </button>
                )}
                {values.step === 3 && (
                    <button type="button"
                    className="mt-8 bg-blue-500 px-6 py-1.5 rounded-full-lg text-white hover:bg-blue-700"
                    onClick={values.handleSubmit}
                    >
                    Enviar
                    </button>
                )}
        </div>
  )
}

export default Controls