import { logout } from "../../store/User/actions";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Menu from "../../Components/Menu/Menu";

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout())
        navigate('/login')
    }


    return (
        <div>
            <button onClick={handleLogOut}>Salir</button>
            <Menu />
        </div>
    );
}

export default User;