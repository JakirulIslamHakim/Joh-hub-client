import { useEffect, useState } from "react";
import useAxios from "../../Hook/useAxios";
import useAuth from "../../Hook/useAuth";
import Container from "../../utils/Container";
import MyBidTableRow from "../../Components/MyBidTableRow/MyBidTableRow";

const MyBidsJob = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [myBidsJobs, setMyBidsJobs] = useState([]);
  console.log(Object.keys(myBidsJobs).join(", "));

  useEffect(() => {
    axios.get(`buyer/myBids/?email=${user?.email}`).then((res) => {
      setMyBidsJobs(res.data);
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
                <th>Email</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <>
                {myBidsJobs.map((job,index) => (
                  <MyBidTableRow key={job._id} job={job} index={index}></MyBidTableRow>
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
