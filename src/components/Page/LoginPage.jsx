import React from 'react'
import "../../assets/css/login.css"

function LoginPage() {
    return (
     <div className="wrapper fadeInDown">
  <div id="formContent">
    {/* Tabs Titles */}
    {/* Icon */}
    <div className="fadeIn first">
     
    </div>
    {/* Login Form */}
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
      <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
    </form>
    {/* Remind Passowrd */}
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>
  </div>
</div>

    )
}

export default LoginPage
