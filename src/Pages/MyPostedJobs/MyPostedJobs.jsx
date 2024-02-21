// import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";
import Container from "../../utils/Container";
import MyPostCard from "../../Components/Card/MyPostCard";
import { useQuery } from "@tanstack/react-query";
import MyPostSkeleton from "../../Components/Skeleton/MyPostSkeleton";
import { Helmet } from "react-helmet";

const MyPostedJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  // const [myPosts, setMyPosts] = useState([]);
  // console.log(myPosts);

  // useEffect(() => {
  //   axios.get(`employer/showPostedJob/?email=${user?.email}`).then((res) => {
  //     setMyPosts(res.data);
  //   });
  // }, [axios, user]);

  const {
    data: myPosts,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["myPosts"],
    queryFn: () => {
      return axios.get(`employer/showPostedJob/?email=${user?.email}`);
    },
  });
  if (isError) {
    return <p className="text-center text-xl text-red-700 mt-14 font-semibold">{error.message}</p>;
  }

  if (isLoading) {
    return (
      <Container>
        <div className="skeleton w-2/6 mx-auto h-10"></div>
        <div className="grid md:grid-cols-2 gap-16 mt-10">
          <MyPostSkeleton></MyPostSkeleton>
          <MyPostSkeleton></MyPostSkeleton>
          {/* <MyPostSkeleton></MyPostSkeleton>
          <MyPostSkeleton></MyPostSkeleton> */}
        </div>
      </Container>
    );
  }

  return (
    <Container>
        <Helmet>
        <title>Job Hub | My Posted Job</title>
      </Helmet>
      <div className="">
        <h3 className="text-2xl  md:text-4xl font-bold text-center">
          Your posted jobs
        </h3>
        <div className="grid md:grid-cols-2 gap-16 mt-10">
          {myPosts?.data?.length > 0 ? (
            myPosts?.data?.map((post) => (
              <MyPostCard key={post?._id} post={post}></MyPostCard>
            ))
          ) : (
            <p className="text-2xl md:text-4xl font-bold flex items-center justify-center mt-20">
              No posted jobs found.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MyPostedJobs;
