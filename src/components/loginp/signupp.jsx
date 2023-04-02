import React, { useState } from "react";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import "./sign.css";

import aos from "aos";
import "aos/dist/aos.css";

export default function Signinp() {
    const [email, setEmail,] = useState("");
    const [passw, setPassw] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenum, setPhonenum] = useState("");
    const [address, setAddress] = useState("");
    const [billing, setBilling] = useState("");
    const [dataInput, setDataInput] = useState("");
    const submitThis = () => {
        const info = { email: email, first_name: firstname, last_name: lastname, address: address, billing_address: billing, phone: phonenum , passw: passw };
        setDataInput([info]);
    };

    return (
        <section className="signup">
            <div className="signupContent">
                <h1>Sign up</h1>
                <form action="" onSubmit={submitThis}>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <div>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <div>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <div>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phonenum">Phone Number</label>
                        <div>
                        <input
                            type="number"
                            name="phonenum"
                            id="phonenum"
                            value={phonenum}
                            onChange={(e) => setPhonenum(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <div>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="billing">Billing Address</label>
                        <div>
                        <input
                            type="text"
                            name="billing"
                            id="billing"
                            value={billing}
                            onChange={(e) => setBilling(e.target.value)}
                        />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="passw">Password</label>
                        <div>
                        <input
                            type="text"
                            name="passw"
                            id="passw"
                            value={passw}
                            onChange={(e) => setPassw(e.target.value)}
                        />
                        </div>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>

        </section>
    )
}