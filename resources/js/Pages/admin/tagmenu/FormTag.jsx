import React, { useEffect, useState } from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const FormTag = ({id, click, btn, type, column, tag}) => {
    const [ftype, setType] = useState('add')
    const [formData, setForm] = useState([])

    var link = 'tags/add'

    const { data, setData, post, processing, errors, reset } = useForm({
        id: "",
        name: "",
    });

    const submitForm = (e) => {
        e.preventDefault()
        click()
        data.id = document.getElementById('tagid').value;
        data.tag = parseInt(document.getElementById('tags').value);
        data.menu = parseInt(document.getElementById('menus').value);

        var link = 'tags/process';

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
                    Inertia.visit('http://localhost:8000/admin/tags')
                  })
            } else {
                Swal.fire({
                    title: 'Data Processed',
                    text: res.data.msg,
                    icon: 'danger',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function() {
                    Inertia.visit('http://localhost:8000/admin/tags')
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

            axios.get('tags/edit'+'/' + id )
            .then(res => {
                setForm(res)
            })
            .catch(err => {
                alert(err)
            })
        }
    }, [])

    return <form method="POST" onSubmit={submitForm}>
        <input type="hidden" id="tagid" name="tagid" defaultValue={(formData.data != undefined ? formData.data.idTag : '')} />
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Tag Name</label>
            <select name="tags" id="tags" className="form-control">
            <option defaultValue> -- Select Tag -- </option>
                {
                    tag.map((data, i) => {
                        return <option key={i} value={data.idTag}>{data.name}</option>
                    })
                }
            </select>
        </div>
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Menu</label>
            <select name="menus" id="menus" className="form-control">
            <option defaultValue> -- Select Menu -- </option>
                {
                    column.map((data, i) => {
                        return <option key={i} value={data.idMenu}>{data.name}</option>
                    })
                }
            </select>
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

export default FormTag