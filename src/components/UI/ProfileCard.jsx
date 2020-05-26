import React,{useState, useEffect} from 'react'
import { Modal, Button } from "react-bootstrap";
import { TextField, Switch, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createTeam, fetchTeamData, joinTeam } from '../../redux/APIAction';
import $ from 'jquery'

function ProfileCard(props) {
    const image = props.Image ? props.Image : "https://img.icons8.com/plasticine/2x/user.png";
    const name =  props.Name  ? props.Name  : "First Last";
    const description = props.Description ? props.Description : "Description Hear";
    const designation = props.Designation ? props.Designation : "Designation Hear";
    return (
      <div className="col-md-3 mt-4">
        <div className="card card-profile">
          <div className="card-avatar">
            <Link to="/">
              <img
                className="img"
                alt=""
                src={image}
                style={{ height: "96px", width: "96px" }}
              />
            </Link>
          </div>
          <div className="card-body">
            <h6 className="card-category text-gray"> {designation} </h6>
            <h4 className="card-title">{name}</h4>
            <p className="card-description">{description}</p>
            <button className="btn btn-danger btn-round">
              Remove
            </button>
            <hr/>
            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <button className="p-2 fa-lg fb-ic btn btn-link">
                  <i className="fa fa-facebook-f " />
                </button>
              </li>
              <li className="list-inline-item">
                <button className="p-2 fa-lg pin-ic btn btn-link">
                <i className="fa fa-slack"></i>
                </button>
              </li>
              <li className="list-inline-item">
                <button className="p-2 fa-lg ins-ic btn btn-link">
                  <i className="fa fa-instagram"> </i>
                </button>
              </li>
              <li className="list-inline-item">
                <button className="p-2 fa-lg tw-ic btn btn-link">
                  <i className="fa fa-twitter"> </i>
                </button>
              </li>
            </ul>

          </div>
        </div>
      </div>
    );
}
export default ProfileCard

export function TeamCard(props){
  const [Team, setTeam] = useState(null)
  const TeamList = props.data ? props.data : null;
  const [isActive, setActive] = useState(null)
  const [modalShow, setModalShow] = useState(false);
  const [joinModel, setjoinModel] = useState(false);
  const userId = useSelector((state)=>state.User.user.googleId);
  const dispatch = useDispatch();
  
  setTimeout(() => {
    if(TeamList != null && Team == null){
    setActive(TeamList[0].id)
    setTeam(TeamList[0])}
  }, 200);

  const onActive = (item) => {
    setActive(item.id)
    setTeam(item)
  }

  const onClose = ()=>{
    dispatch(fetchTeamData());
    setModalShow(false);
  }
  return (
    <div className="col-md-5 mt-4">
      <div className="card card-profile">
        <div className="card-body">
          <div className="row">
            <div className="col-12"><h3> Team List </h3></div>
            <div className="col-md-6">
              <div className="list-group">
              { TeamList ? 
                TeamList.length >0 ? 
                TeamList.map((item) => { 
               return ( 
               <button
                  type="button"
                  key = {item.id}
                  onClick = { () => {onActive(item)} }
                  className={ item.id === isActive ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
                > { item.data.name }
                </button> 
                )
                 } )
                : " Empty " 
                : "" }
                
               
              </div>
            </div>

            <div className="col-md-6">
            <CreateTeamModel show={modalShow} onHide={onClose} />
            <JoinTeamModel show={joinModel} onHide={() => setjoinModel(false)} />

              <div className="card">             
                <div className="card-body">
                  {Team ? 
                  <div>
                  <h3>{Team.data.name}</h3>
                  <h4>Total Member: </h4>
                  <h4>Admin: <b>{ Team.data.admin === userId ? "You" :Team.data.adminname }</b> </h4>
                  <button className="btn btn-outline-primary btn-sm btn-round"> Show </button>
                  { Team.data.admin === userId ? 
                  <button className="btn btn-outline-danger btn-sm btn-round"> <i className="fa fa-trash-o"/> </button>
                  : <button className="btn btn-outline-danger btn-sm btn-round"> <i className="fa fa-sign-out"/> </button> }

                  </div>
                  : " " }
                </div>
              </div>

            <div className="row justify-content-between">
            <div className="col-md-6">
              <button className="btn btn-outline-info" onClick={()=>setModalShow(true)}>Create</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-outline-primary" onClick={()=>setjoinModel(true)}>Join</button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreateTeamCard(props){
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const onClose = ()=>{
    dispatch(fetchTeamData());
    setModalShow(false);
  }
  return( 
    <div className="col-md-5 mt-4">
       <CreateTeamModel show={modalShow} onHide={onClose} />
        <div className="card card-profile">
          <div className="card-body">
          <p className="card-title"> You are not Part of any Team.</p>
          <p className="card-description"> Create a New Team or Join.</p>

          <div className="row">
            <div className="col-md-6">
              <button className="btn btn-info" onClick={()=>setModalShow(true)}>Create</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary" onClick={()=>{ }}>Join</button>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

function CreateTeamModel(props){
  let isLoading = useSelector((state)=>state.Team.loading)
  let TeamId = useSelector((state)=>state.Team.teamid)
  const user = useSelector((state)=>state.User.user);
 
  const [lock, setLock] = useState(false)
  const [teamname, setTeamname] = useState(null)
  const dispatch = useDispatch();
 
  const handleChange = (event) => {
    setLock(event.target.checked);
  };

  const formChange = (event) => {
    setTeamname(event.target.value)
  }

  const onDataSubmit = () => {
    const data = {Public:lock,Name:teamname,Admin:user.googleId,AdminName:user.name}
    dispatch(createTeam("team/createTeam",data))
  }

  const onClose = ()=>{
    dispatch(fetchTeamData());
    props.onHide()
  }
  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a Team
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row justify-content-center">
          {isLoading ? 
          <CircularProgress />
          :
          
          TeamId ? <Success data={TeamId}/> : 

          <div className="row justify-content-center">
          <div className="col-md-10">
            <TextField
              id="outlined-basic"
              label="Team Name"
              variant="outlined"
              fullWidth
              onChange={formChange}
            />
          </div>

          <div className="col-md-10 mt-2">
            Private 
            <Switch
              checked={lock}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Public
          </div> </div>
          
          }

        </div>
      </Modal.Body>

      <Modal.Footer>
       { TeamId ? "" :   <Button variant="success" onClick={onDataSubmit}>
          Create
        </Button> }
        <Button variant="outline-info" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function JoinTeamModel(props){
  const [inputTeamId, setinputTeamId] = useState(null);
  const dispatch = useDispatch();
  const formChange = (event) => {
    setinputTeamId(event.target.value)
  }

  const onSubmit = () =>{
    dispatch(joinTeam("team/joinTeam",inputTeamId));
  }

  return(
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Join a Team
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row justify-content-center">
        
          <div className="col-md-10">
            <TextField
              id="outlined-basic"
              label="Team ID"
              placeholder="Enter a Team ID to Join"
              variant="outlined"
              fullWidth
              onChange={formChange}
            />
          </div>
        
        </div>
      </Modal.Body>

      <Modal.Footer>
      <Button variant="primary" onClick={onSubmit}>
          Join
        </Button>
        <Button variant="outline-info" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

function Success(props){
  const teamid = props.data ? props.data : ""
  const user= useSelector((state)=>state.User.user);
  const shareId = () => {

    let sub = "Invitation From "+user.name
    let msgbody = "Here Invitation From "+user.name+" To Join a Team for Task And Activity Manage With Members. Your Team ID is :" +teamid
    let url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su='+sub+'&body='+msgbody+'&ui=2&tf=1&pli=1';
    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
  }

  const copyId = () => {
    var tempInput = document.createElement("input");
    tempInput.value = teamid;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    $( "#btnCopy" ).removeClass( "btn-info" ).addClass( "btn-success" );
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-12">
        <h3>Your Team Successfully Created.</h3>
        <hr/>
        <h4>Your Team ID : </h4>
        <div className="row">
        <div className="col-md-9"> <h4> <b> <span id="teamid">{teamid}</span></b> </h4> </div>
        <div className="col-md-1"> 
        <h4> 
          <button className="btn btn-link btn-danger" style={{padding:"0px"}} onClick={shareId}> <i className="fa fa-envelope"/> </button> 
        </h4> 
        </div>
        <div className="col-md-1"> <h4> <button id="btnCopy" className="btn btn-link btn-info" style={{padding:"0px"}} onClick={copyId}> <i className="fa fa-files-o"/> </button> </h4> </div>
        </div>
      </div>
    </div>
  )
}