(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{21716:function(e,n,r){Promise.resolve().then(r.bind(r,41265))},41265:function(e,n,r){"use strict";r.r(n);var t=r(57437),l=r(2265),a=r(55534),o=r(41101),i=r(96507),s=r(22430),d=r(40418),c=r(45658),u=r(57890),m=r(45089);n.default=()=>{let e=(0,o.Z)(),n=(0,a.ZP)(e.palette.mode),[r,h]=(0,l.useState)(!1);return(0,t.jsxs)(i.Z,{m:"20px",children:[(0,t.jsxs)(i.Z,{display:"flex",justifyContent:"space-between",children:[(0,t.jsx)(i.Z,{display:"flex",children:(0,t.jsx)(u.Z,{title:"Requisiciones",subtitle:"Registros de solicitudes de compras"})}),(0,t.jsx)(i.Z,{display:"flex",alignItems:"end",children:(0,t.jsx)(m.Z,{setShowAddNewForm:h,showAddNewForm:r})})]}),(0,t.jsx)(i.Z,{m:"40px 0 0 0",height:"75vh",sx:{"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:n.greenAccent[300]},"& .MuiDataGrid-columnHeaders":{backgroundColor:n.blueAccent[700],borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:n.primary[400]},"& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:n.blueAccent[700]},"& .MuiCheckbox-root":{color:"".concat(n.greenAccent[200]," !important")},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:"".concat(n.grey[100]," !important")}},children:(0,t.jsx)(s._$,{rows:c.lc,columns:[{field:"id",headerName:"ID",flex:.5},{field:"registrarId",headerName:"Registrar ID"},{field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},{field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},{field:"phone",headerName:"Phone Number",flex:1},{field:"email",headerName:"Email",flex:1},{field:"address",headerName:"Address",flex:1},{field:"city",headerName:"City",flex:1},{field:"zipCode",headerName:"Zip Code",flex:1}],slots:{toolbar:d.n}})})]})}},45089:function(e,n,r){"use strict";var t=r(57437),l=r(2265),a=r(55534),o=r(41101),i=r(96507),s=r(73724),d=r(36175),c=r(8424),u=r(56176),m=r(29872),h=r(43989),x=r(74309),f=r(65952),b=r(89215),p=r(27832),g=r(65468),Z=r(13080);n.Z=e=>{let n=(0,o.Z)(),r=(0,a.ZP)(n.palette.mode),[j,C]=(0,l.useState)(!1),y=(0,l.useRef)(null),[k,N]=(0,l.useState)(1),{showAddNewForm:A,setShowAddNewForm:v}=e,I={backgroundColor:r.blueAccent[800],marginLeft:5,color:r.grey[100],border:"none"},M=["Editar","Historial","Detalles","Imprimir QR","Agendar Mantenimiento"],handleMenuItemClick=(e,n)=>{N(n),C(!1)},handleToggle=()=>{C(e=>!e)},handleClose=e=>{y.current&&y.current.contains(e.target)||C(!1)};return(0,t.jsxs)(i.Z,{display:"flex",children:[(0,t.jsx)(s.Z,{style:I,variant:"contained",startIcon:(0,t.jsx)(g.Z,{}),onClick:()=>v(!A),children:"Nuevo Equipo"}),(0,t.jsx)(s.Z,{variant:"contained",startIcon:(0,t.jsx)(b.Z,{}),style:I,children:"Detalles"}),(0,t.jsx)(s.Z,{style:I,variant:"contained",startIcon:(0,t.jsx)(p.Z,{}),children:"Sincronizar"}),(0,t.jsxs)(d.Z,{variant:"contained",ref:y,"aria-label":"Acciones",style:I,children:[(0,t.jsx)(s.Z,{onClick:handleToggle,style:I,children:"Acciones"}),(0,t.jsx)(s.Z,{size:"small",style:I,"aria-controls":j?"split-button-menu":void 0,"aria-expanded":j?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:handleToggle,children:(0,t.jsx)(Z.Z,{})})]}),(0,t.jsx)(h.Z,{sx:{zIndex:1},open:j,anchorEl:y.current,role:void 0,transition:!0,disablePortal:!0,children:e=>{let{TransitionProps:n,placement:l}=e;return(0,t.jsx)(u.Z,{...n,style:{transformOrigin:"bottom"===l?"center top":"center bottom"},children:(0,t.jsx)(m.Z,{children:(0,t.jsx)(c.d,{onClickAway:handleClose,children:(0,t.jsx)(f.Z,{id:"split-button-menu",autoFocusItem:!0,sx:{backgroundColor:r.blueAccent[900]},children:M.map((e,n)=>(0,t.jsx)(x.Z,{sx:{backgroundColor:r.blueAccent[900]},selected:n===k,onClick:e=>handleMenuItemClick(e,n),children:e},e))})})})})}})]})}}},function(e){e.O(0,[145,631,599,950,823,617,971,472,744],function(){return e(e.s=21716)}),_N_E=e.O()}]);