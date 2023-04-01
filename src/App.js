import React from "react";
import "./index.css";
import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";


// pages
import Navbar  from "./components/navbar/navbar";
import Home from "./pages/Home";
import Activities from "./pages/Activities"
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signinp from "./components/loginp/signinp";
import Signupp from "./components/loginp/signupp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="activities" element={<Activities />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />}>
        <Route path="signin" element={<Signinp />}/>
        <Route path="signup" element={<Signupp />}/>
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default App;
