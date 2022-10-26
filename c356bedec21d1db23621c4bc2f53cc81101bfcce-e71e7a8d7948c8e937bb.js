"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[4933],{4722:function(e,n,t){var o=t(67294),r=t(54374),i=t(78798),a=t(90515),c=t(85893);function s(e){return e.substring(2).toLowerCase()}n.Z=function(e){var n=e.children,t=e.disableReactTree,l=void 0!==t&&t,u=e.mouseEvent,d=void 0===u?"onClick":u,f=e.onClickAway,v=e.touchEvent,p=void 0===v?"onTouchEnd":v,m=o.useRef(!1),h=o.useRef(null),g=o.useRef(!1),Z=o.useRef(!1);o.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var x=(0,r.Z)(n.ref,h),C=(0,i.Z)((function(e){var n=Z.current;Z.current=!1;var t=(0,a.Z)(h.current);!g.current||!h.current||"clientX"in e&&function(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}(e,t)||(m.current?m.current=!1:(e.composedPath?e.composedPath().indexOf(h.current)>-1:!t.documentElement.contains(e.target)||h.current.contains(e.target))||!l&&n||f(e))})),b=function(e){return function(t){Z.current=!0;var o=n.props[e];o&&o(t)}},k={ref:x};return!1!==p&&(k[p]=b(p)),o.useEffect((function(){if(!1!==p){var e=s(p),n=(0,a.Z)(h.current),t=function(){m.current=!0};return n.addEventListener(e,C),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,C),n.removeEventListener("touchmove",t)}}}),[C,p]),!1!==d&&(k[d]=b(d)),o.useEffect((function(){if(!1!==d){var e=s(d),n=(0,a.Z)(h.current);return n.addEventListener(e,C),function(){n.removeEventListener(e,C)}}}),[C,d]),(0,c.jsx)(o.Fragment,{children:o.cloneElement(n,k)})}},99133:function(e,n,t){t.d(n,{Z:function(){return z}});var o=t(4942),r=t(63366),i=t(87462),a=t(67294),c=t(2585),s=t(50565),l=t(62915),u=t(69114),d=t(25309),f=t(21672),v=t(85934),p=t(57893),m=t(18362);function h(e){return(0,m.Z)("MuiAlert",e)}var g=(0,p.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=t(33859),x=t(43327),C=t(85893),b=(0,x.Z)((0,C.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),k=(0,x.Z)((0,C.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),w=(0,x.Z)((0,C.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),E=(0,x.Z)((0,C.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=(0,x.Z)((0,C.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),y=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","variant"],M=(0,u.ZP)(v.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["".concat(t.variant).concat((0,f.Z)(t.color||t.severity))]]}})((function(e){var n=e.theme,t=e.ownerState,r="light"===n.palette.mode?l._j:l.$n,a="light"===n.palette.mode?l.$n:l._j,c=t.color||t.severity;return(0,i.Z)({},n.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},c&&"standard"===t.variant&&(0,o.Z)({color:n.vars?n.vars.palette.Alert["".concat(c,"Color")]:r(n.palette[c].light,.6),backgroundColor:n.vars?n.vars.palette.Alert["".concat(c,"StandardBg")]:a(n.palette[c].light,.9)},"& .".concat(g.icon),n.vars?{color:n.vars.palette.Alert["".concat(c,"IconColor")]}:{color:"dark"===n.palette.mode?n.palette[c].main:n.palette[c].light}),c&&"outlined"===t.variant&&(0,o.Z)({color:n.vars?n.vars.palette.Alert["".concat(c,"Color")]:r(n.palette[c].light,.6),border:"1px solid ".concat((n.vars||n).palette[c].light)},"& .".concat(g.icon),n.vars?{color:n.vars.palette.Alert["".concat(c,"IconColor")]}:{color:"dark"===n.palette.mode?n.palette[c].main:n.palette[c].light}),c&&"filled"===t.variant&&(0,i.Z)({fontWeight:n.typography.fontWeightMedium},n.vars?{color:n.vars.palette.Alert["".concat(c,"FilledColor")],backgroundColor:n.vars.palette.Alert["".concat(c,"FilledBg")]}:{backgroundColor:"dark"===n.palette.mode?n.palette[c].dark:n.palette[c].main,color:n.palette.getContrastText("dark"===n.palette.mode?n.palette[c].dark:n.palette[c].main)}))})),L=(0,u.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,n){return n.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),A=(0,u.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,n){return n.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),j=(0,u.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,n){return n.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,C.jsx)(b,{fontSize:"inherit"}),warning:(0,C.jsx)(k,{fontSize:"inherit"}),error:(0,C.jsx)(w,{fontSize:"inherit"}),info:(0,C.jsx)(E,{fontSize:"inherit"})},z=a.forwardRef((function(e,n){var t,o,a=(0,d.Z)({props:e,name:"MuiAlert"}),l=a.action,u=a.children,v=a.className,p=a.closeText,m=void 0===p?"Close":p,g=a.color,x=a.components,b=void 0===x?{}:x,k=a.componentsProps,w=void 0===k?{}:k,E=a.icon,z=a.iconMapping,O=void 0===z?R:z,P=a.onClose,T=a.role,I=void 0===T?"alert":T,N=a.severity,B=void 0===N?"success":N,W=a.variant,H=void 0===W?"standard":W,D=(0,r.Z)(a,y),_=(0,i.Z)({},a,{color:g,severity:B,variant:H}),F=function(e){var n=e.variant,t=e.color,o=e.severity,r=e.classes,i={root:["root","".concat(n).concat((0,f.Z)(t||o)),"".concat(n)],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(i,h,r)}(_),V=null!=(t=b.CloseButton)?t:Z.Z,X=null!=(o=b.CloseIcon)?o:S;return(0,C.jsxs)(M,(0,i.Z)({role:I,elevation:0,ownerState:_,className:(0,c.Z)(F.root,v),ref:n},D,{children:[!1!==E?(0,C.jsx)(L,{ownerState:_,className:F.icon,children:E||O[B]||R[B]}):null,(0,C.jsx)(A,{ownerState:_,className:F.message,children:u}),null!=l?(0,C.jsx)(j,{ownerState:_,className:F.action,children:l}):null,null==l&&P?(0,C.jsx)(j,{ownerState:_,className:F.action,children:(0,C.jsx)(V,(0,i.Z)({size:"small","aria-label":m,title:m,color:"inherit",onClick:P},w.closeButton,{children:(0,C.jsx)(X,(0,i.Z)({fontSize:"small"},w.closeIcon))}))}):null]}))}))},35717:function(e,n,t){t.d(n,{Z:function(){return O}});var o=t(29439),r=t(4942),i=t(63366),a=t(87462),c=t(67294),s=t(2585),l=t(50565),u=t(4722),d=t(69114),f=t(26247),v=t(25309),p=t(78603),m=t(21672),h=t(53954),g=t(62915),Z=t(85934),x=t(57893),C=t(18362);function b(e){return(0,C.Z)("MuiSnackbarContent",e)}(0,x.Z)("MuiSnackbarContent",["root","message","action"]);var k=t(85893),w=["action","className","message","role"],E=(0,d.ZP)(Z.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n=e.theme,t="light"===n.palette.mode?.8:.98,o=(0,g._4)(n.palette.background.default,t);return(0,a.Z)({},n.typography.body2,(0,r.Z)({color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(o),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,flexGrow:1},n.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),S=(0,d.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(e,n){return n.message}})({padding:"8px 0"}),y=(0,d.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(e,n){return n.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),M=c.forwardRef((function(e,n){var t=(0,v.Z)({props:e,name:"MuiSnackbarContent"}),o=t.action,r=t.className,c=t.message,u=t.role,d=void 0===u?"alert":u,f=(0,i.Z)(t,w),p=t,m=function(e){var n=e.classes;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},b,n)}(p);return(0,k.jsxs)(E,(0,a.Z)({role:d,square:!0,elevation:6,className:(0,s.Z)(m.root,r),ownerState:p,ref:n},f,{children:[(0,k.jsx)(S,{className:m.message,ownerState:p,children:c}),o?(0,k.jsx)(y,{className:m.action,ownerState:p,children:o}):null]}))}));function L(e){return(0,C.Z)("MuiSnackbar",e)}(0,x.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var A=["onEnter","onExited"],j=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],R=(0,d.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["anchorOrigin".concat((0,m.Z)(t.anchorOrigin.vertical)).concat((0,m.Z)(t.anchorOrigin.horizontal))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,r.Z)({},n.breakpoints.up("sm"),(0,a.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===t.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===t.anchorOrigin.horizontal&&{right:24,left:"auto"})))})),z=c.forwardRef((function(e,n){var t=(0,v.Z)({props:e,name:"MuiSnackbar"}),r=(0,f.Z)(),d={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},g=t.action,Z=t.anchorOrigin,x=(Z=void 0===Z?{vertical:"bottom",horizontal:"left"}:Z).vertical,C=Z.horizontal,b=t.autoHideDuration,w=void 0===b?null:b,E=t.children,S=t.className,y=t.ClickAwayListenerProps,z=t.ContentProps,O=t.disableWindowBlurListener,P=void 0!==O&&O,T=t.message,I=t.onBlur,N=t.onClose,B=t.onFocus,W=t.onMouseEnter,H=t.onMouseLeave,D=t.open,_=t.resumeHideDuration,F=t.TransitionComponent,V=void 0===F?h.Z:F,X=t.transitionDuration,G=void 0===X?d:X,$=t.TransitionProps,q=($=void 0===$?{}:$).onEnter,K=$.onExited,Y=(0,i.Z)(t.TransitionProps,A),J=(0,i.Z)(t,j),Q=(0,a.Z)({},t,{anchorOrigin:{vertical:x,horizontal:C}}),U=function(e){var n=e.classes,t=e.anchorOrigin,o={root:["root","anchorOrigin".concat((0,m.Z)(t.vertical)).concat((0,m.Z)(t.horizontal))]};return(0,l.Z)(o,L,n)}(Q),ee=c.useRef(),ne=c.useState(!0),te=(0,o.Z)(ne,2),oe=te[0],re=te[1],ie=(0,p.Z)((function(){N&&N.apply(void 0,arguments)})),ae=(0,p.Z)((function(e){N&&null!=e&&(clearTimeout(ee.current),ee.current=setTimeout((function(){ie(null,"timeout")}),e))}));c.useEffect((function(){return D&&ae(w),function(){clearTimeout(ee.current)}}),[D,w,ae]);var ce=function(){clearTimeout(ee.current)},se=c.useCallback((function(){null!=w&&ae(null!=_?_:.5*w)}),[w,_,ae]);return c.useEffect((function(){if(!P&&D)return window.addEventListener("focus",se),window.addEventListener("blur",ce),function(){window.removeEventListener("focus",se),window.removeEventListener("blur",ce)}}),[P,se,D]),c.useEffect((function(){if(D)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||N&&N(e,"escapeKeyDown")}}),[oe,D,N]),!D&&oe?null:(0,k.jsx)(u.Z,(0,a.Z)({onClickAway:function(e){N&&N(e,"clickaway")}},y,{children:(0,k.jsx)(R,(0,a.Z)({className:(0,s.Z)(U.root,S),onBlur:function(e){I&&I(e),se()},onFocus:function(e){B&&B(e),ce()},onMouseEnter:function(e){W&&W(e),ce()},onMouseLeave:function(e){H&&H(e),se()},ownerState:Q,ref:n,role:"presentation"},J,{children:(0,k.jsx)(V,(0,a.Z)({appear:!0,in:D,timeout:G,direction:"top"===x?"down":"up",onEnter:function(e,n){re(!1),q&&q(e,n)},onExited:function(e){re(!0),K&&K(e)}},Y,{children:E||(0,k.jsx)(M,(0,a.Z)({message:T,action:g},z))}))}))}))})),O=z}}]);
//# sourceMappingURL=c356bedec21d1db23621c4bc2f53cc81101bfcce-e71e7a8d7948c8e937bb.js.map