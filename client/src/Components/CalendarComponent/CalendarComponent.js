import './CalendarComponent.styles.css'
import { Calendar, theme } from 'antd';
import React from 'react';


const CalendarComponent = () => {
  const { token } = theme.useToken();

  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className='calendarContainer'>
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange} 
      />
    </div>
  );
};
export default CalendarComponent;