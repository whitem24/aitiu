import Swal from 'sweetalert2'

export const SuccessSendAlert = () => {
    return Swal.mixin({
        icon: 'success',
        confirmButtonText: 'Ok',
        showConfirmButton: true,
        buttonsStyling: false,
    })
}

export const InfoAlert = () => {
    return Swal.mixin({
        icon: 'info',
        showConfirmButton: true,
        buttonsStyling: false,
    })
}
