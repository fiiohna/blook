import { NavLink, Outlet } from "react-router-dom"
import React from "react";
import logo from "../img/blooklogoblack.png"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <img  className="logo" src={logo} alt="Blook Logo" />
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    );
}
