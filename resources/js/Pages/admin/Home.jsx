import React from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";

import HeaderPage from "../split_admin/HeaderPage";
import Sidebar from "../split_admin/Sidebar";

// Asset
import img from '../../../img/dinein.png'

export default function HomePage(props) {
    document.title = props.title;
    <HeaderPage />

    return (
        <>
            <Sidebar />
            <h1>samlekom</h1>
        </>
    );
}