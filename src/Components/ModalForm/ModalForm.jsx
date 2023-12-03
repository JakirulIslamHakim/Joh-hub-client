import useAuth from "../../Hook/useAuth";

const ModalForm = (props) => {
  const { user } = useAuth();

  console.log(props);

  const handleUpdateJob = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleUpdateJob}
        className="card-body w-full md:w-3/4 mx-auto p-2 md:p-6"
      >
        <h2 className="text-3xl font-bold text-center italic">Update Post</h2>
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
            // defaultValue={post?.deadline}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category </span>
          </label>
          <select
            defaultValue={""}
            name="category"
            className="select select-bordered w-full"
          >
            <option value="" disabled>
              Please select a category
            </option>
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="graphic-design">Graphics Design</option>
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
            maxLength="500"
            minLength={20}
            required
          ></textarea>
        </div>

        <div className="form-control mt-6  rounded-lg ">
          <button className="btn border-black border bg-black  font-bold text-xl text-white hover:text-black ">
            Post A Job
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalForm;
