import { useParams } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import Container from "../../utils/Container";

const UpdateJob = () => {
  const { id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();
  const [currentJobInfo, setCurrentJobInfo] = useState({});

  useEffect(() => {
    axios
      .get(`jobDetails/${id}`)
      .then((res) => {
        // console.log("now working", res.data);
        setCurrentJobInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [axios, id]);

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
  } = currentJobInfo;

  const handleUpdateJob = (e) => {
    e.preventDefault();
    const from = e.target;
    const employer_email = user?.email;
    const job_title = from.jobTitle.value;
    const deadline = from.deadline.value;
    const category = from.category.value;
    const min_price = from.minimumSalary.value;
    const max_price = from.maximumSalary.value;
    const description = from.description.value;

    const updateJob = {
      employer_email,
      job_title,
      deadline,
      category,
      min_price,
      max_price,
      description,
    };

    axios.put(`updateJob/${_id}`, updateJob).then((res) => {
      console.log(res.data);
    });
  };

  console.log(category);

  return (
    <Container>
      <div>
        <form
          onSubmit={handleUpdateJob}
          className="card-body w-full md:w-3/4 mx-auto p-2 md:p-6 "
        >
          <h2 className="text-3xl font-bold text-center italic ">Update Job</h2>
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
              defaultValue={job_title}
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
              defaultValue={deadline}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <select
              value={category}
              name="category"
              className="select select-bordered w-full"
            >
              <option disabled>Please select a category</option>
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
              maxLength="500"
              minLength={20}
              defaultValue={description}
              required
            ></textarea>
          </div>

          <div className="form-control mt-6  rounded-lg ">
            <button className="btn border-black border bg-black  font-bold text-xl text-white hover:text-black ">
              Update Job
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default UpdateJob;
