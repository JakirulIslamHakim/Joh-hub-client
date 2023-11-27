import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Components/AddJob";
import HomePage from "../Layout/HomePage";
import MainLayout from "../Layout/MainLayout";
import FindJob from "../Pages/FindJob/FindJob";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "findJOb",
        element: <FindJob></FindJob>,
      },
      {
        path: "addJob",
        element: <AddJob></AddJob>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
