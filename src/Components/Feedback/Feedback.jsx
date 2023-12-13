import { useEffect, useState } from "react";
import useAxios from "../../Hook/useAxios";
import FeedBackCard from "./FeedBackCard";
import Container from "../../utils/Container";
import Marquee from "react-fast-marquee";

const Feedback = () => {
  const axios = useAxios();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("feedback").then((res) => {
      setFeedbacks(res.data);
    });
  }, [axios]);

  return (
    <Container>
      <Marquee pauseOnHover = {true} speed={30}>
        <div className="flex  ">
          {feedbacks?.map((feedback) => (
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
