import React from "react";
import "./index.css";
import "./App.css";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";


// pages
import Navbar  from "./components/navbar/navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ActivityDetail from "./pages/ActivityDetail";
import CreateReview from "./pages/CreateReview";
import Login from "./pages/Login";
import Signinp from "./components/loginp/signinp";
import Signupp from "./components/loginp/signupp";
// import PaymentSuccess from "./components/payment/paymentsuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      {/* Need to route the activity.id to the below path */}
      {/* <Route path={`/activitydetail/${activity.id}`} element={<ActivityDetail />} /> */}
      <Route path="activitydetail" element={<ActivityDetail />} />
      <Route path="createreview" element={<CreateReview />} />
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
