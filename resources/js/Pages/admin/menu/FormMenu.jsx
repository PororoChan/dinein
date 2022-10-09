import React, { useEffect, useState } from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const FormMenu = ({id, click, btn, type, column}) => {
    const [ftype, setType] = useState('add')
    const [formData, setForm] = useState([])

    var link = 'menu/add'

    const { data, setData, post, processing, errors, reset } = useForm({
        id: "",
        category: "",
        name: "",
        descriptions: "",
        price: "",
    });

    const submitForm = (e) => {
        e.preventDefault()
        click()
        data.id = document.getElementById('menuid').value;
        data.category = document.getElementById('categ').value;
        data.name = document.getElementById('menu-name').value;
        data.descriptions = document.getElementById('desc').value;
        data.price = document.getElementById('price').value;

        var link = 'menu/process';

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
                    Inertia.visit('http://localhost:8000/admin/menu')
                  })
            } else {
                Swal.fire({
                    title: 'Data Processed',
                    text: res.data.msg,
                    icon: 'danger',
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(function() {
                    Inertia.visit('http://localhost:8000/admin/menu')
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

            axios.get('menu/edit'+'/' + id )
            .then(res => {
                setForm(res)
            })
            .catch(err => {
                alert(err)
            })
        }
    }, [])

    return <form method="POST" onSubmit={submitForm}>
        <input type="hidden" id="menuid" name="menuid" defaultValue={(formData.data != undefined ? formData.data.idMenu : '')} />
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Category</label>
            <select name="categ" id="categ" className="form-control">
                <option defaultValue> -- Select Category -- </option>
            {
                column.map((data, i) => {
                    return <option key={i} value={data.idCategory}>{data.name}</option>
                })
            }
            </select>
        </div>
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Menu Name</label>
            <input type="text" className="form-control" id="menu-name" name="menu-name" defaultValue={(formData.data != undefined ? formData.data.name : '')} placeholder="Create a Menu Name" />
        </div>
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Menu Description</label>
            <textarea name="desc" id="desc" style={{minHeight: "75px"}} className="form-control" placeholder="Create Menu Description" defaultValue={(formData.data != undefined ? formData.data.description : '')}></textarea>
        </div>
        <div className="mb-3">
            <label className="fw-semibold text-secondary fs-6">Price</label>
            <input type="text" name="price" id="price" className="form-control" placeholder="Enter a Price" defaultValue={(formData.data != undefined ? formData.data.price : '')}/>
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

export default FormMenu