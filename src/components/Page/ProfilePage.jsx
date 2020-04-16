import React from 'react'

function ProfilePage() {
    const user = window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : "";
    return (
        <div class="row justify-content-md-center">
            <div class="col-md-6">
              <div class="card card-profile">
                <div class="card-avatar">
                  <a href="javascript:;">
                    <img class="img" src={user.imageUrl} />
                  </a>
                </div>
                <div class="card-body">
                  <h6 class="card-category text-gray"> Designation  </h6>
                  <h4 class="card-title">{user.name}</h4>
                  <p class="card-description">
                    Description
                  </p>
                  <a href="javascript:;" class="btn btn-success btn-round">Follow</a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ProfilePage
