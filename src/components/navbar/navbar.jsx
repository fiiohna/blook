import React, { useState } from 'react'
import './navbar.css'
import logo from "../../img/blooklogoblack.png"
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { NavLink, Outlet } from "react-router-dom"


const Navbar = () => {
    const id = localStorage.getItem('user_id')
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
                        <img className="logo" src={logo} alt="Blook Logo" />
                    </a>
                </div>

                <div className={active} >
                    <ul className="navLists flex">
                        <li className="navItem">
                            {id ?
                                (<NavLink to="/" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Home</NavLink>) : null
                            }
                        </li>
                        <li className="navItem">
                            {id ?
                                (<NavLink to="/profile" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Profile</NavLink>) : null
                            }   
                        </li>
                        <li className='navItem'>
                            {id ? null : 
                                (<NavLink to="/login/signin" className="navLink" style={({ isActive }) => { return { color: isActive ? 'white' : '', background: isActive ? '#E58F65' : "", padding: isActive ? "6px" : '', borderRadius: isActive ? "12px" : '', textDecoration: "none" } }}>Login/Sign up</NavLink>)
                            }
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