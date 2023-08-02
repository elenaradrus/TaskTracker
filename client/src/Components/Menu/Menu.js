import { useNavigate } from 'react-router-dom';

import './Menu.styles.css'

import {
    HomeOutlined,
    PlusCircleOutlined,
    UserOutlined
} from '@ant-design/icons';

import { Popover, Space, Form, DatePicker, Input, Button } from 'antd';
import { useState, useEffect } from 'react';


const Menu = () => {

    const [date, setDate] = useState(null)
    const [task, setTask] = useState('')

    const navigate = useNavigate();

    const handleUserOnclick = () => {
        navigate('/user')
    }

    const handleHomeOnClick = () => {
        navigate('/')
    }

    // const handleDate = (newValue) => {
    //     setDate(newValue)
    // }

    // const handleTask = (newValue) => {
    //     setTask(newValue)
    // }

    // useEffect((newValue) => {
    //     setDate(newValue);
    //     setTask(newValue);
    // }, [date, task])
    

    
    const handleButton = () => {
        console.log('fecha', date.$d)
        console.log('tarea', task)
    }



    const { TextArea } = Input;

    const content = (
        <div>
            <>

                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
                    }}
                >
                    <Form.Item label="Fecha" >
                        <DatePicker value={date} onChange={(newValue) => setDate(newValue)}/>
                    </Form.Item>
                    <Form.Item label="Tarea" >
                        <TextArea rows={4} value={task} onChange={(e) => setTask(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleButton}>Añadir</Button>
                    </Form.Item>
                </Form>
            </>
        </div>
    );

    return (
        <div className="menuContainer">

            <Space className='spaceIcons'>
                <HomeOutlined className='icon' onClick={handleHomeOnClick} />
                <Popover content={content} title="Añadir tarea" trigger="click">
                    <PlusCircleOutlined className='icon' />
                </Popover>
                <UserOutlined className='icon' onClick={handleUserOnclick} />
            </Space>

        </div>
    );
}

export default Menu;