(this["webpackJsonpimage-generator"]=this["webpackJsonpimage-generator"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),l=(n(102),n(103),n(28)),c=n(46),s=n(22),u=n(23),d=n(24),m=n(26),h=n(44),f=n.n(h),p=n(18),g=n.n(p),v=n(13),w=["src"],b=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={image:null},e.handleLoad=function(){e.setState({image:e.image})},e.filteredProps=function(){return Object.keys(e.props).filter((function(e){return!w.includes(e)})).reduce((function(t,n){return Object(c.a)({},t,Object(l.a)({},n,e.props[n]))}),{})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loadImage(),this.applyCache()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props.src&&(this.loadImage(),this.applyCache())}},{key:"componentWillUnmount",value:function(){this.image.removeEventListener("load",this.handleLoad)}},{key:"loadImage",value:function(){this.image=new window.Image,this.image.src=this.props.src,this.image.addEventListener("load",this.handleLoad)}},{key:"applyCache",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(v.Image,Object.assign({image:this.state.image,ref:function(t){e.imageNode=t}},this.filteredProps()))}}]),n}(a.Component),y=n(84),E=n.n(y),x=n(49),_=[{numLine:1,fontSize:54,length:10},{numLine:1,fontSize:38,length:13},{numLine:1,fontSize:32,length:27},{numLine:2,fontSize:26,length:38},{numLine:3,fontSize:22,length:60},{numLine:3,fontSize:18,length:90},{numLine:4,fontSize:17,length:100},{numLine:4,fontSize:15,length:150},{numLine:4,fontSize:13.5,length:200},{numLine:5,fontSize:12,length:250},{numLine:5,fontSize:10.8,length:301}],C=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={loaded:!1,titleOffsetX:0,reasonFontSize:16,resizingReason:!1,size:400},e.trackDownload=function(){var t=e.props,n=t.name,a=t.title,r=t.reason,o=t.profile,i={name:n.length,title:a.length,reason:r.length,profile:o.length};x.a.event({category:"Download",action:"Download PNG",value:i})},e.getDataUrl=function(){return e.stageRef.getStage().toDataURL({pixelRatio:3})},e.handleDownload=function(){var t=e.getDataUrl(),n="".concat(e.props.name.toLowerCase().trim().replace(" ","_"),"_endorses_brandon.png");e.goToUri(t,{fileName:n}),e.trackDownload()},e.handleShare=function(){var t="https://twitter.com/intent/tweet?text=".concat(e.getDataUrl());e.goToUri(t,{_blank:!0})},e.getTitleText=function(){var t=e.props,n=t.title,a=t.location;return n&&n.length?a&&a.length?"".concat(n,", ").concat(a):n:a},e.hasTitle=function(){return!(!e.props.title&&!e.props.location)},e.renderTitle=function(){return!!e.getTitleText()&&r.a.createElement(v.Text,{ref:function(t){return e.titleRef=t},fontFamily:"'Barlow Condensed'",align:"right",fontSize:16,padding:3,fill:g.a.white,text:e.getTitleText()})},e.renderFloatingTitle=function(){var t=e.state.titleOffsetX;return e.hasTitle&&r.a.createElement(v.Label,{x:380,y:110,width:360,offsetX:t,align:"right"},r.a.createElement(v.Tag,{fill:g.a.red}),e.renderTitle())},e.renderInlineTitle=function(){return e.hasTitle&&r.a.createElement(v.Label,{x:20,y:52,align:"right"},r.a.createElement(v.Tag,{fill:g.a.red}),e.renderTitle())},e.renderProfilePicture=function(){var t=e.props.profile;return r.a.createElement(v.Layer,null,r.a.createElement(b,{x:0,y:240,width:400,height:142,src:E.a}),!!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.Circle,{x:330,y:70,width:110,fill:g.a.white,height:110}),r.a.createElement(v.Group,{clipFunc:e.circleClip},r.a.createElement(b,{x:280,y:20,width:100,height:100,src:t})),e.renderFloatingTitle()))},e.renderMetaData=function(){var t=e.props,n=t.profile,a=t.name;return r.a.createElement(v.Layer,null,r.a.createElement(v.Text,{x:20,y:20,fontFamily:"'Barlow Condensed'",fontSize:30,fontWeight:700,width:340,fill:g.a.white,text:a}),n?r.a.createElement(v.Group,null,r.a.createElement(v.Text,{x:20,y:50,fontFamily:"'Barlow Condensed'",fontSize:30,fontWeight:700,width:340,fill:g.a.darkBlue,text:"endorses"}),r.a.createElement(v.Text,{x:20,y:80,fontFamily:"'Barlow Condensed'",fontSize:30,fontWeight:700,width:340,fill:g.a.darkBlue,text:"Brandon Thomas"})):r.a.createElement(v.Group,null,e.hasTitle()&&e.renderInlineTitle(),r.a.createElement(v.Text,{x:20,y:e.hasTitle()?75:50,fontFamily:"'Barlow Condensed'",fontSize:30,fontWeight:700,width:340,fill:g.a.darkBlue,text:"endorses Brandon Thomas"})))},e.renderReason=function(){var t=e.props,n=t.reason,a=t.profile;if(!n)return null;var o=(_.find((function(e){return e.length>n.length}))||{}).fontSize;return r.a.createElement(v.Layer,null,r.a.createElement(v.Group,{y:a?130:120},r.a.createElement(v.Group,{x:25,y:5,width:340},r.a.createElement(v.Text,{ref:function(t){e.reasonRef=t},padding:10,fontSize:o,lineHeight:1.4,fontWeight:100,width:360,fill:g.a.darkBlue,fontFamily:"'Open Sans'",text:n})),r.a.createElement(v.Text,{x:15,y:0,fontSize:50,fontWeight:100,fill:g.a.darkBlue,fontFamily:"'Open Sans'",text:"\u201c"}),r.a.createElement(v.Text,{x:e.reasonRef?Math.max(e.reasonRef.width()-5,95):30,y:e.reasonRef?Math.min(e.reasonRef.height()-5,90):30,fontSize:50,fontWeight:100,fill:g.a.darkBlue,fontFamily:"'Open Sans'",text:"\u201d"})))},e.renderPreview=function(){var t=e.state.size;return r.a.createElement("div",null,r.a.createElement("div",{className:g.a.title},"Preview"),r.a.createElement(v.Stage,{width:t,height:t,scale:{x:t/400,y:t/400},ref:function(t){e.stageRef=t}},r.a.createElement(v.Layer,null,r.a.createElement(v.Rect,{width:400,height:400,fill:"#5FBCE5"})),e.renderProfilePicture(),e.renderMetaData(),e.renderReason(),e.renderFooter()),e.stageRef&&[r.a.createElement("button",{name:"download",className:g.a.button,onClick:e.handleDownload},"Download to share"),r.a.createElement("div",{className:g.a.disclaimer},"(when you are finished)")])},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.document.fonts.ready.then(function(){this.setState({loaded:!0})}.bind(this)),this.setState((function(e){var t=e.size;return console.log(window.screen.width),{size:Math.min(t,window.screen.width-60)}}))}},{key:"componentDidUpdate",value:function(e,t){var n,a,r=this,o=(n=this.props,a=e,function(e){return n[e]!==a[e]});(o("title")||o("location")&&this.titleRef)&&this.setState({titleOffsetX:this.titleRef?this.titleRef.width():0}),o("reason")&&setTimeout((function(){return r.forceUpdate()}),1)}},{key:"goToUri",value:function(e,t){var n=window.document.createElement("a");t.fileName&&(n.download=t.fileName),t._blank&&(n._blank=t._blank),n.href=e,window.document.body.appendChild(n),n.click(),window.document.body.removeChild(n)}},{key:"circleClip",value:function(e){e.arc(330,70,50,0,2*Math.PI,!1)}},{key:"renderFooter",value:function(){return r.a.createElement(v.Layer,null,r.a.createElement(v.Text,{x:0,y:385,fontFamily:"'Barlow Condensed'",fontSize:12,fontWeight:700,width:400,align:"center",fill:g.a.darkBlue,text:"votebrandonthomas.com/endorse"}))}},{key:"renderEmpty",value:function(){return r.a.createElement("div",{className:g.a.empty},"Enter a name, reason, and photo for why"," ",r.a.createElement("span",{className:g.a.highlight},"you")," support Brandon to generate a sharable image!")}},{key:"render",value:function(){var e=this.props.name,t=this.state.loaded;return r.a.createElement("div",{className:g.a.component},t&&e?this.renderPreview():this.renderEmpty())}}]),n}(r.a.Component),k=n(196),T=n(41),O=n.n(T),j=n(54),S=n(50),L=n.n(S),z=n(85),N=n.n(z),R=n(88),F=function(e){return new Promise((function(t,n){var a=new Image;a.addEventListener("load",(function(){return t(a)})),a.addEventListener("error",(function(e){return n(e)})),a.setAttribute("crossOrigin","anonymous"),a.src=e}))};function D(e){return e*Math.PI/180}function P(e,t){return B.apply(this,arguments)}function B(){return(B=Object(j.a)(O.a.mark((function e(t,n){var a,r,o,i,l,c,s,u=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]?u[2]:0,e.next=3,F(t);case 3:return r=e.sent,o=document.createElement("canvas"),i=o.getContext("2d"),l=Math.max(r.width,r.height),c=l/2*Math.sqrt(2)*2,o.width=c,o.height=c,i.translate(c/2,c/2),i.rotate(D(a)),i.translate(-c/2,-c/2),i.drawImage(r,c/2-.5*r.width,c/2-.5*r.height),s=i.getImageData(0,0,c,c),o.width=n.width,o.height=n.height,i.putImageData(s,Math.round(0-c/2+.5*r.width-n.x),Math.round(0-c/2+.5*r.height-n.y)),e.abrupt("return",o.toDataURL("image/jpeg"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(200),U=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={droppedUrl:"",crop:{x:0,y:0},zoom:1},e.onCropChange=function(t){e.setState({crop:t})},e.onZoomChange=function(t){e.setState({zoom:t})},e.handleDrop=function(t,n){var a=n[0];e.setState({droppedUrl:a})},e.handleDelete=function(){e.setState({droppedUrl:void 0}),e.props.onChange("")},e.onCropComplete=function(){var t=Object(j.a)(O.a.mark((function t(n,a){var r,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state.droppedUrl,isNaN(a.width)){t.next=6;break}return t.next=4,P(r,a);case 4:o=t.sent,e.props.onChange(o);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.renderImageLoader=function(){return r.a.createElement(N.a,{withIcon:!0,singleImage:!0,maxFileSize:10485760,className:L.a.uploader,label:"< 10Mb jpg, gif, png",buttonText:"Choose picture of endorser (thats you!)",onChange:e.handleDrop,imgExtension:[".jpg",".gif",".png",".gif"]})},e.renderCropper=function(){var t=e.state,n=t.crop,a=t.zoom,o=t.droppedUrl;return r.a.createElement("div",null,r.a.createElement("div",{className:L.a.cropper},r.a.createElement(R.a,{image:o,crop:n,zoom:a,aspect:1,cropShape:"round",showGrid:!1,onCropChange:e.onCropChange,onCropComplete:e.onCropComplete,onZoomChange:e.onZoomChange})),r.a.createElement(I.a,{className:L.a.slider,value:a,min:1,max:3,step:.05,"aria-labelledby":"Zoom",onChange:function(t,n){return e.onZoomChange(n)}}),r.a.createElement("div",{className:L.a.button,onClick:e.handleDelete},"Remove or Change Image"))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.droppedUrl;return r.a.createElement("div",null,e?this.renderCropper():this.renderImageLoader())}}]),n}(a.Component),M=n(197),W=n(198),A=n(193),q=n(199),G=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).handleTextChange=function(t){var n=t.target.value;e.props.onChange(n)},e.handleRadioChange=function(t){var n=t.target.value;e.props.onChange(n)},e.renderImageLoader=function(){var t=e.props,n=t.config,a=t.value,o=t.onChange;return r.a.createElement(U,{onChange:o,value:a,label:n.label})},e.renderRadio=function(){var t=e.props,n=t.config,a=t.value;return r.a.createElement(q.a,{component:"fieldset"},r.a.createElement(W.a,{row:!0,"aria-label":n.label,name:n.label,value:a,onChange:e.handleRadioChange},n.options.map((function(e){return r.a.createElement(A.a,{key:e,value:e,control:r.a.createElement(M.a,null),label:e})}))))},e.renderTextField=function(){var t=e.props,n=t.config,a=t.value,o=a?n.maxLength-a.length:n.maxLength,i=n.maxLength&&o<10?"Character's Remaining: ".concat(o):n.helperText;return r.a.createElement(k.a,{error:n.maxLength&&o<10,multiline:n.multiline,rows:n.multiline?4:1,fullWidth:!0,variant:"outlined",value:a,label:n.label,helperText:i,onChange:e.handleTextChange,inputProps:{maxLength:n.maxLength,"aria-label":n.label}})},e}return Object(u.a)(n,[{key:"renderPicker",value:function(){switch(this.props.config.type){case"text":return this.renderTextField();case"image":return this.renderImageLoader();case"radio":return this.renderRadio();default:throw new Error('Config is not working because "type '.concat(this.props.config.type,'"" does not exist'))}}},{key:"render",value:function(){return this.renderPicker()}}]),n}(r.a.Component),J=n(194),V={name:{required:!0,type:"text",label:"Your name"},reason:{multiline:!0,type:"text",label:"Reason for support",maxLength:300,helperText:"Why do you support Brandon? Specificity is better!"},profile:{type:"image",label:"Endorser Photo"},title:{type:"text",label:"Title",helperText:"i.e. Teacher, Parent, Voter"},location:{type:"text",label:"Location",helperText:"i.e. Murfreesboro, LaVergne Lake Elementary"}},X=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={form:Object.keys(V).reduce((function(e,t){return Object(c.a)({},e,Object(l.a)({},t,V[t].defaultValue))}),{})},e.handleFormChange=function(t){return function(n){e.setState((function(e){return{form:Object(c.a)({},e.form,Object(l.a)({},t,n))}}))}},e.hasRequired=function(){return Object.keys(V).filter((function(e){return V[e].required})).every((function(t){return!!e.state.form[t]}))},e}return Object(u.a)(n,[{key:"renderField",value:function(e,t,n,a){return r.a.createElement("div",{key:a,className:f.a.field},r.a.createElement(G,{config:e,value:t,onChange:n}))}},{key:"render",value:function(){var e=this,t=this.state.form;return r.a.createElement("main",{role:"main",className:f.a.component},r.a.createElement("div",{className:f.a.preview},r.a.createElement(C,Object.assign({hasRequired:this.hasRequired()},t))),r.a.createElement("div",{className:f.a.fields},Object.keys(t).map((function(n){return e.renderField(V[n],t[n],e.handleFormChange(n),n)}))),this.hasRequired()&&r.a.createElement(J.a,{className:f.a.hint,href:"#download"},"(Scroll up to download)"))}}]),n}(r.a.Component),Z=n(68),H=n.n(Z);function K(){return r.a.createElement("div",{className:H.a.component},r.a.createElement("div",{className:H.a.accent}))}var Q=n(45),Y=n.n(Q);function $(){return r.a.createElement("header",{role:"banner",className:Y.a.component},r.a.createElement("div",{className:Y.a.case},r.a.createElement("div",{className:Y.a.title},"We endorse ",r.a.createElement("span",{className:Y.a.candidate},"Brandon Thomas")," "),r.a.createElement("div",{className:Y.a.tagline},"(generator)")))}var ee=n(69),te=n.n(ee),ne=[{href:"https://www.mobilize.us/votebrandonthomas/event/318321/?utm_source=endorsement-generator",label:"Meet & greet this Saturday!"},{href:"https://secure.actblue.com/donate/thomas49/endorsement-generator",label:"Contribute"},{href:"https://www.mobilize.us/votebrandonthomas/?utm_source=endorsement-generator",label:"Volunteer"},{href:"https://votebrandonthomas.com/?utm_source=endorsement-generator",label:"votebrandonthomas.com"},{href:"mailto:kevinahuber@gmail.com",label:"Feedback"}];function ae(){return r.a.createElement("footer",{className:te.a.component},ne.map((function(e,t){return r.a.createElement(J.a,{key:t,href:e.href,className:te.a.link},e.label)})))}var re=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){x.a.initialize("UA-178512622-2"),x.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return null}}]),n}(a.Component);var oe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(re,null),r.a.createElement($,null),r.a.createElement(X,null),r.a.createElement(K,null),r.a.createElement(ae,null))},ie=n(195);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=n(87),ce=Object(le.a)({palette:{primary:Object(l.a)({main:"#354e98",light:"#354e98",text:"#354e98"},"text","#354e98"),secondary:{main:"#354e98"}}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie.a,{theme:ce},r.a.createElement(oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},18:function(e,t,n){e.exports={white:"#f2f0f1",lightBlue:"#37acdf",darkBlue:"#354e98",red:"#b13539",title:"Preview_title__unOsw",button:"Preview_button__1xPFi",empty:"Preview_empty__IZW5l",disclaimer:"Preview_disclaimer__3t1i7",highlight:"Preview_highlight__3JzAg"}},44:function(e,t,n){e.exports={component:"Editor_component__19dB7",fields:"Editor_fields__1pTs_",preview:"Editor_preview__1urAQ",field:"Editor_field__1VJIA",hint:"Editor_hint__1JkXw"}},45:function(e,t,n){e.exports={component:"Title_component__13OnF",title:"Title_title__1jlrO",candidate:"Title_candidate__8WGwV",tagline:"Title_tagline__3p9DK"}},50:function(e,t,n){e.exports={cropper:"ImagePicker_cropper__Op_bh",button:"ImagePicker_button__1Bcrq"}},68:function(e,t,n){e.exports={component:"Background_component__4-zPE"}},69:function(e,t,n){e.exports={component:"Footer_component__3T3DJ",link:"Footer_link__Xabb2"}},84:function(e,t,n){e.exports=n.p+"static/media/brandon.4b929c6f.png"},98:function(e,t,n){e.exports=n(157)}},[[98,1,2]]]);
//# sourceMappingURL=main.1ddd5a18.chunk.js.map