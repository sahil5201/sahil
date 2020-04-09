import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TextField,InputLabel } from "@material-ui/core";
import {
 MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

function CustomModal(props) {
  const [Task, setTask] = useState("initialState")

 const onFormChange=(event)=>{
    setTask(event.target.value);
  }

  const onFormSubmit=()=>{
    alert(Task);
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth onChange={onFormChange}/>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onFormSubmit}>Save</Button>
        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;

export function ScheduleModal(props) {
  const [Task, setTask] = useState("initialState")
  const [StartDate, setStartDate] = React.useState(new Date());
  const [EndDate, setEndDate] = React.useState(new Date());

 const onFormChange=(event)=>{
    setTask(event.target.value);
  }

  const onFormSubmit=()=>{
    console.log(Task,StartDate,EndDate);
  }

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleENDDateChange = (date) => {
    setEndDate(date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-12">
          <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth onChange={onFormChange}/>
          </div>
         
          <div className="col-md-6 col-sm-6">
            <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Starting Date"
          format="dd/MM/yyyy"
          value={StartDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </div>
          <div className="col-md-6 col-sm-6">
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Starting Time"
          value={StartDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
          </div>

          <div className="col-md-6 col-sm-6">
            <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Ending Date"
          format="dd/MM/yyyy"
          value={EndDate}
          onChange={handleENDDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </div>
          <div className="col-md-6 col-sm-6">
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Ending Time"
          value={EndDate}
          onChange={handleENDDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
          </div>

        </div>
    </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onFormSubmit}>Save</Button>
        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </MuiPickersUtilsProvider>
  )
}