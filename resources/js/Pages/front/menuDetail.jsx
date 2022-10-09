import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "../split_admin/Navbar";
import HeaderPage from "../split_admin/HeaderPage";
import img from '../../../../public/images/food.jpg';
import avatar from '../../../img/avatar/avatar-1.png'

export default function menuDetail(props) {
    document.title = props.title;

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setMenu({
            category: props.column[0].catname,
            catid: props.column[0].idCategory,
            menuid: props.column[0].idMenu,
            name: props.column[0].name,
            description: props.column[0].description,
            price: props.column[0].price,
            ratingcount: props.column[0].ratingcount,
            ratingsum: props.column[0].ratingsum,
        })
    }, [])

    return (
        <>
            <HeaderPage />
            <Navbar />
            <div className="container p-5 py-5">
            <div className="row bg-white shadow rounded p-3">
                <div className="col-6">
                    <div className="p-2">
                        <img className="rounded shadow-lg" src={img} alt="" style={{width: '100%', height: '450px', objectFit: 'cover'}}/>
                    </div>
                    <div className="p-2">
                        <div className="row">
                            <div className="col-6">
                                <div className="name-menu">
                                    <span className="fw-bold fs-4 text-dark">
                                        {menu.name}
                                    </span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="menu-rating">
                                    <span className="fw-semibold fs-6 text-dark d-flex align-items-center">
                                        Penilaian Rata-rata: {(menu.ratingsum != null ? menu.ratingsum : '0 ')} <i className="bx bxs-star bx-xs text-warning m-0 p-0"></i>
                                        &nbsp; dari {(menu.ratingcount != null ? menu.ratingCount : '0')} pengguna
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-6">
                                <div className="desc-title">
                                    <span className="fw-bold fs-3 text-dark">
                                        Deskripsi
                                    </span>
                                </div>
                                <div className="desc">
                                    <span className="fw-normal fs-6 text-dark">
                                        <p>
                                            {menu.description}
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="wrap-comment" style={{height: '550px', maxHeight: '550px'}}>
                        <div className="p-3">
                            <span className="fw-bold fs-5 text-dark">
                                Comment Section
                            </span>
                        </div>
                        <hr style={{padding: '0px', margin: '0px'}}/>
                        <div className="p-3" style={{overflow: 'auto', maxHeight: '480px'}}>
                            <div className="card border-0 rounded shadow mb-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 p-2 d-flex justify-content-center">
                                        <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fw-semibold">Asep Sanjaya</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="comment fw-normal text-dark">
                                                    ini sangat enak sekali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 rounded shadow mb-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 p-2 d-flex justify-content-center">
                                        <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fw-semibold">Asep Sanjaya</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="comment fw-normal text-dark">
                                                    ini sangat enak sekali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 rounded shadow mb-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 p-2 d-flex justify-content-center">
                                        <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fw-semibold">Asep Sanjaya</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="comment fw-normal text-dark">
                                                    ini sangat enak sekali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 rounded shadow mb-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 p-2 d-flex justify-content-center">
                                        <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fw-semibold">Asep Sanjaya</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="comment fw-normal text-dark">
                                                    ini sangat enak sekali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 rounded shadow mb-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 p-2 d-flex justify-content-center">
                                        <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fw-semibold">Asep Sanjaya</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="comment fw-normal text-dark">
                                                    ini sangat enak sekali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 rounded shadow mb-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 p-2 d-flex justify-content-center">
                                        <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fw-semibold">Asep Sanjaya</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="comment fw-normal text-dark">
                                                    ini sangat enak sekali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 rounded shadow mb-3">
                                <div className="row d-flex align-items-center">
                                    <div className="col-2 p-2 d-flex justify-content-center">
                                        <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                                    </div>
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="fw-semibold">Asep Sanjaya</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="comment fw-normal text-dark">
                                                    ini sangat enak sekali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-form p-2">
                        <form id="form-com" method="POST">
                            <div className="mb-3">
                                <span className="fw-normal text-secondary">Comments Here</span>
                                <div className="d-flex">
                                    <input type="text" name="comment-input" id="comment-input" placeholder="Your Comment" className="form-control" />
                                    <button className="btn btn-sm btn-primary" id="btn-comment"><i className="bx bx-send bx-sm"></i></button>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}