import React, { useState } from 'react'
import './navbar.css'
import logo from "../../img/blooklogoblack.png"
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { NavLink, Outlet } from "react-router-dom"


const Navbar = () => {
    const [active, setActive] = useState('navBar')

    const showNav = () => {
        setActive('navBar activeNavBar')
    }

    const hideNav = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="/" className="logo">
                        <img class="logo" src={logo} alt="Blook Logo" />
                    </a>
                </div>

                <div className={active} >
                    <ul className="navLists flex">
                        <li className="navItem">
                            <NavLink to="/" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Home</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/activities" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Activities</NavLink>
                        </li>
                        <li className="navItem">
                            <NavLink to="/profile" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Profile</NavLink>
                        </li>
                        <li className='navItem'>
                            <NavLink to="/login/signin" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Login/Sign up</NavLink>
                        </li>
                    </ul>

                    <div onClick={hideNav} className="closeNavBar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>


                <div onClick={showNav} className="toggleNavBar">
                    <TbGridDots className="icon" />
                </div>
            </header>

            <main>
                <Outlet />
            </main>
        </section>
    )
}

export default Navbar