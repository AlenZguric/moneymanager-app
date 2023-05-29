import React, {useState} from "react";  
import { FaEnvelopeOpen, FaHome, FaInfo, FaBars} from "react-icons/fa";
import {BsPersonCircle} from "react-icons/bs";
import {SiCashapp} from "react-icons/si";



import { NavLink } from "react-router-dom";
import "../sideBar/sideBarStyle.css";

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Početna",
            icon: <FaHome/>
        },
        {
            path: "/money",
            name: "Novac",
            icon: <SiCashapp/>
        },
        {
            path: "/profile",
            name: "Profil",
            icon: <BsPersonCircle/>
        },
        {
            path: "/kontaktiraj_me",
            name: "Kontaktiraj me",
            icon: <FaEnvelopeOpen/>
        },
        {
            path: "/o_nama",
            name: "O nama",
            icon: <FaInfo/>
        },
    ]
    return(
        <div className="container_sidebar">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                <div className="top_section">
                <div style={{ display: isOpen ? 'block' : 'none'  }} className="logo"> <SiCashapp /> </div>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}}className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink> 
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
};

export default Sidebar;