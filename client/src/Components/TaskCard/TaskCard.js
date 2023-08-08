import { Card, Space } from 'antd';
import { useState } from 'react';
import './TaskCard.styles.css'

const TaskCard = () => {
    const [complete, setComplete] = useState(false)

    const completeTask = () => {
        setComplete(!complete)
    }
 
    return (
        <div>
            <Space direction="vertical" size={16}>
                <Card
                    title="Tareas"
                    className='cardContainer'
                >
                    <p onClick={completeTask} className={complete ? 'taskCompleted' : 'taskInProgress'}>Comprar comida Lara</p>
                    {/* <p onClick={completeTask} className={complete ? 'taskCompleted' : 'taskInProgress'}>Felicitar a mamá</p>
                    <p onClick={completeTask} className={complete ? 'taskCompleted' : ''}>Colada</p>
                    <p onClick={completeTask} className={complete ? 'taskCompleted' : ''}>Comprar comida Lara</p>
                    <p onClick={completeTask} className={complete ? 'taskCompleted' : ''}>Felicitar a mamá</p>
                    <p onClick={completeTask} className={complete ? 'taskCompleted' : ''}>Colada</p> */}
                </Card>
            </Space>
        </div>
    );
}

export default TaskCard;