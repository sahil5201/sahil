import React from 'react';

function Statuscard(props) {
    console.log("",props)
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-header card-header-warning card-header-icon">
          <div className="card-icon">
            <i className="material-icons">content_copy</i>
          </div>
          <p className="card-category">Used Space</p>
          <h3 className="card-title">
            49/50<small>GB</small>
          </h3>
        </div>
        <div className="card-footer">
          <div className="stats">
            <i className="material-icons text-danger">warning</i>
            <a href="./">Get More Space...</a>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Statuscard;