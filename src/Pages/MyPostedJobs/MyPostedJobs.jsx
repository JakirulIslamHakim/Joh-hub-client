import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";
import Container from "../../utils/Container";
import MyPostCard from "../../Components/Card/MyPostCard";

const MyPostedJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);
  console.log(myPosts);

  useEffect(() => {
    axios.get(`employer/showPostedJob/?email=${user?.email}`).then((res) => {
      setMyPosts(res.data);
    });
  }, [axios, user]);

  return (
    <Container>
      <div className="">
        <h3 className="text-2xl  md:text-4xl font-bold text-center">
          Your posted jobs
        </h3>
        <div className="grid md:grid-cols-2 gap-16 mt-10">
          {myPosts.length > 0 ? (
            myPosts.map((post) => (
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
