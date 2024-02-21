// import { useEffect, useState } from "react";
import useAxios from "../../Hook/useAxios";
import useAuth from "../../Hook/useAuth";
import Container from "../../utils/Container";
import MyBidTableRow from "../../Components/MyBidTableRow/MyBidTableRow";
import { useQuery } from "@tanstack/react-query";
import { FidgetSpinner } from "react-loader-spinner";
import { Helmet } from "react-helmet";

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

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10 md:mt-40">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      </div>
    );
  }
  if (myBidsJobs?.data?.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-semibold text-center mt-14 md:mt-52">
          You have not bid on any jobs
          <Helmet>
            <title>Job Hub | My Bids</title>
          </Helmet>
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-xl text-red-700 mt-14 font-semibold">
        {error.message}
      </p>
    );
  }

  return (
    <Container>
      <Helmet>
        <title>Job Hub | My Bids  </title>
      </Helmet>
      <div className="font-bold">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-bold">
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
