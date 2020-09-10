(this["webpackJsonpimage-generator"]=this["webpackJsonpimage-generator"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(87),n(88),n(29)),l=n(36),s=n(20),u=n(21),d=n(22),m=n(23),p=n(39),f=n.n(p),h=n(34),g=n.n(h),v=n(18),y=["src"],w=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:null},e.handleLoad=function(){e.setState({image:e.image})},e.filteredProps=function(){return Object.keys(e.props).filter((function(e){return!y.includes(e)})).reduce((function(t,n){return Object(l.a)({},t,Object(c.a)({},n,e.props[n]))}),{})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadImage(),this.applyCache()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.loadImage(),this.applyCache())}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src,this.image.addEventListener("load",this.handleLoad)}},{key:"applyCache",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(v.Image,Object.assign({image:this.state.image,ref:function(t){e.imageNode=t}},this.filteredProps()))}}]),n}(a.Component),E=n(73),b=n.n(E),x=n(57),_=n.n(x),C=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={loaded:!1},e.handleDownload=function(){var t=e.stageRef.getStage().toDataURL(),n="".concat(e.props.name.toLowerCase().trim().replace(" ","_"),"_endorses_brandon.png");e.downloadUri(t,n)},e.getTitleText=function(){var t=e.props,n=t.title,a=t.location;return n.length?a.length?"".concat(n,", ").concat(a):n:a},e.renderPreview=function(){var t=e.props,n=t.name,a=t.reason,o=t.profile;return r.a.createElement("div",null,r.a.createElement("div",{className:g.a.title},"Preview"),r.a.createElement(v.Stage,{width:400,height:400,ref:function(t){e.stageRef=t}},r.a.createElement(v.Layer,null,r.a.createElement(v.Rect,{width:400,height:400,fill:"#20a8df"})),r.a.createElement(v.Layer,null,r.a.createElement(w,{x:0,y:0,width:400,height:160,src:b.a,filters:[_.a.Filters.Grayscale]}),!!o&&r.a.createElement(w,{x:20,y:20,width:100,height:100,src:o})),r.a.createElement(v.Layer,null,r.a.createElement(v.Text,{x:20,y:105,width:360,fontFamily:"'Open Sans'",fontSize:12,align:"right",fill:"#ffffff",padding:3,text:e.getTitleText()}),r.a.createElement(v.Text,{x:20,y:175,fontFamily:"'Barlow Condensed'",fontSize:30,fontWeight:700,width:340,fill:"#ffffff",text:n}),r.a.createElement(v.Text,{x:20,y:205,fontFamily:"'Barlow Condensed'",fontSize:30,fontWeight:700,width:340,fill:"#354e98",text:"endorses Brandon Thomas"}),!!a&&r.a.createElement(v.Text,{x:20,y:260,width:340,fontSize:16,fontFamily:"'Open Sans'",text:'"'.concat(a,'"')}))),e.stageRef&&r.a.createElement("div",{className:g.a.button,onClick:e.handleDownload},"Download"))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.document.fonts.ready.then(function(){this.setState({loaded:!0})}.bind(this))}},{key:"downloadUri",value:function(e,t){var n=window.document.createElement("a");n.download=t,n.href=e,window.document.body.appendChild(n),n.click(),window.document.body.removeChild(n)}},{key:"renderEmpty",value:function(){return r.a.createElement("div",{className:g.a.empty},"Enter a name, reason, and photo for why"," ",r.a.createElement("span",{className:g.a.highlight},"you")," support Brandon to generate a sharable image!")}},{key:"render",value:function(){var e=this.props.name,t=this.state.loaded;return r.a.createElement("div",{className:g.a.component},t&&e?this.renderPreview():this.renderEmpty())}}]),n}(r.a.Component),O=n(174),j=n(32),k=n.n(j),T=n(43),N=n(58),I=n.n(N),L=n(74),P=n.n(L),S=n(77),D=function(e){return new Promise((function(t,n){var a=new Image;a.addEventListener("load",(function(){return t(a)})),a.addEventListener("error",(function(e){return n(e)})),a.setAttribute("crossOrigin","anonymous"),a.src=e}))};function F(e){return e*Math.PI/180}function z(e,t){return B.apply(this,arguments)}function B(){return(B=Object(T.a)(k.a.mark((function e(t,n){var a,r,o,i,c,l,s,u=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]?u[2]:0,e.next=3,D(t);case 3:return r=e.sent,o=document.createElement("canvas"),i=o.getContext("2d"),c=Math.max(r.width,r.height),l=c/2*Math.sqrt(2)*2,o.width=l,o.height=l,i.translate(l/2,l/2),i.rotate(F(a)),i.translate(-l/2,-l/2),i.drawImage(r,l/2-.5*r.width,l/2-.5*r.height),s=i.getImageData(0,0,l,l),o.width=n.width,o.height=n.height,i.putImageData(s,Math.round(0-l/2+.5*r.width-n.x),Math.round(0-l/2+.5*r.height-n.y)),e.abrupt("return",o.toDataURL("image/jpeg"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(175),W=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={droppedUrl:"",crop:{x:0,y:0},zoom:1},e.onCropChange=function(t){e.setState({crop:t})},e.onZoomChange=function(t){e.setState({zoom:t})},e.handleDrop=function(t,n){var a=n[0];e.setState({droppedUrl:a})},e.onCropComplete=function(){var t=Object(T.a)(k.a.mark((function t(n,a){var r,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state.droppedUrl,isNaN(a.width)){t.next=7;break}return t.next=4,z(r,a);case 4:o=t.sent,console.log(o),e.props.onChange(o);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.renderImageLoader=function(){return r.a.createElement(P.a,{withIcon:!0,singleImage:!0,buttonText:"Picture of Endorsee (thats you!)",onChange:e.handleDrop,imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880})},e.renderCropper=function(){var t=e.state,n=t.crop,a=t.zoom,o=t.droppedUrl;return r.a.createElement("div",null,r.a.createElement("div",{className:I.a.cropper},r.a.createElement(S.a,{image:o,crop:n,zoom:a,aspect:1,showGrid:!1,onCropChange:e.onCropChange,onCropComplete:e.onCropComplete,onZoomChange:e.onZoomChange})),r.a.createElement(U.a,{className:I.a.slider,value:a,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:function(t,n){return e.onZoomChange(n)}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.droppedUrl;return r.a.createElement("div",null,this.renderImageLoader(),e&&this.renderCropper())}}]),n}(a.Component),A=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleTextChange=function(t){var n=t.target.value;e.props.onChange(n)},e.renderImageLoader=function(){return r.a.createElement(W,{onChange:e.props.onChange})},e.renderTextField=function(){var t=e.props,n=t.config,a=t.value;return r.a.createElement(O.a,{multiline:n.multiline,rows:n.multiline?4:1,fullWidth:!0,variant:"outlined",value:a,label:n.label,helperText:n.helperText,onChange:e.handleTextChange})},e}return Object(u.a)(n,[{key:"renderPicker",value:function(){switch(this.props.config.type){case"text":return this.renderTextField();case"image":return this.renderImageLoader();default:throw new Error('Config is not working because "type '.concat(this.props.config.type,'"" does not exist'))}}},{key:"render",value:function(){return this.renderPicker()}}]),n}(r.a.Component),M={name:{required:!0,type:"text",label:"Name"},reason:{multiline:!0,type:"text",label:"Reason for Support",helperText:"Why do you support Brandon? Specificity is better!"},profile:{type:"image",label:"image "},title:{required:!0,type:"text",label:"Title",helperText:"Teacher, Parent, Voter"},location:{type:"text",label:"Location",helperText:"Murfreesboro, LaVergne Lake Elementary"}},R=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={form:Object.keys(M).reduce((function(e,t){return Object(l.a)({},e,Object(c.a)({},t,"name"))}),{})},e.handleFormChange=function(t){return function(n){e.setState((function(e){return{form:Object(l.a)({},e.form,Object(c.a)({},t,n))}}))}},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.form;return r.a.createElement("div",{className:f.a.component},r.a.createElement("div",{className:f.a.fields},Object.keys(t).map((function(n){return r.a.createElement("div",{key:n,className:f.a.field},r.a.createElement(A,{config:M[n],value:t[n],onChange:e.handleFormChange(n)}))}))),r.a.createElement("div",{className:f.a.preview},r.a.createElement(C,t)))}}]),n}(r.a.Component),Z=n(59),J=n.n(Z);function V(){return r.a.createElement("div",{className:J.a.component},r.a.createElement("div",{className:J.a.accent}))}var q=n(35),G=n.n(q);function Q(){return r.a.createElement("div",{className:G.a.component},r.a.createElement("div",{className:G.a.case},r.a.createElement("div",{className:G.a.title},"We endorse ",r.a.createElement("span",{className:G.a.candidate},"Brandon Thomas")," "),r.a.createElement("div",{className:G.a.tagline},"(generator)")))}var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Q,null),r.a.createElement(R,null),r.a.createElement(V,null))},$=n(173);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(76),X=Object(H.a)({palette:{primary:{main:"#ffffff",light:"#ffffff",text:"#ffffff",contrastText:"#ffffff"},secondary:{main:"#ffffff"}}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($.a,{theme:X},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,n){e.exports={title:"Preview_title__unOsw",button:"Preview_button__1xPFi",empty:"Preview_empty__IZW5l",highlight:"Preview_highlight__3JzAg"}},35:function(e,t,n){e.exports={component:"Title_component__13OnF",case:"Title_case__20oQI",title:"Title_title__1jlrO",candidate:"Title_candidate__8WGwV",tagline:"Title_tagline__3p9DK"}},39:function(e,t,n){e.exports={component:"Editor_component__19dB7",fields:"Editor_fields__1pTs_",preview:"Editor_preview__1urAQ",field:"Editor_field__1VJIA"}},58:function(e,t,n){e.exports={cropper:"ImagePicker_cropper__Op_bh"}},59:function(e,t,n){e.exports={component:"Background_component__4-zPE",accent:"Background_accent__3tWwQ"}},73:function(e,t,n){e.exports=n.p+"static/media/brandon.de8f5109.jpg"},83:function(e,t,n){e.exports=n(141)},87:function(e,t,n){},88:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.016c25df.chunk.js.map