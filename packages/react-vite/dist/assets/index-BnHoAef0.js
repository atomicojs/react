(function () {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload")) return;
  for (const D of document.querySelectorAll('link[rel="modulepreload"]')) i(D);
  new MutationObserver((D) => {
    for (const H of D)
      if (H.type === "childList")
        for (const j of H.addedNodes)
          j.tagName === "LINK" && j.rel === "modulepreload" && i(j);
  }).observe(document, { childList: !0, subtree: !0 });
  function b(D) {
    const H = {};
    return (
      D.integrity && (H.integrity = D.integrity),
      D.referrerPolicy && (H.referrerPolicy = D.referrerPolicy),
      D.crossOrigin === "use-credentials"
        ? (H.credentials = "include")
        : D.crossOrigin === "anonymous"
        ? (H.credentials = "omit")
        : (H.credentials = "same-origin"),
      H
    );
  }
  function i(D) {
    if (D.ep) return;
    D.ep = !0;
    const H = b(D);
    fetch(D.href, H);
  }
})();
var oi = { exports: {} },
  Ee = {};
var Uy;
function ph() {
  if (Uy) return Ee;
  Uy = 1;
  var o = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.fragment");
  function b(i, D, H) {
    var j = null;
    if (
      (H !== void 0 && (j = "" + H),
      D.key !== void 0 && (j = "" + D.key),
      "key" in D)
    ) {
      H = {};
      for (var Q in D) Q !== "key" && (H[Q] = D[Q]);
    } else H = D;
    return (
      (D = H.ref),
      { $$typeof: o, type: i, key: j, ref: D !== void 0 ? D : null, props: H }
    );
  }
  return (Ee.Fragment = v), (Ee.jsx = b), (Ee.jsxs = b), Ee;
}
var Ny;
function Uh() {
  return Ny || ((Ny = 1), (oi.exports = ph())), oi.exports;
}
var it = Uh(),
  bi = Symbol.for("@atomico/wrapper/options");
globalThis[bi] = globalThis[bi] || { deduple: !1 };
var Ky = globalThis[bi],
  xn = Symbol.for("@atomico/wrapper");
globalThis[xn] = globalThis[xn] || { registered: new Map(), count: 0 };
var Nh = () => `c-${Date.now()}-${globalThis[xn].count++}`;
if (typeof customElements < "u") {
  var { define: Hy } = customElements;
  customElements.define = function (o, v, b) {
    try {
      Hy.call(this, o, v, b);
    } catch (i) {
      if (Ky.deduple && customElements.get(o))
        (o = o + "-" + Nh()), Hy.call(this, o, v, b);
      else throw i;
    }
    globalThis[xn].registered.set(v, [o, b]);
  };
}
Ky.deduple = !0;
var yi = { exports: {} },
  Te = {},
  mi = { exports: {} },
  vi = {};
var Ry;
function Hh() {
  return (
    Ry ||
      ((Ry = 1),
      (function (o) {
        function v(z, U) {
          var Z = z.length;
          z.push(U);
          l: for (; 0 < Z; ) {
            var cl = (Z - 1) >>> 1,
              ml = z[cl];
            if (0 < D(ml, U)) (z[cl] = U), (z[Z] = ml), (Z = cl);
            else break l;
          }
        }
        function b(z) {
          return z.length === 0 ? null : z[0];
        }
        function i(z) {
          if (z.length === 0) return null;
          var U = z[0],
            Z = z.pop();
          if (Z !== U) {
            z[0] = Z;
            l: for (var cl = 0, ml = z.length, m = ml >>> 1; cl < m; ) {
              var O = 2 * (cl + 1) - 1,
                N = z[O],
                q = O + 1,
                x = z[q];
              if (0 > D(N, Z))
                q < ml && 0 > D(x, N)
                  ? ((z[cl] = x), (z[q] = Z), (cl = q))
                  : ((z[cl] = N), (z[O] = Z), (cl = O));
              else if (q < ml && 0 > D(x, Z)) (z[cl] = x), (z[q] = Z), (cl = q);
              else break l;
            }
          }
          return U;
        }
        function D(z, U) {
          var Z = z.sortIndex - U.sortIndex;
          return Z !== 0 ? Z : z.id - U.id;
        }
        if (
          ((o.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var H = performance;
          o.unstable_now = function () {
            return H.now();
          };
        } else {
          var j = Date,
            Q = j.now();
          o.unstable_now = function () {
            return j.now() - Q;
          };
        }
        var M = [],
          g = [],
          X = 1,
          p = null,
          C = 3,
          J = !1,
          ll = !1,
          _l = !1,
          Sl = !1,
          Nl = typeof setTimeout == "function" ? setTimeout : null,
          bt = typeof clearTimeout == "function" ? clearTimeout : null,
          gl = typeof setImmediate < "u" ? setImmediate : null;
        function yl(z) {
          for (var U = b(g); U !== null; ) {
            if (U.callback === null) i(g);
            else if (U.startTime <= z)
              i(g), (U.sortIndex = U.expirationTime), v(M, U);
            else break;
            U = b(g);
          }
        }
        function Cl(z) {
          if (((_l = !1), yl(z), !ll))
            if (b(M) !== null) (ll = !0), Ll || ((Ll = !0), Vl());
            else {
              var U = b(g);
              U !== null && Et(Cl, U.startTime - z);
            }
        }
        var Ll = !1,
          I = -1,
          xl = 5,
          _t = -1;
        function Zu() {
          return Sl ? !0 : !(o.unstable_now() - _t < xl);
        }
        function Ot() {
          if (((Sl = !1), Ll)) {
            var z = o.unstable_now();
            _t = z;
            var U = !0;
            try {
              l: {
                (ll = !1), _l && ((_l = !1), bt(I), (I = -1)), (J = !0);
                var Z = C;
                try {
                  t: {
                    for (
                      yl(z), p = b(M);
                      p !== null && !(p.expirationTime > z && Zu());

                    ) {
                      var cl = p.callback;
                      if (typeof cl == "function") {
                        (p.callback = null), (C = p.priorityLevel);
                        var ml = cl(p.expirationTime <= z);
                        if (((z = o.unstable_now()), typeof ml == "function")) {
                          (p.callback = ml), yl(z), (U = !0);
                          break t;
                        }
                        p === b(M) && i(M), yl(z);
                      } else i(M);
                      p = b(M);
                    }
                    if (p !== null) U = !0;
                    else {
                      var m = b(g);
                      m !== null && Et(Cl, m.startTime - z), (U = !1);
                    }
                  }
                  break l;
                } finally {
                  (p = null), (C = Z), (J = !1);
                }
                U = void 0;
              }
            } finally {
              U ? Vl() : (Ll = !1);
            }
          }
        }
        var Vl;
        if (typeof gl == "function")
          Vl = function () {
            gl(Ot);
          };
        else if (typeof MessageChannel < "u") {
          var Eu = new MessageChannel(),
            Nt = Eu.port2;
          (Eu.port1.onmessage = Ot),
            (Vl = function () {
              Nt.postMessage(null);
            });
        } else
          Vl = function () {
            Nl(Ot, 0);
          };
        function Et(z, U) {
          I = Nl(function () {
            z(o.unstable_now());
          }, U);
        }
        (o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (o.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (xl = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (o.unstable_next = function (z) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = C;
            }
            var Z = C;
            C = U;
            try {
              return z();
            } finally {
              C = Z;
            }
          }),
          (o.unstable_requestPaint = function () {
            Sl = !0;
          }),
          (o.unstable_runWithPriority = function (z, U) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var Z = C;
            C = z;
            try {
              return U();
            } finally {
              C = Z;
            }
          }),
          (o.unstable_scheduleCallback = function (z, U, Z) {
            var cl = o.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == "number" && 0 < Z ? cl + Z : cl))
                : (Z = cl),
              z)
            ) {
              case 1:
                var ml = -1;
                break;
              case 2:
                ml = 250;
                break;
              case 5:
                ml = 1073741823;
                break;
              case 4:
                ml = 1e4;
                break;
              default:
                ml = 5e3;
            }
            return (
              (ml = Z + ml),
              (z = {
                id: X++,
                callback: U,
                priorityLevel: z,
                startTime: Z,
                expirationTime: ml,
                sortIndex: -1,
              }),
              Z > cl
                ? ((z.sortIndex = Z),
                  v(g, z),
                  b(M) === null &&
                    z === b(g) &&
                    (_l ? (bt(I), (I = -1)) : (_l = !0), Et(Cl, Z - cl)))
                : ((z.sortIndex = ml),
                  v(M, z),
                  ll || J || ((ll = !0), Ll || ((Ll = !0), Vl()))),
              z
            );
          }),
          (o.unstable_shouldYield = Zu),
          (o.unstable_wrapCallback = function (z) {
            var U = C;
            return function () {
              var Z = C;
              C = U;
              try {
                return z.apply(this, arguments);
              } finally {
                C = Z;
              }
            };
          });
      })(vi)),
    vi
  );
}
var Cy;
function Rh() {
  return Cy || ((Cy = 1), (mi.exports = Hh())), mi.exports;
}
var hi = { exports: {} },
  L = {};
var qy;
function Ch() {
  if (qy) return L;
  qy = 1;
  var o = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    D = Symbol.for("react.profiler"),
    H = Symbol.for("react.consumer"),
    j = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    M = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    C = Symbol.iterator;
  function J(m) {
    return m === null || typeof m != "object"
      ? null
      : ((m = (C && m[C]) || m["@@iterator"]),
        typeof m == "function" ? m : null);
  }
  var ll = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _l = Object.assign,
    Sl = {};
  function Nl(m, O, N) {
    (this.props = m),
      (this.context = O),
      (this.refs = Sl),
      (this.updater = N || ll);
  }
  (Nl.prototype.isReactComponent = {}),
    (Nl.prototype.setState = function (m, O) {
      if (typeof m != "object" && typeof m != "function" && m != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, m, O, "setState");
    }),
    (Nl.prototype.forceUpdate = function (m) {
      this.updater.enqueueForceUpdate(this, m, "forceUpdate");
    });
  function bt() {}
  bt.prototype = Nl.prototype;
  function gl(m, O, N) {
    (this.props = m),
      (this.context = O),
      (this.refs = Sl),
      (this.updater = N || ll);
  }
  var yl = (gl.prototype = new bt());
  (yl.constructor = gl), _l(yl, Nl.prototype), (yl.isPureReactComponent = !0);
  var Cl = Array.isArray;
  function Ll() {}
  var I = { H: null, A: null, T: null, S: null },
    xl = Object.prototype.hasOwnProperty;
  function _t(m, O, N) {
    var q = N.ref;
    return {
      $$typeof: o,
      type: m,
      key: O,
      ref: q !== void 0 ? q : null,
      props: N,
    };
  }
  function Zu(m, O) {
    return _t(m.type, O, m.props);
  }
  function Ot(m) {
    return typeof m == "object" && m !== null && m.$$typeof === o;
  }
  function Vl(m) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      m.replace(/[=:]/g, function (N) {
        return O[N];
      })
    );
  }
  var Eu = /\/+/g;
  function Nt(m, O) {
    return typeof m == "object" && m !== null && m.key != null
      ? Vl("" + m.key)
      : O.toString(36);
  }
  function Et(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (
          (typeof m.status == "string"
            ? m.then(Ll, Ll)
            : ((m.status = "pending"),
              m.then(
                function (O) {
                  m.status === "pending" &&
                    ((m.status = "fulfilled"), (m.value = O));
                },
                function (O) {
                  m.status === "pending" &&
                    ((m.status = "rejected"), (m.reason = O));
                }
              )),
          m.status)
        ) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function z(m, O, N, q, x) {
    var w = typeof m;
    (w === "undefined" || w === "boolean") && (m = null);
    var el = !1;
    if (m === null) el = !0;
    else
      switch (w) {
        case "bigint":
        case "string":
        case "number":
          el = !0;
          break;
        case "object":
          switch (m.$$typeof) {
            case o:
            case v:
              el = !0;
              break;
            case X:
              return (el = m._init), z(el(m._payload), O, N, q, x);
          }
      }
    if (el)
      return (
        (x = x(m)),
        (el = q === "" ? "." + Nt(m, 0) : q),
        Cl(x)
          ? ((N = ""),
            el != null && (N = el.replace(Eu, "$&/") + "/"),
            z(x, O, N, "", function (Da) {
              return Da;
            }))
          : x != null &&
            (Ot(x) &&
              (x = Zu(
                x,
                N +
                  (x.key == null || (m && m.key === x.key)
                    ? ""
                    : ("" + x.key).replace(Eu, "$&/") + "/") +
                  el
              )),
            O.push(x)),
        1
      );
    el = 0;
    var Ql = q === "" ? "." : q + ":";
    if (Cl(m))
      for (var Tl = 0; Tl < m.length; Tl++)
        (q = m[Tl]), (w = Ql + Nt(q, Tl)), (el += z(q, O, N, w, x));
    else if (((Tl = J(m)), typeof Tl == "function"))
      for (m = Tl.call(m), Tl = 0; !(q = m.next()).done; )
        (q = q.value), (w = Ql + Nt(q, Tl++)), (el += z(q, O, N, w, x));
    else if (w === "object") {
      if (typeof m.then == "function") return z(Et(m), O, N, q, x);
      throw (
        ((O = String(m)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(m).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return el;
  }
  function U(m, O, N) {
    if (m == null) return m;
    var q = [],
      x = 0;
    return (
      z(m, q, "", "", function (w) {
        return O.call(N, w, x++);
      }),
      q
    );
  }
  function Z(m) {
    if (m._status === -1) {
      var O = m._result;
      (O = O()),
        O.then(
          function (N) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 1), (m._result = N));
          },
          function (N) {
            (m._status === 0 || m._status === -1) &&
              ((m._status = 2), (m._result = N));
          }
        ),
        m._status === -1 && ((m._status = 0), (m._result = O));
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var cl =
      typeof reportError == "function"
        ? reportError
        : function (m) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var O = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof m == "object" &&
                  m !== null &&
                  typeof m.message == "string"
                    ? String(m.message)
                    : String(m),
                error: m,
              });
              if (!window.dispatchEvent(O)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", m);
              return;
            }
            console.error(m);
          },
    ml = {
      map: U,
      forEach: function (m, O, N) {
        U(
          m,
          function () {
            O.apply(this, arguments);
          },
          N
        );
      },
      count: function (m) {
        var O = 0;
        return (
          U(m, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (m) {
        return (
          U(m, function (O) {
            return O;
          }) || []
        );
      },
      only: function (m) {
        if (!Ot(m))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return m;
      },
    };
  return (
    (L.Activity = p),
    (L.Children = ml),
    (L.Component = Nl),
    (L.Fragment = b),
    (L.Profiler = D),
    (L.PureComponent = gl),
    (L.StrictMode = i),
    (L.Suspense = M),
    (L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (L.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (m) {
        return I.H.useMemoCache(m);
      },
    }),
    (L.cache = function (m) {
      return function () {
        return m.apply(null, arguments);
      };
    }),
    (L.cacheSignal = function () {
      return null;
    }),
    (L.cloneElement = function (m, O, N) {
      if (m == null)
        throw Error(
          "The argument must be a React element, but you passed " + m + "."
        );
      var q = _l({}, m.props),
        x = m.key;
      if (O != null)
        for (w in (O.key !== void 0 && (x = "" + O.key), O))
          !xl.call(O, w) ||
            w === "key" ||
            w === "__self" ||
            w === "__source" ||
            (w === "ref" && O.ref === void 0) ||
            (q[w] = O[w]);
      var w = arguments.length - 2;
      if (w === 1) q.children = N;
      else if (1 < w) {
        for (var el = Array(w), Ql = 0; Ql < w; Ql++)
          el[Ql] = arguments[Ql + 2];
        q.children = el;
      }
      return _t(m.type, x, q);
    }),
    (L.createContext = function (m) {
      return (
        (m = {
          $$typeof: j,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (m.Provider = m),
        (m.Consumer = { $$typeof: H, _context: m }),
        m
      );
    }),
    (L.createElement = function (m, O, N) {
      var q,
        x = {},
        w = null;
      if (O != null)
        for (q in (O.key !== void 0 && (w = "" + O.key), O))
          xl.call(O, q) &&
            q !== "key" &&
            q !== "__self" &&
            q !== "__source" &&
            (x[q] = O[q]);
      var el = arguments.length - 2;
      if (el === 1) x.children = N;
      else if (1 < el) {
        for (var Ql = Array(el), Tl = 0; Tl < el; Tl++)
          Ql[Tl] = arguments[Tl + 2];
        x.children = Ql;
      }
      if (m && m.defaultProps)
        for (q in ((el = m.defaultProps), el))
          x[q] === void 0 && (x[q] = el[q]);
      return _t(m, w, x);
    }),
    (L.createRef = function () {
      return { current: null };
    }),
    (L.forwardRef = function (m) {
      return { $$typeof: Q, render: m };
    }),
    (L.isValidElement = Ot),
    (L.lazy = function (m) {
      return { $$typeof: X, _payload: { _status: -1, _result: m }, _init: Z };
    }),
    (L.memo = function (m, O) {
      return { $$typeof: g, type: m, compare: O === void 0 ? null : O };
    }),
    (L.startTransition = function (m) {
      var O = I.T,
        N = {};
      I.T = N;
      try {
        var q = m(),
          x = I.S;
        x !== null && x(N, q),
          typeof q == "object" &&
            q !== null &&
            typeof q.then == "function" &&
            q.then(Ll, cl);
      } catch (w) {
        cl(w);
      } finally {
        O !== null && N.types !== null && (O.types = N.types), (I.T = O);
      }
    }),
    (L.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (L.use = function (m) {
      return I.H.use(m);
    }),
    (L.useActionState = function (m, O, N) {
      return I.H.useActionState(m, O, N);
    }),
    (L.useCallback = function (m, O) {
      return I.H.useCallback(m, O);
    }),
    (L.useContext = function (m) {
      return I.H.useContext(m);
    }),
    (L.useDebugValue = function () {}),
    (L.useDeferredValue = function (m, O) {
      return I.H.useDeferredValue(m, O);
    }),
    (L.useEffect = function (m, O) {
      return I.H.useEffect(m, O);
    }),
    (L.useEffectEvent = function (m) {
      return I.H.useEffectEvent(m);
    }),
    (L.useId = function () {
      return I.H.useId();
    }),
    (L.useImperativeHandle = function (m, O, N) {
      return I.H.useImperativeHandle(m, O, N);
    }),
    (L.useInsertionEffect = function (m, O) {
      return I.H.useInsertionEffect(m, O);
    }),
    (L.useLayoutEffect = function (m, O) {
      return I.H.useLayoutEffect(m, O);
    }),
    (L.useMemo = function (m, O) {
      return I.H.useMemo(m, O);
    }),
    (L.useOptimistic = function (m, O) {
      return I.H.useOptimistic(m, O);
    }),
    (L.useReducer = function (m, O, N) {
      return I.H.useReducer(m, O, N);
    }),
    (L.useRef = function (m) {
      return I.H.useRef(m);
    }),
    (L.useState = function (m) {
      return I.H.useState(m);
    }),
    (L.useSyncExternalStore = function (m, O, N) {
      return I.H.useSyncExternalStore(m, O, N);
    }),
    (L.useTransition = function () {
      return I.H.useTransition();
    }),
    (L.version = "19.2.0"),
    L
  );
}
var By;
function Oi() {
  return By || ((By = 1), (hi.exports = Ch())), hi.exports;
}
var di = { exports: {} },
  Xl = {};
var Yy;
function qh() {
  if (Yy) return Xl;
  Yy = 1;
  var o = Oi();
  function v(M) {
    var g = "https://react.dev/errors/" + M;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++)
        g += "&args[]=" + encodeURIComponent(arguments[X]);
    }
    return (
      "Minified React error #" +
      M +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function b() {}
  var i = {
      d: {
        f: b,
        r: function () {
          throw Error(v(522));
        },
        D: b,
        C: b,
        L: b,
        m: b,
        X: b,
        S: b,
        M: b,
      },
      p: 0,
      findDOMNode: null,
    },
    D = Symbol.for("react.portal");
  function H(M, g, X) {
    var p =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: D,
      key: p == null ? null : "" + p,
      children: M,
      containerInfo: g,
      implementation: X,
    };
  }
  var j = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Q(M, g) {
    if (M === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (Xl.createPortal = function (M, g) {
      var X =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(v(299));
      return H(M, g, null, X);
    }),
    (Xl.flushSync = function (M) {
      var g = j.T,
        X = i.p;
      try {
        if (((j.T = null), (i.p = 2), M)) return M();
      } finally {
        (j.T = g), (i.p = X), i.d.f();
      }
    }),
    (Xl.preconnect = function (M, g) {
      typeof M == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        i.d.C(M, g));
    }),
    (Xl.prefetchDNS = function (M) {
      typeof M == "string" && i.d.D(M);
    }),
    (Xl.preinit = function (M, g) {
      if (typeof M == "string" && g && typeof g.as == "string") {
        var X = g.as,
          p = Q(X, g.crossOrigin),
          C = typeof g.integrity == "string" ? g.integrity : void 0,
          J = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        X === "style"
          ? i.d.S(M, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: p,
              integrity: C,
              fetchPriority: J,
            })
          : X === "script" &&
            i.d.X(M, {
              crossOrigin: p,
              integrity: C,
              fetchPriority: J,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Xl.preinitModule = function (M, g) {
      if (typeof M == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var X = Q(g.as, g.crossOrigin);
            i.d.M(M, {
              crossOrigin: X,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && i.d.M(M);
    }),
    (Xl.preload = function (M, g) {
      if (
        typeof M == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var X = g.as,
          p = Q(X, g.crossOrigin);
        i.d.L(M, X, {
          crossOrigin: p,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Xl.preloadModule = function (M, g) {
      if (typeof M == "string")
        if (g) {
          var X = Q(g.as, g.crossOrigin);
          i.d.m(M, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: X,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else i.d.m(M);
    }),
    (Xl.requestFormReset = function (M) {
      i.d.r(M);
    }),
    (Xl.unstable_batchedUpdates = function (M, g) {
      return M(g);
    }),
    (Xl.useFormState = function (M, g, X) {
      return j.H.useFormState(M, g, X);
    }),
    (Xl.useFormStatus = function () {
      return j.H.useHostTransitionStatus();
    }),
    (Xl.version = "19.2.0"),
    Xl
  );
}
var jy;
function Bh() {
  if (jy) return di.exports;
  jy = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (v) {
        console.error(v);
      }
  }
  return o(), (di.exports = qh()), di.exports;
}
var Gy;
function Yh() {
  if (Gy) return Te;
  Gy = 1;
  var o = Rh(),
    v = Oi(),
    b = Bh();
  function i(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function D(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function H(l) {
    var t = l,
      u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (u = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function j(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Q(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function M(l) {
    if (H(l) !== l) throw Error(i(188));
  }
  function g(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = H(l)), t === null)) throw Error(i(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((a = e.return), a !== null)) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return M(e), l;
          if (n === a) return M(e), t;
          n = n.sibling;
        }
        throw Error(i(188));
      }
      if (u.return !== a.return) (u = e), (a = n);
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            (f = !0), (u = e), (a = n);
            break;
          }
          if (c === a) {
            (f = !0), (a = e), (u = n);
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              (f = !0), (u = n), (a = e);
              break;
            }
            if (c === a) {
              (f = !0), (a = n), (u = e);
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(i(189));
        }
      }
      if (u.alternate !== a) throw Error(i(190));
    }
    if (u.tag !== 3) throw Error(i(188));
    return u.stateNode.current === u ? l : t;
  }
  function X(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = X(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var p = Object.assign,
    C = Symbol.for("react.element"),
    J = Symbol.for("react.transitional.element"),
    ll = Symbol.for("react.portal"),
    _l = Symbol.for("react.fragment"),
    Sl = Symbol.for("react.strict_mode"),
    Nl = Symbol.for("react.profiler"),
    bt = Symbol.for("react.consumer"),
    gl = Symbol.for("react.context"),
    yl = Symbol.for("react.forward_ref"),
    Cl = Symbol.for("react.suspense"),
    Ll = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    xl = Symbol.for("react.lazy"),
    _t = Symbol.for("react.activity"),
    Zu = Symbol.for("react.memo_cache_sentinel"),
    Ot = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Ot && l[Ot]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Eu = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Eu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _l:
        return "Fragment";
      case Nl:
        return "Profiler";
      case Sl:
        return "StrictMode";
      case Cl:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case _t:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ll:
          return "Portal";
        case gl:
          return l.displayName || "Context";
        case bt:
          return (l._context.displayName || "Context") + ".Consumer";
        case yl:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case I:
          return (
            (t = l.displayName || null), t !== null ? t : Nt(l.type) || "Memo"
          );
        case xl:
          (t = l._payload), (l = l._init);
          try {
            return Nt(l(t));
          } catch {}
      }
    return null;
  }
  var Et = Array.isArray,
    z = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    cl = [],
    ml = -1;
  function m(l) {
    return { current: l };
  }
  function O(l) {
    0 > ml || ((l.current = cl[ml]), (cl[ml] = null), ml--);
  }
  function N(l, t) {
    ml++, (cl[ml] = l.current), (l.current = t);
  }
  var q = m(null),
    x = m(null),
    w = m(null),
    el = m(null);
  function Ql(l, t) {
    switch ((N(w, t), N(x, l), N(q, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? I0(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = I0(t)), (l = P0(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    O(q), N(q, l);
  }
  function Tl() {
    O(q), O(x), O(w);
  }
  function Da(l) {
    l.memoizedState !== null && N(el, l);
    var t = q.current,
      u = P0(t, l.type);
    t !== u && (N(x, l), N(q, u));
  }
  function _e(l) {
    x.current === l && (O(q), O(x)),
      el.current === l && (O(el), (re._currentValue = Z));
  }
  var Kn, Di;
  function Tu(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        (Kn = (t && t[1]) || ""),
          (Di =
            -1 <
            u.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < u.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Kn +
      l +
      Di
    );
  }
  var Jn = !1;
  function wn(l, t) {
    if (!l || Jn) return "";
    Jn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (E) {
                  var S = E;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (E) {
                  S = E;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                S = E;
              }
              (_ = l()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (E) {
            if (E && S && typeof E.stack == "string") return [E.stack, S.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        f = n[0],
        c = n[1];
      if (f && c) {
        var s = f.split(`
`),
          r = c.split(`
`);
        for (
          e = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; e < r.length && !r[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (a === s.length || e === r.length)
          for (
            a = s.length - 1, e = r.length - 1;
            1 <= a && 0 <= e && s[a] !== r[e];

          )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (s[a] !== r[e]) {
            if (a !== 1 || e !== 1)
              do
                if ((a--, e--, 0 > e || s[a] !== r[e])) {
                  var T =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", l.displayName)),
                    T
                  );
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      (Jn = !1), (Error.prepareStackTrace = u);
    }
    return (u = l ? l.displayName || l.name : "") ? Tu(u) : "";
  }
  function nm(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Tu(l.type);
      case 16:
        return Tu("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Tu("Suspense Fallback")
          : Tu("Suspense");
      case 19:
        return Tu("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Tu("Activity");
      default:
        return "";
    }
  }
  function pi(l) {
    try {
      var t = "",
        u = null;
      do (t += nm(l, u)), (u = l), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Wn = Object.prototype.hasOwnProperty,
    $n = o.unstable_scheduleCallback,
    Fn = o.unstable_cancelCallback,
    fm = o.unstable_shouldYield,
    cm = o.unstable_requestPaint,
    Il = o.unstable_now,
    im = o.unstable_getCurrentPriorityLevel,
    Ui = o.unstable_ImmediatePriority,
    Ni = o.unstable_UserBlockingPriority,
    Oe = o.unstable_NormalPriority,
    sm = o.unstable_LowPriority,
    Hi = o.unstable_IdlePriority,
    om = o.log,
    ym = o.unstable_setDisableYieldValue,
    pa = null,
    Pl = null;
  function $t(l) {
    if (
      (typeof om == "function" && ym(l),
      Pl && typeof Pl.setStrictMode == "function")
    )
      try {
        Pl.setStrictMode(pa, l);
      } catch {}
  }
  var lt = Math.clz32 ? Math.clz32 : hm,
    mm = Math.log,
    vm = Math.LN2;
  function hm(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((mm(l) / vm) | 0)) | 0;
  }
  var Me = 256,
    De = 262144,
    pe = 4194304;
  function zu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ue(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (e = zu(a))
            : ((f &= c),
              f !== 0
                ? (e = zu(f))
                : u || ((u = c & ~l), u !== 0 && (e = zu(u)))))
        : ((c = a & ~n),
          c !== 0
            ? (e = zu(c))
            : f !== 0
            ? (e = zu(f))
            : u || ((u = a & ~l), u !== 0 && (e = zu(u)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (u = t & -t),
          n >= u || (n === 32 && (u & 4194048) !== 0))
        ? t
        : e
    );
  }
  function Ua(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function dm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ri() {
    var l = pe;
    return (pe <<= 1), (pe & 62914560) === 0 && (pe = 4194304), l;
  }
  function kn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Na(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function rm(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    (l.pendingLanes = u),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= u),
      (l.entangledLanes &= u),
      (l.errorRecoveryDisabledLanes &= u),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      s = l.expirationTimes,
      r = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var T = 31 - lt(u),
        _ = 1 << T;
      (c[T] = 0), (s[T] = -1);
      var S = r[T];
      if (S !== null)
        for (r[T] = null, T = 0; T < S.length; T++) {
          var E = S[T];
          E !== null && (E.lane &= -536870913);
        }
      u &= ~_;
    }
    a !== 0 && Ci(l, a, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function Ci(l, t, u) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var a = 31 - lt(t);
    (l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (u & 261930));
  }
  function qi(l, t) {
    var u = (l.entangledLanes |= t);
    for (l = l.entanglements; u; ) {
      var a = 31 - lt(u),
        e = 1 << a;
      (e & t) | (l[a] & t) && (l[a] |= t), (u &= ~e);
    }
  }
  function Bi(l, t) {
    var u = t & -t;
    return (
      (u = (u & 42) !== 0 ? 1 : In(u)),
      (u & (l.suspendedLanes | t)) !== 0 ? 0 : u
    );
  }
  function In(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Pn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Yi() {
    var l = U.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : zy(l.type));
  }
  function ji(l, t) {
    var u = U.p;
    try {
      return (U.p = l), t();
    } finally {
      U.p = u;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    ql = "__reactFiber$" + Ft,
    Kl = "__reactProps$" + Ft,
    Lu = "__reactContainer$" + Ft,
    lf = "__reactEvents$" + Ft,
    Sm = "__reactListeners$" + Ft,
    gm = "__reactHandles$" + Ft,
    Gi = "__reactResources$" + Ft,
    Ha = "__reactMarker$" + Ft;
  function tf(l) {
    delete l[ql], delete l[Kl], delete l[lf], delete l[Sm], delete l[gm];
  }
  function xu(l) {
    var t = l[ql];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if ((t = u[Lu] || u[ql])) {
        if (
          ((u = t.alternate),
          t.child !== null || (u !== null && u.child !== null))
        )
          for (l = fy(l); l !== null; ) {
            if ((u = l[ql])) return u;
            l = fy(l);
          }
        return t;
      }
      (l = u), (u = l.parentNode);
    }
    return null;
  }
  function Vu(l) {
    if ((l = l[ql] || l[Lu])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ra(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(i(33));
  }
  function Ku(l) {
    var t = l[Gi];
    return (
      t ||
        (t = l[Gi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Hl(l) {
    l[Ha] = !0;
  }
  var Xi = new Set(),
    Qi = {};
  function Au(l, t) {
    Ju(l, t), Ju(l + "Capture", t);
  }
  function Ju(l, t) {
    for (Qi[l] = t, l = 0; l < t.length; l++) Xi.add(t[l]);
  }
  var bm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Zi = {},
    Li = {};
  function Em(l) {
    return Wn.call(Li, l)
      ? !0
      : Wn.call(Zi, l)
      ? !1
      : bm.test(l)
      ? (Li[l] = !0)
      : ((Zi[l] = !0), !1);
  }
  function Ne(l, t, u) {
    if (Em(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function He(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Ht(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function st(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function xi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Tm(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (f) {
            (u = "" + f), n.call(this, f);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (f) {
            u = "" + f;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function uf(l) {
    if (!l._valueTracker) {
      var t = xi(l) ? "checked" : "value";
      l._valueTracker = Tm(l, t, "" + l[t]);
    }
  }
  function Vi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(),
      a = "";
    return (
      l && (a = xi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== u ? (t.setValue(l), !0) : !1
    );
  }
  function Re(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var zm = /[\n"\\]/g;
  function ot(l) {
    return l.replace(zm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function af(l, t, u, a, e, n, f, c) {
    (l.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.type = f)
        : l.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + st(t))
          : l.value !== "" + st(t) && (l.value = "" + st(t))
        : (f !== "submit" && f !== "reset") || l.removeAttribute("value"),
      t != null
        ? ef(l, f, st(t))
        : u != null
        ? ef(l, f, st(u))
        : a != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + st(c))
        : l.removeAttribute("name");
  }
  function Ki(l, t, u, a, e, n, f, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || u != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        uf(l);
        return;
      }
      (u = u != null ? "" + st(u) : ""),
        (t = t != null ? "" + st(t) : u),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (a = a ?? e),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (l.name = f),
      uf(l);
  }
  function ef(l, t, u) {
    (t === "number" && Re(l.ownerDocument) === l) ||
      l.defaultValue === "" + u ||
      (l.defaultValue = "" + u);
  }
  function wu(l, t, u, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < u.length; e++) t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        (e = t.hasOwnProperty("$" + l[u].value)),
          l[u].selected !== e && (l[u].selected = e),
          e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + st(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          (l[e].selected = !0), a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ji(l, t, u) {
    if (
      t != null &&
      ((t = "" + st(t)), t !== l.value && (l.value = t), u == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + st(u) : "";
  }
  function wi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(i(92));
        if (Et(a)) {
          if (1 < a.length) throw Error(i(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), (t = u);
    }
    (u = st(t)),
      (l.defaultValue = u),
      (a = l.textContent),
      a === u && a !== "" && a !== null && (l.value = a),
      uf(l);
  }
  function Wu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Am = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : a
      ? l.setProperty(t, u)
      : typeof u != "number" || u === 0 || Am.has(t)
      ? t === "float"
        ? (l.cssFloat = u)
        : (l[t] = ("" + u).trim())
      : (l[t] = u + "px");
  }
  function $i(l, t, u) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((l = l.style), u != null)) {
      for (var a in u)
        !u.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
            ? (l.cssFloat = "")
            : (l[a] = ""));
      for (var e in t)
        (a = t[e]), t.hasOwnProperty(e) && u[e] !== a && Wi(l, e, a);
    } else for (var n in t) t.hasOwnProperty(n) && Wi(l, n, t[n]);
  }
  function nf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _m = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Om =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ce(l) {
    return Om.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Rt() {}
  var ff = null;
  function cf(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var $u = null,
    Fu = null;
  function Fi(l) {
    var t = Vu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Kl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (af(
              l,
              u.value,
              u.defaultValue,
              u.defaultValue,
              u.checked,
              u.defaultChecked,
              u.type,
              u.name
            ),
            (t = u.name),
            u.type === "radio" && t != null)
          ) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (
              u = u.querySelectorAll(
                'input[name="' + ot("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < u.length;
              t++
            ) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Kl] || null;
                if (!e) throw Error(i(90));
                af(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              (a = u[t]), a.form === l.form && Vi(a);
          }
          break l;
        case "textarea":
          Ji(l, u.value, u.defaultValue);
          break l;
        case "select":
          (t = u.value), t != null && wu(l, !!u.multiple, t, !1);
      }
    }
  }
  var sf = !1;
  function ki(l, t, u) {
    if (sf) return l(t, u);
    sf = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((sf = !1),
        ($u !== null || Fu !== null) &&
          (Tn(), $u && ((t = $u), (l = Fu), (Fu = $u = null), Fi(t), l)))
      )
        for (t = 0; t < l.length; t++) Fi(l[t]);
    }
  }
  function Ca(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Kl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(i(231, t, typeof u));
    return u;
  }
  var Ct = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    of = !1;
  if (Ct)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function () {
          of = !0;
        },
      }),
        window.addEventListener("test", qa, qa),
        window.removeEventListener("test", qa, qa);
    } catch {
      of = !1;
    }
  var kt = null,
    yf = null,
    qe = null;
  function Ii() {
    if (qe) return qe;
    var l,
      t = yf,
      u = t.length,
      a,
      e = "value" in kt ? kt.value : kt.textContent,
      n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++);
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++);
    return (qe = e.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Be(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ye() {
    return !0;
  }
  function Pi() {
    return !1;
  }
  function Jl(l) {
    function t(u, a, e, n, f) {
      (this._reactName = u),
        (this._targetInst = e),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((u = l[c]), (this[c] = u ? u(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ye
          : Pi),
        (this.isPropagationStopped = Pi),
        this
      );
    }
    return (
      p(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var u = this.nativeEvent;
          u &&
            (u.preventDefault
              ? u.preventDefault()
              : typeof u.returnValue != "unknown" && (u.returnValue = !1),
            (this.isDefaultPrevented = Ye));
        },
        stopPropagation: function () {
          var u = this.nativeEvent;
          u &&
            (u.stopPropagation
              ? u.stopPropagation()
              : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0),
            (this.isPropagationStopped = Ye));
        },
        persist: function () {},
        isPersistent: Ye,
      }),
      t
    );
  }
  var _u = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    je = Jl(_u),
    Ba = p({}, _u, { view: 0, detail: 0 }),
    Mm = Jl(Ba),
    mf,
    vf,
    Ya,
    Ge = p({}, Ba, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: df,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ya &&
              (Ya && l.type === "mousemove"
                ? ((mf = l.screenX - Ya.screenX), (vf = l.screenY - Ya.screenY))
                : (vf = mf = 0),
              (Ya = l)),
            mf);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : vf;
      },
    }),
    ls = Jl(Ge),
    Dm = p({}, Ge, { dataTransfer: 0 }),
    pm = Jl(Dm),
    Um = p({}, Ba, { relatedTarget: 0 }),
    hf = Jl(Um),
    Nm = p({}, _u, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hm = Jl(Nm),
    Rm = p({}, _u, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Cm = Jl(Rm),
    qm = p({}, _u, { data: 0 }),
    ts = Jl(qm),
    Bm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ym = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    jm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Gm(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = jm[l])
      ? !!t[l]
      : !1;
  }
  function df() {
    return Gm;
  }
  var Xm = p({}, Ba, {
      key: function (l) {
        if (l.key) {
          var t = Bm[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Be(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Ym[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: df,
      charCode: function (l) {
        return l.type === "keypress" ? Be(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Be(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Qm = Jl(Xm),
    Zm = p({}, Ge, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    us = Jl(Zm),
    Lm = p({}, Ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: df,
    }),
    xm = Jl(Lm),
    Vm = p({}, _u, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Km = Jl(Vm),
    Jm = p({}, Ge, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    wm = Jl(Jm),
    Wm = p({}, _u, { newState: 0, oldState: 0 }),
    $m = Jl(Wm),
    Fm = [9, 13, 27, 32],
    rf = Ct && "CompositionEvent" in window,
    ja = null;
  Ct && "documentMode" in document && (ja = document.documentMode);
  var km = Ct && "TextEvent" in window && !ja,
    as = Ct && (!rf || (ja && 8 < ja && 11 >= ja)),
    es = " ",
    ns = !1;
  function fs(l, t) {
    switch (l) {
      case "keyup":
        return Fm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function cs(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function Im(l, t) {
    switch (l) {
      case "compositionend":
        return cs(t);
      case "keypress":
        return t.which !== 32 ? null : ((ns = !0), es);
      case "textInput":
        return (l = t.data), l === es && ns ? null : l;
      default:
        return null;
    }
  }
  function Pm(l, t) {
    if (ku)
      return l === "compositionend" || (!rf && fs(l, t))
        ? ((l = Ii()), (qe = yf = kt = null), (ku = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return as && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function is(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!lv[l.type] : t === "textarea";
  }
  function ss(l, t, u, a) {
    $u ? (Fu ? Fu.push(a) : (Fu = [a])) : ($u = a),
      (t = pn(t, "onChange")),
      0 < t.length &&
        ((u = new je("onChange", "change", null, u, a)),
        l.push({ event: u, listeners: t }));
  }
  var Ga = null,
    Xa = null;
  function tv(l) {
    J0(l, 0);
  }
  function Xe(l) {
    var t = Ra(l);
    if (Vi(t)) return l;
  }
  function os(l, t) {
    if (l === "change") return t;
  }
  var ys = !1;
  if (Ct) {
    var Sf;
    if (Ct) {
      var gf = "oninput" in document;
      if (!gf) {
        var ms = document.createElement("div");
        ms.setAttribute("oninput", "return;"),
          (gf = typeof ms.oninput == "function");
      }
      Sf = gf;
    } else Sf = !1;
    ys = Sf && (!document.documentMode || 9 < document.documentMode);
  }
  function vs() {
    Ga && (Ga.detachEvent("onpropertychange", hs), (Xa = Ga = null));
  }
  function hs(l) {
    if (l.propertyName === "value" && Xe(Xa)) {
      var t = [];
      ss(t, Xa, l, cf(l)), ki(tv, t);
    }
  }
  function uv(l, t, u) {
    l === "focusin"
      ? (vs(), (Ga = t), (Xa = u), Ga.attachEvent("onpropertychange", hs))
      : l === "focusout" && vs();
  }
  function av(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Xe(Xa);
  }
  function ev(l, t) {
    if (l === "click") return Xe(t);
  }
  function nv(l, t) {
    if (l === "input" || l === "change") return Xe(t);
  }
  function fv(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var tt = typeof Object.is == "function" ? Object.is : fv;
  function Qa(l, t) {
    if (tt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var u = Object.keys(l),
      a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Wn.call(t, e) || !tt(l[e], t[e])) return !1;
    }
    return !0;
  }
  function ds(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function rs(l, t) {
    var u = ds(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (((a = l + u.textContent.length), l <= t && a >= t))
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ds(u);
    }
  }
  function Ss(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ss(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function gs(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Re(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Re(l.document);
    }
    return t;
  }
  function bf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var cv = Ct && "documentMode" in document && 11 >= document.documentMode,
    Iu = null,
    Ef = null,
    Za = null,
    Tf = !1;
  function bs(l, t, u) {
    var a =
      u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Tf ||
      Iu == null ||
      Iu !== Re(a) ||
      ((a = Iu),
      "selectionStart" in a && bf(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Za && Qa(Za, a)) ||
        ((Za = a),
        (a = pn(Ef, "onSelect")),
        0 < a.length &&
          ((t = new je("onSelect", "select", null, t, u)),
          l.push({ event: t, listeners: a }),
          (t.target = Iu))));
  }
  function Ou(l, t) {
    var u = {};
    return (
      (u[l.toLowerCase()] = t.toLowerCase()),
      (u["Webkit" + l] = "webkit" + t),
      (u["Moz" + l] = "moz" + t),
      u
    );
  }
  var Pu = {
      animationend: Ou("Animation", "AnimationEnd"),
      animationiteration: Ou("Animation", "AnimationIteration"),
      animationstart: Ou("Animation", "AnimationStart"),
      transitionrun: Ou("Transition", "TransitionRun"),
      transitionstart: Ou("Transition", "TransitionStart"),
      transitioncancel: Ou("Transition", "TransitionCancel"),
      transitionend: Ou("Transition", "TransitionEnd"),
    },
    zf = {},
    Es = {};
  Ct &&
    ((Es = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Pu.animationend.animation,
      delete Pu.animationiteration.animation,
      delete Pu.animationstart.animation),
    "TransitionEvent" in window || delete Pu.transitionend.transition);
  function Mu(l) {
    if (zf[l]) return zf[l];
    if (!Pu[l]) return l;
    var t = Pu[l],
      u;
    for (u in t) if (t.hasOwnProperty(u) && u in Es) return (zf[l] = t[u]);
    return l;
  }
  var Ts = Mu("animationend"),
    zs = Mu("animationiteration"),
    As = Mu("animationstart"),
    iv = Mu("transitionrun"),
    sv = Mu("transitionstart"),
    ov = Mu("transitioncancel"),
    _s = Mu("transitionend"),
    Os = new Map(),
    Af =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Af.push("scrollEnd");
  function Tt(l, t) {
    Os.set(l, t), Au(t, [l]);
  }
  var Qe =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    yt = [],
    la = 0,
    _f = 0;
  function Ze() {
    for (var l = la, t = (_f = la = 0); t < l; ) {
      var u = yt[t];
      yt[t++] = null;
      var a = yt[t];
      yt[t++] = null;
      var e = yt[t];
      yt[t++] = null;
      var n = yt[t];
      if (((yt[t++] = null), a !== null && e !== null)) {
        var f = a.pending;
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
          (a.pending = e);
      }
      n !== 0 && Ms(u, e, n);
    }
  }
  function Le(l, t, u, a) {
    (yt[la++] = l),
      (yt[la++] = t),
      (yt[la++] = u),
      (yt[la++] = a),
      (_f |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a);
  }
  function Of(l, t, u, a) {
    return Le(l, t, u, a), xe(l);
  }
  function Du(l, t) {
    return Le(l, null, null, t), xe(l);
  }
  function Ms(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= u),
        (a = n.alternate),
        a !== null && (a.childLanes |= u),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - lt(u)),
          (l = n.hiddenUpdates),
          (a = l[e]),
          a === null ? (l[e] = [t]) : a.push(t),
          (t.lane = u | 536870912)),
        n)
      : null;
  }
  function xe(l) {
    if (50 < se) throw ((se = 0), (qc = null), Error(i(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function yv(l, t, u, a) {
    (this.tag = l),
      (this.key = u),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ut(l, t, u, a) {
    return new yv(l, t, u, a);
  }
  function Mf(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var u = l.alternate;
    return (
      u === null
        ? ((u = ut(l.tag, t, l.key, l.mode)),
          (u.elementType = l.elementType),
          (u.type = l.type),
          (u.stateNode = l.stateNode),
          (u.alternate = l),
          (l.alternate = u))
        : ((u.pendingProps = t),
          (u.type = l.type),
          (u.flags = 0),
          (u.subtreeFlags = 0),
          (u.deletions = null)),
      (u.flags = l.flags & 65011712),
      (u.childLanes = l.childLanes),
      (u.lanes = l.lanes),
      (u.child = l.child),
      (u.memoizedProps = l.memoizedProps),
      (u.memoizedState = l.memoizedState),
      (u.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (u.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (u.sibling = l.sibling),
      (u.index = l.index),
      (u.ref = l.ref),
      (u.refCleanup = l.refCleanup),
      u
    );
  }
  function Ds(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return (
      u === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = u.childLanes),
          (l.lanes = u.lanes),
          (l.child = u.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = u.memoizedProps),
          (l.memoizedState = u.memoizedState),
          (l.updateQueue = u.updateQueue),
          (l.type = u.type),
          (t = u.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ve(l, t, u, a, e, n) {
    var f = 0;
    if (((a = l), typeof l == "function")) Mf(l) && (f = 1);
    else if (typeof l == "string")
      f = rh(l, u, q.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case _t:
          return (l = ut(31, u, t, e)), (l.elementType = _t), (l.lanes = n), l;
        case _l:
          return pu(u.children, e, n, t);
        case Sl:
          (f = 8), (e |= 24);
          break;
        case Nl:
          return (
            (l = ut(12, u, t, e | 2)), (l.elementType = Nl), (l.lanes = n), l
          );
        case Cl:
          return (l = ut(13, u, t, e)), (l.elementType = Cl), (l.lanes = n), l;
        case Ll:
          return (l = ut(19, u, t, e)), (l.elementType = Ll), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case gl:
                f = 10;
                break l;
              case bt:
                f = 9;
                break l;
              case yl:
                f = 11;
                break l;
              case I:
                f = 14;
                break l;
              case xl:
                (f = 16), (a = null);
                break l;
            }
          (f = 29),
            (u = Error(i(130, l === null ? "null" : typeof l, ""))),
            (a = null);
      }
    return (
      (t = ut(f, u, t, e)), (t.elementType = l), (t.type = a), (t.lanes = n), t
    );
  }
  function pu(l, t, u, a) {
    return (l = ut(7, l, a, t)), (l.lanes = u), l;
  }
  function Df(l, t, u) {
    return (l = ut(6, l, null, t)), (l.lanes = u), l;
  }
  function ps(l) {
    var t = ut(18, null, null, 0);
    return (t.stateNode = l), t;
  }
  function pf(l, t, u) {
    return (
      (t = ut(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = u),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Us = new WeakMap();
  function mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = Us.get(l);
      return u !== void 0
        ? u
        : ((t = { value: l, source: t, stack: pi(t) }), Us.set(l, t), t);
    }
    return { value: l, source: t, stack: pi(t) };
  }
  var ua = [],
    aa = 0,
    Ke = null,
    La = 0,
    vt = [],
    ht = 0,
    It = null,
    Mt = 1,
    Dt = "";
  function Bt(l, t) {
    (ua[aa++] = La), (ua[aa++] = Ke), (Ke = l), (La = t);
  }
  function Ns(l, t, u) {
    (vt[ht++] = Mt), (vt[ht++] = Dt), (vt[ht++] = It), (It = l);
    var a = Mt;
    l = Dt;
    var e = 32 - lt(a) - 1;
    (a &= ~(1 << e)), (u += 1);
    var n = 32 - lt(t) + e;
    if (30 < n) {
      var f = e - (e % 5);
      (n = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (e -= f),
        (Mt = (1 << (32 - lt(t) + e)) | (u << e) | a),
        (Dt = n + l);
    } else (Mt = (1 << n) | (u << e) | a), (Dt = l);
  }
  function Uf(l) {
    l.return !== null && (Bt(l, 1), Ns(l, 1, 0));
  }
  function Nf(l) {
    for (; l === Ke; )
      (Ke = ua[--aa]), (ua[aa] = null), (La = ua[--aa]), (ua[aa] = null);
    for (; l === It; )
      (It = vt[--ht]),
        (vt[ht] = null),
        (Dt = vt[--ht]),
        (vt[ht] = null),
        (Mt = vt[--ht]),
        (vt[ht] = null);
  }
  function Hs(l, t) {
    (vt[ht++] = Mt),
      (vt[ht++] = Dt),
      (vt[ht++] = It),
      (Mt = t.id),
      (Dt = t.overflow),
      (It = l);
  }
  var Bl = null,
    hl = null,
    P = !1,
    Pt = null,
    dt = !1,
    Hf = Error(i(519));
  function lu(l) {
    var t = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (xa(mt(t, l)), Hf);
  }
  function Rs(l) {
    var t = l.stateNode,
      u = l.type,
      a = l.memoizedProps;
    switch (((t[ql] = l), (t[Kl] = a), u)) {
      case "dialog":
        $("cancel", t), $("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        $("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ye.length; u++) $(ye[u], t);
        break;
      case "source":
        $("error", t);
        break;
      case "img":
      case "image":
      case "link":
        $("error", t), $("load", t);
        break;
      case "details":
        $("toggle", t);
        break;
      case "input":
        $("invalid", t),
          Ki(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        $("invalid", t);
        break;
      case "textarea":
        $("invalid", t), wi(t, a.value, a.defaultValue, a.children);
    }
    (u = a.children),
      (typeof u != "string" && typeof u != "number" && typeof u != "bigint") ||
      t.textContent === "" + u ||
      a.suppressHydrationWarning === !0 ||
      F0(t.textContent, u)
        ? (a.popover != null && ($("beforetoggle", t), $("toggle", t)),
          a.onScroll != null && $("scroll", t),
          a.onScrollEnd != null && $("scrollend", t),
          a.onClick != null && (t.onclick = Rt),
          (t = !0))
        : (t = !1),
      t || lu(l, !0);
  }
  function Cs(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          dt = !1;
          return;
        case 27:
        case 3:
          dt = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function ea(l) {
    if (l !== Bl) return !1;
    if (!P) return Cs(l), (P = !0), !1;
    var t = l.tag,
      u;
    if (
      ((u = t !== 3 && t !== 27) &&
        ((u = t === 5) &&
          ((u = l.type),
          (u =
            !(u !== "form" && u !== "button") || $c(l.type, l.memoizedProps))),
        (u = !u)),
      u && hl && lu(l),
      Cs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(i(317));
      hl = ny(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(i(317));
      hl = ny(l);
    } else
      t === 27
        ? ((t = hl), hu(l.type) ? ((l = li), (li = null), (hl = l)) : (hl = t))
        : (hl = Bl ? St(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Uu() {
    (hl = Bl = null), (P = !1);
  }
  function Rf() {
    var l = Pt;
    return (
      l !== null &&
        (Fl === null ? (Fl = l) : Fl.push.apply(Fl, l), (Pt = null)),
      l
    );
  }
  function xa(l) {
    Pt === null ? (Pt = [l]) : Pt.push(l);
  }
  var Cf = m(null),
    Nu = null,
    Yt = null;
  function tu(l, t, u) {
    N(Cf, t._currentValue), (t._currentValue = u);
  }
  function jt(l) {
    (l._currentValue = Cf.current), O(Cf);
  }
  function qf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === u)
      )
        break;
      l = l.return;
    }
  }
  function Bf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var s = 0; s < t.length; s++)
            if (c.context === t[s]) {
              (n.lanes |= u),
                (c = n.alternate),
                c !== null && (c.lanes |= u),
                qf(n.return, u, l),
                a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (((f = e.return), f === null)) throw Error(i(341));
        (f.lanes |= u),
          (n = f.alternate),
          n !== null && (n.lanes |= u),
          qf(f, u, l),
          (f = null);
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (((e = f.sibling), e !== null)) {
            (e.return = f.return), (f = e);
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function na(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(i(387));
        if (((f = f.memoizedProps), f !== null)) {
          var c = e.type;
          tt(e.pendingProps.value, f.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (e === el.current) {
        if (((f = e.alternate), f === null)) throw Error(i(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(re) : (l = [re]));
      }
      e = e.return;
    }
    l !== null && Bf(t, l, u, a), (t.flags |= 262144);
  }
  function Je(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!tt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Hu(l) {
    (Nu = l),
      (Yt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Yl(l) {
    return qs(Nu, l);
  }
  function we(l, t) {
    return Nu === null && Hu(l), qs(l, t);
  }
  function qs(l, t) {
    var u = t._currentValue;
    if (((t = { context: t, memoizedValue: u, next: null }), Yt === null)) {
      if (l === null) throw Error(i(308));
      (Yt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Yt = Yt.next = t;
    return u;
  }
  var mv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (u, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (u) {
                  return u();
                });
            };
          },
    vv = o.unstable_scheduleCallback,
    hv = o.unstable_NormalPriority,
    Ol = {
      $$typeof: gl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Yf() {
    return { controller: new mv(), data: new Map(), refCount: 0 };
  }
  function Va(l) {
    l.refCount--,
      l.refCount === 0 &&
        vv(hv, function () {
          l.controller.abort();
        });
  }
  var Ka = null,
    jf = 0,
    fa = 0,
    ca = null;
  function dv(l, t) {
    if (Ka === null) {
      var u = (Ka = []);
      (jf = 0),
        (fa = Qc()),
        (ca = {
          status: "pending",
          value: void 0,
          then: function (a) {
            u.push(a);
          },
        });
    }
    return jf++, t.then(Bs, Bs), t;
  }
  function Bs() {
    if (--jf === 0 && Ka !== null) {
      ca !== null && (ca.status = "fulfilled");
      var l = Ka;
      (Ka = null), (fa = 0), (ca = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function rv(l, t) {
    var u = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          u.push(e);
        },
      };
    return (
      l.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var e = 0; e < u.length; e++) (0, u[e])(t);
        },
        function (e) {
          for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
            (0, u[e])(void 0);
        }
      ),
      a
    );
  }
  var Ys = z.S;
  z.S = function (l, t) {
    (E0 = Il()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        dv(l, t),
      Ys !== null && Ys(l, t);
  };
  var Ru = m(null);
  function Gf() {
    var l = Ru.current;
    return l !== null ? l : vl.pooledCache;
  }
  function We(l, t) {
    t === null ? N(Ru, Ru.current) : N(Ru, t.pool);
  }
  function js() {
    var l = Gf();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var ia = Error(i(460)),
    Xf = Error(i(474)),
    $e = Error(i(542)),
    Fe = { then: function () {} };
  function Gs(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Xs(l, t, u) {
    switch (
      ((u = l[u]),
      u === void 0 ? l.push(t) : u !== t && (t.then(Rt, Rt), (t = u)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Zs(l), l);
      default:
        if (typeof t.status == "string") t.then(Rt, Rt);
        else {
          if (((l = vl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(i(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Zs(l), l);
        }
        throw ((qu = t), ia);
    }
  }
  function Cu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function"
        ? ((qu = u), ia)
        : u;
    }
  }
  var qu = null;
  function Qs() {
    if (qu === null) throw Error(i(459));
    var l = qu;
    return (qu = null), l;
  }
  function Zs(l) {
    if (l === ia || l === $e) throw Error(i(483));
  }
  var sa = null,
    Ja = 0;
  function ke(l) {
    var t = Ja;
    return (Ja += 1), sa === null && (sa = []), Xs(sa, l, t);
  }
  function wa(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function Ie(l, t) {
    throw t.$$typeof === C
      ? Error(i(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function Ls(l) {
    function t(h, y) {
      if (l) {
        var d = h.deletions;
        d === null ? ((h.deletions = [y]), (h.flags |= 16)) : d.push(y);
      }
    }
    function u(h, y) {
      if (!l) return null;
      for (; y !== null; ) t(h, y), (y = y.sibling);
      return null;
    }
    function a(h) {
      for (var y = new Map(); h !== null; )
        h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
      return y;
    }
    function e(h, y) {
      return (h = qt(h, y)), (h.index = 0), (h.sibling = null), h;
    }
    function n(h, y, d) {
      return (
        (h.index = d),
        l
          ? ((d = h.alternate),
            d !== null
              ? ((d = d.index), d < y ? ((h.flags |= 67108866), y) : d)
              : ((h.flags |= 67108866), y))
          : ((h.flags |= 1048576), y)
      );
    }
    function f(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h;
    }
    function c(h, y, d, A) {
      return y === null || y.tag !== 6
        ? ((y = Df(d, h.mode, A)), (y.return = h), y)
        : ((y = e(y, d)), (y.return = h), y);
    }
    function s(h, y, d, A) {
      var Y = d.type;
      return Y === _l
        ? T(h, y, d.props.children, A, d.key)
        : y !== null &&
          (y.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === xl &&
              Cu(Y) === y.type))
        ? ((y = e(y, d.props)), wa(y, d), (y.return = h), y)
        : ((y = Ve(d.type, d.key, d.props, null, h.mode, A)),
          wa(y, d),
          (y.return = h),
          y);
    }
    function r(h, y, d, A) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== d.containerInfo ||
        y.stateNode.implementation !== d.implementation
        ? ((y = pf(d, h.mode, A)), (y.return = h), y)
        : ((y = e(y, d.children || [])), (y.return = h), y);
    }
    function T(h, y, d, A, Y) {
      return y === null || y.tag !== 7
        ? ((y = pu(d, h.mode, A, Y)), (y.return = h), y)
        : ((y = e(y, d)), (y.return = h), y);
    }
    function _(h, y, d) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return (y = Df("" + y, h.mode, d)), (y.return = h), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case J:
            return (
              (d = Ve(y.type, y.key, y.props, null, h.mode, d)),
              wa(d, y),
              (d.return = h),
              d
            );
          case ll:
            return (y = pf(y, h.mode, d)), (y.return = h), y;
          case xl:
            return (y = Cu(y)), _(h, y, d);
        }
        if (Et(y) || Vl(y))
          return (y = pu(y, h.mode, d, null)), (y.return = h), y;
        if (typeof y.then == "function") return _(h, ke(y), d);
        if (y.$$typeof === gl) return _(h, we(h, y), d);
        Ie(h, y);
      }
      return null;
    }
    function S(h, y, d, A) {
      var Y = y !== null ? y.key : null;
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return Y !== null ? null : c(h, y, "" + d, A);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case J:
            return d.key === Y ? s(h, y, d, A) : null;
          case ll:
            return d.key === Y ? r(h, y, d, A) : null;
          case xl:
            return (d = Cu(d)), S(h, y, d, A);
        }
        if (Et(d) || Vl(d)) return Y !== null ? null : T(h, y, d, A, null);
        if (typeof d.then == "function") return S(h, y, ke(d), A);
        if (d.$$typeof === gl) return S(h, y, we(h, d), A);
        Ie(h, d);
      }
      return null;
    }
    function E(h, y, d, A, Y) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (h = h.get(d) || null), c(y, h, "" + A, Y);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case J:
            return (
              (h = h.get(A.key === null ? d : A.key) || null), s(y, h, A, Y)
            );
          case ll:
            return (
              (h = h.get(A.key === null ? d : A.key) || null), r(y, h, A, Y)
            );
          case xl:
            return (A = Cu(A)), E(h, y, d, A, Y);
        }
        if (Et(A) || Vl(A)) return (h = h.get(d) || null), T(y, h, A, Y, null);
        if (typeof A.then == "function") return E(h, y, d, ke(A), Y);
        if (A.$$typeof === gl) return E(h, y, d, we(y, A), Y);
        Ie(y, A);
      }
      return null;
    }
    function R(h, y, d, A) {
      for (
        var Y = null, tl = null, B = y, K = (y = 0), k = null;
        B !== null && K < d.length;
        K++
      ) {
        B.index > K ? ((k = B), (B = null)) : (k = B.sibling);
        var ul = S(h, B, d[K], A);
        if (ul === null) {
          B === null && (B = k);
          break;
        }
        l && B && ul.alternate === null && t(h, B),
          (y = n(ul, y, K)),
          tl === null ? (Y = ul) : (tl.sibling = ul),
          (tl = ul),
          (B = k);
      }
      if (K === d.length) return u(h, B), P && Bt(h, K), Y;
      if (B === null) {
        for (; K < d.length; K++)
          (B = _(h, d[K], A)),
            B !== null &&
              ((y = n(B, y, K)),
              tl === null ? (Y = B) : (tl.sibling = B),
              (tl = B));
        return P && Bt(h, K), Y;
      }
      for (B = a(B); K < d.length; K++)
        (k = E(B, h, K, d[K], A)),
          k !== null &&
            (l && k.alternate !== null && B.delete(k.key === null ? K : k.key),
            (y = n(k, y, K)),
            tl === null ? (Y = k) : (tl.sibling = k),
            (tl = k));
      return (
        l &&
          B.forEach(function (bu) {
            return t(h, bu);
          }),
        P && Bt(h, K),
        Y
      );
    }
    function G(h, y, d, A) {
      if (d == null) throw Error(i(151));
      for (
        var Y = null, tl = null, B = y, K = (y = 0), k = null, ul = d.next();
        B !== null && !ul.done;
        K++, ul = d.next()
      ) {
        B.index > K ? ((k = B), (B = null)) : (k = B.sibling);
        var bu = S(h, B, ul.value, A);
        if (bu === null) {
          B === null && (B = k);
          break;
        }
        l && B && bu.alternate === null && t(h, B),
          (y = n(bu, y, K)),
          tl === null ? (Y = bu) : (tl.sibling = bu),
          (tl = bu),
          (B = k);
      }
      if (ul.done) return u(h, B), P && Bt(h, K), Y;
      if (B === null) {
        for (; !ul.done; K++, ul = d.next())
          (ul = _(h, ul.value, A)),
            ul !== null &&
              ((y = n(ul, y, K)),
              tl === null ? (Y = ul) : (tl.sibling = ul),
              (tl = ul));
        return P && Bt(h, K), Y;
      }
      for (B = a(B); !ul.done; K++, ul = d.next())
        (ul = E(B, h, K, ul.value, A)),
          ul !== null &&
            (l &&
              ul.alternate !== null &&
              B.delete(ul.key === null ? K : ul.key),
            (y = n(ul, y, K)),
            tl === null ? (Y = ul) : (tl.sibling = ul),
            (tl = ul));
      return (
        l &&
          B.forEach(function (Dh) {
            return t(h, Dh);
          }),
        P && Bt(h, K),
        Y
      );
    }
    function ol(h, y, d, A) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === _l &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case J:
            l: {
              for (var Y = d.key; y !== null; ) {
                if (y.key === Y) {
                  if (((Y = d.type), Y === _l)) {
                    if (y.tag === 7) {
                      u(h, y.sibling),
                        (A = e(y, d.props.children)),
                        (A.return = h),
                        (h = A);
                      break l;
                    }
                  } else if (
                    y.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === xl &&
                      Cu(Y) === y.type)
                  ) {
                    u(h, y.sibling),
                      (A = e(y, d.props)),
                      wa(A, d),
                      (A.return = h),
                      (h = A);
                    break l;
                  }
                  u(h, y);
                  break;
                } else t(h, y);
                y = y.sibling;
              }
              d.type === _l
                ? ((A = pu(d.props.children, h.mode, A, d.key)),
                  (A.return = h),
                  (h = A))
                : ((A = Ve(d.type, d.key, d.props, null, h.mode, A)),
                  wa(A, d),
                  (A.return = h),
                  (h = A));
            }
            return f(h);
          case ll:
            l: {
              for (Y = d.key; y !== null; ) {
                if (y.key === Y)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === d.containerInfo &&
                    y.stateNode.implementation === d.implementation
                  ) {
                    u(h, y.sibling),
                      (A = e(y, d.children || [])),
                      (A.return = h),
                      (h = A);
                    break l;
                  } else {
                    u(h, y);
                    break;
                  }
                else t(h, y);
                y = y.sibling;
              }
              (A = pf(d, h.mode, A)), (A.return = h), (h = A);
            }
            return f(h);
          case xl:
            return (d = Cu(d)), ol(h, y, d, A);
        }
        if (Et(d)) return R(h, y, d, A);
        if (Vl(d)) {
          if (((Y = Vl(d)), typeof Y != "function")) throw Error(i(150));
          return (d = Y.call(d)), G(h, y, d, A);
        }
        if (typeof d.then == "function") return ol(h, y, ke(d), A);
        if (d.$$typeof === gl) return ol(h, y, we(h, d), A);
        Ie(h, d);
      }
      return (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
        ? ((d = "" + d),
          y !== null && y.tag === 6
            ? (u(h, y.sibling), (A = e(y, d)), (A.return = h), (h = A))
            : (u(h, y), (A = Df(d, h.mode, A)), (A.return = h), (h = A)),
          f(h))
        : u(h, y);
    }
    return function (h, y, d, A) {
      try {
        Ja = 0;
        var Y = ol(h, y, d, A);
        return (sa = null), Y;
      } catch (B) {
        if (B === ia || B === $e) throw B;
        var tl = ut(29, B, null, h.mode);
        return (tl.lanes = A), (tl.return = h), tl;
      } finally {
      }
    };
  }
  var Bu = Ls(!0),
    xs = Ls(!1),
    uu = !1;
  function Qf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Zf(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function au(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function eu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (al & 2) !== 0)) {
      var e = a.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (a.pending = t),
        (t = xe(l)),
        Ms(l, null, u),
        t
      );
    }
    return Le(l, a, t, u), xe(l);
  }
  function Wa(l, t, u) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (u & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), qi(l, u);
    }
  }
  function Lf(l, t) {
    var u = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), u === a)) {
      var e = null,
        n = null;
      if (((u = u.firstBaseUpdate), u !== null)) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = f) : (n = n.next = f), (u = u.next);
        } while (u !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = u);
      return;
    }
    (l = u.lastBaseUpdate),
      l === null ? (u.firstBaseUpdate = t) : (l.next = t),
      (u.lastBaseUpdate = t);
  }
  var xf = !1;
  function $a() {
    if (xf) {
      var l = ca;
      if (l !== null) throw l;
    }
  }
  function Fa(l, t, u, a) {
    xf = !1;
    var e = l.updateQueue;
    uu = !1;
    var n = e.firstBaseUpdate,
      f = e.lastBaseUpdate,
      c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var s = c,
        r = s.next;
      (s.next = null), f === null ? (n = r) : (f.next = r), (f = s);
      var T = l.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (c = T.lastBaseUpdate),
        c !== f &&
          (c === null ? (T.firstBaseUpdate = r) : (c.next = r),
          (T.lastBaseUpdate = s)));
    }
    if (n !== null) {
      var _ = e.baseState;
      (f = 0), (T = r = s = null), (c = n);
      do {
        var S = c.lane & -536870913,
          E = S !== c.lane;
        if (E ? (F & S) === S : (a & S) === S) {
          S !== 0 && S === fa && (xf = !0),
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var R = l,
              G = c;
            S = t;
            var ol = u;
            switch (G.tag) {
              case 1:
                if (((R = G.payload), typeof R == "function")) {
                  _ = R.call(ol, _, S);
                  break l;
                }
                _ = R;
                break l;
              case 3:
                R.flags = (R.flags & -65537) | 128;
              case 0:
                if (
                  ((R = G.payload),
                  (S = typeof R == "function" ? R.call(ol, _, S) : R),
                  S == null)
                )
                  break l;
                _ = p({}, _, S);
                break l;
              case 2:
                uu = !0;
            }
          }
          (S = c.callback),
            S !== null &&
              ((l.flags |= 64),
              E && (l.flags |= 8192),
              (E = e.callbacks),
              E === null ? (e.callbacks = [S]) : E.push(S));
        } else
          (E = {
            lane: S,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            T === null ? ((r = T = E), (s = _)) : (T = T.next = E),
            (f |= S);
        if (((c = c.next), c === null)) {
          if (((c = e.shared.pending), c === null)) break;
          (E = c),
            (c = E.next),
            (E.next = null),
            (e.lastBaseUpdate = E),
            (e.shared.pending = null);
        }
      } while (!0);
      T === null && (s = _),
        (e.baseState = s),
        (e.firstBaseUpdate = r),
        (e.lastBaseUpdate = T),
        n === null && (e.shared.lanes = 0),
        (su |= f),
        (l.lanes = f),
        (l.memoizedState = _);
    }
  }
  function Vs(l, t) {
    if (typeof l != "function") throw Error(i(191, l));
    l.call(t);
  }
  function Ks(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++) Vs(u[l], t);
  }
  var oa = m(null),
    Pe = m(0);
  function Js(l, t) {
    (l = Jt), N(Pe, l), N(oa, t), (Jt = l | t.baseLanes);
  }
  function Vf() {
    N(Pe, Jt), N(oa, oa.current);
  }
  function Kf() {
    (Jt = Pe.current), O(oa), O(Pe);
  }
  var at = m(null),
    rt = null;
  function nu(l) {
    var t = l.alternate;
    N(zl, zl.current & 1),
      N(at, l),
      rt === null &&
        (t === null || oa.current !== null || t.memoizedState !== null) &&
        (rt = l);
  }
  function Jf(l) {
    N(zl, zl.current), N(at, l), rt === null && (rt = l);
  }
  function ws(l) {
    l.tag === 22
      ? (N(zl, zl.current), N(at, l), rt === null && (rt = l))
      : fu();
  }
  function fu() {
    N(zl, zl.current), N(at, at.current);
  }
  function et(l) {
    O(at), rt === l && (rt = null), O(zl);
  }
  var zl = m(0);
  function ln(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && ((u = u.dehydrated), u === null || Ic(u) || Pc(u)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Gt = 0,
    V = null,
    il = null,
    Ml = null,
    tn = !1,
    ya = !1,
    Yu = !1,
    un = 0,
    ka = 0,
    ma = null,
    Sv = 0;
  function bl() {
    throw Error(i(321));
  }
  function wf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!tt(l[u], t[u])) return !1;
    return !0;
  }
  function Wf(l, t, u, a, e, n) {
    return (
      (Gt = n),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = l === null || l.memoizedState === null ? Ho : sc),
      (Yu = !1),
      (n = u(a, e)),
      (Yu = !1),
      ya && (n = $s(t, u, a, e)),
      Ws(l),
      n
    );
  }
  function Ws(l) {
    z.H = le;
    var t = il !== null && il.next !== null;
    if (((Gt = 0), (Ml = il = V = null), (tn = !1), (ka = 0), (ma = null), t))
      throw Error(i(300));
    l === null ||
      Dl ||
      ((l = l.dependencies), l !== null && Je(l) && (Dl = !0));
  }
  function $s(l, t, u, a) {
    V = l;
    var e = 0;
    do {
      if ((ya && (ma = null), (ka = 0), (ya = !1), 25 <= e))
        throw Error(i(301));
      if (((e += 1), (Ml = il = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (z.H = Ro), (n = t(u, a));
    } while (ya);
    return n;
  }
  function gv() {
    var l = z.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ia(t) : t),
      (l = l.useState()[0]),
      (il !== null ? il.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function $f() {
    var l = un !== 0;
    return (un = 0), l;
  }
  function Ff(l, t, u) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~u);
  }
  function kf(l) {
    if (tn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      tn = !1;
    }
    (Gt = 0), (Ml = il = V = null), (ya = !1), (ka = un = 0), (ma = null);
  }
  function Zl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ml === null ? (V.memoizedState = Ml = l) : (Ml = Ml.next = l), Ml;
  }
  function Al() {
    if (il === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = il.next;
    var t = Ml === null ? V.memoizedState : Ml.next;
    if (t !== null) (Ml = t), (il = l);
    else {
      if (l === null)
        throw V.alternate === null ? Error(i(467)) : Error(i(310));
      (il = l),
        (l = {
          memoizedState: il.memoizedState,
          baseState: il.baseState,
          baseQueue: il.baseQueue,
          queue: il.queue,
          next: null,
        }),
        Ml === null ? (V.memoizedState = Ml = l) : (Ml = Ml.next = l);
    }
    return Ml;
  }
  function an() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ia(l) {
    var t = ka;
    return (
      (ka += 1),
      ma === null && (ma = []),
      (l = Xs(ma, l, t)),
      (t = V),
      (Ml === null ? t.memoizedState : Ml.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? Ho : sc)),
      l
    );
  }
  function en(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ia(l);
      if (l.$$typeof === gl) return Yl(l);
    }
    throw Error(i(438, String(l)));
  }
  function If(l) {
    var t = null,
      u = V.updateQueue;
    if ((u !== null && (t = u.memoCache), t == null)) {
      var a = V.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      u === null && ((u = an()), (V.updateQueue = u)),
      (u.memoCache = t),
      (u = t.data[t.index]),
      u === void 0)
    )
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = Zu;
    return t.index++, u;
  }
  function Xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function nn(l) {
    var t = Al();
    return Pf(t, il, l);
  }
  function Pf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        (e.next = n.next), (n.next = f);
      }
      (t.baseQueue = e = n), (a.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var c = (f = null),
        s = null,
        r = t,
        T = !1;
      do {
        var _ = r.lane & -536870913;
        if (_ !== r.lane ? (F & _) === _ : (Gt & _) === _) {
          var S = r.revertLane;
          if (S === 0)
            s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: r.action,
                  hasEagerState: r.hasEagerState,
                  eagerState: r.eagerState,
                  next: null,
                }),
              _ === fa && (T = !0);
          else if ((Gt & S) === S) {
            (r = r.next), S === fa && (T = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: r.revertLane,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null,
            }),
              s === null ? ((c = s = _), (f = n)) : (s = s.next = _),
              (V.lanes |= S),
              (su |= S);
          (_ = r.action),
            Yu && u(n, _),
            (n = r.hasEagerState ? r.eagerState : u(n, _));
        } else
          (S = {
            lane: _,
            revertLane: r.revertLane,
            gesture: r.gesture,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null,
          }),
            s === null ? ((c = s = S), (f = n)) : (s = s.next = S),
            (V.lanes |= _),
            (su |= _);
        r = r.next;
      } while (r !== null && r !== t);
      if (
        (s === null ? (f = n) : (s.next = c),
        !tt(n, l.memoizedState) && ((Dl = !0), T && ((u = ca), u !== null)))
      )
        throw u;
      (l.memoizedState = n),
        (l.baseState = f),
        (l.baseQueue = s),
        (a.lastRenderedState = n);
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function lc(l) {
    var t = Al(),
      u = t.queue;
    if (u === null) throw Error(i(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch,
      e = u.pending,
      n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = (e = e.next);
      do (n = l(n, f.action)), (f = f.next);
      while (f !== e);
      tt(n, t.memoizedState) || (Dl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (u.lastRenderedState = n);
    }
    return [n, a];
  }
  function Fs(l, t, u) {
    var a = V,
      e = Al(),
      n = P;
    if (n) {
      if (u === void 0) throw Error(i(407));
      u = u();
    } else u = t();
    var f = !tt((il || e).memoizedState, u);
    if (
      (f && ((e.memoizedState = u), (Dl = !0)),
      (e = e.queue),
      ac(Ps.bind(null, a, e, l), [l]),
      e.getSnapshot !== t || f || (Ml !== null && Ml.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        va(9, { destroy: void 0 }, Is.bind(null, a, e, u, t), null),
        vl === null)
      )
        throw Error(i(349));
      n || (Gt & 127) !== 0 || ks(a, t, u);
    }
    return u;
  }
  function ks(l, t, u) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: u }),
      (t = V.updateQueue),
      t === null
        ? ((t = an()), (V.updateQueue = t), (t.stores = [l]))
        : ((u = t.stores), u === null ? (t.stores = [l]) : u.push(l));
  }
  function Is(l, t, u, a) {
    (t.value = u), (t.getSnapshot = a), lo(t) && to(l);
  }
  function Ps(l, t, u) {
    return u(function () {
      lo(t) && to(l);
    });
  }
  function lo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !tt(l, u);
    } catch {
      return !0;
    }
  }
  function to(l) {
    var t = Du(l, 2);
    t !== null && kl(t, l, 2);
  }
  function tc(l) {
    var t = Zl();
    if (typeof l == "function") {
      var u = l;
      if (((l = u()), Yu)) {
        $t(!0);
        try {
          u();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function uo(l, t, u, a) {
    return (l.baseState = u), Pf(l, il, typeof a == "function" ? a : Xt);
  }
  function bv(l, t, u, a, e) {
    if (sn(l)) throw Error(i(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          n.listeners.push(f);
        },
      };
      z.T !== null ? u(!0) : (n.isTransition = !1),
        a(n),
        (u = t.pending),
        u === null
          ? ((n.next = t.pending = n), ao(t, n))
          : ((n.next = u.next), (t.pending = u.next = n));
    }
  }
  function ao(l, t) {
    var u = t.action,
      a = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = z.T,
        f = {};
      z.T = f;
      try {
        var c = u(e, a),
          s = z.S;
        s !== null && s(f, c), eo(l, t, c);
      } catch (r) {
        uc(l, t, r);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), (z.T = n);
      }
    } else
      try {
        (n = u(e, a)), eo(l, t, n);
      } catch (r) {
        uc(l, t, r);
      }
  }
  function eo(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function"
      ? u.then(
          function (a) {
            no(l, t, a);
          },
          function (a) {
            return uc(l, t, a);
          }
        )
      : no(l, t, u);
  }
  function no(l, t, u) {
    (t.status = "fulfilled"),
      (t.value = u),
      fo(t),
      (l.state = u),
      (t = l.pending),
      t !== null &&
        ((u = t.next),
        u === t ? (l.pending = null) : ((u = u.next), (t.next = u), ao(l, u)));
  }
  function uc(l, t, u) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = u), fo(t), (t = t.next);
      while (t !== a);
    }
    l.action = null;
  }
  function fo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function co(l, t) {
    return t;
  }
  function io(l, t) {
    if (P) {
      var u = vl.formState;
      if (u !== null) {
        l: {
          var a = V;
          if (P) {
            if (hl) {
              t: {
                for (var e = hl, n = dt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = St(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (hl = St(e.nextSibling)), (a = e.data === "F!");
                break l;
              }
            }
            lu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return (
      (u = Zl()),
      (u.memoizedState = u.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: co,
        lastRenderedState: t,
      }),
      (u.queue = a),
      (u = po.bind(null, V, a)),
      (a.dispatch = u),
      (a = tc(!1)),
      (n = ic.bind(null, V, !1, a.queue)),
      (a = Zl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = e),
      (u = bv.bind(null, V, e, n, u)),
      (e.dispatch = u),
      (a.memoizedState = l),
      [t, u, !1]
    );
  }
  function so(l) {
    var t = Al();
    return oo(t, il, l);
  }
  function oo(l, t, u) {
    if (
      ((t = Pf(l, t, co)[0]),
      (l = nn(Xt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Ia(t);
      } catch (f) {
        throw f === ia ? $e : f;
      }
    else a = t;
    t = Al();
    var e = t.queue,
      n = e.dispatch;
    return (
      u !== t.memoizedState &&
        ((V.flags |= 2048),
        va(9, { destroy: void 0 }, Ev.bind(null, e, u), null)),
      [a, n, l]
    );
  }
  function Ev(l, t) {
    l.action = t;
  }
  function yo(l) {
    var t = Al(),
      u = il;
    if (u !== null) return oo(t, u, l);
    Al(), (t = t.memoizedState), (u = Al());
    var a = u.queue.dispatch;
    return (u.memoizedState = l), [t, a, !1];
  }
  function va(l, t, u, a) {
    return (
      (l = { tag: l, create: u, deps: a, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = an()), (V.updateQueue = t)),
      (u = t.lastEffect),
      u === null
        ? (t.lastEffect = l.next = l)
        : ((a = u.next), (u.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function mo() {
    return Al().memoizedState;
  }
  function fn(l, t, u, a) {
    var e = Zl();
    (V.flags |= l),
      (e.memoizedState = va(
        1 | t,
        { destroy: void 0 },
        u,
        a === void 0 ? null : a
      ));
  }
  function cn(l, t, u, a) {
    var e = Al();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    il !== null && a !== null && wf(a, il.memoizedState.deps)
      ? (e.memoizedState = va(t, n, u, a))
      : ((V.flags |= l), (e.memoizedState = va(1 | t, n, u, a)));
  }
  function vo(l, t) {
    fn(8390656, 8, l, t);
  }
  function ac(l, t) {
    cn(2048, 8, l, t);
  }
  function Tv(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null) (t = an()), (V.updateQueue = t), (t.events = [l]);
    else {
      var u = t.events;
      u === null ? (t.events = [l]) : u.push(l);
    }
  }
  function ho(l) {
    var t = Al().memoizedState;
    return (
      Tv({ ref: t, nextImpl: l }),
      function () {
        if ((al & 2) !== 0) throw Error(i(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function ro(l, t) {
    return cn(4, 2, l, t);
  }
  function So(l, t) {
    return cn(4, 4, l, t);
  }
  function go(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function () {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function bo(l, t, u) {
    (u = u != null ? u.concat([l]) : null), cn(4, 4, go.bind(null, t, l), u);
  }
  function ec() {}
  function Eo(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && wf(t, a[1]) ? a[0] : ((u.memoizedState = [l, t]), l);
  }
  function To(l, t) {
    var u = Al();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && wf(t, a[1])) return a[0];
    if (((a = l()), Yu)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return (u.memoizedState = [a, t]), a;
  }
  function nc(l, t, u) {
    return u === void 0 || ((Gt & 1073741824) !== 0 && (F & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = u), (l = z0()), (V.lanes |= l), (su |= l), u);
  }
  function zo(l, t, u, a) {
    return tt(u, t)
      ? u
      : oa.current !== null
      ? ((l = nc(l, u, a)), tt(l, t) || (Dl = !0), l)
      : (Gt & 42) === 0 || ((Gt & 1073741824) !== 0 && (F & 261930) === 0)
      ? ((Dl = !0), (l.memoizedState = u))
      : ((l = z0()), (V.lanes |= l), (su |= l), t);
  }
  function Ao(l, t, u, a, e) {
    var n = U.p;
    U.p = n !== 0 && 8 > n ? n : 8;
    var f = z.T,
      c = {};
    (z.T = c), ic(l, !1, t, u);
    try {
      var s = e(),
        r = z.S;
      if (
        (r !== null && r(c, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var T = rv(s, a);
        Pa(l, t, T, ct(l));
      } else Pa(l, t, a, ct(l));
    } catch (_) {
      Pa(l, t, { then: function () {}, status: "rejected", reason: _ }, ct());
    } finally {
      (U.p = n),
        f !== null && c.types !== null && (f.types = c.types),
        (z.T = f);
    }
  }
  function zv() {}
  function fc(l, t, u, a) {
    if (l.tag !== 5) throw Error(i(476));
    var e = _o(l).queue;
    Ao(
      l,
      e,
      t,
      Z,
      u === null
        ? zv
        : function () {
            return Oo(l), u(a);
          }
    );
  }
  function _o(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xt,
        lastRenderedState: Z,
      },
      next: null,
    };
    var u = {};
    return (
      (t.next = {
        memoizedState: u,
        baseState: u,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xt,
          lastRenderedState: u,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Oo(l) {
    var t = _o(l);
    t.next === null && (t = l.alternate.memoizedState),
      Pa(l, t.next.queue, {}, ct());
  }
  function cc() {
    return Yl(re);
  }
  function Mo() {
    return Al().memoizedState;
  }
  function Do() {
    return Al().memoizedState;
  }
  function Av(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ct();
          l = au(u);
          var a = eu(t, l, u);
          a !== null && (kl(a, t, u), Wa(a, t, u)),
            (t = { cache: Yf() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function _v(l, t, u) {
    var a = ct();
    (u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      sn(l)
        ? Uo(t, u)
        : ((u = Of(l, t, u, a)), u !== null && (kl(u, l, a), No(u, t, a)));
  }
  function po(l, t, u) {
    var a = ct();
    Pa(l, t, u, a);
  }
  function Pa(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (sn(l)) Uo(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var f = t.lastRenderedState,
            c = n(f, u);
          if (((e.hasEagerState = !0), (e.eagerState = c), tt(c, f)))
            return Le(l, t, e, 0), vl === null && Ze(), !1;
        } catch {
        } finally {
        }
      if (((u = Of(l, t, e, a)), u !== null))
        return kl(u, l, a), No(u, t, a), !0;
    }
    return !1;
  }
  function ic(l, t, u, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Qc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      sn(l))
    ) {
      if (t) throw Error(i(479));
    } else (t = Of(l, u, a, 2)), t !== null && kl(t, l, 2);
  }
  function sn(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function Uo(l, t) {
    ya = tn = !0;
    var u = l.pending;
    u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
      (l.pending = t);
  }
  function No(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      (a &= l.pendingLanes), (u |= a), (t.lanes = u), qi(l, u);
    }
  }
  var le = {
    readContext: Yl,
    use: en,
    useCallback: bl,
    useContext: bl,
    useEffect: bl,
    useImperativeHandle: bl,
    useLayoutEffect: bl,
    useInsertionEffect: bl,
    useMemo: bl,
    useReducer: bl,
    useRef: bl,
    useState: bl,
    useDebugValue: bl,
    useDeferredValue: bl,
    useTransition: bl,
    useSyncExternalStore: bl,
    useId: bl,
    useHostTransitionStatus: bl,
    useFormState: bl,
    useActionState: bl,
    useOptimistic: bl,
    useMemoCache: bl,
    useCacheRefresh: bl,
  };
  le.useEffectEvent = bl;
  var Ho = {
      readContext: Yl,
      use: en,
      useCallback: function (l, t) {
        return (Zl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Yl,
      useEffect: vo,
      useImperativeHandle: function (l, t, u) {
        (u = u != null ? u.concat([l]) : null),
          fn(4194308, 4, go.bind(null, t, l), u);
      },
      useLayoutEffect: function (l, t) {
        return fn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        fn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var u = Zl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Yu) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return (u.memoizedState = [a, t]), a;
      },
      useReducer: function (l, t, u) {
        var a = Zl();
        if (u !== void 0) {
          var e = u(t);
          if (Yu) {
            $t(!0);
            try {
              u(t);
            } finally {
              $t(!1);
            }
          }
        } else e = t;
        return (
          (a.memoizedState = a.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (a.queue = l),
          (l = l.dispatch = _v.bind(null, V, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Zl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = tc(l);
        var t = l.queue,
          u = po.bind(null, V, t);
        return (t.dispatch = u), [l.memoizedState, u];
      },
      useDebugValue: ec,
      useDeferredValue: function (l, t) {
        var u = Zl();
        return nc(u, l, t);
      },
      useTransition: function () {
        var l = tc(!1);
        return (
          (l = Ao.bind(null, V, l.queue, !0, !1)),
          (Zl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, u) {
        var a = V,
          e = Zl();
        if (P) {
          if (u === void 0) throw Error(i(407));
          u = u();
        } else {
          if (((u = t()), vl === null)) throw Error(i(349));
          (F & 127) !== 0 || ks(a, t, u);
        }
        e.memoizedState = u;
        var n = { value: u, getSnapshot: t };
        return (
          (e.queue = n),
          vo(Ps.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          va(9, { destroy: void 0 }, Is.bind(null, a, n, u, t), null),
          u
        );
      },
      useId: function () {
        var l = Zl(),
          t = vl.identifierPrefix;
        if (P) {
          var u = Dt,
            a = Mt;
          (u = (a & ~(1 << (32 - lt(a) - 1))).toString(32) + u),
            (t = "_" + t + "R_" + u),
            (u = un++),
            0 < u && (t += "H" + u.toString(32)),
            (t += "_");
        } else (u = Sv++), (t = "_" + t + "r_" + u.toString(32) + "_");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: cc,
      useFormState: io,
      useActionState: io,
      useOptimistic: function (l) {
        var t = Zl();
        t.memoizedState = t.baseState = l;
        var u = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = u), (t = ic.bind(null, V, !0, u)), (u.dispatch = t), [l, t]
        );
      },
      useMemoCache: If,
      useCacheRefresh: function () {
        return (Zl().memoizedState = Av.bind(null, V));
      },
      useEffectEvent: function (l) {
        var t = Zl(),
          u = { impl: l };
        return (
          (t.memoizedState = u),
          function () {
            if ((al & 2) !== 0) throw Error(i(440));
            return u.impl.apply(void 0, arguments);
          }
        );
      },
    },
    sc = {
      readContext: Yl,
      use: en,
      useCallback: Eo,
      useContext: Yl,
      useEffect: ac,
      useImperativeHandle: bo,
      useInsertionEffect: ro,
      useLayoutEffect: So,
      useMemo: To,
      useReducer: nn,
      useRef: mo,
      useState: function () {
        return nn(Xt);
      },
      useDebugValue: ec,
      useDeferredValue: function (l, t) {
        var u = Al();
        return zo(u, il.memoizedState, l, t);
      },
      useTransition: function () {
        var l = nn(Xt)[0],
          t = Al().memoizedState;
        return [typeof l == "boolean" ? l : Ia(l), t];
      },
      useSyncExternalStore: Fs,
      useId: Mo,
      useHostTransitionStatus: cc,
      useFormState: so,
      useActionState: so,
      useOptimistic: function (l, t) {
        var u = Al();
        return uo(u, il, l, t);
      },
      useMemoCache: If,
      useCacheRefresh: Do,
    };
  sc.useEffectEvent = ho;
  var Ro = {
    readContext: Yl,
    use: en,
    useCallback: Eo,
    useContext: Yl,
    useEffect: ac,
    useImperativeHandle: bo,
    useInsertionEffect: ro,
    useLayoutEffect: So,
    useMemo: To,
    useReducer: lc,
    useRef: mo,
    useState: function () {
      return lc(Xt);
    },
    useDebugValue: ec,
    useDeferredValue: function (l, t) {
      var u = Al();
      return il === null ? nc(u, l, t) : zo(u, il.memoizedState, l, t);
    },
    useTransition: function () {
      var l = lc(Xt)[0],
        t = Al().memoizedState;
      return [typeof l == "boolean" ? l : Ia(l), t];
    },
    useSyncExternalStore: Fs,
    useId: Mo,
    useHostTransitionStatus: cc,
    useFormState: yo,
    useActionState: yo,
    useOptimistic: function (l, t) {
      var u = Al();
      return il !== null
        ? uo(u, il, l, t)
        : ((u.baseState = l), [l, u.queue.dispatch]);
    },
    useMemoCache: If,
    useCacheRefresh: Do,
  };
  Ro.useEffectEvent = ho;
  function oc(l, t, u, a) {
    (t = l.memoizedState),
      (u = u(a, t)),
      (u = u == null ? t : p({}, t, u)),
      (l.memoizedState = u),
      l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var yc = {
    enqueueSetState: function (l, t, u) {
      l = l._reactInternals;
      var a = ct(),
        e = au(a);
      (e.payload = t),
        u != null && (e.callback = u),
        (t = eu(l, e, a)),
        t !== null && (kl(t, l, a), Wa(t, l, a));
    },
    enqueueReplaceState: function (l, t, u) {
      l = l._reactInternals;
      var a = ct(),
        e = au(a);
      (e.tag = 1),
        (e.payload = t),
        u != null && (e.callback = u),
        (t = eu(l, e, a)),
        t !== null && (kl(t, l, a), Wa(t, l, a));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var u = ct(),
        a = au(u);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = eu(l, a, u)),
        t !== null && (kl(t, l, u), Wa(t, l, u));
    },
  };
  function Co(l, t, u, a, e, n, f) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Qa(u, a) || !Qa(e, n)
        : !0
    );
  }
  function qo(l, t, u, a) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(u, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(u, a),
      t.state !== l && yc.enqueueReplaceState(t, t.state, null);
  }
  function ju(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      u === t && (u = p({}, u));
      for (var e in l) u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Bo(l) {
    Qe(l);
  }
  function Yo(l) {
    console.error(l);
  }
  function jo(l) {
    Qe(l);
  }
  function on(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Go(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function mc(l, t, u) {
    return (
      (u = au(u)),
      (u.tag = 3),
      (u.payload = { element: null }),
      (u.callback = function () {
        on(l, t);
      }),
      u
    );
  }
  function Xo(l) {
    return (l = au(l)), (l.tag = 3), l;
  }
  function Qo(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          Go(t, u, a);
        });
    }
    var f = u.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (l.callback = function () {
        Go(t, u, a),
          typeof e != "function" &&
            (ou === null ? (ou = new Set([this])) : ou.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Ov(l, t, u, a, e) {
    if (
      ((u.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = u.alternate),
        t !== null && na(t, u, e, !0),
        (u = at.current),
        u !== null)
      ) {
        switch (u.tag) {
          case 31:
          case 13:
            return (
              rt === null ? zn() : u.alternate === null && El === 0 && (El = 3),
              (u.flags &= -257),
              (u.flags |= 65536),
              (u.lanes = e),
              a === Fe
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null ? (u.updateQueue = new Set([a])) : t.add(a),
                  jc(l, a, e)),
              !1
            );
          case 22:
            return (
              (u.flags |= 65536),
              a === Fe
                ? (u.flags |= 16384)
                : ((t = u.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (u.updateQueue = t))
                    : ((u = t.retryQueue),
                      u === null ? (t.retryQueue = new Set([a])) : u.add(a)),
                  jc(l, a, e)),
              !1
            );
        }
        throw Error(i(435, u.tag));
      }
      return jc(l, a, e), zn(), !1;
    }
    if (P)
      return (
        (t = at.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            a !== Hf && ((l = Error(i(422), { cause: a })), xa(mt(l, u))))
          : (a !== Hf && ((t = Error(i(423), { cause: a })), xa(mt(t, u))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (a = mt(a, u)),
            (e = mc(l.stateNode, a, e)),
            Lf(l, e),
            El !== 4 && (El = 2)),
        !1
      );
    var n = Error(i(520), { cause: a });
    if (
      ((n = mt(n, u)),
      ie === null ? (ie = [n]) : ie.push(n),
      El !== 4 && (El = 2),
      t === null)
    )
      return !0;
    (a = mt(a, u)), (u = t);
    do {
      switch (u.tag) {
        case 3:
          return (
            (u.flags |= 65536),
            (l = e & -e),
            (u.lanes |= l),
            (l = mc(u.stateNode, a, l)),
            Lf(u, l),
            !1
          );
        case 1:
          if (
            ((t = u.type),
            (n = u.stateNode),
            (u.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ou === null || !ou.has(n)))))
          )
            return (
              (u.flags |= 65536),
              (e &= -e),
              (u.lanes |= e),
              (e = Xo(e)),
              Qo(e, l, u, a),
              Lf(u, e),
              !1
            );
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var vc = Error(i(461)),
    Dl = !1;
  function jl(l, t, u, a) {
    t.child = l === null ? xs(t, null, u, a) : Bu(t, l.child, u, a);
  }
  function Zo(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a) c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return (
      Hu(t),
      (a = Wf(l, t, u, f, n, e)),
      (c = $f()),
      l !== null && !Dl
        ? (Ff(l, t, e), Qt(l, t, e))
        : (P && c && Uf(t), (t.flags |= 1), jl(l, t, a, e), t.child)
    );
  }
  function Lo(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" &&
        !Mf(n) &&
        n.defaultProps === void 0 &&
        u.compare === null
        ? ((t.tag = 15), (t.type = n), xo(l, t, n, a, e))
        : ((l = Ve(u.type, null, a, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Tc(l, e))) {
      var f = n.memoizedProps;
      if (
        ((u = u.compare), (u = u !== null ? u : Qa), u(f, a) && l.ref === t.ref)
      )
        return Qt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = qt(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function xo(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Qa(n, a) && l.ref === t.ref)
        if (((Dl = !1), (t.pendingProps = a = n), Tc(l, e)))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else return (t.lanes = l.lanes), Qt(l, t, e);
    }
    return hc(l, t, u, a, e);
  }
  function Vo(l, t, u, a) {
    var e = a.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | u : u), l !== null)) {
          for (a = t.child = l.child, e = 0; a !== null; )
            (e = e | a.lanes | a.childLanes), (a = a.sibling);
          a = e & ~n;
        } else (a = 0), (t.child = null);
        return Ko(l, t, n, u, a);
      }
      if ((u & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && We(t, n !== null ? n.cachePool : null),
          n !== null ? Js(t, n) : Vf(),
          ws(t);
      else
        return (
          (a = t.lanes = 536870912),
          Ko(l, t, n !== null ? n.baseLanes | u : u, u, a)
        );
    } else
      n !== null
        ? (We(t, n.cachePool), Js(t, n), fu(), (t.memoizedState = null))
        : (l !== null && We(t, null), Vf(), fu());
    return jl(l, t, e, u), t.child;
  }
  function te(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Ko(l, t, u, a, e) {
    var n = Gf();
    return (
      (n = n === null ? null : { parent: Ol._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: u, cachePool: n }),
      l !== null && We(t, null),
      Vf(),
      ws(t),
      l !== null && na(l, t, a, !0),
      (t.childLanes = e),
      null
    );
  }
  function yn(l, t) {
    return (
      (t = vn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Jo(l, t, u) {
    return (
      Bu(t, l.child, null, u),
      (l = yn(t, t.pendingProps)),
      (l.flags |= 2),
      et(t),
      (t.memoizedState = null),
      l
    );
  }
  function Mv(l, t, u) {
    var a = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (P) {
        if (a.mode === "hidden")
          return (l = yn(t, a)), (t.lanes = 536870912), te(null, l);
        if (
          (Jf(t),
          (l = hl)
            ? ((l = ey(l, dt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: Mt, overflow: Dt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (u = ps(l)),
                (u.return = t),
                (t.child = u),
                (Bl = t),
                (hl = null)))
            : (l = null),
          l === null)
        )
          throw lu(t);
        return (t.lanes = 536870912), null;
      }
      return yn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if ((Jf(t), e))
        if (t.flags & 256) (t.flags &= -257), (t = Jo(l, t, u));
        else if (t.memoizedState !== null)
          (t.child = l.child), (t.flags |= 128), (t = null);
        else throw Error(i(558));
      else if (
        (Dl || na(l, t, u, !1), (e = (u & l.childLanes) !== 0), Dl || e)
      ) {
        if (
          ((a = vl),
          a !== null && ((f = Bi(a, u)), f !== 0 && f !== n.retryLane))
        )
          throw ((n.retryLane = f), Du(l, f), kl(a, l, f), vc);
        zn(), (t = Jo(l, t, u));
      } else
        (l = n.treeContext),
          (hl = St(f.nextSibling)),
          (Bl = t),
          (P = !0),
          (Pt = null),
          (dt = !1),
          l !== null && Hs(t, l),
          (t = yn(t, a)),
          (t.flags |= 4096);
      return t;
    }
    return (
      (l = qt(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function mn(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(i(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function hc(l, t, u, a, e) {
    return (
      Hu(t),
      (u = Wf(l, t, u, a, void 0, e)),
      (a = $f()),
      l !== null && !Dl
        ? (Ff(l, t, e), Qt(l, t, e))
        : (P && a && Uf(t), (t.flags |= 1), jl(l, t, u, e), t.child)
    );
  }
  function wo(l, t, u, a, e, n) {
    return (
      Hu(t),
      (t.updateQueue = null),
      (u = $s(t, a, u, e)),
      Ws(l),
      (a = $f()),
      l !== null && !Dl
        ? (Ff(l, t, n), Qt(l, t, n))
        : (P && a && Uf(t), (t.flags |= 1), jl(l, t, u, n), t.child)
    );
  }
  function Wo(l, t, u, a, e) {
    if ((Hu(t), t.stateNode === null)) {
      var n = ta,
        f = u.contextType;
      typeof f == "object" && f !== null && (n = Yl(f)),
        (n = new u(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = yc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Qf(t),
        (f = u.contextType),
        (n.context = typeof f == "object" && f !== null ? Yl(f) : ta),
        (n.state = t.memoizedState),
        (f = u.getDerivedStateFromProps),
        typeof f == "function" && (oc(t, u, f, a), (n.state = t.memoizedState)),
        typeof u.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((f = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          f !== n.state && yc.enqueueReplaceState(n, n.state, null),
          Fa(t, a, n, e),
          $a(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        s = ju(u, c);
      n.props = s;
      var r = n.context,
        T = u.contextType;
      (f = ta), typeof T == "object" && T !== null && (f = Yl(T));
      var _ = u.getDerivedStateFromProps;
      (T =
        typeof _ == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        T ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || r !== f) && qo(t, n, a, f)),
        (uu = !1);
      var S = t.memoizedState;
      (n.state = S),
        Fa(t, a, n, e),
        $a(),
        (r = t.memoizedState),
        c || S !== r || uu
          ? (typeof _ == "function" && (oc(t, u, _, a), (r = t.memoizedState)),
            (s = uu || Co(t, u, s, a, S, r, f))
              ? (T ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = r)),
            (n.props = a),
            (n.state = r),
            (n.context = f),
            (a = s))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (n = t.stateNode),
        Zf(l, t),
        (f = t.memoizedProps),
        (T = ju(u, f)),
        (n.props = T),
        (_ = t.pendingProps),
        (S = n.context),
        (r = u.contextType),
        (s = ta),
        typeof r == "object" && r !== null && (s = Yl(r)),
        (c = u.getDerivedStateFromProps),
        (r =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f !== _ || S !== s) && qo(t, n, a, s)),
        (uu = !1),
        (S = t.memoizedState),
        (n.state = S),
        Fa(t, a, n, e),
        $a();
      var E = t.memoizedState;
      f !== _ ||
      S !== E ||
      uu ||
      (l !== null && l.dependencies !== null && Je(l.dependencies))
        ? (typeof c == "function" && (oc(t, u, c, a), (E = t.memoizedState)),
          (T =
            uu ||
            Co(t, u, T, a, S, E, s) ||
            (l !== null && l.dependencies !== null && Je(l.dependencies)))
            ? (r ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, E, s),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, E, s)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (f === l.memoizedProps && S === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (f === l.memoizedProps && S === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = E)),
          (n.props = a),
          (n.state = E),
          (n.context = s),
          (a = T))
        : (typeof n.componentDidUpdate != "function" ||
            (f === l.memoizedProps && S === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (f === l.memoizedProps && S === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      mn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (u =
            a && typeof u.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = Bu(t, l.child, null, e)),
              (t.child = Bu(t, null, u, e)))
            : jl(l, t, u, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Qt(l, t, e)),
      l
    );
  }
  function $o(l, t, u, a) {
    return Uu(), (t.flags |= 256), jl(l, t, u, a), t.child;
  }
  var dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function rc(l) {
    return { baseLanes: l, cachePool: js() };
  }
  function Sc(l, t, u) {
    return (l = l !== null ? l.childLanes & ~u : 0), t && (l |= ft), l;
  }
  function Fo(l, t, u) {
    var a = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0),
      f && ((e = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if (
          (e ? nu(t) : fu(),
          (l = hl)
            ? ((l = ey(l, dt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: Mt, overflow: Dt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (u = ps(l)),
                (u.return = t),
                (t.child = u),
                (Bl = t),
                (hl = null)))
            : (l = null),
          l === null)
        )
          throw lu(t);
        return Pc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null;
      }
      var c = a.children;
      return (
        (a = a.fallback),
        e
          ? (fu(),
            (e = t.mode),
            (c = vn({ mode: "hidden", children: c }, e)),
            (a = pu(a, e, u, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = rc(u)),
            (a.childLanes = Sc(l, f, u)),
            (t.memoizedState = dc),
            te(null, a))
          : (nu(t), gc(t, c))
      );
    }
    var s = l.memoizedState;
    if (s !== null && ((c = s.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (nu(t), (t.flags &= -257), (t = bc(l, t, u)))
          : t.memoizedState !== null
          ? (fu(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (fu(),
            (c = a.fallback),
            (e = t.mode),
            (a = vn({ mode: "visible", children: a.children }, e)),
            (c = pu(c, e, u, null)),
            (c.flags |= 2),
            (a.return = t),
            (c.return = t),
            (a.sibling = c),
            (t.child = a),
            Bu(t, l.child, null, u),
            (a = t.child),
            (a.memoizedState = rc(u)),
            (a.childLanes = Sc(l, f, u)),
            (t.memoizedState = dc),
            (t = te(null, a)));
      else if ((nu(t), Pc(c))) {
        if (((f = c.nextSibling && c.nextSibling.dataset), f)) var r = f.dgst;
        (f = r),
          (a = Error(i(419))),
          (a.stack = ""),
          (a.digest = f),
          xa({ value: a, source: null, stack: null }),
          (t = bc(l, t, u));
      } else if (
        (Dl || na(l, t, u, !1), (f = (u & l.childLanes) !== 0), Dl || f)
      ) {
        if (
          ((f = vl),
          f !== null && ((a = Bi(f, u)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Du(l, a), kl(f, l, a), vc);
        Ic(c) || zn(), (t = bc(l, t, u));
      } else
        Ic(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = s.treeContext),
            (hl = St(c.nextSibling)),
            (Bl = t),
            (P = !0),
            (Pt = null),
            (dt = !1),
            l !== null && Hs(t, l),
            (t = gc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (fu(),
        (c = a.fallback),
        (e = t.mode),
        (s = l.child),
        (r = s.sibling),
        (a = qt(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        r !== null ? (c = qt(r, c)) : ((c = pu(c, e, u, null)), (c.flags |= 2)),
        (c.return = t),
        (a.return = t),
        (a.sibling = c),
        (t.child = a),
        te(null, a),
        (a = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = rc(u))
          : ((e = c.cachePool),
            e !== null
              ? ((s = Ol._currentValue),
                (e = e.parent !== s ? { parent: s, pool: s } : e))
              : (e = js()),
            (c = { baseLanes: c.baseLanes | u, cachePool: e })),
        (a.memoizedState = c),
        (a.childLanes = Sc(l, f, u)),
        (t.memoizedState = dc),
        te(l.child, a))
      : (nu(t),
        (u = l.child),
        (l = u.sibling),
        (u = qt(u, { mode: "visible", children: a.children })),
        (u.return = t),
        (u.sibling = null),
        l !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
        (t.child = u),
        (t.memoizedState = null),
        u);
  }
  function gc(l, t) {
    return (
      (t = vn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function vn(l, t) {
    return (l = ut(22, l, null, t)), (l.lanes = 0), l;
  }
  function bc(l, t, u) {
    return (
      Bu(t, l.child, null, u),
      (l = gc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function ko(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), qf(l.return, t, u);
  }
  function Ec(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: u,
          tailMode: e,
          treeForkCount: n,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = u),
        (f.tailMode = e),
        (f.treeForkCount = n));
  }
  function Io(l, t, u) {
    var a = t.pendingProps,
      e = a.revealOrder,
      n = a.tail;
    a = a.children;
    var f = zl.current,
      c = (f & 2) !== 0;
    if (
      (c ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      N(zl, f),
      jl(l, t, a, u),
      (a = P ? La : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && ko(l, u, t);
        else if (l.tag === 19) ko(l, u, t);
        else if (l.child !== null) {
          (l.child.return = l), (l = l.child);
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        (l.sibling.return = l.return), (l = l.sibling);
      }
    switch (e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          (l = u.alternate),
            l !== null && ln(l) === null && (e = u),
            (u = u.sibling);
        (u = e),
          u === null
            ? ((e = t.child), (t.child = null))
            : ((e = u.sibling), (u.sibling = null)),
          Ec(t, !1, e, u, n, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && ln(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = u), (u = e), (e = l);
        }
        Ec(t, !0, u, null, n, a);
        break;
      case "together":
        Ec(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qt(l, t, u) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (su |= t.lanes),
      (u & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((na(l, t, u, !1), (u & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        l = t.child, u = qt(l, l.pendingProps), t.child = u, u.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (u = u.sibling = qt(l, l.pendingProps)),
          (u.return = t);
      u.sibling = null;
    }
    return t.child;
  }
  function Tc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Je(l)));
  }
  function Dv(l, t, u) {
    switch (t.tag) {
      case 3:
        Ql(t, t.stateNode.containerInfo),
          tu(t, Ol, l.memoizedState.cache),
          Uu();
        break;
      case 27:
      case 5:
        Da(t);
        break;
      case 4:
        Ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        tu(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return (t.flags |= 128), Jf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (nu(t), (t.flags |= 128), null)
            : (u & t.child.childLanes) !== 0
            ? Fo(l, t, u)
            : (nu(t), (l = Qt(l, t, u)), l !== null ? l.sibling : null);
        nu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((a = (u & t.childLanes) !== 0),
          a || (na(l, t, u, !1), (a = (u & t.childLanes) !== 0)),
          e)
        ) {
          if (a) return Io(l, t, u);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          N(zl, zl.current),
          a)
        )
          break;
        return null;
      case 22:
        return (t.lanes = 0), Vo(l, t, u, t.pendingProps);
      case 24:
        tu(t, Ol, l.memoizedState.cache);
    }
    return Qt(l, t, u);
  }
  function Po(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Dl = !0;
      else {
        if (!Tc(l, u) && (t.flags & 128) === 0) return (Dl = !1), Dv(l, t, u);
        Dl = (l.flags & 131072) !== 0;
      }
    else (Dl = !1), P && (t.flags & 1048576) !== 0 && Ns(t, La, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Cu(t.elementType)), (t.type = l), typeof l == "function"))
            Mf(l)
              ? ((a = ju(l, a)), (t.tag = 1), (t = Wo(null, t, l, a, u)))
              : ((t.tag = 0), (t = hc(null, t, l, a, u)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === yl) {
                (t.tag = 11), (t = Zo(null, t, l, a, u));
                break l;
              } else if (e === I) {
                (t.tag = 14), (t = Lo(null, t, l, a, u));
                break l;
              }
            }
            throw ((t = Nt(l) || l), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return hc(l, t, t.type, t.pendingProps, u);
      case 1:
        return (a = t.type), (e = ju(a, t.pendingProps)), Wo(l, t, a, e, u);
      case 3:
        l: {
          if ((Ql(t, t.stateNode.containerInfo), l === null))
            throw Error(i(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), Zf(l, t), Fa(t, a, null, u);
          var f = t.memoizedState;
          if (
            ((a = f.cache),
            tu(t, Ol, a),
            a !== n.cache && Bf(t, [Ol], u, !0),
            $a(),
            (a = f.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = $o(l, t, a, u);
              break l;
            } else if (a !== e) {
              (e = mt(Error(i(424)), t)), xa(e), (t = $o(l, t, a, u));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                hl = St(l.firstChild),
                  Bl = t,
                  P = !0,
                  Pt = null,
                  dt = !0,
                  u = xs(t, null, a, u),
                  t.child = u;
                u;

              )
                (u.flags = (u.flags & -3) | 4096), (u = u.sibling);
            }
          else {
            if ((Uu(), a === e)) {
              t = Qt(l, t, u);
              break l;
            }
            jl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          mn(l, t),
          l === null
            ? (u = oy(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = u)
              : P ||
                ((u = t.type),
                (l = t.pendingProps),
                (a = Un(w.current).createElement(u)),
                (a[ql] = t),
                (a[Kl] = l),
                Gl(a, u, l),
                Hl(a),
                (t.stateNode = a))
            : (t.memoizedState = oy(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          Da(t),
          l === null &&
            P &&
            ((a = t.stateNode = cy(t.type, t.pendingProps, w.current)),
            (Bl = t),
            (dt = !0),
            (e = hl),
            hu(t.type) ? ((li = e), (hl = St(a.firstChild))) : (hl = e)),
          jl(l, t, t.pendingProps.children, u),
          mn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((e = a = hl) &&
              ((a = ah(a, t.type, t.pendingProps, dt)),
              a !== null
                ? ((t.stateNode = a),
                  (Bl = t),
                  (hl = St(a.firstChild)),
                  (dt = !1),
                  (e = !0))
                : (e = !1)),
            e || lu(t)),
          Da(t),
          (e = t.type),
          (n = t.pendingProps),
          (f = l !== null ? l.memoizedProps : null),
          (a = n.children),
          $c(e, n) ? (a = null) : f !== null && $c(e, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Wf(l, t, gv, null, null, u)), (re._currentValue = e)),
          mn(l, t),
          jl(l, t, a, u),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = u = hl) &&
              ((u = eh(u, t.pendingProps, dt)),
              u !== null
                ? ((t.stateNode = u), (Bl = t), (hl = null), (l = !0))
                : (l = !1)),
            l || lu(t)),
          null
        );
      case 13:
        return Fo(l, t, u);
      case 4:
        return (
          Ql(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = Bu(t, null, a, u)) : jl(l, t, a, u),
          t.child
        );
      case 11:
        return Zo(l, t, t.type, t.pendingProps, u);
      case 7:
        return jl(l, t, t.pendingProps, u), t.child;
      case 8:
        return jl(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return jl(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          tu(t, t.type, a.value),
          jl(l, t, a.children, u),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (a = t.pendingProps.children),
          Hu(t),
          (e = Yl(e)),
          (a = a(e)),
          (t.flags |= 1),
          jl(l, t, a, u),
          t.child
        );
      case 14:
        return Lo(l, t, t.type, t.pendingProps, u);
      case 15:
        return xo(l, t, t.type, t.pendingProps, u);
      case 19:
        return Io(l, t, u);
      case 31:
        return Mv(l, t, u);
      case 22:
        return Vo(l, t, u, t.pendingProps);
      case 24:
        return (
          Hu(t),
          (a = Yl(Ol)),
          l === null
            ? ((e = Gf()),
              e === null &&
                ((e = vl),
                (n = Yf()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= u),
                (e = n)),
              (t.memoizedState = { parent: a, cache: e }),
              Qf(t),
              tu(t, Ol, e))
            : ((l.lanes & u) !== 0 && (Zf(l, t), Fa(t, null, null, u), $a()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== a
                ? ((e = { parent: a, cache: a }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  tu(t, Ol, a))
                : ((a = n.cache),
                  tu(t, Ol, a),
                  a !== e.cache && Bf(t, [Ol], u, !0))),
          jl(l, t, t.pendingProps.children, u),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function zc(l, t, u, a, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (M0()) l.flags |= 8192;
        else throw ((qu = Fe), Xf);
    } else l.flags &= -16777217;
  }
  function l0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !dy(t)))
      if (M0()) l.flags |= 8192;
      else throw ((qu = Fe), Xf);
  }
  function hn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Ri() : 536870912), (l.lanes |= t), (Sa |= t));
  }
  function ue(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), (t = t.sibling);
          u === null ? (l.tail = null) : (u.sibling = null);
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), (u = u.sibling);
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      u = 0,
      a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags & 65011712),
          (a |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (u |= e.lanes | e.childLanes),
          (a |= e.subtreeFlags),
          (a |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= a), (l.childLanes = u), t;
  }
  function pv(l, t, u) {
    var a = t.pendingProps;
    switch ((Nf(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return (
          (u = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          jt(Ol),
          Tl(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (l === null || l.child === null) &&
            (ea(t)
              ? Zt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Rf())),
          dl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Zt(t),
              n !== null ? (dl(t), l0(t, n)) : (dl(t), zc(t, e, null, a, u)))
            : n
            ? n !== l.memoizedState
              ? (Zt(t), dl(t), l0(t, n))
              : (dl(t), (t.flags &= -16777217))
            : ((l = l.memoizedProps),
              l !== a && Zt(t),
              dl(t),
              zc(t, e, l, a, u)),
          null
        );
      case 27:
        if (
          (_e(t),
          (u = w.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return dl(t), null;
          }
          (l = q.current),
            ea(t) ? Rs(t) : ((l = cy(e, a, u)), (t.stateNode = l), Zt(t));
        }
        return dl(t), null;
      case 5:
        if ((_e(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Zt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return dl(t), null;
          }
          if (((n = q.current), ea(t))) Rs(t);
          else {
            var f = Un(w.current);
            switch (n) {
              case 1:
                n = f.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    (n = f.createElement("div")),
                      (n.innerHTML = "<script></script>"),
                      (n = n.removeChild(n.firstChild));
                    break;
                  case "select":
                    (n =
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size);
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? f.createElement(e, { is: a.is })
                        : f.createElement(e);
                }
            }
            (n[ql] = t), (n[Kl] = a);
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break l;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            t.stateNode = n;
            l: switch ((Gl(n, e, a), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Zt(t);
          }
        }
        return (
          dl(t),
          zc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, u),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Zt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (((l = w.current), ea(t))) {
            if (
              ((l = t.stateNode),
              (u = t.memoizedProps),
              (a = null),
              (e = Bl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            (l[ql] = t),
              (l = !!(
                l.nodeValue === u ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                F0(l.nodeValue, u)
              )),
              l || lu(t, !0);
          } else (l = Un(l).createTextNode(a)), (l[ql] = t), (t.stateNode = l);
        }
        return dl(t), null;
      case 31:
        if (((u = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = ea(t)), u !== null)) {
            if (l === null) {
              if (!a) throw Error(i(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(i(557));
              l[ql] = t;
            } else
              Uu(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            dl(t), (l = !1);
          } else
            (u = Rf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (l = !0);
          if (!l) return t.flags & 256 ? (et(t), t) : (et(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return dl(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = ea(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(i(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(i(317));
              e[ql] = t;
            } else
              Uu(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            dl(t), (e = !1);
          } else
            (e = Rf()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (et(t), t) : (et(t), null);
        }
        return (
          et(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = u), t)
            : ((u = a !== null),
              (l = l !== null && l.memoizedState !== null),
              u &&
                ((a = t.child),
                (e = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (e = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== e && (a.flags |= 2048)),
              u !== l && u && (t.child.flags |= 8192),
              hn(t, t.updateQueue),
              dl(t),
              null)
        );
      case 4:
        return Tl(), l === null && Vc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return jt(t.type), dl(t), null;
      case 19:
        if ((O(zl), (a = t.memoizedState), a === null)) return dl(t), null;
        if (((e = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (e) ue(a, !1);
          else {
            if (El !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = ln(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ue(a, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      hn(t, l),
                      t.subtreeFlags = 0,
                      l = u,
                      u = t.child;
                    u !== null;

                  )
                    Ds(u, l), (u = u.sibling);
                  return (
                    N(zl, (zl.current & 1) | 2),
                    P && Bt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              Il() > bn &&
              ((t.flags |= 128), (e = !0), ue(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = ln(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                hn(t, l),
                ue(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !P)
              )
                return dl(t), null;
            } else
              2 * Il() - a.renderingStartTime > bn &&
                u !== 536870912 &&
                ((t.flags |= 128), (e = !0), ue(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = a.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = Il()),
            (l.sibling = null),
            (u = zl.current),
            N(zl, e ? (u & 1) | 2 : u & 1),
            P && Bt(t, a.treeForkCount),
            l)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          et(t),
          Kf(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (u & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (u = t.updateQueue),
          u !== null && hn(t, u.retryQueue),
          (u = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (u = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== u && (t.flags |= 2048),
          l !== null && O(Ru),
          null
        );
      case 24:
        return (
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          jt(Ol),
          dl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Uv(l, t) {
    switch ((Nf(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          jt(Ol),
          Tl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return _e(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ((et(t), t.alternate === null)) throw Error(i(340));
          Uu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (et(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Uu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return O(zl), null;
      case 4:
        return Tl(), null;
      case 10:
        return jt(t.type), null;
      case 22:
      case 23:
        return (
          et(t),
          Kf(),
          l !== null && O(Ru),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return jt(Ol), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function t0(l, t) {
    switch ((Nf(t), t.tag)) {
      case 3:
        jt(Ol), Tl();
        break;
      case 26:
      case 27:
      case 5:
        _e(t);
        break;
      case 4:
        Tl();
        break;
      case 31:
        t.memoizedState !== null && et(t);
        break;
      case 13:
        et(t);
        break;
      case 19:
        O(zl);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        et(t), Kf(), l !== null && O(Ru);
        break;
      case 24:
        jt(Ol);
    }
  }
  function ae(l, t) {
    try {
      var u = t.updateQueue,
        a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create,
              f = u.inst;
            (a = n()), (f.destroy = a);
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      fl(t, t.return, c);
    }
  }
  function cu(l, t, u) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst,
              c = f.destroy;
            if (c !== void 0) {
              (f.destroy = void 0), (e = t);
              var s = u,
                r = c;
              try {
                r();
              } catch (T) {
                fl(e, s, T);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (T) {
      fl(t, t.return, T);
    }
  }
  function u0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Ks(t, u);
      } catch (a) {
        fl(l, l.return, a);
      }
    }
  }
  function a0(l, t, u) {
    (u.props = ju(l.type, l.memoizedProps)), (u.state = l.memoizedState);
    try {
      u.componentWillUnmount();
    } catch (a) {
      fl(l, t, a);
    }
  }
  function ee(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? (l.refCleanup = u(a)) : (u.current = a);
      }
    } catch (e) {
      fl(l, t, e);
    }
  }
  function pt(l, t) {
    var u = l.ref,
      a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          fl(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          fl(l, t, e);
        }
      else u.current = null;
  }
  function e0(l) {
    var t = l.type,
      u = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? (a.src = u.src) : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function Ac(l, t, u) {
    try {
      var a = l.stateNode;
      kv(a, l.type, u, t), (a[Kl] = t);
    } catch (e) {
      fl(l, l.return, e);
    }
  }
  function n0(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && hu(l.type)) ||
      l.tag === 4
    );
  }
  function _c(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || n0(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && hu(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Oc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode),
        t
          ? (u.nodeType === 9
              ? u.body
              : u.nodeName === "HTML"
              ? u.ownerDocument.body
              : u
            ).insertBefore(l, t)
          : ((t =
              u.nodeType === 9
                ? u.body
                : u.nodeName === "HTML"
                ? u.ownerDocument.body
                : u),
            t.appendChild(l),
            (u = u._reactRootContainer),
            u != null || t.onclick !== null || (t.onclick = Rt));
    else if (
      a !== 4 &&
      (a === 27 && hu(l.type) && ((u = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Oc(l, t, u), l = l.sibling; l !== null; )
        Oc(l, t, u), (l = l.sibling);
  }
  function dn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      (l = l.stateNode), t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (
      a !== 4 &&
      (a === 27 && hu(l.type) && (u = l.stateNode), (l = l.child), l !== null)
    )
      for (dn(l, t, u), l = l.sibling; l !== null; )
        dn(l, t, u), (l = l.sibling);
  }
  function f0(l) {
    var t = l.stateNode,
      u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Gl(t, a, u), (t[ql] = l), (t[Kl] = u);
    } catch (n) {
      fl(l, l.return, n);
    }
  }
  var Lt = !1,
    pl = !1,
    Mc = !1,
    c0 = typeof WeakSet == "function" ? WeakSet : Set,
    Rl = null;
  function Nv(l, t) {
    if (((l = l.containerInfo), (wc = Yn), (l = gs(l)), bf(l))) {
      if ("selectionStart" in l)
        var u = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          u = ((u = l.ownerDocument) && u.defaultView) || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0,
              c = -1,
              s = -1,
              r = 0,
              T = 0,
              _ = l,
              S = null;
            t: for (;;) {
              for (
                var E;
                _ !== u || (e !== 0 && _.nodeType !== 3) || (c = f + e),
                  _ !== n || (a !== 0 && _.nodeType !== 3) || (s = f + a),
                  _.nodeType === 3 && (f += _.nodeValue.length),
                  (E = _.firstChild) !== null;

              )
                (S = _), (_ = E);
              for (;;) {
                if (_ === l) break t;
                if (
                  (S === u && ++r === e && (c = f),
                  S === n && ++T === a && (s = f),
                  (E = _.nextSibling) !== null)
                )
                  break;
                (_ = S), (S = _.parentNode);
              }
              _ = E;
            }
            u = c === -1 || s === -1 ? null : { start: c, end: s };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (
      Wc = { focusedElem: l, selectionRange: u }, Yn = !1, Rl = t;
      Rl !== null;

    )
      if (
        ((t = Rl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        (l.return = t), (Rl = l);
      else
        for (; Rl !== null; ) {
          switch (((t = Rl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (u = 0; u < l.length; u++)
                  (e = l[u]), (e.ref.impl = e.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (u = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = u.stateNode);
                try {
                  var R = ju(u.type, e);
                  (l = a.getSnapshotBeforeUpdate(R, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l);
                } catch (G) {
                  fl(u, u.return, G);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (u = l.nodeType), u === 9)
                )
                  kc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(i(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Rl = l);
            break;
          }
          Rl = t.return;
        }
  }
  function i0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, u), a & 4 && ae(5, u);
        break;
      case 1:
        if ((Vt(l, u), a & 4))
          if (((l = u.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              fl(u, u.return, f);
            }
          else {
            var e = ju(u.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              fl(u, u.return, f);
            }
          }
        a & 64 && u0(u), a & 512 && ee(u, u.return);
        break;
      case 3:
        if ((Vt(l, u), a & 64 && ((l = u.updateQueue), l !== null))) {
          if (((t = null), u.child !== null))
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Ks(l, t);
          } catch (f) {
            fl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && f0(u);
      case 26:
      case 5:
        Vt(l, u), t === null && a & 4 && e0(u), a & 512 && ee(u, u.return);
        break;
      case 12:
        Vt(l, u);
        break;
      case 31:
        Vt(l, u), a & 4 && y0(l, u);
        break;
      case 13:
        Vt(l, u),
          a & 4 && m0(l, u),
          a & 64 &&
            ((l = u.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((u = Xv.bind(null, u)), nh(l, u))));
        break;
      case 22:
        if (((a = u.memoizedState !== null || Lt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || pl), (e = Lt);
          var n = pl;
          (Lt = a),
            (pl = t) && !n ? Kt(l, u, (u.subtreeFlags & 8772) !== 0) : Vt(l, u),
            (Lt = e),
            (pl = n);
        }
        break;
      case 30:
        break;
      default:
        Vt(l, u);
    }
  }
  function s0(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), s0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && tf(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var rl = null,
    wl = !1;
  function xt(l, t, u) {
    for (u = u.child; u !== null; ) o0(l, t, u), (u = u.sibling);
  }
  function o0(l, t, u) {
    if (Pl && typeof Pl.onCommitFiberUnmount == "function")
      try {
        Pl.onCommitFiberUnmount(pa, u);
      } catch {}
    switch (u.tag) {
      case 26:
        pl || pt(u, t),
          xt(l, t, u),
          u.memoizedState
            ? u.memoizedState.count--
            : u.stateNode && ((u = u.stateNode), u.parentNode.removeChild(u));
        break;
      case 27:
        pl || pt(u, t);
        var a = rl,
          e = wl;
        hu(u.type) && ((rl = u.stateNode), (wl = !1)),
          xt(l, t, u),
          ve(u.stateNode),
          (rl = a),
          (wl = e);
        break;
      case 5:
        pl || pt(u, t);
      case 6:
        if (
          ((a = rl),
          (e = wl),
          (rl = null),
          xt(l, t, u),
          (rl = a),
          (wl = e),
          rl !== null)
        )
          if (wl)
            try {
              (rl.nodeType === 9
                ? rl.body
                : rl.nodeName === "HTML"
                ? rl.ownerDocument.body
                : rl
              ).removeChild(u.stateNode);
            } catch (n) {
              fl(u, t, n);
            }
          else
            try {
              rl.removeChild(u.stateNode);
            } catch (n) {
              fl(u, t, n);
            }
        break;
      case 18:
        rl !== null &&
          (wl
            ? ((l = rl),
              uy(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                u.stateNode
              ),
              Oa(l))
            : uy(rl, u.stateNode));
        break;
      case 4:
        (a = rl),
          (e = wl),
          (rl = u.stateNode.containerInfo),
          (wl = !0),
          xt(l, t, u),
          (rl = a),
          (wl = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        cu(2, u, t), pl || cu(4, u, t), xt(l, t, u);
        break;
      case 1:
        pl ||
          (pt(u, t),
          (a = u.stateNode),
          typeof a.componentWillUnmount == "function" && a0(u, t, a)),
          xt(l, t, u);
        break;
      case 21:
        xt(l, t, u);
        break;
      case 22:
        (pl = (a = pl) || u.memoizedState !== null), xt(l, t, u), (pl = a);
        break;
      default:
        xt(l, t, u);
    }
  }
  function y0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Oa(l);
      } catch (u) {
        fl(t, t.return, u);
      }
    }
  }
  function m0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Oa(l);
      } catch (u) {
        fl(t, t.return, u);
      }
  }
  function Hv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new c0()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new c0()),
          t
        );
      default:
        throw Error(i(435, l.tag));
    }
  }
  function rn(l, t) {
    var u = Hv(l);
    t.forEach(function (a) {
      if (!u.has(a)) {
        u.add(a);
        var e = Qv.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Wl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a],
          n = l,
          f = t,
          c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (hu(c.type)) {
                (rl = c.stateNode), (wl = !1);
                break l;
              }
              break;
            case 5:
              (rl = c.stateNode), (wl = !1);
              break l;
            case 3:
            case 4:
              (rl = c.stateNode.containerInfo), (wl = !0);
              break l;
          }
          c = c.return;
        }
        if (rl === null) throw Error(i(160));
        o0(n, f, e),
          (rl = null),
          (wl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) v0(t, l), (t = t.sibling);
  }
  var zt = null;
  function v0(l, t) {
    var u = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Wl(t, l),
          $l(l),
          a & 4 && (cu(3, l, l.return), ae(3, l), cu(5, l, l.return));
        break;
      case 1:
        Wl(t, l),
          $l(l),
          a & 512 && (pl || u === null || pt(u, u.return)),
          a & 64 &&
            Lt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((u = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = u === null ? a : u.concat(a)))));
        break;
      case 26:
        var e = zt;
        if (
          (Wl(t, l),
          $l(l),
          a & 512 && (pl || u === null || pt(u, u.return)),
          a & 4)
        ) {
          var n = u !== null ? u.memoizedState : null;
          if (((a = l.memoizedState), u === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  (a = l.type),
                    (u = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (a) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ha] ||
                          n[ql] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(a)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Gl(n, a, u),
                        (n[ql] = l),
                        Hl(n),
                        (a = n);
                      break l;
                    case "link":
                      var f = vy("link", "href", e).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("href") ===
                              (u.href == null || u.href === ""
                                ? null
                                : u.href) &&
                              n.getAttribute("rel") ===
                                (u.rel == null ? null : u.rel) &&
                              n.getAttribute("title") ===
                                (u.title == null ? null : u.title) &&
                              n.getAttribute("crossorigin") ===
                                (u.crossOrigin == null ? null : u.crossOrigin))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        Gl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (f = vy("meta", "content", e).get(
                          a + (u.content || "")
                        ))
                      ) {
                        for (c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("content") ===
                              (u.content == null ? null : "" + u.content) &&
                              n.getAttribute("name") ===
                                (u.name == null ? null : u.name) &&
                              n.getAttribute("property") ===
                                (u.property == null ? null : u.property) &&
                              n.getAttribute("http-equiv") ===
                                (u.httpEquiv == null ? null : u.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (u.charSet == null ? null : u.charSet))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(a)),
                        Gl(n, a, u),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(i(468, a));
                  }
                  (n[ql] = l), Hl(n), (a = n);
                }
                l.stateNode = a;
              } else hy(e, l.type, l.stateNode);
            else l.stateNode = my(e, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? u.stateNode !== null &&
                    ((u = u.stateNode), u.parentNode.removeChild(u))
                  : n.count--,
                a === null
                  ? hy(e, l.type, l.stateNode)
                  : my(e, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Ac(l, l.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        Wl(t, l),
          $l(l),
          a & 512 && (pl || u === null || pt(u, u.return)),
          u !== null && a & 4 && Ac(l, l.memoizedProps, u.memoizedProps);
        break;
      case 5:
        if (
          (Wl(t, l),
          $l(l),
          a & 512 && (pl || u === null || pt(u, u.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Wu(e, "");
          } catch (R) {
            fl(l, l.return, R);
          }
        }
        a & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), Ac(l, e, u !== null ? u.memoizedProps : e)),
          a & 1024 && (Mc = !0);
        break;
      case 6:
        if ((Wl(t, l), $l(l), a & 4)) {
          if (l.stateNode === null) throw Error(i(162));
          (a = l.memoizedProps), (u = l.stateNode);
          try {
            u.nodeValue = a;
          } catch (R) {
            fl(l, l.return, R);
          }
        }
        break;
      case 3:
        if (
          ((Rn = null),
          (e = zt),
          (zt = Nn(t.containerInfo)),
          Wl(t, l),
          (zt = e),
          $l(l),
          a & 4 && u !== null && u.memoizedState.isDehydrated)
        )
          try {
            Oa(t.containerInfo);
          } catch (R) {
            fl(l, l.return, R);
          }
        Mc && ((Mc = !1), h0(l));
        break;
      case 4:
        (a = zt),
          (zt = Nn(l.stateNode.containerInfo)),
          Wl(t, l),
          $l(l),
          (zt = a);
        break;
      case 12:
        Wl(t, l), $l(l);
        break;
      case 31:
        Wl(t, l),
          $l(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), rn(l, a)));
        break;
      case 13:
        Wl(t, l),
          $l(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (u !== null && u.memoizedState !== null) &&
            (gn = Il()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), rn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var s = u !== null && u.memoizedState !== null,
          r = Lt,
          T = pl;
        if (
          ((Lt = r || e),
          (pl = T || s),
          Wl(t, l),
          (pl = T),
          (Lt = r),
          $l(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (u === null || s || Lt || pl || Gu(l)),
              u = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                s = u = t;
                try {
                  if (((n = s.stateNode), e))
                    (f = n.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    c = s.stateNode;
                    var _ = s.memoizedProps.style,
                      S =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    c.style.display =
                      S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (R) {
                  fl(s, s.return, R);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                s = t;
                try {
                  s.stateNode.nodeValue = e ? "" : s.memoizedProps;
                } catch (R) {
                  fl(s, s.return, R);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                s = t;
                try {
                  var E = s.stateNode;
                  e ? ay(E, !0) : ay(s.stateNode, !1);
                } catch (R) {
                  fl(s, s.return, R);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), (t = t.return);
            }
            u === t && (u = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((u = a.retryQueue),
            u !== null && ((a.retryQueue = null), rn(l, u))));
        break;
      case 19:
        Wl(t, l),
          $l(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), rn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Wl(t, l), $l(l);
    }
  }
  function $l(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (n0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(i(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode,
              n = _c(l);
            dn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Wu(f, ""), (u.flags &= -33));
            var c = _c(l);
            dn(l, c, f);
            break;
          case 3:
          case 4:
            var s = u.stateNode.containerInfo,
              r = _c(l);
            Oc(l, r, s);
            break;
          default:
            throw Error(i(161));
        }
      } catch (T) {
        fl(l, l.return, T);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function h0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        h0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) i0(l, t.alternate, t), (t = t.sibling);
  }
  function Gu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cu(4, t, t.return), Gu(t);
          break;
        case 1:
          pt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && a0(t, t.return, u),
            Gu(t);
          break;
        case 27:
          ve(t.stateNode);
        case 26:
        case 5:
          pt(t, t.return), Gu(t);
          break;
        case 22:
          t.memoizedState === null && Gu(t);
          break;
        case 30:
          Gu(t);
          break;
        default:
          Gu(t);
      }
      l = l.sibling;
    }
  }
  function Kt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        e = l,
        n = t,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Kt(e, n, u), ae(4, n);
          break;
        case 1:
          if (
            (Kt(e, n, u),
            (a = n),
            (e = a.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (r) {
              fl(a, a.return, r);
            }
          if (((a = n), (e = a.updateQueue), e !== null)) {
            var c = a.stateNode;
            try {
              var s = e.shared.hiddenCallbacks;
              if (s !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < s.length; e++)
                  Vs(s[e], c);
            } catch (r) {
              fl(a, a.return, r);
            }
          }
          u && f & 64 && u0(n), ee(n, n.return);
          break;
        case 27:
          f0(n);
        case 26:
        case 5:
          Kt(e, n, u), u && a === null && f & 4 && e0(n), ee(n, n.return);
          break;
        case 12:
          Kt(e, n, u);
          break;
        case 31:
          Kt(e, n, u), u && f & 4 && y0(e, n);
          break;
        case 13:
          Kt(e, n, u), u && f & 4 && m0(e, n);
          break;
        case 22:
          n.memoizedState === null && Kt(e, n, u), ee(n, n.return);
          break;
        case 30:
          break;
        default:
          Kt(e, n, u);
      }
      t = t.sibling;
    }
  }
  function Dc(l, t) {
    var u = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (u = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function pc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Va(l));
  }
  function At(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) d0(l, t, u, a), (t = t.sibling);
  }
  function d0(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, u, a), e & 2048 && ae(9, t);
        break;
      case 1:
        At(l, t, u, a);
        break;
      case 3:
        At(l, t, u, a),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Va(l)));
        break;
      case 12:
        if (e & 2048) {
          At(l, t, u, a), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              f = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                f,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (s) {
            fl(t, t.return, s);
          }
        } else At(l, t, u, a);
        break;
      case 31:
        At(l, t, u, a);
        break;
      case 13:
        At(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? At(l, t, u, a)
              : ne(l, t)
            : n._visibility & 2
            ? At(l, t, u, a)
            : ((n._visibility |= 2),
              ha(l, t, u, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && Dc(f, t);
        break;
      case 24:
        At(l, t, u, a), e & 2048 && pc(t.alternate, t);
        break;
      default:
        At(l, t, u, a);
    }
  }
  function ha(l, t, u, a, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var n = l,
        f = t,
        c = u,
        s = a,
        r = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ha(n, f, c, s, e), ae(8, f);
          break;
        case 23:
          break;
        case 22:
          var T = f.stateNode;
          f.memoizedState !== null
            ? T._visibility & 2
              ? ha(n, f, c, s, e)
              : ne(n, f)
            : ((T._visibility |= 2), ha(n, f, c, s, e)),
            e && r & 2048 && Dc(f.alternate, f);
          break;
        case 24:
          ha(n, f, c, s, e), e && r & 2048 && pc(f.alternate, f);
          break;
        default:
          ha(n, f, c, s, e);
      }
      t = t.sibling;
    }
  }
  function ne(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l,
          a = t,
          e = a.flags;
        switch (a.tag) {
          case 22:
            ne(u, a), e & 2048 && Dc(a.alternate, a);
            break;
          case 24:
            ne(u, a), e & 2048 && pc(a.alternate, a);
            break;
          default:
            ne(u, a);
        }
        t = t.sibling;
      }
  }
  var fe = 8192;
  function da(l, t, u) {
    if (l.subtreeFlags & fe)
      for (l = l.child; l !== null; ) r0(l, t, u), (l = l.sibling);
  }
  function r0(l, t, u) {
    switch (l.tag) {
      case 26:
        da(l, t, u),
          l.flags & fe &&
            l.memoizedState !== null &&
            Sh(u, zt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        da(l, t, u);
        break;
      case 3:
      case 4:
        var a = zt;
        (zt = Nn(l.stateNode.containerInfo)), da(l, t, u), (zt = a);
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = fe), (fe = 16777216), da(l, t, u), (fe = a))
            : da(l, t, u));
        break;
      default:
        da(l, t, u);
    }
  }
  function S0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ce(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Rl = a), b0(a, l);
        }
      S0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) g0(l), (l = l.sibling);
  }
  function g0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ce(l), l.flags & 2048 && cu(9, l, l.return);
        break;
      case 3:
        ce(l);
        break;
      case 12:
        ce(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Sn(l))
          : ce(l);
        break;
      default:
        ce(l);
    }
  }
  function Sn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          (Rl = a), b0(a, l);
        }
      S0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          cu(8, t, t.return), Sn(t);
          break;
        case 22:
          (u = t.stateNode),
            u._visibility & 2 && ((u._visibility &= -3), Sn(t));
          break;
        default:
          Sn(t);
      }
      l = l.sibling;
    }
  }
  function b0(l, t) {
    for (; Rl !== null; ) {
      var u = Rl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Va(u.memoizedState.cache);
      }
      if (((a = u.child), a !== null)) (a.return = u), (Rl = a);
      else
        l: for (u = l; Rl !== null; ) {
          a = Rl;
          var e = a.sibling,
            n = a.return;
          if ((s0(a), a === u)) {
            Rl = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Rl = e);
            break l;
          }
          Rl = n;
        }
    }
  }
  var Rv = {
      getCacheForType: function (l) {
        var t = Yl(Ol),
          u = t.data.get(l);
        return u === void 0 && ((u = l()), t.data.set(l, u)), u;
      },
      cacheSignal: function () {
        return Yl(Ol).controller.signal;
      },
    },
    Cv = typeof WeakMap == "function" ? WeakMap : Map,
    al = 0,
    vl = null,
    W = null,
    F = 0,
    nl = 0,
    nt = null,
    iu = !1,
    ra = !1,
    Uc = !1,
    Jt = 0,
    El = 0,
    su = 0,
    Xu = 0,
    Nc = 0,
    ft = 0,
    Sa = 0,
    ie = null,
    Fl = null,
    Hc = !1,
    gn = 0,
    E0 = 0,
    bn = 1 / 0,
    En = null,
    ou = null,
    Ul = 0,
    yu = null,
    ga = null,
    wt = 0,
    Rc = 0,
    Cc = null,
    T0 = null,
    se = 0,
    qc = null;
  function ct() {
    return (al & 2) !== 0 && F !== 0 ? F & -F : z.T !== null ? Qc() : Yi();
  }
  function z0() {
    if (ft === 0)
      if ((F & 536870912) === 0 || P) {
        var l = De;
        (De <<= 1), (De & 3932160) === 0 && (De = 262144), (ft = l);
      } else ft = 536870912;
    return (l = at.current), l !== null && (l.flags |= 32), ft;
  }
  function kl(l, t, u) {
    ((l === vl && (nl === 2 || nl === 9)) || l.cancelPendingCommit !== null) &&
      (ba(l, 0), mu(l, F, ft, !1)),
      Na(l, u),
      ((al & 2) === 0 || l !== vl) &&
        (l === vl &&
          ((al & 2) === 0 && (Xu |= u), El === 4 && mu(l, F, ft, !1)),
        Ut(l));
  }
  function A0(l, t, u) {
    if ((al & 6) !== 0) throw Error(i(327));
    var a = (!u && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ua(l, t),
      e = a ? Yv(l, t) : Yc(l, t, !0),
      n = a;
    do {
      if (e === 0) {
        ra && !a && mu(l, t, 0, !1);
        break;
      } else {
        if (((u = l.current.alternate), n && !qv(u))) {
          (e = Yc(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var f = 0;
          else
            (f = l.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ie;
              var s = c.current.memoizedState.isDehydrated;
              if ((s && (ba(c, f).flags |= 256), (f = Yc(c, f, !1)), f !== 2)) {
                if (Uc && !s) {
                  (c.errorRecoveryDisabledLanes |= n), (Xu |= n), (e = 4);
                  break l;
                }
                (n = Fl),
                  (Fl = e),
                  n !== null && (Fl === null ? (Fl = n) : Fl.push.apply(Fl, n));
              }
              e = f;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          ba(l, 0), mu(l, t, 0, !0);
          break;
        }
        l: {
          switch (((a = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              mu(a, t, ft, !iu);
              break l;
            case 2:
              Fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((e = gn + 300 - Il()), 10 < e)) {
            if ((mu(a, t, ft, !iu), Ue(a, 0, !0) !== 0)) break l;
            (wt = t),
              (a.timeoutHandle = ly(
                _0.bind(
                  null,
                  a,
                  u,
                  Fl,
                  En,
                  Hc,
                  t,
                  ft,
                  Xu,
                  Sa,
                  iu,
                  n,
                  "Throttled",
                  -0,
                  0
                ),
                e
              ));
            break l;
          }
          _0(a, u, Fl, En, Hc, t, ft, Xu, Sa, iu, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ut(l);
  }
  function _0(l, t, u, a, e, n, f, c, s, r, T, _, S, E) {
    if (
      ((l.timeoutHandle = -1),
      (_ = t.subtreeFlags),
      _ & 8192 || (_ & 16785408) === 16785408)
    ) {
      (_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt,
      }),
        r0(t, n, _);
      var R =
        (n & 62914560) === n ? gn - Il() : (n & 4194048) === n ? E0 - Il() : 0;
      if (((R = gh(_, R)), R !== null)) {
        (wt = n),
          (l.cancelPendingCommit = R(
            R0.bind(null, l, t, n, u, a, e, f, c, s, T, _, null, S, E)
          )),
          mu(l, n, f, !r);
        return;
      }
    }
    R0(l, t, n, u, a, e, f, c, s);
  }
  function qv(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if (
        (u === 0 || u === 11 || u === 15) &&
        t.flags & 16384 &&
        ((u = t.updateQueue), u !== null && ((u = u.stores), u !== null))
      )
        for (var a = 0; a < u.length; a++) {
          var e = u[a],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!tt(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((u = t.child), t.subtreeFlags & 16384 && u !== null))
        (u.return = t), (t = u);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function mu(l, t, u, a) {
    (t &= ~Nc),
      (t &= ~Xu),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - lt(e),
        f = 1 << n;
      (a[n] = -1), (e &= ~f);
    }
    u !== 0 && Ci(l, u, t);
  }
  function Tn() {
    return (al & 6) === 0 ? (oe(0), !1) : !0;
  }
  function Bc() {
    if (W !== null) {
      if (nl === 0) var l = W.return;
      else (l = W), (Yt = Nu = null), kf(l), (sa = null), (Ja = 0), (l = W);
      for (; l !== null; ) t0(l.alternate, l), (l = l.return);
      W = null;
    }
  }
  function ba(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && ((l.timeoutHandle = -1), lh(u)),
      (u = l.cancelPendingCommit),
      u !== null && ((l.cancelPendingCommit = null), u()),
      (wt = 0),
      Bc(),
      (vl = l),
      (W = u = qt(l.current, null)),
      (F = t),
      (nl = 0),
      (nt = null),
      (iu = !1),
      (ra = Ua(l, t)),
      (Uc = !1),
      (Sa = ft = Nc = Xu = su = El = 0),
      (Fl = ie = null),
      (Hc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - lt(a),
          n = 1 << e;
        (t |= l[e]), (a &= ~n);
      }
    return (Jt = t), Ze(), u;
  }
  function O0(l, t) {
    (V = null),
      (z.H = le),
      t === ia || t === $e
        ? ((t = Qs()), (nl = 3))
        : t === Xf
        ? ((t = Qs()), (nl = 4))
        : (nl =
            t === vc
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (nt = t),
      W === null && ((El = 1), on(l, mt(t, l.current)));
  }
  function M0() {
    var l = at.current;
    return l === null
      ? !0
      : (F & 4194048) === F
      ? rt === null
      : (F & 62914560) === F || (F & 536870912) !== 0
      ? l === rt
      : !1;
  }
  function D0() {
    var l = z.H;
    return (z.H = le), l === null ? le : l;
  }
  function p0() {
    var l = z.A;
    return (z.A = Rv), l;
  }
  function zn() {
    (El = 4),
      iu || ((F & 4194048) !== F && at.current !== null) || (ra = !0),
      ((su & 134217727) === 0 && (Xu & 134217727) === 0) ||
        vl === null ||
        mu(vl, F, ft, !1);
  }
  function Yc(l, t, u) {
    var a = al;
    al |= 2;
    var e = D0(),
      n = p0();
    (vl !== l || F !== t) && ((En = null), ba(l, t)), (t = !1);
    var f = El;
    l: do
      try {
        if (nl !== 0 && W !== null) {
          var c = W,
            s = nt;
          switch (nl) {
            case 8:
              Bc(), (f = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              at.current === null && (t = !0);
              var r = nl;
              if (((nl = 0), (nt = null), Ea(l, c, s, r), u && ra)) {
                f = 0;
                break l;
              }
              break;
            default:
              (r = nl), (nl = 0), (nt = null), Ea(l, c, s, r);
          }
        }
        Bv(), (f = El);
        break;
      } catch (T) {
        O0(l, T);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Yt = Nu = null),
      (al = a),
      (z.H = e),
      (z.A = n),
      W === null && ((vl = null), (F = 0), Ze()),
      f
    );
  }
  function Bv() {
    for (; W !== null; ) U0(W);
  }
  function Yv(l, t) {
    var u = al;
    al |= 2;
    var a = D0(),
      e = p0();
    vl !== l || F !== t
      ? ((En = null), (bn = Il() + 500), ba(l, t))
      : (ra = Ua(l, t));
    l: do
      try {
        if (nl !== 0 && W !== null) {
          t = W;
          var n = nt;
          t: switch (nl) {
            case 1:
              (nl = 0), (nt = null), Ea(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Gs(n)) {
                (nl = 0), (nt = null), N0(t);
                break;
              }
              (t = function () {
                (nl !== 2 && nl !== 9) || vl !== l || (nl = 7), Ut(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              Gs(n)
                ? ((nl = 0), (nt = null), N0(t))
                : ((nl = 0), (nt = null), Ea(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (W.tag) {
                case 26:
                  f = W.memoizedState;
                case 5:
                case 27:
                  var c = W;
                  if (f ? dy(f) : c.stateNode.complete) {
                    (nl = 0), (nt = null);
                    var s = c.sibling;
                    if (s !== null) W = s;
                    else {
                      var r = c.return;
                      r !== null ? ((W = r), An(r)) : (W = null);
                    }
                    break t;
                  }
              }
              (nl = 0), (nt = null), Ea(l, t, n, 5);
              break;
            case 6:
              (nl = 0), (nt = null), Ea(l, t, n, 6);
              break;
            case 8:
              Bc(), (El = 6);
              break l;
            default:
              throw Error(i(462));
          }
        }
        jv();
        break;
      } catch (T) {
        O0(l, T);
      }
    while (!0);
    return (
      (Yt = Nu = null),
      (z.H = a),
      (z.A = e),
      (al = u),
      W !== null ? 0 : ((vl = null), (F = 0), Ze(), El)
    );
  }
  function jv() {
    for (; W !== null && !fm(); ) U0(W);
  }
  function U0(l) {
    var t = Po(l.alternate, l, Jt);
    (l.memoizedProps = l.pendingProps), t === null ? An(l) : (W = t);
  }
  function N0(l) {
    var t = l,
      u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = wo(u, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = wo(u, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        kf(t);
      default:
        t0(u, t), (t = W = Ds(t, Jt)), (t = Po(u, t, Jt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? An(l) : (W = t);
  }
  function Ea(l, t, u, a) {
    (Yt = Nu = null), kf(t), (sa = null), (Ja = 0);
    var e = t.return;
    try {
      if (Ov(l, e, t, u, F)) {
        (El = 1), on(l, mt(u, l.current)), (W = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((W = e), n);
      (El = 1), on(l, mt(u, l.current)), (W = null);
      return;
    }
    t.flags & 32768
      ? (P || a === 1
          ? (l = !0)
          : ra || (F & 536870912) !== 0
          ? (l = !1)
          : ((iu = l = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = at.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        H0(t, l))
      : An(t);
  }
  function An(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        H0(t, iu);
        return;
      }
      l = t.return;
      var u = pv(t.alternate, t, Jt);
      if (u !== null) {
        W = u;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        W = t;
        return;
      }
      W = t = l;
    } while (t !== null);
    El === 0 && (El = 5);
  }
  function H0(l, t) {
    do {
      var u = Uv(l.alternate, l);
      if (u !== null) {
        (u.flags &= 32767), (W = u);
        return;
      }
      if (
        ((u = l.return),
        u !== null &&
          ((u.flags |= 32768), (u.subtreeFlags = 0), (u.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        W = l;
        return;
      }
      W = l = u;
    } while (l !== null);
    (El = 6), (W = null);
  }
  function R0(l, t, u, a, e, n, f, c, s) {
    l.cancelPendingCommit = null;
    do _n();
    while (Ul !== 0);
    if ((al & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === l.current) throw Error(i(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= _f),
        rm(l, u, n, f, c, s),
        l === vl && ((W = vl = null), (F = 0)),
        (ga = t),
        (yu = l),
        (wt = u),
        (Rc = n),
        (Cc = e),
        (T0 = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Zv(Oe, function () {
              return j0(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = z.T), (z.T = null), (e = U.p), (U.p = 2), (f = al), (al |= 4);
        try {
          Nv(l, t, u);
        } finally {
          (al = f), (U.p = e), (z.T = a);
        }
      }
      (Ul = 1), C0(), q0(), B0();
    }
  }
  function C0() {
    if (Ul === 1) {
      Ul = 0;
      var l = yu,
        t = ga,
        u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        (u = z.T), (z.T = null);
        var a = U.p;
        U.p = 2;
        var e = al;
        al |= 4;
        try {
          v0(t, l);
          var n = Wc,
            f = gs(l.containerInfo),
            c = n.focusedElem,
            s = n.selectionRange;
          if (
            f !== c &&
            c &&
            c.ownerDocument &&
            Ss(c.ownerDocument.documentElement, c)
          ) {
            if (s !== null && bf(c)) {
              var r = s.start,
                T = s.end;
              if ((T === void 0 && (T = r), "selectionStart" in c))
                (c.selectionStart = r),
                  (c.selectionEnd = Math.min(T, c.value.length));
              else {
                var _ = c.ownerDocument || document,
                  S = (_ && _.defaultView) || window;
                if (S.getSelection) {
                  var E = S.getSelection(),
                    R = c.textContent.length,
                    G = Math.min(s.start, R),
                    ol = s.end === void 0 ? G : Math.min(s.end, R);
                  !E.extend && G > ol && ((f = ol), (ol = G), (G = f));
                  var h = rs(c, G),
                    y = rs(c, ol);
                  if (
                    h &&
                    y &&
                    (E.rangeCount !== 1 ||
                      E.anchorNode !== h.node ||
                      E.anchorOffset !== h.offset ||
                      E.focusNode !== y.node ||
                      E.focusOffset !== y.offset)
                  ) {
                    var d = _.createRange();
                    d.setStart(h.node, h.offset),
                      E.removeAllRanges(),
                      G > ol
                        ? (E.addRange(d), E.extend(y.node, y.offset))
                        : (d.setEnd(y.node, y.offset), E.addRange(d));
                  }
                }
              }
            }
            for (_ = [], E = c; (E = E.parentNode); )
              E.nodeType === 1 &&
                _.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < _.length;
              c++
            ) {
              var A = _[c];
              (A.element.scrollLeft = A.left), (A.element.scrollTop = A.top);
            }
          }
          (Yn = !!wc), (Wc = wc = null);
        } finally {
          (al = e), (U.p = a), (z.T = u);
        }
      }
      (l.current = t), (Ul = 2);
    }
  }
  function q0() {
    if (Ul === 2) {
      Ul = 0;
      var l = yu,
        t = ga,
        u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        (u = z.T), (z.T = null);
        var a = U.p;
        U.p = 2;
        var e = al;
        al |= 4;
        try {
          i0(l, t.alternate, t);
        } finally {
          (al = e), (U.p = a), (z.T = u);
        }
      }
      Ul = 3;
    }
  }
  function B0() {
    if (Ul === 4 || Ul === 3) {
      (Ul = 0), cm();
      var l = yu,
        t = ga,
        u = wt,
        a = T0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ul = 5)
        : ((Ul = 0), (ga = yu = null), Y0(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ou = null),
        Pn(u),
        (t = t.stateNode),
        Pl && typeof Pl.onCommitFiberRoot == "function")
      )
        try {
          Pl.onCommitFiberRoot(pa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = z.T), (e = U.p), (U.p = 2), (z.T = null);
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (z.T = t), (U.p = e);
        }
      }
      (wt & 3) !== 0 && _n(),
        Ut(l),
        (e = l.pendingLanes),
        (u & 261930) !== 0 && (e & 42) !== 0
          ? l === qc
            ? se++
            : ((se = 0), (qc = l))
          : (se = 0),
        oe(0);
    }
  }
  function Y0(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Va(t)));
  }
  function _n() {
    return C0(), q0(), B0(), j0();
  }
  function j0() {
    if (Ul !== 5) return !1;
    var l = yu,
      t = Rc;
    Rc = 0;
    var u = Pn(wt),
      a = z.T,
      e = U.p;
    try {
      (U.p = 32 > u ? 32 : u), (z.T = null), (u = Cc), (Cc = null);
      var n = yu,
        f = wt;
      if (((Ul = 0), (ga = yu = null), (wt = 0), (al & 6) !== 0))
        throw Error(i(331));
      var c = al;
      if (
        ((al |= 4),
        g0(n.current),
        d0(n, n.current, f, u),
        (al = c),
        oe(0, !1),
        Pl && typeof Pl.onPostCommitFiberRoot == "function")
      )
        try {
          Pl.onPostCommitFiberRoot(pa, n);
        } catch {}
      return !0;
    } finally {
      (U.p = e), (z.T = a), Y0(l, t);
    }
  }
  function G0(l, t, u) {
    (t = mt(u, t)),
      (t = mc(l.stateNode, t, 2)),
      (l = eu(l, t, 2)),
      l !== null && (Na(l, 2), Ut(l));
  }
  function fl(l, t, u) {
    if (l.tag === 3) G0(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          G0(t, l, u);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ou === null || !ou.has(a)))
          ) {
            (l = mt(u, l)),
              (u = Xo(2)),
              (a = eu(t, u, 2)),
              a !== null && (Qo(u, a, t, l), Na(a, 2), Ut(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function jc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Cv();
      var e = new Set();
      a.set(t, e);
    } else (e = a.get(t)), e === void 0 && ((e = new Set()), a.set(t, e));
    e.has(u) ||
      ((Uc = !0), e.add(u), (l = Gv.bind(null, l, t, u)), t.then(l, l));
  }
  function Gv(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & u),
      (l.warmLanes &= ~u),
      vl === l &&
        (F & u) === u &&
        (El === 4 || (El === 3 && (F & 62914560) === F && 300 > Il() - gn)
          ? (al & 2) === 0 && ba(l, 0)
          : (Nc |= u),
        Sa === F && (Sa = 0)),
      Ut(l);
  }
  function X0(l, t) {
    t === 0 && (t = Ri()), (l = Du(l, t)), l !== null && (Na(l, t), Ut(l));
  }
  function Xv(l) {
    var t = l.memoizedState,
      u = 0;
    t !== null && (u = t.retryLane), X0(l, u);
  }
  function Qv(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(t), X0(l, u);
  }
  function Zv(l, t) {
    return $n(l, t);
  }
  var On = null,
    Ta = null,
    Gc = !1,
    Mn = !1,
    Xc = !1,
    vu = 0;
  function Ut(l) {
    l !== Ta &&
      l.next === null &&
      (Ta === null ? (On = Ta = l) : (Ta = Ta.next = l)),
      (Mn = !0),
      Gc || ((Gc = !0), xv());
  }
  function oe(l, t) {
    if (!Xc && Mn) {
      Xc = !0;
      do
        for (var u = !1, a = On; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes,
                c = a.pingedLanes;
              (n = (1 << (31 - lt(42 | l) + 1)) - 1),
                (n &= e & ~(f & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((u = !0), x0(a, n));
          } else
            (n = F),
              (n = Ue(
                a,
                a === vl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Ua(a, n) || ((u = !0), x0(a, n));
          a = a.next;
        }
      while (u);
      Xc = !1;
    }
  }
  function Lv() {
    Q0();
  }
  function Q0() {
    Mn = Gc = !1;
    var l = 0;
    vu !== 0 && Pv() && (l = vu);
    for (var t = Il(), u = null, a = On; a !== null; ) {
      var e = a.next,
        n = Z0(a, t);
      n === 0
        ? ((a.next = null),
          u === null ? (On = e) : (u.next = e),
          e === null && (Ta = u))
        : ((u = a), (l !== 0 || (n & 3) !== 0) && (Mn = !0)),
        (a = e);
    }
    (Ul !== 0 && Ul !== 5) || oe(l), vu !== 0 && (vu = 0);
  }
  function Z0(l, t) {
    for (
      var u = l.suspendedLanes,
        a = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var f = 31 - lt(n),
        c = 1 << f,
        s = e[f];
      s === -1
        ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = dm(c, t))
        : s <= t && (l.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((t = vl),
      (u = F),
      (u = Ue(
        l,
        l === t ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (a = l.callbackNode),
      u === 0 ||
        (l === t && (nl === 2 || nl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Fn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((u & 3) === 0 || Ua(l, u)) {
      if (((t = u & -u), t === l.callbackPriority)) return t;
      switch ((a !== null && Fn(a), Pn(u))) {
        case 2:
        case 8:
          u = Ni;
          break;
        case 32:
          u = Oe;
          break;
        case 268435456:
          u = Hi;
          break;
        default:
          u = Oe;
      }
      return (
        (a = L0.bind(null, l)),
        (u = $n(u, a)),
        (l.callbackPriority = t),
        (l.callbackNode = u),
        t
      );
    }
    return (
      a !== null && a !== null && Fn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function L0(l, t) {
    if (Ul !== 0 && Ul !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var u = l.callbackNode;
    if (_n() && l.callbackNode !== u) return null;
    var a = F;
    return (
      (a = Ue(
        l,
        l === vl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (A0(l, a, t),
          Z0(l, Il()),
          l.callbackNode != null && l.callbackNode === u
            ? L0.bind(null, l)
            : null)
    );
  }
  function x0(l, t) {
    if (_n()) return null;
    A0(l, t, !0);
  }
  function xv() {
    th(function () {
      (al & 6) !== 0 ? $n(Ui, Lv) : Q0();
    });
  }
  function Qc() {
    if (vu === 0) {
      var l = fa;
      l === 0 && ((l = Me), (Me <<= 1), (Me & 261888) === 0 && (Me = 256)),
        (vu = l);
    }
    return vu;
  }
  function V0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Ce("" + l);
  }
  function K0(l, t) {
    var u = t.ownerDocument.createElement("input");
    return (
      (u.name = t.name),
      (u.value = t.value),
      l.id && u.setAttribute("form", l.id),
      t.parentNode.insertBefore(u, t),
      (l = new FormData(l)),
      u.parentNode.removeChild(u),
      l
    );
  }
  function Vv(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = V0((e[Kl] || null).action),
        f = a.submitter;
      f &&
        ((t = (t = f[Kl] || null)
          ? V0(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((n = t), (f = null)));
      var c = new je("action", "action", null, a, e);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (vu !== 0) {
                  var s = f ? K0(e, f) : new FormData(e);
                  fc(
                    u,
                    { pending: !0, data: s, method: e.method, action: n },
                    null,
                    s
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (s = f ? K0(e, f) : new FormData(e)),
                  fc(
                    u,
                    { pending: !0, data: s, method: e.method, action: n },
                    n,
                    s
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Zc = 0; Zc < Af.length; Zc++) {
    var Lc = Af[Zc],
      Kv = Lc.toLowerCase(),
      Jv = Lc[0].toUpperCase() + Lc.slice(1);
    Tt(Kv, "on" + Jv);
  }
  Tt(Ts, "onAnimationEnd"),
    Tt(zs, "onAnimationIteration"),
    Tt(As, "onAnimationStart"),
    Tt("dblclick", "onDoubleClick"),
    Tt("focusin", "onFocus"),
    Tt("focusout", "onBlur"),
    Tt(iv, "onTransitionRun"),
    Tt(sv, "onTransitionStart"),
    Tt(ov, "onTransitionCancel"),
    Tt(_s, "onTransitionEnd"),
    Ju("onMouseEnter", ["mouseout", "mouseover"]),
    Ju("onMouseLeave", ["mouseout", "mouseover"]),
    Ju("onPointerEnter", ["pointerout", "pointerover"]),
    Ju("onPointerLeave", ["pointerout", "pointerover"]),
    Au(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Au(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Au("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Au(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Au(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Au(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var ye =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    wv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ye)
    );
  function J0(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u],
        e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f],
              s = c.instance,
              r = c.currentTarget;
            if (((c = c.listener), s !== n && e.isPropagationStopped()))
              break l;
            (n = c), (e.currentTarget = r);
            try {
              n(e);
            } catch (T) {
              Qe(T);
            }
            (e.currentTarget = null), (n = s);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((c = a[f]),
              (s = c.instance),
              (r = c.currentTarget),
              (c = c.listener),
              s !== n && e.isPropagationStopped())
            )
              break l;
            (n = c), (e.currentTarget = r);
            try {
              n(e);
            } catch (T) {
              Qe(T);
            }
            (e.currentTarget = null), (n = s);
          }
      }
    }
  }
  function $(l, t) {
    var u = t[lf];
    u === void 0 && (u = t[lf] = new Set());
    var a = l + "__bubble";
    u.has(a) || (w0(t, l, 2, !1), u.add(a));
  }
  function xc(l, t, u) {
    var a = 0;
    t && (a |= 4), w0(u, l, a, t);
  }
  var Dn = "_reactListening" + Math.random().toString(36).slice(2);
  function Vc(l) {
    if (!l[Dn]) {
      (l[Dn] = !0),
        Xi.forEach(function (u) {
          u !== "selectionchange" && (wv.has(u) || xc(u, !1, l), xc(u, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Dn] || ((t[Dn] = !0), xc("selectionchange", !1, t));
    }
  }
  function w0(l, t, u, a) {
    switch (zy(t)) {
      case 2:
        var e = Th;
        break;
      case 8:
        e = zh;
        break;
      default:
        e = ni;
    }
    (u = e.bind(null, t, u, l)),
      (e = void 0),
      !of ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      a
        ? e !== void 0
          ? l.addEventListener(t, u, { capture: !0, passive: e })
          : l.addEventListener(t, u, !0)
        : e !== void 0
        ? l.addEventListener(t, u, { passive: e })
        : l.addEventListener(t, u, !1);
  }
  function Kc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var s = f.tag;
              if ((s === 3 || s === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (((f = xu(c)), f === null)) return;
            if (((s = f.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    ki(function () {
      var r = n,
        T = cf(u),
        _ = [];
      l: {
        var S = Os.get(l);
        if (S !== void 0) {
          var E = je,
            R = l;
          switch (l) {
            case "keypress":
              if (Be(u) === 0) break l;
            case "keydown":
            case "keyup":
              E = Qm;
              break;
            case "focusin":
              (R = "focus"), (E = hf);
              break;
            case "focusout":
              (R = "blur"), (E = hf);
              break;
            case "beforeblur":
            case "afterblur":
              E = hf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = ls;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = pm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = xm;
              break;
            case Ts:
            case zs:
            case As:
              E = Hm;
              break;
            case _s:
              E = Km;
              break;
            case "scroll":
            case "scrollend":
              E = Mm;
              break;
            case "wheel":
              E = wm;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = Cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = us;
              break;
            case "toggle":
            case "beforetoggle":
              E = $m;
          }
          var G = (t & 4) !== 0,
            ol = !G && (l === "scroll" || l === "scrollend"),
            h = G ? (S !== null ? S + "Capture" : null) : S;
          G = [];
          for (var y = r, d; y !== null; ) {
            var A = y;
            if (
              ((d = A.stateNode),
              (A = A.tag),
              (A !== 5 && A !== 26 && A !== 27) ||
                d === null ||
                h === null ||
                ((A = Ca(y, h)), A != null && G.push(me(y, A, d))),
              ol)
            )
              break;
            y = y.return;
          }
          0 < G.length &&
            ((S = new E(S, R, null, u, T)), _.push({ event: S, listeners: G }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((S = l === "mouseover" || l === "pointerover"),
            (E = l === "mouseout" || l === "pointerout"),
            S &&
              u !== ff &&
              (R = u.relatedTarget || u.fromElement) &&
              (xu(R) || R[Lu]))
          )
            break l;
          if (
            (E || S) &&
            ((S =
              T.window === T
                ? T
                : (S = T.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            E
              ? ((R = u.relatedTarget || u.toElement),
                (E = r),
                (R = R ? xu(R) : null),
                R !== null &&
                  ((ol = H(R)),
                  (G = R.tag),
                  R !== ol || (G !== 5 && G !== 27 && G !== 6)) &&
                  (R = null))
              : ((E = null), (R = r)),
            E !== R)
          ) {
            if (
              ((G = ls),
              (A = "onMouseLeave"),
              (h = "onMouseEnter"),
              (y = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((G = us),
                (A = "onPointerLeave"),
                (h = "onPointerEnter"),
                (y = "pointer")),
              (ol = E == null ? S : Ra(E)),
              (d = R == null ? S : Ra(R)),
              (S = new G(A, y + "leave", E, u, T)),
              (S.target = ol),
              (S.relatedTarget = d),
              (A = null),
              xu(T) === r &&
                ((G = new G(h, y + "enter", R, u, T)),
                (G.target = d),
                (G.relatedTarget = ol),
                (A = G)),
              (ol = A),
              E && R)
            )
              t: {
                for (G = Wv, h = E, y = R, d = 0, A = h; A; A = G(A)) d++;
                A = 0;
                for (var Y = y; Y; Y = G(Y)) A++;
                for (; 0 < d - A; ) (h = G(h)), d--;
                for (; 0 < A - d; ) (y = G(y)), A--;
                for (; d--; ) {
                  if (h === y || (y !== null && h === y.alternate)) {
                    G = h;
                    break t;
                  }
                  (h = G(h)), (y = G(y));
                }
                G = null;
              }
            else G = null;
            E !== null && W0(_, S, E, G, !1),
              R !== null && ol !== null && W0(_, ol, R, G, !0);
          }
        }
        l: {
          if (
            ((S = r ? Ra(r) : window),
            (E = S.nodeName && S.nodeName.toLowerCase()),
            E === "select" || (E === "input" && S.type === "file"))
          )
            var tl = os;
          else if (is(S))
            if (ys) tl = nv;
            else {
              tl = av;
              var B = uv;
            }
          else
            (E = S.nodeName),
              !E ||
              E.toLowerCase() !== "input" ||
              (S.type !== "checkbox" && S.type !== "radio")
                ? r && nf(r.elementType) && (tl = os)
                : (tl = ev);
          if (tl && (tl = tl(l, r))) {
            ss(_, tl, u, T);
            break l;
          }
          B && B(l, S, r),
            l === "focusout" &&
              r &&
              S.type === "number" &&
              r.memoizedProps.value != null &&
              ef(S, "number", S.value);
        }
        switch (((B = r ? Ra(r) : window), l)) {
          case "focusin":
            (is(B) || B.contentEditable === "true") &&
              ((Iu = B), (Ef = r), (Za = null));
            break;
          case "focusout":
            Za = Ef = Iu = null;
            break;
          case "mousedown":
            Tf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Tf = !1), bs(_, u, T);
            break;
          case "selectionchange":
            if (cv) break;
          case "keydown":
          case "keyup":
            bs(_, u, T);
        }
        var K;
        if (rf)
          l: {
            switch (l) {
              case "compositionstart":
                var k = "onCompositionStart";
                break l;
              case "compositionend":
                k = "onCompositionEnd";
                break l;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break l;
            }
            k = void 0;
          }
        else
          ku
            ? fs(l, u) && (k = "onCompositionEnd")
            : l === "keydown" &&
              u.keyCode === 229 &&
              (k = "onCompositionStart");
        k &&
          (as &&
            u.locale !== "ko" &&
            (ku || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && ku && (K = Ii())
              : ((kt = T),
                (yf = "value" in kt ? kt.value : kt.textContent),
                (ku = !0))),
          (B = pn(r, k)),
          0 < B.length &&
            ((k = new ts(k, l, null, u, T)),
            _.push({ event: k, listeners: B }),
            K ? (k.data = K) : ((K = cs(u)), K !== null && (k.data = K)))),
          (K = km ? Im(l, u) : Pm(l, u)) &&
            ((k = pn(r, "onBeforeInput")),
            0 < k.length &&
              ((B = new ts("onBeforeInput", "beforeinput", null, u, T)),
              _.push({ event: B, listeners: k }),
              (B.data = K))),
          Vv(_, l, r, u, T);
      }
      J0(_, t);
    });
  }
  function me(l, t, u) {
    return { instance: l, listener: t, currentTarget: u };
  }
  function pn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Ca(l, u)),
          e != null && a.unshift(me(l, e, n)),
          (e = Ca(l, t)),
          e != null && a.push(me(l, e, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function Wv(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function W0(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u,
        s = c.alternate,
        r = c.stateNode;
      if (((c = c.tag), s !== null && s === a)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        r === null ||
        ((s = r),
        e
          ? ((r = Ca(u, n)), r != null && f.unshift(me(u, r, s)))
          : e || ((r = Ca(u, n)), r != null && f.push(me(u, r, s)))),
        (u = u.return);
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var $v = /\r\n?/g,
    Fv = /\u0000|\uFFFD/g;
  function $0(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        $v,
        `
`
      )
      .replace(Fv, "");
  }
  function F0(l, t) {
    return (t = $0(t)), $0(l) === t;
  }
  function sl(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Wu(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Wu(l, "" + a);
        break;
      case "className":
        He(l, "class", a);
        break;
      case "tabIndex":
        He(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        He(l, u, a);
        break;
      case "style":
        $i(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          He(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(u);
          break;
        }
        (a = Ce("" + a)), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (u === "formAction"
              ? (t !== "input" && sl(l, t, "name", e.name, e, null),
                sl(l, t, "formEncType", e.formEncType, e, null),
                sl(l, t, "formMethod", e.formMethod, e, null),
                sl(l, t, "formTarget", e.formTarget, e, null))
              : (sl(l, t, "encType", e.encType, e, null),
                sl(l, t, "method", e.method, e, null),
                sl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        (a = Ce("" + a)), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "onScroll":
        a != null && $("scroll", l);
        break;
      case "onScrollEnd":
        a != null && $("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(i(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (u = Ce("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, "" + a)
          : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(u, "")
          : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(u, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(u, a)
          : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(u)
          : l.setAttribute(u, a);
        break;
      case "popover":
        $("beforetoggle", l), $("toggle", l), Ne(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ne(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) ||
          (u[0] !== "o" && u[0] !== "O") ||
          (u[1] !== "n" && u[1] !== "N")) &&
          ((u = _m.get(u) || u), Ne(l, u, a));
    }
  }
  function Jc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        $i(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((u = a.__html), u != null)) {
            if (e.children != null) throw Error(i(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Wu(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Wu(l, "" + a);
        break;
      case "onScroll":
        a != null && $("scroll", l);
        break;
      case "onScrollEnd":
        a != null && $("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Qi.hasOwnProperty(u))
          l: {
            if (
              u[0] === "o" &&
              u[1] === "n" &&
              ((e = u.endsWith("Capture")),
              (t = u.slice(2, e ? u.length - 7 : void 0)),
              (n = l[Kl] || null),
              (n = n != null ? n[u] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (u in l
                  ? (l[u] = null)
                  : l.hasAttribute(u) && l.removeAttribute(u)),
                l.addEventListener(t, a, e);
              break l;
            }
            u in l
              ? (l[u] = a)
              : a === !0
              ? l.setAttribute(u, "")
              : Ne(l, u, a);
          }
    }
  }
  function Gl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        $("error", l), $("load", l);
        var a = !1,
          e = !1,
          n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  sl(l, t, n, f, u, null);
              }
          }
        e && sl(l, t, "srcSet", u.srcSet, u, null),
          a && sl(l, t, "src", u.src, u, null);
        return;
      case "input":
        $("invalid", l);
        var c = (n = f = e = null),
          s = null,
          r = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var T = u[a];
            if (T != null)
              switch (a) {
                case "name":
                  e = T;
                  break;
                case "type":
                  f = T;
                  break;
                case "checked":
                  s = T;
                  break;
                case "defaultChecked":
                  r = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  c = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null) throw Error(i(137, t));
                  break;
                default:
                  sl(l, t, a, T, u, null);
              }
          }
        Ki(l, n, c, s, r, f, e, !1);
        return;
      case "select":
        $("invalid", l), (a = f = n = null);
        for (e in u)
          if (u.hasOwnProperty(e) && ((c = u[e]), c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                sl(l, t, e, c, u, null);
            }
        (t = n),
          (u = f),
          (l.multiple = !!a),
          t != null ? wu(l, !!a, t, !1) : u != null && wu(l, !!a, u, !0);
        return;
      case "textarea":
        $("invalid", l), (n = e = a = null);
        for (f in u)
          if (u.hasOwnProperty(f) && ((c = u[f]), c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(i(91));
                break;
              default:
                sl(l, t, f, c, u, null);
            }
        wi(l, a, e, n);
        return;
      case "option":
        for (s in u)
          if (u.hasOwnProperty(s) && ((a = u[s]), a != null))
            switch (s) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                sl(l, t, s, a, u, null);
            }
        return;
      case "dialog":
        $("beforetoggle", l), $("toggle", l), $("cancel", l), $("close", l);
        break;
      case "iframe":
      case "object":
        $("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++) $(ye[a], l);
        break;
      case "image":
        $("error", l), $("load", l);
        break;
      case "details":
        $("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        $("error", l), $("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (r in u)
          if (u.hasOwnProperty(r) && ((a = u[r]), a != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                sl(l, t, r, a, u, null);
            }
        return;
      default:
        if (nf(t)) {
          for (T in u)
            u.hasOwnProperty(T) &&
              ((a = u[T]), a !== void 0 && Jc(l, t, T, a, u, void 0));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && ((a = u[c]), a != null && sl(l, t, c, a, u, null));
  }
  function kv(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          f = null,
          c = null,
          s = null,
          r = null,
          T = null;
        for (E in u) {
          var _ = u[E];
          if (u.hasOwnProperty(E) && _ != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = _;
              default:
                a.hasOwnProperty(E) || sl(l, t, E, null, a, _);
            }
        }
        for (var S in a) {
          var E = a[S];
          if (((_ = u[S]), a.hasOwnProperty(S) && (E != null || _ != null)))
            switch (S) {
              case "type":
                n = E;
                break;
              case "name":
                e = E;
                break;
              case "checked":
                r = E;
                break;
              case "defaultChecked":
                T = E;
                break;
              case "value":
                f = E;
                break;
              case "defaultValue":
                c = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(i(137, t));
                break;
              default:
                E !== _ && sl(l, t, S, E, a, _);
            }
        }
        af(l, f, c, s, r, T, n, e);
        return;
      case "select":
        E = f = c = S = null;
        for (n in u)
          if (((s = u[n]), u.hasOwnProperty(n) && s != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                E = s;
              default:
                a.hasOwnProperty(n) || sl(l, t, n, null, a, s);
            }
        for (e in a)
          if (
            ((n = a[e]),
            (s = u[e]),
            a.hasOwnProperty(e) && (n != null || s != null))
          )
            switch (e) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== s && sl(l, t, e, n, a, s);
            }
        (t = c),
          (u = f),
          (a = E),
          S != null
            ? wu(l, !!u, S, !1)
            : !!a != !!u &&
              (t != null ? wu(l, !!u, t, !0) : wu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        E = S = null;
        for (c in u)
          if (
            ((e = u[c]),
            u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                sl(l, t, c, null, a, e);
            }
        for (f in a)
          if (
            ((e = a[f]),
            (n = u[f]),
            a.hasOwnProperty(f) && (e != null || n != null))
          )
            switch (f) {
              case "value":
                S = e;
                break;
              case "defaultValue":
                E = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(i(91));
                break;
              default:
                e !== n && sl(l, t, f, e, a, n);
            }
        Ji(l, S, E);
        return;
      case "option":
        for (var R in u)
          if (
            ((S = u[R]),
            u.hasOwnProperty(R) && S != null && !a.hasOwnProperty(R))
          )
            switch (R) {
              case "selected":
                l.selected = !1;
                break;
              default:
                sl(l, t, R, null, a, S);
            }
        for (s in a)
          if (
            ((S = a[s]),
            (E = u[s]),
            a.hasOwnProperty(s) && S !== E && (S != null || E != null))
          )
            switch (s) {
              case "selected":
                l.selected =
                  S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                sl(l, t, s, S, a, E);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var G in u)
          (S = u[G]),
            u.hasOwnProperty(G) &&
              S != null &&
              !a.hasOwnProperty(G) &&
              sl(l, t, G, null, a, S);
        for (r in a)
          if (
            ((S = a[r]),
            (E = u[r]),
            a.hasOwnProperty(r) && S !== E && (S != null || E != null))
          )
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(i(137, t));
                break;
              default:
                sl(l, t, r, S, a, E);
            }
        return;
      default:
        if (nf(t)) {
          for (var ol in u)
            (S = u[ol]),
              u.hasOwnProperty(ol) &&
                S !== void 0 &&
                !a.hasOwnProperty(ol) &&
                Jc(l, t, ol, void 0, a, S);
          for (T in a)
            (S = a[T]),
              (E = u[T]),
              !a.hasOwnProperty(T) ||
                S === E ||
                (S === void 0 && E === void 0) ||
                Jc(l, t, T, S, a, E);
          return;
        }
    }
    for (var h in u)
      (S = u[h]),
        u.hasOwnProperty(h) &&
          S != null &&
          !a.hasOwnProperty(h) &&
          sl(l, t, h, null, a, S);
    for (_ in a)
      (S = a[_]),
        (E = u[_]),
        !a.hasOwnProperty(_) ||
          S === E ||
          (S == null && E == null) ||
          sl(l, t, _, S, a, E);
  }
  function k0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Iv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0;
        a < u.length;
        a++
      ) {
        var e = u[a],
          n = e.transferSize,
          f = e.initiatorType,
          c = e.duration;
        if (n && c && k0(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var s = u[a],
              r = s.startTime;
            if (r > c) break;
            var T = s.transferSize,
              _ = s.initiatorType;
            T &&
              k0(_) &&
              ((s = s.responseEnd), (f += T * (s < c ? 1 : (c - r) / (s - r))));
          }
          if ((--a, (t += (8 * (n + f)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var wc = null,
    Wc = null;
  function Un(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function I0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function P0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function $c(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Fc = null;
  function Pv() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Fc
        ? !1
        : ((Fc = l), !0)
      : ((Fc = null), !1);
  }
  var ly = typeof setTimeout == "function" ? setTimeout : void 0,
    lh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ty = typeof Promise == "function" ? Promise : void 0,
    th =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ty < "u"
        ? function (l) {
            return ty.resolve(null).then(l).catch(uh);
          }
        : ly;
  function uh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function hu(l) {
    return l === "head";
  }
  function uy(l, t) {
    var u = t,
      a = 0;
    do {
      var e = u.nextSibling;
      if ((l.removeChild(u), e && e.nodeType === 8))
        if (((u = e.data), u === "/$" || u === "/&")) {
          if (a === 0) {
            l.removeChild(e), Oa(t);
            return;
          }
          a--;
        } else if (
          u === "$" ||
          u === "$?" ||
          u === "$~" ||
          u === "$!" ||
          u === "&"
        )
          a++;
        else if (u === "html") ve(l.ownerDocument.documentElement);
        else if (u === "head") {
          (u = l.ownerDocument.head), ve(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling,
              c = n.nodeName;
            n[Ha] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              u.removeChild(n),
              (n = f);
          }
        } else u === "body" && ve(l.ownerDocument.body);
      u = e;
    } while (u);
    Oa(t);
  }
  function ay(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (
        (u.nodeType === 1
          ? t
            ? ((u._stashedDisplay = u.style.display),
              (u.style.display = "none"))
            : ((u.style.display = u._stashedDisplay || ""),
              u.getAttribute("style") === "" && u.removeAttribute("style"))
          : u.nodeType === 3 &&
            (t
              ? ((u._stashedText = u.nodeValue), (u.nodeValue = ""))
              : (u.nodeValue = u._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((u = a.data), u === "/$")) {
          if (l === 0) break;
          l--;
        } else (u !== "$" && u !== "$?" && u !== "$~" && u !== "$!") || l++;
      u = a;
    } while (u);
  }
  function kc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (((t = t.nextSibling), u.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          kc(u), tf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function ah(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ha])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = St(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function eh(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !u) ||
        ((l = St(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function ey(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = St(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ic(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Pc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function nh(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading") t();
    else {
      var a = function () {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), (l._reactRetry = a);
    }
  }
  function St(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var li = null;
  function ny(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0) return St(l.nextSibling);
          t--;
        } else
          (u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function fy(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else (u !== "/$" && u !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function cy(l, t, u) {
    switch (((t = Un(u)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(i(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(i(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(i(454));
        return l;
      default:
        throw Error(i(451));
    }
  }
  function ve(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    tf(l);
  }
  var gt = new Map(),
    iy = new Set();
  function Nn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Wt = U.d;
  U.d = { f: fh, r: ch, D: ih, C: sh, L: oh, m: yh, X: vh, S: mh, M: hh };
  function fh() {
    var l = Wt.f(),
      t = Tn();
    return l || t;
  }
  function ch(l) {
    var t = Vu(l);
    t !== null && t.tag === 5 && t.type === "form" ? Oo(t) : Wt.r(l);
  }
  var za = typeof document > "u" ? null : document;
  function sy(l, t, u) {
    var a = za;
    if (a && typeof t == "string" && t) {
      var e = ot(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof u == "string" && (e += '[crossorigin="' + u + '"]'),
        iy.has(e) ||
          (iy.add(e),
          (l = { rel: l, crossOrigin: u, href: t }),
          a.querySelector(e) === null &&
            ((t = a.createElement("link")),
            Gl(t, "link", l),
            Hl(t),
            a.head.appendChild(t)));
    }
  }
  function ih(l) {
    Wt.D(l), sy("dns-prefetch", l, null);
  }
  function sh(l, t) {
    Wt.C(l, t), sy("preconnect", l, t);
  }
  function oh(l, t, u) {
    Wt.L(l, t, u);
    var a = za;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + ot(t) + '"]';
      t === "image" && u && u.imageSrcSet
        ? ((e += '[imagesrcset="' + ot(u.imageSrcSet) + '"]'),
          typeof u.imageSizes == "string" &&
            (e += '[imagesizes="' + ot(u.imageSizes) + '"]'))
        : (e += '[href="' + ot(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Aa(l);
          break;
        case "script":
          n = _a(l);
      }
      gt.has(n) ||
        ((l = p(
          {
            rel: "preload",
            href: t === "image" && u && u.imageSrcSet ? void 0 : l,
            as: t,
          },
          u
        )),
        gt.set(n, l),
        a.querySelector(e) !== null ||
          (t === "style" && a.querySelector(he(n))) ||
          (t === "script" && a.querySelector(de(n))) ||
          ((t = a.createElement("link")),
          Gl(t, "link", l),
          Hl(t),
          a.head.appendChild(t)));
    }
  }
  function yh(l, t) {
    Wt.m(l, t);
    var u = za;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + ot(a) + '"][href="' + ot(l) + '"]',
        n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _a(l);
      }
      if (
        !gt.has(n) &&
        ((l = p({ rel: "modulepreload", href: l }, t)),
        gt.set(n, l),
        u.querySelector(e) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(de(n))) return;
        }
        (a = u.createElement("link")),
          Gl(a, "link", l),
          Hl(a),
          u.head.appendChild(a);
      }
    }
  }
  function mh(l, t, u) {
    Wt.S(l, t, u);
    var a = za;
    if (a && l) {
      var e = Ku(a).hoistableStyles,
        n = Aa(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if ((f = a.querySelector(he(n)))) c.loading = 5;
        else {
          (l = p({ rel: "stylesheet", href: l, "data-precedence": t }, u)),
            (u = gt.get(n)) && ti(l, u);
          var s = (f = a.createElement("link"));
          Hl(s),
            Gl(s, "link", l),
            (s._p = new Promise(function (r, T) {
              (s.onload = r), (s.onerror = T);
            })),
            s.addEventListener("load", function () {
              c.loading |= 1;
            }),
            s.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Hn(f, t, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: c }),
          e.set(n, f);
      }
    }
  }
  function vh(l, t) {
    Wt.X(l, t);
    var u = za;
    if (u && l) {
      var a = Ku(u).hoistableScripts,
        e = _a(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(de(e))),
        n ||
          ((l = p({ src: l, async: !0 }, t)),
          (t = gt.get(e)) && ui(l, t),
          (n = u.createElement("script")),
          Hl(n),
          Gl(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function hh(l, t) {
    Wt.M(l, t);
    var u = za;
    if (u && l) {
      var a = Ku(u).hoistableScripts,
        e = _a(l),
        n = a.get(e);
      n ||
        ((n = u.querySelector(de(e))),
        n ||
          ((l = p({ src: l, async: !0, type: "module" }, t)),
          (t = gt.get(e)) && ui(l, t),
          (n = u.createElement("script")),
          Hl(n),
          Gl(n, "link", l),
          u.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(e, n));
    }
  }
  function oy(l, t, u, a) {
    var e = (e = w.current) ? Nn(e) : null;
    if (!e) throw Error(i(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string"
          ? ((t = Aa(u.href)),
            (u = Ku(e).hoistableStyles),
            (a = u.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              u.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          u.rel === "stylesheet" &&
          typeof u.href == "string" &&
          typeof u.precedence == "string"
        ) {
          l = Aa(u.href);
          var n = Ku(e).hoistableStyles,
            f = n.get(l);
          if (
            (f ||
              ((e = e.ownerDocument || e),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, f),
              (n = e.querySelector(he(l))) &&
                !n._p &&
                ((f.instance = n), (f.state.loading = 5)),
              gt.has(l) ||
                ((u = {
                  rel: "preload",
                  as: "style",
                  href: u.href,
                  crossOrigin: u.crossOrigin,
                  integrity: u.integrity,
                  media: u.media,
                  hrefLang: u.hrefLang,
                  referrerPolicy: u.referrerPolicy,
                }),
                gt.set(l, u),
                n || dh(e, l, u, f.state))),
            t && a === null)
          )
            throw Error(i(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = u.async),
          (u = u.src),
          typeof u == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = _a(u)),
              (u = Ku(e).hoistableScripts),
              (a = u.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                u.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, l));
    }
  }
  function Aa(l) {
    return 'href="' + ot(l) + '"';
  }
  function he(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function yy(l) {
    return p({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function dh(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Gl(t, "link", u),
        Hl(t),
        l.head.appendChild(t));
  }
  function _a(l) {
    return '[src="' + ot(l) + '"]';
  }
  function de(l) {
    return "script[async]" + l;
  }
  function my(l, t, u) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + ot(u.href) + '"]');
          if (a) return (t.instance = a), Hl(a), a;
          var e = p({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Hl(a),
            Gl(a, "style", e),
            Hn(a, u.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          e = Aa(u.href);
          var n = l.querySelector(he(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Hl(n), n;
          (a = yy(u)),
            (e = gt.get(e)) && ti(a, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Hl(n);
          var f = n;
          return (
            (f._p = new Promise(function (c, s) {
              (f.onload = c), (f.onerror = s);
            })),
            Gl(n, "link", a),
            (t.state.loading |= 4),
            Hn(n, u.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = _a(u.src)),
            (e = l.querySelector(de(n)))
              ? ((t.instance = e), Hl(e), e)
              : ((a = u),
                (e = gt.get(n)) && ((a = p({}, u)), ui(a, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Hl(e),
                Gl(e, "link", a),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Hn(a, u.precedence, l));
    return t.instance;
  }
  function Hn(l, t, u) {
    for (
      var a = u.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = a.length ? a[a.length - 1] : null,
        n = e,
        f = 0;
      f < a.length;
      f++
    ) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = u.nodeType === 9 ? u.head : u), t.insertBefore(l, t.firstChild));
  }
  function ti(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function ui(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Rn = null;
  function vy(l, t, u) {
    if (Rn === null) {
      var a = new Map(),
        e = (Rn = new Map());
      e.set(u, a);
    } else (e = Rn), (a = e.get(u)), a || ((a = new Map()), e.set(u, a));
    if (a.has(l)) return a;
    for (
      a.set(l, null), u = u.getElementsByTagName(l), e = 0;
      e < u.length;
      e++
    ) {
      var n = u[e];
      if (
        !(
          n[Ha] ||
          n[ql] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function hy(l, t, u) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        u,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function rh(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function dy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Sh(l, t, u, a) {
    if (
      u.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (u.state.loading & 4) === 0
    ) {
      if (u.instance === null) {
        var e = Aa(a.href),
          n = t.querySelector(he(e));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Cn.bind(l)), t.then(l, l)),
            (u.state.loading |= 4),
            (u.instance = n),
            Hl(n);
          return;
        }
        (n = t.ownerDocument || t),
          (a = yy(a)),
          (e = gt.get(e)) && ti(a, e),
          (n = n.createElement("link")),
          Hl(n);
        var f = n;
        (f._p = new Promise(function (c, s) {
          (f.onload = c), (f.onerror = s);
        })),
          Gl(n, "link", a),
          (u.instance = n);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(u, t),
        (t = u.state.preload) &&
          (u.state.loading & 3) === 0 &&
          (l.count++,
          (u = Cn.bind(l)),
          t.addEventListener("load", u),
          t.addEventListener("error", u));
    }
  }
  var ai = 0;
  function gh(l, t) {
    return (
      l.stylesheets && l.count === 0 && Bn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (u) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Bn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, 6e4 + t);
            0 < l.imgBytes && ai === 0 && (ai = 62500 * Iv());
            var e = setTimeout(function () {
              if (
                ((l.waitingForImages = !1),
                l.count === 0 &&
                  (l.stylesheets && Bn(l, l.stylesheets), l.unsuspend))
              ) {
                var n = l.unsuspend;
                (l.unsuspend = null), n();
              }
            }, (l.imgBytes > ai ? 50 : 800) + t);
            return (
              (l.unsuspend = u),
              function () {
                (l.unsuspend = null), clearTimeout(a), clearTimeout(e);
              }
            );
          }
        : null
    );
  }
  function Cn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Bn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var qn = null;
  function Bn(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (qn = new Map()),
        t.forEach(bh, l),
        (qn = null),
        Cn.call(l));
  }
  function bh(l, t) {
    if (!(t.state.loading & 4)) {
      var u = qn.get(l);
      if (u) var a = u.get(null);
      else {
        (u = new Map()), qn.set(l, u);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (u.set(f.dataset.precedence, f), (a = f));
        }
        a && u.set(null, a);
      }
      (e = t.instance),
        (f = e.getAttribute("data-precedence")),
        (n = u.get(f) || a),
        n === a && u.set(null, e),
        u.set(f, e),
        this.count++,
        (a = Cn.bind(this)),
        e.addEventListener("load", a),
        e.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var re = {
    $$typeof: gl,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function Eh(l, t, u, a, e, n, f, c, s) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = kn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = kn(0)),
      (this.hiddenUpdates = kn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function ry(l, t, u, a, e, n, f, c, s, r, T, _) {
    return (
      (l = new Eh(l, t, u, f, s, r, T, _, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ut(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Yf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: u, cache: t }),
      Qf(n),
      l
    );
  }
  function Sy(l) {
    return l ? ((l = ta), l) : ta;
  }
  function gy(l, t, u, a, e, n) {
    (e = Sy(e)),
      a.context === null ? (a.context = e) : (a.pendingContext = e),
      (a = au(t)),
      (a.payload = { element: u }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (u = eu(l, a, t)),
      u !== null && (kl(u, l, t), Wa(u, l, t));
  }
  function by(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function ei(l, t) {
    by(l, t), (l = l.alternate) && by(l, t);
  }
  function Ey(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Du(l, 67108864);
      t !== null && kl(t, l, 67108864), ei(l, 67108864);
    }
  }
  function Ty(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ct();
      t = In(t);
      var u = Du(l, t);
      u !== null && kl(u, l, t), ei(l, t);
    }
  }
  var Yn = !0;
  function Th(l, t, u, a) {
    var e = z.T;
    z.T = null;
    var n = U.p;
    try {
      (U.p = 2), ni(l, t, u, a);
    } finally {
      (U.p = n), (z.T = e);
    }
  }
  function zh(l, t, u, a) {
    var e = z.T;
    z.T = null;
    var n = U.p;
    try {
      (U.p = 8), ni(l, t, u, a);
    } finally {
      (U.p = n), (z.T = e);
    }
  }
  function ni(l, t, u, a) {
    if (Yn) {
      var e = fi(a);
      if (e === null) Kc(l, t, a, jn, u), Ay(l, a);
      else if (_h(e, l, t, u, a)) a.stopPropagation();
      else if ((Ay(l, a), t & 4 && -1 < Ah.indexOf(l))) {
        for (; e !== null; ) {
          var n = Vu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = zu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var s = 1 << (31 - lt(f));
                      (c.entanglements[1] |= s), (f &= ~s);
                    }
                    Ut(n), (al & 6) === 0 && ((bn = Il() + 500), oe(0));
                  }
                }
                break;
              case 31:
              case 13:
                (c = Du(n, 2)), c !== null && kl(c, n, 2), Tn(), ei(n, 2);
            }
          if (((n = fi(a)), n === null && Kc(l, t, a, jn, u), n === e)) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else Kc(l, t, a, null, u);
    }
  }
  function fi(l) {
    return (l = cf(l)), ci(l);
  }
  var jn = null;
  function ci(l) {
    if (((jn = null), (l = xu(l)), l !== null)) {
      var t = H(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (((l = j(t)), l !== null)) return l;
          l = null;
        } else if (u === 31) {
          if (((l = Q(t)), l !== null)) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (jn = l), null;
  }
  function zy(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (im()) {
          case Ui:
            return 2;
          case Ni:
            return 8;
          case Oe:
          case sm:
            return 32;
          case Hi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ii = !1,
    du = null,
    ru = null,
    Su = null,
    Se = new Map(),
    ge = new Map(),
    gu = [],
    Ah =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Ay(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        du = null;
        break;
      case "dragenter":
      case "dragleave":
        ru = null;
        break;
      case "mouseover":
      case "mouseout":
        Su = null;
        break;
      case "pointerover":
      case "pointerout":
        Se.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function be(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: u,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Vu(t)), t !== null && Ey(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function _h(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return (du = be(du, l, t, u, a, e)), !0;
      case "dragenter":
        return (ru = be(ru, l, t, u, a, e)), !0;
      case "mouseover":
        return (Su = be(Su, l, t, u, a, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return Se.set(n, be(Se.get(n) || null, l, t, u, a, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ge.set(n, be(ge.get(n) || null, l, t, u, a, e)), !0
        );
    }
    return !1;
  }
  function _y(l) {
    var t = xu(l.target);
    if (t !== null) {
      var u = H(t);
      if (u !== null) {
        if (((t = u.tag), t === 13)) {
          if (((t = j(u)), t !== null)) {
            (l.blockedOn = t),
              ji(l.priority, function () {
                Ty(u);
              });
            return;
          }
        } else if (t === 31) {
          if (((t = Q(u)), t !== null)) {
            (l.blockedOn = t),
              ji(l.priority, function () {
                Ty(u);
              });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Gn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = fi(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        (ff = a), u.target.dispatchEvent(a), (ff = null);
      } else return (t = Vu(u)), t !== null && Ey(t), (l.blockedOn = u), !1;
      t.shift();
    }
    return !0;
  }
  function Oy(l, t, u) {
    Gn(l) && u.delete(t);
  }
  function Oh() {
    (ii = !1),
      du !== null && Gn(du) && (du = null),
      ru !== null && Gn(ru) && (ru = null),
      Su !== null && Gn(Su) && (Su = null),
      Se.forEach(Oy),
      ge.forEach(Oy);
  }
  function Xn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ii ||
        ((ii = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Oh)));
  }
  var Qn = null;
  function My(l) {
    Qn !== l &&
      ((Qn = l),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        Qn === l && (Qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t],
            a = l[t + 1],
            e = l[t + 2];
          if (typeof a != "function") {
            if (ci(a || u) === null) continue;
            break;
          }
          var n = Vu(u);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            fc(n, { pending: !0, data: e, method: u.method, action: a }, a, e));
        }
      }));
  }
  function Oa(l) {
    function t(s) {
      return Xn(s, l);
    }
    du !== null && Xn(du, l),
      ru !== null && Xn(ru, l),
      Su !== null && Xn(Su, l),
      Se.forEach(t),
      ge.forEach(t);
    for (var u = 0; u < gu.length; u++) {
      var a = gu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < gu.length && ((u = gu[0]), u.blockedOn === null); )
      _y(u), u.blockedOn === null && gu.shift();
    if (((u = (l.ownerDocument || l).$$reactFormReplay), u != null))
      for (a = 0; a < u.length; a += 3) {
        var e = u[a],
          n = u[a + 1],
          f = e[Kl] || null;
        if (typeof n == "function") f || My(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (f = n[Kl] || null))) c = f.formAction;
            else if (ci(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? (u[a + 1] = c) : (u.splice(a, 3), (a -= 3)),
            My(u);
        }
      }
  }
  function Dy() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (e = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      e !== null && (e(), (e = null)), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(u, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null));
        }
      );
    }
  }
  function si(l) {
    this._internalRoot = l;
  }
  (Zn.prototype.render = si.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var u = t.current,
        a = ct();
      gy(u, a, l, t, null, null);
    }),
    (Zn.prototype.unmount = si.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          gy(l.current, 2, null, l, null, null), Tn(), (t[Lu] = null);
        }
      });
  function Zn(l) {
    this._internalRoot = l;
  }
  Zn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Yi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < gu.length && t !== 0 && t < gu[u].priority; u++);
      gu.splice(u, 0, l), u === 0 && _y(l);
    }
  };
  var py = v.version;
  if (py !== "19.2.0") throw Error(i(527, py, "19.2.0"));
  U.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(i(188))
        : ((l = Object.keys(l).join(",")), Error(i(268, l)));
    return (
      (l = g(t)),
      (l = l !== null ? X(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Mh = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ln = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ln.isDisabled && Ln.supportsFiber)
      try {
        (pa = Ln.inject(Mh)), (Pl = Ln);
      } catch {}
  }
  return (
    (Te.createRoot = function (l, t) {
      if (!D(l)) throw Error(i(299));
      var u = !1,
        a = "",
        e = Bo,
        n = Yo,
        f = jo;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (u = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = ry(l, 1, !1, null, null, u, a, null, e, n, f, Dy)),
        (l[Lu] = t.current),
        Vc(l),
        new si(t)
      );
    }),
    (Te.hydrateRoot = function (l, t, u) {
      if (!D(l)) throw Error(i(299));
      var a = !1,
        e = "",
        n = Bo,
        f = Yo,
        c = jo,
        s = null;
      return (
        u != null &&
          (u.unstable_strictMode === !0 && (a = !0),
          u.identifierPrefix !== void 0 && (e = u.identifierPrefix),
          u.onUncaughtError !== void 0 && (n = u.onUncaughtError),
          u.onCaughtError !== void 0 && (f = u.onCaughtError),
          u.onRecoverableError !== void 0 && (c = u.onRecoverableError),
          u.formState !== void 0 && (s = u.formState)),
        (t = ry(l, 1, !0, t, u ?? null, a, e, s, n, f, c, Dy)),
        (t.context = Sy(null)),
        (u = t.current),
        (a = ct()),
        (a = In(a)),
        (e = au(a)),
        (e.callback = null),
        eu(u, e, a),
        (u = a),
        (t.current.lanes = u),
        Na(t, u),
        Ut(t),
        (l[Lu] = t.current),
        Vc(l),
        new Zn(t)
      );
    }),
    (Te.version = "19.2.0"),
    Te
  );
}
var Xy;
function jh() {
  if (Xy) return yi.exports;
  Xy = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (v) {
        console.error(v);
      }
  }
  return o(), (yi.exports = Yh()), yi.exports;
}
var Gh = jh();
const Ma = (o) => Symbol.for(`atomico/${o}`),
  Jy = (o) => ({ current: o });
function Xh(o, v) {
  const b = o.length;
  if (b !== v.length) return !1;
  for (let i = 0; i < b; i++) {
    let D = o[i],
      H = v[i];
    if (D !== H) return !1;
  }
  return !0;
}
const Vn = (o) => typeof o == "function",
  Ae = (o) => typeof o == "object",
  { isArray: Qh } = Array;
function wy(o, v) {
  let b;
  const i = (D) => {
    let { length: H } = D;
    for (let j = 0; j < H; j++) {
      const Q = D[j];
      if (Q && Array.isArray(Q)) i(Q);
      else {
        const M = typeof Q;
        if (Q == null || M === "function" || M === "boolean") continue;
        M === "string" || M === "number"
          ? (b == null && (b = ""), (b += Q))
          : (b != null && (v(b), (b = null)), v(Q));
      }
    }
  };
  i(o), b != null && v(b);
}
const Wy = (o, v, b, i) => (
    o.addEventListener(v, b, i), () => o.removeEventListener(v, b)
  ),
  Ei = Ma("hooks");
globalThis[Ei] = globalThis[Ei] || {};
let Qu = globalThis[Ei];
const $y = "unmount",
  Zh = Ma("hook/suspense"),
  Mi = (o) => {
    const { i: v, hooks: b } = Qu.c,
      i = (b[v] = b[v] || {});
    return (i.value = o(i.value)), Qu.c.i++, b[v].value;
  },
  Qy = (o, v) => {
    const { i: b, hooks: i } = Qu.c;
    (i[o] = i[o] || {}), (i[o][b] = v), Qu.c.i++;
  },
  Lh = (o) => Mi((v = Jy(o)) => v),
  Fy = () => Mi((o = Jy(Qu.c.host)) => o),
  xh = (o, v, b = 0) => {
    let i = {},
      D = !1;
    return {
      render: (M) => {
        Qu.c = { host: v, hooks: i, update: o, i: 0, id: b };
        let g;
        try {
          (D = !1), (g = M());
        } catch (X) {
          if (X !== Zh) throw X;
          D = !0;
        } finally {
          Qu.c = null;
        }
        return g;
      },
      dispatch: (M, g) => {
        const X = i[M];
        for (const p in X) X[p](g);
      },
      isSuspense: () => D,
    };
  };
function Vh(o, v) {
  const b = [
    Vn(o) ? o() : o,
    (i) => {
      const D = Vn(i) ? i(b[0]) : i;
      D !== b[0] && v((b[0] = D));
    },
  ];
  return b;
}
const Kh = "effect",
  Jh = "layoutEffect",
  ky = "insertionEffect",
  wh = (o) => (v, b) => {
    const i = Lh({});
    Qy(o, () => {
      const { current: D } = i;
      if (!D.args || (D.args && !Xh(D.args, b))) {
        (D.args = b), D.clean?.();
        const H = v();
        H && (D.clean = H);
      }
    }),
      Qy($y, () => {
        i.current.clean && (i.current.clean(), (i.current = {}));
      });
  },
  Wh = wh(ky),
  $h = (o) => {
    const { current: v } = Fy();
    if (!(o in v))
      throw new tm(
        v,
        `For useProp("${o}"), the prop does not exist on the host.`,
        o
      );
    return Mi((b = Vh(v[o], (i) => (v[o] = i))) => ((b[0] = v[o]), b));
  },
  Fh = "formAssociated",
  kh = "formDisabled",
  Ih = "formReset",
  Ph = { checked: 1, value: 1, selected: 1 },
  ld = {
    list: 1,
    type: 1,
    size: 1,
    form: 1,
    width: 1,
    height: 1,
    src: 1,
    href: 1,
    slot: 1,
  },
  td = { shadowDom: 1, staticNode: 1, cloneNode: 1, children: 1, key: 1 },
  ze = {},
  Ti = [];
class zi extends Text {}
const ud = Ma("id"),
  ad = Ma("type"),
  ri = Ma("ref"),
  ed = Ma("vnode"),
  nd = () => {},
  Iy = (o, v, ...b) => {
    const i = v || ze;
    let { children: D } = i;
    if (((D = D ?? (b.length ? b : Ti)), o === nd)) return D;
    const H = o
      ? o instanceof Node
        ? 1
        : o.prototype instanceof HTMLElement && 2
      : 0;
    return H === !1 && o instanceof Function
      ? o(D != Ti ? { children: D, ...i } : i)
      : {
          [ad]: ed,
          type: o,
          props: i,
          children: D,
          key: i.key,
          shadow: i.shadowDom,
          static: i.staticNode,
          raw: H,
          is: i.is,
          clone: i.cloneNode,
        };
  };
function Py(o, v, b = ud, i, D) {
  let H;
  const j = !D;
  if (((D = j ? [] : D), v && v[b] && v[b].vnode == o)) return v;
  const { type: Q, props: M = ze } = o;
  if (o || !v) {
    i = i || o.type == "svg";
    const Sl =
      Q instanceof Node ? 1 : Q.prototype instanceof HTMLElement ? 2 : 0;
    (H =
      Q != "host" &&
      (Sl == 1
        ? (v && M.cloneNode ? v[ri] : v) != Q
        : Sl == 2
        ? !(v instanceof Q)
        : v
        ? v[ri] || v.localName != Q
        : !v)),
      H &&
        (Sl == 1 && M.cloneNode
          ? ((v = Q.cloneNode(!0)), (v[ri] = Q))
          : (v =
              Sl == 1
                ? Q
                : Sl == 2
                ? new Q()
                : i
                ? document.createElementNS("http://www.w3.org/2000/svg", Q)
                : document.createElement(Q, M.is ? { is: M.is } : void 0)));
  }
  const g = v[b] ? v[b] : ze,
    { vnode: X = ze, cycle: p = 0 } = g;
  let { fragment: C, handlers: J } = g;
  const { children: ll = Ti, props: _l = ze } = X;
  if (((J = H ? {} : J || {}), M.staticNode && !H)) return v;
  if (
    (M.shadowDom &&
      !v.shadowRoot &&
      v.attachShadow({ mode: "open", ...M.shadowDom }),
    M != _l && id(v, _l, M, J, i, D),
    M.children !== ll)
  ) {
    const Sl = M.shadowDom ? v.shadowRoot : v;
    C = cd(M.children, C, Sl, b, i && o.type == "foreignObject" ? !1 : i, D);
  }
  if (((v[b] = { vnode: o, handlers: J, fragment: C, cycle: p + 1 }), j)) {
    let Sl;
    for (; (Sl = D.shift()); ) Sl();
  }
  return v;
}
function fd(o) {
  const v = new zi(""),
    b = new zi("");
  return o.append(v, b), { markStart: v, markEnd: b };
}
function cd(o, v, b, i, D, H) {
  o = o == null ? null : Qh(o) ? o : [o];
  const j = v || fd(b),
    { markStart: Q, markEnd: M, keyes: g } = j;
  let X;
  const p = g && new Set();
  let C = Q;
  if (
    (o &&
      wy(o, (J) => {
        const ll = typeof J,
          _l = ll == "object" && "type" in J && "props" in J,
          Sl = ll == "string" || ll == "number";
        if (!_l && !Sl) return;
        const Nl = J.key,
          bt = g && Nl != null && g.get(Nl);
        C != M && C === bt ? p.delete(C) : (C = C == M ? M : C.nextSibling);
        const gl = g ? bt : C;
        let yl = gl;
        if (Sl) {
          const Cl = J + "";
          !(yl instanceof Text) || yl instanceof zi
            ? (yl = new Text(Cl))
            : yl.data != Cl && (yl.data = Cl);
        } else yl = Py(J, gl, i, D, H);
        if (yl != C) {
          g && p.delete(yl);
          const Cl =
            g && (yl || gl).isConnected ? "moveBefore" : "insertBefore";
          !gl || g
            ? (b[Cl](yl, C), g && C != M && p.add(C))
            : gl == M
            ? b[Cl](yl, M)
            : (b.replaceChild(yl, gl), (C = yl));
        }
        Nl != null && ((X = X || new Map()), X.set(Nl, yl));
      }),
    (C = C == M ? M : C.nextSibling),
    v && C != M)
  )
    for (; C != M; ) {
      const J = C;
      (C = C.nextSibling), J.remove();
    }
  return p && p.forEach((J) => J.remove()), (j.keyes = X), j;
}
function id(o, v, b, i, D, H) {
  for (const j in v) !(j in b) && Zy(o, j, v[j], null, i, D, H);
  for (const j in b) Zy(o, j, v[j], b[j], i, D, H);
}
function Zy(o, v, b, i, D, H, j) {
  if (
    ((v = v == "class" && !H ? "className" : v),
    (b = b ?? null),
    (i = i ?? null),
    v in o && Ph[v] && (b = o[v]),
    i === b || td[v] || v[0] == "_")
  )
    return;
  if (o.localName === "slot" && v === "assignNode" && "assign" in o) {
    j.push(() => o.assign(i));
    return;
  }
  const Q = Vn(b),
    M = Vn(i);
  if (v.startsWith("on") && (M || Q)) {
    sd(o, v.slice(2), i, D);
    return;
  }
  if (v === "ref") {
    i && (M ? j.push(() => i(o)) : (i.current = o));
    return;
  }
  if (v === "style" && "style" in o) {
    const { style: p } = o,
      C = Ae(b),
      J = Ae(i);
    if (C && J) {
      for (const ll in b) ll in i || Si(p, ll, null);
      for (const ll in i) b[ll] !== i[ll] && Si(p, ll, i[ll]);
    } else if (J) for (const ll in i) Si(p, ll, i[ll]);
    else p.cssText = i || "";
    return;
  }
  const g = v.startsWith("$") ? v.slice(1) : v;
  g === v && ((!H && !ld[v] && v in o) || M || Q)
    ? (o[v] = i ?? "")
    : i == null
    ? o.removeAttribute(g)
    : o.setAttribute(g, Ae(i) ? JSON.stringify(i) : i);
}
function sd(o, v, b, i) {
  if (!i) return;
  i.handleEvent ||
    (i.handleEvent = function (H) {
      const j = i[H.type];
      if (typeof j == "function") return j.call(o, H);
    });
  const D = !!i[v];
  if (b) {
    const j =
      b && (b.capture || b.once || b.passive)
        ? { capture: !!b.capture, once: !!b.once, passive: !!b.passive }
        : void 0;
    D || o.addEventListener(v, i.handleEvent, j), (i[v] = b);
  } else D && (o.removeEventListener(v, i.handleEvent), delete i[v]);
}
function Si(o, v, b) {
  if (v.indexOf("-") !== -1) {
    b == null ? o.removeProperty(v) : o.setProperty(v, b);
    return;
  }
  o[v] = b;
}
let lm = class {
  constructor(v, b, i) {
    (this.message = b), (this.target = v), (this.value = i);
  }
};
class tm extends lm {}
class od extends lm {}
const yd = null,
  md = { true: 1, "": 1, 1: 1 };
function vd(o, v, b, i, D) {
  const {
    type: H,
    reflect: j,
    value: Q,
    attr: M = dd(v),
  } = Ae(b) && b != yd ? b : { type: b };
  Object.defineProperty(o, v, {
    configurable: !0,
    set(g) {
      const X = this[v];
      Q && g == null && (g = Q.call({ self: this, prop: v }));
      const { error: p, value: C } = gd(H, g);
      if (p && C != null)
        throw new tm(
          this,
          `The value defined for prop '${v}' must be of type '${H.name}'`,
          C
        );
      X != C &&
        ((this._props[v] = C ?? void 0),
        this.update(),
        this.updated.then(() => {
          j &&
            ((this._ignoreAttr = M),
            rd(this, H, M, this[v]),
            (this._ignoreAttr = null));
        }));
    },
    get() {
      return this._props[v];
    },
  }),
    Q && (D[v] = null),
    (i[M] = { prop: v, type: H });
}
const hd = (o, { type: v, base: b = CustomEvent, ...i }) =>
    o.dispatchEvent(new b(v, i)),
  dd = (o) => o.replace(/([A-Z])/g, "-$1").toLowerCase(),
  rd = (o, v, b, i) =>
    i == null || (v == Boolean && !i)
      ? o.removeAttribute(b)
      : o.setAttribute(
          b,
          Ae(i) ? JSON.stringify(i) : v == Boolean ? "" : i.toString()
        ),
  Sd = (o, v) =>
    o == Boolean
      ? !!md[v]
      : o == Number
      ? Number(v)
      : o == String
      ? v
      : o == Array || o == Object
      ? JSON.parse(v)
      : new o(v),
  gd = (o, v) =>
    o == null || v == null
      ? { value: v, error: !1 }
      : o != String && v === ""
      ? { value: void 0, error: !1 }
      : o == Object || o == Array || o == Symbol
      ? { value: v, error: {}.toString.call(v) !== `[object ${o.name}]` }
      : v instanceof o
      ? { value: v, error: o == Number && Number.isNaN(v.valueOf()) }
      : o == String || o == Number || o == Boolean
      ? {
          value: v,
          error:
            o == Number
              ? typeof v != "number"
                ? !0
                : Number.isNaN(v)
              : o == String
              ? typeof v != "string"
              : typeof v != "boolean",
        }
      : { value: v, error: !0 },
  bd = (o) => ({
    type: Function,
    value() {
      return (v) =>
        hd(this.self, { ...o, type: this.prop, detail: v || o?.detail });
    },
  });
let Ed = 0;
const um = (o, v) => {
  const b = {},
    i = {},
    { props: D, styles: H, form: j } = { props: {}, ...v };
  class Q extends HTMLElement {
    static formAssociated = j;
    constructor() {
      super(), this._setup(), (this._render = () => o({ ...this._props }));
      for (const g in i) this[g] = i[g];
    }
    async _setup() {
      (this._props = {}), (this.symbolId = this.symbolId || Symbol());
      const g = xh(() => this.update(), this, "c" + Ed++);
      this._hooks = g;
      const X = new Promise((J) => (this._mount = J));
      let p,
        C = !0;
      (this.update = () => {
        p ||
          ((p = !0),
          (this.updated = X.then(() => {
            try {
              const J = g.render(this._render);
              g.dispatch(ky),
                J && Py(J, this, this.symbolId),
                (p = !1),
                C && !g.isSuspense() && ((C = !1), Td(this)),
                g.dispatch(Jh);
            } finally {
              p = !1;
            }
          }).then(() => {
            g.dispatch(Kh);
          })));
      }),
        this.update();
    }
    connectedCallback() {
      (this._unmount = () => {
        (!this.isConnected || this.lastParentNode != this.parentNode) &&
          this._hooks.dispatch($y),
          this.parentNode || (this.lastParentNode = this.parentNode);
      }),
        this.lastParentNode != this.parentNode &&
          (this._mount(), this.update()),
        (this.lastParentNode = this.parentNode);
    }
    disconnectedCallback() {
      this._unmount();
    }
    attributeChangedCallback(g, X, p) {
      if (b[g]) {
        if (g === this._ignoreAttr || X === p) return;
        const { prop: C, type: J } = b[g];
        try {
          this[C] = Sd(J, p);
        } catch {
          throw new od(
            this,
            `The value defined as attr '${g}' cannot be parsed by type '${J.name}'`,
            p
          );
        }
      }
    }
    static get observedAttributes() {
      for (const g in D) vd(this.prototype, g, D[g], b, i);
      return Object.keys(b);
    }
    static get styles() {
      return [H];
    }
    static get props() {
      return D;
    }
    async formResetCallback() {
      await this.updated, this._hooks.dispatch(Ih);
    }
    async formAssociatedCallback(g) {
      await this.updated, this._hooks.dispatch(Fh, g);
    }
    async formDisabledCallback(g) {
      await this.updated, this._hooks.dispatch(kh, g);
    }
  }
  return Q;
};
function Td(o) {
  const { styles: v } = o.constructor,
    { shadowRoot: b } = o;
  if (b && v.length) {
    const i = [];
    wy(v, (D) => i.push(D)), i.length && (b.adoptedStyleSheets = i);
  }
}
new Promise((o) => {
  document.readyState === "loading" ? Wy(document, "DOMContentLoaded", o) : o();
});
const zd = Iy("host", { style: "display: contents" }),
  am = "value",
  Ad = "ChangedValue",
  _d = (o, v) => {
    const b = Fy();
    Wh(
      () =>
        Wy(b.current, "ConnectContext", (i) => {
          i.composedPath().at(0) !== i.currentTarget &&
            o === i.detail.id &&
            (i.stopPropagation(), i.detail.connect(b.current));
        }),
      [o]
    ),
      (b.current[am] = v);
  },
  Od = (o) => {
    const v = um(({ value: b }) => (_d(v, b), zd), {
      props: { value: { type: Object, value: () => o, event: { type: Ad } } },
    });
    return (v[am] = o), v;
  };
Od({ dispatch(o, v) {} });
const Ai = (o, v, b) => (v == null ? (v = { key: b }) : (v.key = b), Iy(o, v)),
  Ly = Ai,
  em = um(
    ({ increment: o, message: v }) => {
      const [b = 0, i] = $h("count");
      return Ly("host", {
        shadowDom: !0,
        children: [
          Ly("button", {
            onclick: () => {
              i(b + 1), o();
            },
            children: ["Increment (", b, ")"],
          }),
          Ai("slot", {}),
          Ai("p", { children: v }),
        ],
      });
    },
    { props: { message: String, count: Number, increment: bd() } }
  );
customElements.define("my-component", em);
var _i = Oi();
const Md = _i.memo(({ tagName: o, ...v }) => _i.createElement(o, v)),
  gi = new Map(),
  Dd = (o) => {
    if ("getName" in customElements) return customElements.getName(o);
    if (gi.has(o)) return gi.get(o);
    const { localName: v } = new o();
    return gi.set(o, v), v;
  },
  pd =
    (o, v = Dd(o)) =>
    (b) =>
      _i.createElement(Md, { ...b, tagName: v }),
  Ud = pd(em);
console.log(
  it.jsxs("h1", { children: ["welcome ", it.jsx("span", { children: "1" })] }),
  it.jsx("span", {})
);
function xy() {
  return it.jsxs(it.Fragment, {
    children: [
      it.jsx("h1", { children: "welcome eeeeee romass" }),
      it.jsx("h1", { children: "welcome eeeeee romassssssss" }),
      it.jsx(Ud, { onClick: ({ currentTarget: o }) => {} }),
    ],
  });
}
const Vy = document.getElementById("root");
Vy &&
  Gh.createRoot(Vy).render(
    it.jsxs(it.Fragment, {
      children: [
        it.jsx("h1", { children: "welcome" }),
        it.jsx(xy, {}),
        it.jsx(xy, {}),
      ],
    })
  );
