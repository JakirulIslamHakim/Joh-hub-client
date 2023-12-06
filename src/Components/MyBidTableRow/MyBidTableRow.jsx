const MyBidTableRow = ({ job, index }) => {
  const {
    id,
    employer_email,
    buyer_email,
    bidding_price,
    deadline,
    biddingTime,
    category,
    job_title,
    status,
  } = job;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{job_title}</td>
        <td>{employer_email} </td>
        <td>{deadline} </td>
        <td>{status} </td>
        <td>
          <button className="btn btn-ghost btn-xs">Complete</button>
        </td>
      </tr>
    </>
  );
};

export default MyBidTableRow;
