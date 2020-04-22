import React from "react";
import { Modal } from "react-bootstrap";
import Moment from "moment";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteData } from "../../redux/";

export function DeletePopup(props) {
  const dispatch = useDispatch()
  const TaskDate =  props.data ? Moment(props.data.task.Date).format("DD-MM-YYYY") : "";
  const TaskTime =  props.data ? Moment(props.data.task.Date).format("hh:mm A") : "";
 
  const onDelete = () =>{
    const DataId={"id":props.data.id}
    dispatch(deleteData('task/deletetask',DataId,'task'))
    props.onHide()
  }

  return (
    <Modal
      {...props }
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
         { props.data ? 
         <div className="row">
         <div className="col-md-6"> {props.data.task.Task} </div>
         <div className="col-md-3"> {TaskDate} </div>
         <div className="col-md-3"> {TaskTime} </div>
         </div>
         : " " }
      
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
        <Button variant="outline-info" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
