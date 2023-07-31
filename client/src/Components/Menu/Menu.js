import { useNavigate } from 'react-router-dom';

import './Menu.styles.css'

import {
    HomeOutlined,
    PlusCircleOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Space } from 'antd';


const Menu = () => {
    const navigate = useNavigate();

    const handleUserOnclick = () => {
        navigate('/user')
    }

    const handleHomeOnClick = () => {
        navigate('/')
    }

    return (
        <div className="menuContainer">

            <Space className='spaceIcons'>
                <HomeOutlined className='icon' onClick={handleHomeOnClick}/>
                <PlusCircleOutlined className='icon'/>
                <UserOutlined className='icon' onClick={handleUserOnclick}/>
            </Space>

        </div>
    );
}

export default Menu;