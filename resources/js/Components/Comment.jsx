import React from "react";
import { Link, Head, useState } from "@inertiajs/inertia-react";
import avatar from '../../img/avatar/avatar-1.png'

const Comment = ({dt}) => {
    console.log(dt)
    return (
        <div>
        {
            dt.map((data, i) => {
                return (
                    <div key={i} className="card border-0 rounded shadow mb-3 p-2">
                        <div className="row d-flex align-items-center">
                            <div className="col-2 p-2 d-flex justify-content-center">
                                <img className="rounded-circle" src={avatar} alt="" width="50" height="50"/>
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-6">
                                        <span className="fw-semibold">
                                            {data.names}
                                        </span>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-6">
                                        <span className="comment fw-normal text-dark">
                                            {data.comment}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
} 

export default Comment