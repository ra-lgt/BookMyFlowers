!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var n = e();
    for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
  }
})(self, function () {
  return (function () {
    var t = {
        6729: function (t) {
          "use strict";
          var e = Object.prototype.hasOwnProperty,
            n = "~";
          function r() {}
          function s(t, e, n) {
            (this.fn = t), (this.context = e), (this.once = n || !1);
          }
          function i(t, e, r, i, o) {
            if ("function" != typeof r)
              throw new TypeError("The listener must be a function");
            var l = new s(r, i || t, o),
              a = n ? n + e : e;
            return (
              t._events[a]
                ? t._events[a].fn
                  ? (t._events[a] = [t._events[a], l])
                  : t._events[a].push(l)
                : ((t._events[a] = l), t._eventsCount++),
              t
            );
          }
          function o(t, e) {
            0 == --t._eventsCount ? (t._events = new r()) : delete t._events[e];
          }
          function l() {
            (this._events = new r()), (this._eventsCount = 0);
          }
          Object.create &&
            ((r.prototype = Object.create(null)),
            new r().__proto__ || (n = !1)),
            (l.prototype.eventNames = function () {
              var t,
                r,
                s = [];
              if (0 === this._eventsCount) return s;
              for (r in (t = this._events))
                e.call(t, r) && s.push(n ? r.slice(1) : r);
              return Object.getOwnPropertySymbols
                ? s.concat(Object.getOwnPropertySymbols(t))
                : s;
            }),
            (l.prototype.listeners = function (t) {
              var e = n ? n + t : t,
                r = this._events[e];
              if (!r) return [];
              if (r.fn) return [r.fn];
              for (var s = 0, i = r.length, o = new Array(i); s < i; s++)
                o[s] = r[s].fn;
              return o;
            }),
            (l.prototype.listenerCount = function (t) {
              var e = n ? n + t : t,
                r = this._events[e];
              return r ? (r.fn ? 1 : r.length) : 0;
            }),
            (l.prototype.emit = function (t, e, r, s, i, o) {
              var l = n ? n + t : t;
              if (!this._events[l]) return !1;
              var a,
                c,
                u = this._events[l],
                h = arguments.length;
              if (u.fn) {
                switch (
                  (u.once && this.removeListener(t, u.fn, void 0, !0), h)
                ) {
                  case 1:
                    return u.fn.call(u.context), !0;
                  case 2:
                    return u.fn.call(u.context, e), !0;
                  case 3:
                    return u.fn.call(u.context, e, r), !0;
                  case 4:
                    return u.fn.call(u.context, e, r, s), !0;
                  case 5:
                    return u.fn.call(u.context, e, r, s, i), !0;
                  case 6:
                    return u.fn.call(u.context, e, r, s, i, o), !0;
                }
                for (c = 1, a = new Array(h - 1); c < h; c++)
                  a[c - 1] = arguments[c];
                u.fn.apply(u.context, a);
              } else {
                var d,
                  f = u.length;
                for (c = 0; c < f; c++)
                  switch (
                    (u[c].once && this.removeListener(t, u[c].fn, void 0, !0),
                    h)
                  ) {
                    case 1:
                      u[c].fn.call(u[c].context);
                      break;
                    case 2:
                      u[c].fn.call(u[c].context, e);
                      break;
                    case 3:
                      u[c].fn.call(u[c].context, e, r);
                      break;
                    case 4:
                      u[c].fn.call(u[c].context, e, r, s);
                      break;
                    default:
                      if (!a)
                        for (d = 1, a = new Array(h - 1); d < h; d++)
                          a[d - 1] = arguments[d];
                      u[c].fn.apply(u[c].context, a);
                  }
              }
              return !0;
            }),
            (l.prototype.on = function (t, e, n) {
              return i(this, t, e, n, !1);
            }),
            (l.prototype.once = function (t, e, n) {
              return i(this, t, e, n, !0);
            }),
            (l.prototype.removeListener = function (t, e, r, s) {
              var i = n ? n + t : t;
              if (!this._events[i]) return this;
              if (!e) return o(this, i), this;
              var l = this._events[i];
              if (l.fn)
                l.fn !== e ||
                  (s && !l.once) ||
                  (r && l.context !== r) ||
                  o(this, i);
              else {
                for (var a = 0, c = [], u = l.length; a < u; a++)
                  (l[a].fn !== e ||
                    (s && !l[a].once) ||
                    (r && l[a].context !== r)) &&
                    c.push(l[a]);
                c.length
                  ? (this._events[i] = 1 === c.length ? c[0] : c)
                  : o(this, i);
              }
              return this;
            }),
            (l.prototype.removeAllListeners = function (t) {
              var e;
              return (
                t
                  ? ((e = n ? n + t : t), this._events[e] && o(this, e))
                  : ((this._events = new r()), (this._eventsCount = 0)),
                this
              );
            }),
            (l.prototype.off = l.prototype.removeListener),
            (l.prototype.addListener = l.prototype.on),
            (l.prefixed = n),
            (l.EventEmitter = l),
            (t.exports = l);
        },
        7529: function (t) {
          var e = -1;
          function n(t, f, p, g, m) {
            if (t === f) return t ? [[0, t]] : [];
            if (null != p) {
              var v = (function (t, e, n) {
                var r =
                    "number" == typeof n ? { index: n, length: 0 } : n.oldRange,
                  s = "number" == typeof n ? null : n.newRange,
                  i = t.length,
                  o = e.length;
                if (0 === r.length && (null === s || 0 === s.length)) {
                  var l = r.index,
                    a = t.slice(0, l),
                    c = t.slice(l),
                    u = s ? s.index : null,
                    h = l + o - i;
                  if ((null === u || u === h) && !(h < 0 || h > o)) {
                    var d = e.slice(0, h);
                    if ((g = e.slice(h)) === c) {
                      var f = Math.min(l, h);
                      if ((v = a.slice(0, f)) === (x = d.slice(0, f)))
                        return b(v, a.slice(f), d.slice(f), c);
                    }
                  }
                  if (null === u || u === l) {
                    var p = l,
                      g = ((d = e.slice(0, p)), e.slice(p));
                    if (d === a) {
                      var m = Math.min(i - p, o - p);
                      if (
                        (y = c.slice(c.length - m)) ===
                        (N = g.slice(g.length - m))
                      )
                        return b(
                          a,
                          c.slice(0, c.length - m),
                          g.slice(0, g.length - m),
                          y
                        );
                    }
                  }
                }
                if (r.length > 0 && s && 0 === s.length) {
                  var v = t.slice(0, r.index),
                    y = t.slice(r.index + r.length);
                  if (!(o < (f = v.length) + (m = y.length))) {
                    var x = e.slice(0, f),
                      N = e.slice(o - m);
                    if (v === x && y === N)
                      return b(v, t.slice(f, i - m), e.slice(f, o - m), y);
                  }
                }
                return null;
              })(t, f, p);
              if (v) return v;
            }
            var y = s(t, f),
              x = t.substring(0, y);
            y = o((t = t.substring(y)), (f = f.substring(y)));
            var N = t.substring(t.length - y),
              E = (function (t, i) {
                var l;
                if (!t) return [[1, i]];
                if (!i) return [[e, t]];
                var a = t.length > i.length ? t : i,
                  c = t.length > i.length ? i : t,
                  u = a.indexOf(c);
                if (-1 !== u)
                  return (
                    (l = [
                      [1, a.substring(0, u)],
                      [0, c],
                      [1, a.substring(u + c.length)],
                    ]),
                    t.length > i.length && (l[0][0] = l[2][0] = e),
                    l
                  );
                if (1 === c.length)
                  return [
                    [e, t],
                    [1, i],
                  ];
                var h = (function (t, e) {
                  var n = t.length > e.length ? t : e,
                    r = t.length > e.length ? e : t;
                  if (n.length < 4 || 2 * r.length < n.length) return null;
                  function i(t, e, n) {
                    for (
                      var r,
                        i,
                        l,
                        a,
                        c = t.substring(n, n + Math.floor(t.length / 4)),
                        u = -1,
                        h = "";
                      -1 !== (u = e.indexOf(c, u + 1));

                    ) {
                      var d = s(t.substring(n), e.substring(u)),
                        f = o(t.substring(0, n), e.substring(0, u));
                      h.length < f + d &&
                        ((h = e.substring(u - f, u) + e.substring(u, u + d)),
                        (r = t.substring(0, n - f)),
                        (i = t.substring(n + d)),
                        (l = e.substring(0, u - f)),
                        (a = e.substring(u + d)));
                    }
                    return 2 * h.length >= t.length ? [r, i, l, a, h] : null;
                  }
                  var l,
                    a,
                    c,
                    u,
                    h,
                    d = i(n, r, Math.ceil(n.length / 4)),
                    f = i(n, r, Math.ceil(n.length / 2));
                  if (!d && !f) return null;
                  l = f ? (d && d[4].length > f[4].length ? d : f) : d;
                  t.length > e.length
                    ? ((a = l[0]), (c = l[1]), (u = l[2]), (h = l[3]))
                    : ((u = l[0]), (h = l[1]), (a = l[2]), (c = l[3]));
                  var p = l[4];
                  return [a, c, u, h, p];
                })(t, i);
                if (h) {
                  var d = h[0],
                    f = h[1],
                    p = h[2],
                    g = h[3],
                    m = h[4],
                    b = n(d, p),
                    v = n(f, g);
                  return b.concat([[0, m]], v);
                }
                return (function (t, n) {
                  for (
                    var s = t.length,
                      i = n.length,
                      o = Math.ceil((s + i) / 2),
                      l = o,
                      a = 2 * o,
                      c = new Array(a),
                      u = new Array(a),
                      h = 0;
                    h < a;
                    h++
                  )
                    (c[h] = -1), (u[h] = -1);
                  (c[l + 1] = 0), (u[l + 1] = 0);
                  for (
                    var d = s - i,
                      f = d % 2 != 0,
                      p = 0,
                      g = 0,
                      m = 0,
                      b = 0,
                      v = 0;
                    v < o;
                    v++
                  ) {
                    for (var y = -v + p; y <= v - g; y += 2) {
                      for (
                        var x = l + y,
                          N =
                            (k =
                              y === -v || (y !== v && c[x - 1] < c[x + 1])
                                ? c[x + 1]
                                : c[x - 1] + 1) - y;
                        k < s && N < i && t.charAt(k) === n.charAt(N);

                      )
                        k++, N++;
                      if (((c[x] = k), k > s)) g += 2;
                      else if (N > i) p += 2;
                      else if (f) {
                        if ((A = l + d - y) >= 0 && A < a && -1 !== u[A])
                          if (k >= (w = s - u[A])) return r(t, n, k, N);
                      }
                    }
                    for (var E = -v + m; E <= v - b; E += 2) {
                      for (
                        var w,
                          A = l + E,
                          q =
                            (w =
                              E === -v || (E !== v && u[A - 1] < u[A + 1])
                                ? u[A + 1]
                                : u[A - 1] + 1) - E;
                        w < s &&
                        q < i &&
                        t.charAt(s - w - 1) === n.charAt(i - q - 1);

                      )
                        w++, q++;
                      if (((u[A] = w), w > s)) b += 2;
                      else if (q > i) m += 2;
                      else if (!f) {
                        if ((x = l + d - E) >= 0 && x < a && -1 !== c[x]) {
                          var k;
                          N = l + (k = c[x]) - x;
                          if (k >= (w = s - w)) return r(t, n, k, N);
                        }
                      }
                    }
                  }
                  return [
                    [e, t],
                    [1, n],
                  ];
                })(t, i);
              })(
                (t = t.substring(0, t.length - y)),
                (f = f.substring(0, f.length - y))
              );
            return (
              x && E.unshift([0, x]),
              N && E.push([0, N]),
              d(E, m),
              g &&
                (function (t) {
                  var n = !1,
                    r = [],
                    s = 0,
                    f = null,
                    p = 0,
                    g = 0,
                    m = 0,
                    b = 0,
                    v = 0;
                  for (; p < t.length; )
                    0 == t[p][0]
                      ? ((r[s++] = p),
                        (g = b),
                        (m = v),
                        (b = 0),
                        (v = 0),
                        (f = t[p][1]))
                      : (1 == t[p][0]
                          ? (b += t[p][1].length)
                          : (v += t[p][1].length),
                        f &&
                          f.length <= Math.max(g, m) &&
                          f.length <= Math.max(b, v) &&
                          (t.splice(r[s - 1], 0, [e, f]),
                          (t[r[s - 1] + 1][0] = 1),
                          s--,
                          (p = --s > 0 ? r[s - 1] : -1),
                          (g = 0),
                          (m = 0),
                          (b = 0),
                          (v = 0),
                          (f = null),
                          (n = !0))),
                      p++;
                  n && d(t);
                  (function (t) {
                    function e(t, e) {
                      if (!t || !e) return 6;
                      var n = t.charAt(t.length - 1),
                        r = e.charAt(0),
                        s = n.match(l),
                        i = r.match(l),
                        o = s && n.match(a),
                        d = i && r.match(a),
                        f = o && n.match(c),
                        p = d && r.match(c),
                        g = f && t.match(u),
                        m = p && e.match(h);
                      return g || m
                        ? 5
                        : f || p
                        ? 4
                        : s && !o && d
                        ? 3
                        : o || d
                        ? 2
                        : s || i
                        ? 1
                        : 0;
                    }
                    var n = 1;
                    for (; n < t.length - 1; ) {
                      if (0 == t[n - 1][0] && 0 == t[n + 1][0]) {
                        var r = t[n - 1][1],
                          s = t[n][1],
                          i = t[n + 1][1],
                          d = o(r, s);
                        if (d) {
                          var f = s.substring(s.length - d);
                          (r = r.substring(0, r.length - d)),
                            (s = f + s.substring(0, s.length - d)),
                            (i = f + i);
                        }
                        for (
                          var p = r, g = s, m = i, b = e(r, s) + e(s, i);
                          s.charAt(0) === i.charAt(0);

                        ) {
                          (r += s.charAt(0)),
                            (s = s.substring(1) + i.charAt(0)),
                            (i = i.substring(1));
                          var v = e(r, s) + e(s, i);
                          v >= b && ((b = v), (p = r), (g = s), (m = i));
                        }
                        t[n - 1][1] != p &&
                          (p ? (t[n - 1][1] = p) : (t.splice(n - 1, 1), n--),
                          (t[n][1] = g),
                          m ? (t[n + 1][1] = m) : (t.splice(n + 1, 1), n--));
                      }
                      n++;
                    }
                  })(t),
                    (p = 1);
                  for (; p < t.length; ) {
                    if (t[p - 1][0] == e && 1 == t[p][0]) {
                      var y = t[p - 1][1],
                        x = t[p][1],
                        N = i(y, x),
                        E = i(x, y);
                      N >= E
                        ? (N >= y.length / 2 || N >= x.length / 2) &&
                          (t.splice(p, 0, [0, x.substring(0, N)]),
                          (t[p - 1][1] = y.substring(0, y.length - N)),
                          (t[p + 1][1] = x.substring(N)),
                          p++)
                        : (E >= y.length / 2 || E >= x.length / 2) &&
                          (t.splice(p, 0, [0, y.substring(0, E)]),
                          (t[p - 1][0] = 1),
                          (t[p - 1][1] = x.substring(0, x.length - E)),
                          (t[p + 1][0] = e),
                          (t[p + 1][1] = y.substring(E)),
                          p++),
                        p++;
                    }
                    p++;
                  }
                })(E),
              E
            );
          }
          function r(t, e, r, s) {
            var i = t.substring(0, r),
              o = e.substring(0, s),
              l = t.substring(r),
              a = e.substring(s),
              c = n(i, o),
              u = n(l, a);
            return c.concat(u);
          }
          function s(t, e) {
            if (!t || !e || t.charAt(0) !== e.charAt(0)) return 0;
            for (
              var n = 0, r = Math.min(t.length, e.length), s = r, i = 0;
              n < s;

            )
              t.substring(i, s) == e.substring(i, s) ? (i = n = s) : (r = s),
                (s = Math.floor((r - n) / 2 + n));
            return f(t.charCodeAt(s - 1)) && s--, s;
          }
          function i(t, e) {
            var n = t.length,
              r = e.length;
            if (0 == n || 0 == r) return 0;
            n > r ? (t = t.substring(n - r)) : n < r && (e = e.substring(0, n));
            var s = Math.min(n, r);
            if (t == e) return s;
            for (var i = 0, o = 1; ; ) {
              var l = t.substring(s - o),
                a = e.indexOf(l);
              if (-1 == a) return i;
              (o += a),
                (0 != a && t.substring(s - o) != e.substring(0, o)) ||
                  ((i = o), o++);
            }
          }
          function o(t, e) {
            if (!t || !e || t.slice(-1) !== e.slice(-1)) return 0;
            for (
              var n = 0, r = Math.min(t.length, e.length), s = r, i = 0;
              n < s;

            )
              t.substring(t.length - s, t.length - i) ==
              e.substring(e.length - s, e.length - i)
                ? (i = n = s)
                : (r = s),
                (s = Math.floor((r - n) / 2 + n));
            return p(t.charCodeAt(t.length - s)) && s--, s;
          }
          var l = /[^a-zA-Z0-9]/,
            a = /\s/,
            c = /[\r\n]/,
            u = /\n\r?\n$/,
            h = /^\r?\n\r?\n/;
          function d(t, n) {
            t.push([0, ""]);
            for (var r, i = 0, l = 0, a = 0, c = "", u = ""; i < t.length; )
              if (i < t.length - 1 && !t[i][1]) t.splice(i, 1);
              else
                switch (t[i][0]) {
                  case 1:
                    a++, (u += t[i][1]), i++;
                    break;
                  case e:
                    l++, (c += t[i][1]), i++;
                    break;
                  case 0:
                    var h = i - a - l - 1;
                    if (n) {
                      if (h >= 0 && m(t[h][1])) {
                        var f = t[h][1].slice(-1);
                        if (
                          ((t[h][1] = t[h][1].slice(0, -1)),
                          (c = f + c),
                          (u = f + u),
                          !t[h][1])
                        ) {
                          t.splice(h, 1), i--;
                          var p = h - 1;
                          t[p] &&
                            1 === t[p][0] &&
                            (a++, (u = t[p][1] + u), p--),
                            t[p] &&
                              t[p][0] === e &&
                              (l++, (c = t[p][1] + c), p--),
                            (h = p);
                        }
                      }
                      if (g(t[i][1])) {
                        f = t[i][1].charAt(0);
                        (t[i][1] = t[i][1].slice(1)), (c += f), (u += f);
                      }
                    }
                    if (i < t.length - 1 && !t[i][1]) {
                      t.splice(i, 1);
                      break;
                    }
                    if (c.length > 0 || u.length > 0) {
                      c.length > 0 &&
                        u.length > 0 &&
                        (0 !== (r = s(u, c)) &&
                          (h >= 0
                            ? (t[h][1] += u.substring(0, r))
                            : (t.splice(0, 0, [0, u.substring(0, r)]), i++),
                          (u = u.substring(r)),
                          (c = c.substring(r))),
                        0 !== (r = o(u, c)) &&
                          ((t[i][1] = u.substring(u.length - r) + t[i][1]),
                          (u = u.substring(0, u.length - r)),
                          (c = c.substring(0, c.length - r))));
                      var b = a + l;
                      0 === c.length && 0 === u.length
                        ? (t.splice(i - b, b), (i -= b))
                        : 0 === c.length
                        ? (t.splice(i - b, b, [1, u]), (i = i - b + 1))
                        : 0 === u.length
                        ? (t.splice(i - b, b, [e, c]), (i = i - b + 1))
                        : (t.splice(i - b, b, [e, c], [1, u]), (i = i - b + 2));
                    }
                    0 !== i && 0 === t[i - 1][0]
                      ? ((t[i - 1][1] += t[i][1]), t.splice(i, 1))
                      : i++,
                      (a = 0),
                      (l = 0),
                      (c = ""),
                      (u = "");
                }
            "" === t[t.length - 1][1] && t.pop();
            var v = !1;
            for (i = 1; i < t.length - 1; )
              0 === t[i - 1][0] &&
                0 === t[i + 1][0] &&
                (t[i][1].substring(t[i][1].length - t[i - 1][1].length) ===
                t[i - 1][1]
                  ? ((t[i][1] =
                      t[i - 1][1] +
                      t[i][1].substring(
                        0,
                        t[i][1].length - t[i - 1][1].length
                      )),
                    (t[i + 1][1] = t[i - 1][1] + t[i + 1][1]),
                    t.splice(i - 1, 1),
                    (v = !0))
                  : t[i][1].substring(0, t[i + 1][1].length) == t[i + 1][1] &&
                    ((t[i - 1][1] += t[i + 1][1]),
                    (t[i][1] =
                      t[i][1].substring(t[i + 1][1].length) + t[i + 1][1]),
                    t.splice(i + 1, 1),
                    (v = !0))),
                i++;
            v && d(t, n);
          }
          function f(t) {
            return t >= 55296 && t <= 56319;
          }
          function p(t) {
            return t >= 56320 && t <= 57343;
          }
          function g(t) {
            return p(t.charCodeAt(0));
          }
          function m(t) {
            return f(t.charCodeAt(t.length - 1));
          }
          function b(t, n, r, s) {
            return m(t) || g(s)
              ? null
              : (function (t) {
                  for (var e = [], n = 0; n < t.length; n++)
                    t[n][1].length > 0 && e.push(t[n]);
                  return e;
                })([
                  [0, t],
                  [e, n],
                  [1, r],
                  [0, s],
                ]);
          }
          function v(t, e, r, s) {
            return n(t, e, r, s, !0);
          }
          (v.INSERT = 1), (v.DELETE = e), (v.EQUAL = 0), (t.exports = v);
        },
        3465: function (t, e, n) {
          t = n.nmd(t);
          var r = "__lodash_hash_undefined__",
            s = 9007199254740991,
            i = "[object Arguments]",
            o = "[object Boolean]",
            l = "[object Date]",
            a = "[object Function]",
            c = "[object GeneratorFunction]",
            u = "[object Map]",
            h = "[object Number]",
            d = "[object Object]",
            f = "[object Promise]",
            p = "[object RegExp]",
            g = "[object Set]",
            m = "[object String]",
            b = "[object Symbol]",
            v = "[object WeakMap]",
            y = "[object ArrayBuffer]",
            x = "[object DataView]",
            N = "[object Float32Array]",
            E = "[object Float64Array]",
            w = "[object Int8Array]",
            A = "[object Int16Array]",
            q = "[object Int32Array]",
            k = "[object Uint8Array]",
            _ = "[object Uint8ClampedArray]",
            L = "[object Uint16Array]",
            O = "[object Uint32Array]",
            S = /\w*$/,
            T = /^\[object .+?Constructor\]$/,
            j = /^(?:0|[1-9]\d*)$/,
            C = {};
          (C[i] =
            C["[object Array]"] =
            C[y] =
            C[x] =
            C[o] =
            C[l] =
            C[N] =
            C[E] =
            C[w] =
            C[A] =
            C[q] =
            C[u] =
            C[h] =
            C[d] =
            C[p] =
            C[g] =
            C[m] =
            C[b] =
            C[k] =
            C[_] =
            C[L] =
            C[O] =
              !0),
            (C["[object Error]"] = C[a] = C[v] = !1);
          var R = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            I =
              "object" == typeof self && self && self.Object === Object && self,
            M = R || I || Function("return this")(),
            B = e && !e.nodeType && e,
            D = B && t && !t.nodeType && t,
            U = D && D.exports === B;
          function P(t, e) {
            return t.set(e[0], e[1]), t;
          }
          function z(t, e) {
            return t.add(e), t;
          }
          function F(t, e, n, r) {
            var s = -1,
              i = t ? t.length : 0;
            for (r && i && (n = t[++s]); ++s < i; ) n = e(n, t[s], s, t);
            return n;
          }
          function H(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
              try {
                e = !!(t + "");
              } catch (t) {}
            return e;
          }
          function $(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          }
          function V(t, e) {
            return function (n) {
              return t(e(n));
            };
          }
          function K(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          var W,
            Z = Array.prototype,
            G = Function.prototype,
            X = Object.prototype,
            Y = M["__core-js_shared__"],
            Q = (W = /[^.]+$/.exec((Y && Y.keys && Y.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + W
              : "",
            J = G.toString,
            tt = X.hasOwnProperty,
            et = X.toString,
            nt = RegExp(
              "^" +
                J.call(tt)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            rt = U ? M.Buffer : void 0,
            st = M.Symbol,
            it = M.Uint8Array,
            ot = V(Object.getPrototypeOf, Object),
            lt = Object.create,
            at = X.propertyIsEnumerable,
            ct = Z.splice,
            ut = Object.getOwnPropertySymbols,
            ht = rt ? rt.isBuffer : void 0,
            dt = V(Object.keys, Object),
            ft = Dt(M, "DataView"),
            pt = Dt(M, "Map"),
            gt = Dt(M, "Promise"),
            mt = Dt(M, "Set"),
            bt = Dt(M, "WeakMap"),
            vt = Dt(Object, "create"),
            yt = Ht(ft),
            xt = Ht(pt),
            Nt = Ht(gt),
            Et = Ht(mt),
            wt = Ht(bt),
            At = st ? st.prototype : void 0,
            qt = At ? At.valueOf : void 0;
          function kt(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function _t(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function Lt(t) {
            var e = -1,
              n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function Ot(t) {
            this.__data__ = new _t(t);
          }
          function St(t, e) {
            var n =
                Vt(t) ||
                (function (t) {
                  return (
                    (function (t) {
                      return (
                        (function (t) {
                          return !!t && "object" == typeof t;
                        })(t) && Kt(t)
                      );
                    })(t) &&
                    tt.call(t, "callee") &&
                    (!at.call(t, "callee") || et.call(t) == i)
                  );
                })(t)
                  ? (function (t, e) {
                      for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                      return r;
                    })(t.length, String)
                  : [],
              r = n.length,
              s = !!r;
            for (var o in t)
              (!e && !tt.call(t, o)) ||
                (s && ("length" == o || zt(o, r))) ||
                n.push(o);
            return n;
          }
          function Tt(t, e, n) {
            var r = t[e];
            (tt.call(t, e) && $t(r, n) && (void 0 !== n || e in t)) ||
              (t[e] = n);
          }
          function jt(t, e) {
            for (var n = t.length; n--; ) if ($t(t[n][0], e)) return n;
            return -1;
          }
          function Ct(t, e, n, r, s, f, v) {
            var T;
            if ((r && (T = f ? r(t, s, f, v) : r(t)), void 0 !== T)) return T;
            if (!Gt(t)) return t;
            var j = Vt(t);
            if (j) {
              if (
                ((T = (function (t) {
                  var e = t.length,
                    n = t.constructor(e);
                  e &&
                    "string" == typeof t[0] &&
                    tt.call(t, "index") &&
                    ((n.index = t.index), (n.input = t.input));
                  return n;
                })(t)),
                !e)
              )
                return (function (t, e) {
                  var n = -1,
                    r = t.length;
                  e || (e = Array(r));
                  for (; ++n < r; ) e[n] = t[n];
                  return e;
                })(t, T);
            } else {
              var R = Pt(t),
                I = R == a || R == c;
              if (Wt(t))
                return (function (t, e) {
                  if (e) return t.slice();
                  var n = new t.constructor(t.length);
                  return t.copy(n), n;
                })(t, e);
              if (R == d || R == i || (I && !f)) {
                if (H(t)) return f ? t : {};
                if (
                  ((T = (function (t) {
                    return "function" != typeof t.constructor || Ft(t)
                      ? {}
                      : ((e = ot(t)), Gt(e) ? lt(e) : {});
                    var e;
                  })(I ? {} : t)),
                  !e)
                )
                  return (function (t, e) {
                    return Mt(t, Ut(t), e);
                  })(
                    t,
                    (function (t, e) {
                      return t && Mt(e, Xt(e), t);
                    })(T, t)
                  );
              } else {
                if (!C[R]) return f ? t : {};
                T = (function (t, e, n, r) {
                  var s = t.constructor;
                  switch (e) {
                    case y:
                      return It(t);
                    case o:
                    case l:
                      return new s(+t);
                    case x:
                      return (function (t, e) {
                        var n = e ? It(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.byteLength);
                      })(t, r);
                    case N:
                    case E:
                    case w:
                    case A:
                    case q:
                    case k:
                    case _:
                    case L:
                    case O:
                      return (function (t, e) {
                        var n = e ? It(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.length);
                      })(t, r);
                    case u:
                      return (function (t, e, n) {
                        var r = e ? n($(t), !0) : $(t);
                        return F(r, P, new t.constructor());
                      })(t, r, n);
                    case h:
                    case m:
                      return new s(t);
                    case p:
                      return (function (t) {
                        var e = new t.constructor(t.source, S.exec(t));
                        return (e.lastIndex = t.lastIndex), e;
                      })(t);
                    case g:
                      return (function (t, e, n) {
                        var r = e ? n(K(t), !0) : K(t);
                        return F(r, z, new t.constructor());
                      })(t, r, n);
                    case b:
                      return (i = t), qt ? Object(qt.call(i)) : {};
                  }
                  var i;
                })(t, R, Ct, e);
              }
            }
            v || (v = new Ot());
            var M = v.get(t);
            if (M) return M;
            if ((v.set(t, T), !j))
              var B = n
                ? (function (t) {
                    return (function (t, e, n) {
                      var r = e(t);
                      return Vt(t)
                        ? r
                        : (function (t, e) {
                            for (
                              var n = -1, r = e.length, s = t.length;
                              ++n < r;

                            )
                              t[s + n] = e[n];
                            return t;
                          })(r, n(t));
                    })(t, Xt, Ut);
                  })(t)
                : Xt(t);
            return (
              (function (t, e) {
                for (
                  var n = -1, r = t ? t.length : 0;
                  ++n < r && !1 !== e(t[n], n, t);

                );
              })(B || t, function (s, i) {
                B && (s = t[(i = s)]), Tt(T, i, Ct(s, e, n, r, i, t, v));
              }),
              T
            );
          }
          function Rt(t) {
            return (
              !(!Gt(t) || ((e = t), Q && Q in e)) &&
              (Zt(t) || H(t) ? nt : T).test(Ht(t))
            );
            var e;
          }
          function It(t) {
            var e = new t.constructor(t.byteLength);
            return new it(e).set(new it(t)), e;
          }
          function Mt(t, e, n, r) {
            n || (n = {});
            for (var s = -1, i = e.length; ++s < i; ) {
              var o = e[s],
                l = r ? r(n[o], t[o], o, n, t) : void 0;
              Tt(n, o, void 0 === l ? t[o] : l);
            }
            return n;
          }
          function Bt(t, e) {
            var n,
              r,
              s = t.__data__;
            return (
              "string" == (r = typeof (n = e)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? s["string" == typeof e ? "string" : "hash"]
              : s.map;
          }
          function Dt(t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return Rt(n) ? n : void 0;
          }
          (kt.prototype.clear = function () {
            this.__data__ = vt ? vt(null) : {};
          }),
            (kt.prototype.delete = function (t) {
              return this.has(t) && delete this.__data__[t];
            }),
            (kt.prototype.get = function (t) {
              var e = this.__data__;
              if (vt) {
                var n = e[t];
                return n === r ? void 0 : n;
              }
              return tt.call(e, t) ? e[t] : void 0;
            }),
            (kt.prototype.has = function (t) {
              var e = this.__data__;
              return vt ? void 0 !== e[t] : tt.call(e, t);
            }),
            (kt.prototype.set = function (t, e) {
              return (this.__data__[t] = vt && void 0 === e ? r : e), this;
            }),
            (_t.prototype.clear = function () {
              this.__data__ = [];
            }),
            (_t.prototype.delete = function (t) {
              var e = this.__data__,
                n = jt(e, t);
              return (
                !(n < 0) && (n == e.length - 1 ? e.pop() : ct.call(e, n, 1), !0)
              );
            }),
            (_t.prototype.get = function (t) {
              var e = this.__data__,
                n = jt(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (_t.prototype.has = function (t) {
              return jt(this.__data__, t) > -1;
            }),
            (_t.prototype.set = function (t, e) {
              var n = this.__data__,
                r = jt(n, t);
              return r < 0 ? n.push([t, e]) : (n[r][1] = e), this;
            }),
            (Lt.prototype.clear = function () {
              this.__data__ = {
                hash: new kt(),
                map: new (pt || _t)(),
                string: new kt(),
              };
            }),
            (Lt.prototype.delete = function (t) {
              return Bt(this, t).delete(t);
            }),
            (Lt.prototype.get = function (t) {
              return Bt(this, t).get(t);
            }),
            (Lt.prototype.has = function (t) {
              return Bt(this, t).has(t);
            }),
            (Lt.prototype.set = function (t, e) {
              return Bt(this, t).set(t, e), this;
            }),
            (Ot.prototype.clear = function () {
              this.__data__ = new _t();
            }),
            (Ot.prototype.delete = function (t) {
              return this.__data__.delete(t);
            }),
            (Ot.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (Ot.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (Ot.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof _t) {
                var r = n.__data__;
                if (!pt || r.length < 199) return r.push([t, e]), this;
                n = this.__data__ = new Lt(r);
              }
              return n.set(t, e), this;
            });
          var Ut = ut
              ? V(ut, Object)
              : function () {
                  return [];
                },
            Pt = function (t) {
              return et.call(t);
            };
          function zt(t, e) {
            return (
              !!(e = null == e ? s : e) &&
              ("number" == typeof t || j.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function Ft(t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || X);
          }
          function Ht(t) {
            if (null != t) {
              try {
                return J.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function $t(t, e) {
            return t === e || (t != t && e != e);
          }
          ((ft && Pt(new ft(new ArrayBuffer(1))) != x) ||
            (pt && Pt(new pt()) != u) ||
            (gt && Pt(gt.resolve()) != f) ||
            (mt && Pt(new mt()) != g) ||
            (bt && Pt(new bt()) != v)) &&
            (Pt = function (t) {
              var e = et.call(t),
                n = e == d ? t.constructor : void 0,
                r = n ? Ht(n) : void 0;
              if (r)
                switch (r) {
                  case yt:
                    return x;
                  case xt:
                    return u;
                  case Nt:
                    return f;
                  case Et:
                    return g;
                  case wt:
                    return v;
                }
              return e;
            });
          var Vt = Array.isArray;
          function Kt(t) {
            return (
              null != t &&
              (function (t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s;
              })(t.length) &&
              !Zt(t)
            );
          }
          var Wt =
            ht ||
            function () {
              return !1;
            };
          function Zt(t) {
            var e = Gt(t) ? et.call(t) : "";
            return e == a || e == c;
          }
          function Gt(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e);
          }
          function Xt(t) {
            return Kt(t)
              ? St(t)
              : (function (t) {
                  if (!Ft(t)) return dt(t);
                  var e = [];
                  for (var n in Object(t))
                    tt.call(t, n) && "constructor" != n && e.push(n);
                  return e;
                })(t);
          }
          t.exports = function (t) {
            return Ct(t, !0, !0);
          };
        },
        2307: function (t, e, n) {
          t = n.nmd(t);
          var r = "__lodash_hash_undefined__",
            s = 9007199254740991,
            i = "[object Arguments]",
            o = "[object Array]",
            l = "[object Boolean]",
            a = "[object Date]",
            c = "[object Error]",
            u = "[object Function]",
            h = "[object Map]",
            d = "[object Number]",
            f = "[object Object]",
            p = "[object Promise]",
            g = "[object RegExp]",
            m = "[object Set]",
            b = "[object String]",
            v = "[object Symbol]",
            y = "[object WeakMap]",
            x = "[object ArrayBuffer]",
            N = "[object DataView]",
            E = /^\[object .+?Constructor\]$/,
            w = /^(?:0|[1-9]\d*)$/,
            A = {};
          (A["[object Float32Array]"] =
            A["[object Float64Array]"] =
            A["[object Int8Array]"] =
            A["[object Int16Array]"] =
            A["[object Int32Array]"] =
            A["[object Uint8Array]"] =
            A["[object Uint8ClampedArray]"] =
            A["[object Uint16Array]"] =
            A["[object Uint32Array]"] =
              !0),
            (A[i] =
              A[o] =
              A[x] =
              A[l] =
              A[N] =
              A[a] =
              A[c] =
              A[u] =
              A[h] =
              A[d] =
              A[f] =
              A[g] =
              A[m] =
              A[b] =
              A[y] =
                !1);
          var q = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            k =
              "object" == typeof self && self && self.Object === Object && self,
            _ = q || k || Function("return this")(),
            L = e && !e.nodeType && e,
            O = L && t && !t.nodeType && t,
            S = O && O.exports === L,
            T = S && q.process,
            j = (function () {
              try {
                return T && T.binding && T.binding("util");
              } catch (t) {}
            })(),
            C = j && j.isTypedArray;
          function R(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
              if (e(t[n], n, t)) return !0;
            return !1;
          }
          function I(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          }
          function M(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          var B,
            D,
            U,
            P = Array.prototype,
            z = Function.prototype,
            F = Object.prototype,
            H = _["__core-js_shared__"],
            $ = z.toString,
            V = F.hasOwnProperty,
            K = (B = /[^.]+$/.exec((H && H.keys && H.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + B
              : "",
            W = F.toString,
            Z = RegExp(
              "^" +
                $.call(V)
                  .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            G = S ? _.Buffer : void 0,
            X = _.Symbol,
            Y = _.Uint8Array,
            Q = F.propertyIsEnumerable,
            J = P.splice,
            tt = X ? X.toStringTag : void 0,
            et = Object.getOwnPropertySymbols,
            nt = G ? G.isBuffer : void 0,
            rt =
              ((D = Object.keys),
              (U = Object),
              function (t) {
                return D(U(t));
              }),
            st = jt(_, "DataView"),
            it = jt(_, "Map"),
            ot = jt(_, "Promise"),
            lt = jt(_, "Set"),
            at = jt(_, "WeakMap"),
            ct = jt(Object, "create"),
            ut = Mt(st),
            ht = Mt(it),
            dt = Mt(ot),
            ft = Mt(lt),
            pt = Mt(at),
            gt = X ? X.prototype : void 0,
            mt = gt ? gt.valueOf : void 0;
          function bt(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function vt(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function yt(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
              var r = t[e];
              this.set(r[0], r[1]);
            }
          }
          function xt(t) {
            var e = -1,
              n = null == t ? 0 : t.length;
            for (this.__data__ = new yt(); ++e < n; ) this.add(t[e]);
          }
          function Nt(t) {
            var e = (this.__data__ = new vt(t));
            this.size = e.size;
          }
          function Et(t, e) {
            var n = Ut(t),
              r = !n && Dt(t),
              s = !n && !r && Pt(t),
              i = !n && !r && !s && Vt(t),
              o = n || r || s || i,
              l = o
                ? (function (t, e) {
                    for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
                    return r;
                  })(t.length, String)
                : [],
              a = l.length;
            for (var c in t)
              (!e && !V.call(t, c)) ||
                (o &&
                  ("length" == c ||
                    (s && ("offset" == c || "parent" == c)) ||
                    (i &&
                      ("buffer" == c ||
                        "byteLength" == c ||
                        "byteOffset" == c)) ||
                    It(c, a))) ||
                l.push(c);
            return l;
          }
          function wt(t, e) {
            for (var n = t.length; n--; ) if (Bt(t[n][0], e)) return n;
            return -1;
          }
          function At(t) {
            return null == t
              ? void 0 === t
                ? "[object Undefined]"
                : "[object Null]"
              : tt && tt in Object(t)
              ? (function (t) {
                  var e = V.call(t, tt),
                    n = t[tt];
                  try {
                    t[tt] = void 0;
                    var r = !0;
                  } catch (t) {}
                  var s = W.call(t);
                  r && (e ? (t[tt] = n) : delete t[tt]);
                  return s;
                })(t)
              : (function (t) {
                  return W.call(t);
                })(t);
          }
          function qt(t) {
            return $t(t) && At(t) == i;
          }
          function kt(t, e, n, r, s) {
            return (
              t === e ||
              (null == t || null == e || (!$t(t) && !$t(e))
                ? t != t && e != e
                : (function (t, e, n, r, s, u) {
                    var p = Ut(t),
                      y = Ut(e),
                      E = p ? o : Rt(t),
                      w = y ? o : Rt(e),
                      A = (E = E == i ? f : E) == f,
                      q = (w = w == i ? f : w) == f,
                      k = E == w;
                    if (k && Pt(t)) {
                      if (!Pt(e)) return !1;
                      (p = !0), (A = !1);
                    }
                    if (k && !A)
                      return (
                        u || (u = new Nt()),
                        p || Vt(t)
                          ? Ot(t, e, n, r, s, u)
                          : (function (t, e, n, r, s, i, o) {
                              switch (n) {
                                case N:
                                  if (
                                    t.byteLength != e.byteLength ||
                                    t.byteOffset != e.byteOffset
                                  )
                                    return !1;
                                  (t = t.buffer), (e = e.buffer);
                                case x:
                                  return !(
                                    t.byteLength != e.byteLength ||
                                    !i(new Y(t), new Y(e))
                                  );
                                case l:
                                case a:
                                case d:
                                  return Bt(+t, +e);
                                case c:
                                  return (
                                    t.name == e.name && t.message == e.message
                                  );
                                case g:
                                case b:
                                  return t == e + "";
                                case h:
                                  var u = I;
                                case m:
                                  var f = 1 & r;
                                  if ((u || (u = M), t.size != e.size && !f))
                                    return !1;
                                  var p = o.get(t);
                                  if (p) return p == e;
                                  (r |= 2), o.set(t, e);
                                  var y = Ot(u(t), u(e), r, s, i, o);
                                  return o.delete(t), y;
                                case v:
                                  if (mt) return mt.call(t) == mt.call(e);
                              }
                              return !1;
                            })(t, e, E, n, r, s, u)
                      );
                    if (!(1 & n)) {
                      var _ = A && V.call(t, "__wrapped__"),
                        L = q && V.call(e, "__wrapped__");
                      if (_ || L) {
                        var O = _ ? t.value() : t,
                          S = L ? e.value() : e;
                        return u || (u = new Nt()), s(O, S, n, r, u);
                      }
                    }
                    if (!k) return !1;
                    return (
                      u || (u = new Nt()),
                      (function (t, e, n, r, s, i) {
                        var o = 1 & n,
                          l = St(t),
                          a = l.length,
                          c = St(e),
                          u = c.length;
                        if (a != u && !o) return !1;
                        var h = a;
                        for (; h--; ) {
                          var d = l[h];
                          if (!(o ? d in e : V.call(e, d))) return !1;
                        }
                        var f = i.get(t);
                        if (f && i.get(e)) return f == e;
                        var p = !0;
                        i.set(t, e), i.set(e, t);
                        var g = o;
                        for (; ++h < a; ) {
                          var m = t[(d = l[h])],
                            b = e[d];
                          if (r)
                            var v = o
                              ? r(b, m, d, e, t, i)
                              : r(m, b, d, t, e, i);
                          if (
                            !(void 0 === v ? m === b || s(m, b, n, r, i) : v)
                          ) {
                            p = !1;
                            break;
                          }
                          g || (g = "constructor" == d);
                        }
                        if (p && !g) {
                          var y = t.constructor,
                            x = e.constructor;
                          y == x ||
                            !("constructor" in t) ||
                            !("constructor" in e) ||
                            ("function" == typeof y &&
                              y instanceof y &&
                              "function" == typeof x &&
                              x instanceof x) ||
                            (p = !1);
                        }
                        return i.delete(t), i.delete(e), p;
                      })(t, e, n, r, s, u)
                    );
                  })(t, e, n, r, kt, s))
            );
          }
          function _t(t) {
            return (
              !(
                !Ht(t) ||
                (function (t) {
                  return !!K && K in t;
                })(t)
              ) && (zt(t) ? Z : E).test(Mt(t))
            );
          }
          function Lt(t) {
            if (
              ((n = (e = t) && e.constructor),
              (r = ("function" == typeof n && n.prototype) || F),
              e !== r)
            )
              return rt(t);
            var e,
              n,
              r,
              s = [];
            for (var i in Object(t))
              V.call(t, i) && "constructor" != i && s.push(i);
            return s;
          }
          function Ot(t, e, n, r, s, i) {
            var o = 1 & n,
              l = t.length,
              a = e.length;
            if (l != a && !(o && a > l)) return !1;
            var c = i.get(t);
            if (c && i.get(e)) return c == e;
            var u = -1,
              h = !0,
              d = 2 & n ? new xt() : void 0;
            for (i.set(t, e), i.set(e, t); ++u < l; ) {
              var f = t[u],
                p = e[u];
              if (r) var g = o ? r(p, f, u, e, t, i) : r(f, p, u, t, e, i);
              if (void 0 !== g) {
                if (g) continue;
                h = !1;
                break;
              }
              if (d) {
                if (
                  !R(e, function (t, e) {
                    if (((o = e), !d.has(o) && (f === t || s(f, t, n, r, i))))
                      return d.push(e);
                    var o;
                  })
                ) {
                  h = !1;
                  break;
                }
              } else if (f !== p && !s(f, p, n, r, i)) {
                h = !1;
                break;
              }
            }
            return i.delete(t), i.delete(e), h;
          }
          function St(t) {
            return (function (t, e, n) {
              var r = e(t);
              return Ut(t)
                ? r
                : (function (t, e) {
                    for (var n = -1, r = e.length, s = t.length; ++n < r; )
                      t[s + n] = e[n];
                    return t;
                  })(r, n(t));
            })(t, Kt, Ct);
          }
          function Tt(t, e) {
            var n,
              r,
              s = t.__data__;
            return (
              "string" == (r = typeof (n = e)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? s["string" == typeof e ? "string" : "hash"]
              : s.map;
          }
          function jt(t, e) {
            var n = (function (t, e) {
              return null == t ? void 0 : t[e];
            })(t, e);
            return _t(n) ? n : void 0;
          }
          (bt.prototype.clear = function () {
            (this.__data__ = ct ? ct(null) : {}), (this.size = 0);
          }),
            (bt.prototype.delete = function (t) {
              var e = this.has(t) && delete this.__data__[t];
              return (this.size -= e ? 1 : 0), e;
            }),
            (bt.prototype.get = function (t) {
              var e = this.__data__;
              if (ct) {
                var n = e[t];
                return n === r ? void 0 : n;
              }
              return V.call(e, t) ? e[t] : void 0;
            }),
            (bt.prototype.has = function (t) {
              var e = this.__data__;
              return ct ? void 0 !== e[t] : V.call(e, t);
            }),
            (bt.prototype.set = function (t, e) {
              var n = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (n[t] = ct && void 0 === e ? r : e),
                this
              );
            }),
            (vt.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (vt.prototype.delete = function (t) {
              var e = this.__data__,
                n = wt(e, t);
              return (
                !(n < 0) &&
                (n == e.length - 1 ? e.pop() : J.call(e, n, 1), --this.size, !0)
              );
            }),
            (vt.prototype.get = function (t) {
              var e = this.__data__,
                n = wt(e, t);
              return n < 0 ? void 0 : e[n][1];
            }),
            (vt.prototype.has = function (t) {
              return wt(this.__data__, t) > -1;
            }),
            (vt.prototype.set = function (t, e) {
              var n = this.__data__,
                r = wt(n, t);
              return (
                r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
              );
            }),
            (yt.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new bt(),
                  map: new (it || vt)(),
                  string: new bt(),
                });
            }),
            (yt.prototype.delete = function (t) {
              var e = Tt(this, t).delete(t);
              return (this.size -= e ? 1 : 0), e;
            }),
            (yt.prototype.get = function (t) {
              return Tt(this, t).get(t);
            }),
            (yt.prototype.has = function (t) {
              return Tt(this, t).has(t);
            }),
            (yt.prototype.set = function (t, e) {
              var n = Tt(this, t),
                r = n.size;
              return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
            }),
            (xt.prototype.add = xt.prototype.push =
              function (t) {
                return this.__data__.set(t, r), this;
              }),
            (xt.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (Nt.prototype.clear = function () {
              (this.__data__ = new vt()), (this.size = 0);
            }),
            (Nt.prototype.delete = function (t) {
              var e = this.__data__,
                n = e.delete(t);
              return (this.size = e.size), n;
            }),
            (Nt.prototype.get = function (t) {
              return this.__data__.get(t);
            }),
            (Nt.prototype.has = function (t) {
              return this.__data__.has(t);
            }),
            (Nt.prototype.set = function (t, e) {
              var n = this.__data__;
              if (n instanceof vt) {
                var r = n.__data__;
                if (!it || r.length < 199)
                  return r.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new yt(r);
              }
              return n.set(t, e), (this.size = n.size), this;
            });
          var Ct = et
              ? function (t) {
                  return null == t
                    ? []
                    : ((t = Object(t)),
                      (function (t, e) {
                        for (
                          var n = -1,
                            r = null == t ? 0 : t.length,
                            s = 0,
                            i = [];
                          ++n < r;

                        ) {
                          var o = t[n];
                          e(o, n, t) && (i[s++] = o);
                        }
                        return i;
                      })(et(t), function (e) {
                        return Q.call(t, e);
                      }));
                }
              : function () {
                  return [];
                },
            Rt = At;
          function It(t, e) {
            return (
              !!(e = null == e ? s : e) &&
              ("number" == typeof t || w.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          }
          function Mt(t) {
            if (null != t) {
              try {
                return $.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          }
          function Bt(t, e) {
            return t === e || (t != t && e != e);
          }
          ((st && Rt(new st(new ArrayBuffer(1))) != N) ||
            (it && Rt(new it()) != h) ||
            (ot && Rt(ot.resolve()) != p) ||
            (lt && Rt(new lt()) != m) ||
            (at && Rt(new at()) != y)) &&
            (Rt = function (t) {
              var e = At(t),
                n = e == f ? t.constructor : void 0,
                r = n ? Mt(n) : "";
              if (r)
                switch (r) {
                  case ut:
                    return N;
                  case ht:
                    return h;
                  case dt:
                    return p;
                  case ft:
                    return m;
                  case pt:
                    return y;
                }
              return e;
            });
          var Dt = qt(
              (function () {
                return arguments;
              })()
            )
              ? qt
              : function (t) {
                  return $t(t) && V.call(t, "callee") && !Q.call(t, "callee");
                },
            Ut = Array.isArray;
          var Pt =
            nt ||
            function () {
              return !1;
            };
          function zt(t) {
            if (!Ht(t)) return !1;
            var e = At(t);
            return (
              e == u ||
              "[object GeneratorFunction]" == e ||
              "[object AsyncFunction]" == e ||
              "[object Proxy]" == e
            );
          }
          function Ft(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= s;
          }
          function Ht(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          }
          function $t(t) {
            return null != t && "object" == typeof t;
          }
          var Vt = C
            ? (function (t) {
                return function (e) {
                  return t(e);
                };
              })(C)
            : function (t) {
                return $t(t) && Ft(t.length) && !!A[At(t)];
              };
          function Kt(t) {
            return null != (e = t) && Ft(e.length) && !zt(e) ? Et(t) : Lt(t);
            var e;
          }
          t.exports = function (t, e) {
            return kt(t, e);
          };
        },
        1210: function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          const r = n(3465),
            s = n(2307);
          var i;
          !(function (t) {
            (t.compose = function (t = {}, e = {}, n = !1) {
              "object" != typeof t && (t = {}),
                "object" != typeof e && (e = {});
              let s = r(e);
              n ||
                (s = Object.keys(s).reduce(
                  (t, e) => (null != s[e] && (t[e] = s[e]), t),
                  {}
                ));
              for (const n in t)
                void 0 !== t[n] && void 0 === e[n] && (s[n] = t[n]);
              return Object.keys(s).length > 0 ? s : void 0;
            }),
              (t.diff = function (t = {}, e = {}) {
                "object" != typeof t && (t = {}),
                  "object" != typeof e && (e = {});
                const n = Object.keys(t)
                  .concat(Object.keys(e))
                  .reduce(
                    (n, r) => (
                      s(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n
                    ),
                    {}
                  );
                return Object.keys(n).length > 0 ? n : void 0;
              }),
              (t.invert = function (t = {}, e = {}) {
                t = t || {};
                const n = Object.keys(e).reduce(
                  (n, r) => (
                    e[r] !== t[r] && void 0 !== t[r] && (n[r] = e[r]), n
                  ),
                  {}
                );
                return Object.keys(t).reduce(
                  (n, r) => (
                    t[r] !== e[r] && void 0 === e[r] && (n[r] = null), n
                  ),
                  n
                );
              }),
              (t.transform = function (t, e, n = !1) {
                if ("object" != typeof t) return e;
                if ("object" != typeof e) return;
                if (!n) return e;
                const r = Object.keys(e).reduce(
                  (n, r) => (void 0 === t[r] && (n[r] = e[r]), n),
                  {}
                );
                return Object.keys(r).length > 0 ? r : void 0;
              });
          })(i || (i = {})),
            (e.default = i);
        },
        7098: function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.AttributeMap = e.OpIterator = e.Op = void 0);
          const r = n(7529),
            s = n(3465),
            i = n(2307),
            o = n(1210);
          e.AttributeMap = o.default;
          const l = n(430);
          e.Op = l.default;
          const a = n(6942);
          e.OpIterator = a.default;
          const c = String.fromCharCode(0),
            u = (t, e) => {
              if ("object" != typeof t || null === t)
                throw new Error("cannot retain a " + typeof t);
              if ("object" != typeof e || null === e)
                throw new Error("cannot retain a " + typeof e);
              const n = Object.keys(t)[0];
              if (!n || n !== Object.keys(e)[0])
                throw new Error(
                  `embed types not matched: ${n} != ${Object.keys(e)[0]}`
                );
              return [n, t[n], e[n]];
            };
          class h {
            constructor(t) {
              Array.isArray(t)
                ? (this.ops = t)
                : null != t && Array.isArray(t.ops)
                ? (this.ops = t.ops)
                : (this.ops = []);
            }
            static registerEmbed(t, e) {
              this.handlers[t] = e;
            }
            static unregisterEmbed(t) {
              delete this.handlers[t];
            }
            static getHandler(t) {
              const e = this.handlers[t];
              if (!e) throw new Error(`no handlers for embed type "${t}"`);
              return e;
            }
            insert(t, e) {
              const n = {};
              return "string" == typeof t && 0 === t.length
                ? this
                : ((n.insert = t),
                  null != e &&
                    "object" == typeof e &&
                    Object.keys(e).length > 0 &&
                    (n.attributes = e),
                  this.push(n));
            }
            delete(t) {
              return t <= 0 ? this : this.push({ delete: t });
            }
            retain(t, e) {
              if ("number" == typeof t && t <= 0) return this;
              const n = { retain: t };
              return (
                null != e &&
                  "object" == typeof e &&
                  Object.keys(e).length > 0 &&
                  (n.attributes = e),
                this.push(n)
              );
            }
            push(t) {
              let e = this.ops.length,
                n = this.ops[e - 1];
              if (((t = s(t)), "object" == typeof n)) {
                if ("number" == typeof t.delete && "number" == typeof n.delete)
                  return (
                    (this.ops[e - 1] = { delete: n.delete + t.delete }), this
                  );
                if (
                  "number" == typeof n.delete &&
                  null != t.insert &&
                  ((e -= 1), (n = this.ops[e - 1]), "object" != typeof n)
                )
                  return this.ops.unshift(t), this;
                if (i(t.attributes, n.attributes)) {
                  if (
                    "string" == typeof t.insert &&
                    "string" == typeof n.insert
                  )
                    return (
                      (this.ops[e - 1] = { insert: n.insert + t.insert }),
                      "object" == typeof t.attributes &&
                        (this.ops[e - 1].attributes = t.attributes),
                      this
                    );
                  if (
                    "number" == typeof t.retain &&
                    "number" == typeof n.retain
                  )
                    return (
                      (this.ops[e - 1] = { retain: n.retain + t.retain }),
                      "object" == typeof t.attributes &&
                        (this.ops[e - 1].attributes = t.attributes),
                      this
                    );
                }
              }
              return (
                e === this.ops.length
                  ? this.ops.push(t)
                  : this.ops.splice(e, 0, t),
                this
              );
            }
            chop() {
              const t = this.ops[this.ops.length - 1];
              return (
                t &&
                  "number" == typeof t.retain &&
                  !t.attributes &&
                  this.ops.pop(),
                this
              );
            }
            filter(t) {
              return this.ops.filter(t);
            }
            forEach(t) {
              this.ops.forEach(t);
            }
            map(t) {
              return this.ops.map(t);
            }
            partition(t) {
              const e = [],
                n = [];
              return (
                this.forEach((r) => {
                  (t(r) ? e : n).push(r);
                }),
                [e, n]
              );
            }
            reduce(t, e) {
              return this.ops.reduce(t, e);
            }
            changeLength() {
              return this.reduce(
                (t, e) =>
                  e.insert
                    ? t + l.default.length(e)
                    : e.delete
                    ? t - e.delete
                    : t,
                0
              );
            }
            length() {
              return this.reduce((t, e) => t + l.default.length(e), 0);
            }
            slice(t = 0, e = 1 / 0) {
              const n = [],
                r = new a.default(this.ops);
              let s = 0;
              for (; s < e && r.hasNext(); ) {
                let i;
                s < t ? (i = r.next(t - s)) : ((i = r.next(e - s)), n.push(i)),
                  (s += l.default.length(i));
              }
              return new h(n);
            }
            compose(t) {
              const e = new a.default(this.ops),
                n = new a.default(t.ops),
                r = [],
                s = n.peek();
              if (
                null != s &&
                "number" == typeof s.retain &&
                null == s.attributes
              ) {
                let t = s.retain;
                for (; "insert" === e.peekType() && e.peekLength() <= t; )
                  (t -= e.peekLength()), r.push(e.next());
                s.retain - t > 0 && n.next(s.retain - t);
              }
              const l = new h(r);
              for (; e.hasNext() || n.hasNext(); )
                if ("insert" === n.peekType()) l.push(n.next());
                else if ("delete" === e.peekType()) l.push(e.next());
                else {
                  const t = Math.min(e.peekLength(), n.peekLength()),
                    r = e.next(t),
                    s = n.next(t);
                  if (s.retain) {
                    const a = {};
                    if ("number" == typeof r.retain)
                      a.retain = "number" == typeof s.retain ? t : s.retain;
                    else if ("number" == typeof s.retain)
                      null == r.retain
                        ? (a.insert = r.insert)
                        : (a.retain = r.retain);
                    else {
                      const t = null == r.retain ? "insert" : "retain",
                        [e, n, i] = u(r[t], s.retain),
                        o = h.getHandler(e);
                      a[t] = { [e]: o.compose(n, i, "retain" === t) };
                    }
                    const c = o.default.compose(
                      r.attributes,
                      s.attributes,
                      "number" == typeof r.retain
                    );
                    if (
                      (c && (a.attributes = c),
                      l.push(a),
                      !n.hasNext() && i(l.ops[l.ops.length - 1], a))
                    ) {
                      const t = new h(e.rest());
                      return l.concat(t).chop();
                    }
                  } else
                    "number" == typeof s.delete &&
                      ("number" == typeof r.retain ||
                        ("object" == typeof r.retain && null !== r.retain)) &&
                      l.push(s);
                }
              return l.chop();
            }
            concat(t) {
              const e = new h(this.ops.slice());
              return (
                t.ops.length > 0 &&
                  (e.push(t.ops[0]), (e.ops = e.ops.concat(t.ops.slice(1)))),
                e
              );
            }
            diff(t, e) {
              if (this.ops === t.ops) return new h();
              const n = [this, t].map((e) =>
                  e
                    .map((n) => {
                      if (null != n.insert)
                        return "string" == typeof n.insert ? n.insert : c;
                      throw new Error(
                        "diff() called " +
                          (e === t ? "on" : "with") +
                          " non-document"
                      );
                    })
                    .join("")
                ),
                s = new h(),
                l = r(n[0], n[1], e, !0),
                u = new a.default(this.ops),
                d = new a.default(t.ops);
              return (
                l.forEach((t) => {
                  let e = t[1].length;
                  for (; e > 0; ) {
                    let n = 0;
                    switch (t[0]) {
                      case r.INSERT:
                        (n = Math.min(d.peekLength(), e)), s.push(d.next(n));
                        break;
                      case r.DELETE:
                        (n = Math.min(e, u.peekLength())),
                          u.next(n),
                          s.delete(n);
                        break;
                      case r.EQUAL:
                        n = Math.min(u.peekLength(), d.peekLength(), e);
                        const t = u.next(n),
                          l = d.next(n);
                        i(t.insert, l.insert)
                          ? s.retain(
                              n,
                              o.default.diff(t.attributes, l.attributes)
                            )
                          : s.push(l).delete(n);
                    }
                    e -= n;
                  }
                }),
                s.chop()
              );
            }
            eachLine(t, e = "\n") {
              const n = new a.default(this.ops);
              let r = new h(),
                s = 0;
              for (; n.hasNext(); ) {
                if ("insert" !== n.peekType()) return;
                const i = n.peek(),
                  o = l.default.length(i) - n.peekLength(),
                  a =
                    "string" == typeof i.insert
                      ? i.insert.indexOf(e, o) - o
                      : -1;
                if (a < 0) r.push(n.next());
                else if (a > 0) r.push(n.next(a));
                else {
                  if (!1 === t(r, n.next(1).attributes || {}, s)) return;
                  (s += 1), (r = new h());
                }
              }
              r.length() > 0 && t(r, {}, s);
            }
            invert(t) {
              const e = new h();
              return (
                this.reduce((n, r) => {
                  if (r.insert) e.delete(l.default.length(r));
                  else {
                    if ("number" == typeof r.retain && null == r.attributes)
                      return e.retain(r.retain), n + r.retain;
                    if (r.delete || "number" == typeof r.retain) {
                      const s = r.delete || r.retain;
                      return (
                        t.slice(n, n + s).forEach((t) => {
                          r.delete
                            ? e.push(t)
                            : r.retain &&
                              r.attributes &&
                              e.retain(
                                l.default.length(t),
                                o.default.invert(r.attributes, t.attributes)
                              );
                        }),
                        n + s
                      );
                    }
                    if ("object" == typeof r.retain && null !== r.retain) {
                      const s = t.slice(n, n + 1),
                        i = new a.default(s.ops).next(),
                        [l, c, d] = u(r.retain, i.insert),
                        f = h.getHandler(l);
                      return (
                        e.retain(
                          { [l]: f.invert(c, d) },
                          o.default.invert(r.attributes, i.attributes)
                        ),
                        n + 1
                      );
                    }
                  }
                  return n;
                }, 0),
                e.chop()
              );
            }
            transform(t, e = !1) {
              if (((e = !!e), "number" == typeof t))
                return this.transformPosition(t, e);
              const n = t,
                r = new a.default(this.ops),
                s = new a.default(n.ops),
                i = new h();
              for (; r.hasNext() || s.hasNext(); )
                if (
                  "insert" !== r.peekType() ||
                  (!e && "insert" === s.peekType())
                )
                  if ("insert" === s.peekType()) i.push(s.next());
                  else {
                    const t = Math.min(r.peekLength(), s.peekLength()),
                      n = r.next(t),
                      l = s.next(t);
                    if (n.delete) continue;
                    if (l.delete) i.push(l);
                    else {
                      const r = n.retain,
                        s = l.retain;
                      let a = "object" == typeof s && null !== s ? s : t;
                      if (
                        "object" == typeof r &&
                        null !== r &&
                        "object" == typeof s &&
                        null !== s
                      ) {
                        const t = Object.keys(r)[0];
                        if (t === Object.keys(s)[0]) {
                          const n = h.getHandler(t);
                          n && (a = { [t]: n.transform(r[t], s[t], e) });
                        }
                      }
                      i.retain(
                        a,
                        o.default.transform(n.attributes, l.attributes, e)
                      );
                    }
                  }
                else i.retain(l.default.length(r.next()));
              return i.chop();
            }
            transformPosition(t, e = !1) {
              e = !!e;
              const n = new a.default(this.ops);
              let r = 0;
              for (; n.hasNext() && r <= t; ) {
                const s = n.peekLength(),
                  i = n.peekType();
                n.next(),
                  "delete" !== i
                    ? ("insert" === i && (r < t || !e) && (t += s), (r += s))
                    : (t -= Math.min(s, t - r));
              }
              return t;
            }
          }
          (h.Op = l.default),
            (h.OpIterator = a.default),
            (h.AttributeMap = o.default),
            (h.handlers = {}),
            (e.default = h),
            (t.exports = h),
            (t.exports.default = h);
        },
        430: function (t, e) {
          "use strict";
          var n;
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (function (t) {
              t.length = function (t) {
                return "number" == typeof t.delete
                  ? t.delete
                  : "number" == typeof t.retain
                  ? t.retain
                  : "object" == typeof t.retain && null !== t.retain
                  ? 1
                  : "string" == typeof t.insert
                  ? t.insert.length
                  : 1;
              };
            })(n || (n = {})),
            (e.default = n);
        },
        6942: function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          const r = n(430);
          e.default = class {
            constructor(t) {
              (this.ops = t), (this.index = 0), (this.offset = 0);
            }
            hasNext() {
              return this.peekLength() < 1 / 0;
            }
            next(t) {
              t || (t = 1 / 0);
              const e = this.ops[this.index];
              if (e) {
                const n = this.offset,
                  s = r.default.length(e);
                if (
                  (t >= s - n
                    ? ((t = s - n), (this.index += 1), (this.offset = 0))
                    : (this.offset += t),
                  "number" == typeof e.delete)
                )
                  return { delete: t };
                {
                  const r = {};
                  return (
                    e.attributes && (r.attributes = e.attributes),
                    "number" == typeof e.retain
                      ? (r.retain = t)
                      : "object" == typeof e.retain && null !== e.retain
                      ? (r.retain = e.retain)
                      : "string" == typeof e.insert
                      ? (r.insert = e.insert.substr(n, t))
                      : (r.insert = e.insert),
                    r
                  );
                }
              }
              return { retain: 1 / 0 };
            }
            peek() {
              return this.ops[this.index];
            }
            peekLength() {
              return this.ops[this.index]
                ? r.default.length(this.ops[this.index]) - this.offset
                : 1 / 0;
            }
            peekType() {
              const t = this.ops[this.index];
              return t
                ? "number" == typeof t.delete
                  ? "delete"
                  : "number" == typeof t.retain ||
                    ("object" == typeof t.retain && null !== t.retain)
                  ? "retain"
                  : "insert"
                : "retain";
            }
            rest() {
              if (this.hasNext()) {
                if (0 === this.offset) return this.ops.slice(this.index);
                {
                  const t = this.offset,
                    e = this.index,
                    n = this.next(),
                    r = this.ops.slice(this.index);
                  return (this.offset = t), (this.index = e), [n].concat(r);
                }
              }
              return [];
            }
          };
        },
      },
      e = {};
    function n(r) {
      var s = e[r];
      if (void 0 !== s) return s.exports;
      var i = (e[r] = { id: r, loaded: !1, exports: {} });
      return t[r](i, i.exports, n), (i.loaded = !0), i.exports;
    }
    (n.d = function (t, e) {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      });
    var r = {};
    return (
      (function () {
        "use strict";
        n.r(r),
          n.d(r, {
            Quill: function () {
              return nl;
            },
          });
        var t = {};
        n.r(t),
          n.d(t, {
            Attributor: function () {
              return Fe;
            },
            AttributorStore: function () {
              return Xe;
            },
            BlockBlot: function () {
              return cn;
            },
            ClassAttributor: function () {
              return We;
            },
            ContainerBlot: function () {
              return hn;
            },
            EmbedBlot: function () {
              return dn;
            },
            InlineBlot: function () {
              return ln;
            },
            LeafBlot: function () {
              return tn;
            },
            ParentBlot: function () {
              return sn;
            },
            Registry: function () {
              return Ve;
            },
            Scope: function () {
              return ze;
            },
            ScrollBlot: function () {
              return gn;
            },
            StyleAttributor: function () {
              return Ge;
            },
            TextBlot: function () {
              return bn;
            },
          });
        var e = function () {
          (this.__data__ = []), (this.size = 0);
        };
        var s = function (t, e) {
          return t === e || (t != t && e != e);
        };
        var i = function (t, e) {
            for (var n = t.length; n--; ) if (s(t[n][0], e)) return n;
            return -1;
          },
          o = Array.prototype.splice;
        var l = function (t) {
          var e = this.__data__,
            n = i(e, t);
          return (
            !(n < 0) &&
            (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, !0)
          );
        };
        var a = function (t) {
          var e = this.__data__,
            n = i(e, t);
          return n < 0 ? void 0 : e[n][1];
        };
        var c = function (t) {
          return i(this.__data__, t) > -1;
        };
        var u = function (t, e) {
          var n = this.__data__,
            r = i(n, t);
          return r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this;
        };
        function h(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (h.prototype.clear = e),
          (h.prototype.delete = l),
          (h.prototype.get = a),
          (h.prototype.has = c),
          (h.prototype.set = u);
        var d = h;
        var f = function () {
          (this.__data__ = new d()), (this.size = 0);
        };
        var p = function (t) {
          var e = this.__data__,
            n = e.delete(t);
          return (this.size = e.size), n;
        };
        var g = function (t) {
          return this.__data__.get(t);
        };
        var m = function (t) {
            return this.__data__.has(t);
          },
          b =
            "object" == typeof global &&
            global &&
            global.Object === Object &&
            global,
          v = "object" == typeof self && self && self.Object === Object && self,
          y = b || v || Function("return this")(),
          x = y.Symbol,
          N = Object.prototype,
          E = N.hasOwnProperty,
          w = N.toString,
          A = x ? x.toStringTag : void 0;
        var q = function (t) {
            var e = E.call(t, A),
              n = t[A];
            try {
              t[A] = void 0;
              var r = !0;
            } catch (t) {}
            var s = w.call(t);
            return r && (e ? (t[A] = n) : delete t[A]), s;
          },
          k = Object.prototype.toString;
        var _ = function (t) {
            return k.call(t);
          },
          L = x ? x.toStringTag : void 0;
        var O = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : L && L in Object(t)
            ? q(t)
            : _(t);
        };
        var S = function (t) {
          var e = typeof t;
          return null != t && ("object" == e || "function" == e);
        };
        var T,
          j = function (t) {
            if (!S(t)) return !1;
            var e = O(t);
            return (
              "[object Function]" == e ||
              "[object GeneratorFunction]" == e ||
              "[object AsyncFunction]" == e ||
              "[object Proxy]" == e
            );
          },
          C = y["__core-js_shared__"],
          R = (T = /[^.]+$/.exec((C && C.keys && C.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + T
            : "";
        var I = function (t) {
            return !!R && R in t;
          },
          M = Function.prototype.toString;
        var B = function (t) {
            if (null != t) {
              try {
                return M.call(t);
              } catch (t) {}
              try {
                return t + "";
              } catch (t) {}
            }
            return "";
          },
          D = /^\[object .+?Constructor\]$/,
          U = Function.prototype,
          P = Object.prototype,
          z = U.toString,
          F = P.hasOwnProperty,
          H = RegExp(
            "^" +
              z
                .call(F)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        var $ = function (t) {
          return !(!S(t) || I(t)) && (j(t) ? H : D).test(B(t));
        };
        var V = function (t, e) {
          return null == t ? void 0 : t[e];
        };
        var K = function (t, e) {
            var n = V(t, e);
            return $(n) ? n : void 0;
          },
          W = K(y, "Map"),
          Z = K(Object, "create");
        var G = function () {
          (this.__data__ = Z ? Z(null) : {}), (this.size = 0);
        };
        var X = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
          },
          Y = Object.prototype.hasOwnProperty;
        var Q = function (t) {
            var e = this.__data__;
            if (Z) {
              var n = e[t];
              return "__lodash_hash_undefined__" === n ? void 0 : n;
            }
            return Y.call(e, t) ? e[t] : void 0;
          },
          J = Object.prototype.hasOwnProperty;
        var tt = function (t) {
          var e = this.__data__;
          return Z ? void 0 !== e[t] : J.call(e, t);
        };
        var et = function (t, e) {
          var n = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = Z && void 0 === e ? "__lodash_hash_undefined__" : e),
            this
          );
        };
        function nt(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (nt.prototype.clear = G),
          (nt.prototype.delete = X),
          (nt.prototype.get = Q),
          (nt.prototype.has = tt),
          (nt.prototype.set = et);
        var rt = nt;
        var st = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new rt(),
              map: new (W || d)(),
              string: new rt(),
            });
        };
        var it = function (t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        };
        var ot = function (t, e) {
          var n = t.__data__;
          return it(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
        var lt = function (t) {
          var e = ot(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        };
        var at = function (t) {
          return ot(this, t).get(t);
        };
        var ct = function (t) {
          return ot(this, t).has(t);
        };
        var ut = function (t, e) {
          var n = ot(this, t),
            r = n.size;
          return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
        };
        function ht(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        (ht.prototype.clear = st),
          (ht.prototype.delete = lt),
          (ht.prototype.get = at),
          (ht.prototype.has = ct),
          (ht.prototype.set = ut);
        var dt = ht;
        var ft = function (t, e) {
          var n = this.__data__;
          if (n instanceof d) {
            var r = n.__data__;
            if (!W || r.length < 199)
              return r.push([t, e]), (this.size = ++n.size), this;
            n = this.__data__ = new dt(r);
          }
          return n.set(t, e), (this.size = n.size), this;
        };
        function pt(t) {
          var e = (this.__data__ = new d(t));
          this.size = e.size;
        }
        (pt.prototype.clear = f),
          (pt.prototype.delete = p),
          (pt.prototype.get = g),
          (pt.prototype.has = m),
          (pt.prototype.set = ft);
        var gt = pt,
          mt = (function () {
            try {
              var t = K(Object, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })();
        var bt = function (t, e, n) {
          "__proto__" == e && mt
            ? mt(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (t[e] = n);
        };
        var vt = function (t, e, n) {
          ((void 0 !== n && !s(t[e], n)) || (void 0 === n && !(e in t))) &&
            bt(t, e, n);
        };
        var yt = (function (t) {
            return function (e, n, r) {
              for (var s = -1, i = Object(e), o = r(e), l = o.length; l--; ) {
                var a = o[t ? l : ++s];
                if (!1 === n(i[a], a, i)) break;
              }
              return e;
            };
          })(),
          xt =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          Nt =
            xt &&
            "object" == typeof module &&
            module &&
            !module.nodeType &&
            module,
          Et = Nt && Nt.exports === xt ? y.Buffer : void 0,
          wt = Et ? Et.allocUnsafe : void 0;
        var At = function (t, e) {
            if (e) return t.slice();
            var n = t.length,
              r = wt ? wt(n) : new t.constructor(n);
            return t.copy(r), r;
          },
          qt = y.Uint8Array;
        var kt = function (t) {
          var e = new t.constructor(t.byteLength);
          return new qt(e).set(new qt(t)), e;
        };
        var _t = function (t, e) {
          var n = e ? kt(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.length);
        };
        var Lt = function (t, e) {
            var n = -1,
              r = t.length;
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
            return e;
          },
          Ot = Object.create,
          St = (function () {
            function t() {}
            return function (e) {
              if (!S(e)) return {};
              if (Ot) return Ot(e);
              t.prototype = e;
              var n = new t();
              return (t.prototype = void 0), n;
            };
          })();
        var Tt = function (t, e) {
            return function (n) {
              return t(e(n));
            };
          },
          jt = Tt(Object.getPrototypeOf, Object),
          Ct = Object.prototype;
        var Rt = function (t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || Ct);
        };
        var It = function (t) {
          return "function" != typeof t.constructor || Rt(t) ? {} : St(jt(t));
        };
        var Mt = function (t) {
          return null != t && "object" == typeof t;
        };
        var Bt = function (t) {
            return Mt(t) && "[object Arguments]" == O(t);
          },
          Dt = Object.prototype,
          Ut = Dt.hasOwnProperty,
          Pt = Dt.propertyIsEnumerable,
          zt = Bt(
            (function () {
              return arguments;
            })()
          )
            ? Bt
            : function (t) {
                return Mt(t) && Ut.call(t, "callee") && !Pt.call(t, "callee");
              },
          Ft = zt,
          Ht = Array.isArray;
        var $t = function (t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
        var Vt = function (t) {
          return null != t && $t(t.length) && !j(t);
        };
        var Kt = function (t) {
          return Mt(t) && Vt(t);
        };
        var Wt = function () {
            return !1;
          },
          Zt =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          Gt =
            Zt &&
            "object" == typeof module &&
            module &&
            !module.nodeType &&
            module,
          Xt = Gt && Gt.exports === Zt ? y.Buffer : void 0,
          Yt = (Xt ? Xt.isBuffer : void 0) || Wt,
          Qt = Function.prototype,
          Jt = Object.prototype,
          te = Qt.toString,
          ee = Jt.hasOwnProperty,
          ne = te.call(Object);
        var re = function (t) {
            if (!Mt(t) || "[object Object]" != O(t)) return !1;
            var e = jt(t);
            if (null === e) return !0;
            var n = ee.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && te.call(n) == ne;
          },
          se = {};
        (se["[object Float32Array]"] =
          se["[object Float64Array]"] =
          se["[object Int8Array]"] =
          se["[object Int16Array]"] =
          se["[object Int32Array]"] =
          se["[object Uint8Array]"] =
          se["[object Uint8ClampedArray]"] =
          se["[object Uint16Array]"] =
          se["[object Uint32Array]"] =
            !0),
          (se["[object Arguments]"] =
            se["[object Array]"] =
            se["[object ArrayBuffer]"] =
            se["[object Boolean]"] =
            se["[object DataView]"] =
            se["[object Date]"] =
            se["[object Error]"] =
            se["[object Function]"] =
            se["[object Map]"] =
            se["[object Number]"] =
            se["[object Object]"] =
            se["[object RegExp]"] =
            se["[object Set]"] =
            se["[object String]"] =
            se["[object WeakMap]"] =
              !1);
        var ie = function (t) {
          return Mt(t) && $t(t.length) && !!se[O(t)];
        };
        var oe = function (t) {
            return function (e) {
              return t(e);
            };
          },
          le =
            "object" == typeof exports &&
            exports &&
            !exports.nodeType &&
            exports,
          ae =
            le &&
            "object" == typeof module &&
            module &&
            !module.nodeType &&
            module,
          ce = ae && ae.exports === le && b.process,
          ue = (function () {
            try {
              var t = ae && ae.require && ae.require("util").types;
              return t || (ce && ce.binding && ce.binding("util"));
            } catch (t) {}
          })(),
          he = ue && ue.isTypedArray,
          de = he ? oe(he) : ie;
        var fe = function (t, e) {
            if (
              ("constructor" !== e || "function" != typeof t[e]) &&
              "__proto__" != e
            )
              return t[e];
          },
          pe = Object.prototype.hasOwnProperty;
        var ge = function (t, e, n) {
          var r = t[e];
          (pe.call(t, e) && s(r, n) && (void 0 !== n || e in t)) || bt(t, e, n);
        };
        var me = function (t, e, n, r) {
          var s = !n;
          n || (n = {});
          for (var i = -1, o = e.length; ++i < o; ) {
            var l = e[i],
              a = r ? r(n[l], t[l], l, n, t) : void 0;
            void 0 === a && (a = t[l]), s ? bt(n, l, a) : ge(n, l, a);
          }
          return n;
        };
        var be = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
          },
          ve = /^(?:0|[1-9]\d*)$/;
        var ye = function (t, e) {
            var n = typeof t;
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ("number" == n || ("symbol" != n && ve.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            );
          },
          xe = Object.prototype.hasOwnProperty;
        var Ne = function (t, e) {
          var n = Ht(t),
            r = !n && Ft(t),
            s = !n && !r && Yt(t),
            i = !n && !r && !s && de(t),
            o = n || r || s || i,
            l = o ? be(t.length, String) : [],
            a = l.length;
          for (var c in t)
            (!e && !xe.call(t, c)) ||
              (o &&
                ("length" == c ||
                  (s && ("offset" == c || "parent" == c)) ||
                  (i &&
                    ("buffer" == c ||
                      "byteLength" == c ||
                      "byteOffset" == c)) ||
                  ye(c, a))) ||
              l.push(c);
          return l;
        };
        var Ee = function (t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
          },
          we = Object.prototype.hasOwnProperty;
        var Ae = function (t) {
          if (!S(t)) return Ee(t);
          var e = Rt(t),
            n = [];
          for (var r in t)
            ("constructor" != r || (!e && we.call(t, r))) && n.push(r);
          return n;
        };
        var qe = function (t) {
          return Vt(t) ? Ne(t, !0) : Ae(t);
        };
        var ke = function (t) {
          return me(t, qe(t));
        };
        var _e = function (t, e, n, r, s, i, o) {
          var l = fe(t, n),
            a = fe(e, n),
            c = o.get(a);
          if (c) vt(t, n, c);
          else {
            var u = i ? i(l, a, n + "", t, e, o) : void 0,
              h = void 0 === u;
            if (h) {
              var d = Ht(a),
                f = !d && Yt(a),
                p = !d && !f && de(a);
              (u = a),
                d || f || p
                  ? Ht(l)
                    ? (u = l)
                    : Kt(l)
                    ? (u = Lt(l))
                    : f
                    ? ((h = !1), (u = At(a, !0)))
                    : p
                    ? ((h = !1), (u = _t(a, !0)))
                    : (u = [])
                  : re(a) || Ft(a)
                  ? ((u = l),
                    Ft(l) ? (u = ke(l)) : (S(l) && !j(l)) || (u = It(a)))
                  : (h = !1);
            }
            h && (o.set(a, u), s(u, a, r, i, o), o.delete(a)), vt(t, n, u);
          }
        };
        var Le = function t(e, n, r, s, i) {
          e !== n &&
            yt(
              n,
              function (o, l) {
                if ((i || (i = new gt()), S(o))) _e(e, n, l, r, t, s, i);
                else {
                  var a = s ? s(fe(e, l), o, l + "", e, n, i) : void 0;
                  void 0 === a && (a = o), vt(e, l, a);
                }
              },
              qe
            );
        };
        var Oe = function (t) {
          return t;
        };
        var Se = function (t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, n[0]);
              case 2:
                return t.call(e, n[0], n[1]);
              case 3:
                return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
          },
          Te = Math.max;
        var je = function (t, e, n) {
          return (
            (e = Te(void 0 === e ? t.length - 1 : e, 0)),
            function () {
              for (
                var r = arguments,
                  s = -1,
                  i = Te(r.length - e, 0),
                  o = Array(i);
                ++s < i;

              )
                o[s] = r[e + s];
              s = -1;
              for (var l = Array(e + 1); ++s < e; ) l[s] = r[s];
              return (l[e] = n(o)), Se(t, this, l);
            }
          );
        };
        var Ce = function (t) {
            return function () {
              return t;
            };
          },
          Re = mt
            ? function (t, e) {
                return mt(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Ce(e),
                  writable: !0,
                });
              }
            : Oe,
          Ie = Date.now;
        var Me = function (t) {
            var e = 0,
              n = 0;
            return function () {
              var r = Ie(),
                s = 16 - (r - n);
              if (((n = r), s > 0)) {
                if (++e >= 800) return arguments[0];
              } else e = 0;
              return t.apply(void 0, arguments);
            };
          },
          Be = Me(Re);
        var De = function (t, e) {
          return Be(je(t, e, Oe), t + "");
        };
        var Ue = function (t, e, n) {
          if (!S(n)) return !1;
          var r = typeof e;
          return (
            !!("number" == r
              ? Vt(n) && ye(e, n.length)
              : "string" == r && e in n) && s(n[e], t)
          );
        };
        var Pe = (function (t) {
            return De(function (e, n) {
              var r = -1,
                s = n.length,
                i = s > 1 ? n[s - 1] : void 0,
                o = s > 2 ? n[2] : void 0;
              for (
                i = t.length > 3 && "function" == typeof i ? (s--, i) : void 0,
                  o && Ue(n[0], n[1], o) && ((i = s < 3 ? void 0 : i), (s = 1)),
                  e = Object(e);
                ++r < s;

              ) {
                var l = n[r];
                l && t(e, l, r, i);
              }
              return e;
            });
          })(function (t, e, n) {
            Le(t, e, n);
          }),
          ze = ((t) => (
            (t[(t.TYPE = 3)] = "TYPE"),
            (t[(t.LEVEL = 12)] = "LEVEL"),
            (t[(t.ATTRIBUTE = 13)] = "ATTRIBUTE"),
            (t[(t.BLOT = 14)] = "BLOT"),
            (t[(t.INLINE = 7)] = "INLINE"),
            (t[(t.BLOCK = 11)] = "BLOCK"),
            (t[(t.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
            (t[(t.INLINE_BLOT = 6)] = "INLINE_BLOT"),
            (t[(t.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
            (t[(t.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
            (t[(t.ANY = 15)] = "ANY"),
            t
          ))(ze || {});
        class Fe {
          constructor(t, e, n = {}) {
            (this.attrName = t), (this.keyName = e);
            const r = ze.TYPE & ze.ATTRIBUTE;
            (this.scope =
              null != n.scope ? (n.scope & ze.LEVEL) | r : ze.ATTRIBUTE),
              null != n.whitelist && (this.whitelist = n.whitelist);
          }
          static keys(t) {
            return Array.from(t.attributes).map((t) => t.name);
          }
          add(t, e) {
            return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
          }
          canAdd(t, e) {
            return (
              null == this.whitelist ||
              ("string" == typeof e
                ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1
                : this.whitelist.indexOf(e) > -1)
            );
          }
          remove(t) {
            t.removeAttribute(this.keyName);
          }
          value(t) {
            const e = t.getAttribute(this.keyName);
            return this.canAdd(t, e) && e ? e : "";
          }
        }
        class He extends Error {
          constructor(t) {
            super((t = "[Parchment] " + t)),
              (this.message = t),
              (this.name = this.constructor.name);
          }
        }
        const $e = class t {
          constructor() {
            (this.attributes = {}),
              (this.classes = {}),
              (this.tags = {}),
              (this.types = {});
          }
          static find(t, e = !1) {
            if (null == t) return null;
            if (this.blots.has(t)) return this.blots.get(t) || null;
            if (e) {
              let n = null;
              try {
                n = t.parentNode;
              } catch {
                return null;
              }
              return this.find(n, e);
            }
            return null;
          }
          create(e, n, r) {
            const s = this.query(n);
            if (null == s) throw new He(`Unable to create ${n} blot`);
            const i = s,
              o =
                n instanceof Node || n.nodeType === Node.TEXT_NODE
                  ? n
                  : i.create(r),
              l = new i(e, o, r);
            return t.blots.set(l.domNode, l), l;
          }
          find(e, n = !1) {
            return t.find(e, n);
          }
          query(t, e = ze.ANY) {
            let n;
            return (
              "string" == typeof t
                ? (n = this.types[t] || this.attributes[t])
                : t instanceof Text || t.nodeType === Node.TEXT_NODE
                ? (n = this.types.text)
                : "number" == typeof t
                ? t & ze.LEVEL & ze.BLOCK
                  ? (n = this.types.block)
                  : t & ze.LEVEL & ze.INLINE && (n = this.types.inline)
                : t instanceof Element &&
                  ((t.getAttribute("class") || "")
                    .split(/\s+/)
                    .some((t) => ((n = this.classes[t]), !!n)),
                  (n = n || this.tags[t.tagName])),
              null == n
                ? null
                : "scope" in n &&
                  e & ze.LEVEL & n.scope &&
                  e & ze.TYPE & n.scope
                ? n
                : null
            );
          }
          register(...t) {
            return t.map((t) => {
              const e = "blotName" in t,
                n = "attrName" in t;
              if (!e && !n) throw new He("Invalid definition");
              if (e && "abstract" === t.blotName)
                throw new He("Cannot register abstract class");
              const r = e ? t.blotName : n ? t.attrName : void 0;
              return (
                (this.types[r] = t),
                n
                  ? "string" == typeof t.keyName &&
                    (this.attributes[t.keyName] = t)
                  : e &&
                    (t.className && (this.classes[t.className] = t),
                    t.tagName &&
                      (Array.isArray(t.tagName)
                        ? (t.tagName = t.tagName.map((t) => t.toUpperCase()))
                        : (t.tagName = t.tagName.toUpperCase()),
                      (Array.isArray(t.tagName)
                        ? t.tagName
                        : [t.tagName]
                      ).forEach((e) => {
                        (null == this.tags[e] || null == t.className) &&
                          (this.tags[e] = t);
                      }))),
                t
              );
            });
          }
        };
        $e.blots = new WeakMap();
        let Ve = $e;
        function Ke(t, e) {
          return (t.getAttribute("class") || "")
            .split(/\s+/)
            .filter((t) => 0 === t.indexOf(`${e}-`));
        }
        const We = class extends Fe {
          static keys(t) {
            return (t.getAttribute("class") || "")
              .split(/\s+/)
              .map((t) => t.split("-").slice(0, -1).join("-"));
          }
          add(t, e) {
            return (
              !!this.canAdd(t, e) &&
              (this.remove(t), t.classList.add(`${this.keyName}-${e}`), !0)
            );
          }
          remove(t) {
            Ke(t, this.keyName).forEach((e) => {
              t.classList.remove(e);
            }),
              0 === t.classList.length && t.removeAttribute("class");
          }
          value(t) {
            const e = (Ke(t, this.keyName)[0] || "").slice(
              this.keyName.length + 1
            );
            return this.canAdd(t, e) ? e : "";
          }
        };
        function Ze(t) {
          const e = t.split("-"),
            n = e
              .slice(1)
              .map((t) => t[0].toUpperCase() + t.slice(1))
              .join("");
          return e[0] + n;
        }
        const Ge = class extends Fe {
          static keys(t) {
            return (t.getAttribute("style") || "")
              .split(";")
              .map((t) => t.split(":")[0].trim());
          }
          add(t, e) {
            return !!this.canAdd(t, e) && ((t.style[Ze(this.keyName)] = e), !0);
          }
          remove(t) {
            (t.style[Ze(this.keyName)] = ""),
              t.getAttribute("style") || t.removeAttribute("style");
          }
          value(t) {
            const e = t.style[Ze(this.keyName)];
            return this.canAdd(t, e) ? e : "";
          }
        };
        const Xe = class {
            constructor(t) {
              (this.attributes = {}), (this.domNode = t), this.build();
            }
            attribute(t, e) {
              e
                ? t.add(this.domNode, e) &&
                  (null != t.value(this.domNode)
                    ? (this.attributes[t.attrName] = t)
                    : delete this.attributes[t.attrName])
                : (t.remove(this.domNode), delete this.attributes[t.attrName]);
            }
            build() {
              this.attributes = {};
              const t = Ve.find(this.domNode);
              if (null == t) return;
              const e = Fe.keys(this.domNode),
                n = We.keys(this.domNode),
                r = Ge.keys(this.domNode);
              e.concat(n)
                .concat(r)
                .forEach((e) => {
                  const n = t.scroll.query(e, ze.ATTRIBUTE);
                  n instanceof Fe && (this.attributes[n.attrName] = n);
                });
            }
            copy(t) {
              Object.keys(this.attributes).forEach((e) => {
                const n = this.attributes[e].value(this.domNode);
                t.format(e, n);
              });
            }
            move(t) {
              this.copy(t),
                Object.keys(this.attributes).forEach((t) => {
                  this.attributes[t].remove(this.domNode);
                }),
                (this.attributes = {});
            }
            values() {
              return Object.keys(this.attributes).reduce(
                (t, e) => ((t[e] = this.attributes[e].value(this.domNode)), t),
                {}
              );
            }
          },
          Ye = class {
            constructor(t, e) {
              (this.scroll = t),
                (this.domNode = e),
                Ve.blots.set(e, this),
                (this.prev = null),
                (this.next = null);
            }
            static create(t) {
              if (null == this.tagName)
                throw new He("Blot definition missing tagName");
              let e, n;
              return (
                Array.isArray(this.tagName)
                  ? ("string" == typeof t
                      ? ((n = t.toUpperCase()),
                        parseInt(n, 10).toString() === n &&
                          (n = parseInt(n, 10)))
                      : "number" == typeof t && (n = t),
                    (e =
                      "number" == typeof n
                        ? document.createElement(this.tagName[n - 1])
                        : n && this.tagName.indexOf(n) > -1
                        ? document.createElement(n)
                        : document.createElement(this.tagName[0])))
                  : (e = document.createElement(this.tagName)),
                this.className && e.classList.add(this.className),
                e
              );
            }
            get statics() {
              return this.constructor;
            }
            attach() {}
            clone() {
              const t = this.domNode.cloneNode(!1);
              return this.scroll.create(t);
            }
            detach() {
              null != this.parent && this.parent.removeChild(this),
                Ve.blots.delete(this.domNode);
            }
            deleteAt(t, e) {
              this.isolate(t, e).remove();
            }
            formatAt(t, e, n, r) {
              const s = this.isolate(t, e);
              if (null != this.scroll.query(n, ze.BLOT) && r) s.wrap(n, r);
              else if (null != this.scroll.query(n, ze.ATTRIBUTE)) {
                const t = this.scroll.create(this.statics.scope);
                s.wrap(t), t.format(n, r);
              }
            }
            insertAt(t, e, n) {
              const r =
                  null == n
                    ? this.scroll.create("text", e)
                    : this.scroll.create(e, n),
                s = this.split(t);
              this.parent.insertBefore(r, s || void 0);
            }
            isolate(t, e) {
              const n = this.split(t);
              if (null == n) throw new Error("Attempt to isolate at end");
              return n.split(e), n;
            }
            length() {
              return 1;
            }
            offset(t = this.parent) {
              return null == this.parent || this === t
                ? 0
                : this.parent.children.offset(this) + this.parent.offset(t);
            }
            optimize(t) {
              this.statics.requiredContainer &&
                !(this.parent instanceof this.statics.requiredContainer) &&
                this.wrap(this.statics.requiredContainer.blotName);
            }
            remove() {
              null != this.domNode.parentNode &&
                this.domNode.parentNode.removeChild(this.domNode),
                this.detach();
            }
            replaceWith(t, e) {
              const n = "string" == typeof t ? this.scroll.create(t, e) : t;
              return (
                null != this.parent &&
                  (this.parent.insertBefore(n, this.next || void 0),
                  this.remove()),
                n
              );
            }
            split(t, e) {
              return 0 === t ? this : this.next;
            }
            update(t, e) {}
            wrap(t, e) {
              const n = "string" == typeof t ? this.scroll.create(t, e) : t;
              if (
                (null != this.parent &&
                  this.parent.insertBefore(n, this.next || void 0),
                "function" != typeof n.appendChild)
              )
                throw new He(`Cannot wrap ${t}`);
              return n.appendChild(this), n;
            }
          };
        Ye.blotName = "abstract";
        let Qe = Ye;
        const Je = class extends Qe {
          static value(t) {
            return !0;
          }
          index(t, e) {
            return this.domNode === t ||
              this.domNode.compareDocumentPosition(t) &
                Node.DOCUMENT_POSITION_CONTAINED_BY
              ? Math.min(e, 1)
              : -1;
          }
          position(t, e) {
            let n = Array.from(this.parent.domNode.childNodes).indexOf(
              this.domNode
            );
            return t > 0 && (n += 1), [this.parent.domNode, n];
          }
          value() {
            return {
              [this.statics.blotName]: this.statics.value(this.domNode) || !0,
            };
          }
        };
        Je.scope = ze.INLINE_BLOT;
        const tn = Je;
        class en {
          constructor() {
            (this.head = null), (this.tail = null), (this.length = 0);
          }
          append(...t) {
            if ((this.insertBefore(t[0], null), t.length > 1)) {
              const e = t.slice(1);
              this.append(...e);
            }
          }
          at(t) {
            const e = this.iterator();
            let n = e();
            for (; n && t > 0; ) (t -= 1), (n = e());
            return n;
          }
          contains(t) {
            const e = this.iterator();
            let n = e();
            for (; n; ) {
              if (n === t) return !0;
              n = e();
            }
            return !1;
          }
          indexOf(t) {
            const e = this.iterator();
            let n = e(),
              r = 0;
            for (; n; ) {
              if (n === t) return r;
              (r += 1), (n = e());
            }
            return -1;
          }
          insertBefore(t, e) {
            null != t &&
              (this.remove(t),
              (t.next = e),
              null != e
                ? ((t.prev = e.prev),
                  null != e.prev && (e.prev.next = t),
                  (e.prev = t),
                  e === this.head && (this.head = t))
                : null != this.tail
                ? ((this.tail.next = t), (t.prev = this.tail), (this.tail = t))
                : ((t.prev = null), (this.head = this.tail = t)),
              (this.length += 1));
          }
          offset(t) {
            let e = 0,
              n = this.head;
            for (; null != n; ) {
              if (n === t) return e;
              (e += n.length()), (n = n.next);
            }
            return -1;
          }
          remove(t) {
            this.contains(t) &&
              (null != t.prev && (t.prev.next = t.next),
              null != t.next && (t.next.prev = t.prev),
              t === this.head && (this.head = t.next),
              t === this.tail && (this.tail = t.prev),
              (this.length -= 1));
          }
          iterator(t = this.head) {
            return () => {
              const e = t;
              return null != t && (t = t.next), e;
            };
          }
          find(t, e = !1) {
            const n = this.iterator();
            let r = n();
            for (; r; ) {
              const s = r.length();
              if (
                t < s ||
                (e && t === s && (null == r.next || 0 !== r.next.length()))
              )
                return [r, t];
              (t -= s), (r = n());
            }
            return [null, 0];
          }
          forEach(t) {
            const e = this.iterator();
            let n = e();
            for (; n; ) t(n), (n = e());
          }
          forEachAt(t, e, n) {
            if (e <= 0) return;
            const [r, s] = this.find(t);
            let i = t - s;
            const o = this.iterator(r);
            let l = o();
            for (; l && i < t + e; ) {
              const r = l.length();
              t > i
                ? n(l, t - i, Math.min(e, i + r - t))
                : n(l, 0, Math.min(r, t + e - i)),
                (i += r),
                (l = o());
            }
          }
          map(t) {
            return this.reduce((e, n) => (e.push(t(n)), e), []);
          }
          reduce(t, e) {
            const n = this.iterator();
            let r = n();
            for (; r; ) (e = t(e, r)), (r = n());
            return e;
          }
        }
        function nn(t, e) {
          const n = e.find(t);
          if (n) return n;
          try {
            return e.create(t);
          } catch {
            const n = e.create(ze.INLINE);
            return (
              Array.from(t.childNodes).forEach((t) => {
                n.domNode.appendChild(t);
              }),
              t.parentNode && t.parentNode.replaceChild(n.domNode, t),
              n.attach(),
              n
            );
          }
        }
        const rn = class t extends Qe {
          constructor(t, e) {
            super(t, e), (this.uiNode = null), this.build();
          }
          appendChild(t) {
            this.insertBefore(t);
          }
          attach() {
            super.attach(),
              this.children.forEach((t) => {
                t.attach();
              });
          }
          attachUI(e) {
            null != this.uiNode && this.uiNode.remove(),
              (this.uiNode = e),
              t.uiClass && this.uiNode.classList.add(t.uiClass),
              this.uiNode.setAttribute("contenteditable", "false"),
              this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
          }
          build() {
            (this.children = new en()),
              Array.from(this.domNode.childNodes)
                .filter((t) => t !== this.uiNode)
                .reverse()
                .forEach((t) => {
                  try {
                    const e = nn(t, this.scroll);
                    this.insertBefore(e, this.children.head || void 0);
                  } catch (t) {
                    if (t instanceof He) return;
                    throw t;
                  }
                });
          }
          deleteAt(t, e) {
            if (0 === t && e === this.length()) return this.remove();
            this.children.forEachAt(t, e, (t, e, n) => {
              t.deleteAt(e, n);
            });
          }
          descendant(e, n = 0) {
            const [r, s] = this.children.find(n);
            return (null == e.blotName && e(r)) ||
              (null != e.blotName && r instanceof e)
              ? [r, s]
              : r instanceof t
              ? r.descendant(e, s)
              : [null, -1];
          }
          descendants(e, n = 0, r = Number.MAX_VALUE) {
            let s = [],
              i = r;
            return (
              this.children.forEachAt(n, r, (n, r, o) => {
                ((null == e.blotName && e(n)) ||
                  (null != e.blotName && n instanceof e)) &&
                  s.push(n),
                  n instanceof t && (s = s.concat(n.descendants(e, r, i))),
                  (i -= o);
              }),
              s
            );
          }
          detach() {
            this.children.forEach((t) => {
              t.detach();
            }),
              super.detach();
          }
          enforceAllowedChildren() {
            let e = !1;
            this.children.forEach((n) => {
              e ||
                this.statics.allowedChildren.some((t) => n instanceof t) ||
                (n.statics.scope === ze.BLOCK_BLOT
                  ? (null != n.next && this.splitAfter(n),
                    null != n.prev && this.splitAfter(n.prev),
                    n.parent.unwrap(),
                    (e = !0))
                  : n instanceof t
                  ? n.unwrap()
                  : n.remove());
            });
          }
          formatAt(t, e, n, r) {
            this.children.forEachAt(t, e, (t, e, s) => {
              t.formatAt(e, s, n, r);
            });
          }
          insertAt(t, e, n) {
            const [r, s] = this.children.find(t);
            if (r) r.insertAt(s, e, n);
            else {
              const t =
                null == n
                  ? this.scroll.create("text", e)
                  : this.scroll.create(e, n);
              this.appendChild(t);
            }
          }
          insertBefore(t, e) {
            null != t.parent && t.parent.children.remove(t);
            let n = null;
            this.children.insertBefore(t, e || null),
              (t.parent = this),
              null != e && (n = e.domNode),
              (this.domNode.parentNode !== t.domNode ||
                this.domNode.nextSibling !== n) &&
                this.domNode.insertBefore(t.domNode, n),
              t.attach();
          }
          length() {
            return this.children.reduce((t, e) => t + e.length(), 0);
          }
          moveChildren(t, e) {
            this.children.forEach((n) => {
              t.insertBefore(n, e);
            });
          }
          optimize(t) {
            if (
              (super.optimize(t),
              this.enforceAllowedChildren(),
              null != this.uiNode &&
                this.uiNode !== this.domNode.firstChild &&
                this.domNode.insertBefore(this.uiNode, this.domNode.firstChild),
              0 === this.children.length)
            )
              if (null != this.statics.defaultChild) {
                const t = this.scroll.create(
                  this.statics.defaultChild.blotName
                );
                this.appendChild(t);
              } else this.remove();
          }
          path(e, n = !1) {
            const [r, s] = this.children.find(e, n),
              i = [[this, e]];
            return r instanceof t
              ? i.concat(r.path(s, n))
              : (null != r && i.push([r, s]), i);
          }
          removeChild(t) {
            this.children.remove(t);
          }
          replaceWith(e, n) {
            const r = "string" == typeof e ? this.scroll.create(e, n) : e;
            return r instanceof t && this.moveChildren(r), super.replaceWith(r);
          }
          split(t, e = !1) {
            if (!e) {
              if (0 === t) return this;
              if (t === this.length()) return this.next;
            }
            const n = this.clone();
            return (
              this.parent && this.parent.insertBefore(n, this.next || void 0),
              this.children.forEachAt(t, this.length(), (t, r, s) => {
                const i = t.split(r, e);
                null != i && n.appendChild(i);
              }),
              n
            );
          }
          splitAfter(t) {
            const e = this.clone();
            for (; null != t.next; ) e.appendChild(t.next);
            return (
              this.parent && this.parent.insertBefore(e, this.next || void 0), e
            );
          }
          unwrap() {
            this.parent && this.moveChildren(this.parent, this.next || void 0),
              this.remove();
          }
          update(t, e) {
            const n = [],
              r = [];
            t.forEach((t) => {
              t.target === this.domNode &&
                "childList" === t.type &&
                (n.push(...t.addedNodes), r.push(...t.removedNodes));
            }),
              r.forEach((t) => {
                if (
                  null != t.parentNode &&
                  "IFRAME" !== t.tagName &&
                  document.body.compareDocumentPosition(t) &
                    Node.DOCUMENT_POSITION_CONTAINED_BY
                )
                  return;
                const e = this.scroll.find(t);
                null != e &&
                  (null == e.domNode.parentNode ||
                    e.domNode.parentNode === this.domNode) &&
                  e.detach();
              }),
              n
                .filter(
                  (t) => t.parentNode === this.domNode && t !== this.uiNode
                )
                .sort((t, e) =>
                  t === e
                    ? 0
                    : t.compareDocumentPosition(e) &
                      Node.DOCUMENT_POSITION_FOLLOWING
                    ? 1
                    : -1
                )
                .forEach((t) => {
                  let e = null;
                  null != t.nextSibling &&
                    (e = this.scroll.find(t.nextSibling));
                  const n = nn(t, this.scroll);
                  (n.next !== e || null == n.next) &&
                    (null != n.parent && n.parent.removeChild(this),
                    this.insertBefore(n, e || void 0));
                }),
              this.enforceAllowedChildren();
          }
        };
        rn.uiClass = "";
        const sn = rn;
        const on = class t extends sn {
          static create(t) {
            return super.create(t);
          }
          static formats(e, n) {
            const r = n.query(t.blotName);
            if (null == r || e.tagName !== r.tagName) {
              if ("string" == typeof this.tagName) return !0;
              if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
            }
          }
          constructor(t, e) {
            super(t, e), (this.attributes = new Xe(this.domNode));
          }
          format(e, n) {
            if (e !== this.statics.blotName || n) {
              const t = this.scroll.query(e, ze.INLINE);
              if (null == t) return;
              t instanceof Fe
                ? this.attributes.attribute(t, n)
                : n &&
                  (e !== this.statics.blotName || this.formats()[e] !== n) &&
                  this.replaceWith(e, n);
            } else
              this.children.forEach((e) => {
                e instanceof t || (e = e.wrap(t.blotName, !0)),
                  this.attributes.copy(e);
              }),
                this.unwrap();
          }
          formats() {
            const t = this.attributes.values(),
              e = this.statics.formats(this.domNode, this.scroll);
            return null != e && (t[this.statics.blotName] = e), t;
          }
          formatAt(t, e, n, r) {
            null != this.formats()[n] || this.scroll.query(n, ze.ATTRIBUTE)
              ? this.isolate(t, e).format(n, r)
              : super.formatAt(t, e, n, r);
          }
          optimize(e) {
            super.optimize(e);
            const n = this.formats();
            if (0 === Object.keys(n).length) return this.unwrap();
            const r = this.next;
            r instanceof t &&
              r.prev === this &&
              (function (t, e) {
                if (Object.keys(t).length !== Object.keys(e).length) return !1;
                for (const n in t) if (t[n] !== e[n]) return !1;
                return !0;
              })(n, r.formats()) &&
              (r.moveChildren(this), r.remove());
          }
          replaceWith(t, e) {
            const n = super.replaceWith(t, e);
            return this.attributes.copy(n), n;
          }
          update(t, e) {
            super.update(t, e),
              t.some(
                (t) => t.target === this.domNode && "attributes" === t.type
              ) && this.attributes.build();
          }
          wrap(e, n) {
            const r = super.wrap(e, n);
            return r instanceof t && this.attributes.move(r), r;
          }
        };
        (on.allowedChildren = [on, tn]),
          (on.blotName = "inline"),
          (on.scope = ze.INLINE_BLOT),
          (on.tagName = "SPAN");
        const ln = on,
          an = class t extends sn {
            static create(t) {
              return super.create(t);
            }
            static formats(e, n) {
              const r = n.query(t.blotName);
              if (null == r || e.tagName !== r.tagName) {
                if ("string" == typeof this.tagName) return !0;
                if (Array.isArray(this.tagName)) return e.tagName.toLowerCase();
              }
            }
            constructor(t, e) {
              super(t, e), (this.attributes = new Xe(this.domNode));
            }
            format(e, n) {
              const r = this.scroll.query(e, ze.BLOCK);
              null != r &&
                (r instanceof Fe
                  ? this.attributes.attribute(r, n)
                  : e !== this.statics.blotName || n
                  ? n &&
                    (e !== this.statics.blotName || this.formats()[e] !== n) &&
                    this.replaceWith(e, n)
                  : this.replaceWith(t.blotName));
            }
            formats() {
              const t = this.attributes.values(),
                e = this.statics.formats(this.domNode, this.scroll);
              return null != e && (t[this.statics.blotName] = e), t;
            }
            formatAt(t, e, n, r) {
              null != this.scroll.query(n, ze.BLOCK)
                ? this.format(n, r)
                : super.formatAt(t, e, n, r);
            }
            insertAt(t, e, n) {
              if (null == n || null != this.scroll.query(e, ze.INLINE))
                super.insertAt(t, e, n);
              else {
                const r = this.split(t);
                if (null == r)
                  throw new Error("Attempt to insertAt after block boundaries");
                {
                  const t = this.scroll.create(e, n);
                  r.parent.insertBefore(t, r);
                }
              }
            }
            replaceWith(t, e) {
              const n = super.replaceWith(t, e);
              return this.attributes.copy(n), n;
            }
            update(t, e) {
              super.update(t, e),
                t.some(
                  (t) => t.target === this.domNode && "attributes" === t.type
                ) && this.attributes.build();
            }
          };
        (an.blotName = "block"),
          (an.scope = ze.BLOCK_BLOT),
          (an.tagName = "P"),
          (an.allowedChildren = [ln, an, tn]);
        const cn = an,
          un = class extends sn {
            checkMerge() {
              return (
                null !== this.next &&
                this.next.statics.blotName === this.statics.blotName
              );
            }
            deleteAt(t, e) {
              super.deleteAt(t, e), this.enforceAllowedChildren();
            }
            formatAt(t, e, n, r) {
              super.formatAt(t, e, n, r), this.enforceAllowedChildren();
            }
            insertAt(t, e, n) {
              super.insertAt(t, e, n), this.enforceAllowedChildren();
            }
            optimize(t) {
              super.optimize(t),
                this.children.length > 0 &&
                  null != this.next &&
                  this.checkMerge() &&
                  (this.next.moveChildren(this), this.next.remove());
            }
          };
        (un.blotName = "container"), (un.scope = ze.BLOCK_BLOT);
        const hn = un;
        const dn = class extends tn {
            static formats(t, e) {}
            format(t, e) {
              super.formatAt(0, this.length(), t, e);
            }
            formatAt(t, e, n, r) {
              0 === t && e === this.length()
                ? this.format(n, r)
                : super.formatAt(t, e, n, r);
            }
            formats() {
              return this.statics.formats(this.domNode, this.scroll);
            }
          },
          fn = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0,
          },
          pn = class extends sn {
            constructor(t, e) {
              super(null, e),
                (this.registry = t),
                (this.scroll = this),
                this.build(),
                (this.observer = new MutationObserver((t) => {
                  this.update(t);
                })),
                this.observer.observe(this.domNode, fn),
                this.attach();
            }
            create(t, e) {
              return this.registry.create(this, t, e);
            }
            find(t, e = !1) {
              const n = this.registry.find(t, e);
              return n
                ? n.scroll === this
                  ? n
                  : e
                  ? this.find(n.scroll.domNode.parentNode, !0)
                  : null
                : null;
            }
            query(t, e = ze.ANY) {
              return this.registry.query(t, e);
            }
            register(...t) {
              return this.registry.register(...t);
            }
            build() {
              null != this.scroll && super.build();
            }
            detach() {
              super.detach(), this.observer.disconnect();
            }
            deleteAt(t, e) {
              this.update(),
                0 === t && e === this.length()
                  ? this.children.forEach((t) => {
                      t.remove();
                    })
                  : super.deleteAt(t, e);
            }
            formatAt(t, e, n, r) {
              this.update(), super.formatAt(t, e, n, r);
            }
            insertAt(t, e, n) {
              this.update(), super.insertAt(t, e, n);
            }
            optimize(t = [], e = {}) {
              super.optimize(e);
              const n = e.mutationsMap || new WeakMap();
              let r = Array.from(this.observer.takeRecords());
              for (; r.length > 0; ) t.push(r.pop());
              const s = (t, e = !0) => {
                  null == t ||
                    t === this ||
                    (null != t.domNode.parentNode &&
                      (n.has(t.domNode) || n.set(t.domNode, []),
                      e && s(t.parent)));
                },
                i = (t) => {
                  n.has(t.domNode) &&
                    (t instanceof sn && t.children.forEach(i),
                    n.delete(t.domNode),
                    t.optimize(e));
                };
              let o = t;
              for (let e = 0; o.length > 0; e += 1) {
                if (e >= 100)
                  throw new Error(
                    "[Parchment] Maximum optimize iterations reached"
                  );
                for (
                  o.forEach((t) => {
                    const e = this.find(t.target, !0);
                    null != e &&
                      (e.domNode === t.target &&
                        ("childList" === t.type
                          ? (s(this.find(t.previousSibling, !1)),
                            Array.from(t.addedNodes).forEach((t) => {
                              const e = this.find(t, !1);
                              s(e, !1),
                                e instanceof sn &&
                                  e.children.forEach((t) => {
                                    s(t, !1);
                                  });
                            }))
                          : "attributes" === t.type && s(e.prev)),
                      s(e));
                  }),
                    this.children.forEach(i),
                    o = Array.from(this.observer.takeRecords()),
                    r = o.slice();
                  r.length > 0;

                )
                  t.push(r.pop());
              }
            }
            update(t, e = {}) {
              t = t || this.observer.takeRecords();
              const n = new WeakMap();
              t
                .map((t) => {
                  const e = this.find(t.target, !0);
                  return null == e
                    ? null
                    : n.has(e.domNode)
                    ? (n.get(e.domNode).push(t), null)
                    : (n.set(e.domNode, [t]), e);
                })
                .forEach((t) => {
                  null != t &&
                    t !== this &&
                    n.has(t.domNode) &&
                    t.update(n.get(t.domNode) || [], e);
                }),
                (e.mutationsMap = n),
                n.has(this.domNode) && super.update(n.get(this.domNode), e),
                this.optimize(t, e);
            }
          };
        (pn.blotName = "scroll"),
          (pn.defaultChild = cn),
          (pn.allowedChildren = [cn, hn]),
          (pn.scope = ze.BLOCK_BLOT),
          (pn.tagName = "DIV");
        const gn = pn,
          mn = class t extends tn {
            static create(t) {
              return document.createTextNode(t);
            }
            static value(t) {
              return t.data;
            }
            constructor(t, e) {
              super(t, e), (this.text = this.statics.value(this.domNode));
            }
            deleteAt(t, e) {
              this.domNode.data = this.text =
                this.text.slice(0, t) + this.text.slice(t + e);
            }
            index(t, e) {
              return this.domNode === t ? e : -1;
            }
            insertAt(t, e, n) {
              null == n
                ? ((this.text = this.text.slice(0, t) + e + this.text.slice(t)),
                  (this.domNode.data = this.text))
                : super.insertAt(t, e, n);
            }
            length() {
              return this.text.length;
            }
            optimize(e) {
              super.optimize(e),
                (this.text = this.statics.value(this.domNode)),
                0 === this.text.length
                  ? this.remove()
                  : this.next instanceof t &&
                    this.next.prev === this &&
                    (this.insertAt(this.length(), this.next.value()),
                    this.next.remove());
            }
            position(t, e = !1) {
              return [this.domNode, t];
            }
            split(t, e = !1) {
              if (!e) {
                if (0 === t) return this;
                if (t === this.length()) return this.next;
              }
              const n = this.scroll.create(this.domNode.splitText(t));
              return (
                this.parent.insertBefore(n, this.next || void 0),
                (this.text = this.statics.value(this.domNode)),
                n
              );
            }
            update(t, e) {
              t.some(
                (t) => "characterData" === t.type && t.target === this.domNode
              ) && (this.text = this.statics.value(this.domNode));
            }
            value() {
              return this.text;
            }
          };
        (mn.blotName = "text"), (mn.scope = ze.INLINE_BLOT);
        const bn = mn;
        var vn = n(7098);
        var yn = function (t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length;
              ++n < r && !1 !== e(t[n], n, t);

            );
            return t;
          },
          xn = Tt(Object.keys, Object),
          Nn = Object.prototype.hasOwnProperty;
        var En = function (t) {
          if (!Rt(t)) return xn(t);
          var e = [];
          for (var n in Object(t))
            Nn.call(t, n) && "constructor" != n && e.push(n);
          return e;
        };
        var wn = function (t) {
          return Vt(t) ? Ne(t) : En(t);
        };
        var An = function (t, e) {
          return t && me(e, wn(e), t);
        };
        var qn = function (t, e) {
          return t && me(e, qe(e), t);
        };
        var kn = function (t, e) {
          for (
            var n = -1, r = null == t ? 0 : t.length, s = 0, i = [];
            ++n < r;

          ) {
            var o = t[n];
            e(o, n, t) && (i[s++] = o);
          }
          return i;
        };
        var _n = function () {
            return [];
          },
          Ln = Object.prototype.propertyIsEnumerable,
          On = Object.getOwnPropertySymbols,
          Sn = On
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    kn(On(t), function (e) {
                      return Ln.call(t, e);
                    }));
              }
            : _n;
        var Tn = function (t, e) {
          return me(t, Sn(t), e);
        };
        var jn = function (t, e) {
            for (var n = -1, r = e.length, s = t.length; ++n < r; )
              t[s + n] = e[n];
            return t;
          },
          Cn = Object.getOwnPropertySymbols
            ? function (t) {
                for (var e = []; t; ) jn(e, Sn(t)), (t = jt(t));
                return e;
              }
            : _n;
        var Rn = function (t, e) {
          return me(t, Cn(t), e);
        };
        var In = function (t, e, n) {
          var r = e(t);
          return Ht(t) ? r : jn(r, n(t));
        };
        var Mn = function (t) {
          return In(t, wn, Sn);
        };
        var Bn = function (t) {
            return In(t, qe, Cn);
          },
          Dn = K(y, "DataView"),
          Un = K(y, "Promise"),
          Pn = K(y, "Set"),
          zn = K(y, "WeakMap"),
          Fn = "[object Map]",
          Hn = "[object Promise]",
          $n = "[object Set]",
          Vn = "[object WeakMap]",
          Kn = "[object DataView]",
          Wn = B(Dn),
          Zn = B(W),
          Gn = B(Un),
          Xn = B(Pn),
          Yn = B(zn),
          Qn = O;
        ((Dn && Qn(new Dn(new ArrayBuffer(1))) != Kn) ||
          (W && Qn(new W()) != Fn) ||
          (Un && Qn(Un.resolve()) != Hn) ||
          (Pn && Qn(new Pn()) != $n) ||
          (zn && Qn(new zn()) != Vn)) &&
          (Qn = function (t) {
            var e = O(t),
              n = "[object Object]" == e ? t.constructor : void 0,
              r = n ? B(n) : "";
            if (r)
              switch (r) {
                case Wn:
                  return Kn;
                case Zn:
                  return Fn;
                case Gn:
                  return Hn;
                case Xn:
                  return $n;
                case Yn:
                  return Vn;
              }
            return e;
          });
        var Jn = Qn,
          tr = Object.prototype.hasOwnProperty;
        var er = function (t) {
          var e = t.length,
            n = new t.constructor(e);
          return (
            e &&
              "string" == typeof t[0] &&
              tr.call(t, "index") &&
              ((n.index = t.index), (n.input = t.input)),
            n
          );
        };
        var nr = function (t, e) {
            var n = e ? kt(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.byteLength);
          },
          rr = /\w*$/;
        var sr = function (t) {
            var e = new t.constructor(t.source, rr.exec(t));
            return (e.lastIndex = t.lastIndex), e;
          },
          ir = x ? x.prototype : void 0,
          or = ir ? ir.valueOf : void 0;
        var lr = function (t) {
          return or ? Object(or.call(t)) : {};
        };
        var ar = function (t, e, n) {
          var r = t.constructor;
          switch (e) {
            case "[object ArrayBuffer]":
              return kt(t);
            case "[object Boolean]":
            case "[object Date]":
              return new r(+t);
            case "[object DataView]":
              return nr(t, n);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return _t(t, n);
            case "[object Map]":
            case "[object Set]":
              return new r();
            case "[object Number]":
            case "[object String]":
              return new r(t);
            case "[object RegExp]":
              return sr(t);
            case "[object Symbol]":
              return lr(t);
          }
        };
        var cr = function (t) {
            return Mt(t) && "[object Map]" == Jn(t);
          },
          ur = ue && ue.isMap,
          hr = ur ? oe(ur) : cr;
        var dr = function (t) {
            return Mt(t) && "[object Set]" == Jn(t);
          },
          fr = ue && ue.isSet,
          pr = fr ? oe(fr) : dr,
          gr = "[object Arguments]",
          mr = "[object Function]",
          br = "[object Object]",
          vr = {};
        (vr[gr] =
          vr["[object Array]"] =
          vr["[object ArrayBuffer]"] =
          vr["[object DataView]"] =
          vr["[object Boolean]"] =
          vr["[object Date]"] =
          vr["[object Float32Array]"] =
          vr["[object Float64Array]"] =
          vr["[object Int8Array]"] =
          vr["[object Int16Array]"] =
          vr["[object Int32Array]"] =
          vr["[object Map]"] =
          vr["[object Number]"] =
          vr[br] =
          vr["[object RegExp]"] =
          vr["[object Set]"] =
          vr["[object String]"] =
          vr["[object Symbol]"] =
          vr["[object Uint8Array]"] =
          vr["[object Uint8ClampedArray]"] =
          vr["[object Uint16Array]"] =
          vr["[object Uint32Array]"] =
            !0),
          (vr["[object Error]"] = vr[mr] = vr["[object WeakMap]"] = !1);
        var yr = function t(e, n, r, s, i, o) {
          var l,
            a = 1 & n,
            c = 2 & n,
            u = 4 & n;
          if ((r && (l = i ? r(e, s, i, o) : r(e)), void 0 !== l)) return l;
          if (!S(e)) return e;
          var h = Ht(e);
          if (h) {
            if (((l = er(e)), !a)) return Lt(e, l);
          } else {
            var d = Jn(e),
              f = d == mr || "[object GeneratorFunction]" == d;
            if (Yt(e)) return At(e, a);
            if (d == br || d == gr || (f && !i)) {
              if (((l = c || f ? {} : It(e)), !a))
                return c ? Rn(e, qn(l, e)) : Tn(e, An(l, e));
            } else {
              if (!vr[d]) return i ? e : {};
              l = ar(e, d, a);
            }
          }
          o || (o = new gt());
          var p = o.get(e);
          if (p) return p;
          o.set(e, l),
            pr(e)
              ? e.forEach(function (s) {
                  l.add(t(s, n, r, s, e, o));
                })
              : hr(e) &&
                e.forEach(function (s, i) {
                  l.set(i, t(s, n, r, i, e, o));
                });
          var g = h ? void 0 : (u ? (c ? Bn : Mn) : c ? qe : wn)(e);
          return (
            yn(g || e, function (s, i) {
              g && (s = e[(i = s)]), ge(l, i, t(s, n, r, i, e, o));
            }),
            l
          );
        };
        var xr = function (t) {
          return yr(t, 5);
        };
        var Nr = function (t) {
          return this.__data__.set(t, "__lodash_hash_undefined__"), this;
        };
        var Er = function (t) {
          return this.__data__.has(t);
        };
        function wr(t) {
          var e = -1,
            n = null == t ? 0 : t.length;
          for (this.__data__ = new dt(); ++e < n; ) this.add(t[e]);
        }
        (wr.prototype.add = wr.prototype.push = Nr), (wr.prototype.has = Er);
        var Ar = wr;
        var qr = function (t, e) {
          for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (e(t[n], n, t)) return !0;
          return !1;
        };
        var kr = function (t, e) {
          return t.has(e);
        };
        var _r = function (t, e, n, r, s, i) {
          var o = 1 & n,
            l = t.length,
            a = e.length;
          if (l != a && !(o && a > l)) return !1;
          var c = i.get(t),
            u = i.get(e);
          if (c && u) return c == e && u == t;
          var h = -1,
            d = !0,
            f = 2 & n ? new Ar() : void 0;
          for (i.set(t, e), i.set(e, t); ++h < l; ) {
            var p = t[h],
              g = e[h];
            if (r) var m = o ? r(g, p, h, e, t, i) : r(p, g, h, t, e, i);
            if (void 0 !== m) {
              if (m) continue;
              d = !1;
              break;
            }
            if (f) {
              if (
                !qr(e, function (t, e) {
                  if (!kr(f, e) && (p === t || s(p, t, n, r, i)))
                    return f.push(e);
                })
              ) {
                d = !1;
                break;
              }
            } else if (p !== g && !s(p, g, n, r, i)) {
              d = !1;
              break;
            }
          }
          return i.delete(t), i.delete(e), d;
        };
        var Lr = function (t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t, r) {
              n[++e] = [r, t];
            }),
            n
          );
        };
        var Or = function (t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          },
          Sr = x ? x.prototype : void 0,
          Tr = Sr ? Sr.valueOf : void 0;
        var jr = function (t, e, n, r, i, o, l) {
            switch (n) {
              case "[object DataView]":
                if (
                  t.byteLength != e.byteLength ||
                  t.byteOffset != e.byteOffset
                )
                  return !1;
                (t = t.buffer), (e = e.buffer);
              case "[object ArrayBuffer]":
                return !(
                  t.byteLength != e.byteLength || !o(new qt(t), new qt(e))
                );
              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return s(+t, +e);
              case "[object Error]":
                return t.name == e.name && t.message == e.message;
              case "[object RegExp]":
              case "[object String]":
                return t == e + "";
              case "[object Map]":
                var a = Lr;
              case "[object Set]":
                var c = 1 & r;
                if ((a || (a = Or), t.size != e.size && !c)) return !1;
                var u = l.get(t);
                if (u) return u == e;
                (r |= 2), l.set(t, e);
                var h = _r(a(t), a(e), r, i, o, l);
                return l.delete(t), h;
              case "[object Symbol]":
                if (Tr) return Tr.call(t) == Tr.call(e);
            }
            return !1;
          },
          Cr = Object.prototype.hasOwnProperty;
        var Rr = function (t, e, n, r, s, i) {
            var o = 1 & n,
              l = Mn(t),
              a = l.length;
            if (a != Mn(e).length && !o) return !1;
            for (var c = a; c--; ) {
              var u = l[c];
              if (!(o ? u in e : Cr.call(e, u))) return !1;
            }
            var h = i.get(t),
              d = i.get(e);
            if (h && d) return h == e && d == t;
            var f = !0;
            i.set(t, e), i.set(e, t);
            for (var p = o; ++c < a; ) {
              var g = t[(u = l[c])],
                m = e[u];
              if (r) var b = o ? r(m, g, u, e, t, i) : r(g, m, u, t, e, i);
              if (!(void 0 === b ? g === m || s(g, m, n, r, i) : b)) {
                f = !1;
                break;
              }
              p || (p = "constructor" == u);
            }
            if (f && !p) {
              var v = t.constructor,
                y = e.constructor;
              v == y ||
                !("constructor" in t) ||
                !("constructor" in e) ||
                ("function" == typeof v &&
                  v instanceof v &&
                  "function" == typeof y &&
                  y instanceof y) ||
                (f = !1);
            }
            return i.delete(t), i.delete(e), f;
          },
          Ir = "[object Arguments]",
          Mr = "[object Array]",
          Br = "[object Object]",
          Dr = Object.prototype.hasOwnProperty;
        var Ur = function (t, e, n, r, s, i) {
          var o = Ht(t),
            l = Ht(e),
            a = o ? Mr : Jn(t),
            c = l ? Mr : Jn(e),
            u = (a = a == Ir ? Br : a) == Br,
            h = (c = c == Ir ? Br : c) == Br,
            d = a == c;
          if (d && Yt(t)) {
            if (!Yt(e)) return !1;
            (o = !0), (u = !1);
          }
          if (d && !u)
            return (
              i || (i = new gt()),
              o || de(t) ? _r(t, e, n, r, s, i) : jr(t, e, a, n, r, s, i)
            );
          if (!(1 & n)) {
            var f = u && Dr.call(t, "__wrapped__"),
              p = h && Dr.call(e, "__wrapped__");
            if (f || p) {
              var g = f ? t.value() : t,
                m = p ? e.value() : e;
              return i || (i = new gt()), s(g, m, n, r, i);
            }
          }
          return !!d && (i || (i = new gt()), Rr(t, e, n, r, s, i));
        };
        var Pr = function t(e, n, r, s, i) {
          return (
            e === n ||
            (null == e || null == n || (!Mt(e) && !Mt(n))
              ? e != e && n != n
              : Ur(e, n, r, s, t, i))
          );
        };
        var zr = function (t, e) {
          return Pr(t, e);
        };
        class Fr extends dn {
          static value() {}
          optimize() {
            (this.prev || this.next) && this.remove();
          }
          length() {
            return 0;
          }
          value() {
            return "";
          }
        }
        (Fr.blotName = "break"), (Fr.tagName = "BR");
        var Hr = Fr;
        class $r extends bn {}
        const Vr = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
        function Kr(t) {
          return t.replace(/[&<>"']/g, (t) => Vr[t]);
        }
        class Wr extends ln {
          static allowedChildren = [Wr, Hr, dn, $r];
          static order = [
            "cursor",
            "inline",
            "link",
            "underline",
            "strike",
            "italic",
            "bold",
            "script",
            "code",
          ];
          static compare(t, e) {
            const n = Wr.order.indexOf(t),
              r = Wr.order.indexOf(e);
            return n >= 0 || r >= 0 ? n - r : t === e ? 0 : t < e ? -1 : 1;
          }
          formatAt(t, e, n, r) {
            if (
              Wr.compare(this.statics.blotName, n) < 0 &&
              this.scroll.query(n, ze.BLOT)
            ) {
              const s = this.isolate(t, e);
              r && s.wrap(n, r);
            } else super.formatAt(t, e, n, r);
          }
          optimize(t) {
            if (
              (super.optimize(t),
              this.parent instanceof Wr &&
                Wr.compare(
                  this.statics.blotName,
                  this.parent.statics.blotName
                ) > 0)
            ) {
              const t = this.parent.isolate(this.offset(), this.length());
              this.moveChildren(t), t.wrap(this);
            }
          }
        }
        var Zr = Wr;
        class Gr extends cn {
          cache = {};
          delta() {
            return (
              null == this.cache.delta && (this.cache.delta = Yr(this)),
              this.cache.delta
            );
          }
          deleteAt(t, e) {
            super.deleteAt(t, e), (this.cache = {});
          }
          formatAt(t, e, n, r) {
            e <= 0 ||
              (this.scroll.query(n, ze.BLOCK)
                ? t + e === this.length() && this.format(n, r)
                : super.formatAt(t, Math.min(e, this.length() - t - 1), n, r),
              (this.cache = {}));
          }
          insertAt(t, e, n) {
            if (null != n)
              return super.insertAt(t, e, n), void (this.cache = {});
            if (0 === e.length) return;
            const r = e.split("\n"),
              s = r.shift();
            s.length > 0 &&
              (t < this.length() - 1 || null == this.children.tail
                ? super.insertAt(Math.min(t, this.length() - 1), s)
                : this.children.tail.insertAt(this.children.tail.length(), s),
              (this.cache = {}));
            let i = this;
            r.reduce(
              (t, e) => ((i = i.split(t, !0)), i.insertAt(0, e), e.length),
              t + s.length
            );
          }
          insertBefore(t, e) {
            const { head: n } = this.children;
            super.insertBefore(t, e),
              n instanceof Hr && n.remove(),
              (this.cache = {});
          }
          length() {
            return (
              null == this.cache.length &&
                (this.cache.length = super.length() + 1),
              this.cache.length
            );
          }
          moveChildren(t, e) {
            super.moveChildren(t, e), (this.cache = {});
          }
          optimize(t) {
            super.optimize(t), (this.cache = {});
          }
          path(t) {
            return super.path(t, !0);
          }
          removeChild(t) {
            super.removeChild(t), (this.cache = {});
          }
          split(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e && (0 === t || t >= this.length() - 1)) {
              const e = this.clone();
              return 0 === t
                ? (this.parent.insertBefore(e, this), this)
                : (this.parent.insertBefore(e, this.next), e);
            }
            const n = super.split(t, e);
            return (this.cache = {}), n;
          }
        }
        (Gr.blotName = "block"),
          (Gr.tagName = "P"),
          (Gr.defaultChild = Hr),
          (Gr.allowedChildren = [Hr, Zr, dn, $r]);
        class Xr extends dn {
          attach() {
            super.attach(), (this.attributes = new Xe(this.domNode));
          }
          delta() {
            return new vn().insert(this.value(), {
              ...this.formats(),
              ...this.attributes.values(),
            });
          }
          format(t, e) {
            const n = this.scroll.query(t, ze.BLOCK_ATTRIBUTE);
            null != n && this.attributes.attribute(n, e);
          }
          formatAt(t, e, n, r) {
            this.format(n, r);
          }
          insertAt(t, e, n) {
            if (null != n) return void super.insertAt(t, e, n);
            const r = e.split("\n"),
              s = r.pop(),
              i = r.map((t) => {
                const e = this.scroll.create(Gr.blotName);
                return e.insertAt(0, t), e;
              }),
              o = this.split(t);
            i.forEach((t) => {
              this.parent.insertBefore(t, o);
            }),
              s && this.parent.insertBefore(this.scroll.create("text", s), o);
          }
        }
        function Yr(t) {
          let e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return t
            .descendants(tn)
            .reduce(
              (t, n) =>
                0 === n.length() ? t : t.insert(n.value(), Qr(n, {}, e)),
              new vn()
            )
            .insert("\n", Qr(t));
        }
        function Qr(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          return null == t
            ? e
            : ("formats" in t &&
                "function" == typeof t.formats &&
                ((e = { ...e, ...t.formats() }), n && delete e["code-token"]),
              null == t.parent ||
              "scroll" === t.parent.statics.blotName ||
              t.parent.statics.scope !== t.statics.scope
                ? e
                : Qr(t.parent, e, n));
        }
        Xr.scope = ze.BLOCK_BLOT;
        class Jr extends dn {
          static blotName = "cursor";
          static className = "ql-cursor";
          static tagName = "span";
          static CONTENTS = "\ufeff";
          static value() {}
          constructor(t, e, n) {
            super(t, e),
              (this.selection = n),
              (this.textNode = document.createTextNode(Jr.CONTENTS)),
              this.domNode.appendChild(this.textNode),
              (this.savedLength = 0);
          }
          detach() {
            null != this.parent && this.parent.removeChild(this);
          }
          format(t, e) {
            if (0 !== this.savedLength) return void super.format(t, e);
            let n = this,
              r = 0;
            for (; null != n && n.statics.scope !== ze.BLOCK_BLOT; )
              (r += n.offset(n.parent)), (n = n.parent);
            null != n &&
              ((this.savedLength = Jr.CONTENTS.length),
              n.optimize(),
              n.formatAt(r, Jr.CONTENTS.length, t, e),
              (this.savedLength = 0));
          }
          index(t, e) {
            return t === this.textNode ? 0 : super.index(t, e);
          }
          length() {
            return this.savedLength;
          }
          position() {
            return [this.textNode, this.textNode.data.length];
          }
          remove() {
            super.remove(), (this.parent = null);
          }
          restore() {
            if (this.selection.composing || null == this.parent) return null;
            const t = this.selection.getNativeRange();
            for (
              ;
              null != this.domNode.lastChild &&
              this.domNode.lastChild !== this.textNode;

            )
              this.domNode.parentNode.insertBefore(
                this.domNode.lastChild,
                this.domNode
              );
            const e = this.prev instanceof $r ? this.prev : null,
              n = e ? e.length() : 0,
              r = this.next instanceof $r ? this.next : null,
              s = r ? r.text : "",
              { textNode: i } = this,
              o = i.data.split(Jr.CONTENTS).join("");
            let l;
            if (((i.data = Jr.CONTENTS), e))
              (l = e),
                (o || r) && (e.insertAt(e.length(), o + s), r && r.remove());
            else if (r) (l = r), r.insertAt(0, o);
            else {
              const t = document.createTextNode(o);
              (l = this.scroll.create(t)), this.parent.insertBefore(l, this);
            }
            if ((this.remove(), t)) {
              const s = (t, s) =>
                  e && t === e.domNode
                    ? s
                    : t === i
                    ? n + s - 1
                    : r && t === r.domNode
                    ? n + o.length + s
                    : null,
                a = s(t.start.node, t.start.offset),
                c = s(t.end.node, t.end.offset);
              if (null !== a && null !== c)
                return {
                  startNode: l.domNode,
                  startOffset: a,
                  endNode: l.domNode,
                  endOffset: c,
                };
            }
            return null;
          }
          update(t, e) {
            if (
              t.some(
                (t) => "characterData" === t.type && t.target === this.textNode
              )
            ) {
              const t = this.restore();
              t && (e.range = t);
            }
          }
          optimize(t) {
            super.optimize(t);
            let { parent: e } = this;
            for (; e; ) {
              if ("A" === e.domNode.tagName) {
                (this.savedLength = Jr.CONTENTS.length),
                  e.isolate(this.offset(e), this.length()).unwrap(),
                  (this.savedLength = 0);
                break;
              }
              e = e.parent;
            }
          }
          value() {
            return "";
          }
        }
        var ts = Jr,
          es = n(6729),
          ns = new WeakMap();
        const rs = ["error", "warn", "log", "info"];
        let ss = "warn";
        function is(t) {
          if (ss && rs.indexOf(t) <= rs.indexOf(ss))
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
        }
        function os(t) {
          return rs.reduce((e, n) => ((e[n] = is.bind(console, n, t)), e), {});
        }
        (os.level = (t) => {
          ss = t;
        }),
          (is.level = os.level);
        var ls = os;
        const as = ls("quill:events");
        ["selectionchange", "mousedown", "mouseup", "click"].forEach((t) => {
          document.addEventListener(t, function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            Array.from(document.querySelectorAll(".ql-container")).forEach(
              (t) => {
                const n = ns.get(t);
                n && n.emitter && n.emitter.handleDOM(...e);
              }
            );
          });
        });
        var cs = class extends es {
          static events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_BLOT_MOUNT: "scroll-blot-mount",
            SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SCROLL_EMBED_UPDATE: "scroll-embed-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change",
            COMPOSITION_BEFORE_START: "composition-before-start",
            COMPOSITION_START: "composition-start",
            COMPOSITION_BEFORE_END: "composition-before-end",
            COMPOSITION_END: "composition-end",
          };
          static sources = { API: "api", SILENT: "silent", USER: "user" };
          constructor() {
            super(), (this.domListeners = {}), this.on("error", as.error);
          }
          emit() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return as.log.call(as, ...e), super.emit(...e);
          }
          handleDOM(t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            (this.domListeners[t.type] || []).forEach((e) => {
              let { node: r, handler: s } = e;
              (t.target === r || r.contains(t.target)) && s(t, ...n);
            });
          }
          listenDOM(t, e, n) {
            this.domListeners[t] || (this.domListeners[t] = []),
              this.domListeners[t].push({ node: e, handler: n });
          }
        };
        const us = ls("quill:selection");
        class hs {
          constructor(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            (this.index = t), (this.length = e);
          }
        }
        function ds(t, e) {
          try {
            e.parentNode;
          } catch (t) {
            return !1;
          }
          return t.contains(e);
        }
        var fs = class {
          constructor(t, e) {
            (this.emitter = e),
              (this.scroll = t),
              (this.composing = !1),
              (this.mouseDown = !1),
              (this.root = this.scroll.domNode),
              (this.cursor = this.scroll.create("cursor", this)),
              (this.savedRange = new hs(0, 0)),
              (this.lastRange = this.savedRange),
              (this.lastNative = null),
              this.handleComposition(),
              this.handleDragging(),
              this.emitter.listenDOM("selectionchange", document, () => {
                this.mouseDown ||
                  this.composing ||
                  setTimeout(this.update.bind(this, cs.sources.USER), 1);
              }),
              this.emitter.on(cs.events.SCROLL_BEFORE_UPDATE, () => {
                if (!this.hasFocus()) return;
                const t = this.getNativeRange();
                null != t &&
                  t.start.node !== this.cursor.textNode &&
                  this.emitter.once(cs.events.SCROLL_UPDATE, (e, n) => {
                    try {
                      this.root.contains(t.start.node) &&
                        this.root.contains(t.end.node) &&
                        this.setNativeRange(
                          t.start.node,
                          t.start.offset,
                          t.end.node,
                          t.end.offset
                        );
                      const r = n.some(
                        (t) =>
                          "characterData" === t.type ||
                          "childList" === t.type ||
                          ("attributes" === t.type && t.target === this.root)
                      );
                      this.update(r ? cs.sources.SILENT : e);
                    } catch (t) {}
                  });
              }),
              this.emitter.on(cs.events.SCROLL_OPTIMIZE, (t, e) => {
                if (e.range) {
                  const {
                    startNode: t,
                    startOffset: n,
                    endNode: r,
                    endOffset: s,
                  } = e.range;
                  this.setNativeRange(t, n, r, s),
                    this.update(cs.sources.SILENT);
                }
              }),
              this.update(cs.sources.SILENT);
          }
          handleComposition() {
            this.emitter.on(cs.events.COMPOSITION_BEFORE_START, () => {
              this.composing = !0;
            }),
              this.emitter.on(cs.events.COMPOSITION_END, () => {
                if (((this.composing = !1), this.cursor.parent)) {
                  const t = this.cursor.restore();
                  if (!t) return;
                  setTimeout(() => {
                    this.setNativeRange(
                      t.startNode,
                      t.startOffset,
                      t.endNode,
                      t.endOffset
                    );
                  }, 1);
                }
              });
          }
          handleDragging() {
            this.emitter.listenDOM("mousedown", document.body, () => {
              this.mouseDown = !0;
            }),
              this.emitter.listenDOM("mouseup", document.body, () => {
                (this.mouseDown = !1), this.update(cs.sources.USER);
              });
          }
          focus() {
            this.hasFocus() ||
              (this.root.focus({ preventScroll: !0 }),
              this.setRange(this.savedRange));
          }
          format(t, e) {
            this.scroll.update();
            const n = this.getNativeRange();
            if (
              null != n &&
              n.native.collapsed &&
              !this.scroll.query(t, ze.BLOCK)
            ) {
              if (n.start.node !== this.cursor.textNode) {
                const t = this.scroll.find(n.start.node, !1);
                if (null == t) return;
                if (t instanceof tn) {
                  const e = t.split(n.start.offset);
                  t.parent.insertBefore(this.cursor, e);
                } else t.insertBefore(this.cursor, n.start.node);
                this.cursor.attach();
              }
              this.cursor.format(t, e),
                this.scroll.optimize(),
                this.setNativeRange(
                  this.cursor.textNode,
                  this.cursor.textNode.data.length
                ),
                this.update();
            }
          }
          getBounds(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            const n = this.scroll.length();
            let r;
            (t = Math.min(t, n - 1)), (e = Math.min(t + e, n - 1) - t);
            let [s, i] = this.scroll.leaf(t);
            if (null == s) return null;
            if (e > 0 && i === s.length()) {
              const [e] = this.scroll.leaf(t + 1);
              if (e) {
                const [n] = this.scroll.line(t),
                  [r] = this.scroll.line(t + 1);
                n === r && ((s = e), (i = 0));
              }
            }
            [r, i] = s.position(i, !0);
            const o = document.createRange();
            if (e > 0)
              return (
                o.setStart(r, i),
                ([s, i] = this.scroll.leaf(t + e)),
                null == s
                  ? null
                  : (([r, i] = s.position(i, !0)),
                    o.setEnd(r, i),
                    o.getBoundingClientRect())
              );
            let l,
              a = "left";
            if (r instanceof Text) {
              if (!r.data.length) return null;
              i < r.data.length
                ? (o.setStart(r, i), o.setEnd(r, i + 1))
                : (o.setStart(r, i - 1), o.setEnd(r, i), (a = "right")),
                (l = o.getBoundingClientRect());
            } else {
              if (!(s.domNode instanceof Element)) return null;
              (l = s.domNode.getBoundingClientRect()), i > 0 && (a = "right");
            }
            return {
              bottom: l.top + l.height,
              height: l.height,
              left: l[a],
              right: l[a],
              top: l.top,
              width: 0,
            };
          }
          getNativeRange() {
            const t = document.getSelection();
            if (null == t || t.rangeCount <= 0) return null;
            const e = t.getRangeAt(0);
            if (null == e) return null;
            const n = this.normalizeNative(e);
            return us.info("getNativeRange", n), n;
          }
          getRange() {
            const t = this.scroll.domNode;
            if ("isConnected" in t && !t.isConnected) return [null, null];
            const e = this.getNativeRange();
            if (null == e) return [null, null];
            return [this.normalizedToRange(e), e];
          }
          hasFocus() {
            return (
              document.activeElement === this.root ||
              (null != document.activeElement &&
                ds(this.root, document.activeElement))
            );
          }
          normalizedToRange(t) {
            const e = [[t.start.node, t.start.offset]];
            t.native.collapsed || e.push([t.end.node, t.end.offset]);
            const n = e.map((t) => {
                const [e, n] = t,
                  r = this.scroll.find(e, !0),
                  s = r.offset(this.scroll);
                return 0 === n
                  ? s
                  : r instanceof tn
                  ? s + r.index(e, n)
                  : s + r.length();
              }),
              r = Math.min(Math.max(...n), this.scroll.length() - 1),
              s = Math.min(r, ...n);
            return new hs(s, r - s);
          }
          normalizeNative(t) {
            if (
              !ds(this.root, t.startContainer) ||
              (!t.collapsed && !ds(this.root, t.endContainer))
            )
              return null;
            const e = {
              start: { node: t.startContainer, offset: t.startOffset },
              end: { node: t.endContainer, offset: t.endOffset },
              native: t,
            };
            return (
              [e.start, e.end].forEach((t) => {
                let { node: e, offset: n } = t;
                for (; !(e instanceof Text) && e.childNodes.length > 0; )
                  if (e.childNodes.length > n) (e = e.childNodes[n]), (n = 0);
                  else {
                    if (e.childNodes.length !== n) break;
                    (e = e.lastChild),
                      (n =
                        e instanceof Text
                          ? e.data.length
                          : e.childNodes.length > 0
                          ? e.childNodes.length
                          : e.childNodes.length + 1);
                  }
                (t.node = e), (t.offset = n);
              }),
              e
            );
          }
          rangeToNative(t) {
            const e = this.scroll.length(),
              n = (t, n) => {
                t = Math.min(e - 1, t);
                const [r, s] = this.scroll.leaf(t);
                return r ? r.position(s, n) : [null, -1];
              };
            return [...n(t.index, !1), ...n(t.index + t.length, !0)];
          }
          setNativeRange(t, e) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : t,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : e,
              s =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (
              (us.info("setNativeRange", t, e, n, r),
              null != t &&
                (null == this.root.parentNode ||
                  null == t.parentNode ||
                  null == n.parentNode))
            )
              return;
            const i = document.getSelection();
            if (null != i)
              if (null != t) {
                this.hasFocus() || this.root.focus({ preventScroll: !0 });
                const { native: o } = this.getNativeRange() || {};
                if (
                  null == o ||
                  s ||
                  t !== o.startContainer ||
                  e !== o.startOffset ||
                  n !== o.endContainer ||
                  r !== o.endOffset
                ) {
                  t instanceof Element &&
                    "BR" === t.tagName &&
                    ((e = Array.from(t.parentNode.childNodes).indexOf(t)),
                    (t = t.parentNode)),
                    n instanceof Element &&
                      "BR" === n.tagName &&
                      ((r = Array.from(n.parentNode.childNodes).indexOf(n)),
                      (n = n.parentNode));
                  const s = document.createRange();
                  s.setStart(t, e),
                    s.setEnd(n, r),
                    i.removeAllRanges(),
                    i.addRange(s);
                }
              } else i.removeAllRanges(), this.root.blur();
          }
          setRange(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : cs.sources.API;
            if (
              ("string" == typeof e && ((n = e), (e = !1)),
              us.info("setRange", t),
              null != t)
            ) {
              const n = this.rangeToNative(t);
              this.setNativeRange(...n, e);
            } else this.setNativeRange(null);
            this.update(n);
          }
          update() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : cs.sources.USER;
            const e = this.lastRange,
              [n, r] = this.getRange();
            if (
              ((this.lastRange = n),
              (this.lastNative = r),
              null != this.lastRange && (this.savedRange = this.lastRange),
              !zr(e, this.lastRange))
            ) {
              if (
                !this.composing &&
                null != r &&
                r.native.collapsed &&
                r.start.node !== this.cursor.textNode
              ) {
                const t = this.cursor.restore();
                t &&
                  this.setNativeRange(
                    t.startNode,
                    t.startOffset,
                    t.endNode,
                    t.endOffset
                  );
              }
              const n = [
                cs.events.SELECTION_CHANGE,
                xr(this.lastRange),
                xr(e),
                t,
              ];
              this.emitter.emit(cs.events.EDITOR_CHANGE, ...n),
                t !== cs.sources.SILENT && this.emitter.emit(...n);
            }
          }
        };
        const ps = /^[ -~]*$/;
        function gs(t, e, n) {
          if (0 === t.length) {
            const [t] = vs(n.pop());
            return e <= 0 ? `</li></${t}>` : `</li></${t}>${gs([], e - 1, n)}`;
          }
          const [{ child: r, offset: s, length: i, indent: o, type: l }, ...a] =
              t,
            [c, u] = vs(l);
          if (o > e)
            return (
              n.push(l),
              o === e + 1
                ? `<${c}><li${u}>${ms(r, s, i)}${gs(a, o, n)}`
                : `<${c}><li>${gs(t, e + 1, n)}`
            );
          const h = n[n.length - 1];
          if (o === e && l === h)
            return `</li><li${u}>${ms(r, s, i)}${gs(a, o, n)}`;
          const [d] = vs(n.pop());
          return `</li></${d}>${gs(t, e - 1, n)}`;
        }
        function ms(t, e, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if ("html" in t && "function" == typeof t.html) return t.html(e, n);
          if (t instanceof $r) {
            return Kr(t.value().slice(e, e + n)).replaceAll(" ", "&nbsp;");
          }
          if (t instanceof sn) {
            if ("list-container" === t.statics.blotName) {
              const r = [];
              return (
                t.children.forEachAt(e, n, (t, e, n) => {
                  const s =
                    "formats" in t && "function" == typeof t.formats
                      ? t.formats()
                      : {};
                  r.push({
                    child: t,
                    offset: e,
                    length: n,
                    indent: s.indent || 0,
                    type: s.list,
                  });
                }),
                gs(r, -1, [])
              );
            }
            const s = [];
            if (
              (t.children.forEachAt(e, n, (t, e, n) => {
                s.push(ms(t, e, n));
              }),
              r || "list" === t.statics.blotName)
            )
              return s.join("");
            const { outerHTML: i, innerHTML: o } = t.domNode,
              [l, a] = i.split(`>${o}<`);
            return "<table" === l
              ? `<table style="border: 1px solid #000;">${s.join("")}<${a}`
              : `${l}>${s.join("")}<${a}`;
          }
          return t.domNode instanceof Element ? t.domNode.outerHTML : "";
        }
        function bs(t, e) {
          return Object.keys(e).reduce((n, r) => {
            if (null == t[r]) return n;
            const s = e[r];
            return (
              s === t[r]
                ? (n[r] = s)
                : Array.isArray(s)
                ? s.indexOf(t[r]) < 0
                  ? (n[r] = s.concat([t[r]]))
                  : (n[r] = s)
                : (n[r] = [s, t[r]]),
              n
            );
          }, {});
        }
        function vs(t) {
          const e = "ordered" === t ? "ol" : "ul";
          switch (t) {
            case "checked":
              return [e, ' data-list="checked"'];
            case "unchecked":
              return [e, ' data-list="unchecked"'];
            default:
              return [e, ""];
          }
        }
        function ys(t) {
          return t.reduce((t, e) => {
            if ("string" == typeof e.insert) {
              const n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
              return t.insert(n, e.attributes);
            }
            return t.push(e);
          }, new vn());
        }
        function xs(t, e) {
          let { index: n, length: r } = t;
          return new hs(n + e, r);
        }
        var Ns = class {
          constructor(t) {
            (this.scroll = t), (this.delta = this.getDelta());
          }
          applyDelta(t) {
            this.scroll.update();
            let e = this.scroll.length();
            this.scroll.batchStart();
            const n = ys(t),
              r = new vn();
            return (
              (function (t) {
                const e = [];
                return (
                  t.forEach((t) => {
                    if ("string" == typeof t.insert) {
                      t.insert.split("\n").forEach((n, r) => {
                        r && e.push({ insert: "\n", attributes: t.attributes }),
                          n && e.push({ insert: n, attributes: t.attributes });
                      });
                    } else e.push(t);
                  }),
                  e
                );
              })(n.ops.slice()).reduce((t, n) => {
                const s = vn.Op.length(n);
                let i = n.attributes || {},
                  o = !1,
                  l = !1;
                if (null != n.insert) {
                  if ((r.retain(s), "string" == typeof n.insert)) {
                    const r = n.insert;
                    (l =
                      !r.endsWith("\n") &&
                      (e <= t || !!this.scroll.descendant(Xr, t)[0])),
                      this.scroll.insertAt(t, r);
                    const [s, o] = this.scroll.line(t);
                    let a = Pe({}, Qr(s));
                    if (s instanceof Gr) {
                      const [t] = s.descendant(tn, o);
                      t && (a = Pe(a, Qr(t)));
                    }
                    i = vn.AttributeMap.diff(a, i) || {};
                  } else if ("object" == typeof n.insert) {
                    const r = Object.keys(n.insert)[0];
                    if (null == r) return t;
                    const s = null != this.scroll.query(r, ze.INLINE);
                    if (s)
                      (e <= t || this.scroll.descendant(Xr, t)[0]) && (l = !0);
                    else if (t > 0) {
                      const [e, n] = this.scroll.descendant(tn, t - 1);
                      if (e instanceof $r) {
                        "\n" !== e.value()[n] && (o = !0);
                      } else
                        e instanceof dn &&
                          e.statics.scope === ze.INLINE_BLOT &&
                          (o = !0);
                    }
                    if ((this.scroll.insertAt(t, r, n.insert[r]), s)) {
                      const [e] = this.scroll.descendant(tn, t);
                      if (e) {
                        const t = Pe({}, Qr(e));
                        i = vn.AttributeMap.diff(t, i) || {};
                      }
                    }
                  }
                  e += s;
                } else if (
                  (r.push(n), null !== n.retain && "object" == typeof n.retain)
                ) {
                  const e = Object.keys(n.retain)[0];
                  if (null == e) return t;
                  this.scroll.updateEmbedAt(t, e, n.retain[e]);
                }
                Object.keys(i).forEach((e) => {
                  this.scroll.formatAt(t, s, e, i[e]);
                });
                const a = o ? 1 : 0,
                  c = l ? 1 : 0;
                return (e += a + c), r.retain(a), r.delete(c), t + s + a + c;
              }, 0),
              r.reduce(
                (t, e) =>
                  "number" == typeof e.delete
                    ? (this.scroll.deleteAt(t, e.delete), t)
                    : t + vn.Op.length(e),
                0
              ),
              this.scroll.batchEnd(),
              this.scroll.optimize(),
              this.update(n)
            );
          }
          deleteText(t, e) {
            return (
              this.scroll.deleteAt(t, e),
              this.update(new vn().retain(t).delete(e))
            );
          }
          formatLine(t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            this.scroll.update(),
              Object.keys(n).forEach((r) => {
                this.scroll.lines(t, Math.max(e, 1)).forEach((t) => {
                  t.format(r, n[r]);
                });
              }),
              this.scroll.optimize();
            const r = new vn().retain(t).retain(e, xr(n));
            return this.update(r);
          }
          formatText(t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            Object.keys(n).forEach((r) => {
              this.scroll.formatAt(t, e, r, n[r]);
            });
            const r = new vn().retain(t).retain(e, xr(n));
            return this.update(r);
          }
          getContents(t, e) {
            return this.delta.slice(t, t + e);
          }
          getDelta() {
            return this.scroll
              .lines()
              .reduce((t, e) => t.concat(e.delta()), new vn());
          }
          getFormat(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = [],
              r = [];
            0 === e
              ? this.scroll.path(t).forEach((t) => {
                  const [e] = t;
                  e instanceof Gr ? n.push(e) : e instanceof tn && r.push(e);
                })
              : ((n = this.scroll.lines(t, e)),
                (r = this.scroll.descendants(tn, t, e)));
            const [s, i] = [n, r].map((t) => {
              const e = t.shift();
              if (null == e) return {};
              let n = Qr(e);
              for (; Object.keys(n).length > 0; ) {
                const e = t.shift();
                if (null == e) return n;
                n = bs(Qr(e), n);
              }
              return n;
            });
            return { ...s, ...i };
          }
          getHTML(t, e) {
            const [n, r] = this.scroll.line(t);
            if (n) {
              const s = n.length();
              return !(n.length() >= r + e) || (0 === r && e === s)
                ? ms(this.scroll, t, e, !0)
                : ms(n, r, e, !0);
            }
            return "";
          }
          getText(t, e) {
            return this.getContents(t, e)
              .filter((t) => "string" == typeof t.insert)
              .map((t) => t.insert)
              .join("");
          }
          insertContents(t, e) {
            const n = ys(e),
              r = new vn().retain(t).concat(n);
            return this.scroll.insertContents(t, n), this.update(r);
          }
          insertEmbed(t, e, n) {
            return (
              this.scroll.insertAt(t, e, n),
              this.update(new vn().retain(t).insert({ [e]: n }))
            );
          }
          insertText(t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (
              (e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
              this.scroll.insertAt(t, e),
              Object.keys(n).forEach((r) => {
                this.scroll.formatAt(t, e.length, r, n[r]);
              }),
              this.update(new vn().retain(t).insert(e, xr(n)))
            );
          }
          isBlank() {
            if (0 === this.scroll.children.length) return !0;
            if (this.scroll.children.length > 1) return !1;
            const t = this.scroll.children.head;
            if (t?.statics.blotName !== Gr.blotName) return !1;
            const e = t;
            return !(e.children.length > 1) && e.children.head instanceof Hr;
          }
          removeFormat(t, e) {
            const n = this.getText(t, e),
              [r, s] = this.scroll.line(t + e);
            let i = 0,
              o = new vn();
            null != r &&
              ((i = r.length() - s),
              (o = r
                .delta()
                .slice(s, s + i - 1)
                .insert("\n")));
            const l = this.getContents(t, e + i).diff(
                new vn().insert(n).concat(o)
              ),
              a = new vn().retain(t).concat(l);
            return this.applyDelta(a);
          }
          update(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : void 0;
            const r = this.delta;
            if (
              1 === e.length &&
              "characterData" === e[0].type &&
              e[0].target.data.match(ps) &&
              this.scroll.find(e[0].target)
            ) {
              const s = this.scroll.find(e[0].target),
                i = Qr(s),
                o = s.offset(this.scroll),
                l = e[0].oldValue.replace(ts.CONTENTS, ""),
                a = new vn().insert(l),
                c = new vn().insert(s.value()),
                u = n && {
                  oldRange: xs(n.oldRange, -o),
                  newRange: xs(n.newRange, -o),
                };
              (t = new vn()
                .retain(o)
                .concat(a.diff(c, u))
                .reduce(
                  (t, e) => (e.insert ? t.insert(e.insert, i) : t.push(e)),
                  new vn()
                )),
                (this.delta = r.compose(t));
            } else
              (this.delta = this.getDelta()),
                (t && zr(r.compose(t), this.delta)) ||
                  (t = r.diff(this.delta, n));
            return t;
          }
        };
        var Es = class {
          static DEFAULTS = {};
          constructor(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (this.quill = t), (this.options = e);
          }
        };
        const ws = "\ufeff";
        var As = class extends dn {
          constructor(t, e) {
            super(t, e),
              (this.contentNode = document.createElement("span")),
              this.contentNode.setAttribute("contenteditable", "false"),
              Array.from(this.domNode.childNodes).forEach((t) => {
                this.contentNode.appendChild(t);
              }),
              (this.leftGuard = document.createTextNode(ws)),
              (this.rightGuard = document.createTextNode(ws)),
              this.domNode.appendChild(this.leftGuard),
              this.domNode.appendChild(this.contentNode),
              this.domNode.appendChild(this.rightGuard);
          }
          index(t, e) {
            return t === this.leftGuard
              ? 0
              : t === this.rightGuard
              ? 1
              : super.index(t, e);
          }
          restore(t) {
            let e,
              n = null;
            const r = t.data.split(ws).join("");
            if (t === this.leftGuard)
              if (this.prev instanceof $r) {
                const t = this.prev.length();
                this.prev.insertAt(t, r),
                  (n = {
                    startNode: this.prev.domNode,
                    startOffset: t + r.length,
                  });
              } else
                (e = document.createTextNode(r)),
                  this.parent.insertBefore(this.scroll.create(e), this),
                  (n = { startNode: e, startOffset: r.length });
            else
              t === this.rightGuard &&
                (this.next instanceof $r
                  ? (this.next.insertAt(0, r),
                    (n = {
                      startNode: this.next.domNode,
                      startOffset: r.length,
                    }))
                  : ((e = document.createTextNode(r)),
                    this.parent.insertBefore(this.scroll.create(e), this.next),
                    (n = { startNode: e, startOffset: r.length })));
            return (t.data = ws), n;
          }
          update(t, e) {
            t.forEach((t) => {
              if (
                "characterData" === t.type &&
                (t.target === this.leftGuard || t.target === this.rightGuard)
              ) {
                const n = this.restore(t.target);
                n && (e.range = n);
              }
            });
          }
        };
        var qs = class {
          isComposing = !1;
          constructor(t, e) {
            (this.scroll = t), (this.emitter = e), this.setupListeners();
          }
          setupListeners() {
            this.scroll.domNode.addEventListener("compositionstart", (t) => {
              this.isComposing || this.handleCompositionStart(t);
            }),
              this.scroll.domNode.addEventListener("compositionend", (t) => {
                this.isComposing &&
                  queueMicrotask(() => {
                    this.handleCompositionEnd(t);
                  });
              });
          }
          handleCompositionStart(t) {
            const e =
              t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
            !e ||
              e instanceof As ||
              (this.emitter.emit(cs.events.COMPOSITION_BEFORE_START, t),
              this.scroll.batchStart(),
              this.emitter.emit(cs.events.COMPOSITION_START, t),
              (this.isComposing = !0));
          }
          handleCompositionEnd(t) {
            this.emitter.emit(cs.events.COMPOSITION_BEFORE_END, t),
              this.scroll.batchEnd(),
              this.emitter.emit(cs.events.COMPOSITION_END, t),
              (this.isComposing = !1);
          }
        };
        class ks {
          static DEFAULTS = { modules: {} };
          static themes = { default: ks };
          modules = {};
          constructor(t, e) {
            (this.quill = t), (this.options = e);
          }
          init() {
            Object.keys(this.options.modules).forEach((t) => {
              null == this.modules[t] && this.addModule(t);
            });
          }
          addModule(t) {
            const e = this.quill.constructor.import(`modules/${t}`);
            return (
              (this.modules[t] = new e(
                this.quill,
                this.options.modules[t] || {}
              )),
              this.modules[t]
            );
          }
        }
        var _s = ks;
        const Ls = (t) => {
            const e = t.getBoundingClientRect(),
              n =
                ("offsetWidth" in t && Math.abs(e.width) / t.offsetWidth) || 1,
              r =
                ("offsetHeight" in t && Math.abs(e.height) / t.offsetHeight) ||
                1;
            return {
              top: e.top,
              right: e.left + t.clientWidth * n,
              bottom: e.top + t.clientHeight * r,
              left: e.left,
            };
          },
          Os = (t) => {
            const e = parseInt(t, 10);
            return Number.isNaN(e) ? 0 : e;
          },
          Ss = (t, e, n, r, s, i) =>
            t < n && e > r
              ? 0
              : t < n
              ? -(n - t + s)
              : e > r
              ? e - t > r - n
                ? t + s - n
                : e - r + i
              : 0;
        var Ts = (t, e) => {
          const n = t.ownerDocument;
          let r = e,
            s = t;
          for (; s; ) {
            const t = s === n.body,
              e = t
                ? {
                    top: 0,
                    right:
                      window.visualViewport?.width ??
                      n.documentElement.clientWidth,
                    bottom:
                      window.visualViewport?.height ??
                      n.documentElement.clientHeight,
                    left: 0,
                  }
                : Ls(s),
              o = getComputedStyle(s),
              l = Ss(
                r.left,
                r.right,
                e.left,
                e.right,
                Os(o.scrollPaddingLeft),
                Os(o.scrollPaddingRight)
              ),
              a = Ss(
                r.top,
                r.bottom,
                e.top,
                e.bottom,
                Os(o.scrollPaddingTop),
                Os(o.scrollPaddingBottom)
              );
            if (l || a)
              if (t) n.defaultView?.scrollBy(l, a);
              else {
                const { scrollLeft: t, scrollTop: e } = s;
                a && (s.scrollTop += a), l && (s.scrollLeft += l);
                const n = s.scrollLeft - t,
                  i = s.scrollTop - e;
                r = {
                  left: r.left - n,
                  top: r.top - i,
                  right: r.right - n,
                  bottom: r.bottom - i,
                };
              }
            s =
              t || "fixed" === o.position
                ? null
                : (i = s).parentElement || i.getRootNode().host || null;
          }
          var i;
        };
        const js = ["block", "break", "cursor", "inline", "scroll", "text"];
        var Cs = (t, e, n) => {
          const r = new Ve();
          return (
            js.forEach((t) => {
              const n = e.query(t);
              n && r.register(n);
            }),
            t.forEach((t) => {
              let s = e.query(t);
              s ||
                n.error(
                  `Cannot register "${t}" specified in "formats" config. Are you sure it was registered?`
                );
              let i = 0;
              for (; s; )
                if (
                  (r.register(s),
                  (s = "blotName" in s ? s.requiredContainer ?? null : null),
                  (i += 1),
                  i > 100)
                ) {
                  n.error(
                    `Cycle detected in registering blot requiredContainer: "${t}"`
                  );
                  break;
                }
            }),
            r
          );
        };
        const Rs = ls("quill"),
          Is = new Ve();
        sn.uiClass = "ql-ui";
        class Ms {
          static DEFAULTS = {
            bounds: null,
            modules: { clipboard: !0, keyboard: !0, history: !0, uploader: !0 },
            placeholder: "",
            readOnly: !1,
            registry: Is,
            theme: "default",
          };
          static events = cs.events;
          static sources = cs.sources;
          static version = "2.0.3";
          static imports = {
            delta: vn,
            parchment: t,
            "core/module": Es,
            "core/theme": _s,
          };
          static debug(t) {
            !0 === t && (t = "log"), ls.level(t);
          }
          static find(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return ns.get(t) || Is.find(t, e);
          }
          static import(t) {
            return (
              null == this.imports[t] &&
                Rs.error(`Cannot import ${t}. Are you sure it was registered?`),
              this.imports[t]
            );
          }
          static register() {
            if (
              "string" != typeof (arguments.length <= 0 ? void 0 : arguments[0])
            ) {
              const t = arguments.length <= 0 ? void 0 : arguments[0],
                e = !!(arguments.length <= 1 ? void 0 : arguments[1]),
                n = "attrName" in t ? t.attrName : t.blotName;
              "string" == typeof n
                ? this.register(`formats/${n}`, t, e)
                : Object.keys(t).forEach((n) => {
                    this.register(n, t[n], e);
                  });
            } else {
              const t = arguments.length <= 0 ? void 0 : arguments[0],
                e = arguments.length <= 1 ? void 0 : arguments[1],
                n = !!(arguments.length <= 2 ? void 0 : arguments[2]);
              null == this.imports[t] ||
                n ||
                Rs.warn(`Overwriting ${t} with`, e),
                (this.imports[t] = e),
                (t.startsWith("blots/") || t.startsWith("formats/")) &&
                  e &&
                  "boolean" != typeof e &&
                  "abstract" !== e.blotName &&
                  Is.register(e),
                "function" == typeof e.register && e.register(Is);
            }
          }
          constructor(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (
              ((this.options = (function (t, e) {
                const n = Bs(t);
                if (!n) throw new Error("Invalid Quill container");
                const r = !e.theme || e.theme === Ms.DEFAULTS.theme,
                  s = r ? _s : Ms.import(`themes/${e.theme}`);
                if (!s)
                  throw new Error(
                    `Invalid theme ${e.theme}. Did you register it?`
                  );
                const { modules: i, ...o } = Ms.DEFAULTS,
                  { modules: l, ...a } = s.DEFAULTS;
                let c = Ds(e.modules);
                null != c &&
                  c.toolbar &&
                  c.toolbar.constructor !== Object &&
                  (c = { ...c, toolbar: { container: c.toolbar } });
                const u = Pe({}, Ds(i), Ds(l), c),
                  h = { ...o, ...Us(a), ...Us(e) };
                let d = e.registry;
                d
                  ? e.formats &&
                    Rs.warn(
                      'Ignoring "formats" option because "registry" is specified'
                    )
                  : (d = e.formats
                      ? Cs(e.formats, h.registry, Rs)
                      : h.registry);
                return {
                  ...h,
                  registry: d,
                  container: n,
                  theme: s,
                  modules: Object.entries(u).reduce((t, e) => {
                    let [n, r] = e;
                    if (!r) return t;
                    const s = Ms.import(`modules/${n}`);
                    return null == s
                      ? (Rs.error(
                          `Cannot load ${n} module. Are you sure you registered it?`
                        ),
                        t)
                      : { ...t, [n]: Pe({}, s.DEFAULTS || {}, r) };
                  }, {}),
                  bounds: Bs(h.bounds),
                };
              })(t, e)),
              (this.container = this.options.container),
              null == this.container)
            )
              return void Rs.error("Invalid Quill container", t);
            this.options.debug && Ms.debug(this.options.debug);
            const n = this.container.innerHTML.trim();
            this.container.classList.add("ql-container"),
              (this.container.innerHTML = ""),
              ns.set(this.container, this),
              (this.root = this.addContainer("ql-editor")),
              this.root.classList.add("ql-blank"),
              (this.emitter = new cs());
            const r = gn.blotName,
              s = this.options.registry.query(r);
            if (!s || !("blotName" in s))
              throw new Error(`Cannot initialize Quill without "${r}" blot`);
            if (
              ((this.scroll = new s(this.options.registry, this.root, {
                emitter: this.emitter,
              })),
              (this.editor = new Ns(this.scroll)),
              (this.selection = new fs(this.scroll, this.emitter)),
              (this.composition = new qs(this.scroll, this.emitter)),
              (this.theme = new this.options.theme(this, this.options)),
              (this.keyboard = this.theme.addModule("keyboard")),
              (this.clipboard = this.theme.addModule("clipboard")),
              (this.history = this.theme.addModule("history")),
              (this.uploader = this.theme.addModule("uploader")),
              this.theme.addModule("input"),
              this.theme.addModule("uiNode"),
              this.theme.init(),
              this.emitter.on(cs.events.EDITOR_CHANGE, (t) => {
                t === cs.events.TEXT_CHANGE &&
                  this.root.classList.toggle("ql-blank", this.editor.isBlank());
              }),
              this.emitter.on(cs.events.SCROLL_UPDATE, (t, e) => {
                const n = this.selection.lastRange,
                  [r] = this.selection.getRange(),
                  s = n && r ? { oldRange: n, newRange: r } : void 0;
                Ps.call(this, () => this.editor.update(null, e, s), t);
              }),
              this.emitter.on(cs.events.SCROLL_EMBED_UPDATE, (t, e) => {
                const n = this.selection.lastRange,
                  [r] = this.selection.getRange(),
                  s = n && r ? { oldRange: n, newRange: r } : void 0;
                Ps.call(
                  this,
                  () => {
                    const n = new vn()
                      .retain(t.offset(this))
                      .retain({ [t.statics.blotName]: e });
                    return this.editor.update(n, [], s);
                  },
                  Ms.sources.USER
                );
              }),
              n)
            ) {
              const t = this.clipboard.convert({
                html: `${n}<p><br></p>`,
                text: "\n",
              });
              this.setContents(t);
            }
            this.history.clear(),
              this.options.placeholder &&
                this.root.setAttribute(
                  "data-placeholder",
                  this.options.placeholder
                ),
              this.options.readOnly && this.disable(),
              (this.allowReadOnlyEdits = !1);
          }
          addContainer(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if ("string" == typeof t) {
              const e = t;
              (t = document.createElement("div")).classList.add(e);
            }
            return this.container.insertBefore(t, e), t;
          }
          blur() {
            this.selection.setRange(null);
          }
          deleteText(t, e, n) {
            return (
              ([t, e, , n] = zs(t, e, n)),
              Ps.call(this, () => this.editor.deleteText(t, e), n, t, -1 * e)
            );
          }
          disable() {
            this.enable(!1);
          }
          editReadOnly(t) {
            this.allowReadOnlyEdits = !0;
            const e = t();
            return (this.allowReadOnlyEdits = !1), e;
          }
          enable() {
            let t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            this.scroll.enable(t),
              this.container.classList.toggle("ql-disabled", !t);
          }
          focus() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            this.selection.focus(),
              t.preventScroll || this.scrollSelectionIntoView();
          }
          format(t, e) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : cs.sources.API;
            return Ps.call(
              this,
              () => {
                const n = this.getSelection(!0);
                let r = new vn();
                if (null == n) return r;
                if (this.scroll.query(t, ze.BLOCK))
                  r = this.editor.formatLine(n.index, n.length, { [t]: e });
                else {
                  if (0 === n.length) return this.selection.format(t, e), r;
                  r = this.editor.formatText(n.index, n.length, { [t]: e });
                }
                return this.setSelection(n, cs.sources.SILENT), r;
              },
              n
            );
          }
          formatLine(t, e, n, r, s) {
            let i;
            return (
              ([t, e, i, s] = zs(t, e, n, r, s)),
              Ps.call(this, () => this.editor.formatLine(t, e, i), s, t, 0)
            );
          }
          formatText(t, e, n, r, s) {
            let i;
            return (
              ([t, e, i, s] = zs(t, e, n, r, s)),
              Ps.call(this, () => this.editor.formatText(t, e, i), s, t, 0)
            );
          }
          getBounds(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = null;
            if (
              ((n =
                "number" == typeof t
                  ? this.selection.getBounds(t, e)
                  : this.selection.getBounds(t.index, t.length)),
              !n)
            )
              return null;
            const r = this.container.getBoundingClientRect();
            return {
              bottom: n.bottom - r.top,
              height: n.height,
              left: n.left - r.left,
              right: n.right - r.left,
              top: n.top - r.top,
              width: n.width,
            };
          }
          getContents() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.getLength() - t;
            return ([t, e] = zs(t, e)), this.editor.getContents(t, e);
          }
          getFormat() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.getSelection(!0),
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            return "number" == typeof t
              ? this.editor.getFormat(t, e)
              : this.editor.getFormat(t.index, t.length);
          }
          getIndex(t) {
            return t.offset(this.scroll);
          }
          getLength() {
            return this.scroll.length();
          }
          getLeaf(t) {
            return this.scroll.leaf(t);
          }
          getLine(t) {
            return this.scroll.line(t);
          }
          getLines() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.MAX_VALUE;
            return "number" != typeof t
              ? this.scroll.lines(t.index, t.length)
              : this.scroll.lines(t, e);
          }
          getModule(t) {
            return this.theme.modules[t];
          }
          getSelection() {
            return (
              arguments.length > 0 &&
                void 0 !== arguments[0] &&
                arguments[0] &&
                this.focus(),
              this.update(),
              this.selection.getRange()[0]
            );
          }
          getSemanticHTML() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e = arguments.length > 1 ? arguments[1] : void 0;
            return (
              "number" == typeof t && (e = e ?? this.getLength() - t),
              ([t, e] = zs(t, e)),
              this.editor.getHTML(t, e)
            );
          }
          getText() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e = arguments.length > 1 ? arguments[1] : void 0;
            return (
              "number" == typeof t && (e = e ?? this.getLength() - t),
              ([t, e] = zs(t, e)),
              this.editor.getText(t, e)
            );
          }
          hasFocus() {
            return this.selection.hasFocus();
          }
          insertEmbed(t, e, n) {
            let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Ms.sources.API;
            return Ps.call(this, () => this.editor.insertEmbed(t, e, n), r, t);
          }
          insertText(t, e, n, r, s) {
            let i;
            return (
              ([t, , i, s] = zs(t, 0, n, r, s)),
              Ps.call(
                this,
                () => this.editor.insertText(t, e, i),
                s,
                t,
                e.length
              )
            );
          }
          isEnabled() {
            return this.scroll.isEnabled();
          }
          off() {
            return this.emitter.off(...arguments);
          }
          on() {
            return this.emitter.on(...arguments);
          }
          once() {
            return this.emitter.once(...arguments);
          }
          removeFormat(t, e, n) {
            return (
              ([t, e, , n] = zs(t, e, n)),
              Ps.call(this, () => this.editor.removeFormat(t, e), n, t)
            );
          }
          scrollRectIntoView(t) {
            Ts(this.root, t);
          }
          scrollIntoView() {
            this.scrollSelectionIntoView();
          }
          scrollSelectionIntoView() {
            const t = this.selection.lastRange,
              e = t && this.selection.getBounds(t.index, t.length);
            e && this.scrollRectIntoView(e);
          }
          setContents(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : cs.sources.API;
            return Ps.call(
              this,
              () => {
                t = new vn(t);
                const e = this.getLength(),
                  n = this.editor.deleteText(0, e),
                  r = this.editor.insertContents(0, t),
                  s = this.editor.deleteText(this.getLength() - 1, 1);
                return n.compose(r).compose(s);
              },
              e
            );
          }
          setSelection(t, e, n) {
            null == t
              ? this.selection.setRange(null, e || Ms.sources.API)
              : (([t, e, , n] = zs(t, e, n)),
                this.selection.setRange(new hs(Math.max(0, t), e), n),
                n !== cs.sources.SILENT && this.scrollSelectionIntoView());
          }
          setText(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : cs.sources.API;
            const n = new vn().insert(t);
            return this.setContents(n, e);
          }
          update() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : cs.sources.USER;
            const e = this.scroll.update(t);
            return this.selection.update(t), e;
          }
          updateContents(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : cs.sources.API;
            return Ps.call(
              this,
              () => ((t = new vn(t)), this.editor.applyDelta(t)),
              e,
              !0
            );
          }
        }
        function Bs(t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        }
        function Ds(t) {
          return Object.entries(t ?? {}).reduce((t, e) => {
            let [n, r] = e;
            return { ...t, [n]: !0 === r ? {} : r };
          }, {});
        }
        function Us(t) {
          return Object.fromEntries(
            Object.entries(t).filter((t) => void 0 !== t[1])
          );
        }
        function Ps(t, e, n, r) {
          if (
            !this.isEnabled() &&
            e === cs.sources.USER &&
            !this.allowReadOnlyEdits
          )
            return new vn();
          let s = null == n ? null : this.getSelection();
          const i = this.editor.delta,
            o = t();
          if (
            (null != s &&
              (!0 === n && (n = s.index),
              null == r ? (s = Fs(s, o, e)) : 0 !== r && (s = Fs(s, n, r, e)),
              this.setSelection(s, cs.sources.SILENT)),
            o.length() > 0)
          ) {
            const t = [cs.events.TEXT_CHANGE, o, i, e];
            this.emitter.emit(cs.events.EDITOR_CHANGE, ...t),
              e !== cs.sources.SILENT && this.emitter.emit(...t);
          }
          return o;
        }
        function zs(t, e, n, r, s) {
          let i = {};
          return (
            "number" == typeof t.index && "number" == typeof t.length
              ? "number" != typeof e
                ? ((s = r), (r = n), (n = e), (e = t.length), (t = t.index))
                : ((e = t.length), (t = t.index))
              : "number" != typeof e && ((s = r), (r = n), (n = e), (e = 0)),
            "object" == typeof n
              ? ((i = n), (s = r))
              : "string" == typeof n && (null != r ? (i[n] = r) : (s = n)),
            [t, e, i, (s = s || cs.sources.API)]
          );
        }
        function Fs(t, e, n, r) {
          const s = "number" == typeof n ? n : 0;
          if (null == t) return null;
          let i, o;
          return (
            e && "function" == typeof e.transformPosition
              ? ([i, o] = [t.index, t.index + t.length].map((t) =>
                  e.transformPosition(t, r !== cs.sources.USER)
                ))
              : ([i, o] = [t.index, t.index + t.length].map((t) =>
                  t < e || (t === e && r === cs.sources.USER)
                    ? t
                    : s >= 0
                    ? t + s
                    : Math.max(e, t + s)
                )),
            new hs(i, o - i)
          );
        }
        var Hs = class extends hn {};
        function $s(t) {
          return t instanceof Gr || t instanceof Xr;
        }
        function Vs(t) {
          return "function" == typeof t.updateContent;
        }
        function Ks(t, e, n) {
          n.reduce((e, n) => {
            const r = vn.Op.length(n);
            let s = n.attributes || {};
            if (null != n.insert)
              if ("string" == typeof n.insert) {
                const r = n.insert;
                t.insertAt(e, r);
                const [i] = t.descendant(tn, e),
                  o = Qr(i);
                s = vn.AttributeMap.diff(o, s) || {};
              } else if ("object" == typeof n.insert) {
                const r = Object.keys(n.insert)[0];
                if (null == r) return e;
                t.insertAt(e, r, n.insert[r]);
                if (null != t.scroll.query(r, ze.INLINE)) {
                  const [n] = t.descendant(tn, e),
                    r = Qr(n);
                  s = vn.AttributeMap.diff(r, s) || {};
                }
              }
            return (
              Object.keys(s).forEach((n) => {
                t.formatAt(e, r, n, s[n]);
              }),
              e + r
            );
          }, e);
        }
        var Ws = class extends gn {
          static blotName = "scroll";
          static className = "ql-editor";
          static tagName = "DIV";
          static defaultChild = Gr;
          static allowedChildren = [Gr, Xr, Hs];
          constructor(t, e, n) {
            let { emitter: r } = n;
            super(t, e),
              (this.emitter = r),
              (this.batch = !1),
              this.optimize(),
              this.enable(),
              this.domNode.addEventListener("dragstart", (t) =>
                this.handleDragStart(t)
              );
          }
          batchStart() {
            Array.isArray(this.batch) || (this.batch = []);
          }
          batchEnd() {
            if (!this.batch) return;
            const t = this.batch;
            (this.batch = !1), this.update(t);
          }
          emitMount(t) {
            this.emitter.emit(cs.events.SCROLL_BLOT_MOUNT, t);
          }
          emitUnmount(t) {
            this.emitter.emit(cs.events.SCROLL_BLOT_UNMOUNT, t);
          }
          emitEmbedUpdate(t, e) {
            this.emitter.emit(cs.events.SCROLL_EMBED_UPDATE, t, e);
          }
          deleteAt(t, e) {
            const [n, r] = this.line(t),
              [s] = this.line(t + e);
            if ((super.deleteAt(t, e), null != s && n !== s && r > 0)) {
              if (n instanceof Xr || s instanceof Xr)
                return void this.optimize();
              const t = s.children.head instanceof Hr ? null : s.children.head;
              n.moveChildren(s, t), n.remove();
            }
            this.optimize();
          }
          enable() {
            let t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            this.domNode.setAttribute("contenteditable", t ? "true" : "false");
          }
          formatAt(t, e, n, r) {
            super.formatAt(t, e, n, r), this.optimize();
          }
          insertAt(t, e, n) {
            if (t >= this.length())
              if (null == n || null == this.scroll.query(e, ze.BLOCK)) {
                const t = this.scroll.create(
                  this.statics.defaultChild.blotName
                );
                this.appendChild(t),
                  null == n && e.endsWith("\n")
                    ? t.insertAt(0, e.slice(0, -1), n)
                    : t.insertAt(0, e, n);
              } else {
                const t = this.scroll.create(e, n);
                this.appendChild(t);
              }
            else super.insertAt(t, e, n);
            this.optimize();
          }
          insertBefore(t, e) {
            if (t.statics.scope === ze.INLINE_BLOT) {
              const n = this.scroll.create(this.statics.defaultChild.blotName);
              n.appendChild(t), super.insertBefore(n, e);
            } else super.insertBefore(t, e);
          }
          insertContents(t, e) {
            const n = this.deltaToRenderBlocks(e.concat(new vn().insert("\n"))),
              r = n.pop();
            if (null == r) return;
            this.batchStart();
            const s = n.shift();
            if (s) {
              const e =
                  "block" === s.type &&
                  (0 === s.delta.length() ||
                    (!this.descendant(Xr, t)[0] && t < this.length())),
                n =
                  "block" === s.type
                    ? s.delta
                    : new vn().insert({ [s.key]: s.value });
              Ks(this, t, n);
              const r = "block" === s.type ? 1 : 0,
                i = t + n.length() + r;
              e && this.insertAt(i - 1, "\n");
              const o = Qr(this.line(t)[0]),
                l = vn.AttributeMap.diff(o, s.attributes) || {};
              Object.keys(l).forEach((t) => {
                this.formatAt(i - 1, 1, t, l[t]);
              }),
                (t = i);
            }
            let [i, o] = this.children.find(t);
            if (
              (n.length &&
                (i && ((i = i.split(o)), (o = 0)),
                n.forEach((t) => {
                  if ("block" === t.type) {
                    Ks(this.createBlock(t.attributes, i || void 0), 0, t.delta);
                  } else {
                    const e = this.create(t.key, t.value);
                    this.insertBefore(e, i || void 0),
                      Object.keys(t.attributes).forEach((n) => {
                        e.format(n, t.attributes[n]);
                      });
                  }
                })),
              "block" === r.type && r.delta.length())
            ) {
              Ks(this, i ? i.offset(i.scroll) + o : this.length(), r.delta);
            }
            this.batchEnd(), this.optimize();
          }
          isEnabled() {
            return "true" === this.domNode.getAttribute("contenteditable");
          }
          leaf(t) {
            const e = this.path(t).pop();
            if (!e) return [null, -1];
            const [n, r] = e;
            return n instanceof tn ? [n, r] : [null, -1];
          }
          line(t) {
            return t === this.length()
              ? this.line(t - 1)
              : this.descendant($s, t);
          }
          lines() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.MAX_VALUE;
            const n = (t, e, r) => {
              let s = [],
                i = r;
              return (
                t.children.forEachAt(e, r, (t, e, r) => {
                  $s(t)
                    ? s.push(t)
                    : t instanceof hn && (s = s.concat(n(t, e, i))),
                    (i -= r);
                }),
                s
              );
            };
            return n(this, t, e);
          }
          optimize() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            this.batch ||
              (super.optimize(t, e),
              t.length > 0 &&
                this.emitter.emit(cs.events.SCROLL_OPTIMIZE, t, e));
          }
          path(t) {
            return super.path(t).slice(1);
          }
          remove() {}
          update(t) {
            if (this.batch)
              return void (
                Array.isArray(t) && (this.batch = this.batch.concat(t))
              );
            let e = cs.sources.USER;
            "string" == typeof t && (e = t),
              Array.isArray(t) || (t = this.observer.takeRecords()),
              (t = t.filter((t) => {
                let { target: e } = t;
                const n = this.find(e, !0);
                return n && !Vs(n);
              })).length > 0 &&
                this.emitter.emit(cs.events.SCROLL_BEFORE_UPDATE, e, t),
              super.update(t.concat([])),
              t.length > 0 && this.emitter.emit(cs.events.SCROLL_UPDATE, e, t);
          }
          updateEmbedAt(t, e, n) {
            const [r] = this.descendant((t) => t instanceof Xr, t);
            r && r.statics.blotName === e && Vs(r) && r.updateContent(n);
          }
          handleDragStart(t) {
            t.preventDefault();
          }
          deltaToRenderBlocks(t) {
            const e = [];
            let n = new vn();
            return (
              t.forEach((t) => {
                const r = t?.insert;
                if (r)
                  if ("string" == typeof r) {
                    const s = r.split("\n");
                    s.slice(0, -1).forEach((r) => {
                      n.insert(r, t.attributes),
                        e.push({
                          type: "block",
                          delta: n,
                          attributes: t.attributes ?? {},
                        }),
                        (n = new vn());
                    });
                    const i = s[s.length - 1];
                    i && n.insert(i, t.attributes);
                  } else {
                    const s = Object.keys(r)[0];
                    if (!s) return;
                    this.query(s, ze.INLINE)
                      ? n.push(t)
                      : (n.length() &&
                          e.push({ type: "block", delta: n, attributes: {} }),
                        (n = new vn()),
                        e.push({
                          type: "blockEmbed",
                          key: s,
                          value: r[s],
                          attributes: t.attributes ?? {},
                        }));
                  }
              }),
              n.length() && e.push({ type: "block", delta: n, attributes: {} }),
              e
            );
          }
          createBlock(t, e) {
            let n;
            const r = {};
            Object.entries(t).forEach((t) => {
              let [e, s] = t;
              null != this.query(e, ze.BLOCK & ze.BLOT) ? (n = e) : (r[e] = s);
            });
            const s = this.create(
              n || this.statics.defaultChild.blotName,
              n ? t[n] : void 0
            );
            this.insertBefore(s, e || void 0);
            const i = s.length();
            return (
              Object.entries(r).forEach((t) => {
                let [e, n] = t;
                s.formatAt(0, i, e, n);
              }),
              s
            );
          }
        };
        const Zs = {
            scope: ze.BLOCK,
            whitelist: ["right", "center", "justify"],
          },
          Gs = new Fe("align", "align", Zs),
          Xs = new We("align", "ql-align", Zs),
          Ys = new Ge("align", "text-align", Zs);
        class Qs extends Ge {
          value(t) {
            let e = super.value(t);
            if (!e.startsWith("rgb(")) return e;
            e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
            return `#${e
              .split(",")
              .map((t) => `00${parseInt(t, 10).toString(16)}`.slice(-2))
              .join("")}`;
          }
        }
        const Js = new We("color", "ql-color", { scope: ze.INLINE }),
          ti = new Qs("color", "color", { scope: ze.INLINE }),
          ei = new We("background", "ql-bg", { scope: ze.INLINE }),
          ni = new Qs("background", "background-color", { scope: ze.INLINE });
        class ri extends Hs {
          static create(t) {
            const e = super.create(t);
            return e.setAttribute("spellcheck", "false"), e;
          }
          code(t, e) {
            return this.children
              .map((t) => (t.length() <= 1 ? "" : t.domNode.innerText))
              .join("\n")
              .slice(t, t + e);
          }
          html(t, e) {
            return `<pre>\n${Kr(this.code(t, e))}\n</pre>`;
          }
        }
        class si extends Gr {
          static TAB = "  ";
          static register() {
            Ms.register(ri);
          }
        }
        class ii extends Zr {}
        (ii.blotName = "code"),
          (ii.tagName = "CODE"),
          (si.blotName = "code-block"),
          (si.className = "ql-code-block"),
          (si.tagName = "DIV"),
          (ri.blotName = "code-block-container"),
          (ri.className = "ql-code-block-container"),
          (ri.tagName = "DIV"),
          (ri.allowedChildren = [si]),
          (si.allowedChildren = [$r, Hr, ts]),
          (si.requiredContainer = ri);
        const oi = { scope: ze.BLOCK, whitelist: ["rtl"] },
          li = new Fe("direction", "dir", oi),
          ai = new We("direction", "ql-direction", oi),
          ci = new Ge("direction", "direction", oi),
          ui = { scope: ze.INLINE, whitelist: ["serif", "monospace"] },
          hi = new We("font", "ql-font", ui);
        const di = new (class extends Ge {
            value(t) {
              return super.value(t).replace(/["']/g, "");
            }
          })("font", "font-family", ui),
          fi = new We("size", "ql-size", {
            scope: ze.INLINE,
            whitelist: ["small", "large", "huge"],
          }),
          pi = new Ge("size", "font-size", {
            scope: ze.INLINE,
            whitelist: ["10px", "18px", "32px"],
          }),
          gi = ls("quill:keyboard"),
          mi = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
        class bi extends Es {
          static match(t, e) {
            return (
              !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(
                (n) => !!e[n] !== t[n] && null !== e[n]
              ) &&
              (e.key === t.key || e.key === t.which)
            );
          }
          constructor(t, e) {
            super(t, e),
              (this.bindings = {}),
              Object.keys(this.options.bindings).forEach((t) => {
                this.options.bindings[t] &&
                  this.addBinding(this.options.bindings[t]);
              }),
              this.addBinding(
                { key: "Enter", shiftKey: null },
                this.handleEnter
              ),
              this.addBinding(
                { key: "Enter", metaKey: null, ctrlKey: null, altKey: null },
                () => {}
              ),
              /Firefox/i.test(navigator.userAgent)
                ? (this.addBinding(
                    { key: "Backspace" },
                    { collapsed: !0 },
                    this.handleBackspace
                  ),
                  this.addBinding(
                    { key: "Delete" },
                    { collapsed: !0 },
                    this.handleDelete
                  ))
                : (this.addBinding(
                    { key: "Backspace" },
                    { collapsed: !0, prefix: /^.?$/ },
                    this.handleBackspace
                  ),
                  this.addBinding(
                    { key: "Delete" },
                    { collapsed: !0, suffix: /^.?$/ },
                    this.handleDelete
                  )),
              this.addBinding(
                { key: "Backspace" },
                { collapsed: !1 },
                this.handleDeleteRange
              ),
              this.addBinding(
                { key: "Delete" },
                { collapsed: !1 },
                this.handleDeleteRange
              ),
              this.addBinding(
                {
                  key: "Backspace",
                  altKey: null,
                  ctrlKey: null,
                  metaKey: null,
                  shiftKey: null,
                },
                { collapsed: !0, offset: 0 },
                this.handleBackspace
              ),
              this.listen();
          }
          addBinding(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            const r = (function (t) {
              if ("string" == typeof t || "number" == typeof t) t = { key: t };
              else {
                if ("object" != typeof t) return null;
                t = xr(t);
              }
              t.shortKey && ((t[mi] = t.shortKey), delete t.shortKey);
              return t;
            })(t);
            if (null == r)
              return void gi.warn(
                "Attempted to add invalid keyboard binding",
                r
              );
            "function" == typeof e && (e = { handler: e }),
              "function" == typeof n && (n = { handler: n });
            (Array.isArray(r.key) ? r.key : [r.key]).forEach((t) => {
              const s = { ...r, key: t, ...e, ...n };
              (this.bindings[s.key] = this.bindings[s.key] || []),
                this.bindings[s.key].push(s);
            });
          }
          listen() {
            this.quill.root.addEventListener("keydown", (t) => {
              if (t.defaultPrevented || t.isComposing) return;
              if (
                229 === t.keyCode &&
                ("Enter" === t.key || "Backspace" === t.key)
              )
                return;
              const e = (this.bindings[t.key] || [])
                .concat(this.bindings[t.which] || [])
                .filter((e) => bi.match(t, e));
              if (0 === e.length) return;
              const n = Ms.find(t.target, !0);
              if (n && n.scroll !== this.quill.scroll) return;
              const r = this.quill.getSelection();
              if (null == r || !this.quill.hasFocus()) return;
              const [s, i] = this.quill.getLine(r.index),
                [o, l] = this.quill.getLeaf(r.index),
                [a, c] =
                  0 === r.length
                    ? [o, l]
                    : this.quill.getLeaf(r.index + r.length),
                u = o instanceof bn ? o.value().slice(0, l) : "",
                h = a instanceof bn ? a.value().slice(c) : "",
                d = {
                  collapsed: 0 === r.length,
                  empty: 0 === r.length && s.length() <= 1,
                  format: this.quill.getFormat(r),
                  line: s,
                  offset: i,
                  prefix: u,
                  suffix: h,
                  event: t,
                };
              e.some((t) => {
                if (null != t.collapsed && t.collapsed !== d.collapsed)
                  return !1;
                if (null != t.empty && t.empty !== d.empty) return !1;
                if (null != t.offset && t.offset !== d.offset) return !1;
                if (Array.isArray(t.format)) {
                  if (t.format.every((t) => null == d.format[t])) return !1;
                } else if (
                  "object" == typeof t.format &&
                  !Object.keys(t.format).every((e) =>
                    !0 === t.format[e]
                      ? null != d.format[e]
                      : !1 === t.format[e]
                      ? null == d.format[e]
                      : zr(t.format[e], d.format[e])
                  )
                )
                  return !1;
                return (
                  !(null != t.prefix && !t.prefix.test(d.prefix)) &&
                  !(null != t.suffix && !t.suffix.test(d.suffix)) &&
                  !0 !== t.handler.call(this, r, d, t)
                );
              }) && t.preventDefault();
            });
          }
          handleBackspace(t, e) {
            const n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
            if (0 === t.index || this.quill.getLength() <= 1) return;
            let r = {};
            const [s] = this.quill.getLine(t.index);
            let i = new vn().retain(t.index - n).delete(n);
            if (0 === e.offset) {
              const [e] = this.quill.getLine(t.index - 1);
              if (e) {
                if (!("block" === e.statics.blotName && e.length() <= 1)) {
                  const e = s.formats(),
                    n = this.quill.getFormat(t.index - 1, 1);
                  if (
                    ((r = vn.AttributeMap.diff(e, n) || {}),
                    Object.keys(r).length > 0)
                  ) {
                    const e = new vn()
                      .retain(t.index + s.length() - 2)
                      .retain(1, r);
                    i = i.compose(e);
                  }
                }
              }
            }
            this.quill.updateContents(i, Ms.sources.USER), this.quill.focus();
          }
          handleDelete(t, e) {
            const n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
            if (t.index >= this.quill.getLength() - n) return;
            let r = {};
            const [s] = this.quill.getLine(t.index);
            let i = new vn().retain(t.index).delete(n);
            if (e.offset >= s.length() - 1) {
              const [e] = this.quill.getLine(t.index + 1);
              if (e) {
                const n = s.formats(),
                  o = this.quill.getFormat(t.index, 1);
                (r = vn.AttributeMap.diff(n, o) || {}),
                  Object.keys(r).length > 0 &&
                    (i = i.retain(e.length() - 1).retain(1, r));
              }
            }
            this.quill.updateContents(i, Ms.sources.USER), this.quill.focus();
          }
          handleDeleteRange(t) {
            wi({ range: t, quill: this.quill }), this.quill.focus();
          }
          handleEnter(t, e) {
            const n = Object.keys(e.format).reduce(
                (t, n) => (
                  this.quill.scroll.query(n, ze.BLOCK) &&
                    !Array.isArray(e.format[n]) &&
                    (t[n] = e.format[n]),
                  t
                ),
                {}
              ),
              r = new vn().retain(t.index).delete(t.length).insert("\n", n);
            this.quill.updateContents(r, Ms.sources.USER),
              this.quill.setSelection(t.index + 1, Ms.sources.SILENT),
              this.quill.focus();
          }
        }
        const vi = {
          bindings: {
            bold: Ni("bold"),
            italic: Ni("italic"),
            underline: Ni("underline"),
            indent: {
              key: "Tab",
              format: ["blockquote", "indent", "list"],
              handler(t, e) {
                return (
                  !(!e.collapsed || 0 === e.offset) ||
                  (this.quill.format("indent", "+1", Ms.sources.USER), !1)
                );
              },
            },
            outdent: {
              key: "Tab",
              shiftKey: !0,
              format: ["blockquote", "indent", "list"],
              handler(t, e) {
                return (
                  !(!e.collapsed || 0 === e.offset) ||
                  (this.quill.format("indent", "-1", Ms.sources.USER), !1)
                );
              },
            },
            "outdent backspace": {
              key: "Backspace",
              collapsed: !0,
              shiftKey: null,
              metaKey: null,
              ctrlKey: null,
              altKey: null,
              format: ["indent", "list"],
              offset: 0,
              handler(t, e) {
                null != e.format.indent
                  ? this.quill.format("indent", "-1", Ms.sources.USER)
                  : null != e.format.list &&
                    this.quill.format("list", !1, Ms.sources.USER);
              },
            },
            "indent code-block": yi(!0),
            "outdent code-block": yi(!1),
            "remove tab": {
              key: "Tab",
              shiftKey: !0,
              collapsed: !0,
              prefix: /\t$/,
              handler(t) {
                this.quill.deleteText(t.index - 1, 1, Ms.sources.USER);
              },
            },
            tab: {
              key: "Tab",
              handler(t, e) {
                if (e.format.table) return !0;
                this.quill.history.cutoff();
                const n = new vn()
                  .retain(t.index)
                  .delete(t.length)
                  .insert("\t");
                return (
                  this.quill.updateContents(n, Ms.sources.USER),
                  this.quill.history.cutoff(),
                  this.quill.setSelection(t.index + 1, Ms.sources.SILENT),
                  !1
                );
              },
            },
            "blockquote empty enter": {
              key: "Enter",
              collapsed: !0,
              format: ["blockquote"],
              empty: !0,
              handler() {
                this.quill.format("blockquote", !1, Ms.sources.USER);
              },
            },
            "list empty enter": {
              key: "Enter",
              collapsed: !0,
              format: ["list"],
              empty: !0,
              handler(t, e) {
                const n = { list: !1 };
                e.format.indent && (n.indent = !1),
                  this.quill.formatLine(t.index, t.length, n, Ms.sources.USER);
              },
            },
            "checklist enter": {
              key: "Enter",
              collapsed: !0,
              format: { list: "checked" },
              handler(t) {
                const [e, n] = this.quill.getLine(t.index),
                  r = { ...e.formats(), list: "checked" },
                  s = new vn()
                    .retain(t.index)
                    .insert("\n", r)
                    .retain(e.length() - n - 1)
                    .retain(1, { list: "unchecked" });
                this.quill.updateContents(s, Ms.sources.USER),
                  this.quill.setSelection(t.index + 1, Ms.sources.SILENT),
                  this.quill.scrollSelectionIntoView();
              },
            },
            "header enter": {
              key: "Enter",
              collapsed: !0,
              format: ["header"],
              suffix: /^$/,
              handler(t, e) {
                const [n, r] = this.quill.getLine(t.index),
                  s = new vn()
                    .retain(t.index)
                    .insert("\n", e.format)
                    .retain(n.length() - r - 1)
                    .retain(1, { header: null });
                this.quill.updateContents(s, Ms.sources.USER),
                  this.quill.setSelection(t.index + 1, Ms.sources.SILENT),
                  this.quill.scrollSelectionIntoView();
              },
            },
            "table backspace": {
              key: "Backspace",
              format: ["table"],
              collapsed: !0,
              offset: 0,
              handler() {},
            },
            "table delete": {
              key: "Delete",
              format: ["table"],
              collapsed: !0,
              suffix: /^$/,
              handler() {},
            },
            "table enter": {
              key: "Enter",
              shiftKey: null,
              format: ["table"],
              handler(t) {
                const e = this.quill.getModule("table");
                if (e) {
                  const [n, r, s, i] = e.getTable(t),
                    o = (function (t, e, n, r) {
                      if (null == e.prev && null == e.next)
                        return null == n.prev && null == n.next
                          ? 0 === r
                            ? -1
                            : 1
                          : null == n.prev
                          ? -1
                          : 1;
                      if (null == e.prev) return -1;
                      if (null == e.next) return 1;
                      return null;
                    })(0, r, s, i);
                  if (null == o) return;
                  let l = n.offset();
                  if (o < 0) {
                    const e = new vn().retain(l).insert("\n");
                    this.quill.updateContents(e, Ms.sources.USER),
                      this.quill.setSelection(
                        t.index + 1,
                        t.length,
                        Ms.sources.SILENT
                      );
                  } else if (o > 0) {
                    l += n.length();
                    const t = new vn().retain(l).insert("\n");
                    this.quill.updateContents(t, Ms.sources.USER),
                      this.quill.setSelection(l, Ms.sources.USER);
                  }
                }
              },
            },
            "table tab": {
              key: "Tab",
              shiftKey: null,
              format: ["table"],
              handler(t, e) {
                const { event: n, line: r } = e,
                  s = r.offset(this.quill.scroll);
                n.shiftKey
                  ? this.quill.setSelection(s - 1, Ms.sources.USER)
                  : this.quill.setSelection(s + r.length(), Ms.sources.USER);
              },
            },
            "list autofill": {
              key: " ",
              shiftKey: null,
              collapsed: !0,
              format: { "code-block": !1, blockquote: !1, table: !1 },
              prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
              handler(t, e) {
                if (null == this.quill.scroll.query("list")) return !0;
                const { length: n } = e.prefix,
                  [r, s] = this.quill.getLine(t.index);
                if (s > n) return !0;
                let i;
                switch (e.prefix.trim()) {
                  case "[]":
                  case "[ ]":
                    i = "unchecked";
                    break;
                  case "[x]":
                    i = "checked";
                    break;
                  case "-":
                  case "*":
                    i = "bullet";
                    break;
                  default:
                    i = "ordered";
                }
                this.quill.insertText(t.index, " ", Ms.sources.USER),
                  this.quill.history.cutoff();
                const o = new vn()
                  .retain(t.index - s)
                  .delete(n + 1)
                  .retain(r.length() - 2 - s)
                  .retain(1, { list: i });
                return (
                  this.quill.updateContents(o, Ms.sources.USER),
                  this.quill.history.cutoff(),
                  this.quill.setSelection(t.index - n, Ms.sources.SILENT),
                  !1
                );
              },
            },
            "code exit": {
              key: "Enter",
              collapsed: !0,
              format: ["code-block"],
              prefix: /^$/,
              suffix: /^\s*$/,
              handler(t) {
                const [e, n] = this.quill.getLine(t.index);
                let r = 2,
                  s = e;
                for (
                  ;
                  null != s && s.length() <= 1 && s.formats()["code-block"];

                )
                  if (((s = s.prev), (r -= 1), r <= 0)) {
                    const r = new vn()
                      .retain(t.index + e.length() - n - 2)
                      .retain(1, { "code-block": null })
                      .delete(1);
                    return (
                      this.quill.updateContents(r, Ms.sources.USER),
                      this.quill.setSelection(t.index - 1, Ms.sources.SILENT),
                      !1
                    );
                  }
                return !0;
              },
            },
            "embed left": xi("ArrowLeft", !1),
            "embed left shift": xi("ArrowLeft", !0),
            "embed right": xi("ArrowRight", !1),
            "embed right shift": xi("ArrowRight", !0),
            "table down": Ei(!1),
            "table up": Ei(!0),
          },
        };
        function yi(t) {
          return {
            key: "Tab",
            shiftKey: !t,
            format: { "code-block": !0 },
            handler(e, n) {
              let { event: r } = n;
              const s = this.quill.scroll.query("code-block"),
                { TAB: i } = s;
              if (0 === e.length && !r.shiftKey)
                return (
                  this.quill.insertText(e.index, i, Ms.sources.USER),
                  void this.quill.setSelection(
                    e.index + i.length,
                    Ms.sources.SILENT
                  )
                );
              const o =
                0 === e.length
                  ? this.quill.getLines(e.index, 1)
                  : this.quill.getLines(e);
              let { index: l, length: a } = e;
              o.forEach((e, n) => {
                t
                  ? (e.insertAt(0, i),
                    0 === n ? (l += i.length) : (a += i.length))
                  : e.domNode.textContent.startsWith(i) &&
                    (e.deleteAt(0, i.length),
                    0 === n ? (l -= i.length) : (a -= i.length));
              }),
                this.quill.update(Ms.sources.USER),
                this.quill.setSelection(l, a, Ms.sources.SILENT);
            },
          };
        }
        function xi(t, e) {
          const n = "ArrowLeft" === t ? "prefix" : "suffix";
          return {
            key: t,
            shiftKey: e,
            altKey: null,
            [n]: /^$/,
            handler(n) {
              let { index: r } = n;
              "ArrowRight" === t && (r += n.length + 1);
              const [s] = this.quill.getLeaf(r);
              return (
                !(s instanceof dn) ||
                ("ArrowLeft" === t
                  ? e
                    ? this.quill.setSelection(
                        n.index - 1,
                        n.length + 1,
                        Ms.sources.USER
                      )
                    : this.quill.setSelection(n.index - 1, Ms.sources.USER)
                  : e
                  ? this.quill.setSelection(
                      n.index,
                      n.length + 1,
                      Ms.sources.USER
                    )
                  : this.quill.setSelection(
                      n.index + n.length + 1,
                      Ms.sources.USER
                    ),
                !1)
              );
            },
          };
        }
        function Ni(t) {
          return {
            key: t[0],
            shortKey: !0,
            handler(e, n) {
              this.quill.format(t, !n.format[t], Ms.sources.USER);
            },
          };
        }
        function Ei(t) {
          return {
            key: t ? "ArrowUp" : "ArrowDown",
            collapsed: !0,
            format: ["table"],
            handler(e, n) {
              const r = t ? "prev" : "next",
                s = n.line,
                i = s.parent[r];
              if (null != i) {
                if ("table-row" === i.statics.blotName) {
                  let t = i.children.head,
                    e = s;
                  for (; null != e.prev; ) (e = e.prev), (t = t.next);
                  const r =
                    t.offset(this.quill.scroll) +
                    Math.min(n.offset, t.length() - 1);
                  this.quill.setSelection(r, 0, Ms.sources.USER);
                }
              } else {
                const e = s.table()[r];
                null != e &&
                  (t
                    ? this.quill.setSelection(
                        e.offset(this.quill.scroll) + e.length() - 1,
                        0,
                        Ms.sources.USER
                      )
                    : this.quill.setSelection(
                        e.offset(this.quill.scroll),
                        0,
                        Ms.sources.USER
                      ));
              }
              return !1;
            },
          };
        }
        function wi(t) {
          let { quill: e, range: n } = t;
          const r = e.getLines(n);
          let s = {};
          if (r.length > 1) {
            const t = r[0].formats(),
              e = r[r.length - 1].formats();
            s = vn.AttributeMap.diff(e, t) || {};
          }
          e.deleteText(n, Ms.sources.USER),
            Object.keys(s).length > 0 &&
              e.formatLine(n.index, 1, s, Ms.sources.USER),
            e.setSelection(n.index, Ms.sources.SILENT);
        }
        bi.DEFAULTS = vi;
        const Ai = /font-weight:\s*normal/,
          qi = ["P", "OL", "UL"],
          ki = (t) => t && qi.includes(t.tagName);
        const _i = /\bmso-list:[^;]*ignore/i,
          Li = /\bmso-list:[^;]*\bl(\d+)/i,
          Oi = /\bmso-list:[^;]*\blevel(\d+)/i,
          Si = (t) => {
            const e = Array.from(t.querySelectorAll("[style*=mso-list]")),
              n = [],
              r = [];
            e.forEach((t) => {
              (t.getAttribute("style") || "").match(_i) ? n.push(t) : r.push(t);
            }),
              n.forEach((t) => t.parentNode?.removeChild(t));
            const s = t.documentElement.innerHTML,
              i = r
                .map((t) =>
                  ((t, e) => {
                    const n = t.getAttribute("style"),
                      r = n?.match(Li);
                    if (!r) return null;
                    const s = Number(r[1]),
                      i = n?.match(Oi),
                      o = i ? Number(i[1]) : 1,
                      l = new RegExp(
                        `@list l${s}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`,
                        "i"
                      ),
                      a = e.match(l);
                    return {
                      id: s,
                      indent: o,
                      type: a && "bullet" === a[1] ? "bullet" : "ordered",
                      element: t,
                    };
                  })(t, s)
                )
                .filter((t) => t);
            for (; i.length; ) {
              const t = [];
              let e = i.shift();
              for (; e; )
                t.push(e),
                  (e =
                    i.length &&
                    i[0]?.element === e.element.nextElementSibling &&
                    i[0].id === e.id
                      ? i.shift()
                      : null);
              const n = document.createElement("ul");
              t.forEach((t) => {
                const e = document.createElement("li");
                e.setAttribute("data-list", t.type),
                  t.indent > 1 &&
                    e.setAttribute("class", "ql-indent-" + (t.indent - 1)),
                  (e.innerHTML = t.element.innerHTML),
                  n.appendChild(e);
              });
              const r = t[0]?.element,
                { parentNode: s } = r ?? {};
              r && s?.replaceChild(n, r),
                t.slice(1).forEach((t) => {
                  let { element: e } = t;
                  s?.removeChild(e);
                });
            }
          };
        const Ti = [
          function (t) {
            "urn:schemas-microsoft-com:office:word" ===
              t.documentElement.getAttribute("xmlns:w") && Si(t);
          },
          function (t) {
            t.querySelector('[id^="docs-internal-guid-"]') &&
              (((t) => {
                Array.from(t.querySelectorAll('b[style*="font-weight"]'))
                  .filter((t) => t.getAttribute("style")?.match(Ai))
                  .forEach((e) => {
                    const n = t.createDocumentFragment();
                    n.append(...e.childNodes), e.parentNode?.replaceChild(n, e);
                  });
              })(t),
              ((t) => {
                Array.from(t.querySelectorAll("br"))
                  .filter(
                    (t) =>
                      ki(t.previousElementSibling) && ki(t.nextElementSibling)
                  )
                  .forEach((t) => {
                    t.parentNode?.removeChild(t);
                  });
              })(t));
          },
        ];
        var ji = (t) => {
          t.documentElement &&
            Ti.forEach((e) => {
              e(t);
            });
        };
        const Ci = ls("quill:clipboard"),
          Ri = [
            [
              Node.TEXT_NODE,
              function (t, e, n) {
                let r = t.data;
                if ("O:P" === t.parentElement?.tagName)
                  return e.insert(r.trim());
                if (!zi(t)) {
                  if (
                    0 === r.trim().length &&
                    r.includes("\n") &&
                    !(function (t, e) {
                      return (
                        t.previousElementSibling &&
                        t.nextElementSibling &&
                        !Ui(t.previousElementSibling, e) &&
                        !Ui(t.nextElementSibling, e)
                      );
                    })(t, n)
                  )
                    return e;
                  (r = r.replace(/[^\S\u00a0]/g, " ")),
                    (r = r.replace(/ {2,}/g, " ")),
                    ((null == t.previousSibling &&
                      null != t.parentElement &&
                      Ui(t.parentElement, n)) ||
                      (t.previousSibling instanceof Element &&
                        Ui(t.previousSibling, n))) &&
                      (r = r.replace(/^ /, "")),
                    ((null == t.nextSibling &&
                      null != t.parentElement &&
                      Ui(t.parentElement, n)) ||
                      (t.nextSibling instanceof Element &&
                        Ui(t.nextSibling, n))) &&
                      (r = r.replace(/ $/, "")),
                    (r = r.replaceAll(" ", " "));
                }
                return e.insert(r);
              },
            ],
            [Node.TEXT_NODE, $i],
            [
              "br",
              function (t, e) {
                Di(e, "\n") || e.insert("\n");
                return e;
              },
            ],
            [Node.ELEMENT_NODE, $i],
            [
              Node.ELEMENT_NODE,
              function (t, e, n) {
                const r = n.query(t);
                if (null == r) return e;
                if (r.prototype instanceof dn) {
                  const e = {},
                    s = r.value(t);
                  if (null != s)
                    return (
                      (e[r.blotName] = s), new vn().insert(e, r.formats(t, n))
                    );
                } else if (
                  (r.prototype instanceof cn && !Di(e, "\n") && e.insert("\n"),
                  "blotName" in r &&
                    "formats" in r &&
                    "function" == typeof r.formats)
                )
                  return Bi(e, r.blotName, r.formats(t, n), n);
                return e;
              },
            ],
            [
              Node.ELEMENT_NODE,
              function (t, e, n) {
                const r = Fe.keys(t),
                  s = We.keys(t),
                  i = Ge.keys(t),
                  o = {};
                return (
                  r
                    .concat(s)
                    .concat(i)
                    .forEach((e) => {
                      let r = n.query(e, ze.ATTRIBUTE);
                      (null != r &&
                        ((o[r.attrName] = r.value(t)), o[r.attrName])) ||
                        ((r = Ii[e]),
                        null == r ||
                          (r.attrName !== e && r.keyName !== e) ||
                          (o[r.attrName] = r.value(t) || void 0),
                        (r = Mi[e]),
                        null == r ||
                          (r.attrName !== e && r.keyName !== e) ||
                          ((r = Mi[e]),
                          (o[r.attrName] = r.value(t) || void 0)));
                    }),
                  Object.entries(o).reduce((t, e) => {
                    let [r, s] = e;
                    return Bi(t, r, s, n);
                  }, e)
                );
              },
            ],
            [
              Node.ELEMENT_NODE,
              function (t, e, n) {
                const r = {},
                  s = t.style || {};
                "italic" === s.fontStyle && (r.italic = !0);
                "underline" === s.textDecoration && (r.underline = !0);
                "line-through" === s.textDecoration && (r.strike = !0);
                (s.fontWeight?.startsWith("bold") ||
                  parseInt(s.fontWeight, 10) >= 700) &&
                  (r.bold = !0);
                if (
                  ((e = Object.entries(r).reduce((t, e) => {
                    let [r, s] = e;
                    return Bi(t, r, s, n);
                  }, e)),
                  parseFloat(s.textIndent || 0) > 0)
                )
                  return new vn().insert("\t").concat(e);
                return e;
              },
            ],
            [
              "li",
              function (t, e, n) {
                const r = n.query(t);
                if (null == r || "list" !== r.blotName || !Di(e, "\n"))
                  return e;
                let s = -1,
                  i = t.parentNode;
                for (; null != i; )
                  ["OL", "UL"].includes(i.tagName) && (s += 1),
                    (i = i.parentNode);
                return s <= 0
                  ? e
                  : e.reduce(
                      (t, e) =>
                        e.insert
                          ? e.attributes &&
                            "number" == typeof e.attributes.indent
                            ? t.push(e)
                            : t.insert(e.insert, {
                                indent: s,
                                ...(e.attributes || {}),
                              })
                          : t,
                      new vn()
                    );
              },
            ],
            [
              "ol, ul",
              function (t, e, n) {
                const r = t;
                let s = "OL" === r.tagName ? "ordered" : "bullet";
                const i = r.getAttribute("data-checked");
                i && (s = "true" === i ? "checked" : "unchecked");
                return Bi(e, "list", s, n);
              },
            ],
            [
              "pre",
              function (t, e, n) {
                const r = n.query("code-block"),
                  s =
                    !r ||
                    !("formats" in r) ||
                    "function" != typeof r.formats ||
                    r.formats(t, n);
                return Bi(e, "code-block", s, n);
              },
            ],
            [
              "tr",
              function (t, e, n) {
                const r =
                  "TABLE" === t.parentElement?.tagName
                    ? t.parentElement
                    : t.parentElement?.parentElement;
                if (null != r) {
                  return Bi(
                    e,
                    "table",
                    Array.from(r.querySelectorAll("tr")).indexOf(t) + 1,
                    n
                  );
                }
                return e;
              },
            ],
            ["b", Hi("bold")],
            ["i", Hi("italic")],
            ["strike", Hi("strike")],
            [
              "style",
              function () {
                return new vn();
              },
            ],
          ],
          Ii = [Gs, li].reduce((t, e) => ((t[e.keyName] = e), t), {}),
          Mi = [Ys, ni, ti, ci, di, pi].reduce(
            (t, e) => ((t[e.keyName] = e), t),
            {}
          );
        function Bi(t, e, n, r) {
          return r.query(e)
            ? t.reduce((t, r) => {
                if (!r.insert) return t;
                if (r.attributes && r.attributes[e]) return t.push(r);
                const s = n ? { [e]: n } : {};
                return t.insert(r.insert, { ...s, ...r.attributes });
              }, new vn())
            : t;
        }
        function Di(t, e) {
          let n = "";
          for (let r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
            const e = t.ops[r];
            if ("string" != typeof e.insert) break;
            n = e.insert + n;
          }
          return n.slice(-1 * e.length) === e;
        }
        function Ui(t, e) {
          if (!(t instanceof Element)) return !1;
          const n = e.query(t);
          return (
            !(n && n.prototype instanceof dn) &&
            [
              "address",
              "article",
              "blockquote",
              "canvas",
              "dd",
              "div",
              "dl",
              "dt",
              "fieldset",
              "figcaption",
              "figure",
              "footer",
              "form",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "header",
              "iframe",
              "li",
              "main",
              "nav",
              "ol",
              "output",
              "p",
              "pre",
              "section",
              "table",
              "td",
              "tr",
              "ul",
              "video",
            ].includes(t.tagName.toLowerCase())
          );
        }
        const Pi = new WeakMap();
        function zi(t) {
          return (
            null != t &&
            (Pi.has(t) ||
              ("PRE" === t.tagName
                ? Pi.set(t, !0)
                : Pi.set(t, zi(t.parentNode))),
            Pi.get(t))
          );
        }
        function Fi(t, e, n, r, s) {
          return e.nodeType === e.TEXT_NODE
            ? r.reduce((n, r) => r(e, n, t), new vn())
            : e.nodeType === e.ELEMENT_NODE
            ? Array.from(e.childNodes || []).reduce((i, o) => {
                let l = Fi(t, o, n, r, s);
                return (
                  o.nodeType === e.ELEMENT_NODE &&
                    ((l = n.reduce((e, n) => n(o, e, t), l)),
                    (l = (s.get(o) || []).reduce((e, n) => n(o, e, t), l))),
                  i.concat(l)
                );
              }, new vn())
            : new vn();
        }
        function Hi(t) {
          return (e, n, r) => Bi(n, t, !0, r);
        }
        function $i(t, e, n) {
          if (!Di(e, "\n")) {
            if (
              Ui(t, n) &&
              (t.childNodes.length > 0 || t instanceof HTMLParagraphElement)
            )
              return e.insert("\n");
            if (e.length() > 0 && t.nextSibling) {
              let r = t.nextSibling;
              for (; null != r; ) {
                if (Ui(r, n)) return e.insert("\n");
                const t = n.query(r);
                if (t && t.prototype instanceof Xr) return e.insert("\n");
                r = r.firstChild;
              }
            }
          }
          return e;
        }
        function Vi(t, e) {
          let n = e;
          for (let e = t.length - 1; e >= 0; e -= 1) {
            const r = t[e];
            (t[e] = {
              delta: n.transform(r.delta, !0),
              range: r.range && Ki(r.range, n),
            }),
              (n = r.delta.transform(n)),
              0 === t[e].delta.length() && t.splice(e, 1);
          }
        }
        function Ki(t, e) {
          if (!t) return t;
          const n = e.transformPosition(t.index);
          return {
            index: n,
            length: e.transformPosition(t.index + t.length) - n,
          };
        }
        class Wi extends Es {
          constructor(t, e) {
            super(t, e),
              t.root.addEventListener("drop", (e) => {
                e.preventDefault();
                let n = null;
                if (document.caretRangeFromPoint)
                  n = document.caretRangeFromPoint(e.clientX, e.clientY);
                else if (document.caretPositionFromPoint) {
                  const t = document.caretPositionFromPoint(
                    e.clientX,
                    e.clientY
                  );
                  (n = document.createRange()),
                    n.setStart(t.offsetNode, t.offset),
                    n.setEnd(t.offsetNode, t.offset);
                }
                const r = n && t.selection.normalizeNative(n);
                if (r) {
                  const n = t.selection.normalizedToRange(r);
                  e.dataTransfer?.files && this.upload(n, e.dataTransfer.files);
                }
              });
          }
          upload(t, e) {
            const n = [];
            Array.from(e).forEach((t) => {
              t && this.options.mimetypes?.includes(t.type) && n.push(t);
            }),
              n.length > 0 && this.options.handler.call(this, t, n);
          }
        }
        Wi.DEFAULTS = {
          mimetypes: ["image/png", "image/jpeg"],
          handler(t, e) {
            if (!this.quill.scroll.query("image")) return;
            const n = e.map(
              (t) =>
                new Promise((e) => {
                  const n = new FileReader();
                  (n.onload = () => {
                    e(n.result);
                  }),
                    n.readAsDataURL(t);
                })
            );
            Promise.all(n).then((e) => {
              const n = e.reduce(
                (t, e) => t.insert({ image: e }),
                new vn().retain(t.index).delete(t.length)
              );
              this.quill.updateContents(n, cs.sources.USER),
                this.quill.setSelection(t.index + e.length, cs.sources.SILENT);
            });
          },
        };
        var Zi = Wi;
        const Gi = ["insertText", "insertReplacementText"];
        var Xi = class extends Es {
          constructor(t, e) {
            super(t, e),
              t.root.addEventListener("beforeinput", (t) => {
                this.handleBeforeInput(t);
              }),
              /Android/i.test(navigator.userAgent) ||
                t.on(Ms.events.COMPOSITION_BEFORE_START, () => {
                  this.handleCompositionStart();
                });
          }
          deleteRange(t) {
            wi({ range: t, quill: this.quill });
          }
          replaceText(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
            if (0 === t.length) return !1;
            if (e) {
              const n = this.quill.getFormat(t.index, 1);
              this.deleteRange(t),
                this.quill.updateContents(
                  new vn().retain(t.index).insert(e, n),
                  Ms.sources.USER
                );
            } else this.deleteRange(t);
            return (
              this.quill.setSelection(t.index + e.length, 0, Ms.sources.SILENT),
              !0
            );
          }
          handleBeforeInput(t) {
            if (
              this.quill.composition.isComposing ||
              t.defaultPrevented ||
              !Gi.includes(t.inputType)
            )
              return;
            const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
            if (!e || !0 === e.collapsed) return;
            const n = (function (t) {
              if ("string" == typeof t.data) return t.data;
              if (t.dataTransfer?.types.includes("text/plain"))
                return t.dataTransfer.getData("text/plain");
              return null;
            })(t);
            if (null == n) return;
            const r = this.quill.selection.normalizeNative(e),
              s = r ? this.quill.selection.normalizedToRange(r) : null;
            s && this.replaceText(s, n) && t.preventDefault();
          }
          handleCompositionStart() {
            const t = this.quill.getSelection();
            t && this.replaceText(t);
          }
        };
        const Yi = /Mac/i.test(navigator.platform);
        var Qi = class extends Es {
          isListening = !1;
          selectionChangeDeadline = 0;
          constructor(t, e) {
            super(t, e),
              this.handleArrowKeys(),
              this.handleNavigationShortcuts();
          }
          handleArrowKeys() {
            this.quill.keyboard.addBinding({
              key: ["ArrowLeft", "ArrowRight"],
              offset: 0,
              shiftKey: null,
              handler(t, e) {
                let { line: n, event: r } = e;
                if (!(n instanceof sn && n.uiNode)) return !0;
                const s = "rtl" === getComputedStyle(n.domNode).direction;
                return (
                  !!(
                    (s && "ArrowRight" !== r.key) ||
                    (!s && "ArrowLeft" !== r.key)
                  ) ||
                  (this.quill.setSelection(
                    t.index - 1,
                    t.length + (r.shiftKey ? 1 : 0),
                    Ms.sources.USER
                  ),
                  !1)
                );
              },
            });
          }
          handleNavigationShortcuts() {
            this.quill.root.addEventListener("keydown", (t) => {
              !t.defaultPrevented &&
                ((t) =>
                  "ArrowLeft" === t.key ||
                  "ArrowRight" === t.key ||
                  "ArrowUp" === t.key ||
                  "ArrowDown" === t.key ||
                  "Home" === t.key ||
                  !(!Yi || "a" !== t.key || !0 !== t.ctrlKey))(t) &&
                this.ensureListeningToSelectionChange();
            });
          }
          ensureListeningToSelectionChange() {
            if (
              ((this.selectionChangeDeadline = Date.now() + 100),
              this.isListening)
            )
              return;
            this.isListening = !0;
            document.addEventListener(
              "selectionchange",
              () => {
                (this.isListening = !1),
                  Date.now() <= this.selectionChangeDeadline &&
                    this.handleSelectionChange();
              },
              { once: !0 }
            );
          }
          handleSelectionChange() {
            const t = document.getSelection();
            if (!t) return;
            const e = t.getRangeAt(0);
            if (!0 !== e.collapsed || 0 !== e.startOffset) return;
            const n = this.quill.scroll.find(e.startContainer);
            if (!(n instanceof sn && n.uiNode)) return;
            const r = document.createRange();
            r.setStartAfter(n.uiNode),
              r.setEndAfter(n.uiNode),
              t.removeAllRanges(),
              t.addRange(r);
          }
        };
        Ms.register({
          "blots/block": Gr,
          "blots/block/embed": Xr,
          "blots/break": Hr,
          "blots/container": Hs,
          "blots/cursor": ts,
          "blots/embed": As,
          "blots/inline": Zr,
          "blots/scroll": Ws,
          "blots/text": $r,
          "modules/clipboard": class extends Es {
            static DEFAULTS = { matchers: [] };
            constructor(t, e) {
              super(t, e),
                this.quill.root.addEventListener("copy", (t) =>
                  this.onCaptureCopy(t, !1)
                ),
                this.quill.root.addEventListener("cut", (t) =>
                  this.onCaptureCopy(t, !0)
                ),
                this.quill.root.addEventListener(
                  "paste",
                  this.onCapturePaste.bind(this)
                ),
                (this.matchers = []),
                Ri.concat(this.options.matchers ?? []).forEach((t) => {
                  let [e, n] = t;
                  this.addMatcher(e, n);
                });
            }
            addMatcher(t, e) {
              this.matchers.push([t, e]);
            }
            convert(t) {
              let { html: e, text: n } = t,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (r[si.blotName])
                return new vn().insert(n || "", {
                  [si.blotName]: r[si.blotName],
                });
              if (!e) return new vn().insert(n || "", r);
              const s = this.convertHTML(e);
              return Di(s, "\n") &&
                (null == s.ops[s.ops.length - 1].attributes || r.table)
                ? s.compose(new vn().retain(s.length() - 1).delete(1))
                : s;
            }
            normalizeHTML(t) {
              ji(t);
            }
            convertHTML(t) {
              const e = new DOMParser().parseFromString(t, "text/html");
              this.normalizeHTML(e);
              const n = e.body,
                r = new WeakMap(),
                [s, i] = this.prepareMatching(n, r);
              return Fi(this.quill.scroll, n, s, i, r);
            }
            dangerouslyPasteHTML(t, e) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Ms.sources.API;
              if ("string" == typeof t) {
                const n = this.convert({ html: t, text: "" });
                this.quill.setContents(n, e),
                  this.quill.setSelection(0, Ms.sources.SILENT);
              } else {
                const r = this.convert({ html: e, text: "" });
                this.quill.updateContents(new vn().retain(t).concat(r), n),
                  this.quill.setSelection(t + r.length(), Ms.sources.SILENT);
              }
            }
            onCaptureCopy(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (t.defaultPrevented) return;
              t.preventDefault();
              const [n] = this.quill.selection.getRange();
              if (null == n) return;
              const { html: r, text: s } = this.onCopy(n, e);
              t.clipboardData?.setData("text/plain", s),
                t.clipboardData?.setData("text/html", r),
                e && wi({ range: n, quill: this.quill });
            }
            normalizeURIList(t) {
              return t
                .split(/\r?\n/)
                .filter((t) => "#" !== t[0])
                .join("\n");
            }
            onCapturePaste(t) {
              if (t.defaultPrevented || !this.quill.isEnabled()) return;
              t.preventDefault();
              const e = this.quill.getSelection(!0);
              if (null == e) return;
              const n = t.clipboardData?.getData("text/html");
              let r = t.clipboardData?.getData("text/plain");
              if (!n && !r) {
                const e = t.clipboardData?.getData("text/uri-list");
                e && (r = this.normalizeURIList(e));
              }
              const s = Array.from(t.clipboardData?.files || []);
              if (!n && s.length > 0) this.quill.uploader.upload(e, s);
              else {
                if (n && s.length > 0) {
                  const t = new DOMParser().parseFromString(n, "text/html");
                  if (
                    1 === t.body.childElementCount &&
                    "IMG" === t.body.firstElementChild?.tagName
                  )
                    return void this.quill.uploader.upload(e, s);
                }
                this.onPaste(e, { html: n, text: r });
              }
            }
            onCopy(t) {
              const e = this.quill.getText(t);
              return { html: this.quill.getSemanticHTML(t), text: e };
            }
            onPaste(t, e) {
              let { text: n, html: r } = e;
              const s = this.quill.getFormat(t.index),
                i = this.convert({ text: n, html: r }, s);
              Ci.log("onPaste", i, { text: n, html: r });
              const o = new vn().retain(t.index).delete(t.length).concat(i);
              this.quill.updateContents(o, Ms.sources.USER),
                this.quill.setSelection(
                  o.length() - t.length,
                  Ms.sources.SILENT
                ),
                this.quill.scrollSelectionIntoView();
            }
            prepareMatching(t, e) {
              const n = [],
                r = [];
              return (
                this.matchers.forEach((s) => {
                  const [i, o] = s;
                  switch (i) {
                    case Node.TEXT_NODE:
                      r.push(o);
                      break;
                    case Node.ELEMENT_NODE:
                      n.push(o);
                      break;
                    default:
                      Array.from(t.querySelectorAll(i)).forEach((t) => {
                        if (e.has(t)) {
                          const n = e.get(t);
                          n?.push(o);
                        } else e.set(t, [o]);
                      });
                  }
                }),
                [n, r]
              );
            }
          },
          "modules/history": class extends Es {
            static DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 };
            lastRecorded = 0;
            ignoreChange = !1;
            stack = { undo: [], redo: [] };
            currentRange = null;
            constructor(t, e) {
              super(t, e),
                this.quill.on(Ms.events.EDITOR_CHANGE, (t, e, n, r) => {
                  t === Ms.events.SELECTION_CHANGE
                    ? e && r !== Ms.sources.SILENT && (this.currentRange = e)
                    : t === Ms.events.TEXT_CHANGE &&
                      (this.ignoreChange ||
                        (this.options.userOnly && r !== Ms.sources.USER
                          ? this.transform(e)
                          : this.record(e, n)),
                      (this.currentRange = Ki(this.currentRange, e)));
                }),
                this.quill.keyboard.addBinding(
                  { key: "z", shortKey: !0 },
                  this.undo.bind(this)
                ),
                this.quill.keyboard.addBinding(
                  { key: ["z", "Z"], shortKey: !0, shiftKey: !0 },
                  this.redo.bind(this)
                ),
                /Win/i.test(navigator.platform) &&
                  this.quill.keyboard.addBinding(
                    { key: "y", shortKey: !0 },
                    this.redo.bind(this)
                  ),
                this.quill.root.addEventListener("beforeinput", (t) => {
                  "historyUndo" === t.inputType
                    ? (this.undo(), t.preventDefault())
                    : "historyRedo" === t.inputType &&
                      (this.redo(), t.preventDefault());
                });
            }
            change(t, e) {
              if (0 === this.stack[t].length) return;
              const n = this.stack[t].pop();
              if (!n) return;
              const r = this.quill.getContents(),
                s = n.delta.invert(r);
              this.stack[e].push({ delta: s, range: Ki(n.range, s) }),
                (this.lastRecorded = 0),
                (this.ignoreChange = !0),
                this.quill.updateContents(n.delta, Ms.sources.USER),
                (this.ignoreChange = !1),
                this.restoreSelection(n);
            }
            clear() {
              this.stack = { undo: [], redo: [] };
            }
            cutoff() {
              this.lastRecorded = 0;
            }
            record(t, e) {
              if (0 === t.ops.length) return;
              this.stack.redo = [];
              let n = t.invert(e),
                r = this.currentRange;
              const s = Date.now();
              if (
                this.lastRecorded + this.options.delay > s &&
                this.stack.undo.length > 0
              ) {
                const t = this.stack.undo.pop();
                t && ((n = n.compose(t.delta)), (r = t.range));
              } else this.lastRecorded = s;
              0 !== n.length() &&
                (this.stack.undo.push({ delta: n, range: r }),
                this.stack.undo.length > this.options.maxStack &&
                  this.stack.undo.shift());
            }
            redo() {
              this.change("redo", "undo");
            }
            transform(t) {
              Vi(this.stack.undo, t), Vi(this.stack.redo, t);
            }
            undo() {
              this.change("undo", "redo");
            }
            restoreSelection(t) {
              if (t.range) this.quill.setSelection(t.range, Ms.sources.USER);
              else {
                const e = (function (t, e) {
                  const n = e.reduce((t, e) => t + (e.delete || 0), 0);
                  let r = e.length() - n;
                  (function (t, e) {
                    const n = e.ops[e.ops.length - 1];
                    if (null == n) return !1;
                    if (null != n.insert)
                      return (
                        "string" == typeof n.insert && n.insert.endsWith("\n")
                      );
                    if (null != n.attributes)
                      return Object.keys(n.attributes).some(
                        (e) => null != t.query(e, ze.BLOCK)
                      );
                    return !1;
                  })(t, e) && (r -= 1);
                  return r;
                })(this.quill.scroll, t.delta);
                this.quill.setSelection(e, Ms.sources.USER);
              }
            }
          },
          "modules/keyboard": bi,
          "modules/uploader": Zi,
          "modules/input": Xi,
          "modules/uiNode": Qi,
        });
        var Ji = Ms;
        const to = new (class extends We {
          add(t, e) {
            let n = 0;
            if ("+1" === e || "-1" === e) {
              const r = this.value(t) || 0;
              n = "+1" === e ? r + 1 : r - 1;
            } else "number" == typeof e && (n = e);
            return 0 === n ? (this.remove(t), !0) : super.add(t, n.toString());
          }
          canAdd(t, e) {
            return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10));
          }
          value(t) {
            return parseInt(super.value(t), 10) || void 0;
          }
        })("indent", "ql-indent", {
          scope: ze.BLOCK,
          whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
        });
        var eo = to;
        var no = class extends Gr {
          static blotName = "blockquote";
          static tagName = "blockquote";
        };
        var ro = class extends Gr {
          static blotName = "header";
          static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
          static formats(t) {
            return this.tagName.indexOf(t.tagName) + 1;
          }
        };
        class so extends Hs {}
        (so.blotName = "list-container"), (so.tagName = "OL");
        class io extends Gr {
          static create(t) {
            const e = super.create();
            return e.setAttribute("data-list", t), e;
          }
          static formats(t) {
            return t.getAttribute("data-list") || void 0;
          }
          static register() {
            Ms.register(so);
          }
          constructor(t, e) {
            super(t, e);
            const n = e.ownerDocument.createElement("span"),
              r = (n) => {
                if (!t.isEnabled()) return;
                const r = this.statics.formats(e, t);
                "checked" === r
                  ? (this.format("list", "unchecked"), n.preventDefault())
                  : "unchecked" === r &&
                    (this.format("list", "checked"), n.preventDefault());
              };
            n.addEventListener("mousedown", r),
              n.addEventListener("touchstart", r),
              this.attachUI(n);
          }
          format(t, e) {
            t === this.statics.blotName && e
              ? this.domNode.setAttribute("data-list", e)
              : super.format(t, e);
          }
        }
        (io.blotName = "list"),
          (io.tagName = "LI"),
          (so.allowedChildren = [io]),
          (io.requiredContainer = so);
        var oo = class extends Zr {
          static blotName = "bold";
          static tagName = ["STRONG", "B"];
          static create() {
            return super.create();
          }
          static formats() {
            return !0;
          }
          optimize(t) {
            super.optimize(t),
              this.domNode.tagName !== this.statics.tagName[0] &&
                this.replaceWith(this.statics.blotName);
          }
        };
        var lo = class extends oo {
          static blotName = "italic";
          static tagName = ["EM", "I"];
        };
        class ao extends Zr {
          static blotName = "link";
          static tagName = "A";
          static SANITIZED_URL = "about:blank";
          static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
          static create(t) {
            const e = super.create(t);
            return (
              e.setAttribute("href", this.sanitize(t)),
              e.setAttribute("rel", "noopener noreferrer"),
              e.setAttribute("target", "_blank"),
              e
            );
          }
          static formats(t) {
            return t.getAttribute("href");
          }
          static sanitize(t) {
            return co(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
          }
          format(t, e) {
            t === this.statics.blotName && e
              ? this.domNode.setAttribute("href", this.constructor.sanitize(e))
              : super.format(t, e);
          }
        }
        function co(t, e) {
          const n = document.createElement("a");
          n.href = t;
          const r = n.href.slice(0, n.href.indexOf(":"));
          return e.indexOf(r) > -1;
        }
        var uo = class extends Zr {
          static blotName = "script";
          static tagName = ["SUB", "SUP"];
          static create(t) {
            return "super" === t
              ? document.createElement("sup")
              : "sub" === t
              ? document.createElement("sub")
              : super.create(t);
          }
          static formats(t) {
            return "SUB" === t.tagName
              ? "sub"
              : "SUP" === t.tagName
              ? "super"
              : void 0;
          }
        };
        var ho = class extends oo {
          static blotName = "strike";
          static tagName = ["S", "STRIKE"];
        };
        var fo = class extends Zr {
          static blotName = "underline";
          static tagName = "U";
        };
        var po = class extends As {
          static blotName = "formula";
          static className = "ql-formula";
          static tagName = "SPAN";
          static create(t) {
            if (null == window.katex)
              throw new Error("Formula module requires KaTeX.");
            const e = super.create(t);
            return (
              "string" == typeof t &&
                (window.katex.render(t, e, {
                  throwOnError: !1,
                  errorColor: "#f00",
                }),
                e.setAttribute("data-value", t)),
              e
            );
          }
          static value(t) {
            return t.getAttribute("data-value");
          }
          html() {
            const { formula: t } = this.value();
            return `<span>${t}</span>`;
          }
        };
        const go = ["alt", "height", "width"];
        var mo = class extends dn {
          static blotName = "image";
          static tagName = "IMG";
          static create(t) {
            const e = super.create(t);
            return (
              "string" == typeof t && e.setAttribute("src", this.sanitize(t)), e
            );
          }
          static formats(t) {
            return go.reduce(
              (e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e),
              {}
            );
          }
          static match(t) {
            return (
              /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
            );
          }
          static sanitize(t) {
            return co(t, ["http", "https", "data"]) ? t : "//:0";
          }
          static value(t) {
            return t.getAttribute("src");
          }
          format(t, e) {
            go.indexOf(t) > -1
              ? e
                ? this.domNode.setAttribute(t, e)
                : this.domNode.removeAttribute(t)
              : super.format(t, e);
          }
        };
        const bo = ["height", "width"];
        var vo = class extends Xr {
          static blotName = "video";
          static className = "ql-video";
          static tagName = "IFRAME";
          static create(t) {
            const e = super.create(t);
            return (
              e.setAttribute("frameborder", "0"),
              e.setAttribute("allowfullscreen", "true"),
              e.setAttribute("src", this.sanitize(t)),
              e
            );
          }
          static formats(t) {
            return bo.reduce(
              (e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e),
              {}
            );
          }
          static sanitize(t) {
            return ao.sanitize(t);
          }
          static value(t) {
            return t.getAttribute("src");
          }
          format(t, e) {
            bo.indexOf(t) > -1
              ? e
                ? this.domNode.setAttribute(t, e)
                : this.domNode.removeAttribute(t)
              : super.format(t, e);
          }
          html() {
            const { video: t } = this.value();
            return `<a href="${t}">${t}</a>`;
          }
        };
        const yo = new We("code-token", "hljs", { scope: ze.INLINE });
        class xo extends Zr {
          static formats(t, e) {
            for (; null != t && t !== e.domNode; ) {
              if (t.classList && t.classList.contains(si.className))
                return super.formats(t, e);
              t = t.parentNode;
            }
          }
          constructor(t, e, n) {
            super(t, e, n), yo.add(this.domNode, n);
          }
          format(t, e) {
            t !== xo.blotName
              ? super.format(t, e)
              : e
              ? yo.add(this.domNode, e)
              : (yo.remove(this.domNode),
                this.domNode.classList.remove(this.statics.className));
          }
          optimize() {
            super.optimize(...arguments),
              yo.value(this.domNode) || this.unwrap();
          }
        }
        (xo.blotName = "code-token"), (xo.className = "ql-token");
        class No extends si {
          static create(t) {
            const e = super.create(t);
            return (
              "string" == typeof t && e.setAttribute("data-language", t), e
            );
          }
          static formats(t) {
            return t.getAttribute("data-language") || "plain";
          }
          static register() {}
          format(t, e) {
            t === this.statics.blotName && e
              ? this.domNode.setAttribute("data-language", e)
              : super.format(t, e);
          }
          replaceWith(t, e) {
            return (
              this.formatAt(0, this.length(), xo.blotName, !1),
              super.replaceWith(t, e)
            );
          }
        }
        class Eo extends ri {
          attach() {
            super.attach(), (this.forceNext = !1), this.scroll.emitMount(this);
          }
          format(t, e) {
            t === No.blotName &&
              ((this.forceNext = !0),
              this.children.forEach((n) => {
                n.format(t, e);
              }));
          }
          formatAt(t, e, n, r) {
            n === No.blotName && (this.forceNext = !0),
              super.formatAt(t, e, n, r);
          }
          highlight(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (null == this.children.head) return;
            const n = `${Array.from(this.domNode.childNodes)
                .filter((t) => t !== this.uiNode)
                .map((t) => t.textContent)
                .join("\n")}\n`,
              r = No.formats(this.children.head.domNode);
            if (e || this.forceNext || this.cachedText !== n) {
              if (n.trim().length > 0 || null == this.cachedText) {
                const e = this.children.reduce(
                    (t, e) => t.concat(Yr(e, !1)),
                    new vn()
                  ),
                  s = t(n, r);
                e.diff(s).reduce((t, e) => {
                  let { retain: n, attributes: r } = e;
                  return n
                    ? (r &&
                        Object.keys(r).forEach((e) => {
                          [No.blotName, xo.blotName].includes(e) &&
                            this.formatAt(t, n, e, r[e]);
                        }),
                      t + n)
                    : t;
                }, 0);
              }
              (this.cachedText = n), (this.forceNext = !1);
            }
          }
          html(t, e) {
            const [n] = this.children.find(t);
            return `<pre data-language="${
              n ? No.formats(n.domNode) : "plain"
            }">\n${Kr(this.code(t, e))}\n</pre>`;
          }
          optimize(t) {
            if (
              (super.optimize(t),
              null != this.parent &&
                null != this.children.head &&
                null != this.uiNode)
            ) {
              const t = No.formats(this.children.head.domNode);
              t !== this.uiNode.value && (this.uiNode.value = t);
            }
          }
        }
        (Eo.allowedChildren = [No]),
          (No.requiredContainer = Eo),
          (No.allowedChildren = [xo, ts, $r, Hr]);
        class wo extends Es {
          static register() {
            Ms.register(xo, !0), Ms.register(No, !0), Ms.register(Eo, !0);
          }
          constructor(t, e) {
            if ((super(t, e), null == this.options.hljs))
              throw new Error(
                "Syntax module requires highlight.js. Please include the library on the page before Quill."
              );
            (this.languages = this.options.languages.reduce((t, e) => {
              let { key: n } = e;
              return (t[n] = !0), t;
            }, {})),
              (this.highlightBlot = this.highlightBlot.bind(this)),
              this.initListener(),
              this.initTimer();
          }
          initListener() {
            this.quill.on(Ms.events.SCROLL_BLOT_MOUNT, (t) => {
              if (!(t instanceof Eo)) return;
              const e = this.quill.root.ownerDocument.createElement("select");
              this.options.languages.forEach((t) => {
                let { key: n, label: r } = t;
                const s = e.ownerDocument.createElement("option");
                (s.textContent = r),
                  s.setAttribute("value", n),
                  e.appendChild(s);
              }),
                e.addEventListener("change", () => {
                  t.format(No.blotName, e.value),
                    this.quill.root.focus(),
                    this.highlight(t, !0);
                }),
                null == t.uiNode &&
                  (t.attachUI(e),
                  t.children.head &&
                    (e.value = No.formats(t.children.head.domNode)));
            });
          }
          initTimer() {
            let t = null;
            this.quill.on(Ms.events.SCROLL_OPTIMIZE, () => {
              t && clearTimeout(t),
                (t = setTimeout(() => {
                  this.highlight(), (t = null);
                }, this.options.interval));
            });
          }
          highlight() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.quill.selection.composing) return;
            this.quill.update(Ms.sources.USER);
            const n = this.quill.getSelection();
            (null == t ? this.quill.scroll.descendants(Eo) : [t]).forEach(
              (t) => {
                t.highlight(this.highlightBlot, e);
              }
            ),
              this.quill.update(Ms.sources.SILENT),
              null != n && this.quill.setSelection(n, Ms.sources.SILENT);
          }
          highlightBlot(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "plain";
            if (((e = this.languages[e] ? e : "plain"), "plain" === e))
              return Kr(t)
                .split("\n")
                .reduce(
                  (t, n, r) => (
                    0 !== r && t.insert("\n", { [si.blotName]: e }), t.insert(n)
                  ),
                  new vn()
                );
            const n = this.quill.root.ownerDocument.createElement("div");
            return (
              n.classList.add(si.className),
              (n.innerHTML = ((t, e, n) => {
                if ("string" == typeof t.versionString) {
                  const r = t.versionString.split(".")[0];
                  if (parseInt(r, 10) >= 11)
                    return t.highlight(n, { language: e }).value;
                }
                return t.highlight(e, n).value;
              })(this.options.hljs, e, t)),
              Fi(
                this.quill.scroll,
                n,
                [
                  (t, e) => {
                    const n = yo.value(t);
                    return n
                      ? e.compose(
                          new vn().retain(e.length(), { [xo.blotName]: n })
                        )
                      : e;
                  },
                ],
                [
                  (t, n) =>
                    t.data
                      .split("\n")
                      .reduce(
                        (t, n, r) => (
                          0 !== r && t.insert("\n", { [si.blotName]: e }),
                          t.insert(n)
                        ),
                        n
                      ),
                ],
                new WeakMap()
              )
            );
          }
        }
        wo.DEFAULTS = {
          hljs: window.hljs,
          interval: 1e3,
          languages: [
            { key: "plain", label: "Plain" },
            { key: "bash", label: "Bash" },
            { key: "cpp", label: "C++" },
            { key: "cs", label: "C#" },
            { key: "css", label: "CSS" },
            { key: "diff", label: "Diff" },
            { key: "xml", label: "HTML/XML" },
            { key: "java", label: "Java" },
            { key: "javascript", label: "JavaScript" },
            { key: "markdown", label: "Markdown" },
            { key: "php", label: "PHP" },
            { key: "python", label: "Python" },
            { key: "ruby", label: "Ruby" },
            { key: "sql", label: "SQL" },
          ],
        };
        class Ao extends Gr {
          static blotName = "table";
          static tagName = "TD";
          static create(t) {
            const e = super.create();
            return (
              t
                ? e.setAttribute("data-row", t)
                : e.setAttribute("data-row", Lo()),
              e
            );
          }
          static formats(t) {
            if (t.hasAttribute("data-row")) return t.getAttribute("data-row");
          }
          cellOffset() {
            return this.parent ? this.parent.children.indexOf(this) : -1;
          }
          format(t, e) {
            t === Ao.blotName && e
              ? this.domNode.setAttribute("data-row", e)
              : super.format(t, e);
          }
          row() {
            return this.parent;
          }
          rowOffset() {
            return this.row() ? this.row().rowOffset() : -1;
          }
          table() {
            return this.row() && this.row().table();
          }
        }
        class qo extends Hs {
          static blotName = "table-row";
          static tagName = "TR";
          checkMerge() {
            if (super.checkMerge() && null != this.next.children.head) {
              const t = this.children.head.formats(),
                e = this.children.tail.formats(),
                n = this.next.children.head.formats(),
                r = this.next.children.tail.formats();
              return (
                t.table === e.table &&
                t.table === n.table &&
                t.table === r.table
              );
            }
            return !1;
          }
          optimize(t) {
            super.optimize(t),
              this.children.forEach((t) => {
                if (null == t.next) return;
                const e = t.formats(),
                  n = t.next.formats();
                if (e.table !== n.table) {
                  const e = this.splitAfter(t);
                  e && e.optimize(), this.prev && this.prev.optimize();
                }
              });
          }
          rowOffset() {
            return this.parent ? this.parent.children.indexOf(this) : -1;
          }
          table() {
            return this.parent && this.parent.parent;
          }
        }
        class ko extends Hs {
          static blotName = "table-body";
          static tagName = "TBODY";
        }
        class _o extends Hs {
          static blotName = "table-container";
          static tagName = "TABLE";
          balanceCells() {
            const t = this.descendants(qo),
              e = t.reduce((t, e) => Math.max(e.children.length, t), 0);
            t.forEach((t) => {
              new Array(e - t.children.length).fill(0).forEach(() => {
                let e;
                null != t.children.head &&
                  (e = Ao.formats(t.children.head.domNode));
                const n = this.scroll.create(Ao.blotName, e);
                t.appendChild(n), n.optimize();
              });
            });
          }
          cells(t) {
            return this.rows().map((e) => e.children.at(t));
          }
          deleteColumn(t) {
            const [e] = this.descendant(ko);
            null != e &&
              null != e.children.head &&
              e.children.forEach((e) => {
                const n = e.children.at(t);
                null != n && n.remove();
              });
          }
          insertColumn(t) {
            const [e] = this.descendant(ko);
            null != e &&
              null != e.children.head &&
              e.children.forEach((e) => {
                const n = e.children.at(t),
                  r = Ao.formats(e.children.head.domNode),
                  s = this.scroll.create(Ao.blotName, r);
                e.insertBefore(s, n);
              });
          }
          insertRow(t) {
            const [e] = this.descendant(ko);
            if (null == e || null == e.children.head) return;
            const n = Lo(),
              r = this.scroll.create(qo.blotName);
            e.children.head.children.forEach(() => {
              const t = this.scroll.create(Ao.blotName, n);
              r.appendChild(t);
            });
            const s = e.children.at(t);
            e.insertBefore(r, s);
          }
          rows() {
            const t = this.children.head;
            return null == t ? [] : t.children.map((t) => t);
          }
        }
        function Lo() {
          return `row-${Math.random().toString(36).slice(2, 6)}`;
        }
        (_o.allowedChildren = [ko]),
          (ko.requiredContainer = _o),
          (ko.allowedChildren = [qo]),
          (qo.requiredContainer = ko),
          (qo.allowedChildren = [Ao]),
          (Ao.requiredContainer = qo);
        var Oo = class extends Es {
          static register() {
            Ms.register(Ao), Ms.register(qo), Ms.register(ko), Ms.register(_o);
          }
          constructor() {
            super(...arguments), this.listenBalanceCells();
          }
          balanceTables() {
            this.quill.scroll.descendants(_o).forEach((t) => {
              t.balanceCells();
            });
          }
          deleteColumn() {
            const [t, , e] = this.getTable();
            null != e &&
              (t.deleteColumn(e.cellOffset()),
              this.quill.update(Ms.sources.USER));
          }
          deleteRow() {
            const [, t] = this.getTable();
            null != t && (t.remove(), this.quill.update(Ms.sources.USER));
          }
          deleteTable() {
            const [t] = this.getTable();
            if (null == t) return;
            const e = t.offset();
            t.remove(),
              this.quill.update(Ms.sources.USER),
              this.quill.setSelection(e, Ms.sources.SILENT);
          }
          getTable() {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.quill.getSelection();
            if (null == t) return [null, null, null, -1];
            const [e, n] = this.quill.getLine(t.index);
            if (null == e || e.statics.blotName !== Ao.blotName)
              return [null, null, null, -1];
            const r = e.parent;
            return [r.parent.parent, r, e, n];
          }
          insertColumn(t) {
            const e = this.quill.getSelection();
            if (!e) return;
            const [n, r, s] = this.getTable(e);
            if (null == s) return;
            const i = s.cellOffset();
            n.insertColumn(i + t), this.quill.update(Ms.sources.USER);
            let o = r.rowOffset();
            0 === t && (o += 1),
              this.quill.setSelection(e.index + o, e.length, Ms.sources.SILENT);
          }
          insertColumnLeft() {
            this.insertColumn(0);
          }
          insertColumnRight() {
            this.insertColumn(1);
          }
          insertRow(t) {
            const e = this.quill.getSelection();
            if (!e) return;
            const [n, r, s] = this.getTable(e);
            if (null == s) return;
            const i = r.rowOffset();
            n.insertRow(i + t),
              this.quill.update(Ms.sources.USER),
              t > 0
                ? this.quill.setSelection(e, Ms.sources.SILENT)
                : this.quill.setSelection(
                    e.index + r.children.length,
                    e.length,
                    Ms.sources.SILENT
                  );
          }
          insertRowAbove() {
            this.insertRow(0);
          }
          insertRowBelow() {
            this.insertRow(1);
          }
          insertTable(t, e) {
            const n = this.quill.getSelection();
            if (null == n) return;
            const r = new Array(t).fill(0).reduce((t) => {
              const n = new Array(e).fill("\n").join("");
              return t.insert(n, { table: Lo() });
            }, new vn().retain(n.index));
            this.quill.updateContents(r, Ms.sources.USER),
              this.quill.setSelection(n.index, Ms.sources.SILENT),
              this.balanceTables();
          }
          listenBalanceCells() {
            this.quill.on(Ms.events.SCROLL_OPTIMIZE, (t) => {
              t.some(
                (t) =>
                  !!["TD", "TR", "TBODY", "TABLE"].includes(t.target.tagName) &&
                  (this.quill.once(Ms.events.TEXT_CHANGE, (t, e, n) => {
                    n === Ms.sources.USER && this.balanceTables();
                  }),
                  !0)
              );
            });
          }
        };
        const So = ls("quill:toolbar");
        class To extends Es {
          constructor(t, e) {
            if ((super(t, e), Array.isArray(this.options.container))) {
              const e = document.createElement("div");
              e.setAttribute("role", "toolbar"),
                (function (t, e) {
                  Array.isArray(e[0]) || (e = [e]);
                  e.forEach((e) => {
                    const n = document.createElement("span");
                    n.classList.add("ql-formats"),
                      e.forEach((t) => {
                        if ("string" == typeof t) jo(n, t);
                        else {
                          const e = Object.keys(t)[0],
                            r = t[e];
                          Array.isArray(r)
                            ? (function (t, e, n) {
                                const r = document.createElement("select");
                                r.classList.add(`ql-${e}`),
                                  n.forEach((t) => {
                                    const e = document.createElement("option");
                                    !1 !== t
                                      ? e.setAttribute("value", String(t))
                                      : e.setAttribute("selected", "selected"),
                                      r.appendChild(e);
                                  }),
                                  t.appendChild(r);
                              })(n, e, r)
                            : jo(n, e, r);
                        }
                      }),
                      t.appendChild(n);
                  });
                })(e, this.options.container),
                t.container?.parentNode?.insertBefore(e, t.container),
                (this.container = e);
            } else
              "string" == typeof this.options.container
                ? (this.container = document.querySelector(
                    this.options.container
                  ))
                : (this.container = this.options.container);
            this.container instanceof HTMLElement
              ? (this.container.classList.add("ql-toolbar"),
                (this.controls = []),
                (this.handlers = {}),
                this.options.handlers &&
                  Object.keys(this.options.handlers).forEach((t) => {
                    const e = this.options.handlers?.[t];
                    e && this.addHandler(t, e);
                  }),
                Array.from(
                  this.container.querySelectorAll("button, select")
                ).forEach((t) => {
                  this.attach(t);
                }),
                this.quill.on(Ms.events.EDITOR_CHANGE, () => {
                  const [t] = this.quill.selection.getRange();
                  this.update(t);
                }))
              : So.error("Container required for toolbar", this.options);
          }
          addHandler(t, e) {
            this.handlers[t] = e;
          }
          attach(t) {
            let e = Array.from(t.classList).find((t) => 0 === t.indexOf("ql-"));
            if (!e) return;
            if (
              ((e = e.slice(3)),
              "BUTTON" === t.tagName && t.setAttribute("type", "button"),
              null == this.handlers[e] && null == this.quill.scroll.query(e))
            )
              return void So.warn(
                "ignoring attaching to nonexistent format",
                e,
                t
              );
            const n = "SELECT" === t.tagName ? "change" : "click";
            t.addEventListener(n, (n) => {
              let r;
              if ("SELECT" === t.tagName) {
                if (t.selectedIndex < 0) return;
                const e = t.options[t.selectedIndex];
                r = !e.hasAttribute("selected") && (e.value || !1);
              } else
                (r =
                  !t.classList.contains("ql-active") &&
                  (t.value || !t.hasAttribute("value"))),
                  n.preventDefault();
              this.quill.focus();
              const [s] = this.quill.selection.getRange();
              if (null != this.handlers[e]) this.handlers[e].call(this, r);
              else if (this.quill.scroll.query(e).prototype instanceof dn) {
                if (((r = prompt(`Enter ${e}`)), !r)) return;
                this.quill.updateContents(
                  new vn()
                    .retain(s.index)
                    .delete(s.length)
                    .insert({ [e]: r }),
                  Ms.sources.USER
                );
              } else this.quill.format(e, r, Ms.sources.USER);
              this.update(s);
            }),
              this.controls.push([e, t]);
          }
          update(t) {
            const e = null == t ? {} : this.quill.getFormat(t);
            this.controls.forEach((n) => {
              const [r, s] = n;
              if ("SELECT" === s.tagName) {
                let n = null;
                if (null == t) n = null;
                else if (null == e[r]) n = s.querySelector("option[selected]");
                else if (!Array.isArray(e[r])) {
                  let t = e[r];
                  "string" == typeof t && (t = t.replace(/"/g, '\\"')),
                    (n = s.querySelector(`option[value="${t}"]`));
                }
                null == n
                  ? ((s.value = ""), (s.selectedIndex = -1))
                  : (n.selected = !0);
              } else if (null == t)
                s.classList.remove("ql-active"),
                  s.setAttribute("aria-pressed", "false");
              else if (s.hasAttribute("value")) {
                const t = e[r],
                  n =
                    t === s.getAttribute("value") ||
                    (null != t && t.toString() === s.getAttribute("value")) ||
                    (null == t && !s.getAttribute("value"));
                s.classList.toggle("ql-active", n),
                  s.setAttribute("aria-pressed", n.toString());
              } else {
                const t = null != e[r];
                s.classList.toggle("ql-active", t),
                  s.setAttribute("aria-pressed", t.toString());
              }
            });
          }
        }
        function jo(t, e, n) {
          const r = document.createElement("button");
          r.setAttribute("type", "button"),
            r.classList.add(`ql-${e}`),
            r.setAttribute("aria-pressed", "false"),
            null != n
              ? ((r.value = n), r.setAttribute("aria-label", `${e}: ${n}`))
              : r.setAttribute("aria-label", e),
            t.appendChild(r);
        }
        (To.DEFAULTS = {}),
          (To.DEFAULTS = {
            container: null,
            handlers: {
              clean() {
                const t = this.quill.getSelection();
                if (null != t)
                  if (0 === t.length) {
                    const t = this.quill.getFormat();
                    Object.keys(t).forEach((t) => {
                      null != this.quill.scroll.query(t, ze.INLINE) &&
                        this.quill.format(t, !1, Ms.sources.USER);
                    });
                  } else
                    this.quill.removeFormat(t.index, t.length, Ms.sources.USER);
              },
              direction(t) {
                const { align: e } = this.quill.getFormat();
                "rtl" === t && null == e
                  ? this.quill.format("align", "right", Ms.sources.USER)
                  : t ||
                    "right" !== e ||
                    this.quill.format("align", !1, Ms.sources.USER),
                  this.quill.format("direction", t, Ms.sources.USER);
              },
              indent(t) {
                const e = this.quill.getSelection(),
                  n = this.quill.getFormat(e),
                  r = parseInt(n.indent || 0, 10);
                if ("+1" === t || "-1" === t) {
                  let e = "+1" === t ? 1 : -1;
                  "rtl" === n.direction && (e *= -1),
                    this.quill.format("indent", r + e, Ms.sources.USER);
                }
              },
              link(t) {
                !0 === t && (t = prompt("Enter link URL:")),
                  this.quill.format("link", t, Ms.sources.USER);
              },
              list(t) {
                const e = this.quill.getSelection(),
                  n = this.quill.getFormat(e);
                "check" === t
                  ? "checked" === n.list || "unchecked" === n.list
                    ? this.quill.format("list", !1, Ms.sources.USER)
                    : this.quill.format("list", "unchecked", Ms.sources.USER)
                  : this.quill.format("list", t, Ms.sources.USER);
              },
            },
          });
        const Co =
          '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>';
        var Ro = {
          align: {
            "": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>',
            center:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>',
            right:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>',
            justify:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>',
          },
          background:
            '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>',
          blockquote:
            '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>',
          bold: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>',
          clean:
            '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>',
          code: Co,
          "code-block": Co,
          color:
            '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>',
          direction: {
            "": '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>',
            rtl: '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>',
          },
          formula:
            '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>',
          header: {
            1: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>',
            2: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
            3: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
            4: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>',
            5: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
            6: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>',
          },
          italic:
            '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>',
          image:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>',
          indent: {
            "+1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>',
            "-1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>',
          },
          link: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>',
          list: {
            bullet:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>',
            check:
              '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>',
            ordered:
              '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>',
          },
          script: {
            sub: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>',
            super:
              '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>',
          },
          strike:
            '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>',
          table:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>',
          underline:
            '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>',
          video:
            '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>',
        };
        let Io = 0;
        function Mo(t, e) {
          t.setAttribute(e, `${!("true" === t.getAttribute(e))}`);
        }
        var Bo = class {
          constructor(t) {
            (this.select = t),
              (this.container = document.createElement("span")),
              this.buildPicker(),
              (this.select.style.display = "none"),
              this.select.parentNode.insertBefore(this.container, this.select),
              this.label.addEventListener("mousedown", () => {
                this.togglePicker();
              }),
              this.label.addEventListener("keydown", (t) => {
                switch (t.key) {
                  case "Enter":
                    this.togglePicker();
                    break;
                  case "Escape":
                    this.escape(), t.preventDefault();
                }
              }),
              this.select.addEventListener("change", this.update.bind(this));
          }
          togglePicker() {
            this.container.classList.toggle("ql-expanded"),
              Mo(this.label, "aria-expanded"),
              Mo(this.options, "aria-hidden");
          }
          buildItem(t) {
            const e = document.createElement("span");
            (e.tabIndex = "0"),
              e.setAttribute("role", "button"),
              e.classList.add("ql-picker-item");
            const n = t.getAttribute("value");
            return (
              n && e.setAttribute("data-value", n),
              t.textContent && e.setAttribute("data-label", t.textContent),
              e.addEventListener("click", () => {
                this.selectItem(e, !0);
              }),
              e.addEventListener("keydown", (t) => {
                switch (t.key) {
                  case "Enter":
                    this.selectItem(e, !0), t.preventDefault();
                    break;
                  case "Escape":
                    this.escape(), t.preventDefault();
                }
              }),
              e
            );
          }
          buildLabel() {
            const t = document.createElement("span");
            return (
              t.classList.add("ql-picker-label"),
              (t.innerHTML =
                '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>'),
              (t.tabIndex = "0"),
              t.setAttribute("role", "button"),
              t.setAttribute("aria-expanded", "false"),
              this.container.appendChild(t),
              t
            );
          }
          buildOptions() {
            const t = document.createElement("span");
            t.classList.add("ql-picker-options"),
              t.setAttribute("aria-hidden", "true"),
              (t.tabIndex = "-1"),
              (t.id = `ql-picker-options-${Io}`),
              (Io += 1),
              this.label.setAttribute("aria-controls", t.id),
              (this.options = t),
              Array.from(this.select.options).forEach((e) => {
                const n = this.buildItem(e);
                t.appendChild(n), !0 === e.selected && this.selectItem(n);
              }),
              this.container.appendChild(t);
          }
          buildPicker() {
            Array.from(this.select.attributes).forEach((t) => {
              this.container.setAttribute(t.name, t.value);
            }),
              this.container.classList.add("ql-picker"),
              (this.label = this.buildLabel()),
              this.buildOptions();
          }
          escape() {
            this.close(), setTimeout(() => this.label.focus(), 1);
          }
          close() {
            this.container.classList.remove("ql-expanded"),
              this.label.setAttribute("aria-expanded", "false"),
              this.options.setAttribute("aria-hidden", "true");
          }
          selectItem(t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = this.container.querySelector(".ql-selected");
            t !== n &&
              (null != n && n.classList.remove("ql-selected"),
              null != t &&
                (t.classList.add("ql-selected"),
                (this.select.selectedIndex = Array.from(
                  t.parentNode.children
                ).indexOf(t)),
                t.hasAttribute("data-value")
                  ? this.label.setAttribute(
                      "data-value",
                      t.getAttribute("data-value")
                    )
                  : this.label.removeAttribute("data-value"),
                t.hasAttribute("data-label")
                  ? this.label.setAttribute(
                      "data-label",
                      t.getAttribute("data-label")
                    )
                  : this.label.removeAttribute("data-label"),
                e &&
                  (this.select.dispatchEvent(new Event("change")),
                  this.close())));
          }
          update() {
            let t;
            if (this.select.selectedIndex > -1) {
              const e =
                this.container.querySelector(".ql-picker-options").children[
                  this.select.selectedIndex
                ];
              (t = this.select.options[this.select.selectedIndex]),
                this.selectItem(e);
            } else this.selectItem(null);
            const e =
              null != t && t !== this.select.querySelector("option[selected]");
            this.label.classList.toggle("ql-active", e);
          }
        };
        var Do = class extends Bo {
          constructor(t, e) {
            super(t),
              (this.label.innerHTML = e),
              this.container.classList.add("ql-color-picker"),
              Array.from(this.container.querySelectorAll(".ql-picker-item"))
                .slice(0, 7)
                .forEach((t) => {
                  t.classList.add("ql-primary");
                });
          }
          buildItem(t) {
            const e = super.buildItem(t);
            return (e.style.backgroundColor = t.getAttribute("value") || ""), e;
          }
          selectItem(t, e) {
            super.selectItem(t, e);
            const n = this.label.querySelector(".ql-color-label"),
              r = (t && t.getAttribute("data-value")) || "";
            n &&
              ("line" === n.tagName
                ? (n.style.stroke = r)
                : (n.style.fill = r));
          }
        };
        var Uo = class extends Bo {
          constructor(t, e) {
            super(t),
              this.container.classList.add("ql-icon-picker"),
              Array.from(
                this.container.querySelectorAll(".ql-picker-item")
              ).forEach((t) => {
                t.innerHTML = e[t.getAttribute("data-value") || ""];
              }),
              (this.defaultItem = this.container.querySelector(".ql-selected")),
              this.selectItem(this.defaultItem);
          }
          selectItem(t, e) {
            super.selectItem(t, e);
            const n = t || this.defaultItem;
            if (null != n) {
              if (this.label.innerHTML === n.innerHTML) return;
              this.label.innerHTML = n.innerHTML;
            }
          }
        };
        var Po = class {
          constructor(t, e) {
            (this.quill = t),
              (this.boundsContainer = e || document.body),
              (this.root = t.addContainer("ql-tooltip")),
              (this.root.innerHTML = this.constructor.TEMPLATE),
              ((t) => {
                const { overflowY: e } = getComputedStyle(t, null);
                return "visible" !== e && "clip" !== e;
              })(this.quill.root) &&
                this.quill.root.addEventListener("scroll", () => {
                  this.root.style.marginTop =
                    -1 * this.quill.root.scrollTop + "px";
                }),
              this.hide();
          }
          hide() {
            this.root.classList.add("ql-hidden");
          }
          position(t) {
            const e = t.left + t.width / 2 - this.root.offsetWidth / 2,
              n = t.bottom + this.quill.root.scrollTop;
            (this.root.style.left = `${e}px`),
              (this.root.style.top = `${n}px`),
              this.root.classList.remove("ql-flip");
            const r = this.boundsContainer.getBoundingClientRect(),
              s = this.root.getBoundingClientRect();
            let i = 0;
            if (
              (s.right > r.right &&
                ((i = r.right - s.right),
                (this.root.style.left = `${e + i}px`)),
              s.left < r.left &&
                ((i = r.left - s.left), (this.root.style.left = `${e + i}px`)),
              s.bottom > r.bottom)
            ) {
              const e = s.bottom - s.top,
                r = t.bottom - t.top + e;
              (this.root.style.top = n - r + "px"),
                this.root.classList.add("ql-flip");
            }
            return i;
          }
          show() {
            this.root.classList.remove("ql-editing"),
              this.root.classList.remove("ql-hidden");
          }
        };
        const zo = [!1, "center", "right", "justify"],
          Fo = [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
          ],
          Ho = [!1, "serif", "monospace"],
          $o = ["1", "2", "3", !1],
          Vo = ["small", !1, "large", "huge"];
        class Ko extends _s {
          constructor(t, e) {
            super(t, e);
            const n = (e) => {
              document.body.contains(t.root)
                ? (null == this.tooltip ||
                    this.tooltip.root.contains(e.target) ||
                    document.activeElement === this.tooltip.textbox ||
                    this.quill.hasFocus() ||
                    this.tooltip.hide(),
                  null != this.pickers &&
                    this.pickers.forEach((t) => {
                      t.container.contains(e.target) || t.close();
                    }))
                : document.body.removeEventListener("click", n);
            };
            t.emitter.listenDOM("click", document.body, n);
          }
          addModule(t) {
            const e = super.addModule(t);
            return "toolbar" === t && this.extendToolbar(e), e;
          }
          buildButtons(t, e) {
            Array.from(t).forEach((t) => {
              (t.getAttribute("class") || "").split(/\s+/).forEach((n) => {
                if (n.startsWith("ql-") && ((n = n.slice(3)), null != e[n]))
                  if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;
                  else if ("string" == typeof e[n]) t.innerHTML = e[n];
                  else {
                    const r = t.value || "";
                    null != r && e[n][r] && (t.innerHTML = e[n][r]);
                  }
              });
            });
          }
          buildPickers(t, e) {
            this.pickers = Array.from(t).map((t) => {
              if (
                t.classList.contains("ql-align") &&
                (null == t.querySelector("option") && Zo(t, zo),
                "object" == typeof e.align)
              )
                return new Uo(t, e.align);
              if (
                t.classList.contains("ql-background") ||
                t.classList.contains("ql-color")
              ) {
                const n = t.classList.contains("ql-background")
                  ? "background"
                  : "color";
                return (
                  null == t.querySelector("option") &&
                    Zo(t, Fo, "background" === n ? "#ffffff" : "#000000"),
                  new Do(t, e[n])
                );
              }
              return (
                null == t.querySelector("option") &&
                  (t.classList.contains("ql-font")
                    ? Zo(t, Ho)
                    : t.classList.contains("ql-header")
                    ? Zo(t, $o)
                    : t.classList.contains("ql-size") && Zo(t, Vo)),
                new Bo(t)
              );
            });
            this.quill.on(cs.events.EDITOR_CHANGE, () => {
              this.pickers.forEach((t) => {
                t.update();
              });
            });
          }
        }
        Ko.DEFAULTS = Pe({}, _s.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                formula() {
                  this.quill.theme.tooltip.edit("formula");
                },
                image() {
                  let t = this.container.querySelector(
                    "input.ql-image[type=file]"
                  );
                  null == t &&
                    ((t = document.createElement("input")),
                    t.setAttribute("type", "file"),
                    t.setAttribute(
                      "accept",
                      this.quill.uploader.options.mimetypes.join(", ")
                    ),
                    t.classList.add("ql-image"),
                    t.addEventListener("change", () => {
                      const e = this.quill.getSelection(!0);
                      this.quill.uploader.upload(e, t.files), (t.value = "");
                    }),
                    this.container.appendChild(t)),
                    t.click();
                },
                video() {
                  this.quill.theme.tooltip.edit("video");
                },
              },
            },
          },
        });
        class Wo extends Po {
          constructor(t, e) {
            super(t, e),
              (this.textbox = this.root.querySelector('input[type="text"]')),
              this.listen();
          }
          listen() {
            this.textbox.addEventListener("keydown", (t) => {
              "Enter" === t.key
                ? (this.save(), t.preventDefault())
                : "Escape" === t.key && (this.cancel(), t.preventDefault());
            });
          }
          cancel() {
            this.hide(), this.restoreFocus();
          }
          edit() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "link",
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            if (
              (this.root.classList.remove("ql-hidden"),
              this.root.classList.add("ql-editing"),
              null == this.textbox)
            )
              return;
            null != e
              ? (this.textbox.value = e)
              : t !== this.root.getAttribute("data-mode") &&
                (this.textbox.value = "");
            const n = this.quill.getBounds(this.quill.selection.savedRange);
            null != n && this.position(n),
              this.textbox.select(),
              this.textbox.setAttribute(
                "placeholder",
                this.textbox.getAttribute(`data-${t}`) || ""
              ),
              this.root.setAttribute("data-mode", t);
          }
          restoreFocus() {
            this.quill.focus({ preventScroll: !0 });
          }
          save() {
            let { value: t } = this.textbox;
            switch (this.root.getAttribute("data-mode")) {
              case "link": {
                const { scrollTop: e } = this.quill.root;
                this.linkRange
                  ? (this.quill.formatText(
                      this.linkRange,
                      "link",
                      t,
                      cs.sources.USER
                    ),
                    delete this.linkRange)
                  : (this.restoreFocus(),
                    this.quill.format("link", t, cs.sources.USER)),
                  (this.quill.root.scrollTop = e);
                break;
              }
              case "video":
                t = (function (t) {
                  let e =
                    t.match(
                      /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
                    ) ||
                    t.match(
                      /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
                    );
                  if (e)
                    return `${e[1] || "https"}://www.youtube.com/embed/${
                      e[2]
                    }?showinfo=0`;
                  if (
                    (e = t.match(
                      /^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/
                    ))
                  )
                    return `${e[1] || "https"}://player.vimeo.com/video/${
                      e[2]
                    }/`;
                  return t;
                })(t);
              case "formula": {
                if (!t) break;
                const e = this.quill.getSelection(!0);
                if (null != e) {
                  const n = e.index + e.length;
                  this.quill.insertEmbed(
                    n,
                    this.root.getAttribute("data-mode"),
                    t,
                    cs.sources.USER
                  ),
                    "formula" === this.root.getAttribute("data-mode") &&
                      this.quill.insertText(n + 1, " ", cs.sources.USER),
                    this.quill.setSelection(n + 2, cs.sources.USER);
                }
                break;
              }
            }
            (this.textbox.value = ""), this.hide();
          }
        }
        function Zo(t, e) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          e.forEach((e) => {
            const r = document.createElement("option");
            e === n
              ? r.setAttribute("selected", "selected")
              : r.setAttribute("value", String(e)),
              t.appendChild(r);
          });
        }
        const Go = [
          ["bold", "italic", "link"],
          [{ header: 1 }, { header: 2 }, "blockquote"],
        ];
        class Xo extends Wo {
          static TEMPLATE = [
            '<span class="ql-tooltip-arrow"></span>',
            '<div class="ql-tooltip-editor">',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-close"></a>',
            "</div>",
          ].join("");
          constructor(t, e) {
            super(t, e),
              this.quill.on(cs.events.EDITOR_CHANGE, (t, e, n, r) => {
                if (t === cs.events.SELECTION_CHANGE)
                  if (null != e && e.length > 0 && r === cs.sources.USER) {
                    this.show(),
                      (this.root.style.left = "0px"),
                      (this.root.style.width = ""),
                      (this.root.style.width = `${this.root.offsetWidth}px`);
                    const t = this.quill.getLines(e.index, e.length);
                    if (1 === t.length) {
                      const t = this.quill.getBounds(e);
                      null != t && this.position(t);
                    } else {
                      const n = t[t.length - 1],
                        r = this.quill.getIndex(n),
                        s = Math.min(n.length() - 1, e.index + e.length - r),
                        i = this.quill.getBounds(new hs(r, s));
                      null != i && this.position(i);
                    }
                  } else
                    document.activeElement !== this.textbox &&
                      this.quill.hasFocus() &&
                      this.hide();
              });
          }
          listen() {
            super.listen(),
              this.root
                .querySelector(".ql-close")
                .addEventListener("click", () => {
                  this.root.classList.remove("ql-editing");
                }),
              this.quill.on(cs.events.SCROLL_OPTIMIZE, () => {
                setTimeout(() => {
                  if (this.root.classList.contains("ql-hidden")) return;
                  const t = this.quill.getSelection();
                  if (null != t) {
                    const e = this.quill.getBounds(t);
                    null != e && this.position(e);
                  }
                }, 1);
              });
          }
          cancel() {
            this.show();
          }
          position(t) {
            const e = super.position(t),
              n = this.root.querySelector(".ql-tooltip-arrow");
            return (
              (n.style.marginLeft = ""),
              0 !== e &&
                (n.style.marginLeft = -1 * e - n.offsetWidth / 2 + "px"),
              e
            );
          }
        }
        class Yo extends Ko {
          constructor(t, e) {
            null != e.modules.toolbar &&
              null == e.modules.toolbar.container &&
              (e.modules.toolbar.container = Go),
              super(t, e),
              this.quill.container.classList.add("ql-bubble");
          }
          extendToolbar(t) {
            (this.tooltip = new Xo(this.quill, this.options.bounds)),
              null != t.container &&
                (this.tooltip.root.appendChild(t.container),
                this.buildButtons(t.container.querySelectorAll("button"), Ro),
                this.buildPickers(t.container.querySelectorAll("select"), Ro));
          }
        }
        Yo.DEFAULTS = Pe({}, Ko.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link(t) {
                  t
                    ? this.quill.theme.tooltip.edit()
                    : this.quill.format("link", !1, Ms.sources.USER);
                },
              },
            },
          },
        });
        const Qo = [
          [{ header: ["1", "2", "3", !1] }],
          ["bold", "italic", "underline", "link"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ];
        class Jo extends Wo {
          static TEMPLATE = [
            '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
            '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
            '<a class="ql-action"></a>',
            '<a class="ql-remove"></a>',
          ].join("");
          preview = this.root.querySelector("a.ql-preview");
          listen() {
            super.listen(),
              this.root
                .querySelector("a.ql-action")
                .addEventListener("click", (t) => {
                  this.root.classList.contains("ql-editing")
                    ? this.save()
                    : this.edit("link", this.preview.textContent),
                    t.preventDefault();
                }),
              this.root
                .querySelector("a.ql-remove")
                .addEventListener("click", (t) => {
                  if (null != this.linkRange) {
                    const t = this.linkRange;
                    this.restoreFocus(),
                      this.quill.formatText(t, "link", !1, cs.sources.USER),
                      delete this.linkRange;
                  }
                  t.preventDefault(), this.hide();
                }),
              this.quill.on(cs.events.SELECTION_CHANGE, (t, e, n) => {
                if (null != t) {
                  if (0 === t.length && n === cs.sources.USER) {
                    const [e, n] = this.quill.scroll.descendant(ao, t.index);
                    if (null != e) {
                      this.linkRange = new hs(t.index - n, e.length());
                      const r = ao.formats(e.domNode);
                      (this.preview.textContent = r),
                        this.preview.setAttribute("href", r),
                        this.show();
                      const s = this.quill.getBounds(this.linkRange);
                      return void (null != s && this.position(s));
                    }
                  } else delete this.linkRange;
                  this.hide();
                }
              });
          }
          show() {
            super.show(), this.root.removeAttribute("data-mode");
          }
        }
        class tl extends Ko {
          constructor(t, e) {
            null != e.modules.toolbar &&
              null == e.modules.toolbar.container &&
              (e.modules.toolbar.container = Qo),
              super(t, e),
              this.quill.container.classList.add("ql-snow");
          }
          extendToolbar(t) {
            null != t.container &&
              (t.container.classList.add("ql-snow"),
              this.buildButtons(t.container.querySelectorAll("button"), Ro),
              this.buildPickers(t.container.querySelectorAll("select"), Ro),
              (this.tooltip = new Jo(this.quill, this.options.bounds)),
              t.container.querySelector(".ql-link") &&
                this.quill.keyboard.addBinding(
                  { key: "k", shortKey: !0 },
                  (e, n) => {
                    t.handlers.link.call(t, !n.format.link);
                  }
                ));
          }
        }
        tl.DEFAULTS = Pe({}, Ko.DEFAULTS, {
          modules: {
            toolbar: {
              handlers: {
                link(t) {
                  if (t) {
                    const t = this.quill.getSelection();
                    if (null == t || 0 === t.length) return;
                    let e = this.quill.getText(t);
                    /^\S+@\S+\.\S+$/.test(e) &&
                      0 !== e.indexOf("mailto:") &&
                      (e = `mailto:${e}`);
                    const { tooltip: n } = this.quill.theme;
                    n.edit("link", e);
                  } else this.quill.format("link", !1, Ms.sources.USER);
                },
              },
            },
          },
        });
        var el = tl;
        Ji.register(
          {
            "attributors/attribute/direction": li,
            "attributors/class/align": Xs,
            "attributors/class/background": ei,
            "attributors/class/color": Js,
            "attributors/class/direction": ai,
            "attributors/class/font": hi,
            "attributors/class/size": fi,
            "attributors/style/align": Ys,
            "attributors/style/background": ni,
            "attributors/style/color": ti,
            "attributors/style/direction": ci,
            "attributors/style/font": di,
            "attributors/style/size": pi,
          },
          !0
        ),
          Ji.register(
            {
              "formats/align": Xs,
              "formats/direction": ai,
              "formats/indent": eo,
              "formats/background": ni,
              "formats/color": ti,
              "formats/font": hi,
              "formats/size": fi,
              "formats/blockquote": no,
              "formats/code-block": si,
              "formats/header": ro,
              "formats/list": io,
              "formats/bold": oo,
              "formats/code": ii,
              "formats/italic": lo,
              "formats/link": ao,
              "formats/script": uo,
              "formats/strike": ho,
              "formats/underline": fo,
              "formats/formula": po,
              "formats/image": mo,
              "formats/video": vo,
              "modules/syntax": wo,
              "modules/table": Oo,
              "modules/toolbar": To,
              "themes/bubble": Yo,
              "themes/snow": el,
              "ui/icons": Ro,
              "ui/picker": Bo,
              "ui/icon-picker": Uo,
              "ui/color-picker": Do,
              "ui/tooltip": Po,
            },
            !0
          );
        var nl = Ji;
        try {
          window.Quill = nl;
        } catch (t) {}
      })(),
      r
    );
  })();
});
