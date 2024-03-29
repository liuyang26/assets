!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {});
}(this, function (t) {
  "use strict";

  function e(t) {
    var e = {},
        n = {},
        i = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);
    return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
      browser: n,
      os: e,
      node: !1,
      canvasSupported: !!document.createElement("canvas").getContext,
      svgSupported: "undefined" != typeof SVGRect,
      touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
      pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11)
    };
  }

  function n(t, e) {
    "createCanvas" === t && (ud = null), sd[t] = e;
  }

  function i(t) {
    if (null == t || "object" != typeof t) return t;
    var e = t,
        n = td.call(t);

    if ("[object Array]" === n) {
      if (!R(t)) {
        e = [];

        for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r]);
      }
    } else if (Jc[n]) {
      if (!R(t)) {
        var o = t.constructor;
        if (t.constructor.from) e = o.from(t);else {
          e = new o(t.length);

          for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r]);
        }
      }
    } else if (!Qc[n] && !R(t) && !C(t)) {
      e = {};

      for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]));
    }

    return e;
  }

  function r(t, e, n) {
    if (!M(e) || !M(t)) return n ? i(e) : t;

    for (var a in e) if (e.hasOwnProperty(a)) {
      var o = t[a],
          s = e[a];
      !M(s) || !M(o) || x(s) || x(o) || C(s) || C(o) || S(s) || S(o) || R(s) || R(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n);
    }

    return t;
  }

  function a(t, e) {
    for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);

    return n;
  }

  function o(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

    return t;
  }

  function s(t, e, n) {
    for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);

    return t;
  }

  function l() {
    return ud || (ud = ld().getContext("2d")), ud;
  }

  function u(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);

      for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
    }

    return -1;
  }

  function h(t, e) {
    function n() {}

    var i = t.prototype;
    n.prototype = e.prototype, t.prototype = new n();

    for (var r in i) t.prototype[r] = i[r];

    t.prototype.constructor = t, t.superClass = e;
  }

  function c(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n);
  }

  function d(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0;
  }

  function f(t, e, n) {
    if (t && e) if (t.forEach && t.forEach === nd) t.forEach(e, n);else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t);
  }

  function p(t, e, n) {
    if (t && e) {
      if (t.map && t.map === ad) return t.map(e, n);

      for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));

      return i;
    }
  }

  function g(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === od) return t.reduce(e, n, i);

      for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);

      return n;
    }
  }

  function v(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === id) return t.filter(e, n);

      for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);

      return i;
    }
  }

  function m(t, e, n) {
    if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i];
  }

  function y(t, e) {
    var n = rd.call(arguments, 2);
    return function () {
      return t.apply(e, n.concat(rd.call(arguments)));
    };
  }

  function _(t) {
    var e = rd.call(arguments, 1);
    return function () {
      return t.apply(this, e.concat(rd.call(arguments)));
    };
  }

  function x(t) {
    return "[object Array]" === td.call(t);
  }

  function w(t) {
    return "function" == typeof t;
  }

  function b(t) {
    return "[object String]" === td.call(t);
  }

  function M(t) {
    var e = typeof t;
    return "function" === e || !!t && "object" == e;
  }

  function S(t) {
    return !!Qc[td.call(t)];
  }

  function I(t) {
    return !!Jc[td.call(t)];
  }

  function C(t) {
    return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument;
  }

  function T(t) {
    return t !== t;
  }

  function D() {
    for (var t = 0, e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t];
  }

  function k(t, e) {
    return null != t ? t : e;
  }

  function A(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }

  function P() {
    return Function.call.apply(rd, arguments);
  }

  function L(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }

  function O(t, e) {
    if (!t) throw new Error(e);
  }

  function B(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }

  function E(t) {
    t[hd] = !0;
  }

  function R(t) {
    return t[hd];
  }

  function z(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t);
    }

    var n = x(t),
        i = this;
    t instanceof z ? t.each(e) : t && f(t, e);
  }

  function N(t) {
    return new z(t);
  }

  function F(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];

    var r = t.length;

    for (i = 0; i < e.length; i++) n[i + r] = e[i];

    return n;
  }

  function H() {}

  function V(t, e) {
    var n = new dd(2);
    return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;
  }

  function W(t, e) {
    return t[0] = e[0], t[1] = e[1], t;
  }

  function G(t) {
    var e = new dd(2);
    return e[0] = t[0], e[1] = t[1], e;
  }

  function X(t, e, n) {
    return t[0] = e, t[1] = n, t;
  }

  function j(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
  }

  function q(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
  }

  function U(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
  }

  function Y(t) {
    return Math.sqrt(Z(t));
  }

  function Z(t) {
    return t[0] * t[0] + t[1] * t[1];
  }

  function $(t, e, n) {
    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
  }

  function K(t, e, n) {
    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
  }

  function Q(t, e) {
    return t[0] * e[0] + t[1] * e[1];
  }

  function J(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t;
  }

  function te(t, e) {
    var n = Y(e);
    return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
  }

  function ee(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }

  function ne(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }

  function ie(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t;
  }

  function re(t, e, n, i) {
    return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;
  }

  function ae(t, e, n) {
    var i = e[0],
        r = e[1];
    return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
  }

  function oe(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
  }

  function se(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
  }

  function le() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
  }

  function ue(t, e) {
    return {
      target: t,
      topTarget: e && e.topTarget
    };
  }

  function he(t, e, n) {
    return {
      type: t,
      event: n,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: n.zrX,
      offsetY: n.zrY,
      gestureEvent: n.gestureEvent,
      pinchX: n.pinchX,
      pinchY: n.pinchY,
      pinchScale: n.pinchScale,
      wheelDelta: n.zrDelta,
      zrByTouch: n.zrByTouch,
      which: n.which
    };
  }

  function ce() {}

  function de(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
        r.silent && (i = !0), r = r.parent;
      }

      return i ? xd : !0;
    }

    return !1;
  }

  function fe() {
    var t = new Md(6);
    return pe(t), t;
  }

  function pe(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
  }

  function ge(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
  }

  function ve(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
        r = e[1] * n[0] + e[3] * n[1],
        a = e[0] * n[2] + e[2] * n[3],
        o = e[1] * n[2] + e[3] * n[3],
        s = e[0] * n[4] + e[2] * n[5] + e[4],
        l = e[1] * n[4] + e[3] * n[5] + e[5];
    return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
  }

  function me(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t;
  }

  function ye(t, e, n) {
    var i = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        u = Math.sin(n),
        h = Math.cos(n);
    return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t;
  }

  function _e(t, e, n) {
    var i = n[0],
        r = n[1];
    return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t;
  }

  function xe(t, e) {
    var n = e[0],
        i = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = n * o - a * i;
    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;
  }

  function we(t) {
    var e = fe();
    return ge(e, t), e;
  }

  function be(t) {
    return t > Cd || -Cd > t;
  }

  function Me(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
  }

  function Se(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;
  }

  function Ie(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t;
  }

  function Ce(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }

  function Te(t) {
    return Se(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
  }

  function De(t) {
    return Ce(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
  }

  function ke(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;
  }

  function Ae(t, e, n) {
    return t + (e - t) * n;
  }

  function Pe(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
  }

  function Le(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }

  function Oe(t, e) {
    Nd && Le(Nd, e), Nd = zd.put(t, Nd || e.slice());
  }

  function Be(t, e) {
    if (t) {
      e = e || [];
      var n = zd.get(t);
      if (n) return Le(e, n);
      t += "";
      var i = t.replace(/ /g, "").toLowerCase();
      if (i in Rd) return Le(e, Rd[i]), Oe(t, e), e;

      if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
            a = i.indexOf(")");

        if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
              s = i.substr(r + 1, a - (r + 1)).split(","),
              l = 1;

          switch (o) {
            case "rgba":
              if (4 !== s.length) return void Pe(e, 0, 0, 0, 1);
              l = De(s.pop());

            case "rgb":
              return 3 !== s.length ? void Pe(e, 0, 0, 0, 1) : (Pe(e, Te(s[0]), Te(s[1]), Te(s[2]), l), Oe(t, e), e);

            case "hsla":
              return 4 !== s.length ? void Pe(e, 0, 0, 0, 1) : (s[3] = De(s[3]), Ee(s, e), Oe(t, e), e);

            case "hsl":
              return 3 !== s.length ? void Pe(e, 0, 0, 0, 1) : (Ee(s, e), Oe(t, e), e);

            default:
              return;
          }
        }

        Pe(e, 0, 0, 0, 1);
      } else {
        if (4 === i.length) {
          var u = parseInt(i.substr(1), 16);
          return u >= 0 && 4095 >= u ? (Pe(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Oe(t, e), e) : void Pe(e, 0, 0, 0, 1);
        }

        if (7 === i.length) {
          var u = parseInt(i.substr(1), 16);
          return u >= 0 && 16777215 >= u ? (Pe(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Oe(t, e), e) : void Pe(e, 0, 0, 0, 1);
        }
      }
    }
  }

  function Ee(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        i = De(t[1]),
        r = De(t[2]),
        a = .5 >= r ? r * (i + 1) : r + i - r * i,
        o = 2 * r - a;
    return e = e || [], Pe(e, Se(255 * ke(o, a, n + 1 / 3)), Se(255 * ke(o, a, n)), Se(255 * ke(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;
  }

  function Re(t) {
    if (t) {
      var e,
          n,
          i = t[0] / 255,
          r = t[1] / 255,
          a = t[2] / 255,
          o = Math.min(i, r, a),
          s = Math.max(i, r, a),
          l = s - o,
          u = (s + o) / 2;
      if (0 === l) e = 0, n = 0;else {
        n = .5 > u ? l / (s + o) : l / (2 - s - o);
        var h = ((s - i) / 6 + l / 2) / l,
            c = ((s - r) / 6 + l / 2) / l,
            d = ((s - a) / 6 + l / 2) / l;
        i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1);
      }
      var f = [360 * e, n, u];
      return null != t[3] && f.push(t[3]), f;
    }
  }

  function ze(t, e) {
    var n = Be(t);

    if (n) {
      for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);

      return Ge(n, 4 === n.length ? "rgba" : "rgb");
    }
  }

  function Ne(t) {
    var e = Be(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
  }

  function Fe(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];
      var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = e[r],
          s = e[a],
          l = i - r;
      return n[0] = Se(Ae(o[0], s[0], l)), n[1] = Se(Ae(o[1], s[1], l)), n[2] = Se(Ae(o[2], s[2], l)), n[3] = Ce(Ae(o[3], s[3], l)), n;
    }
  }

  function He(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var i = t * (e.length - 1),
          r = Math.floor(i),
          a = Math.ceil(i),
          o = Be(e[r]),
          s = Be(e[a]),
          l = i - r,
          u = Ge([Se(Ae(o[0], s[0], l)), Se(Ae(o[1], s[1], l)), Se(Ae(o[2], s[2], l)), Ce(Ae(o[3], s[3], l))], "rgba");
      return n ? {
        color: u,
        leftIndex: r,
        rightIndex: a,
        value: i
      } : u;
    }
  }

  function Ve(t, e, n, i) {
    return t = Be(t), t ? (t = Re(t), null != e && (t[0] = Ie(e)), null != n && (t[1] = De(n)), null != i && (t[2] = De(i)), Ge(Ee(t), "rgba")) : void 0;
  }

  function We(t, e) {
    return t = Be(t), t && null != e ? (t[3] = Ce(e), Ge(t, "rgba")) : void 0;
  }

  function Ge(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];
      return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";
    }
  }

  function Xe(t, e) {
    return t[e];
  }

  function je(t, e, n) {
    t[e] = n;
  }

  function qe(t, e, n) {
    return (e - t) * n + t;
  }

  function Ue(t, e, n) {
    return n > .5 ? e : t;
  }

  function Ye(t, e, n, i, r) {
    var a = t.length;
    if (1 == r) for (var o = 0; a > o; o++) i[o] = qe(t[o], e[o], n);else for (var s = a && t[0].length, o = 0; a > o; o++) for (var l = 0; s > l; l++) i[o][l] = qe(t[o][l], e[o][l], n);
  }

  function Ze(t, e, n) {
    var i = t.length,
        r = e.length;

    if (i !== r) {
      var a = i > r;
      if (a) t.length = r;else for (var o = i; r > o; o++) t.push(1 === n ? e[o] : Wd.call(e[o]));
    }

    for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) if (1 === n) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l]);
  }

  function $e(t, e, n) {
    if (t === e) return !0;
    var i = t.length;
    if (i !== e.length) return !1;

    if (1 === n) {
      for (var r = 0; i > r; r++) if (t[r] !== e[r]) return !1;
    } else for (var a = t[0].length, r = 0; i > r; r++) for (var o = 0; a > o; o++) if (t[r][o] !== e[r][o]) return !1;

    return !0;
  }

  function Ke(t, e, n, i, r, a, o, s, l) {
    var u = t.length;
    if (1 == l) for (var h = 0; u > h; h++) s[h] = Qe(t[h], e[h], n[h], i[h], r, a, o);else for (var c = t[0].length, h = 0; u > h; h++) for (var d = 0; c > d; d++) s[h][d] = Qe(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o);
  }

  function Qe(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }

  function Je(t) {
    if (d(t)) {
      var e = t.length;

      if (d(t[0])) {
        for (var n = [], i = 0; e > i; i++) n.push(Wd.call(t[i]));

        return n;
      }

      return Wd.call(t);
    }

    return t;
  }

  function tn(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
  }

  function en(t) {
    var e = t[t.length - 1].value;
    return d(e && e[0]) ? 2 : 1;
  }

  function nn(t, e, n, i, r, a) {
    var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        u = i.length;

    if (u) {
      var h,
          c = i[0].value,
          f = d(c),
          p = !1,
          g = !1,
          v = f ? en(i) : 0;
      i.sort(function (t, e) {
        return t.time - e.time;
      }), h = i[u - 1].time;

      for (var m = [], y = [], _ = i[0].value, x = !0, w = 0; u > w; w++) {
        m.push(i[w].time / h);
        var b = i[w].value;

        if (f && $e(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
          var M = Be(b);
          M ? (b = M, p = !0) : g = !0;
        }

        y.push(b);
      }

      if (a || !x) {
        for (var S = y[u - 1], w = 0; u - 1 > w; w++) f ? Ze(y[w], S, v) : !isNaN(y[w]) || isNaN(S) || g || p || (y[w] = S);

        f && Ze(o(t._target, r), S, v);
        var I,
            C,
            T,
            D,
            k,
            A,
            P = 0,
            L = 0;
        if (p) var O = [0, 0, 0, 0];

        var B = function (t, e) {
          var n;
          if (0 > e) n = 0;else if (L > e) {
            for (I = Math.min(P + 1, u - 1), n = I; n >= 0 && !(m[n] <= e); n--);

            n = Math.min(n, u - 2);
          } else {
            for (n = P; u > n && !(m[n] > e); n++);

            n = Math.min(n - 1, u - 2);
          }
          P = n, L = e;
          var i = m[n + 1] - m[n];
          if (0 !== i) if (C = (e - m[n]) / i, l) {
            if (D = y[n], T = y[0 === n ? n : n - 1], k = y[n > u - 2 ? u - 1 : n + 1], A = y[n > u - 3 ? u - 1 : n + 2], f) Ke(T, D, k, A, C, C * C, C * C * C, o(t, r), v);else {
              var a;
              if (p) a = Ke(T, D, k, A, C, C * C, C * C * C, O, 1), a = tn(O);else {
                if (g) return Ue(D, k, C);
                a = Qe(T, D, k, A, C, C * C, C * C * C);
              }
              s(t, r, a);
            }
          } else if (f) Ye(y[n], y[n + 1], C, o(t, r), v);else {
            var a;
            if (p) Ye(y[n], y[n + 1], C, O, 1), a = tn(O);else {
              if (g) return Ue(y[n], y[n + 1], C);
              a = qe(y[n], y[n + 1], C);
            }
            s(t, r, a);
          }
        },
            E = new Me({
          target: t._target,
          life: h,
          loop: t._loop,
          delay: t._delay,
          onframe: B,
          ondestroy: n
        });

        return e && "spline" !== e && (E.easing = e), E;
      }
    }
  }

  function rn(t, e, n, i) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i;
  }

  function an(t) {
    for (var e = 0; t >= ef;) e |= 1 & t, t >>= 1;

    return t + e;
  }

  function on(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;

    if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) r++;

      sn(t, e, r);
    } else for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;

    return r - e;
  }

  function sn(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];
      t[e++] = t[n], t[n--] = i;
    }
  }

  function ln(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;

      var u = i - s;

      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];

        case 2:
          t[s + 2] = t[s + 1];

        case 1:
          t[s + 1] = t[s];
          break;

        default:
          for (; u > 0;) t[s + u] = t[s + u - 1], u--;

      }

      t[s] = o;
    }
  }

  function un(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;

    if (a(t, e[n + r]) > 0) {
      for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);

      l > s && (l = s), o += r, l += r;
    } else {
      for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);

      l > s && (l = s);
      var u = o;
      o = r - l, l = r - u;
    }

    for (o++; l > o;) {
      var h = o + (l - o >>> 1);
      a(t, e[n + h]) > 0 ? o = h + 1 : l = h;
    }

    return l;
  }

  function hn(t, e, n, i, r, a) {
    var o = 0,
        s = 0,
        l = 1;

    if (a(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);

      l > s && (l = s);
      var u = o;
      o = r - l, l = r - u;
    } else {
      for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);

      l > s && (l = s), o += r, l += r;
    }

    for (o++; l > o;) {
      var h = o + (l - o >>> 1);
      a(t, e[n + h]) < 0 ? l = h : o = h + 1;
    }

    return l;
  }

  function cn(t, e) {
    function n(t, e) {
      l[c] = t, u[c] = e, c += 1;
    }

    function i() {
      for (; c > 1;) {
        var t = c - 2;
        if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;else if (u[t] > u[t + 1]) break;
        a(t);
      }
    }

    function r() {
      for (; c > 1;) {
        var t = c - 2;
        t > 0 && u[t - 1] < u[t + 1] && t--, a(t);
      }
    }

    function a(n) {
      var i = l[n],
          r = u[n],
          a = l[n + 1],
          h = u[n + 1];
      u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
      var d = hn(t[a], t, i, r, 0, e);
      i += d, r -= d, 0 !== r && (h = un(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a, h) : s(i, r, a, h)));
    }

    function o(n, i, r, a) {
      var o = 0;

      for (o = 0; i > o; o++) d[o] = t[n + o];

      var s = 0,
          l = r,
          u = n;

      if (t[u++] = t[l++], 0 !== --a) {
        if (1 === i) {
          for (o = 0; a > o; o++) t[u + o] = t[l + o];

          return void (t[u + a] = d[s]);
        }

        for (var c, f, p, g = h;;) {
          c = 0, f = 0, p = !1;

          do if (e(t[l], d[s]) < 0) {
            if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
              p = !0;
              break;
            }
          } else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {
            p = !0;
            break;
          } while (g > (c | f));

          if (p) break;

          do {
            if (c = hn(t[l], d, s, i, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) t[u + o] = d[s + o];

              if (u += c, s += c, i -= c, 1 >= i) {
                p = !0;
                break;
              }
            }

            if (t[u++] = t[l++], 0 === --a) {
              p = !0;
              break;
            }

            if (f = un(d[s], t, l, a, 0, e), 0 !== f) {
              for (o = 0; f > o; o++) t[u + o] = t[l + o];

              if (u += f, l += f, a -= f, 0 === a) {
                p = !0;
                break;
              }
            }

            if (t[u++] = d[s++], 1 === --i) {
              p = !0;
              break;
            }

            g--;
          } while (c >= nf || f >= nf);

          if (p) break;
          0 > g && (g = 0), g += 2;
        }

        if (h = g, 1 > h && (h = 1), 1 === i) {
          for (o = 0; a > o; o++) t[u + o] = t[l + o];

          t[u + a] = d[s];
        } else {
          if (0 === i) throw new Error();

          for (o = 0; i > o; o++) t[u + o] = d[s + o];
        }
      } else for (o = 0; i > o; o++) t[u + o] = d[s + o];
    }

    function s(n, i, r, a) {
      var o = 0;

      for (o = 0; a > o; o++) d[o] = t[r + o];

      var s = n + i - 1,
          l = a - 1,
          u = r + a - 1,
          c = 0,
          f = 0;

      if (t[u--] = t[s--], 0 !== --i) {
        if (1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];

          return void (t[u] = d[l]);
        }

        for (var p = h;;) {
          var g = 0,
              v = 0,
              m = !1;

          do if (e(d[l], t[s]) < 0) {
            if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
              m = !0;
              break;
            }
          } else if (t[u--] = d[l--], v++, g = 0, 1 === --a) {
            m = !0;
            break;
          } while (p > (g | v));

          if (m) break;

          do {
            if (g = i - hn(d[l], t, n, i, i - 1, e), 0 !== g) {
              for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];

              if (0 === i) {
                m = !0;
                break;
              }
            }

            if (t[u--] = d[l--], 1 === --a) {
              m = !0;
              break;
            }

            if (v = a - un(t[s], d, 0, a, a - 1, e), 0 !== v) {
              for (u -= v, l -= v, a -= v, f = u + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];

              if (1 >= a) {
                m = !0;
                break;
              }
            }

            if (t[u--] = t[s--], 0 === --i) {
              m = !0;
              break;
            }

            p--;
          } while (g >= nf || v >= nf);

          if (m) break;
          0 > p && (p = 0), p += 2;
        }

        if (h = p, 1 > h && (h = 1), 1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];

          t[u] = d[l];
        } else {
          if (0 === a) throw new Error();

          for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o];
        }
      } else for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o];
    }

    var l,
        u,
        h = nf,
        c = 0,
        d = [];
    l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n;
  }

  function dn(t, e, n, i) {
    n || (n = 0), i || (i = t.length);
    var r = i - n;

    if (!(2 > r)) {
      var a = 0;
      if (ef > r) return a = on(t, n, i, e), void ln(t, n, i, n + a, e);
      var o = new cn(t, e),
          s = an(r);

      do {
        if (a = on(t, n, i, e), s > a) {
          var l = r;
          l > s && (l = s), ln(t, n, n + l, n + a, e), a = l;
        }

        o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;
      } while (0 !== r);

      o.forceMergeRuns();
    }
  }

  function fn(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
  }

  function pn(t, e, n) {
    var i = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;
    e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
    var s = t.createLinearGradient(i, a, r, o);
    return s;
  }

  function gn(t, e, n) {
    var i = n.width,
        r = n.height,
        a = Math.min(i, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;
    e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
    var u = t.createRadialGradient(o, s, 0, o, s, l);
    return u;
  }

  function vn() {
    return !1;
  }

  function mn(t, e, n) {
    var i = ld(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = i.style;
    return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i;
  }

  function yn(t) {
    if ("string" == typeof t) {
      var e = gf.get(t);
      return e && e.image;
    }

    return t;
  }

  function _n(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;
        var a = gf.get(t),
            o = {
          hostEl: n,
          cb: i,
          cbPayload: r
        };
        return a ? (e = a.image, !wn(e) && a.pending.push(o)) : (!e && (e = new Image()), e.onload = xn, gf.put(t, e.__cachedImgObj = {
          image: e,
          pending: [o]
        }), e.src = e.__zrImageSrc = t), e;
      }

      return t;
    }

    return e;
  }

  function xn() {
    var t = this.__cachedImgObj;
    this.onload = this.__cachedImgObj = null;

    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
          i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty();
    }

    t.pending.length = 0;
  }

  function wn(t) {
    return t && t.width && t.height;
  }

  function bn(t, e) {
    e = e || xf;
    var n = t + ":" + e;
    if (vf[n]) return vf[n];

    for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(Bn(i[a], e).width, r);

    return mf > yf && (mf = 0, vf = {}), mf++, vf[n] = r, r;
  }

  function Mn(t, e, n, i, r, a, o) {
    return a ? In(t, e, n, i, r, a, o) : Sn(t, e, n, i, r, o);
  }

  function Sn(t, e, n, i, r, a) {
    var o = En(t, e, r, a),
        s = bn(t, e);
    r && (s += r[1] + r[3]);
    var l = o.outerHeight,
        u = Cn(0, s, n),
        h = Tn(0, l, i),
        c = new rn(u, h, s, l);
    return c.lineHeight = o.lineHeight, c;
  }

  function In(t, e, n, i, r, a, o) {
    var s = Rn(t, {
      rich: a,
      truncate: o,
      font: e,
      textAlign: n,
      textPadding: r
    }),
        l = s.outerWidth,
        u = s.outerHeight,
        h = Cn(0, l, n),
        c = Tn(0, u, i);
    return new rn(h, c, l, u);
  }

  function Cn(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
  }

  function Tn(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
  }

  function Dn(t, e, n) {
    var i = e.x,
        r = e.y,
        a = e.height,
        o = e.width,
        s = a / 2,
        l = "left",
        u = "top";

    switch (t) {
      case "left":
        i -= n, r += s, l = "right", u = "middle";
        break;

      case "right":
        i += n + o, r += s, u = "middle";
        break;

      case "top":
        i += o / 2, r -= n, l = "center", u = "bottom";
        break;

      case "bottom":
        i += o / 2, r += a + n, l = "center";
        break;

      case "inside":
        i += o / 2, r += s, l = "center", u = "middle";
        break;

      case "insideLeft":
        i += n, r += s, u = "middle";
        break;

      case "insideRight":
        i += o - n, r += s, l = "right", u = "middle";
        break;

      case "insideTop":
        i += o / 2, r += n, l = "center";
        break;

      case "insideBottom":
        i += o / 2, r += a - n, l = "center", u = "bottom";
        break;

      case "insideTopLeft":
        i += n, r += n;
        break;

      case "insideTopRight":
        i += o - n, r += n, l = "right";
        break;

      case "insideBottomLeft":
        i += n, r += a - n, u = "bottom";
        break;

      case "insideBottomRight":
        i += o - n, r += a - n, l = "right", u = "bottom";
    }

    return {
      x: i,
      y: r,
      textAlign: l,
      textVerticalAlign: u
    };
  }

  function kn(t, e, n, i, r) {
    if (!e) return "";
    var a = (t + "").split("\n");
    r = An(e, n, i, r);

    for (var o = 0, s = a.length; s > o; o++) a[o] = Pn(a[o], r);

    return a.join("\n");
  }

  function An(t, e, n, i) {
    i = o({}, i), i.font = e;
    var n = k(n, "...");
    i.maxIterations = k(i.maxIterations, 2);
    var r = i.minChar = k(i.minChar, 0);
    i.cnCharWidth = bn("国", e);
    var a = i.ascCharWidth = bn("a", e);
    i.placeholder = k(i.placeholder, "");

    for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;

    var u = bn(n);
    return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i;
  }

  function Pn(t, e) {
    var n = e.containerWidth,
        i = e.font,
        r = e.contentWidth;
    if (!n) return "";
    var a = bn(t, i);
    if (n >= a) return t;

    for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;
        break;
      }

      var s = 0 === o ? Ln(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
      t = t.substr(0, s), a = bn(t, i);
    }

    return "" === t && (t = e.placeholder), t;
  }

  function Ln(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);
      r += s >= 0 && 127 >= s ? n : i;
    }

    return a;
  }

  function On(t) {
    return bn("国", t);
  }

  function Bn(t, e) {
    return wf.measureText(t, e);
  }

  function En(t, e, n, i) {
    null != t && (t += "");
    var r = On(e),
        a = t ? t.split("\n") : [],
        o = a.length * r,
        s = o;

    if (n && (s += n[0] + n[2]), t && i) {
      var l = i.outerHeight,
          u = i.outerWidth;
      if (null != l && s > l) t = "", a = [];else if (null != u) for (var h = An(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
        minChar: i.minChar,
        placeholder: i.placeholder
      }), c = 0, d = a.length; d > c; c++) a[c] = Pn(a[c], h);
    }

    return {
      lines: a,
      height: o,
      outerHeight: s,
      lineHeight: r
    };
  }

  function Rn(t, e) {
    var n = {
      lines: [],
      width: 0,
      height: 0
    };
    if (null != t && (t += ""), !t) return n;

    for (var i, r = _f.lastIndex = 0; null != (i = _f.exec(t));) {
      var a = i.index;
      a > r && zn(n, t.substring(r, a)), zn(n, i[2], i[1]), r = _f.lastIndex;
    }

    r < t.length && zn(n, t.substring(r, t.length));
    var o = n.lines,
        s = 0,
        l = 0,
        u = [],
        h = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;
    h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));

    for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
            x = _.styleName && e.rich[_.styleName] || {},
            w = _.textPadding = x.textPadding,
            b = _.font = x.font || e.font,
            M = _.textHeight = k(x.textHeight, On(b));
        if (w && (M += w[0] + w[2]), _.height = M, _.lineHeight = A(x.textLineHeight, e.textLineHeight, M), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return {
          lines: [],
          width: 0,
          height: 0
        };
        _.textWidth = bn(_.text, b);
        var S = x.textWidth,
            I = null == S || "auto" === S;
        if ("string" == typeof S && "%" === S.charAt(S.length - 1)) _.percentWidth = S, u.push(_), S = 0;else {
          if (I) {
            S = _.textWidth;
            var C = x.textBackgroundColor,
                T = C && C.image;
            T && (T = yn(T), wn(T) && (S = Math.max(S, T.width * M / T.height)));
          }

          var D = w ? w[1] + w[3] : 0;
          S += D;
          var P = null != d ? d - m : null;
          null != P && S > P && (!I || D > P ? (_.text = "", _.textWidth = S = 0) : (_.text = kn(_.text, P - D, b, c.ellipsis, {
            minChar: c.minChar
          }), _.textWidth = bn(_.text, b), S = _.textWidth + D));
        }
        m += _.width = S, x && (v = Math.max(v, _.lineHeight));
      }

      g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);
    }

    n.outerWidth = n.width = k(e.textWidth, l), n.outerHeight = n.height = k(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);

    for (var p = 0; p < u.length; p++) {
      var _ = u[p],
          L = _.percentWidth;
      _.width = parseInt(L, 10) / 100 * l;
    }

    return n;
  }

  function zn(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
          l = {
        styleName: n,
        text: s,
        isLineHolder: !s && !i
      };
      if (o) a.push({
        tokens: [l]
      });else {
        var u = (a[a.length - 1] || (a[0] = {
          tokens: []
        })).tokens,
            h = u.length;
        1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l);
      }
    }
  }

  function Nn(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
    return e && B(e) || t.textFont || t.font;
  }

  function Fn(t, e) {
    var n,
        i,
        r,
        a,
        o = e.x,
        s = e.y,
        l = e.width,
        u = e.height,
        h = e.r;
    0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;
    var c;
    n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
  }

  function Hn(t) {
    return Vn(t), f(t.rich, Vn), t;
  }

  function Vn(t) {
    if (t) {
      t.font = Nn(t);
      var e = t.textAlign;
      "middle" === e && (e = "center"), t.textAlign = null == e || bf[e] ? e : "left";
      var n = t.textVerticalAlign || t.textBaseline;
      "center" === n && (n = "middle"), t.textVerticalAlign = null == n || Mf[n] ? n : "top";
      var i = t.textPadding;
      i && (t.textPadding = L(t.textPadding));
    }
  }

  function Wn(t, e, n, i, r) {
    i.rich ? Xn(t, e, n, i, r) : Gn(t, e, n, i, r);
  }

  function Gn(t, e, n, i, r) {
    var a = Qn(e, "font", i.font || xf),
        o = i.textPadding,
        s = t.__textCotentBlock;
    (!s || t.__dirty) && (s = t.__textCotentBlock = En(n, a, o, i.truncate));
    var l = s.outerHeight,
        u = s.lines,
        h = s.lineHeight,
        c = Kn(l, i, r),
        d = c.baseX,
        f = c.baseY,
        p = c.textAlign,
        g = c.textVerticalAlign;
    qn(e, i, r, d, f);

    var v = Tn(f, l, g),
        m = d,
        y = v,
        _ = Yn(i);

    if (_ || o) {
      var x = bn(n, a),
          w = x;
      o && (w += o[1] + o[3]);
      var b = Cn(d, w, p);
      _ && Zn(t, e, i, b, v, w, l), o && (m = ni(d, p, o), y += o[0]);
    }

    Qn(e, "textAlign", p || "left"), Qn(e, "textBaseline", "middle"), Qn(e, "shadowBlur", i.textShadowBlur || 0), Qn(e, "shadowColor", i.textShadowColor || "transparent"), Qn(e, "shadowOffsetX", i.textShadowOffsetX || 0), Qn(e, "shadowOffsetY", i.textShadowOffsetY || 0), y += h / 2;
    var M = i.textStrokeWidth,
        S = Jn(i.textStroke, M),
        I = ti(i.textFill);
    S && (Qn(e, "lineWidth", M), Qn(e, "strokeStyle", S)), I && Qn(e, "fillStyle", I);

    for (var C = 0; C < u.length; C++) S && e.strokeText(u[C], m, y), I && e.fillText(u[C], m, y), y += h;
  }

  function Xn(t, e, n, i, r) {
    var a = t.__textCotentBlock;
    (!a || t.__dirty) && (a = t.__textCotentBlock = Rn(n, i)), jn(t, e, a, i, r);
  }

  function jn(t, e, n, i, r) {
    var a = n.width,
        o = n.outerWidth,
        s = n.outerHeight,
        l = i.textPadding,
        u = Kn(s, i, r),
        h = u.baseX,
        c = u.baseY,
        d = u.textAlign,
        f = u.textVerticalAlign;
    qn(e, i, r, h, c);
    var p = Cn(h, o, d),
        g = Tn(c, s, f),
        v = p,
        m = g;
    l && (v += l[3], m += l[0]);
    var y = v + a;
    Yn(i) && Zn(t, e, i, p, g, o, s);

    for (var _ = 0; _ < n.lines.length; _++) {
      for (var x, w = n.lines[_], b = w.tokens, M = b.length, S = w.lineHeight, I = w.width, C = 0, T = v, D = y, k = M - 1; M > C && (x = b[C], !x.textAlign || "left" === x.textAlign);) Un(t, e, x, i, S, m, T, "left"), I -= x.width, T += x.width, C++;

      for (; k >= 0 && (x = b[k], "right" === x.textAlign);) Un(t, e, x, i, S, m, D, "right"), I -= x.width, D -= x.width, k--;

      for (T += (a - (T - v) - (y - D) - I) / 2; k >= C;) x = b[C], Un(t, e, x, i, S, m, T + x.width / 2, "center"), T += x.width, C++;

      m += S;
    }
  }

  function qn(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;
      "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
    }
  }

  function Un(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {},
        u = n.textVerticalAlign,
        h = a + r / 2;
    "top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && Yn(l) && Zn(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);
    var c = n.textPadding;
    c && (o = ni(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), Qn(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)), Qn(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), Qn(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)), Qn(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Qn(e, "textAlign", s), Qn(e, "textBaseline", "middle"), Qn(e, "font", n.font || xf);
    var d = Jn(l.textStroke || i.textStroke, p),
        f = ti(l.textFill || i.textFill),
        p = k(l.textStrokeWidth, i.textStrokeWidth);
    d && (Qn(e, "lineWidth", p), Qn(e, "strokeStyle", d), e.strokeText(n.text, o, h)), f && (Qn(e, "fillStyle", f), e.fillText(n.text, o, h));
  }

  function Yn(t) {
    return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
  }

  function Zn(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
        l = n.textBorderWidth,
        u = n.textBorderColor,
        h = b(s);

    if (Qn(e, "shadowBlur", n.textBoxShadowBlur || 0), Qn(e, "shadowColor", n.textBoxShadowColor || "transparent"), Qn(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Qn(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
      e.beginPath();
      var c = n.textBorderRadius;
      c ? Fn(e, {
        x: i,
        y: r,
        width: a,
        height: o,
        r: c
      }) : e.rect(i, r, a, o), e.closePath();
    }

    if (h) Qn(e, "fillStyle", s), e.fill();else if (M(s)) {
      var d = s.image;
      d = _n(d, null, t, $n, s), d && wn(d) && e.drawImage(d, i, r, a, o);
    }
    l && u && (Qn(e, "lineWidth", l), Qn(e, "strokeStyle", u), e.stroke());
  }

  function $n(t, e) {
    e.image = t;
  }

  function Kn(t, e, n) {
    var i = e.x || 0,
        r = e.y || 0,
        a = e.textAlign,
        o = e.textVerticalAlign;

    if (n) {
      var s = e.textPosition;
      if (s instanceof Array) i = n.x + ei(s[0], n.width), r = n.y + ei(s[1], n.height);else {
        var l = Dn(s, n, e.textDistance);
        i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;
      }
      var u = e.textOffset;
      u && (i += u[0], r += u[1]);
    }

    return {
      baseX: i,
      baseY: r,
      textAlign: a,
      textVerticalAlign: o
    };
  }

  function Qn(t, e, n) {
    return t[e] = of(t, e, n), t[e];
  }

  function Jn(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }

  function ti(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }

  function ei(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
  }

  function ni(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
  }

  function ii(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
  }

  function ri(t) {
    t = t || {}, $d.call(this, t);

    for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);

    this.style = new lf(t.style, this), this._rect = null, this.__clipPaths = [];
  }

  function ai(t) {
    ri.call(this, t);
  }

  function oi(t) {
    return parseInt(t, 10);
  }

  function si(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1;
  }

  function li(t, e, n) {
    return Af.copy(t.getBoundingRect()), t.transform && Af.applyTransform(t.transform), Pf.width = e, Pf.height = n, !Af.intersect(Pf);
  }

  function ui(t, e) {
    if (t == e) return !1;
    if (!t || !e || t.length !== e.length) return !0;

    for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
  }

  function hi(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
    }
  }

  function ci(t, e) {
    var n = document.createElement("div");
    return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n;
  }

  function di(t) {
    return t.getBoundingClientRect ? t.getBoundingClientRect() : {
      left: 0,
      top: 0
    };
  }

  function fi(t, e, n, i) {
    return n = n || {}, i || !Kc.canvasSupported ? pi(t, e, n) : Kc.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : pi(t, e, n), n;
  }

  function pi(t, e, n) {
    var i = di(t);
    n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top;
  }

  function gi(t, e, n) {
    if (e = e || window.event, null != e.zrX) return e;
    var i = e.type,
        r = i && i.indexOf("touch") >= 0;

    if (r) {
      var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
      a && fi(t, a, e, n);
    } else fi(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;

    var o = e.button;
    return null == e.which && void 0 !== o && Bf.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
  }

  function vi(t, e, n) {
    Of ? t.addEventListener(e, n) : t.attachEvent("on" + e, n);
  }

  function mi(t, e, n) {
    Of ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n);
  }

  function yi(t) {
    var e = t[1][0] - t[0][0],
        n = t[1][1] - t[0][1];
    return Math.sqrt(e * e + n * n);
  }

  function _i(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }

  function xi(t) {
    return "mousewheel" === t && Kc.browser.firefox ? "DOMMouseScroll" : t;
  }

  function wi(t, e, n) {
    var i = t._gestureMgr;
    "start" === n && i.clear();
    var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);

    if ("end" === n && i.clear(), r) {
      var a = r.type;
      e.gestureEvent = a, t.handler.dispatchToElement({
        target: r.target
      }, a, r.event);
    }
  }

  function bi(t) {
    t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
      t._touching = !1;
    }, 700);
  }

  function Mi(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e;
  }

  function Si(t) {
    function e(t, e) {
      return function () {
        return e._touching ? void 0 : t.apply(e, arguments);
      };
    }

    f(Vf, function (e) {
      t._handlers[e] = y(Xf[e], t);
    }), f(Gf, function (e) {
      t._handlers[e] = y(Xf[e], t);
    }), f(Hf, function (n) {
      t._handlers[n] = e(Xf[n], t);
    });
  }

  function Ii(t) {
    function e(e, n) {
      f(e, function (e) {
        vi(t, xi(e), n._handlers[e]);
      }, n);
    }

    _d.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new zf(), this._handlers = {}, Si(this), Kc.pointerEventsSupported ? e(Gf, this) : (Kc.touchEventsSupported && e(Vf, this), e(Hf, this));
  }

  function Ci(t, e) {
    var n = new $f(Zc(), t, e);
    return Yf[n.id] = n, n;
  }

  function Ti(t) {
    if (t) t.dispose();else {
      for (var e in Yf) Yf.hasOwnProperty(e) && Yf[e].dispose();

      Yf = {};
    }
    return this;
  }

  function Di(t) {
    return Yf[t];
  }

  function ki(t, e) {
    Uf[t] = e;
  }

  function Ai(t) {
    delete Yf[t];
  }

  function Pi(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }

  function Li(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};

      for (var i = 0, r = n.length; r > i; i++) {
        var a = n[i];
        !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
      }
    }
  }

  function Oi(t) {
    return !Jf(t) || tp(t) || t instanceof Date ? t : t.value;
  }

  function Bi(t) {
    return Jf(t) && !(t instanceof Array);
  }

  function Ei(t, e) {
    e = (e || []).slice();
    var n = p(t || [], function (t) {
      return {
        exist: t
      };
    });
    return Qf(e, function (t, i) {
      if (Jf(t)) {
        for (var r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void (e[i] = null);

        for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;
          if (!(n[r].option || null != a.id && null != t.id || null == t.name || Ni(t) || Ni(a) || a.name !== t.name + "")) return n[r].option = t, void (e[i] = null);
        }
      }
    }), Qf(e, function (t) {
      if (Jf(t)) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e].exist;

          if (!n[e].option && !Ni(i) && null == t.id) {
            n[e].option = t;
            break;
          }
        }

        e >= n.length && n.push({
          option: t
        });
      }
    }), n;
  }

  function Ri(t) {
    var e = N();
    Qf(t, function (t) {
      var n = t.exist;
      n && e.set(n.id, t);
    }), Qf(t, function (t) {
      var n = t.option;
      O(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});
    }), Qf(t, function (t, n) {
      var i = t.exist,
          r = t.option,
          a = t.keyInfo;

      if (Jf(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : ep + n, i) a.id = i.id;else if (null != r.id) a.id = r.id + "";else {
          var o = 0;

          do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id));
        }
        e.set(a.id, t);
      }
    });
  }

  function zi(t) {
    var e = t.name;
    return !(!e || !e.indexOf(ep));
  }

  function Ni(t) {
    return Jf(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00");
  }

  function Fi(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e);
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function (e) {
      return t.indexOfName(e);
    }) : t.indexOfName(e.name) : void 0;
  }

  function Hi() {
    var t = "__\x00ec_inner_" + ip++ + "_" + Math.random().toFixed(5);
    return function (e) {
      return e[t] || (e[t] = {});
    };
  }

  function Vi(t, e, n) {
    if (b(e)) {
      var i = {};
      i[e + "Index"] = 0, e = i;
    }

    var r = n && n.defaultMainType;
    !r || Wi(e, r + "Index") || Wi(e, r + "Id") || Wi(e, r + "Name") || (e[r + "Index"] = 0);
    var a = {};
    return Qf(e, function (i, r) {
      var i = e[r];
      if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = i);
      var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = o[1],
          l = (o[2] || "").toLowerCase();

      if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
        var h = {
          mainType: s
        };
        ("index" !== l || "all" !== i) && (h[l] = i);
        var c = t.queryComponents(h);
        a[s + "Models"] = c, a[s + "Model"] = c[0];
      }
    }), a;
  }

  function Wi(t, e) {
    return t && t.hasOwnProperty(e);
  }

  function Gi(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
  }

  function Xi(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }

  function ji(t) {
    var e = {
      main: "",
      sub: ""
    };
    return t && (t = t.split(rp), e.main = t[0] || "", e.sub = t[1] || ""), e;
  }

  function qi(t) {
    O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }

  function Ui(t) {
    t.$constructor = t, t.extend = function (t) {
      var e = this,
          n = function () {
        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
      };

      return o(n.prototype, t), n.extend = this.extend, n.superCall = Zi, n.superApply = $i, h(n, this), n.superClass = e, n;
    };
  }

  function Yi(t) {
    var e = ["__\x00is_clz", op++, Math.random().toFixed(3)].join("_");
    t.prototype[e] = !0, t.isInstance = function (t) {
      return !(!t || !t[e]);
    };
  }

  function Zi(t, e) {
    var n = P(arguments, 2);
    return this.superClass.prototype[e].apply(t, n);
  }

  function $i(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }

  function Ki(t, e) {
    function n(t) {
      var e = i[t.main];
      return e && e[ap] || (e = i[t.main] = {}, e[ap] = !0), e;
    }

    e = e || {};
    var i = {};

    if (t.registerClass = function (t, e) {
      if (e) if (qi(e), e = ji(e), e.sub) {
        if (e.sub !== ap) {
          var r = n(e);
          r[e.sub] = t;
        }
      } else i[e.main] = t;
      return t;
    }, t.getClass = function (t, e, n) {
      var r = i[t];
      if (r && r[ap] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
      return r;
    }, t.getClassesByMainType = function (t) {
      t = ji(t);
      var e = [],
          n = i[t.main];
      return n && n[ap] ? f(n, function (t, n) {
        n !== ap && e.push(t);
      }) : e.push(n), e;
    }, t.hasClass = function (t) {
      return t = ji(t), !!i[t.main];
    }, t.getAllClassMainTypes = function () {
      var t = [];
      return f(i, function (e, n) {
        t.push(n);
      }), t;
    }, t.hasSubTypes = function (t) {
      t = ji(t);
      var e = i[t.main];
      return e && e[ap];
    }, t.parseClassType = ji, e.registerWhenExtend) {
      var r = t.extend;
      r && (t.extend = function (e) {
        var n = r.call(this, e);
        return t.registerClass(n, e.type);
      });
    }

    return t;
  }

  function Qi(t) {
    return t > -pp && pp > t;
  }

  function Ji(t) {
    return t > pp || -pp > t;
  }

  function tr(t, e, n, i, r) {
    var a = 1 - r;
    return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
  }

  function er(t, e, n, i, r) {
    var a = 1 - r;
    return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
  }

  function nr(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
        s = 3 * (n - 2 * e + t),
        l = 3 * (e - t),
        u = t - r,
        h = s * s - 3 * o * l,
        c = s * l - 9 * o * u,
        d = l * l - 3 * s * u,
        f = 0;
    if (Qi(h) && Qi(c)) {
      if (Qi(s)) a[0] = 0;else {
        var p = -l / s;
        p >= 0 && 1 >= p && (a[f++] = p);
      }
    } else {
      var g = c * c - 4 * h * d;

      if (Qi(g)) {
        var v = c / h,
            p = -s / o + v,
            m = -v / 2;
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m);
      } else if (g > 0) {
        var y = fp(g),
            _ = h * s + 1.5 * o * (-c + y),
            x = h * s + 1.5 * o * (-c - y);

        _ = 0 > _ ? -dp(-_, mp) : dp(_, mp), x = 0 > x ? -dp(-x, mp) : dp(x, mp);
        var p = (-s - (_ + x)) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p);
      } else {
        var w = (2 * h * s - 3 * o * c) / (2 * fp(h * h * h)),
            b = Math.acos(w) / 3,
            M = fp(h),
            S = Math.cos(b),
            p = (-s - 2 * M * S) / (3 * o),
            m = (-s + M * (S + vp * Math.sin(b))) / (3 * o),
            I = (-s + M * (S - vp * Math.sin(b))) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I);
      }
    }
    return f;
  }

  function ir(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
        o = 9 * e + 3 * i - 3 * t - 9 * n,
        s = 3 * e - 3 * t,
        l = 0;

    if (Qi(o)) {
      if (Ji(a)) {
        var u = -s / a;
        u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = a * a - 4 * o * s;
      if (Qi(h)) r[0] = -a / (2 * o);else if (h > 0) {
        var c = fp(h),
            u = (-a + c) / (2 * o),
            d = (-a - c) / (2 * o);
        u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }

    return l;
  }

  function rr(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
        s = (n - e) * r + e,
        l = (i - n) * r + n,
        u = (s - o) * r + o,
        h = (l - s) * r + s,
        c = (h - u) * r + u;
    a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i;
  }

  function ar(t, e, n, i, r, a, o, s, l, u, h) {
    var c,
        d,
        f,
        p,
        g,
        v = .005,
        m = 1 / 0;
    yp[0] = l, yp[1] = u;

    for (var y = 0; 1 > y; y += .05) _p[0] = tr(t, n, r, o, y), _p[1] = tr(e, i, a, s, y), p = vd(yp, _p), m > p && (c = y, m = p);

    m = 1 / 0;

    for (var _ = 0; 32 > _ && !(gp > v); _++) d = c - v, f = c + v, _p[0] = tr(t, n, r, o, d), _p[1] = tr(e, i, a, s, d), p = vd(_p, yp), d >= 0 && m > p ? (c = d, m = p) : (xp[0] = tr(t, n, r, o, f), xp[1] = tr(e, i, a, s, f), g = vd(xp, yp), 1 >= f && m > g ? (c = f, m = g) : v *= .5);

    return h && (h[0] = tr(t, n, r, o, c), h[1] = tr(e, i, a, s, c)), fp(m);
  }

  function or(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n;
  }

  function sr(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }

  function lr(t, e, n, i, r) {
    var a = t - 2 * e + n,
        o = 2 * (e - t),
        s = t - i,
        l = 0;

    if (Qi(a)) {
      if (Ji(o)) {
        var u = -s / o;
        u >= 0 && 1 >= u && (r[l++] = u);
      }
    } else {
      var h = o * o - 4 * a * s;

      if (Qi(h)) {
        var u = -o / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u);
      } else if (h > 0) {
        var c = fp(h),
            u = (-o + c) / (2 * a),
            d = (-o - c) / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }

    return l;
  }

  function ur(t, e, n) {
    var i = t + n - 2 * e;
    return 0 === i ? .5 : (t - e) / i;
  }

  function hr(t, e, n, i, r) {
    var a = (e - t) * i + t,
        o = (n - e) * i + e,
        s = (o - a) * i + a;
    r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;
  }

  function cr(t, e, n, i, r, a, o, s, l) {
    var u,
        h = .005,
        c = 1 / 0;
    yp[0] = o, yp[1] = s;

    for (var d = 0; 1 > d; d += .05) {
      _p[0] = or(t, n, r, d), _p[1] = or(e, i, a, d);
      var f = vd(yp, _p);
      c > f && (u = d, c = f);
    }

    c = 1 / 0;

    for (var p = 0; 32 > p && !(gp > h); p++) {
      var g = u - h,
          v = u + h;
      _p[0] = or(t, n, r, g), _p[1] = or(e, i, a, g);
      var f = vd(_p, yp);
      if (g >= 0 && c > f) u = g, c = f;else {
        xp[0] = or(t, n, r, v), xp[1] = or(e, i, a, v);
        var m = vd(xp, yp);
        1 >= v && c > m ? (u = v, c = m) : h *= .5;
      }
    }

    return l && (l[0] = or(t, n, r, u), l[1] = or(e, i, a, u)), fp(c);
  }

  function dr(t, e, n) {
    if (0 !== t.length) {
      var i,
          r = t[0],
          a = r[0],
          o = r[0],
          s = r[1],
          l = r[1];

      for (i = 1; i < t.length; i++) r = t[i], a = wp(a, r[0]), o = bp(o, r[0]), s = wp(s, r[1]), l = bp(l, r[1]);

      e[0] = a, e[1] = s, n[0] = o, n[1] = l;
    }
  }

  function fr(t, e, n, i, r, a) {
    r[0] = wp(t, n), r[1] = wp(e, i), a[0] = bp(t, n), a[1] = bp(e, i);
  }

  function pr(t, e, n, i, r, a, o, s, l, u) {
    var h,
        c = ir,
        d = tr,
        f = c(t, n, r, o, kp);

    for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
      var p = d(t, n, r, o, kp[h]);
      l[0] = wp(p, l[0]), u[0] = bp(p, u[0]);
    }

    for (f = c(e, i, a, s, Ap), h = 0; f > h; h++) {
      var g = d(e, i, a, s, Ap[h]);
      l[1] = wp(g, l[1]), u[1] = bp(g, u[1]);
    }

    l[0] = wp(t, l[0]), u[0] = bp(t, u[0]), l[0] = wp(o, l[0]), u[0] = bp(o, u[0]), l[1] = wp(e, l[1]), u[1] = bp(e, u[1]), l[1] = wp(s, l[1]), u[1] = bp(s, u[1]);
  }

  function gr(t, e, n, i, r, a, o, s) {
    var l = ur,
        u = or,
        h = bp(wp(l(t, n, r), 1), 0),
        c = bp(wp(l(e, i, a), 1), 0),
        d = u(t, n, r, h),
        f = u(e, i, a, c);
    o[0] = wp(t, r, d), o[1] = wp(e, a, f), s[0] = bp(t, r, d), s[1] = bp(e, a, f);
  }

  function vr(t, e, n, i, r, a, o, s, l) {
    var u = oe,
        h = se,
        c = Math.abs(r - a);
    if (1e-4 > c % Ip && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);

    if (Cp[0] = Sp(r) * n + t, Cp[1] = Mp(r) * i + e, Tp[0] = Sp(a) * n + t, Tp[1] = Mp(a) * i + e, u(s, Cp, Tp), h(l, Cp, Tp), r %= Ip, 0 > r && (r += Ip), a %= Ip, 0 > a && (a += Ip), r > a && !o ? a += Ip : a > r && o && (r += Ip), o) {
      var d = a;
      a = r, r = d;
    }

    for (var f = 0; a > f; f += Math.PI / 2) f > r && (Dp[0] = Sp(f) * n + t, Dp[1] = Mp(f) * i + e, u(s, Dp, s), h(l, Dp, l));
  }

  function mr(t, e, n, i, r, a, o) {
    if (0 === r) return !1;
    var s = r,
        l = 0,
        u = t;
    if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;
    if (t === n) return Math.abs(a - t) <= s / 2;
    l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
    var h = l * a - o + u,
        c = h * h / (l * l + 1);
    return s / 2 * s / 2 >= c;
  }

  function yr(t, e, n, i, r, a, o, s, l, u, h) {
    if (0 === l) return !1;
    var c = l;
    if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u) return !1;
    var d = ar(t, e, n, i, r, a, o, s, u, h, null);
    return c / 2 >= d;
  }

  function _r(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var u = o;
    if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;
    var h = cr(t, e, n, i, r, a, s, l, null);
    return u / 2 >= h;
  }

  function xr(t) {
    return t %= Xp, 0 > t && (t += Xp), t;
  }

  function wr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var u = o;
    s -= t, l -= e;
    var h = Math.sqrt(s * s + l * l);
    if (h - u > n || n > h + u) return !1;
    if (Math.abs(i - r) % jp < 1e-4) return !0;

    if (a) {
      var c = i;
      i = xr(r), r = xr(c);
    } else i = xr(i), r = xr(r);

    i > r && (r += jp);
    var d = Math.atan2(l, s);
    return 0 > d && (d += jp), d >= i && r >= d || d + jp >= i && r >= d + jp;
  }

  function br(t, e, n, i, r, a) {
    if (a > e && a > i || e > a && i > a) return 0;
    if (i === e) return 0;
    var o = e > i ? 1 : -1,
        s = (a - e) / (i - e);
    (1 === s || 0 === s) && (o = e > i ? .5 : -.5);
    var l = s * (n - t) + t;
    return l === r ? 1 / 0 : l > r ? o : 0;
  }

  function Mr(t, e) {
    return Math.abs(t - e) < Yp;
  }

  function Sr() {
    var t = $p[0];
    $p[0] = $p[1], $p[1] = t;
  }

  function Ir(t, e, n, i, r, a, o, s, l, u) {
    if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;
    var h = nr(e, i, a, s, u, Zp);
    if (0 === h) return 0;

    for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {
      var v = Zp[g],
          m = 0 === v || 1 === v ? .5 : 1,
          y = tr(t, n, r, o, v);
      l > y || (0 > p && (p = ir(e, i, a, s, $p), $p[1] < $p[0] && p > 1 && Sr(), c = tr(e, i, a, s, $p[0]), p > 1 && (d = tr(e, i, a, s, $p[1]))), f += 2 == p ? v < $p[0] ? e > c ? m : -m : v < $p[1] ? c > d ? m : -m : d > s ? m : -m : v < $p[0] ? e > c ? m : -m : c > s ? m : -m);
    }

    return f;
  }

  function Cr(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
    var l = lr(e, i, a, s, Zp);
    if (0 === l) return 0;
    var u = ur(e, i, a);

    if (u >= 0 && 1 >= u) {
      for (var h = 0, c = or(e, i, a, u), d = 0; l > d; d++) {
        var f = 0 === Zp[d] || 1 === Zp[d] ? .5 : 1,
            p = or(t, n, r, Zp[d]);
        o > p || (h += Zp[d] < u ? e > c ? f : -f : c > a ? f : -f);
      }

      return h;
    }

    var f = 0 === Zp[0] || 1 === Zp[0] ? .5 : 1,
        p = or(t, n, r, Zp[0]);
    return o > p ? 0 : e > a ? f : -f;
  }

  function Tr(t, e, n, i, r, a, o, s) {
    if (s -= e, s > n || -n > s) return 0;
    var l = Math.sqrt(n * n - s * s);
    Zp[0] = -l, Zp[1] = l;
    var u = Math.abs(i - r);
    if (1e-4 > u) return 0;

    if (1e-4 > u % Up) {
      i = 0, r = Up;
      var h = a ? 1 : -1;
      return o >= Zp[0] + t && o <= Zp[1] + t ? h : 0;
    }

    if (a) {
      var l = i;
      i = xr(r), r = xr(l);
    } else i = xr(i), r = xr(r);

    i > r && (r += Up);

    for (var c = 0, d = 0; 2 > d; d++) {
      var f = Zp[d];

      if (f + t > o) {
        var p = Math.atan2(s, f),
            h = a ? 1 : -1;
        0 > p && (p = Up + p), (p >= i && r >= p || p + Up >= i && r >= p + Up) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h);
      }
    }

    return c;
  }

  function Dr(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
      var c = t[h++];

      switch (c === qp.M && h > 1 && (n || (a += br(o, s, l, u, i, r))), 1 == h && (o = t[h], s = t[h + 1], l = o, u = s), c) {
        case qp.M:
          l = t[h++], u = t[h++], o = l, s = u;
          break;

        case qp.L:
          if (n) {
            if (mr(o, s, t[h], t[h + 1], e, i, r)) return !0;
          } else a += br(o, s, t[h], t[h + 1], i, r) || 0;

          o = t[h++], s = t[h++];
          break;

        case qp.C:
          if (n) {
            if (yr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0;
          } else a += Ir(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;

          o = t[h++], s = t[h++];
          break;

        case qp.Q:
          if (n) {
            if (_r(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0;
          } else a += Cr(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;

          o = t[h++], s = t[h++];
          break;

        case qp.A:
          var d = t[h++],
              f = t[h++],
              p = t[h++],
              g = t[h++],
              v = t[h++],
              m = t[h++],
              y = (t[h++], 1 - t[h++]),
              _ = Math.cos(v) * p + d,
              x = Math.sin(v) * g + f;

          h > 1 ? a += br(o, s, _, x, i, r) : (l = _, u = x);
          var w = (i - d) * g / p + d;

          if (n) {
            if (wr(d, f, g, v, v + m, y, e, w, r)) return !0;
          } else a += Tr(d, f, g, v, v + m, y, w, r);

          o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
          break;

        case qp.R:
          l = o = t[h++], u = s = t[h++];

          var b = t[h++],
              M = t[h++],
              _ = l + b,
              x = u + M;

          if (n) {
            if (mr(l, u, _, u, e, i, r) || mr(_, u, _, x, e, i, r) || mr(_, x, l, x, e, i, r) || mr(l, x, l, u, e, i, r)) return !0;
          } else a += br(_, u, _, x, i, r), a += br(l, x, l, u, i, r);

          break;

        case qp.Z:
          if (n) {
            if (mr(o, s, l, u, e, i, r)) return !0;
          } else a += br(o, s, l, u, i, r);

          o = l, s = u;
      }
    }

    return n || Mr(s, u) || (a += br(o, s, l, u, i, r) || 0), 0 !== a;
  }

  function kr(t, e, n) {
    return Dr(t, 0, !1, e, n);
  }

  function Ar(t, e, n, i) {
    return Dr(t, e, !0, n, i);
  }

  function Pr(t) {
    ri.call(this, t), this.path = null;
  }

  function Lr(t, e, n, i, r, a, o, s, l, u, h) {
    var c = l * (ug / 180),
        d = lg(c) * (t - n) / 2 + sg(c) * (e - i) / 2,
        f = -1 * sg(c) * (t - n) / 2 + lg(c) * (e - i) / 2,
        p = d * d / (o * o) + f * f / (s * s);
    p > 1 && (o *= og(p), s *= og(p));

    var g = (r === a ? -1 : 1) * og((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
        v = g * o * f / s,
        m = g * -s * d / o,
        y = (t + n) / 2 + lg(c) * v - sg(c) * m,
        _ = (e + i) / 2 + sg(c) * v + lg(c) * m,
        x = dg([1, 0], [(d - v) / o, (f - m) / s]),
        w = [(d - v) / o, (f - m) / s],
        b = [(-1 * d - v) / o, (-1 * f - m) / s],
        M = dg(w, b);

    cg(w, b) <= -1 && (M = ug), cg(w, b) >= 1 && (M = 0), 0 === a && M > 0 && (M -= 2 * ug), 1 === a && 0 > M && (M += 2 * ug), h.addData(u, y, _, o, s, x, M, c, a);
  }

  function Or(t) {
    if (!t) return [];
    var e,
        n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");

    for (e = 0; e < ag.length; e++) n = n.replace(new RegExp(ag[e], "g"), "|" + ag[e]);

    var i,
        r = n.split("|"),
        a = 0,
        o = 0,
        s = new Gp(),
        l = Gp.CMD;

    for (e = 1; e < r.length; e++) {
      var u,
          h = r[e],
          c = h.charAt(0),
          d = 0,
          f = h.slice(1).replace(/e,-/g, "e-").split(",");
      f.length > 0 && "" === f[0] && f.shift();

      for (var p = 0; p < f.length; p++) f[p] = parseFloat(f[p]);

      for (; d < f.length && !isNaN(f[d]) && !isNaN(f[0]);) {
        var g,
            v,
            m,
            y,
            _,
            x,
            w,
            b = a,
            M = o;

        switch (c) {
          case "l":
            a += f[d++], o += f[d++], u = l.L, s.addData(u, a, o);
            break;

          case "L":
            a = f[d++], o = f[d++], u = l.L, s.addData(u, a, o);
            break;

          case "m":
            a += f[d++], o += f[d++], u = l.M, s.addData(u, a, o), c = "l";
            break;

          case "M":
            a = f[d++], o = f[d++], u = l.M, s.addData(u, a, o), c = "L";
            break;

          case "h":
            a += f[d++], u = l.L, s.addData(u, a, o);
            break;

          case "H":
            a = f[d++], u = l.L, s.addData(u, a, o);
            break;

          case "v":
            o += f[d++], u = l.L, s.addData(u, a, o);
            break;

          case "V":
            o = f[d++], u = l.L, s.addData(u, a, o);
            break;

          case "C":
            u = l.C, s.addData(u, f[d++], f[d++], f[d++], f[d++], f[d++], f[d++]), a = f[d - 2], o = f[d - 1];
            break;

          case "c":
            u = l.C, s.addData(u, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o), a += f[d - 2], o += f[d - 1];
            break;

          case "S":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            i === l.C && (g += a - I[S - 4], v += o - I[S - 3]), u = l.C, b = f[d++], M = f[d++], a = f[d++], o = f[d++], s.addData(u, g, v, b, M, a, o);
            break;

          case "s":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            i === l.C && (g += a - I[S - 4], v += o - I[S - 3]), u = l.C, b = a + f[d++], M = o + f[d++], a += f[d++], o += f[d++], s.addData(u, g, v, b, M, a, o);
            break;

          case "Q":
            b = f[d++], M = f[d++], a = f[d++], o = f[d++], u = l.Q, s.addData(u, b, M, a, o);
            break;

          case "q":
            b = f[d++] + a, M = f[d++] + o, a += f[d++], o += f[d++], u = l.Q, s.addData(u, b, M, a, o);
            break;

          case "T":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            i === l.Q && (g += a - I[S - 4], v += o - I[S - 3]), a = f[d++], o = f[d++], u = l.Q, s.addData(u, g, v, a, o);
            break;

          case "t":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            i === l.Q && (g += a - I[S - 4], v += o - I[S - 3]), a += f[d++], o += f[d++], u = l.Q, s.addData(u, g, v, a, o);
            break;

          case "A":
            m = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], b = a, M = o, a = f[d++], o = f[d++], u = l.A, Lr(b, M, a, o, x, w, m, y, _, u, s);
            break;

          case "a":
            m = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], b = a, M = o, a += f[d++], o += f[d++], u = l.A, Lr(b, M, a, o, x, w, m, y, _, u, s);
        }
      }

      ("z" === c || "Z" === c) && (u = l.Z, s.addData(u)), i = u;
    }

    return s.toStatic(), s;
  }

  function Br(t, e) {
    var n = Or(t);
    return e = e || {}, e.buildPath = function (t) {
      if (t.setData) {
        t.setData(n.data);
        var e = t.getContext();
        e && t.rebuildPath(e);
      } else {
        var e = t;
        n.rebuildPath(e);
      }
    }, e.applyTransform = function (t) {
      rg(n, t), this.dirty(!0);
    }, e;
  }

  function Er(t, e) {
    return new Pr(Br(t, e));
  }

  function Rr(t, e) {
    return Pr.extend(Br(t, e));
  }

  function zr(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var a = t[r];
      a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path);
    }

    var o = new Pr(e);
    return o.createPathProxy(), o.buildPath = function (t) {
      t.appendPath(n);
      var e = t.getContext();
      e && t.rebuildPath(e);
    }, o;
  }

  function Nr(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
        l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
  }

  function Fr(t, e, n) {
    var i = e.points,
        r = e.smooth;

    if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = xg(i, r, n, e.smoothConstraint);
        t.moveTo(i[0][0], i[0][1]);

        for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {
          var l = a[2 * s],
              u = a[2 * s + 1],
              h = i[(s + 1) % o];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      } else {
        "spline" === r && (i = _g(i, n)), t.moveTo(i[0][0], i[0][1]);

        for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1]);
      }

      n && t.closePath();
    }
  }

  function Hr(t, e, n) {
    var i = t.cpx2,
        r = t.cpy2;
    return null === i || null === r ? [(n ? er : tr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? er : tr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? sr : or)(t.x1, t.cpx1, t.x2, e), (n ? sr : or)(t.y1, t.cpy1, t.y2, e)];
  }

  function Vr(t) {
    ri.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;
  }

  function Wr(t) {
    return Pr.extend(t);
  }

  function Gr(t, e) {
    return Rr(t, e);
  }

  function Xr(t, e, n, i) {
    var r = Er(t, e),
        a = r.getBoundingRect();
    return n && ("center" === i && (n = qr(n, a)), Ur(r, n)), r;
  }

  function jr(t, e, n) {
    var i = new ai({
      style: {
        image: t,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      },
      onload: function (t) {
        if ("center" === n) {
          var r = {
            width: t.width,
            height: t.height
          };
          i.setStyle(qr(e, r));
        }
      }
    });
    return i;
  }

  function qr(t, e) {
    var n,
        i = e.width / e.height,
        r = t.height * i;
    r <= t.width ? n = t.height : (r = t.width, n = r / i);
    var a = t.x + t.width / 2,
        o = t.y + t.height / 2;
    return {
      x: a - r / 2,
      y: o - n / 2,
      width: r,
      height: n
    };
  }

  function Ur(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
          i = n.calculateTransform(e);
      t.applyTransform(i);
    }
  }

  function Yr(t) {
    var e = t.shape,
        n = t.style.lineWidth;
    return Og(2 * e.x1) === Og(2 * e.x2) && (e.x1 = e.x2 = $r(e.x1, n, !0)), Og(2 * e.y1) === Og(2 * e.y2) && (e.y1 = e.y2 = $r(e.y1, n, !0)), t;
  }

  function Zr(t) {
    var e = t.shape,
        n = t.style.lineWidth,
        i = e.x,
        r = e.y,
        a = e.width,
        o = e.height;
    return e.x = $r(e.x, n, !0), e.y = $r(e.y, n, !0), e.width = Math.max($r(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max($r(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t;
  }

  function $r(t, e, n) {
    var i = Og(2 * t);
    return (i + Og(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
  }

  function Kr(t) {
    return null != t && "none" != t;
  }

  function Qr(t) {
    return "string" == typeof t ? ze(t, -.1) : t;
  }

  function Jr(t) {
    if (t.__hoverStlDirty) {
      var e = t.style.stroke,
          n = t.style.fill,
          i = t.__hoverStl;
      i.fill = i.fill || (Kr(n) ? Qr(n) : null), i.stroke = i.stroke || (Kr(e) ? Qr(e) : null);
      var r = {};

      for (var a in i) null != i[a] && (r[a] = t.style[a]);

      t.__normalStl = r, t.__hoverStlDirty = !1;
    }
  }

  function ta(t) {
    if (!t.__isHover) {
      if (Jr(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);else {
        var e = t.style,
            n = e.insideRollbackOpt;
        n && ya(e), e.extendFrom(t.__hoverStl), n && (ma(e, e.insideOriginalTextPosition, n), null == e.textFill && (e.textFill = n.autoColor)), t.dirty(!1), t.z2 += 1;
      }
      t.__isHover = !0;
    }
  }

  function ea(t) {
    if (t.__isHover) {
      var e = t.__normalStl;
      t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1;
    }
  }

  function na(t) {
    "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && ta(t);
    }) : ta(t);
  }

  function ia(t) {
    "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && ea(t);
    }) : ea(t);
  }

  function ra(t, e) {
    t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && Jr(t);
  }

  function aa(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && na(this);
  }

  function oa(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && ia(this);
  }

  function sa() {
    this.__isEmphasis = !0, na(this);
  }

  function la() {
    this.__isEmphasis = !1, ia(this);
  }

  function ua(t, e, n) {
    t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && ra(t, e);
    }) : ra(t, e), t.on("mouseover", aa).on("mouseout", oa), t.on("emphasis", sa).on("normal", la);
  }

  function ha(t, e, n, i, r, a, o) {
    r = r || Rg;
    var s,
        l = r.labelFetcher,
        u = r.labelDataIndex,
        h = r.labelDimIndex,
        c = n.getShallow("show"),
        d = i.getShallow("show");
    (c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));
    var f = c ? s : null,
        p = d ? k(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
    (null != f || null != p) && (ca(t, n, a, r), ca(e, i, o, r, !0)), t.text = f, e.text = p;
  }

  function ca(t, e, n, i, r) {
    return fa(t, e, i, r), n && o(t, n), t.host && t.host.dirty && t.host.dirty(!1), t;
  }

  function da(t, e, n) {
    var i,
        r = {
      isRectText: !0
    };
    n === !1 ? i = !0 : r.autoColor = n, fa(t, e, r, i), t.host && t.host.dirty && t.host.dirty(!1);
  }

  function fa(t, e, n, i) {
    if (n = n || Rg, n.isRectText) {
      var r = e.getShallow("position") || (i ? null : "inside");
      "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
      var a = e.getShallow("rotate");
      null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = k(e.getShallow("distance"), i ? null : 5);
    }

    var o,
        s = e.ecModel,
        l = s && s.option.textStyle,
        u = pa(e);

    if (u) {
      o = {};

      for (var h in u) if (u.hasOwnProperty(h)) {
        var c = e.getModel(["rich", h]);
        ga(o[h] = {}, c, l, n, i);
      }
    }

    return t.rich = o, ga(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t;
  }

  function pa(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || Rg).rich;

      if (n) {
        e = e || {};

        for (var i in n) n.hasOwnProperty(i) && (e[i] = 1);
      }

      t = t.parentModel;
    }

    return e;
  }

  function ga(t, e, n, i, r, a) {
    if (n = !r && n || Rg, t.textFill = va(e.getShallow("color"), i) || n.color, t.textStroke = va(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = k(e.getShallow("textBorderWidth"), n.textBorderWidth), !r) {
      if (a) {
        var o = t.textPosition;
        t.insideRollback = ma(t, o, i), t.insideOriginalTextPosition = o, t.insideRollbackOpt = i;
      }

      null == t.textFill && (t.textFill = i.autoColor);
    }

    t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = va(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = va(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;
  }

  function va(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
  }

  function ma(t, e, n) {
    var i,
        r = n.useInsideStyle;
    return null == t.textFill && r !== !1 && (r === !0 || n.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (i = {
      textFill: null,
      textStroke: t.textStroke,
      textStrokeWidth: t.textStrokeWidth
    }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = n.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), i;
  }

  function ya(t) {
    var e = t.insideRollback;
    e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth);
  }

  function _a(t, e) {
    var n = e || e.getModel("textStyle");
    return B([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "));
  }

  function xa(t, e, n, i, r, a) {
    "function" == typeof r && (a = r, r = null);
    var o = i && i.isAnimationEnabled();

    if (o) {
      var s = t ? "Update" : "",
          l = i.getShallow("animationDuration" + s),
          u = i.getShallow("animationEasing" + s),
          h = i.getShallow("animationDelay" + s);
      "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a());
    } else e.stopAnimation(), e.attr(n), a && a();
  }

  function wa(t, e, n, i, r) {
    xa(!0, t, e, n, i, r);
  }

  function ba(t, e, n, i, r) {
    xa(!1, t, e, n, i, r);
  }

  function Ma(t, e) {
    for (var n = pe([]); t && t !== e;) ve(n, t.getLocalTransform(), n), t = t.parent;

    return n;
  }

  function Sa(t, e, n) {
    return e && !d(e) && (e = Td.getLocalTransform(e)), n && (e = xe([], e)), ae([], t, e);
  }

  function Ia(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
    return a = Sa(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }

  function Ca(t, e, n) {
    function i(t) {
      var e = {};
      return t.traverse(function (t) {
        !t.isGroup && t.anid && (e[t.anid] = t);
      }), e;
    }

    function r(t) {
      var e = {
        position: G(t.position),
        rotation: t.rotation
      };
      return t.shape && (e.shape = o({}, t.shape)), e;
    }

    if (t && e) {
      var a = i(t);
      e.traverse(function (t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];

          if (e) {
            var i = r(t);
            t.attr(r(e)), wa(t, i, n, t.dataIndex);
          }
        }
      });
    }
  }

  function Ta(t, e) {
    return p(t, function (t) {
      var n = t[0];
      n = Bg(n, e.x), n = Eg(n, e.x + e.width);
      var i = t[1];
      return i = Bg(i, e.y), i = Eg(i, e.y + e.height), [n, i];
    });
  }

  function Da(t, e) {
    var n = Bg(t.x, e.x),
        i = Eg(t.x + t.width, e.x + e.width),
        r = Bg(t.y, e.y),
        a = Eg(t.y + t.height, e.y + e.height);
    return i >= n && a >= r ? {
      x: n,
      y: r,
      width: i - n,
      height: a - r
    } : void 0;
  }

  function ka(t, e, n) {
    e = o({
      rectHover: !0
    }, e);
    var i = e.style = {
      strokeNoScale: !0
    };
    return n = n || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new ai(e)) : Xr(t.replace("path://", ""), e, n, "center") : void 0;
  }

  function Aa(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t;
  }

  function Pa(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++);

    return null == t && n && (t = n.get(e)), t;
  }

  function La(t, e) {
    var n = Xg(t).getParent;
    return n ? n.call(t, e) : t.parentModel;
  }

  function Oa(t) {
    return [t || "", jg++, Math.random().toFixed(5)].join("_");
  }

  function Ba(t) {
    var e = {};
    return t.registerSubTypeDefaulter = function (t, n) {
      t = ji(t), e[t.main] = n;
    }, t.determineSubType = function (n, i) {
      var r = i.type;

      if (!r) {
        var a = ji(n).main;
        t.hasSubTypes(n) && e[a] && (r = e[a](i));
      }

      return r;
    }, t;
  }

  function Ea(t, e) {
    function n(t) {
      var n = {},
          a = [];
      return f(t, function (o) {
        var s = i(n, o),
            l = s.originalDeps = e(o),
            h = r(l, t);
        s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function (t) {
          u(s.predecessor, t) < 0 && s.predecessor.push(t);
          var e = i(n, t);
          u(e.successor, t) < 0 && e.successor.push(o);
        });
      }), {
        graph: n,
        noEntryList: a
      };
    }

    function i(t, e) {
      return t[e] || (t[e] = {
        predecessor: [],
        successor: []
      }), t[e];
    }

    function r(t, e) {
      var n = [];
      return f(t, function (t) {
        u(e, t) >= 0 && n.push(t);
      }), n;
    }

    t.topologicalTravel = function (t, e, i, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t);
      }

      function o(t) {
        h[t] = !0, a(t);
      }

      if (t.length) {
        var s = n(e),
            l = s.graph,
            u = s.noEntryList,
            h = {};

        for (f(t, function (t) {
          h[t] = !0;
        }); u.length;) {
          var c = u.pop(),
              d = l[c],
              p = !!h[c];
          p && (i.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? o : a);
        }

        f(h, function () {
          throw new Error("Circle dependency may exists");
        });
      }
    };
  }

  function Ra(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "");
  }

  function za(t, e, n, i) {
    var r = e[1] - e[0],
        a = n[1] - n[0];
    if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
    if (i) {
      if (r > 0) {
        if (t <= e[0]) return n[0];
        if (t >= e[1]) return n[1];
      } else {
        if (t >= e[0]) return n[0];
        if (t <= e[1]) return n[1];
      }
    } else {
      if (t === e[0]) return n[0];
      if (t === e[1]) return n[1];
    }
    return (t - e[0]) / r * a + n[0];
  }

  function Na(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;

      case "left":
      case "top":
        t = "0%";
        break;

      case "right":
      case "bottom":
        t = "100%";
    }

    return "string" == typeof t ? Ra(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t;
  }

  function Fa(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t;
  }

  function Ha(t) {
    return t.sort(function (t, e) {
      return t - e;
    }), t;
  }

  function Va(t) {
    if (t = +t, isNaN(t)) return 0;

    for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;

    return n;
  }

  function Wa(t) {
    var e = t.toString(),
        n = e.indexOf("e");

    if (n > 0) {
      var i = +e.slice(n + 1);
      return 0 > i ? -i : 0;
    }

    var r = e.indexOf(".");
    return 0 > r ? 0 : e.length - 1 - r;
  }

  function Ga(t, e) {
    var n = Math.log,
        i = Math.LN10,
        r = Math.floor(n(t[1] - t[0]) / i),
        a = Math.round(n(Math.abs(e[1] - e[0])) / i),
        o = Math.min(Math.max(-r + a, 0), 20);
    return isFinite(o) ? o : 20;
  }

  function Xa(t, e, n) {
    if (!t[e]) return 0;
    var i = g(t, function (t, e) {
      return t + (isNaN(e) ? 0 : e);
    }, 0);
    if (0 === i) return 0;

    for (var r = Math.pow(10, n), a = p(t, function (t) {
      return (isNaN(t) ? 0 : t) / i * r * 100;
    }), o = 100 * r, s = p(a, function (t) {
      return Math.floor(t);
    }), l = g(s, function (t, e) {
      return t + e;
    }, 0), u = p(a, function (t, e) {
      return t - s[e];
    }); o > l;) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) u[d] > h && (h = u[d], c = d);

      ++s[c], u[c] = 0, ++l;
    }

    return s[e] / r;
  }

  function ja(t) {
    var e = 2 * Math.PI;
    return (t % e + e) % e;
  }

  function qa(t) {
    return t > -qg && qg > t;
  }

  function Ua(t) {
    if (t instanceof Date) return t;

    if ("string" == typeof t) {
      var e = Yg.exec(t);
      if (!e) return new Date(0 / 0);

      if (e[8]) {
        var n = +e[4] || 0;
        return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
      }

      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
    }

    return new Date(null == t ? 0 / 0 : Math.round(t));
  }

  function Ya(t) {
    return Math.pow(10, Za(t));
  }

  function Za(t) {
    return Math.floor(Math.log(t) / Math.LN10);
  }

  function $a(t, e) {
    var n,
        i = Za(t),
        r = Math.pow(10, i),
        a = t / r;
    return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;
  }

  function Ka(t, e) {
    var n = (t.length - 1) * e + 1,
        i = Math.floor(n),
        r = +t[i - 1],
        a = n - i;
    return a ? r + a * (t[i] - r) : r;
  }

  function Qa(t) {
    function e(t, n, i) {
      return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1));
    }

    t.sort(function (t, n) {
      return e(t, n, 0) ? -1 : 1;
    });

    for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
      for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];

      a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++;
    }

    return t;
  }

  function Ja(t) {
    return t - parseFloat(t) >= 0;
  }

  function to(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
  }

  function eo(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
  }

  function no(t) {
    return null == t ? "" : (t + "").replace(Kg, function (t, e) {
      return Qg[e];
    });
  }

  function io(t, e, n) {
    x(e) || (e = [e]);
    var i = e.length;
    if (!i) return "";

    for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = Jg[a];
      t = t.replace(tv(o), tv(o, 0));
    }

    for (var s = 0; i > s; s++) for (var l = 0; l < r.length; l++) {
      var u = e[s][r[l]];
      t = t.replace(tv(Jg[l], s), n ? no(u) : u);
    }

    return t;
  }

  function ro(t, e, n) {
    return f(e, function (e, i) {
      t = t.replace("{" + i + "}", n ? no(e) : e);
    }), t;
  }

  function ao(t, e) {
    t = b(t) ? {
      color: t,
      extraCssText: e
    } : t || {};
    var n = t.color,
        i = t.type,
        e = t.extraCssText;
    return n ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + no(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + no(n) + ";" + (e || "") + '"></span>' : "";
  }

  function oo(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t;
  }

  function so(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
    var i = Ua(e),
        r = n ? "UTC" : "",
        a = i["get" + r + "FullYear"](),
        o = i["get" + r + "Month"]() + 1,
        s = i["get" + r + "Date"](),
        l = i["get" + r + "Hours"](),
        u = i["get" + r + "Minutes"](),
        h = i["get" + r + "Seconds"](),
        c = i["get" + r + "Milliseconds"]();
    return t = t.replace("MM", oo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", oo(s, 2)).replace("d", s).replace("hh", oo(l, 2)).replace("h", l).replace("mm", oo(u, 2)).replace("m", u).replace("ss", oo(h, 2)).replace("s", h).replace("SSS", oo(c, 3));
  }

  function lo(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
  }

  function uo(t, e, n, i, r) {
    var a = 0,
        o = 0;
    null == i && (i = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function (l, u) {
      var h,
          c,
          d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(u + 1),
          g = p && p.getBoundingRect();

      if ("horizontal" === t) {
        var v = f.width + (g ? -g.x + f.x : 0);
        h = a + v, h > i || l.newline ? (a = 0, h = v, o += s + n, s = f.height) : s = Math.max(s, f.height);
      } else {
        var m = f.height + (g ? -g.y + f.y : 0);
        c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width);
      }

      l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n);
    });
  }

  function ho(t, e, n) {
    n = $g(n || 0);
    var i = e.width,
        r = e.height,
        a = Na(t.left, i),
        o = Na(t.top, r),
        s = Na(t.right, i),
        l = Na(t.bottom, r),
        u = Na(t.width, i),
        h = Na(t.height, r),
        c = n[2] + n[0],
        d = n[1] + n[3],
        f = t.aspect;

    switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
      case "center":
        a = i / 2 - u / 2 - n[3];
        break;

      case "right":
        a = i - u - d;
    }

    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        o = r / 2 - h / 2 - n[0];
        break;

      case "bottom":
        o = r - h - c;
    }

    a = a || 0, o = o || 0, isNaN(u) && (u = i - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));
    var p = new rn(a + n[3], o + n[0], u, h);
    return p.margin = n, p;
  }

  function co(t, e, n) {
    function i(n, i) {
      var o = {},
          l = 0,
          u = {},
          h = 0,
          c = 2;
      if (rv(n, function (e) {
        u[e] = t[e];
      }), rv(n, function (t) {
        r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++;
      }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;

      if (h !== c && l) {
        if (l >= c) return o;

        for (var d = 0; d < n.length; d++) {
          var f = n[d];

          if (!r(o, f) && r(t, f)) {
            o[f] = t[f];
            break;
          }
        }

        return o;
      }

      return u;
    }

    function r(t, e) {
      return t.hasOwnProperty(e);
    }

    function a(t, e) {
      return null != t[e] && "auto" !== t[e];
    }

    function o(t, e, n) {
      rv(t, function (t) {
        e[t] = n[t];
      });
    }

    !M(n) && (n = {});
    var s = n.ignoreSize;
    !x(s) && (s = [s, s]);
    var l = i(ov[0], 0),
        u = i(ov[1], 1);
    o(ov[0], t, l), o(ov[1], t, u);
  }

  function fo(t) {
    return po({}, t);
  }

  function po(t, e) {
    return e && t && rv(av, function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t;
  }

  function go(t) {
    var e = [];
    return f(hv.getClassesByMainType(t), function (t) {
      e = e.concat(t.prototype.dependencies || []);
    }), e = p(e, function (t) {
      return ji(t).main;
    }), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e;
  }

  function vo(t, e) {
    for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];

    return t[n - 1];
  }

  function mo(t) {
    var e = t.get("coordinateSystem"),
        n = {
      coordSysName: e,
      coordSysDims: [],
      axisMap: N(),
      categoryAxisMap: N()
    },
        i = gv[e];
    return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
  }

  function yo(t) {
    return "category" === t.get("type");
  }

  function _o(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === _v ? {} : []), this.sourceFormat = t.sourceFormat || xv, this.seriesLayoutBy = t.seriesLayoutBy || bv, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && N(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
  }

  function xo(t) {
    var e = t.option.source,
        n = xv;
    if (I(e)) n = wv;else if (x(e)) for (var i = 0, r = e.length; r > i; i++) {
      var a = e[i];

      if (null != a) {
        if (x(a)) {
          n = mv;
          break;
        }

        if (M(a)) {
          n = yv;
          break;
        }
      }
    } else if (M(e)) {
      for (var o in e) if (e.hasOwnProperty(o) && d(e[o])) {
        n = _v;
        break;
      }
    } else if (null != e) throw new Error("Invalid data");
    Sv(t).sourceFormat = n;
  }

  function wo(t) {
    return Sv(t).source;
  }

  function bo(t) {
    Sv(t).datasetMap = N();
  }

  function Mo(t) {
    var e = t.option,
        n = e.data,
        i = I(n) ? wv : vv,
        r = !1,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = ko(t);

    if (l) {
      var u = l.option;
      n = u.source, i = Sv(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions;
    }

    var h = So(n, i, a, o, s),
        c = e.encode;
    !c && l && (c = Do(t, l, n, i, a, h)), Sv(t).source = new _o({
      data: n,
      fromDataset: r,
      seriesLayoutBy: a,
      sourceFormat: i,
      dimensionsDefine: h.dimensionsDefine,
      startIndex: h.startIndex,
      dimensionsDetectCount: h.dimensionsDetectCount,
      encodeDefine: c
    });
  }

  function So(t, e, n, i, r) {
    if (!t) return {
      dimensionsDefine: Io(r)
    };
    var a, o, s;
    if (e === mv) "auto" === i || null == i ? Co(function (t) {
      null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0);
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Co(function (t, e) {
      r[e] = null != t ? t : "";
    }, n, t)), a = r ? r.length : n === Mv ? t.length : t[0] ? t[0].length : null;else if (e === yv) r || (r = To(t), s = !0);else if (e === _v) r || (r = [], s = !0, f(t, function (t, e) {
      r.push(e);
    }));else if (e === vv) {
      var l = Oi(t[0]);
      a = x(l) && l.length || 1;
    }
    var u;
    return s && f(r, function (t, e) {
      "name" === (M(t) ? t.name : t) && (u = e);
    }), {
      startIndex: o,
      dimensionsDefine: Io(r),
      dimensionsDetectCount: a,
      potentialNameDimIndex: u
    };
  }

  function Io(t) {
    if (t) {
      var e = N();
      return p(t, function (t) {
        if (t = o({}, M(t) ? t : {
          name: t
        }), null == t.name) return t;
        t.name += "", null == t.displayName && (t.displayName = t.name);
        var n = e.get(t.name);
        return n ? t.name += "-" + n.count++ : e.set(t.name, {
          count: 1
        }), t;
      });
    }
  }

  function Co(t, e, n, i) {
    if (null == i && (i = 1 / 0), e === Mv) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);else for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r);
  }

  function To(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]););

    if (e) {
      var i = [];
      return f(e, function (t, e) {
        i.push(e);
      }), i;
    }
  }

  function Do(t, e, n, i, r, a) {
    var o = mo(t),
        s = {},
        l = [],
        u = [],
        h = t.subType,
        c = N(["pie", "map", "funnel"]),
        d = N(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);

    if (o && null != d.get(h)) {
      var p = t.ecModel,
          g = Sv(p).datasetMap,
          v = e.uid + "_" + r,
          m = g.get(v) || g.set(v, {
        categoryWayDim: 1,
        valueWayDim: 0
      });
      f(o.coordSysDims, function (t) {
        if (null == o.firstCategoryDimIndex) {
          var e = m.valueWayDim++;
          s[t] = e, u.push(e);
        } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);else {
          var e = m.categoryWayDim++;
          s[t] = e, u.push(e);
        }
      });
    } else if (null != c.get(h)) {
      for (var y, _ = 0; 5 > _ && null == y; _++) Po(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);

      if (null != y) {
        s.value = y;
        var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
        u.push(x), l.push(x);
      }
    }

    return l.length && (s.itemName = l), u.length && (s.seriesName = u), s;
  }

  function ko(t) {
    var e = t.option,
        n = e.data;
    return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
  }

  function Ao(t, e) {
    return Po(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }

  function Po(t, e, n, i, r, a) {
    function o(t) {
      return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0;
    }

    var s,
        l = 5;
    if (I(t)) return !1;
    var u;
    if (i && (u = i[a], u = M(u) ? u.name : u), e === mv) {
      if (n === Mv) {
        for (var h = t[a], c = 0; c < (h || []).length && l > c; c++) if (null != (s = o(h[r + c]))) return s;
      } else for (var c = 0; c < t.length && l > c; c++) {
        var d = t[r + c];
        if (d && null != (s = o(d[a]))) return s;
      }
    } else if (e === yv) {
      if (!u) return;

      for (var c = 0; c < t.length && l > c; c++) {
        var f = t[c];
        if (f && null != (s = o(f[u]))) return s;
      }
    } else if (e === _v) {
      if (!u) return;
      var h = t[u];
      if (!h || I(h)) return !1;

      for (var c = 0; c < h.length && l > c; c++) if (null != (s = o(h[c]))) return s;
    } else if (e === vv) for (var c = 0; c < t.length && l > c; c++) {
      var f = t[c],
          p = Oi(f);
      if (!x(p)) return !1;
      if (null != (s = o(p[a]))) return s;
    }
    return !1;
  }

  function Lo(t, e) {
    if (e) {
      var n = e.seiresIndex,
          i = e.seriesId,
          r = e.seriesName;
      return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
    }
  }

  function Oo(t, e) {
    var n = t.color && !t.colorLayer;
    f(e, function (e, a) {
      "colorLayer" === a && n || hv.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e));
    });
  }

  function Bo(t) {
    t = t, this.option = {}, this.option[Iv] = 1, this._componentsMap = N({
      series: []
    }), this._seriesIndices, this._seriesIndicesMap, Oo(t, this._theme.option), r(t, dv, !1), this.mergeOption(t);
  }

  function Eo(t, e) {
    x(e) || (e = e ? [e] : []);
    var n = {};
    return f(e, function (e) {
      n[e] = (t.get(e) || []).slice();
    }), n;
  }

  function Ro(t, e, n) {
    var i = e.type ? e.type : n ? n.subType : hv.determineSubType(t, e);
    return i;
  }

  function zo(t, e) {
    t._seriesIndicesMap = N(t._seriesIndices = p(e, function (t) {
      return t.componentIndex;
    }) || []);
  }

  function No(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function (t) {
      return t.subType === e.subType;
    }) : t;
  }

  function Fo(t) {
    f(Tv, function (e) {
      this[e] = y(t[e], t);
    }, this);
  }

  function Ho() {
    this._coordinateSystems = [];
  }

  function Vo(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
  }

  function Wo(t, e, n) {
    var i,
        r,
        a = [],
        o = [],
        s = t.timeline;

    if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};
      var l = t.media;
      kv(l, function (t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t));
      });
    }

    return r || (r = t), r.timeline || (r.timeline = s), kv([r].concat(a).concat(p(o, function (t) {
      return t.option;
    })), function (t) {
      kv(e, function (e) {
        e(t, n);
      });
    }), {
      baseOption: r,
      timelineOptions: a,
      mediaDefault: i,
      mediaList: o
    };
  }

  function Go(t, e, n) {
    var i = {
      width: e,
      height: n,
      aspectratio: e / n
    },
        r = !0;
    return f(t, function (t, e) {
      var n = e.match(Ov);

      if (n && n[1] && n[2]) {
        var a = n[1],
            o = n[2].toLowerCase();
        Xo(i[o], t, a) || (r = !1);
      }
    }), r;
  }

  function Xo(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
  }

  function jo(t, e) {
    return t.join(",") === e.join(",");
  }

  function qo(t, e) {
    e = e || {}, kv(e, function (e, n) {
      if (null != e) {
        var i = t[n];

        if (hv.hasClass(n)) {
          e = Pi(e), i = Pi(i);
          var r = Ei(i, e);
          t[n] = Pv(r, function (t) {
            return t.option && t.exist ? Lv(t.exist, t.option, !0) : t.exist || t.option;
          });
        } else t[n] = Lv(i, e, !0);
      }
    });
  }

  function Uo(t) {
    var e = t && t.itemStyle;
    if (e) for (var n = 0, i = Rv.length; i > n; n++) {
      var a = Rv[n],
          o = e.normal,
          s = e.emphasis;
      o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
    }
  }

  function Yo(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
          r = t[e].emphasis;
      i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
    }
  }

  function Zo(t) {
    Yo(t, "itemStyle"), Yo(t, "lineStyle"), Yo(t, "areaStyle"), Yo(t, "label"), Yo(t, "labelLine"), Yo(t, "upperLabel"), Yo(t, "edgeLabel");
  }

  function $o(t, e) {
    var n = Ev(t) && t[e],
        i = Ev(n) && n.textStyle;
    if (i) for (var r = 0, a = np.length; a > r; r++) {
      var e = np[r];
      i.hasOwnProperty(e) && (n[e] = i[e]);
    }
  }

  function Ko(t) {
    t && (Zo(t), $o(t, "label"), t.emphasis && $o(t.emphasis, "label"));
  }

  function Qo(t) {
    if (Ev(t)) {
      Uo(t), Zo(t), $o(t, "label"), $o(t, "upperLabel"), $o(t, "edgeLabel"), t.emphasis && ($o(t.emphasis, "label"), $o(t.emphasis, "upperLabel"), $o(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (Uo(e), Ko(e));
      var n = t.markLine;
      n && (Uo(n), Ko(n));
      var i = t.markArea;
      i && Ko(i);
      var r = t.data;

      if ("graph" === t.type) {
        r = r || t.nodes;
        var a = t.links || t.edges;
        if (a && !I(a)) for (var o = 0; o < a.length; o++) Ko(a[o]);
        f(t.categories, function (t) {
          Zo(t);
        });
      }

      if (r && !I(r)) for (var o = 0; o < r.length; o++) Ko(r[o]);
      var e = t.markPoint;
      if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) Ko(s[o]);
      var n = t.markLine;
      if (n && n.data) for (var l = n.data, o = 0; o < l.length; o++) x(l[o]) ? (Ko(l[o][0]), Ko(l[o][1])) : Ko(l[o]);
      "gauge" === t.type ? ($o(t, "axisLabel"), $o(t, "title"), $o(t, "detail")) : "treemap" === t.type ? (Yo(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
        Zo(t);
      })) : "tree" === t.type && Zo(t.leaves);
    }
  }

  function Jo(t) {
    return x(t) ? t : t ? [t] : [];
  }

  function ts(t) {
    return (x(t) ? t[0] : t) || {};
  }

  function es(t, e) {
    e = e.split(",");

    for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);

    return n;
  }

  function ns(t, e, n, i) {
    e = e.split(",");

    for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];

    (i || null == a[e[o]]) && (a[e[o]] = n);
  }

  function is(t) {
    f(Nv, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
    });
  }

  function rs(t) {
    f(t, function (e, n) {
      var i = [],
          r = [0 / 0, 0 / 0],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, function (a, l, u) {
        var h = o.get(e.stackedDimension, u);
        if (isNaN(h)) return r;
        var c, d;
        s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);

        for (var f = 0 / 0, p = n - 1; p >= 0; p--) {
          var g = t[p];

          if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
            var v = g.data.getByRawIndex(g.stackResultDimension, d);

            if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
              h += v, f = v;
              break;
            }
          }
        }

        return i[0] = h, i[1] = f, i;
      });
      o.hostModel.setData(l), e.data = l;
    });
  }

  function as(t, e) {
    _o.isInstance(t) || (t = _o.seriesDataToSource(t)), this._source = t;
    var n = this._data = t.data,
        i = t.sourceFormat;
    i === wv && (this._offset = 0, this._dimSize = e, this._data = n);
    var r = Gv[i === mv ? i + "_" + t.seriesLayoutBy : i];
    o(this, r);
  }

  function os() {
    return this._data.length;
  }

  function ss(t) {
    return this._data[t];
  }

  function ls(t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e]);
  }

  function us(t, e, n) {
    return null != n ? t[n] : t;
  }

  function hs(t, e, n, i) {
    return cs(t[i], this._dimensionInfos[e]);
  }

  function cs(t, e) {
    var n = e && e.type;

    if ("ordinal" === n) {
      var i = e && e.ordinalMeta;
      return i ? i.parseAndCollect(t) : t;
    }

    return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Ua(t)), null == t || "" === t ? 0 / 0 : +t;
  }

  function ds(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);

      if (null != i) {
        var r,
            a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(n);
        return s && (r = s.name, a = s.index), Xv[o](i, e, a, r);
      }
    }
  }

  function fs(t, e, n) {
    if (t) {
      var i = t.getProvider().getSource().sourceFormat;

      if (i === vv || i === yv) {
        var r = t.getRawDataItem(e);
        return i !== vv || M(r) || (r = null), r ? r[n] : void 0;
      }
    }
  }

  function ps(t) {
    return new gs(t);
  }

  function gs(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;
  }

  function vs(t, e, n, i, r, a) {
    Zv.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
      start: n,
      end: i,
      count: i - n,
      next: Zv.next
    }, t.context);
  }

  function ms(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
    var n, i;
    !e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
    var r = t._downstream;
    return r && r.dirty(), i;
  }

  function ys(t) {
    var e = t.name;
    zi(t) || (t.name = _s(t) || e);
  }

  function _s(t) {
    var e = t.getRawData(),
        n = e.mapDimension("seriesName", !0),
        i = [];
    return f(n, function (t) {
      var n = e.getDimensionInfo(t);
      n.displayName && i.push(n.displayName);
    }), i.join(" ");
  }

  function xs(t) {
    return t.model.getRawData().count();
  }

  function ws(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), bs;
  }

  function bs(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }

  function Ms(t, e) {
    f(t.CHANGABLE_METHODS, function (n) {
      t.wrapMethod(n, _(Ss, e));
    });
  }

  function Ss(t) {
    var e = Is(t);
    e && e.setOutputEnd(this.count());
  }

  function Is(t) {
    var e = (t.ecModel || {}).scheduler,
        n = e && e.getPipeline(t.uid);

    if (n) {
      var i = n.currentTask;

      if (i) {
        var r = i.agentStubMap;
        r && (i = r.get(t.uid));
      }

      return i;
    }
  }

  function Cs() {
    this.group = new tf(), this.uid = Oa("viewChart"), this.renderTask = ps({
      plan: ks,
      reset: As
    }), this.renderTask.context = {
      view: this
    };
  }

  function Ts(t, e) {
    if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) Ts(t.childAt(n), e);
  }

  function Ds(t, e, n) {
    var i = Fi(t, e);
    null != i ? f(Pi(i), function (e) {
      Ts(t.getItemGraphicEl(e), n);
    }) : t.eachItemGraphicEl(function (t) {
      Ts(t, n);
    });
  }

  function ks(t) {
    return nm(t.model);
  }

  function As(t) {
    var e = t.model,
        n = t.ecModel,
        i = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && em(r).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return "render" !== l && o[l](e, n, i, r), rm[l];
  }

  function Ps(t, e, n) {
    function i() {
      h = new Date().getTime(), c = null, t.apply(o, s || []);
    }

    var r,
        a,
        o,
        s,
        l,
        u = 0,
        h = 0,
        c = null;
    e = e || 0;

    var d = function () {
      r = new Date().getTime(), o = this, s = arguments;
      var t = l || e,
          d = l || n;
      l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r;
    };

    return d.clear = function () {
      c && (clearTimeout(c), c = null);
    }, d.debounceNextCall = function (t) {
      l = t;
    }, d;
  }

  function Ls(t, e, n, i) {
    var r = t[e];

    if (r) {
      var a = r[am] || r,
          o = r[sm],
          s = r[om];

      if (s !== n || o !== i) {
        if (null == n || !i) return t[e] = a;
        r = t[e] = Ps(a, n, "debounce" === i), r[am] = a, r[sm] = i, r[om] = n;
      }

      return r;
    }
  }

  function Os(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished;
    var n = this._dataProcessorHandlers = n.slice(),
        i = this._visualHandlers = i.slice();
    this._allHandlers = n.concat(i), this._stageTaskMap = N();
  }

  function Bs(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
    }

    r = r || {};
    var o;
    f(e, function (e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
            l = s.seriesTaskMap,
            u = s.overallTask;

        if (u) {
          var h,
              c = u.agentStubMap;
          c.each(function (t) {
            a(r, t) && (t.dirty(), h = !0);
          }), h && u.dirty(), pm(u, i);
          var d = t.getPerformArgs(u, r.block);
          c.each(function (t) {
            t.perform(d);
          }), o |= u.perform(d);
        } else l && l.each(function (s) {
          a(r, s) && s.dirty();
          var l = t.getPerformArgs(s, r.block);
          l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), pm(s, i), o |= s.perform(l);
        });
      }
    }), t.unfinished |= o;
  }

  function Es(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
          s = o.get(a) || o.set(a, ps({
        plan: Vs,
        reset: Ws,
        count: Xs
      }));
      s.context = {
        model: n,
        ecModel: i,
        api: r,
        useClearVisual: e.isVisual && !e.isLayout,
        plan: e.plan,
        reset: e.reset,
        scheduler: t
      }, js(t, n, s);
    }

    var o = n.seriesTaskMap || (n.seriesTaskMap = N()),
        s = e.seriesType,
        l = e.getTargetSeries;
    e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
    var u = t._pipelineMap;
    o.each(function (t, e) {
      u.get(e) || (t.dispose(), o.removeKey(e));
    });
  }

  function Rs(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
          i = s.get(n);
      i || (i = s.set(n, ps({
        reset: Ns,
        onDirty: Hs
      })), o.dirty()), i.context = {
        model: e,
        overallProgress: h,
        modifyOutputEnd: c
      }, i.agent = o, i.__block = h, js(t, e, i);
    }

    var o = n.overallTask = n.overallTask || ps({
      reset: zs
    });
    o.context = {
      ecModel: i,
      api: r,
      overallReset: e.overallReset,
      scheduler: t
    };
    var s = o.agentStubMap = o.agentStubMap || N(),
        l = e.seriesType,
        u = e.getTargetSeries,
        h = !0,
        c = e.modifyOutputEnd;
    l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = !1, f(i.getSeries(), a));
    var d = t._pipelineMap;
    s.each(function (t, e) {
      d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
    });
  }

  function zs(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }

  function Ns(t) {
    return t.overallProgress && Fs;
  }

  function Fs() {
    this.agent.dirty(), this.getDownstream().dirty();
  }

  function Hs() {
    this.agent && this.agent.dirty();
  }

  function Vs(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
  }

  function Ws(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = t.resetDefines = Pi(t.reset(t.model, t.ecModel, t.api, t.payload));
    return e.length > 1 ? p(e, function (t, e) {
      return Gs(e);
    }) : gm;
  }

  function Gs(t) {
    return function (e, n) {
      var i = n.data,
          r = n.resetDefines[t];
      if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(i, a);else r && r.progress && r.progress(e, i);
    };
  }

  function Xs(t) {
    return t.data.count();
  }

  function js(t, e, n) {
    var i = e.uid,
        r = t._pipelineMap.get(i);

    !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r;
  }

  function qs(t) {
    vm = null;

    try {
      t(mm, ym);
    } catch (e) {}

    return vm;
  }

  function Us(t, e) {
    for (var n in e.prototype) t[n] = H;
  }

  function Ys(t) {
    return function (e, n, i) {
      e = e && e.toLowerCase(), _d.prototype[t].call(this, e, n, i);
    };
  }

  function Zs() {
    _d.call(this);
  }

  function $s(t, e, n) {
    function r(t, e) {
      return t.__prio - e.__prio;
    }

    n = n || {}, "string" == typeof e && (e = Jm[e]), this.id, this.group, this._dom = t;
    var a = "canvas",
        o = this._zr = Ci(t, {
      renderer: n.renderer || a,
      devicePixelRatio: n.devicePixelRatio,
      width: n.width,
      height: n.height
    });
    this._throttledZrFlush = Ps(y(o.flush, o), 17);
    var e = i(e);
    e && Hv(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Ho();
    var s = this._api = pl(this);
    dn(Qm, r), dn(Zm, r), this._scheduler = new Os(this, s, Zm, Qm), _d.call(this), this._messageCenter = new Zs(), this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), rl(o, this), E(this);
  }

  function Ks(t, e, n) {
    var i,
        r = this._model,
        a = this._coordSysMgr.getCoordinateSystems();

    e = Vi(r, e);

    for (var o = 0; o < a.length; o++) {
      var s = a[o];
      if (s[t] && null != (i = s[t](r, e, n))) return i;
    }
  }

  function Qs(t) {
    var e = t._model,
        n = t._scheduler;
    n.restorePipelines(e), n.prepareStageTasks(), al(t, "component", e, n), al(t, "chart", e, n), n.plan();
  }

  function Js(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
    }

    var o = t._model;
    if (!i) return void Cm(t._componentsViews.concat(t._chartsViews), a);
    var s = {};
    s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
    var l = {
      mainType: i,
      query: s
    };
    r && (l.subType = r);
    var u = n.excludeSeriesId;
    null != u && (u = N(Pi(u))), o && o.eachComponent(l, function (e) {
      u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
    }, t);
  }

  function tl(t, e) {
    var n = t._chartsMap,
        i = t._scheduler;
    e.eachSeries(function (t) {
      i.updateStreamModes(t, n[t.__viewId]);
    });
  }

  function el(t, e) {
    var n = t.type,
        i = t.escapeConnect,
        r = Um[n],
        a = r.actionInfo,
        l = (a.update || "update").split(":"),
        u = l.pop();
    l = null != l[0] && km(l[0]), this[Vm] = !0;
    var h = [t],
        c = !1;
    t.batch && (c = !0, h = p(t.batch, function (e) {
      return e = s(o({}, e), t), e.batch = null, e;
    }));
    var d,
        f = [],
        g = "highlight" === n || "downplay" === n;
    Cm(h, function (t) {
      d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? Js(this, u, t, "series") : l && Js(this, u, t, l.main, l.sub);
    }, this), "none" === u || g || l || (this[Wm] ? (Qs(this), jm.update.call(this, t), this[Wm] = !1) : jm[u].call(this, t)), d = c ? {
      type: a.event || n,
      escapeConnect: i,
      batch: f
    } : f[0], this[Vm] = !1, !e && this._messageCenter.trigger(d.type, d);
  }

  function nl(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();
      el.call(this, n, t);
    }
  }

  function il(t) {
    !t && this.trigger("updated");
  }

  function rl(t, e) {
    t.on("rendered", function () {
      e.trigger("rendered"), !t.animation.isFinished() || e[Wm] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
    });
  }

  function al(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
          r = s[e];

      if (!r) {
        var h = km(t.type),
            c = a ? Qv.getClass(h.main, h.sub) : Cs.getClass(h.sub);
        r = new c(), r.init(n, u), s[e] = r, o.push(r), l.add(r.group);
      }

      t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
        mainType: t.mainType,
        index: t.componentIndex
      }, !a && i.prepareView(r, t, n, u);
    }

    for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = !1;

    a ? n.eachComponent(function (t, e) {
      "series" !== t && r(e);
    }) : n.eachSeries(r);

    for (var h = 0; h < o.length;) {
      var c = o[h];
      c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
    }
  }

  function ol(t) {
    t.clearColorPalette(), t.eachSeries(function (t) {
      t.clearColorPalette();
    });
  }

  function sl(t, e, n, i) {
    ll(t, e, n, i), Cm(t._chartsViews, function (t) {
      t.__alive = !1;
    }), ul(t, e, n, i), Cm(t._chartsViews, function (t) {
      t.__alive || t.remove(e, n);
    });
  }

  function ll(t, e, n, i, r) {
    Cm(r || t._componentsViews, function (t) {
      var r = t.__model;
      t.render(r, e, n, i), fl(r, t);
    });
  }

  function ul(t, e, n, i, r) {
    var a,
        o = t._scheduler;
    e.eachSeries(function (e) {
      var n = t._chartsMap[e.__viewId];
      n.__alive = !0;
      var s = n.renderTask;
      o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), fl(e, n), dl(e, n);
    }), o.unfinished |= a, cl(t._zr, e), hm(t._zr.dom, e);
  }

  function hl(t, e) {
    Cm(Km, function (n) {
      n(t, e);
    });
  }

  function cl(t, e) {
    var n = t.storage,
        i = 0;
    n.traverse(function (t) {
      t.isGroup || i++;
    }), i > e.get("hoverLayerThreshold") && !Kc.node && n.traverse(function (t) {
      t.isGroup || (t.useHoverLayer = !0);
    });
  }

  function dl(t, e) {
    var n = t.get("blendMode") || null;
    e.group.traverse(function (t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
        t.setStyle("blend", n);
      });
    });
  }

  function fl(t, e) {
    var n = t.get("z"),
        i = t.get("zlevel");
    e.group.traverse(function (t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
    });
  }

  function pl(t) {
    var e = t._coordSysMgr;
    return o(new Fo(t), {
      getCoordinateSystems: y(e.getCoordinateSystems, e),
      getComponentByElement: function (e) {
        for (; e;) {
          var n = e.__ecComponentInfo;
          if (null != n) return t._model.getComponent(n.mainType, n.index);
          e = e.parent;
        }
      }
    });
  }

  function gl(t) {
    function e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i[a] = e;
      }
    }

    var n = 0,
        i = 1,
        r = 2,
        a = "__connectUpdateStatus";
    Cm(Ym, function (o, s) {
      t._messageCenter.on(s, function (o) {
        if (ny[t.group] && t[a] !== n) {
          if (o && o.escapeConnect) return;
          var s = t.makeActionFromEvent(o),
              l = [];
          Cm(ey, function (e) {
            e !== t && e.group === t.group && l.push(e);
          }), e(l, n), Cm(l, function (t) {
            t[a] !== i && t.dispatchAction(s);
          }), e(l, r);
        }
      });
    });
  }

  function vl(t, e, n) {
    var i = xl(t);
    if (i) return i;
    var r = new $s(t, e, n);
    return r.id = "ec_" + iy++, ey[r.id] = r, Gi(t, ay, r.id), gl(r), r;
  }

  function ml(t) {
    if (x(t)) {
      var e = t;
      t = null, Cm(e, function (e) {
        null != e.group && (t = e.group);
      }), t = t || "g_" + ry++, Cm(e, function (e) {
        e.group = t;
      });
    }

    return ny[t] = !0, t;
  }

  function yl(t) {
    ny[t] = !1;
  }

  function _l(t) {
    "string" == typeof t ? t = ey[t] : t instanceof $s || (t = xl(t)), t instanceof $s && !t.isDisposed() && t.dispose();
  }

  function xl(t) {
    return ey[Xi(t, ay)];
  }

  function wl(t) {
    return ey[t];
  }

  function bl(t, e) {
    Jm[t] = e;
  }

  function Ml(t) {
    $m.push(t);
  }

  function Sl(t, e) {
    Pl(Zm, t, e, Om);
  }

  function Il(t) {
    Km.push(t);
  }

  function Cl(t, e, n) {
    "function" == typeof e && (n = e, e = "");
    var i = Dm(t) ? t.type : [t, t = {
      event: e
    }][0];
    t.event = (t.event || i).toLowerCase(), e = t.event, Im(Gm.test(i) && Gm.test(e)), Um[i] || (Um[i] = {
      action: n,
      actionInfo: t
    }), Ym[e] = i;
  }

  function Tl(t, e) {
    Ho.register(t, e);
  }

  function Dl(t) {
    var e = Ho.get(t);
    return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
  }

  function kl(t, e) {
    Pl(Qm, t, e, Em, "layout");
  }

  function Al(t, e) {
    Pl(Qm, t, e, zm, "visual");
  }

  function Pl(t, e, n, i, r) {
    (Tm(e) || Dm(e)) && (n = e, e = i);
    var a = Os.wrapStageHandler(n, r);
    return a.__prio = e, a.__raw = n, t.push(a), a;
  }

  function Ll(t, e) {
    ty[t] = e;
  }

  function Ol(t) {
    return hv.extend(t);
  }

  function Bl(t) {
    return Qv.extend(t);
  }

  function El(t) {
    return Kv.extend(t);
  }

  function Rl(t) {
    return Cs.extend(t);
  }

  function zl(t) {
    n("createCanvas", t);
  }

  function Nl(t, e, n) {
    e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), oy[t] = {
      geoJson: e,
      specialAreas: n
    };
  }

  function Fl(t) {
    return oy[t];
  }

  function Hl(t) {
    return t;
  }

  function Vl(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || Hl, this._newKeyGetter = i || Hl, this.context = r;
  }

  function Wl(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
          s = e[o];
      null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
    }
  }

  function Gl(t) {
    var e = {},
        n = e.encode = {},
        i = N(),
        r = [],
        a = [];
    f(t.dimensions, function (e) {
      var o = t.getDimensionInfo(e),
          s = o.coordDim;

      if (s) {
        var l = n[s];
        n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), jl(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e);
      }

      uy.each(function (t, e) {
        var i = n[e];
        n.hasOwnProperty(e) || (i = n[e] = []);
        var r = o.otherDims[e];
        null != r && r !== !1 && (i[r] = o.name);
      });
    });
    var o = [],
        s = {};
    i.each(function (t, e) {
      var i = n[e];
      s[e] = i[0], o = o.concat(i);
    }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
    var l = n.label;
    l && l.length && (r = l.slice());
    var u = n.tooltip;
    return u && u.length ? a = u.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e;
  }

  function Xl(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }

  function jl(t) {
    return !("ordinal" === t || "time" === t);
  }

  function ql(t) {
    return t._rawCount > 65535 ? py : gy;
  }

  function Ul(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t);
  }

  function Yl(t, e) {
    f(vy.concat(e.__wrappedMethods || []), function (n) {
      e.hasOwnProperty(n) && (t[n] = e[n]);
    }), t.__wrappedMethods = e.__wrappedMethods, f(my, function (n) {
      t[n] = i(e[n]);
    }), t._calculationInfo = o(e._calculationInfo);
  }

  function Zl(t) {
    var e = t._invertedIndicesMap;
    f(e, function (n, i) {
      var r = t._dimensionInfos[i],
          a = r.ordinalMeta;

      if (a) {
        n = e[i] = new py(a.categories.length);

        for (var o = 0; o < n.length; o++) n[o] = 0 / 0;

        for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o;
      }
    });
  }

  function $l(t, e, n) {
    var i;

    if (null != e) {
      var r = t._chunkSize,
          a = Math.floor(n / r),
          o = n % r,
          s = t.dimensions[e],
          l = t._storage[s][a];

      if (l) {
        i = l[o];
        var u = t._dimensionInfos[s].ordinalMeta;
        u && u.categories.length && (i = u.categories[i]);
      }
    }

    return i;
  }

  function Kl(t) {
    return t;
  }

  function Ql(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }

  function Jl(t, e) {
    var n = t._idList[e];
    return null == n && (n = $l(t, t._idDimIdx, e)), null == n && (n = dy + e), n;
  }

  function tu(t) {
    return x(t) || (t = [t]), t;
  }

  function eu(t, e) {
    var n = t.dimensions,
        i = new yy(p(n, t.getDimensionInfo, t), t.hostModel);
    Yl(i, t);

    for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
      var s = n[o];
      a[s] && (u(e, s) >= 0 ? (r[s] = nu(a[s]), i._rawExtent[s] = iu(), i._extent[s] = null) : r[s] = a[s]);
    }

    return i;
  }

  function nu(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Ul(t[n]);

    return e;
  }

  function iu() {
    return [1 / 0, -1 / 0];
  }

  function ru(t, e, n) {
    function r(t, e, n) {
      null != uy.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0));
    }

    _o.isInstance(e) || (e = _o.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();

    for (var a = (n.dimsDef || []).slice(), l = N(n.encodeDef), u = N(), h = N(), c = [], d = au(e, t, a, n.dimCount), p = 0; d > p; p++) {
      var g = a[p] = o({}, M(a[p]) ? a[p] : {
        name: a[p]
      }),
          v = g.name,
          m = c[p] = {
        otherDims: {}
      };
      null != v && null == u.get(v) && (m.name = m.displayName = v, u.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName);
    }

    l.each(function (t, e) {
      t = Pi(t).slice();
      var n = l.set(e, []);
      f(t, function (t, i) {
        b(t) && (t = u.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i));
      });
    });
    var y = 0;
    f(t, function (t) {
      var e, t, n, a;
      if (b(t)) e = t, t = {};else {
        e = t.name;
        var o = t.ordinalMeta;
        t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
      }
      var u = Pi(l.get(e));
      if (!u.length) for (var h = 0; h < (n && n.length || 1); h++) {
        for (; y < c.length && null != c[y].coordDim;) y++;

        y < c.length && u.push(y++);
      }
      f(u, function (i, o) {
        var l = c[i];

        if (r(s(l, t), e, o), null == l.name && n) {
          var u = n[o];
          !M(u) && (u = {
            name: u
          }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip;
        }

        a && s(l.otherDims, a);
      });
    });
    var _ = n.generateCoord,
        x = n.generateCoordCount,
        w = null != x;
    x = _ ? x || 1 : 0;

    for (var S = _ || "value", I = 0; d > I; I++) {
      var m = c[I] = c[I] || {},
          C = m.coordDim;
      null == C && (m.coordDim = ou(S, h, w), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = ou(m.coordDim, u)), null == m.type && Ao(e, I, m.name) && (m.type = "ordinal");
    }

    return c;
  }

  function au(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
    return f(e, function (t) {
      var e = t.dimsDef;
      e && (r = Math.max(r, e.length));
    }), r;
  }

  function ou(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) i++;

      t += i;
    }

    return e.set(t, !0), t;
  }

  function su(t, e, n) {
    n = n || {};
    var i,
        r,
        a,
        o,
        s = n.byIndex,
        l = n.stackedCoordDimension,
        u = !(!t || !t.get("stack"));

    if (f(e, function (t, n) {
      b(t) && (e[n] = t = {
        name: t
      }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
    }), !r || s || i || (s = !0), r) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
      var h = r.coordDim,
          c = r.type,
          d = 0;
      f(e, function (t) {
        t.coordDim === h && d++;
      }), e.push({
        name: a,
        coordDim: h,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      }), d++, e.push({
        name: o,
        coordDim: o,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      });
    }

    return {
      stackedDimension: r && r.name,
      stackedByDimension: i && i.name,
      isStackedByIndex: s,
      stackedOverDimension: o,
      stackResultDimension: a
    };
  }

  function lu(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }

  function uu(t, e) {
    return lu(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }

  function hu(t, e, n) {
    n = n || {}, _o.isInstance(t) || (t = _o.seriesDataToSource(t));
    var i,
        r = e.get("coordinateSystem"),
        a = Ho.get(r),
        o = mo(e);
    o && (i = p(o.coordSysDims, function (t) {
      var e = {
        name: t
      },
          n = o.axisMap.get(t);

      if (n) {
        var i = n.get("type");
        e.type = Xl(i);
      }

      return e;
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
    var s,
        l,
        u = wy(t, {
      coordDimensions: i,
      generateCoord: n.generateCoord
    });
    o && f(u, function (t, e) {
      var n = t.coordDim,
          i = o.categoryAxisMap.get(n);
      i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
    }), l || null == s || (u[s].otherDims.itemName = 0);
    var h = su(e, u),
        c = new yy(u, e);
    c.setCalculationInfo(h);
    var d = null != s && cu(t) ? function (t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
    } : null;
    return c.hasItemOption = !1, c.initData(t, null, d), c;
  }

  function cu(t) {
    if (t.sourceFormat === vv) {
      var e = du(t.data || []);
      return null != e && !x(Oi(e));
    }
  }

  function du(t) {
    for (var e = 0; e < t.length && null == t[e];) e++;

    return t[e];
  }

  function fu(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);
  }

  function pu(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
  }

  function gu(t) {
    return t._map || (t._map = N(t.categories));
  }

  function vu(t) {
    return M(t) && null != t.value ? t.value : t + "";
  }

  function mu(t, e, n, i) {
    var r = {},
        a = t[1] - t[0],
        o = r.interval = $a(a / e, !0);
    null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
    var s = r.intervalPrecision = yu(o),
        l = r.niceTickExtent = [Iy(Math.ceil(t[0] / o) * o, s), Iy(Math.floor(t[1] / o) * o, s)];
    return xu(l, t), r;
  }

  function yu(t) {
    return Wa(t) + 2;
  }

  function _u(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }

  function xu(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), _u(t, 0, e), _u(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
  }

  function wu(t, e, n, i) {
    var r = [];
    if (!t) return r;
    var a = 1e4;
    e[0] < n[0] && r.push(e[0]);

    for (var o = n[0]; o <= n[1] && (r.push(o), o = Iy(o + t, i), o !== r[r.length - 1]);) if (r.length > a) return [];

    return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r;
  }

  function bu(t) {
    return t.get("stack") || Dy + t.seriesIndex;
  }

  function Mu(t) {
    return t.dim + t.index;
  }

  function Su(t, e) {
    var n = [];
    return e.eachSeriesByType(t, function (t) {
      Du(t) && !ku(t) && n.push(t);
    }), n;
  }

  function Iu(t) {
    var e = [];
    return f(t, function (t) {
      var n = t.getData(),
          i = t.coordinateSystem,
          r = i.getBaseAxis(),
          a = r.getExtent(),
          o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
          s = Na(t.get("barWidth"), o),
          l = Na(t.get("barMaxWidth"), o),
          u = t.get("barGap"),
          h = t.get("barCategoryGap");
      e.push({
        bandWidth: o,
        barWidth: s,
        barMaxWidth: l,
        barGap: u,
        barCategoryGap: h,
        axisKey: Mu(r),
        stackId: bu(t)
      });
    }), Cu(e);
  }

  function Cu(t) {
    var e = {};
    f(t, function (t) {
      var n = t.axisKey,
          i = t.bandWidth,
          r = e[n] || {
        bandWidth: i,
        remainedWidth: i,
        autoWidthCount: 0,
        categoryGap: "20%",
        gap: "30%",
        stacks: {}
      },
          a = r.stacks;
      e[n] = r;
      var o = t.stackId;
      a[o] || r.autoWidthCount++, a[o] = a[o] || {
        width: 0,
        maxWidth: 0
      };
      var s = t.barWidth;
      s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
      var l = t.barMaxWidth;
      l && (a[o].maxWidth = l);
      var u = t.barGap;
      null != u && (r.gap = u);
      var h = t.barCategoryGap;
      null != h && (r.categoryGap = h);
    });
    var n = {};
    return f(e, function (t, e) {
      n[e] = {};
      var i = t.stacks,
          r = t.bandWidth,
          a = Na(t.categoryGap, r),
          o = Na(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          u = (s - a) / (l + (l - 1) * o);
      u = Math.max(u, 0), f(i, function (t) {
        var e = t.maxWidth;
        e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--);
      }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);
      var h,
          c = 0;
      f(i, function (t) {
        t.width || (t.width = u), h = t, c += t.width * (1 + o);
      }), h && (c -= h.width * o);
      var d = -c / 2;
      f(i, function (t, i) {
        n[e][i] = n[e][i] || {
          offset: d,
          width: t.width
        }, d += t.width * (1 + o);
      });
    }), n;
  }

  function Tu(t, e, n) {
    if (t && e) {
      var i = t[Mu(e)];
      return null != i && null != n && (i = i[bu(n)]), i;
    }
  }

  function Du(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }

  function ku(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }

  function Au(t, e, n) {
    return u(t.getAxesOnZeroOf(), e) >= 0 || n ? e.toGlobalCoord(e.dataToCoord(0)) : e.getGlobalExtent()[0];
  }

  function Pu(t, e) {
    return Xy(t, Gy(e));
  }

  function Lu(t, e) {
    var n,
        i,
        r,
        a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = null != o,
        u = null != s,
        h = t.getExtent();
    "ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = Na(i[0], 1), i[1] = Na(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : h[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({
      min: h[0],
      max: h[1]
    })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
      min: h[0],
      max: h[1]
    })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(T(o) || T(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));
    var c = e.ecModel;

    if (c && "time" === a) {
      var d,
          p = Su("bar", c);

      if (f(p, function (t) {
        d |= t.getBaseAxis() === e.axis;
      }), d) {
        var g = Iu(p),
            v = Ou(o, s, e, g);
        o = v.min, s = v.max;
      }
    }

    return [o, s];
  }

  function Ou(t, e, n, i) {
    var r = n.axis.getExtent(),
        a = r[1] - r[0],
        o = Tu(i, n.axis);
    if (void 0 === o) return {
      min: t,
      max: e
    };
    var s = 1 / 0;
    f(o, function (t) {
      s = Math.min(t.offset, s);
    });
    var l = -1 / 0;
    f(o, function (t) {
      l = Math.max(t.offset + t.width, l);
    }), s = Math.abs(s), l = Math.abs(l);
    var u = s + l,
        h = e - t,
        c = 1 - (s + l) / a,
        d = h / c - h;
    return e += d * (l / u), t -= d * (s / u), {
      min: t,
      max: e
    };
  }

  function Bu(t, e) {
    var n = Lu(t, e),
        i = null != e.getMin(),
        r = null != e.getMax(),
        a = e.get("splitNumber");
    "log" === t.type && (t.base = e.get("logBase"));
    var o = t.type;
    t.setExtent(n[0], n[1]), t.niceExtent({
      splitNumber: a,
      fixMin: i,
      fixMax: r,
      minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
      maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
    });
    var s = e.get("interval");
    null != s && t.setInterval && t.setInterval(s);
  }

  function Eu(t, e) {
    if (e = e || t.get("type")) switch (e) {
      case "category":
        return new Sy(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);

      case "value":
        return new Ty();

      default:
        return (fu.getClass(e) || Ty).create(t);
    }
  }

  function Ru(t) {
    var e = t.scale.getExtent(),
        n = e[0],
        i = e[1];
    return !(n > 0 && i > 0 || 0 > n && 0 > i);
  }

  function zu(t) {
    var e = t.getLabelModel().get("formatter"),
        n = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "string" == typeof e ? e = function (t) {
      return function (e) {
        return t.replace("{value}", null != e ? e : "");
      };
    }(e) : "function" == typeof e ? function (i, r) {
      return null != n && (r = i - n), e(Nu(t, i), r);
    } : function (e) {
      return t.scale.getLabel(e);
    };
  }

  function Nu(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e;
  }

  function Fu(t) {
    var e = t.model,
        n = t.scale;

    if (e.get("axisLabel.show") && !n.isBlank()) {
      var i,
          r,
          a = "category" === t.type,
          o = n.getExtent();
      a ? r = n.count() : (i = n.getTicks(), r = i.length);
      var s,
          l = t.getLabelModel(),
          u = zu(t),
          h = 1;
      r > 40 && (h = Math.ceil(r / 40));

      for (var c = 0; r > c; c += h) {
        var d = i ? i[c] : o[0] + c,
            f = u(d),
            p = l.getTextRect(f),
            g = Hu(p, l.get("rotate") || 0);
        s ? s.union(g) : s = g;
      }

      return s;
    }
  }

  function Hu(t, e) {
    var n = e * Math.PI / 180,
        i = t.plain(),
        r = i.width,
        a = i.height,
        o = r * Math.cos(n) + a * Math.sin(n),
        s = r * Math.sin(n) + a * Math.cos(n),
        l = new rn(i.x, i.y, o, s);
    return l;
  }

  function Vu(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
          i = this.shape;
      i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);
    }
  }

  function Wu(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return l = 0 === t.indexOf("image://") ? jr(t.slice(8), new rn(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? Xr(t.slice(7), {}, new rn(e, n, i, r), o ? "center" : "cover") : new r_({
      shape: {
        symbolType: t,
        x: e,
        y: n,
        width: i,
        height: r
      }
    }), l.__isEmptyBrush = s, l.setColor = Vu, l.setColor(a), l;
  }

  function Gu(t) {
    return hu(t.getSource(), t);
  }

  function Xu(t, e) {
    var n = e;
    Aa.isInstance(e) || (n = new Aa(e), c(n, $y));
    var i = Eu(n);
    return i.setExtent(t[0], t[1]), Bu(i, n), i;
  }

  function ju(t) {
    c(t, $y);
  }

  function qu(t, e) {
    return Math.abs(t - e) < s_;
  }

  function Uu(t, e, n) {
    var i = 0,
        r = t[0];
    if (!r) return !1;

    for (var a = 1; a < t.length; a++) {
      var o = t[a];
      i += br(r[0], r[1], o[0], o[1], e, n), r = o;
    }

    var s = t[0];
    return qu(r[0], s[0]) && qu(r[1], s[1]) || (i += br(r[0], r[1], s[0], s[1], e, n)), 0 !== i;
  }

  function Yu(t, e, n) {
    if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];else {
      var i = this.getBoundingRect();
      n = [i.x + i.width / 2, i.y + i.height / 2];
    }
    this.center = n;
  }

  function Zu(t) {
    if (!t.UTF8Encoding) return t;
    var e = t.UTF8Scale;
    null == e && (e = 1024);

    for (var n = t.features, i = 0; i < n.length; i++) for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
      var u = o[l];
      if ("Polygon" === a.type) o[l] = $u(u, s[l], e);else if ("MultiPolygon" === a.type) for (var h = 0; h < u.length; h++) {
        var c = u[h];
        u[h] = $u(c, s[l][h], e);
      }
    }

    return t.UTF8Encoding = !1, t;
  }

  function $u(t, e, n) {
    for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
      var s = t.charCodeAt(o) - 64,
          l = t.charCodeAt(o + 1) - 64;
      s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n]);
    }

    return i;
  }

  function Ku(t) {
    return "category" === t.type ? Ju(t) : nh(t);
  }

  function Qu(t, e) {
    return "category" === t.type ? eh(t, e) : {
      ticks: t.scale.getTicks()
    };
  }

  function Ju(t) {
    var e = t.getLabelModel(),
        n = th(t, e);
    return !e.get("show") || t.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: n.labelCategoryInterval
    } : n;
  }

  function th(t, e) {
    var n = ih(t, "labels"),
        i = ch(e),
        r = rh(n, i);
    if (r) return r;
    var a, o;
    return w(i) ? a = hh(t, i) : (o = "auto" === i ? oh(t) : i, a = uh(t, o)), ah(n, i, {
      labels: a,
      labelCategoryInterval: o
    });
  }

  function eh(t, e) {
    var n = ih(t, "ticks"),
        i = ch(e),
        r = rh(n, i);
    if (r) return r;
    var a, o;
    if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = hh(t, i, !0);else if ("auto" === i) {
      var s = th(t, t.getLabelModel());
      o = s.labelCategoryInterval, a = p(s.labels, function (t) {
        return t.tickValue;
      });
    } else o = i, a = uh(t, o, !0);
    return ah(n, i, {
      ticks: a,
      tickCategoryInterval: o
    });
  }

  function nh(t) {
    var e = t.scale.getTicks(),
        n = zu(t);
    return {
      labels: p(e, function (e, i) {
        return {
          formattedLabel: n(e, i),
          rawLabel: t.scale.getLabel(e),
          tickValue: e
        };
      })
    };
  }

  function ih(t, e) {
    return u_(t)[e] || (u_(t)[e] = []);
  }

  function rh(t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
  }

  function ah(t, e, n) {
    return t.push({
      key: e,
      value: n
    }), n;
  }

  function oh(t) {
    var e = u_(t).autoInterval;
    return null != e ? e : u_(t).autoInterval = t.calculateCategoryInterval();
  }

  function sh(t) {
    var e = lh(t),
        n = zu(t),
        i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        r = t.scale,
        a = r.getExtent(),
        o = r.count();
    if (a[1] - a[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));

    for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
          g = 0,
          v = Mn(n(l), e.font, "center", "top");
      p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
    }

    var m = d / h,
        y = f / c;
    isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);

    var _ = Math.max(0, Math.floor(Math.min(m, y))),
        x = u_(t.model),
        w = x.lastAutoInterval,
        b = x.lastTickCount;

    return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _;
  }

  function lh(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont()
    };
  }

  function uh(t, e, n) {
    function i(t) {
      l.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: a.getLabel(t),
        tickValue: t
      });
    }

    var r = zu(t),
        a = t.scale,
        o = a.getExtent(),
        s = t.getLabelModel(),
        l = [],
        u = Math.max((e || 0) + 1, 1),
        h = o[0],
        c = a.count();
    0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
    var d = {
      min: s.get("showMinLabel"),
      max: s.get("showMaxLabel")
    };
    d.min && h !== o[0] && i(o[0]);

    for (var f = h; f <= o[1]; f += u) i(f);

    return d.max && f !== o[1] && i(o[1]), l;
  }

  function hh(t, e, n) {
    var i = t.scale,
        r = zu(t),
        a = [];
    return f(i.getTicks(), function (t) {
      var o = i.getLabel(t);
      e(t, o) && a.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: o,
        tickValue: t
      });
    }), a;
  }

  function ch(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e;
  }

  function dh(t, e) {
    var n = t[1] - t[0],
        i = e,
        r = n / i / 2;
    t[0] += r, t[1] -= r;
  }

  function fh(t, e, n, i, r) {
    function a(t, e) {
      return h ? t > e : e > t;
    }

    var o = e.length;

    if (t.onBand && !i && o) {
      var s,
          l = t.getExtent();
      if (1 === o) e[0].coord = l[0], s = e[1] = {
        coord: l[0]
      };else {
        var u = e[1].coord - e[0].coord;
        f(e, function (t) {
          t.coord -= u / 2;
          var e = e || 0;
          e % 2 > 0 && (t.coord -= u / (2 * (e + 1)));
        }), s = {
          coord: e[o - 1].coord + u
        }, e.push(s);
      }
      var h = l[0] > l[1];
      a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
        coord: l[0]
      }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
        coord: l[1]
      });
    }
  }

  function ph(t, e, n, i) {
    var r = e.getData(),
        a = this.dataIndex,
        o = r.getName(a),
        s = e.get("selectedOffset");
    i.dispatchAction({
      type: "pieToggleSelect",
      from: t,
      name: o,
      seriesId: e.id
    }), r.each(function (t) {
      gh(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n);
    });
  }

  function gh(t, e, n, i, r) {
    var a = (e.startAngle + e.endAngle) / 2,
        o = Math.cos(a),
        s = Math.sin(a),
        l = n ? i : 0,
        u = [o * l, s * l];
    r ? t.animate().when(200, {
      position: u
    }).start("bounceOut") : t.attr("position", u);
  }

  function vh(t, e) {
    function n() {
      a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore;
    }

    function i() {
      a.ignore = a.normalIgnore, o.ignore = o.normalIgnore;
    }

    tf.call(this);
    var r = new mg({
      z2: 2
    }),
        a = new bg(),
        o = new fg();
    this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i);
  }

  function mh(t, e, n, i, r, a, o) {
    function s(e, n, i) {
      for (var r = e; n > r; r++) if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, i / 2);

      l(n - 1, i / 2);
    }

    function l(e, n) {
      for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
    }

    function u(t, e, n, i, r, a) {
      for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) if ("center" !== t[s].position) {
        var u = Math.abs(t[s].y - i),
            h = t[s].len,
            c = t[s].len2,
            d = r + h > u ? Math.sqrt((r + h + c) * (r + h + c) - u * u) : Math.abs(t[s].x - n);
        e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = n + d * a, o = d;
      }
    }

    t.sort(function (t, e) {
      return t.y - e.y;
    });

    for (var h, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) h = t[g].y - c, 0 > h && s(g, d, -h, r), c = t[g].y + t[g].height;

    0 > o - c && l(d - 1, c - o);

    for (var g = 0; d > g; g++) t[g].y >= n ? p.push(t[g]) : f.push(t[g]);

    u(f, !1, e, n, i, r), u(p, !0, e, n, i, r);
  }

  function yh(t, e, n, i, r, a) {
    for (var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);

    mh(s, e, n, i, 1, r, a), mh(o, e, n, i, -1, r, a);

    for (var l = 0; l < t.length; l++) {
      var u = t[l].linePoints;

      if (u) {
        var h = u[1][0] - u[2][0];
        u[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, u[1][1] = u[2][1] = t[l].y, u[1][0] = u[2][0] + h;
      }
    }
  }

  function _h(t) {
    return this._axes[t];
  }

  function xh(t) {
    I_.call(this, t);
  }

  function wh(t, e) {
    return e.type || (e.data ? "category" : "value");
  }

  function bh(t, e) {
    return t.getCoordSysModel() === e;
  }

  function Mh(t, e, n) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t;
  }

  function Sh(t, e, n) {
    n.getAxesOnZeroOf = function () {
      return i ? [i] : [];
    };

    var i,
        r = t[e],
        a = n.model,
        o = a.get("axisLine.onZero"),
        s = a.get("axisLine.onZeroAxisIndex");

    if (o) {
      if (null != s) return void (Ih(r[s]) && (i = r[s]));

      for (var l in r) if (r.hasOwnProperty(l) && Ih(r[l])) {
        i = r[l];
        break;
      }
    }
  }

  function Ih(t) {
    return t && "category" !== t.type && "time" !== t.type && Ru(t);
  }

  function Ch(t, e) {
    var n = t.getExtent(),
        i = n[0] + n[1];
    t.toGlobalCoord = "x" === t.dim ? function (t) {
      return t + e;
    } : function (t) {
      return i - t + e;
    }, t.toLocalCoord = "x" === t.dim ? function (t) {
      return t - e;
    } : function (t) {
      return i - t + e;
    };
  }

  function Th(t) {
    return p(B_, function (e) {
      var n = t.getReferringComponents(e)[0];
      return n;
    });
  }

  function Dh(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }

  function kh(t) {
    var e = {
      componentType: t.mainType
    };
    return e[t.mainType + "Index"] = t.componentIndex, e;
  }

  function Ah(t, e, n, i) {
    var r,
        a,
        o = ja(n - t.rotation),
        s = i[0] > i[1],
        l = "start" === e && !s || "start" !== e && s;
    return qa(o - E_ / 2) ? (a = l ? "bottom" : "top", r = "center") : qa(o - 1.5 * E_) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * E_ > o && o > E_ / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
      rotation: o,
      textAlign: r,
      textVerticalAlign: a
    };
  }

  function Ph(t) {
    var e = t.get("tooltip");
    return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
  }

  function Lh(t, e, n) {
    var i = t.get("axisLabel.showMinLabel"),
        r = t.get("axisLabel.showMaxLabel");
    e = e || [], n = n || [];
    var a = e[0],
        o = e[1],
        s = e[e.length - 1],
        l = e[e.length - 2],
        u = n[0],
        h = n[1],
        c = n[n.length - 1],
        d = n[n.length - 2];
    i === !1 ? (Oh(a), Oh(u)) : Bh(a, o) && (i ? (Oh(o), Oh(h)) : (Oh(a), Oh(u))), r === !1 ? (Oh(s), Oh(c)) : Bh(l, s) && (r ? (Oh(l), Oh(d)) : (Oh(s), Oh(c)));
  }

  function Oh(t) {
    t && (t.ignore = !0);
  }

  function Bh(t, e) {
    var n = t && t.getBoundingRect().clone(),
        i = e && e.getBoundingRect().clone();

    if (n && i) {
      var r = pe([]);
      return ye(r, r, -t.rotation), n.applyTransform(ve([], r, t.getLocalTransform())), i.applyTransform(ve([], r, e.getLocalTransform())), n.intersect(i);
    }
  }

  function Eh(t) {
    return "middle" === t || "center" === t;
  }

  function Rh(t, e, n) {
    var i = e.axis;

    if (e.get("axisTick.show") && !i.scale.isBlank()) {
      for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
        var p = l[f].coord;
        u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * o, c && (ae(u, u, c), ae(h, h, c));
        var g = new Sg(Yr({
          anid: "tick_" + l[f].tickValue,
          shape: {
            x1: u[0],
            y1: u[1],
            x2: h[0],
            y2: h[1]
          },
          style: s(a.getLineStyle(), {
            stroke: e.get("axisLine.lineStyle.color")
          }),
          z2: 2,
          silent: !0
        }));
        t.group.add(g), d.push(g);
      }

      return d;
    }
  }

  function zh(t, e, n) {
    var i = e.axis,
        r = D(n.axisLabelShow, e.get("axisLabel.show"));

    if (r && !i.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
          o = a.get("margin"),
          s = i.getViewLabels(),
          l = (D(n.labelRotate, a.get("rotate")) || 0) * E_ / 180,
          u = N_(n.rotation, l, n.labelDirection),
          h = e.getCategories(!0),
          c = [],
          d = Ph(e),
          p = e.get("triggerEvent");
      return f(s, function (r, s) {
        var l = r.tickValue,
            f = r.formattedLabel,
            g = r.rawLabel,
            v = a;
        h && h[l] && h[l].textStyle && (v = new Aa(h[l].textStyle, a, e.ecModel));
        var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
            y = i.dataToCoord(l),
            _ = [y, n.labelOffset + n.labelDirection * o],
            x = new fg({
          anid: "label_" + l,
          position: _,
          rotation: u.rotation,
          silent: d,
          z2: 10
        });
        ca(x.style, v, {
          text: f,
          textAlign: v.getShallow("align", !0) || u.textAlign,
          textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign,
          textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m
        }), p && (x.eventData = kh(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform();
      }), c;
    }
  }

  function Nh(t, e) {
    var n = {
      axesInfo: {},
      seriesInvolved: !1,
      coordSysAxesInfo: {},
      coordSysMap: {}
    };
    return Fh(n, t, e), n.seriesInvolved && Vh(n, t), n;
  }

  function Fh(t, e, n) {
    var i = e.getComponent("tooltip"),
        r = e.getComponent("axisPointer"),
        a = r.get("link", !0) || [],
        o = [];
    F_(n.getCoordinateSystems(), function (n) {
      function s(i, s, l) {
        var h = l.model.getModel("axisPointer", r),
            d = h.get("show");

        if (d && ("auto" !== d || i || Uh(h))) {
          null == s && (s = h.get("triggerTooltip")), h = i ? Hh(l, c, r, e, i, s) : h;
          var f = h.get("snap"),
              p = Yh(l.model),
              g = s || f || "category" === l.type,
              v = t.axesInfo[p] = {
            key: p,
            axis: l,
            coordSys: n,
            axisPointerModel: h,
            triggerTooltip: s,
            involveSeries: g,
            snap: f,
            useHandle: Uh(h),
            seriesModels: []
          };
          u[p] = v, t.seriesInvolved |= g;
          var m = Wh(a, l);

          if (null != m) {
            var y = o[m] || (o[m] = {
              axesInfo: {}
            });
            y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y;
          }
        }
      }

      if (n.axisPointerEnabled) {
        var l = Yh(n.model),
            u = t.coordSysAxesInfo[l] = {};
        t.coordSysMap[l] = n;
        var h = n.model,
            c = h.getModel("tooltip", i);

        if (F_(n.getAxes(), H_(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
          var d = "axis" === c.get("trigger"),
              f = "cross" === c.get("axisPointer.type"),
              p = n.getTooltipAxes(c.get("axisPointer.axis"));
          (d || f) && F_(p.baseAxes, H_(s, f ? "cross" : !0, d)), f && F_(p.otherAxes, H_(s, "cross", !1));
        }
      }
    });
  }

  function Hh(t, e, n, r, a, o) {
    var l = e.getModel("axisPointer"),
        u = {};
    F_(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
      u[t] = i(l.get(t));
    }), u.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (u.type = "line");
    var h = u.label || (u.label = {});

    if (null == h.show && (h.show = !1), "cross" === a) {
      var c = l.get("label.show");

      if (h.show = null != c ? c : !0, !o) {
        var d = u.lineStyle = l.get("crossStyle");
        d && s(h, d.textStyle);
      }
    }

    return t.model.getModel("axisPointer", new Aa(u, n, r));
  }

  function Vh(t, e) {
    e.eachSeries(function (e) {
      var n = e.coordinateSystem,
          i = e.get("tooltip.trigger", !0),
          r = e.get("tooltip.show", !0);
      n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && F_(t.coordSysAxesInfo[Yh(n.model)], function (t) {
        var i = t.axis;
        n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count());
      });
    }, this);
  }

  function Wh(t, e) {
    for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
      var a = t[r] || {};
      if (Gh(a[i + "AxisId"], n.id) || Gh(a[i + "AxisIndex"], n.componentIndex) || Gh(a[i + "AxisName"], n.name)) return r;
    }
  }

  function Gh(t, e) {
    return "all" === t || x(t) && u(t, e) >= 0 || t === e;
  }

  function Xh(t) {
    var e = jh(t);

    if (e) {
      var n = e.axisPointerModel,
          i = e.axis.scale,
          r = n.option,
          a = n.get("status"),
          o = n.get("value");
      null != o && (o = i.parse(o));
      var s = Uh(n);
      null == a && (r.status = s ? "show" : "hide");
      var l = i.getExtent().slice();
      l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }

  function jh(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[Yh(t)];
  }

  function qh(t) {
    var e = jh(t);
    return e && e.axisPointerModel;
  }

  function Uh(t) {
    return !!t.get("handle.show");
  }

  function Yh(t) {
    return t.type + "||" + t.id;
  }

  function Zh(t, e, n, i, r, a) {
    var o = V_.getAxisPointerClass(t.axisPointerClass);

    if (o) {
      var s = qh(e);
      s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : $h(t, i);
    }
  }

  function $h(t, e, n) {
    var i = t._axisPointer;
    i && i.dispose(e, n), t._axisPointer = null;
  }

  function Kh(t, e, n) {
    n = n || {};
    var i = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.getAxesOnZeroOf()[0],
        s = r.position,
        l = o ? "onZero" : s,
        u = r.dim,
        h = i.getRect(),
        c = [h.x, h.x + h.width, h.y, h.y + h.height],
        d = {
      left: 0,
      right: 1,
      top: 0,
      bottom: 1,
      onZero: 2
    },
        f = e.get("offset") || 0,
        p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];

    if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));
      p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
    }

    a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
    var v = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
    var m = e.get("axisLabel.rotate");
    return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;
  }

  function Qh(t, e, n) {
    var i,
        r = {},
        a = "toggleSelected" === t;
    return n.eachComponent("legend", function (n) {
      a && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name));
      var o = n.getData();
      f(o, function (t) {
        var e = t.get("name");

        if ("\n" !== e && "" !== e) {
          var i = n.isSelected(e);
          r[e] = r.hasOwnProperty(e) ? r[e] && i : i;
        }
      });
    }), {
      name: e.name,
      selected: r
    };
  }

  function Jh(t, e) {
    var n = $g(e.get("padding")),
        i = e.getItemStyle(["color", "opacity"]);
    i.fill = e.get("backgroundColor");
    var t = new Mg({
      shape: {
        x: t.x - n[3],
        y: t.y - n[0],
        width: t.width + n[1] + n[3],
        height: t.height + n[0] + n[2],
        r: e.get("borderRadius")
      },
      style: i,
      silent: !0,
      z2: -1
    });
    return t;
  }

  function tc(t, e) {
    e.dispatchAction({
      type: "legendToggleSelect",
      name: t
    });
  }

  function ec(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];
    r && r.useHoverLayer || n.dispatchAction({
      type: "highlight",
      seriesName: t.name,
      name: e,
      excludeSeriesId: i
    });
  }

  function nc(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];
    r && r.useHoverLayer || n.dispatchAction({
      type: "downplay",
      seriesName: t.name,
      name: e,
      excludeSeriesId: i
    });
  }

  function ic(t, e, n) {
    var i = t.getOrient(),
        r = [1, 1];
    r[i.index] = 0, co(e, n, {
      type: "box",
      ignoreSize: r
    });
  }

  function rc(t, e, n, i, r) {
    var a = t.axis;

    if (!a.scale.isBlank() && a.containData(e)) {
      if (!t.involveSeries) return void n.showPointer(t, e);
      var s = ac(e, t),
          l = s.payloadBatch,
          u = s.snapToValue;
      l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u);
    }
  }

  function ac(t, e) {
    var n = e.axis,
        i = n.dim,
        r = t,
        a = [],
        o = Number.MAX_VALUE,
        s = -1;
    return rx(e.seriesModels, function (e) {
      var l,
          u,
          h = e.getData().mapDimension(i, !0);

      if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(h, t, n);
        u = c.dataIndices, l = c.nestestValue;
      } else {
        if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;
        l = e.getData().get(h[0], u[0]);
      }

      if (null != l && isFinite(l)) {
        var d = t - l,
            f = Math.abs(d);
        o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), rx(u, function (t) {
          a.push({
            seriesIndex: e.seriesIndex,
            dataIndexInside: t,
            dataIndex: e.getData().getRawIndex(t)
          });
        }));
      }
    }), {
      payloadBatch: a,
      snapToValue: r
    };
  }

  function oc(t, e, n, i) {
    t[e.key] = {
      value: n,
      payloadBatch: i
    };
  }

  function sc(t, e, n, i) {
    var r = n.payloadBatch,
        a = e.axis,
        o = a.model,
        s = e.axisPointerModel;

    if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
          u = Yh(l),
          h = t.map[u];
      h || (h = t.map[u] = {
        coordSysId: l.id,
        coordSysIndex: l.componentIndex,
        coordSysType: l.type,
        coordSysMainType: l.mainType,
        dataByAxis: []
      }, t.list.push(h)), h.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: i,
        valueLabelOpt: {
          precision: s.get("label.precision"),
          formatter: s.get("label.formatter")
        },
        seriesDataIndices: r.slice()
      });
    }
  }

  function lc(t, e, n) {
    var i = n.axesInfo = [];
    rx(e, function (e, n) {
      var r = e.axisPointerModel.option,
          a = t[n];
      a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
        axisDim: e.axis.dim,
        axisIndex: e.axis.model.componentIndex,
        value: r.value
      });
    });
  }

  function uc(t, e, n, i) {
    if (fc(e) || !t.list.length) return void i({
      type: "hideTip"
    });
    var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    i({
      type: "showTip",
      escapeConnect: !0,
      x: e[0],
      y: e[1],
      tooltipOption: n.tooltipOption,
      position: n.position,
      dataIndexInside: r.dataIndexInside,
      dataIndex: r.dataIndex,
      seriesIndex: r.seriesIndex,
      dataByCoordSys: t.list
    });
  }

  function hc(t, e, n) {
    var i = n.getZr(),
        r = "axisPointerLastHighlights",
        a = ox(i)[r] || {},
        o = ox(i)[r] = {};
    rx(t, function (t) {
      var e = t.axisPointerModel.option;
      "show" === e.status && rx(e.seriesDataIndices, function (t) {
        var e = t.seriesIndex + " | " + t.dataIndex;
        o[e] = t;
      });
    });
    var s = [],
        l = [];
    f(a, function (t, e) {
      !o[e] && l.push(t);
    }), f(o, function (t, e) {
      !a[e] && s.push(t);
    }), l.length && n.dispatchAction({
      type: "downplay",
      escapeConnect: !0,
      batch: l
    }), s.length && n.dispatchAction({
      type: "highlight",
      escapeConnect: !0,
      batch: s
    });
  }

  function cc(t, e) {
    for (var n = 0; n < (t || []).length; n++) {
      var i = t[n];
      if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
    }
  }

  function dc(t) {
    var e = t.axis.model,
        n = {},
        i = n.axisDim = t.axis.dim;
    return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n;
  }

  function fc(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }

  function pc(t, e, n) {
    if (!Kc.node) {
      var i = e.getZr();
      lx(i).records || (lx(i).records = {}), gc(i, e);
      var r = lx(i).records[t] || (lx(i).records[t] = {});
      r.handler = n;
    }
  }

  function gc(t, e) {
    function n(n, i) {
      t.on(n, function (n) {
        var r = _c(e);

        ux(lx(t).records, function (t) {
          t && i(t, n, r.dispatchAction);
        }), vc(r.pendings, e);
      });
    }

    lx(t).initialized || (lx(t).initialized = !0, n("click", _(yc, "click")), n("mousemove", _(yc, "mousemove")), n("globalout", mc));
  }

  function vc(t, e) {
    var n,
        i = t.showTip.length,
        r = t.hideTip.length;
    i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n));
  }

  function mc(t, e, n) {
    t.handler("leave", null, n);
  }

  function yc(t, e, n, i) {
    e.handler(t, n, i);
  }

  function _c(t) {
    var e = {
      showTip: [],
      hideTip: []
    },
        n = function (i) {
      var r = e[i.type];
      r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i));
    };

    return {
      dispatchAction: n,
      pendings: e
    };
  }

  function xc(t, e) {
    if (!Kc.node) {
      var n = e.getZr(),
          i = (lx(n).records || {})[t];
      i && (lx(n).records[t] = null);
    }
  }

  function wc() {}

  function bc(t, e, n, i) {
    Mc(cx(n).lastProp, i) || (cx(n).lastProp = i, e ? wa(n, i, t) : (n.stopAnimation(), n.attr(i)));
  }

  function Mc(t, e) {
    if (M(t) && M(e)) {
      var n = !0;
      return f(e, function (e, i) {
        n = n && Mc(t[i], e);
      }), !!n;
    }

    return t === e;
  }

  function Sc(t, e) {
    t[e.get("label.show") ? "show" : "hide"]();
  }

  function Ic(t) {
    return {
      position: t.position.slice(),
      rotation: t.rotation || 0
    };
  }

  function Cc(t, e, n) {
    var i = e.get("z"),
        r = e.get("zlevel");
    t && t.traverse(function (t) {
      "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n);
    });
  }

  function Tc(t) {
    var e,
        n = t.get("type"),
        i = t.getModel(n + "Style");
    return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e;
  }

  function Dc(t, e, n, i, r) {
    var a = n.get("value"),
        o = Ac(a, e.axis, e.ecModel, n.get("seriesDataIndices"), {
      precision: n.get("label.precision"),
      formatter: n.get("label.formatter")
    }),
        s = n.getModel("label"),
        l = $g(s.get("padding") || 0),
        u = s.getFont(),
        h = Mn(o, u),
        c = r.position,
        d = h.width + l[1] + l[3],
        f = h.height + l[0] + l[2],
        p = r.align;
    "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
    var g = r.verticalAlign;
    "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), kc(c, d, f, i);
    var v = s.get("backgroundColor");
    v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
      shape: {
        x: 0,
        y: 0,
        width: d,
        height: f,
        r: s.get("borderRadius")
      },
      position: c.slice(),
      style: {
        text: o,
        textFont: u,
        textFill: s.getTextColor(),
        textPosition: "inside",
        fill: v,
        stroke: s.get("borderColor") || "transparent",
        lineWidth: s.get("borderWidth") || 0,
        shadowBlur: s.get("shadowBlur"),
        shadowColor: s.get("shadowColor"),
        shadowOffsetX: s.get("shadowOffsetX"),
        shadowOffsetY: s.get("shadowOffsetY")
      },
      z2: 10
    };
  }

  function kc(t, e, n, i) {
    var r = i.getWidth(),
        a = i.getHeight();
    t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
  }

  function Ac(t, e, n, i, r) {
    t = e.scale.parse(t);
    var a = e.scale.getLabel(t, {
      precision: r.precision
    }),
        o = r.formatter;

    if (o) {
      var s = {
        value: Nu(e, t),
        seriesData: []
      };
      f(i, function (t) {
        var e = n.getSeriesByIndex(t.seriesIndex),
            i = t.dataIndexInside,
            r = e && e.getDataParams(i);
        r && s.seriesData.push(r);
      }), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s));
    }

    return a;
  }

  function Pc(t, e, n) {
    var i = fe();
    return ye(i, i, n.rotation), me(i, i, n.position), Sa([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i);
  }

  function Lc(t, e, n, i, r, a) {
    var o = R_.innerTextLayout(n.rotation, 0, n.labelDirection);
    n.labelMargin = r.get("label.margin"), Dc(e, i, r, a, {
      position: Pc(i.axis, t, n),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign
    });
  }

  function Oc(t, e, n) {
    return n = n || 0, {
      x1: t[n],
      y1: t[1 - n],
      x2: e[n],
      y2: e[1 - n]
    };
  }

  function Bc(t, e, n) {
    return n = n || 0, {
      x: t[n],
      y: t[1 - n],
      width: e[n],
      height: e[1 - n]
    };
  }

  function Ec(t, e) {
    var n = {};
    return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n);
  }

  function Rc(t) {
    return "x" === t.dim ? 0 : 1;
  }

  function zc(t) {
    var e = "cubic-bezier(0.23, 1, 0.32, 1)",
        n = "left " + t + "s " + e + ",top " + t + "s " + e;
    return p(yx, function (t) {
      return t + "transition:" + n;
    }).join(";");
  }

  function Nc(t) {
    var e = [],
        n = t.get("fontSize"),
        i = t.getTextColor();
    return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), vx(["decoration", "align"], function (n) {
      var i = t.get(n);
      i && e.push("text-" + n + ":" + i);
    }), e.join(";");
  }

  function Fc(t) {
    var e = [],
        n = t.get("transitionDuration"),
        i = t.get("backgroundColor"),
        r = t.getModel("textStyle"),
        a = t.get("padding");
    return n && e.push(zc(n)), i && (Kc.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Ne(i)), e.push("filter:alpha(opacity=70)"))), vx(["width", "color", "radius"], function (n) {
      var i = "border-" + n,
          r = mx(i),
          a = t.get(r);
      null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"));
    }), e.push(Nc(r)), null != a && e.push("padding:" + $g(a).join("px ") + "px"), e.join(";") + ";";
  }

  function Hc(t, e) {
    if (Kc.wxa) return null;
    var n = document.createElement("div"),
        i = this._zr = e.getZr();
    this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
    var r = this;
    n.onmouseenter = function () {
      r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0;
    }, n.onmousemove = function (e) {
      if (e = e || window.event, !r._enterable) {
        var n = i.handler;
        gi(t, e, !0), n.dispatch("mousemove", e);
      }
    }, n.onmouseleave = function () {
      r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1;
    };
  }

  function Vc(t) {
    for (var e = t.pop(); t.length;) {
      var n = t.pop();
      n && (Aa.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {
        formatter: n
      }), e = new Aa(n, e, e.ecModel));
    }

    return e;
  }

  function Wc(t, e) {
    return t.dispatchAction || y(e.dispatchAction, e);
  }

  function Gc(t, e, n, i, r, a, o) {
    var s = jc(n),
        l = s.width,
        u = s.height;
    return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e += o), [t, e];
  }

  function Xc(t, e, n, i, r) {
    var a = jc(n),
        o = a.width,
        s = a.height;
    return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
  }

  function jc(t) {
    var e = t.clientWidth,
        n = t.clientHeight;

    if (document.defaultView && document.defaultView.getComputedStyle) {
      var i = document.defaultView.getComputedStyle(t);
      i && (e += parseInt(i.paddingLeft, 10) + parseInt(i.paddingRight, 10) + parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), n += parseInt(i.paddingTop, 10) + parseInt(i.paddingBottom, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10));
    }

    return {
      width: e,
      height: n
    };
  }

  function qc(t, e, n) {
    var i = n[0],
        r = n[1],
        a = 5,
        o = 0,
        s = 0,
        l = e.width,
        u = e.height;

    switch (t) {
      case "inside":
        o = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;
        break;

      case "top":
        o = e.x + l / 2 - i / 2, s = e.y - r - a;
        break;

      case "bottom":
        o = e.x + l / 2 - i / 2, s = e.y + u + a;
        break;

      case "left":
        o = e.x - i - a, s = e.y + u / 2 - r / 2;
        break;

      case "right":
        o = e.x + l + a, s = e.y + u / 2 - r / 2;
    }

    return [o, s];
  }

  function Uc(t) {
    return "center" === t || "middle" === t;
  }

  var Yc = 2311,
      Zc = function () {
    return Yc++;
  },
      $c = {};

  $c = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
    browser: {},
    os: {},
    node: !1,
    wxa: !0,
    canvasSupported: !0,
    svgSupported: !1,
    touchEventsSupported: !0
  } : "undefined" == typeof document && "undefined" != typeof self ? {
    browser: {},
    os: {},
    node: !1,
    worker: !0,
    canvasSupported: !0
  } : "undefined" == typeof navigator ? {
    browser: {},
    os: {},
    node: !0,
    worker: !1,
    canvasSupported: !0,
    svgSupported: !0
  } : e(navigator.userAgent);

  var Kc = $c,
      Qc = {
    "[object Function]": 1,
    "[object RegExp]": 1,
    "[object Date]": 1,
    "[object Error]": 1,
    "[object CanvasGradient]": 1,
    "[object CanvasPattern]": 1,
    "[object Image]": 1,
    "[object Canvas]": 1
  },
      Jc = {
    "[object Int8Array]": 1,
    "[object Uint8Array]": 1,
    "[object Uint8ClampedArray]": 1,
    "[object Int16Array]": 1,
    "[object Uint16Array]": 1,
    "[object Int32Array]": 1,
    "[object Uint32Array]": 1,
    "[object Float32Array]": 1,
    "[object Float64Array]": 1
  },
      td = Object.prototype.toString,
      ed = Array.prototype,
      nd = ed.forEach,
      id = ed.filter,
      rd = ed.slice,
      ad = ed.map,
      od = ed.reduce,
      sd = {},
      ld = function () {
    return sd.createCanvas();
  };

  sd.createCanvas = function () {
    return document.createElement("canvas");
  };

  var ud,
      hd = "__ec_primitive__";
  z.prototype = {
    constructor: z,
    get: function (t) {
      return this.hasOwnProperty(t) ? this[t] : null;
    },
    set: function (t, e) {
      return this[t] = e;
    },
    each: function (t, e) {
      void 0 !== e && (t = y(t, e));

      for (var n in this) this.hasOwnProperty(n) && t(this[n], n);
    },
    removeKey: function (t) {
      delete this[t];
    }
  };
  var cd = (Object.freeze || Object)({
    $override: n,
    clone: i,
    merge: r,
    mergeAll: a,
    extend: o,
    defaults: s,
    createCanvas: ld,
    getContext: l,
    indexOf: u,
    inherits: h,
    mixin: c,
    isArrayLike: d,
    each: f,
    map: p,
    reduce: g,
    filter: v,
    find: m,
    bind: y,
    curry: _,
    isArray: x,
    isFunction: w,
    isString: b,
    isObject: M,
    isBuiltInObject: S,
    isTypedArray: I,
    isDom: C,
    eqNaN: T,
    retrieve: D,
    retrieve2: k,
    retrieve3: A,
    slice: P,
    normalizeCssArray: L,
    assert: O,
    trim: B,
    setAsPrimitive: E,
    isPrimitive: R,
    createHashMap: N,
    concatArray: F,
    noop: H
  }),
      dd = "undefined" == typeof Float32Array ? Array : Float32Array,
      fd = Y,
      pd = Z,
      gd = ee,
      vd = ne,
      md = (Object.freeze || Object)({
    create: V,
    copy: W,
    clone: G,
    set: X,
    add: j,
    scaleAndAdd: q,
    sub: U,
    len: Y,
    length: fd,
    lenSquare: Z,
    lengthSquare: pd,
    mul: $,
    div: K,
    dot: Q,
    scale: J,
    normalize: te,
    distance: ee,
    dist: gd,
    distanceSquare: ne,
    distSquare: vd,
    negate: ie,
    lerp: re,
    applyTransform: ae,
    min: oe,
    max: se
  });
  le.prototype = {
    constructor: le,
    _dragStart: function (t) {
      var e = t.target;
      e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event));
    },
    _drag: function (t) {
      var e = this._draggingTarget;

      if (e) {
        var n = t.offsetX,
            i = t.offsetY,
            r = n - this._x,
            a = i - this._y;
        this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t.event);
        var o = this.findHover(n, i, e).target,
            s = this._dropTarget;
        this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event));
      }
    },
    _dragEnd: function (t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    }
  };

  var yd = Array.prototype.slice,
      _d = function () {
    this._$handlers = {};
  };

  _d.prototype = {
    constructor: _d,
    one: function (t, e, n) {
      var i = this._$handlers;
      if (!e || !t) return this;
      i[t] || (i[t] = []);

      for (var r = 0; r < i[t].length; r++) if (i[t][r].h === e) return this;

      return i[t].push({
        h: e,
        one: !0,
        ctx: n || this
      }), this;
    },
    on: function (t, e, n) {
      var i = this._$handlers;
      if (!e || !t) return this;
      i[t] || (i[t] = []);

      for (var r = 0; r < i[t].length; r++) if (i[t][r].h === e) return this;

      return i[t].push({
        h: e,
        one: !1,
        ctx: n || this
      }), this;
    },
    isSilent: function (t) {
      var e = this._$handlers;
      return e[t] && e[t].length;
    },
    off: function (t, e) {
      var n = this._$handlers;
      if (!t) return this._$handlers = {}, this;

      if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h != e && i.push(n[t][r]);

          n[t] = i;
        }

        n[t] && 0 === n[t].length && delete n[t];
      } else delete n[t];

      return this;
    },
    trigger: function (t) {
      if (this._$handlers[t]) {
        var e = arguments,
            n = e.length;
        n > 3 && (e = yd.call(e, 1));

        for (var i = this._$handlers[t], r = i.length, a = 0; r > a;) {
          switch (n) {
            case 1:
              i[a].h.call(i[a].ctx);
              break;

            case 2:
              i[a].h.call(i[a].ctx, e[1]);
              break;

            case 3:
              i[a].h.call(i[a].ctx, e[1], e[2]);
              break;

            default:
              i[a].h.apply(i[a].ctx, e);
          }

          i[a].one ? (i.splice(a, 1), r--) : a++;
        }
      }

      return this;
    },
    triggerWithContext: function (t) {
      if (this._$handlers[t]) {
        var e = arguments,
            n = e.length;
        n > 4 && (e = yd.call(e, 1, e.length - 1));

        for (var i = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; a > o;) {
          switch (n) {
            case 1:
              r[o].h.call(i);
              break;

            case 2:
              r[o].h.call(i, e[1]);
              break;

            case 3:
              r[o].h.call(i, e[1], e[2]);
              break;

            default:
              r[o].h.apply(i, e);
          }

          r[o].one ? (r.splice(o, 1), a--) : o++;
        }
      }

      return this;
    }
  };
  var xd = "silent";

  ce.prototype.dispose = function () {};

  var wd = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      bd = function (t, e, n, i) {
    _d.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new ce(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this.setHandlerProxy(n);
  };

  bd.prototype = {
    constructor: bd,
    setHandlerProxy: function (t) {
      this.proxy && this.proxy.dispose(), t && (f(wd, function (e) {
        t.on && t.on(e, this[e], this);
      }, this), t.handler = this), this.proxy = t;
    },
    mousemove: function (t) {
      var e = t.zrX,
          n = t.zrY,
          i = this._hovered,
          r = i.target;
      r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
      var a = this._hovered = this.findHover(e, n),
          o = a.target,
          s = this.proxy;
      s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
    },
    mouseout: function (t) {
      this.dispatchToElement(this._hovered, "mouseout", t);
      var e,
          n = t.toElement || t.relatedTarget;

      do n = n && n.parentNode; while (n && 9 != n.nodeType && !(e = n === this.painterRoot));

      !e && this.trigger("globalout", {
        event: t
      });
    },
    resize: function () {
      this._hovered = {};
    },
    dispatch: function (t, e) {
      var n = this[t];
      n && n.call(this, e);
    },
    dispose: function () {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
    },
    setCursorStyle: function (t) {
      var e = this.proxy;
      e.setCursor && e.setCursor(t);
    },
    dispatchToElement: function (t, e, n) {
      t = t || {};
      var i = t.target;

      if (!i || !i.silent) {
        for (var r = "on" + e, a = he(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););

        a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
        }));
      }
    },
    findHover: function (t, e, n) {
      for (var i = this.storage.getDisplayList(), r = {
        x: t,
        y: e
      }, a = i.length - 1; a >= 0; a--) {
        var o;

        if (i[a] !== n && !i[a].ignore && (o = de(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== xd)) {
          r.target = i[a];
          break;
        }
      }

      return r;
    }
  }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    bd.prototype[t] = function (e) {
      var n = this.findHover(e.zrX, e.zrY),
          i = n.target;
      if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;else if ("mouseup" === t) this._upEl = i;else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || gd(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null;
      }
      this.dispatchToElement(n, t, e);
    };
  }), c(bd, _d), c(bd, le);

  var Md = "undefined" == typeof Float32Array ? Array : Float32Array,
      Sd = (Object.freeze || Object)({
    create: fe,
    identity: pe,
    copy: ge,
    mul: ve,
    translate: me,
    rotate: ye,
    scale: _e,
    invert: xe,
    clone: we
  }),
      Id = pe,
      Cd = 5e-5,
      Td = function (t) {
    t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
  },
      Dd = Td.prototype;

  Dd.transform = null, Dd.needLocalTransform = function () {
    return be(this.rotation) || be(this.position[0]) || be(this.position[1]) || be(this.scale[0] - 1) || be(this.scale[1] - 1);
  }, Dd.updateTransform = function () {
    var t = this.parent,
        e = t && t.transform,
        n = this.needLocalTransform(),
        i = this.transform;
    return n || e ? (i = i || fe(), n ? this.getLocalTransform(i) : Id(i), e && (n ? ve(i, t.transform, i) : ge(i, t.transform)), this.transform = i, this.invTransform = this.invTransform || fe(), void xe(this.invTransform, i)) : void (i && Id(i));
  }, Dd.getLocalTransform = function (t) {
    return Td.getLocalTransform(this, t);
  }, Dd.setTransform = function (t) {
    var e = this.transform,
        n = t.dpr || 1;
    e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
  }, Dd.restoreTransform = function (t) {
    var e = t.dpr || 1;
    t.setTransform(e, 0, 0, e, 0, 0);
  };
  var kd = [];
  Dd.decomposeTransform = function () {
    if (this.transform) {
      var t = this.parent,
          e = this.transform;
      t && t.transform && (ve(kd, t.invTransform, e), e = kd);
      var n = e[0] * e[0] + e[1] * e[1],
          i = e[2] * e[2] + e[3] * e[3],
          r = this.position,
          a = this.scale;
      be(n - 1) && (n = Math.sqrt(n)), be(i - 1) && (i = Math.sqrt(i)), e[0] < 0 && (n = -n), e[3] < 0 && (i = -i), r[0] = e[4], r[1] = e[5], a[0] = n, a[1] = i, this.rotation = Math.atan2(-e[1] / i, e[0] / n);
    }
  }, Dd.getGlobalScale = function () {
    var t = this.transform;
    if (!t) return [1, 1];
    var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
    return t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), [e, n];
  }, Dd.transformCoordToLocal = function (t, e) {
    var n = [t, e],
        i = this.invTransform;
    return i && ae(n, n, i), n;
  }, Dd.transformCoordToGlobal = function (t, e) {
    var n = [t, e],
        i = this.transform;
    return i && ae(n, n, i), n;
  }, Td.getLocalTransform = function (t, e) {
    e = e || [], Id(e);
    var n = t.origin,
        i = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];
    return n && (e[4] -= n[0], e[5] -= n[1]), _e(e, e, i), r && ye(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;
  };
  var Ad = {
    linear: function (t) {
      return t;
    },
    quadraticIn: function (t) {
      return t * t;
    },
    quadraticOut: function (t) {
      return t * (2 - t);
    },
    quadraticInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    cubicIn: function (t) {
      return t * t * t;
    },
    cubicOut: function (t) {
      return --t * t * t + 1;
    },
    cubicInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    quarticIn: function (t) {
      return t * t * t * t;
    },
    quarticOut: function (t) {
      return 1 - --t * t * t * t;
    },
    quarticInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    quinticIn: function (t) {
      return t * t * t * t * t;
    },
    quinticOut: function (t) {
      return --t * t * t * t * t + 1;
    },
    quinticInOut: function (t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    sinusoidalIn: function (t) {
      return 1 - Math.cos(t * Math.PI / 2);
    },
    sinusoidalOut: function (t) {
      return Math.sin(t * Math.PI / 2);
    },
    sinusoidalInOut: function (t) {
      return .5 * (1 - Math.cos(Math.PI * t));
    },
    exponentialIn: function (t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1);
    },
    exponentialOut: function (t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    exponentialInOut: function (t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    },
    circularIn: function (t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    circularOut: function (t) {
      return Math.sqrt(1 - --t * t);
    },
    circularInOut: function (t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    elasticIn: function (t) {
      var e,
          n = .1,
          i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)));
    },
    elasticOut: function (t) {
      var e,
          n = .1,
          i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1);
    },
    elasticInOut: function (t) {
      var e,
          n = .1,
          i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1);
    },
    backIn: function (t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    backOut: function (t) {
      var e = 1.70158;
      return --t * t * ((e + 1) * t + e) + 1;
    },
    backInOut: function (t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    },
    bounceIn: function (t) {
      return 1 - Ad.bounceOut(1 - t);
    },
    bounceOut: function (t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    bounceInOut: function (t) {
      return .5 > t ? .5 * Ad.bounceIn(2 * t) : .5 * Ad.bounceOut(2 * t - 1) + .5;
    }
  };
  Me.prototype = {
    constructor: Me,
    step: function (t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
      var n = (t - this._startTime - this._pausedTime) / this._life;

      if (!(0 > n)) {
        n = Math.min(n, 1);
        var i = this.easing,
            r = "string" == typeof i ? Ad[i] : i,
            a = "function" == typeof r ? r(n) : n;
        return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;
      }
    },
    restart: function (t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;
      this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
    },
    fire: function (t, e) {
      t = "on" + t, this[t] && this[t](this._target, e);
    },
    pause: function () {
      this._paused = !0;
    },
    resume: function () {
      this._paused = !1;
    }
  };

  var Pd = function () {
    this.head = null, this.tail = null, this._len = 0;
  },
      Ld = Pd.prototype;

  Ld.insert = function (t) {
    var e = new Od(t);
    return this.insertEntry(e), e;
  }, Ld.insertEntry = function (t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, Ld.remove = function (t) {
    var e = t.prev,
        n = t.next;
    e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, Ld.len = function () {
    return this._len;
  }, Ld.clear = function () {
    this.head = this.tail = null, this._len = 0;
  };

  var Od = function (t) {
    this.value = t, this.next, this.prev;
  },
      Bd = function (t) {
    this._list = new Pd(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
  },
      Ed = Bd.prototype;

  Ed.put = function (t, e) {
    var n = this._list,
        i = this._map,
        r = null;

    if (null == i[t]) {
      var a = n.len(),
          o = this._lastRemovedEntry;

      if (a >= this._maxSize && a > 0) {
        var s = n.head;
        n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
      }

      o ? o.value = e : o = new Od(e), o.key = t, n.insertEntry(o), i[t] = o;
    }

    return r;
  }, Ed.get = function (t) {
    var e = this._map[t],
        n = this._list;
    return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;
  }, Ed.clear = function () {
    this._list.clear(), this._map = {};
  };

  var Rd = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1]
  },
      zd = new Bd(20),
      Nd = null,
      Fd = Fe,
      Hd = He,
      Vd = (Object.freeze || Object)({
    parse: Be,
    lift: ze,
    toHex: Ne,
    fastLerp: Fe,
    fastMapToColor: Fd,
    lerp: He,
    mapToColor: Hd,
    modifyHSL: Ve,
    modifyAlpha: We,
    stringify: Ge
  }),
      Wd = Array.prototype.slice,
      Gd = function (t, e, n, i) {
    this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Xe, this._setter = i || je, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
  };

  Gd.prototype = {
    when: function (t, e) {
      var n = this._tracks;

      for (var i in e) if (e.hasOwnProperty(i)) {
        if (!n[i]) {
          n[i] = [];

          var r = this._getter(this._target, i);

          if (null == r) continue;
          0 !== t && n[i].push({
            time: 0,
            value: Je(r)
          });
        }

        n[i].push({
          time: t,
          value: e[i]
        });
      }

      return this;
    },
    during: function (t) {
      return this._onframeList.push(t), this;
    },
    pause: function () {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();

      this._paused = !0;
    },
    resume: function () {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();

      this._paused = !1;
    },
    isPaused: function () {
      return !!this._paused;
    },
    _doneCallback: function () {
      this._tracks = {}, this._clipList.length = 0;

      for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this);
    },
    start: function (t, e) {
      var n,
          i = this,
          r = 0,
          a = function () {
        r--, r || i._doneCallback();
      };

      for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
        var s = nn(this, t, a, this._tracks[o], o, e);
        s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s);
      }

      if (n) {
        var l = n.onframe;

        n.onframe = function (t, e) {
          l(t, e);

          for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e);
        };
      }

      return r || this._doneCallback(), this;
    },
    stop: function (t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];
        t && r.onframe(this._target, 1), n && n.removeClip(r);
      }

      e.length = 0;
    },
    delay: function (t) {
      return this._delay = t, this;
    },
    done: function (t) {
      return t && this._doneList.push(t), this;
    },
    getClips: function () {
      return this._clipList;
    }
  };
  var Xd = 1;
  "undefined" != typeof window && (Xd = Math.max(window.devicePixelRatio || 1, 1));

  var jd = 0,
      qd = Xd,
      Ud = function () {};

  1 === jd ? Ud = function () {
    for (var t in arguments) throw new Error(arguments[t]);
  } : jd > 1 && (Ud = function () {
    for (var t in arguments) console.log(arguments[t]);
  });

  var Yd = Ud,
      Zd = function () {
    this.animators = [];
  };

  Zd.prototype = {
    constructor: Zd,
    animate: function (t, e) {
      var n,
          i = !1,
          r = this,
          a = this.__zr;

      if (t) {
        var o = t.split("."),
            s = r;
        i = "shape" === o[0];

        for (var l = 0, h = o.length; h > l; l++) s && (s = s[o[l]]);

        s && (n = s);
      } else n = r;

      if (!n) return void Yd('Property "' + t + '" is not existed in element ' + r.id);
      var c = r.animators,
          d = new Gd(n, e);
      return d.during(function () {
        r.dirty(i);
      }).done(function () {
        c.splice(u(c, d), 1);
      }), c.push(d), a && a.animation.addAnimator(d), d;
    },
    stopAnimation: function (t) {
      for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);

      return e.length = 0, this;
    },
    animateTo: function (t, e, n, i, r, a) {
      function o() {
        l--, l || r && r();
      }

      b(n) ? (r = i, i = n, n = 0) : w(i) ? (r = i, i = "linear", n = 0) : w(n) ? (r = n, n = 0) : w(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, n);
      var s = this.animators.slice(),
          l = s.length;
      l || r && r();

      for (var u = 0; u < s.length; u++) s[u].done(o).start(i, a);
    },
    _animateToShallow: function (t, e, n, i, r) {
      var a = {},
          o = 0;

      for (var s in n) if (n.hasOwnProperty(s)) if (null != e[s]) M(n[s]) && !d(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (a[s] = n[s], o++);else if (null != n[s]) if (t) {
        var l = {};
        l[t] = {}, l[t][s] = n[s], this.attr(l);
      } else this.attr(s, n[s]);

      return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0), this;
    }
  };

  var $d = function (t) {
    Td.call(this, t), _d.call(this, t), Zd.call(this, t), this.id = t.id || Zc();
  };

  $d.prototype = {
    type: "element",
    name: "",
    __zr: null,
    ignore: !1,
    clipPath: null,
    isGroup: !1,
    drift: function (t, e) {
      switch (this.draggable) {
        case "horizontal":
          e = 0;
          break;

        case "vertical":
          t = 0;
      }

      var n = this.transform;
      n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1);
    },
    beforeUpdate: function () {},
    afterUpdate: function () {},
    update: function () {
      this.updateTransform();
    },
    traverse: function () {},
    attrKV: function (t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];
          n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];
        }
      } else this[t] = e;
    },
    hide: function () {
      this.ignore = !0, this.__zr && this.__zr.refresh();
    },
    show: function () {
      this.ignore = !1, this.__zr && this.__zr.refresh();
    },
    attr: function (t, e) {
      if ("string" == typeof t) this.attrKV(t, e);else if (M(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
      return this.dirty(!1), this;
    },
    setClipPath: function (t) {
      var e = this.__zr;
      e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
    },
    removeClipPath: function () {
      var t = this.clipPath;
      t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));
    },
    addSelfToZr: function (t) {
      this.__zr = t;
      var e = this.animators;
      if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
      this.clipPath && this.clipPath.addSelfToZr(t);
    },
    removeSelfFromZr: function (t) {
      this.__zr = null;
      var e = this.animators;
      if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
      this.clipPath && this.clipPath.removeSelfFromZr(t);
    }
  }, c($d, Zd), c($d, Td), c($d, _d);
  var Kd = ae,
      Qd = Math.min,
      Jd = Math.max;
  rn.prototype = {
    constructor: rn,
    union: function (t) {
      var e = Qd(t.x, this.x),
          n = Qd(t.y, this.y);
      this.width = Jd(t.x + t.width, this.x + this.width) - e, this.height = Jd(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n;
    },
    applyTransform: function () {
      var t = [],
          e = [],
          n = [],
          i = [];
      return function (r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, Kd(t, t, r), Kd(e, e, r), Kd(n, n, r), Kd(i, i, r), this.x = Qd(t[0], e[0], n[0], i[0]), this.y = Qd(t[1], e[1], n[1], i[1]);
          var a = Jd(t[0], e[0], n[0], i[0]),
              o = Jd(t[1], e[1], n[1], i[1]);
          this.width = a - this.x, this.height = o - this.y;
        }
      };
    }(),
    calculateTransform: function (t) {
      var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          r = fe();
      return me(r, r, [-e.x, -e.y]), _e(r, r, [n, i]), me(r, r, [t.x, t.y]), r;
    },
    intersect: function (t) {
      if (!t) return !1;
      t instanceof rn || (t = rn.create(t));
      var e = this,
          n = e.x,
          i = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          l = t.y,
          u = t.y + t.height;
      return !(o > i || n > s || l > a || r > u);
    },
    contain: function (t, e) {
      var n = this;
      return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
    },
    clone: function () {
      return new rn(this.x, this.y, this.width, this.height);
    },
    copy: function (t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
    },
    plain: function () {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      };
    }
  }, rn.create = function (t) {
    return new rn(t.x, t.y, t.width, t.height);
  };

  var tf = function (t) {
    t = t || {}, $d.call(this, t);

    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);

    this._children = [], this.__storage = null, this.__dirty = !0;
  };

  tf.prototype = {
    constructor: tf,
    isGroup: !0,
    type: "group",
    silent: !1,
    children: function () {
      return this._children.slice();
    },
    childAt: function (t) {
      return this._children[t];
    },
    childOfName: function (t) {
      for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
    },
    childCount: function () {
      return this._children.length;
    },
    add: function (t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
    },
    addBefore: function (t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
            i = n.indexOf(e);
        i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
      }

      return this;
    },
    _doAdd: function (t) {
      t.parent && t.parent.remove(t), t.parent = this;
      var e = this.__storage,
          n = this.__zr;
      e && e !== t.__storage && (e.addToStorage(t), t instanceof tf && t.addChildrenToStorage(e)), n && n.refresh();
    },
    remove: function (t) {
      var e = this.__zr,
          n = this.__storage,
          i = this._children,
          r = u(i, t);
      return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof tf && t.delChildrenFromStorage(n)), e && e.refresh(), this);
    },
    removeAll: function () {
      var t,
          e,
          n = this._children,
          i = this.__storage;

      for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof tf && t.delChildrenFromStorage(i)), t.parent = null;

      return n.length = 0, this;
    },
    eachChild: function (t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, r, i);
      }

      return this;
    },
    traverse: function (t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        t.call(e, i), "group" === i.type && i.traverse(t, e);
      }

      return this;
    },
    addChildrenToStorage: function (t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.addToStorage(n), n instanceof tf && n.addChildrenToStorage(t);
      }
    },
    delChildrenFromStorage: function (t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.delFromStorage(n), n instanceof tf && n.delChildrenFromStorage(t);
      }
    },
    dirty: function () {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
    },
    getBoundingRect: function (t) {
      for (var e = null, n = new rn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];

        if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
              l = o.getLocalTransform(r);
          l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s));
        }
      }

      return e || n;
    }
  }, h(tf, $d);

  var ef = 32,
      nf = 7,
      rf = function () {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  };

  rf.prototype = {
    constructor: rf,
    traverse: function (t, e) {
      for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
    },
    getDisplayList: function (t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList;
    },
    updateDisplayList: function (t) {
      this._displayListLen = 0;

      for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);

      n.length = this._displayListLen, Kc.canvasSupported && dn(n, fn);
    },
    _updateAndAddDisplayable: function (t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
        var i = t.clipPath;

        if (i) {
          e = e ? e.slice() : [];

          for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
        }

        if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];
            t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);
          }

          t.__dirty = !1;
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
      }
    },
    addRoot: function (t) {
      t.__storage !== this && (t instanceof tf && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
    },
    delRoot: function (t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];
          n instanceof tf && n.delChildrenFromStorage(this);
        }

        return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
      }

      if (t instanceof Array) for (var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);else {
        var r = u(this._roots, t);
        r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof tf && t.delChildrenFromStorage(this));
      }
    },
    addToStorage: function (t) {
      return t && (t.__storage = this, t.dirty(!1)), this;
    },
    delFromStorage: function (t) {
      return t && (t.__storage = null), this;
    },
    dispose: function () {
      this._renderList = this._roots = null;
    },
    displayableSortFunc: fn
  };

  var af = {
    shadowBlur: 1,
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    textShadowBlur: 1,
    textShadowOffsetX: 1,
    textShadowOffsetY: 1,
    textBoxShadowBlur: 1,
    textBoxShadowOffsetX: 1,
    textBoxShadowOffsetY: 1
  },
      of = function (t, e, n) {
    return af.hasOwnProperty(e) ? n *= t.dpr : n;
  },
      sf = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
      lf = function (t, e) {
    this.extendFrom(t, !1), this.host = e;
  };

  lf.prototype = {
    constructor: lf,
    host: null,
    fill: "#000",
    stroke: null,
    opacity: 1,
    lineDash: null,
    lineDashOffset: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    lineWidth: 1,
    strokeNoScale: !1,
    text: null,
    font: null,
    textFont: null,
    fontStyle: null,
    fontWeight: null,
    fontSize: null,
    fontFamily: null,
    textTag: null,
    textFill: "#000",
    textStroke: null,
    textWidth: null,
    textHeight: null,
    textStrokeWidth: 0,
    textLineHeight: null,
    textPosition: "inside",
    textRect: null,
    textOffset: null,
    textAlign: null,
    textVerticalAlign: null,
    textDistance: 5,
    textShadowColor: "transparent",
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    textBoxShadowColor: "transparent",
    textBoxShadowBlur: 0,
    textBoxShadowOffsetX: 0,
    textBoxShadowOffsetY: 0,
    transformText: !1,
    textRotation: 0,
    textOrigin: null,
    textBackgroundColor: null,
    textBorderColor: null,
    textBorderWidth: 0,
    textBorderRadius: 0,
    textPadding: null,
    rich: null,
    truncate: null,
    blend: null,
    bind: function (t, e, n) {
      for (var i = this, r = n && n.style, a = !r, o = 0; o < sf.length; o++) {
        var s = sf[o],
            l = s[0];
        (a || i[l] !== r[l]) && (t[l] = of(t, l, i[l] || s[1]));
      }

      if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var u = i.lineWidth;
        t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
      }
    },
    hasFill: function () {
      var t = this.fill;
      return null != t && "none" !== t;
    },
    hasStroke: function () {
      var t = this.stroke;
      return null != t && "none" !== t && this.lineWidth > 0;
    },
    extendFrom: function (t, e) {
      if (t) for (var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);
    },
    set: function (t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
    },
    clone: function () {
      var t = new this.constructor();
      return t.extendFrom(this, !0), t;
    },
    getGradient: function (t, e, n) {
      for (var i = "radial" === e.type ? gn : pn, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);

      return r;
    }
  };

  for (var uf = lf.prototype, hf = 0; hf < sf.length; hf++) {
    var cf = sf[hf];
    cf[0] in uf || (uf[cf[0]] = cf[1]);
  }

  lf.getGradient = uf.getGradient;

  var df = function (t, e) {
    this.image = t, this.repeat = e, this.type = "pattern";
  };

  df.prototype.getCanvasPattern = function (t) {
    return t.createPattern(this.image, this.repeat || "repeat");
  };

  var ff = function (t, e, n) {
    var i;
    n = n || qd, "string" == typeof t ? i = mn(t, e, n) : M(t) && (i = t, t = i.id), this.id = t, this.dom = i;
    var r = i.style;
    r && (i.onselectstart = vn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n;
  };

  ff.prototype = {
    constructor: ff,
    __dirty: !0,
    __used: !1,
    __drawIndex: 0,
    __startIndex: 0,
    __endIndex: 0,
    incremental: !1,
    getElementCount: function () {
      return this.__endIndex - this.__startIndex;
    },
    initContext: function () {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    },
    createBackBuffer: function () {
      var t = this.dpr;
      this.domBack = mn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t);
    },
    resize: function (t, e) {
      var n = this.dpr,
          i = this.dom,
          r = i.style,
          a = this.domBack;
      r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n));
    },
    clear: function (t, e) {
      var n = this.dom,
          i = this.ctx,
          r = n.width,
          a = n.height,
          e = e || this.clearColor,
          o = this.motionBlur && !t,
          s = this.lastFrameAlpha,
          l = this.dpr;

      if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var u;
        e.colorStops ? (u = e.__canvasGradient || lf.getGradient(i, e, {
          x: 0,
          y: 0,
          width: r,
          height: a
        }), e.__canvasGradient = u) : e.image && (u = df.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore();
      }

      if (o) {
        var h = this.domBack;
        i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore();
      }
    }
  };

  var pf = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    setTimeout(t, 16);
  },
      gf = new Bd(50),
      vf = {},
      mf = 0,
      yf = 5e3,
      _f = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      xf = "12px sans-serif",
      wf = {};

  wf.measureText = function (t, e) {
    var n = l();
    return n.font = e || xf, n.measureText(t);
  };

  var bf = {
    left: 1,
    right: 1,
    center: 1
  },
      Mf = {
    top: 1,
    bottom: 1,
    middle: 1
  },
      Sf = new rn(),
      If = function () {};

  If.prototype = {
    constructor: If,
    drawRectText: function (t, e) {
      var n = this.style;
      e = n.textRect || e, this.__dirty && Hn(n, !0);
      var i = n.text;

      if (null != i && (i += ""), ii(i, n)) {
        t.save();
        var r = this.transform;
        n.transformText ? this.setTransform(t) : r && (Sf.copy(e), Sf.applyTransform(r), e = Sf), Wn(this, t, i, n, e), t.restore();
      }
    }
  }, ri.prototype = {
    constructor: ri,
    type: "displayable",
    __dirty: !0,
    invisible: !1,
    z: 0,
    z2: 0,
    zlevel: 0,
    draggable: !1,
    dragging: !1,
    silent: !1,
    culling: !1,
    cursor: "pointer",
    rectHover: !1,
    progressive: !1,
    incremental: !1,
    inplace: !1,
    beforeBrush: function () {},
    afterBrush: function () {},
    brush: function () {},
    getBoundingRect: function () {},
    contain: function (t, e) {
      return this.rectContain(t, e);
    },
    traverse: function (t, e) {
      t.call(e, this);
    },
    rectContain: function (t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect();
      return i.contain(n[0], n[1]);
    },
    dirty: function () {
      this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh();
    },
    animateStyle: function (t) {
      return this.animate("style", t);
    },
    attrKV: function (t, e) {
      "style" !== t ? $d.prototype.attrKV.call(this, t, e) : this.style.set(e);
    },
    setStyle: function (t, e) {
      return this.style.set(t, e), this.dirty(!1), this;
    },
    useStyle: function (t) {
      return this.style = new lf(t, this), this.dirty(!1), this;
    }
  }, h(ri, $d), c(ri, If), ai.prototype = {
    constructor: ai,
    type: "image",
    brush: function (t, e) {
      var n = this.style,
          i = n.image;
      n.bind(t, this, e);

      var r = this._image = _n(i, this._image, this, this.onload);

      if (r && wn(r)) {
        var a = n.x || 0,
            o = n.y || 0,
            s = n.width,
            l = n.height,
            u = r.width / r.height;

        if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var h = n.sx || 0,
              c = n.sy || 0;
          t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l);
        } else if (n.sx && n.sy) {
          var h = n.sx,
              c = n.sy,
              d = s - h,
              f = l - c;
          t.drawImage(r, h, c, d, f, a, o, s, l);
        } else t.drawImage(r, a, o, s, l);

        null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
      }
    },
    getBoundingRect: function () {
      var t = this.style;
      return this._rect || (this._rect = new rn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
    }
  }, h(ai, ri);

  var Cf = 1e5,
      Tf = 314159,
      Df = .01,
      kf = .001,
      Af = new rn(0, 0, 0, 0),
      Pf = new rn(0, 0, 0, 0),
      Lf = function (t, e, n) {
    this.type = "canvas";
    var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
    this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || qd, this._singleCanvas = i, this.root = t;
    var r = t.style;
    r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
    var a = this._zlevelList = [],
        s = this._layers = {};

    if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
      var l = t.width,
          u = t.height;
      null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;
      var h = new ff(t, this, this.dpr);
      h.__builtin__ = !0, h.initContext(), s[Tf] = h, h.zlevel = Tf, a.push(Tf), this._domRoot = t;
    } else {
      this._width = this._getSize(0), this._height = this._getSize(1);
      var c = this._domRoot = ci(this._width, this._height);
      t.appendChild(c);
    }

    this._hoverlayer = null, this._hoverElements = [];
  };

  Lf.prototype = {
    constructor: Lf,
    getType: function () {
      return "canvas";
    },
    isSingleCanvas: function () {
      return this._singleCanvas;
    },
    getViewportRoot: function () {
      return this._domRoot;
    },
    getViewportRootOffset: function () {
      var t = this.getViewportRoot();
      return t ? {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      } : void 0;
    },
    refresh: function (t) {
      var e = this.storage.getDisplayList(!0),
          n = this._zlevelList;
      this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);

      for (var i = 0; i < n.length; i++) {
        var r = n[i],
            a = this._layers[r];

        if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;
          a.refresh(o);
        }
      }

      return this.refreshHover(), this;
    },
    addHover: function (t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({
          style: t.style,
          shape: t.shape
        });
        n.__from = t, t.__hoverMir = n, n.setStyle(e), this._hoverElements.push(n);
      }
    },
    removeHover: function (t) {
      var e = t.__hoverMir,
          n = this._hoverElements,
          i = u(n, e);
      i >= 0 && n.splice(i, 1), t.__hoverMir = null;
    },
    clearHover: function () {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var n = t[e].__from;
        n && (n.__hoverMir = null);
      }

      t.length = 0;
    },
    refreshHover: function () {
      var t = this._hoverElements,
          e = t.length,
          n = this._hoverlayer;

      if (n && n.clear(), e) {
        dn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(Cf));
        var i = {};
        n.ctx.save();

        for (var r = 0; e > r;) {
          var a = t[r],
              o = a.__from;
          o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--);
        }

        n.ctx.restore();
      }
    },
    getHoverLayer: function () {
      return this.getLayer(Cf);
    },
    _paintList: function (t, e, n) {
      if (this._redrawId === n) {
        e = e || !1, this._updateLayerStatus(t);

        var i = this._doPaintList(t, e);

        if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;
          pf(function () {
            r._paintList(t, e, n);
          });
        }
      }
    },
    _compositeManually: function () {
      var t = this.getLayer(Tf).ctx,
          e = this._domRoot.width,
          n = this._domRoot.height;
      t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n);
      });
    },
    _doPaintList: function (t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
            a = this._layers[r];
        a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a);
      }

      for (var o = !0, s = 0; s < n.length; s++) {
        var a = n[s],
            l = a.ctx,
            u = {};
        l.save();
        var h = e ? a.__startIndex : a.__drawIndex,
            c = !e && a.incremental && Date.now,
            d = c && Date.now(),
            p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
        if (a.__startIndex === a.__endIndex) a.clear(!1, p);else if (h === a.__startIndex) {
          var g = t[h];
          g.incremental && g.notClear && !e || a.clear(!1, p);
        }
        -1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);

        for (var v = h; v < a.__endIndex; v++) {
          var m = t[v];

          if (this._doPaintEl(m, a, e, u), m.__dirty = !1, c) {
            var y = Date.now() - d;
            if (y > 15) break;
          }
        }

        a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), u.prevElClipPaths && l.restore(), l.restore();
      }

      return Kc.wxa && f(this._layers, function (t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw();
      }), o;
    },
    _doPaintEl: function (t, e, n, i) {
      var r = e.ctx,
          a = t.transform;

      if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && li(t, this._width, this._height))) {
        var o = t.__clipPaths;
        (!i.prevElClipPaths || ui(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), hi(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);
      }
    },
    getLayer: function (t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = Tf);
      var n = this._layers[t];
      return n || (n = new ff("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
    },
    insertLayer: function (t, e) {
      var n = this._layers,
          i = this._zlevelList,
          r = i.length,
          a = null,
          o = -1,
          s = this._domRoot;
      if (n[t]) return void Yd("ZLevel " + t + " has been used already");
      if (!si(e)) return void Yd("Layer of zlevel " + t + " is not valid");

      if (r > 0 && t > i[0]) {
        for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);

        a = n[i[o]];
      }

      if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
        var l = a.dom;
        l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
    },
    eachLayer: function (t, e) {
      var n,
          i,
          r = this._zlevelList;

      for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n);
    },
    eachBuiltinLayer: function (t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;

      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i);
    },
    eachOtherLayer: function (t, e) {
      var n,
          i,
          r,
          a = this._zlevelList;

      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i);
    },
    getLayers: function () {
      return this._layers;
    },
    _updateLayerStatus: function (t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t);
      }

      if (this.eachBuiltinLayer(function (t) {
        t.__dirty = t.__used = !1;
      }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
        var i = t[n];

        if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }

      for (var r = null, a = 0, n = 0; n < t.length; n++) {
        var o,
            i = t[n],
            s = i.zlevel;
        i.incremental ? (o = this.getLayer(s + kf, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Df : 0), this._needsManuallyCompositing), o.__builtin__ || Yd("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n));
      }

      e(n), this.eachBuiltinLayer(function (t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
      });
    },
    clear: function () {
      return this.eachBuiltinLayer(this._clearLayer), this;
    },
    _clearLayer: function (t) {
      t.clear();
    },
    setBackgroundColor: function (t) {
      this._backgroundColor = t;
    },
    configLayer: function (t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? r(n[t], e, !0) : n[t] = e;

        for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];

          if (a === t || a === t + Df) {
            var o = this._layers[a];
            r(o, n[t], !0);
          }
        }
      }
    },
    delLayer: function (t) {
      var e = this._layers,
          n = this._zlevelList,
          i = e[t];
      i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1));
    },
    resize: function (t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;
        n.style.display = "none";
        var i = this._opts;

        if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
          n.style.width = t + "px", n.style.height = e + "px";

          for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);

          f(this._progressiveLayers, function (n) {
            n.resize(t, e);
          }), this.refresh(!0);
        }

        this._width = t, this._height = e;
      } else {
        if (null == t || null == e) return;
        this._width = t, this._height = e, this.getLayer(Tf).resize(t, e);
      }

      return this;
    },
    clearLayer: function (t) {
      var e = this._layers[t];
      e && e.clear();
    },
    dispose: function () {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    },
    getRenderedCanvas: function (t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Tf].dom;
      var e = new ff("image", this, t.pixelRatio || this.dpr);

      if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();
        var n = e.dom.width,
            i = e.dom.height,
            r = e.ctx;
        this.eachLayer(function (t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
        });
      } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
        var l = o[s];

        this._doPaintEl(l, e, !0, a);
      }

      return e.dom;
    },
    getWidth: function () {
      return this._width;
    },
    getHeight: function () {
      return this._height;
    },
    _getSize: function (t) {
      var e = this._opts,
          n = ["width", "height"][t],
          i = ["clientWidth", "clientHeight"][t],
          r = ["paddingLeft", "paddingTop"][t],
          a = ["paddingRight", "paddingBottom"][t];
      if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
      var o = this.root,
          s = document.defaultView.getComputedStyle(o);
      return (o[i] || oi(s[n]) || oi(o.style[n])) - (oi(s[r]) || 0) - (oi(s[a]) || 0) | 0;
    },
    pathToImage: function (t, e) {
      e = e || this.dpr;
      var n = document.createElement("canvas"),
          i = n.getContext("2d"),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          u = a.hasStroke() ? a.lineWidth : 0,
          h = Math.max(u / 2, -s + o),
          c = Math.max(u / 2, s + o),
          d = Math.max(u / 2, -l + o),
          f = Math.max(u / 2, l + o),
          p = r.width + h + c,
          g = r.height + d + f;
      n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
      var v = {
        position: t.position,
        rotation: t.rotation,
        scale: t.scale
      };
      t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
      var m = ai,
          y = new m({
        style: {
          x: 0,
          y: 0,
          image: n
        }
      });
      return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;
    }
  };

  var Of = "undefined" != typeof window && !!window.addEventListener,
      Bf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ef = Of ? function (t) {
    t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
  } : function (t) {
    t.returnValue = !1, t.cancelBubble = !0;
  },
      Rf = function (t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, _d.call(this);
  };

  Rf.prototype = {
    constructor: Rf,
    addClip: function (t) {
      this._clips.push(t);
    },
    addAnimator: function (t) {
      t.animation = this;

      for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n]);
    },
    removeClip: function (t) {
      var e = u(this._clips, t);
      e >= 0 && this._clips.splice(e, 1);
    },
    removeAnimator: function (t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);

      t.animation = null;
    },
    _update: function () {
      for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
        var s = n[o],
            l = s.step(t, e);
        l && (r.push(l), a.push(s));
      }

      for (var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;

      i = r.length;

      for (var o = 0; i > o; o++) a[o].fire(r[o]);

      this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
    },
    _startLoop: function () {
      function t() {
        e._running && (pf(t), !e._paused && e._update());
      }

      var e = this;
      this._running = !0, pf(t);
    },
    start: function () {
      this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
    },
    stop: function () {
      this._running = !1;
    },
    pause: function () {
      this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
    },
    resume: function () {
      this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
    },
    clear: function () {
      this._clips = [];
    },
    isFinished: function () {
      return !this._clips.length;
    },
    animate: function (t, e) {
      e = e || {};
      var n = new Gd(t, e.loop, e.getter, e.setter);
      return this.addAnimator(n), n;
    }
  }, c(Rf, _d);

  var zf = function () {
    this._track = [];
  };

  zf.prototype = {
    constructor: zf,
    recognize: function (t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t);
    },
    clear: function () {
      return this._track.length = 0, this;
    },
    _doTrack: function (t, e, n) {
      var i = t.touches;

      if (i) {
        for (var r = {
          points: [],
          touches: [],
          target: e,
          event: t
        }, a = 0, o = i.length; o > a; a++) {
          var s = i[a],
              l = fi(n, s, {});
          r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }

        this._track.push(r);
      }
    },
    _recognize: function (t) {
      for (var e in Nf) if (Nf.hasOwnProperty(e)) {
        var n = Nf[e](this._track, t);
        if (n) return n;
      }
    }
  };
  var Nf = {
    pinch: function (t, e) {
      var n = t.length;

      if (n) {
        var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;

        if (r && r.length > 1 && i && i.length > 1) {
          var a = yi(i) / yi(r);
          !isFinite(a) && (a = 1), e.pinchScale = a;

          var o = _i(i);

          return e.pinchX = o[0], e.pinchY = o[1], {
            type: "pinch",
            target: t[0].target,
            event: e
          };
        }
      }
    }
  },
      Ff = 300,
      Hf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      Vf = ["touchstart", "touchend", "touchmove"],
      Wf = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  },
      Gf = p(Hf, function (t) {
    var e = t.replace("mouse", "pointer");
    return Wf[e] ? e : t;
  }),
      Xf = {
    mousemove: function (t) {
      t = gi(this.dom, t), this.trigger("mousemove", t);
    },
    mouseout: function (t) {
      t = gi(this.dom, t);
      var e = t.toElement || t.relatedTarget;
      if (e != this.dom) for (; e && 9 != e.nodeType;) {
        if (e === this.dom) return;
        e = e.parentNode;
      }
      this.trigger("mouseout", t);
    },
    touchstart: function (t) {
      t = gi(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date(), wi(this, t, "start"), Xf.mousemove.call(this, t), Xf.mousedown.call(this, t), bi(this);
    },
    touchmove: function (t) {
      t = gi(this.dom, t), t.zrByTouch = !0, wi(this, t, "change"), Xf.mousemove.call(this, t), bi(this);
    },
    touchend: function (t) {
      t = gi(this.dom, t), t.zrByTouch = !0, wi(this, t, "end"), Xf.mouseup.call(this, t), +new Date() - this._lastTouchMoment < Ff && Xf.click.call(this, t), bi(this);
    },
    pointerdown: function (t) {
      Xf.mousedown.call(this, t);
    },
    pointermove: function (t) {
      Mi(t) || Xf.mousemove.call(this, t);
    },
    pointerup: function (t) {
      Xf.mouseup.call(this, t);
    },
    pointerout: function (t) {
      Mi(t) || Xf.mouseout.call(this, t);
    }
  };
  f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Xf[t] = function (e) {
      e = gi(this.dom, e), this.trigger(t, e);
    };
  });
  var jf = Ii.prototype;
  jf.dispose = function () {
    for (var t = Hf.concat(Vf), e = 0; e < t.length; e++) {
      var n = t[e];
      mi(this.dom, xi(n), this._handlers[n]);
    }
  }, jf.setCursor = function (t) {
    this.dom.style && (this.dom.style.cursor = t || "default");
  }, c(Ii, _d);

  var qf = !Kc.canvasSupported,
      Uf = {
    canvas: Lf
  },
      Yf = {},
      Zf = "4.0.4",
      $f = function (t, e, n) {
    n = n || {}, this.dom = e, this.id = t;
    var i = this,
        r = new rf(),
        a = n.renderer;

    if (qf) {
      if (!Uf.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
      a = "vml";
    } else a && Uf[a] || (a = "canvas");

    var o = new Uf[a](e, r, n, t);
    this.storage = r, this.painter = o;
    var s = Kc.node || Kc.worker ? null : new Ii(o.getViewportRoot());
    this.handler = new bd(r, o, s, o.root), this.animation = new Rf({
      stage: {
        update: y(this.flush, this)
      }
    }), this.animation.start(), this._needsRefresh;
    var l = r.delFromStorage,
        u = r.addToStorage;
    r.delFromStorage = function (t) {
      l.call(r, t), t && t.removeSelfFromZr(i);
    }, r.addToStorage = function (t) {
      u.call(r, t), t.addSelfToZr(i);
    };
  };

  $f.prototype = {
    constructor: $f,
    getId: function () {
      return this.id;
    },
    add: function (t) {
      this.storage.addRoot(t), this._needsRefresh = !0;
    },
    remove: function (t) {
      this.storage.delRoot(t), this._needsRefresh = !0;
    },
    configLayer: function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
    },
    setBackgroundColor: function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
    },
    refreshImmediately: function () {
      this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
    },
    refresh: function () {
      this._needsRefresh = !0;
    },
    flush: function () {
      var t;
      this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");
    },
    addHover: function (t, e) {
      this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover());
    },
    removeHover: function (t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
    },
    clearHover: function () {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
    },
    refreshHover: function () {
      this._needsRefreshHover = !0;
    },
    refreshHoverImmediately: function () {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
    },
    resize: function (t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    },
    clearAnimation: function () {
      this.animation.clear();
    },
    getWidth: function () {
      return this.painter.getWidth();
    },
    getHeight: function () {
      return this.painter.getHeight();
    },
    pathToImage: function (t, e) {
      return this.painter.pathToImage(t, e);
    },
    setCursorStyle: function (t) {
      this.handler.setCursorStyle(t);
    },
    findHover: function (t, e) {
      return this.handler.findHover(t, e);
    },
    on: function (t, e, n) {
      this.handler.on(t, e, n);
    },
    off: function (t, e) {
      this.handler.off(t, e);
    },
    trigger: function (t, e) {
      this.handler.trigger(t, e);
    },
    clear: function () {
      this.storage.delRoot(), this.painter.clear();
    },
    dispose: function () {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Ai(this.id);
    }
  };

  var Kf = (Object.freeze || Object)({
    version: Zf,
    init: Ci,
    dispose: Ti,
    getInstance: Di,
    registerPainter: ki
  }),
      Qf = f,
      Jf = M,
      tp = x,
      ep = "series\x00",
      np = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
      ip = 0,
      rp = ".",
      ap = "___EC__COMPONENT__CONTAINER___",
      op = 0,
      sp = function (t) {
    for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);

    return function (e, n, i) {
      for (var r = {}, a = 0; a < t.length; a++) {
        var o = t[a][1];

        if (!(n && u(n, o) >= 0 || i && u(i, o) < 0)) {
          var s = e.getShallow(o);
          null != s && (r[t[a][0]] = s);
        }
      }

      return r;
    };
  },
      lp = sp([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      up = {
    getLineStyle: function (t) {
      var e = lp(this, t),
          n = this.getLineDash(e.lineWidth);
      return n && (e.lineDash = n), e;
    },
    getLineDash: function (t) {
      null == t && (t = 1);
      var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;
      return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n];
    }
  },
      hp = sp([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
      cp = {
    getAreaStyle: function (t, e) {
      return hp(this, t, e);
    }
  },
      dp = Math.pow,
      fp = Math.sqrt,
      pp = 1e-8,
      gp = 1e-4,
      vp = fp(3),
      mp = 1 / 3,
      yp = V(),
      _p = V(),
      xp = V(),
      wp = Math.min,
      bp = Math.max,
      Mp = Math.sin,
      Sp = Math.cos,
      Ip = 2 * Math.PI,
      Cp = V(),
      Tp = V(),
      Dp = V(),
      kp = [],
      Ap = [],
      Pp = {
    M: 1,
    L: 2,
    C: 3,
    Q: 4,
    A: 5,
    Z: 6,
    R: 7
  },
      Lp = [],
      Op = [],
      Bp = [],
      Ep = [],
      Rp = Math.min,
      zp = Math.max,
      Np = Math.cos,
      Fp = Math.sin,
      Hp = Math.sqrt,
      Vp = Math.abs,
      Wp = "undefined" != typeof Float32Array,
      Gp = function (t) {
    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
  };

  Gp.prototype = {
    constructor: Gp,
    _xi: 0,
    _yi: 0,
    _x0: 0,
    _y0: 0,
    _ux: 0,
    _uy: 0,
    _len: 0,
    _lineDash: null,
    _dashOffset: 0,
    _dashIdx: 0,
    _dashSum: 0,
    setScale: function (t, e) {
      this._ux = Vp(1 / qd / t) || 0, this._uy = Vp(1 / qd / e) || 0;
    },
    getContext: function () {
      return this._ctx;
    },
    beginPath: function (t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
    },
    moveTo: function (t, e) {
      return this.addData(Pp.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    },
    lineTo: function (t, e) {
      var n = Vp(t - this._xi) > this._ux || Vp(e - this._yi) > this._uy || this._len < 5;
      return this.addData(Pp.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this;
    },
    bezierCurveTo: function (t, e, n, i, r, a) {
      return this.addData(Pp.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this;
    },
    quadraticCurveTo: function (t, e, n, i) {
      return this.addData(Pp.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this;
    },
    arc: function (t, e, n, i, r, a) {
      return this.addData(Pp.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Np(r) * n + t, this._yi = Fp(r) * n + t, this;
    },
    arcTo: function (t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
    },
    rect: function (t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Pp.R, t, e, n, i), this;
    },
    closePath: function () {
      this.addData(Pp.Z);
      var t = this._ctx,
          e = this._x0,
          n = this._y0;
      return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this;
    },
    fill: function (t) {
      t && t.fill(), this.toStatic();
    },
    stroke: function (t) {
      t && t.stroke(), this.toStatic();
    },
    setLineDash: function (t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;

        for (var e = 0, n = 0; n < t.length; n++) e += t[n];

        this._dashSum = e;
      }

      return this;
    },
    setLineDashOffset: function (t) {
      return this._dashOffset = t, this;
    },
    len: function () {
      return this._len;
    },
    setData: function (t) {
      var e = t.length;
      this.data && this.data.length == e || !Wp || (this.data = new Float32Array(e));

      for (var n = 0; e > n; n++) this.data[n] = t[n];

      this._len = e;
    },
    appendPath: function (t) {
      t instanceof Array || (t = [t]);

      for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();

      Wp && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));

      for (var r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];

      this._len = i;
    },
    addData: function (t) {
      if (this._saveData) {
        var e = this.data;
        this._len + arguments.length > e.length && (this._expandData(), e = this.data);

        for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];

        this._prevCmd = t;
      }
    },
    _expandData: function () {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];

        this.data = t;
      }
    },
    _needsDash: function () {
      return this._lineDash;
    },
    _dashedLineTo: function (t, e) {
      var n,
          i,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          u = this._yi,
          h = t - l,
          c = e - u,
          d = Hp(h * h + c * c),
          f = l,
          p = u,
          g = o.length;

      for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f || 0 > h && f >= t || 0 == h && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n = o[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Rp(f, t) : zp(f, t), c >= 0 ? Rp(p, e) : zp(p, e));

      h = f - t, c = p - e, this._dashOffset = -Hp(h * h + c * c);
    },
    _dashedBezierTo: function (t, e, n, i, r, a) {
      var o,
          s,
          l,
          u,
          h,
          c = this._dashSum,
          d = this._dashOffset,
          f = this._lineDash,
          p = this._ctx,
          g = this._xi,
          v = this._yi,
          m = tr,
          y = 0,
          _ = this._dashIdx,
          x = f.length,
          w = 0;

      for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Hp(s * s + l * l);

      for (; x > _ && (w += f[_], !(w > d)); _++);

      for (o = (w - d) / y; 1 >= o;) u = m(g, t, n, r, o), h = m(v, e, i, a, o), _ % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += f[_] / y, _ = (_ + 1) % x;

      _ % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -Hp(s * s + l * l);
    },
    _dashedQuadraticTo: function (t, e, n, i) {
      var r = n,
          a = i;
      n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a);
    },
    toStatic: function () {
      var t = this.data;
      t instanceof Array && (t.length = this._len, Wp && (this.data = new Float32Array(t)));
    },
    getBoundingRect: function () {
      Lp[0] = Lp[1] = Bp[0] = Bp[1] = Number.MAX_VALUE, Op[0] = Op[1] = Ep[0] = Ep[1] = -Number.MAX_VALUE;

      for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];

        switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
          case Pp.M:
            i = t[a++], r = t[a++], e = i, n = r, Bp[0] = i, Bp[1] = r, Ep[0] = i, Ep[1] = r;
            break;

          case Pp.L:
            fr(e, n, t[a], t[a + 1], Bp, Ep), e = t[a++], n = t[a++];
            break;

          case Pp.C:
            pr(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Bp, Ep), e = t[a++], n = t[a++];
            break;

          case Pp.Q:
            gr(e, n, t[a++], t[a++], t[a], t[a + 1], Bp, Ep), e = t[a++], n = t[a++];
            break;

          case Pp.A:
            var s = t[a++],
                l = t[a++],
                u = t[a++],
                h = t[a++],
                c = t[a++],
                d = t[a++] + c,
                f = (t[a++], 1 - t[a++]);
            1 == a && (i = Np(c) * u + s, r = Fp(c) * h + l), vr(s, l, u, h, c, d, f, Bp, Ep), e = Np(d) * u + s, n = Fp(d) * h + l;
            break;

          case Pp.R:
            i = e = t[a++], r = n = t[a++];
            var p = t[a++],
                g = t[a++];
            fr(i, r, i + p, r + g, Bp, Ep);
            break;

          case Pp.Z:
            e = i, n = r;
        }

        oe(Lp, Lp, Bp), se(Op, Op, Ep);
      }

      return 0 === a && (Lp[0] = Lp[1] = Op[0] = Op[1] = 0), new rn(Lp[0], Lp[1], Op[0] - Lp[0], Op[1] - Lp[1]);
    },
    rebuildPath: function (t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
        var d = s[c++];

        switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
          case Pp.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
            break;

          case Pp.L:
            a = s[c++], o = s[c++], (Vp(a - i) > l || Vp(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);
            break;

          case Pp.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;

          case Pp.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;

          case Pp.A:
            var f = s[c++],
                p = s[c++],
                g = s[c++],
                v = s[c++],
                m = s[c++],
                y = s[c++],
                _ = s[c++],
                x = s[c++],
                w = g > v ? g : v,
                b = g > v ? 1 : g / v,
                M = g > v ? v / g : 1,
                S = Math.abs(g - v) > .001,
                I = m + y;
            S ? (t.translate(f, p), t.rotate(_), t.scale(b, M), t.arc(0, 0, w, m, I, 1 - x), t.scale(1 / b, 1 / M), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - x), 1 == c && (e = Np(m) * g + f, n = Fp(m) * v + p), i = Np(I) * g + f, r = Fp(I) * v + p;
            break;

          case Pp.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
            break;

          case Pp.Z:
            t.closePath(), i = e, r = n;
        }
      }
    }
  }, Gp.CMD = Pp;
  var Xp = 2 * Math.PI,
      jp = 2 * Math.PI,
      qp = Gp.CMD,
      Up = 2 * Math.PI,
      Yp = 1e-4,
      Zp = [-1, -1, -1],
      $p = [-1, -1],
      Kp = df.prototype.getCanvasPattern,
      Qp = Math.abs,
      Jp = new Gp(!0);
  Pr.prototype = {
    constructor: Pr,
    type: "path",
    __dirtyPath: !0,
    strokeContainThreshold: 5,
    brush: function (t, e) {
      var n = this.style,
          i = this.path || Jp,
          r = n.hasStroke(),
          a = n.hasFill(),
          o = n.fill,
          s = n.stroke,
          l = a && !!o.colorStops,
          u = r && !!s.colorStops,
          h = a && !!o.image,
          c = r && !!s.image;

      if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;
        l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d));
      }

      l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Kp.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Kp.call(s, t));
      var f = n.lineDash,
          p = n.lineDashOffset,
          g = !!t.setLineDash,
          v = this.getGlobalScale();
      i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && i.fill(t), f && g && (t.setLineDash(f), t.lineDashOffset = p), r && i.stroke(t), f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
    },
    buildPath: function () {},
    createPathProxy: function () {
      this.path = new Gp();
    },
    getBoundingRect: function () {
      var t = this._rect,
          e = this.style,
          n = !t;

      if (n) {
        var i = this.path;
        i || (i = this.path = new Gp()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect();
      }

      if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());

        if (this.__dirty || n) {
          r.copy(t);
          var a = e.lineWidth,
              o = e.strokeNoScale ? this.getLineScale() : 1;
          e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
        }

        return r;
      }

      return t;
    },
    contain: function (t, e) {
      var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;

      if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;

        if (r.hasStroke()) {
          var o = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;
          if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Ar(a, o / s, t, e))) return !0;
        }

        if (r.hasFill()) return kr(a, t, e);
      }

      return !1;
    },
    dirty: function (t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
    },
    animateShape: function (t) {
      return this.animate("shape", t);
    },
    attrKV: function (t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : ri.prototype.attrKV.call(this, t, e);
    },
    setShape: function (t, e) {
      var n = this.shape;

      if (n) {
        if (M(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);else n[t] = e;
        this.dirty(!0);
      }

      return this;
    },
    getLineScale: function () {
      var t = this.transform;
      return t && Qp(t[0] - 1) > 1e-10 && Qp(t[3] - 1) > 1e-10 ? Math.sqrt(Qp(t[0] * t[3] - t[2] * t[1])) : 1;
    }
  }, Pr.extend = function (t) {
    var e = function (e) {
      Pr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
      var n = t.shape;

      if (n) {
        this.shape = this.shape || {};
        var i = this.shape;

        for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
      }

      t.init && t.init.call(this, e);
    };

    h(e, Pr);

    for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);

    return e;
  }, h(Pr, ri);

  var tg = Gp.CMD,
      eg = [[], [], []],
      ng = Math.sqrt,
      ig = Math.atan2,
      rg = function (t, e) {
    var n,
        i,
        r,
        a,
        o,
        s,
        l = t.data,
        u = tg.M,
        h = tg.C,
        c = tg.L,
        d = tg.R,
        f = tg.A,
        p = tg.Q;

    for (r = 0, a = 0; r < l.length;) {
      switch (n = l[r++], a = r, i = 0, n) {
        case u:
          i = 1;
          break;

        case c:
          i = 1;
          break;

        case h:
          i = 3;
          break;

        case p:
          i = 2;
          break;

        case f:
          var g = e[4],
              v = e[5],
              m = ng(e[0] * e[0] + e[1] * e[1]),
              y = ng(e[2] * e[2] + e[3] * e[3]),
              _ = ig(-e[1] / y, e[0] / m);

          l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;
          break;

        case d:
          s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }

      for (o = 0; i > o; o++) {
        var s = eg[o];
        s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }
    }
  },
      ag = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
      og = Math.sqrt,
      sg = Math.sin,
      lg = Math.cos,
      ug = Math.PI,
      hg = function (t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  },
      cg = function (t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (hg(t) * hg(e));
  },
      dg = function (t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(cg(t, e));
  },
      fg = function (t) {
    ri.call(this, t);
  };

  fg.prototype = {
    constructor: fg,
    type: "text",
    brush: function (t, e) {
      var n = this.style;
      this.__dirty && Hn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
      var i = n.text;
      null != i && (i += ""), n.bind(t, this, e), ii(i, n) && (this.setTransform(t), Wn(this, t, i, n), this.restoreTransform(t));
    },
    getBoundingRect: function () {
      var t = this.style;

      if (this.__dirty && Hn(t, !0), !this._rect) {
        var e = t.text;
        null != e ? e += "" : e = "";
        var n = Mn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);

        if (n.x += t.x || 0, n.y += t.y || 0, Jn(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;
          n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
        }

        this._rect = n;
      }

      return this._rect;
    }
  }, h(fg, ri);

  var pg = Pr.extend({
    type: "circle",
    shape: {
      cx: 0,
      cy: 0,
      r: 0
    },
    buildPath: function (t, e, n) {
      n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
    }
  }),
      gg = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
      vg = function (t) {
    return Kc.browser.ie && Kc.browser.version >= 11 ? function () {
      var e,
          n = this.__clipPaths,
          i = this.style;
      if (n) for (var r = 0; r < n.length; r++) {
        var a = n[r],
            o = a && a.shape,
            s = a && a.type;

        if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
          for (var l = 0; l < gg.length; l++) gg[l][2] = i[gg[l][0]], i[gg[l][0]] = gg[l][1];

          e = !0;
          break;
        }
      }
      if (t.apply(this, arguments), e) for (var l = 0; l < gg.length; l++) i[gg[l][0]] = gg[l][2];
    } : t;
  },
      mg = Pr.extend({
    type: "sector",
    shape: {
      cx: 0,
      cy: 0,
      r0: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      clockwise: !0
    },
    brush: vg(Pr.prototype.brush),
    buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          u = Math.cos(o),
          h = Math.sin(o);
      t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath();
    }
  }),
      yg = Pr.extend({
    type: "ring",
    shape: {
      cx: 0,
      cy: 0,
      r: 0,
      r0: 0
    },
    buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;
      t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
    }
  }),
      _g = function (t, e) {
    for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);

    var o = r / 2;
    o = n > o ? n : o;

    for (var a = 0; o > a; a++) {
      var s,
          l,
          u,
          h = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(h),
          d = h - c,
          f = t[c % n];
      e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
      var p = d * d,
          g = d * p;
      i.push([Nr(s[0], f[0], l[0], u[0], d, p, g), Nr(s[1], f[1], l[1], u[1], d, p, g)]);
    }

    return i;
  },
      xg = function (t, e, n, i) {
    var r,
        a,
        o,
        s,
        l = [],
        u = [],
        h = [],
        c = [];

    if (i) {
      o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];

      for (var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);

      oe(o, o, i[0]), se(s, s, i[1]);
    }

    for (var d = 0, f = t.length; f > d; d++) {
      var p = t[d];
      if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];else {
        if (0 === d || d === f - 1) {
          l.push(G(t[d]));
          continue;
        }

        r = t[d - 1], a = t[d + 1];
      }
      U(u, a, r), J(u, u, e);
      var g = ee(p, r),
          v = ee(p, a),
          m = g + v;
      0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);

      var y = j([], p, h),
          _ = j([], p, c);

      i && (se(y, y, o), oe(y, y, s), se(_, _, o), oe(_, _, s)), l.push(y), l.push(_);
    }

    return n && l.push(l.shift()), l;
  },
      wg = Pr.extend({
    type: "polygon",
    shape: {
      points: null,
      smooth: !1,
      smoothConstraint: null
    },
    buildPath: function (t, e) {
      Fr(t, e, !0);
    }
  }),
      bg = Pr.extend({
    type: "polyline",
    shape: {
      points: null,
      smooth: !1,
      smoothConstraint: null
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function (t, e) {
      Fr(t, e, !1);
    }
  }),
      Mg = Pr.extend({
    type: "rect",
    shape: {
      r: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function (t, e) {
      var n = e.x,
          i = e.y,
          r = e.width,
          a = e.height;
      e.r ? Fn(t, e) : t.rect(n, i, r, a), t.closePath();
    }
  }),
      Sg = Pr.extend({
    type: "line",
    shape: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      percent: 1
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function (t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.percent;
      0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a));
    },
    pointAt: function (t) {
      var e = this.shape;
      return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
    }
  }),
      Ig = [],
      Cg = Pr.extend({
    type: "bezier-curve",
    shape: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      cpx1: 0,
      cpy1: 0,
      percent: 1
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function (t, e) {
      var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          u = e.cpy2,
          h = e.percent;
      0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (hr(n, o, r, h, Ig), o = Ig[1], r = Ig[2], hr(i, s, a, h, Ig), s = Ig[1], a = Ig[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (rr(n, o, l, r, h, Ig), o = Ig[1], l = Ig[2], r = Ig[3], rr(i, s, u, a, h, Ig), s = Ig[1], u = Ig[2], a = Ig[3]), t.bezierCurveTo(o, s, l, u, r, a)));
    },
    pointAt: function (t) {
      return Hr(this.shape, t, !1);
    },
    tangentAt: function (t) {
      var e = Hr(this.shape, t, !0);
      return te(e, e);
    }
  }),
      Tg = Pr.extend({
    type: "arc",
    shape: {
      cx: 0,
      cy: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      clockwise: !0
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          u = Math.sin(a);
      t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s);
    }
  }),
      Dg = Pr.extend({
    type: "compound",
    shape: {
      paths: null
    },
    _updatePathDirty: function () {
      for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;

      this.__dirtyPath = t, this.__dirty = this.__dirty || t;
    },
    beforeBrush: function () {
      this._updatePathDirty();

      for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1]);
    },
    buildPath: function (t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0);
    },
    afterBrush: function () {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
    },
    getBoundingRect: function () {
      return this._updatePathDirty(), Pr.prototype.getBoundingRect.call(this);
    }
  }),
      kg = function (t) {
    this.colorStops = t || [];
  };

  kg.prototype = {
    constructor: kg,
    addColorStop: function (t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      });
    }
  };

  var Ag = function (t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, kg.call(this, r);
  };

  Ag.prototype = {
    constructor: Ag
  }, h(Ag, kg);

  var Pg = function (t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, kg.call(this, i);
  };

  Pg.prototype = {
    constructor: Pg
  }, h(Pg, kg), Vr.prototype.incremental = !0, Vr.prototype.clearDisplaybles = function () {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;
  }, Vr.prototype.addDisplayable = function (t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
  }, Vr.prototype.addDisplayables = function (t, e) {
    e = e || !1;

    for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
  }, Vr.prototype.eachPendingDisplayable = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);

    for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
  }, Vr.prototype.update = function () {
    this.updateTransform();

    for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];
      e.parent = this, e.update(), e.parent = null;
    }

    for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];
      e.parent = this, e.update(), e.parent = null;
    }
  }, Vr.prototype.brush = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }

    this._cursor = e;

    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t);
    }

    this._temporaryDisplayables = [], this.notClear = !0;
  };
  var Lg = [];
  Vr.prototype.getBoundingRect = function () {
    if (!this._rect) {
      for (var t = new rn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
            i = n.getBoundingRect().clone();
        n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Lg)), t.union(i);
      }

      this._rect = t;
    }

    return this._rect;
  }, Vr.prototype.contain = function (t, e) {
    var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();
    if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
      var a = this._displayables[r];
      if (a.contain(t, e)) return !0;
    }
    return !1;
  }, h(Vr, ri);
  var Og = Math.round,
      Bg = Math.max,
      Eg = Math.min,
      Rg = {},
      zg = zr,
      Ng = (Object.freeze || Object)({
    extendShape: Wr,
    extendPath: Gr,
    makePath: Xr,
    makeImage: jr,
    mergePath: zg,
    resizePath: Ur,
    subPixelOptimizeLine: Yr,
    subPixelOptimizeRect: Zr,
    subPixelOptimize: $r,
    setHoverStyle: ua,
    setLabelStyle: ha,
    setTextStyle: ca,
    setText: da,
    getFont: _a,
    updateProps: wa,
    initProps: ba,
    getTransform: Ma,
    applyTransform: Sa,
    transformDirection: Ia,
    groupTransition: Ca,
    clipPointsByRect: Ta,
    clipRectByRect: Da,
    createIcon: ka,
    Group: tf,
    Image: ai,
    Text: fg,
    Circle: pg,
    Sector: mg,
    Ring: yg,
    Polygon: wg,
    Polyline: bg,
    Rect: Mg,
    Line: Sg,
    BezierCurve: Cg,
    Arc: Tg,
    IncrementalDisplayable: Vr,
    CompoundPath: Dg,
    LinearGradient: Ag,
    RadialGradient: Pg,
    BoundingRect: rn
  }),
      Fg = ["textStyle", "color"],
      Hg = {
    getTextColor: function (t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(Fg) : null);
    },
    getFont: function () {
      return _a({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    },
    getTextRect: function (t) {
      return Mn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"));
    }
  },
      Vg = sp([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
      Wg = {
    getItemStyle: function (t, e) {
      var n = Vg(this, t, e),
          i = this.getBorderLineDash();
      return i && (n.lineDash = i), n;
    },
    getBorderLineDash: function () {
      var t = this.get("borderType");
      return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
    }
  },
      Gg = c,
      Xg = Hi();
  Aa.prototype = {
    constructor: Aa,
    init: null,
    mergeOption: function (t) {
      r(this.option, t, !0);
    },
    get: function (t, e) {
      return null == t ? this.option : Pa(this.option, this.parsePath(t), !e && La(this, t));
    },
    getShallow: function (t, e) {
      var n = this.option,
          i = null == n ? n : n[t],
          r = !e && La(this, t);
      return null == i && r && (i = r.getShallow(t)), i;
    },
    getModel: function (t, e) {
      var n,
          i = null == t ? this.option : Pa(this.option, t = this.parsePath(t));
      return e = e || (n = La(this, t)) && n.getModel(t), new Aa(i, e, this.ecModel);
    },
    isEmpty: function () {
      return null == this.option;
    },
    restoreData: function () {},
    clone: function () {
      var t = this.constructor;
      return new t(i(this.option));
    },
    setReadOnly: function () {},
    parsePath: function (t) {
      return "string" == typeof t && (t = t.split(".")), t;
    },
    customizeGetParent: function (t) {
      Xg(this).getParent = t;
    },
    isAnimationEnabled: function () {
      if (!Kc.node) {
        if (null != this.option.animation) return !!this.option.animation;
        if (this.parentModel) return this.parentModel.isAnimationEnabled();
      }
    }
  }, Ui(Aa), Yi(Aa), Gg(Aa, up), Gg(Aa, cp), Gg(Aa, Hg), Gg(Aa, Wg);

  var jg = 0,
      qg = 1e-4,
      Ug = 9007199254740991,
      Yg = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
      Zg = (Object.freeze || Object)({
    linearMap: za,
    parsePercent: Na,
    round: Fa,
    asc: Ha,
    getPrecision: Va,
    getPrecisionSafe: Wa,
    getPixelPrecision: Ga,
    getPercentWithPrecision: Xa,
    MAX_SAFE_INTEGER: Ug,
    remRadian: ja,
    isRadianAroundZero: qa,
    parseDate: Ua,
    quantity: Ya,
    nice: $a,
    quantile: Ka,
    reformIntervals: Qa,
    isNumeric: Ja
  }),
      $g = L,
      Kg = /([&<>"'])/g,
      Qg = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
      Jg = ["a", "b", "c", "d", "e", "f", "g"],
      tv = function (t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  },
      ev = kn,
      nv = Mn,
      iv = (Object.freeze || Object)({
    addCommas: to,
    toCamelCase: eo,
    normalizeCssArray: $g,
    encodeHTML: no,
    formatTpl: io,
    formatTplSimple: ro,
    getTooltipMarker: ao,
    formatTime: so,
    capitalFirst: lo,
    truncateText: ev,
    getTextRect: nv
  }),
      rv = f,
      av = ["left", "right", "top", "bottom", "width", "height"],
      ov = [["width", "left", "right"], ["height", "top", "bottom"]],
      sv = uo,
      lv = (_(uo, "vertical"), _(uo, "horizontal"), {
    getBoxLayoutParams: function () {
      return {
        left: this.get("left"),
        top: this.get("top"),
        right: this.get("right"),
        bottom: this.get("bottom"),
        width: this.get("width"),
        height: this.get("height")
      };
    }
  }),
      uv = Hi(),
      hv = Aa.extend({
    type: "component",
    id: "",
    name: "",
    mainType: "",
    subType: "",
    componentIndex: 0,
    defaultOption: null,
    ecModel: null,
    dependentModels: [],
    uid: null,
    layoutMode: null,
    $constructor: function (t, e, n, i) {
      Aa.call(this, t, e, n, i), this.uid = Oa("ec_cpt_model");
    },
    init: function (t, e, n) {
      this.mergeDefaultAndTheme(t, n);
    },
    mergeDefaultAndTheme: function (t, e) {
      var n = this.layoutMode,
          i = n ? fo(t) : {},
          a = e.getTheme();
      r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && co(t, i, n);
    },
    mergeOption: function (t) {
      r(this.option, t, !0);
      var e = this.layoutMode;
      e && co(this.option, t, e);
    },
    optionUpdated: function () {},
    getDefaultOption: function () {
      var t = uv(this);

      if (!t.defaultOption) {
        for (var e = [], n = this.constructor; n;) {
          var i = n.prototype.defaultOption;
          i && e.push(i), n = n.superClass;
        }

        for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);

        t.defaultOption = a;
      }

      return t.defaultOption;
    },
    getReferringComponents: function (t) {
      return this.ecModel.queryComponents({
        mainType: t,
        index: this.get(t + "Index", !0),
        id: this.get(t + "Id", !0)
      });
    }
  });

  Ki(hv, {
    registerWhenExtend: !0
  }), Ba(hv), Ea(hv, go), c(hv, lv);
  var cv = "";
  "undefined" != typeof navigator && (cv = navigator.platform || "");
  var dv = {
    color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    textStyle: {
      fontFamily: cv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal"
    },
    blendMode: null,
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 300,
    animationEasing: "exponentialOut",
    animationEasingUpdate: "cubicOut",
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1
  },
      fv = Hi(),
      pv = {
    clearColorPalette: function () {
      fv(this).colorIdx = 0, fv(this).colorNameMap = {};
    },
    getColorFromPalette: function (t, e, n) {
      e = e || this;
      var i = fv(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};
      if (a.hasOwnProperty(t)) return a[t];
      var o = Pi(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != n && s ? vo(s, n) : o;

      if (l = l || o, l && l.length) {
        var u = l[r];
        return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u;
      }
    }
  },
      gv = {
    cartesian2d: function (t, e, n, i) {
      var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];
      e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), yo(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), yo(a) && (i.set("y", a), e.firstCategoryDimIndex = 1);
    },
    singleAxis: function (t, e, n, i) {
      var r = t.getReferringComponents("singleAxis")[0];
      e.coordSysDims = ["single"], n.set("single", r), yo(r) && (i.set("single", r), e.firstCategoryDimIndex = 0);
    },
    polar: function (t, e, n, i) {
      var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");
      e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), yo(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), yo(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1);
    },
    geo: function (t, e) {
      e.coordSysDims = ["lng", "lat"];
    },
    parallel: function (t, e, n, i) {
      var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();
      f(a.parallelAxisIndex, function (t, a) {
        var s = r.getComponent("parallelAxis", t),
            l = o[a];
        n.set(l, s), yo(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);
      });
    }
  },
      vv = "original",
      mv = "arrayRows",
      yv = "objectRows",
      _v = "keyedColumns",
      xv = "unknown",
      wv = "typedArray",
      bv = "column",
      Mv = "row";
  _o.seriesDataToSource = function (t) {
    return new _o({
      data: t,
      sourceFormat: I(t) ? wv : vv,
      fromDataset: !1
    });
  }, Yi(_o);
  var Sv = Hi(),
      Iv = "\x00_ec_inner",
      Cv = Aa.extend({
    init: function (t, e, n, i) {
      n = n || {}, this.option = null, this._theme = new Aa(n), this._optionManager = i;
    },
    setOption: function (t, e) {
      O(!(Iv in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
    },
    resetOption: function (t) {
      var e = !1,
          n = this._optionManager;

      if (!t || "recreate" === t) {
        var i = n.mountOption("recreate" === t);
        this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Bo.call(this, i), e = !0;
      }

      if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
        var r = n.getTimelineOption(this);
        r && (this.mergeOption(r), e = !0);
      }

      if (!t || "recreate" === t || "media" === t) {
        var a = n.getMediaOption(this, this._api);
        a.length && f(a, function (t) {
          this.mergeOption(t, e = !0);
        }, this);
      }

      return e;
    },
    mergeOption: function (t) {
      function e(e, i) {
        var r = Pi(t[e]),
            s = Ei(a.get(e), r);
        Ri(s), f(s, function (t) {
          var n = t.option;
          M(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = Ro(e, n, t.exist));
        });
        var l = Eo(a, i);
        n[e] = [], a.set(e, []), f(s, function (t, i) {
          var r = t.exist,
              s = t.option;

          if (O(M(s) || r, "Empty component definition"), s) {
            var u = hv.getClass(e, t.keyInfo.subType, !0);
            if (r && r instanceof u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);else {
              var h = o({
                dependentModels: l,
                componentIndex: i
              }, t.keyInfo);
              r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r.optionUpdated(null, !0);
            }
          } else r.mergeOption({}, this), r.optionUpdated({}, !1);

          a.get(e)[i] = r, n[e][i] = r.option;
        }, this), "series" === e && zo(this, a.get("series"));
      }

      var n = this.option,
          a = this._componentsMap,
          s = [];
      bo(this), f(t, function (t, e) {
        null != t && (hv.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0));
      }), hv.topologicalTravel(s, hv.getAllClassMainTypes(), e, this), this._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || []);
    },
    getOption: function () {
      var t = i(this.option);
      return f(t, function (e, n) {
        if (hv.hasClass(n)) {
          for (var e = Pi(e), i = e.length - 1; i >= 0; i--) Ni(e[i]) && e.splice(i, 1);

          t[n] = e;
        }
      }), delete t[Iv], t;
    },
    getTheme: function () {
      return this._theme;
    },
    getComponent: function (t, e) {
      var n = this._componentsMap.get(t);

      return n ? n[e || 0] : void 0;
    },
    queryComponents: function (t) {
      var e = t.mainType;
      if (!e) return [];

      var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);

      if (!a || !a.length) return [];
      var o;
      if (null != n) x(n) || (n = [n]), o = v(p(n, function (t) {
        return a[t];
      }), function (t) {
        return !!t;
      });else if (null != i) {
        var s = x(i);
        o = v(a, function (t) {
          return s && u(i, t.id) >= 0 || !s && t.id === i;
        });
      } else if (null != r) {
        var l = x(r);
        o = v(a, function (t) {
          return l && u(r, t.name) >= 0 || !l && t.name === r;
        });
      } else o = a.slice();
      return No(o, t);
    },
    findComponents: function (t) {
      function e(t) {
        var e = r + "Index",
            n = r + "Id",
            i = r + "Name";
        return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
          mainType: r,
          index: t[e],
          id: t[n],
          name: t[i]
        };
      }

      function n(e) {
        return t.filter ? v(e, t.filter) : e;
      }

      var i = t.query,
          r = t.mainType,
          a = e(i),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);
      return n(No(o, t));
    },
    eachComponent: function (t, e, n) {
      var i = this._componentsMap;
      if ("function" == typeof t) n = e, e = t, i.each(function (t, i) {
        f(t, function (t, r) {
          e.call(n, i, t, r);
        });
      });else if (b(t)) f(i.get(t), e, n);else if (M(t)) {
        var r = this.findComponents(t);
        f(r, e, n);
      }
    },
    getSeriesByName: function (t) {
      var e = this._componentsMap.get("series");

      return v(e, function (e) {
        return e.name === t;
      });
    },
    getSeriesByIndex: function (t) {
      return this._componentsMap.get("series")[t];
    },
    getSeriesByType: function (t) {
      var e = this._componentsMap.get("series");

      return v(e, function (e) {
        return e.subType === t;
      });
    },
    getSeries: function () {
      return this._componentsMap.get("series").slice();
    },
    getSeriesCount: function () {
      return this._componentsMap.get("series").length;
    },
    eachSeries: function (t, e) {
      f(this._seriesIndices, function (n) {
        var i = this._componentsMap.get("series")[n];

        t.call(e, i, n);
      }, this);
    },
    eachRawSeries: function (t, e) {
      f(this._componentsMap.get("series"), t, e);
    },
    eachSeriesByType: function (t, e, n) {
      f(this._seriesIndices, function (i) {
        var r = this._componentsMap.get("series")[i];

        r.subType === t && e.call(n, r, i);
      }, this);
    },
    eachRawSeriesByType: function (t, e, n) {
      return f(this.getSeriesByType(t), e, n);
    },
    isSeriesFiltered: function (t) {
      return null == this._seriesIndicesMap.get(t.componentIndex);
    },
    getCurrentSeriesIndices: function () {
      return (this._seriesIndices || []).slice();
    },
    filterSeries: function (t, e) {
      var n = v(this._componentsMap.get("series"), t, e);
      zo(this, n);
    },
    restoreData: function (t) {
      var e = this._componentsMap;
      zo(this, e.get("series"));
      var n = [];
      e.each(function (t, e) {
        n.push(e);
      }), hv.topologicalTravel(n, hv.getAllClassMainTypes(), function (n) {
        f(e.get(n), function (e) {
          ("series" !== n || !Lo(e, t)) && e.restoreData();
        });
      });
    }
  });
  c(Cv, pv);
  var Tv = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
      Dv = {};
  Ho.prototype = {
    constructor: Ho,
    create: function (t, e) {
      var n = [];
      f(Dv, function (i) {
        var r = i.create(t, e);
        n = n.concat(r || []);
      }), this._coordinateSystems = n;
    },
    update: function (t, e) {
      f(this._coordinateSystems, function (n) {
        n.update && n.update(t, e);
      });
    },
    getCoordinateSystems: function () {
      return this._coordinateSystems.slice();
    }
  }, Ho.register = function (t, e) {
    Dv[t] = e;
  }, Ho.get = function (t) {
    return Dv[t];
  };
  var kv = f,
      Av = i,
      Pv = p,
      Lv = r,
      Ov = /^(min|max)?(.+)$/;
  Vo.prototype = {
    constructor: Vo,
    setOption: function (t, e) {
      t && f(Pi(t.series), function (t) {
        t && t.data && I(t.data) && E(t.data);
      }), t = Av(t, !0);
      var n = this._optionBackup,
          i = Wo.call(this, t, e, !n);
      this._newBaseOption = i.baseOption, n ? (qo(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
    },
    mountOption: function (t) {
      var e = this._optionBackup;
      return this._timelineOptions = Pv(e.timelineOptions, Av), this._mediaList = Pv(e.mediaList, Av), this._mediaDefault = Av(e.mediaDefault), this._currentMediaIndices = [], Av(t ? e.baseOption : this._newBaseOption);
    },
    getTimelineOption: function (t) {
      var e,
          n = this._timelineOptions;

      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = Av(n[i.getCurrentIndex()], !0));
      }

      return e;
    },
    getMediaOption: function () {
      var t = this._api.getWidth(),
          e = this._api.getHeight(),
          n = this._mediaList,
          i = this._mediaDefault,
          r = [],
          a = [];

      if (!n.length && !i) return a;

      for (var o = 0, s = n.length; s > o; o++) Go(n[o].query, t, e) && r.push(o);

      return !r.length && i && (r = [-1]), r.length && !jo(r, this._currentMediaIndices) && (a = Pv(r, function (t) {
        return Av(-1 === t ? i.option : n[t].option);
      })), this._currentMediaIndices = r, a;
    }
  };

  var Bv = f,
      Ev = M,
      Rv = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
      zv = function (t, e) {
    Bv(Jo(t.series), function (t) {
      Ev(t) && Qo(t);
    });
    var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Bv(n, function (e) {
      Bv(Jo(t[e]), function (t) {
        t && ($o(t, "axisLabel"), $o(t.axisPointer, "label"));
      });
    }), Bv(Jo(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;
      $o(e, "axisLabel"), $o(e && e.axisPointer, "label");
    }), Bv(Jo(t.calendar), function (t) {
      Yo(t, "itemStyle"), $o(t, "dayLabel"), $o(t, "monthLabel"), $o(t, "yearLabel");
    }), Bv(Jo(t.radar), function (t) {
      $o(t, "name");
    }), Bv(Jo(t.geo), function (t) {
      Ev(t) && (Ko(t), Bv(Jo(t.regions), function (t) {
        Ko(t);
      }));
    }), Bv(Jo(t.timeline), function (t) {
      Ko(t), Yo(t, "label"), Yo(t, "itemStyle"), Yo(t, "controlStyle", !0);
      var e = t.data;
      x(e) && f(e, function (t) {
        M(t) && (Yo(t, "label"), Yo(t, "itemStyle"));
      });
    }), Bv(Jo(t.toolbox), function (t) {
      Yo(t, "iconStyle"), Bv(t.feature, function (t) {
        Yo(t, "iconStyle");
      });
    }), $o(ts(t.axisPointer), "label"), $o(ts(t.tooltip).axisPointer, "label");
  },
      Nv = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
      Fv = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
      Hv = function (t, e) {
    zv(t, e), t.series = Pi(t.series), f(t.series, function (t) {
      if (M(t)) {
        var e = t.type;

        if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
          var n = es(t, "pointer.color");
          null != n && ns(t, "itemStyle.normal.color", n);
        }

        is(t);
      }
    }), t.dataRange && (t.visualMap = t.dataRange), f(Fv, function (e) {
      var n = t[e];
      n && (x(n) || (n = [n]), f(n, function (t) {
        is(t);
      }));
    });
  },
      Vv = function (t) {
    var e = N();
    t.eachSeries(function (t) {
      var n = t.get("stack");

      if (n) {
        var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = {
          stackResultDimension: r.getCalculationInfo("stackResultDimension"),
          stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
          stackedDimension: r.getCalculationInfo("stackedDimension"),
          stackedByDimension: r.getCalculationInfo("stackedByDimension"),
          isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
          data: r,
          seriesModel: t
        };
        if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
        i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a);
      }
    }), e.each(rs);
  },
      Wv = as.prototype;

  Wv.pure = !1, Wv.persistent = !0, Wv.getSource = function () {
    return this._source;
  };
  var Gv = {
    arrayRows_column: {
      pure: !0,
      count: function () {
        return Math.max(0, this._data.length - this._source.startIndex);
      },
      getItem: function (t) {
        return this._data[t + this._source.startIndex];
      },
      appendData: ls
    },
    arrayRows_row: {
      pure: !0,
      count: function () {
        var t = this._data[0];
        return t ? Math.max(0, t.length - this._source.startIndex) : 0;
      },
      getItem: function (t) {
        t += this._source.startIndex;

        for (var e = [], n = this._data, i = 0; i < n.length; i++) {
          var r = n[i];
          e.push(r ? r[t] : null);
        }

        return e;
      },
      appendData: function () {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      }
    },
    objectRows: {
      pure: !0,
      count: os,
      getItem: ss,
      appendData: ls
    },
    keyedColumns: {
      pure: !0,
      count: function () {
        var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];
        return e ? e.length : 0;
      },
      getItem: function (t) {
        for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
          var r = this._data[n[i].name];
          e.push(r ? r[t] : null);
        }

        return e;
      },
      appendData: function (t) {
        var e = this._data;
        f(t, function (t, n) {
          for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r]);
        });
      }
    },
    original: {
      count: os,
      getItem: ss,
      appendData: ls
    },
    typedArray: {
      persistent: !1,
      pure: !0,
      count: function () {
        return this._data ? this._data.length / this._dimSize : 0;
      },
      getItem: function (t, e) {
        t -= this._offset, e = e || [];

        for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];

        return e;
      },
      appendData: function (t) {
        this._data = t;
      },
      clean: function () {
        this._offset += this.count(), this._data = null;
      }
    }
  },
      Xv = {
    arrayRows: us,
    objectRows: function (t, e, n, i) {
      return null != n ? t[i] : t;
    },
    keyedColumns: us,
    original: function (t, e, n) {
      var i = Oi(t);
      return null != n && i instanceof Array ? i[n] : i;
    },
    typedArray: us
  },
      jv = {
    arrayRows: hs,
    objectRows: function (t, e) {
      return cs(t[e], this._dimensionInfos[e]);
    },
    keyedColumns: hs,
    original: function (t, e, n, i) {
      var r = t && (null == t.value ? t : t.value);
      return !this._rawData.pure && Bi(t) && (this.hasItemOption = !0), cs(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
    },
    typedArray: function (t, e, n, i) {
      return t[i];
    }
  },
      qv = /\{@(.+?)\}/g,
      Uv = {
    getDataParams: function (t, e) {
      var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color");
      return {
        componentType: this.mainType,
        componentSubType: this.subType,
        seriesType: "series" === this.mainType ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: this.id,
        seriesName: this.name,
        name: a,
        dataIndex: r,
        data: o,
        dataType: e,
        value: i,
        color: s,
        marker: ao(s),
        $vars: ["seriesName", "name", "value"]
      };
    },
    getFormattedLabel: function (t, e, n, i, r) {
      e = e || "normal";
      var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);
      null != i && s.value instanceof Array && (s.value = s.value[i]);
      var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
      if ("function" == typeof l) return s.status = e, l(s);

      if ("string" == typeof l) {
        var u = io(l, s);
        return u.replace(qv, function (e, n) {
          var i = n.length;
          return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), ds(a, t, n);
        });
      }
    },
    getRawValue: function (t, e) {
      return ds(this.getData(e), t);
    },
    formatTooltip: function () {}
  },
      Yv = gs.prototype;

  Yv.perform = function (t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t;
    }

    var n = this._upstream,
        i = t && t.skip;

    if (this._dirty && n) {
      var r = this.context;
      r.data = r.outputData = n.context.outputData;
    }

    this.__pipeline && (this.__pipeline.currentTask = this);
    var a;
    this._plan && !i && (a = this._plan(this.context));
    var o = e(this._modBy),
        s = this._modDataCount || 0,
        l = e(t && t.modBy),
        u = t && t.modDataCount || 0;
    (o !== l || s !== u) && (a = "reset");
    var h;
    (this._dirty || "reset" === a) && (this._dirty = !1, h = ms(this, i)), this._modBy = l, this._modDataCount = u;
    var c = t && t.step;

    if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var d = this._dueIndex,
          f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);

      if (!i && (h || f > d)) {
        var p = this._progress;
        if (x(p)) for (var g = 0; g < p.length; g++) vs(this, p[g], d, f, l, u);else vs(this, p, d, f, l, u);
      }

      this._dueIndex = f;
      var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
      this._outputDueEnd = v;
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;

    return this.unfinished();
  };

  var Zv = function () {
    function t() {
      return n > i ? i++ : null;
    }

    function e() {
      var t = i % o * r + Math.ceil(i / o),
          e = i >= n ? null : a > t ? t : i;
      return i++, e;
    }

    var n,
        i,
        r,
        a,
        o,
        s = {
      reset: function (l, u, h, c) {
        i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
      }
    };
    return s;
  }();

  Yv.dirty = function () {
    this._dirty = !0, this._onDirty && this._onDirty(this.context);
  }, Yv.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  }, Yv.pipe = function (t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, Yv.dispose = function () {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
  }, Yv.getUpstream = function () {
    return this._upstream;
  }, Yv.getDownstream = function () {
    return this._downstream;
  }, Yv.setOutputEnd = function (t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  };
  var $v = Hi(),
      Kv = hv.extend({
    type: "series.__base__",
    seriesIndex: 0,
    coordinateSystem: null,
    defaultOption: null,
    legendDataProvider: null,
    visualColorAccessPath: "itemStyle.color",
    layoutMode: null,
    init: function (t, e, n) {
      this.seriesIndex = this.componentIndex, this.dataTask = ps({
        count: xs,
        reset: ws
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(t, n), Mo(this);
      var i = this.getInitialData(t, n);
      Ms(i, this), this.dataTask.context.data = i, $v(this).dataBeforeProcessed = i, ys(this);
    },
    mergeDefaultAndTheme: function (t, e) {
      var n = this.layoutMode,
          i = n ? fo(t) : {},
          a = this.subType;
      hv.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Li(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && co(t, i, n);
    },
    mergeOption: function (t, e) {
      t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
      var n = this.layoutMode;
      n && co(this.option, t, n), Mo(this);
      var i = this.getInitialData(t, e);
      Ms(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, $v(this).dataBeforeProcessed = i, ys(this);
    },
    fillDataTextStyle: function (t) {
      if (t && !I(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Li(t[n], "label", e);
    },
    getInitialData: function () {},
    appendData: function (t) {
      var e = this.getRawData();
      e.appendData(t.data);
    },
    getData: function (t) {
      var e = Is(this);

      if (e) {
        var n = e.context.data;
        return null == t ? n : n.getLinkedData(t);
      }

      return $v(this).data;
    },
    setData: function (t) {
      var e = Is(this);

      if (e) {
        var n = e.context;
        n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t);
      }

      $v(this).data = t;
    },
    getSource: function () {
      return wo(this);
    },
    getRawData: function () {
      return $v(this).dataBeforeProcessed;
    },
    getBaseAxis: function () {
      var t = this.coordinateSystem;
      return t && t.getBaseAxis && t.getBaseAxis();
    },
    formatTooltip: function (t, e) {
      function n(n) {
        function i(t, n) {
          var i = r.getDimensionInfo(n);

          if (i && i.otherDims.tooltip !== !1) {
            var a = i.type,
                l = ao({
              color: u,
              type: "subItem"
            }),
                h = (o ? l + no(i.displayName || "-") + ": " : "") + no("ordinal" === a ? t + "" : "time" === a ? e ? "" : so("yyyy/MM/dd hh:mm:ss", t) : to(t));
            h && s.push(h);
          }
        }

        var o = g(n, function (t, e, n) {
          var i = r.getDimensionInfo(n);
          return t |= i && i.tooltip !== !1 && null != i.displayName;
        }, 0),
            s = [];
        return a.length ? f(a, function (e) {
          i(ds(r, t, e), e);
        }) : f(n, i), (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ");
      }

      function i(t) {
        return no(to(t));
      }

      var r = this.getData(),
          a = r.mapDimension("defaultedTooltip", !0),
          o = a.length,
          s = this.getRawValue(t),
          l = x(s),
          u = r.getItemVisual(t, "color");
      M(u) && u.colorStops && (u = (u.colorStops[0] || {}).color), u = u || "transparent";
      var h = o > 1 || l && !o ? n(s) : i(o ? ds(r, t, a[0]) : l ? s[0] : s),
          c = ao(u),
          d = r.getName(t),
          p = this.name;
      return zi(this) || (p = ""), p = p ? no(p) + (e ? ": " : "<br/>") : "", e ? c + p + h : p + c + (d ? no(d) + ": " + h : h);
    },
    isAnimationEnabled: function () {
      if (Kc.node) return !1;
      var t = this.getShallow("animation");
      return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;
    },
    restoreData: function () {
      this.dataTask.dirty();
    },
    getColorFromPalette: function (t, e, n) {
      var i = this.ecModel,
          r = pv.getColorFromPalette.call(this, t, e, n);
      return r || (r = i.getColorFromPalette(t, e, n)), r;
    },
    coordDimToDataDim: function (t) {
      return this.getRawData().mapDimension(t, !0);
    },
    getProgressive: function () {
      return this.get("progressive");
    },
    getProgressiveThreshold: function () {
      return this.get("progressiveThreshold");
    },
    getAxisTooltipData: null,
    getTooltipPosition: null,
    pipeTask: null,
    preventIncremental: null,
    pipelineContext: null
  });
  c(Kv, Uv), c(Kv, pv);

  var Qv = function () {
    this.group = new tf(), this.uid = Oa("viewComponent");
  };

  Qv.prototype = {
    constructor: Qv,
    init: function () {},
    render: function () {},
    dispose: function () {}
  };
  var Jv = Qv.prototype;
  Jv.updateView = Jv.updateLayout = Jv.updateVisual = function () {}, Ui(Qv), Ki(Qv, {
    registerWhenExtend: !0
  });

  var tm = function () {
    var t = Hi();
    return function (e) {
      var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.progressiveRender,
          o = n.large = i.large,
          s = n.progressiveRender = i.progressiveRender;
      return !!(r ^ o || a ^ s) && "reset";
    };
  },
      em = Hi(),
      nm = tm();

  Cs.prototype = {
    type: "chart",
    init: function () {},
    render: function () {},
    highlight: function (t, e, n, i) {
      Ds(t.getData(), i, "emphasis");
    },
    downplay: function (t, e, n, i) {
      Ds(t.getData(), i, "normal");
    },
    remove: function () {
      this.group.removeAll();
    },
    dispose: function () {},
    incrementalPrepareRender: null,
    incrementalRender: null,
    updateTransform: null
  };
  var im = Cs.prototype;
  im.updateView = im.updateLayout = im.updateVisual = function (t, e, n, i) {
    this.render(t, e, n, i);
  }, Ui(Cs, ["dispose"]), Ki(Cs, {
    registerWhenExtend: !0
  }), Cs.markUpdateMethod = function (t, e) {
    em(t).updateMethod = e;
  };

  var rm = {
    incrementalPrepareRender: {
      progress: function (t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
      }
    },
    render: {
      forceFirstProgress: !0,
      progress: function (t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload);
      }
    }
  },
      am = "\x00__throttleOriginMethod",
      om = "\x00__throttleRate",
      sm = "\x00__throttleType",
      lm = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (t, e) {
      var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());

      if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
        "function" != typeof r || r instanceof kg || n.each(function (e) {
          n.setItemVisual(e, "color", r(t.getDataParams(e)));
        });

        var a = function (t, e) {
          var n = t.getItemModel(e),
              r = n.get(i, !0);
          null != r && t.setItemVisual(e, "color", r);
        };

        return {
          dataEach: n.hasItemOption ? a : null
        };
      }
    }
  },
      um = {
    toolbox: {
      brush: {
        title: {
          rect: "矩形选择",
          polygon: "圈选",
          lineX: "横向选择",
          lineY: "纵向选择",
          keep: "保持选择",
          clear: "清除选择"
        }
      },
      dataView: {
        title: "数据视图",
        lang: ["数据视图", "关闭", "刷新"]
      },
      dataZoom: {
        title: {
          zoom: "区域缩放",
          back: "区域缩放还原"
        }
      },
      magicType: {
        title: {
          line: "切换为折线图",
          bar: "切换为柱状图",
          stack: "切换为堆叠",
          tiled: "切换为平铺"
        }
      },
      restore: {
        title: "还原"
      },
      saveAsImage: {
        title: "保存为图片",
        lang: ["右键另存为图片"]
      }
    },
    series: {
      typeNames: {
        pie: "饼图",
        bar: "柱状图",
        line: "折线图",
        scatter: "散点图",
        effectScatter: "涟漪散点图",
        radar: "雷达图",
        tree: "树图",
        treemap: "矩形树图",
        boxplot: "箱型图",
        candlestick: "K线图",
        k: "K线图",
        heatmap: "热力图",
        map: "地图",
        parallel: "平行坐标图",
        lines: "线图",
        graph: "关系图",
        sankey: "桑基图",
        funnel: "漏斗图",
        gauge: "仪表盘图",
        pictorialBar: "象形柱图",
        themeRiver: "主题河流图",
        sunburst: "旭日图"
      }
    },
    aria: {
      general: {
        withTitle: "这是一个关于“{title}”的图表。",
        withoutTitle: "这是一个图表，"
      },
      series: {
        single: {
          prefix: "",
          withName: "图表类型是{seriesType}，表示{seriesName}。",
          withoutName: "图表类型是{seriesType}。"
        },
        multiple: {
          prefix: "它由{seriesCount}个图表系列组成。",
          withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
          withoutName: "第{seriesId}个系列是一个{seriesType}，",
          separator: {
            middle: "；",
            end: "。"
          }
        }
      },
      data: {
        allData: "其数据是——",
        partialData: "其中，前{displayCnt}项是——",
        withName: "{name}的数据是{value}",
        withoutName: "{value}",
        separator: {
          middle: "，",
          end: ""
        }
      }
    }
  },
      hm = function (t, e) {
    function n(t, e) {
      if ("string" != typeof t) return t;
      var n = t;
      return f(e, function (t, e) {
        n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
      }), n;
    }

    function i(t) {
      var e = o.get(t);

      if (null == e) {
        for (var n = t.split("."), i = um.aria, r = 0; r < n.length; ++r) i = i[n[r]];

        return i;
      }

      return e;
    }

    function r() {
      var t = e.getModel("title").option;
      return t && t.length && (t = t[0]), t && t.text;
    }

    function a(t) {
      return um.series.typeNames[t] || "自定义图";
    }

    var o = e.getModel("aria");

    if (o.get("show")) {
      if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
      var s = 0;
      e.eachSeries(function () {
        ++s;
      }, this);
      var l,
          u = o.get("data.maxCount") || 10,
          h = o.get("series.maxCount") || 10,
          c = Math.min(s, h);

      if (!(1 > s)) {
        var d = r();
        l = d ? n(i("general.withTitle"), {
          title: d
        }) : i("general.withoutTitle");
        var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
        l += n(i(g), {
          seriesCount: s
        }), e.eachSeries(function (t, e) {
          if (c > e) {
            var r,
                o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";
            r = i(o ? l + "withName" : l + "withoutName"), r = n(r, {
              seriesId: t.seriesIndex,
              seriesName: t.get("name"),
              seriesType: a(t.subType)
            });
            var h = t.getData();
            window.data = h, r += h.count() > u ? n(i("data.partialData"), {
              displayCnt: u
            }) : i("data.allData");

            for (var d = [], f = 0; f < h.count(); f++) if (u > f) {
              var g = h.getName(f),
                  v = ds(h, f);
              d.push(n(i(g ? "data.withName" : "data.withoutName"), {
                name: g,
                value: v
              }));
            }

            r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r);
          }
        }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l);
      }
    }
  },
      cm = Math.PI,
      dm = function (t, e) {
    e = e || {}, s(e, {
      text: "loading",
      color: "#c23531",
      textColor: "#000",
      maskColor: "rgba(255, 255, 255, 0.8)",
      zlevel: 0
    });
    var n = new Mg({
      style: {
        fill: e.maskColor
      },
      zlevel: e.zlevel,
      z: 1e4
    }),
        i = new Tg({
      shape: {
        startAngle: -cm / 2,
        endAngle: -cm / 2 + .1,
        r: 10
      },
      style: {
        stroke: e.color,
        lineCap: "round",
        lineWidth: 5
      },
      zlevel: e.zlevel,
      z: 10001
    }),
        r = new Mg({
      style: {
        fill: "none",
        text: e.text,
        textPosition: "right",
        textDistance: 10,
        textFill: e.textColor
      },
      zlevel: e.zlevel,
      z: 10001
    });
    i.animateShape(!0).when(1e3, {
      endAngle: 3 * cm / 2
    }).start("circularInOut"), i.animateShape(!0).when(1e3, {
      startAngle: 3 * cm / 2
    }).delay(300).start("circularInOut");
    var a = new tf();
    return a.add(i), a.add(r), a.add(n), a.resize = function () {
      var e = t.getWidth() / 2,
          a = t.getHeight() / 2;
      i.setShape({
        cx: e,
        cy: a
      });
      var o = i.shape.r;
      r.setShape({
        x: e - o,
        y: a - o,
        width: 2 * o,
        height: 2 * o
      }), n.setShape({
        x: 0,
        y: 0,
        width: t.getWidth(),
        height: t.getHeight()
      });
    }, a.resize(), a;
  },
      fm = Os.prototype;

  fm.restoreData = function (t, e) {
    t.restoreData(e), this._stageTaskMap.each(function (t) {
      var e = t.overallTask;
      e && e.dirty();
    });
  }, fm.getPerformArgs = function (t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
          i = n.context,
          r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
          a = r ? n.step : null,
          o = i && i.modDataCount,
          s = null != o ? Math.ceil(o / a) : null;

      return {
        step: a,
        modBy: s,
        modDataCount: o
      };
    }
  }, fm.getPipeline = function (t) {
    return this._pipelineMap.get(t);
  }, fm.updateStreamModes = function (t, e) {
    var n = this._pipelineMap.get(t.uid),
        i = t.getData(),
        r = i.count(),
        a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
        o = t.get("large") && r >= t.get("largeThreshold"),
        s = "mod" === t.get("progressiveChunkMode") ? r : null;

    t.pipelineContext = n.context = {
      progressiveRender: a,
      modDataCount: s,
      large: o
    };
  }, fm.restorePipelines = function (t) {
    var e = this,
        n = e._pipelineMap = N();
    t.eachSeries(function (t) {
      var i = t.getProgressive(),
          r = t.uid;
      n.set(r, {
        id: r,
        head: null,
        tail: null,
        threshold: t.getProgressiveThreshold(),
        progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
        blockIndex: -1,
        step: Math.round(i || 700),
        count: 0
      }), js(e, t, t.dataTask);
    });
  }, fm.prepareStageTasks = function () {
    var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        n = this.api;
    f(this._allHandlers, function (i) {
      var r = t.get(i.uid) || t.set(i.uid, []);
      i.reset && Es(this, i, r, e, n), i.overallReset && Rs(this, i, r, e, n);
    }, this);
  }, fm.prepareView = function (t, e, n, i) {
    var r = t.renderTask,
        a = r.context;
    a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, js(this, e, r);
  }, fm.performDataProcessorTasks = function (t, e) {
    Bs(this, this._dataProcessorHandlers, t, e, {
      block: !0
    });
  }, fm.performVisualTasks = function (t, e, n) {
    Bs(this, this._visualHandlers, t, e, n);
  }, fm.performSeriesTasks = function (t) {
    var e;
    t.eachSeries(function (t) {
      e |= t.dataTask.perform();
    }), this.unfinished |= e;
  }, fm.plan = function () {
    this._pipelineMap.each(function (t) {
      var e = t.tail;

      do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;
          break;
        }

        e = e.getUpstream();
      } while (e);
    });
  };

  var pm = fm.updatePayload = function (t, e) {
    "remain" !== e && (t.context.payload = e);
  },
      gm = Gs(0);

  Os.wrapStageHandler = function (t, e) {
    return w(t) && (t = {
      overallReset: t,
      seriesType: qs(t)
    }), t.uid = Oa("stageHandler"), e && (t.visualType = e), t;
  };

  var vm,
      mm = {},
      ym = {};
  Us(mm, Cv), Us(ym, Fo), mm.eachSeriesByType = mm.eachRawSeriesByType = function (t) {
    vm = t;
  }, mm.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (vm = t.subType);
  };

  var _m = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
      xm = {
    color: _m,
    colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], _m]
  },
      wm = "#eee",
      bm = function () {
    return {
      axisLine: {
        lineStyle: {
          color: wm
        }
      },
      axisTick: {
        lineStyle: {
          color: wm
        }
      },
      axisLabel: {
        textStyle: {
          color: wm
        }
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#aaa"
        }
      },
      splitArea: {
        areaStyle: {
          color: wm
        }
      }
    };
  },
      Mm = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
      Sm = {
    color: Mm,
    backgroundColor: "#333",
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: wm
        },
        crossStyle: {
          color: wm
        }
      }
    },
    legend: {
      textStyle: {
        color: wm
      }
    },
    textStyle: {
      color: wm
    },
    title: {
      textStyle: {
        color: wm
      }
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: wm
        }
      }
    },
    dataZoom: {
      textStyle: {
        color: wm
      }
    },
    visualMap: {
      textStyle: {
        color: wm
      }
    },
    timeline: {
      lineStyle: {
        color: wm
      },
      itemStyle: {
        normal: {
          color: Mm[1]
        }
      },
      label: {
        normal: {
          textStyle: {
            color: wm
          }
        }
      },
      controlStyle: {
        normal: {
          color: wm,
          borderColor: wm
        }
      }
    },
    timeAxis: bm(),
    logAxis: bm(),
    valueAxis: bm(),
    categoryAxis: bm(),
    line: {
      symbol: "circle"
    },
    graph: {
      color: Mm
    },
    gauge: {
      title: {
        textStyle: {
          color: wm
        }
      }
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: "#FD1050",
          color0: "#0CF49B",
          borderColor: "#FD1050",
          borderColor0: "#0CF49B"
        }
      }
    }
  };

  Sm.categoryAxis.splitLine.show = !1, hv.extend({
    type: "dataset",
    defaultOption: {
      seriesLayoutBy: bv,
      sourceHeader: null,
      dimensions: null,
      source: null
    },
    optionUpdated: function () {
      xo(this);
    }
  }), Qv.extend({
    type: "dataset"
  });
  var Im = O,
      Cm = f,
      Tm = w,
      Dm = M,
      km = hv.parseClassType,
      Am = "4.1.0",
      Pm = {
    zrender: "4.0.4"
  },
      Lm = 1,
      Om = 1e3,
      Bm = 5e3,
      Em = 1e3,
      Rm = 2e3,
      zm = 3e3,
      Nm = 4e3,
      Fm = 5e3,
      Hm = {
    PROCESSOR: {
      FILTER: Om,
      STATISTIC: Bm
    },
    VISUAL: {
      LAYOUT: Em,
      GLOBAL: Rm,
      CHART: zm,
      COMPONENT: Nm,
      BRUSH: Fm
    }
  },
      Vm = "__flagInMainProcess",
      Wm = "__optionUpdated",
      Gm = /^[a-zA-Z0-9_]+$/;
  Zs.prototype.on = Ys("on"), Zs.prototype.off = Ys("off"), Zs.prototype.one = Ys("one"), c(Zs, _d);
  var Xm = $s.prototype;
  Xm._onframe = function () {
    if (!this._disposed) {
      var t = this._scheduler;

      if (this[Wm]) {
        var e = this[Wm].silent;
        this[Vm] = !0, Qs(this), jm.update.call(this), this[Vm] = !1, this[Wm] = !1, nl.call(this, e), il.call(this, e);
      } else if (t.unfinished) {
        var n = Lm,
            i = this._model,
            r = this._api;
        t.unfinished = !1;

        do {
          var a = +new Date();
          t.performSeriesTasks(i), t.performDataProcessorTasks(i), tl(this, i), t.performVisualTasks(i), ul(this, this._model, r, "remain"), n -= +new Date() - a;
        } while (n > 0 && t.unfinished);

        t.unfinished || this._zr.flush();
      }
    }
  }, Xm.getDom = function () {
    return this._dom;
  }, Xm.getZr = function () {
    return this._zr;
  }, Xm.setOption = function (t, e, n) {
    var i;

    if (Dm(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[Vm] = !0, !this._model || e) {
      var r = new Vo(this._api),
          a = this._theme,
          o = this._model = new Cv(null, null, a, r);
      o.scheduler = this._scheduler, o.init(null, null, a, r);
    }

    this._model.setOption(t, $m), n ? (this[Wm] = {
      silent: i
    }, this[Vm] = !1) : (Qs(this), jm.update.call(this), this._zr.flush(), this[Wm] = !1, this[Vm] = !1, nl.call(this, i), il.call(this, i));
  }, Xm.setTheme = function () {
    console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, Xm.getModel = function () {
    return this._model;
  }, Xm.getOption = function () {
    return this._model && this._model.getOption();
  }, Xm.getWidth = function () {
    return this._zr.getWidth();
  }, Xm.getHeight = function () {
    return this._zr.getHeight();
  }, Xm.getDevicePixelRatio = function () {
    return this._zr.painter.dpr || window.devicePixelRatio || 1;
  }, Xm.getRenderedCanvas = function (t) {
    if (Kc.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
      var e = this._zr;
      return e.painter.getRenderedCanvas(t);
    }
  }, Xm.getSvgDataUrl = function () {
    if (Kc.svgSupported) {
      var t = this._zr,
          e = t.storage.getDisplayList();
      return f(e, function (t) {
        t.stopAnimation(!0);
      }), t.painter.pathToDataUrl();
    }
  }, Xm.getDataURL = function (t) {
    t = t || {};
    var e = t.excludeComponents,
        n = this._model,
        i = [],
        r = this;
    Cm(e, function (t) {
      n.eachComponent({
        mainType: t
      }, function (t) {
        var e = r._componentsMap[t.__viewId];
        e.group.ignore || (i.push(e), e.group.ignore = !0);
      });
    });
    var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
    return Cm(i, function (t) {
      t.group.ignore = !1;
    }), a;
  }, Xm.getConnectedDataURL = function (t) {
    if (Kc.canvasSupported) {
      var e = this.group,
          n = Math.min,
          r = Math.max,
          a = 1 / 0;

      if (ny[e]) {
        var o = a,
            s = a,
            l = -a,
            u = -a,
            h = [],
            c = t && t.pixelRatio || 1;
        f(ey, function (a) {
          if (a.group === e) {
            var c = a.getRenderedCanvas(i(t)),
                d = a.getDom().getBoundingClientRect();
            o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), u = r(d.bottom, u), h.push({
              dom: c,
              left: d.left,
              top: d.top
            });
          }
        }), o *= c, s *= c, l *= c, u *= c;
        var d = l - o,
            p = u - s,
            g = ld();
        g.width = d, g.height = p;
        var v = Ci(g);
        return Cm(h, function (t) {
          var e = new ai({
            style: {
              x: t.left * c - o,
              y: t.top * c - s,
              image: t.dom
            }
          });
          v.add(e);
        }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));
      }

      return this.getDataURL(t);
    }
  }, Xm.convertToPixel = _(Ks, "convertToPixel"), Xm.convertFromPixel = _(Ks, "convertFromPixel"), Xm.containPixel = function (t, e) {
    var n,
        i = this._model;
    return t = Vi(i, t), f(t, function (t, i) {
      i.indexOf("Models") >= 0 && f(t, function (t) {
        var r = t.coordinateSystem;
        if (r && r.containPoint) n |= !!r.containPoint(e);else if ("seriesModels" === i) {
          var a = this._chartsMap[t.__viewId];
          a && a.containPoint && (n |= a.containPoint(e, t));
        }
      }, this);
    }, this), !!n;
  }, Xm.getVisual = function (t, e) {
    var n = this._model;
    t = Vi(n, t, {
      defaultMainType: "series"
    });
    var i = t.seriesModel,
        r = i.getData(),
        a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
    return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
  }, Xm.getViewOfComponentModel = function (t) {
    return this._componentsMap[t.__viewId];
  }, Xm.getViewOfSeriesModel = function (t) {
    return this._chartsMap[t.__viewId];
  };
  var jm = {
    prepareAndUpdate: function (t) {
      Qs(this), jm.update.call(this, t);
    },
    update: function (t) {
      var e = this._model,
          n = this._api,
          i = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler;

      if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), tl(this, e), r.update(e, n), ol(e), a.performVisualTasks(e, t), sl(this, e, n, t);
        var o = e.get("backgroundColor") || "transparent";
        if (Kc.canvasSupported) i.setBackgroundColor(o);else {
          var s = Be(o);
          o = Ge(s, "rgb"), 0 === s[3] && (o = "transparent");
        }
        hl(e, n);
      }
    },
    updateTransform: function (t) {
      var e = this._model,
          n = this,
          i = this._api;

      if (e) {
        var r = [];
        e.eachComponent(function (a, o) {
          var s = n.getViewOfComponentModel(o);
          if (s && s.__alive) if (s.updateTransform) {
            var l = s.updateTransform(o, e, i, t);
            l && l.update && r.push(s);
          } else r.push(s);
        });
        var a = N();
        e.eachSeries(function (r) {
          var o = n._chartsMap[r.__viewId];

          if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);
            s && s.update && a.set(r.uid, 1);
          } else a.set(r.uid, 1);
        }), ol(e), this._scheduler.performVisualTasks(e, t, {
          setDirty: !0,
          dirtyMap: a
        }), ul(n, e, i, t, a), hl(e, this._api);
      }
    },
    updateView: function (t) {
      var e = this._model;
      e && (Cs.markUpdateMethod(t, "updateView"), ol(e), this._scheduler.performVisualTasks(e, t, {
        setDirty: !0
      }), sl(this, this._model, this._api, t), hl(e, this._api));
    },
    updateVisual: function (t) {
      jm.update.call(this, t);
    },
    updateLayout: function (t) {
      jm.update.call(this, t);
    }
  };
  Xm.resize = function (t) {
    this._zr.resize(t);

    var e = this._model;

    if (this._loadingFX && this._loadingFX.resize(), e) {
      var n = e.resetOption("media"),
          i = t && t.silent;
      this[Vm] = !0, n && Qs(this), jm.update.call(this), this[Vm] = !1, nl.call(this, i), il.call(this, i);
    }
  }, Xm.showLoading = function (t, e) {
    if (Dm(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), ty[t]) {
      var n = ty[t](this._api, e),
          i = this._zr;
      this._loadingFX = n, i.add(n);
    }
  }, Xm.hideLoading = function () {
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
  }, Xm.makeActionFromEvent = function (t) {
    var e = o({}, t);
    return e.type = Ym[t.type], e;
  }, Xm.dispatchAction = function (t, e) {
    if (Dm(e) || (e = {
      silent: !!e
    }), Um[t.type] && this._model) {
      if (this[Vm]) return void this._pendingActions.push(t);
      el.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Kc.browser.weChat && this._throttledZrFlush(), nl.call(this, e.silent), il.call(this, e.silent);
    }
  }, Xm.appendData = function (t) {
    var e = t.seriesIndex,
        n = this.getModel(),
        i = n.getSeriesByIndex(e);
    i.appendData(t), this._scheduler.unfinished = !0;
  }, Xm.on = Ys("on"), Xm.off = Ys("off"), Xm.one = Ys("one");
  var qm = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  Xm._initEvents = function () {
    Cm(qm, function (t) {
      this._zr.on(t, function (e) {
        var n,
            i = this.getModel(),
            r = e.target;
        if ("globalout" === t) n = {};else if (r && null != r.dataIndex) {
          var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
          n = a && a.getDataParams(r.dataIndex, r.dataType) || {};
        } else r && r.eventData && (n = o({}, r.eventData));
        n && (n.event = e, n.type = t, this.trigger(t, n));
      }, this);
    }, this), Cm(Ym, function (t, e) {
      this._messageCenter.on(e, function (t) {
        this.trigger(e, t);
      }, this);
    }, this);
  }, Xm.isDisposed = function () {
    return this._disposed;
  }, Xm.clear = function () {
    this.setOption({
      series: []
    }, !0);
  }, Xm.dispose = function () {
    if (!this._disposed) {
      this._disposed = !0, Gi(this.getDom(), ay, "");
      var t = this._api,
          e = this._model;
      Cm(this._componentsViews, function (n) {
        n.dispose(e, t);
      }), Cm(this._chartsViews, function (n) {
        n.dispose(e, t);
      }), this._zr.dispose(), delete ey[this.id];
    }
  }, c($s, _d);
  var Um = {},
      Ym = {},
      Zm = [],
      $m = [],
      Km = [],
      Qm = [],
      Jm = {},
      ty = {},
      ey = {},
      ny = {},
      iy = new Date() - 0,
      ry = new Date() - 0,
      ay = "_echarts_instance_",
      oy = {},
      sy = yl;
  Al(Rm, lm), Ml(Hv), Sl(Bm, Vv), Ll("default", dm), Cl({
    type: "highlight",
    event: "highlight",
    update: "highlight"
  }, H), Cl({
    type: "downplay",
    event: "downplay",
    update: "downplay"
  }, H), bl("light", xm), bl("dark", Sm);
  var ly = {};
  Vl.prototype = {
    constructor: Vl,
    add: function (t) {
      return this._add = t, this;
    },
    update: function (t) {
      return this._update = t, this;
    },
    remove: function (t) {
      return this._remove = t, this;
    },
    execute: function () {
      var t,
          e = this._old,
          n = this._new,
          i = {},
          r = {},
          a = [],
          o = [];

      for (Wl(e, i, a, "_oldKeyGetter", this), Wl(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
            l = r[s];

        if (null != l) {
          var u = l.length;
          u ? (1 === u && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t);
        } else this._remove && this._remove(t);
      }

      for (var t = 0; t < o.length; t++) {
        var s = o[t];

        if (r.hasOwnProperty(s)) {
          var l = r[s];
          if (null == l) continue;
          if (l.length) for (var h = 0, u = l.length; u > h; h++) this._add && this._add(l[h]);else this._add && this._add(l);
        }
      }
    }
  };

  var uy = N(["tooltip", "label", "itemName", "itemId", "seriesName"]),
      hy = M,
      cy = "undefined",
      dy = "e\x00\x00",
      fy = {
    "float": typeof Float64Array === cy ? Array : Float64Array,
    "int": typeof Int32Array === cy ? Array : Int32Array,
    ordinal: Array,
    number: Array,
    time: Array
  },
      py = typeof Uint32Array === cy ? Array : Uint32Array,
      gy = typeof Uint16Array === cy ? Array : Uint16Array,
      vy = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
      my = ["_extent", "_approximateExtent", "_rawExtent"],
      yy = function (t, e) {
    t = t || ["x", "y"];

    for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
      var o = t[a];
      b(o) && (o = {
        name: o
      });
      var s = o.name;
      o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
    }

    this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Gl(this), this._invertedIndicesMap = r, this._calculationInfo = {};
  },
      _y = yy.prototype;

  _y.type = "list", _y.hasItemOption = !0, _y.getDimension = function (t) {
    return isNaN(t) || (t = this.dimensions[t] || t), t;
  }, _y.getDimensionInfo = function (t) {
    return this._dimensionInfos[this.getDimension(t)];
  }, _y.getDimensionsOnCoord = function () {
    return this._dimensionsSummary.dataDimsOnCoord.slice();
  }, _y.mapDimension = function (t, e) {
    var n = this._dimensionsSummary;
    if (null == e) return n.encodeFirstDimNotExtra[t];
    var i = n.encode[t];
    return e === !0 ? (i || []).slice() : i && i[e];
  }, _y.initData = function (t, e, n) {
    var i = _o.isInstance(t) || d(t);
    i && (t = new as(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = jv[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
  }, _y.getProvider = function () {
    return this._rawData;
  }, _y.appendData = function (t) {
    var e = this._rawData,
        n = this.count();
    e.appendData(t);
    var i = e.count();
    e.persistent || (i += n), this._initDataFromProvider(n, i);
  }, _y._initDataFromProvider = function (t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
        var v = o[g];
        c[v] || (c[v] = iu());
        var m = l[v];
        0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
        var y = fy[m.type];
        a[v] || (a[v] = []);
        var _ = a[v][p];

        if (_ && _.length < i) {
          for (var x = new y(Math.min(e - p * i, i)), w = 0; w < _.length; w++) x[w] = _[w];

          a[v][p] = x;
        }

        for (var b = f * i; e > b; b += i) a[v].push(new y(Math.min(e - b, i)));

        this._chunkCount = a[v].length;
      }

      for (var M = new Array(s), S = t; e > S; S++) {
        M = r.getItem(S, M);

        for (var I = Math.floor(S / i), C = S % i, b = 0; s > b; b++) {
          var v = o[b],
              T = a[v][I],
              D = this._dimValueGetter(M, v, S, b);

          T[C] = D;
          var k = c[v];
          D < k[0] && (k[0] = D), D > k[1] && (k[1] = D);
        }

        if (!r.pure) {
          var A = u[S];
          if (M && null == A) if (null != M.name) u[S] = A = M.name;else if (null != n) {
            var P = o[n],
                L = a[P][I];

            if (L) {
              A = L[C];
              var O = l[P].ordinalMeta;
              O && O.categories.length && (A = O.categories[A]);
            }
          }
          var B = null == M ? null : M.id;
          null == B && null != A && (d[A] = d[A] || 0, B = A, d[A] > 0 && (B += "__ec__" + d[A]), d[A]++), null != B && (h[S] = B);
        }
      }

      !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Zl(this);
    }
  }, _y.count = function () {
    return this._count;
  }, _y.getIndices = function () {
    var t,
        e = this._indices;

    if (e) {
      var n = e.constructor,
          i = this._count;

      if (n === Array) {
        t = new n(i);

        for (var r = 0; i > r; r++) t[r] = e[r];
      } else t = new n(e.buffer, 0, i);
    } else for (var n = ql(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;

    return t;
  }, _y.get = function (t, e) {
    if (!(e >= 0 && e < this._count)) return 0 / 0;
    var n = this._storage;
    if (!n[t]) return 0 / 0;
    e = this.getRawIndex(e);
    var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[t][i],
        o = a[r];
    return o;
  }, _y.getByRawIndex = function (t, e) {
    if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
    var n = this._storage[t];
    if (!n) return 0 / 0;
    var i = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = n[i];
    return a[r];
  }, _y._getFast = function (t, e) {
    var n = Math.floor(e / this._chunkSize),
        i = e % this._chunkSize,
        r = this._storage[t][n];
    return r[i];
  }, _y.getValues = function (t, e) {
    var n = [];
    x(t) || (e = t, t = this.dimensions);

    for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));

    return n;
  }, _y.hasValue = function (t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++) if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;

    return !0;
  }, _y.getDataExtent = function (t) {
    t = this.getDimension(t);
    var e = this._storage[t],
        n = iu();
    if (!e) return n;
    var i,
        r = this.count(),
        a = !this._indices;
    if (a) return this._rawExtent[t].slice();
    if (i = this._extent[t]) return i.slice();
    i = n;

    for (var o = i[0], s = i[1], l = 0; r > l; l++) {
      var u = this._getFast(t, this.getRawIndex(l));

      o > u && (o = u), u > s && (s = u);
    }

    return i = [o, s], this._extent[t] = i, i;
  }, _y.getApproximateExtent = function (t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
  }, _y.setApproximateExtent = function (t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice();
  }, _y.getCalculationInfo = function (t) {
    return this._calculationInfo[t];
  }, _y.setCalculationInfo = function (t, e) {
    hy(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;
  }, _y.getSum = function (t) {
    var e = this._storage[t],
        n = 0;
    if (e) for (var i = 0, r = this.count(); r > i; i++) {
      var a = this.get(t, i);
      isNaN(a) || (n += a);
    }
    return n;
  }, _y.getMedian = function (t) {
    var e = [];
    this.each(t, function (t) {
      isNaN(t) || e.push(t);
    });
    var n = [].concat(e).sort(function (t, e) {
      return t - e;
    }),
        i = this.count();
    return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
  }, _y.rawIndexOf = function (t, e) {
    var n = t && this._invertedIndicesMap[t],
        i = n[e];
    return null == i || isNaN(i) ? -1 : i;
  }, _y.indexOfName = function (t) {
    for (var e = 0, n = this.count(); n > e; e++) if (this.getName(e) === t) return e;

    return -1;
  }, _y.indexOfRawIndex = function (t) {
    if (!this._indices) return t;
    if (t >= this._rawCount || 0 > t) return -1;
    var e = this._indices,
        n = e[t];
    if (null != n && n < this._count && n === t) return t;

    for (var i = 0, r = this._count - 1; r >= i;) {
      var a = (i + r) / 2 | 0;
      if (e[a] < t) i = a + 1;else {
        if (!(e[a] > t)) return a;
        r = a - 1;
      }
    }

    return -1;
  }, _y.indicesOfNearest = function (t, e, n) {
    var i = this._storage,
        r = i[t],
        a = [];
    if (!r) return a;
    null == n && (n = 1 / 0);

    for (var o = Number.MAX_VALUE, s = -1, l = 0, u = this.count(); u > l; l++) {
      var h = e - this.get(t, l),
          c = Math.abs(h);
      n >= h && o >= c && ((o > c || h >= 0 && 0 > s) && (o = c, s = h, a.length = 0), a.push(l));
    }

    return a;
  }, _y.getRawIndex = Kl, _y.getRawDataItem = function (t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));

    for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];
      e.push(this.get(i, t));
    }

    return e;
  }, _y.getName = function (t) {
    var e = this.getRawIndex(t);
    return this._nameList[e] || $l(this, this._nameDimIdx, e) || "";
  }, _y.getId = function (t) {
    return Jl(this, this.getRawIndex(t));
  }, _y.each = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(tu(t), this.getDimension, this);

      for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
        case 0:
          e.call(n, a);
          break;

        case 1:
          e.call(n, this.get(t[0], a), a);
          break;

        case 2:
          e.call(n, this.get(t[0], a), this.get(t[1], a), a);
          break;

        default:
          for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);

          s[o] = a, e.apply(n, s);
      }
    }
  }, _y.filterSelf = function (t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(tu(t), this.getDimension, this);

      for (var r = this.count(), a = ql(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
        var d,
            f = this.getRawIndex(c);
        if (0 === l) d = e.call(n, c);else if (1 === l) {
          var g = this._getFast(h, f);

          d = e.call(n, g, c);
        } else {
          for (var v = 0; l > v; v++) s[v] = this._getFast(h, f);

          s[v] = c, d = e.apply(n, s);
        }
        d && (o[u++] = f);
      }

      return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? Ql : Kl, this;
    }
  }, _y.selectRange = function (t) {
    if (this._count) {
      var e = [];

      for (var n in t) t.hasOwnProperty(n) && e.push(n);

      var i = e.length;

      if (i) {
        var r = this.count(),
            a = ql(this),
            o = new a(r),
            s = 0,
            l = e[0],
            u = t[l][0],
            h = t[l][1],
            c = !1;

        if (!this._indices) {
          var d = 0;

          if (1 === i) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
              var y = g[m];
              (y >= u && h >= y || isNaN(y)) && (o[s++] = d), d++;
            }

            c = !0;
          } else if (2 === i) {
            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
              var y = g[m],
                  M = b[m];
              (y >= u && h >= y || isNaN(y)) && (M >= x && w >= M || isNaN(M)) && (o[s++] = d), d++;
            }

            c = !0;
          }
        }

        if (!c) if (1 === i) for (var m = 0; r > m; m++) {
          var S = this.getRawIndex(m),
              y = this._getFast(l, S);

          (y >= u && h >= y || isNaN(y)) && (o[s++] = S);
        } else for (var m = 0; r > m; m++) {
          for (var I = !0, S = this.getRawIndex(m), p = 0; i > p; p++) {
            var C = e[p],
                y = this._getFast(n, S);

            (y < t[C][0] || y > t[C][1]) && (I = !1);
          }

          I && (o[s++] = this.getRawIndex(m));
        }
        return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Ql : Kl, this;
      }
    }
  }, _y.mapArray = function (t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
    var r = [];
    return this.each(t, function () {
      r.push(e && e.apply(this, arguments));
    }, n), r;
  }, _y.map = function (t, e, n, i) {
    n = n || i || this, t = p(tu(t), this.getDimension, this);
    var r = eu(this, t);
    r._indices = this._indices, r.getRawIndex = r._indices ? Ql : Kl;

    for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {
      for (var f = 0; l > f; f++) h[f] = this.get(t[f], d);

      h[l] = d;
      var g = e && e.apply(n, h);

      if (null != g) {
        "object" != typeof g && (o[0] = g, g = o);

        for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
              w = g[_],
              b = c[x],
              M = a[x];
          M && (M[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
        }
      }
    }

    return r;
  }, _y.downSample = function (t, e, n, i) {
    for (var r = eu(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new (ql(this))(u), f = 0, p = 0; u > p; p += s) {
      s > u - p && (s = u - p, o.length = s);

      for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
            m = Math.floor(v / h),
            y = v % h;
        o[g] = l[m][y];
      }

      var _ = n(o),
          x = this.getRawIndex(Math.min(p + i(o, _) || 0, u - 1)),
          w = Math.floor(x / h),
          b = x % h;

      l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
    }

    return r._count = f, r._indices = d, r.getRawIndex = Ql, r;
  }, _y.getItemModel = function (t) {
    var e = this.hostModel;
    return new Aa(this.getRawDataItem(t), e, e && e.ecModel);
  }, _y.diff = function (t) {
    var e = this;
    return new Vl(t ? t.getIndices() : [], this.getIndices(), function (e) {
      return Jl(t, e);
    }, function (t) {
      return Jl(e, t);
    });
  }, _y.getVisual = function (t) {
    var e = this._visual;
    return e && e[t];
  }, _y.setVisual = function (t, e) {
    if (hy(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);else this._visual = this._visual || {}, this._visual[t] = e;
  }, _y.setLayout = function (t, e) {
    if (hy(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);else this._layout[t] = e;
  }, _y.getLayout = function (t) {
    return this._layout[t];
  }, _y.getItemLayout = function (t) {
    return this._itemLayouts[t];
  }, _y.setItemLayout = function (t, e, n) {
    this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e;
  }, _y.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  }, _y.getItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t],
        r = i && i[e];
    return null != r || n ? r : this.getVisual(e);
  }, _y.setItemVisual = function (t, e, n) {
    var i = this._itemVisuals[t] || {},
        r = this.hasItemVisual;
    if (this._itemVisuals[t] = i, hy(e)) for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);else i[e] = n, r[e] = !0;
  }, _y.clearAllVisual = function () {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
  };

  var xy = function (t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
  };

  _y.setItemGraphicEl = function (t, e) {
    var n = this.hostModel;
    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(xy, e)), this._graphicEls[t] = e;
  }, _y.getItemGraphicEl = function (t) {
    return this._graphicEls[t];
  }, _y.eachItemGraphicEl = function (t, e) {
    f(this._graphicEls, function (n, i) {
      n && t && t.call(e, n, i);
    });
  }, _y.cloneShallow = function (t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);
      t = new yy(e, this.hostModel);
    }

    if (t._storage = this._storage, Yl(t, this), this._indices) {
      var n = this._indices.constructor;
      t._indices = new n(this._indices);
    } else t._indices = null;

    return t.getRawIndex = t._indices ? Ql : Kl, t;
  }, _y.wrapMethod = function (t, e) {
    var n = this[t];
    "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
      var t = n.apply(this, arguments);
      return e.apply(this, [t].concat(P(arguments)));
    });
  }, _y.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], _y.CHANGABLE_METHODS = ["filterSelf", "selectRange"];

  var wy = function (t, e) {
    return e = e || {}, ru(e.coordDimensions || [], t, {
      dimsDef: e.dimensionsDefine || t.dimensionsDefine,
      encodeDef: e.encodeDefine || t.encodeDefine,
      dimCount: e.dimensionsCount,
      generateCoord: e.generateCoord,
      generateCoordCount: e.generateCoordCount
    });
  };

  fu.prototype.parse = function (t) {
    return t;
  }, fu.prototype.getSetting = function (t) {
    return this._setting[t];
  }, fu.prototype.contain = function (t) {
    var e = this._extent;
    return t >= e[0] && t <= e[1];
  }, fu.prototype.normalize = function (t) {
    var e = this._extent;
    return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
  }, fu.prototype.scale = function (t) {
    var e = this._extent;
    return t * (e[1] - e[0]) + e[0];
  }, fu.prototype.unionExtent = function (t) {
    var e = this._extent;
    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
  }, fu.prototype.unionExtentFromData = function (t, e) {
    this.unionExtent(t.getApproximateExtent(e));
  }, fu.prototype.getExtent = function () {
    return this._extent.slice();
  }, fu.prototype.setExtent = function (t, e) {
    var n = this._extent;
    isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
  }, fu.prototype.isBlank = function () {
    return this._isBlank;
  }, fu.prototype.setBlank = function (t) {
    this._isBlank = t;
  }, fu.prototype.getLabel = null, Ui(fu), Ki(fu, {
    registerWhenExtend: !0
  }), pu.createByAxisModel = function (t) {
    var e = t.option,
        n = e.data,
        i = n && p(n, vu);
    return new pu({
      categories: i,
      needCollect: !i,
      deduplication: e.dedplication !== !1
    });
  };
  var by = pu.prototype;
  by.getOrdinal = function (t) {
    return gu(this).get(t);
  }, by.parseAndCollect = function (t) {
    var e,
        n = this._needCollect;
    if ("string" != typeof t && !n) return t;
    if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
    var i = gu(this);
    return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e;
  };
  var My = fu.prototype,
      Sy = fu.extend({
    type: "ordinal",
    init: function (t, e) {
      (!t || x(t)) && (t = new pu({
        categories: t
      })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
    },
    parse: function (t) {
      return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
    },
    contain: function (t) {
      return t = this.parse(t), My.contain.call(this, t) && null != this._ordinalMeta.categories[t];
    },
    normalize: function (t) {
      return My.normalize.call(this, this.parse(t));
    },
    scale: function (t) {
      return Math.round(My.scale.call(this, t));
    },
    getTicks: function () {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;

      return t;
    },
    getLabel: function (t) {
      return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
    },
    count: function () {
      return this._extent[1] - this._extent[0] + 1;
    },
    unionExtentFromData: function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    },
    getOrdinalMeta: function () {
      return this._ordinalMeta;
    },
    niceTicks: H,
    niceExtent: H
  });

  Sy.create = function () {
    return new Sy();
  };

  var Iy = Fa,
      Cy = Fa,
      Ty = fu.extend({
    type: "interval",
    _interval: 0,
    _intervalPrecision: 2,
    setExtent: function (t, e) {
      var n = this._extent;
      isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
    },
    unionExtent: function (t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Ty.prototype.setExtent.call(this, e[0], e[1]);
    },
    getInterval: function () {
      return this._interval;
    },
    setInterval: function (t) {
      this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = yu(t);
    },
    getTicks: function () {
      return wu(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
    },
    getLabel: function (t, e) {
      if (null == t) return "";
      var n = e && e.precision;
      return null == n ? n = Wa(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = Cy(t, n, !0), to(t);
    },
    niceTicks: function (t, e, n) {
      t = t || 5;
      var i = this._extent,
          r = i[1] - i[0];

      if (isFinite(r)) {
        0 > r && (r = -r, i.reverse());
        var a = mu(i, t, e, n);
        this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
      }
    },
    niceExtent: function (t) {
      var e = this._extent;
      if (e[0] === e[1]) if (0 !== e[0]) {
        var n = e[0];
        t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);
      } else e[1] = 1;
      var i = e[1] - e[0];
      isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
      var r = this._interval;
      t.fixMin || (e[0] = Cy(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Cy(Math.ceil(e[1] / r) * r));
    }
  });

  Ty.create = function () {
    return new Ty();
  };

  var Dy = "__ec_stack_",
      ky = .5,
      Ay = "undefined" != typeof Float32Array ? Float32Array : Array,
      Py = ({
    seriesType: "bar",
    plan: tm(),
    reset: function (t) {
      function e(t, e) {
        for (var n, c = new Ay(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[u] = e.get(o, n), f[1 - u] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];

        e.setLayout({
          largePoints: c,
          barWidth: h,
          valueAxisStart: Au(r, a, !1),
          valueAxisHorizontal: l
        });
      }

      if (Du(t) && ku(t)) {
        var n = t.getData(),
            i = t.coordinateSystem,
            r = i.getBaseAxis(),
            a = i.getOtherAxis(r),
            o = n.mapDimension(a.dim),
            s = n.mapDimension(r.dim),
            l = a.isHorizontal(),
            u = l ? 0 : 1,
            h = Tu(Iu([t]), r, t).width;
        return h > ky || (h = ky), {
          progress: e
        };
      }
    }
  }, Ty.prototype),
      Ly = Math.ceil,
      Oy = Math.floor,
      By = 1e3,
      Ey = 60 * By,
      Ry = 60 * Ey,
      zy = 24 * Ry,
      Ny = function (t, e, n, i) {
    for (; i > n;) {
      var r = n + i >>> 1;
      t[r][1] < e ? n = r + 1 : i = r;
    }

    return n;
  },
      Fy = Ty.extend({
    type: "time",
    getLabel: function (t) {
      var e = this._stepLvl,
          n = new Date(t);
      return so(e[0], n, this.getSetting("useUTC"));
    },
    niceExtent: function (t) {
      var e = this._extent;

      if (e[0] === e[1] && (e[0] -= zy, e[1] += zy), e[1] === -1 / 0 && 1 / 0 === e[0]) {
        var n = new Date();
        e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - zy;
      }

      this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
      var i = this._interval;
      t.fixMin || (e[0] = Fa(Oy(e[0] / i) * i)), t.fixMax || (e[1] = Fa(Ly(e[1] / i) * i));
    },
    niceTicks: function (t, e, n) {
      t = t || 10;
      var i = this._extent,
          r = i[1] - i[0],
          a = r / t;
      null != e && e > a && (a = e), null != n && a > n && (a = n);
      var o = Hy.length,
          s = Ny(Hy, a, 0, o),
          l = Hy[Math.min(s, o - 1)],
          u = l[1];

      if ("year" === l[0]) {
        var h = r / u,
            c = $a(h / t, !0);
        u *= c;
      }

      var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          f = [Math.round(Ly((i[0] - d) / u) * u + d), Math.round(Oy((i[1] - d) / u) * u + d)];
      xu(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f;
    },
    parse: function (t) {
      return +Ua(t);
    }
  });

  f(["contain", "normalize"], function (t) {
    Fy.prototype[t] = function (e) {
      return Py[t].call(this, this.parse(e));
    };
  });
  var Hy = [["hh:mm:ss", By], ["hh:mm:ss", 5 * By], ["hh:mm:ss", 10 * By], ["hh:mm:ss", 15 * By], ["hh:mm:ss", 30 * By], ["hh:mm\nMM-dd", Ey], ["hh:mm\nMM-dd", 5 * Ey], ["hh:mm\nMM-dd", 10 * Ey], ["hh:mm\nMM-dd", 15 * Ey], ["hh:mm\nMM-dd", 30 * Ey], ["hh:mm\nMM-dd", Ry], ["hh:mm\nMM-dd", 2 * Ry], ["hh:mm\nMM-dd", 6 * Ry], ["hh:mm\nMM-dd", 12 * Ry], ["MM-dd\nyyyy", zy], ["MM-dd\nyyyy", 2 * zy], ["MM-dd\nyyyy", 3 * zy], ["MM-dd\nyyyy", 4 * zy], ["MM-dd\nyyyy", 5 * zy], ["MM-dd\nyyyy", 6 * zy], ["week", 7 * zy], ["MM-dd\nyyyy", 10 * zy], ["week", 14 * zy], ["week", 21 * zy], ["month", 31 * zy], ["week", 42 * zy], ["month", 62 * zy], ["week", 42 * zy], ["quarter", 380 * zy / 4], ["month", 31 * zy * 4], ["month", 31 * zy * 5], ["half-year", 380 * zy / 2], ["month", 31 * zy * 8], ["month", 31 * zy * 10], ["year", 380 * zy]];

  Fy.create = function (t) {
    return new Fy({
      useUTC: t.ecModel.get("useUTC")
    });
  };

  var Vy = fu.prototype,
      Wy = Ty.prototype,
      Gy = Wa,
      Xy = Fa,
      jy = Math.floor,
      qy = Math.ceil,
      Uy = Math.pow,
      Yy = Math.log,
      Zy = fu.extend({
    type: "log",
    base: 10,
    $constructor: function () {
      fu.apply(this, arguments), this._originalScale = new Ty();
    },
    getTicks: function () {
      var t = this._originalScale,
          e = this._extent,
          n = t.getExtent();
      return p(Wy.getTicks.call(this), function (i) {
        var r = Fa(Uy(this.base, i));
        return r = i === e[0] && t.__fixMin ? Pu(r, n[0]) : r, r = i === e[1] && t.__fixMax ? Pu(r, n[1]) : r;
      }, this);
    },
    getLabel: Wy.getLabel,
    scale: function (t) {
      return t = Vy.scale.call(this, t), Uy(this.base, t);
    },
    setExtent: function (t, e) {
      var n = this.base;
      t = Yy(t) / Yy(n), e = Yy(e) / Yy(n), Wy.setExtent.call(this, t, e);
    },
    getExtent: function () {
      var t = this.base,
          e = Vy.getExtent.call(this);
      e[0] = Uy(t, e[0]), e[1] = Uy(t, e[1]);
      var n = this._originalScale,
          i = n.getExtent();
      return n.__fixMin && (e[0] = Pu(e[0], i[0])), n.__fixMax && (e[1] = Pu(e[1], i[1])), e;
    },
    unionExtent: function (t) {
      this._originalScale.unionExtent(t);

      var e = this.base;
      t[0] = Yy(t[0]) / Yy(e), t[1] = Yy(t[1]) / Yy(e), Vy.unionExtent.call(this, t);
    },
    unionExtentFromData: function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    },
    niceTicks: function (t) {
      t = t || 10;
      var e = this._extent,
          n = e[1] - e[0];

      if (!(1 / 0 === n || 0 >= n)) {
        var i = Ya(n),
            r = t / n * i;

        for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;

        var a = [Fa(qy(e[0] / i) * i), Fa(jy(e[1] / i) * i)];
        this._interval = i, this._niceExtent = a;
      }
    },
    niceExtent: function (t) {
      Wy.niceExtent.call(this, t);
      var e = this._originalScale;
      e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
    }
  });
  f(["contain", "normalize"], function (t) {
    Zy.prototype[t] = function (e) {
      return e = Yy(e) / Yy(this.base), Vy[t].call(this, e);
    };
  }), Zy.create = function () {
    return new Zy();
  };
  var $y = {
    getMin: function (t) {
      var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;
      return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
    },
    getMax: function (t) {
      var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
      return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), n;
    },
    getNeedCrossZero: function () {
      var t = this.option;
      return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale;
    },
    getCoordSysModel: H,
    setRange: function (t, e) {
      this.option.rangeStart = t, this.option.rangeEnd = e;
    },
    resetRange: function () {
      this.option.rangeStart = this.option.rangeEnd = null;
    }
  },
      Ky = Wr({
    type: "triangle",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
      t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
    }
  }),
      Qy = Wr({
    type: "diamond",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function (t, e) {
      var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
      t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath();
    }
  }),
      Jy = Wr({
    type: "pin",
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function (t, e) {
      var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          u = Math.asin(s / o),
          h = Math.cos(u) * o,
          c = Math.sin(u),
          d = Math.cos(u),
          f = .6 * o,
          p = .7 * o;
      t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath();
    }
  }),
      t_ = Wr({
    type: "arrow",
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function (t, e) {
      var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;
      t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath();
    }
  }),
      e_ = {
    line: Sg,
    rect: Mg,
    roundRect: Mg,
    square: Mg,
    circle: pg,
    diamond: Qy,
    pin: Jy,
    arrow: t_,
    triangle: Ky
  },
      n_ = {
    line: function (t, e, n, i, r) {
      r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
    },
    rect: function (t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i;
    },
    roundRect: function (t, e, n, i, r) {
      r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
    },
    square: function (t, e, n, i, r) {
      var a = Math.min(n, i);
      r.x = t, r.y = e, r.width = a, r.height = a;
    },
    circle: function (t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
    },
    diamond: function (t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    },
    pin: function (t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    },
    arrow: function (t, e, n, i, r) {
      r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
    },
    triangle: function (t, e, n, i, r) {
      r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
    }
  },
      i_ = {};
  f(e_, function (t, e) {
    i_[e] = new t();
  });
  var r_ = Wr({
    type: "symbol",
    shape: {
      symbolType: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    beforeBrush: function () {
      var t = this.style,
          e = this.shape;
      "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle");
    },
    buildPath: function (t, e, n) {
      var i = e.symbolType,
          r = i_[i];
      "none" !== e.symbolType && (r || (i = "rect", r = i_[i]), n_[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n));
    }
  }),
      a_ = {
    isDimensionStacked: lu,
    enableDataStack: su,
    getStackedDimension: uu
  },
      o_ = (Object.freeze || Object)({
    createList: Gu,
    getLayoutRect: ho,
    dataStack: a_,
    createScale: Xu,
    mixinAxisModelCommonMethods: ju,
    completeDimensions: ru,
    createDimensions: wy,
    createSymbol: Wu
  }),
      s_ = 1e-8;
  Yu.prototype = {
    constructor: Yu,
    properties: null,
    getBoundingRect: function () {
      var t = this._rect;
      if (t) return t;

      for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) if ("polygon" === o[s].type) {
        var l = o[s].exterior;
        dr(l, r, a), oe(n, n, r), se(i, i, a);
      }

      return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new rn(n[0], n[1], i[0] - n[0], i[1] - n[1]);
    },
    contain: function (t) {
      var e = this.getBoundingRect(),
          n = this.geometries;
      if (!e.contain(t[0], t[1])) return !1;

      t: for (var i = 0, r = n.length; r > i; i++) if ("polygon" === n[i].type) {
        var a = n[i].exterior,
            o = n[i].interiors;

        if (Uu(a, t[0], t[1])) {
          for (var s = 0; s < (o ? o.length : 0); s++) if (Uu(o[s])) continue t;

          return !0;
        }
      }

      return !1;
    },
    transformTo: function (t, e, n, i) {
      var r = this.getBoundingRect(),
          a = r.width / r.height;
      n ? i || (i = n / a) : n = a * i;

      for (var o = new rn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
        for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) ae(h[d], h[d], s);

        for (var f = 0; f < (c ? c.length : 0); f++) for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s);
      }

      r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2];
    }
  };

  var l_ = function (t) {
    return Zu(t), p(v(t.features, function (t) {
      return t.geometry && t.properties && t.geometry.coordinates.length > 0;
    }), function (t) {
      var e = t.properties,
          n = t.geometry,
          i = n.coordinates,
          r = [];
      "Polygon" === n.type && r.push({
        type: "polygon",
        exterior: i[0],
        interiors: i.slice(1)
      }), "MultiPolygon" === n.type && f(i, function (t) {
        t[0] && r.push({
          type: "polygon",
          exterior: t[0],
          interiors: t.slice(1)
        });
      });
      var a = new Yu(e.name, r, e.cp);
      return a.properties = e, a;
    });
  },
      u_ = Hi(),
      h_ = [0, 1],
      c_ = function (t, e, n) {
    this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1;
  };

  c_.prototype = {
    constructor: c_,
    contain: function (t) {
      var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1]);
      return t >= n && i >= t;
    },
    containData: function (t) {
      return this.contain(this.dataToCoord(t));
    },
    getExtent: function () {
      return this._extent.slice();
    },
    getPixelPrecision: function (t) {
      return Ga(t || this.scale.getExtent(), this._extent);
    },
    setExtent: function (t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e;
    },
    dataToCoord: function (t, e) {
      var n = this._extent,
          i = this.scale;
      return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), dh(n, i.count())), za(t, h_, n, e);
    },
    coordToData: function (t, e) {
      var n = this._extent,
          i = this.scale;
      this.onBand && "ordinal" === i.type && (n = n.slice(), dh(n, i.count()));
      var r = za(t, n, h_, e);
      return this.scale.scale(r);
    },
    pointToData: function () {},
    getTicksCoords: function (t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(),
          n = Qu(this, e),
          i = n.ticks,
          r = p(i, function (t) {
        return {
          coord: this.dataToCoord(t),
          tickValue: t
        };
      }, this),
          a = e.get("alignWithLabel");
      return fh(this, r, n.tickCategoryInterval, a, t.clamp), r;
    },
    getViewLabels: function () {
      return Ku(this).labels;
    },
    getLabelModel: function () {
      return this.model.getModel("axisLabel");
    },
    getTickModel: function () {
      return this.model.getModel("axisTick");
    },
    getBandWidth: function () {
      var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0);
      0 === n && (n = 1);
      var i = Math.abs(t[1] - t[0]);
      return Math.abs(i) / n;
    },
    isHorizontal: null,
    getRotate: null,
    calculateCategoryInterval: function () {
      return sh(this);
    }
  };
  var d_ = l_,
      f_ = {};
  f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
    f_[t] = cd[t];
  });

  var p_ = function (t, e, n) {
    e = x(e) && {
      coordDimensions: e
    } || o({}, e);
    var i = t.getSource(),
        r = wy(i, e),
        a = new yy(r, t);
    return a.initData(i, n), a;
  },
      g_ = {
    updateSelectedMap: function (t) {
      this._targetList = x(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function (t, e) {
        return t.set(e.name, e), t;
      }, N());
    },
    select: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
          i = this.get("selectedMode");
      "single" === i && this._selectTargetMap.each(function (t) {
        t.selected = !1;
      }), n && (n.selected = !0);
    },
    unSelect: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
      n && (n.selected = !1);
    },
    toggleSelected: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
      return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0;
    },
    isSelected: function (t, e) {
      var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
      return n && n.selected;
    }
  },
      v_ = El({
    type: "series.pie",
    init: function (t) {
      v_.superApply(this, "init", arguments), this.legendDataProvider = function () {
        return this.getRawData();
      }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t);
    },
    mergeOption: function (t) {
      v_.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());
    },
    getInitialData: function () {
      return p_(this, ["value"]);
    },
    _createSelectableList: function () {
      for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) n.push({
        name: t.getName(i),
        value: t.get(e, i),
        selected: fs(t, i, "selected")
      });

      return n;
    },
    getDataParams: function (t) {
      var e = this.getData(),
          n = v_.superCall(this, "getDataParams", t),
          i = [];
      return e.each(e.mapDimension("value"), function (t) {
        i.push(t);
      }), n.percent = Xa(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n;
    },
    _defaultLabelLine: function (t) {
      Li(t, "labelLine", ["show"]);
      var e = t.labelLine,
          n = t.emphasis.labelLine;
      e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show;
    },
    defaultOption: {
      zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      hoverAnimation: !0,
      center: ["50%", "50%"],
      radius: [0, "75%"],
      clockwise: !0,
      startAngle: 90,
      minAngle: 0,
      selectedOffset: 10,
      hoverOffset: 10,
      avoidLabelOverlap: !0,
      percentPrecision: 2,
      stillShowZeroSum: !0,
      label: {
        rotate: !1,
        show: !0,
        position: "outer"
      },
      labelLine: {
        show: !0,
        length: 15,
        length2: 15,
        smooth: !1,
        lineStyle: {
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1
      },
      animationType: "expansion",
      animationEasing: "cubicOut"
    }
  });

  c(v_, g_);
  var m_ = vh.prototype;
  m_.updateData = function (t, e, n) {
    function i() {
      a.stopAnimation(!0), a.animateTo({
        shape: {
          r: h.r + l.get("hoverOffset")
        }
      }, 300, "elasticOut");
    }

    function r() {
      a.stopAnimation(!0), a.animateTo({
        shape: {
          r: h.r
        }
      }, 300, "elasticOut");
    }

    var a = this.childAt(0),
        l = t.hostModel,
        u = t.getItemModel(e),
        h = t.getItemLayout(e),
        c = o({}, h);

    if (c.label = null, n) {
      a.setShape(c);
      var d = l.getShallow("animationType");
      "scale" === d ? (a.shape.r = h.r0, ba(a, {
        shape: {
          r: h.r
        }
      }, l, e)) : (a.shape.endAngle = h.startAngle, wa(a, {
        shape: {
          endAngle: h.endAngle
        }
      }, l, e));
    } else wa(a, {
      shape: c
    }, l, e);

    var f = t.getItemVisual(e, "color");
    a.useStyle(s({
      lineJoin: "bevel",
      fill: f
    }, u.getModel("itemStyle").getItemStyle())), a.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
    var p = u.getShallow("cursor");
    p && a.attr("cursor", p), gh(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), ua(this);
  }, m_._updateLabel = function (t, e) {
    var n = this.childAt(1),
        i = this.childAt(2),
        r = t.hostModel,
        a = t.getItemModel(e),
        o = t.getItemLayout(e),
        s = o.label,
        l = t.getItemVisual(e, "color");
    wa(n, {
      shape: {
        points: s.linePoints || [[s.x, s.y], [s.x, s.y], [s.x, s.y]]
      }
    }, r, e), wa(i, {
      style: {
        x: s.x,
        y: s.y
      }
    }, r, e), i.attr({
      rotation: s.rotation,
      origin: [s.x, s.y],
      z2: 10
    });
    var u = a.getModel("label"),
        h = a.getModel("emphasis.label"),
        c = a.getModel("labelLine"),
        d = a.getModel("emphasis.labelLine"),
        l = t.getItemVisual(e, "color");
    ha(i.style, i.hoverStyle = {}, u, h, {
      labelFetcher: t.hostModel,
      labelDataIndex: e,
      defaultText: t.getName(e),
      autoColor: l,
      useInsideStyle: !!s.inside
    }, {
      textAlign: s.textAlign,
      textVerticalAlign: s.verticalAlign,
      opacity: t.getItemVisual(e, "opacity")
    }), i.ignore = i.normalIgnore = !u.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), n.setStyle({
      stroke: l,
      opacity: t.getItemVisual(e, "opacity")
    }), n.setStyle(c.getModel("lineStyle").getLineStyle()), n.hoverStyle = d.getModel("lineStyle").getLineStyle();
    var f = c.get("smooth");
    f && f === !0 && (f = .4), n.setShape({
      smooth: f
    });
  }, h(vh, tf);

  var y_ = (Cs.extend({
    type: "pie",
    init: function () {
      var t = new tf();
      this._sectorGroup = t;
    },
    render: function (t, e, n, i) {
      if (!i || i.from !== this.uid) {
        var r = t.getData(),
            a = this._data,
            o = this.group,
            s = e.get("animation"),
            l = !a,
            u = t.get("animationType"),
            h = _(ph, this.uid, t, s, n),
            c = t.get("selectedMode");

        if (r.diff(a).add(function (t) {
          var e = new vh(r, t);
          l && "scale" !== u && e.eachChild(function (t) {
            t.stopAnimation(!0);
          }), c && e.on("click", h), r.setItemGraphicEl(t, e), o.add(e);
        }).update(function (t, e) {
          var n = a.getItemGraphicEl(e);
          n.updateData(r, t), n.off("click"), c && n.on("click", h), o.add(n), r.setItemGraphicEl(t, n);
        }).remove(function (t) {
          var e = a.getItemGraphicEl(t);
          o.remove(e);
        }).execute(), s && l && r.count() > 0 && "scale" !== u) {
          var d = r.getItemLayout(0),
              f = Math.max(n.getWidth(), n.getHeight()) / 2,
              p = y(o.removeClipPath, o);
          o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t));
        }

        this._data = r;
      }
    },
    dispose: function () {},
    _createClipPath: function (t, e, n, i, r, a, o) {
      var s = new mg({
        shape: {
          cx: t,
          cy: e,
          r0: 0,
          r: n,
          startAngle: i,
          endAngle: i,
          clockwise: r
        }
      });
      return ba(s, {
        shape: {
          endAngle: i + (r ? 1 : -1) * Math.PI * 2
        }
      }, o, a), s;
    },
    containPoint: function (t, e) {
      var n = e.getData(),
          i = n.getItemLayout(0);

      if (i) {
        var r = t[0] - i.cx,
            a = t[1] - i.cy,
            o = Math.sqrt(r * r + a * a);
        return o <= i.r && o >= i.r0;
      }
    }
  }), function (t, e) {
    f(e, function (e) {
      e.update = "updateView", Cl(e, function (n, i) {
        var r = {};
        return i.eachComponent({
          mainType: "series",
          subType: t,
          query: n
        }, function (t) {
          t[e.method] && t[e.method](n.name, n.dataIndex);
          var i = t.getData();
          i.each(function (e) {
            var n = i.getName(e);
            r[n] = t.isSelected(n) || !1;
          });
        }), {
          name: n.name,
          selected: r
        };
      });
    });
  }),
      __ = function (t) {
    return {
      getTargetSeries: function (e) {
        var n = {},
            i = N();
        return e.eachSeriesByType(t, function (t) {
          t.__paletteScope = n, i.set(t.uid, t);
        }), i;
      },
      reset: function (t) {
        var e = t.getRawData(),
            n = {},
            i = t.getData();
        i.each(function (t) {
          var e = i.getRawIndex(t);
          n[e] = t;
        }), e.each(function (r) {
          var a = n[r],
              o = null != a && i.getItemVisual(a, "color", !0);
          if (o) e.setItemVisual(r, "color", o);else {
            var s = e.getItemModel(r),
                l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
            e.setItemVisual(r, "color", l), null != a && i.setItemVisual(a, "color", l);
          }
        });
      }
    };
  },
      x_ = function (t, e, n, i) {
    var r,
        a,
        o = t.getData(),
        s = [],
        l = !1;
    o.each(function (n) {
      var i,
          u,
          h,
          c,
          d = o.getItemLayout(n),
          f = o.getItemModel(n),
          p = f.getModel("label"),
          g = p.get("position") || f.get("emphasis.label.position"),
          v = f.getModel("labelLine"),
          m = v.get("length"),
          y = v.get("length2"),
          _ = (d.startAngle + d.endAngle) / 2,
          x = Math.cos(_),
          w = Math.sin(_);

      r = d.cx, a = d.cy;
      var b = "inside" === g || "inner" === g;
      if ("center" === g) i = d.cx, u = d.cy, c = "center";else {
        var M = (b ? (d.r + d.r0) / 2 * x : d.r * x) + r,
            S = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;

        if (i = M + 3 * x, u = S + 3 * w, !b) {
          var I = M + x * (m + e - d.r),
              C = S + w * (m + e - d.r),
              T = I + (0 > x ? -1 : 1) * y,
              D = C;
          i = T + (0 > x ? -5 : 5), u = D, h = [[M, S], [I, C], [T, D]];
        }

        c = b ? "center" : x > 0 ? "left" : "right";
      }
      var k = p.getFont(),
          A = p.get("rotate") ? 0 > x ? -_ + Math.PI : -_ : 0,
          P = t.getFormattedLabel(n, "normal") || o.getName(n),
          L = Mn(P, k, c, "top");
      l = !!A, d.label = {
        x: i,
        y: u,
        position: g,
        height: L.height,
        len: m,
        len2: y,
        linePoints: h,
        textAlign: c,
        verticalAlign: "middle",
        rotation: A,
        inside: b
      }, b || s.push(d.label);
    }), !l && t.get("avoidLabelOverlap") && yh(s, r, a, e, n, i);
  },
      w_ = 2 * Math.PI,
      b_ = Math.PI / 180,
      M_ = function (t, e, n) {
    e.eachSeriesByType(t, function (t) {
      var e = t.getData(),
          i = e.mapDimension("value"),
          r = t.get("center"),
          a = t.get("radius");
      x(a) || (a = [0, a]), x(r) || (r = [r, r]);
      var o = n.getWidth(),
          s = n.getHeight(),
          l = Math.min(o, s),
          u = Na(r[0], o),
          h = Na(r[1], s),
          c = Na(a[0], l / 2),
          d = Na(a[1], l / 2),
          f = -t.get("startAngle") * b_,
          p = t.get("minAngle") * b_,
          g = 0;
      e.each(i, function (t) {
        !isNaN(t) && g++;
      });

      var v = e.getSum(i),
          m = Math.PI / (v || g) * 2,
          y = t.get("clockwise"),
          _ = t.get("roseType"),
          w = t.get("stillShowZeroSum"),
          b = e.getDataExtent(i);

      b[0] = 0;
      var M = w_,
          S = 0,
          I = f,
          C = y ? 1 : -1;
      if (e.each(i, function (t, n) {
        var i;
        if (isNaN(t)) return void e.setItemLayout(n, {
          angle: 0 / 0,
          startAngle: 0 / 0,
          endAngle: 0 / 0,
          clockwise: y,
          cx: u,
          cy: h,
          r0: c,
          r: _ ? 0 / 0 : d
        });
        i = "area" !== _ ? 0 === v && w ? m : t * m : w_ / g, p > i ? (i = p, M -= p) : S += t;
        var r = I + C * i;
        e.setItemLayout(n, {
          angle: i,
          startAngle: I,
          endAngle: r,
          clockwise: y,
          cx: u,
          cy: h,
          r0: c,
          r: _ ? za(t, b, [c, d]) : d
        }), I = r;
      }), w_ > M && g) if (.001 >= M) {
        var T = w_ / g;
        e.each(i, function (t, n) {
          if (!isNaN(t)) {
            var i = e.getItemLayout(n);
            i.angle = T, i.startAngle = f + C * n * T, i.endAngle = f + C * (n + 1) * T;
          }
        });
      } else m = M / S, I = f, e.each(i, function (t, n) {
        if (!isNaN(t)) {
          var i = e.getItemLayout(n),
              r = i.angle === p ? p : t * m;
          i.startAngle = I, i.endAngle = I + C * r, I += C * r;
        }
      });
      x_(t, d, o, s);
    });
  },
      S_ = function (t) {
    return {
      seriesType: t,
      reset: function (t, e) {
        var n = e.findComponents({
          mainType: "legend"
        });

        if (n && n.length) {
          var i = t.getData();
          i.filterSelf(function (t) {
            for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;

            return !0;
          });
        }
      }
    };
  };

  y_("pie", [{
    type: "pieToggleSelect",
    event: "pieselectchanged",
    method: "toggleSelected"
  }, {
    type: "pieSelect",
    event: "pieselected",
    method: "select"
  }, {
    type: "pieUnSelect",
    event: "pieunselected",
    method: "unSelect"
  }]), Al(__("pie")), kl(_(M_, "pie")), Sl(S_("pie"));

  var I_ = function (t) {
    this._axes = {}, this._dimList = [], this.name = t || "";
  };

  I_.prototype = {
    constructor: I_,
    type: "cartesian",
    getAxis: function (t) {
      return this._axes[t];
    },
    getAxes: function () {
      return p(this._dimList, _h, this);
    },
    getAxesByScale: function (t) {
      return t = t.toLowerCase(), v(this.getAxes(), function (e) {
        return e.scale.type === t;
      });
    },
    addAxis: function (t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    },
    dataToCoord: function (t) {
      return this._dataCoordConvert(t, "dataToCoord");
    },
    coordToData: function (t) {
      return this._dataCoordConvert(t, "coordToData");
    },
    _dataCoordConvert: function (t, e) {
      for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
        var a = n[r],
            o = this._axes[a];
        i[a] = o[e](t[a]);
      }

      return i;
    }
  }, xh.prototype = {
    constructor: xh,
    type: "cartesian2d",
    dimensions: ["x", "y"],
    getBaseAxis: function () {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    },
    containPoint: function (t) {
      var e = this.getAxis("x"),
          n = this.getAxis("y");
      return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
    },
    containData: function (t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
    },
    dataToPoint: function (t, e, n) {
      var i = this.getAxis("x"),
          r = this.getAxis("y");
      return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n;
    },
    clampData: function (t, e) {
      var n = this.getAxis("x").scale,
          i = this.getAxis("y").scale,
          r = n.getExtent(),
          a = i.getExtent(),
          o = n.parse(t[0]),
          s = i.parse(t[1]);
      return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
    },
    pointToData: function (t, e) {
      var n = this.getAxis("x"),
          i = this.getAxis("y");
      return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e;
    },
    getOtherAxis: function (t) {
      return this.getAxis("x" === t.dim ? "y" : "x");
    }
  }, h(xh, I_);

  var C_ = function (t, e, n, i, r) {
    c_.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";
  };

  C_.prototype = {
    constructor: C_,
    index: 0,
    getAxesOnZeroOf: null,
    model: null,
    isHorizontal: function () {
      var t = this.position;
      return "top" === t || "bottom" === t;
    },
    getGlobalExtent: function (t) {
      var e = this.getExtent();
      return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;
    },
    getOtherAxis: function () {
      this.grid.getOtherAxis();
    },
    pointToData: function (t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
    },
    toLocalCoord: null,
    toGlobalCoord: null
  }, h(C_, c_);
  var T_ = {
    show: !0,
    zlevel: 0,
    z: 0,
    inverse: !1,
    name: "",
    nameLocation: "end",
    nameRotate: null,
    nameTruncate: {
      maxWidth: null,
      ellipsis: "...",
      placeholder: "."
    },
    nameTextStyle: {},
    nameGap: 15,
    silent: !1,
    triggerEvent: !1,
    tooltip: {
      show: !1
    },
    axisPointer: {},
    axisLine: {
      show: !0,
      onZero: !0,
      onZeroAxisIndex: null,
      lineStyle: {
        color: "#333",
        width: 1,
        type: "solid"
      },
      symbol: ["none", "none"],
      symbolSize: [10, 15]
    },
    axisTick: {
      show: !0,
      inside: !1,
      length: 5,
      lineStyle: {
        width: 1
      }
    },
    axisLabel: {
      show: !0,
      inside: !1,
      rotate: 0,
      showMinLabel: null,
      showMaxLabel: null,
      margin: 8,
      fontSize: 12
    },
    splitLine: {
      show: !0,
      lineStyle: {
        color: ["#ccc"],
        width: 1,
        type: "solid"
      }
    },
    splitArea: {
      show: !1,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
      D_ = {};
  D_.categoryAxis = r({
    boundaryGap: !0,
    deduplication: null,
    splitLine: {
      show: !1
    },
    axisTick: {
      alignWithLabel: !1,
      interval: "auto"
    },
    axisLabel: {
      interval: "auto"
    }
  }, T_), D_.valueAxis = r({
    boundaryGap: [0, 0],
    splitNumber: 5
  }, T_), D_.timeAxis = s({
    scale: !0,
    min: "dataMin",
    max: "dataMax"
  }, D_.valueAxis), D_.logAxis = s({
    scale: !0,
    logBase: 10
  }, D_.valueAxis);

  var k_ = ["value", "category", "time", "log"],
      A_ = function (t, e, n, i) {
    f(k_, function (o) {
      e.extend({
        type: t + "Axis." + o,
        mergeDefaultAndTheme: function (e, i) {
          var a = this.layoutMode,
              s = a ? fo(e) : {},
              l = i.getTheme();
          r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), a && co(e, s, a);
        },
        optionUpdated: function () {
          var t = this.option;
          "category" === t.type && (this.__ordinalMeta = pu.createByAxisModel(this));
        },
        getCategories: function (t) {
          var e = this.option;
          return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
        },
        getOrdinalMeta: function () {
          return this.__ordinalMeta;
        },
        defaultOption: a([{}, D_[o + "Axis"], i], !0)
      });
    }), hv.registerSubTypeDefaulter(t + "Axis", _(n, t));
  },
      P_ = hv.extend({
    type: "cartesian2dAxis",
    axis: null,
    init: function () {
      P_.superApply(this, "init", arguments), this.resetRange();
    },
    mergeOption: function () {
      P_.superApply(this, "mergeOption", arguments), this.resetRange();
    },
    restoreData: function () {
      P_.superApply(this, "restoreData", arguments), this.resetRange();
    },
    getCoordSysModel: function () {
      return this.ecModel.queryComponents({
        mainType: "grid",
        index: this.option.gridIndex,
        id: this.option.gridId
      })[0];
    }
  });

  r(P_.prototype, $y);
  var L_ = {
    offset: 0
  };
  A_("x", P_, wh, L_), A_("y", P_, wh, L_), hv.extend({
    type: "grid",
    dependencies: ["xAxis", "yAxis"],
    layoutMode: "box",
    coordinateSystem: null,
    defaultOption: {
      show: !1,
      zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 60,
      containLabel: !1,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }
  });
  var O_ = Mh.prototype;
  O_.type = "grid", O_.axisPointerEnabled = !0, O_.getRect = function () {
    return this._rect;
  }, O_.update = function (t, e) {
    var n = this._axesMap;
    this._updateScale(t, this.model), f(n.x, function (t) {
      Bu(t.scale, t.model);
    }), f(n.y, function (t) {
      Bu(t.scale, t.model);
    }), f(n.x, function (t) {
      Sh(n, "y", t);
    }), f(n.y, function (t) {
      Sh(n, "x", t);
    }), this.resize(this.model, e);
  }, O_.resize = function (t, e, n) {
    function i() {
      f(a, function (t) {
        var e = t.isHorizontal(),
            n = e ? [0, r.width] : [0, r.height],
            i = t.inverse ? 1 : 0;
        t.setExtent(n[i], n[1 - i]), Ch(t, e ? r.x : r.y);
      });
    }

    var r = ho(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight()
    });
    this._rect = r;
    var a = this._axesList;
    i(), !n && t.get("containLabel") && (f(a, function (t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = Fu(t);

        if (e) {
          var n = t.isHorizontal() ? "height" : "width",
              i = t.model.get("axisLabel.margin");
          r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);
        }
      }
    }), i());
  }, O_.getAxis = function (t, e) {
    var n = this._axesMap[t];

    if (null != n) {
      if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
      return n[e];
    }
  }, O_.getAxes = function () {
    return this._axesList.slice();
  }, O_.getCartesian = function (t, e) {
    if (null != t && null != e) {
      var n = "x" + t + "y" + e;
      return this._coordsMap[n];
    }

    M(t) && (e = t.yAxisIndex, t = t.xAxisIndex);

    for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
  }, O_.getCartesians = function () {
    return this._coordsList.slice();
  }, O_.convertToPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);

    return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
  }, O_.convertFromPixel = function (t, e, n) {
    var i = this._findConvertTarget(t, e);

    return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
  }, O_._findConvertTarget = function (t, e) {
    var n,
        i,
        r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
        o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
        s = e.gridModel,
        l = this._coordsList;
    if (r) n = r.coordinateSystem, u(l, n) < 0 && (n = null);else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);else if (a) i = this.getAxis("x", a.componentIndex);else if (o) i = this.getAxis("y", o.componentIndex);else if (s) {
      var h = s.coordinateSystem;
      h === this && (n = this._coordsList[0]);
    }
    return {
      cartesian: n,
      axis: i
    };
  }, O_.containPoint = function (t) {
    var e = this._coordsList[0];
    return e ? e.containPoint(t) : void 0;
  }, O_._initCartesian = function (t, e) {
    function n(n) {
      return function (o, s) {
        if (bh(o, t, e)) {
          var l = o.get("position");
          "x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;
          var u = new C_(n, Eu(o), [0, 0], o.get("type"), l),
              h = "category" === u.type;
          u.onBand = h && o.get("boundaryGap"), u.inverse = o.get("inverse"), o.axis = u, u.model = o, u.grid = this, u.index = s, this._axesList.push(u), r[n][s] = u, a[n]++;
        }
      };
    }

    var i = {
      left: !1,
      right: !1,
      top: !1,
      bottom: !1
    },
        r = {
      x: {},
      y: {}
    },
        a = {
      x: 0,
      y: 0
    };
    return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function (e, n) {
      f(r.y, function (i, r) {
        var a = "x" + n + "y" + r,
            o = new xh(a);
        o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i);
      }, this);
    }, this)) : (this._axesMap = {}, void (this._axesList = []));
  }, O_._updateScale = function (t, e) {
    function n(t, e) {
      f(t.mapDimension(e.dim, !0), function (n) {
        e.scale.unionExtentFromData(t, uu(t, n));
      });
    }

    f(this._axesList, function (t) {
      t.scale.setExtent(1 / 0, -1 / 0);
    }), t.eachSeries(function (i) {
      if (Dh(i)) {
        var r = Th(i, t),
            a = r[0],
            o = r[1];
        if (!bh(a, e, t) || !bh(o, e, t)) return;
        var s = this.getCartesian(a.componentIndex, o.componentIndex),
            l = i.getData(),
            u = s.getAxis("x"),
            h = s.getAxis("y");
        "list" === l.type && (n(l, u, i), n(l, h, i));
      }
    }, this);
  }, O_.getTooltipAxes = function (t) {
    var e = [],
        n = [];
    return f(this.getCartesians(), function (i) {
      var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
          a = i.getOtherAxis(r);
      u(e, r) < 0 && e.push(r), u(n, a) < 0 && n.push(a);
    }), {
      baseAxes: e,
      otherAxes: n
    };
  };
  var B_ = ["xAxis", "yAxis"];
  Mh.create = function (t, e) {
    var n = [];
    return t.eachComponent("grid", function (i, r) {
      var a = new Mh(i, t, e);
      a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a);
    }), t.eachSeries(function (e) {
      if (Dh(e)) {
        var n = Th(e, t),
            i = n[0],
            r = n[1],
            a = i.getCoordSysModel(),
            o = a.coordinateSystem;
        e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex);
      }
    }), n;
  }, Mh.dimensions = Mh.prototype.dimensions = xh.prototype.dimensions, Ho.register("cartesian2d", Mh);

  var E_ = Math.PI,
      R_ = function (t, e) {
    this.opt = e, this.axisModel = t, s(e, {
      labelOffset: 0,
      nameDirection: 1,
      tickDirection: 1,
      labelDirection: 1,
      silent: !0
    }), this.group = new tf();
    var n = new tf({
      position: e.position.slice(),
      rotation: e.rotation
    });
    n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;
  };

  R_.prototype = {
    constructor: R_,
    hasBuilder: function (t) {
      return !!z_[t];
    },
    add: function (t) {
      z_[t].call(this);
    },
    getGroup: function () {
      return this.group;
    }
  };

  var z_ = {
    axisLine: function () {
      var t = this.opt,
          e = this.axisModel;

      if (e.get("axisLine.show")) {
        var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            a = [n[1], 0];
        i && (ae(r, r, i), ae(a, a, i));
        var s = o({
          lineCap: "round"
        }, e.getModel("axisLine.lineStyle").getLineStyle());
        this.group.add(new Sg(Yr({
          anid: "line",
          shape: {
            x1: r[0],
            y1: r[1],
            x2: a[0],
            y2: a[1]
          },
          style: s,
          strokeContainThreshold: t.strokeContainThreshold || 5,
          silent: !0,
          z2: 1
        })));
        var l = e.get("axisLine.symbol"),
            u = e.get("axisLine.symbolSize"),
            h = e.get("axisLine.symbolOffset") || 0;

        if ("number" == typeof h && (h = [h, h]), null != l) {
          "string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);
          var c = u[0],
              d = u[1];
          f([{
            rotate: t.rotation + Math.PI / 2,
            offset: h[0],
            r: 0
          }, {
            rotate: t.rotation - Math.PI / 2,
            offset: h[1],
            r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
          }], function (e, n) {
            if ("none" !== l[n] && null != l[n]) {
              var i = Wu(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
              i.attr({
                rotation: e.rotate,
                position: o,
                silent: !0
              }), this.group.add(i);
            }
          }, this);
        }
      }
    },
    axisTickLabel: function () {
      var t = this.axisModel,
          e = this.opt,
          n = Rh(this, t, e),
          i = zh(this, t, e);
      Lh(t, i, n);
    },
    axisName: function () {
      var t = this.opt,
          e = this.axisModel,
          n = D(t.axisName, e.get("name"));

      if (n) {
        var i,
            r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            u = this.axisModel.axis.getExtent(),
            h = u[0] > u[1] ? -1 : 1,
            c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Eh(r) ? t.labelOffset + a * l : 0],
            d = e.get("nameRotate");
        null != d && (d = d * E_ / 180);
        var f;
        Eh(r) ? i = N_(t.rotation, null != d ? d : t.rotation, a) : (i = Ah(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));

        var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = D(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != v && null != m ? ev(n, m, p, v, {
          minChar: 2,
          placeholder: g.placeholder
        }) : n,
            _ = e.get("tooltip", !0),
            x = e.mainType,
            w = {
          componentType: x,
          name: n,
          $vars: ["name"]
        };

        w[x + "Index"] = e.componentIndex;
        var b = new fg({
          anid: "name",
          __fullText: n,
          __truncatedText: y,
          position: c,
          rotation: i.rotation,
          silent: Ph(e),
          z2: 1,
          tooltip: _ && _.show ? o({
            content: n,
            formatter: function () {
              return n;
            },
            formatterParams: w
          }, _) : null
        });
        ca(b.style, s, {
          text: y,
          textFont: p,
          textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
          textAlign: i.textAlign,
          textVerticalAlign: i.textVerticalAlign
        }), e.get("triggerEvent") && (b.eventData = kh(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
      }
    }
  },
      N_ = R_.innerTextLayout = function (t, e, n) {
    var i,
        r,
        a = ja(e - t);
    return qa(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : qa(a - E_) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && E_ > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
      rotation: a,
      textAlign: i,
      textVerticalAlign: r
    };
  },
      F_ = f,
      H_ = _,
      V_ = Bl({
    type: "axis",
    _axisPointer: null,
    axisPointerClass: null,
    render: function (t, e, n, i) {
      this.axisPointerClass && Xh(t), V_.superApply(this, "render", arguments), Zh(this, t, e, n, i, !0);
    },
    updateAxisPointer: function (t, e, n, i) {
      Zh(this, t, e, n, i, !1);
    },
    remove: function (t, e) {
      var n = this._axisPointer;
      n && n.remove(e), V_.superApply(this, "remove", arguments);
    },
    dispose: function (t, e) {
      $h(this, e), V_.superApply(this, "dispose", arguments);
    }
  }),
      W_ = [];

  V_.registerAxisPointerClass = function (t, e) {
    W_[t] = e;
  }, V_.getAxisPointerClass = function (t) {
    return t && W_[t];
  };
  var G_ = ["axisLine", "axisTickLabel", "axisName"],
      X_ = ["splitArea", "splitLine"],
      j_ = V_.extend({
    type: "cartesianAxis",
    axisPointerClass: "CartesianAxisPointer",
    render: function (t, e, n, i) {
      this.group.removeAll();
      var r = this._axisGroup;

      if (this._axisGroup = new tf(), this.group.add(this._axisGroup), t.get("show")) {
        var a = t.getCoordSysModel(),
            o = Kh(a, t),
            s = new R_(t, o);
        f(G_, s.add, s), this._axisGroup.add(s.getGroup()), f(X_, function (e) {
          t.get(e + ".show") && this["_" + e](t, a);
        }, this), Ca(r, this._axisGroup, t), j_.superCall(this, "render", t, e, n, i);
      }
    },
    remove: function () {
      this._splitAreaColors = null;
    },
    _splitLine: function (t, e) {
      var n = t.axis;

      if (!n.scale.isBlank()) {
        var i = t.getModel("splitLine"),
            r = i.getModel("lineStyle"),
            a = r.get("color");
        a = x(a) ? a : [a];

        for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({
          tickModel: i
        }), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
          var g = n.toGlobalCoord(h[p].coord);
          l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
          var v = u++ % a.length,
              m = h[p].tickValue;

          this._axisGroup.add(new Sg(Yr({
            anid: null != m ? "line_" + h[p].tickValue : null,
            shape: {
              x1: c[0],
              y1: c[1],
              x2: d[0],
              y2: d[1]
            },
            style: s({
              stroke: a[v]
            }, f),
            silent: !0
          })));
        }
      }
    },
    _splitArea: function (t, e) {
      var n = t.axis;

      if (!n.scale.isBlank()) {
        var i = t.getModel("splitArea"),
            r = i.getModel("areaStyle"),
            a = r.get("color"),
            o = e.coordinateSystem.getRect(),
            l = n.getTicksCoords({
          tickModel: i,
          clamp: !0
        });

        if (l.length) {
          var u = a.length,
              h = this._splitAreaColors,
              c = N(),
              d = 0;
          if (h) for (var f = 0; f < l.length; f++) {
            var p = h.get(l[f].tickValue);

            if (null != p) {
              d = (p + (u - 1) * f) % u;
              break;
            }
          }
          var g = n.toGlobalCoord(l[0].coord),
              v = r.getAreaStyle();
          a = x(a) ? a : [a];

          for (var f = 1; f < l.length; f++) {
            var m,
                y,
                _,
                w,
                b = n.toGlobalCoord(l[f].coord);

            n.isHorizontal() ? (m = g, y = o.y, _ = b - m, w = o.height, g = m + _) : (m = o.x, y = g, _ = o.width, w = b - y, g = y + w);
            var M = l[f - 1].tickValue;
            null != M && c.set(M, d), this._axisGroup.add(new Mg({
              anid: null != M ? "area_" + M : null,
              shape: {
                x: m,
                y: y,
                width: _,
                height: w
              },
              style: s({
                fill: a[d]
              }, v),
              silent: !0
            })), d = (d + 1) % u;
          }

          this._splitAreaColors = c;
        }
      }
    }
  });
  j_.extend({
    type: "xAxis"
  }), j_.extend({
    type: "yAxis"
  }), Bl({
    type: "grid",
    render: function (t) {
      this.group.removeAll(), t.get("show") && this.group.add(new Mg({
        shape: t.coordinateSystem.getRect(),
        style: s({
          fill: t.get("backgroundColor")
        }, t.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }
  }), Ml(function (t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  }), Ol({
    type: "title",
    layoutMode: {
      type: "box",
      ignoreSize: !0
    },
    defaultOption: {
      zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bolder",
        color: "#333"
      },
      subtextStyle: {
        color: "#aaa"
      }
    }
  }), Bl({
    type: "title",
    render: function (t, e, n) {
      if (this.group.removeAll(), t.get("show")) {
        var i = this.group,
            r = t.getModel("textStyle"),
            a = t.getModel("subtextStyle"),
            o = t.get("textAlign"),
            s = t.get("textBaseline"),
            l = new fg({
          style: ca({}, r, {
            text: t.get("text"),
            textFill: r.getTextColor()
          }, {
            disableBox: !0
          }),
          z2: 10
        }),
            u = l.getBoundingRect(),
            h = t.get("subtext"),
            c = new fg({
          style: ca({}, a, {
            text: h,
            textFill: a.getTextColor(),
            y: u.height + t.get("itemGap"),
            textVerticalAlign: "top"
          }, {
            disableBox: !0
          }),
          z2: 10
        }),
            d = t.get("link"),
            f = t.get("sublink");
        l.silent = !d, c.silent = !f, d && l.on("click", function () {
          window.open(d, "_" + t.get("target"));
        }), f && c.on("click", function () {
          window.open(f, "_" + t.get("subtarget"));
        }), i.add(l), h && i.add(c);
        var p = i.getBoundingRect(),
            g = t.getBoxLayoutParams();
        g.width = p.width, g.height = p.height;
        var v = ho(g, {
          width: n.getWidth(),
          height: n.getHeight()
        }, t.get("padding"));
        o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? v.x += v.width : "center" === o && (v.x += v.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2), s = s || "top"), i.attr("position", [v.x, v.y]);
        var m = {
          textAlign: o,
          textVerticalAlign: s
        };
        l.setStyle(m), c.setStyle(m), p = i.getBoundingRect();

        var y = v.margin,
            _ = t.getItemStyle(["color", "opacity"]);

        _.fill = t.get("backgroundColor");
        var x = new Mg({
          shape: {
            x: p.x - y[3],
            y: p.y - y[0],
            width: p.width + y[1] + y[3],
            height: p.height + y[0] + y[2],
            r: t.get("borderRadius")
          },
          style: _,
          silent: !0
        });
        Zr(x), i.add(x);
      }
    }
  });
  var q_ = Ol({
    type: "legend.plain",
    dependencies: ["series"],
    layoutMode: {
      type: "box",
      ignoreSize: !0
    },
    init: function (t, e, n) {
      this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {};
    },
    mergeOption: function (t) {
      q_.superCall(this, "mergeOption", t);
    },
    optionUpdated: function () {
      this._updateData(this.ecModel);

      var t = this._data;

      if (t[0] && "single" === this.get("selectedMode")) {
        for (var e = !1, n = 0; n < t.length; n++) {
          var i = t[n].get("name");

          if (this.isSelected(i)) {
            this.select(i), e = !0;
            break;
          }
        }

        !e && this.select(t[0].get("name"));
      }
    },
    _updateData: function (t) {
      var e = [],
          n = [];
      t.eachRawSeries(function (i) {
        var r = i.name;
        n.push(r);
        var a;

        if (i.legendDataProvider) {
          var o = i.legendDataProvider(),
              s = o.mapArray(o.getName);
          t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : a = !0;
        } else a = !0;

        a && zi(i) && e.push(i.name);
      }), this._availableNames = n;
      var i = this.get("data") || e,
          r = p(i, function (t) {
        return ("string" == typeof t || "number" == typeof t) && (t = {
          name: t
        }), new Aa(t, this, this.ecModel);
      }, this);
      this._data = r;
    },
    getData: function () {
      return this._data;
    },
    select: function (t) {
      var e = this.option.selected,
          n = this.get("selectedMode");

      if ("single" === n) {
        var i = this._data;
        f(i, function (t) {
          e[t.get("name")] = !1;
        });
      }

      e[t] = !0;
    },
    unSelect: function (t) {
      "single" !== this.get("selectedMode") && (this.option.selected[t] = !1);
    },
    toggleSelected: function (t) {
      var e = this.option.selected;
      e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t);
    },
    isSelected: function (t) {
      var e = this.option.selected;
      return !(e.hasOwnProperty(t) && !e[t]) && u(this._availableNames, t) >= 0;
    },
    defaultOption: {
      zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      top: 0,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      inactiveColor: "#ccc",
      textStyle: {
        color: "#333"
      },
      selectedMode: !0,
      tooltip: {
        show: !1
      }
    }
  });
  Cl("legendToggleSelect", "legendselectchanged", _(Qh, "toggleSelected")), Cl("legendSelect", "legendselected", _(Qh, "select")), Cl("legendUnSelect", "legendunselected", _(Qh, "unSelect"));

  var U_ = _,
      Y_ = f,
      Z_ = tf,
      $_ = Bl({
    type: "legend.plain",
    newlineDisabled: !1,
    init: function () {
      this.group.add(this._contentGroup = new Z_()), this._backgroundEl;
    },
    getContentGroup: function () {
      return this._contentGroup;
    },
    render: function (t, e, n) {
      if (this.resetInner(), t.get("show", !0)) {
        var i = t.get("align");
        i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(i, t, e, n);
        var r = t.getBoxLayoutParams(),
            a = {
          width: n.getWidth(),
          height: n.getHeight()
        },
            o = t.get("padding"),
            l = ho(r, a, o),
            u = this.layoutInner(t, i, l),
            h = ho(s({
          width: u.width,
          height: u.height
        }, r), a, o);
        this.group.attr("position", [h.x - u.x, h.y - u.y]), this.group.add(this._backgroundEl = Jh(u, t));
      }
    },
    resetInner: function () {
      this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl);
    },
    renderInner: function (t, e, n, i) {
      var r = this.getContentGroup(),
          a = N(),
          o = e.get("selectedMode"),
          s = [];
      n.eachRawSeries(function (t) {
        !t.get("legendHoverLink") && s.push(t.id);
      }), Y_(e.getData(), function (l, u) {
        var h = l.get("name");
        if (!this.newlineDisabled && ("" === h || "\n" === h)) return void r.add(new Z_({
          newline: !0
        }));
        var c = n.getSeriesByName(h)[0];
        if (!a.get(h)) if (c) {
          var d = c.getData(),
              f = d.getVisual("color");
          "function" == typeof f && (f = f(c.getDataParams(0)));

          var p = d.getVisual("legendSymbol") || "roundRect",
              g = d.getVisual("symbol"),
              v = this._createItem(h, u, l, e, p, g, t, f, o);

          v.on("click", U_(tc, h, i)).on("mouseover", U_(ec, c, null, i, s)).on("mouseout", U_(nc, c, null, i, s)), a.set(h, !0);
        } else n.eachRawSeries(function (n) {
          if (!a.get(h) && n.legendDataProvider) {
            var r = n.legendDataProvider(),
                c = r.indexOfName(h);
            if (0 > c) return;

            var d = r.getItemVisual(c, "color"),
                f = "roundRect",
                p = this._createItem(h, u, l, e, f, null, t, d, o);

            p.on("click", U_(tc, h, i)).on("mouseover", U_(ec, n, h, i, s)).on("mouseout", U_(nc, n, h, i, s)), a.set(h, !0);
          }
        }, this);
      }, this);
    },
    _createItem: function (t, e, n, i, r, a, s, l, u) {
      var h = i.get("itemWidth"),
          c = i.get("itemHeight"),
          d = i.get("inactiveColor"),
          f = i.get("symbolKeepAspect"),
          p = i.isSelected(t),
          g = new Z_(),
          v = n.getModel("textStyle"),
          m = n.get("icon"),
          y = n.getModel("tooltip"),
          _ = y.parentModel;

      if (r = m || r, g.add(Wu(r, 0, 0, h, c, p ? l : d, null == f ? !0 : f)), !m && a && (a !== r || "none" == a)) {
        var x = .8 * c;
        "none" === a && (a = "circle"), g.add(Wu(a, (h - x) / 2, (c - x) / 2, x, x, p ? l : d, null == f ? !0 : f));
      }

      var w = "left" === s ? h + 5 : -5,
          b = s,
          M = i.get("formatter"),
          S = t;
      "string" == typeof M && M ? S = M.replace("{name}", null != t ? t : "") : "function" == typeof M && (S = M(t)), g.add(new fg({
        style: ca({}, v, {
          text: S,
          x: w,
          y: c / 2,
          textFill: p ? v.getTextColor() : d,
          textAlign: b,
          textVerticalAlign: "middle"
        })
      }));
      var I = new Mg({
        shape: g.getBoundingRect(),
        invisible: !0,
        tooltip: y.get("show") ? o({
          content: t,
          formatter: _.get("formatter", !0) || function () {
            return t;
          },
          formatterParams: {
            componentType: "legend",
            legendIndex: i.componentIndex,
            name: t,
            $vars: ["name"]
          }
        }, y.option) : null
      });
      return g.add(I), g.eachChild(function (t) {
        t.silent = !0;
      }), I.silent = !u, this.getContentGroup().add(g), ua(g), g.__legendDataIndex = e, g;
    },
    layoutInner: function (t, e, n) {
      var i = this.getContentGroup();
      sv(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
      var r = i.getBoundingRect();
      return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect();
    }
  }),
      K_ = function (t) {
    var e = t.findComponents({
      mainType: "legend"
    });
    e && e.length && t.filterSeries(function (t) {
      for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;

      return !0;
    });
  };

  Sl(K_), hv.registerSubTypeDefaulter("legend", function () {
    return "plain";
  });
  var Q_ = q_.extend({
    type: "legend.scroll",
    setScrollDataIndex: function (t) {
      this.option.scrollDataIndex = t;
    },
    defaultOption: {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: {
        color: "#333"
      },
      animationDurationUpdate: 800
    },
    init: function (t, e, n, i) {
      var r = fo(t);
      Q_.superCall(this, "init", t, e, n, i), ic(this, t, r);
    },
    mergeOption: function (t, e) {
      Q_.superCall(this, "mergeOption", t, e), ic(this, this.option, t);
    },
    getOrient: function () {
      return "vertical" === this.get("orient") ? {
        index: 1,
        name: "vertical"
      } : {
        index: 0,
        name: "horizontal"
      };
    }
  }),
      J_ = tf,
      tx = ["width", "height"],
      ex = ["x", "y"],
      nx = $_.extend({
    type: "legend.scroll",
    newlineDisabled: !0,
    init: function () {
      nx.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new J_()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new J_()), this._showController;
    },
    resetInner: function () {
      nx.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
    },
    renderInner: function (t, e, n, i) {
      function r(t, n) {
        var r = t + "DataIndex",
            l = ka(e.get("pageIcons", !0)[e.getOrient().name][n], {
          onclick: y(a._pageGo, a, r, e, i)
        }, {
          x: -s[0] / 2,
          y: -s[1] / 2,
          width: s[0],
          height: s[1]
        });
        l.name = t, o.add(l);
      }

      var a = this;
      nx.superCall(this, "renderInner", t, e, n, i);
      var o = this._controllerGroup,
          s = e.get("pageIconSize", !0);
      x(s) || (s = [s, s]), r("pagePrev", 0);
      var l = e.getModel("pageTextStyle");
      o.add(new fg({
        name: "pageText",
        style: {
          textFill: l.getTextColor(),
          font: l.getFont(),
          textVerticalAlign: "middle",
          textAlign: "center"
        },
        silent: !0
      })), r("pageNext", 1);
    },
    layoutInner: function (t, e, n) {
      var i = this.getContentGroup(),
          r = this._containerGroup,
          a = this._controllerGroup,
          o = t.getOrient().index,
          s = tx[o],
          l = tx[1 - o],
          u = ex[1 - o];
      sv(t.get("orient"), i, t.get("itemGap"), o ? n.width : null, o ? null : n.height), sv("horizontal", a, t.get("pageButtonItemGap", !0));
      var h = i.getBoundingRect(),
          c = a.getBoundingRect(),
          d = this._showController = h[s] > n[s],
          f = [-h.x, -h.y];
      f[o] = i.position[o];
      var p = [0, 0],
          g = [-c.x, -c.y],
          v = k(t.get("pageButtonGap", !0), t.get("itemGap", !0));

      if (d) {
        var m = t.get("pageButtonPosition", !0);
        "end" === m ? g[o] += n[s] - c[s] : p[o] += c[s] + v;
      }

      g[1 - o] += h[l] / 2 - c[l] / 2, i.attr("position", f), r.attr("position", p), a.attr("position", g);
      var y = this.group.getBoundingRect(),
          y = {
        x: 0,
        y: 0
      };

      if (y[s] = d ? n[s] : h[s], y[l] = Math.max(h[l], c[l]), y[u] = Math.min(0, c[u] + g[1 - o]), r.__rectSize = n[s], d) {
        var _ = {
          x: 0,
          y: 0
        };
        _[s] = Math.max(n[s] - c[s] - v, 0), _[l] = y[l], r.setClipPath(new Mg({
          shape: _
        })), r.__rectSize = _[s];
      } else a.eachChild(function (t) {
        t.attr({
          invisible: !0,
          silent: !0
        });
      });

      var x = this._getPageInfo(t);

      return null != x.pageIndex && wa(i, {
        position: x.contentPosition
      }, d ? t : !1), this._updatePageInfoView(t, x), y;
    },
    _pageGo: function (t, e, n) {
      var i = this._getPageInfo(e)[t];

      null != i && n.dispatchAction({
        type: "legendScroll",
        scrollDataIndex: i,
        legendId: e.id
      });
    },
    _updatePageInfoView: function (t, e) {
      var n = this._controllerGroup;
      f(["pagePrev", "pageNext"], function (i) {
        var r = null != e[i + "DataIndex"],
            a = n.childOfName(i);
        a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default");
      });
      var i = n.childOfName("pageText"),
          r = t.get("pageFormatter"),
          a = e.pageIndex,
          o = null != a ? a + 1 : 0,
          s = e.pageCount;
      i && r && i.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({
        current: o,
        total: s
      }));
    },
    _getPageInfo: function (t) {
      function e(t) {
        var e = t.getBoundingRect().clone();
        return e[f] += t.position[h], e;
      }

      var n,
          i,
          r,
          a,
          o = t.get("scrollDataIndex", !0),
          s = this.getContentGroup(),
          l = s.getBoundingRect(),
          u = this._containerGroup.__rectSize,
          h = t.getOrient().index,
          c = tx[h],
          d = tx[1 - h],
          f = ex[h],
          p = s.position.slice();
      this._showController ? s.eachChild(function (t) {
        t.__legendDataIndex === o && (a = t);
      }) : a = s.childAt(0);
      var g = u ? Math.ceil(l[c] / u) : 0;

      if (a) {
        var v = a.getBoundingRect(),
            m = a.position[h] + v[f];
        p[h] = -m - l[f], n = Math.floor(g * (m + v[f] + u / 2) / l[c]), n = l[c] && g ? Math.max(0, Math.min(g - 1, n)) : -1;
        var y = {
          x: 0,
          y: 0
        };
        y[c] = u, y[d] = l[d], y[f] = -p[h] - l[f];

        var _,
            x = s.children();

        if (s.eachChild(function (t, n) {
          var i = e(t);
          i.intersect(y) && (null == _ && (_ = n), r = t.__legendDataIndex), n === x.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null);
        }), null != _) {
          var w = x[_],
              b = e(w);
          if (y[f] = b[f] + b[c] - y[c], 0 >= _ && b[f] >= y[f]) i = null;else {
            for (; _ > 0 && e(x[_ - 1]).intersect(y);) _--;

            i = x[_].__legendDataIndex;
          }
        }
      }

      return {
        contentPosition: p,
        pageIndex: n,
        pageCount: g,
        pagePrevDataIndex: i,
        pageNextDataIndex: r
      };
    }
  });
  Cl("legendScroll", "legendscroll", function (t, e) {
    var n = t.scrollDataIndex;
    null != n && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function (t) {
      t.setScrollDataIndex(n);
    });
  });

  var ix = function (t, e) {
    var n,
        i = [],
        r = t.seriesIndex;
    if (null == r || !(n = e.getSeriesByIndex(r))) return {
      point: []
    };
    var a = n.getData(),
        o = Fi(a, t);
    if (null == o || 0 > o || x(o)) return {
      point: []
    };
    var s = a.getItemGraphicEl(o),
        l = n.coordinateSystem;
    if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
      return a.mapDimension(t);
    }), o, !0)) || [];else if (s) {
      var u = s.getBoundingRect().clone();
      u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2];
    }
    return {
      point: i,
      el: s
    };
  },
      rx = f,
      ax = _,
      ox = Hi(),
      sx = function (t, e, n) {
    var i = t.currTrigger,
        r = [t.x, t.y],
        a = t,
        o = t.dispatchAction || y(n.dispatchAction, n),
        s = e.getComponent("axisPointer").coordSysAxesInfo;

    if (s) {
      fc(r) && (r = ix({
        seriesIndex: a.seriesIndex,
        dataIndex: a.dataIndex
      }, e).point);
      var l = fc(r),
          u = a.axesInfo,
          h = s.axesInfo,
          c = "leave" === i || fc(r),
          d = {},
          f = {},
          p = {
        list: [],
        map: {}
      },
          g = {
        showPointer: ax(oc, f),
        showTooltip: ax(sc, p)
      };
      rx(s.coordSysMap, function (t, e) {
        var n = l || t.containPoint(r);
        rx(s.coordSysAxesInfo[e], function (t) {
          var e = t.axis,
              i = cc(u, t);

          if (!c && n && (!u || i)) {
            var a = i && i.value;
            null != a || l || (a = e.pointToData(r)), null != a && rc(t, a, g, !1, d);
          }
        });
      });
      var v = {};
      return rx(h, function (t, e) {
        var n = t.linkGroup;
        n && !f[e] && rx(n.axesInfo, function (e, i) {
          var r = f[i];

          if (e !== t && r) {
            var a = r.value;
            n.mapper && (a = t.axis.scale.parse(n.mapper(a, dc(e), dc(t)))), v[t.key] = a;
          }
        });
      }), rx(v, function (t, e) {
        rc(h[e], t, g, !0, d);
      }), lc(f, h, d), uc(p, r, t, o), hc(h, o, n), d;
    }
  },
      lx = (Ol({
    type: "axisPointer",
    coordSysAxesInfo: null,
    defaultOption: {
      show: "auto",
      triggerOn: null,
      zlevel: 0,
      z: 50,
      type: "line",
      snap: !1,
      triggerTooltip: !0,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#aaa",
        width: 1,
        type: "solid"
      },
      shadowStyle: {
        color: "rgba(150,150,150,0.3)"
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        shadowBlur: 3,
        shadowColor: "#aaa"
      },
      handle: {
        show: !1,
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        margin: 50,
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40
      }
    }
  }), Hi()),
      ux = f,
      hx = Bl({
    type: "axisPointer",
    render: function (t, e, n) {
      var i = e.getComponent("tooltip"),
          r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
      pc("axisPointer", n, function (t, e, n) {
        "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
          type: "updateAxisPointer",
          currTrigger: t,
          x: e && e.offsetX,
          y: e && e.offsetY
        });
      });
    },
    remove: function (t, e) {
      xc(e.getZr(), "axisPointer"), hx.superApply(this._model, "remove", arguments);
    },
    dispose: function (t, e) {
      xc("axisPointer", e), hx.superApply(this._model, "dispose", arguments);
    }
  }),
      cx = Hi(),
      dx = i,
      fx = y;

  wc.prototype = {
    _group: null,
    _lastGraphicKey: null,
    _handle: null,
    _dragging: !1,
    _lastValue: null,
    _lastStatus: null,
    _payloadInfo: null,
    animationThreshold: 15,
    render: function (t, e, n, i) {
      var r = e.get("value"),
          a = e.get("status");

      if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
        this._lastValue = r, this._lastStatus = a;
        var o = this._group,
            s = this._handle;
        if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
        o && o.show(), s && s.show();
        var l = {};
        this.makeElOption(l, r, t, e, n);
        var u = l.graphicKey;
        u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
        var h = this._moveAnimation = this.determineAnimation(t, e);

        if (o) {
          var c = _(bc, e, h);

          this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);
        } else o = this._group = new tf(), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);

        Cc(o, e, !0), this._renderHandle(r);
      }
    },
    remove: function (t) {
      this.clear(t);
    },
    dispose: function (t) {
      this.clear(t);
    },
    determineAnimation: function (t, e) {
      var n = e.get("animation"),
          i = t.axis,
          r = "category" === i.type,
          a = e.get("snap");
      if (!a && !r) return !1;

      if ("auto" === n || null == n) {
        var o = this.animationThreshold;
        if (r && i.getBandWidth() > o) return !0;

        if (a) {
          var s = jh(t).seriesDataCount,
              l = i.getExtent();
          return Math.abs(l[0] - l[1]) / s > o;
        }

        return !1;
      }

      return n === !0;
    },
    makeElOption: function () {},
    createPointerEl: function (t, e) {
      var n = e.pointer;

      if (n) {
        var i = cx(t).pointerEl = new Ng[n.type](dx(e.pointer));
        t.add(i);
      }
    },
    createLabelEl: function (t, e, n, i) {
      if (e.label) {
        var r = cx(t).labelEl = new Mg(dx(e.label));
        t.add(r), Sc(r, i);
      }
    },
    updatePointerEl: function (t, e, n) {
      var i = cx(t).pointerEl;
      i && (i.setStyle(e.pointer.style), n(i, {
        shape: e.pointer.shape
      }));
    },
    updateLabelEl: function (t, e, n, i) {
      var r = cx(t).labelEl;
      r && (r.setStyle(e.label.style), n(r, {
        shape: e.label.shape,
        position: e.label.position
      }), Sc(r, i));
    },
    _renderHandle: function (t) {
      if (!this._dragging && this.updateHandleTransform) {
        var e = this._axisPointerModel,
            n = this._api.getZr(),
            i = this._handle,
            r = e.getModel("handle"),
            a = e.get("status");

        if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void (this._handle = null);
        var o;
        this._handle || (o = !0, i = this._handle = ka(r.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function (t) {
            Ef(t.event);
          },
          onmousedown: fx(this._onHandleDragMove, this, 0, 0),
          drift: fx(this._onHandleDragMove, this),
          ondragend: fx(this._onHandleDragEnd, this)
        }), n.add(i)), Cc(i, e, !1);
        var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
        i.setStyle(r.getItemStyle(null, s));
        var l = r.get("size");
        x(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), Ls(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o);
      }
    },
    _moveHandleToValue: function (t, e) {
      bc(this._axisPointerModel, !e && this._moveAnimation, this._handle, Ic(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    },
    _onHandleDragMove: function (t, e) {
      var n = this._handle;

      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(Ic(n), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(Ic(i)), cx(n).lastProp = null, this._doDispatchAxisPointer();
      }
    },
    _doDispatchAxisPointer: function () {
      var t = this._handle;

      if (t) {
        var e = this._payloadInfo,
            n = this._axisModel;

        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        });
      }
    },
    _onHandleDragEnd: function () {
      this._dragging = !1;
      var t = this._handle;

      if (t) {
        var e = this._axisPointerModel.get("value");

        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    },
    getHandleTransform: null,
    updateHandleTransform: null,
    clear: function (t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(),
          n = this._group,
          i = this._handle;
      e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null);
    },
    doClear: function () {},
    buildLabel: function (t, e, n) {
      return n = n || 0, {
        x: t[n],
        y: t[1 - n],
        width: e[n],
        height: e[1 - n]
      };
    }
  }, wc.prototype.constructor = wc, Ui(wc);
  var px = wc.extend({
    makeElOption: function (t, e, n, i, r) {
      var a = n.axis,
          o = a.grid,
          s = i.get("type"),
          l = Ec(o, a).getOtherAxis(a).getGlobalExtent(),
          u = a.toGlobalCoord(a.dataToCoord(e, !0));

      if (s && "none" !== s) {
        var h = Tc(i),
            c = gx[s](a, u, l, h);
        c.style = h, t.graphicKey = c.type, t.pointer = c;
      }

      var d = Kh(o.model, n);
      Lc(e, t, d, n, i, r);
    },
    getHandleTransform: function (t, e, n) {
      var i = Kh(e.axis.grid.model, e, {
        labelInside: !1
      });
      return i.labelMargin = n.get("handle.margin"), {
        position: Pc(e.axis, t, i),
        rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
      };
    },
    updateHandleTransform: function (t, e, n) {
      var i = n.axis,
          r = i.grid,
          a = i.getGlobalExtent(!0),
          o = Ec(r, i).getOtherAxis(i).getGlobalExtent(),
          s = "x" === i.dim ? 0 : 1,
          l = t.position;
      l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
      var u = (o[1] + o[0]) / 2,
          h = [u, u];
      h[s] = l[s];
      var c = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        position: l,
        rotation: t.rotation,
        cursorPoint: h,
        tooltipOption: c[s]
      };
    }
  }),
      gx = {
    line: function (t, e, n, i) {
      var r = Oc([e, n[0]], [e, n[1]], Rc(t));
      return Yr({
        shape: r,
        style: i
      }), {
        type: "Line",
        shape: r
      };
    },
    shadow: function (t, e, n) {
      var i = Math.max(1, t.getBandWidth()),
          r = n[1] - n[0];
      return {
        type: "Rect",
        shape: Bc([e - i / 2, n[0]], [i, r], Rc(t))
      };
    }
  };
  V_.registerAxisPointerClass("CartesianAxisPointer", px), Ml(function (t) {
    if (t) {
      (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !x(e) && (t.axisPointer.link = [e]);
    }
  }), Sl(Hm.PROCESSOR.STATISTIC, function (t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = Nh(t, e);
  }), Cl({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, sx), Ol({
    type: "tooltip",
    dependencies: ["axisPointer"],
    defaultOption: {
      zlevel: 0,
      z: 8,
      show: !0,
      showContent: !0,
      trigger: "item",
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      confine: !1,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: .4,
      enterable: !1,
      backgroundColor: "rgba(50,50,50,0.7)",
      borderColor: "#333",
      borderRadius: 4,
      borderWidth: 0,
      padding: 5,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          textStyle: {}
        }
      },
      textStyle: {
        color: "#fff",
        fontSize: 14
      }
    }
  });
  var vx = f,
      mx = eo,
      yx = ["", "-webkit-", "-moz-", "-o-"],
      _x = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
  Hc.prototype = {
    constructor: Hc,
    _enterable: !0,
    update: function () {
      var t = this._container,
          e = t.currentStyle || document.defaultView.getComputedStyle(t),
          n = t.style;
      "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative");
    },
    show: function (t) {
      clearTimeout(this._hideTimeout);
      var e = this.el;
      e.style.cssText = _x + Fc(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0;
    },
    setContent: function (t) {
      this.el.innerHTML = null == t ? "" : t;
    },
    setEnterable: function (t) {
      this._enterable = t;
    },
    getSize: function () {
      var t = this.el;
      return [t.clientWidth, t.clientHeight];
    },
    moveTo: function (t, e) {
      var n,
          i = this._zr;
      i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
      var r = this.el.style;
      r.left = t + "px", r.top = e + "px", this._x = t, this._y = e;
    },
    hide: function () {
      this.el.style.display = "none", this._show = !1;
    },
    hideLater: function (t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide());
    },
    isShow: function () {
      return this._show;
    }
  };
  var xx = y,
      bx = f,
      Mx = Na,
      Sx = new Mg({
    shape: {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }
  });
  Bl({
    type: "tooltip",
    init: function (t, e) {
      if (!Kc.node) {
        var n = new Hc(e.getDom(), e);
        this._tooltipContent = n;
      }
    },
    render: function (t, e, n) {
      if (!Kc.node && !Kc.wxa) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
        var i = this._tooltipContent;
        i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
      }
    },
    _initGlobalListener: function () {
      var t = this._tooltipModel,
          e = t.get("triggerOn");
      pc("itemTooltip", this._api, xx(function (t, n, i) {
        "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i));
      }, this));
    },
    _keepShow: function () {
      var t = this._tooltipModel,
          e = this._ecModel,
          n = this._api;

      if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
        var i = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
          i.manuallyShowTip(t, e, n, {
            x: i._lastX,
            y: i._lastY
          });
        });
      }
    },
    manuallyShowTip: function (t, e, n, i) {
      if (i.from !== this.uid && !Kc.node) {
        var r = Wc(i, n);
        this._ticket = "";
        var a = i.dataByCoordSys;

        if (i.tooltip && null != i.x && null != i.y) {
          var o = Sx;
          o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({
            offsetX: i.x,
            offsetY: i.y,
            target: o
          }, r);
        } else if (a) this._tryShow({
          offsetX: i.x,
          offsetY: i.y,
          position: i.position,
          event: {},
          dataByCoordSys: i.dataByCoordSys,
          tooltipOption: i.tooltipOption
        }, r);else if (null != i.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, n, i)) return;
          var s = ix(i, e),
              l = s.point[0],
              u = s.point[1];
          null != l && null != u && this._tryShow({
            offsetX: l,
            offsetY: u,
            position: i.position,
            target: s.el,
            event: {}
          }, r);
        } else null != i.x && null != i.y && (n.dispatchAction({
          type: "updateAxisPointer",
          x: i.x,
          y: i.y
        }), this._tryShow({
          offsetX: i.x,
          offsetY: i.y,
          position: i.position,
          target: n.getZr().findHover(i.x, i.y).target,
          event: {}
        }, r));
      }
    },
    manuallyHideTip: function (t, e, n, i) {
      var r = this._tooltipContent;
      !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Wc(i, n));
    },
    _manuallyAxisShowTip: function (t, e, n, i) {
      var r = i.seriesIndex,
          a = i.dataIndex,
          o = e.getComponent("axisPointer").coordSysAxesInfo;

      if (null != r && null != a && null != o) {
        var s = e.getSeriesByIndex(r);

        if (s) {
          var l = s.getData(),
              t = Vc([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
          if ("axis" === t.get("trigger")) return n.dispatchAction({
            type: "updateAxisPointer",
            seriesIndex: r,
            dataIndex: a,
            position: i.position
          }), !0;
        }
      }
    },
    _tryShow: function (t, e) {
      var n = t.target,
          i = this._tooltipModel;

      if (i) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;
        var r = t.dataByCoordSys;
        r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e));
      }
    },
    _showOrMove: function (t, e) {
      var n = t.get("showDelay");
      e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e();
    },
    _showAxisTooltip: function (t, e) {
      var n = this._ecModel,
          i = this._tooltipModel,
          r = [e.offsetX, e.offsetY],
          a = [],
          o = [],
          s = Vc([e.tooltipOption, i]);
      bx(t, function (t) {
        bx(t.dataByAxis, function (t) {
          var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
              i = t.value,
              r = [];

          if (e && null != i) {
            var s = Ac(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
            f(t.seriesDataIndices, function (a) {
              var l = n.getSeriesByIndex(a.seriesIndex),
                  u = a.dataIndexInside,
                  h = l && l.getDataParams(u);
              h.axisDim = t.axisDim, h.axisIndex = t.axisIndex, h.axisType = t.axisType, h.axisId = t.axisId, h.axisValue = Nu(e.axis, i), h.axisValueLabel = s, h && (o.push(h), r.push(l.formatTooltip(u, !0)));
            });
            var l = s;
            a.push((l ? no(l) + "<br />" : "") + r.join("<br />"));
          }
        });
      }, this), a.reverse(), a = a.join("<br /><br />");
      var l = e.position;

      this._showOrMove(s, function () {
        this._updateContentNotChangedOnAxis(t) ? this._updatePosition(s, l, r[0], r[1], this._tooltipContent, o) : this._showTooltipContent(s, a, o, Math.random(), r[0], r[1], l);
      });
    },
    _showSeriesItemTooltip: function (t, e, n) {
      var i = this._ecModel,
          r = e.seriesIndex,
          a = i.getSeriesByIndex(r),
          o = e.dataModel || a,
          s = e.dataIndex,
          l = e.dataType,
          u = o.getData(),
          h = Vc([u.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
          c = h.get("trigger");

      if (null == c || "item" === c) {
        var d = o.getDataParams(s, l),
            f = o.formatTooltip(s, !1, l),
            p = "item_" + o.name + "_" + s;
        this._showOrMove(h, function () {
          this._showTooltipContent(h, f, d, p, t.offsetX, t.offsetY, t.position, t.target);
        }), n({
          type: "showTip",
          dataIndexInside: s,
          dataIndex: u.getRawIndex(s),
          seriesIndex: r,
          from: this.uid
        });
      }
    },
    _showComponentItemTooltip: function (t, e, n) {
      var i = e.tooltip;

      if ("string" == typeof i) {
        var r = i;
        i = {
          content: r,
          formatter: r
        };
      }

      var a = new Aa(i, this._tooltipModel, this._ecModel),
          o = a.get("content"),
          s = Math.random();
      this._showOrMove(a, function () {
        this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
      }), n({
        type: "showTip",
        from: this.uid
      });
    },
    _showTooltipContent: function (t, e, n, i, r, a, o, s) {
      if (this._ticket = "", t.get("showContent") && t.get("show")) {
        var l = this._tooltipContent,
            u = t.get("formatter");
        o = o || t.get("position");
        var h = e;
        if (u && "string" == typeof u) h = io(u, n, !0);else if ("function" == typeof u) {
          var c = xx(function (e, i) {
            e === this._ticket && (l.setContent(i), this._updatePosition(t, o, r, a, l, n, s));
          }, this);
          this._ticket = i, h = u(n, i, c);
        }
        l.setContent(h), l.show(t), this._updatePosition(t, o, r, a, l, n, s);
      }
    },
    _updatePosition: function (t, e, n, i, r, a, o) {
      var s = this._api.getWidth(),
          l = this._api.getHeight();

      e = e || t.get("position");
      var u = r.getSize(),
          h = t.get("align"),
          c = t.get("verticalAlign"),
          d = o && o.getBoundingRect().clone();
      if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, {
        viewSize: [s, l],
        contentSize: u.slice()
      })), x(e)) n = Mx(e[0], s), i = Mx(e[1], l);else if (M(e)) {
        e.width = u[0], e.height = u[1];
        var f = ho(e, {
          width: s,
          height: l
        });
        n = f.x, i = f.y, h = null, c = null;
      } else if ("string" == typeof e && o) {
        var p = qc(e, d, u);
        n = p[0], i = p[1];
      } else {
        var p = Gc(n, i, r.el, s, l, h ? null : 20, c ? null : 20);
        n = p[0], i = p[1];
      }

      if (h && (n -= Uc(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Uc(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
        var p = Xc(n, i, r.el, s, l);
        n = p[0], i = p[1];
      }

      r.moveTo(n, i);
    },
    _updateContentNotChangedOnAxis: function (t) {
      var e = this._lastDataByCoordSys,
          n = !!e && e.length === t.length;
      return n && bx(e, function (e, i) {
        var r = e.dataByAxis || {},
            a = t[i] || {},
            o = a.dataByAxis || [];
        n &= r.length === o.length, n && bx(r, function (t, e) {
          var i = o[e] || {},
              r = t.seriesDataIndices || [],
              a = i.seriesDataIndices || [];
          n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && bx(r, function (t, e) {
            var i = a[e];
            n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;
          });
        });
      }), this._lastDataByCoordSys = t, !!n;
    },
    _hide: function (t) {
      this._lastDataByCoordSys = null, t({
        type: "hideTip",
        from: this.uid
      });
    },
    dispose: function (t, e) {
      Kc.node || Kc.wxa || (this._tooltipContent.hide(), xc("itemTooltip", e));
    }
  }), Cl({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, function () {}), Cl({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, function () {}), t.version = Am, t.dependencies = Pm, t.PRIORITY = Hm, t.init = vl, t.connect = ml, t.disConnect = yl, t.disconnect = sy, t.dispose = _l, t.getInstanceByDom = xl, t.getInstanceById = wl, t.registerTheme = bl, t.registerPreprocessor = Ml, t.registerProcessor = Sl, t.registerPostUpdate = Il, t.registerAction = Cl, t.registerCoordinateSystem = Tl, t.getCoordinateSystemDimensions = Dl, t.registerLayout = kl, t.registerVisual = Al, t.registerLoading = Ll, t.extendComponentModel = Ol, t.extendComponentView = Bl, t.extendSeriesModel = El, t.extendChartView = Rl, t.setCanvasCreator = zl, t.registerMap = Nl, t.getMap = Fl, t.dataTool = ly, t.zrender = Kf, t.graphic = Ng, t.number = Zg, t.format = iv, t.throttle = Ps, t.helper = o_, t.matrix = Sd, t.vector = md, t.color = Vd, t.parseGeoJSON = l_, t.parseGeoJson = d_, t.util = f_, t.List = yy, t.Model = Aa, t.Axis = c_, t.env = Kc;
});