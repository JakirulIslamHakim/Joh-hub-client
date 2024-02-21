import { useEffect, useState } from "react";
import useAxios from "../../Hook/useAxios";
import FeedBackCard from "./FeedBackCard";
import Container from "../../utils/Container";
import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import FeedBackSkeleton from "../Skeleton/FeedBackSkeleton";

const Feedback = () => {
  const axios = useAxios();
  // const [feedbacks, setFeedbacks] = useState([]);

  // useEffect(() => {
  //   axios.get("feedback").then((res) => {
  //     setFeedbacks(res.data);
  //   });
  // }, [axios]);

  const {
    data: feedbacks,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => {
      return axios.get("feedback");
    },
  });

  if (isLoading) {
    return (
      <Container>
        <div className="flex gap-2 overflow-hidden">
          <FeedBackSkeleton></FeedBackSkeleton>
          <FeedBackSkeleton></FeedBackSkeleton>
          <div className="hidden md:flex gap-2">
            <FeedBackSkeleton></FeedBackSkeleton>
            <FeedBackSkeleton></FeedBackSkeleton>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mt-10 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center ">
          What client say about us !
        </h2>
        <h4 className=" md:text-xl font-semibold text-center mt-2 ">Some client messages are displayed  </h4>
      </div>

      <Marquee pauseOnHover={true} speed={30}>
        <div className="flex  ">
          {feedbacks?.data?.map((feedback) => (
            <FeedBackCard
              key={feedback?._id}
              feedback={feedback}
            ></FeedBackCard>
          ))}
        </div>
      </Marquee>
    </Container>
  );
};

export default Feedback;
