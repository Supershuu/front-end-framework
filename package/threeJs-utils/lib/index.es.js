var Ys = Object.defineProperty;
var Hs = (r, e, t) => e in r ? Ys(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var le = (r, e, t) => (Hs(r, typeof e != "symbol" ? e + "" : e, t), t);
import { Vector3 as E, Quaternion as oe, Object3D as ze, Matrix4 as G, EventDispatcher as zs, MOUSE as un, Vector2 as H, Raycaster as Zt, Euler as st, MeshBasicMaterial as Re, LineBasicMaterial as Dn, CylinderGeometry as he, BoxGeometry as ce, BufferGeometry as Ne, Float32BufferAttribute as Ae, Mesh as S, OctahedronGeometry as kt, Line as Ee, SphereGeometry as Ri, TorusGeometry as At, PlaneGeometry as Ni, DoubleSide as at, Vector4 as on, Curve as Ci, Loader as Oi, LoaderUtils as Le, FileLoader as kn, TextureLoader as Ui, RepeatWrapping as Et, ClampToEdgeWrapping as wn, Texture as Kt, MeshPhongMaterial as fn, MeshLambertMaterial as Gs, Color as j, sRGBEncoding as qe, EquirectangularReflectionMapping as js, Group as Pt, Bone as Fn, PropertyBinding as Lt, OrthographicCamera as ln, PerspectiveCamera as Bn, PointLight as _n, MathUtils as Fe, SpotLight as Qn, DirectionalLight as cn, SkinnedMesh as Xi, Skeleton as Di, AmbientLight as qt, Uint16BufferAttribute as Vs, Matrix3 as Ws, AnimationClip as ki, VectorKeyframeTrack as Bi, QuaternionKeyframeTrack as Pn, NumberKeyframeTrack as Qi, MeshPhysicalMaterial as ct, TangentSpaceNormalMap as Zs, ImageBitmapLoader as Ks, InterleavedBuffer as qs, InterleavedBufferAttribute as Js, BufferAttribute as ii, LinearFilter as rt, LinearMipmapLinearFilter as Yi, PointsMaterial as $s, Material as hn, MeshStandardMaterial as Yn, LineSegments as ea, LineLoop as ta, Points as na, InterpolateLinear as Hi, TriangleFanDrawMode as zi, Interpolant as ia, NearestFilter as sa, NearestMipmapNearestFilter as aa, LinearMipmapNearestFilter as ra, NearestMipmapLinearFilter as oa, MirroredRepeatWrapping as la, InterpolateDiscrete as ca, FrontSide as ua, TriangleStripDrawMode as fa, Box3 as ha, Sphere as da, ShaderMaterial as Ye, UniformsUtils as Gi, WebGLRenderTarget as Qe, Clock as ji, RGBAFormat as Vi, MeshDepthMaterial as pa, RGBADepthPacking as ma, NoBlending as si, AdditiveBlending as ga, Scene as Sn, WebGLRenderer as xa, AxesHelper as Aa, HemisphereLight as ya, BackSide as va, TubeGeometry as Ta } from "three";
import { Loader3DTiles as wa, PointCloudColoring as Fa } from "three-loader-3dtiles";
/*!
 * @front-end-framework/threejs-utils 1.0.0
 * Copyright 2023-2023. All Rights Reserved
 */
const ai = new E(), _a = new oe(), ri = new E();
class be extends ze {
  constructor(e = document.createElement("div")) {
    super(), this.element = e, this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element instanceof Element && t.element.parentNode !== null && t.element.parentNode.removeChild(t.element);
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(!0), this;
  }
}
be.prototype.isCSS3DObject = !0;
class Pa extends be {
  constructor(e) {
    super(e), this.rotation2D = 0;
  }
  copy(e, t) {
    return super.copy(e, t), this.rotation2D = e.rotation2D, this;
  }
}
Pa.prototype.isCSS3DSprite = !0;
const _e = new G(), Sa = new G();
class Wi {
  constructor(e = {}) {
    const t = this;
    let n, i, s, a;
    const o = {
      camera: { fov: 0, style: "" },
      objects: /* @__PURE__ */ new WeakMap()
    }, l = e.element !== void 0 ? e.element : document.createElement("div");
    l.style.overflow = "hidden", this.domElement = l;
    const c = document.createElement("div");
    c.style.transformStyle = "preserve-3d", c.style.pointerEvents = "none", l.appendChild(c), this.getSize = function() {
      return {
        width: n,
        height: i
      };
    }, this.render = function(m, p) {
      const g = p.projectionMatrix.elements[5] * a;
      o.camera.fov !== g && (l.style.perspective = p.isPerspectiveCamera ? g + "px" : "", o.camera.fov = g), m.autoUpdate === !0 && m.updateMatrixWorld(), p.parent === null && p.updateMatrixWorld();
      let A, y;
      p.isOrthographicCamera && (A = -(p.right + p.left) / 2, y = (p.top + p.bottom) / 2);
      const w = (p.isOrthographicCamera ? "scale(" + g + ")translate(" + u(A) + "px," + u(y) + "px)" + f(p.matrixWorldInverse) : "translateZ(" + g + "px)" + f(p.matrixWorldInverse)) + "translate(" + s + "px," + a + "px)";
      o.camera.style !== w && (c.style.transform = w, o.camera.style = w), d(m, m, p);
    }, this.setSize = function(m, p) {
      n = m, i = p, s = n / 2, a = i / 2, l.style.width = m + "px", l.style.height = p + "px", c.style.width = m + "px", c.style.height = p + "px";
    };
    function u(m) {
      return Math.abs(m) < 1e-10 ? 0 : m;
    }
    function f(m) {
      const p = m.elements;
      return "matrix3d(" + u(p[0]) + "," + u(-p[1]) + "," + u(p[2]) + "," + u(p[3]) + "," + u(p[4]) + "," + u(-p[5]) + "," + u(p[6]) + "," + u(p[7]) + "," + u(p[8]) + "," + u(-p[9]) + "," + u(p[10]) + "," + u(p[11]) + "," + u(p[12]) + "," + u(-p[13]) + "," + u(p[14]) + "," + u(p[15]) + ")";
    }
    function h(m) {
      const p = m.elements;
      return "translate(-50%,-50%)" + ("matrix3d(" + u(p[0]) + "," + u(p[1]) + "," + u(p[2]) + "," + u(p[3]) + "," + u(-p[4]) + "," + u(-p[5]) + "," + u(-p[6]) + "," + u(-p[7]) + "," + u(p[8]) + "," + u(p[9]) + "," + u(p[10]) + "," + u(p[11]) + "," + u(p[12]) + "," + u(p[13]) + "," + u(p[14]) + "," + u(p[15]) + ")");
    }
    function d(m, p, g, A) {
      if (m.isCSS3DObject) {
        const y = m.visible && m.layers.test(g.layers);
        if (m.element.style.display = y ? "" : "none", y) {
          m.onBeforeRender(t, p, g);
          let x;
          m.isCSS3DSprite ? (_e.copy(g.matrixWorldInverse), _e.transpose(), m.rotation2D !== 0 && _e.multiply(Sa.makeRotationZ(m.rotation2D)), m.matrixWorld.decompose(ai, _a, ri), _e.setPosition(ai), _e.scale(ri), _e.elements[3] = 0, _e.elements[7] = 0, _e.elements[11] = 0, _e.elements[15] = 1, x = h(_e)) : x = h(m.matrixWorld);
          const w = m.element, T = o.objects.get(m);
          if (T === void 0 || T.style !== x) {
            w.style.transform = x;
            const P = { style: x };
            o.objects.set(m, P);
          }
          w.parentNode !== c && c.appendChild(w), m.onAfterRender(t, p, g);
        }
      }
      for (let y = 0, x = m.children.length; y < x; y++)
        d(m.children[y], p, g);
    }
  }
}
const dn = { type: "change" }, pn = { type: "start" }, mn = { type: "end" };
class Zi extends zs {
  constructor(e, t) {
    super(), t === void 0 && console.warn('THREE.TrackballControls: The second parameter "domElement" is now mandatory.'), t === document && console.error('THREE.TrackballControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
    const n = this, i = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
    this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.keys = [
      "KeyA",
      "KeyS",
      "KeyD"
      /*D*/
    ], this.mouseButtons = { LEFT: un.ROTATE, MIDDLE: un.DOLLY, RIGHT: un.PAN }, this.target = new E();
    const s = 1e-6, a = new E();
    let o = 1, l = i.NONE, c = i.NONE, u = 0, f = 0, h = 0;
    const d = new E(), m = new H(), p = new H(), g = new E(), A = new H(), y = new H(), x = new H(), w = new H(), T = [], P = {};
    this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.up0 = this.object.up.clone(), this.zoom0 = this.object.zoom, this.handleResize = function() {
      const v = n.domElement.getBoundingClientRect(), I = n.domElement.ownerDocument.documentElement;
      n.screen.left = v.left + window.pageXOffset - I.clientLeft, n.screen.top = v.top + window.pageYOffset - I.clientTop, n.screen.width = v.width, n.screen.height = v.height;
    };
    const _ = function() {
      const v = new H();
      return function(se, re) {
        return v.set(
          (se - n.screen.left) / n.screen.width,
          (re - n.screen.top) / n.screen.height
        ), v;
      };
    }(), F = function() {
      const v = new H();
      return function(se, re) {
        return v.set(
          (se - n.screen.width * 0.5 - n.screen.left) / (n.screen.width * 0.5),
          (n.screen.height + 2 * (n.screen.top - re)) / n.screen.width
          // screen.width intentional
        ), v;
      };
    }();
    this.rotateCamera = function() {
      const v = new E(), I = new oe(), se = new E(), re = new E(), ge = new E(), we = new E();
      return function() {
        we.set(p.x - m.x, p.y - m.y, 0);
        let Xe = we.length();
        Xe ? (d.copy(n.object.position).sub(n.target), se.copy(d).normalize(), re.copy(n.object.up).normalize(), ge.crossVectors(re, se).normalize(), re.setLength(p.y - m.y), ge.setLength(p.x - m.x), we.copy(re.add(ge)), v.crossVectors(we, d).normalize(), Xe *= n.rotateSpeed, I.setFromAxisAngle(v, Xe), d.applyQuaternion(I), n.object.up.applyQuaternion(I), g.copy(v), h = Xe) : !n.staticMoving && h && (h *= Math.sqrt(1 - n.dynamicDampingFactor), d.copy(n.object.position).sub(n.target), I.setFromAxisAngle(g, h), d.applyQuaternion(I), n.object.up.applyQuaternion(I)), m.copy(p);
      };
    }(), this.zoomCamera = function() {
      let v;
      l === i.TOUCH_ZOOM_PAN ? (v = u / f, u = f, n.object.isPerspectiveCamera ? d.multiplyScalar(v) : n.object.isOrthographicCamera ? (n.object.zoom /= v, n.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (v = 1 + (y.y - A.y) * n.zoomSpeed, v !== 1 && v > 0 && (n.object.isPerspectiveCamera ? d.multiplyScalar(v) : n.object.isOrthographicCamera ? (n.object.zoom /= v, n.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), n.staticMoving ? A.copy(y) : A.y += (y.y - A.y) * this.dynamicDampingFactor);
    }, this.panCamera = function() {
      const v = new H(), I = new E(), se = new E();
      return function() {
        if (v.copy(w).sub(x), v.lengthSq()) {
          if (n.object.isOrthographicCamera) {
            const ge = (n.object.right - n.object.left) / n.object.zoom / n.domElement.clientWidth, we = (n.object.top - n.object.bottom) / n.object.zoom / n.domElement.clientWidth;
            v.x *= ge, v.y *= we;
          }
          v.multiplyScalar(d.length() * n.panSpeed), se.copy(d).cross(n.object.up).setLength(v.x), se.add(I.copy(n.object.up).setLength(v.y)), n.object.position.add(se), n.target.add(se), n.staticMoving ? x.copy(w) : x.add(v.subVectors(w, x).multiplyScalar(n.dynamicDampingFactor));
        }
      };
    }(), this.checkDistances = function() {
      (!n.noZoom || !n.noPan) && (d.lengthSq() > n.maxDistance * n.maxDistance && (n.object.position.addVectors(n.target, d.setLength(n.maxDistance)), A.copy(y)), d.lengthSq() < n.minDistance * n.minDistance && (n.object.position.addVectors(n.target, d.setLength(n.minDistance)), A.copy(y)));
    }, this.update = function() {
      d.subVectors(n.object.position, n.target), n.noRotate || n.rotateCamera(), n.noZoom || n.zoomCamera(), n.noPan || n.panCamera(), n.object.position.addVectors(n.target, d), n.object.isPerspectiveCamera ? (n.checkDistances(), n.object.lookAt(n.target), a.distanceToSquared(n.object.position) > s && (n.dispatchEvent(dn), a.copy(n.object.position))) : n.object.isOrthographicCamera ? (n.object.lookAt(n.target), (a.distanceToSquared(n.object.position) > s || o !== n.object.zoom) && (n.dispatchEvent(dn), a.copy(n.object.position), o = n.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type");
    }, this.reset = function() {
      l = i.NONE, c = i.NONE, n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.up.copy(n.up0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), d.subVectors(n.object.position, n.target), n.object.lookAt(n.target), n.dispatchEvent(dn), a.copy(n.object.position), o = n.object.zoom;
    };
    function X(v) {
      n.enabled !== !1 && (T.length === 0 && (n.domElement.setPointerCapture(v.pointerId), n.domElement.addEventListener("pointermove", M), n.domElement.addEventListener("pointerup", z)), fe(v), v.pointerType === "touch" ? Q(v) : N(v));
    }
    function M(v) {
      n.enabled !== !1 && (v.pointerType === "touch" ? te(v) : D(v));
    }
    function z(v) {
      n.enabled !== !1 && (v.pointerType === "touch" ? q(v) : O(), ee(v), T.length === 0 && (n.domElement.releasePointerCapture(v.pointerId), n.domElement.removeEventListener("pointermove", M), n.domElement.removeEventListener("pointerup", z)));
    }
    function C(v) {
      ee(v);
    }
    function b(v) {
      n.enabled !== !1 && (window.removeEventListener("keydown", b), c === i.NONE && (v.code === n.keys[i.ROTATE] && !n.noRotate ? c = i.ROTATE : v.code === n.keys[i.ZOOM] && !n.noZoom ? c = i.ZOOM : v.code === n.keys[i.PAN] && !n.noPan && (c = i.PAN)));
    }
    function R() {
      n.enabled !== !1 && (c = i.NONE, window.addEventListener("keydown", b));
    }
    function N(v) {
      if (l === i.NONE)
        switch (v.button) {
          case n.mouseButtons.LEFT:
            l = i.ROTATE;
            break;
          case n.mouseButtons.MIDDLE:
            l = i.ZOOM;
            break;
          case n.mouseButtons.RIGHT:
            l = i.PAN;
            break;
          default:
            l = i.NONE;
        }
      const I = c !== i.NONE ? c : l;
      I === i.ROTATE && !n.noRotate ? (p.copy(F(v.pageX, v.pageY)), m.copy(p)) : I === i.ZOOM && !n.noZoom ? (A.copy(_(v.pageX, v.pageY)), y.copy(A)) : I === i.PAN && !n.noPan && (x.copy(_(v.pageX, v.pageY)), w.copy(x)), n.dispatchEvent(pn);
    }
    function D(v) {
      const I = c !== i.NONE ? c : l;
      I === i.ROTATE && !n.noRotate ? (m.copy(p), p.copy(F(v.pageX, v.pageY))) : I === i.ZOOM && !n.noZoom ? y.copy(_(v.pageX, v.pageY)) : I === i.PAN && !n.noPan && w.copy(_(v.pageX, v.pageY));
    }
    function O() {
      l = i.NONE, n.dispatchEvent(mn);
    }
    function V(v) {
      if (n.enabled !== !1 && n.noZoom !== !0) {
        switch (v.preventDefault(), v.deltaMode) {
          case 2:
            A.y -= v.deltaY * 0.025;
            break;
          case 1:
            A.y -= v.deltaY * 0.01;
            break;
          default:
            A.y -= v.deltaY * 25e-5;
            break;
        }
        n.dispatchEvent(pn), n.dispatchEvent(mn);
      }
    }
    function Q(v) {
      switch (ie(v), T.length) {
        case 1:
          l = i.TOUCH_ROTATE, p.copy(F(T[0].pageX, T[0].pageY)), m.copy(p);
          break;
        default:
          l = i.TOUCH_ZOOM_PAN;
          const I = T[0].pageX - T[1].pageX, se = T[0].pageY - T[1].pageY;
          f = u = Math.sqrt(I * I + se * se);
          const re = (T[0].pageX + T[1].pageX) / 2, ge = (T[0].pageY + T[1].pageY) / 2;
          x.copy(_(re, ge)), w.copy(x);
          break;
      }
      n.dispatchEvent(pn);
    }
    function te(v) {
      switch (ie(v), T.length) {
        case 1:
          m.copy(p), p.copy(F(v.pageX, v.pageY));
          break;
        default:
          const I = et(v), se = v.pageX - I.x, re = v.pageY - I.y;
          f = Math.sqrt(se * se + re * re);
          const ge = (v.pageX + I.x) / 2, we = (v.pageY + I.y) / 2;
          w.copy(_(ge, we));
          break;
      }
    }
    function q(v) {
      switch (T.length) {
        case 0:
          l = i.NONE;
          break;
        case 1:
          l = i.TOUCH_ROTATE, p.copy(F(v.pageX, v.pageY)), m.copy(p);
          break;
        case 2:
          l = i.TOUCH_ZOOM_PAN, p.copy(F(v.pageX - m.pageX, v.pageY - m.pageY)), m.copy(p);
          break;
      }
      n.dispatchEvent(mn);
    }
    function ne(v) {
      n.enabled !== !1 && v.preventDefault();
    }
    function fe(v) {
      T.push(v);
    }
    function ee(v) {
      delete P[v.pointerId];
      for (let I = 0; I < T.length; I++)
        if (T[I].pointerId == v.pointerId) {
          T.splice(I, 1);
          return;
        }
    }
    function ie(v) {
      let I = P[v.pointerId];
      I === void 0 && (I = new H(), P[v.pointerId] = I), I.set(v.pageX, v.pageY);
    }
    function et(v) {
      const I = v.pointerId === T[0].pointerId ? T[1] : T[0];
      return P[I.pointerId];
    }
    this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", ne), n.domElement.removeEventListener("pointerdown", X), n.domElement.removeEventListener("pointercancel", C), n.domElement.removeEventListener("wheel", V), n.domElement.removeEventListener("pointermove", M), n.domElement.removeEventListener("pointerup", z), window.removeEventListener("keydown", b), window.removeEventListener("keyup", R);
    }, this.domElement.addEventListener("contextmenu", ne), this.domElement.addEventListener("pointerdown", X), this.domElement.addEventListener("pointercancel", C), this.domElement.addEventListener("wheel", V, { passive: !1 }), window.addEventListener("keydown", b), window.addEventListener("keyup", R), this.handleResize(), this.update();
  }
}
const We = new Zt(), pe = new E(), De = new E(), K = new oe(), oi = {
  X: new E(1, 0, 0),
  Y: new E(0, 1, 0),
  Z: new E(0, 0, 1)
}, gn = { type: "change" }, li = { type: "mouseDown" }, ci = { type: "mouseUp", mode: null }, ui = { type: "objectChange" };
class Ki extends ze {
  constructor(e, t) {
    super(), t === void 0 && (console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), t = document), this.visible = !1, this.domElement = t, this.domElement.style.touchAction = "none";
    const n = new qi();
    this._gizmo = n, this.add(n);
    const i = new Ji();
    this._plane = i, this.add(i);
    const s = this;
    function a(y, x) {
      let w = x;
      Object.defineProperty(s, y, {
        get: function() {
          return w !== void 0 ? w : x;
        },
        set: function(T) {
          w !== T && (w = T, i[y] = T, n[y] = T, s.dispatchEvent({ type: y + "-changed", value: T }), s.dispatchEvent(gn));
        }
      }), s[y] = x, i[y] = x, n[y] = x;
    }
    a("camera", e), a("object", void 0), a("enabled", !0), a("axis", null), a("mode", "translate"), a("translationSnap", null), a("rotationSnap", null), a("scaleSnap", null), a("space", "world"), a("size", 1), a("dragging", !1), a("showX", !0), a("showY", !0), a("showZ", !0);
    const o = new E(), l = new E(), c = new oe(), u = new oe(), f = new E(), h = new oe(), d = new E(), m = new E(), p = new E(), g = 0, A = new E();
    a("worldPosition", o), a("worldPositionStart", l), a("worldQuaternion", c), a("worldQuaternionStart", u), a("cameraPosition", f), a("cameraQuaternion", h), a("pointStart", d), a("pointEnd", m), a("rotationAxis", p), a("rotationAngle", g), a("eye", A), this._offset = new E(), this._startNorm = new E(), this._endNorm = new E(), this._cameraScale = new E(), this._parentPosition = new E(), this._parentQuaternion = new oe(), this._parentQuaternionInv = new oe(), this._parentScale = new E(), this._worldScaleStart = new E(), this._worldQuaternionInv = new oe(), this._worldScale = new E(), this._positionStart = new E(), this._quaternionStart = new oe(), this._scaleStart = new E(), this._getPointer = Ea.bind(this), this._onPointerDown = Ma.bind(this), this._onPointerHover = La.bind(this), this._onPointerMove = Ia.bind(this), this._onPointerUp = ba.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp);
  }
  // updateMatrixWorld  updates key transformation variables
  updateMatrixWorld() {
    this.object !== void 0 && (this.object.updateMatrixWorld(), this.object.parent === null ? console.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this);
  }
  pointerHover(e) {
    if (this.object === void 0 || this.dragging === !0)
      return;
    We.setFromCamera(e, this.camera);
    const t = xn(this._gizmo.picker[this.mode], We);
    t ? this.axis = t.object.name : this.axis = null;
  }
  pointerDown(e) {
    if (!(this.object === void 0 || this.dragging === !0 || e.button !== 0) && this.axis !== null) {
      We.setFromCamera(e, this.camera);
      const t = xn(this._plane, We, !0);
      t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = !0, li.mode = this.mode, this.dispatchEvent(li);
    }
  }
  pointerMove(e) {
    const t = this.axis, n = this.mode, i = this.object;
    let s = this.space;
    if (n === "scale" ? s = "local" : (t === "E" || t === "XYZE" || t === "XYZ") && (s = "world"), i === void 0 || t === null || this.dragging === !1 || e.button !== -1)
      return;
    We.setFromCamera(e, this.camera);
    const a = xn(this._plane, We, !0);
    if (a) {
      if (this.pointEnd.copy(a.point).sub(this.worldPositionStart), n === "translate")
        this._offset.copy(this.pointEnd).sub(this.pointStart), s === "local" && t !== "XYZ" && this._offset.applyQuaternion(this._worldQuaternionInv), t.indexOf("X") === -1 && (this._offset.x = 0), t.indexOf("Y") === -1 && (this._offset.y = 0), t.indexOf("Z") === -1 && (this._offset.z = 0), s === "local" && t !== "XYZ" ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), i.position.copy(this._offset).add(this._positionStart), this.translationSnap && (s === "local" && (i.position.applyQuaternion(K.copy(this._quaternionStart).invert()), t.search("X") !== -1 && (i.position.x = Math.round(i.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (i.position.y = Math.round(i.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (i.position.z = Math.round(i.position.z / this.translationSnap) * this.translationSnap), i.position.applyQuaternion(this._quaternionStart)), s === "world" && (i.parent && i.position.add(pe.setFromMatrixPosition(i.parent.matrixWorld)), t.search("X") !== -1 && (i.position.x = Math.round(i.position.x / this.translationSnap) * this.translationSnap), t.search("Y") !== -1 && (i.position.y = Math.round(i.position.y / this.translationSnap) * this.translationSnap), t.search("Z") !== -1 && (i.position.z = Math.round(i.position.z / this.translationSnap) * this.translationSnap), i.parent && i.position.sub(pe.setFromMatrixPosition(i.parent.matrixWorld))));
      else if (n === "scale") {
        if (t.search("XYZ") !== -1) {
          let o = this.pointEnd.length() / this.pointStart.length();
          this.pointEnd.dot(this.pointStart) < 0 && (o *= -1), De.set(o, o, o);
        } else
          pe.copy(this.pointStart), De.copy(this.pointEnd), pe.applyQuaternion(this._worldQuaternionInv), De.applyQuaternion(this._worldQuaternionInv), De.divide(pe), t.search("X") === -1 && (De.x = 1), t.search("Y") === -1 && (De.y = 1), t.search("Z") === -1 && (De.z = 1);
        i.scale.copy(this._scaleStart).multiply(De), this.scaleSnap && (t.search("X") !== -1 && (i.scale.x = Math.round(i.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Y") !== -1 && (i.scale.y = Math.round(i.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), t.search("Z") !== -1 && (i.scale.z = Math.round(i.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap));
      } else if (n === "rotate") {
        this._offset.copy(this.pointEnd).sub(this.pointStart);
        const o = 20 / this.worldPosition.distanceTo(pe.setFromMatrixPosition(this.camera.matrixWorld));
        t === "E" ? (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1) : t === "XYZE" ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(pe.copy(this.rotationAxis).cross(this.eye)) * o) : (t === "X" || t === "Y" || t === "Z") && (this.rotationAxis.copy(oi[t]), pe.copy(oi[t]), s === "local" && pe.applyQuaternion(this.worldQuaternion), this.rotationAngle = this._offset.dot(pe.cross(this.eye).normalize()) * o), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), s === "local" && t !== "E" && t !== "XYZE" ? (i.quaternion.copy(this._quaternionStart), i.quaternion.multiply(K.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), i.quaternion.copy(K.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), i.quaternion.multiply(this._quaternionStart).normalize());
      }
      this.dispatchEvent(gn), this.dispatchEvent(ui);
    }
  }
  pointerUp(e) {
    e.button === 0 && (this.dragging && this.axis !== null && (ci.mode = this.mode, this.dispatchEvent(ci)), this.dragging = !1, this.axis = null);
  }
  dispose() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse(function(e) {
      e.geometry && e.geometry.dispose(), e.material && e.material.dispose();
    });
  }
  // Set current object
  attach(e) {
    return this.object = e, this.visible = !0, this;
  }
  // Detatch from object
  detach() {
    return this.object = void 0, this.visible = !1, this.axis = null, this;
  }
  reset() {
    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(gn), this.dispatchEvent(ui), this.pointStart.copy(this.pointEnd));
  }
  getRaycaster() {
    return We;
  }
  // TODO: deprecate
  getMode() {
    return this.mode;
  }
  setMode(e) {
    this.mode = e;
  }
  setTranslationSnap(e) {
    this.translationSnap = e;
  }
  setRotationSnap(e) {
    this.rotationSnap = e;
  }
  setScaleSnap(e) {
    this.scaleSnap = e;
  }
  setSize(e) {
    this.size = e;
  }
  setSpace(e) {
    this.space = e;
  }
  update() {
    console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
  }
}
Ki.prototype.isTransformControls = !0;
function Ea(r) {
  if (this.domElement.ownerDocument.pointerLockElement)
    return {
      x: 0,
      y: 0,
      button: r.button
    };
  {
    const e = this.domElement.getBoundingClientRect();
    return {
      x: (r.clientX - e.left) / e.width * 2 - 1,
      y: -(r.clientY - e.top) / e.height * 2 + 1,
      button: r.button
    };
  }
}
function La(r) {
  if (this.enabled)
    switch (r.pointerType) {
      case "mouse":
      case "pen":
        this.pointerHover(this._getPointer(r));
        break;
    }
}
function Ma(r) {
  this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(r.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(r)), this.pointerDown(this._getPointer(r)));
}
function Ia(r) {
  this.enabled && this.pointerMove(this._getPointer(r));
}
function ba(r) {
  this.enabled && (this.domElement.releasePointerCapture(r.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(r)));
}
function xn(r, e, t) {
  const n = e.intersectObject(r, !0);
  for (let i = 0; i < n.length; i++)
    if (n[i].object.visible || t)
      return n[i];
  return !1;
}
const Bt = new st(), W = new E(0, 1, 0), fi = new E(0, 0, 0), hi = new G(), Qt = new oe(), Gt = new oe(), Pe = new E(), di = new G(), Ft = new E(1, 0, 0), Ze = new E(0, 1, 0), _t = new E(0, 0, 1), Yt = new E(), yt = new E(), vt = new E();
class qi extends ze {
  constructor() {
    super(), this.type = "TransformControlsGizmo";
    const e = new Re({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), t = new Dn({
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
      transparent: !0
    }), n = e.clone();
    n.opacity = 0.15;
    const i = t.clone();
    i.opacity = 0.5;
    const s = e.clone();
    s.color.setHex(16711680);
    const a = e.clone();
    a.color.setHex(65280);
    const o = e.clone();
    o.color.setHex(255);
    const l = e.clone();
    l.color.setHex(16711680), l.opacity = 0.5;
    const c = e.clone();
    c.color.setHex(65280), c.opacity = 0.5;
    const u = e.clone();
    u.color.setHex(255), u.opacity = 0.5;
    const f = e.clone();
    f.opacity = 0.25;
    const h = e.clone();
    h.color.setHex(16776960), h.opacity = 0.25, e.clone().color.setHex(16776960);
    const m = e.clone();
    m.color.setHex(7895160);
    const p = new he(0, 0.04, 0.1, 12);
    p.translate(0, 0.05, 0);
    const g = new ce(0.08, 0.08, 0.08);
    g.translate(0, 0.04, 0);
    const A = new Ne();
    A.setAttribute("position", new Ae([0, 0, 0, 1, 0, 0], 3));
    const y = new he(75e-4, 75e-4, 0.5, 3);
    y.translate(0, 0.25, 0);
    function x(N, D) {
      const O = new At(N, 75e-4, 3, 64, D * Math.PI * 2);
      return O.rotateY(Math.PI / 2), O.rotateX(Math.PI / 2), O;
    }
    function w() {
      const N = new Ne();
      return N.setAttribute("position", new Ae([0, 0, 0, 1, 1, 1], 3)), N;
    }
    const T = {
      X: [
        [new S(p, s), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new S(p, s), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
        [new S(y, s), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      Y: [
        [new S(p, a), [0, 0.5, 0]],
        [new S(p, a), [0, -0.5, 0], [Math.PI, 0, 0]],
        [new S(y, a)]
      ],
      Z: [
        [new S(p, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new S(p, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
        [new S(y, o), null, [Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new S(new kt(0.1, 0), f.clone()), [0, 0, 0]]
      ],
      XY: [
        [new S(new ce(0.15, 0.15, 0.01), u.clone()), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new S(new ce(0.15, 0.15, 0.01), l.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new S(new ce(0.15, 0.15, 0.01), c.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, P = {
      X: [
        [new S(new he(0.2, 0, 0.6, 4), n), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new S(new he(0.2, 0, 0.6, 4), n), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new S(new he(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
        [new S(new he(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new S(new he(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new S(new he(0.2, 0, 0.6, 4), n), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new S(new kt(0.2, 0), n)]
      ],
      XY: [
        [new S(new ce(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new S(new ce(0.2, 0.2, 0.01), n), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new S(new ce(0.2, 0.2, 0.01), n), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ]
    }, _ = {
      START: [
        [new S(new kt(0.01, 2), i), null, null, null, "helper"]
      ],
      END: [
        [new S(new kt(0.01, 2), i), null, null, null, "helper"]
      ],
      DELTA: [
        [new Ee(w(), i), null, null, null, "helper"]
      ],
      X: [
        [new Ee(A, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new Ee(A, i.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new Ee(A, i.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    }, F = {
      XYZE: [
        [new S(x(0.5, 1), m), null, [0, Math.PI / 2, 0]]
      ],
      X: [
        [new S(x(0.5, 0.5), s)]
      ],
      Y: [
        [new S(x(0.5, 0.5), a), null, [0, 0, -Math.PI / 2]]
      ],
      Z: [
        [new S(x(0.5, 0.5), o), null, [0, Math.PI / 2, 0]]
      ],
      E: [
        [new S(x(0.75, 1), h), null, [0, Math.PI / 2, 0]]
      ]
    }, X = {
      AXIS: [
        [new Ee(A, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ]
    }, M = {
      XYZE: [
        [new S(new Ri(0.25, 10, 8), n)]
      ],
      X: [
        [new S(new At(0.5, 0.1, 4, 24), n), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]
      ],
      Y: [
        [new S(new At(0.5, 0.1, 4, 24), n), [0, 0, 0], [Math.PI / 2, 0, 0]]
      ],
      Z: [
        [new S(new At(0.5, 0.1, 4, 24), n), [0, 0, 0], [0, 0, -Math.PI / 2]]
      ],
      E: [
        [new S(new At(0.75, 0.1, 2, 24), n)]
      ]
    }, z = {
      X: [
        [new S(g, s), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
        [new S(y, s), [0, 0, 0], [0, 0, -Math.PI / 2]],
        [new S(g, s), [-0.5, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new S(g, a), [0, 0.5, 0]],
        [new S(y, a)],
        [new S(g, a), [0, -0.5, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new S(g, o), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
        [new S(y, o), [0, 0, 0], [Math.PI / 2, 0, 0]],
        [new S(g, o), [0, 0, -0.5], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new S(new ce(0.15, 0.15, 0.01), u), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new S(new ce(0.15, 0.15, 0.01), l), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new S(new ce(0.15, 0.15, 0.01), c), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new S(new ce(0.1, 0.1, 0.1), f.clone())]
      ]
    }, C = {
      X: [
        [new S(new he(0.2, 0, 0.6, 4), n), [0.3, 0, 0], [0, 0, -Math.PI / 2]],
        [new S(new he(0.2, 0, 0.6, 4), n), [-0.3, 0, 0], [0, 0, Math.PI / 2]]
      ],
      Y: [
        [new S(new he(0.2, 0, 0.6, 4), n), [0, 0.3, 0]],
        [new S(new he(0.2, 0, 0.6, 4), n), [0, -0.3, 0], [0, 0, Math.PI]]
      ],
      Z: [
        [new S(new he(0.2, 0, 0.6, 4), n), [0, 0, 0.3], [Math.PI / 2, 0, 0]],
        [new S(new he(0.2, 0, 0.6, 4), n), [0, 0, -0.3], [-Math.PI / 2, 0, 0]]
      ],
      XY: [
        [new S(new ce(0.2, 0.2, 0.01), n), [0.15, 0.15, 0]]
      ],
      YZ: [
        [new S(new ce(0.2, 0.2, 0.01), n), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]
      ],
      XZ: [
        [new S(new ce(0.2, 0.2, 0.01), n), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]
      ],
      XYZ: [
        [new S(new ce(0.2, 0.2, 0.2), n), [0, 0, 0]]
      ]
    }, b = {
      X: [
        [new Ee(A, i.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
      ],
      Y: [
        [new Ee(A, i.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]
      ],
      Z: [
        [new Ee(A, i.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]
      ]
    };
    function R(N) {
      const D = new ze();
      for (const O in N)
        for (let V = N[O].length; V--; ) {
          const Q = N[O][V][0].clone(), te = N[O][V][1], q = N[O][V][2], ne = N[O][V][3], fe = N[O][V][4];
          Q.name = O, Q.tag = fe, te && Q.position.set(te[0], te[1], te[2]), q && Q.rotation.set(q[0], q[1], q[2]), ne && Q.scale.set(ne[0], ne[1], ne[2]), Q.updateMatrix();
          const ee = Q.geometry.clone();
          ee.applyMatrix4(Q.matrix), Q.geometry = ee, Q.renderOrder = 1 / 0, Q.position.set(0, 0, 0), Q.rotation.set(0, 0, 0), Q.scale.set(1, 1, 1), D.add(Q);
        }
      return D;
    }
    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = R(T)), this.add(this.gizmo.rotate = R(F)), this.add(this.gizmo.scale = R(z)), this.add(this.picker.translate = R(P)), this.add(this.picker.rotate = R(M)), this.add(this.picker.scale = R(C)), this.add(this.helper.translate = R(_)), this.add(this.helper.rotate = R(X)), this.add(this.helper.scale = R(b)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1;
  }
  // updateMatrixWorld will update transformations and appearance of individual handles
  updateMatrixWorld(e) {
    const n = (this.mode === "scale" ? "local" : this.space) === "local" ? this.worldQuaternion : Gt;
    this.gizmo.translate.visible = this.mode === "translate", this.gizmo.rotate.visible = this.mode === "rotate", this.gizmo.scale.visible = this.mode === "scale", this.helper.translate.visible = this.mode === "translate", this.helper.rotate.visible = this.mode === "rotate", this.helper.scale.visible = this.mode === "scale";
    let i = [];
    i = i.concat(this.picker[this.mode].children), i = i.concat(this.gizmo[this.mode].children), i = i.concat(this.helper[this.mode].children);
    for (let s = 0; s < i.length; s++) {
      const a = i[s];
      a.visible = !0, a.rotation.set(0, 0, 0), a.position.copy(this.worldPosition);
      let o;
      if (this.camera.isOrthographicCamera ? o = (this.camera.top - this.camera.bottom) / this.camera.zoom : o = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), a.scale.set(1, 1, 1).multiplyScalar(o * this.size / 4), a.tag === "helper") {
        a.visible = !1, a.name === "AXIS" ? (a.position.copy(this.worldPositionStart), a.visible = !!this.axis, this.axis === "X" && (K.setFromEuler(Bt.set(0, 0, 0)), a.quaternion.copy(n).multiply(K), Math.abs(W.copy(Ft).applyQuaternion(n).dot(this.eye)) > 0.9 && (a.visible = !1)), this.axis === "Y" && (K.setFromEuler(Bt.set(0, 0, Math.PI / 2)), a.quaternion.copy(n).multiply(K), Math.abs(W.copy(Ze).applyQuaternion(n).dot(this.eye)) > 0.9 && (a.visible = !1)), this.axis === "Z" && (K.setFromEuler(Bt.set(0, Math.PI / 2, 0)), a.quaternion.copy(n).multiply(K), Math.abs(W.copy(_t).applyQuaternion(n).dot(this.eye)) > 0.9 && (a.visible = !1)), this.axis === "XYZE" && (K.setFromEuler(Bt.set(0, Math.PI / 2, 0)), W.copy(this.rotationAxis), a.quaternion.setFromRotationMatrix(hi.lookAt(fi, W, Ze)), a.quaternion.multiply(K), a.visible = this.dragging), this.axis === "E" && (a.visible = !1)) : a.name === "START" ? (a.position.copy(this.worldPositionStart), a.visible = this.dragging) : a.name === "END" ? (a.position.copy(this.worldPosition), a.visible = this.dragging) : a.name === "DELTA" ? (a.position.copy(this.worldPositionStart), a.quaternion.copy(this.worldQuaternionStart), pe.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), pe.applyQuaternion(this.worldQuaternionStart.clone().invert()), a.scale.copy(pe), a.visible = this.dragging) : (a.quaternion.copy(n), this.dragging ? a.position.copy(this.worldPositionStart) : a.position.copy(this.worldPosition), this.axis && (a.visible = this.axis.search(a.name) !== -1));
        continue;
      }
      a.quaternion.copy(n), this.mode === "translate" || this.mode === "scale" ? (a.name === "X" && Math.abs(W.copy(Ft).applyQuaternion(n).dot(this.eye)) > 0.99 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = !1), a.name === "Y" && Math.abs(W.copy(Ze).applyQuaternion(n).dot(this.eye)) > 0.99 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = !1), a.name === "Z" && Math.abs(W.copy(_t).applyQuaternion(n).dot(this.eye)) > 0.99 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = !1), a.name === "XY" && Math.abs(W.copy(_t).applyQuaternion(n).dot(this.eye)) < 0.2 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = !1), a.name === "YZ" && Math.abs(W.copy(Ft).applyQuaternion(n).dot(this.eye)) < 0.2 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = !1), a.name === "XZ" && Math.abs(W.copy(Ze).applyQuaternion(n).dot(this.eye)) < 0.2 && (a.scale.set(1e-10, 1e-10, 1e-10), a.visible = !1)) : this.mode === "rotate" && (Qt.copy(n), W.copy(this.eye).applyQuaternion(K.copy(n).invert()), a.name.search("E") !== -1 && a.quaternion.setFromRotationMatrix(hi.lookAt(this.eye, fi, Ze)), a.name === "X" && (K.setFromAxisAngle(Ft, Math.atan2(-W.y, W.z)), K.multiplyQuaternions(Qt, K), a.quaternion.copy(K)), a.name === "Y" && (K.setFromAxisAngle(Ze, Math.atan2(W.x, W.z)), K.multiplyQuaternions(Qt, K), a.quaternion.copy(K)), a.name === "Z" && (K.setFromAxisAngle(_t, Math.atan2(W.y, W.x)), K.multiplyQuaternions(Qt, K), a.quaternion.copy(K))), a.visible = a.visible && (a.name.indexOf("X") === -1 || this.showX), a.visible = a.visible && (a.name.indexOf("Y") === -1 || this.showY), a.visible = a.visible && (a.name.indexOf("Z") === -1 || this.showZ), a.visible = a.visible && (a.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ), a.material._color = a.material._color || a.material.color.clone(), a.material._opacity = a.material._opacity || a.material.opacity, a.material.color.copy(a.material._color), a.material.opacity = a.material._opacity, this.enabled && this.axis && (a.name === this.axis || this.axis.split("").some(function(l) {
        return a.name === l;
      })) && (a.material.color.setHex(16776960), a.material.opacity = 1);
    }
    super.updateMatrixWorld(e);
  }
}
qi.prototype.isTransformControlsGizmo = !0;
class Ji extends S {
  constructor() {
    super(
      new Ni(1e5, 1e5, 2, 2),
      new Re({ visible: !1, wireframe: !0, side: at, transparent: !0, opacity: 0.1, toneMapped: !1 })
    ), this.type = "TransformControlsPlane";
  }
  updateMatrixWorld(e) {
    let t = this.space;
    switch (this.position.copy(this.worldPosition), this.mode === "scale" && (t = "local"), Yt.copy(Ft).applyQuaternion(t === "local" ? this.worldQuaternion : Gt), yt.copy(Ze).applyQuaternion(t === "local" ? this.worldQuaternion : Gt), vt.copy(_t).applyQuaternion(t === "local" ? this.worldQuaternion : Gt), W.copy(yt), this.mode) {
      case "translate":
      case "scale":
        switch (this.axis) {
          case "X":
            W.copy(this.eye).cross(Yt), Pe.copy(Yt).cross(W);
            break;
          case "Y":
            W.copy(this.eye).cross(yt), Pe.copy(yt).cross(W);
            break;
          case "Z":
            W.copy(this.eye).cross(vt), Pe.copy(vt).cross(W);
            break;
          case "XY":
            Pe.copy(vt);
            break;
          case "YZ":
            Pe.copy(Yt);
            break;
          case "XZ":
            W.copy(vt), Pe.copy(yt);
            break;
          case "XYZ":
          case "E":
            Pe.set(0, 0, 0);
            break;
        }
        break;
      case "rotate":
      default:
        Pe.set(0, 0, 0);
    }
    Pe.length() === 0 ? this.quaternion.copy(this.cameraQuaternion) : (di.lookAt(pe.set(0, 0, 0), Pe, W), this.quaternion.setFromRotationMatrix(di)), super.updateMatrixWorld(e);
  }
}
Ji.prototype.isTransformControlsPlane = !0;
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var pi = {}, En = function(r) {
  return URL.createObjectURL(new Blob([r], { type: "text/javascript" }));
}, $i = function(r) {
  return new Worker(r);
};
try {
  URL.revokeObjectURL(En(""));
} catch {
  En = function(e) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(e);
  }, $i = function(e) {
    return new Worker(e, { type: "module" });
  };
}
var Ra = function(r, e, t, n, i) {
  var s = $i(pi[e] || (pi[e] = En(r)));
  return s.onerror = function(a) {
    return i(a.error, null);
  }, s.onmessage = function(a) {
    return i(null, a.data);
  }, s.postMessage(t, n), s;
}, k = Uint8Array, ae = Uint16Array, Oe = Uint32Array, ut = new k([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), ft = new k([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Mt = new k([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), es = function(r, e) {
  for (var t = new ae(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << r[n - 1];
  for (var i = new Oe(t[30]), n = 1; n < 30; ++n)
    for (var s = t[n]; s < t[n + 1]; ++s)
      i[s] = s - t[n] << 5 | n;
  return [t, i];
}, ts = es(ut, 2), Hn = ts[0], Jt = ts[1];
Hn[28] = 258, Jt[258] = 28;
var ns = es(ft, 0), is = ns[0], Ln = ns[1], It = new ae(32768);
for (var Z = 0; Z < 32768; ++Z) {
  var ke = (Z & 43690) >>> 1 | (Z & 21845) << 1;
  ke = (ke & 52428) >>> 2 | (ke & 13107) << 2, ke = (ke & 61680) >>> 4 | (ke & 3855) << 4, It[Z] = ((ke & 65280) >>> 8 | (ke & 255) << 8) >>> 1;
}
var ye = function(r, e, t) {
  for (var n = r.length, i = 0, s = new ae(e); i < n; ++i)
    ++s[r[i] - 1];
  var a = new ae(e);
  for (i = 0; i < e; ++i)
    a[i] = a[i - 1] + s[i - 1] << 1;
  var o;
  if (t) {
    o = new ae(1 << e);
    var l = 15 - e;
    for (i = 0; i < n; ++i)
      if (r[i])
        for (var c = i << 4 | r[i], u = e - r[i], f = a[r[i] - 1]++ << u, h = f | (1 << u) - 1; f <= h; ++f)
          o[It[f] >>> l] = c;
  } else
    for (o = new ae(n), i = 0; i < n; ++i)
      r[i] && (o[i] = It[a[r[i] - 1]++] >>> 15 - r[i]);
  return o;
}, Ue = new k(288);
for (var Z = 0; Z < 144; ++Z)
  Ue[Z] = 8;
for (var Z = 144; Z < 256; ++Z)
  Ue[Z] = 9;
for (var Z = 256; Z < 280; ++Z)
  Ue[Z] = 7;
for (var Z = 280; Z < 288; ++Z)
  Ue[Z] = 8;
var ot = new k(32);
for (var Z = 0; Z < 32; ++Z)
  ot[Z] = 5;
var ss = /* @__PURE__ */ ye(Ue, 9, 0), as = /* @__PURE__ */ ye(Ue, 9, 1), rs = /* @__PURE__ */ ye(ot, 5, 0), os = /* @__PURE__ */ ye(ot, 5, 1), jt = function(r) {
  for (var e = r[0], t = 1; t < r.length; ++t)
    r[t] > e && (e = r[t]);
  return e;
}, xe = function(r, e, t) {
  var n = e / 8 | 0;
  return (r[n] | r[n + 1] << 8) >> (e & 7) & t;
}, Vt = function(r, e) {
  var t = e / 8 | 0;
  return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7);
}, Ct = function(r) {
  return (r / 8 | 0) + (r & 7 && 1);
}, ve = function(r, e, t) {
  (e == null || e < 0) && (e = 0), (t == null || t > r.length) && (t = r.length);
  var n = new (r instanceof ae ? ae : r instanceof Oe ? Oe : k)(t - e);
  return n.set(r.subarray(e, t)), n;
}, Ot = function(r, e, t) {
  var n = r.length;
  if (!n || t && !t.l && n < 5)
    return e || new k(0);
  var i = !e || t, s = !t || t.i;
  t || (t = {}), e || (e = new k(n * 3));
  var a = function(et) {
    var v = e.length;
    if (et > v) {
      var I = new k(Math.max(v * 2, et));
      I.set(e), e = I;
    }
  }, o = t.f || 0, l = t.p || 0, c = t.b || 0, u = t.l, f = t.d, h = t.m, d = t.n, m = n * 8;
  do {
    if (!u) {
      t.f = o = xe(r, l, 1);
      var p = xe(r, l + 1, 3);
      if (l += 3, p)
        if (p == 1)
          u = as, f = os, h = 9, d = 5;
        else if (p == 2) {
          var x = xe(r, l, 31) + 257, w = xe(r, l + 10, 15) + 4, T = x + xe(r, l + 5, 31) + 1;
          l += 14;
          for (var P = new k(T), _ = new k(19), F = 0; F < w; ++F)
            _[Mt[F]] = xe(r, l + F * 3, 7);
          l += w * 3;
          for (var X = jt(_), M = (1 << X) - 1, z = ye(_, X, 1), F = 0; F < T; ) {
            var C = z[xe(r, l, M)];
            l += C & 15;
            var g = C >>> 4;
            if (g < 16)
              P[F++] = g;
            else {
              var b = 0, R = 0;
              for (g == 16 ? (R = 3 + xe(r, l, 3), l += 2, b = P[F - 1]) : g == 17 ? (R = 3 + xe(r, l, 7), l += 3) : g == 18 && (R = 11 + xe(r, l, 127), l += 7); R--; )
                P[F++] = b;
            }
          }
          var N = P.subarray(0, x), D = P.subarray(x);
          h = jt(N), d = jt(D), u = ye(N, h, 1), f = ye(D, d, 1);
        } else
          throw "invalid block type";
      else {
        var g = Ct(l) + 4, A = r[g - 4] | r[g - 3] << 8, y = g + A;
        if (y > n) {
          if (s)
            throw "unexpected EOF";
          break;
        }
        i && a(c + A), e.set(r.subarray(g, y), c), t.b = c += A, t.p = l = y * 8;
        continue;
      }
      if (l > m) {
        if (s)
          throw "unexpected EOF";
        break;
      }
    }
    i && a(c + 131072);
    for (var O = (1 << h) - 1, V = (1 << d) - 1, Q = l; ; Q = l) {
      var b = u[Vt(r, l) & O], te = b >>> 4;
      if (l += b & 15, l > m) {
        if (s)
          throw "unexpected EOF";
        break;
      }
      if (!b)
        throw "invalid length/literal";
      if (te < 256)
        e[c++] = te;
      else if (te == 256) {
        Q = l, u = null;
        break;
      } else {
        var q = te - 254;
        if (te > 264) {
          var F = te - 257, ne = ut[F];
          q = xe(r, l, (1 << ne) - 1) + Hn[F], l += ne;
        }
        var fe = f[Vt(r, l) & V], ee = fe >>> 4;
        if (!fe)
          throw "invalid distance";
        l += fe & 15;
        var D = is[ee];
        if (ee > 3) {
          var ne = ft[ee];
          D += Vt(r, l) & (1 << ne) - 1, l += ne;
        }
        if (l > m) {
          if (s)
            throw "unexpected EOF";
          break;
        }
        i && a(c + 131072);
        for (var ie = c + q; c < ie; c += 4)
          e[c] = e[c - D], e[c + 1] = e[c + 1 - D], e[c + 2] = e[c + 2 - D], e[c + 3] = e[c + 3 - D];
        c = ie;
      }
    }
    t.l = u, t.p = Q, t.b = c, u && (o = 1, t.m = h, t.d = f, t.n = d);
  } while (!o);
  return c == e.length ? e : ve(e, 0, c);
}, Se = function(r, e, t) {
  t <<= e & 7;
  var n = e / 8 | 0;
  r[n] |= t, r[n + 1] |= t >>> 8;
}, nt = function(r, e, t) {
  t <<= e & 7;
  var n = e / 8 | 0;
  r[n] |= t, r[n + 1] |= t >>> 8, r[n + 2] |= t >>> 16;
}, Wt = function(r, e) {
  for (var t = [], n = 0; n < r.length; ++n)
    r[n] && t.push({ s: n, f: r[n] });
  var i = t.length, s = t.slice();
  if (!i)
    return [Ce, 0];
  if (i == 1) {
    var a = new k(t[0].s + 1);
    return a[t[0].s] = 1, [a, 1];
  }
  t.sort(function(T, P) {
    return T.f - P.f;
  }), t.push({ s: -1, f: 25001 });
  var o = t[0], l = t[1], c = 0, u = 1, f = 2;
  for (t[0] = { s: -1, f: o.f + l.f, l: o, r: l }; u != i - 1; )
    o = t[t[c].f < t[f].f ? c++ : f++], l = t[c != u && t[c].f < t[f].f ? c++ : f++], t[u++] = { s: -1, f: o.f + l.f, l: o, r: l };
  for (var h = s[0].s, n = 1; n < i; ++n)
    s[n].s > h && (h = s[n].s);
  var d = new ae(h + 1), m = $t(t[u - 1], d, 0);
  if (m > e) {
    var n = 0, p = 0, g = m - e, A = 1 << g;
    for (s.sort(function(P, _) {
      return d[_.s] - d[P.s] || P.f - _.f;
    }); n < i; ++n) {
      var y = s[n].s;
      if (d[y] > e)
        p += A - (1 << m - d[y]), d[y] = e;
      else
        break;
    }
    for (p >>>= g; p > 0; ) {
      var x = s[n].s;
      d[x] < e ? p -= 1 << e - d[x]++ - 1 : ++n;
    }
    for (; n >= 0 && p; --n) {
      var w = s[n].s;
      d[w] == e && (--d[w], ++p);
    }
    m = e;
  }
  return [new k(d), m];
}, $t = function(r, e, t) {
  return r.s == -1 ? Math.max($t(r.l, e, t + 1), $t(r.r, e, t + 1)) : e[r.s] = t;
}, Mn = function(r) {
  for (var e = r.length; e && !r[--e]; )
    ;
  for (var t = new ae(++e), n = 0, i = r[0], s = 1, a = function(l) {
    t[n++] = l;
  }, o = 1; o <= e; ++o)
    if (r[o] == i && o != e)
      ++s;
    else {
      if (!i && s > 2) {
        for (; s > 138; s -= 138)
          a(32754);
        s > 2 && (a(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
      } else if (s > 3) {
        for (a(i), --s; s > 6; s -= 6)
          a(8304);
        s > 2 && (a(s - 3 << 5 | 8208), s = 0);
      }
      for (; s--; )
        a(i);
      s = 1, i = r[o];
    }
  return [t.subarray(0, n), e];
}, it = function(r, e) {
  for (var t = 0, n = 0; n < e.length; ++n)
    t += r[n] * e[n];
  return t;
}, St = function(r, e, t) {
  var n = t.length, i = Ct(e + 2);
  r[i] = n & 255, r[i + 1] = n >>> 8, r[i + 2] = r[i] ^ 255, r[i + 3] = r[i + 1] ^ 255;
  for (var s = 0; s < n; ++s)
    r[i + s + 4] = t[s];
  return (i + 4 + n) * 8;
}, In = function(r, e, t, n, i, s, a, o, l, c, u) {
  Se(e, u++, t), ++i[256];
  for (var f = Wt(i, 15), h = f[0], d = f[1], m = Wt(s, 15), p = m[0], g = m[1], A = Mn(h), y = A[0], x = A[1], w = Mn(p), T = w[0], P = w[1], _ = new ae(19), F = 0; F < y.length; ++F)
    _[y[F] & 31]++;
  for (var F = 0; F < T.length; ++F)
    _[T[F] & 31]++;
  for (var X = Wt(_, 7), M = X[0], z = X[1], C = 19; C > 4 && !M[Mt[C - 1]]; --C)
    ;
  var b = c + 5 << 3, R = it(i, Ue) + it(s, ot) + a, N = it(i, h) + it(s, p) + a + 14 + 3 * C + it(_, M) + (2 * _[16] + 3 * _[17] + 7 * _[18]);
  if (b <= R && b <= N)
    return St(e, u, r.subarray(l, l + c));
  var D, O, V, Q;
  if (Se(e, u, 1 + (N < R)), u += 2, N < R) {
    D = ye(h, d, 0), O = h, V = ye(p, g, 0), Q = p;
    var te = ye(M, z, 0);
    Se(e, u, x - 257), Se(e, u + 5, P - 1), Se(e, u + 10, C - 4), u += 14;
    for (var F = 0; F < C; ++F)
      Se(e, u + 3 * F, M[Mt[F]]);
    u += 3 * C;
    for (var q = [y, T], ne = 0; ne < 2; ++ne)
      for (var fe = q[ne], F = 0; F < fe.length; ++F) {
        var ee = fe[F] & 31;
        Se(e, u, te[ee]), u += M[ee], ee > 15 && (Se(e, u, fe[F] >>> 5 & 127), u += fe[F] >>> 12);
      }
  } else
    D = ss, O = Ue, V = rs, Q = ot;
  for (var F = 0; F < o; ++F)
    if (n[F] > 255) {
      var ee = n[F] >>> 18 & 31;
      nt(e, u, D[ee + 257]), u += O[ee + 257], ee > 7 && (Se(e, u, n[F] >>> 23 & 31), u += ut[ee]);
      var ie = n[F] & 31;
      nt(e, u, V[ie]), u += Q[ie], ie > 3 && (nt(e, u, n[F] >>> 5 & 8191), u += ft[ie]);
    } else
      nt(e, u, D[n[F]]), u += O[n[F]];
  return nt(e, u, D[256]), u + O[256];
}, ls = /* @__PURE__ */ new Oe([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Ce = /* @__PURE__ */ new k(0), cs = function(r, e, t, n, i, s) {
  var a = r.length, o = new k(n + a + 5 * (1 + Math.ceil(a / 7e3)) + i), l = o.subarray(n, o.length - i), c = 0;
  if (!e || a < 8)
    for (var u = 0; u <= a; u += 65535) {
      var f = u + 65535;
      f < a ? c = St(l, c, r.subarray(u, f)) : (l[u] = s, c = St(l, c, r.subarray(u, a)));
    }
  else {
    for (var h = ls[e - 1], d = h >>> 13, m = h & 8191, p = (1 << t) - 1, g = new ae(32768), A = new ae(p + 1), y = Math.ceil(t / 3), x = 2 * y, w = function(Xe) {
      return (r[Xe] ^ r[Xe + 1] << y ^ r[Xe + 2] << x) & p;
    }, T = new Oe(25e3), P = new ae(288), _ = new ae(32), F = 0, X = 0, u = 0, M = 0, z = 0, C = 0; u < a; ++u) {
      var b = w(u), R = u & 32767, N = A[b];
      if (g[R] = N, A[b] = R, z <= u) {
        var D = a - u;
        if ((F > 7e3 || M > 24576) && D > 423) {
          c = In(r, l, 0, T, P, _, X, M, C, u - C, c), M = F = X = 0, C = u;
          for (var O = 0; O < 286; ++O)
            P[O] = 0;
          for (var O = 0; O < 30; ++O)
            _[O] = 0;
        }
        var V = 2, Q = 0, te = m, q = R - N & 32767;
        if (D > 2 && b == w(u - q))
          for (var ne = Math.min(d, D) - 1, fe = Math.min(32767, u), ee = Math.min(258, D); q <= fe && --te && R != N; ) {
            if (r[u + V] == r[u + V - q]) {
              for (var ie = 0; ie < ee && r[u + ie] == r[u + ie - q]; ++ie)
                ;
              if (ie > V) {
                if (V = ie, Q = q, ie > ne)
                  break;
                for (var et = Math.min(q, ie - 2), v = 0, O = 0; O < et; ++O) {
                  var I = u - q + O + 32768 & 32767, se = g[I], re = I - se + 32768 & 32767;
                  re > v && (v = re, N = I);
                }
              }
            }
            R = N, N = g[R], q += R - N + 32768 & 32767;
          }
        if (Q) {
          T[M++] = 268435456 | Jt[V] << 18 | Ln[Q];
          var ge = Jt[V] & 31, we = Ln[Q] & 31;
          X += ut[ge] + ft[we], ++P[257 + ge], ++_[we], z = u + V, ++F;
        } else
          T[M++] = r[u], ++P[r[u]];
      }
    }
    c = In(r, l, s, T, P, _, X, M, C, u - C, c), !s && c & 7 && (c = St(l, c + 1, Ce));
  }
  return ve(o, 0, n + Ct(c) + i);
}, us = /* @__PURE__ */ function() {
  for (var r = new Oe(256), e = 0; e < 256; ++e) {
    for (var t = e, n = 9; --n; )
      t = (t & 1 && 3988292384) ^ t >>> 1;
    r[e] = t;
  }
  return r;
}(), ht = function() {
  var r = -1;
  return {
    p: function(e) {
      for (var t = r, n = 0; n < e.length; ++n)
        t = us[t & 255 ^ e[n]] ^ t >>> 8;
      r = t;
    },
    d: function() {
      return ~r;
    }
  };
}, zn = function() {
  var r = 1, e = 0;
  return {
    p: function(t) {
      for (var n = r, i = e, s = t.length, a = 0; a != s; ) {
        for (var o = Math.min(a + 2655, s); a < o; ++a)
          i += n += t[a];
        n = (n & 65535) + 15 * (n >> 16), i = (i & 65535) + 15 * (i >> 16);
      }
      r = n, e = i;
    },
    d: function() {
      return r %= 65521, e %= 65521, (r & 255) << 24 | r >>> 8 << 16 | (e & 255) << 8 | e >>> 8;
    }
  };
}, $e = function(r, e, t, n, i) {
  return cs(r, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5) : 12 + e.mem, t, n, !i);
}, Ut = function(r, e) {
  var t = {};
  for (var n in r)
    t[n] = r[n];
  for (var n in e)
    t[n] = e[n];
  return t;
}, mi = function(r, e, t) {
  for (var n = r(), i = r.toString(), s = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/ /g, "").split(","), a = 0; a < n.length; ++a) {
    var o = n[a], l = s[a];
    if (typeof o == "function") {
      e += ";" + l + "=";
      var c = o.toString();
      if (o.prototype)
        if (c.indexOf("[native code]") != -1) {
          var u = c.indexOf(" ", 8) + 1;
          e += c.slice(u, c.indexOf("(", u));
        } else {
          e += c;
          for (var f in o.prototype)
            e += ";" + l + ".prototype." + f + "=" + o.prototype[f].toString();
        }
      else
        e += c;
    } else
      t[l] = o;
  }
  return [e, t];
}, Ht = [], Na = function(r) {
  var e = [];
  for (var t in r)
    (r[t] instanceof k || r[t] instanceof ae || r[t] instanceof Oe) && e.push((r[t] = new r[t].constructor(r[t])).buffer);
  return e;
}, fs = function(r, e, t, n) {
  var i;
  if (!Ht[t]) {
    for (var s = "", a = {}, o = r.length - 1, l = 0; l < o; ++l)
      i = mi(r[l], s, a), s = i[0], a = i[1];
    Ht[t] = mi(r[o], s, a);
  }
  var c = Ut({}, Ht[t][1]);
  return Ra(Ht[t][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + e.toString() + "}", t, c, Na(c), n);
}, dt = function() {
  return [k, ae, Oe, ut, ft, Mt, Hn, is, as, os, It, ye, jt, xe, Vt, Ct, ve, Ot, xt, Ve, Gn];
}, pt = function() {
  return [k, ae, Oe, ut, ft, Mt, Jt, Ln, ss, Ue, rs, ot, It, ls, Ce, ye, Se, nt, Wt, $t, Mn, it, St, In, Ct, ve, cs, $e, Xt, Ve];
}, hs = function() {
  return [jn, Wn, Y, ht, us];
}, ds = function() {
  return [Vn, gs];
}, ps = function() {
  return [Zn, Y, zn];
}, ms = function() {
  return [xs];
}, Ve = function(r) {
  return postMessage(r, [r.buffer]);
}, Gn = function(r) {
  return r && r.size && new k(r.size);
}, mt = function(r, e, t, n, i, s) {
  var a = fs(t, n, i, function(o, l) {
    a.terminate(), s(o, l);
  });
  return a.postMessage([r, e], e.consume ? [r.buffer] : []), function() {
    a.terminate();
  };
}, Te = function(r) {
  return r.ondata = function(e, t) {
    return postMessage([e, t], [e.buffer]);
  }, function(e) {
    return r.push(e.data[0], e.data[1]);
  };
}, gt = function(r, e, t, n, i) {
  var s, a = fs(r, n, i, function(o, l) {
    o ? (a.terminate(), e.ondata.call(e, o)) : (l[1] && a.terminate(), e.ondata.call(e, o, l[0], l[1]));
  });
  a.postMessage(t), e.push = function(o, l) {
    if (s)
      throw "stream finished";
    if (!e.ondata)
      throw "no stream handler";
    a.postMessage([o, s = l], [o.buffer]);
  }, e.terminate = function() {
    a.terminate();
  };
}, ue = function(r, e) {
  return r[e] | r[e + 1] << 8;
}, $ = function(r, e) {
  return (r[e] | r[e + 1] << 8 | r[e + 2] << 16 | r[e + 3] << 24) >>> 0;
}, An = function(r, e) {
  return $(r, e) + $(r, e + 4) * 4294967296;
}, Y = function(r, e, t) {
  for (; t; ++e)
    r[e] = t, t >>>= 8;
}, jn = function(r, e) {
  var t = e.filename;
  if (r[0] = 31, r[1] = 139, r[2] = 8, r[8] = e.level < 2 ? 4 : e.level == 9 ? 2 : 0, r[9] = 3, e.mtime != 0 && Y(r, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)), t) {
    r[3] = 8;
    for (var n = 0; n <= t.length; ++n)
      r[n + 10] = t.charCodeAt(n);
  }
}, Vn = function(r) {
  if (r[0] != 31 || r[1] != 139 || r[2] != 8)
    throw "invalid gzip data";
  var e = r[3], t = 10;
  e & 4 && (t += r[10] | (r[11] << 8) + 2);
  for (var n = (e >> 3 & 1) + (e >> 4 & 1); n > 0; n -= !r[t++])
    ;
  return t + (e & 2);
}, gs = function(r) {
  var e = r.length;
  return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0;
}, Wn = function(r) {
  return 10 + (r.filename && r.filename.length + 1 || 0);
}, Zn = function(r, e) {
  var t = e.level, n = t == 0 ? 0 : t < 6 ? 1 : t == 9 ? 3 : 2;
  r[0] = 120, r[1] = n << 6 | (n ? 32 - 2 * n : 1);
}, xs = function(r) {
  if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31)
    throw "invalid zlib data";
  if (r[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function Kn(r, e) {
  return !e && typeof r == "function" && (e = r, r = {}), this.ondata = e, r;
}
var Me = /* @__PURE__ */ function() {
  function r(e, t) {
    !t && typeof e == "function" && (t = e, e = {}), this.ondata = t, this.o = e || {};
  }
  return r.prototype.p = function(e, t) {
    this.ondata($e(e, this.o, 0, 0, !t), t);
  }, r.prototype.push = function(e, t) {
    if (this.d)
      throw "stream finished";
    if (!this.ondata)
      throw "no stream handler";
    this.d = t, this.p(e, t || !1);
  }, r;
}(), As = /* @__PURE__ */ function() {
  function r(e, t) {
    gt([
      pt,
      function() {
        return [Te, Me];
      }
    ], this, Kn.call(this, e, t), function(n) {
      var i = new Me(n.data);
      onmessage = Te(i);
    }, 6);
  }
  return r;
}();
function ys(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  return mt(r, e, [
    pt
  ], function(n) {
    return Ve(Xt(n.data[0], n.data[1]));
  }, 0, t);
}
function Xt(r, e) {
  return $e(r, e || {}, 0, 0);
}
var me = /* @__PURE__ */ function() {
  function r(e) {
    this.s = {}, this.p = new k(0), this.ondata = e;
  }
  return r.prototype.e = function(e) {
    if (this.d)
      throw "stream finished";
    if (!this.ondata)
      throw "no stream handler";
    var t = this.p.length, n = new k(t + e.length);
    n.set(this.p), n.set(e, t), this.p = n;
  }, r.prototype.c = function(e) {
    this.d = this.s.i = e || !1;
    var t = this.s.b, n = Ot(this.p, this.o, this.s);
    this.ondata(ve(n, t, this.s.b), this.d), this.o = ve(n, this.s.b - 32768), this.s.b = this.o.length, this.p = ve(this.p, this.s.p / 8 | 0), this.s.p &= 7;
  }, r.prototype.push = function(e, t) {
    this.e(e), this.c(t);
  }, r;
}(), qn = /* @__PURE__ */ function() {
  function r(e) {
    this.ondata = e, gt([
      dt,
      function() {
        return [Te, me];
      }
    ], this, 0, function() {
      var t = new me();
      onmessage = Te(t);
    }, 7);
  }
  return r;
}();
function Jn(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  return mt(r, e, [
    dt
  ], function(n) {
    return Ve(xt(n.data[0], Gn(n.data[1])));
  }, 1, t);
}
function xt(r, e) {
  return Ot(r, e);
}
var en = /* @__PURE__ */ function() {
  function r(e, t) {
    this.c = ht(), this.l = 0, this.v = 1, Me.call(this, e, t);
  }
  return r.prototype.push = function(e, t) {
    Me.prototype.push.call(this, e, t);
  }, r.prototype.p = function(e, t) {
    this.c.p(e), this.l += e.length;
    var n = $e(e, this.o, this.v && Wn(this.o), t && 8, !t);
    this.v && (jn(n, this.o), this.v = 0), t && (Y(n, n.length - 8, this.c.d()), Y(n, n.length - 4, this.l)), this.ondata(n, t);
  }, r;
}(), gi = /* @__PURE__ */ function() {
  function r(e, t) {
    gt([
      pt,
      hs,
      function() {
        return [Te, Me, en];
      }
    ], this, Kn.call(this, e, t), function(n) {
      var i = new en(n.data);
      onmessage = Te(i);
    }, 8);
  }
  return r;
}();
function xi(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  return mt(r, e, [
    pt,
    hs,
    function() {
      return [tn];
    }
  ], function(n) {
    return Ve(tn(n.data[0], n.data[1]));
  }, 2, t);
}
function tn(r, e) {
  e || (e = {});
  var t = ht(), n = r.length;
  t.p(r);
  var i = $e(r, e, Wn(e), 8), s = i.length;
  return jn(i, e), Y(i, s - 8, t.d()), Y(i, s - 4, n), i;
}
var nn = /* @__PURE__ */ function() {
  function r(e) {
    this.v = 1, me.call(this, e);
  }
  return r.prototype.push = function(e, t) {
    if (me.prototype.e.call(this, e), this.v) {
      var n = this.p.length > 3 ? Vn(this.p) : 4;
      if (n >= this.p.length && !t)
        return;
      this.p = this.p.subarray(n), this.v = 0;
    }
    if (t) {
      if (this.p.length < 8)
        throw "invalid gzip stream";
      this.p = this.p.subarray(0, -8);
    }
    me.prototype.c.call(this, t);
  }, r;
}(), vs = /* @__PURE__ */ function() {
  function r(e) {
    this.ondata = e, gt([
      dt,
      ds,
      function() {
        return [Te, me, nn];
      }
    ], this, 0, function() {
      var t = new nn();
      onmessage = Te(t);
    }, 9);
  }
  return r;
}();
function Ts(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  return mt(r, e, [
    dt,
    ds,
    function() {
      return [sn];
    }
  ], function(n) {
    return Ve(sn(n.data[0]));
  }, 3, t);
}
function sn(r, e) {
  return Ot(r.subarray(Vn(r), -8), e || new k(gs(r)));
}
var bn = /* @__PURE__ */ function() {
  function r(e, t) {
    this.c = zn(), this.v = 1, Me.call(this, e, t);
  }
  return r.prototype.push = function(e, t) {
    Me.prototype.push.call(this, e, t);
  }, r.prototype.p = function(e, t) {
    this.c.p(e);
    var n = $e(e, this.o, this.v && 2, t && 4, !t);
    this.v && (Zn(n, this.o), this.v = 0), t && Y(n, n.length - 4, this.c.d()), this.ondata(n, t);
  }, r;
}(), Ca = /* @__PURE__ */ function() {
  function r(e, t) {
    gt([
      pt,
      ps,
      function() {
        return [Te, Me, bn];
      }
    ], this, Kn.call(this, e, t), function(n) {
      var i = new bn(n.data);
      onmessage = Te(i);
    }, 10);
  }
  return r;
}();
function Oa(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  return mt(r, e, [
    pt,
    ps,
    function() {
      return [Rn];
    }
  ], function(n) {
    return Ve(Rn(n.data[0], n.data[1]));
  }, 4, t);
}
function Rn(r, e) {
  e || (e = {});
  var t = zn();
  t.p(r);
  var n = $e(r, e, 2, 4);
  return Zn(n, e), Y(n, n.length - 4, t.d()), n;
}
var an = /* @__PURE__ */ function() {
  function r(e) {
    this.v = 1, me.call(this, e);
  }
  return r.prototype.push = function(e, t) {
    if (me.prototype.e.call(this, e), this.v) {
      if (this.p.length < 2 && !t)
        return;
      this.p = this.p.subarray(2), this.v = 0;
    }
    if (t) {
      if (this.p.length < 4)
        throw "invalid zlib stream";
      this.p = this.p.subarray(0, -4);
    }
    me.prototype.c.call(this, t);
  }, r;
}(), ws = /* @__PURE__ */ function() {
  function r(e) {
    this.ondata = e, gt([
      dt,
      ms,
      function() {
        return [Te, me, an];
      }
    ], this, 0, function() {
      var t = new an();
      onmessage = Te(t);
    }, 11);
  }
  return r;
}();
function Fs(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  return mt(r, e, [
    dt,
    ms,
    function() {
      return [bt];
    }
  ], function(n) {
    return Ve(bt(n.data[0], Gn(n.data[1])));
  }, 5, t);
}
function bt(r, e) {
  return Ot((xs(r), r.subarray(2, -4)), e);
}
var _s = /* @__PURE__ */ function() {
  function r(e) {
    this.G = nn, this.I = me, this.Z = an, this.ondata = e;
  }
  return r.prototype.push = function(e, t) {
    if (!this.ondata)
      throw "no stream handler";
    if (this.s)
      this.s.push(e, t);
    else {
      if (this.p && this.p.length) {
        var n = new k(this.p.length + e.length);
        n.set(this.p), n.set(e, this.p.length);
      } else
        this.p = e;
      if (this.p.length > 2) {
        var i = this, s = function() {
          i.ondata.apply(i, arguments);
        };
        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(s) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(s) : new this.Z(s), this.s.push(this.p, t), this.p = null;
      }
    }
  }, r;
}(), Ua = /* @__PURE__ */ function() {
  function r(e) {
    this.G = vs, this.I = qn, this.Z = ws, this.ondata = e;
  }
  return r.prototype.push = function(e, t) {
    _s.prototype.push.call(this, e, t);
  }, r;
}();
function Xa(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  return r[0] == 31 && r[1] == 139 && r[2] == 8 ? Ts(r, e, t) : (r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31 ? Jn(r, e, t) : Fs(r, e, t);
}
function Da(r, e) {
  return r[0] == 31 && r[1] == 139 && r[2] == 8 ? sn(r, e) : (r[0] & 15) != 8 || r[0] >> 4 > 7 || (r[0] << 8 | r[1]) % 31 ? xt(r, e) : bt(r, e);
}
var $n = function(r, e, t, n) {
  for (var i in r) {
    var s = r[i], a = e + i;
    s instanceof k ? t[a] = [s, n] : Array.isArray(s) ? t[a] = [s[0], Ut(n, s[1])] : $n(s, a + "/", t, n);
  }
}, Ai = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), Nn = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Ps = 0;
try {
  Nn.decode(Ce, { stream: !0 }), Ps = 1;
} catch {
}
var Ss = function(r) {
  for (var e = "", t = 0; ; ) {
    var n = r[t++], i = (n > 127) + (n > 223) + (n > 239);
    if (t + i > r.length)
      return [e, ve(r, t - 1)];
    i ? i == 3 ? (n = ((n & 15) << 18 | (r[t++] & 63) << 12 | (r[t++] & 63) << 6 | r[t++] & 63) - 65536, e += String.fromCharCode(55296 | n >> 10, 56320 | n & 1023)) : i & 1 ? e += String.fromCharCode((n & 31) << 6 | r[t++] & 63) : e += String.fromCharCode((n & 15) << 12 | (r[t++] & 63) << 6 | r[t++] & 63) : e += String.fromCharCode(n);
  }
}, ka = /* @__PURE__ */ function() {
  function r(e) {
    this.ondata = e, Ps ? this.t = new TextDecoder() : this.p = Ce;
  }
  return r.prototype.push = function(e, t) {
    if (!this.ondata)
      throw "no callback";
    if (t = !!t, this.t) {
      if (this.ondata(this.t.decode(e, { stream: !0 }), t), t) {
        if (this.t.decode().length)
          throw "invalid utf-8 data";
        this.t = null;
      }
      return;
    }
    if (!this.p)
      throw "stream finished";
    var n = new k(this.p.length + e.length);
    n.set(this.p), n.set(e, this.p.length);
    var i = Ss(n), s = i[0], a = i[1];
    if (t) {
      if (a.length)
        throw "invalid utf-8 data";
      this.p = null;
    } else
      this.p = a;
    this.ondata(s, t);
  }, r;
}(), Ba = /* @__PURE__ */ function() {
  function r(e) {
    this.ondata = e;
  }
  return r.prototype.push = function(e, t) {
    if (!this.ondata)
      throw "no callback";
    if (this.d)
      throw "stream finished";
    this.ondata(je(e), this.d = t || !1);
  }, r;
}();
function je(r, e) {
  if (e) {
    for (var t = new k(r.length), n = 0; n < r.length; ++n)
      t[n] = r.charCodeAt(n);
    return t;
  }
  if (Ai)
    return Ai.encode(r);
  for (var i = r.length, s = new k(r.length + (r.length >> 1)), a = 0, o = function(u) {
    s[a++] = u;
  }, n = 0; n < i; ++n) {
    if (a + 5 > s.length) {
      var l = new k(a + 8 + (i - n << 1));
      l.set(s), s = l;
    }
    var c = r.charCodeAt(n);
    c < 128 || e ? o(c) : c < 2048 ? (o(192 | c >> 6), o(128 | c & 63)) : c > 55295 && c < 57344 ? (c = 65536 + (c & 1047552) | r.charCodeAt(++n) & 1023, o(240 | c >> 18), o(128 | c >> 12 & 63), o(128 | c >> 6 & 63), o(128 | c & 63)) : (o(224 | c >> 12), o(128 | c >> 6 & 63), o(128 | c & 63));
  }
  return ve(s, 0, a);
}
function ei(r, e) {
  if (e) {
    for (var t = "", n = 0; n < r.length; n += 16384)
      t += String.fromCharCode.apply(null, r.subarray(n, n + 16384));
    return t;
  } else {
    if (Nn)
      return Nn.decode(r);
    var i = Ss(r), s = i[0], a = i[1];
    if (a.length)
      throw "invalid utf-8 data";
    return s;
  }
}
var Es = function(r) {
  return r == 1 ? 3 : r < 6 ? 2 : r == 9 ? 1 : 0;
}, Ls = function(r, e) {
  return e + 30 + ue(r, e + 26) + ue(r, e + 28);
}, Ms = function(r, e, t) {
  var n = ue(r, e + 28), i = ei(r.subarray(e + 46, e + 46 + n), !(ue(r, e + 8) & 2048)), s = e + 46 + n, a = $(r, e + 20), o = t && a == 4294967295 ? Is(r, s) : [a, $(r, e + 24), $(r, e + 42)], l = o[0], c = o[1], u = o[2];
  return [ue(r, e + 10), l, c, i, s + ue(r, e + 30) + ue(r, e + 32), u];
}, Is = function(r, e) {
  for (; ue(r, e) != 1; e += 4 + ue(r, e + 2))
    ;
  return [An(r, e + 12), An(r, e + 4), An(r, e + 20)];
}, Ge = function(r) {
  var e = 0;
  if (r)
    for (var t in r) {
      var n = r[t].length;
      if (n > 65535)
        throw "extra field too long";
      e += n + 4;
    }
  return e;
}, lt = function(r, e, t, n, i, s, a, o) {
  var l = n.length, c = t.extra, u = o && o.length, f = Ge(c);
  Y(r, e, a != null ? 33639248 : 67324752), e += 4, a != null && (r[e++] = 20, r[e++] = t.os), r[e] = 20, e += 2, r[e++] = t.flag << 1 | (s == null && 8), r[e++] = i && 8, r[e++] = t.compression & 255, r[e++] = t.compression >> 8;
  var h = new Date(t.mtime == null ? Date.now() : t.mtime), d = h.getFullYear() - 1980;
  if (d < 0 || d > 119)
    throw "date not in range 1980-2099";
  if (Y(r, e, d << 25 | h.getMonth() + 1 << 21 | h.getDate() << 16 | h.getHours() << 11 | h.getMinutes() << 5 | h.getSeconds() >>> 1), e += 4, s != null && (Y(r, e, t.crc), Y(r, e + 4, s), Y(r, e + 8, t.size)), Y(r, e + 12, l), Y(r, e + 14, f), e += 16, a != null && (Y(r, e, u), Y(r, e + 6, t.attrs), Y(r, e + 10, a), e += 14), r.set(n, e), e += l, f)
    for (var m in c) {
      var p = c[m], g = p.length;
      Y(r, e, +m), Y(r, e + 2, g), r.set(p, e + 4), e += 4 + g;
    }
  return u && (r.set(o, e), e += u), e;
}, ti = function(r, e, t, n, i) {
  Y(r, e, 101010256), Y(r, e + 8, t), Y(r, e + 10, t), Y(r, e + 12, n), Y(r, e + 16, i);
}, Rt = /* @__PURE__ */ function() {
  function r(e) {
    this.filename = e, this.c = ht(), this.size = 0, this.compression = 0;
  }
  return r.prototype.process = function(e, t) {
    this.ondata(null, e, t);
  }, r.prototype.push = function(e, t) {
    if (!this.ondata)
      throw "no callback - add to ZIP archive before pushing";
    this.c.p(e), this.size += e.length, t && (this.crc = this.c.d()), this.process(e, t || !1);
  }, r;
}(), Qa = /* @__PURE__ */ function() {
  function r(e, t) {
    var n = this;
    t || (t = {}), Rt.call(this, e), this.d = new Me(t, function(i, s) {
      n.ondata(null, i, s);
    }), this.compression = 8, this.flag = Es(t.level);
  }
  return r.prototype.process = function(e, t) {
    try {
      this.d.push(e, t);
    } catch (n) {
      this.ondata(n, null, t);
    }
  }, r.prototype.push = function(e, t) {
    Rt.prototype.push.call(this, e, t);
  }, r;
}(), Ya = /* @__PURE__ */ function() {
  function r(e, t) {
    var n = this;
    t || (t = {}), Rt.call(this, e), this.d = new As(t, function(i, s, a) {
      n.ondata(i, s, a);
    }), this.compression = 8, this.flag = Es(t.level), this.terminate = this.d.terminate;
  }
  return r.prototype.process = function(e, t) {
    this.d.push(e, t);
  }, r.prototype.push = function(e, t) {
    Rt.prototype.push.call(this, e, t);
  }, r;
}(), Ha = /* @__PURE__ */ function() {
  function r(e) {
    this.ondata = e, this.u = [], this.d = 1;
  }
  return r.prototype.add = function(e) {
    var t = this;
    if (this.d & 2)
      throw "stream finished";
    var n = je(e.filename), i = n.length, s = e.comment, a = s && je(s), o = i != e.filename.length || a && s.length != a.length, l = i + Ge(e.extra) + 30;
    if (i > 65535)
      throw "filename too long";
    var c = new k(l);
    lt(c, 0, e, n, o);
    var u = [c], f = function() {
      for (var g = 0, A = u; g < A.length; g++) {
        var y = A[g];
        t.ondata(null, y, !1);
      }
      u = [];
    }, h = this.d;
    this.d = 0;
    var d = this.u.length, m = Ut(e, {
      f: n,
      u: o,
      o: a,
      t: function() {
        e.terminate && e.terminate();
      },
      r: function() {
        if (f(), h) {
          var g = t.u[d + 1];
          g ? g.r() : t.d = 1;
        }
        h = 1;
      }
    }), p = 0;
    e.ondata = function(g, A, y) {
      if (g)
        t.ondata(g, A, y), t.terminate();
      else if (p += A.length, u.push(A), y) {
        var x = new k(16);
        Y(x, 0, 134695760), Y(x, 4, e.crc), Y(x, 8, p), Y(x, 12, e.size), u.push(x), m.c = p, m.b = l + p + 16, m.crc = e.crc, m.size = e.size, h && m.r(), h = 1;
      } else
        h && f();
    }, this.u.push(m);
  }, r.prototype.end = function() {
    var e = this;
    if (this.d & 2)
      throw this.d & 1 ? "stream finishing" : "stream finished";
    this.d ? this.e() : this.u.push({
      r: function() {
        e.d & 1 && (e.u.splice(-1, 1), e.e());
      },
      t: function() {
      }
    }), this.d = 3;
  }, r.prototype.e = function() {
    for (var e = 0, t = 0, n = 0, i = 0, s = this.u; i < s.length; i++) {
      var a = s[i];
      n += 46 + a.f.length + Ge(a.extra) + (a.o ? a.o.length : 0);
    }
    for (var o = new k(n + 22), l = 0, c = this.u; l < c.length; l++) {
      var a = c[l];
      lt(o, e, a, a.f, a.u, a.c, t, a.o), e += 46 + a.f.length + Ge(a.extra) + (a.o ? a.o.length : 0), t += a.b;
    }
    ti(o, e, this.u.length, n, t), this.ondata(null, o, !0), this.d = 2;
  }, r.prototype.terminate = function() {
    for (var e = 0, t = this.u; e < t.length; e++) {
      var n = t[e];
      n.t();
    }
    this.d = 2;
  }, r;
}();
function za(r, e, t) {
  if (t || (t = e, e = {}), typeof t != "function")
    throw "no callback";
  var n = {};
  $n(r, "", n, e);
  var i = Object.keys(n), s = i.length, a = 0, o = 0, l = s, c = new Array(s), u = [], f = function() {
    for (var p = 0; p < u.length; ++p)
      u[p]();
  }, h = function() {
    var p = new k(o + 22), g = a, A = o - a;
    o = 0;
    for (var y = 0; y < l; ++y) {
      var x = c[y];
      try {
        var w = x.c.length;
        lt(p, o, x, x.f, x.u, w);
        var T = 30 + x.f.length + Ge(x.extra), P = o + T;
        p.set(x.c, P), lt(p, a, x, x.f, x.u, w, o, x.m), a += 16 + T + (x.m ? x.m.length : 0), o = P + w;
      } catch (_) {
        return t(_, null);
      }
    }
    ti(p, a, c.length, A, g), t(null, p);
  };
  s || h();
  for (var d = function(p) {
    var g = i[p], A = n[g], y = A[0], x = A[1], w = ht(), T = y.length;
    w.p(y);
    var P = je(g), _ = P.length, F = x.comment, X = F && je(F), M = X && X.length, z = Ge(x.extra), C = x.level == 0 ? 0 : 8, b = function(R, N) {
      if (R)
        f(), t(R, null);
      else {
        var D = N.length;
        c[p] = Ut(x, {
          size: T,
          crc: w.d(),
          c: N,
          f: P,
          m: X,
          u: _ != g.length || X && F.length != M,
          compression: C
        }), a += 30 + _ + z + D, o += 76 + 2 * (_ + z) + (M || 0) + D, --s || h();
      }
    };
    if (_ > 65535 && b("filename too long", null), !C)
      b(null, y);
    else if (T < 16e4)
      try {
        b(null, Xt(y, x));
      } catch (R) {
        b(R, null);
      }
    else
      u.push(ys(y, x, b));
  }, m = 0; m < l; ++m)
    d(m);
  return f;
}
function Ga(r, e) {
  e || (e = {});
  var t = {}, n = [];
  $n(r, "", t, e);
  var i = 0, s = 0;
  for (var a in t) {
    var o = t[a], l = o[0], c = o[1], u = c.level == 0 ? 0 : 8, f = je(a), h = f.length, d = c.comment, m = d && je(d), p = m && m.length, g = Ge(c.extra);
    if (h > 65535)
      throw "filename too long";
    var A = u ? Xt(l, c) : l, y = A.length, x = ht();
    x.p(l), n.push(Ut(c, {
      size: l.length,
      crc: x.d(),
      c: A,
      f,
      m,
      u: h != a.length || m && d.length != p,
      o: i,
      compression: u
    })), i += 30 + h + g + y, s += 76 + 2 * (h + g) + (p || 0) + y;
  }
  for (var w = new k(s + 22), T = i, P = s - i, _ = 0; _ < n.length; ++_) {
    var f = n[_];
    lt(w, f.o, f, f.f, f.u, f.c.length);
    var F = 30 + f.f.length + Ge(f.extra);
    w.set(f.c, f.o + F), lt(w, i, f, f.f, f.u, f.c.length, f.o, f.m), i += 16 + F + (f.m ? f.m.length : 0);
  }
  return ti(w, i, n.length, P, T), w;
}
var bs = /* @__PURE__ */ function() {
  function r() {
  }
  return r.prototype.push = function(e, t) {
    this.ondata(null, e, t);
  }, r.compression = 0, r;
}(), ja = /* @__PURE__ */ function() {
  function r() {
    var e = this;
    this.i = new me(function(t, n) {
      e.ondata(null, t, n);
    });
  }
  return r.prototype.push = function(e, t) {
    try {
      this.i.push(e, t);
    } catch (n) {
      this.ondata(n, e, t);
    }
  }, r.compression = 8, r;
}(), Va = /* @__PURE__ */ function() {
  function r(e, t) {
    var n = this;
    t < 32e4 ? this.i = new me(function(i, s) {
      n.ondata(null, i, s);
    }) : (this.i = new qn(function(i, s, a) {
      n.ondata(i, s, a);
    }), this.terminate = this.i.terminate);
  }
  return r.prototype.push = function(e, t) {
    this.i.terminate && (e = ve(e, 0)), this.i.push(e, t);
  }, r.compression = 8, r;
}(), Wa = /* @__PURE__ */ function() {
  function r(e) {
    this.onfile = e, this.k = [], this.o = {
      0: bs
    }, this.p = Ce;
  }
  return r.prototype.push = function(e, t) {
    var n = this;
    if (!this.onfile)
      throw "no callback";
    if (!this.p)
      throw "stream finished";
    if (this.c > 0) {
      var i = Math.min(this.c, e.length), s = e.subarray(0, i);
      if (this.c -= i, this.d ? this.d.push(s, !this.c) : this.k[0].push(s), e = e.subarray(i), e.length)
        return this.push(e, t);
    } else {
      var a = 0, o = 0, l = void 0, c = void 0;
      this.p.length ? e.length ? (c = new k(this.p.length + e.length), c.set(this.p), c.set(e, this.p.length)) : c = this.p : c = e;
      for (var u = c.length, f = this.c, h = f && this.d, d = function() {
        var A, y = $(c, o);
        if (y == 67324752) {
          a = 1, l = o, m.d = null, m.c = 0;
          var x = ue(c, o + 6), w = ue(c, o + 8), T = x & 2048, P = x & 8, _ = ue(c, o + 26), F = ue(c, o + 28);
          if (u > o + 30 + _ + F) {
            var X = [];
            m.k.unshift(X), a = 2;
            var M = $(c, o + 18), z = $(c, o + 22), C = ei(c.subarray(o + 30, o += 30 + _), !T);
            M == 4294967295 ? (A = P ? [-2] : Is(c, o), M = A[0], z = A[1]) : P && (M = -1), o += F, m.c = M;
            var b, R = {
              name: C,
              compression: w,
              start: function() {
                if (!R.ondata)
                  throw "no callback";
                if (!M)
                  R.ondata(null, Ce, !0);
                else {
                  var N = n.o[w];
                  if (!N)
                    throw "unknown compression type " + w;
                  b = M < 0 ? new N(C) : new N(C, M, z), b.ondata = function(Q, te, q) {
                    R.ondata(Q, te, q);
                  };
                  for (var D = 0, O = X; D < O.length; D++) {
                    var V = O[D];
                    b.push(V, !1);
                  }
                  n.k[0] == X && n.c ? n.d = b : b.push(Ce, !0);
                }
              },
              terminate: function() {
                b && b.terminate && b.terminate();
              }
            };
            M >= 0 && (R.size = M, R.originalSize = z), m.onfile(R);
          }
          return "break";
        } else if (f) {
          if (y == 134695760)
            return l = o += 12 + (f == -2 && 8), a = 3, m.c = 0, "break";
          if (y == 33639248)
            return l = o -= 4, a = 3, m.c = 0, "break";
        }
      }, m = this; o < u - 4; ++o) {
        var p = d();
        if (p === "break")
          break;
      }
      if (this.p = Ce, f < 0) {
        var g = a ? c.subarray(0, l - 12 - (f == -2 && 8) - ($(c, l - 16) == 134695760 && 4)) : c.subarray(0, o);
        h ? h.push(g, !!a) : this.k[+(a == 2)].push(g);
      }
      if (a & 2)
        return this.push(c.subarray(o), t);
      this.p = c.subarray(o);
    }
    if (t) {
      if (this.c)
        throw "invalid zip file";
      this.p = null;
    }
  }, r.prototype.register = function(e) {
    this.o[e.compression] = e;
  }, r;
}();
function Za(r, e) {
  if (typeof e != "function")
    throw "no callback";
  for (var t = [], n = function() {
    for (var h = 0; h < t.length; ++h)
      t[h]();
  }, i = {}, s = r.length - 22; $(r, s) != 101010256; --s)
    if (!s || r.length - s > 65558) {
      e("invalid zip file", null);
      return;
    }
  var a = ue(r, s + 8);
  a || e(null, {});
  var o = a, l = $(r, s + 16), c = l == 4294967295;
  if (c) {
    if (s = $(r, s - 12), $(r, s) != 101075792) {
      e("invalid zip file", null);
      return;
    }
    o = a = $(r, s + 32), l = $(r, s + 48);
  }
  for (var u = function(h) {
    var d = Ms(r, l, c), m = d[0], p = d[1], g = d[2], A = d[3], y = d[4], x = d[5], w = Ls(r, x);
    l = y;
    var T = function(_, F) {
      _ ? (n(), e(_, null)) : (i[A] = F, --a || e(null, i));
    };
    if (!m)
      T(null, ve(r, w, w + p));
    else if (m == 8) {
      var P = r.subarray(w, w + p);
      if (p < 32e4)
        try {
          T(null, xt(P, new k(g)));
        } catch (_) {
          T(_, null);
        }
      else
        t.push(Jn(P, { size: g }, T));
    } else
      T("unknown compression type " + m, null);
  }, f = 0; f < o; ++f)
    u();
  return n;
}
function Ka(r) {
  for (var e = {}, t = r.length - 22; $(r, t) != 101010256; --t)
    if (!t || r.length - t > 65558)
      throw "invalid zip file";
  var n = ue(r, t + 8);
  if (!n)
    return {};
  var i = $(r, t + 16), s = i == 4294967295;
  if (s) {
    if (t = $(r, t - 12), $(r, t) != 101075792)
      throw "invalid zip file";
    n = $(r, t + 32), i = $(r, t + 48);
  }
  for (var a = 0; a < n; ++a) {
    var o = Ms(r, i, s), l = o[0], c = o[1], u = o[2], f = o[3], h = o[4], d = o[5], m = Ls(r, d);
    if (i = h, !l)
      e[f] = ve(r, m, m + c);
    else if (l == 8)
      e[f] = xt(r.subarray(m, m + c), new k(u));
    else
      throw "unknown compression type " + l;
  }
  return e;
}
const qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AsyncCompress: gi,
  AsyncDecompress: Ua,
  AsyncDeflate: As,
  AsyncGunzip: vs,
  AsyncGzip: gi,
  AsyncInflate: qn,
  AsyncUnzipInflate: Va,
  AsyncUnzlib: ws,
  AsyncZipDeflate: Ya,
  AsyncZlib: Ca,
  Compress: en,
  DecodeUTF8: ka,
  Decompress: _s,
  Deflate: Me,
  EncodeUTF8: Ba,
  Gunzip: nn,
  Gzip: en,
  Inflate: me,
  Unzip: Wa,
  UnzipInflate: ja,
  UnzipPassThrough: bs,
  Unzlib: an,
  Zip: Ha,
  ZipDeflate: Qa,
  ZipPassThrough: Rt,
  Zlib: bn,
  compress: xi,
  compressSync: tn,
  decompress: Xa,
  decompressSync: Da,
  deflate: ys,
  deflateSync: Xt,
  gunzip: Ts,
  gunzipSync: sn,
  gzip: xi,
  gzipSync: tn,
  inflate: Jn,
  inflateSync: xt,
  strFromU8: ei,
  strToU8: je,
  unzip: Za,
  unzipSync: Ka,
  unzlib: Fs,
  unzlibSync: bt,
  zip: za,
  zipSync: Ga,
  zlib: Oa,
  zlibSync: Rn
}, Symbol.toStringTag, { value: "Module" }));
function Rs(r, e, t) {
  const n = t.length - r - 1;
  if (e >= t[n])
    return n - 1;
  if (e <= t[r])
    return r;
  let i = r, s = n, a = Math.floor((i + s) / 2);
  for (; e < t[a] || e >= t[a + 1]; )
    e < t[a] ? s = a : i = a, a = Math.floor((i + s) / 2);
  return a;
}
function Ja(r, e, t, n) {
  const i = [], s = [], a = [];
  i[0] = 1;
  for (let o = 1; o <= t; ++o) {
    s[o] = e - n[r + 1 - o], a[o] = n[r + o] - e;
    let l = 0;
    for (let c = 0; c < o; ++c) {
      const u = a[c + 1], f = s[o - c], h = i[c] / (u + f);
      i[c] = l + u * h, l = f * h;
    }
    i[o] = l;
  }
  return i;
}
function $a(r, e, t, n) {
  const i = Rs(r, n, e), s = Ja(i, n, r, e), a = new on(0, 0, 0, 0);
  for (let o = 0; o <= r; ++o) {
    const l = t[i - r + o], c = s[o], u = l.w * c;
    a.x += l.x * u, a.y += l.y * u, a.z += l.z * u, a.w += l.w * c;
  }
  return a;
}
function er(r, e, t, n, i) {
  const s = [];
  for (let f = 0; f <= t; ++f)
    s[f] = 0;
  const a = [];
  for (let f = 0; f <= n; ++f)
    a[f] = s.slice(0);
  const o = [];
  for (let f = 0; f <= t; ++f)
    o[f] = s.slice(0);
  o[0][0] = 1;
  const l = s.slice(0), c = s.slice(0);
  for (let f = 1; f <= t; ++f) {
    l[f] = e - i[r + 1 - f], c[f] = i[r + f] - e;
    let h = 0;
    for (let d = 0; d < f; ++d) {
      const m = c[d + 1], p = l[f - d];
      o[f][d] = m + p;
      const g = o[d][f - 1] / o[f][d];
      o[d][f] = h + m * g, h = p * g;
    }
    o[f][f] = h;
  }
  for (let f = 0; f <= t; ++f)
    a[0][f] = o[f][t];
  for (let f = 0; f <= t; ++f) {
    let h = 0, d = 1;
    const m = [];
    for (let p = 0; p <= t; ++p)
      m[p] = s.slice(0);
    m[0][0] = 1;
    for (let p = 1; p <= n; ++p) {
      let g = 0;
      const A = f - p, y = t - p;
      f >= p && (m[d][0] = m[h][0] / o[y + 1][A], g = m[d][0] * o[A][y]);
      const x = A >= -1 ? 1 : -A, w = f - 1 <= y ? p - 1 : t - f;
      for (let P = x; P <= w; ++P)
        m[d][P] = (m[h][P] - m[h][P - 1]) / o[y + 1][A + P], g += m[d][P] * o[A + P][y];
      f <= y && (m[d][p] = -m[h][p - 1] / o[y + 1][f], g += m[d][p] * o[f][y]), a[p][f] = g;
      const T = h;
      h = d, d = T;
    }
  }
  let u = t;
  for (let f = 1; f <= n; ++f) {
    for (let h = 0; h <= t; ++h)
      a[f][h] *= u;
    u *= t - f;
  }
  return a;
}
function tr(r, e, t, n, i) {
  const s = i < r ? i : r, a = [], o = Rs(r, n, e), l = er(o, n, r, s, e), c = [];
  for (let u = 0; u < t.length; ++u) {
    const f = t[u].clone(), h = f.w;
    f.x *= h, f.y *= h, f.z *= h, c[u] = f;
  }
  for (let u = 0; u <= s; ++u) {
    const f = c[o - r].clone().multiplyScalar(l[u][0]);
    for (let h = 1; h <= r; ++h)
      f.add(c[o - r + h].clone().multiplyScalar(l[u][h]));
    a[u] = f;
  }
  for (let u = s + 1; u <= i + 1; ++u)
    a[u] = new on(0, 0, 0);
  return a;
}
function nr(r, e) {
  let t = 1;
  for (let i = 2; i <= r; ++i)
    t *= i;
  let n = 1;
  for (let i = 2; i <= e; ++i)
    n *= i;
  for (let i = 2; i <= r - e; ++i)
    n *= i;
  return t / n;
}
function ir(r) {
  const e = r.length, t = [], n = [];
  for (let s = 0; s < e; ++s) {
    const a = r[s];
    t[s] = new E(a.x, a.y, a.z), n[s] = a.w;
  }
  const i = [];
  for (let s = 0; s < e; ++s) {
    const a = t[s].clone();
    for (let o = 1; o <= s; ++o)
      a.sub(i[s - o].clone().multiplyScalar(nr(s, o) * n[o]));
    i[s] = a.divideScalar(n[0]);
  }
  return i;
}
function sr(r, e, t, n, i) {
  const s = tr(r, e, t, n, i);
  return ir(s);
}
class yi extends Ci {
  constructor(e, t, n, i, s) {
    super(), this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = i || 0, this.endKnot = s || this.knots.length - 1;
    for (let a = 0; a < n.length; ++a) {
      const o = n[a];
      this.controlPoints[a] = new on(o.x, o.y, o.z, o.w);
    }
  }
  getPoint(e, t = new E()) {
    const n = t, i = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]), s = $a(this.degree, this.knots, this.controlPoints, i);
    return s.w !== 1 && s.divideScalar(s.w), n.set(s.x, s.y, s.z);
  }
  getTangent(e, t = new E()) {
    const n = t, i = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]), s = sr(this.degree, this.knots, this.controlPoints, i, 1);
    return n.copy(s[1]).normalize(), n;
  }
}
let U, J, de;
class vi extends Oi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = s.path === "" ? Le.extractUrlBase(e) : s.path, o = new kn(this.manager);
    o.setPath(s.path), o.setResponseType("arraybuffer"), o.setRequestHeader(s.requestHeader), o.setWithCredentials(s.withCredentials), o.load(e, function(l) {
      try {
        t(s.parse(l, a));
      } catch (c) {
        i ? i(c) : console.error(c), s.manager.itemError(e);
      }
    }, n, i);
  }
  parse(e, t) {
    if (ur(e))
      U = new cr().parse(e);
    else {
      const i = Us(e);
      if (!fr(i))
        throw new Error("THREE.FBXLoader: Unknown format.");
      if (wi(i) < 7e3)
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + wi(i));
      U = new lr().parse(i);
    }
    const n = new Ui(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
    return new ar(n, this.manager).parse(U);
  }
}
class ar {
  constructor(e, t) {
    this.textureLoader = e, this.manager = t;
  }
  parse() {
    J = this.parseConnections();
    const e = this.parseImages(), t = this.parseTextures(e), n = this.parseMaterials(t), i = this.parseDeformers(), s = new rr().parse(i);
    return this.parseScene(i, s, n), de;
  }
  // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
  // and details the connection type
  parseConnections() {
    const e = /* @__PURE__ */ new Map();
    return "Connections" in U && U.Connections.connections.forEach(function(n) {
      const i = n[0], s = n[1], a = n[2];
      e.has(i) || e.set(i, {
        parents: [],
        children: []
      });
      const o = { ID: s, relationship: a };
      e.get(i).parents.push(o), e.has(s) || e.set(s, {
        parents: [],
        children: []
      });
      const l = { ID: i, relationship: a };
      e.get(s).children.push(l);
    }), e;
  }
  // Parse FBXTree.Objects.Video for embedded image data
  // These images are connected to textures in FBXTree.Objects.Textures
  // via FBXTree.Connections.
  parseImages() {
    const e = {}, t = {};
    if ("Video" in U.Objects) {
      const n = U.Objects.Video;
      for (const i in n) {
        const s = n[i], a = parseInt(i);
        if (e[a] = s.RelativeFilename || s.Filename, "Content" in s) {
          const o = s.Content instanceof ArrayBuffer && s.Content.byteLength > 0, l = typeof s.Content == "string" && s.Content !== "";
          if (o || l) {
            const c = this.parseImage(n[i]);
            t[s.RelativeFilename || s.Filename] = c;
          }
        }
      }
    }
    for (const n in e) {
      const i = e[n];
      t[i] !== void 0 ? e[n] = t[i] : e[n] = e[n].split("\\").pop();
    }
    return e;
  }
  // Parse embedded image data in FBXTree.Video.Content
  parseImage(e) {
    const t = e.Content, n = e.RelativeFilename || e.Filename, i = n.slice(n.lastIndexOf(".") + 1).toLowerCase();
    let s;
    switch (i) {
      case "bmp":
        s = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        s = "image/jpeg";
        break;
      case "png":
        s = "image/png";
        break;
      case "tif":
        s = "image/tiff";
        break;
      case "tga":
        this.manager.getHandler(".tga") === null && console.warn("FBXLoader: TGA loader not found, skipping ", n), s = "image/tga";
        break;
      default:
        console.warn('FBXLoader: Image type "' + i + '" is not supported.');
        return;
    }
    if (typeof t == "string")
      return "data:" + s + ";base64," + t;
    {
      const a = new Uint8Array(t);
      return window.URL.createObjectURL(new Blob([a], { type: s }));
    }
  }
  // Parse nodes in FBXTree.Objects.Texture
  // These contain details such as UV scaling, cropping, rotation etc and are connected
  // to images in FBXTree.Objects.Video
  parseTextures(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Texture" in U.Objects) {
      const n = U.Objects.Texture;
      for (const i in n) {
        const s = this.parseTexture(n[i], e);
        t.set(parseInt(i), s);
      }
    }
    return t;
  }
  // Parse individual node in FBXTree.Objects.Texture
  parseTexture(e, t) {
    const n = this.loadTexture(e, t);
    n.ID = e.id, n.name = e.attrName;
    const i = e.WrapModeU, s = e.WrapModeV, a = i !== void 0 ? i.value : 0, o = s !== void 0 ? s.value : 0;
    if (n.wrapS = a === 0 ? Et : wn, n.wrapT = o === 0 ? Et : wn, "Scaling" in e) {
      const l = e.Scaling.value;
      n.repeat.x = l[0], n.repeat.y = l[1];
    }
    return n;
  }
  // load a texture specified as a blob or data URI, or via an external URL using TextureLoader
  loadTexture(e, t) {
    let n;
    const i = this.textureLoader.path, s = J.get(e.id).children;
    s !== void 0 && s.length > 0 && t[s[0].ID] !== void 0 && (n = t[s[0].ID], (n.indexOf("blob:") === 0 || n.indexOf("data:") === 0) && this.textureLoader.setPath(void 0));
    let a;
    const o = e.FileName.slice(-3).toLowerCase();
    if (o === "tga") {
      const l = this.manager.getHandler(".tga");
      l === null ? (console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), a = new Kt()) : (l.setPath(this.textureLoader.path), a = l.load(n));
    } else
      o === "psd" ? (console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), a = new Kt()) : a = this.textureLoader.load(n);
    return this.textureLoader.setPath(i), a;
  }
  // Parse nodes in FBXTree.Objects.Material
  parseMaterials(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Material" in U.Objects) {
      const n = U.Objects.Material;
      for (const i in n) {
        const s = this.parseMaterial(n[i], e);
        s !== null && t.set(parseInt(i), s);
      }
    }
    return t;
  }
  // Parse single node in FBXTree.Objects.Material
  // Materials are connected to texture maps in FBXTree.Objects.Textures
  // FBX format currently only supports Lambert and Phong shading models
  parseMaterial(e, t) {
    const n = e.id, i = e.attrName;
    let s = e.ShadingModel;
    if (typeof s == "object" && (s = s.value), !J.has(n))
      return null;
    const a = this.parseParameters(e, t, n);
    let o;
    switch (s.toLowerCase()) {
      case "phong":
        o = new fn();
        break;
      case "lambert":
        o = new Gs();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', s), o = new fn();
        break;
    }
    return o.setValues(a), o.name = i, o;
  }
  // Parse FBX material and return parameters suitable for a three.js material
  // Also parse the texture map and return any textures associated with the material
  parseParameters(e, t, n) {
    const i = {};
    e.BumpFactor && (i.bumpScale = e.BumpFactor.value), e.Diffuse ? i.color = new j().fromArray(e.Diffuse.value) : e.DiffuseColor && (e.DiffuseColor.type === "Color" || e.DiffuseColor.type === "ColorRGB") && (i.color = new j().fromArray(e.DiffuseColor.value)), e.DisplacementFactor && (i.displacementScale = e.DisplacementFactor.value), e.Emissive ? i.emissive = new j().fromArray(e.Emissive.value) : e.EmissiveColor && (e.EmissiveColor.type === "Color" || e.EmissiveColor.type === "ColorRGB") && (i.emissive = new j().fromArray(e.EmissiveColor.value)), e.EmissiveFactor && (i.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (i.opacity = parseFloat(e.Opacity.value)), i.opacity < 1 && (i.transparent = !0), e.ReflectionFactor && (i.reflectivity = e.ReflectionFactor.value), e.Shininess && (i.shininess = e.Shininess.value), e.Specular ? i.specular = new j().fromArray(e.Specular.value) : e.SpecularColor && e.SpecularColor.type === "Color" && (i.specular = new j().fromArray(e.SpecularColor.value));
    const s = this;
    return J.get(n).children.forEach(function(a) {
      const o = a.relationship;
      switch (o) {
        case "Bump":
          i.bumpMap = s.getTexture(t, a.ID);
          break;
        case "Maya|TEX_ao_map":
          i.aoMap = s.getTexture(t, a.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          i.map = s.getTexture(t, a.ID), i.map !== void 0 && (i.map.encoding = qe);
          break;
        case "DisplacementColor":
          i.displacementMap = s.getTexture(t, a.ID);
          break;
        case "EmissiveColor":
          i.emissiveMap = s.getTexture(t, a.ID), i.emissiveMap !== void 0 && (i.emissiveMap.encoding = qe);
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          i.normalMap = s.getTexture(t, a.ID);
          break;
        case "ReflectionColor":
          i.envMap = s.getTexture(t, a.ID), i.envMap !== void 0 && (i.envMap.mapping = js, i.envMap.encoding = qe);
          break;
        case "SpecularColor":
          i.specularMap = s.getTexture(t, a.ID), i.specularMap !== void 0 && (i.specularMap.encoding = qe);
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          i.alphaMap = s.getTexture(t, a.ID), i.transparent = !0;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", o);
          break;
      }
    }), i;
  }
  // get a texture from the textureMap for use by a material.
  getTexture(e, t) {
    return "LayeredTexture" in U.Objects && t in U.Objects.LayeredTexture && (console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = J.get(t).children[0].ID), e.get(t);
  }
  // Parse nodes in FBXTree.Objects.Deformer
  // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
  // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
  parseDeformers() {
    const e = {}, t = {};
    if ("Deformer" in U.Objects) {
      const n = U.Objects.Deformer;
      for (const i in n) {
        const s = n[i], a = J.get(parseInt(i));
        if (s.attrType === "Skin") {
          const o = this.parseSkeleton(a, n);
          o.ID = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), o.geometryID = a.parents[0].ID, e[i] = o;
        } else if (s.attrType === "BlendShape") {
          const o = {
            id: i
          };
          o.rawTargets = this.parseMorphTargets(a, n), o.id = i, a.parents.length > 1 && console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[i] = o;
        }
      }
    }
    return {
      skeletons: e,
      morphTargets: t
    };
  }
  // Parse single nodes in FBXTree.Objects.Deformer
  // The top level skeleton node has type 'Skin' and sub nodes have type 'Cluster'
  // Each skin node represents a skeleton and each cluster node represents a bone
  parseSkeleton(e, t) {
    const n = [];
    return e.children.forEach(function(i) {
      const s = t[i.ID];
      if (s.attrType !== "Cluster")
        return;
      const a = {
        ID: i.ID,
        indices: [],
        weights: [],
        transformLink: new G().fromArray(s.TransformLink.a)
        // transform: new Matrix4().fromArray( boneNode.Transform.a ),
        // linkMode: boneNode.Mode,
      };
      "Indexes" in s && (a.indices = s.Indexes.a, a.weights = s.Weights.a), n.push(a);
    }), {
      rawBones: n,
      bones: []
    };
  }
  // The top level morph deformer node has type "BlendShape" and sub nodes have type "BlendShapeChannel"
  parseMorphTargets(e, t) {
    const n = [];
    for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i], a = t[s.ID], o = {
        name: a.attrName,
        initialWeight: a.DeformPercent,
        id: a.id,
        fullWeights: a.FullWeights.a
      };
      if (a.attrType !== "BlendShapeChannel")
        return;
      o.geoID = J.get(parseInt(s.ID)).children.filter(function(l) {
        return l.relationship === void 0;
      })[0].ID, n.push(o);
    }
    return n;
  }
  // create the main Group() to be returned by the loader
  parseScene(e, t, n) {
    de = new Pt();
    const i = this.parseModels(e.skeletons, t, n), s = U.Objects.Model, a = this;
    i.forEach(function(l) {
      const c = s[l.ID];
      a.setLookAtProperties(l, c), J.get(l.ID).parents.forEach(function(f) {
        const h = i.get(f.ID);
        h !== void 0 && h.add(l);
      }), l.parent === null && de.add(l);
    }), this.bindSkeleton(e.skeletons, t, i), this.createAmbientLight(), de.traverse(function(l) {
      if (l.userData.transformData) {
        l.parent && (l.userData.transformData.parentMatrix = l.parent.matrix, l.userData.transformData.parentMatrixWorld = l.parent.matrixWorld);
        const c = Cs(l.userData.transformData);
        l.applyMatrix4(c), l.updateWorldMatrix();
      }
    });
    const o = new or().parse();
    de.children.length === 1 && de.children[0].isGroup && (de.children[0].animations = o, de = de.children[0]), de.animations = o;
  }
  // parse nodes in FBXTree.Objects.Model
  parseModels(e, t, n) {
    const i = /* @__PURE__ */ new Map(), s = U.Objects.Model;
    for (const a in s) {
      const o = parseInt(a), l = s[a], c = J.get(o);
      let u = this.buildSkeleton(c, e, o, l.attrName);
      if (!u) {
        switch (l.attrType) {
          case "Camera":
            u = this.createCamera(c);
            break;
          case "Light":
            u = this.createLight(c);
            break;
          case "Mesh":
            u = this.createMesh(c, t, n);
            break;
          case "NurbsCurve":
            u = this.createCurve(c, t);
            break;
          case "LimbNode":
          case "Root":
            u = new Fn();
            break;
          case "Null":
          default:
            u = new Pt();
            break;
        }
        u.name = l.attrName ? Lt.sanitizeNodeName(l.attrName) : "", u.ID = o;
      }
      this.getTransformData(u, l), i.set(o, u);
    }
    return i;
  }
  buildSkeleton(e, t, n, i) {
    let s = null;
    return e.parents.forEach(function(a) {
      for (const o in t) {
        const l = t[o];
        l.rawBones.forEach(function(c, u) {
          if (c.ID === a.ID) {
            const f = s;
            s = new Fn(), s.matrixWorld.copy(c.transformLink), s.name = i ? Lt.sanitizeNodeName(i) : "", s.ID = n, l.bones[u] = s, f !== null && s.add(f);
          }
        });
      }
    }), s;
  }
  // create a PerspectiveCamera or OrthographicCamera
  createCamera(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = U.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0)
      t = new ze();
    else {
      let i = 0;
      n.CameraProjectionType !== void 0 && n.CameraProjectionType.value === 1 && (i = 1);
      let s = 1;
      n.NearPlane !== void 0 && (s = n.NearPlane.value / 1e3);
      let a = 1e3;
      n.FarPlane !== void 0 && (a = n.FarPlane.value / 1e3);
      let o = window.innerWidth, l = window.innerHeight;
      n.AspectWidth !== void 0 && n.AspectHeight !== void 0 && (o = n.AspectWidth.value, l = n.AspectHeight.value);
      const c = o / l;
      let u = 45;
      n.FieldOfView !== void 0 && (u = n.FieldOfView.value);
      const f = n.FocalLength ? n.FocalLength.value : null;
      switch (i) {
        case 0:
          t = new Bn(u, c, s, a), f !== null && t.setFocalLength(f);
          break;
        case 1:
          t = new ln(-o / 2, o / 2, l / 2, -l / 2, s, a);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + i + "."), t = new ze();
          break;
      }
    }
    return t;
  }
  // Create a DirectionalLight, PointLight or SpotLight
  createLight(e) {
    let t, n;
    if (e.children.forEach(function(i) {
      const s = U.Objects.NodeAttribute[i.ID];
      s !== void 0 && (n = s);
    }), n === void 0)
      t = new ze();
    else {
      let i;
      n.LightType === void 0 ? i = 0 : i = n.LightType.value;
      let s = 16777215;
      n.Color !== void 0 && (s = new j().fromArray(n.Color.value));
      let a = n.Intensity === void 0 ? 1 : n.Intensity.value / 100;
      n.CastLightOnObject !== void 0 && n.CastLightOnObject.value === 0 && (a = 0);
      let o = 0;
      n.FarAttenuationEnd !== void 0 && (n.EnableFarAttenuation !== void 0 && n.EnableFarAttenuation.value === 0 ? o = 0 : o = n.FarAttenuationEnd.value);
      const l = 1;
      switch (i) {
        case 0:
          t = new _n(s, a, o, l);
          break;
        case 1:
          t = new cn(s, a);
          break;
        case 2:
          let c = Math.PI / 3;
          n.InnerAngle !== void 0 && (c = Fe.degToRad(n.InnerAngle.value));
          let u = 0;
          n.OuterAngle !== void 0 && (u = Fe.degToRad(n.OuterAngle.value), u = Math.max(u, 1)), t = new Qn(s, a, o, c, u, l);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + n.LightType.value + ", defaulting to a PointLight."), t = new _n(s, a);
          break;
      }
      n.CastShadows !== void 0 && n.CastShadows.value === 1 && (t.castShadow = !0);
    }
    return t;
  }
  createMesh(e, t, n) {
    let i, s = null, a = null;
    const o = [];
    return e.children.forEach(function(l) {
      t.has(l.ID) && (s = t.get(l.ID)), n.has(l.ID) && o.push(n.get(l.ID));
    }), o.length > 1 ? a = o : o.length > 0 ? a = o[0] : (a = new fn({ color: 13421772 }), o.push(a)), "color" in s.attributes && o.forEach(function(l) {
      l.vertexColors = !0;
    }), s.FBX_Deformer ? (i = new Xi(s, a), i.normalizeSkinWeights()) : i = new S(s, a), i;
  }
  createCurve(e, t) {
    const n = e.children.reduce(function(s, a) {
      return t.has(a.ID) && (s = t.get(a.ID)), s;
    }, null), i = new Dn({ color: 3342591, linewidth: 1 });
    return new Ee(n, i);
  }
  // parse the model node for transform data
  getTransformData(e, t) {
    const n = {};
    "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)), "RotationOrder" in t ? n.eulerOrder = Os(t.RotationOrder.value) : n.eulerOrder = "ZYX", "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value), "PreRotation" in t && (n.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (n.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (n.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value), e.userData.transformData = n;
  }
  setLookAtProperties(e, t) {
    "LookAtProperty" in t && J.get(e.ID).children.forEach(function(i) {
      if (i.relationship === "LookAtProperty") {
        const s = U.Objects.Model[i.ID];
        if ("Lcl_Translation" in s) {
          const a = s.Lcl_Translation.value;
          e.target !== void 0 ? (e.target.position.fromArray(a), de.add(e.target)) : e.lookAt(new E().fromArray(a));
        }
      }
    });
  }
  bindSkeleton(e, t, n) {
    const i = this.parsePoseNodes();
    for (const s in e) {
      const a = e[s];
      J.get(parseInt(a.ID)).parents.forEach(function(l) {
        if (t.has(l.ID)) {
          const c = l.ID;
          J.get(c).parents.forEach(function(f) {
            n.has(f.ID) && n.get(f.ID).bind(new Di(a.bones), i[f.ID]);
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const e = {};
    if ("Pose" in U.Objects) {
      const t = U.Objects.Pose;
      for (const n in t)
        if (t[n].attrType === "BindPose" && t[n].NbPoseNodes > 0) {
          const i = t[n].PoseNode;
          Array.isArray(i) ? i.forEach(function(s) {
            e[s.Node] = new G().fromArray(s.Matrix.a);
          }) : e[i.Node] = new G().fromArray(i.Matrix.a);
        }
    }
    return e;
  }
  // Parse ambient color in FBXTree.GlobalSettings - if it's not set to black (default), create an ambient light
  createAmbientLight() {
    if ("GlobalSettings" in U && "AmbientColor" in U.GlobalSettings) {
      const e = U.GlobalSettings.AmbientColor.value, t = e[0], n = e[1], i = e[2];
      if (t !== 0 || n !== 0 || i !== 0) {
        const s = new j(t, n, i);
        de.add(new qt(s, 1));
      }
    }
  }
}
class rr {
  // Parse nodes in FBXTree.Objects.Geometry
  parse(e) {
    const t = /* @__PURE__ */ new Map();
    if ("Geometry" in U.Objects) {
      const n = U.Objects.Geometry;
      for (const i in n) {
        const s = J.get(parseInt(i)), a = this.parseGeometry(s, n[i], e);
        t.set(parseInt(i), a);
      }
    }
    return t;
  }
  // Parse single node in FBXTree.Objects.Geometry
  parseGeometry(e, t, n) {
    switch (t.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(e, t, n);
      case "NurbsCurve":
        return this.parseNurbsGeometry(t);
    }
  }
  // Parse single node mesh geometry in FBXTree.Objects.Geometry
  parseMeshGeometry(e, t, n) {
    const i = n.skeletons, s = [], a = e.parents.map(function(f) {
      return U.Objects.Model[f.ID];
    });
    if (a.length === 0)
      return;
    const o = e.children.reduce(function(f, h) {
      return i[h.ID] !== void 0 && (f = i[h.ID]), f;
    }, null);
    e.children.forEach(function(f) {
      n.morphTargets[f.ID] !== void 0 && s.push(n.morphTargets[f.ID]);
    });
    const l = a[0], c = {};
    "RotationOrder" in l && (c.eulerOrder = Os(l.RotationOrder.value)), "InheritType" in l && (c.inheritType = parseInt(l.InheritType.value)), "GeometricTranslation" in l && (c.translation = l.GeometricTranslation.value), "GeometricRotation" in l && (c.rotation = l.GeometricRotation.value), "GeometricScaling" in l && (c.scale = l.GeometricScaling.value);
    const u = Cs(c);
    return this.genGeometry(t, o, s, u);
  }
  // Generate a BufferGeometry from a node in FBXTree.Objects.Geometry
  genGeometry(e, t, n, i) {
    const s = new Ne();
    e.attrName && (s.name = e.attrName);
    const a = this.parseGeoNode(e, t), o = this.genBuffers(a), l = new Ae(o.vertex, 3);
    if (l.applyMatrix4(i), s.setAttribute("position", l), o.colors.length > 0 && s.setAttribute("color", new Ae(o.colors, 3)), t && (s.setAttribute("skinIndex", new Vs(o.weightsIndices, 4)), s.setAttribute("skinWeight", new Ae(o.vertexWeights, 4)), s.FBX_Deformer = t), o.normal.length > 0) {
      const c = new Ws().getNormalMatrix(i), u = new Ae(o.normal, 3);
      u.applyNormalMatrix(c), s.setAttribute("normal", u);
    }
    if (o.uvs.forEach(function(c, u) {
      let f = "uv" + (u + 1).toString();
      u === 0 && (f = "uv"), s.setAttribute(f, new Ae(o.uvs[u], 2));
    }), a.material && a.material.mappingType !== "AllSame") {
      let c = o.materialIndex[0], u = 0;
      if (o.materialIndex.forEach(function(f, h) {
        f !== c && (s.addGroup(u, h - u, c), c = f, u = h);
      }), s.groups.length > 0) {
        const f = s.groups[s.groups.length - 1], h = f.start + f.count;
        h !== o.materialIndex.length && s.addGroup(h, o.materialIndex.length - h, c);
      }
      s.groups.length === 0 && s.addGroup(0, o.materialIndex.length, o.materialIndex[0]);
    }
    return this.addMorphTargets(s, e, n, i), s;
  }
  parseGeoNode(e, t) {
    const n = {};
    if (n.vertexPositions = e.Vertices !== void 0 ? e.Vertices.a : [], n.vertexIndices = e.PolygonVertexIndex !== void 0 ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (n.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (n.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (n.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
      n.uv = [];
      let i = 0;
      for (; e.LayerElementUV[i]; )
        e.LayerElementUV[i].UV && n.uv.push(this.parseUVs(e.LayerElementUV[i])), i++;
    }
    return n.weightTable = {}, t !== null && (n.skeleton = t, t.rawBones.forEach(function(i, s) {
      i.indices.forEach(function(a, o) {
        n.weightTable[a] === void 0 && (n.weightTable[a] = []), n.weightTable[a].push({
          id: s,
          weight: i.weights[o]
        });
      });
    })), n;
  }
  genBuffers(e) {
    const t = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let n = 0, i = 0, s = !1, a = [], o = [], l = [], c = [], u = [], f = [];
    const h = this;
    return e.vertexIndices.forEach(function(d, m) {
      let p, g = !1;
      d < 0 && (d = d ^ -1, g = !0);
      let A = [], y = [];
      if (a.push(d * 3, d * 3 + 1, d * 3 + 2), e.color) {
        const x = zt(m, n, d, e.color);
        l.push(x[0], x[1], x[2]);
      }
      if (e.skeleton) {
        if (e.weightTable[d] !== void 0 && e.weightTable[d].forEach(function(x) {
          y.push(x.weight), A.push(x.id);
        }), y.length > 4) {
          s || (console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), s = !0);
          const x = [0, 0, 0, 0], w = [0, 0, 0, 0];
          y.forEach(function(T, P) {
            let _ = T, F = A[P];
            w.forEach(function(X, M, z) {
              if (_ > X) {
                z[M] = _, _ = X;
                const C = x[M];
                x[M] = F, F = C;
              }
            });
          }), A = x, y = w;
        }
        for (; y.length < 4; )
          y.push(0), A.push(0);
        for (let x = 0; x < 4; ++x)
          u.push(y[x]), f.push(A[x]);
      }
      if (e.normal) {
        const x = zt(m, n, d, e.normal);
        o.push(x[0], x[1], x[2]);
      }
      e.material && e.material.mappingType !== "AllSame" && (p = zt(m, n, d, e.material)[0]), e.uv && e.uv.forEach(function(x, w) {
        const T = zt(m, n, d, x);
        c[w] === void 0 && (c[w] = []), c[w].push(T[0]), c[w].push(T[1]);
      }), i++, g && (h.genFace(t, e, a, p, o, l, c, u, f, i), n++, i = 0, a = [], o = [], l = [], c = [], u = [], f = []);
    }), t;
  }
  // Generate data for a single face in a geometry. If the face is a quad then split it into 2 tris
  genFace(e, t, n, i, s, a, o, l, c, u) {
    for (let f = 2; f < u; f++)
      e.vertex.push(t.vertexPositions[n[0]]), e.vertex.push(t.vertexPositions[n[1]]), e.vertex.push(t.vertexPositions[n[2]]), e.vertex.push(t.vertexPositions[n[(f - 1) * 3]]), e.vertex.push(t.vertexPositions[n[(f - 1) * 3 + 1]]), e.vertex.push(t.vertexPositions[n[(f - 1) * 3 + 2]]), e.vertex.push(t.vertexPositions[n[f * 3]]), e.vertex.push(t.vertexPositions[n[f * 3 + 1]]), e.vertex.push(t.vertexPositions[n[f * 3 + 2]]), t.skeleton && (e.vertexWeights.push(l[0]), e.vertexWeights.push(l[1]), e.vertexWeights.push(l[2]), e.vertexWeights.push(l[3]), e.vertexWeights.push(l[(f - 1) * 4]), e.vertexWeights.push(l[(f - 1) * 4 + 1]), e.vertexWeights.push(l[(f - 1) * 4 + 2]), e.vertexWeights.push(l[(f - 1) * 4 + 3]), e.vertexWeights.push(l[f * 4]), e.vertexWeights.push(l[f * 4 + 1]), e.vertexWeights.push(l[f * 4 + 2]), e.vertexWeights.push(l[f * 4 + 3]), e.weightsIndices.push(c[0]), e.weightsIndices.push(c[1]), e.weightsIndices.push(c[2]), e.weightsIndices.push(c[3]), e.weightsIndices.push(c[(f - 1) * 4]), e.weightsIndices.push(c[(f - 1) * 4 + 1]), e.weightsIndices.push(c[(f - 1) * 4 + 2]), e.weightsIndices.push(c[(f - 1) * 4 + 3]), e.weightsIndices.push(c[f * 4]), e.weightsIndices.push(c[f * 4 + 1]), e.weightsIndices.push(c[f * 4 + 2]), e.weightsIndices.push(c[f * 4 + 3])), t.color && (e.colors.push(a[0]), e.colors.push(a[1]), e.colors.push(a[2]), e.colors.push(a[(f - 1) * 3]), e.colors.push(a[(f - 1) * 3 + 1]), e.colors.push(a[(f - 1) * 3 + 2]), e.colors.push(a[f * 3]), e.colors.push(a[f * 3 + 1]), e.colors.push(a[f * 3 + 2])), t.material && t.material.mappingType !== "AllSame" && (e.materialIndex.push(i), e.materialIndex.push(i), e.materialIndex.push(i)), t.normal && (e.normal.push(s[0]), e.normal.push(s[1]), e.normal.push(s[2]), e.normal.push(s[(f - 1) * 3]), e.normal.push(s[(f - 1) * 3 + 1]), e.normal.push(s[(f - 1) * 3 + 2]), e.normal.push(s[f * 3]), e.normal.push(s[f * 3 + 1]), e.normal.push(s[f * 3 + 2])), t.uv && t.uv.forEach(function(h, d) {
        e.uvs[d] === void 0 && (e.uvs[d] = []), e.uvs[d].push(o[d][0]), e.uvs[d].push(o[d][1]), e.uvs[d].push(o[d][(f - 1) * 2]), e.uvs[d].push(o[d][(f - 1) * 2 + 1]), e.uvs[d].push(o[d][f * 2]), e.uvs[d].push(o[d][f * 2 + 1]);
      });
  }
  addMorphTargets(e, t, n, i) {
    if (n.length === 0)
      return;
    e.morphTargetsRelative = !0, e.morphAttributes.position = [];
    const s = this;
    n.forEach(function(a) {
      a.rawTargets.forEach(function(o) {
        const l = U.Objects.Geometry[o.geoID];
        l !== void 0 && s.genMorphGeometry(e, t, l, i, o.name);
      });
    });
  }
  // a morph geometry node is similar to a standard  node, and the node is also contained
  // in FBXTree.Objects.Geometry, however it can only have attributes for position, normal
  // and a special attribute Index defining which vertices of the original geometry are affected
  // Normal and position attributes only have data for the vertices that are affected by the morph
  genMorphGeometry(e, t, n, i, s) {
    const a = t.PolygonVertexIndex !== void 0 ? t.PolygonVertexIndex.a : [], o = n.Vertices !== void 0 ? n.Vertices.a : [], l = n.Indexes !== void 0 ? n.Indexes.a : [], c = e.attributes.position.count * 3, u = new Float32Array(c);
    for (let m = 0; m < l.length; m++) {
      const p = l[m] * 3;
      u[p] = o[m * 3], u[p + 1] = o[m * 3 + 1], u[p + 2] = o[m * 3 + 2];
    }
    const f = {
      vertexIndices: a,
      vertexPositions: u
    }, h = this.genBuffers(f), d = new Ae(h.vertex, 3);
    d.name = s || n.attrName, d.applyMatrix4(i), e.morphAttributes.position.push(d);
  }
  // Parse normal from FBXTree.Objects.Geometry.LayerElementNormal if it exists
  parseNormals(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Normals.a;
    let s = [];
    return n === "IndexToDirect" && ("NormalIndex" in e ? s = e.NormalIndex.a : "NormalsIndex" in e && (s = e.NormalsIndex.a)), {
      dataSize: 3,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse UVs from FBXTree.Objects.Geometry.LayerElementUV if it exists
  parseUVs(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.UV.a;
    let s = [];
    return n === "IndexToDirect" && (s = e.UVIndex.a), {
      dataSize: 2,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse Vertex Colors from FBXTree.Objects.Geometry.LayerElementColor if it exists
  parseVertexColors(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType, i = e.Colors.a;
    let s = [];
    return n === "IndexToDirect" && (s = e.ColorIndex.a), {
      dataSize: 4,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Parse mapping and material data in FBXTree.Objects.Geometry.LayerElementMaterial if it exists
  parseMaterialIndices(e) {
    const t = e.MappingInformationType, n = e.ReferenceInformationType;
    if (t === "NoMappingInformation")
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType: n
      };
    const i = e.Materials.a, s = [];
    for (let a = 0; a < i.length; ++a)
      s.push(a);
    return {
      dataSize: 1,
      buffer: i,
      indices: s,
      mappingType: t,
      referenceType: n
    };
  }
  // Generate a NurbGeometry from a node in FBXTree.Objects.Geometry
  parseNurbsGeometry(e) {
    if (yi === void 0)
      return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."), new Ne();
    const t = parseInt(e.Order);
    if (isNaN(t))
      return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new Ne();
    const n = t - 1, i = e.KnotVector.a, s = [], a = e.Points.a;
    for (let f = 0, h = a.length; f < h; f += 4)
      s.push(new on().fromArray(a, f));
    let o, l;
    if (e.Form === "Closed")
      s.push(s[0]);
    else if (e.Form === "Periodic") {
      o = n, l = i.length - 1 - o;
      for (let f = 0; f < n; ++f)
        s.push(s[f]);
    }
    const u = new yi(n, i, s, o, l).getPoints(s.length * 12);
    return new Ne().setFromPoints(u);
  }
}
class or {
  // take raw animation clips and turn them into three.js animation clips
  parse() {
    const e = [], t = this.parseClips();
    if (t !== void 0)
      for (const n in t) {
        const i = t[n], s = this.addClip(i);
        e.push(s);
      }
    return e;
  }
  parseClips() {
    if (U.Objects.AnimationCurve === void 0)
      return;
    const e = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e);
    const t = this.parseAnimationLayers(e);
    return this.parseAnimStacks(t);
  }
  // parse nodes in FBXTree.Objects.AnimationCurveNode
  // each AnimationCurveNode holds data for an animation transform for a model (e.g. left arm rotation )
  // and is referenced by an AnimationLayer
  parseAnimationCurveNodes() {
    const e = U.Objects.AnimationCurveNode, t = /* @__PURE__ */ new Map();
    for (const n in e) {
      const i = e[n];
      if (i.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const s = {
          id: i.id,
          attr: i.attrName,
          curves: {}
        };
        t.set(s.id, s);
      }
    }
    return t;
  }
  // parse nodes in FBXTree.Objects.AnimationCurve and connect them up to
  // previously parsed AnimationCurveNodes. Each AnimationCurve holds data for a single animated
  // axis ( e.g. times and values of x rotation)
  parseAnimationCurves(e) {
    const t = U.Objects.AnimationCurve;
    for (const n in t) {
      const i = {
        id: t[n].id,
        times: t[n].KeyTime.a.map(hr),
        values: t[n].KeyValueFloat.a
      }, s = J.get(i.id);
      if (s !== void 0) {
        const a = s.parents[0].ID, o = s.parents[0].relationship;
        o.match(/X/) ? e.get(a).curves.x = i : o.match(/Y/) ? e.get(a).curves.y = i : o.match(/Z/) ? e.get(a).curves.z = i : o.match(/d|DeformPercent/) && e.has(a) && (e.get(a).curves.morph = i);
      }
    }
  }
  // parse nodes in FBXTree.Objects.AnimationLayer. Each layers holds references
  // to various AnimationCurveNodes and is referenced by an AnimationStack node
  // note: theoretically a stack can have multiple layers, however in practice there always seems to be one per stack
  parseAnimationLayers(e) {
    const t = U.Objects.AnimationLayer, n = /* @__PURE__ */ new Map();
    for (const i in t) {
      const s = [], a = J.get(parseInt(i));
      a !== void 0 && (a.children.forEach(function(l, c) {
        if (e.has(l.ID)) {
          const u = e.get(l.ID);
          if (u.curves.x !== void 0 || u.curves.y !== void 0 || u.curves.z !== void 0) {
            if (s[c] === void 0) {
              const f = J.get(l.ID).parents.filter(function(h) {
                return h.relationship !== void 0;
              })[0].ID;
              if (f !== void 0) {
                const h = U.Objects.Model[f.toString()];
                if (h === void 0) {
                  console.warn("THREE.FBXLoader: Encountered a unused curve.", l);
                  return;
                }
                const d = {
                  modelName: h.attrName ? Lt.sanitizeNodeName(h.attrName) : "",
                  ID: h.id,
                  initialPosition: [0, 0, 0],
                  initialRotation: [0, 0, 0],
                  initialScale: [1, 1, 1]
                };
                de.traverse(function(m) {
                  m.ID === h.id && (d.transform = m.matrix, m.userData.transformData && (d.eulerOrder = m.userData.transformData.eulerOrder));
                }), d.transform || (d.transform = new G()), "PreRotation" in h && (d.preRotation = h.PreRotation.value), "PostRotation" in h && (d.postRotation = h.PostRotation.value), s[c] = d;
              }
            }
            s[c] && (s[c][u.attr] = u);
          } else if (u.curves.morph !== void 0) {
            if (s[c] === void 0) {
              const f = J.get(l.ID).parents.filter(function(A) {
                return A.relationship !== void 0;
              })[0].ID, h = J.get(f).parents[0].ID, d = J.get(h).parents[0].ID, m = J.get(d).parents[0].ID, p = U.Objects.Model[m], g = {
                modelName: p.attrName ? Lt.sanitizeNodeName(p.attrName) : "",
                morphName: U.Objects.Deformer[f].attrName
              };
              s[c] = g;
            }
            s[c][u.attr] = u;
          }
        }
      }), n.set(parseInt(i), s));
    }
    return n;
  }
  // parse nodes in FBXTree.Objects.AnimationStack. These are the top level node in the animation
  // hierarchy. Each Stack node will be used to create a AnimationClip
  parseAnimStacks(e) {
    const t = U.Objects.AnimationStack, n = {};
    for (const i in t) {
      const s = J.get(parseInt(i)).children;
      s.length > 1 && console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      const a = e.get(s[0].ID);
      n[i] = {
        name: t[i].attrName,
        layer: a
      };
    }
    return n;
  }
  addClip(e) {
    let t = [];
    const n = this;
    return e.layer.forEach(function(i) {
      t = t.concat(n.generateTracks(i));
    }), new ki(e.name, -1, t);
  }
  generateTracks(e) {
    const t = [];
    let n = new E(), i = new oe(), s = new E();
    if (e.transform && e.transform.decompose(n, i, s), n = n.toArray(), i = new st().setFromQuaternion(i, e.eulerOrder).toArray(), s = s.toArray(), e.T !== void 0 && Object.keys(e.T.curves).length > 0) {
      const a = this.generateVectorTrack(e.modelName, e.T.curves, n, "position");
      a !== void 0 && t.push(a);
    }
    if (e.R !== void 0 && Object.keys(e.R.curves).length > 0) {
      const a = this.generateRotationTrack(e.modelName, e.R.curves, i, e.preRotation, e.postRotation, e.eulerOrder);
      a !== void 0 && t.push(a);
    }
    if (e.S !== void 0 && Object.keys(e.S.curves).length > 0) {
      const a = this.generateVectorTrack(e.modelName, e.S.curves, s, "scale");
      a !== void 0 && t.push(a);
    }
    if (e.DeformPercent !== void 0) {
      const a = this.generateMorphTrack(e);
      a !== void 0 && t.push(a);
    }
    return t;
  }
  generateVectorTrack(e, t, n, i) {
    const s = this.getTimesForAllAxes(t), a = this.getKeyframeTrackValues(s, t, n);
    return new Bi(e + "." + i, s, a);
  }
  generateRotationTrack(e, t, n, i, s, a) {
    t.x !== void 0 && (this.interpolateRotations(t.x), t.x.values = t.x.values.map(Fe.degToRad)), t.y !== void 0 && (this.interpolateRotations(t.y), t.y.values = t.y.values.map(Fe.degToRad)), t.z !== void 0 && (this.interpolateRotations(t.z), t.z.values = t.z.values.map(Fe.degToRad));
    const o = this.getTimesForAllAxes(t), l = this.getKeyframeTrackValues(o, t, n);
    i !== void 0 && (i = i.map(Fe.degToRad), i.push(a), i = new st().fromArray(i), i = new oe().setFromEuler(i)), s !== void 0 && (s = s.map(Fe.degToRad), s.push(a), s = new st().fromArray(s), s = new oe().setFromEuler(s).invert());
    const c = new oe(), u = new st(), f = [];
    for (let h = 0; h < l.length; h += 3)
      u.set(l[h], l[h + 1], l[h + 2], a), c.setFromEuler(u), i !== void 0 && c.premultiply(i), s !== void 0 && c.multiply(s), c.toArray(f, h / 3 * 4);
    return new Pn(e + ".quaternion", o, f);
  }
  generateMorphTrack(e) {
    const t = e.DeformPercent.curves.morph, n = t.values.map(function(s) {
      return s / 100;
    }), i = de.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
    return new Qi(e.modelName + ".morphTargetInfluences[" + i + "]", t.times, n);
  }
  // For all animated objects, times are defined separately for each axis
  // Here we'll combine the times into one sorted array without duplicates
  getTimesForAllAxes(e) {
    let t = [];
    if (e.x !== void 0 && (t = t.concat(e.x.times)), e.y !== void 0 && (t = t.concat(e.y.times)), e.z !== void 0 && (t = t.concat(e.z.times)), t = t.sort(function(n, i) {
      return n - i;
    }), t.length > 1) {
      let n = 1, i = t[0];
      for (let s = 1; s < t.length; s++) {
        const a = t[s];
        a !== i && (t[n] = a, i = a, n++);
      }
      t = t.slice(0, n);
    }
    return t;
  }
  getKeyframeTrackValues(e, t, n) {
    const i = n, s = [];
    let a = -1, o = -1, l = -1;
    return e.forEach(function(c) {
      if (t.x && (a = t.x.times.indexOf(c)), t.y && (o = t.y.times.indexOf(c)), t.z && (l = t.z.times.indexOf(c)), a !== -1) {
        const u = t.x.values[a];
        s.push(u), i[0] = u;
      } else
        s.push(i[0]);
      if (o !== -1) {
        const u = t.y.values[o];
        s.push(u), i[1] = u;
      } else
        s.push(i[1]);
      if (l !== -1) {
        const u = t.z.values[l];
        s.push(u), i[2] = u;
      } else
        s.push(i[2]);
    }), s;
  }
  // Rotations are defined as Euler angles which can have values  of any size
  // These will be converted to quaternions which don't support values greater than
  // PI, so we'll interpolate large rotations
  interpolateRotations(e) {
    for (let t = 1; t < e.values.length; t++) {
      const n = e.values[t - 1], i = e.values[t] - n, s = Math.abs(i);
      if (s >= 180) {
        const a = s / 180, o = i / a;
        let l = n + o;
        const c = e.times[t - 1], f = (e.times[t] - c) / a;
        let h = c + f;
        const d = [], m = [];
        for (; h < e.times[t]; )
          d.push(h), h += f, m.push(l), l += o;
        e.times = Fi(e.times, t, d), e.values = Fi(e.values, t, m);
      }
    }
  }
}
class lr {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e) {
    this.nodeStack.push(e), this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop(), this.currentIndent -= 1;
  }
  setCurrentProp(e, t) {
    this.currentProp = e, this.currentPropName = t;
  }
  parse(e) {
    this.currentIndent = 0, this.allNodes = new Ns(), this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
    const t = this, n = e.split(/[\r\n]+/);
    return n.forEach(function(i, s) {
      const a = i.match(/^[\s\t]*;/), o = i.match(/^[\s\t]*$/);
      if (a || o)
        return;
      const l = i.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""), c = i.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"), u = i.match("^\\t{" + (t.currentIndent - 1) + "}}");
      l ? t.parseNodeBegin(i, l) : c ? t.parseNodeProperty(i, c, n[++s]) : u ? t.popStack() : i.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(i);
    }), this.allNodes;
  }
  parseNodeBegin(e, t) {
    const n = t[1].trim().replace(/^"/, "").replace(/"$/, ""), i = t[2].split(",").map(function(l) {
      return l.trim().replace(/^"/, "").replace(/"$/, "");
    }), s = { name: n }, a = this.parseNodeAttr(i), o = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(n, s) : n in o ? (n === "PoseNode" ? o.PoseNode.push(s) : o[n].id !== void 0 && (o[n] = {}, o[n][o[n].id] = o[n]), a.id !== "" && (o[n][a.id] = s)) : typeof a.id == "number" ? (o[n] = {}, o[n][a.id] = s) : n !== "Properties70" && (n === "PoseNode" ? o[n] = [s] : o[n] = s), typeof a.id == "number" && (s.id = a.id), a.name !== "" && (s.attrName = a.name), a.type !== "" && (s.attrType = a.type), this.pushStack(s);
  }
  parseNodeAttr(e) {
    let t = e[0];
    e[0] !== "" && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
    let n = "", i = "";
    return e.length > 1 && (n = e[1].replace(/^(\w+)::/, ""), i = e[2]), { id: t, name: n, type: i };
  }
  parseNodeProperty(e, t, n) {
    let i = t[1].replace(/^"/, "").replace(/"$/, "").trim(), s = t[2].replace(/^"/, "").replace(/"$/, "").trim();
    i === "Content" && s === "," && (s = n.replace(/"/g, "").replace(/,$/, "").trim());
    const a = this.getCurrentNode();
    if (a.name === "Properties70") {
      this.parseNodeSpecialProperty(e, i, s);
      return;
    }
    if (i === "C") {
      const l = s.split(",").slice(1), c = parseInt(l[0]), u = parseInt(l[1]);
      let f = s.split(",").slice(3);
      f = f.map(function(h) {
        return h.trim().replace(/^"/, "");
      }), i = "connections", s = [c, u], pr(s, f), a[i] === void 0 && (a[i] = []);
    }
    i === "Node" && (a.id = s), i in a && Array.isArray(a[i]) ? a[i].push(s) : i !== "a" ? a[i] = s : a.a = s, this.setCurrentProp(a, i), i === "a" && s.slice(-1) !== "," && (a.a = vn(s));
  }
  parseNodePropertyContinued(e) {
    const t = this.getCurrentNode();
    t.a += e, e.slice(-1) !== "," && (t.a = vn(t.a));
  }
  // parse "Property70"
  parseNodeSpecialProperty(e, t, n) {
    const i = n.split('",').map(function(u) {
      return u.trim().replace(/^\"/, "").replace(/\s/, "_");
    }), s = i[0], a = i[1], o = i[2], l = i[3];
    let c = i[4];
    switch (a) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        c = parseFloat(c);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        c = vn(c);
        break;
    }
    this.getPrevNode()[s] = {
      type: a,
      type2: o,
      flag: l,
      value: c
    }, this.setCurrentProp(this.getPrevNode(), s);
  }
}
class cr {
  parse(e) {
    const t = new Ti(e);
    t.skip(23);
    const n = t.getUint32();
    if (n < 6400)
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + n);
    const i = new Ns();
    for (; !this.endOfContent(t); ) {
      const s = this.parseNode(t, n);
      s !== null && i.add(s.name, s);
    }
    return i;
  }
  // Check if reader has reached the end of content.
  endOfContent(e) {
    return e.size() % 16 === 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size();
  }
  // recursively parse nodes until the end of the file is reached
  parseNode(e, t) {
    const n = {}, i = t >= 7500 ? e.getUint64() : e.getUint32(), s = t >= 7500 ? e.getUint64() : e.getUint32();
    t >= 7500 ? e.getUint64() : e.getUint32();
    const a = e.getUint8(), o = e.getString(a);
    if (i === 0)
      return null;
    const l = [];
    for (let h = 0; h < s; h++)
      l.push(this.parseProperty(e));
    const c = l.length > 0 ? l[0] : "", u = l.length > 1 ? l[1] : "", f = l.length > 2 ? l[2] : "";
    for (n.singleProperty = s === 1 && e.getOffset() === i; i > e.getOffset(); ) {
      const h = this.parseNode(e, t);
      h !== null && this.parseSubNode(o, n, h);
    }
    return n.propertyList = l, typeof c == "number" && (n.id = c), u !== "" && (n.attrName = u), f !== "" && (n.attrType = f), o !== "" && (n.name = o), n;
  }
  parseSubNode(e, t, n) {
    if (n.singleProperty === !0) {
      const i = n.propertyList[0];
      Array.isArray(i) ? (t[n.name] = n, n.a = i) : t[n.name] = i;
    } else if (e === "Connections" && n.name === "C") {
      const i = [];
      n.propertyList.forEach(function(s, a) {
        a !== 0 && i.push(s);
      }), t.connections === void 0 && (t.connections = []), t.connections.push(i);
    } else if (n.name === "Properties70")
      Object.keys(n).forEach(function(s) {
        t[s] = n[s];
      });
    else if (e === "Properties70" && n.name === "P") {
      let i = n.propertyList[0], s = n.propertyList[1];
      const a = n.propertyList[2], o = n.propertyList[3];
      let l;
      i.indexOf("Lcl ") === 0 && (i = i.replace("Lcl ", "Lcl_")), s.indexOf("Lcl ") === 0 && (s = s.replace("Lcl ", "Lcl_")), s === "Color" || s === "ColorRGB" || s === "Vector" || s === "Vector3D" || s.indexOf("Lcl_") === 0 ? l = [
        n.propertyList[4],
        n.propertyList[5],
        n.propertyList[6]
      ] : l = n.propertyList[4], t[i] = {
        type: s,
        type2: a,
        flag: o,
        value: l
      };
    } else
      t[n.name] === void 0 ? typeof n.id == "number" ? (t[n.name] = {}, t[n.name][n.id] = n) : t[n.name] = n : n.name === "PoseNode" ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]), t[n.name].push(n)) : t[n.name][n.id] === void 0 && (t[n.name][n.id] = n);
  }
  parseProperty(e) {
    const t = e.getString(1);
    let n;
    switch (t) {
      case "C":
        return e.getBoolean();
      case "D":
        return e.getFloat64();
      case "F":
        return e.getFloat32();
      case "I":
        return e.getInt32();
      case "L":
        return e.getInt64();
      case "R":
        return n = e.getUint32(), e.getArrayBuffer(n);
      case "S":
        return n = e.getUint32(), e.getString(n);
      case "Y":
        return e.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const i = e.getUint32(), s = e.getUint32(), a = e.getUint32();
        if (s === 0)
          switch (t) {
            case "b":
            case "c":
              return e.getBooleanArray(i);
            case "d":
              return e.getFloat64Array(i);
            case "f":
              return e.getFloat32Array(i);
            case "i":
              return e.getInt32Array(i);
            case "l":
              return e.getInt64Array(i);
          }
        typeof qa > "u" && console.error("THREE.FBXLoader: External library fflate.min.js required.");
        const o = bt(new Uint8Array(e.getArrayBuffer(a))), l = new Ti(o.buffer);
        switch (t) {
          case "b":
          case "c":
            return l.getBooleanArray(i);
          case "d":
            return l.getFloat64Array(i);
          case "f":
            return l.getFloat32Array(i);
          case "i":
            return l.getInt32Array(i);
          case "l":
            return l.getInt64Array(i);
        }
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + t);
    }
  }
}
class Ti {
  constructor(e, t) {
    this.dv = new DataView(e), this.offset = 0, this.littleEndian = t !== void 0 ? t : !0;
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e) {
    this.offset += e;
  }
  // seems like true/false representation depends on exporter.
  // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
  // then sees LSB.
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getBoolean());
    return t;
  }
  getUint8() {
    const e = this.dv.getUint8(this.offset);
    return this.offset += 1, e;
  }
  getInt16() {
    const e = this.dv.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, e;
  }
  getInt32() {
    const e = this.dv.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getInt32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt32());
    return t;
  }
  getUint32() {
    const e = this.dv.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  // JavaScript doesn't support 64-bit integer so calculate this here
  // 1 << 32 will return 1 so using multiply operation instead here.
  // There's a possibility that this method returns wrong value if the value
  // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
  // TODO: safely handle 64-bit integer
  getInt64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t & 2147483648 ? (t = ~t & 4294967295, e = ~e & 4294967295, e === 4294967295 && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(t * 4294967296 + e)) : t * 4294967296 + e;
  }
  getInt64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getInt64());
    return t;
  }
  // Note: see getInt64() comment
  getUint64() {
    let e, t;
    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), t * 4294967296 + e;
  }
  getFloat32() {
    const e = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e;
  }
  getFloat32Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat32());
    return t;
  }
  getFloat64() {
    const e = this.dv.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, e;
  }
  getFloat64Array(e) {
    const t = [];
    for (let n = 0; n < e; n++)
      t.push(this.getFloat64());
    return t;
  }
  getArrayBuffer(e) {
    const t = this.dv.buffer.slice(this.offset, this.offset + e);
    return this.offset += e, t;
  }
  getString(e) {
    let t = [];
    for (let i = 0; i < e; i++)
      t[i] = this.getUint8();
    const n = t.indexOf(0);
    return n >= 0 && (t = t.slice(0, n)), Le.decodeText(new Uint8Array(t));
  }
}
class Ns {
  add(e, t) {
    this[e] = t;
  }
}
function ur(r) {
  const e = "Kaydara FBX Binary  \0";
  return r.byteLength >= e.length && e === Us(r, 0, e.length);
}
function fr(r) {
  const e = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let t = 0;
  function n(i) {
    const s = r[i - 1];
    return r = r.slice(t + i), t++, s;
  }
  for (let i = 0; i < e.length; ++i)
    if (n(1) === e[i])
      return !1;
  return !0;
}
function wi(r) {
  const e = /FBXVersion: (\d+)/, t = r.match(e);
  if (t)
    return parseInt(t[1]);
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function hr(r) {
  return r / 46186158e3;
}
const dr = [];
function zt(r, e, t, n) {
  let i;
  switch (n.mappingType) {
    case "ByPolygonVertex":
      i = r;
      break;
    case "ByPolygon":
      i = e;
      break;
    case "ByVertice":
      i = t;
      break;
    case "AllSame":
      i = n.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType);
  }
  n.referenceType === "IndexToDirect" && (i = n.indices[i]);
  const s = i * n.dataSize, a = s + n.dataSize;
  return mr(dr, n.buffer, s, a);
}
const yn = new st(), tt = new E();
function Cs(r) {
  const e = new G(), t = new G(), n = new G(), i = new G(), s = new G(), a = new G(), o = new G(), l = new G(), c = new G(), u = new G(), f = new G(), h = new G(), d = r.inheritType ? r.inheritType : 0;
  if (r.translation && e.setPosition(tt.fromArray(r.translation)), r.preRotation) {
    const M = r.preRotation.map(Fe.degToRad);
    M.push(r.eulerOrder), t.makeRotationFromEuler(yn.fromArray(M));
  }
  if (r.rotation) {
    const M = r.rotation.map(Fe.degToRad);
    M.push(r.eulerOrder), n.makeRotationFromEuler(yn.fromArray(M));
  }
  if (r.postRotation) {
    const M = r.postRotation.map(Fe.degToRad);
    M.push(r.eulerOrder), i.makeRotationFromEuler(yn.fromArray(M)), i.invert();
  }
  r.scale && s.scale(tt.fromArray(r.scale)), r.scalingOffset && o.setPosition(tt.fromArray(r.scalingOffset)), r.scalingPivot && a.setPosition(tt.fromArray(r.scalingPivot)), r.rotationOffset && l.setPosition(tt.fromArray(r.rotationOffset)), r.rotationPivot && c.setPosition(tt.fromArray(r.rotationPivot)), r.parentMatrixWorld && (f.copy(r.parentMatrix), u.copy(r.parentMatrixWorld));
  const m = t.clone().multiply(n).multiply(i), p = new G();
  p.extractRotation(u);
  const g = new G();
  g.copyPosition(u);
  const A = g.clone().invert().multiply(u), y = p.clone().invert().multiply(A), x = s, w = new G();
  if (d === 0)
    w.copy(p).multiply(m).multiply(y).multiply(x);
  else if (d === 1)
    w.copy(p).multiply(y).multiply(m).multiply(x);
  else {
    const z = new G().scale(new E().setFromMatrixScale(f)).clone().invert(), C = y.clone().multiply(z);
    w.copy(p).multiply(m).multiply(C).multiply(x);
  }
  const T = c.clone().invert(), P = a.clone().invert();
  let _ = e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(T).multiply(o).multiply(a).multiply(s).multiply(P);
  const F = new G().copyPosition(_), X = u.clone().multiply(F);
  return h.copyPosition(X), _ = h.clone().multiply(w), _.premultiply(u.invert()), _;
}
function Os(r) {
  r = r || 0;
  const e = [
    "ZYX",
    // -> XYZ extrinsic
    "YZX",
    // -> XZY extrinsic
    "XZY",
    // -> YZX extrinsic
    "ZXY",
    // -> YXZ extrinsic
    "YXZ",
    // -> ZXY extrinsic
    "XYZ"
    // -> ZYX extrinsic
    //'SphericXYZ', // not possible to support
  ];
  return r === 6 ? (console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), e[0]) : e[r];
}
function vn(r) {
  return r.split(",").map(function(t) {
    return parseFloat(t);
  });
}
function Us(r, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = r.byteLength), Le.decodeText(new Uint8Array(r, e, t));
}
function pr(r, e) {
  for (let t = 0, n = r.length, i = e.length; t < i; t++, n++)
    r[n] = e[t];
}
function mr(r, e, t, n) {
  for (let i = t, s = 0; i < n; i++, s++)
    r[s] = e[i];
  return r;
}
function Fi(r, e, t) {
  return r.slice(0, e).concat(t).concat(r.slice(e));
}
class Xs extends Oi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new yr(t);
    }), this.register(function(t) {
      return new Pr(t);
    }), this.register(function(t) {
      return new Sr(t);
    }), this.register(function(t) {
      return new vr(t);
    }), this.register(function(t) {
      return new Tr(t);
    }), this.register(function(t) {
      return new wr(t);
    }), this.register(function(t) {
      return new Fr(t);
    }), this.register(function(t) {
      return new _r(t);
    }), this.register(function(t) {
      return new xr(t);
    }), this.register(function(t) {
      return new Er(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = Le.extractUrlBase(e), this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new kn(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, a, function(u) {
          t(u), s.manager.itemEnd(e);
        }, o);
      } catch (u) {
        o(u);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {};
    if (typeof e == "string")
      s = e;
    else if (Le.decodeText(new Uint8Array(e, 0, 4)) === Ds) {
      try {
        a[B.KHR_BINARY_GLTF] = new Lr(e);
      } catch (f) {
        i && i(f);
        return;
      }
      s = a[B.KHR_BINARY_GLTF].content;
    } else
      s = Le.decodeText(new Uint8Array(e));
    const l = JSON.parse(s);
    if (l.asset === void 0 || l.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Br(l, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const f = this.pluginCallbacks[u](c);
      o[f.name] = f, a[f.name] = !0;
    }
    if (l.extensionsUsed)
      for (let u = 0; u < l.extensionsUsed.length; ++u) {
        const f = l.extensionsUsed[u], h = l.extensionsRequired || [];
        switch (f) {
          case B.KHR_MATERIALS_UNLIT:
            a[f] = new Ar();
            break;
          case B.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            a[f] = new br();
            break;
          case B.KHR_DRACO_MESH_COMPRESSION:
            a[f] = new Mr(l, this.dracoLoader);
            break;
          case B.KHR_TEXTURE_TRANSFORM:
            a[f] = new Ir();
            break;
          case B.KHR_MESH_QUANTIZATION:
            a[f] = new Rr();
            break;
          default:
            h.indexOf(f) >= 0 && o[f] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".');
        }
      }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function gr() {
  let r = {};
  return {
    get: function(e) {
      return r[e];
    },
    add: function(e, t) {
      r[e] = t;
    },
    remove: function(e) {
      delete r[e];
    },
    removeAll: function() {
      r = {};
    }
  };
}
const B = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
};
class xr {
  constructor(e) {
    this.parser = e, this.name = B.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i)
      return i;
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new j(16777215);
    l.color !== void 0 && u.fromArray(l.color);
    const f = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new cn(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new _n(u), c.distance = f;
        break;
      case "spot":
        c = new Qn(u), c.distance = f, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class Ar {
  constructor() {
    this.name = B.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Re;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new j(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.fromArray(a), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture));
    }
    return Promise.all(i);
  }
}
class yr {
  constructor(e) {
    this.parser = e, this.name = B.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ct;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new H(o, o);
    }
    return Promise.all(s);
  }
}
class vr {
  constructor(e) {
    this.parser = e, this.name = B.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ct;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new j(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    return a.sheenColorFactor !== void 0 && t.sheenColor.fromArray(a.sheenColorFactor), a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class Tr {
  constructor(e) {
    this.parser = e, this.name = B.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ct;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class wr {
  constructor(e) {
    this.parser = e, this.name = B.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ct;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new j(o[0], o[1], o[2]), Promise.all(s);
  }
}
class Fr {
  constructor(e) {
    this.parser = e, this.name = B.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ct;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class _r {
  constructor(e) {
    this.parser = e, this.name = B.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ct;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new j(o[0], o[1], o[2]), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture).then(function(l) {
      l.encoding = qe;
    })), Promise.all(s);
  }
}
class Pr {
  constructor(e) {
    this.parser = e, this.name = B.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], a = n.images[s.source], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, a, o);
  }
}
class Sr {
  constructor(e) {
    this.parser = e, this.name = B.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const a = s.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, o, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class Er {
  constructor(e) {
    this.name = B.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return Promise.all([s, a.ready]).then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, f = i.byteStride, h = new ArrayBuffer(u * f), d = new Uint8Array(o[0], l, c);
        return a.decodeGltfBuffer(new Uint8Array(h), u, f, d, i.mode, i.filter), h;
      });
    } else
      return null;
  }
}
const Ds = "glTF", Tt = 12, _i = { JSON: 1313821514, BIN: 5130562 };
class Lr {
  constructor(e) {
    this.name = B.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, Tt);
    if (this.header = {
      magic: Le.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Ds)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - Tt, i = new DataView(e, Tt);
    let s = 0;
    for (; s < n; ) {
      const a = i.getUint32(s, !0);
      s += 4;
      const o = i.getUint32(s, !0);
      if (s += 4, o === _i.JSON) {
        const l = new Uint8Array(e, Tt + s, a);
        this.content = Le.decodeText(l);
      } else if (o === _i.BIN) {
        const l = Tt + s;
        this.body = e.slice(l, l + a);
      }
      s += a;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class Mr {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = B.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const u in a) {
      const f = On[u] || u.toLowerCase();
      o[f] = a[u];
    }
    for (const u in e.attributes) {
      const f = On[u] || u.toLowerCase();
      if (a[u] !== void 0) {
        const h = n.accessors[e.attributes[u]], d = Nt[h.componentType];
        c[f] = d, l[f] = h.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(u) {
      return new Promise(function(f) {
        i.decodeDracoFile(u, function(h) {
          for (const d in h.attributes) {
            const m = h.attributes[d], p = l[d];
            p !== void 0 && (m.normalized = p);
          }
          f(h);
        }, o, c);
      });
    });
  }
}
class Ir {
  constructor() {
    this.name = B.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class Cn extends Yn {
  constructor(e) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    const t = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), n = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), i = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), s = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), a = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), o = {
      specular: { value: new j().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = o, this.onBeforeCompile = function(l) {
      for (const c in o)
        l.uniforms[c] = o[c];
      l.fragmentShader = l.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", s).replace("#include <lights_physical_fragment>", a);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return o.specular.value;
        },
        set: function(l) {
          o.specular.value = l;
        }
      },
      specularMap: {
        get: function() {
          return o.specularMap.value;
        },
        set: function(l) {
          o.specularMap.value = l, l ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return o.glossiness.value;
        },
        set: function(l) {
          o.glossiness.value = l;
        }
      },
      glossinessMap: {
        get: function() {
          return o.glossinessMap.value;
        },
        set: function(l) {
          o.glossinessMap.value = l, l ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class br {
  constructor() {
    this.name = B.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity",
      "refractionRatio"
    ];
  }
  getMaterialType() {
    return Cn;
  }
  extendParams(e, t, n) {
    const i = t.extensions[this.name];
    e.color = new j(1, 1, 1), e.opacity = 1;
    const s = [];
    if (Array.isArray(i.diffuseFactor)) {
      const a = i.diffuseFactor;
      e.color.fromArray(a), e.opacity = a[3];
    }
    if (i.diffuseTexture !== void 0 && s.push(n.assignTexture(e, "map", i.diffuseTexture)), e.emissive = new j(0, 0, 0), e.glossiness = i.glossinessFactor !== void 0 ? i.glossinessFactor : 1, e.specular = new j(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), i.specularGlossinessTexture !== void 0) {
      const a = i.specularGlossinessTexture;
      s.push(n.assignTexture(e, "glossinessMap", a)), s.push(n.assignTexture(e, "specularMap", a));
    }
    return Promise.all(s);
  }
  createMaterial(e) {
    const t = new Cn(e);
    return t.fog = !0, t.color = e.color, t.map = e.map === void 0 ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = e.aoMap === void 0 ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap, t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = e.normalMap === void 0 ? null : e.normalMap, t.normalMapType = Zs, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = e.specularMap === void 0 ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = e.envMap === void 0 ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = 0.98, t;
  }
}
class Rr {
  constructor() {
    this.name = B.KHR_MESH_QUANTIZATION;
  }
}
class Je extends ia {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[s + a];
    return t;
  }
}
Je.prototype.beforeStart_ = Je.prototype.copySampleValue_;
Je.prototype.afterEnd_ = Je.prototype.copySampleValue_;
Je.prototype.interpolate_ = function(r, e, t, n) {
  const i = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = a * 2, l = a * 3, c = n - e, u = (t - e) / c, f = u * u, h = f * u, d = r * l, m = d - l, p = -2 * h + 3 * f, g = h - f, A = 1 - p, y = g - f + u;
  for (let x = 0; x !== a; x++) {
    const w = s[m + x + a], T = s[m + x + o] * c, P = s[d + x + a], _ = s[d + x] * c;
    i[x] = A * w + y * T + p * P + g * _;
  }
  return i;
};
const Nr = new oe();
class Cr extends Je {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return Nr.fromArray(s).normalize().toArray(s), s;
  }
}
const Ie = {
  FLOAT: 5126,
  //FLOAT_MAT2: 35674,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, Nt = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Pi = {
  9728: sa,
  9729: rt,
  9984: aa,
  9985: ra,
  9986: oa,
  9987: Yi
}, Si = {
  33071: wn,
  33648: la,
  10497: Et
}, Ei = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, On = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Be = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Or = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: Hi,
  STEP: ca
}, Tn = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Ur(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new Yn({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: ua
  })), r.DefaultMaterial;
}
function wt(r, e, t) {
  for (const n in t.extensions)
    r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Ke(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function Xr(r, e, t) {
  let n = !1, i = !1;
  for (let o = 0, l = e.length; o < l; o++) {
    const c = e[o];
    if (c.POSITION !== void 0 && (n = !0), c.NORMAL !== void 0 && (i = !0), n && i)
      break;
  }
  if (!n && !i)
    return Promise.resolve(r);
  const s = [], a = [];
  for (let o = 0, l = e.length; o < l; o++) {
    const c = e[o];
    if (n) {
      const u = c.POSITION !== void 0 ? t.getDependency("accessor", c.POSITION) : r.attributes.position;
      s.push(u);
    }
    if (i) {
      const u = c.NORMAL !== void 0 ? t.getDependency("accessor", c.NORMAL) : r.attributes.normal;
      a.push(u);
    }
  }
  return Promise.all([
    Promise.all(s),
    Promise.all(a)
  ]).then(function(o) {
    const l = o[0], c = o[1];
    return n && (r.morphAttributes.position = l), i && (r.morphAttributes.normal = c), r.morphTargetsRelative = !0, r;
  });
}
function Dr(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        r.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function kr(r) {
  const e = r.extensions && r.extensions[B.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Li(e.attributes) : t = r.indices + ":" + Li(r.attributes) + ":" + r.mode, t;
}
function Li(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function Un(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
class Br {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new gr(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.textureCache = {}, this.nodeNamesUsed = {}, typeof createImageBitmap < "u" && /Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !1 ? this.textureLoader = new Ks(this.options.manager) : this.textureLoader = new Ui(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new kn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      wt(s, o, i), Ke(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const i = n.clone(), s = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, u] of a.children.entries())
        s(u, o.children[c]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i)
        return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this.loadNode(t);
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this.loadAnimation(t);
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          throw new Error("Unknown type: " + e);
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[B.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(Le.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0)
      return Promise.resolve(null);
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], l = Ei[i.type], c = Nt[i.componentType], u = c.BYTES_PER_ELEMENT, f = u * l, h = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, m = i.normalized === !0;
      let p, g;
      if (d && d !== f) {
        const A = Math.floor(h / d), y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + A + ":" + i.count;
        let x = t.cache.get(y);
        x || (p = new c(o, A * d, i.count * d / u), x = new qs(p, d / u), t.cache.add(y, x)), g = new Js(x, l, h % d / u, m);
      } else
        o === null ? p = new c(i.count * l) : p = new c(o, h, i.count * l), g = new ii(p, l, m);
      if (i.sparse !== void 0) {
        const A = Ei.SCALAR, y = Nt[i.sparse.indices.componentType], x = i.sparse.indices.byteOffset || 0, w = i.sparse.values.byteOffset || 0, T = new y(a[1], x, i.sparse.count * A), P = new c(a[2], w, i.sparse.count * l);
        o !== null && (g = new ii(g.array.slice(), g.itemSize, g.normalized));
        for (let _ = 0, F = T.length; _ < F; _++) {
          const X = T[_];
          if (g.setX(X, P[_ * l]), l >= 2 && g.setY(X, P[_ * l + 1]), l >= 3 && g.setZ(X, P[_ * l + 2]), l >= 4 && g.setW(X, P[_ * l + 3]), l >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return g;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e], s = t.images[i.source];
    let a = this.textureLoader;
    if (s.uri) {
      const o = n.manager.getHandler(s.uri);
      o !== null && (a = o);
    }
    return this.loadTextureImage(e, s, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = this.options, o = s.textures[e], l = (t.uri || t.bufferView) + ":" + o.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = self.URL || self.webkitURL;
    let u = t.uri || "", f = !1;
    if (t.bufferView !== void 0)
      u = i.getDependency("bufferView", t.bufferView).then(function(d) {
        f = !0;
        const m = new Blob([d], { type: t.mimeType });
        return u = c.createObjectURL(m), u;
      });
    else if (t.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(u).then(function(d) {
      return new Promise(function(m, p) {
        let g = m;
        n.isImageBitmapLoader === !0 && (g = function(A) {
          const y = new Kt(A);
          y.needsUpdate = !0, m(y);
        }), n.load(Le.resolveURL(d, a.path), g, void 0, p);
      });
    }).then(function(d) {
      f === !0 && c.revokeObjectURL(u), d.flipY = !1, o.name && (d.name = o.name);
      const p = (s.samplers || {})[o.sampler] || {};
      return d.magFilter = Pi[p.magFilter] || rt, d.minFilter = Pi[p.minFilter] || Yi, d.wrapS = Si[p.wrapS] || Et, d.wrapT = Si[p.wrapT] || Et, i.associations.set(d, { textures: e }), d;
    }).catch(function() {
      return console.error("THREE.GLTFLoader: Couldn't load texture", u), null;
    });
    return this.textureCache[l] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n) {
    const i = this;
    return this.getDependency("texture", n.index).then(function(s) {
      if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), i.extensions[B.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[B.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = i.associations.get(s);
          s = i.extensions[B.KHR_TEXTURE_TRANSFORM].extendTexture(s, a), i.associations.set(s, o);
        }
      }
      return e[t] = s, s;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new $s(), hn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new Dn(), hn.prototype.copy.call(l, n), l.color.copy(n.color), this.cache.add(o, l)), n = l;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      n.isGLTFSpecularGlossinessMaterial && (o += "specular-glossiness:"), i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), s && (l.vertexColors = !0), a && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
  }
  getMaterialType() {
    return Yn;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, l = s.extensions || {}, c = [];
    if (l[B.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const f = i[B.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      a = f.getMaterialType(), c.push(f.extendParams(o, s, t));
    } else if (l[B.KHR_MATERIALS_UNLIT]) {
      const f = i[B.KHR_MATERIALS_UNLIT];
      a = f.getMaterialType(), c.push(f.extendParams(o, s, t));
    } else {
      const f = s.pbrMetallicRoughness || {};
      if (o.color = new j(1, 1, 1), o.opacity = 1, Array.isArray(f.baseColorFactor)) {
        const h = f.baseColorFactor;
        o.color.fromArray(h), o.opacity = h[3];
      }
      f.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", f.baseColorTexture)), o.metalness = f.metallicFactor !== void 0 ? f.metallicFactor : 1, o.roughness = f.roughnessFactor !== void 0 ? f.roughnessFactor : 1, f.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", f.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", f.metallicRoughnessTexture))), a = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = at);
    const u = s.alphaMode || Tn.OPAQUE;
    if (u === Tn.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, o.alphaWrite = !1, u === Tn.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== Re && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new H(1, 1), s.normalTexture.scale !== void 0)) {
      const f = s.normalTexture.scale;
      o.normalScale.set(f, f);
    }
    return s.occlusionTexture !== void 0 && a !== Re && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== Re && (o.emissive = new j().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && a !== Re && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture)), Promise.all(c).then(function() {
      let f;
      return a === Cn ? f = i[B.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : f = new a(o), s.name && (f.name = s.name), f.map && (f.map.encoding = qe), f.emissiveMap && (f.emissiveMap.encoding = qe), Ke(f, s), t.associations.set(f, { materials: e }), s.extensions && wt(i, f, s), f;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = Lt.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i)
      n = t + "_" + i;
    return this.nodeNamesUsed[n] = !0, n;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[B.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return Mi(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], u = kr(c), f = i[u];
      if (f)
        a.push(f.promise);
      else {
        let h;
        c.extensions && c.extensions[B.KHR_DRACO_MESH_COMPRESSION] ? h = s(c) : h = Mi(new Ne(), c, t), i[u] = { primitive: c, promise: h }, a.push(h);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const u = a[l].material === void 0 ? Ur(this.cache) : this.getDependency("material", a[l].material);
      o.push(u);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], f = [];
      for (let d = 0, m = u.length; d < m; d++) {
        const p = u[d], g = a[d];
        let A;
        const y = c[d];
        if (g.mode === Ie.TRIANGLES || g.mode === Ie.TRIANGLE_STRIP || g.mode === Ie.TRIANGLE_FAN || g.mode === void 0)
          A = s.isSkinnedMesh === !0 ? new Xi(p, y) : new S(p, y), A.isSkinnedMesh === !0 && !A.geometry.attributes.skinWeight.normalized && A.normalizeSkinWeights(), g.mode === Ie.TRIANGLE_STRIP ? A.geometry = Ii(A.geometry, fa) : g.mode === Ie.TRIANGLE_FAN && (A.geometry = Ii(A.geometry, zi));
        else if (g.mode === Ie.LINES)
          A = new ea(p, y);
        else if (g.mode === Ie.LINE_STRIP)
          A = new Ee(p, y);
        else if (g.mode === Ie.LINE_LOOP)
          A = new ta(p, y);
        else if (g.mode === Ie.POINTS)
          A = new na(p, y);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
        Object.keys(A.geometry.morphAttributes).length > 0 && Dr(A, s), A.name = t.createUniqueName(s.name || "mesh_" + e), Ke(A, s), g.extensions && wt(i, A, g), t.assignFinalMaterial(A), f.push(A);
      }
      for (let d = 0, m = f.length; d < m; d++)
        t.associations.set(f[d], {
          meshes: e,
          primitives: d
        });
      if (f.length === 1)
        return f[0];
      const h = new Pt();
      t.associations.set(h, { meshes: e });
      for (let d = 0, m = f.length; d < m; d++)
        h.add(f[d]);
      return h;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Bn(Fe.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new ln(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Ke(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Object>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = { joints: t.joints };
    return t.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(i) {
      return n.inverseBindMatrices = i, n;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const n = this.json.animations[e], i = [], s = [], a = [], o = [], l = [];
    for (let c = 0, u = n.channels.length; c < u; c++) {
      const f = n.channels[c], h = n.samplers[f.sampler], d = f.target, m = d.node !== void 0 ? d.node : d.id, p = n.parameters !== void 0 ? n.parameters[h.input] : h.input, g = n.parameters !== void 0 ? n.parameters[h.output] : h.output;
      i.push(this.getDependency("node", m)), s.push(this.getDependency("accessor", p)), a.push(this.getDependency("accessor", g)), o.push(h), l.push(d);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(s),
      Promise.all(a),
      Promise.all(o),
      Promise.all(l)
    ]).then(function(c) {
      const u = c[0], f = c[1], h = c[2], d = c[3], m = c[4], p = [];
      for (let A = 0, y = u.length; A < y; A++) {
        const x = u[A], w = f[A], T = h[A], P = d[A], _ = m[A];
        if (x === void 0)
          continue;
        x.updateMatrix(), x.matrixAutoUpdate = !0;
        let F;
        switch (Be[_.path]) {
          case Be.weights:
            F = Qi;
            break;
          case Be.rotation:
            F = Pn;
            break;
          case Be.position:
          case Be.scale:
          default:
            F = Bi;
            break;
        }
        const X = x.name ? x.name : x.uuid, M = P.interpolation !== void 0 ? Or[P.interpolation] : Hi, z = [];
        Be[_.path] === Be.weights ? x.traverse(function(b) {
          b.morphTargetInfluences && z.push(b.name ? b.name : b.uuid);
        }) : z.push(X);
        let C = T.array;
        if (T.normalized) {
          const b = Un(C.constructor), R = new Float32Array(C.length);
          for (let N = 0, D = C.length; N < D; N++)
            R[N] = C[N] * b;
          C = R;
        }
        for (let b = 0, R = z.length; b < R; b++) {
          const N = new F(
            z[b] + "." + Be[_.path],
            w.array,
            C,
            M
          );
          P.interpolation === "CUBICSPLINE" && (N.createInterpolant = function(O) {
            const V = this instanceof Pn ? Cr : Je;
            return new V(this.times, this.values, this.getValueSize() / 3, O);
          }, N.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), p.push(N);
        }
      }
      const g = n.name ? n.name : "animation_" + e;
      return new ki(g, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this.extensions, i = this, s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "";
    return function() {
      const o = [], l = i._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
      return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(c) {
        return i._getNodeRef(i.cameraCache, s.camera, c);
      })), i._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function(c) {
        o.push(c);
      }), Promise.all(o);
    }().then(function(o) {
      let l;
      if (s.isBone === !0 ? l = new Fn() : o.length > 1 ? l = new Pt() : o.length === 1 ? l = o[0] : l = new ze(), l !== o[0])
        for (let c = 0, u = o.length; c < u; c++)
          l.add(o[c]);
      if (s.name && (l.userData.name = s.name, l.name = a), Ke(l, s), s.extensions && wt(n, l, s), s.matrix !== void 0) {
        const c = new G();
        c.fromArray(s.matrix), l.applyMatrix4(c);
      } else
        s.translation !== void 0 && l.position.fromArray(s.translation), s.rotation !== void 0 && l.quaternion.fromArray(s.rotation), s.scale !== void 0 && l.scale.fromArray(s.scale);
      return i.associations.has(l) || i.associations.set(l, {}), i.associations.get(l).nodes = e, l;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.json, n = this.extensions, i = this.json.scenes[e], s = this, a = new Pt();
    i.name && (a.name = s.createUniqueName(i.name)), Ke(a, i), i.extensions && wt(n, a, i);
    const o = i.nodes || [], l = [];
    for (let c = 0, u = o.length; c < u; c++)
      l.push(ks(o[c], a, t, s));
    return Promise.all(l).then(function() {
      const c = (u) => {
        const f = /* @__PURE__ */ new Map();
        for (const [h, d] of s.associations)
          (h instanceof hn || h instanceof Kt) && f.set(h, d);
        return u.traverse((h) => {
          const d = s.associations.get(h);
          d != null && f.set(h, d);
        }), f;
      };
      return s.associations = c(a), a;
    });
  }
}
function ks(r, e, t, n) {
  const i = t.nodes[r];
  return n.getDependency("node", r).then(function(s) {
    if (i.skin === void 0)
      return s;
    let a;
    return n.getDependency("skin", i.skin).then(function(o) {
      a = o;
      const l = [];
      for (let c = 0, u = a.joints.length; c < u; c++)
        l.push(n.getDependency("node", a.joints[c]));
      return Promise.all(l);
    }).then(function(o) {
      return s.traverse(function(l) {
        if (!l.isMesh)
          return;
        const c = [], u = [];
        for (let f = 0, h = o.length; f < h; f++) {
          const d = o[f];
          if (d) {
            c.push(d);
            const m = new G();
            a.inverseBindMatrices !== void 0 && m.fromArray(a.inverseBindMatrices.array, f * 16), u.push(m);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', a.joints[f]);
        }
        l.bind(new Di(c, u), l.matrixWorld);
      }), s;
    });
  }).then(function(s) {
    e.add(s);
    const a = [];
    if (i.children) {
      const o = i.children;
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l];
        a.push(ks(u, s, t, n));
      }
    }
    return Promise.all(a);
  });
}
function Qr(r, e, t) {
  const n = e.attributes, i = new ha();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new E(l[0], l[1], l[2]),
        new E(c[0], c[1], c[2])
      ), o.normalized) {
        const u = Un(Nt[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new E(), l = new E();
    for (let c = 0, u = s.length; c < u; c++) {
      const f = s[c];
      if (f.POSITION !== void 0) {
        const h = t.json.accessors[f.POSITION], d = h.min, m = h.max;
        if (d !== void 0 && m !== void 0) {
          if (l.setX(Math.max(Math.abs(d[0]), Math.abs(m[0]))), l.setY(Math.max(Math.abs(d[1]), Math.abs(m[1]))), l.setZ(Math.max(Math.abs(d[2]), Math.abs(m[2]))), h.normalized) {
            const p = Un(Nt[h.componentType]);
            l.multiplyScalar(p);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new da();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function Mi(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      r.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = On[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return Ke(r, e), Qr(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? Xr(r, e.targets, t) : r;
  });
}
function Ii(r, e) {
  let t = r.getIndex();
  if (t === null) {
    const a = [], o = r.getAttribute("position");
    if (o !== void 0) {
      for (let l = 0; l < o.count; l++)
        a.push(l);
      r.setIndex(a), t = r.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
  }
  const n = t.count - 2, i = [];
  if (e === zi)
    for (let a = 1; a <= n; a++)
      i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
  else
    for (let a = 0; a < n; a++)
      a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
  i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const s = r.clone();
  return s.setIndex(i), s;
}
var rn = {
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`
  )
};
class Dt {
  constructor() {
    this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
}
const Yr = new ln(-1, 1, 1, -1, 0, 1), ni = new Ne();
ni.setAttribute("position", new Ae([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
ni.setAttribute("uv", new Ae([0, 2, 0, 0, 2, 0], 2));
class Bs {
  constructor(e) {
    this._mesh = new S(ni, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Yr);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class Xn extends Dt {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof Ye ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Gi.clone(e.uniforms), this.material = new Ye({
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Bs(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
}
class bi extends Dt {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const i = e.getContext(), s = e.state;
    s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0);
    let a, o;
    this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), s.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295), s.buffers.stencil.setClear(o), s.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), s.buffers.stencil.setLocked(!0);
  }
}
class Hr extends Dt {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class zr {
  constructor(e, t) {
    if (this.renderer = e, t === void 0) {
      const n = {
        minFilter: rt,
        magFilter: rt,
        format: Vi
      }, i = e.getSize(new H());
      this._pixelRatio = e.getPixelRatio(), this._width = i.width, this._height = i.height, t = new Qe(this._width * this._pixelRatio, this._height * this._pixelRatio, n), t.texture.name = "EffectComposer.rt1";
    } else
      this._pixelRatio = 1, this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], rn === void 0 && console.error("THREE.EffectComposer relies on CopyShader"), Xn === void 0 && console.error("THREE.EffectComposer relies on ShaderPass"), this.copyPass = new Xn(rn), this.clock = new ji();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled)
        return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, s = this.passes.length; i < s; i++) {
      const a = this.passes[i];
      if (a.enabled !== !1) {
        if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), a.needsSwap) {
          if (n) {
            const o = this.renderer.getContext(), l = this.renderer.state.buffers.stencil;
            l.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        bi !== void 0 && (a instanceof bi ? n = !0 : a instanceof Hr && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new H());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let s = 0; s < this.passes.length; s++)
      this.passes[s].setSize(n, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
}
new ln(-1, 1, 1, -1, 0, 1);
const Qs = new Ne();
Qs.setAttribute("position", new Ae([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
Qs.setAttribute("uv", new Ae([0, 2, 0, 0, 2, 0], 2));
class He extends Dt {
  constructor(e, t, n, i) {
    super(), this.renderScene = t, this.renderCamera = n, this.selectedObjects = i !== void 0 ? i : [], this.visibleEdgeColor = new j(1, 1, 1), this.hiddenEdgeColor = new j(0.1, 0.04, 0.02), this.edgeGlow = 0, this.usePatternTexture = !1, this.edgeThickness = 1, this.edgeStrength = 3, this.downSampleRatio = 2, this.pulsePeriod = 0, this._visibilityCache = /* @__PURE__ */ new Map(), this.resolution = e !== void 0 ? new H(e.x, e.y) : new H(256, 256);
    const s = { minFilter: rt, magFilter: rt, format: Vi }, a = Math.round(this.resolution.x / this.downSampleRatio), o = Math.round(this.resolution.y / this.downSampleRatio);
    this.renderTargetMaskBuffer = new Qe(this.resolution.x, this.resolution.y, s), this.renderTargetMaskBuffer.texture.name = "OutlinePass.mask", this.renderTargetMaskBuffer.texture.generateMipmaps = !1, this.depthMaterial = new pa(), this.depthMaterial.side = at, this.depthMaterial.depthPacking = ma, this.depthMaterial.blending = si, this.prepareMaskMaterial = this.getPrepareMaskMaterial(), this.prepareMaskMaterial.side = at, this.prepareMaskMaterial.fragmentShader = f(this.prepareMaskMaterial.fragmentShader, this.renderCamera), this.renderTargetDepthBuffer = new Qe(this.resolution.x, this.resolution.y, s), this.renderTargetDepthBuffer.texture.name = "OutlinePass.depth", this.renderTargetDepthBuffer.texture.generateMipmaps = !1, this.renderTargetMaskDownSampleBuffer = new Qe(a, o, s), this.renderTargetMaskDownSampleBuffer.texture.name = "OutlinePass.depthDownSample", this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps = !1, this.renderTargetBlurBuffer1 = new Qe(a, o, s), this.renderTargetBlurBuffer1.texture.name = "OutlinePass.blur1", this.renderTargetBlurBuffer1.texture.generateMipmaps = !1, this.renderTargetBlurBuffer2 = new Qe(Math.round(a / 2), Math.round(o / 2), s), this.renderTargetBlurBuffer2.texture.name = "OutlinePass.blur2", this.renderTargetBlurBuffer2.texture.generateMipmaps = !1, this.edgeDetectionMaterial = this.getEdgeDetectionMaterial(), this.renderTargetEdgeBuffer1 = new Qe(a, o, s), this.renderTargetEdgeBuffer1.texture.name = "OutlinePass.edge1", this.renderTargetEdgeBuffer1.texture.generateMipmaps = !1, this.renderTargetEdgeBuffer2 = new Qe(Math.round(a / 2), Math.round(o / 2), s), this.renderTargetEdgeBuffer2.texture.name = "OutlinePass.edge2", this.renderTargetEdgeBuffer2.texture.generateMipmaps = !1;
    const l = 4, c = 4;
    this.separableBlurMaterial1 = this.getSeperableBlurMaterial(l), this.separableBlurMaterial1.uniforms.texSize.value.set(a, o), this.separableBlurMaterial1.uniforms.kernelRadius.value = 1, this.separableBlurMaterial2 = this.getSeperableBlurMaterial(c), this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(a / 2), Math.round(o / 2)), this.separableBlurMaterial2.uniforms.kernelRadius.value = c, this.overlayMaterial = this.getOverlayMaterial(), rn === void 0 && console.error("THREE.OutlinePass relies on CopyShader");
    const u = rn;
    this.copyUniforms = Gi.clone(u.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new Ye({
      uniforms: this.copyUniforms,
      vertexShader: u.vertexShader,
      fragmentShader: u.fragmentShader,
      blending: si,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new j(), this.oldClearAlpha = 1, this.fsQuad = new Bs(null), this.tempPulseColor1 = new j(), this.tempPulseColor2 = new j(), this.textureMatrix = new G();
    function f(h, d) {
      const m = d.isPerspectiveCamera ? "perspective" : "orthographic";
      return h.replace(/DEPTH_TO_VIEW_Z/g, m + "DepthToViewZ");
    }
  }
  dispose() {
    this.renderTargetMaskBuffer.dispose(), this.renderTargetDepthBuffer.dispose(), this.renderTargetMaskDownSampleBuffer.dispose(), this.renderTargetBlurBuffer1.dispose(), this.renderTargetBlurBuffer2.dispose(), this.renderTargetEdgeBuffer1.dispose(), this.renderTargetEdgeBuffer2.dispose();
  }
  setSize(e, t) {
    this.renderTargetMaskBuffer.setSize(e, t), this.renderTargetDepthBuffer.setSize(e, t);
    let n = Math.round(e / this.downSampleRatio), i = Math.round(t / this.downSampleRatio);
    this.renderTargetMaskDownSampleBuffer.setSize(n, i), this.renderTargetBlurBuffer1.setSize(n, i), this.renderTargetEdgeBuffer1.setSize(n, i), this.separableBlurMaterial1.uniforms.texSize.value.set(n, i), n = Math.round(n / 2), i = Math.round(i / 2), this.renderTargetBlurBuffer2.setSize(n, i), this.renderTargetEdgeBuffer2.setSize(n, i), this.separableBlurMaterial2.uniforms.texSize.value.set(n, i);
  }
  changeVisibilityOfSelectedObjects(e) {
    const t = this._visibilityCache;
    function n(i) {
      i.isMesh && (e === !0 ? i.visible = t.get(i) : (t.set(i, i.visible), i.visible = e));
    }
    for (let i = 0; i < this.selectedObjects.length; i++)
      this.selectedObjects[i].traverse(n);
  }
  changeVisibilityOfNonSelectedObjects(e) {
    const t = this._visibilityCache, n = [];
    function i(a) {
      a.isMesh && n.push(a);
    }
    for (let a = 0; a < this.selectedObjects.length; a++)
      this.selectedObjects[a].traverse(i);
    function s(a) {
      if (a.isMesh || a.isSprite) {
        let o = !1;
        for (let l = 0; l < n.length; l++)
          if (n[l].id === a.id) {
            o = !0;
            break;
          }
        if (o === !1) {
          const l = a.visible;
          (e === !1 || t.get(a) === !0) && (a.visible = e), t.set(a, l);
        }
      } else
        (a.isPoints || a.isLine) && (e === !0 ? a.visible = t.get(a) : (t.set(a, a.visible), a.visible = e));
    }
    this.renderScene.traverse(s);
  }
  updateTextureMatrix() {
    this.textureMatrix.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), this.textureMatrix.multiply(this.renderCamera.projectionMatrix), this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse);
  }
  render(e, t, n, i, s) {
    if (this.selectedObjects.length > 0) {
      e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
      const a = e.autoClear;
      e.autoClear = !1, s && e.state.buffers.stencil.setTest(!1), e.setClearColor(16777215, 1), this.changeVisibilityOfSelectedObjects(!1);
      const o = this.renderScene.background;
      if (this.renderScene.background = null, this.renderScene.overrideMaterial = this.depthMaterial, e.setRenderTarget(this.renderTargetDepthBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this.changeVisibilityOfSelectedObjects(!0), this._visibilityCache.clear(), this.updateTextureMatrix(), this.changeVisibilityOfNonSelectedObjects(!1), this.renderScene.overrideMaterial = this.prepareMaskMaterial, this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near, this.renderCamera.far), this.prepareMaskMaterial.uniforms.depthTexture.value = this.renderTargetDepthBuffer.texture, this.prepareMaskMaterial.uniforms.textureMatrix.value = this.textureMatrix, e.setRenderTarget(this.renderTargetMaskBuffer), e.clear(), e.render(this.renderScene, this.renderCamera), this.renderScene.overrideMaterial = null, this.changeVisibilityOfNonSelectedObjects(!0), this._visibilityCache.clear(), this.renderScene.background = o, this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetMaskBuffer.texture, e.setRenderTarget(this.renderTargetMaskDownSampleBuffer), e.clear(), this.fsQuad.render(e), this.tempPulseColor1.copy(this.visibleEdgeColor), this.tempPulseColor2.copy(this.hiddenEdgeColor), this.pulsePeriod > 0) {
        const l = 0.625 + Math.cos(performance.now() * 0.01 / this.pulsePeriod) * 0.75 / 2;
        this.tempPulseColor1.multiplyScalar(l), this.tempPulseColor2.multiplyScalar(l);
      }
      this.fsQuad.material = this.edgeDetectionMaterial, this.edgeDetectionMaterial.uniforms.maskTexture.value = this.renderTargetMaskDownSampleBuffer.texture, this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width, this.renderTargetMaskDownSampleBuffer.height), this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value = this.tempPulseColor1, this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value = this.tempPulseColor2, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.separableBlurMaterial1, this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = He.BlurDirectionX, this.separableBlurMaterial1.uniforms.kernelRadius.value = this.edgeThickness, e.setRenderTarget(this.renderTargetBlurBuffer1), e.clear(), this.fsQuad.render(e), this.separableBlurMaterial1.uniforms.colorTexture.value = this.renderTargetBlurBuffer1.texture, this.separableBlurMaterial1.uniforms.direction.value = He.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer1), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.separableBlurMaterial2, this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetEdgeBuffer1.texture, this.separableBlurMaterial2.uniforms.direction.value = He.BlurDirectionX, e.setRenderTarget(this.renderTargetBlurBuffer2), e.clear(), this.fsQuad.render(e), this.separableBlurMaterial2.uniforms.colorTexture.value = this.renderTargetBlurBuffer2.texture, this.separableBlurMaterial2.uniforms.direction.value = He.BlurDirectionY, e.setRenderTarget(this.renderTargetEdgeBuffer2), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.overlayMaterial, this.overlayMaterial.uniforms.maskTexture.value = this.renderTargetMaskBuffer.texture, this.overlayMaterial.uniforms.edgeTexture1.value = this.renderTargetEdgeBuffer1.texture, this.overlayMaterial.uniforms.edgeTexture2.value = this.renderTargetEdgeBuffer2.texture, this.overlayMaterial.uniforms.patternTexture.value = this.patternTexture, this.overlayMaterial.uniforms.edgeStrength.value = this.edgeStrength, this.overlayMaterial.uniforms.edgeGlow.value = this.edgeGlow, this.overlayMaterial.uniforms.usePatternTexture.value = this.usePatternTexture, s && e.state.buffers.stencil.setTest(!0), e.setRenderTarget(n), this.fsQuad.render(e), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = a;
    }
    this.renderToScreen && (this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = n.texture, e.setRenderTarget(null), this.fsQuad.render(e));
  }
  getPrepareMaskMaterial() {
    return new Ye({
      uniforms: {
        depthTexture: { value: null },
        cameraNearFar: { value: new H(0.5, 0.5) },
        textureMatrix: { value: null }
      },
      vertexShader: `#include <morphtarget_pars_vertex>
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

				}`,
      fragmentShader: `#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`
    });
  }
  getEdgeDetectionMaterial() {
    return new Ye({
      uniforms: {
        maskTexture: { value: null },
        texSize: { value: new H(0.5, 0.5) },
        visibleEdgeColor: { value: new E(1, 1, 1) },
        hiddenEdgeColor: { value: new E(1, 1, 1) }
      },
      vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;

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
				}`
    });
  }
  getSeperableBlurMaterial(e) {
    return new Ye({
      defines: {
        MAX_RADIUS: e
      },
      uniforms: {
        colorTexture: { value: null },
        texSize: { value: new H(0.5, 0.5) },
        direction: { value: new H(0.5, 0.5) },
        kernelRadius: { value: 1 }
      },
      vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
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
				}`
    });
  }
  getOverlayMaterial() {
    return new Ye({
      uniforms: {
        maskTexture: { value: null },
        edgeTexture1: { value: null },
        edgeTexture2: { value: null },
        patternTexture: { value: null },
        edgeStrength: { value: 1 },
        edgeGlow: { value: 1 },
        usePatternTexture: { value: 0 }
      },
      vertexShader: `varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;

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
				}`,
      blending: ga,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    });
  }
}
He.BlurDirectionX = new H(1, 0);
He.BlurDirectionY = new H(0, 1);
class Gr {
  constructor(e, t) {
    // 场景
    le(this, "scene");
    // 相机
    le(this, "camera");
    // 相机位置
    le(this, "cameraPosition");
    // 渲染器
    le(this, "renderer");
    // 挂载点
    le(this, "dom");
    // 控制器
    le(this, "controls");
    // 辅助坐标系
    le(this, "axesHelper");
    le(this, "cssObject");
    le(this, "trackBallControls");
    le(this, "cssRender");
    le(this, "cssScene");
    le(this, "composer");
    le(this, "outlinePass");
    le(this, "tag");
    this.cameraPosition = { x: e.x, y: e.y, z: e.z }, this.dom = t;
  }
  // 初始化场景
  initScene() {
    this.scene = new Sn(), this.camera = new Bn(30, window.innerWidth / window.innerHeight, 1, 5e5), this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z), this.scene.add(this.camera), this.renderer = new xa({
      alpha: !0,
      antialias: !0
    }), this.renderer.setSize(this.dom.offsetWidth + 20, this.dom.offsetHeight), this.renderer.setClearColor(0, 0), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.shadowMap.enabled = !0, this.dom.appendChild(this.renderer.domElement), this.renderer.render(this.scene, this.camera), this.composer = new zr(this.renderer), this.scene.background = new j(12575709), window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight, this.camera.updateProjectionMatrix(), this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
  // 开始渲染
  render() {
    const e = () => {
      this.renderer.render(this.scene, this.camera), this.composer.render(), requestAnimationFrame(e);
    };
    e();
  }
  // 初始化灯光
  initLight() {
    const e = new qt(16777215, 0.6);
    this.scene.add(e);
    const t = new cn(16777215, 1);
    t.position.set(0, 0, -800), this.scene.add(t);
  }
  initAxesHelper(e) {
    const t = new Aa(e);
    this.scene.add(t);
  }
  skybox() {
    const e = `varying vec3 vWorldPosition;
        void main() {
            vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`, t = `
            uniform vec3 topColor;
            uniform vec3 bottomColor;
            uniform float offset;
            uniform float exponent;
            varying vec3 vWorldPosition;
            void main() {
                float h = normalize( vWorldPosition + offset ).y;
                gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h , 0.0), exponent ), 0.0 ) ), 1.0 );
            }
        `;
    this.scene.add(new qt(15790320, 0.5));
    const n = new Qn(16777215, 0.5);
    n.position.set(0, 1500, 200), n.angle = Math.PI * 0.2, n.decay = 0, n.castShadow = !0, n.shadow.camera.near = 200, n.shadow.camera.far = 2e3, n.shadow.bias = -222e-6, n.shadow.mapSize.width = 1024, n.shadow.mapSize.height = 1024, this.scene.add(n);
    const i = new Ni(2e4, 2e4);
    i.rotateX(-Math.PI / 2);
    const s = new Re({ color: 15788756, opacity: 0.8, side: at }), a = new S(i, s);
    a.receiveShadow = !0, this.scene.add(a);
    const o = {
      topColor: { value: new j(30719) },
      bottomColor: { value: new j(16777215) },
      offset: { value: 33 },
      exponent: { value: 0.6 }
    }, l = new ya(16777215, 16777215, 2);
    l.color.setHSL(0.6, 1, 0.6), l.groundColor.setHSL(0.095, 1, 0.75), l.position.set(0, 50, 0), o.topColor.value.copy(l.color);
    const c = new Ri(2e3, 32, 15), u = new Ye({
      uniforms: o,
      vertexShader: e,
      fragmentShader: t,
      side: va
    });
    new S(c, u);
  }
  css3dRender(e) {
    this.cssScene = new Sn();
    const t = new be(e[0]), n = new be(e[1]), i = new be(e[2]), s = new be(e[3]), a = new be(e[4]), o = new be(e[5]);
    t.position.set(-250, 200, 115), n.position.set(-380, 0, 30), i.position.set(-220, 0, 30), s.position.set(-60, 0, 30), a.position.set(100, 0, 30), o.position.set(245, 0, -35), t.rotation.set(-Math.PI / 2, 0, 0), n.rotation.set(-Math.PI / 2, 0, 0), i.rotation.set(-Math.PI / 2, 0, 0), s.rotation.set(-Math.PI / 2, 0, 0), a.rotation.set(-Math.PI / 2, 0, 0), o.rotation.set(-Math.PI / 2, 0, 0), t.scale.set(1, 1, 1), n.scale.set(1, 1, 1), i.scale.set(1, 1, 1), this.cssScene.add(t), this.cssScene.add(n), this.cssScene.add(i), this.cssScene.add(s), this.cssScene.add(a), this.cssScene.add(o), this.cssRender = new Wi(), this.cssRender.setSize(this.dom.offsetWidth, this.dom.offsetHeight), this.cssRender.domElement.style.position = "absolute", this.cssRender.domElement.style.top = "0", this.dom.appendChild(this.cssRender.domElement), this.trackBallControls = new Zi(this.camera, this.cssRender.domElement);
    const l = () => {
      requestAnimationFrame(l), this.cssRender.render(this.cssScene, this.camera), this.renderer.render(this.scene, this.camera), this.camera.updateMatrixWorld(!0), this.trackBallControls.update(), this.composer.render();
    };
    l();
  }
  tubeGeo() {
    class e extends Ci {
      constructor(g = 1) {
        super();
        le(this, "scale");
        this.scale = g;
      }
      getPoint(g, A = new E()) {
        const y = g, x = 0, w = 4 * g;
        return A.set(y, x, w).multiplyScalar(this.scale);
      }
    }
    const t = new e(115), n = new Ta(t, 50, 8, 8, !1), i = new Re({
      color: 6710886,
      side: at,
      clipShadows: !0
    }), s = new S(n, i);
    s.position.set(0, 300, 0), this.scene.add(s);
    const a = new Zt(), o = new H(), l = new H(), c = new H(), u = new Ki(this.camera, this.renderer.domElement);
    u.addEventListener("dragging-changed", (m) => {
      this.controls.enabled = !m.value;
    }), this.scene.add(u);
    const f = (m) => {
      o.x = m.clientX / window.innerWidth * 2 - 1, o.y = -(m.clientY / window.innerHeight) * 2 + 1, a.setFromCamera(o, this.camera);
      const p = a.intersectObjects([s]);
      if (p.length > 0) {
        const g = p[0].object;
        g !== u.object && (this.cssRender.domElement.style.zIndex = "-2", u.attach(g));
      }
    }, h = (m) => {
      l.x = m.clientX, l.y = m.clientY, c.distanceTo(l) === 0 && (this.cssRender.domElement.style.zIndex = "1", u.detach());
    }, d = (m) => {
      c.x = m.clientX, c.y = m.clientY;
    };
    document.addEventListener("pointermove", f), document.addEventListener("pointerup", h), document.addEventListener("pointerdown", d), this.renderer.render(this.scene, this.camera);
  }
  async loadGeo() {
    const e = this;
    let t;
    const n = await wa.load({
      url: "http://47.109.18.246:33301/tileset.json",
      renderer: e.renderer,
      options: {
        dracoDecoderPath: "https://unpkg.com/three@0.137.0/examples/js/libs/draco",
        basisTranscoderPath: "https://unpkg.com/three@0.137.0/examples/js/libs/basis",
        debug: !0,
        pointCloudColoring: Fa.RGB
      }
    }), { model: i, runtime: s } = n;
    this.scene.add(i), t = s;
    const a = new ji();
    i.position.set(0, 100, 0), i.rotation.x = Math.PI * 3 / 2;
    function o() {
      const l = a.getDelta();
      t && t.update(l, e.renderer, e.camera), e.renderer.render(e.scene, e.camera), window.requestAnimationFrame(o);
    }
    o();
  }
  loadFbxInner(e) {
    new vi().load(e, (n) => {
      n.rotation.set(0, Math.PI, 0), n.scale.set(100, 100, 100), this.scene.add(n), document.addEventListener("pointerdown", (i) => {
        const s = new Zt(), a = new H();
        a.x = i.clientX / window.innerWidth * 2 - 1, a.y = -(i.clientY / window.innerHeight) * 2 + 1, s.setFromCamera(a, this.camera);
        const o = s.intersectObjects(this.scene.children);
        o.length > 0 && (o[0].object, console.log(o, "intersects"));
      });
    });
  }
  loadFbxTree(e) {
    new vi().load(e, (n) => {
      console.log(n, "objects"), n.traverse((i) => {
        console.log(i, "object");
      }), this.scene.add(n);
    });
  }
  loadGlb(e, t, n) {
    new Xs().load(e, (s) => {
      const a = s.scene;
      n && a.scale.set(...n), t && a.position.set(...t), a.traverse((o) => {
      }), this.scene.add(s.scene);
    });
  }
}
class jr extends Dt {
  constructor(e, t, n, i, s) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = s !== void 0 ? s : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new j();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let s, a;
    this.overrideMaterial !== void 0 && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (e.getClearColor(this._oldClearColor), s = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(this._oldClearColor, s), this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = a), e.autoClear = i;
  }
}
const Vr = {
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new H(1 / 1024, 1 / 512) }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    // FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)
    //----------------------------------------------------------------------------------
    // File:				es3-kepler\FXAA\assets\shaders/FXAA_DefaultES.frag
    // SDK Version: v3.00
    // Email:			 gameworks@nvidia.com
    // Site:				http://developer.nvidia.com/
    //
    // Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
    //
    // Redistribution and use in source and binary forms, with or without
    // modification, are permitted provided that the following conditions
    // are met:
    //	* Redistributions of source code must retain the above copyright
    //		notice, this list of conditions and the following disclaimer.
    //	* Redistributions in binary form must reproduce the above copyright
    //		notice, this list of conditions and the following disclaimer in the
    //		documentation and/or other materials provided with the distribution.
    //	* Neither the name of NVIDIA CORPORATION nor the names of its
    //		contributors may be used to endorse or promote products derived
    //		from this software without specific prior written permission.
    //
    // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ``AS IS\'\' AND ANY
    // EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    // IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    // PURPOSE ARE DISCLAIMED.	IN NO EVENT SHALL THE COPYRIGHT OWNER OR
    // CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    // EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    // PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    // PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
    // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    //
    //----------------------------------------------------------------------------------
    /* glsl */
    `

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
		}`
  )
}, $r = (r, e, t) => {
  new Xs().load(r, (i) => {
    const s = i.scene;
    t && s.scale.set(...t), e && s.position.set(...e), L.scene.add(i.scene);
  });
}, eo = (r, e) => {
  const t = new Zt(), n = new H();
  n.x = r.clientX / window.innerWidth * 2 - 1, n.y = -(r.clientY / window.innerHeight) * 2 + 1, t.setFromCamera(n, L.camera);
  const i = t.intersectObjects(L.scene.children);
  if (i.length > 0) {
    const s = i[0].object;
    s && (s.name === "水泵" || s.name === "水泵_1" || s.name === "水泵_2" || s.name === "水泵_3") && (e(s), Wr(i));
  }
}, Wr = (r) => {
  const e = new jr(L.scene, L.camera);
  L.outlinePass = new He(
    new H(window.innerWidth, window.innerHeight),
    L.scene,
    L.camera
  );
  const t = new Xn(Vr);
  t.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight), L.outlinePass.renderToScreen = !0, L.outlinePass.edgeStrength = 5, L.outlinePass.edgeGlow = 1, L.outlinePass.edgeThickness = 2, L.outlinePass.pulsePeriod = 0, L.outlinePass.usePatternTexture = !1, L.outlinePass.visibleEdgeColor.set("#ffffff"), L.outlinePass.hiddenEdgeColor.set("#190a05"), L.composer.addPass(e), L.composer.addPass(t), L.composer.addPass(L.outlinePass), L.outlinePass.selectedObjects = [r[0].object];
}, to = (r) => {
  r.forEach((e) => {
    const t = new cn(e.color, e.intensity);
    t.position.set(e.position.x, e.position.y, e.position.z), L.scene.add(t);
  });
}, no = () => {
  const r = new qt(16777215, 0.6);
  L.scene.add(r);
}, io = (r, e, t) => {
  L.cssScene = new Sn(), L.tag = new be(r), L.tag.position.set(...e), L.tag.rotation.set(...t), L.tag.scale.set(1, 1, 1), L.cssScene.add(L.tag), L.cssRender = new Wi(), L.cssRender.setSize(L.dom.offsetWidth, L.dom.offsetHeight), L.cssRender.domElement.style.position = "absolute", L.cssRender.domElement.style.top = "0", L.dom.appendChild(L.cssRender.domElement), L.trackBallControls = new Zi(L.camera, L.cssRender.domElement);
  const n = () => {
    requestAnimationFrame(n), L.cssRender.render(L.cssScene, L.camera), L.renderer.render(L.scene, L.camera), L.camera.updateMatrixWorld(!0), L.trackBallControls.update(), L.composer.render();
  };
  n();
};
let L;
const so = (r, e) => {
  L = new Gr(r, e), L.initScene();
};
export {
  no as ambientLight,
  eo as checkIntersection,
  to as directionArrLight,
  so as initThree,
  $r as loadGlb,
  io as tagRender,
  L as threeObj
};
//# sourceMappingURL=index.es.js.map
