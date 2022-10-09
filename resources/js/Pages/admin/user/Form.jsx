import React, { useEffect, useState } from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const Form = ({id, click, btn}) => {
    const [ftype, setType] = useState('add')
    const [formData, setForm] = useState([])

    var link = 'user/add'

    const { data, setData, post, processing, errors, reset } = useForm({
        id: "",
        name: "",
        email: "",
        password: "",
    });

    const submitForm = (e) => {
        e.preventDefault()
        click()
        data.id = document.getElementById('userid').value;
        data.name = document.getElementById('input-name').value;
        data.email = document.getElementById('input-email').value;
        data.password = document.getElementById('input-pass').value;
        data.confirm = document.getElementById('input-confirm').value;

        var link = 'user/process';

        axios.post(link, data)
        .then(res => {
            if(res.data.success == 200) {
                Swal.fire({
                    title: 'Data Processed',
                    text: res.data.msg,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function() {
                    Inertia.visit('http://localhost:8000/admin/user')
                  })
            } else {
                Swal.fire({
                    title: 'Data Processed',
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

    useEffect(() => {
        if(id != '') {
            setType('edit')

            axios.get('user/edit'+'/' + id )
            .then(res => {
                setForm(res)
            })
            .catch(err => {
                alert(err)
            })
        }
    }, [])

    return <form method="POST" onSubmit={submitForm}>
        <input type="hidden" id="userid" name="userid" defaultValue={(formData.data != undefined ? formData.data.idUser : '')} />
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Name</label>
            <input type="text" className="form-control" id="input-name" name="input-name" defaultValue={(formData.data != undefined ? formData.data.nickname : '')} placeholder="Create a Name" />
        </div>
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Email</label>
            <input type="email" className="form-control" id="input-email" name="input-email" defaultValue={(formData.data != undefined ? formData.data.email : '')} placeholder="Create Email" />
        </div>
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Password</label>
            <input type="password" className="form-control" id="input-pass" name="input-pass" placeholder="Create Password" />
        </div>
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Confirm Password</label>
            <input type="password" className="form-control" id="input-confirm" name="input-confirm" placeholder="Confirm Password" />
        </div>
        <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-secondary me-2" onClick={click}>
                Cancel
            </button>
            <button className="btn btn-primary" type="submit" data-bs-target="#modalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">
                {btn}
            </button>
        </div>
    </form>
}

export default Form