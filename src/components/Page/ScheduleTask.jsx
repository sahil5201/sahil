import React, { useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action/TaskAction';
import { LinearProgress } from '@material-ui/core';
 
const localizer = momentLocalizer(moment)

function ScheduleTask() {
    const task = useSelector((state) => state.task);
    const dispatch = useDispatch();
    console.log(task ? task : "");
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const myEventsList = task ? [ ] : null ;
  
  const data = task ? (
    task.map((item) => { 
        myEventsList.push({
            id: item.id,
            title: item.task.Task,
            start: new Date(item.task.Date),
            end: new Date(item.task.Date),
        }) 
        console.log(moment(item.task.Date).format("YYYY, M , D"),new Date(item.task.Date))
    })) : "";

    return (
        <div className="card">
            <div className="card-header card-header-tabs card-header-info">
                
            <div className="row">
                <div className="col-md-6">
                <span> Task </span>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary">Add</button>
                </div>
                </div>
            </div>
            <div className="card-body">
            { myEventsList ? <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "65vh" }}
    /> : <LinearProgress /> }
            
    
    </div>
        </div>
    )
}

export default ScheduleTask
