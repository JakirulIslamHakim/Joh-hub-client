// import { useEffect, useState } from "react";
import useAxios from "../../Hook/useAxios";
import useAuth from "../../Hook/useAuth";
import Container from "../../utils/Container";
import MyBidTableRow from "../../Components/MyBidTableRow/MyBidTableRow";
import { useQuery } from "@tanstack/react-query";

const MyBidsJob = () => {
  const axios = useAxios();
  const { user } = useAuth();
  // const [myBidsJobs, setMyBidsJobs] = useState([]);
  // console.log(Object.keys(myBidsJobs).join(", "));

  // useEffect(() => {
  //   axios.get(`buyer/myBids/?email=${user?.email}`).then((res) => {
  //     setMyBidsJobs(res.data);
  //   });
  // }, [axios, user]);

  const {
    data: myBidsJobs,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["myBidsJobs"],
    queryFn: () => {
      return axios.get(`buyer/myBids/?email=${user?.email}`);
    },
  });

  if (isLoading) return;
  if (myBidsJobs?.data?.length === 0) {
    return (
      <h2 className="text-xl font-semibold text-center mt-14 md:mt-52">
        You have not bid on any jobs
      </h2>
    );
  }

  return (
    <Container>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Deadline</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <>
                {myBidsJobs?.data?.map((job, index) => (
                  <MyBidTableRow
                    key={job._id}
                    job={job}
                    index={index}
                  ></MyBidTableRow>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default MyBidsJob;
