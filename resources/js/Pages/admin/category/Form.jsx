import React, { useEffect, useState } from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const Form = ({id, click, btn}) => {
    const [ftype, setType] = useState('add')
    const [formData, setForm] = useState([])

    var link = 'cat/add'

    const { data, setData, post, processing, errors, reset } = useForm({
        id: "",
        name: "",
    });

    const submitForm = (e) => {
        e.preventDefault()
        click()
        data.id = document.getElementById('catid').value;
        data.name = document.getElementById('cat-name').value;

        var link = 'cat/process';

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
                    Inertia.visit('http://localhost:8000/admin/category')
                  })
            } else {
                Swal.fire({
                    title: 'Data Processed',
                    text: res.data.msg,
                    icon: 'danger',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function() {
                    Inertia.visit('http://localhost:8000/admin/category')
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

            axios.get('cat/edit'+'/' + id )
            .then(res => {
                setForm(res)
            })
            .catch(err => {
                alert(err)
            })
        }
    }, [])

    return <form method="POST" onSubmit={submitForm}>
        <input type="hidden" id="catid" name="catid" defaultValue={(formData.data != undefined ? formData.data.idCategory : '')} />
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Category Name</label>
            <input type="text" className="form-control" id="cat-name" name="cat-name" defaultValue={(formData.data != undefined ? formData.data.name : '')} placeholder="Create a Name" />
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