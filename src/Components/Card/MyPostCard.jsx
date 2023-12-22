import { NavLink } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

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

  const handleDeleteJob = async (id) => {
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/deleteJob/${id}`).then(async (res) => {
          if (res.data.deletedCount) {
            await Swal.fire({
              title: "Deleted!",
              text: "Your job has been deleted.",
              icon: "success",
            });
            window.location.reload();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="card shadow-xl border-2 bg-green-200 font-bold">
        <div className="card-body p-0 md:p-6">
          <div className=" p-2 m-2 rounded-lg space-y-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-center mb-1">
                {category}
              </h2>
              <hr className="w-2/3 shadow-lg border-black mx-auto" />
            </div>
            <p>
              <span className="text-base"> Job Title :</span> {job_title}
            </p>
            <p>
              <span className="text-base"> Deadline :</span> {deadline}
            </p>
            <p>
              <span className="text-base"> Price :</span>
              {min_price} - {max_price} $
            </p>
            <p>{description}</p>
            <div className="card-actions justify-end pt-4">
              <NavLink to={`/myPostJob/updateJob/${_id}`}>
                <button className="btn btn-primary btn-sm md:btn-md">
                  Update Post
                  <FiEdit></FiEdit>
                </button>
              </NavLink>

              <button
                onClick={() => handleDeleteJob(_id)}
                className="btn btn-primary btn-sm md:btn-md "
              >
                Delete Post
                <AiFillDelete></AiFillDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
