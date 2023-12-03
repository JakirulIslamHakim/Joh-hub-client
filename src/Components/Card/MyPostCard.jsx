import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import ModalForm from "../ModalForm/ModalForm";

const MyPostCard = ({ post }) => {
  const { user } = useAuth();

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

  // console.log(max_price);

  const handleUpdateJob = (e) => {
    e.preventDefault();
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
            <p>Date : {deadline}</p>
            <p>
              Price : {min_price} - {max_price} $
            </p>
            <p>{description}</p>
            <div className="card-actions justify-between pt-4">
              {/* <NavLink to={`/bidNow/${_id}`}>
                <button className="btn btn-primary">Update Post</button>
              </NavLink> */}
              {/* modal */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn btn-sm md:btn-md"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Update Post
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-3xl">
                  <div className="card shrink-0 w-full  shadow-2xl bg-base-100 border-2">
                    <form
                      onSubmit={handleUpdateJob}
                      className="card-body w-full md:w-3/4 mx-auto p-2 md:p-6"
                    >
                      <h2 className="text-3xl font-bold text-center italic">
                        Update Post
                      </h2>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="input input-bordered"
                          defaultValue={user && user?.email}
                          readOnly
                          required
                          //   disabled
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Job Title</span>
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          placeholder="Job Title"
                          className="input input-bordered"
                          maxLength={100}
                          defaultValue={job_title}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Deadline</span>
                        </label>
                        <input
                          type="date"
                          name="deadline"
                          placeholder="Deadline"
                          className="input input-bordered"
                          defaultValue={deadline}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Category </span>
                        </label>
                        <select
                          defaultValue={category}
                          name="category"
                          className="select select-bordered w-full"
                          
                        >
                          <option value="" disabled>
                            Please select a category
                          </option>
                          <option value="web-development">
                            Web Development
                          </option>
                          <option value="digital-marketing">
                            Digital Marketing
                          </option>
                          <option value="graphic-design">
                            Graphics Design
                          </option>
                        </select>
                      </div>
                      <div className=" md:flex gap-1 md:gap-4">
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text">Minimum Salary</span>
                          </label>
                          <input
                            type="number"
                            name="minimumSalary"
                            placeholder="Minimum Salary"
                            className="input input-bordered"
                            defaultValue={min_price}
                            required
                          />
                        </div>
                        <div className="form-control md:w-1/2">
                          <label className="label">
                            <span className="label-text">Maximum Salary</span>
                          </label>
                          <input
                            type="number"
                            name="maximumSalary"
                            placeholder="Maximum Salary"
                            className="input input-bordered"
                            defaultValue={max_price}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea
                          name="description"
                          className="textarea textarea-bordered"
                          placeholder="Description"
                          maxLength="300"
                          minLength={20}
                          defaultValue={description}
                          required
                        ></textarea>
                      </div>

                      <div className="form-control mt-6  rounded-lg ">
                        <button className="btn border-black border bg-black  font-bold text-xl text-white hover:text-black ">
                          Post A Job
                        </button>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </form>
                    {/* <ModalForm post = {post}></ModalForm> */}
                  </div>
                </div>
              </dialog>
              <NavLink to={`/bidNow/${_id}`}>
                <button className="btn btn-primary btn-sm md:btn-md">Delete Post</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
