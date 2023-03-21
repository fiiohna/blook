import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Home from "./pages/Home"
import Activities from "./pages/Activities"

// layouts
import RootLayout from "./layouts/RootLayout";
import LoginLayout from "./layouts/LoginLayout";
import Signin from "./pages/login/Signin";
import Signup from "./pages/login/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="activities" element={<Activities />} />
      <Route path="login" element={<LoginLayout />}>
        <Route path="signin" element={<Signin />}/>
        <Route path="signup" element={<Signup />}/>
      </Route>
      {/* Profilepage */}
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
