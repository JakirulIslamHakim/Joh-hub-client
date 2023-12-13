import Feedback from "../Components/Feedback/Feedback";
import NavigateJob from "../Components/NavigateJob/NavigateJob";
import WorkYourWay from "../Components/WorkYourWay/WorkYourWay";
import Home from "../Pages/Home/Home";

const HomePage = () => {
    return (
        <div>
            {/* slider */}
            <Home></Home>
            <WorkYourWay></WorkYourWay>
            <NavigateJob></NavigateJob>
            <Feedback></Feedback>
        </div>
    );
};

export default HomePage;