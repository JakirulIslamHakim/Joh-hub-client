import useAxios from "../../Hook/useAxios";

const MyBidTableRow = ({ job, index }) => {
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

  const handleComplete = (id) => {
    // console.log(id);
    const updateStatus = { status: "Complete" };
    axios.patch(`biddingJob/UpdateStatus/${id}`, updateStatus).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{job_title}</td>
        <td>{employer_email} </td>
        <td>{deadline} </td>
        <td>{status} </td>
        <td>
          {status === "Progress" && (
            <>
              <button
                onClick={() => handleComplete(_id)}
                className="btn btn-ghost btn-xs"
              >
                Complete
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default MyBidTableRow;
