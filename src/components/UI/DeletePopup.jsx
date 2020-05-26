import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteData } from "../../redux/";

export function DeletePopup(props) {
  const dispatch = useDispatch()
  
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
         <div className="col-md-8"> Do you want to delete this Task : <b> {props.data.data.Task} </b> </div>
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
