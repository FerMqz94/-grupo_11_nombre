import React from 'react';
import { Link } from 'react-router-dom';
import zinke from '../../assets/images/imagen-header.png'
import styles from '../../../public/css/Sidebar.module.css';
export const SideBar = function () {
    
    return (

<ul className={`navbar-nav sidebar sidebar-black accordion ${styles.fondo}`} id="accordionSidebar">
    { /* Sidebar */}

    {/* Sidebar - Brand */}
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
            <img className={`w-50 ${styles.logo}`} src= {zinke} alt="zinke" />
        </div>
    </a>

    {/* Divider */}
    <hr className="sidebar-divider my-0" />

    {/* Nav Item - Dashboard */}
    <li className={`nav-item active ${styles.item}`}>
        <a className={`nav-link ${styles.link}`} href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - ZINKE</span></a>
    </li>

    {/* Divider */}
    <hr className="sidebar-divider" />

    {/* Heading */}
    <div className={`sidebar-heading ${styles.link}`}>Actions</div>

    {/* Nav Item - Pages */}
    <li className={`nav-item ${styles.item}`}>
        <Link className={`nav-link collapsed ${styles.link}`} to="/productos">
            <i className="fas fa-rectangle-list"></i>
            <span>Productos</span>
        </Link>
    </li>

    {/* Nav Item - Charts */}
    <li className={`nav-item ${styles.item}`}>
        <Link className={`nav-link ${styles.link}`} to="/usuarios">
        <i className="fa-solid fa-user-tie"></i>
            <span>Usuarios</span></Link>
    </li>

    {/* Nav Item - Tables */}
    <li className={`nav-item ${styles.item}`}>
        <a className={`nav-link ${styles.link}`} to="/buscar">
            <i className="fas fa-fw fa-table"></i>
            <span> SEARCH</span></Link>
    </li>
    <li className={`nav-item ${styles.item}`}>
        <a className={`nav-link ${styles.link}`} href="/">
            <i className="fas fa-fw fa-table"></i>
            <span>Ventas</span></a>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider d-none d-md-block"/>
    {/* End of Sidebar */}
</ul>
    )}
export default SideBar;