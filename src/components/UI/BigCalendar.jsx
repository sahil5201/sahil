import React from 'react'
import { LinearProgress } from '@material-ui/core'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { ScheduleModal } from './CustomModal'

const localizer = momentLocalizer(moment)

function BigCalendar(props) {
    console.log(props)
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="card">
            <div className="card-header card-header-tabs card-header-info">
            <ScheduleModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <span className="btn btn-info disable"> Task </span>
                </div>
                
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-info" onClick={() => setModalShow(true)}> <i className="material-icons">add</i> Add</button>
                </div>

                </div>
            </div>
            <div className="card-body">
            { props.events ? <Calendar
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "65vh" }}
    /> : <LinearProgress /> }
    </div>
        </div>
    )
}

export default BigCalendar