import Swal from 'sweetalert2'

interface Props {
    title: string
    icon: 'success' | 'warning' | 'error' | 'info' | 'question'
}

export const Toast = ( { title, icon }:Props ) => {
    Swal.fire({
        icon: icon,
        position: 'top-end',
        title: title,
        showConfirmButton: false,
        toast: true,
        timer: 1500,
        timerProgressBar: true
    })
}
