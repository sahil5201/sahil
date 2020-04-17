import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../../redux/action/UserAction';
import { PUB_Key } from '../../redux/const';
import {
  withRouter
} from 'react-router-dom'
function LoginPage(props) {

  const user = useSelector((state)=>state.User);
  
  const dispatch = useDispatch();
  console.log(user);
  // console.log(props.history.push("/"));
  const responseGoogle = (response) => {
    console.log(response); 
    if(response.googleId){
      dispatch(Login(response.profileObj))
      props.history.push("/app/")
    }
  }
    return (
      <div className="Login-container">
      <GoogleLogin
    clientId={PUB_Key}
    buttonText="Login With Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />

    </div>
    )
}

export default withRouter(LoginPage)
