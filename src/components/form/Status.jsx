import React from 'react'
import {FaUser, FaUserCog, FaUserCheck} from 'react-icons/fa';

const Status = ({values}) => {
  return (
        <div className="container items-center mx-auto px-6 flex lg:max-w-xl pt-8">
            <div
                className={`border-gray-400 ${
                values.step === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                } p-6 text-center cursor-pointer mx-6 rounded-full`}
            >
                <FaUser/>
            </div>
            <hr className={`w-48 h-1 mx-auto my-4 ${values.step === 2 ? "bg-blue-500" : "bg-gray-100"} border-0 rounded-full md:my-10 dark:bg-gray-700`}></hr>
            <div
                className={` ${
                values.step === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
                } p-6 text-center cursor-pointer mx-6 rounded-full`}
            >
                <FaUserCog/>
            </div>
            <hr className={`w-48 h-1 mx-auto my-4 ${values.step === 3 ? "bg-blue-500" : "bg-gray-100"}  border-0 rounded-full md:my-10 dark:bg-gray-700`}></hr>
            <div
                className={` ${
                values.step === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
                } p-6 text-center cursor-pointer mx-6 rounded-full`}
            >
                <FaUserCheck/>
            </div>
        </div>
  )
}

export default Status