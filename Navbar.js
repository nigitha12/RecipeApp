import React from "react";
import './Navbar.css';
import { Link,useLocation } from "react-router-dom";
import {useState} from 'react'
import Sidebar from './Sidebar';

export default function Navbar(){
    const [showSidebar,setShowSidebar] = useState(false)
    const location = useLocation()
    const links=[
        {
            name:"Home",
            path:"/",
        },
        {
            name:"Recipes",
            path:"/recipes",
        },
        {
            name:"Vegetarian",
            path:"/vegetarian",
        },
        {
            name:"Non-Vegetarian",
            path:"/nonvegetarian",    
        },
        {
            name:"About",
            path:"/about",    
        },
        {
            name:"Contact",
            path:"/contact"
        },
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }
    return(
        <>
        <div className="navbar container">
            <Link to="/" className="logo">C<span>OO</span>KPAD</Link>
            <div className="nav-links">
                { links.map(link => (
                    <Link  className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                )) }
            </div>
            <div onClick={() => setShowSidebar(true)} className= {showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    )
}