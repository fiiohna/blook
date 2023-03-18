import { NavLink, Outlet } from "react-router-dom";

export default function LoginLayout() {
    return (
        <div className="login-layout">
            <h2>Sign in/up</h2>
            <p>Login testing</p>

            <nav>
                <NavLink to="signin">Sign in</NavLink> 
                <NavLink to="signup">Sign up</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}