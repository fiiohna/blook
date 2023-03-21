import { NavLink, Outlet } from "react-router-dom";

export default function LoginLayout() {
    return (
        <div className="login-layout">
            <nav>
                <NavLink to="signin">Sign in</NavLink> 
                <NavLink to="signup">Sign up</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}