import Menu from "../../Components/Menu/Menu";
import CalendarComponent from "../../Components/CalendarComponent/CalendarComponent";
import './Home.styles.css'

const Home = () => {
    return ( 
    <div className="homeContainer">
        <CalendarComponent />
        <Menu />
    </div> 
    );
}
 
export default Home;