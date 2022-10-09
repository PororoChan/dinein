import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Form from "@/Pages/admin/user/Form";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const modStyle = {
    display: 'block',
    backgroundColor: 'rgba(67, 89, 113, 0.5)'
}

const Modal = ({id, link, icon, title, msg, btn, form, show, hide, type}) => {
    const [isToast, setIsToast] = useState(false)
    const [toastM, setToast] = useState([])
    
    const dtDelete = (ids) => {
        hide()
        axios.delete('user/delete' + '/' + ids)
        .then(res => {
            if(res.data.success == 200) {
                Swal.fire({
                    title: 'Deleted Data',
                    text: res.data.msg,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function() {
                    Inertia.visit('http://localhost:8000/admin/user')
                  })
            } else {
                Swal.fire({
                    title: 'Deleted Data',
                    text: res.data.msg,
                    icon: 'danger',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function() {
                    Inertia.visit('http://localhost:8000/admin/user')
                  })
            }
        })
        .catch(err => {
            alert(err)
        })
    }

    return <div className={'modal fade ' + (show == true ? 'show' : '')} id="modalToggle" style={modStyle} tabIndex="-1" aria-modal="true" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <input type="hidden" id="links" value={(link != '' ? link : '')}/>
                        <input type="hidden" id="id" value={(id != '' ? id : '')}/>
                        <div className="modal-header">
                            <i className={icon + ' me-2'}></i><h5 className="fw-bold fs-6 modal-title" id="modalToggleLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={hide} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {(type != 'delete' ? <Form id={id} click={hide} btn={btn} type={type}/> : '')}
                            {(msg != '' ? msg : '')}
                        </div>
                        <div className={'modal-footer ' + (type != 'delete' ? 'd-none' : '')}>
                            <button className="btn btn-secondary me-2">No, Keep It</button>
                            <button className="btn btn-danger me-2" onClick={event => dtDelete(id)}>{btn}</button>
                        </div>
                    </div>
                </div>
            </div>
}

export default Modal