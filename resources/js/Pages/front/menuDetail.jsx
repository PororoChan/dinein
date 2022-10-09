import React, { useEffect, useState } from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import Navbar from "../split_admin/Navbar";
import HeaderPage from "../split_admin/HeaderPage";
import img from '../../../../public/images/food.jpg';
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";
import Comment from "@/Components/Comment";

export default function menuDetail(props) {
    document.title = props.title;

    const [menu, setMenu] = useState([]);
    const [forms, setFormData] = useState([]);
    const [comment, setComment] = useState([])
    const { data, setData, post, processing, errors, reset } = useForm({
        comment: "",
        menu: "",
        rating: ""
    });

    const subCom = (e) => {
        e.preventDefault()

        data.comment = document.getElementById('comment-input').value;
        data.rating = forms.rating;
        data.userid = props.auth.user.idUser;
        data.menu = menu.menuid,

        axios.post('http://localhost:8000/menu/comment/add', data)
        .then(res => {
            if(res.data.success == 200) {
                Inertia.visit('http://localhost:8000/menu/d' + '/' + menu.menuid)
            } else {
                alert(res.data.msg)
            }
        })
        .catch(err => {
            alert(err)
        })
    }

    useEffect(() => {
        setMenu({
            count: props.count,
            category: props.column[0].catname,
            catid: props.column[0].idCategory,
            menuid: props.column[0].idMenu,
            name: props.column[0].name,
            description: props.column[0].description,
            price: props.column[0].price,
            ratingcount: props.column[0].ratingcount,
            ratingsum: props.column[0].ratingsum,
        })

        $('#star-rate').rateYo({
            normalFill: '#CFD0D1',
            ratedFill: '#FFAB00',
            numStars: 5,
            starWidth: '18px',
            fullStar: true,
            onSet: function(rate, ins) {
                setFormData({
                    rating: rate,
                })
            }
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
                                    <span className="fw-semibold fs-6 text-dark d-flex align-items-center justify-content-end">
                                        {(menu.ratingsum != null ? (menu.ratingsum / menu.ratingcount) : '0 ')} <i className="bx bxs-star bx-xs text-warning m-0 p-0"></i>
                                        &nbsp;{(menu.ratingcount != null ? '('+ menu.ratingcount +')' : '(0)')} 
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr style={{padding: '0px', margin: '0px', marginBottom: '18px'}}/>
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
                           <Comment dt={props.comment} />
                        </div>
                    </div>
                    <div className="comment-form p-2">
                        <form id="form-com" method="POST" onSubmit={subCom}>
                            <div className="mb-3">
                                <span className="fw-normal text-secondary">Comments Here</span>
                                <div className="card bg-white border-0 shadow p-2">
                                    <div id="star-rate" className="mb-2"></div>
                                    <div className="d-flex">
                                        <input type="text" name="comment-input" id="comment-input" placeholder="Your Comment" className="form-control" />
                                        <button className="btn btn-sm btn-primary" type="submit" id="btn-comment"><i className="bx bx-send bx-sm"></i></button>
                                    </div>
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