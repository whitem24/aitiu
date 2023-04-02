import React, {useState, useEffect} from 'react';
import { StepValidation } from '../utils/validation';
import { SuccessSendAlert, InfoAlert } from '../utils/alerts';
import SignUpContent from './SignUpContent';

const SignUp = () => {

    useEffect(() => {
        const registerAlert = InfoAlert();
        registerAlert.fire({
            title: 'Notificación',
            confirmButtonText: 'Continuar al registro',
            text: 'Para poder visualizar la información de esta página es necesario terminar el registro.',
            customClass: {
                confirmButton: 'mt-8 bg-blue-500 px-6 py-1.5 rounded-full-lg text-white hover:bg-blue-700',
            },
            allowOutsideClick: false
        }).then(() => {
            setConfirm(true);
        })
    }, []);

    const [step, setStep] = useState(1);
    const [confirm, setConfirm] = useState(false);
    const [data, setData] = useState({
        firstName : '',
        email : '',
        lastName : '',
        phone : '',
        curp : '',
        rfc : '',
        birthdate : '',
        document : '',
        numId : '',
        cDate : ''
    });
    const [errors, setErrors] = useState({
        firstName : '',
        email : '',
        emailValid : '',
        lastName : '',
        phone : '',
        phoneValid : '',
        curp : '',
        rfc : '',
        birthdate : '',
        document : '',
        numId : '',
        cDate : ''
    });

    const handleNext = (e) => {
        const {resStep1, resStep2} = StepValidation(data, step);
        if(Object.values(resStep1).some(item => item !== undefined)){
            console.log(resStep1.firstName, resStep1.lastName, resStep1.email, resStep1.phone);
            setErrors({...errors, firstName:resStep1.firstName, lastName:resStep1.lastName, email:resStep1.email, emailValid:resStep1.emailValid, phone:resStep1.phone, phoneValid : resStep1.phoneValid});
			return;
        }
        if(Object.values(resStep2).some(item => item !== undefined)){
            console.log(resStep2.curp, resStep2.rfc, resStep2.birthdate);
            setErrors({...errors, curp:resStep2.curp, rfc:resStep2.rfc, birthdate:resStep2.birthdate});
			return;
        }
        setErrors({});
        setStep(step + 1);
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'file' ? e.target.files[0] : value;
        setData({...data, [name]: val});
		console.log(val);
    }

    const handleSubmit = () => {
        const {resStep3} = StepValidation(data, step);
        if(Object.values(resStep3).some(item => item !== undefined)){
            console.log(resStep3.document, resStep3.numId, resStep3.cDate);
            setErrors({...errors, document:resStep3.document, numId:resStep3.numId, cDate:resStep3.cDate});
			return;
        }
        const succesAlert = SuccessSendAlert();
        setData({});
        setErrors({});
        succesAlert.fire({
            title: 'Listo!',
            html: '<p>Estimado(a) '+data.firstName+' '+data.lastName+' sus datos han sido enviados satisfactoriamente.<p/><br/>',
            customClass: {
                confirmButton: 'mt-8 bg-blue-500 px-6 py-1.5 rounded-full-lg text-white hover:bg-blue-700',
            }
        }).then(() => {
            setStep(1); 
        })
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const values = {
        handleChange,
        data,
        errors,
        handleBack,
        handleNext,
        handleSubmit,
        step
    }

    if(confirm)
        return <SignUpContent values={values}/>
    
    
};

export default SignUp