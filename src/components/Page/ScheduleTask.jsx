import React, { useEffect } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/';
import BigCalendar from '../UI/BigCalendar';

function ScheduleTask() {
    const task = useSelector((state) => state.Schedule.task);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("Schedule"));
    }, []);

  const myEventsList = task ? [ ] : null ;
  
  const data = task ? (
    task.map((item) => { 
        myEventsList.push({
            id: item.id,
            title: item.data.Task,
            color: item.data.color ? item.data.color : "",
            start: new Date(item.data.startDate),
            end: new Date(item.data.endDate),
        }) 
    })) : "";

    return (
        <div>
            <BigCalendar events={myEventsList}/>
        </div>
    )
}

export default ScheduleTask
