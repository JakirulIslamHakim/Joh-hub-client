import { Link, NavLink } from "react-router-dom";
import useAxios from "../../Hook/useAxios";

const Card = ({ job }) => {
  // const axios = useAxios();

  const {
    _id,
    employer_email,
    job_title,
    deadline,
    description,
    category,
    min_price,
    max_price,
  } = job;

  // const handleBidNow = (_id) => {
  //   console.log(_id);
  //   axios
  //     .get(`jobDetails/${_id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body ">
        <div className="avatar flex items-center  gap-3">
          <div className="w-14 ml-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <p>
            Posted by <br /> <span>{employer_email}</span>
          </p>
        </div>
        <div className="border p-2 m-2 rounded-lg space-y-2">
          <h2 className="text-3xl font-bold text-center ">{category}</h2>
          <hr className="w-2/3 shadow-lg border-black mx-auto" />
          <p>Date : {deadline}</p>
          <p>
            Price : {min_price} - {max_price} $
          </p>
          <p>{description}</p>
          <div className="card-actions justify-center">
          <NavLink to={`/bidNow/${_id}`}>
          <button className="btn btn-primary">Bid Now</button>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
