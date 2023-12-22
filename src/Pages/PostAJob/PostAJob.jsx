import { useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";
import Container from "../../utils/Container";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PostAJob = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [catErr, setCatErr] = useState("");
  const navigate = useNavigate();

  const handlePostJob = (e) => {
    e.preventDefault();
    const from = e.target;
    const employer_email = user?.email;
    const job_title = from.jobTitle.value;
    const deadline = from.deadline.value;
    const category = from.category.value;
    const min_price = from.minimumSalary.value;
    const max_price = from.maximumSalary.value;
    const description = from.description.value;

    const minimumSalaryNum = Number(min_price);
    const maximumSalaryNum = Number(max_price);

    if (minimumSalaryNum > maximumSalaryNum) {
      return console.log("error");
    }

    if (category === "") {
      return setCatErr(" Please select a category");
    }

    const postsCurrentTime = new Date().toDateString();
    // console.log(postsCurrentTime);

    const jobData = {
      employer_email,
      job_title,
      deadline,
      category,
      min_price,
      max_price,
      description,
      postsCurrentTime,
    };
    // console.log(jobData);
    axios.post("employer/postJob", jobData).then(async (res) => {
      // console.log(res.data);
      if (res?.data?.acknowledged) {
        await Swal.fire({
          title: "Successful",
          text: "Your job post has been successfully",
          icon: "success",
        });
        navigate("/myPostedJobs");
      }
    });
  };

  return (
    <Container>
      <div className="card shrink-0 w-full  shadow-2xl border-2 bg-[#52b78]">
        <form
          onSubmit={handlePostJob}
          className="card-body w-full md:w-3/4 mx-auto p-2 md:p-6"
        >
          <h2 className="text-3xl font-bold text-center italic">Post job</h2>
          <div className="form-control font-semibold">
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
          <div className="form-control font-semibold">
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
          <div className="form-control font-semibold">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control font-semibold">
            <label className="label">
              <span className="label-text">
                Category{" "}
                <p className="text-red-400 underline font-semibold">{catErr}</p>
              </span>
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
            <div className="form-control font-semibold md:w-1/2">
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
            <div className="form-control font-semibold md:w-1/2">
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
          <div className="form-control font-semibold ">
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

          <div className="form-control font-semibold mt-6  rounded-lg ">
            <button className="btn border-black border bg-black  font-bold text-xl text-white hover:text-black ">
              Post A Job
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default PostAJob;
