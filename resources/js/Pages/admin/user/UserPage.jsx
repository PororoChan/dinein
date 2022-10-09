import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Template from "@/Layouts/Template";
import HeaderPage from "../../split_admin/HeaderPage";
import Navbar from "../../split_admin/Navbar";
import Sidebar from "../../split_admin/Sidebar";
import Modal from "@/Components/Modal";
import axios from "axios";

function UserPage(props) {
    document.title = props.title;

    const [isModal, setModal] = useState(false)
    const [dtModal, setdtModal] = useState([])

    const userModal = (id, title, link, icon, msg, btn, form, show, hide, type) => {
        setdtModal({
            id: id, 
            title: title, 
            link: link, 
            icon: icon, 
            msg: msg, 
            btn: btn, 
            form: form, 
            show: show, 
            hide: hide,
            type: type,
        })

        return setModal(true)
    }

    return (
        <>
            <HeaderPage />
            <Sidebar />
            <div className="layout-page">
                <Navbar />
                <div className="content-wrapper">
                    <div className="container-xxl flex-grow-1 container-p-y">
                        <div className="row">
                            <div className="col-12">
                                <div className="card p-4">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center">
                                            <h5 className="card-title fw-bold" style={{margin: "0px"}}>Data User</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-sm btn-primary" onClick={event => userModal('', 'Add User', 'user/add', 'bx bx-user-plus bx-sm', '', 'Save', 'user/form', 'true', 'false')}>
                                                <i className="bx bx-plus bx-sm"></i><span className="fw-semibold">Add User</span>
                                            </button>
                                        </div>
                                    </div>
                                    <hr className="mt-2 pt-0" />
                                    <div className="table-responsive text-nowrap">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-border-bottom-0">
                                                {
                                                    props.column.map((data, i) => {
                                                        return <tr key={i}>
                                                            <td>{++i}</td>
                                                            <td>{data.nickname}</td>
                                                            <td>{data.email}</td>
                                                            <td>
                                                                <button className="btn btn-sm btn-warning me-2" onClick={event => userModal(data.idUser, 'Edit User | ' + data.nickname, 'user/update', 'bx bx-user bx-sm', '', 'Update', 'user/form', 'true', 'false', 'edit')}><i className="bx bx-edit-alt bx-xs"></i></button>
                                                                <button className="btn btn-sm btn-danger" onClick={event => userModal(data.idUser, 'Delete User ' + data.nickname, 'user/delete', 'bx bx-user bx-sm', 'Are you sure want to delete this data?', 'Yes, Delete It', '', 'true', 'false', 'delete')}><i className="bx bx-trash-alt bx-xs"></i></button>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            isModal == true ? 
                            <Modal 
                                id={dtModal.id}
                                link={dtModal.link} 
                                icon={dtModal.icon} 
                                title={dtModal.title} 
                                msg={dtModal.msg} 
                                form={dtModal.form}
                                btn={dtModal.btn} 
                                show={true} 
                                hide={() => setModal(false)} 
                                type={dtModal.type}
                                /> : ''
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

UserPage.layout = (page) => <Template children={page}/>
export default UserPage