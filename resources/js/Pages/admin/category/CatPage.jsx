import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Template from "@/Layouts/Template";
import HeaderPage from "../../split_admin/HeaderPage";
import Navbar from "../../split_admin/Navbar";
import Sidebar from "../../split_admin/Sidebar";
import axios from "axios";
import ModalCat from "@/Components/ModalCat";
import { Inertia } from "@inertiajs/inertia";

function CatPage(props) {
    document.title = props.title;

    const [isModal, setModal] = useState(false)
    const [dtModal, setdtModal] = useState([])

    const catModal = (id, title, link, icon, msg, btn, form, show, hide, type) => {
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

    useEffect(() => {
        $('#tbl-cat').sortable({
            placeholder: "bg-secondary bg-opacity-10",
            cursor: "grabbing",
            items: 'tr',
            start: function(e, ui) {
                ui.placeholder.height(ui.item.height());
                ui.placeholder.css('visibility', 'visible');
            },
            stop: function(e, ui) {
                setSeq();
            }
        })

        function setSeq() {
            var table = $('#tbl-cat').find('tr').each(function(i, e) {
                var id = $(this).find('td:eq(0)').attr('data-id');

                axios.post('cat/seq', {
                    seq: i,
                    id: id,
                })
                .then(res => {
                    Inertia.visit('http://localhost:8000/admin/category')
                })
                .catch(err => {
                    alert(err)
                })
            })
        }
    }, [])

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
                                            <h5 className="card-title fw-bold" style={{margin: "0px"}}>Data Category</h5>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-sm btn-primary" onClick={event => catModal('', 'Add Category', 'cat/add', 'bx bx-category bx-sm', '', 'Save', 'cat/form', 'true', 'false')}>
                                                <i className="bx bx-plus bx-sm"></i><span className="fw-semibold">Add Category</span>
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
                                            <tbody className="table-border-bottom-0" id="tbl-cat">
                                                {
                                                    props.column.map((data, i) => {
                                                        return <tr key={i}>
                                                            <td data-id={data.idCategory}>{++i}</td>
                                                            <td>{data.name}</td>
                                                            <td>
                                                                <button className="btn btn-sm btn-warning me-2" onClick={event => catModal(data.idCategory, 'Edit Category | ' + data.name, 'cat/update', 'bx bx-category bx-sm', '', 'Update', 'cat/form', 'true', 'false', 'edit')}><i className="bx bx-edit-alt bx-xs"></i></button>
                                                                <button className="btn btn-sm btn-danger" onClick={event => catModal(data.idCategory, 'Delete Category ' + data.name, 'cat/delete', 'bx bx-category bx-sm', 'Are you sure want to delete this data?', 'Yes, Delete It', '', 'true', 'false', 'delete')}><i className="bx bx-trash-alt bx-xs"></i></button>
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
                            <ModalCat
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

CatPage.layout = (page) => <Template children={page}/>
export default CatPage