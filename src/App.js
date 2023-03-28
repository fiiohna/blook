import React from "react";
import "./index.css";
import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// pages
// import Home from "./pages/Home"
// import About from "./pages/About"

import Footer from './components/footer/footer'
import Main from './components/main/main'
import Homep from './components/homep/homep'
import Navbar from "./components/navbar/navbar";

// layouts
import RootLayout from "./layouts/RootLayout";
import LoginLayout from "./layouts/LoginLayout";
import Signin from "./pages/login/Signin";
import Signup from "./pages/login/Signup";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="login" element={<LoginLayout />}>
//         <Route path="signin" element={<Signin />}/>
//         <Route path="signup" element={<Signup />}/>
//       </Route>
//     </Route>
//   )
// )

const App = () => {
  return (
    <>
    {/* // <RouterProvider router={router} /> */}
    <Navbar/>
    <Homep/>
    <Main/>
    <Footer/>
    </>

  )
}

export default App;
