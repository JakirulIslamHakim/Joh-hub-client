import Feedback from "../Components/Feedback/Feedback";
import NavigateJob from "../Components/NavigateJob/NavigateJob";
import WorkYourWay from "../Components/WorkYourWay/WorkYourWay";
import Home from "../Pages/Home/Home";
import Footer from "../Pages/Shared/Footer";

const HomePage = () => {
    return (
        <div>
            {/* slider */}
            <Home></Home>
            <WorkYourWay></WorkYourWay>
            <NavigateJob></NavigateJob>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;