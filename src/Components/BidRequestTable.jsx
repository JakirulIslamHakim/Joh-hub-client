const BidRequestTable = ({ job, index }) => {
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
        <td>{buyer_email} </td>
        <td>{deadline} </td>
        <td>{bidding_price} $</td>
        <td>{status} </td>
        <td>
          <button className="btn btn-ghost btn-xs">Accept</button>
          <button className="btn btn-ghost btn-xs">Reject</button>
        </td>
      </tr>
    </>
  );
};

export default BidRequestTable;
