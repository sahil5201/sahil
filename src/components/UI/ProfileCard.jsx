import React from 'react'

function ProfileCard(props) {
    const image = props.Image ? props.Image : "https://img.icons8.com/plasticine/2x/user.png";
    const name =  props.Name  ? props.Name  : "First Last";
    const description = props.Description ? props.Description : "Description Hear";
    const designation = props.Designation ? props.Designation : "Designation Hear";
    return (
      <div className="col-md-3 mt-4">
        <div className="card card-profile">
          <div className="card-avatar">
            <a href="/">
              <img
                className="img"
                alt=""
                src={image}
                style={{ height: "96px", width: "96px" }}
              />
            </a>
          </div>
          <div className="card-body">
            <h6 className="card-category text-gray"> {designation} </h6>
            <h4 className="card-title">{name}</h4>
            <p className="card-description">{description}</p>
            <a href="/" className="btn btn-success btn-round">
              Follow
            </a>
            <hr/>
            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <a className="p-2 fa-lg fb-ic">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 fa-lg pin-ic">
                <i className="fa fa-slack"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 fa-lg ins-ic">
                  <i className="fa fa-instagram"> </i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="p-2 fa-lg tw-ic">
                  <i className="fa fa-twitter"> </i>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    );
}

export default ProfileCard

