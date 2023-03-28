import React, {useState} from 'react'
import './navbar.css'
import logo from "../../img/blooklogoblack.png"
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';


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
                    <a href="/#" className="logo flex">
                        {/* <img className="icon" src={ logo } alt="blook logo"></img> */}
                        blook
                    </a>
                </div>

                <div className={active} >
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="/#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="/#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="/#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="/#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="/#" className="navLink">Home</a>
                        </li>

                        <button className='btn'>
                            <a href="/#">Sign Up</a>
                        </button>
                    </ul>

                    <div onClick={hideNav} className="closeNavBar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
                

                <div onClick={showNav} className="toggleNavBar">
                     <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar