import React from 'react';
import { Link } from 'react-router-dom';

function Statuscard(props) {
    const icon = props.icon ? props.icon : "content_copy";
    const category = props.category ? props.category : "Card Category";
    const title = props.title ? props.title : "Card Title";
    const footerIcon = props.footer ? props.footer.icon : "";
    const footerLink = props.footer ? props.footer.link : {loction:"",text:"for Link pass as prpos link={loction:' ',text:' '}"};
    const color = props.color ? "card-header-"+props.color : "card-header-success";

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className={"card-header card-header-icon "+color}>
          <div className="card-icon">
            <i className="material-icons">{icon}</i>
          </div>
          <p className="card-category">{category}</p>
          <h3 className="card-title">
            {title}
          </h3>
        </div>
        <div className="card-footer">
          <div className="stats">
            { footerIcon ? <i className="material-icons text-primary">{footerIcon}</i> : "" }
            { footerLink ?  <Link to={footerLink.loction} className={footerLink.loction?"":"disabled"}>{footerLink.text}</Link> : ""}
          </div>
        </div>
      </div>
    </div>
  );

}

export default Statuscard;