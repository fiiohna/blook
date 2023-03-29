import React, { useState } from "react";
import { NavLink, Outlet, Routes, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aos from "aos";
import "aos/dist/aos.css";

export default function Signinp() {
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [dataInput, setDataInput] = useState("");
    const submitThis = () => {
        const info = { email: email, passw: passw };
        setDataInput([info]);
    };

    return (
        <section className="signin">
                <Row className="signinContent">

                <h1>Sign in</h1>
                <form action="" onSubmit={submitThis}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="passw">Password</label>
                        <input
                            type="text"
                            name="passw"
                            id="passw"
                            value={passw}
                            onChange={(e) => setPassw(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>

            </Row>
        </section>
    )
}