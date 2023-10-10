"use strict";var Ni=Object.defineProperty;var Ci=(a,e,t)=>e in a?Ni(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ne=(a,e,t)=>(Ci(a,typeof e!="symbol"?e+"":e,t),t);/*!
 * @front-end-framework/threejs-utils 1.0.0
 * Copyright 2023-2023. All Rights Reserved
 */Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("three"),fn=require("three-loader-3dtiles"),hn=new c.Vector3,Oi=new c.Quaternion,dn=new c.Vector3;class ye extends c.Object3D{constructor(e=document.createElement("div")){super(),this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}ye.prototype.isCSS3DObject=!0;class Ui extends ye{constructor(e){super(e),this.rotation2D=0}copy(e,t){return super.copy(e,t),this.rotation2D=e.rotation2D,this}}Ui.prototype.isCSS3DSprite=!0;const pe=new c.Matrix4,Xi=new c.Matrix4;class kn{constructor(e={}){const t=this;let n,i,s,r;const o={camera:{fov:0,style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const u=document.createElement("div");u.style.transformStyle="preserve-3d",u.style.pointerEvents="none",l.appendChild(u),this.getSize=function(){return{width:n,height:i}},this.render=function(g,m){const x=m.projectionMatrix.elements[5]*r;o.camera.fov!==x&&(l.style.perspective=m.isPerspectiveCamera?x+"px":"",o.camera.fov=x),g.autoUpdate===!0&&g.updateMatrixWorld(),m.parent===null&&m.updateMatrixWorld();let y,v;m.isOrthographicCamera&&(y=-(m.right+m.left)/2,v=(m.top+m.bottom)/2);const F=(m.isOrthographicCamera?"scale("+x+")translate("+f(y)+"px,"+f(v)+"px)"+h(m.matrixWorldInverse):"translateZ("+x+"px)"+h(m.matrixWorldInverse))+"translate("+s+"px,"+r+"px)";o.camera.style!==F&&(u.style.transform=F,o.camera.style=F),p(g,g,m)},this.setSize=function(g,m){n=g,i=m,s=n/2,r=i/2,l.style.width=g+"px",l.style.height=m+"px",u.style.width=g+"px",u.style.height=m+"px"};function f(g){return Math.abs(g)<1e-10?0:g}function h(g){const m=g.elements;return"matrix3d("+f(m[0])+","+f(-m[1])+","+f(m[2])+","+f(m[3])+","+f(m[4])+","+f(-m[5])+","+f(m[6])+","+f(m[7])+","+f(m[8])+","+f(-m[9])+","+f(m[10])+","+f(m[11])+","+f(m[12])+","+f(-m[13])+","+f(m[14])+","+f(m[15])+")"}function d(g){const m=g.elements;return"translate(-50%,-50%)"+("matrix3d("+f(m[0])+","+f(m[1])+","+f(m[2])+","+f(m[3])+","+f(-m[4])+","+f(-m[5])+","+f(-m[6])+","+f(-m[7])+","+f(m[8])+","+f(m[9])+","+f(m[10])+","+f(m[11])+","+f(m[12])+","+f(m[13])+","+f(m[14])+","+f(m[15])+")")}function p(g,m,x,y){if(g.isCSS3DObject){const v=g.visible&&g.layers.test(x.layers);if(g.element.style.display=v?"":"none",v){g.onBeforeRender(t,m,x);let A;g.isCSS3DSprite?(pe.copy(x.matrixWorldInverse),pe.transpose(),g.rotation2D!==0&&pe.multiply(Xi.makeRotationZ(g.rotation2D)),g.matrixWorld.decompose(hn,Oi,dn),pe.setPosition(hn),pe.scale(dn),pe.elements[3]=0,pe.elements[7]=0,pe.elements[11]=0,pe.elements[15]=1,A=d(pe)):A=d(g.matrixWorld);const F=g.element,w=o.objects.get(g);if(w===void 0||w.style!==A){F.style.transform=A;const S={style:A};o.objects.set(g,S)}F.parentNode!==u&&u.appendChild(F),g.onAfterRender(t,m,x)}}for(let v=0,A=g.children.length;v<A;v++)p(g.children[v],m,x)}}}const bt={type:"change"},It={type:"start"},Rt={type:"end"};class Bn extends c.EventDispatcher{constructor(e,t){super(),t===void 0&&console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');const n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:c.MOUSE.ROTATE,MIDDLE:c.MOUSE.DOLLY,RIGHT:c.MOUSE.PAN},this.target=new c.Vector3;const s=1e-6,r=new c.Vector3;let o=1,l=i.NONE,u=i.NONE,f=0,h=0,d=0;const p=new c.Vector3,g=new c.Vector2,m=new c.Vector2,x=new c.Vector3,y=new c.Vector2,v=new c.Vector2,A=new c.Vector2,F=new c.Vector2,w=[],S={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const T=n.domElement.getBoundingClientRect(),M=n.domElement.ownerDocument.documentElement;n.screen.left=T.left+window.pageXOffset-M.clientLeft,n.screen.top=T.top+window.pageYOffset-M.clientTop,n.screen.width=T.width,n.screen.height=T.height};const P=function(){const T=new c.Vector2;return function($,te){return T.set(($-n.screen.left)/n.screen.width,(te-n.screen.top)/n.screen.height),T}}(),_=function(){const T=new c.Vector2;return function($,te){return T.set(($-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-te))/n.screen.width),T}}();this.rotateCamera=function(){const T=new c.Vector3,M=new c.Quaternion,$=new c.Vector3,te=new c.Vector3,le=new c.Vector3,de=new c.Vector3;return function(){de.set(m.x-g.x,m.y-g.y,0);let Fe=de.length();Fe?(p.copy(n.object.position).sub(n.target),$.copy(p).normalize(),te.copy(n.object.up).normalize(),le.crossVectors(te,$).normalize(),te.setLength(m.y-g.y),le.setLength(m.x-g.x),de.copy(te.add(le)),T.crossVectors(de,p).normalize(),Fe*=n.rotateSpeed,M.setFromAxisAngle(T,Fe),p.applyQuaternion(M),n.object.up.applyQuaternion(M),x.copy(T),d=Fe):!n.staticMoving&&d&&(d*=Math.sqrt(1-n.dynamicDampingFactor),p.copy(n.object.position).sub(n.target),M.setFromAxisAngle(x,d),p.applyQuaternion(M),n.object.up.applyQuaternion(M)),g.copy(m)}}(),this.zoomCamera=function(){let T;l===i.TOUCH_ZOOM_PAN?(T=f/h,f=h,n.object.isPerspectiveCamera?p.multiplyScalar(T):n.object.isOrthographicCamera?(n.object.zoom/=T,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(T=1+(v.y-y.y)*n.zoomSpeed,T!==1&&T>0&&(n.object.isPerspectiveCamera?p.multiplyScalar(T):n.object.isOrthographicCamera?(n.object.zoom/=T,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?y.copy(v):y.y+=(v.y-y.y)*this.dynamicDampingFactor)},this.panCamera=function(){const T=new c.Vector2,M=new c.Vector3,$=new c.Vector3;return function(){if(T.copy(F).sub(A),T.lengthSq()){if(n.object.isOrthographicCamera){const le=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,de=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;T.x*=le,T.y*=de}T.multiplyScalar(p.length()*n.panSpeed),$.copy(p).cross(n.object.up).setLength(T.x),$.add(M.copy(n.object.up).setLength(T.y)),n.object.position.add($),n.target.add($),n.staticMoving?A.copy(F):A.add(T.subVectors(F,A).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(p.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,p.setLength(n.maxDistance)),y.copy(v)),p.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,p.setLength(n.minDistance)),y.copy(v)))},this.update=function(){p.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,p),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),r.distanceToSquared(n.object.position)>s&&(n.dispatchEvent(bt),r.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(r.distanceToSquared(n.object.position)>s||o!==n.object.zoom)&&(n.dispatchEvent(bt),r.copy(n.object.position),o=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=i.NONE,u=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),p.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(bt),r.copy(n.object.position),o=n.object.zoom};function O(T){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",Q)),se(T),T.pointerType==="touch"?k(T):I(T))}function E(T){n.enabled!==!1&&(T.pointerType==="touch"?Z(T):U(T))}function Q(T){n.enabled!==!1&&(T.pointerType==="touch"?z(T):N(),K(T),w.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",Q)))}function R(T){K(T)}function L(T){n.enabled!==!1&&(window.removeEventListener("keydown",L),u===i.NONE&&(T.code===n.keys[i.ROTATE]&&!n.noRotate?u=i.ROTATE:T.code===n.keys[i.ZOOM]&&!n.noZoom?u=i.ZOOM:T.code===n.keys[i.PAN]&&!n.noPan&&(u=i.PAN)))}function b(){n.enabled!==!1&&(u=i.NONE,window.addEventListener("keydown",L))}function I(T){if(l===i.NONE)switch(T.button){case n.mouseButtons.LEFT:l=i.ROTATE;break;case n.mouseButtons.MIDDLE:l=i.ZOOM;break;case n.mouseButtons.RIGHT:l=i.PAN;break;default:l=i.NONE}const M=u!==i.NONE?u:l;M===i.ROTATE&&!n.noRotate?(m.copy(_(T.pageX,T.pageY)),g.copy(m)):M===i.ZOOM&&!n.noZoom?(y.copy(P(T.pageX,T.pageY)),v.copy(y)):M===i.PAN&&!n.noPan&&(A.copy(P(T.pageX,T.pageY)),F.copy(A)),n.dispatchEvent(It)}function U(T){const M=u!==i.NONE?u:l;M===i.ROTATE&&!n.noRotate?(g.copy(m),m.copy(_(T.pageX,T.pageY))):M===i.ZOOM&&!n.noZoom?v.copy(P(T.pageX,T.pageY)):M===i.PAN&&!n.noPan&&F.copy(P(T.pageX,T.pageY))}function N(){l=i.NONE,n.dispatchEvent(Rt)}function G(T){if(n.enabled!==!1&&n.noZoom!==!0){switch(T.preventDefault(),T.deltaMode){case 2:y.y-=T.deltaY*.025;break;case 1:y.y-=T.deltaY*.01;break;default:y.y-=T.deltaY*25e-5;break}n.dispatchEvent(It),n.dispatchEvent(Rt)}}function k(T){switch(J(T),w.length){case 1:l=i.TOUCH_ROTATE,m.copy(_(w[0].pageX,w[0].pageY)),g.copy(m);break;default:l=i.TOUCH_ZOOM_PAN;const M=w[0].pageX-w[1].pageX,$=w[0].pageY-w[1].pageY;h=f=Math.sqrt(M*M+$*$);const te=(w[0].pageX+w[1].pageX)/2,le=(w[0].pageY+w[1].pageY)/2;A.copy(P(te,le)),F.copy(A);break}n.dispatchEvent(It)}function Z(T){switch(J(T),w.length){case 1:g.copy(m),m.copy(_(T.pageX,T.pageY));break;default:const M=Ue(T),$=T.pageX-M.x,te=T.pageY-M.y;h=Math.sqrt($*$+te*te);const le=(T.pageX+M.x)/2,de=(T.pageY+M.y)/2;F.copy(P(le,de));break}}function z(T){switch(w.length){case 0:l=i.NONE;break;case 1:l=i.TOUCH_ROTATE,m.copy(_(T.pageX,T.pageY)),g.copy(m);break;case 2:l=i.TOUCH_ZOOM_PAN,m.copy(_(T.pageX-g.pageX,T.pageY-g.pageY)),g.copy(m);break}n.dispatchEvent(Rt)}function q(T){n.enabled!==!1&&T.preventDefault()}function se(T){w.push(T)}function K(T){delete S[T.pointerId];for(let M=0;M<w.length;M++)if(w[M].pointerId==T.pointerId){w.splice(M,1);return}}function J(T){let M=S[T.pointerId];M===void 0&&(M=new c.Vector2,S[T.pointerId]=M),M.set(T.pageX,T.pageY)}function Ue(T){const M=T.pointerId===w[0].pointerId?w[1]:w[0];return S[M.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",O),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",Q),window.removeEventListener("keydown",L),window.removeEventListener("keyup",b)},this.domElement.addEventListener("contextmenu",q),this.domElement.addEventListener("pointerdown",O),this.domElement.addEventListener("pointercancel",R),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",L),window.addEventListener("keyup",b),this.handleResize(),this.update()}}const Ie=new c.Raycaster,ae=new c.Vector3,_e=new c.Vector3,j=new c.Quaternion,pn={X:new c.Vector3(1,0,0),Y:new c.Vector3(0,1,0),Z:new c.Vector3(0,0,1)},Nt={type:"change"},mn={type:"mouseDown"},gn={type:"mouseUp",mode:null},xn={type:"objectChange"};class Qn extends c.Object3D{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Gn;this._gizmo=n,this.add(n);const i=new Yn;this._plane=i,this.add(i);const s=this;function r(v,A){let F=A;Object.defineProperty(s,v,{get:function(){return F!==void 0?F:A},set:function(w){F!==w&&(F=w,i[v]=w,n[v]=w,s.dispatchEvent({type:v+"-changed",value:w}),s.dispatchEvent(Nt))}}),s[v]=A,i[v]=A,n[v]=A}r("camera",e),r("object",void 0),r("enabled",!0),r("axis",null),r("mode","translate"),r("translationSnap",null),r("rotationSnap",null),r("scaleSnap",null),r("space","world"),r("size",1),r("dragging",!1),r("showX",!0),r("showY",!0),r("showZ",!0);const o=new c.Vector3,l=new c.Vector3,u=new c.Quaternion,f=new c.Quaternion,h=new c.Vector3,d=new c.Quaternion,p=new c.Vector3,g=new c.Vector3,m=new c.Vector3,x=0,y=new c.Vector3;r("worldPosition",o),r("worldPositionStart",l),r("worldQuaternion",u),r("worldQuaternionStart",f),r("cameraPosition",h),r("cameraQuaternion",d),r("pointStart",p),r("pointEnd",g),r("rotationAxis",m),r("rotationAngle",x),r("eye",y),this._offset=new c.Vector3,this._startNorm=new c.Vector3,this._endNorm=new c.Vector3,this._cameraScale=new c.Vector3,this._parentPosition=new c.Vector3,this._parentQuaternion=new c.Quaternion,this._parentQuaternionInv=new c.Quaternion,this._parentScale=new c.Vector3,this._worldScaleStart=new c.Vector3,this._worldQuaternionInv=new c.Quaternion,this._worldScale=new c.Vector3,this._positionStart=new c.Vector3,this._quaternionStart=new c.Quaternion,this._scaleStart=new c.Vector3,this._getPointer=Di.bind(this),this._onPointerDown=Bi.bind(this),this._onPointerHover=ki.bind(this),this._onPointerMove=Qi.bind(this),this._onPointerUp=Gi.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;Ie.setFromCamera(e,this.camera);const t=Ct(this._gizmo.picker[this.mode],Ie);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){Ie.setFromCamera(e,this.camera);const t=Ct(this._plane,Ie,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,mn.mode=this.mode,this.dispatchEvent(mn)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;Ie.setFromCamera(e,this.camera);const r=Ct(this._plane,Ie,!0);if(r){if(this.pointEnd.copy(r.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(j.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(ae.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(ae.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),_e.set(o,o,o)}else ae.copy(this.pointStart),_e.copy(this.pointEnd),ae.applyQuaternion(this._worldQuaternionInv),_e.applyQuaternion(this._worldQuaternionInv),_e.divide(ae),t.search("X")===-1&&(_e.x=1),t.search("Y")===-1&&(_e.y=1),t.search("Z")===-1&&(_e.z=1);i.scale.copy(this._scaleStart).multiply(_e),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(ae.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(ae.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(pn[t]),ae.copy(pn[t]),s==="local"&&ae.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(ae.cross(this.eye).normalize())*o),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(j.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(j.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Nt),this.dispatchEvent(xn)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(gn.mode=this.mode,this.dispatchEvent(gn)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Nt),this.dispatchEvent(xn),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ie}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}update(){console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.")}}Qn.prototype.isTransformControls=!0;function Di(a){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:a.button};{const e=this.domElement.getBoundingClientRect();return{x:(a.clientX-e.left)/e.width*2-1,y:-(a.clientY-e.top)/e.height*2+1,button:a.button}}}function ki(a){if(this.enabled)switch(a.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(a));break}}function Bi(a){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(a)),this.pointerDown(this._getPointer(a)))}function Qi(a){this.enabled&&this.pointerMove(this._getPointer(a))}function Gi(a){this.enabled&&(this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(a)))}function Ct(a,e,t){const n=e.intersectObject(a,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const dt=new c.Euler,Y=new c.Vector3(0,1,0),An=new c.Vector3(0,0,0),yn=new c.Matrix4,pt=new c.Quaternion,At=new c.Quaternion,me=new c.Vector3,vn=new c.Matrix4,et=new c.Vector3(1,0,0),Re=new c.Vector3(0,1,0),tt=new c.Vector3(0,0,1),mt=new c.Vector3,Ze=new c.Vector3,qe=new c.Vector3;class Gn extends c.Object3D{constructor(){super(),this.type="TransformControlsGizmo";const e=new c.MeshBasicMaterial({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new c.LineBasicMaterial({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const r=e.clone();r.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const u=e.clone();u.color.setHex(65280),u.opacity=.5;const f=e.clone();f.color.setHex(255),f.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const m=new c.CylinderGeometry(0,.04,.1,12);m.translate(0,.05,0);const x=new c.BoxGeometry(.08,.08,.08);x.translate(0,.04,0);const y=new c.BufferGeometry;y.setAttribute("position",new c.Float32BufferAttribute([0,0,0,1,0,0],3));const v=new c.CylinderGeometry(.0075,.0075,.5,3);v.translate(0,.25,0);function A(I,U){const N=new c.TorusGeometry(I,.0075,3,64,U*Math.PI*2);return N.rotateY(Math.PI/2),N.rotateX(Math.PI/2),N}function F(){const I=new c.BufferGeometry;return I.setAttribute("position",new c.Float32BufferAttribute([0,0,0,1,1,1],3)),I}const w={X:[[new c.Mesh(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new c.Mesh(m,s),[-.5,0,0],[0,0,Math.PI/2]],[new c.Mesh(v,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new c.Mesh(m,r),[0,.5,0]],[new c.Mesh(m,r),[0,-.5,0],[Math.PI,0,0]],[new c.Mesh(v,r)]],Z:[[new c.Mesh(m,o),[0,0,.5],[Math.PI/2,0,0]],[new c.Mesh(m,o),[0,0,-.5],[-Math.PI/2,0,0]],[new c.Mesh(v,o),null,[Math.PI/2,0,0]]],XYZ:[[new c.Mesh(new c.OctahedronGeometry(.1,0),h.clone()),[0,0,0]]],XY:[[new c.Mesh(new c.BoxGeometry(.15,.15,.01),f.clone()),[.15,.15,0]]],YZ:[[new c.Mesh(new c.BoxGeometry(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new c.Mesh(new c.BoxGeometry(.15,.15,.01),u.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,.3,0]],[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new c.Mesh(new c.OctahedronGeometry(.2,0),n)]],XY:[[new c.Mesh(new c.BoxGeometry(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new c.Mesh(new c.BoxGeometry(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new c.Mesh(new c.BoxGeometry(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new c.Mesh(new c.OctahedronGeometry(.01,2),i),null,null,null,"helper"]],END:[[new c.Mesh(new c.OctahedronGeometry(.01,2),i),null,null,null,"helper"]],DELTA:[[new c.Line(F(),i),null,null,null,"helper"]],X:[[new c.Line(y,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new c.Line(y,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new c.Line(y,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},_={XYZE:[[new c.Mesh(A(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new c.Mesh(A(.5,.5),s)]],Y:[[new c.Mesh(A(.5,.5),r),null,[0,0,-Math.PI/2]]],Z:[[new c.Mesh(A(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new c.Mesh(A(.75,1),d),null,[0,Math.PI/2,0]]]},O={AXIS:[[new c.Line(y,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new c.Mesh(new c.SphereGeometry(.25,10,8),n)]],X:[[new c.Mesh(new c.TorusGeometry(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new c.Mesh(new c.TorusGeometry(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new c.Mesh(new c.TorusGeometry(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new c.Mesh(new c.TorusGeometry(.75,.1,2,24),n)]]},Q={X:[[new c.Mesh(x,s),[.5,0,0],[0,0,-Math.PI/2]],[new c.Mesh(v,s),[0,0,0],[0,0,-Math.PI/2]],[new c.Mesh(x,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new c.Mesh(x,r),[0,.5,0]],[new c.Mesh(v,r)],[new c.Mesh(x,r),[0,-.5,0],[0,0,Math.PI]]],Z:[[new c.Mesh(x,o),[0,0,.5],[Math.PI/2,0,0]],[new c.Mesh(v,o),[0,0,0],[Math.PI/2,0,0]],[new c.Mesh(x,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new c.Mesh(new c.BoxGeometry(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new c.Mesh(new c.BoxGeometry(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new c.Mesh(new c.BoxGeometry(.15,.15,.01),u),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new c.Mesh(new c.BoxGeometry(.1,.1,.1),h.clone())]]},R={X:[[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,.3,0]],[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new c.Mesh(new c.CylinderGeometry(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new c.Mesh(new c.BoxGeometry(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new c.Mesh(new c.BoxGeometry(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new c.Mesh(new c.BoxGeometry(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new c.Mesh(new c.BoxGeometry(.2,.2,.2),n),[0,0,0]]]},L={X:[[new c.Line(y,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new c.Line(y,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new c.Line(y,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function b(I){const U=new c.Object3D;for(const N in I)for(let G=I[N].length;G--;){const k=I[N][G][0].clone(),Z=I[N][G][1],z=I[N][G][2],q=I[N][G][3],se=I[N][G][4];k.name=N,k.tag=se,Z&&k.position.set(Z[0],Z[1],Z[2]),z&&k.rotation.set(z[0],z[1],z[2]),q&&k.scale.set(q[0],q[1],q[2]),k.updateMatrix();const K=k.geometry.clone();K.applyMatrix4(k.matrix),k.geometry=K,k.renderOrder=1/0,k.position.set(0,0,0),k.rotation.set(0,0,0),k.scale.set(1,1,1),U.add(k)}return U}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=b(w)),this.add(this.gizmo.rotate=b(_)),this.add(this.gizmo.scale=b(Q)),this.add(this.picker.translate=b(S)),this.add(this.picker.rotate=b(E)),this.add(this.picker.scale=b(R)),this.add(this.helper.translate=b(P)),this.add(this.helper.rotate=b(O)),this.add(this.helper.scale=b(L)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:At;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const r=i[s];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(o*this.size/4),r.tag==="helper"){r.visible=!1,r.name==="AXIS"?(r.position.copy(this.worldPositionStart),r.visible=!!this.axis,this.axis==="X"&&(j.setFromEuler(dt.set(0,0,0)),r.quaternion.copy(n).multiply(j),Math.abs(Y.copy(et).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Y"&&(j.setFromEuler(dt.set(0,0,Math.PI/2)),r.quaternion.copy(n).multiply(j),Math.abs(Y.copy(Re).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="Z"&&(j.setFromEuler(dt.set(0,Math.PI/2,0)),r.quaternion.copy(n).multiply(j),Math.abs(Y.copy(tt).applyQuaternion(n).dot(this.eye))>.9&&(r.visible=!1)),this.axis==="XYZE"&&(j.setFromEuler(dt.set(0,Math.PI/2,0)),Y.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(yn.lookAt(An,Y,Re)),r.quaternion.multiply(j),r.visible=this.dragging),this.axis==="E"&&(r.visible=!1)):r.name==="START"?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name==="END"?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name==="DELTA"?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),ae.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),ae.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy(ae),r.visible=this.dragging):(r.quaternion.copy(n),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}r.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(r.name==="X"&&Math.abs(Y.copy(et).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Y"&&Math.abs(Y.copy(Re).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="Z"&&Math.abs(Y.copy(tt).applyQuaternion(n).dot(this.eye))>.99&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XY"&&Math.abs(Y.copy(tt).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="YZ"&&Math.abs(Y.copy(et).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name==="XZ"&&Math.abs(Y.copy(Re).applyQuaternion(n).dot(this.eye))<.2&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)):this.mode==="rotate"&&(pt.copy(n),Y.copy(this.eye).applyQuaternion(j.copy(n).invert()),r.name.search("E")!==-1&&r.quaternion.setFromRotationMatrix(yn.lookAt(this.eye,An,Re)),r.name==="X"&&(j.setFromAxisAngle(et,Math.atan2(-Y.y,Y.z)),j.multiplyQuaternions(pt,j),r.quaternion.copy(j)),r.name==="Y"&&(j.setFromAxisAngle(Re,Math.atan2(Y.x,Y.z)),j.multiplyQuaternions(pt,j),r.quaternion.copy(j)),r.name==="Z"&&(j.setFromAxisAngle(tt,Math.atan2(Y.y,Y.x)),j.multiplyQuaternions(pt,j),r.quaternion.copy(j))),r.visible=r.visible&&(r.name.indexOf("X")===-1||this.showX),r.visible=r.visible&&(r.name.indexOf("Y")===-1||this.showY),r.visible=r.visible&&(r.name.indexOf("Z")===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split("").some(function(l){return r.name===l}))&&(r.material.color.setHex(16776960),r.material.opacity=1)}super.updateMatrixWorld(e)}}Gn.prototype.isTransformControlsGizmo=!0;class Yn extends c.Mesh{constructor(){super(new c.PlaneGeometry(1e5,1e5,2,2),new c.MeshBasicMaterial({visible:!1,wireframe:!0,side:c.DoubleSide,transparent:!0,opacity:.1,toneMapped:!1})),this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),mt.copy(et).applyQuaternion(t==="local"?this.worldQuaternion:At),Ze.copy(Re).applyQuaternion(t==="local"?this.worldQuaternion:At),qe.copy(tt).applyQuaternion(t==="local"?this.worldQuaternion:At),Y.copy(Ze),this.mode){case"translate":case"scale":switch(this.axis){case"X":Y.copy(this.eye).cross(mt),me.copy(mt).cross(Y);break;case"Y":Y.copy(this.eye).cross(Ze),me.copy(Ze).cross(Y);break;case"Z":Y.copy(this.eye).cross(qe),me.copy(qe).cross(Y);break;case"XY":me.copy(qe);break;case"YZ":me.copy(mt);break;case"XZ":Y.copy(qe),me.copy(Ze);break;case"XYZ":case"E":me.set(0,0,0);break}break;case"rotate":default:me.set(0,0,0)}me.length()===0?this.quaternion.copy(this.cameraQuaternion):(vn.lookAt(ae.set(0,0,0),me,Y),this.quaternion.setFromRotationMatrix(vn)),super.updateMatrixWorld(e)}}Yn.prototype.isTransformControlsPlane=!0;/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Tn={},kt=function(a){return URL.createObjectURL(new Blob([a],{type:"text/javascript"}))},Hn=function(a){return new Worker(a)};try{URL.revokeObjectURL(kt(""))}catch{kt=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Hn=function(e){return new Worker(e,{type:"module"})}}var Yi=function(a,e,t,n,i){var s=Hn(Tn[e]||(Tn[e]=kt(a)));return s.onerror=function(r){return i(r.error,null)},s.onmessage=function(r){return i(null,r.data)},s.postMessage(t,n),s},X=Uint8Array,ee=Uint16Array,Te=Uint32Array,Ge=new X([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ye=new X([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),it=new X([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),jn=function(a,e){for(var t=new ee(31),n=0;n<31;++n)t[n]=e+=1<<a[n-1];for(var i=new Te(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},zn=jn(Ge,2),Zt=zn[0],wt=zn[1];Zt[28]=258,wt[258]=28;var Vn=jn(Ye,0),Wn=Vn[0],Bt=Vn[1],st=new ee(32768);for(var H=0;H<32768;++H){var Pe=(H&43690)>>>1|(H&21845)<<1;Pe=(Pe&52428)>>>2|(Pe&13107)<<2,Pe=(Pe&61680)>>>4|(Pe&3855)<<4,st[H]=((Pe&65280)>>>8|(Pe&255)<<8)>>>1}var ue=function(a,e,t){for(var n=a.length,i=0,s=new ee(e);i<n;++i)++s[a[i]-1];var r=new ee(e);for(i=0;i<e;++i)r[i]=r[i-1]+s[i-1]<<1;var o;if(t){o=new ee(1<<e);var l=15-e;for(i=0;i<n;++i)if(a[i])for(var u=i<<4|a[i],f=e-a[i],h=r[a[i]-1]++<<f,d=h|(1<<f)-1;h<=d;++h)o[st[h]>>>l]=u}else for(o=new ee(n),i=0;i<n;++i)a[i]&&(o[i]=st[r[a[i]-1]++]>>>15-a[i]);return o},we=new X(288);for(var H=0;H<144;++H)we[H]=8;for(var H=144;H<256;++H)we[H]=9;for(var H=256;H<280;++H)we[H]=7;for(var H=280;H<288;++H)we[H]=8;var Be=new X(32);for(var H=0;H<32;++H)Be[H]=5;var Kn=ue(we,9,0),Zn=ue(we,9,1),qn=ue(Be,5,0),Jn=ue(Be,5,1),yt=function(a){for(var e=a[0],t=1;t<a.length;++t)a[t]>e&&(e=a[t]);return e},ce=function(a,e,t){var n=e/8|0;return(a[n]|a[n+1]<<8)>>(e&7)&t},vt=function(a,e){var t=e/8|0;return(a[t]|a[t+1]<<8|a[t+2]<<16)>>(e&7)},lt=function(a){return(a/8|0)+(a&7&&1)},fe=function(a,e,t){(e==null||e<0)&&(e=0),(t==null||t>a.length)&&(t=a.length);var n=new(a instanceof ee?ee:a instanceof Te?Te:X)(t-e);return n.set(a.subarray(e,t)),n},ct=function(a,e,t){var n=a.length;if(!n||t&&!t.l&&n<5)return e||new X(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new X(n*3));var r=function(Ue){var T=e.length;if(Ue>T){var M=new X(Math.max(T*2,Ue));M.set(e),e=M}},o=t.f||0,l=t.p||0,u=t.b||0,f=t.l,h=t.d,d=t.m,p=t.n,g=n*8;do{if(!f){t.f=o=ce(a,l,1);var m=ce(a,l+1,3);if(l+=3,m)if(m==1)f=Zn,h=Jn,d=9,p=5;else if(m==2){var A=ce(a,l,31)+257,F=ce(a,l+10,15)+4,w=A+ce(a,l+5,31)+1;l+=14;for(var S=new X(w),P=new X(19),_=0;_<F;++_)P[it[_]]=ce(a,l+_*3,7);l+=F*3;for(var O=yt(P),E=(1<<O)-1,Q=ue(P,O,1),_=0;_<w;){var R=Q[ce(a,l,E)];l+=R&15;var x=R>>>4;if(x<16)S[_++]=x;else{var L=0,b=0;for(x==16?(b=3+ce(a,l,3),l+=2,L=S[_-1]):x==17?(b=3+ce(a,l,7),l+=3):x==18&&(b=11+ce(a,l,127),l+=7);b--;)S[_++]=L}}var I=S.subarray(0,A),U=S.subarray(A);d=yt(I),p=yt(U),f=ue(I,d,1),h=ue(U,p,1)}else throw"invalid block type";else{var x=lt(l)+4,y=a[x-4]|a[x-3]<<8,v=x+y;if(v>n){if(s)throw"unexpected EOF";break}i&&r(u+y),e.set(a.subarray(x,v),u),t.b=u+=y,t.p=l=v*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}i&&r(u+131072);for(var N=(1<<d)-1,G=(1<<p)-1,k=l;;k=l){var L=f[vt(a,l)&N],Z=L>>>4;if(l+=L&15,l>g){if(s)throw"unexpected EOF";break}if(!L)throw"invalid length/literal";if(Z<256)e[u++]=Z;else if(Z==256){k=l,f=null;break}else{var z=Z-254;if(Z>264){var _=Z-257,q=Ge[_];z=ce(a,l,(1<<q)-1)+Zt[_],l+=q}var se=h[vt(a,l)&G],K=se>>>4;if(!se)throw"invalid distance";l+=se&15;var U=Wn[K];if(K>3){var q=Ye[K];U+=vt(a,l)&(1<<q)-1,l+=q}if(l>g){if(s)throw"unexpected EOF";break}i&&r(u+131072);for(var J=u+z;u<J;u+=4)e[u]=e[u-U],e[u+1]=e[u+1-U],e[u+2]=e[u+2-U],e[u+3]=e[u+3-U];u=J}}t.l=f,t.p=k,t.b=u,f&&(o=1,t.m=d,t.d=h,t.n=p)}while(!o);return u==e.length?e:fe(e,0,u)},ge=function(a,e,t){t<<=e&7;var n=e/8|0;a[n]|=t,a[n+1]|=t>>>8},De=function(a,e,t){t<<=e&7;var n=e/8|0;a[n]|=t,a[n+1]|=t>>>8,a[n+2]|=t>>>16},Tt=function(a,e){for(var t=[],n=0;n<a.length;++n)a[n]&&t.push({s:n,f:a[n]});var i=t.length,s=t.slice();if(!i)return[ve,0];if(i==1){var r=new X(t[0].s+1);return r[t[0].s]=1,[r,1]}t.sort(function(w,S){return w.f-S.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],u=0,f=1,h=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};f!=i-1;)o=t[t[u].f<t[h].f?u++:h++],l=t[u!=f&&t[u].f<t[h].f?u++:h++],t[f++]={s:-1,f:o.f+l.f,l:o,r:l};for(var d=s[0].s,n=1;n<i;++n)s[n].s>d&&(d=s[n].s);var p=new ee(d+1),g=Ft(t[f-1],p,0);if(g>e){var n=0,m=0,x=g-e,y=1<<x;for(s.sort(function(S,P){return p[P.s]-p[S.s]||S.f-P.f});n<i;++n){var v=s[n].s;if(p[v]>e)m+=y-(1<<g-p[v]),p[v]=e;else break}for(m>>>=x;m>0;){var A=s[n].s;p[A]<e?m-=1<<e-p[A]++-1:++n}for(;n>=0&&m;--n){var F=s[n].s;p[F]==e&&(--p[F],++m)}g=e}return[new X(p),g]},Ft=function(a,e,t){return a.s==-1?Math.max(Ft(a.l,e,t+1),Ft(a.r,e,t+1)):e[a.s]=t},Qt=function(a){for(var e=a.length;e&&!a[--e];);for(var t=new ee(++e),n=0,i=a[0],s=1,r=function(l){t[n++]=l},o=1;o<=e;++o)if(a[o]==i&&o!=e)++s;else{if(!i&&s>2){for(;s>138;s-=138)r(32754);s>2&&(r(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(r(i),--s;s>6;s-=6)r(8304);s>2&&(r(s-3<<5|8208),s=0)}for(;s--;)r(i);s=1,i=a[o]}return[t.subarray(0,n),e]},ke=function(a,e){for(var t=0,n=0;n<e.length;++n)t+=a[n]*e[n];return t},nt=function(a,e,t){var n=t.length,i=lt(e+2);a[i]=n&255,a[i+1]=n>>>8,a[i+2]=a[i]^255,a[i+3]=a[i+1]^255;for(var s=0;s<n;++s)a[i+s+4]=t[s];return(i+4+n)*8},Gt=function(a,e,t,n,i,s,r,o,l,u,f){ge(e,f++,t),++i[256];for(var h=Tt(i,15),d=h[0],p=h[1],g=Tt(s,15),m=g[0],x=g[1],y=Qt(d),v=y[0],A=y[1],F=Qt(m),w=F[0],S=F[1],P=new ee(19),_=0;_<v.length;++_)P[v[_]&31]++;for(var _=0;_<w.length;++_)P[w[_]&31]++;for(var O=Tt(P,7),E=O[0],Q=O[1],R=19;R>4&&!E[it[R-1]];--R);var L=u+5<<3,b=ke(i,we)+ke(s,Be)+r,I=ke(i,d)+ke(s,m)+r+14+3*R+ke(P,E)+(2*P[16]+3*P[17]+7*P[18]);if(L<=b&&L<=I)return nt(e,f,a.subarray(l,l+u));var U,N,G,k;if(ge(e,f,1+(I<b)),f+=2,I<b){U=ue(d,p,0),N=d,G=ue(m,x,0),k=m;var Z=ue(E,Q,0);ge(e,f,A-257),ge(e,f+5,S-1),ge(e,f+10,R-4),f+=14;for(var _=0;_<R;++_)ge(e,f+3*_,E[it[_]]);f+=3*R;for(var z=[v,w],q=0;q<2;++q)for(var se=z[q],_=0;_<se.length;++_){var K=se[_]&31;ge(e,f,Z[K]),f+=E[K],K>15&&(ge(e,f,se[_]>>>5&127),f+=se[_]>>>12)}}else U=Kn,N=we,G=qn,k=Be;for(var _=0;_<o;++_)if(n[_]>255){var K=n[_]>>>18&31;De(e,f,U[K+257]),f+=N[K+257],K>7&&(ge(e,f,n[_]>>>23&31),f+=Ge[K]);var J=n[_]&31;De(e,f,G[J]),f+=k[J],J>3&&(De(e,f,n[_]>>>5&8191),f+=Ye[J])}else De(e,f,U[n[_]]),f+=N[n[_]];return De(e,f,U[256]),f+N[256]},$n=new Te([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ve=new X(0),ei=function(a,e,t,n,i,s){var r=a.length,o=new X(n+r+5*(1+Math.ceil(r/7e3))+i),l=o.subarray(n,o.length-i),u=0;if(!e||r<8)for(var f=0;f<=r;f+=65535){var h=f+65535;h<r?u=nt(l,u,a.subarray(f,h)):(l[f]=s,u=nt(l,u,a.subarray(f,r)))}else{for(var d=$n[e-1],p=d>>>13,g=d&8191,m=(1<<t)-1,x=new ee(32768),y=new ee(m+1),v=Math.ceil(t/3),A=2*v,F=function(Fe){return(a[Fe]^a[Fe+1]<<v^a[Fe+2]<<A)&m},w=new Te(25e3),S=new ee(288),P=new ee(32),_=0,O=0,f=0,E=0,Q=0,R=0;f<r;++f){var L=F(f),b=f&32767,I=y[L];if(x[b]=I,y[L]=b,Q<=f){var U=r-f;if((_>7e3||E>24576)&&U>423){u=Gt(a,l,0,w,S,P,O,E,R,f-R,u),E=_=O=0,R=f;for(var N=0;N<286;++N)S[N]=0;for(var N=0;N<30;++N)P[N]=0}var G=2,k=0,Z=g,z=b-I&32767;if(U>2&&L==F(f-z))for(var q=Math.min(p,U)-1,se=Math.min(32767,f),K=Math.min(258,U);z<=se&&--Z&&b!=I;){if(a[f+G]==a[f+G-z]){for(var J=0;J<K&&a[f+J]==a[f+J-z];++J);if(J>G){if(G=J,k=z,J>q)break;for(var Ue=Math.min(z,J-2),T=0,N=0;N<Ue;++N){var M=f-z+N+32768&32767,$=x[M],te=M-$+32768&32767;te>T&&(T=te,I=M)}}}b=I,I=x[b],z+=b-I+32768&32767}if(k){w[E++]=268435456|wt[G]<<18|Bt[k];var le=wt[G]&31,de=Bt[k]&31;O+=Ge[le]+Ye[de],++S[257+le],++P[de],Q=f+G,++_}else w[E++]=a[f],++S[a[f]]}}u=Gt(a,l,s,w,S,P,O,E,R,f-R,u),!s&&u&7&&(u=nt(l,u+1,ve))}return fe(o,0,n+lt(u)+i)},ti=function(){for(var a=new Te(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;a[e]=t}return a}(),He=function(){var a=-1;return{p:function(e){for(var t=a,n=0;n<e.length;++n)t=ti[t&255^e[n]]^t>>>8;a=t},d:function(){return~a}}},qt=function(){var a=1,e=0;return{p:function(t){for(var n=a,i=e,s=t.length,r=0;r!=s;){for(var o=Math.min(r+2655,s);r<o;++r)i+=n+=t[r];n=(n&65535)+15*(n>>16),i=(i&65535)+15*(i>>16)}a=n,e=i},d:function(){return a%=65521,e%=65521,(a&255)<<24|a>>>8<<16|(e&255)<<8|e>>>8}}},Oe=function(a,e,t,n,i){return ei(a,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):12+e.mem,t,n,!i)},ut=function(a,e){var t={};for(var n in a)t[n]=a[n];for(var n in e)t[n]=e[n];return t},wn=function(a,e,t){for(var n=a(),i=a.toString(),s=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/ /g,"").split(","),r=0;r<n.length;++r){var o=n[r],l=s[r];if(typeof o=="function"){e+=";"+l+"=";var u=o.toString();if(o.prototype)if(u.indexOf("[native code]")!=-1){var f=u.indexOf(" ",8)+1;e+=u.slice(f,u.indexOf("(",f))}else{e+=u;for(var h in o.prototype)e+=";"+l+".prototype."+h+"="+o.prototype[h].toString()}else e+=u}else t[l]=o}return[e,t]},gt=[],Hi=function(a){var e=[];for(var t in a)(a[t]instanceof X||a[t]instanceof ee||a[t]instanceof Te)&&e.push((a[t]=new a[t].constructor(a[t])).buffer);return e},ni=function(a,e,t,n){var i;if(!gt[t]){for(var s="",r={},o=a.length-1,l=0;l<o;++l)i=wn(a[l],s,r),s=i[0],r=i[1];gt[t]=wn(a[o],s,r)}var u=ut({},gt[t][1]);return Yi(gt[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,u,Hi(u),n)},je=function(){return[X,ee,Te,Ge,Ye,it,Zt,Wn,Zn,Jn,st,ue,yt,ce,vt,lt,fe,ct,Ke,be,Jt]},ze=function(){return[X,ee,Te,Ge,Ye,it,wt,Bt,Kn,we,qn,Be,st,$n,ve,ue,ge,De,Tt,Ft,Qt,ke,nt,Gt,lt,fe,ei,Oe,ft,be]},ii=function(){return[$t,tn,B,He,ti]},si=function(){return[en,oi]},ri=function(){return[nn,B,qt]},ai=function(){return[li]},be=function(a){return postMessage(a,[a.buffer])},Jt=function(a){return a&&a.size&&new X(a.size)},Ve=function(a,e,t,n,i,s){var r=ni(t,n,i,function(o,l){r.terminate(),s(o,l)});return r.postMessage([a,e],e.consume?[a.buffer]:[]),function(){r.terminate()}},he=function(a){return a.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return a.push(e.data[0],e.data[1])}},We=function(a,e,t,n,i){var s,r=ni(a,n,i,function(o,l){o?(r.terminate(),e.ondata.call(e,o)):(l[1]&&r.terminate(),e.ondata.call(e,o,l[0],l[1]))});r.postMessage(t),e.push=function(o,l){if(s)throw"stream finished";if(!e.ondata)throw"no stream handler";r.postMessage([o,s=l],[o.buffer])},e.terminate=function(){r.terminate()}},ie=function(a,e){return a[e]|a[e+1]<<8},W=function(a,e){return(a[e]|a[e+1]<<8|a[e+2]<<16|a[e+3]<<24)>>>0},Ot=function(a,e){return W(a,e)+W(a,e+4)*4294967296},B=function(a,e,t){for(;t;++e)a[e]=t,t>>>=8},$t=function(a,e){var t=e.filename;if(a[0]=31,a[1]=139,a[2]=8,a[8]=e.level<2?4:e.level==9?2:0,a[9]=3,e.mtime!=0&&B(a,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){a[3]=8;for(var n=0;n<=t.length;++n)a[n+10]=t.charCodeAt(n)}},en=function(a){if(a[0]!=31||a[1]!=139||a[2]!=8)throw"invalid gzip data";var e=a[3],t=10;e&4&&(t+=a[10]|(a[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!a[t++]);return t+(e&2)},oi=function(a){var e=a.length;return(a[e-4]|a[e-3]<<8|a[e-2]<<16|a[e-1]<<24)>>>0},tn=function(a){return 10+(a.filename&&a.filename.length+1||0)},nn=function(a,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;a[0]=120,a[1]=n<<6|(n?32-2*n:1)},li=function(a){if((a[0]&15)!=8||a[0]>>>4>7||(a[0]<<8|a[1])%31)throw"invalid zlib data";if(a[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function sn(a,e){return!e&&typeof a=="function"&&(e=a,a={}),this.ondata=e,a}var xe=function(){function a(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return a.prototype.p=function(e,t){this.ondata(Oe(e,this.o,0,0,!t),t)},a.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},a}(),ci=function(){function a(e,t){We([ze,function(){return[he,xe]}],this,sn.call(this,e,t),function(n){var i=new xe(n.data);onmessage=he(i)},6)}return a}();function ui(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ve(a,e,[ze],function(n){return be(ft(n.data[0],n.data[1]))},0,t)}function ft(a,e){return Oe(a,e||{},0,0)}var oe=function(){function a(e){this.s={},this.p=new X(0),this.ondata=e}return a.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new X(t+e.length);n.set(this.p),n.set(e,t),this.p=n},a.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=ct(this.p,this.o,this.s);this.ondata(fe(n,t,this.s.b),this.d),this.o=fe(n,this.s.b-32768),this.s.b=this.o.length,this.p=fe(this.p,this.s.p/8|0),this.s.p&=7},a.prototype.push=function(e,t){this.e(e),this.c(t)},a}(),rn=function(){function a(e){this.ondata=e,We([je,function(){return[he,oe]}],this,0,function(){var t=new oe;onmessage=he(t)},7)}return a}();function an(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ve(a,e,[je],function(n){return be(Ke(n.data[0],Jt(n.data[1])))},1,t)}function Ke(a,e){return ct(a,e)}var _t=function(){function a(e,t){this.c=He(),this.l=0,this.v=1,xe.call(this,e,t)}return a.prototype.push=function(e,t){xe.prototype.push.call(this,e,t)},a.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=Oe(e,this.o,this.v&&tn(this.o),t&&8,!t);this.v&&($t(n,this.o),this.v=0),t&&(B(n,n.length-8,this.c.d()),B(n,n.length-4,this.l)),this.ondata(n,t)},a}(),Fn=function(){function a(e,t){We([ze,ii,function(){return[he,xe,_t]}],this,sn.call(this,e,t),function(n){var i=new _t(n.data);onmessage=he(i)},8)}return a}();function _n(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ve(a,e,[ze,ii,function(){return[Pt]}],function(n){return be(Pt(n.data[0],n.data[1]))},2,t)}function Pt(a,e){e||(e={});var t=He(),n=a.length;t.p(a);var i=Oe(a,e,tn(e),8),s=i.length;return $t(i,e),B(i,s-8,t.d()),B(i,s-4,n),i}var St=function(){function a(e){this.v=1,oe.call(this,e)}return a.prototype.push=function(e,t){if(oe.prototype.e.call(this,e),this.v){var n=this.p.length>3?en(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}oe.prototype.c.call(this,t)},a}(),fi=function(){function a(e){this.ondata=e,We([je,si,function(){return[he,oe,St]}],this,0,function(){var t=new St;onmessage=he(t)},9)}return a}();function hi(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ve(a,e,[je,si,function(){return[Et]}],function(n){return be(Et(n.data[0]))},3,t)}function Et(a,e){return ct(a.subarray(en(a),-8),e||new X(oi(a)))}var Yt=function(){function a(e,t){this.c=qt(),this.v=1,xe.call(this,e,t)}return a.prototype.push=function(e,t){xe.prototype.push.call(this,e,t)},a.prototype.p=function(e,t){this.c.p(e);var n=Oe(e,this.o,this.v&&2,t&&4,!t);this.v&&(nn(n,this.o),this.v=0),t&&B(n,n.length-4,this.c.d()),this.ondata(n,t)},a}(),ji=function(){function a(e,t){We([ze,ri,function(){return[he,xe,Yt]}],this,sn.call(this,e,t),function(n){var i=new Yt(n.data);onmessage=he(i)},10)}return a}();function zi(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ve(a,e,[ze,ri,function(){return[Ht]}],function(n){return be(Ht(n.data[0],n.data[1]))},4,t)}function Ht(a,e){e||(e={});var t=qt();t.p(a);var n=Oe(a,e,2,4);return nn(n,e),B(n,n.length-4,t.d()),n}var Mt=function(){function a(e){this.v=1,oe.call(this,e)}return a.prototype.push=function(e,t){if(oe.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}oe.prototype.c.call(this,t)},a}(),di=function(){function a(e){this.ondata=e,We([je,ai,function(){return[he,oe,Mt]}],this,0,function(){var t=new Mt;onmessage=he(t)},11)}return a}();function pi(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Ve(a,e,[je,ai,function(){return[rt]}],function(n){return be(rt(n.data[0],Jt(n.data[1])))},5,t)}function rt(a,e){return ct((li(a),a.subarray(2,-4)),e)}var mi=function(){function a(e){this.G=St,this.I=oe,this.Z=Mt,this.ondata=e}return a.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new X(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var i=this,s=function(){i.ondata.apply(i,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(s):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},a}(),Vi=function(){function a(e){this.G=fi,this.I=rn,this.Z=di,this.ondata=e}return a.prototype.push=function(e,t){mi.prototype.push.call(this,e,t)},a}();function Wi(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return a[0]==31&&a[1]==139&&a[2]==8?hi(a,e,t):(a[0]&15)!=8||a[0]>>4>7||(a[0]<<8|a[1])%31?an(a,e,t):pi(a,e,t)}function Ki(a,e){return a[0]==31&&a[1]==139&&a[2]==8?Et(a,e):(a[0]&15)!=8||a[0]>>4>7||(a[0]<<8|a[1])%31?Ke(a,e):rt(a,e)}var on=function(a,e,t,n){for(var i in a){var s=a[i],r=e+i;s instanceof X?t[r]=[s,n]:Array.isArray(s)?t[r]=[s[0],ut(n,s[1])]:on(s,r+"/",t,n)}},Pn=typeof TextEncoder<"u"&&new TextEncoder,jt=typeof TextDecoder<"u"&&new TextDecoder,gi=0;try{jt.decode(ve,{stream:!0}),gi=1}catch{}var xi=function(a){for(var e="",t=0;;){var n=a[t++],i=(n>127)+(n>223)+(n>239);if(t+i>a.length)return[e,fe(a,t-1)];i?i==3?(n=((n&15)<<18|(a[t++]&63)<<12|(a[t++]&63)<<6|a[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?e+=String.fromCharCode((n&31)<<6|a[t++]&63):e+=String.fromCharCode((n&15)<<12|(a[t++]&63)<<6|a[t++]&63):e+=String.fromCharCode(n)}},Zi=function(){function a(e){this.ondata=e,gi?this.t=new TextDecoder:this.p=ve}return a.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new X(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var i=xi(n),s=i[0],r=i[1];if(t){if(r.length)throw"invalid utf-8 data";this.p=null}else this.p=r;this.ondata(s,t)},a}(),qi=function(){function a(e){this.ondata=e}return a.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(Le(e),this.d=t||!1)},a}();function Le(a,e){if(e){for(var t=new X(a.length),n=0;n<a.length;++n)t[n]=a.charCodeAt(n);return t}if(Pn)return Pn.encode(a);for(var i=a.length,s=new X(a.length+(a.length>>1)),r=0,o=function(f){s[r++]=f},n=0;n<i;++n){if(r+5>s.length){var l=new X(r+8+(i-n<<1));l.set(s),s=l}var u=a.charCodeAt(n);u<128||e?o(u):u<2048?(o(192|u>>6),o(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|a.charCodeAt(++n)&1023,o(240|u>>18),o(128|u>>12&63),o(128|u>>6&63),o(128|u&63)):(o(224|u>>12),o(128|u>>6&63),o(128|u&63))}return fe(s,0,r)}function ln(a,e){if(e){for(var t="",n=0;n<a.length;n+=16384)t+=String.fromCharCode.apply(null,a.subarray(n,n+16384));return t}else{if(jt)return jt.decode(a);var i=xi(a),s=i[0],r=i[1];if(r.length)throw"invalid utf-8 data";return s}}var Ai=function(a){return a==1?3:a<6?2:a==9?1:0},yi=function(a,e){return e+30+ie(a,e+26)+ie(a,e+28)},vi=function(a,e,t){var n=ie(a,e+28),i=ln(a.subarray(e+46,e+46+n),!(ie(a,e+8)&2048)),s=e+46+n,r=W(a,e+20),o=t&&r==4294967295?Ti(a,s):[r,W(a,e+24),W(a,e+42)],l=o[0],u=o[1],f=o[2];return[ie(a,e+10),l,u,i,s+ie(a,e+30)+ie(a,e+32),f]},Ti=function(a,e){for(;ie(a,e)!=1;e+=4+ie(a,e+2));return[Ot(a,e+12),Ot(a,e+4),Ot(a,e+20)]},Me=function(a){var e=0;if(a)for(var t in a){var n=a[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Qe=function(a,e,t,n,i,s,r,o){var l=n.length,u=t.extra,f=o&&o.length,h=Me(u);B(a,e,r!=null?33639248:67324752),e+=4,r!=null&&(a[e++]=20,a[e++]=t.os),a[e]=20,e+=2,a[e++]=t.flag<<1|(s==null&&8),a[e++]=i&&8,a[e++]=t.compression&255,a[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if(p<0||p>119)throw"date not in range 1980-2099";if(B(a,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,s!=null&&(B(a,e,t.crc),B(a,e+4,s),B(a,e+8,t.size)),B(a,e+12,l),B(a,e+14,h),e+=16,r!=null&&(B(a,e,f),B(a,e+6,t.attrs),B(a,e+10,r),e+=14),a.set(n,e),e+=l,h)for(var g in u){var m=u[g],x=m.length;B(a,e,+g),B(a,e+2,x),a.set(m,e+4),e+=4+x}return f&&(a.set(o,e),e+=f),e},cn=function(a,e,t,n,i){B(a,e,101010256),B(a,e+8,t),B(a,e+10,t),B(a,e+12,n),B(a,e+16,i)},at=function(){function a(e){this.filename=e,this.c=He(),this.size=0,this.compression=0}return a.prototype.process=function(e,t){this.ondata(null,e,t)},a.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},a}(),Ji=function(){function a(e,t){var n=this;t||(t={}),at.call(this,e),this.d=new xe(t,function(i,s){n.ondata(null,i,s)}),this.compression=8,this.flag=Ai(t.level)}return a.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},a.prototype.push=function(e,t){at.prototype.push.call(this,e,t)},a}(),$i=function(){function a(e,t){var n=this;t||(t={}),at.call(this,e),this.d=new ci(t,function(i,s,r){n.ondata(i,s,r)}),this.compression=8,this.flag=Ai(t.level),this.terminate=this.d.terminate}return a.prototype.process=function(e,t){this.d.push(e,t)},a.prototype.push=function(e,t){at.prototype.push.call(this,e,t)},a}(),es=function(){function a(e){this.ondata=e,this.u=[],this.d=1}return a.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=Le(e.filename),i=n.length,s=e.comment,r=s&&Le(s),o=i!=e.filename.length||r&&s.length!=r.length,l=i+Me(e.extra)+30;if(i>65535)throw"filename too long";var u=new X(l);Qe(u,0,e,n,o);var f=[u],h=function(){for(var x=0,y=f;x<y.length;x++){var v=y[x];t.ondata(null,v,!1)}f=[]},d=this.d;this.d=0;var p=this.u.length,g=ut(e,{f:n,u:o,o:r,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),d){var x=t.u[p+1];x?x.r():t.d=1}d=1}}),m=0;e.ondata=function(x,y,v){if(x)t.ondata(x,y,v),t.terminate();else if(m+=y.length,f.push(y),v){var A=new X(16);B(A,0,134695760),B(A,4,e.crc),B(A,8,m),B(A,12,e.size),f.push(A),g.c=m,g.b=l+m+16,g.crc=e.crc,g.size=e.size,d&&g.r(),d=1}else d&&h()},this.u.push(g)},a.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},a.prototype.e=function(){for(var e=0,t=0,n=0,i=0,s=this.u;i<s.length;i++){var r=s[i];n+=46+r.f.length+Me(r.extra)+(r.o?r.o.length:0)}for(var o=new X(n+22),l=0,u=this.u;l<u.length;l++){var r=u[l];Qe(o,e,r,r.f,r.u,r.c,t,r.o),e+=46+r.f.length+Me(r.extra)+(r.o?r.o.length:0),t+=r.b}cn(o,e,this.u.length,n,t),this.ondata(null,o,!0),this.d=2},a.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},a}();function ts(a,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};on(a,"",n,e);var i=Object.keys(n),s=i.length,r=0,o=0,l=s,u=new Array(s),f=[],h=function(){for(var m=0;m<f.length;++m)f[m]()},d=function(){var m=new X(o+22),x=r,y=o-r;o=0;for(var v=0;v<l;++v){var A=u[v];try{var F=A.c.length;Qe(m,o,A,A.f,A.u,F);var w=30+A.f.length+Me(A.extra),S=o+w;m.set(A.c,S),Qe(m,r,A,A.f,A.u,F,o,A.m),r+=16+w+(A.m?A.m.length:0),o=S+F}catch(P){return t(P,null)}}cn(m,r,u.length,y,x),t(null,m)};s||d();for(var p=function(m){var x=i[m],y=n[x],v=y[0],A=y[1],F=He(),w=v.length;F.p(v);var S=Le(x),P=S.length,_=A.comment,O=_&&Le(_),E=O&&O.length,Q=Me(A.extra),R=A.level==0?0:8,L=function(b,I){if(b)h(),t(b,null);else{var U=I.length;u[m]=ut(A,{size:w,crc:F.d(),c:I,f:S,m:O,u:P!=x.length||O&&_.length!=E,compression:R}),r+=30+P+Q+U,o+=76+2*(P+Q)+(E||0)+U,--s||d()}};if(P>65535&&L("filename too long",null),!R)L(null,v);else if(w<16e4)try{L(null,ft(v,A))}catch(b){L(b,null)}else f.push(ui(v,A,L))},g=0;g<l;++g)p(g);return h}function ns(a,e){e||(e={});var t={},n=[];on(a,"",t,e);var i=0,s=0;for(var r in t){var o=t[r],l=o[0],u=o[1],f=u.level==0?0:8,h=Le(r),d=h.length,p=u.comment,g=p&&Le(p),m=g&&g.length,x=Me(u.extra);if(d>65535)throw"filename too long";var y=f?ft(l,u):l,v=y.length,A=He();A.p(l),n.push(ut(u,{size:l.length,crc:A.d(),c:y,f:h,m:g,u:d!=r.length||g&&p.length!=m,o:i,compression:f})),i+=30+d+x+v,s+=76+2*(d+x)+(m||0)+v}for(var F=new X(s+22),w=i,S=s-i,P=0;P<n.length;++P){var h=n[P];Qe(F,h.o,h,h.f,h.u,h.c.length);var _=30+h.f.length+Me(h.extra);F.set(h.c,h.o+_),Qe(F,i,h,h.f,h.u,h.c.length,h.o,h.m),i+=16+_+(h.m?h.m.length:0)}return cn(F,i,n.length,S,w),F}var wi=function(){function a(){}return a.prototype.push=function(e,t){this.ondata(null,e,t)},a.compression=0,a}(),is=function(){function a(){var e=this;this.i=new oe(function(t,n){e.ondata(null,t,n)})}return a.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},a.compression=8,a}(),ss=function(){function a(e,t){var n=this;t<32e4?this.i=new oe(function(i,s){n.ondata(null,i,s)}):(this.i=new rn(function(i,s,r){n.ondata(i,s,r)}),this.terminate=this.i.terminate)}return a.prototype.push=function(e,t){this.i.terminate&&(e=fe(e,0)),this.i.push(e,t)},a.compression=8,a}(),rs=function(){function a(e){this.onfile=e,this.k=[],this.o={0:wi},this.p=ve}return a.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var i=Math.min(this.c,e.length),s=e.subarray(0,i);if(this.c-=i,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(i),e.length)return this.push(e,t)}else{var r=0,o=0,l=void 0,u=void 0;this.p.length?e.length?(u=new X(this.p.length+e.length),u.set(this.p),u.set(e,this.p.length)):u=this.p:u=e;for(var f=u.length,h=this.c,d=h&&this.d,p=function(){var y,v=W(u,o);if(v==67324752){r=1,l=o,g.d=null,g.c=0;var A=ie(u,o+6),F=ie(u,o+8),w=A&2048,S=A&8,P=ie(u,o+26),_=ie(u,o+28);if(f>o+30+P+_){var O=[];g.k.unshift(O),r=2;var E=W(u,o+18),Q=W(u,o+22),R=ln(u.subarray(o+30,o+=30+P),!w);E==4294967295?(y=S?[-2]:Ti(u,o),E=y[0],Q=y[1]):S&&(E=-1),o+=_,g.c=E;var L,b={name:R,compression:F,start:function(){if(!b.ondata)throw"no callback";if(!E)b.ondata(null,ve,!0);else{var I=n.o[F];if(!I)throw"unknown compression type "+F;L=E<0?new I(R):new I(R,E,Q),L.ondata=function(k,Z,z){b.ondata(k,Z,z)};for(var U=0,N=O;U<N.length;U++){var G=N[U];L.push(G,!1)}n.k[0]==O&&n.c?n.d=L:L.push(ve,!0)}},terminate:function(){L&&L.terminate&&L.terminate()}};E>=0&&(b.size=E,b.originalSize=Q),g.onfile(b)}return"break"}else if(h){if(v==134695760)return l=o+=12+(h==-2&&8),r=3,g.c=0,"break";if(v==33639248)return l=o-=4,r=3,g.c=0,"break"}},g=this;o<f-4;++o){var m=p();if(m==="break")break}if(this.p=ve,h<0){var x=r?u.subarray(0,l-12-(h==-2&&8)-(W(u,l-16)==134695760&&4)):u.subarray(0,o);d?d.push(x,!!r):this.k[+(r==2)].push(x)}if(r&2)return this.push(u.subarray(o),t);this.p=u.subarray(o)}if(t){if(this.c)throw"invalid zip file";this.p=null}},a.prototype.register=function(e){this.o[e.compression]=e},a}();function as(a,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var d=0;d<t.length;++d)t[d]()},i={},s=a.length-22;W(a,s)!=101010256;--s)if(!s||a.length-s>65558){e("invalid zip file",null);return}var r=ie(a,s+8);r||e(null,{});var o=r,l=W(a,s+16),u=l==4294967295;if(u){if(s=W(a,s-12),W(a,s)!=101075792){e("invalid zip file",null);return}o=r=W(a,s+32),l=W(a,s+48)}for(var f=function(d){var p=vi(a,l,u),g=p[0],m=p[1],x=p[2],y=p[3],v=p[4],A=p[5],F=yi(a,A);l=v;var w=function(P,_){P?(n(),e(P,null)):(i[y]=_,--r||e(null,i))};if(!g)w(null,fe(a,F,F+m));else if(g==8){var S=a.subarray(F,F+m);if(m<32e4)try{w(null,Ke(S,new X(x)))}catch(P){w(P,null)}else t.push(an(S,{size:x},w))}else w("unknown compression type "+g,null)},h=0;h<o;++h)f();return n}function os(a){for(var e={},t=a.length-22;W(a,t)!=101010256;--t)if(!t||a.length-t>65558)throw"invalid zip file";var n=ie(a,t+8);if(!n)return{};var i=W(a,t+16),s=i==4294967295;if(s){if(t=W(a,t-12),W(a,t)!=101075792)throw"invalid zip file";n=W(a,t+32),i=W(a,t+48)}for(var r=0;r<n;++r){var o=vi(a,i,s),l=o[0],u=o[1],f=o[2],h=o[3],d=o[4],p=o[5],g=yi(a,p);if(i=d,!l)e[h]=fe(a,g,g+u);else if(l==8)e[h]=Ke(a.subarray(g,g+u),new X(f));else throw"unknown compression type "+l}return e}const ls=Object.freeze(Object.defineProperty({__proto__:null,AsyncCompress:Fn,AsyncDecompress:Vi,AsyncDeflate:ci,AsyncGunzip:fi,AsyncGzip:Fn,AsyncInflate:rn,AsyncUnzipInflate:ss,AsyncUnzlib:di,AsyncZipDeflate:$i,AsyncZlib:ji,Compress:_t,DecodeUTF8:Zi,Decompress:mi,Deflate:xe,EncodeUTF8:qi,Gunzip:St,Gzip:_t,Inflate:oe,Unzip:rs,UnzipInflate:is,UnzipPassThrough:wi,Unzlib:Mt,Zip:es,ZipDeflate:Ji,ZipPassThrough:at,Zlib:Yt,compress:_n,compressSync:Pt,decompress:Wi,decompressSync:Ki,deflate:ui,deflateSync:ft,gunzip:hi,gunzipSync:Et,gzip:_n,gzipSync:Pt,inflate:an,inflateSync:Ke,strFromU8:ln,strToU8:Le,unzip:as,unzipSync:os,unzlib:pi,unzlibSync:rt,zip:ts,zipSync:ns,zlib:zi,zlibSync:Ht},Symbol.toStringTag,{value:"Module"}));function Fi(a,e,t){const n=t.length-a-1;if(e>=t[n])return n-1;if(e<=t[a])return a;let i=a,s=n,r=Math.floor((i+s)/2);for(;e<t[r]||e>=t[r+1];)e<t[r]?s=r:i=r,r=Math.floor((i+s)/2);return r}function cs(a,e,t,n){const i=[],s=[],r=[];i[0]=1;for(let o=1;o<=t;++o){s[o]=e-n[a+1-o],r[o]=n[a+o]-e;let l=0;for(let u=0;u<o;++u){const f=r[u+1],h=s[o-u],d=i[u]/(f+h);i[u]=l+f*d,l=h*d}i[o]=l}return i}function us(a,e,t,n){const i=Fi(a,n,e),s=cs(i,n,a,e),r=new c.Vector4(0,0,0,0);for(let o=0;o<=a;++o){const l=t[i-a+o],u=s[o],f=l.w*u;r.x+=l.x*f,r.y+=l.y*f,r.z+=l.z*f,r.w+=l.w*u}return r}function fs(a,e,t,n,i){const s=[];for(let h=0;h<=t;++h)s[h]=0;const r=[];for(let h=0;h<=n;++h)r[h]=s.slice(0);const o=[];for(let h=0;h<=t;++h)o[h]=s.slice(0);o[0][0]=1;const l=s.slice(0),u=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-i[a+1-h],u[h]=i[a+h]-e;let d=0;for(let p=0;p<h;++p){const g=u[p+1],m=l[h-p];o[h][p]=g+m;const x=o[p][h-1]/o[h][p];o[p][h]=d+g*x,d=m*x}o[h][h]=d}for(let h=0;h<=t;++h)r[0][h]=o[h][t];for(let h=0;h<=t;++h){let d=0,p=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let x=0;const y=h-m,v=t-m;h>=m&&(g[p][0]=g[d][0]/o[v+1][y],x=g[p][0]*o[y][v]);const A=y>=-1?1:-y,F=h-1<=v?m-1:t-h;for(let S=A;S<=F;++S)g[p][S]=(g[d][S]-g[d][S-1])/o[v+1][y+S],x+=g[p][S]*o[y+S][v];h<=v&&(g[p][m]=-g[d][m-1]/o[v+1][h],x+=g[p][m]*o[h][v]),r[m][h]=x;const w=d;d=p,p=w}}let f=t;for(let h=1;h<=n;++h){for(let d=0;d<=t;++d)r[h][d]*=f;f*=t-h}return r}function hs(a,e,t,n,i){const s=i<a?i:a,r=[],o=Fi(a,n,e),l=fs(o,n,a,s,e),u=[];for(let f=0;f<t.length;++f){const h=t[f].clone(),d=h.w;h.x*=d,h.y*=d,h.z*=d,u[f]=h}for(let f=0;f<=s;++f){const h=u[o-a].clone().multiplyScalar(l[f][0]);for(let d=1;d<=a;++d)h.add(u[o-a+d].clone().multiplyScalar(l[f][d]));r[f]=h}for(let f=s+1;f<=i+1;++f)r[f]=new c.Vector4(0,0,0);return r}function ds(a,e){let t=1;for(let i=2;i<=a;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=a-e;++i)n*=i;return t/n}function ps(a){const e=a.length,t=[],n=[];for(let s=0;s<e;++s){const r=a[s];t[s]=new c.Vector3(r.x,r.y,r.z),n[s]=r.w}const i=[];for(let s=0;s<e;++s){const r=t[s].clone();for(let o=1;o<=s;++o)r.sub(i[s-o].clone().multiplyScalar(ds(s,o)*n[o]));i[s]=r.divideScalar(n[0])}return i}function ms(a,e,t,n,i){const s=hs(a,e,t,n,i);return ps(s)}class Sn extends c.Curve{constructor(e,t,n,i,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let r=0;r<n.length;++r){const o=n[r];this.controlPoints[r]=new c.Vector4(o.x,o.y,o.z,o.w)}}getPoint(e,t=new c.Vector3){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=us(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new c.Vector3){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=ms(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let C,V,re;class En extends c.Loader{constructor(e){super(e)}load(e,t,n,i){const s=this,r=s.path===""?c.LoaderUtils.extractUrlBase(e):s.path,o=new c.FileLoader(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,r))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e,t){if(Ts(e))C=new vs().parse(e);else{const i=Ei(e);if(!ws(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Ln(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ln(i));C=new ys().parse(i)}const n=new c.TextureLoader(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new gs(n,this.manager).parse(C)}}class gs{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){V=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new xs().parse(i);return this.parseScene(i,s,n),re}parseConnections(){const e=new Map;return"Connections"in C&&C.Connections.connections.forEach(function(n){const i=n[0],s=n[1],r=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const o={ID:s,relationship:r};e.get(i).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:r};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in C.Objects){const n=C.Objects.Video;for(const i in n){const s=n[i],r=parseInt(i);if(e[r]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const u=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=u}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const r=new Uint8Array(t);return window.URL.createObjectURL(new Blob([r],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in C.Objects){const n=C.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,r=i!==void 0?i.value:0,o=s!==void 0?s.value:0;if(n.wrapS=r===0?c.RepeatWrapping:c.ClampToEdgeWrapping,n.wrapT=o===0?c.RepeatWrapping:c.ClampToEdgeWrapping,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,s=V.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let r;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),r=new c.Texture):(l.setPath(this.textureLoader.path),r=l.load(n))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),r=new c.Texture):r=this.textureLoader.load(n);return this.textureLoader.setPath(i),r}parseMaterials(e){const t=new Map;if("Material"in C.Objects){const n=C.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!V.has(n))return null;const r=this.parseParameters(e,t,n);let o;switch(s.toLowerCase()){case"phong":o=new c.MeshPhongMaterial;break;case"lambert":o=new c.MeshLambertMaterial;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new c.MeshPhongMaterial;break}return o.setValues(r),o.name=i,o}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new c.Color().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new c.Color().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new c.Color().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new c.Color().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new c.Color().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new c.Color().fromArray(e.SpecularColor.value));const s=this;return V.get(n).children.forEach(function(r){const o=r.relationship;switch(o){case"Bump":i.bumpMap=s.getTexture(t,r.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,r.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,r.ID),i.map!==void 0&&(i.map.encoding=c.sRGBEncoding);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,r.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,r.ID),i.emissiveMap!==void 0&&(i.emissiveMap.encoding=c.sRGBEncoding);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,r.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,r.ID),i.envMap!==void 0&&(i.envMap.mapping=c.EquirectangularReflectionMapping,i.envMap.encoding=c.sRGBEncoding);break;case"SpecularColor":i.specularMap=s.getTexture(t,r.ID),i.specularMap!==void 0&&(i.specularMap.encoding=c.sRGBEncoding);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,r.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),i}getTexture(e,t){return"LayeredTexture"in C.Objects&&t in C.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=V.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in C.Objects){const n=C.Objects.Deformer;for(const i in n){const s=n[i],r=V.get(parseInt(i));if(s.attrType==="Skin"){const o=this.parseSkeleton(r,n);o.ID=i,r.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=r.parents[0].ID,e[i]=o}else if(s.attrType==="BlendShape"){const o={id:i};o.rawTargets=this.parseMorphTargets(r,n),o.id=i,r.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const r={ID:i.ID,indices:[],weights:[],transformLink:new c.Matrix4().fromArray(s.TransformLink.a)};"Indexes"in s&&(r.indices=s.Indexes.a,r.weights=s.Weights.a),n.push(r)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],r=t[s.ID],o={name:r.attrName,initialWeight:r.DeformPercent,id:r.id,fullWeights:r.FullWeights.a};if(r.attrType!=="BlendShapeChannel")return;o.geoID=V.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(o)}return n}parseScene(e,t,n){re=new c.Group;const i=this.parseModels(e.skeletons,t,n),s=C.Objects.Model,r=this;i.forEach(function(l){const u=s[l.ID];r.setLookAtProperties(l,u),V.get(l.ID).parents.forEach(function(h){const d=i.get(h.ID);d!==void 0&&d.add(l)}),l.parent===null&&re.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),re.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const u=Pi(l.userData.transformData);l.applyMatrix4(u),l.updateWorldMatrix()}});const o=new As().parse();re.children.length===1&&re.children[0].isGroup&&(re.children[0].animations=o,re=re.children[0]),re.animations=o}parseModels(e,t,n){const i=new Map,s=C.Objects.Model;for(const r in s){const o=parseInt(r),l=s[r],u=V.get(o);let f=this.buildSkeleton(u,e,o,l.attrName);if(!f){switch(l.attrType){case"Camera":f=this.createCamera(u);break;case"Light":f=this.createLight(u);break;case"Mesh":f=this.createMesh(u,t,n);break;case"NurbsCurve":f=this.createCurve(u,t);break;case"LimbNode":case"Root":f=new c.Bone;break;case"Null":default:f=new c.Group;break}f.name=l.attrName?c.PropertyBinding.sanitizeNodeName(l.attrName):"",f.ID=o}this.getTransformData(f,l),i.set(o,f)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(r){for(const o in t){const l=t[o];l.rawBones.forEach(function(u,f){if(u.ID===r.ID){const h=s;s=new c.Bone,s.matrixWorld.copy(u.transformLink),s.name=i?c.PropertyBinding.sanitizeNodeName(i):"",s.ID=n,l.bones[f]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=C.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new c.Object3D;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let r=1e3;n.FarPlane!==void 0&&(r=n.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(o=n.AspectWidth.value,l=n.AspectHeight.value);const u=o/l;let f=45;n.FieldOfView!==void 0&&(f=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new c.PerspectiveCamera(f,u,s,r),h!==null&&t.setFocalLength(h);break;case 1:t=new c.OrthographicCamera(-o/2,o/2,l/2,-l/2,s,r);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new c.Object3D;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=C.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new c.Object3D;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new c.Color().fromArray(n.Color.value));let r=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(r=0);let o=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?o=0:o=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new c.PointLight(s,r,o,l);break;case 1:t=new c.DirectionalLight(s,r);break;case 2:let u=Math.PI/3;n.InnerAngle!==void 0&&(u=c.MathUtils.degToRad(n.InnerAngle.value));let f=0;n.OuterAngle!==void 0&&(f=c.MathUtils.degToRad(n.OuterAngle.value),f=Math.max(f,1)),t=new c.SpotLight(s,r,o,u,f,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new c.PointLight(s,r);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,r=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&o.push(n.get(l.ID))}),o.length>1?r=o:o.length>0?r=o[0]:(r=new c.MeshPhongMaterial({color:13421772}),o.push(r)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new c.SkinnedMesh(s,r),i.normalizeSkinWeights()):i=new c.Mesh(s,r),i}createCurve(e,t){const n=e.children.reduce(function(s,r){return t.has(r.ID)&&(s=t.get(r.ID)),s},null),i=new c.LineBasicMaterial({color:3342591,linewidth:1});return new c.Line(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Si(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&V.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=C.Objects.Model[i.ID];if("Lcl_Translation"in s){const r=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(r),re.add(e.target)):e.lookAt(new c.Vector3().fromArray(r))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const r=e[s];V.get(parseInt(r.ID)).parents.forEach(function(l){if(t.has(l.ID)){const u=l.ID;V.get(u).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new c.Skeleton(r.bones),i[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in C.Objects){const t=C.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new c.Matrix4().fromArray(s.Matrix.a)}):e[i.Node]=new c.Matrix4().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in C&&"AmbientColor"in C.GlobalSettings){const e=C.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new c.Color(t,n,i);re.add(new c.AmbientLight(s,1))}}}}class xs{parse(e){const t=new Map;if("Geometry"in C.Objects){const n=C.Objects.Geometry;for(const i in n){const s=V.get(parseInt(i)),r=this.parseGeometry(s,n[i],e);t.set(parseInt(i),r)}}return t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],r=e.parents.map(function(h){return C.Objects.Model[h.ID]});if(r.length===0)return;const o=e.children.reduce(function(h,d){return i[d.ID]!==void 0&&(h=i[d.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=r[0],u={};"RotationOrder"in l&&(u.eulerOrder=Si(l.RotationOrder.value)),"InheritType"in l&&(u.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(u.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(u.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(u.scale=l.GeometricScaling.value);const f=Pi(u);return this.genGeometry(t,o,s,f)}genGeometry(e,t,n,i){const s=new c.BufferGeometry;e.attrName&&(s.name=e.attrName);const r=this.parseGeoNode(e,t),o=this.genBuffers(r),l=new c.Float32BufferAttribute(o.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new c.Float32BufferAttribute(o.colors,3)),t&&(s.setAttribute("skinIndex",new c.Uint16BufferAttribute(o.weightsIndices,4)),s.setAttribute("skinWeight",new c.Float32BufferAttribute(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const u=new c.Matrix3().getNormalMatrix(i),f=new c.Float32BufferAttribute(o.normal,3);f.applyNormalMatrix(u),s.setAttribute("normal",f)}if(o.uvs.forEach(function(u,f){let h="uv"+(f+1).toString();f===0&&(h="uv"),s.setAttribute(h,new c.Float32BufferAttribute(o.uvs[f],2))}),r.material&&r.material.mappingType!=="AllSame"){let u=o.materialIndex[0],f=0;if(o.materialIndex.forEach(function(h,d){h!==u&&(s.addGroup(f,d-f,u),u=h,f=d)}),s.groups.length>0){const h=s.groups[s.groups.length-1],d=h.start+h.count;d!==o.materialIndex.length&&s.addGroup(d,o.materialIndex.length-d,u)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(r,o){n.weightTable[r]===void 0&&(n.weightTable[r]=[]),n.weightTable[r].push({id:s,weight:i.weights[o]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,r=[],o=[],l=[],u=[],f=[],h=[];const d=this;return e.vertexIndices.forEach(function(p,g){let m,x=!1;p<0&&(p=p^-1,x=!0);let y=[],v=[];if(r.push(p*3,p*3+1,p*3+2),e.color){const A=xt(g,n,p,e.color);l.push(A[0],A[1],A[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(A){v.push(A.weight),y.push(A.id)}),v.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const A=[0,0,0,0],F=[0,0,0,0];v.forEach(function(w,S){let P=w,_=y[S];F.forEach(function(O,E,Q){if(P>O){Q[E]=P,P=O;const R=A[E];A[E]=_,_=R}})}),y=A,v=F}for(;v.length<4;)v.push(0),y.push(0);for(let A=0;A<4;++A)f.push(v[A]),h.push(y[A])}if(e.normal){const A=xt(g,n,p,e.normal);o.push(A[0],A[1],A[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=xt(g,n,p,e.material)[0]),e.uv&&e.uv.forEach(function(A,F){const w=xt(g,n,p,A);u[F]===void 0&&(u[F]=[]),u[F].push(w[0]),u[F].push(w[1])}),i++,x&&(d.genFace(t,e,r,m,o,l,u,f,h,i),n++,i=0,r=[],o=[],l=[],u=[],f=[],h=[])}),t}genFace(e,t,n,i,s,r,o,l,u,f){for(let h=2;h<f;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(u[0]),e.weightsIndices.push(u[1]),e.weightsIndices.push(u[2]),e.weightsIndices.push(u[3]),e.weightsIndices.push(u[(h-1)*4]),e.weightsIndices.push(u[(h-1)*4+1]),e.weightsIndices.push(u[(h-1)*4+2]),e.weightsIndices.push(u[(h-1)*4+3]),e.weightsIndices.push(u[h*4]),e.weightsIndices.push(u[h*4+1]),e.weightsIndices.push(u[h*4+2]),e.weightsIndices.push(u[h*4+3])),t.color&&(e.colors.push(r[0]),e.colors.push(r[1]),e.colors.push(r[2]),e.colors.push(r[(h-1)*3]),e.colors.push(r[(h-1)*3+1]),e.colors.push(r[(h-1)*3+2]),e.colors.push(r[h*3]),e.colors.push(r[h*3+1]),e.colors.push(r[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(d,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(o[p][0]),e.uvs[p].push(o[p][1]),e.uvs[p].push(o[p][(h-1)*2]),e.uvs[p].push(o[p][(h-1)*2+1]),e.uvs[p].push(o[p][h*2]),e.uvs[p].push(o[p][h*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(r){r.rawTargets.forEach(function(o){const l=C.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,o.name)})})}genMorphGeometry(e,t,n,i,s){const r=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,f=new Float32Array(u);for(let g=0;g<l.length;g++){const m=l[g]*3;f[m]=o[g*3],f[m+1]=o[g*3+1],f[m+2]=o[g*3+2]}const h={vertexIndices:r,vertexPositions:f},d=this.genBuffers(h),p=new c.Float32BufferAttribute(d.vertex,3);p.name=s||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let r=0;r<i.length;++r)s.push(r);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(Sn===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new c.BufferGeometry;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new c.BufferGeometry;const n=t-1,i=e.KnotVector.a,s=[],r=e.Points.a;for(let h=0,d=r.length;h<d;h+=4)s.push(new c.Vector4().fromArray(r,h));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=n,l=i.length-1-o;for(let h=0;h<n;++h)s.push(s[h])}const f=new Sn(n,i,s,o,l).getPoints(s.length*12);return new c.BufferGeometry().setFromPoints(f)}}class As{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(C.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=C.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=C.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(Fs),values:t[n].KeyValueFloat.a},s=V.get(i.id);if(s!==void 0){const r=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(r).curves.x=i:o.match(/Y/)?e.get(r).curves.y=i:o.match(/Z/)?e.get(r).curves.z=i:o.match(/d|DeformPercent/)&&e.has(r)&&(e.get(r).curves.morph=i)}}}parseAnimationLayers(e){const t=C.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],r=V.get(parseInt(i));r!==void 0&&(r.children.forEach(function(l,u){if(e.has(l.ID)){const f=e.get(l.ID);if(f.curves.x!==void 0||f.curves.y!==void 0||f.curves.z!==void 0){if(s[u]===void 0){const h=V.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(h!==void 0){const d=C.Objects.Model[h.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:d.attrName?c.PropertyBinding.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};re.traverse(function(g){g.ID===d.id&&(p.transform=g.matrix,g.userData.transformData&&(p.eulerOrder=g.userData.transformData.eulerOrder))}),p.transform||(p.transform=new c.Matrix4),"PreRotation"in d&&(p.preRotation=d.PreRotation.value),"PostRotation"in d&&(p.postRotation=d.PostRotation.value),s[u]=p}}s[u]&&(s[u][f.attr]=f)}else if(f.curves.morph!==void 0){if(s[u]===void 0){const h=V.get(l.ID).parents.filter(function(y){return y.relationship!==void 0})[0].ID,d=V.get(h).parents[0].ID,p=V.get(d).parents[0].ID,g=V.get(p).parents[0].ID,m=C.Objects.Model[g],x={modelName:m.attrName?c.PropertyBinding.sanitizeNodeName(m.attrName):"",morphName:C.Objects.Deformer[h].attrName};s[u]=x}s[u][f.attr]=f}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=C.Objects.AnimationStack,n={};for(const i in t){const s=V.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const r=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:r}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new c.AnimationClip(e.name,-1,t)}generateTracks(e){const t=[];let n=new c.Vector3,i=new c.Quaternion,s=new c.Vector3;if(e.transform&&e.transform.decompose(n,i,s),n=n.toArray(),i=new c.Euler().setFromQuaternion(i,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),r=this.getKeyframeTrackValues(s,t,n);return new c.VectorKeyframeTrack(e+"."+i,s,r)}generateRotationTrack(e,t,n,i,s,r){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(c.MathUtils.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(c.MathUtils.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(c.MathUtils.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,n);i!==void 0&&(i=i.map(c.MathUtils.degToRad),i.push(r),i=new c.Euler().fromArray(i),i=new c.Quaternion().setFromEuler(i)),s!==void 0&&(s=s.map(c.MathUtils.degToRad),s.push(r),s=new c.Euler().fromArray(s),s=new c.Quaternion().setFromEuler(s).invert());const u=new c.Quaternion,f=new c.Euler,h=[];for(let d=0;d<l.length;d+=3)f.set(l[d],l[d+1],l[d+2],r),u.setFromEuler(f),i!==void 0&&u.premultiply(i),s!==void 0&&u.multiply(s),u.toArray(h,d/3*4);return new c.QuaternionKeyframeTrack(e+".quaternion",o,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=re.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new c.NumberKeyframeTrack(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const r=t[s];r!==i&&(t[n]=r,i=r,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let r=-1,o=-1,l=-1;return e.forEach(function(u){if(t.x&&(r=t.x.times.indexOf(u)),t.y&&(o=t.y.times.indexOf(u)),t.z&&(l=t.z.times.indexOf(u)),r!==-1){const f=t.x.values[r];s.push(f),i[0]=f}else s.push(i[0]);if(o!==-1){const f=t.y.values[o];s.push(f),i[1]=f}else s.push(i[1]);if(l!==-1){const f=t.z.values[l];s.push(f),i[2]=f}else s.push(i[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,s=Math.abs(i);if(s>=180){const r=s/180,o=i/r;let l=n+o;const u=e.times[t-1],h=(e.times[t]-u)/r;let d=u+h;const p=[],g=[];for(;d<e.times[t];)p.push(d),d+=h,g.push(l),l+=o;e.times=bn(e.times,t,p),e.values=bn(e.values,t,g)}}}}class ys{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new _i,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const r=i.match(/^[\s\t]*;/),o=i.match(/^[\s\t]*$/);if(r||o)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),u=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),f=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):u?t.parseNodeProperty(i,u,n[++s]):f?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},r=this.parseNodeAttr(i),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in o?(n==="PoseNode"?o.PoseNode.push(s):o[n].id!==void 0&&(o[n]={},o[n][o[n].id]=o[n]),r.id!==""&&(o[n][r.id]=s)):typeof r.id=="number"?(o[n]={},o[n][r.id]=s):n!=="Properties70"&&(n==="PoseNode"?o[n]=[s]:o[n]=s),typeof r.id=="number"&&(s.id=r.id),r.name!==""&&(s.attrName=r.name),r.type!==""&&(s.attrType=r.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const r=this.getCurrentNode();if(r.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),u=parseInt(l[0]),f=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",s=[u,f],Ps(s,h),r[i]===void 0&&(r[i]=[])}i==="Node"&&(r.id=s),i in r&&Array.isArray(r[i])?r[i].push(s):i!=="a"?r[i]=s:r.a=s,this.setCurrentProp(r,i),i==="a"&&s.slice(-1)!==","&&(r.a=Xt(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Xt(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(f){return f.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],r=i[1],o=i[2],l=i[3];let u=i[4];switch(r){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":u=parseFloat(u);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":u=Xt(u);break}this.getPrevNode()[s]={type:r,type2:o,flag:l,value:u},this.setCurrentProp(this.getPrevNode(),s)}}class vs{parse(e){const t=new Mn(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new _i;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const r=e.getUint8(),o=e.getString(r);if(i===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const u=l.length>0?l[0]:"",f=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,n,d)}return n.propertyList=l,typeof u=="number"&&(n.id=u),f!==""&&(n.attrName=f),h!==""&&(n.attrType=h),o!==""&&(n.name=o),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,r){r!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const r=n.propertyList[2],o=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:r,flag:o,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),r=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}typeof ls>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const o=rt(new Uint8Array(e.getArrayBuffer(r))),l=new Mn(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Mn{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let i=0;i<e;i++)t[i]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),c.LoaderUtils.decodeText(new Uint8Array(t))}}class _i{add(e,t){this[e]=t}}function Ts(a){const e="Kaydara FBX Binary  \0";return a.byteLength>=e.length&&e===Ei(a,0,e.length)}function ws(a){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=a[i-1];return a=a.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Ln(a){const e=/FBXVersion: (\d+)/,t=a.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Fs(a){return a/46186158e3}const _s=[];function xt(a,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=a;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,r=s+n.dataSize;return Ss(_s,n.buffer,s,r)}const Ut=new c.Euler,Xe=new c.Vector3;function Pi(a){const e=new c.Matrix4,t=new c.Matrix4,n=new c.Matrix4,i=new c.Matrix4,s=new c.Matrix4,r=new c.Matrix4,o=new c.Matrix4,l=new c.Matrix4,u=new c.Matrix4,f=new c.Matrix4,h=new c.Matrix4,d=new c.Matrix4,p=a.inheritType?a.inheritType:0;if(a.translation&&e.setPosition(Xe.fromArray(a.translation)),a.preRotation){const E=a.preRotation.map(c.MathUtils.degToRad);E.push(a.eulerOrder),t.makeRotationFromEuler(Ut.fromArray(E))}if(a.rotation){const E=a.rotation.map(c.MathUtils.degToRad);E.push(a.eulerOrder),n.makeRotationFromEuler(Ut.fromArray(E))}if(a.postRotation){const E=a.postRotation.map(c.MathUtils.degToRad);E.push(a.eulerOrder),i.makeRotationFromEuler(Ut.fromArray(E)),i.invert()}a.scale&&s.scale(Xe.fromArray(a.scale)),a.scalingOffset&&o.setPosition(Xe.fromArray(a.scalingOffset)),a.scalingPivot&&r.setPosition(Xe.fromArray(a.scalingPivot)),a.rotationOffset&&l.setPosition(Xe.fromArray(a.rotationOffset)),a.rotationPivot&&u.setPosition(Xe.fromArray(a.rotationPivot)),a.parentMatrixWorld&&(h.copy(a.parentMatrix),f.copy(a.parentMatrixWorld));const g=t.clone().multiply(n).multiply(i),m=new c.Matrix4;m.extractRotation(f);const x=new c.Matrix4;x.copyPosition(f);const y=x.clone().invert().multiply(f),v=m.clone().invert().multiply(y),A=s,F=new c.Matrix4;if(p===0)F.copy(m).multiply(g).multiply(v).multiply(A);else if(p===1)F.copy(m).multiply(v).multiply(g).multiply(A);else{const Q=new c.Matrix4().scale(new c.Vector3().setFromMatrixScale(h)).clone().invert(),R=v.clone().multiply(Q);F.copy(m).multiply(g).multiply(R).multiply(A)}const w=u.clone().invert(),S=r.clone().invert();let P=e.clone().multiply(l).multiply(u).multiply(t).multiply(n).multiply(i).multiply(w).multiply(o).multiply(r).multiply(s).multiply(S);const _=new c.Matrix4().copyPosition(P),O=f.clone().multiply(_);return d.copyPosition(O),P=d.clone().multiply(F),P.premultiply(f.invert()),P}function Si(a){a=a||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return a===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[a]}function Xt(a){return a.split(",").map(function(t){return parseFloat(t)})}function Ei(a,e,t){return e===void 0&&(e=0),t===void 0&&(t=a.byteLength),c.LoaderUtils.decodeText(new Uint8Array(a,e,t))}function Ps(a,e){for(let t=0,n=a.length,i=e.length;t<i;t++,n++)a[n]=e[t]}function Ss(a,e,t,n){for(let i=t,s=0;i<n;i++,s++)a[s]=e[i];return a}function bn(a,e,t){return a.slice(0,e).concat(t).concat(a.slice(e))}class Mi extends c.Loader{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bs(t)}),this.register(function(t){return new Us(t)}),this.register(function(t){return new Xs(t)}),this.register(function(t){return new Is(t)}),this.register(function(t){return new Rs(t)}),this.register(function(t){return new Ns(t)}),this.register(function(t){return new Cs(t)}),this.register(function(t){return new Os(t)}),this.register(function(t){return new Ms(t)}),this.register(function(t){return new Ds(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=c.LoaderUtils.extractUrlBase(e),this.manager.itemStart(e);const o=function(u){i?i(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new c.FileLoader(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,r,function(f){t(f),s.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=e;else if(c.LoaderUtils.decodeText(new Uint8Array(e,0,4))===Li){try{r[D.KHR_BINARY_GLTF]=new ks(e)}catch(h){i&&i(h);return}s=r[D.KHR_BINARY_GLTF].content}else s=c.LoaderUtils.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new qs(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const h=this.pluginCallbacks[f](u);o[h.name]=h,r[h.name]=!0}if(l.extensionsUsed)for(let f=0;f<l.extensionsUsed.length;++f){const h=l.extensionsUsed[f],d=l.extensionsRequired||[];switch(h){case D.KHR_MATERIALS_UNLIT:r[h]=new Ls;break;case D.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[h]=new Gs;break;case D.KHR_DRACO_MESH_COMPRESSION:r[h]=new Bs(l,this.dracoLoader);break;case D.KHR_TEXTURE_TRANSFORM:r[h]=new Qs;break;case D.KHR_MESH_QUANTIZATION:r[h]=new Ys;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(r),u.setPlugins(o),u.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Es(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const D={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Ms{constructor(e){this.parser=e,this.name=D.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const f=new c.Color(16777215);l.color!==void 0&&f.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new c.DirectionalLight(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new c.PointLight(f),u.distance=h;break;case"spot":u=new c.SpotLight(f),u.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(u),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Ls{constructor(){this.name=D.KHR_MATERIALS_UNLIT}getMaterialType(){return c.MeshBasicMaterial}extendParams(e,t,n){const i=[];e.color=new c.Color(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}}class bs{constructor(e){this.parser=e,this.name=D.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c.MeshPhysicalMaterial}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new c.Vector2(o,o)}return Promise.all(s)}}class Is{constructor(e){this.parser=e,this.name=D.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c.MeshPhysicalMaterial}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new c.Color(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Rs{constructor(e){this.parser=e,this.name=D.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c.MeshPhysicalMaterial}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Ns{constructor(e){this.parser=e,this.name=D.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c.MeshPhysicalMaterial}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new c.Color(o[0],o[1],o[2]),Promise.all(s)}}class Cs{constructor(e){this.parser=e,this.name=D.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c.MeshPhysicalMaterial}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Os{constructor(e){this.parser=e,this.name=D.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:c.MeshPhysicalMaterial}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new c.Color(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture).then(function(l){l.encoding=c.sRGBEncoding})),Promise.all(s)}}class Us{constructor(e){this.parser=e,this.name=D.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=n.images[s.source],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r,o)}}class Xs{constructor(e){this.parser=e,this.name=D.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const u=n.options.manager.getHandler(o.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ds{constructor(e){this.name=D.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,r.ready]).then(function(o){const l=i.byteOffset||0,u=i.byteLength||0,f=i.count,h=i.byteStride,d=new ArrayBuffer(f*h),p=new Uint8Array(o[0],l,u);return r.decodeGltfBuffer(new Uint8Array(d),f,h,p,i.mode,i.filter),d})}else return null}}const Li="glTF",Je=12,In={JSON:1313821514,BIN:5130562};class ks{constructor(e){this.name=D.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Je);if(this.header={magic:c.LoaderUtils.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Li)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Je,i=new DataView(e,Je);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===In.JSON){const l=new Uint8Array(e,Je+s,r);this.content=c.LoaderUtils.decodeText(l)}else if(o===In.BIN){const l=Je+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Bs{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=D.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},u={};for(const f in r){const h=Vt[f]||f.toLowerCase();o[h]=r[f]}for(const f in e.attributes){const h=Vt[f]||f.toLowerCase();if(r[f]!==void 0){const d=n.accessors[e.attributes[f]],p=ot[d.componentType];u[h]=p,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(h){i.decodeDracoFile(f,function(d){for(const p in d.attributes){const g=d.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(d)},o,u)})})}}class Qs{constructor(){this.name=D.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zt extends c.MeshStandardMaterial{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new c.Color().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const u in o)l.uniforms[u]=o[u];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Gs{constructor(){this.name=D.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return zt}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new c.Color(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new c.Color(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new c.Color(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r))}return Promise.all(s)}createMaterial(e){const t=new zt(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=c.TangentSpaceNormalMap,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class Ys{constructor(){this.name=D.KHR_MESH_QUANTIZATION}}class Ce extends c.Interpolant{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}}Ce.prototype.beforeStart_=Ce.prototype.copySampleValue_;Ce.prototype.afterEnd_=Ce.prototype.copySampleValue_;Ce.prototype.interpolate_=function(a,e,t,n){const i=this.resultBuffer,s=this.sampleValues,r=this.valueSize,o=r*2,l=r*3,u=n-e,f=(t-e)/u,h=f*f,d=h*f,p=a*l,g=p-l,m=-2*d+3*h,x=d-h,y=1-m,v=x-h+f;for(let A=0;A!==r;A++){const F=s[g+A+r],w=s[g+A+o]*u,S=s[p+A+r],P=s[p+A]*u;i[A]=y*F+v*w+m*S+x*P}return i};const Hs=new c.Quaternion;class js extends Ce{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Hs.fromArray(s).normalize().toArray(s),s}}const Ae={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ot={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rn={9728:c.NearestFilter,9729:c.LinearFilter,9984:c.NearestMipmapNearestFilter,9985:c.LinearMipmapNearestFilter,9986:c.NearestMipmapLinearFilter,9987:c.LinearMipmapLinearFilter},Nn={33071:c.ClampToEdgeWrapping,33648:c.MirroredRepeatWrapping,10497:c.RepeatWrapping},Cn={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vt={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Se={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zs={CUBICSPLINE:void 0,LINEAR:c.InterpolateLinear,STEP:c.InterpolateDiscrete},Dt={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Vs(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new c.MeshStandardMaterial({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:c.FrontSide})),a.DefaultMaterial}function $e(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ne(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ws(a,e,t){let n=!1,i=!1;for(let o=0,l=e.length;o<l;o++){const u=e[o];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(a);const s=[],r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;s.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;r.push(f)}}return Promise.all([Promise.all(s),Promise.all(r)]).then(function(o){const l=o[0],u=o[1];return n&&(a.morphAttributes.position=l),i&&(a.morphAttributes.normal=u),a.morphTargetsRelative=!0,a})}function Ks(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zs(a){const e=a.extensions&&a.extensions[D.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+On(e.attributes):t=a.indices+":"+On(a.attributes)+":"+a.mode,t}function On(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Wt(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class qs{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Es,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap<"u"&&/Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!1?this.textureLoader=new c.ImageBitmapLoader(this.options.manager):this.textureLoader=new c.TextureLoader(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new c.FileLoader(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};$e(s,o,i),Ne(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[u,f]of r.children.entries())s(f,o.children[u])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[D.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(c.LoaderUtils.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Cn[i.type],u=ot[i.componentType],f=u.BYTES_PER_ELEMENT,h=f*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,x;if(p&&p!==h){const y=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+y+":"+i.count;let A=t.cache.get(v);A||(m=new u(o,y*p,i.count*p/f),A=new c.InterleavedBuffer(m,p/f),t.cache.add(v,A)),x=new c.InterleavedBufferAttribute(A,l,d%p/f,g)}else o===null?m=new u(i.count*l):m=new u(o,d,i.count*l),x=new c.BufferAttribute(m,l,g);if(i.sparse!==void 0){const y=Cn.SCALAR,v=ot[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,F=i.sparse.values.byteOffset||0,w=new v(r[1],A,i.sparse.count*y),S=new u(r[2],F,i.sparse.count*l);o!==null&&(x=new c.BufferAttribute(x.array.slice(),x.itemSize,x.normalized));for(let P=0,_=w.length;P<_;P++){const O=w[P];if(x.setX(O,S[P*l]),l>=2&&x.setY(O,S[P*l+1]),l>=3&&x.setZ(O,S[P*l+2]),l>=4&&x.setW(O,S[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source];let r=this.textureLoader;if(s.uri){const o=n.manager.getHandler(s.uri);o!==null&&(r=o)}return this.loadTextureImage(e,s,r)}loadTextureImage(e,t,n){const i=this,s=this.json,r=this.options,o=s.textures[e],l=(t.uri||t.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=self.URL||self.webkitURL;let f=t.uri||"",h=!1;if(t.bufferView!==void 0)f=i.getDependency("bufferView",t.bufferView).then(function(p){h=!0;const g=new Blob([p],{type:t.mimeType});return f=u.createObjectURL(g),f});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(f).then(function(p){return new Promise(function(g,m){let x=g;n.isImageBitmapLoader===!0&&(x=function(y){const v=new c.Texture(y);v.needsUpdate=!0,g(v)}),n.load(c.LoaderUtils.resolveURL(p,r.path),x,void 0,m)})}).then(function(p){h===!0&&u.revokeObjectURL(f),p.flipY=!1,o.name&&(p.name=o.name);const m=(s.samplers||{})[o.sampler]||{};return p.magFilter=Rn[m.magFilter]||c.LinearFilter,p.minFilter=Rn[m.minFilter]||c.LinearMipmapLinearFilter,p.wrapS=Nn[m.wrapS]||c.RepeatWrapping,p.wrapT=Nn[m.wrapT]||c.RepeatWrapping,i.associations.set(p,{textures:e}),p}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",f),null});return this.textureCache[l]=d,d}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[D.KHR_TEXTURE_TRANSFORM]){const r=n.extensions!==void 0?n.extensions[D.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const o=i.associations.get(s);s=i.extensions[D.KHR_TEXTURE_TRANSFORM].extendTexture(s,r),i.associations.set(s,o)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new c.PointsMaterial,c.Material.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new c.LineBasicMaterial,c.Material.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return c.MeshStandardMaterial}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},u=[];if(l[D.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=i[D.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else if(l[D.KHR_MATERIALS_UNLIT]){const h=i[D.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),u.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new c.Color(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}h.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",h.baseColorTexture)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=c.DoubleSide);const f=s.alphaMode||Dt.OPAQUE;if(f===Dt.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,o.alphaWrite=!1,f===Dt.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==c.MeshBasicMaterial&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new c.Vector2(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&r!==c.MeshBasicMaterial&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==c.MeshBasicMaterial&&(o.emissive=new c.Color().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==c.MeshBasicMaterial&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture)),Promise.all(u).then(function(){let h;return r===zt?h=i[D.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new r(o),s.name&&(h.name=s.name),h.map&&(h.map.encoding=c.sRGBEncoding),h.emissiveMap&&(h.emissiveMap.encoding=c.sRGBEncoding),Ne(h,s),t.associations.set(h,{materials:e}),s.extensions&&$e(i,h,s),h})}createUniqueName(e){const t=c.PropertyBinding.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[D.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Un(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o],f=Zs(u),h=i[f];if(h)r.push(h.promise);else{let d;u.extensions&&u.extensions[D.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=Un(new c.BufferGeometry,u,t),i[f]={primitive:u,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,u=r.length;l<u;l++){const f=r[l].material===void 0?Vs(this.cache):this.getDependency("material",r[l].material);o.push(f)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const u=l.slice(0,l.length-1),f=l[l.length-1],h=[];for(let p=0,g=f.length;p<g;p++){const m=f[p],x=r[p];let y;const v=u[p];if(x.mode===Ae.TRIANGLES||x.mode===Ae.TRIANGLE_STRIP||x.mode===Ae.TRIANGLE_FAN||x.mode===void 0)y=s.isSkinnedMesh===!0?new c.SkinnedMesh(m,v):new c.Mesh(m,v),y.isSkinnedMesh===!0&&!y.geometry.attributes.skinWeight.normalized&&y.normalizeSkinWeights(),x.mode===Ae.TRIANGLE_STRIP?y.geometry=Xn(y.geometry,c.TriangleStripDrawMode):x.mode===Ae.TRIANGLE_FAN&&(y.geometry=Xn(y.geometry,c.TriangleFanDrawMode));else if(x.mode===Ae.LINES)y=new c.LineSegments(m,v);else if(x.mode===Ae.LINE_STRIP)y=new c.Line(m,v);else if(x.mode===Ae.LINE_LOOP)y=new c.LineLoop(m,v);else if(x.mode===Ae.POINTS)y=new c.Points(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(y.geometry.morphAttributes).length>0&&Ks(y,s),y.name=t.createUniqueName(s.name||"mesh_"+e),Ne(y,s),x.extensions&&$e(i,y,x),t.assignFinalMaterial(y),h.push(y)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new c.Group;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new c.PerspectiveCamera(c.MathUtils.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new c.OrthographicCamera(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ne(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let u=0,f=n.channels.length;u<f;u++){const h=n.channels[u],d=n.samplers[h.sampler],p=h.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[d.input]:d.input,x=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",x)),o.push(d),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(u){const f=u[0],h=u[1],d=u[2],p=u[3],g=u[4],m=[];for(let y=0,v=f.length;y<v;y++){const A=f[y],F=h[y],w=d[y],S=p[y],P=g[y];if(A===void 0)continue;A.updateMatrix(),A.matrixAutoUpdate=!0;let _;switch(Se[P.path]){case Se.weights:_=c.NumberKeyframeTrack;break;case Se.rotation:_=c.QuaternionKeyframeTrack;break;case Se.position:case Se.scale:default:_=c.VectorKeyframeTrack;break}const O=A.name?A.name:A.uuid,E=S.interpolation!==void 0?zs[S.interpolation]:c.InterpolateLinear,Q=[];Se[P.path]===Se.weights?A.traverse(function(L){L.morphTargetInfluences&&Q.push(L.name?L.name:L.uuid)}):Q.push(O);let R=w.array;if(w.normalized){const L=Wt(R.constructor),b=new Float32Array(R.length);for(let I=0,U=R.length;I<U;I++)b[I]=R[I]*L;R=b}for(let L=0,b=Q.length;L<b;L++){const I=new _(Q[L]+"."+Se[P.path],F.array,R,E);S.interpolation==="CUBICSPLINE"&&(I.createInterpolant=function(N){const G=this instanceof c.QuaternionKeyframeTrack?js:Ce;return new G(this.times,this.values,this.getValueSize()/3,N)},I.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(I)}}const x=n.name?n.name:"animation_"+e;return new c.AnimationClip(x,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,u=i.weights.length;l<u;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new c.Bone:o.length>1?l=new c.Group:o.length===1?l=o[0]:l=new c.Object3D,l!==o[0])for(let u=0,f=o.length;u<f;u++)l.add(o[u]);if(s.name&&(l.userData.name=s.name,l.name=r),Ne(l,s),s.extensions&&$e(n,l,s),s.matrix!==void 0){const u=new c.Matrix4;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new c.Group;i.name&&(r.name=s.createUniqueName(i.name)),Ne(r,i),i.extensions&&$e(n,r,i);const o=i.nodes||[],l=[];for(let u=0,f=o.length;u<f;u++)l.push(bi(o[u],r,t,s));return Promise.all(l).then(function(){const u=f=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof c.Material||d instanceof c.Texture)&&h.set(d,p);return f.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=u(r),r})}}function bi(a,e,t,n){const i=t.nodes[a];return n.getDependency("node",a).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(o){r=o;const l=[];for(let u=0,f=r.joints.length;u<f;u++)l.push(n.getDependency("node",r.joints[u]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const u=[],f=[];for(let h=0,d=o.length;h<d;h++){const p=o[h];if(p){u.push(p);const g=new c.Matrix4;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,h*16),f.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[h])}l.bind(new c.Skeleton(u,f),l.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const o=i.children;for(let l=0,u=o.length;l<u;l++){const f=o[l];r.push(bi(f,s,t,n))}}return Promise.all(r)})}function Js(a,e,t){const n=e.attributes,i=new c.Box3;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,u=o.max;if(l!==void 0&&u!==void 0){if(i.set(new c.Vector3(l[0],l[1],l[2]),new c.Vector3(u[0],u[1],u[2])),o.normalized){const f=Wt(ot[o.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new c.Vector3,l=new c.Vector3;for(let u=0,f=s.length;u<f;u++){const h=s[u];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const m=Wt(ot[d.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new c.Sphere;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function Un(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=Vt[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return Ne(a,e),Js(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ws(a,e.targets,t):a})}function Xn(a,e){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===c.TriangleFanDrawMode)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s}var Lt={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class ht{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const $s=new c.OrthographicCamera(-1,1,1,-1,0,1),un=new c.BufferGeometry;un.setAttribute("position",new c.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));un.setAttribute("uv",new c.Float32BufferAttribute([0,2,0,0,2,0],2));class Ii{constructor(e){this._mesh=new c.Mesh(un,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$s)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Kt extends ht{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof c.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=c.UniformsUtils.clone(e.uniforms),this.material=new c.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Dn extends ht{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class er extends ht{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class tr{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:c.LinearFilter,magFilter:c.LinearFilter,format:c.RGBAFormat},i=e.getSize(new c.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new c.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Lt===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Kt===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Kt(Lt),this.clock=new c.Clock}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dn!==void 0&&(r instanceof Dn?n=!0:r instanceof er&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new c.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new c.OrthographicCamera(-1,1,1,-1,0,1);const Ri=new c.BufferGeometry;Ri.setAttribute("position",new c.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3));Ri.setAttribute("uv",new c.Float32BufferAttribute([0,2,0,0,2,0],2));class Ee extends ht{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new c.Color(1,1,1),this.hiddenEdgeColor=new c.Color(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this.resolution=e!==void 0?new c.Vector2(e.x,e.y):new c.Vector2(256,256);const s={minFilter:c.LinearFilter,magFilter:c.LinearFilter,format:c.RGBAFormat},r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new c.WebGLRenderTarget(this.resolution.x,this.resolution.y,s),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new c.MeshDepthMaterial,this.depthMaterial.side=c.DoubleSide,this.depthMaterial.depthPacking=c.RGBADepthPacking,this.depthMaterial.blending=c.NoBlending,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=c.DoubleSide,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new c.WebGLRenderTarget(this.resolution.x,this.resolution.y,s),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new c.WebGLRenderTarget(r,o,s),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new c.WebGLRenderTarget(r,o,s),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new c.WebGLRenderTarget(Math.round(r/2),Math.round(o/2),s),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new c.WebGLRenderTarget(r,o,s),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new c.WebGLRenderTarget(Math.round(r/2),Math.round(o/2),s),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const l=4,u=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(l),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(u),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=u,this.overlayMaterial=this.getOverlayMaterial(),Lt===void 0&&console.error("THREE.OutlinePass relies on CopyShader");const f=Lt;this.copyUniforms=c.UniformsUtils.clone(f.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new c.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:c.NoBlending,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new c.Color,this.oldClearAlpha=1,this.fsQuad=new Ii(null),this.tempPulseColor1=new c.Color,this.tempPulseColor2=new c.Color,this.textureMatrix=new c.Matrix4;function h(d,p){const g=p.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,g+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;function n(i){i.isMesh&&(e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e))}for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(n)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=[];function i(r){r.isMesh&&n.push(r)}for(let r=0;r<this.selectedObjects.length;r++)this.selectedObjects[r].traverse(i);function s(r){if(r.isMesh||r.isSprite){let o=!1;for(let l=0;l<n.length;l++)if(n[l].id===r.id){o=!0;break}if(o===!1){const l=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,l)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(s)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,s){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,s&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.changeVisibilityOfSelectedObjects(!1);const o=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this.renderScene.background=o,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ee.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ee.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ee.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ee.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,s&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new c.ShaderMaterial({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new c.Vector2(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;
					vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );
					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new c.ShaderMaterial({uniforms:{maskTexture:{value:null},texSize:{value:new c.Vector2(.5,.5)},visibleEdgeColor:{value:new c.Vector3(1,1,1)},hiddenEdgeColor:{value:new c.Vector3(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new c.ShaderMaterial({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new c.Vector2(.5,.5)},direction:{value:new c.Vector2(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float weightSum = gaussianPdf(0.0, kernelRadius);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float w = gaussianPdf(uvOffset.x, kernelRadius);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new c.ShaderMaterial({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:c.AdditiveBlending,depthTest:!1,depthWrite:!1,transparent:!0})}}Ee.BlurDirectionX=new c.Vector2(1,0);Ee.BlurDirectionY=new c.Vector2(0,1);class nr{constructor(e,t){ne(this,"scene");ne(this,"camera");ne(this,"cameraPosition");ne(this,"renderer");ne(this,"dom");ne(this,"controls");ne(this,"axesHelper");ne(this,"cssObject");ne(this,"trackBallControls");ne(this,"cssRender");ne(this,"cssScene");ne(this,"composer");ne(this,"outlinePass");ne(this,"tag");this.cameraPosition={x:e.x,y:e.y,z:e.z},this.dom=t}initScene(){this.scene=new c.Scene,this.camera=new c.PerspectiveCamera(30,window.innerWidth/window.innerHeight,1,5e5),this.camera.position.set(this.cameraPosition.x,this.cameraPosition.y,this.cameraPosition.z),this.scene.add(this.camera),this.renderer=new c.WebGLRenderer({alpha:!0,antialias:!0}),this.renderer.setSize(this.dom.offsetWidth+20,this.dom.offsetHeight),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.dom.appendChild(this.renderer.domElement),this.renderer.render(this.scene,this.camera),this.composer=new tr(this.renderer),this.scene.background=new c.Color(12575709),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}render(){const e=()=>{this.renderer.render(this.scene,this.camera),this.composer.render(),requestAnimationFrame(e)};e()}initLight(){const e=new c.AmbientLight(16777215,.6);this.scene.add(e);const t=new c.DirectionalLight(16777215,1);t.position.set(0,0,-800),this.scene.add(t)}initAxesHelper(e){const t=new c.AxesHelper(e);this.scene.add(t)}skybox(){const e=`varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,t=`
            uniform vec3 topColor;
            uniform vec3 bottomColor;
            uniform float offset;
            uniform float exponent;
            varying vec3 vWorldPosition;
            void main() {
                float h = normalize( vWorldPosition + offset ).y;
                gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
            }
        `;this.scene.add(new c.AmbientLight(15790320,.5));const n=new c.SpotLight(16777215,.5);n.position.set(0,1500,200),n.angle=Math.PI*.2,n.decay=0,n.castShadow=!0,n.shadow.camera.near=200,n.shadow.camera.far=2e3,n.shadow.bias=-222e-6,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,this.scene.add(n);const i=new c.PlaneGeometry(2e4,2e4);i.rotateX(-Math.PI/2);const s=new c.MeshBasicMaterial({color:15788756,opacity:.8,side:c.DoubleSide}),r=new c.Mesh(i,s);r.receiveShadow=!0,this.scene.add(r);const o={topColor:{value:new c.Color(30719)},bottomColor:{value:new c.Color(16777215)},offset:{value:33},exponent:{value:.6}},l=new c.HemisphereLight(16777215,16777215,2);l.color.setHSL(.6,1,.6),l.groundColor.setHSL(.095,1,.75),l.position.set(0,50,0),o.topColor.value.copy(l.color);const u=new c.SphereGeometry(2e3,32,15),f=new c.ShaderMaterial({uniforms:o,vertexShader:e,fragmentShader:t,side:c.BackSide});new c.Mesh(u,f)}css3dRender(e){this.cssScene=new c.Scene;const t=new ye(e[0]),n=new ye(e[1]),i=new ye(e[2]),s=new ye(e[3]),r=new ye(e[4]),o=new ye(e[5]);t.position.set(-250,200,115),n.position.set(-380,0,30),i.position.set(-220,0,30),s.position.set(-60,0,30),r.position.set(100,0,30),o.position.set(245,0,-35),t.rotation.set(-Math.PI/2,0,0),n.rotation.set(-Math.PI/2,0,0),i.rotation.set(-Math.PI/2,0,0),s.rotation.set(-Math.PI/2,0,0),r.rotation.set(-Math.PI/2,0,0),o.rotation.set(-Math.PI/2,0,0),t.scale.set(1,1,1),n.scale.set(1,1,1),i.scale.set(1,1,1),this.cssScene.add(t),this.cssScene.add(n),this.cssScene.add(i),this.cssScene.add(s),this.cssScene.add(r),this.cssScene.add(o),this.cssRender=new kn,this.cssRender.setSize(this.dom.offsetWidth,this.dom.offsetHeight),this.cssRender.domElement.style.position="absolute",this.cssRender.domElement.style.top="0",this.dom.appendChild(this.cssRender.domElement),this.trackBallControls=new Bn(this.camera,this.cssRender.domElement);const l=()=>{requestAnimationFrame(l),this.cssRender.render(this.cssScene,this.camera),this.renderer.render(this.scene,this.camera),this.camera.updateMatrixWorld(!0),this.trackBallControls.update(),this.composer.render()};l()}tubeGeo(){class e extends c.Curve{constructor(x=1){super();ne(this,"scale");this.scale=x}getPoint(x,y=new c.Vector3){const v=x,A=0,F=4*x;return y.set(v,A,F).multiplyScalar(this.scale)}}const t=new e(115),n=new c.TubeGeometry(t,50,8,8,!1),i=new c.MeshBasicMaterial({color:6710886,side:c.DoubleSide,clipShadows:!0}),s=new c.Mesh(n,i);s.position.set(0,300,0),this.scene.add(s);const r=new c.Raycaster,o=new c.Vector2,l=new c.Vector2,u=new c.Vector2,f=new Qn(this.camera,this.renderer.domElement);f.addEventListener("dragging-changed",g=>{this.controls.enabled=!g.value}),this.scene.add(f);const h=g=>{o.x=g.clientX/window.innerWidth*2-1,o.y=-(g.clientY/window.innerHeight)*2+1,r.setFromCamera(o,this.camera);const m=r.intersectObjects([s]);if(m.length>0){const x=m[0].object;x!==f.object&&(this.cssRender.domElement.style.zIndex="-2",f.attach(x))}},d=g=>{l.x=g.clientX,l.y=g.clientY,u.distanceTo(l)===0&&(this.cssRender.domElement.style.zIndex="1",f.detach())},p=g=>{u.x=g.clientX,u.y=g.clientY};document.addEventListener("pointermove",h),document.addEventListener("pointerup",d),document.addEventListener("pointerdown",p),this.renderer.render(this.scene,this.camera)}async loadGeo(){const e=this;let t;const n=await fn.Loader3DTiles.load({url:"http://47.109.18.246:33301/tileset.json",renderer:e.renderer,options:{dracoDecoderPath:"https://unpkg.com/three@0.137.0/examples/js/libs/draco",basisTranscoderPath:"https://unpkg.com/three@0.137.0/examples/js/libs/basis",debug:!0,pointCloudColoring:fn.PointCloudColoring.RGB}}),{model:i,runtime:s}=n;this.scene.add(i),t=s;const r=new c.Clock;i.position.set(0,100,0),i.rotation.x=Math.PI*3/2;function o(){const l=r.getDelta();t&&t.update(l,e.renderer,e.camera),e.renderer.render(e.scene,e.camera),window.requestAnimationFrame(o)}o()}loadFbxInner(e){new En().load(e,n=>{n.rotation.set(0,Math.PI,0),n.scale.set(100,100,100),this.scene.add(n),document.addEventListener("pointerdown",i=>{const s=new c.Raycaster,r=new c.Vector2;r.x=i.clientX/window.innerWidth*2-1,r.y=-(i.clientY/window.innerHeight)*2+1,s.setFromCamera(r,this.camera);const o=s.intersectObjects(this.scene.children);o.length>0&&(o[0].object,console.log(o,"intersects"))})})}loadFbxTree(e){new En().load(e,n=>{console.log(n,"objects"),n.traverse(i=>{console.log(i,"object")}),this.scene.add(n)})}loadGlb(e,t,n){new Mi().load(e,s=>{const r=s.scene;n&&r.scale.set(...n),t&&r.position.set(...t),r.traverse(o=>{}),this.scene.add(s.scene)})}}class ir extends ht{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new c.Color}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=i}}const sr={uniforms:{tDiffuse:{value:null},resolution:{value:new c.Vector2(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`},rr=(a,e,t)=>{new Mi().load(a,i=>{const s=i.scene;t&&s.scale.set(...t),e&&s.position.set(...e),exports.threeObj.scene.add(i.scene)})},ar=(a,e)=>{const t=new c.Raycaster,n=new c.Vector2;n.x=a.clientX/window.innerWidth*2-1,n.y=-(a.clientY/window.innerHeight)*2+1,t.setFromCamera(n,exports.threeObj.camera);const i=t.intersectObjects(exports.threeObj.scene.children);if(i.length>0){const s=i[0].object;s&&(s.name==="水泵"||s.name==="水泵_1"||s.name==="水泵_2"||s.name==="水泵_3")&&(e(s),or(i))}},or=a=>{const e=new ir(exports.threeObj.scene,exports.threeObj.camera);exports.threeObj.outlinePass=new Ee(new c.Vector2(window.innerWidth,window.innerHeight),exports.threeObj.scene,exports.threeObj.camera);const t=new Kt(sr);t.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),exports.threeObj.outlinePass.renderToScreen=!0,exports.threeObj.outlinePass.edgeStrength=5,exports.threeObj.outlinePass.edgeGlow=1,exports.threeObj.outlinePass.edgeThickness=2,exports.threeObj.outlinePass.pulsePeriod=0,exports.threeObj.outlinePass.usePatternTexture=!1,exports.threeObj.outlinePass.visibleEdgeColor.set("#ffffff"),exports.threeObj.outlinePass.hiddenEdgeColor.set("#190a05"),exports.threeObj.composer.addPass(e),exports.threeObj.composer.addPass(t),exports.threeObj.composer.addPass(exports.threeObj.outlinePass),exports.threeObj.outlinePass.selectedObjects=[a[0].object]},lr=a=>{a.forEach(e=>{const t=new c.DirectionalLight(e.color,e.intensity);t.position.set(e.position.x,e.position.y,e.position.z),exports.threeObj.scene.add(t)})},cr=()=>{const a=new c.AmbientLight(16777215,.6);exports.threeObj.scene.add(a)},ur=(a,e,t)=>{exports.threeObj.cssScene=new c.Scene,exports.threeObj.tag=new ye(a),exports.threeObj.tag.position.set(...e),exports.threeObj.tag.rotation.set(...t),exports.threeObj.tag.scale.set(1,1,1),exports.threeObj.cssScene.add(exports.threeObj.tag),exports.threeObj.cssRender=new kn,exports.threeObj.cssRender.setSize(exports.threeObj.dom.offsetWidth,exports.threeObj.dom.offsetHeight),exports.threeObj.cssRender.domElement.style.position="absolute",exports.threeObj.cssRender.domElement.style.top="0",exports.threeObj.dom.appendChild(exports.threeObj.cssRender.domElement),exports.threeObj.trackBallControls=new Bn(exports.threeObj.camera,exports.threeObj.cssRender.domElement);const n=()=>{requestAnimationFrame(n),exports.threeObj.cssRender.render(exports.threeObj.cssScene,exports.threeObj.camera),exports.threeObj.renderer.render(exports.threeObj.scene,exports.threeObj.camera),exports.threeObj.camera.updateMatrixWorld(!0),exports.threeObj.trackBallControls.update(),exports.threeObj.composer.render()};n()};exports.threeObj=void 0;const fr=(a,e)=>{exports.threeObj=new nr(a,e),exports.threeObj.initScene()};exports.ambientLight=cr;exports.checkIntersection=ar;exports.directionArrLight=lr;exports.initThree=fr;exports.loadGlb=rr;exports.tagRender=ur;
//# sourceMappingURL=index.cjs.js.map
