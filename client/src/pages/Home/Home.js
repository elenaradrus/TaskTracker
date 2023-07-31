import Menu from "../../Components/Menu/Menu";
import Calendar from "../../Components/Calendar/Calendar";
import './Home.styles.css'

const Home = () => {
    return ( 
    <div className="HomeContainer">
        <Calendar />
        <Menu />
    </div> 
    );
}
 
export default Home;