import React, { useEffect } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action/TaskAction';
import BigCalendar from '../UI/BigCalendar';
import moment from 'moment';

function ScheduleTask() {
    const task = useSelector((state) => state.task);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const myEventsList = task ? [ ] : null ;
  
  const data = task ? (
    task.map((item) => { 
        myEventsList.push({
            id: item.id,
            title: item.task.Task,
            start: new Date(moment(item.task.Date).format("YYYY, M , D  HH:MM")),
            end: new Date(new Date(item.task.Date).setHours(new Date(item.task.Date).getHours()+8)),
        }) 
    })) : "";

    return (
        <div>
            <BigCalendar events={myEventsList}/>
        </div>
    )
}

export default ScheduleTask
