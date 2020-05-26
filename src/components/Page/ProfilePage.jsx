import React from 'react'

function ProfilePage() {
    const user = window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : "";
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="card card-profile">
                <div className="card-avatar">
                  <a href="/">
                    <img className="img" src={user.imageUrl} alt=""/>
                  </a>
                </div>
                <div className="card-body">
                  <h6 className="card-category text-gray"> Designation  </h6>
                  <h4 className="card-title">{user.name}</h4>
                  <h5 className="card-title">{user.googleId}</h5>
                  <h5 className="card-title">{user.email}</h5>
                  <p className="card-description">
                    Description
                  </p>
                  <a href="/" className="btn btn-success btn-round">Follow</a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ProfilePage
