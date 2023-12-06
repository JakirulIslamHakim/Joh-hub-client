import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../Hook/useAxios";
import Container from "../../utils/Container";
import useAuth from "../../Hook/useAuth";

const JobDetail = () => {
  const [jobDetails, setJobDetails] = useState({});
  const { _id } = useParams();
  const axios = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`jobDetails/${_id}`)
      .then((res) => {
        // console.log("now working", res);
        setJobDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [axios, _id]);

  // console.log(Object.keys(jobDetails).join(', '));
  const {
    _id: id,
    employer_email,
    job_title,
    deadline,
    description,
    category,
    min_price,
    max_price,
  } = jobDetails;

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/api/v1/jobDetails/${_id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  const handleBidProject = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyer_email = user && user?.email;
    const bidding_price = form.bidding_price.value;
    const deadline = form.deadline.value;

    const biddingTime = new Date().toDateString();

    const biddingInfo = {
      employer_email,
      buyer_email,
      bidding_price,
      deadline,
      biddingTime,
      category,
      job_title,
      status: "Pending",
    };

    axios.post("buyer/biddingJob", biddingInfo).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Container>
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <div className="card card-compact md:p-5 border-4  bg-base-100 shadow-xl">
            <div className="card-body">
              <div>
                <h2 className="card-title flex justify-center border-b-2 pb-3 text-2xl">
                  Job Details {category}
                </h2>
              </div>
              <p className="font-semibold">
                <span className="md:text-base ">Employer Email : </span>
                {employer_email}
              </p>
              <p className="font-semibold">
                <span className="md:text-base ">Job Title : </span>
                {job_title}
              </p>
              <p className="font-semibold">
                <span className="md:text-base ">Deadline : </span>
                {deadline}
              </p>
              <p className="font-semibold">
                <span className="md:text-base ">Price Range : </span>
                {min_price}$ - {max_price}$
              </p>
              <p className="font-semibold">
                <span className="md:text-base ">Description : </span>
                {description}
              </p>
            </div>
            {/*  form section */}
            <div className="p-2">
              <h2 className="text-2xl font-semibold text-center">
                place your bid
              </h2>
              <form onSubmit={handleBidProject}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Employer Email</span>
                  </label>
                  <input
                    type="email"
                    name="employer_email"
                    placeholder="email"
                    className="input input-bordered"
                    defaultValue={employer_email}
                    readOnly
                    required
                    //   disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="bidding_email"
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    name="bidding_price"
                    placeholder="your bidding amount"
                    className="input input-bordered"
                    required
                  />
                </div>
                <button className="btn w-full mt-3 "  disabled={employer_email === user.email ? true : false}  type="submit">
                  Bid on the project
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JobDetail;
