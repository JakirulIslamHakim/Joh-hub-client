import { NavLink } from "react-router-dom";
import Container from "../../utils/Container";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const NavigateJob = () => {
  return (
    <div className="bg-gradient-to-r from-[#d8f3dc] to-[#b7e4c7] text-[#081c15] py-10">
      <Container>
        <div className="text-center">
          {" "}
          <div
            data-aos="flip-right"
            data-aos-delay="20"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl font-bold  ">
              " Discover Your Next Opportunity "
            </h2>
          </div>
          <div
            data-aos="zoom-in-down"
            // data-aos-offset="200"
            // data-aos-delay="20"
            data-aos-duration="1000"
          >
            <NavLink
              to={"/findJob"}
              className="btn border-white border-2 text-lg mt-7 font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >
              Get Started Now
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavigateJob;
