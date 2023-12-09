import { NavLink } from "react-router-dom";
import Container from "../../utils/Container";

const NavigateJob = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-cyan-200 text-fuchsia-600 py-10">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold  ">
            " Discover Your Next Opportunity "
          </h2>
          <NavLink to={'/findJob'} className="btn border-white border-2 text-lg mt-7 font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started Now</NavLink>
        </div>
      </Container>
    </div>
  );
};

export default NavigateJob;
