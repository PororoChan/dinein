import React from "react";
import { Link, Head, useForm } from "@inertiajs/inertia-react";

import HeaderPage from "../split_admin/HeaderPage";
import Sidebar from "../split_admin/Sidebar";
import Navbar from "../split_admin/Navbar";
import Template from "@/Layouts/Template";

function HomePage(props) {
    document.title = props.title;
    
    return (
        <>
            <HeaderPage />
            <Sidebar />
            <div className="layout-page">
                <Navbar />   
            </div>
        </>
    );
}

HomePage.layout = (page) => <Template children={page}/>
export default HomePage