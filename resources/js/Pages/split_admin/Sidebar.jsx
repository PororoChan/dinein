import Template from "@/Layouts/Template";
import { Inertia } from "@inertiajs/inertia";
import img from '../../../img/dinein.png'

const { Component } = require("react");

const navlink = (e, url) => {
    e.preventDefault();
    Inertia.visit(url)
}

const logout = () => {
    window.location.href = 'logout'
}

class Sidebar extends Component {
    render() {
        return (
            <aside
                id="layout-menu"
                className="layout-menu menu-vertical menu bg-menu-theme"
            >
                <div className="app-brand demo">
                    <a href="#" className="app-brand-link">
                        <span className="app-brand-logo demo">
                            <img src={img} alt=""/>
                        </span>
                        <span className="app-brand-text demo menu-text fw-bolder ms-2">
                            DineIn
                        </span>
                    </a>
                    <a
                        href={undefined}
                        className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                    >
                        <i className="bx bx-chevron-left bx-sm align-middle" />
                    </a>
                </div>
                <div className="menu-inner-shadow" />
                <ul className="menu-inner py-1">
                    <li className="menu-item active">
                        <a href="#" onClick={() => navlink(event, 'http://localhost:8000/admin/home')} className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle" />
                            <div data-i18n="Analytics">Dashboard</div>
                        </a>
                    </li>
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">Master</span>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={() => navlink(event, 'http://localhost:8000/admin/menu')} className="menu-link">
                            <i className="menu-icon tf-icons bx bx-food-menu" />
                            <div data-i18n="Analytics">Menu</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={() => navlink(event, 'http://localhost:8000/admin/tag')} className="menu-link">
                            <i className="menu-icon tf-icons bx bx-purchase-tag" />
                            <div data-i18n="Analytics">Tag</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={() => navlink(event, 'http://localhost:8000/admin/tags')} className="menu-link">
                            <i className="menu-icon tf-icons bx bx-food-tag" />
                            <div data-i18n="Analytics">Menu Tag</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={() => navlink(event, 'http://localhost:8000/admin/category')} className="menu-link">
                            <i className="menu-icon tf-icons bx bx-category-alt" />
                            <div data-i18n="Analytics">Category</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={() => navlink(event, 'http://localhost:8000/admin/user')} className="menu-link">
                            <i className="menu-icon tf-icons bx bx-user-plus" />
                            <div data-i18n="Analytics">Users</div>
                        </a>
                    </li>
                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">Log Out</span>
                    </li>
                    <li className="menu-item">
                        <a
                            href="#"
                            onClick={logout}
                            target="_blank"
                            className="menu-link bg-primary text-white"
                        >
                            <i className="menu-icon tf-icons bx bx-power-off" />
                            <div data-i18n="Documentation">Log Out</div>
                        </a>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default Sidebar