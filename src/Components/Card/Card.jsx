import { Link, NavLink } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from "aos";

const Card = ({ job }) => {
  AOS.init();

  const {
    _id,
    employer_email,
    job_title,
    deadline,
    description,
    category,
    min_price,
    max_price,
    postsCurrentTime,
  } = job;


  return (
    <div>
      <div className="card shadow-xl border-2 bg-[#d8f3dc]">
        <div className="card-body ">
          <div className="avatar flex items-center  gap-3">
            <div className="w-10 md:w-14 ml-2 md:ml-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p>
              <span className="font-bold text-base md:text-lg">{employer_email}</span> <br />{" "}
              <span className="font-bold">
                {postsCurrentTime ? postsCurrentTime : "-- -- --"}
              </span>
            </p>
          </div>
          <div className="border p-2 m-2 rounded-lg space-y-2 text-[#000000] bg-[#b7e4c7]">
            <h2 className="text-xl md:text-3xl font-bold text-center ">{category}</h2>
            <hr className="w-2/3 shadow-lg border-black mx-auto" />
            <p className="font-bold">
              <span className="text-base font-semibold ">Deadline :</span>{" "}
              {deadline}
            </p>
            <p className="font-bold">
              <span className="text-base font-semibold ">Price :</span>{" "}
              {min_price} - {max_price} $
            </p>
            <p className="font-bold">
              <span className="text-base font-semibold ">Job Des. :</span>{" "}
              {description}
            </p>
            <div className="card-actions justify-center">
              <NavLink to={`/bidNow/${_id}`}>
                <button className="btn btn-primary bg-[#081c15] hover:bg-[#2d6a4f] text-white">
                  Bid Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
