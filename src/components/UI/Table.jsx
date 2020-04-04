import React from 'react';
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { insert, Delete, Check } from '../../redux/action/TaskAction';


function Table(props) {
    const lg = "col-lg-"+props.lg;
    const data = props.Data
    const dispatch = useDispatch() 

  return (
    
    <div className="row justify-content-lg-center col-lg-12">
    <div className={lg}>     
    <div className="card">
      <div className="card-header card-header-tabs card-header-primary">
        <div className="nav-tabs-navigation">
          <div className="nav-tabs-wrapper">

            <ul className="nav nav-tabs" data-tabs="tabs">
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => dispatch(insert()) } data-toggle="tab">
                  <i className="material-icons">add</i> Add
                  <div className="ripple-container" />
                </button >
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={() => dispatch(Delete()) } data-toggle="tab">
                  <i className="material-icons">remove</i> Delete
                  <div className="ripple-container" />
                </button >
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="tab-content">
          <div className="tab-pane active" id="profile">
            <table className="table">
              <tbody>
                
                {data.map((item,index) => {
                            return(
                              
                              <tr key={index}>
                              <td>
                                <Checkbox color="primary" checked={item.status} onChange={() => dispatch(Check()) }/>
                              </td>
                              <td> {item.task} </td>
                              <td> {item.user} </td>
                              <td> {item.priority} </td>
                              <td className="td-actions text-right">
                                <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm" onClick={()=> { alert("EDIT",index) 
                                  console.log(item) } }>
                                  <i className="material-icons">edit</i>
                                </button>
                                <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm" onClick={()=> { alert("DELETE",index)
                              console.log(item) } }>
                                  <i className="material-icons">close</i>
                                </button>
                              </td>
                            </tr>

                            )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>
  ) 

}

export default Table;