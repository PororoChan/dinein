import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Template from "@/Layouts/Template";
import HeaderPage from "../../split_admin/HeaderPage";
import Navbar from "../../split_admin/Navbar";
import Sidebar from "../../split_admin/Sidebar";
import axios from "axios";
import ModalTagMenu from "@/Components/ModalTagMenu";

function TagPage(props) {
    document.title = props.title;

    const [isModal, setModal] = useState(false)
    const [dtModal, setdtModal] = useState([])

    const tagModal = (id, title, link, icon, msg, btn, form, show, hide, type, column, tag) => {
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
            column: props.menu,
            tag: props.tags,
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
                                            <h5 className="card-title fw-bold" style={{margin: "0px"}}>Data Menu Tag</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-sm btn-primary" onClick={event => tagModal('', 'Add Menu Tag', 'tags/add', 'bx bx-tag bx-sm', '', 'Save', 'tags/form', 'true', 'false')}>
                                                <i className="bx bx-plus bx-sm"></i><span className="fw-semibold">Add Menu</span>
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
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-border-bottom-0">
                                                {
                                                    props.column.map((data, i) => {
                                                        return <tr key={i}>
                                                            <td>{++i}</td>
                                                            <td>{data.name}</td>
                                                            <td>
                                                                <button className="btn btn-sm btn-warning me-2" onClick={event => tagModal(data.idTag, 'Edit Menu Tag | ' + data.name, 'tags/update', 'bx bx-food-tag bx-sm', '', 'Update', 'tags/form', 'true', 'false', 'edit')}><i className="bx bx-edit-alt bx-xs"></i></button>
                                                                <button className="btn btn-sm btn-danger" onClick={event => tagModal(data.idTag, 'Delete Menu Tag ' + data.name, 'tags/delete', 'bx bx-food-tag bx-sm', 'Are you sure want to delete this data?', 'Yes, Delete It', '', 'true', 'false', 'delete')}><i className="bx bx-trash-alt bx-xs"></i></button>
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
                            <ModalTagMenu 
                                id={dtModal.id}
                                link={dtModal.link} 
                                icon={dtModal.icon} 
                                title={dtModal.title} 
                                msg={dtModal.msg} 
                                form={dtModal.form}
                                btn={dtModal.btn} 
                                show={true} 
                                column={dtModal.column}
                                tag={dtModal.tag}
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

TagPage.layout = (page) => <Template children={page}/>
export default TagPage