import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import Container from "../../utils/Container";
import { useEffect, useState } from "react";
import useAxios from "../../Hook/useAxios";
import Card from "../../Components/Card/Card";
import "./tabStyle.css";
import Footer from "../Shared/Footer";
import FindJobSkeleton from "../../Components/Skeleton/FindJobSkeleton";

const FindJob = () => {
  const [category, setCategory] = useState("");
  const [categoryByJob, setCategoryByJob] = useState([]);
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(isLoading);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/v1/categories/${category}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [category]);

  useEffect(() => {
    if (category === "") {
      axios
        .get(`/categories`)
        .then((res) => {
          setIsLoading(true);
          setCategoryByJob(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`/categories/${category}`)
        .then((res) => {
          setIsLoading(true);
          setCategoryByJob(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category, axios]);

  if (isLoading) {
    return (
      <Container>
        <div className="flex gap-3 justify-center my-2">
          <div className="skeleton h-4 w-20 md:w-24"></div>
          <div className="skeleton h-4 w-20 md:w-24"></div>
          <div className="skeleton h-4 w-20 md:w-24"></div>
          <div className="skeleton h-4 w-20 md:w-24"></div>
        </div>
        <div className="skeleton w-full border  rounded-full shrink-0"></div>
        <div className="grid md:grid-cols-2 gap-12 p-5 mt-9">
          <FindJobSkeleton></FindJobSkeleton>
          <FindJobSkeleton></FindJobSkeleton>
          <FindJobSkeleton></FindJobSkeleton>
          <FindJobSkeleton></FindJobSkeleton>
        </div>
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <div>
          <Tabs>
            <TabList>
              <Tab onClick={() => setCategory("")}>All Job</Tab>
              <Tab onClick={() => setCategory("web-development")}>
                {" "}
                Web Development{" "}
              </Tab>
              <Tab onClick={() => setCategory("digital-marketing")}>
                {" "}
                Digital Marketing{" "}
              </Tab>
              <Tab onClick={() => setCategory("graphic-design")}>
                {" "}
                Graphics Design{" "}
              </Tab>
            </TabList>

            <TabPanel>
              <div className="grid md:grid-cols-2 gap-12 mt-9 ">
                {categoryByJob.map((job) => (
                  <Card key={job._id} job={job}></Card>
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid md:grid-cols-2 gap-12 mt-9 ">
                {categoryByJob.map((job) => (
                  <Card key={job._id} job={job}></Card>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-2 gap-12 mt-9 ">
                {categoryByJob.map((job) => (
                  <Card key={job._id} job={job}></Card>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid md:grid-cols-2 gap-12 mt-9 ">
                {categoryByJob.map((job) => (
                  <Card key={job._id} job={job}></Card>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
      {!category && <Footer></Footer>}
    </div>
  );
};

export default FindJob;
