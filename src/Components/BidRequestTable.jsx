import useAxios from "../Hook/useAxios";

const BidRequestTable = ({ job, index }) => {
  const axios = useAxios();

  const {
    _id,
    employer_email,
    buyer_email,
    bidding_price,
    deadline,
    biddingTime,
    category,
    job_title,
    status,
  } = job;

  const handleAccept = (id) => {
    const updateStatus = { status: "Progress" };
    axios.patch(`biddingJob/UpdateStatus/${id}`, updateStatus).then((res) => {
      console.log(res);
    });
  };

  const handleReject = (id) => {
    const updateStatus = { status: "Cancel" };
    axios.patch(`biddingJob/UpdateStatus/${id}`, updateStatus).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{job_title}</td>
        <td>{buyer_email} </td>
        <td>{deadline} </td>
        <td>{bidding_price} $</td>
        <td>{status} </td>
        <td>
          {
            (status === "Pending" && (
              <>
                <button
                  onClick={() => handleAccept(_id)}
                  className="btn btn-ghost btn-xs border-2 border-black mr-3"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(_id)}
                  className="btn btn-ghost btn-xs border-2 border-black"
                >
                  Reject
                </button>
              </>
            ))}
        </td>
      </tr>
    </>
  );
};

export default BidRequestTable;
