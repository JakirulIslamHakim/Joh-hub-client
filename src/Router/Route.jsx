import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import HomePage from "../Layout/HomePage";
import MainLayout from "../Layout/MainLayout";
import FindJob from "../Pages/FindJob/FindJob";
import Error from "../Pages/Error/Error";
import PostAJob from "../Pages/PostAJob/PostAJob";
import JobDetail from "../Pages/JobDetail/JobDetail";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        element: <PostAJob></PostAJob>,
      },
      {
        path: "bidNow/:_id",
        element: <JobDetail></JobDetail>,
      },
      {
        path: "myPostedJobs",
        element: <MyPostedJobs></MyPostedJobs>,
      },
      {
        path: "myPostJob/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
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
