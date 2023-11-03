(()=>{var e={};e.id=783,e.ids=[783],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},94614:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>s.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var r=t(67096),n=t(16132),l=t(37284),s=t.n(l),o=t(32564),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);t.d(a,i);let d=["",{children:["maintenance",{children:["mantenances",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,31169)),"D:\\MAI\\MAI_Control_Soft\\src\\app\\maintenance\\mantenances\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,79113)),"D:\\MAI\\MAI_Control_Soft\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"]}],u=["D:\\MAI\\MAI_Control_Soft\\src\\app\\maintenance\\mantenances\\page.tsx"],c="/maintenance/mantenances/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/maintenance/mantenances/page",pathname:"/maintenance/mantenances",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},79842:(e,a,t)=>{Promise.resolve().then(t.bind(t,89920))},89920:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>page});var r=t(30784),n=t(9885),l=t(97559),s=t(28344),o=t(43872),i=t(14800),d=t(73416),u=t(34173),c=t(92870),m=t.n(c),p=t(16614),x=t.n(p),h=t(44952),f=t(50298),g=t(72586);let b=f.Ry().shape({name:f.Z_().required("required"),brand:f.Z_().required("required"),model:f.Z_().email("invalid email").required("required"),serial:f.Z_().matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Phone number is not valid").required("required"),cost:f.Z_().required("required"),status:f.Z_().required("required"),location:f.Z_().required("required")}),_={name:"",brand:"",model:"",serial:"",status:"",supplier:"",cost:"",date_of_purchase:"",purchase_order:"",location:"",instalation_date:"",warranty:"",cost_center:"",deprecation:"",description:""},maintenances_MaintenanceForm=()=>{let e=(0,s.Z)(),a=(0,l.ZP)(e.palette.mode),t=(0,g.Z)("(min-width:600px)"),n={backgroundColor:a.blueAccent[800],marginLeft:5,color:a.grey[100],border:"none"};return r.jsx(o.default,{children:r.jsx(h.J9,{onSubmit:e=>{console.log(e)},initialValues:_,validationSchema:b,children:({values:e,errors:a,touched:l,handleBlur:s,handleChange:i,handleSubmit:d})=>(0,r.jsxs)("form",{onSubmit:d,children:[(0,r.jsxs)(o.default,{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",sx:{"& > div":{gridColumn:t?void 0:"span 4"}},children:[r.jsx(m(),{id:"outlined-nombre",label:"Equipo",fullWidth:!0,variant:"filled",type:"text",onBlur:s,onChange:i,value:e.name,name:"name",error:!!l.name&&!!a.name,helperText:l.name&&a.name,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Proveedor",onBlur:s,onChange:i,value:e.brand,name:"brand",error:!!l.brand&&!!a.brand,helperText:l.brand&&a.brand,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Tipo de mantenimiento",onBlur:s,onChange:i,value:e.model,name:"model",error:!!l.model&&!!a.model,helperText:l.model&&a.model,sx:{gridColumn:"span 2"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Fecha de inicio",onBlur:s,onChange:i,value:e.serial,name:"serial",error:!!l.serial&&!!a.serial,helperText:l.serial&&a.serial,sx:{gridColumn:"span 2"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Hora de inicio",onBlur:s,onChange:i,value:e.status,name:"status",error:!!l.status&&!!a.status,helperText:l.status&&a.status,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Fecha de finalizaci\xf3n",onBlur:s,onChange:i,value:e.status,name:"status",error:!!l.status&&!!a.status,helperText:l.status&&a.status,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Hora de finalizaci\xf3n",onBlur:s,onChange:i,value:e.status,name:"status",error:!!l.status&&!!a.status,helperText:l.status&&a.status,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Kit Predefinido",onBlur:s,onChange:i,value:e.status,name:"status",error:!!l.status&&!!a.status,helperText:l.status&&a.status,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Repuestos requeridos",onBlur:s,onChange:i,value:e.status,name:"status",error:!!l.status&&!!a.status,helperText:l.status&&a.status,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Consumibles requeridos",onBlur:s,onChange:i,value:e.status,name:"status",error:!!l.status&&!!a.status,helperText:l.status&&a.status,sx:{gridColumn:"span 1"},color:"secondary"}),r.jsx(m(),{fullWidth:!0,variant:"filled",type:"text",label:"Notas",onBlur:s,onChange:i,value:e.supplier,name:"supplier",error:!!l.supplier&&!!a.supplier,helperText:l.supplier&&a.supplier,sx:{gridColumn:"span 1"},color:"secondary"})]}),(0,r.jsxs)(o.default,{display:"flex",justifyContent:"end",mt:"20px",children:[r.jsx(x(),{type:"submit",variant:"contained",sx:n,children:"Crear"}),r.jsx(x(),{variant:"contained",sx:n,children:"Cancelar"})]})]})})})};var y=t(46249);let page=()=>{let e=(0,s.Z)(),a=(0,l.ZP)(e.palette.mode),[t,c]=(0,n.useState)(!1);return(0,r.jsxs)(o.default,{m:"20px",children:[(0,r.jsxs)(o.default,{display:"flex",justifyContent:"space-between",children:[r.jsx(o.default,{display:"flex",children:r.jsx(u.Z,{title:"Mantenimientos",subtitle:"Tipos de mantenimiento y detalles de programaci\xf3n"})}),r.jsx(o.default,{display:"flex",alignItems:"end",children:r.jsx(y.Z,{setShowAddNewForm:c,showAddNewForm:t})})]}),r.jsx(o.default,{m:"40px 0 0 0",height:"75vh",sx:{"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:a.greenAccent[300]},"& .MuiDataGrid-columnHeaders":{backgroundColor:a.blueAccent[700],borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:a.primary[400]},"& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:a.blueAccent[700]},"& .MuiCheckbox-root":{color:`${a.greenAccent[200]} !important`},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:`${a.grey[100]} !important`}},children:t?r.jsx(maintenances_MaintenanceForm,{}):r.jsx(i.DataGrid,{rows:d.lc,columns:[{field:"id",headerName:"ID",flex:.5},{field:"registrarId",headerName:"Registrar ID"},{field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},{field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},{field:"phone",headerName:"Phone Number",flex:1},{field:"email",headerName:"Email",flex:1},{field:"address",headerName:"Address",flex:1},{field:"city",headerName:"City",flex:1},{field:"zipCode",headerName:"Zip Code",flex:1}],slots:{toolbar:i.GridToolbar}})})]})}},31169:(e,a,t)=>{"use strict";t.r(a),t.d(a,{$$typeof:()=>s,__esModule:()=>l,default:()=>i});var r=t(95153);let n=(0,r.createProxy)(String.raw`D:\MAI\MAI_Control_Soft\src\app\maintenance\mantenances\page.tsx`),{__esModule:l,$$typeof:s}=n,o=n.default,i=o}};var a=require("../../../webpack-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),t=a.X(0,[743,614,800,155,461,256,173,416,249],()=>__webpack_exec__(94614));module.exports=t})();