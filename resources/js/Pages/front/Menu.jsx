import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import HeaderPage from "../split_admin/HeaderPage";
import Navbar from "../split_admin/Navbar";
import MenuShow from "@/Components/MenuShow";

export default function Menu(props) {
    document.title = props.title

    return (
        <>
            <HeaderPage/>
            <Navbar/>
            <MenuShow column={props.column}/>
        </>
    )
}