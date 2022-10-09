import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import img from '../../../public/images/food.jpg';
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const MenuShow = ({column}) => {

    const menuDetail = (id) => {
        window.location.href = 'menu/d' + '/' + id
    }

    return (
        <div className="container p-5">
            <div className="row">
            {
                column.map((data, i) => {
                    return <div key={i} className="col-3">
                        <div className="card border-0 shadow-sm" style={{maxHeight: 'max-content'}}>
                            <div className="row mb-3 p-3 pb-0">
                                <div className="col-6 text-start">
                                    <span className="fw-semibold fs-5 text-secondary"><span className="text-primary text-decoration-underline">D</span>ine<span className="text-primary text-decoration-underline">I</span>n Kitchen</span>
                                </div>
                                <div className="col-6 text-end">
                                    <a href="#">
                                        <i className="bx bx-star bx-sm text-warning"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="row m-0 rounded" style={{minHeight: '120px'}}>
                                <img src={img} alt="" style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}/>
                            </div>
                            <div className="row p-3 pt-2 pb-0">
                                <a href="#" className="p-2 px-3" onClick={() => menuDetail(data.idMenu)}>
                                    <span className="fw-semibold fs-5 text-secondary">{data.name}</span>
                                </a>
                            </div>
                            <div className="row p-3 pt-0">
                                <div className="col-12 p-3 pt-0 pb-0">
                                    <span className="fw-normal fs-7 text-primary">
                                        <span className="text-secondary fs-7">Kategori:</span> {data.catname}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}

export default MenuShow