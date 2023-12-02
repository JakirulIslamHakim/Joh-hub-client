import { NavLink } from "react-router-dom";

const MyPostCard = ({ post }) => {
  console.log(post);
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

  return (
    <div>
      <div className="card bg-base-100 shadow-xl border-2">
        <div className="card-body ">
          <div className=" p-2 m-2 rounded-lg space-y-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-center mb-1">{category}</h2>
              <hr className="w-2/3 shadow-lg border-black mx-auto" />
            </div>
            <p>Job Title : {job_title}</p>
            <p>Date : {deadline}</p>
            <p>
              Price : {min_price} - {max_price} $
            </p>
            <p>{description}</p>
            <div className="card-actions justify-between pt-4">
              <NavLink to={`/bidNow/${_id}`}>
                <button className="btn btn-primary">Update Post</button>
              </NavLink>
              <NavLink to={`/bidNow/${_id}`}>
                <button className="btn btn-primary">Delete Post</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
