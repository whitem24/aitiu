import React from 'react'
import Additional from '../components/form/Additional';
import Basic from '../components/form/Basic';
import Verification from '../components/form/Verification';
import Controls from '../components/form/Controls';
import Status from '../components/form/Status';

const SignUpContent = ({values}) => {
  return (
    <>      
            <p className="text-2xl text-bold text-center text-white pt-4 bg-blue-500 pt-2 pb-3">Registro de usuario</p>
            <Status values={values}/>
            <div className="flex items-center justify-center">
                
                <div className="bg-white p-3 w-full lg:max-w-xl">
                    {values.step === 1 ? <Basic values={values}/> : (values.step === 2 ? <Additional values={values}/> : <Verification values={values}/>)}
                    <Controls values={values}/>
                </div>
            </div>
            </>
  )
}

export default SignUpContent