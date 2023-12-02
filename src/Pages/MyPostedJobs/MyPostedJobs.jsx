import useAxios from "../../Hook/useAxios";

const MyPostedJobs = () => {
  const axios = useAxios();

  axios.get('')

  return <div>this is myPostedJobs route</div>;
};

export default MyPostedJobs;
