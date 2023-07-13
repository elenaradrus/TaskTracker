import { logout } from "../../store/User/actions";
import {useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';


const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout())
        navigate('/login')
    }

    return ( 
        <div>
            HOME
            <button onClick={handleLogOut}>Salir</button>
        </div>
     );
}
 
export default Home;