(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{156:function(e,a,t){e.exports=t(191)},161:function(e,a,t){},165:function(e,a,t){},187:function(e,a,t){},191:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),o=(t(161),t(26)),s=t(12),i=t(66),m=t(130),d=t.n(m),u=t(131),E=t(53),v={task:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INSERT":case"DELETE":return Object(E.a)({},e);case"Check":return Object(E.a)({},e,{status:!e.status});case"GET":return Object(E.a)({},e,{task:a.payload});default:return e}},g={user:window.sessionStorage.getItem("user")?JSON.parse(window.sessionStorage.getItem("user")):null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"Login":return window.sessionStorage.setItem("user",JSON.stringify(a.payload)),Object(E.a)({},e);case"GET":return Object(E.a)({},e,{user:window.sessionStorage.getItem("user")?JSON.parse(window.sessionStorage.getItem("user")):null});case"Logout":return window.sessionStorage.setItem("user",JSON.stringify({})),window.sessionStorage.removeItem("user"),Object(E.a)({},e,{user:null});default:return e}},f=Object(i.c)({Task:p,User:b}),h=Object(i.d)(f,Object(i.a)(d.a,u.a)),N=(t(165),t(91)),k="https://my-project-1482573108901.web.app/",y="62144225234-aasn2udkh8gkfj30jbo5nipcopg74pem.apps.googleusercontent.com",w=t(44);var j=Object(w.g)((function(e){var a=Object(s.b)(),t=function(t){console.log(t),t.googleId&&(a({type:"Login",payload:t.profileObj}),e.history.push("/app/"))};return l.a.createElement("div",{className:"Login-container"},l.a.createElement(N.GoogleLogin,{clientId:y,buttonText:"Login With Google",onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin",isSignedIn:!0}))})),S=t(30),O=t(25),T=t(232),D=t(145),x=t(234),L=t(100),C=t.n(L),M=t(92),I=t.n(M),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};M.store.addNotification({title:e.title?e.title:"",message:e.message?e.message:"Message Hear",type:e.type?e.type:"success",insert:e.insertPosition?e.insertPosition:"top",container:e.containerPosition?e.containerPosition:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:e.duration?e.duration:3e3,onScreen:!0}})},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"task";return function(a,t){var n=t(),l={id:n?n.User.user.googleId:null};C.a.post(k+e,l).then((function(e){a(A(e.data))}))}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"task/addTask",a=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"task";return function(n){C.a.post(k+e,a).then((function(e){e.data.error||(Y({message:"Data Inserted Successfully."}),setTimeout((function(){n(P(t))}),200))})).catch((function(e){console.log(e)}))}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"task/deleteTask",a=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"task";return function(n){C.a.post(k+e,a).then((function(e){e.data.error||(Y({message:"Data Deleted.",type:"danger"}),setTimeout((function(){n(P(t))}),200))})).catch((function(e){console.log(e)}))}},A=function(e){return{type:"GET",payload:e}};var G=Object(w.g)((function(e){var a=Object(s.c)((function(e){return e.User.user})),t=l.a.useState(null),n=Object(O.a)(t,2),c=n[0],r=n[1],o=Object(s.b)(),i=function(){r(null)};return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-wrapper"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Dashboard")),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"sr-only"},"Toggle navigation"),l.a.createElement("span",{className:"navbar-toggler-icon icon-bar"}),l.a.createElement("span",{className:"navbar-toggler-icon icon-bar"}),l.a.createElement("span",{className:"navbar-toggler-icon icon-bar"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link",href:"/",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"material-icons"},"notifications"),l.a.createElement("span",{className:"notification"},"5"),l.a.createElement("p",{className:"d-lg-none d-md-block"},"Some Actions")),l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdownMenuLink"},l.a.createElement("a",{className:"dropdown-item",href:"/"},"Mike John responded to your email"),l.a.createElement("a",{className:"dropdown-item",href:"/"},"You have 5 new tasks"),l.a.createElement("a",{className:"dropdown-item",href:"/"},"You're now friend with Andrew"),l.a.createElement("a",{className:"dropdown-item",href:"/"},"Another Notification"),l.a.createElement("a",{className:"dropdown-item",href:"/"},"Another One"))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("button",{className:"nav-link btn btn-link","aria-expanded":"false","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},a?l.a.createElement("div",null,l.a.createElement(T.a,{alt:"Remy Sharp",src:a.imageUrl})," "):l.a.createElement("i",{className:"material-icons"},"person"),l.a.createElement("p",{className:"d-lg-none d-md-block"},"Account")),l.a.createElement(D.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:i},l.a.createElement(x.a,{onClick:i},"Profile"),l.a.createElement(x.a,{onClick:i},"My account"),l.a.createElement("div",{className:"dropdown-divider"}),l.a.createElement(N.GoogleLogout,{clientId:y,render:function(e){return l.a.createElement(x.a,{onClick:e.onClick},"Logout")},buttonText:"Logout",onLogoutSuccess:function(){o({type:"Logout"}),setTimeout((function(){e.history.push("/login")}),200)}})))))))}));var W=function(e){var a=e.activeLink,t=Object(s.c)((function(e){return e.User.user}));return l.a.createElement("div",{className:"sidebar","data-color":"azure","data-background-color":"white","data-image":"../assets/img/sidebar-1.jpg"},l.a.createElement("div",{className:"logo"},l.a.createElement(S.c,{to:"/",className:"simple-text logo-normal"},"TO DO")),l.a.createElement("div",{className:"sidebar-wrapper"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"/"===a?"nav-item active":"nav-item "},l.a.createElement(S.c,{className:"nav-link",to:"/"},l.a.createElement("i",{className:"material-icons"},"dashboard"),l.a.createElement("p",null,"Dashboard"))),l.a.createElement("li",{className:"/latest"===a?"nav-item active":"nav-item "},l.a.createElement(S.c,{className:"nav-link",to:"/latest"},l.a.createElement("i",{className:"material-icons"},"today"),l.a.createElement("p",null,"Today"))),l.a.createElement("li",{className:"/important"===a?"nav-item active":"nav-item "},l.a.createElement(S.c,{className:"nav-link",to:"/important"},l.a.createElement("i",{className:"material-icons"},"stars"),l.a.createElement("p",null,"Important"))),l.a.createElement("li",{className:"/planned"===a?"nav-item active":"nav-item "},l.a.createElement(S.c,{to:"/planned",className:"nav-link"},l.a.createElement("i",{className:"material-icons"},"schedule"),l.a.createElement("p",null,"planned"))),t?l.a.createElement("li",{className:"nav-item active-pro"},l.a.createElement(S.c,{className:"nav-link",to:"/profile"},l.a.createElement("i",{className:"material-icons"},l.a.createElement(T.a,{alt:"Remy Sharp",src:t.imageUrl,style:{height:"30px",width:"30px"}})),l.a.createElement("p",null,t.name))):" ")))};var F=function(e){var a=e.icon?e.icon:"content_copy",t=e.category?e.category:"Card Category",n=e.title?e.title:"Card Title",c=e.footer?e.footer.icon:"",r=e.footer?e.footer.link:{loction:"",text:"for Link pass as prpos link={loction:' ',text:' '}"},o=e.color?"card-header-"+e.color:"card-header-success";return l.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},l.a.createElement("div",{className:"card card-stats"},l.a.createElement("div",{className:"card-header card-header-icon "+o},l.a.createElement("div",{className:"card-icon"},l.a.createElement("i",{className:"material-icons"},a)),l.a.createElement("p",{className:"card-category"},t),l.a.createElement("h3",{className:"card-title"},n)),l.a.createElement("div",{className:"card-footer"},l.a.createElement("div",{className:"stats"},c?l.a.createElement("i",{className:"material-icons text-primary"},c):"",r?l.a.createElement(S.c,{to:r.loction,className:r.loction?"":"disabled"},r.text):""))))};var U=function(){return l.a.createElement("div",{className:"row"},l.a.createElement(F,{icon:"home",color:"danger",footer:{link:{loction:"/",text:"Home"},icon:"home"},category:"Total Task",title:"50"}),l.a.createElement(F,{icon:"today",color:"primary",footer:{link:{loction:"/latest",text:"Today's Task"},icon:"today"},category:"Today's Task",title:"5"}),l.a.createElement(F,{icon:"stars",color:"info",footer:{link:{loction:"/important",text:"Priority"},icon:"stars"},category:"Priority Task",title:"2"}),l.a.createElement(F,null))},J=t(230),z=t(225),R=t(28),Z=t.n(R),K=t(227),_=t(231),V=t(228),X=t(18),$=t(223),q=t(235),Q=t(143);function ee(e){var a=Object(n.useState)("initialState"),t=Object(O.a)(a,2),c=t[0],r=t[1],o=Object(s.c)((function(e){return e.User.user})),i=Object(s.b)();return l.a.createElement(K.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(K.a.Header,{closeButton:!0},l.a.createElement(K.a.Title,{id:"contained-modal-title-vcenter"},"Add a Task")),l.a.createElement(K.a.Body,null,l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(V.a,{id:"outlined-basic",label:"Task",variant:"outlined",fullWidth:!0,onChange:function(e){r(e.target.value)}}))),l.a.createElement(K.a.Footer,null,l.a.createElement(_.a,{variant:"success",onClick:function(){var a={Task:c,userID:o.googleId};console.log(o,a),i(B("task/addtask",a)),e.onHide()}},"Save"),l.a.createElement(_.a,{variant:"outline-danger",onClick:e.onHide},"Close")))}function ae(e){var a=Object(n.useState)("initialState"),t=Object(O.a)(a,2),c=t[0],r=t[1],o=l.a.useState(new Date),i=Object(O.a)(o,2),m=i[0],d=i[1],u=l.a.useState(new Date),E=Object(O.a)(u,2),v=E[0],p=E[1],g=l.a.useState(""),b=Object(O.a)(g,2),f=b[0],h=b[1],N=Object(s.c)((function(e){return e.User.user})),k=Object(s.b)(),y=function(e){d(e)},w=function(e){p(e)},j=function(e){h(e.target.name)};return l.a.createElement(X.a,{utils:Q.a},l.a.createElement(K.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(K.a.Header,{closeButton:!0},l.a.createElement(K.a.Title,{id:"contained-modal-title-vcenter"},"Add a Task")),l.a.createElement(K.a.Body,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(V.a,{id:"outlined-basic",label:"Task",variant:"outlined",fullWidth:!0,onChange:function(e){r(e.target.value)}})),l.a.createElement("div",{className:"col-md-6 col-sm-6"},l.a.createElement($.a,{margin:"normal",id:"date-picker-dialog",label:"Starting Date",format:"dd/MM/yyyy",value:m,onChange:y,KeyboardButtonProps:{"aria-label":"change date"}})),l.a.createElement("div",{className:"col-md-6 col-sm-6"},l.a.createElement(q.a,{margin:"normal",id:"time-picker",label:"Starting Time",value:m,onChange:y,KeyboardButtonProps:{"aria-label":"change time"}})),l.a.createElement("div",{className:"col-md-6 col-sm-6"},l.a.createElement($.a,{margin:"normal",id:"date-picker-dialog1",label:"Ending Date",format:"dd/MM/yyyy",value:v,onChange:w,KeyboardButtonProps:{"aria-label":"change date"}})),l.a.createElement("div",{className:"col-md-6 col-sm-6"},l.a.createElement(q.a,{margin:"normal",id:"time-picker1",label:"Ending Time",value:v,onChange:w,KeyboardButtonProps:{"aria-label":"change time"}})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"well well-sm text-center"},l.a.createElement("div",{className:"btn-group colorPicker","data-toggle":"buttons"},["#64b5f6","#d1c4e9","#26c6da","#80cbc4","#ff8a65","#f48fb1"].map((function(e){return l.a.createElement("label",{className:f===e?"btn active":"btn",id:e,style:{backgroundColor:e}},l.a.createElement("input",{type:"radio",name:e,autoComplete:"off",id:e,onClick:j}),l.a.createElement("span",{className:"material-icons"},"check"))}))))))),l.a.createElement(K.a.Footer,null,l.a.createElement(_.a,{variant:"success",onClick:function(){console.log(c,m,v);var a={Task:c,startDate:m,endDate:v,color:f,userID:N.googleId};k(B("Schedule/addtask",a,"Schedule")),e.onHide()}},"Save"),l.a.createElement(_.a,{variant:"outline-danger",onClick:e.onHide},"Close"))))}function te(e){var a=Object(s.b)(),t=e.data?Z()(e.data.start).format("DD-MM-YYYY"):"",n=e.data?Z()(e.data.start).format("hh:mm A"):"",c=e.data?Z()(e.data.end).format("DD-MM-YYYY"):"",r=e.data?Z()(e.data.end).format("hh:mm A"):"";return l.a.createElement(K.a,Object.assign({},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),l.a.createElement(K.a.Header,{closeButton:!0},l.a.createElement(K.a.Title,{id:"contained-modal-title-vcenter"},"Your Task")),l.a.createElement(K.a.Body,null,e.data?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"}," ",l.a.createElement("h3",null," ",e.data.title," ")," "),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-md-6"}," Start Time : "),l.a.createElement("div",{className:"col-md-3"}," ",t," "),l.a.createElement("div",{className:"col-md-3"}," ",n," "),l.a.createElement("div",{className:"col-md-6"}," End Time : "),l.a.createElement("div",{className:"col-md-3"}," ",c," "),l.a.createElement("div",{className:"col-md-3"}," ",r," ")):" "),l.a.createElement(K.a.Footer,null,l.a.createElement(_.a,{variant:"success",onClick:function(){}},"Complete"),l.a.createElement(_.a,{variant:"outline-danger",onClick:function(){var t={id:e.data.id};a(H("Schedule/deletetask",t,"Schedule")),e.onHide()}},"Delete"),l.a.createElement(_.a,{variant:"outline-info",onClick:e.onHide},"Close")))}function ne(e){var a=Object(s.b)(),t=e.data?Z()(e.data.task.Date).format("DD-MM-YYYY"):"",n=e.data?Z()(e.data.task.Date).format("hh:mm A"):"";return l.a.createElement(K.a,Object.assign({},e,{size:"md",centered:!0}),l.a.createElement(K.a.Header,{closeButton:!0},l.a.createElement(K.a.Title,{id:"contained-modal-title-vcenter"},"Are you sure?")),l.a.createElement(K.a.Body,null,e.data?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"}," ",e.data.task.Task," "),l.a.createElement("div",{className:"col-md-3"}," ",t," "),l.a.createElement("div",{className:"col-md-3"}," ",n," ")):" "),l.a.createElement(K.a.Footer,null,l.a.createElement(_.a,{variant:"danger",onClick:function(){var t={id:e.data.id};a(H("task/deletetask",t,"task")),e.onHide()}},"Delete"),l.a.createElement(_.a,{variant:"outline-info",onClick:e.onHide},"Close")))}var le=function(e){var a="col-lg-"+e.lg,t=e.Data,c=Object(s.b)(),r=!!e.currentDate,o=l.a.useState(!1),i=Object(O.a)(o,2),m=i[0],d=i[1],u=l.a.useState(!1),E=Object(O.a)(u,2),v=E[0],p=E[1],g=l.a.useState(null),b=Object(O.a)(g,2),f=b[0],h=b[1],N=Object(s.c)((function(e){return e.User.user})),k={id:N?N.googleId:null};return Object(n.useEffect)((function(){c(P("task/",k))}),[]),l.a.createElement("div",{className:"row justify-content-lg-center col-lg-12"},l.a.createElement(ee,{show:m,onHide:function(){return d(!1)}}),l.a.createElement(ne,{show:v,data:f,onHide:function(){return p(!1)}}),l.a.createElement("div",{className:a},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header card-header-tabs card-header-primary"},l.a.createElement("div",{className:"nav-tabs-navigation"},l.a.createElement("div",{className:"nav-tabs-wrapper"},l.a.createElement("ul",{className:"nav nav-tabs","data-tabs":"tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{className:"nav-link btn btn-link",onClick:function(){return d(!0)},"data-toggle":"tab"},l.a.createElement("i",{className:"material-icons"},"add")," Add",l.a.createElement("div",{className:"ripple-container"}))))))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"tab-content"},l.a.createElement("div",{className:"tab-pane active",id:"profile"},l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,t?t.map((function(e){if(!r||Z()(e.task.Date).format("DD-MM-YYYY")===Z()().format("DD-MM-YYYY")){var a=Z()(e.task.Date).format("DD-MM-YYYY"),t=Z()(e.task.Date).format("hh:mm A");return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement(J.a,{color:"primary",checked:e.status,onChange:function(){return c({type:"Check"})}})),l.a.createElement("td",null," ",e.task.Task," "),l.a.createElement("td",null," ",a," "),l.a.createElement("td",null," ",t," "),l.a.createElement("td",{className:"td-actions text-right"},l.a.createElement("button",{type:"button",rel:"tooltip",title:"Edit Task",className:"btn btn-primary btn-link btn-sm",onClick:function(){alert("EDIT",e.id),console.log(e)}},l.a.createElement("i",{className:"material-icons"},"edit")),l.a.createElement("button",{type:"button",rel:"tooltip",title:"Remove",className:"btn btn-danger btn-link btn-sm",onClick:function(){p(!0),h(e)}},l.a.createElement("i",{className:"material-icons"},"close"))))}})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"5",style:{textAlign:"center"}},l.a.createElement(z.a,null)))))))))))};var ce=function(){var e=Object(s.c)((function(e){return e.Task.task}));return l.a.createElement("div",{className:"row"},l.a.createElement(le,{lg:"10",Data:e,currentDate:!0}))};var re=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"card card-chart"},l.a.createElement("div",{className:"card-header card-header-success"},l.a.createElement("div",{className:"ct-chart",id:"dailySalesChart"})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},"Daily Sales"),l.a.createElement("p",{className:"card-category"},l.a.createElement("span",{className:"text-success"},l.a.createElement("i",{className:"fa fa-long-arrow-up"})," 55%"," ")," ","increase in today sales.")),l.a.createElement("div",{className:"card-footer"},l.a.createElement("div",{className:"stats"},l.a.createElement("i",{className:"material-icons"},"access_time")," updated 4 minutes ago")))))},oe=(t(186),t(226)),se=t(108),ie=Object(se.b)(Z.a);var me=function(e){var a=l.a.useState(!1),t=Object(O.a)(a,2),n=t[0],c=t[1],r=l.a.useState(!1),o=Object(O.a)(r,2),s=o[0],i=o[1],m=l.a.useState([]),d=Object(O.a)(m,2),u=d[0],E=d[1];return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header card-header-tabs card-header-info"},l.a.createElement(ae,{show:n,onHide:function(){return c(!1)}}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 d-flex justify-content-start"},l.a.createElement("span",{className:"btn btn-info disable"}," Task ")),l.a.createElement("div",{className:"col-md-6 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-info",onClick:function(){return c(!0)}},l.a.createElement("i",{className:"material-icons"},"add")," Add")))),l.a.createElement("div",{className:"card-body"},l.a.createElement(te,{show:s,onHide:function(){return i(!1)},data:u}),e.events?l.a.createElement(se.a,{localizer:ie,events:e.events,startAccessor:"start",endAccessor:"end",onSelectEvent:function(e){E(e),i(!0)},eventPropGetter:function(e){return{style:{backgroundColor:e.color,opacity:.8,color:"black",border:"0px",padding:"4px 15px",borderRadius:"15px",display:"block"}}},style:{height:"70vh"}}):l.a.createElement(oe.a,null)))};var de=function(){var e=Object(s.c)((function(e){return e.Task.task})),a=Object(s.b)();Object(n.useEffect)((function(){a(P("Schedule"))}),[]);var t=e?[]:null;return e&&e.map((function(e){t.push({id:e.id,title:e.task.Task,color:e.task.color?e.task.color:"",start:new Date(e.task.startDate),end:new Date(e.task.endDate)})})),l.a.createElement("div",null,l.a.createElement(me,{events:t}))};t(187);var ue=function(){return l.a.createElement("div",null,l.a.createElement("svg",{width:"380px",height:"500px",viewBox:"0 0 837 1045",className:"svg",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",sketch:"http://www.bohemiancoding.com/sketch/ns"},l.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",type:"MSPage"},l.a.createElement("path",{d:"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z",id:"Polygon-1",stroke:"#007FB2",strokeWidth:6,type:"MSShapeGroup"}),l.a.createElement("path",{d:"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z",id:"Polygon-2",stroke:"#EF4A5B",strokeWidth:6,type:"MSShapeGroup"}),l.a.createElement("path",{d:"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z",id:"Polygon-3",stroke:"#795D9C",strokeWidth:6,type:"MSShapeGroup"}),l.a.createElement("path",{d:"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z",id:"Polygon-4",stroke:"#F2773F",strokeWidth:6,type:"MSShapeGroup"}),l.a.createElement("path",{d:"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z",id:"Polygon-5",stroke:"#36B455",strokeWidth:6,type:"MSShapeGroup"}))),l.a.createElement("div",{className:"message-box"},l.a.createElement("h1",null,"404"),l.a.createElement("p",null,"Page not found"),l.a.createElement("div",{className:"buttons-con"},l.a.createElement("div",{className:"action-link-wrap"},l.a.createElement("a",{href:"/",className:"link-button"},"Go to Home Page")))))};var Ee=function(){var e=window.sessionStorage.getItem("user")?JSON.parse(window.sessionStorage.getItem("user")):"";return l.a.createElement("div",{class:"row justify-content-md-center"},l.a.createElement("div",{class:"col-md-6"},l.a.createElement("div",{class:"card card-profile"},l.a.createElement("div",{class:"card-avatar"},l.a.createElement("a",{href:"javascript:;"},l.a.createElement("img",{class:"img",src:e.imageUrl}))),l.a.createElement("div",{class:"card-body"},l.a.createElement("h6",{class:"card-category text-gray"}," Designation  "),l.a.createElement("h4",{class:"card-title"},e.name),l.a.createElement("p",{class:"card-description"},"Description"),l.a.createElement("a",{href:"javascript:;",class:"btn btn-success btn-round"},"Follow")))))};var ve=Object(w.g)((function(e){var a=Object(s.b)();Object(n.useEffect)((function(){a({type:"GET"})}),[]);var t=window.location.pathname,c=Object(o.a)(),r=!!window.sessionStorage.getItem("user");return l.a.createElement(S.b,{history:c},l.a.createElement("div",{className:"wrapper"},l.a.createElement(W,{activeLink:t}),l.a.createElement("div",{className:"main-panel"},l.a.createElement(G,null),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"container-fluid"},r?l.a.createElement(w.d,null,l.a.createElement(w.b,{exact:!0,path:"/",component:U}),l.a.createElement(w.b,{exact:!0,path:"/latest",component:ce}),l.a.createElement(w.b,{exact:!0,path:"/important",component:re}),l.a.createElement(w.b,{exact:!0,path:"/planned",component:de}),l.a.createElement(w.b,{exact:!0,path:"/profile",component:Ee}),l.a.createElement(w.b,{path:"*",component:ue})):l.a.createElement(w.d,null,l.a.createElement(w.b,{exact:!0,path:"/"}," ",e.history.push("/login")," "),l.a.createElement(w.b,{exact:!0,path:"*"}," ",e.history.push("/login")," ")))))))}));t(188);function pe(){var e=Object(o.a)(),a=!!window.sessionStorage.getItem("user");return l.a.createElement(S.a,{history:e,basename:"/sahil"},l.a.createElement(I.a,null),l.a.createElement(w.d,null,a?l.a.createElement(w.a,{exact:!0,from:"/",to:"app/"}):l.a.createElement(w.a,{exact:!0,from:"/",to:"login/"}),l.a.createElement(w.b,{exact:!0,path:"/app"}," ",l.a.createElement(ve,null)," "),l.a.createElement(w.b,{exact:!0,path:"/login"}," ",l.a.createElement(j,null)," "),l.a.createElement(w.b,{path:"*",component:ue})))}var ge=function(){return l.a.createElement(s.a,{store:h},l.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(189);r.a.render(l.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.8d659a23.chunk.js.map