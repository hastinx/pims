import React from 'react'
import Swal from 'sweetalert2'

export const PopErrorNotif = (props) => {
    return (
        Swal.fire({
            title: 'Oops!',
            text: props.message,
            icon: 'error',
            confirmButtonText: 'OK'
        })
    )
}

export const PopSuccessNotif = () => {

}
