import React, { useState } from 'react';
import { Link, Head, useForm } from '@inertiajs/inertia-react';

// Import Template View
import HeaderPage from '../split_admin/HeaderPage';
import axios from 'axios';
import img from '../../../img/dinein.png'
import { Inertia } from '@inertiajs/inertia';

export default function LoginPage(props) {
    document.title = props.title;
    <HeaderPage />

    const [isLog, setLog] = useState(null);
    const [logMsg, setMsg] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        data.email = document.getElementById('email').value;
        data.password = document.getElementById('password').value;

        axios.post(props.urls, data)
        .then(res => {
            if (res.data.success == 200) {
                setLog(true)
                Inertia.visit('http://localhost:8000/admin/home')
            } else {    
                setLog(false)
            }
            setMsg(res.data.msg)
            setTimeout(() => {
                setLog(null) 
                e.target.reset();
            }, 1500);
        })
        .catch(err => {
            setMsg(err)
        })
    }

    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    {
                        isLog != null ? (
                            <div className={isLog == true ? 'alert alert-success d-flex align-items-end' : 'alert alert-danger d-flex align-items-end'} role="alert"><box-icon name={isLog == true ? 'user-check' : 'user-x'} type="solid" color={isLog == true ? '#79DF43' : '#FF5234'} ></box-icon><span className='mx-2'>{logMsg}</span></div>
                        ) :
                            ''
                    }
                    <div className="card">
                        <div className="card-body">
                            <div className="app-brand justify-content-center">
                                <a href="#" className="app-brand-link gap-2">
                                    <span className="app-brand-logo demo">
                                        <img src={img} alt="" />
                                    </span>
                                    <span className="app-brand-text demo text-body fw-bolder">DineIn</span>
                                </a>
                            </div>
                            <form id="formAuthentication" className="mb-3" onSubmit={submit} method="POST">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" autoFocus spellCheck="false" />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>
                                    <div className="input-group input-group-merge">
                                        <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer"></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}