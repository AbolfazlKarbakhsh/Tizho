import React from 'react'
import Swal from 'sweetalert2';
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success p-2 mx-2',
        cancelButton: 'btn btn-danger p-2 mx-2',
    },
    buttonsStyling: false,
})

const SwAlert2 = (props) => {




        const Confirms = (message) => {
            return (
                swalWithBootstrapButtons.fire({
                    title: '  آیا مطمعن هستید؟ ',
                    text: message,
                    icon: 'warning',
                    showCancelButton: true,
                    showCloseButton: true,
                    confirmButtonText: ' بله ',
                    cancelButtonText: 'لغو عملیات ',
                    reverseButtons: false
                })
            )
        }

        const Alert = (message , icon , headerMessage) => {
            return (
                swalWithBootstrapButtons.fire(
                    headerMessage,
                    message,
                    icon
                )
            )
        }

        return (
         <>
         {props.children(Confirms , Alert )}
         </>
        )
    


}

export default (SwAlert2); 