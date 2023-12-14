// import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";
import Container from "../../utils/Container";
import BidRequestTable from "../../Components/BidRequestTable";
import { useQuery } from "@tanstack/react-query";
// import { data } from "autoprefixer";

const BidRequest = () => {
  const axios = useAxios();
  const { user } = useAuth();
  // const [bidRequest, setBidRequest] = useState([]);

  // useEffect(() => {
  //   axios.get(`employer/bidRequests?email=${user?.email}`).then((res) => {
  //     setBidRequest(res.data);
  //   });
  // }, [axios, user]);

  const {
    data: bidRequest,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bidRequest"],
    queryFn: () => {
      return axios.get(`employer/bidRequests?email=${user?.email}`);
    },
  });

  if (isLoading) {
    return;
  }

  if (bidRequest?.data?.length === 0) {
    return (
      <h2 className="text-xl font-semibold text-center mt-14 md:mt-52">
        No one has bid on your job
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
                <th>Buyer Email</th>
                <th>Deadline</th>
                <th>Price</th>
                <th>Status</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              <>
                {bidRequest?.data?.map((job, index) => (
                  <BidRequestTable
                    key={job._id}
                    job={job}
                    index={index}
                  ></BidRequestTable>
                ))}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default BidRequest;
