import Container from "../../utils/Container";
// import Lottie from "react-lottie";
import Lottie from "lottie-react";
import workAnimation from "../../assets/Image/laptopAnimation.json";

const WorkYourWay = () => {
  return (
    <div className="bg-base-200 py-4 md:p-10">
      <Container>
        <div className="mt-10 md:my-10">
          <h2 className="text-4xl font-bold text-center ">Work Your way</h2>{" "}
          <hr className="border-b-2 border-black w-1/6 lg:w-[10%] mx-auto mt-3" />
        </div>
        <div className=" flex flex-col-reverse md:flex-row items-center">
          <div className=" md:w-1/2 w-full">
            <h4 className="text-lg md:text-xl font-semibold md:mb-7 md:ml-4 ml-1">
              Choose from four Payment terms and create Agreements.
            </h4>
            {/* accordian */}
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-bold">
              Fixed Price
              </div>
              <div className="collapse-content text-justify px-5">
                <p>Set a total fixed cost for your job and create milestones to ensure you're satisfied every step of the way. Set a due date and the amount to be paid for each milestone.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
              Hourly
              </div>
              <div className="collapse-content text-justify px-5 ">
                <p>Track progress with ease and pay Freelancers by the hour using our Time Tracker software. If you hire multiple Freelancers for your job, you'll receive a breakdown of each Freelancer's hourly rate and time tracked.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
              Task-Based
              </div>
              <div className="collapse-content text-justify px-5">
                <p>Pay for a single completed online freelance task, however big or small. Create and assign tasks as needed and generate invoice for each task once it is completed.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-bold">
              Recurring Payment
              </div>
              <div className="collapse-content text-justify px-5">
                <p>Easily pay your go-to Freelancers on an ongoing basis. Set up to four recurring payment rules for any given job - pay every week, every other week, every month, or every quarter. Stop or resume payments at any point with just a click of a button.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mx-auto">
            <div className="w-3/4  mx-auto">
              <Lottie
                animationData={workAnimation}
                loop={true}
                autoPlay={true}
              ></Lottie>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkYourWay;
