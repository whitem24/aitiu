import React from 'react'

const Basic = ({values}) => {
  return (  
    <div>
        <p className="mb-8 text-blue-500 text-center">Datos Personales</p>
        <div className="mb-4">
        <input
            type="text"
            name="firstName"
            className="w-full border p-2 border-gray-300 focus:border-blue-500"
            placeholder="Nombre"
            value={values.data.firstName}
            onChange={values.handleChange}
        />
        {values.errors.firstName && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.firstName}</p>}
        </div>
        <div className="mb-4">
        <input
            type="text"
            name="lastName"
            className="w-full border p-2 border-gray-300 focus:border-blue-500"
            placeholder="Apellidos"
            value={values.data.lastName}
            onChange={values.handleChange}
        />
        {values.errors.lastName && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.lastName}</p>}
        </div>
        <div className="mb-4">
        <input
            type="email"
            name="email"
            className="w-full border p-2 border-gray-300 focus:border-blue-500"
            placeholder="Correo electrónico"
            value={values.data.email}
            onChange={values.handleChange}
        />
        {values.errors.email && <p class="animate-pulse bg-red-500 text-white text-sm text-center mb-1">{values.errors.email}</p>}
        {!values.errors.email && values.errors.emailValid && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.emailValid}</p>}
        </div>
        <div className="mb-4">
        <input
            type="text"
            name="phone"
            className="w-full border border-gray-400 p-2 border-gray-300"
            placeholder="Teléfono"
            value={values.data.phone}
            onChange={values.handleChange}
            maxlength={16}
        />
        <p className="text-slate-500 text-sm italic">(ej: +32 1234567890)</p>
        {values.errors.phone && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.phone}</p>}
        {!values.errors.phone && values.errors.phoneValid && <p class="animate-pulse bg-red-500 text-white text-sm text-center">{values.errors.phoneValid}</p>}
        </div>
    </div>
  )
}

export default Basic