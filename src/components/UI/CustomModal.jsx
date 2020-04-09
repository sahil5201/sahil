import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";

function CustomModal(props) {
  const [state, setstate] = useState("initialState")

 const onFormChange=(event)=>{
    setstate(event.target.value);
  }

  const onFormSubmit=()=>{
    alert(state);
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
