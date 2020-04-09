import React from 'react'

function ImportantTask() {
    return (

          <div className="row">
            <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header card-header-success">
                  <div className="ct-chart" id="dailySalesChart">
                    
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily Sales</h4>
                  <p className="card-category">
                    <span className="text-success">
                      <i className="fa fa-long-arrow-up" /> 55%{" "}
                    </span>{" "}
                    increase in today sales.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> updated 4
                    minutes ago
                  </div>
                </div>
              </div>
            </div>
          </div>

    );
}

export default ImportantTask
