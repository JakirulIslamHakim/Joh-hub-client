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
import MyBidsJob from "../Pages/MyBidsJob/MyBidsJob";
import BidRequest from "../Pages/BidRequest/BidRequest";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <PostAJob></PostAJob>
          </PrivateRoute>
        ),
      },
      {
        path: "bidNow/:_id",
        element: (
          <PrivateRoute>
            <JobDetail></JobDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "myPostJob/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "myBidsJob",
        element: (
          <PrivateRoute>
            <MyBidsJob></MyBidsJob>
          </PrivateRoute>
        ),
      },
      {
        path: "bidRequest",
        element: (
          <PrivateRoute>
            <BidRequest></BidRequest>
          </PrivateRoute>
        ),
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
