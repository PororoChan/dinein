import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Template({children}) {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                {children}
            </div>
        </div>
    )
}
