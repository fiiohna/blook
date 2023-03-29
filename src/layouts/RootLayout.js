// NOT IN USE
import { NavLink, Outlet } from "react-router-dom"
import React from "react";
import logo from "../img/blooklogoblack.png"

export default function RootLayout() {
    return (
        <div class="root-layout">
            {/* <header>
                <nav>
                     */}
                    <div class="headerContainer">
                        <img  class="logo" src={logo} alt="Blook Logo" />
                        <div class="headerList">
                            <div class="headerListItem">
                                <NavLink to="/"  style={({isActive})=>{return {color: isActive? 'white': '', background:isActive? '#E58F65':"", padding:isActive? "6px": '', borderRadius:isActive? "12px": '', textDecoration:"none"}}}>Home</NavLink>
                            </div>
                            <div class="headerListItem">
                                <NavLink to="/activities" style={({isActive})=>{return {color: isActive? 'white': '', background:isActive? '#E58F65':"", padding:isActive? "6px": '', borderRadius:isActive? "12px": '', textDecoration:"none"}}}>Activities</NavLink>
                            </div>
                            <div class="headerListItem">
                                <NavLink to="/login" style={({isActive})=>{return {color: isActive? 'white': '', background:isActive? '#E58F65':"", padding:isActive? "6px": '', borderRadius:isActive? "12px": '', textDecoration:"none"}}}>Login/Sign up</NavLink>
                            </div>
                        </div>
                    </div>
                {/* </nav>
            </header> */}
            
            <main>
                <Outlet />
            </main>
        </div>
    );
}
