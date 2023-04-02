export const StepValidation = (data, step) => {
    let resStep1 = {};
    let resStep2 = {};
    let resStep3 = {};
    if (step===1) {
        if(!data.firstName){
			resStep1.firstName = 'El nombre es obligatorio';
		}
        if(!data.lastName){
			resStep1.lastName = 'El apellido es obligatorio';
		}
        //Validaciones de email
        if(!data.email){
			resStep1.email = 'El correo electrónico es obligatorio';
		}
        if(!EmailValidation(data.email)){
			resStep1.emailValid = 'El formato del correo electrónico no es válido, por favor verifique';
		}
        //Validaciones de email

        //Validaciones de teléfono
        if(!data.phone){
			resStep1.phone = 'El teléfono es obligatorio';
		}
        if(!PhoneValidation(data.phone)){
			resStep1.phoneValid = 'El formato del teléfono no es válido, por favor verifique';
		}
        //Validaciones de teléfono

    }
    if (step===2) {
        if(!data.curp){
			resStep2.curp = 'El curp es obligatorio';
		}
        if(!data.rfc){
			resStep2.rfc = 'El rfc es obligatorio';
		}
        if(!data.birthdate){
			resStep2.birthdate = 'La fecha de nacimiento es obligatoria';
		}
        
    }
    if (step===3) {
        if(!data.document){
			resStep3.document = 'El documento es obligatorio';
		}
        if(!data.numId){
			resStep3.numId = 'El número de documento es obligatorio';
		}
        if(!data.cDate){
			resStep3.cDate = 'La fecha de venciomiento del documento es obligatoria';
		}
    }
    return { resStep1, resStep2, resStep3 }
    
}

export const FinishValidation = (data) => {
  return Object.values(data).every(item => item !== '');
}

export const EmailValidation = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}

export const PhoneValidation = (phone) => {
    return /^\+?([0-9]{1,2})\)?[ ]?([0-9]{7,12})$/.test(phone);
}

