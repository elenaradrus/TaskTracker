import Menu from "../../Components/Menu/Menu";
import CalendarComponent from "../../Components/CalendarComponent/CalendarComponent";
import './Home.styles.css'
import TaskCard from "../../Components/TaskCard/TaskCard";

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="calendarTask">
                <CalendarComponent />
                <TaskCard />
            </div>

            <Menu />
        </div>
    );
}

export default Home;