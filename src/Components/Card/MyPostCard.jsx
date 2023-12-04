import { NavLink } from "react-router-dom";
import useAxios from "../../Hook/useAxios";

const MyPostCard = ({ post }) => {
  const axios = useAxios();

  const {
    _id,
    employer_email,
    job_title,
    deadline,
    category,
    min_price,
    max_price,
    description,
    postsCurrentTime,
  } = post;

  const handleDeleteJob = (id) => {
    axios.delete(`/deleteJob/${id}`)
      .then(res => {
        console.log(res.data);
      })
    // console.log(id);
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2">
        <div className="card-body p-0 md:p-6">
          <div className=" p-2 m-2 rounded-lg space-y-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-center mb-1">
                {category}
              </h2>
              <hr className="w-2/3 shadow-lg border-black mx-auto" />
            </div>
            <p>Job Title : {job_title}</p>
            <p>Deadline : {deadline}</p>
            <p>
              Price : {min_price} - {max_price} $
            </p>
            <p>{description}</p>
            <div className="card-actions justify-between pt-4">
              <NavLink to={`/myPostJob/updateJob/${_id}`}>
                <button className="btn btn-primary btn-sm md:btn-md">
                  Update Post
                </button>
              </NavLink>

              <button onClick={()=>handleDeleteJob(_id)} className="btn btn-primary btn-sm md:btn-md">
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
