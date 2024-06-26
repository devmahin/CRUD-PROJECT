import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Home from "../Page/Home/Home";
import Jobdetails from "../Page/JobDetails/Jobdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element : <Register></Register>
      },
      {
        path : "/job/:id",
        element : <Jobdetails></Jobdetails>
      }
    ],
  },
]);

export default router;
