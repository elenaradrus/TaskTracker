import './CalendarComponent.styles.css'

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Calendar, theme } from 'antd';


const CalendarComponent = () => {

  const [value, setValue] = useState();
  const [selectedValue, setSelectedValue] = useState();

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };
  const onPanelChange = (newValue) => {
    setValue(newValue);
  };

  if(value == undefined) {
    console.log('no value')
  } else {
    console.log(value.$d)
  }


  return (
    <div className='calendarContainer'>
      <Calendar fullscreen={false} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </div>
  );
};
export default CalendarComponent;
