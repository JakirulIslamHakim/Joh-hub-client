import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";
import Container from "../../utils/Container";
import BidRequestTable from "../../Components/BidRequestTable";

const BidRequest = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [bidRequest, setBidRequest] = useState([]);

  useEffect(() => {
    axios.get(`buyer/myBids/?email=${user?.email}`).then((res) => {
      setBidRequest(res.data);
    });
  }, [axios, user]);

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
                {bidRequest.map((job, index) => (
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
