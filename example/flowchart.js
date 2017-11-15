!function(t) {
  function e(r) {
    if (n[r])
      return n[r].exports;
    var i = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, e),
      i.l = !0,
      i.exports
  }
  var n = {};
  e.m = t,
    e.c = n,
    e.i = function(t) {
      return t
    }
    ,
    e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }
    ,
    e.n = function(t) {
      var n = t && t.__esModule ? function() {
          return t.default
        }
        : function() {
          return t
        }
      ;
      return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 634)
}({
  11: function(t, e, n) {
    "use strict";
    t.exports = function() {
      var t = [];
      return t.toString = function() {
        for (var t = [], e = 0; e < this.length; e++) {
          var n = this[e];
          n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
        }
        return t.join("")
      }
        ,
        t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var o = this[i][0];
            "number" == typeof o && (r[o] = !0)
          }
          for (i = 0; i < e.length; i++) {
            var a = e[i];
            "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              t.push(a))
          }
        }
        ,
        t
    }
  },
  17: function(t, e) {
    function n(t, e) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , i = d[r.id];
        if (i) {
          i.refs++;
          for (var o = 0; o < i.parts.length; o++)
            i.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++)
            i.parts.push(l(r.parts[o], e))
        } else {
          for (var a = [], o = 0; o < r.parts.length; o++)
            a.push(l(r.parts[o], e));
          d[r.id] = {
            id: r.id,
            refs: 1,
            parts: a
          }
        }
      }
    }
    function r(t) {
      for (var e = [], n = {}, r = 0; r < t.length; r++) {
        var i = t[r]
          , o = i[0]
          , a = i[1]
          , s = i[2]
          , l = i[3]
          , c = {
          css: a,
          media: s,
          sourceMap: l
        };
        n[o] ? n[o].parts.push(c) : e.push(n[o] = {
          id: o,
          parts: [c]
        })
      }
      return e
    }
    function i(t, e) {
      var n = v()
        , r = m[m.length - 1];
      if ("top" === t.insertAt)
        r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
          m.push(e);
      else {
        if ("bottom" !== t.insertAt)
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e)
      }
    }
    function o(t) {
      t.parentNode.removeChild(t);
      var e = m.indexOf(t);
      e >= 0 && m.splice(e, 1)
    }
    function a(t) {
      var e = document.createElement("style");
      return e.type = "text/css",
        i(t, e),
        e
    }
    function s(t) {
      var e = document.createElement("link");
      return e.rel = "stylesheet",
        i(t, e),
        e
    }
    function l(t, e) {
      var n, r, i;
      if (e.singleton) {
        var l = y++;
        n = g || (g = a(e)),
          r = c.bind(null, n, l, !1),
          i = c.bind(null, n, l, !0)
      } else
        t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(e),
            r = h.bind(null, n),
            i = function() {
              o(n),
              n.href && URL.revokeObjectURL(n.href)
            }
        ) : (n = a(e),
            r = u.bind(null, n),
            i = function() {
              o(n)
            }
        );
      return r(t),
        function(e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
              return;
            r(t = e)
          } else
            i()
        }
    }
    function c(t, e, n, r) {
      var i = n ? "" : r.css;
      if (t.styleSheet)
        t.styleSheet.cssText = k(e, i);
      else {
        var o = document.createTextNode(i)
          , a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
      }
    }
    function u(t, e) {
      var n = e.css
        , r = e.media;
      if (r && t.setAttribute("media", r),
          t.styleSheet)
        t.styleSheet.cssText = n;
      else {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }
    function h(t, e) {
      var n = e.css
        , r = e.sourceMap;
      r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var i = new Blob([n],{
        type: "text/css"
      })
        , o = t.href;
      t.href = URL.createObjectURL(i),
      o && URL.revokeObjectURL(o)
    }
    var d = {}
      , f = function(t) {
      var e;
      return function() {
        return void 0 === e && (e = t.apply(this, arguments)),
          e
      }
    }
      , p = f(function() {
      return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    })
      , v = f(function() {
      return document.head || document.getElementsByTagName("head")[0]
    })
      , g = null
      , y = 0
      , m = [];
    t.exports = function(t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error("The style-loader cannot be used in a non-browser environment");
      e = e || {},
      void 0 === e.singleton && (e.singleton = p()),
      void 0 === e.insertAt && (e.insertAt = "bottom");
      var i = r(t);
      return n(i, e),
        function(t) {
          for (var o = [], a = 0; a < i.length; a++) {
            var s = i[a]
              , l = d[s.id];
            l.refs--,
              o.push(l)
          }
          if (t) {
            n(r(t), e)
          }
          for (var a = 0; a < o.length; a++) {
            var l = o[a];
            if (0 === l.refs) {
              for (var c = 0; c < l.parts.length; c++)
                l.parts[c]();
              delete d[l.id]
            }
          }
        }
    }
    ;
    var k = function() {
      var t = [];
      return function(e, n) {
        return t[e] = n,
          t.filter(Boolean).join("\n")
      }
    }()
  },
  200: function(t, e, n) {
    "use strict";
    var r = n(225)
      , i = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(r);
    window.Flowchart = i.default
  },
  224: function(t, e, n) {
    "use strict";
    var r;
    !function(i, o, a) {
      function s(t, e, n) {
        if (t.addEventListener)
          return void t.addEventListener(e, n, !1);
        t.attachEvent("on" + e, n)
      }
      function l(t) {
        if ("keypress" == t.type) {
          var e = String.fromCharCode(t.which);
          return t.shiftKey || (e = e.toLowerCase()),
            e
        }
        return w[t.which] ? w[t.which] : _[t.which] ? _[t.which] : String.fromCharCode(t.which).toLowerCase()
      }
      function c(t, e) {
        return t.sort().join(",") === e.sort().join(",")
      }
      function u(t) {
        var e = [];
        return t.shiftKey && e.push("shift"),
        t.altKey && e.push("alt"),
        t.ctrlKey && e.push("ctrl"),
        t.metaKey && e.push("meta"),
          e
      }
      function h(t) {
        if (t.preventDefault)
          return void t.preventDefault();
        t.returnValue = !1
      }
      function d(t) {
        if (t.stopPropagation)
          return void t.stopPropagation();
        t.cancelBubble = !0
      }
      function f(t) {
        return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
      }
      function p() {
        if (!b) {
          b = {};
          for (var t in w)
            t > 95 && t < 112 || w.hasOwnProperty(t) && (b[w[t]] = t)
        }
        return b
      }
      function v(t, e, n) {
        return n || (n = p()[t] ? "keydown" : "keypress"),
        "keypress" == n && e.length && (n = "keydown"),
          n
      }
      function g(t) {
        return "+" === t ? ["+"] : (t = t.replace(/\+{2}/g, "+plus"),
          t.split("+"))
      }
      function y(t, e) {
        var n, r, i, o = [];
        for (n = g(t),
               i = 0; i < n.length; ++i)
          r = n[i],
          E[r] && (r = E[r]),
          e && "keypress" != e && x[r] && (r = x[r],
            o.push("shift")),
          f(r) && o.push(r);
        return e = v(r, o, e),
          {
            key: r,
            modifiers: o,
            action: e
          }
      }
      function m(t, e) {
        return null !== t && t !== o && (t === e || m(t.parentNode, e))
      }
      function k(t) {
        function e(t) {
          t = t || {};
          var e, n = !1;
          for (e in b)
            t[e] ? n = !0 : b[e] = 0;
          n || (x = !1)
        }
        function n(t, e, n, r, i, o) {
          var a, s, l = [], u = n.type;
          if (!g._callbacks[t])
            return [];
          for ("keyup" == u && f(t) && (e = [t]),
                 a = 0; a < g._callbacks[t].length; ++a)
            if (s = g._callbacks[t][a],
              (r || !s.seq || b[s.seq] == s.level) && u == s.action && ("keypress" == u && !n.metaKey && !n.ctrlKey || c(e, s.modifiers))) {
              var h = !r && s.combo == i
                , d = r && s.seq == r && s.level == o;
              (h || d) && g._callbacks[t].splice(a, 1),
                l.push(s)
            }
          return l
        }
        function r(t, e, n, r) {
          g.stopCallback(e, e.target || e.srcElement, n, r) || !1 === t(e, n) && (h(e),
            d(e))
        }
        function i(t) {
          "number" != typeof t.which && (t.which = t.keyCode);
          var e = l(t);
          if (e)
            return "keyup" == t.type && w === e ? void (w = !1) : void g.handleKey(e, u(t), t)
        }
        function a() {
          clearTimeout(m),
            m = setTimeout(e, 1e3)
        }
        function p(t, n, i, o) {
          function s(n) {
            r(i, n, t),
            "keyup" !== o && (w = l(n)),
              setTimeout(e, 10)
          }
          b[t] = 0;
          for (var c = 0; c < n.length; ++c) {
            var u = c + 1 === n.length
              , h = u ? s : function(e) {
              return function() {
                x = e,
                  ++b[t],
                  a()
              }
            }(o || y(n[c + 1]).action);
            v(n[c], h, o, t, c)
          }
        }
        function v(t, e, r, i, o) {
          g._directMap[t + ":" + r] = e,
            t = t.replace(/\s+/g, " ");
          var a, s = t.split(" ");
          if (s.length > 1)
            return void p(t, s, e, r);
          a = y(t, r),
            g._callbacks[a.key] = g._callbacks[a.key] || [],
            n(a.key, a.modifiers, {
              type: a.action
            }, i, t, o),
            g._callbacks[a.key][i ? "unshift" : "push"]({
              callback: e,
              modifiers: a.modifiers,
              action: a.action,
              seq: i,
              level: o,
              combo: t
            })
        }
        var g = this;
        if (t = t || o,
            !(g instanceof k))
          return new k(t);
        g.target = t,
          g._callbacks = {},
          g._directMap = {};
        var m, b = {}, w = !1, _ = !1, x = !1;
        g._handleKey = function(t, i, o) {
          var a, s = n(t, i, o), l = {}, c = 0, u = !1;
          for (a = 0; a < s.length; ++a)
            s[a].seq && (c = Math.max(c, s[a].level));
          for (a = 0; a < s.length; ++a)
            if (s[a].seq) {
              if (s[a].level != c)
                continue;
              u = !0,
                l[s[a].seq] = 1,
                r(s[a].callback, o, s[a].combo, s[a].seq)
            } else
              u || r(s[a].callback, o, s[a].combo);
          var h = "keypress" == o.type && _;
          o.type != x || f(t) || h || e(l),
            _ = u && "keydown" == o.type
        }
          ,
          g._bindMultiple = function(t, e, n) {
            for (var r = 0; r < t.length; ++r)
              v(t[r], e, n)
          }
          ,
          s(t, "keypress", i),
          s(t, "keydown", i),
          s(t, "keyup", i)
      }
      for (var b, w = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
      }, _ = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
      }, x = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
      }, E = {
        option: "alt",
        command: "meta",
        return: "enter",
        escape: "esc",
        plus: "+",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
      }, L = 1; L < 20; ++L)
        w[111 + L] = "f" + L;
      for (L = 0; L <= 9; ++L)
        w[L + 96] = L;
      k.prototype.bind = function(t, e, n) {
        var r = this;
        return t = t instanceof Array ? t : [t],
          r._bindMultiple.call(r, t, e, n),
          r
      }
        ,
        k.prototype.unbind = function(t, e) {
          var n = this;
          return n.bind.call(n, t, function() {}, e)
        }
        ,
        k.prototype.trigger = function(t, e) {
          var n = this;
          return n._directMap[t + ":" + e] && n._directMap[t + ":" + e]({}, t),
            n
        }
        ,
        k.prototype.reset = function() {
          var t = this;
          return t._callbacks = {},
            t._directMap = {},
            t
        }
        ,
        k.prototype.stopCallback = function(t, e) {
          var n = this;
          return !((" " + e.className + " ").indexOf(" mousetrap ") > -1) && (!m(e, n.target) && ("INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable))
        }
        ,
        k.prototype.handleKey = function() {
          var t = this;
          return t._handleKey.apply(t, arguments)
        }
        ,
        k.init = function() {
          var t = k(o);
          for (var e in t)
            "_" !== e.charAt(0) && (k[e] = function(e) {
              return function() {
                return t[e].apply(t, arguments)
              }
            }(e))
        }
        ,
        k.init(),
        i.Mousetrap = k,
      void 0 !== t && t.exports && (t.exports = k),
      void 0 !== (r = function() {
        return k
      }
        .call(e, n, e, t)) && (t.exports = r)
    }(window, document)
  },
  225: function(t, e, n) {
    "use strict";
    t.exports = n(226).default
  },
  226: function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = function() {
      function t(t, e) {
        var n = []
          , r = !0
          , i = !1
          , o = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
          !e || n.length !== e); r = !0)
            ;
        } catch (t) {
          i = !0,
            o = t
        } finally {
          try {
            !r && s.return && s.return()
          } finally {
            if (i)
              throw o
          }
        }
        return n
      }
      return function(e, n) {
        if (Array.isArray(e))
          return e;
        if (Symbol.iterator in Object(e))
          return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
      , l = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , c = n(59)
      , u = r(c)
      , h = n(5)
      , d = r(h)
      , f = n(32)
      , p = function(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e.default = t,
        e
    }(f)
      , v = n(33)
      , g = n(229)
      , y = r(g)
      , m = n(232)
      , k = r(m)
      , b = n(227)
      , w = r(b)
      , _ = n(231)
      , x = r(_)
      , E = n(228)
      , L = r(E)
      , M = n(230)
      , P = r(M)
      , T = n(224)
      , j = r(T);
    n(618);
    var N = {
      keyId: "id",
      baseHref: null,
      allowedMirrorLink: !1,
      size: [600, 400],
      historyMaxStates: 1 / 0,
      zoomEnabled: !1,
      extent: null,
      scaleExtent: [.5, 1],
      guideThreshold: 10,
      linkOffsetStart: 2,
      linkOffsetEnd: 4,
      endpointRadius: 3,
      crispEdges: !0,
      classed: "editing",
      interactEnabled: !0,
      selectNodeEnabled: !0,
      dragNodeEnabled: !0,
      appendLinkEnabled: !0,
      selectLinkEnabled: !0,
      shortcutsEnabled: !0,
      guideLineEnabled: !0,
      centerEnabled: !0,
      autoScaleToFitCanvas: !0,
      pullToLeft: !1
    }
      , O = "initializing"
      , S = "idle"
      , A = function(t) {
      function e(t) {
        var n = t.nodes
          , r = void 0 === n ? [] : n
          , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        i(this, e);
        var s = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
        s.state = O,
          s.nodes = r,
          s.options = d.default.defaults(a, N),
          s.keyId = a.keyId,
          s.history = new y.default({
            maxStates: a.historyMaxStates
          }),
          s._window = p.select(window),
          s.uniqId = d.default.uniqueId("flowchart"),
        a.interactEnabled || d.default.forEach(["shortcutsEnabled", "selectNodeEnabled", "dragNodeEnabled", "appendLinkEnabled", "selectLinkEnabled", "guideLineEnabled"], function(t) {
          a[t] = !1
        });
        var l = (0,
          v.walk)(r)
          , c = l.start;
        s.links = l.links;
        var u = s.startNode = {
          type: "start",
          stepId: "$",
          children: [c]
        };
        d.default.isNumber(c._dx) && d.default.isNumber(c._dy) ? (u._x = c._x + c._dx,
          u._y = c._y + c._dy) : (u._x = c._x - 125,
          u._y = c._y),
          r.unshift(u),
          s.links.unshift({
            source: u,
            target: c
          }),
          s.elements = {};
        var h = s.elements.root = p.select(s.options.appendTo);
        return s.elements.svg = h.append("svg").attr("class", "flowchart"),
        s.options.classed && s.elements.svg.classed(s.options.classed, !0),
        s.options.centerEnabled && s.centerCanvas(),
        s.options.pullToLeft && s.pullCanvasToLeft(),
          s.initDefs().layout().initZooms().reflow(),
        s.options.autoScaleToFitCanvas && s.scaleToFitCanvas(),
        a.shortcutsEnabled && s.enableShortcuts(),
          s.state = S,
          setTimeout(function() {
            return s.setState(s.state)
          }),
          s
      }
      return a(e, t),
        l(e, [{
          key: "setState",
          value: function(t) {
            return this.emit("stateChange", this.state = t),
              this
          }
        }, {
          key: "pushHistory",
          value: function(t, e) {
            var n = {
              action: t,
              data: e
            };
            return this.history.push(n),
              this.emit("history", "push", n),
              this
          }
        }, {
          key: "layout",
          value: function() {
            var t = this.elements.svg
              , e = this.elements.canvas = t.append("g").attr("class", "flowchart-canvas");
            this.elements.bg = e.append("rect").attr("class", "flowchart-bg").attr("x", 0).attr("y", 0),
              this.setSize(this.options.size);
            var n = this.elements.container = e.append("g").attr("class", "flowchart-container");
            if (this.elements.linkList = n.append("g").attr("class", "link-list").selectAll(".link"),
                this.elements.nodeList = n.append("g").attr("class", "node-list").selectAll(".node"),
              this.options.guideLineEnabled && (this.elements.guideList = t.append("g").attr("class", "guide-list").selectAll(".guide")),
                this.options.appendLinkEnabled) {
              var r = n.append("g").attr("class", "user-canvas");
              this.elements.appendingLink = r.append("path").attr("class", "appending-link").attr("marker-end", this.getLinkMarkerEnd())
            }
            return this
          }
        }, {
          key: "centerCanvas",
          value: function() {
            if (this.options.centerEnabled) {
              var t = this.options.size[0]
                , e = this.options.size[1]
                , n = d.default.map(this.nodes, "_x")
                , r = d.default.map(this.nodes, "_y")
                , i = d.default.min(n)
                , o = d.default.max(n)
                , a = d.default.min(r)
                , s = d.default.max(r)
                , l = o - i
                , c = s - a
                , u = 0
                , h = 0;
              u = i - (i + (t - o)) / 2 + 0,
                h = a - (a + (e - s)) / 2 + 0,
                this.nodes = d.default.map(this.nodes, function(n) {
                  return n._x -= l <= t ? u : i - 0,
                    n._y -= c <= e ? h : a - 0,
                    n
                })
            }
          }
        }, {
          key: "pullCanvasToLeft",
          value: function() {
            if (this.options.pullToLeft) {
              var t = d.default.map(this.nodes, "_x")
                , e = (d.default.map(this.nodes, "_y"),
                d.default.min(t));
              this.nodes = d.default.map(this.nodes, function(t) {
                return t._x -= e - 50 - 100,
                  t
              })
            }
          }
        }, {
          key: "scaleToFitCanvas",
          value: function() {
            if (this.options.autoScaleToFitCanvas) {
              var t = d.default.map(this.nodes, "_x")
                , e = d.default.map(this.nodes, "_y")
                , n = d.default.min(t)
                , r = d.default.max(t)
                , i = d.default.min(e)
                , o = d.default.max(e)
                , a = r - n + 100
                , s = o - i + 80
                , l = this.options.size[0]
                , c = this.options.size[1]
                , u = a - l
                , h = s - c
                , f = 1;
              (u > 0 || h > 0) && (f = u > h ? l / a : c / s),
                this.setCanvasScale(f)
            }
          }
        }, {
          key: "setCanvasScale",
          value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
            if (isNaN(t))
              throw new TypeError("scaleLevel should be a number.");
            var n = this.zooms;
            this.elements.canvas.transition().duration(e).call(n.scaleTo, t)
          }
        }, {
          key: "enableShortcuts",
          value: function() {
            var t = this;
            return j.default.bind("mod+z", function() {
              return t.undo(),
                !1
            }),
              j.default.bind("mod+shift+z", function() {
                return t.redo(),
                  !1
              }),
              j.default.bind(["del", "backspace"], function() {
                var e = !t._active;
                return t.removeNode(),
                  t.unlink(),
                  e
              }),
              j.default.bind("esc", function() {
                return t.idle()
              }),
              this
          }
        }, {
          key: "idle",
          value: function() {
            switch (this.unsetActive(),
              this.state) {
              case "linking":
                this.unToLink()
            }
            return this
          }
        }, {
          key: "setSize",
          value: function(t) {
            var e = s(t, 2)
              , n = e[0]
              , r = e[1];
            return n < 0 && (n = 0),
            r < 0 && (r = 0),
              this.elements.svg.attr("width", n).attr("height", r),
              this.elements.bg.attr("width", n).attr("height", r),
            this.elements.guideList && this.reflowGuideList(),
              this
          }
        }, {
          key: "initDefs",
          value: function() {
            var t = this.elements.defs = this.elements.svg.append("defs")
              , e = {
              viewBox: "0 0 10 10",
              refX: 7.5,
              refY: 5,
              markerWidth: 7,
              markerHeight: 7,
              orient: "auto"
            };
            d.default.forEach([{
              id: "link-arrow",
              class: "marker"
            }, {
              id: "link-arrow-hover",
              class: "marker hover"
            }, {
              id: "link-arrow-active",
              class: "marker active"
            }, {
              id: "link-arrow-passed",
              class: "marker passed"
            }, {
              id: "link-arrow-skipped",
              class: "marker skipped"
            }], function(n) {
              var r = t.append("marker");
              d.default.forEach(e, function(t, e) {
                r.attr(e, t)
              }),
                d.default.forEach(n, function(t, e) {
                  r.attr(e, t)
                }),
                r.append("path").attr("d", "M 0 0 L 10 5 L 0 10 z")
            });
            var n = t.append("filter").attr("id", "drop-shadow");
            n.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 2).attr("result", "blur"),
              n.append("feOffset").attr("in", "blur").attr("dx", 0).attr("dy", 1).attr("result", "offsetBlur"),
              n.append("feFlood").attr("in", "offsetBlur").attr("flood-color", "#c3c3c3").attr("result", "offsetColor"),
              n.append("feComposite").attr("in", "offsetColor").attr("in2", "offsetBlur").attr("operator", "in").attr("result", "offsetBlur");
            var r = n.append("feMerge");
            return r.append("feMergeNode").attr("in", "offsetBlur"),
              r.append("feMergeNode").attr("in", "SourceGraphic"),
              this
          }
        }, {
          key: "getLinkMarkerEnd",
          value: function(t) {
            return "url(" + (this.options.baseHref || "") + "#link-arrow" + (t ? "-" + t : "") + ")"
          }
        }, {
          key: "getNodeFilter",
          value: function() {
            return "url(" + (this.options.baseHref || "") + "#drop-shadow)"
          }
        }, {
          key: "initZooms",
          value: function() {
            var t = this
              , e = this.options
              , n = e.zoomEnabled
              , r = e.scaleExtent
              , i = e.extent
              , o = e.guideLineEnabled;
            if (n) {
              var a = this.zooms = p.zoom().scaleExtent(r);
              i && a.extent(i),
                a.on("start", function() {
                  t.elements.svg.classed("zooming", !0),
                    t.setState("zooming")
                }).on("zoom", function() {
                  var e = p.event.transform
                    , n = e.x
                    , r = e.y
                    , i = e.k;
                  t.options.crispEdges && 1 === i && (n = Math.round(n),
                    r = Math.round(r)),
                    t.elements.container.attr("transform", "translate(" + n + "," + r + ")scale(" + i + ")"),
                  o && t.elements.guideList.each(function(t) {
                    return t._guide.tick()
                  })
                }).on("end", function() {
                  t.elements.svg.classed("zooming", !1),
                    t.setState(S)
                }),
                this.elements.canvas.call(a)
            }
            return this
          }
        }, {
          key: "unsetZooms",
          value: function() {
            return this.elements.canvas.on(".zoom", null),
              this
          }
        }, {
          key: "resetZooms",
          value: function() {
            return this.elements.canvas.call(this.zooms),
              this
          }
        }, {
          key: "getZoomTransform",
          value: function() {
            return p.zoomTransform(this.elements.canvas.node())
          }
        }, {
          key: "reflow",
          value: function() {
            return this.reflowGuideList().reflowNodeList().reflowLinkList()
          }
        }, {
          key: "reflowNodeList",
          value: function() {
            var t = this
              , e = this.keyId
              , n = this.elements.nodeList.data(this.nodes, function(t) {
              return t[e]
            });
            n.exit().remove();
            var r = n.enter().append("g").attr("class", "node");
            setTimeout(function() {
              return r.attr("filter", t.getNodeFilter())
            }),
              this.elements.nodeList = r.merge(n);
            var i = this;
            return r.each(function(t) {
              t.$ || ("start" === t.type ? t.$ = new x.default(t,i) : "gateway" === t.type ? t.$ = new w.default(t,i) : t.$ = new k.default(t,i)),
                t.$.enter(p.select(this))
            }),
              this
          }
        }, {
          key: "reflowLinkList",
          value: function() {
            var t = this.keyId
              , e = this.elements.linkList.data(this.links, function(e) {
              return e.source[t] + "=>" + e.target[t]
            });
            e.exit().remove().each(function(t) {
              d.default.remove(t.source._links, {
                data: t
              }),
                d.default.remove(t.target._links, {
                  data: t
                })
            });
            var n = e.enter().append("g").attr("class", "link");
            this.elements.linkList = n.merge(e);
            var r = this;
            return n.each(function(t) {
              t.$ || (t.$ = new P.default(t,r));
              var e = t.source
                , n = t.target
                , i = t.$;
              e._links || (e._links = []),
                e._links.push(i),
              n._links || (n._links = []),
                n._links.push(i),
                i.enter(p.select(this))
            }),
              this
          }
        }, {
          key: "reflowGuideList",
          value: function() {
            if (!this.options.guideLineEnabled)
              return this;
            var t = this.keyId
              , e = this.elements.guideList.data(this.nodes, function(e) {
              return e[t]
            });
            e.exit().remove();
            var n = e.enter().append("g").attr("class", "guide");
            this.elements.guideList = n.merge(e);
            var r = this;
            return n.each(function(t) {
              t._guide || (t._guide = new L.default(t,r)),
                t._guide.enter(p.select(this))
            }),
              this
          }
        }, {
          key: "dragNodeStart",
          value: function() {
            return this.elements.svg.classed("dragging-node", !0),
              this.setState("drag-node-start")
          }
        }, {
          key: "dragNode",
          value: function() {
            return this.setState("drag-node")
          }
        }, {
          key: "dragNodeEnd",
          value: function(t, e, n) {
            var r = e.from
              , i = e.to;
            return n ? d.default.isEqual(r, i) || this.pushHistory("dragNode", {
              node: t,
              from: r,
              to: i
            }) : this.setActive("node", t),
              this.elements.svg.classed("dragging-node", !1),
              this.setState("drag-node-end").setState(S)
          }
        }, {
          key: "alignToGuide",
          value: function(t) {
            var e = this.options
              , n = e.guideLineEnabled
              , r = e.guideThreshold;
            if (!n)
              return this;
            this.hideGuide();
            var i = this.nodes
              , o = {
              vertical: t.$.getVerticals(),
              horizontal: t.$.getHorizontals()
            }
              , a = this.elements.guideList;
            return d.default.forEach(o, function(e, n) {
              var o = d.default.chain(e).map(function(e, r) {
                return d.default.chain(i).without(t).map(function(t) {
                  return d.default.chain(t.$["horizontal" === n ? "getHorizontals" : "getVerticals"]()).map(function(i, o) {
                    return {
                      node: t,
                      value: i - e,
                      diff: Math.abs(i - e),
                      sourcePosition: r,
                      targetPosition: o,
                      direction: n
                    }
                  }).minBy("diff").value()
                }).minBy("diff").value()
              }).minBy("diff").value();
              o && o.diff < r && (a.each(function(t) {
                t === o.node && t._guide.active(o.targetPosition)
              }),
                "horizontal" === n ? t._y += o.value : t._x += o.value)
            }),
              this
          }
        }, {
          key: "hideGuide",
          value: function() {
            return this.options.guideLineEnabled && this.elements.guideList.each(function(t) {
              return t._guide.unactive()
            }),
              this
          }
        }, {
          key: "appendTempNode",
          value: function(t) {
            return this.nodes.push(t),
              this.reflowNodeList()
          }
        }, {
          key: "removeTempNode",
          value: function(t) {
            return d.default.remove(this.nodes, t),
              this.reflowNodeList()
          }
        }, {
          key: "appendNode",
          value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nodes.length
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return this.nodes.splice(e, 0, t),
            n && (this.pushHistory("appendNode", {
              node: t,
              index: e
            }),
              this.reflowNodeList(),
              this.reflowGuideList()),
              this
          }
        }, {
          key: "removeNode",
          value: function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = this.getActive("node");
            if (!(t = t || n))
              return this;
            if ("start" === t.type)
              return this.emit("err", "removeStart"),
                this;
            var r = d.default.findIndex(this.nodes, t);
            if (-1 === r)
              return this;
            d.default.remove(this.nodes, t);
            var i = d.default.remove(this.links, function(e) {
              if (e.source === t || e.target === t)
                return d.default.forEach(e.source.children, function(t) {
                  t.detail === e.target && (e.direction = [t.sourcePoint, t.targetPoint])
                }),
                  !0
            });
            return d.default.forEach(this.nodes, function(e) {
              d.default.remove(e.children, function(e) {
                return t.stepId ? e.stepId === t.stepId : e.uid === t.uid
              })
            }),
            e && this.pushHistory("removeNode", {
              node: t,
              links: i,
              index: r
            }).reflow(),
            t === n && this.unsetActive(),
              this
          }
        }, {
          key: "toLink",
          value: function() {
            this.idle();
            var t = this.uniqId
              , e = this._window
              , n = this.options
              , r = n.zoomEnabled
              , i = n.dragNodeEnabled
              , o = n.allowedMirrorLink
              , a = this.elements
              , l = a.svg
              , c = a.nodeList
              , u = a.appendingLink
              , h = a.container
              , f = this;
            return r && this.unsetZooms(),
            i && c.each(function(t) {
              return t.$.unsetDrags()
            }),
              l.classed("linking linking-from", !0).on("mousedown", function() {
                p.event.preventDefault();
                var n = p.mouse(h.node())
                  , r = s(n, 2)
                  , i = r[0]
                  , a = r[1];
                u.attr("d", "").classed("active", !0);
                var v = f.getClosestNode(p.event.target);
                c.each(function(t) {
                  return t.$.hover(function(t) {
                    return t === v
                  })
                });
                var g = null
                  , y = null;
                if (v) {
                  if ("start" === v.type && 0 !== v.children.length)
                    return f.unToLink(),
                      void f.emit("err", "multiRoot");
                  v.children || (v.children = []),
                    g = f.getClosestBranch(p.event.target) || "bottom",
                    v.$.hoverBranch(g),
                    y = {
                      sourcePoint: g
                    }
                }
                l.classed("linking-from", !1).classed("linking-to", !0),
                  e.on("mousemove." + t, function() {
                    var t = f.getClosestNode(p.event.target);
                    c.each(function(e) {
                      if (e.$.hover(function(e) {
                          return e === v || e === t
                        }),
                        e !== v && e === t) {
                        var n = f.getClosestBranch(p.event.target.parentNode);
                        e.$.hoverBranch(n)
                      }
                    });
                    var e = p.mouse(h.node())
                      , n = s(e, 2)
                      , r = n[0]
                      , o = n[1];
                    u.attr("d", "M" + i + " " + a + "L" + r + " " + o)
                  }).on("mouseup." + t, function() {
                    f.unToLink();
                    var t = f.getClosestNode(p.event.target);
                    if (t && "start" === t.type)
                      return void f.emit("err", "linkToStart");
                    if (v && t && v !== t) {
                      "start" === v.type && (t.root = !0),
                        y.targetPoint = f.getClosestBranch(p.event.target.parentNode),
                        y.detail = t,
                        y.stepId = t.stepId,
                      t.stepId || (y.uid = t.uid);
                      var e = {
                        source: v,
                        target: t
                      }
                        , n = d.default.find(f.links, e);
                      if (n)
                        f.changeLinkDir(n, {
                          sourcePoint: y.sourcePoint,
                          targetPoint: y.targetPoint
                        });
                      else {
                        if (!o) {
                          var r = d.default.find(f.links, {
                            source: t,
                            target: v
                          });
                          if (r)
                            return void f.emit("mirrorLink", r)
                        }
                        "exclusive-fork" === v.$.category && (e.branch = "yes"),
                          v.children.push(y),
                          f.link(e)
                      }
                    }
                  })
              }),
              this.setState("linking")
          }
        }, {
          key: "unToLink",
          value: function() {
            var t = this.uniqId
              , e = this.elements
              , n = e.svg
              , r = e.appendingLink
              , i = e.nodeList
              , o = this.options
              , a = o.zoomEnabled
              , s = o.dragNodeEnabled;
            return this._window.on("mousemove." + t, null).on("mouseup." + t, null),
              n.classed("linking linking-from linking-to", !1).on("mousedown", null),
              r.classed("active", !1),
            a && this.resetZooms(),
            s && i.each(function(t) {
              return t.$.resetDrags()
            }),
              i.each(function(t) {
                t.$.hover(!1),
                  t.$.hoverBranch()
              }),
              this.setState(S)
          }
        }, {
          key: "getClosestNode",
          value: function(t) {
            for (; t && t !== document; ) {
              var e = p.select(t);
              if (e.classed("node"))
                return e.datum();
              t = t.parentNode
            }
            return null
          }
        }, {
          key: "getClosestBranch",
          value: function(t) {
            for (; t && t !== document; ) {
              for (var e = p.select(t), n = ["yes", "no", "top", "bottom", "left", "right"], r = 0; r < n.length; r++)
                if (e.classed(n[r]))
                  return n[r];
              t = t.parentNode
            }
            return null
          }
        }, {
          key: "link",
          value: function() {
            function t(t) {
              t.source.children.push({
                sourcePoint: n ? t.target.sourcePoint : t.direction[0],
                targetPoint: n ? t.target.targetPoint : t.direction[1],
                stepId: t.target.stepId,
                uid: t.target.uid,
                detail: t.target
              })
            }
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.links.push(e),
                e.source.children.length) {
              d.default.find(e.source.children, function(t) {
                return t.stepId === e.target.stepId || t.uid === e.target.uid
              }) || t(e)
            } else
              t(e);
            return n && this.pushHistory("link", {
              link: e
            }).reflowLinkList(),
              this
          }
        }, {
          key: "unlink",
          value: function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = this.getActive("link");
            return (t = t || n) ? (d.default.remove(this.links, t),
            "start" === t.source.type && (t.target.root = !1),
              d.default.remove(t.source.children, function(e) {
                var n = !1;
                return n = t.target.stepId ? e.stepId === t.target.stepId : e.uid === t.target.uid,
                n && (t.direction = [e.sourcePoint, e.targetPoint]),
                  n
              }),
            e && this.pushHistory("unlink", {
              link: t
            }).reflowLinkList(),
            t === n && this.unsetActive(),
              this) : this
          }
        }, {
          key: "changeLinkDir",
          value: function(t, e) {
            var n = e.sourcePoint
              , r = e.targetPoint
              , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
              , o = void 0
              , a = void 0;
            return d.default.each(t.source.children, function(e) {
              d.default.eq(e.detail, t.target) && (o = e.sourcePoint,
                a = e.targetPoint,
                e.sourcePoint = n,
                e.targetPoint = r)
            }),
              t.$.setDirection(),
              t.$.tick(),
            i && this.pushHistory("changeLinkDir", {
              link: {
                detail: t,
                sourcePoint: n,
                targetPoint: r,
                sourcePointPre: o,
                targetPointPre: a
              }
            }),
              this
          }
        }, {
          key: "setActive",
          value: function(t, e) {
            var n = this;
            return e && e.$ ? t === this._activeType && e === this._active ? this : (this.unsetActive(!1),
              this._active = e,
              this._activeType = t,
              e.$.active(!0),
              this.elements.svg.on("click.active", function() {
                return n.unsetActive()
              }),
              this.emit("activeChange", t, e),
              this) : this
          }
        }, {
          key: "getActive",
          value: function(t) {
            return this._activeType === t && this._active
          }
        }, {
          key: "unsetActive",
          value: function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            if (this.elements.svg.on("click.active", null),
                this._active) {
              var e = this._activeType;
              this._active.$.active(!1),
                this._active = null,
                this._activeType = null,
              t && this.emit("activeChange", e, null)
            }
            return this
          }
        }, {
          key: "getAncestors",
          value: function(t) {
            function e(t) {
              var n = [];
              d.default.forEach(r, function(e) {
                if (e.target === t) {
                  var r = e.source;
                  r._visited || (r._visited = !0,
                    i.unshift(r),
                    n.unshift(r))
                }
              }),
                d.default.forEach(n, e)
            }
            var n = this.nodes
              , r = this.links
              , i = [];
            return d.default.forEach(n, function(t) {
              delete t._visited
            }),
              e(t),
              i
          }
        }, {
          key: "undo",
          value: function() {
            var t = this
              , e = this.history.undo();
            if (!e)
              return null;
            var n = e.action
              , r = e.data
              , i = r.node
              , o = r.link
              , a = r.index;
            switch (n) {
              case "appendNode":
                this.removeNode(i, !1).reflowNodeList().reflowGuideList();
                break;
              case "removeNode":
                this.appendNode(i, a, !1),
                r.links && d.default.forEach(r.links, function(e) {
                  return t.link(e, !1)
                }),
                  this.reflow(),
                  this.elements.nodeList.order(),
                  this.setActive("node", i);
                break;
              case "dragNode":
                d.default.assign(i, r.from),
                  i.$.tick();
                break;
              case "link":
                this.unlink(o, !1).reflowLinkList();
                break;
              case "unlink":
                this.link(o, !1).reflowLinkList();
                break;
              case "changeLinkDir":
                this.changeLinkDir(o.detail, {
                  sourcePoint: o.sourcePointPre,
                  targetPoint: o.targetPointPre
                }, !1)
            }
            return this.emit("history", "undo", e),
              e
          }
        }, {
          key: "redo",
          value: function() {
            var t = this.history.redo();
            if (!t)
              return null;
            var e = t.action
              , n = t.data
              , r = n.node
              , i = n.link
              , o = n.index;
            switch (e) {
              case "appendNode":
                this.appendNode(r, o, !1).reflowNodeList().reflowGuideList(),
                  this.elements.nodeList.order(),
                  this.setActive("node", r);
                break;
              case "removeNode":
                this.removeNode(r, !1).reflow();
                break;
              case "dragNode":
                d.default.assign(r, n.to),
                  r.$.tick();
                break;
              case "link":
                this.link(i, !1).reflowLinkList();
                break;
              case "unlink":
                this.unlink(i, !1).reflowLinkList();
                break;
              case "changeLinkDir":
                this.changeLinkDir(i.detail, {
                  sourcePoint: i.sourcePoint,
                  targetPoint: i.targetPoint
                }, !1)
            }
            return this.emit("history", "redo", t),
              t
          }
        }, {
          key: "getData",
          value: function() {
            var t = this.nodes
              , e = !1;
            d.default.forEach(t, function(t) {
              "start" === t.type && (t.children.length ? t.children[0].detail ? t.children[0].detail.root = !0 : t.children[0].root = !0 : e = !0)
            }),
              t = d.default.reject(t, {
                type: "start"
              });
            var n = (0,
              v.walk)(t);
            return {
              circled: n.circled,
              detached: e || n.detached,
              noStart: n.noStart,
              invalid: e || n.invalid,
              nodes: t
            }
          }
        }]),
        e
    }(u.default);
    A.STATE_INITIALIZING = O,
      A.STATE_IDLE = S,
      A.STATE_ZOOMING = "zooming",
      A.STATE_DRAG_NODE_START = "drag-node-start",
      A.STATE_DRAG_NODE = "drag-node",
      A.STATE_DRAG_NODE_END = "drag-node-end",
      A.STATE_LINKING = "linking",
      e.default = A
  },
  227: function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , s = n(66)
      , l = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(s)
      , c = n(33)
      , u = function(t) {
      function e(t, n) {
        r(this, e);
        var o = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        o.category = t.subtype + "-" + t.action;
        var a = void 0
          , s = void 0;
        switch (o.category) {
          case "exclusive-fork":
            t.branchLayout || (t.branchLayout = "bottom"),
              a = 100,
              s = 72;
            break;
          case "parallel-fork":
          case "exclusive-join":
          case "parallel-join":
            a = 42,
              s = 42;
            break;
          default:
            throw new Error("unknown gateway subtype and action: " + o.category)
        }
        return o.width = a,
          o.height = s,
          o.ENDPOINT_REDIUS = n.options.endpointRadius,
          o
      }
      return o(e, t),
        a(e, [{
          key: "getControls",
          value: function() {
            var t = this.data
              , e = this.width
              , n = this.height
              , r = t._x
              , i = t._y;
            return this.context.options.crispEdges && (r = (0,
              c.crispEdges)(r),
              i = (0,
                c.crispEdges)(i)),
              {
                top: [r, i - n / 2],
                right: [r + e / 2, i],
                bottom: [r, i + n / 2],
                left: [r - e / 2, i],
                center: [r, i]
              }
          }
        }, {
          key: "draw",
          value: function() {
            var t = this.data
              , e = t.subtype
              , n = t.action;
            this.elem.classed("gateway " + e + " " + n, !0);
            var r = this.elem.append("g").attr("class", "outline")
              , i = this.width
              , o = this.height
              , a = -i / 2
              , s = -o / 2;
            this.context.options.crispEdges && (a = (0,
              c.crispEdges)(a),
              s = (0,
                c.crispEdges)(s));
            var l = a + i
              , u = s + o;
            if (r.append("path").attr("class", "node-line").attr("d", ["M" + a + " 0", "L0 " + s, "L" + l + " 0", "L0 " + u, "z"].join("")),
              "parallel-fork" === this.category)
              r.append("path").attr("class", "stroked").attr("d", ["M" + a / 2 + " 0", "L" + l / 2 + " 0", "M0 " + s / 2, "L0 " + u / 2].join(""));
            else if ("parallel-join" === this.category) {
              r.append("path").attr("class", "filled").attr("d", ["M-4 0", "A4 4 0 1 1 4 0", "A4 4 0 1 1 -4 0", "z"].join(""))
            } else
              "exclusive-fork" === this.category ? (this.elem.append("text").attr("class", "name").attr("x", 0).attr("y", 5),
                this.renderText(),
                this.tickBranches()) : "exclusive-join" === this.category && this.tickBranches();
            return this.emit("drawed"),
              this
          }
        }, {
          key: "changeJoinSubtype",
          value: function() {
            return this.elem.attr("class", "node"),
              this.elem.select(".outline").remove(),
              this.elem.select(".branch").remove(),
              this.elem.select(".name").remove(),
              this.category = this.data.subtype + "-join",
              this.draw().active(!0)
          }
        }, {
          key: "renderText",
          value: function() {
            return this.elem.select(".name").text(this.data.stepName || ""),
              this
          }
        }, {
          key: "tickBranchesOld",
          value: function() {
            var t = this.elem.select(".branch.yes")
              , e = this.elem.select(".branch.no")
              , n = this.width
              , r = this.height
              , i = -n / 2
              , o = -r / 2
              , a = n / 2
              , s = r / 2
              , l = ["M" + i + " 0", "L0 " + o, "L" + a + " 0", "z"].join("")
              , c = ["M" + i + " 0", "L0 " + s, "L" + a + " 0", "z"].join("")
              , u = ["M" + i + " 0", "L0 " + o, "L0 " + s, "z"].join("")
              , h = ["M" + a + " 0", "L0 " + o, "L0 " + s, "z"].join("")
              , d = [0, -r / 5 + 5]
              , f = [0, r / 5 + 5]
              , p = [-n / 6, 5]
              , v = [n / 6, 5];
            switch (this.data.branchLayout) {
              case "left":
                t.select("path").attr("d", u),
                  t.select("text").attr("x", p[0]).attr("y", p[1]),
                  e.select("path").attr("d", h),
                  e.select("text").attr("x", v[0]).attr("y", v[1]);
                break;
              case "right":
                t.select("path").attr("d", h),
                  t.select("text").attr("x", v[0]).attr("y", v[1]),
                  e.select("path").attr("d", u),
                  e.select("text").attr("x", p[0]).attr("y", p[1]);
                break;
              case "top":
                t.select("path").attr("d", l),
                  t.select("text").attr("x", d[0]).attr("y", d[1]),
                  e.select("path").attr("d", c),
                  e.select("text").attr("x", f[0]).attr("y", f[1]);
                break;
              default:
                t.select("path").attr("d", c),
                  t.select("text").attr("x", f[0]).attr("y", f[1]),
                  e.select("path").attr("d", l),
                  e.select("text").attr("x", d[0]).attr("y", d[1])
            }
          }
        }, {
          key: "_appendBranches",
          value: function() {
            var t = this.elem
              , e = t.selectAll(".branch").data(Array(4)).enter().append("g").attr("class", function(t, e) {
              var n = ["branch"]
                , r = "";
              switch (e) {
                case 0:
                  r = "top";
                  break;
                case 1:
                  r = "bottom";
                  break;
                case 2:
                  r = "left";
                  break;
                case 3:
                  r = "right"
              }
              return n.push(r),
                n.join(" ")
            });
            e.append("path").attr("class", "branch-outline"),
              e.append("circle").attr("class", "branch-endpoint").attr("r", this.ENDPOINT_REDIUS)
          }
        }, {
          key: "tickBranches",
          value: function() {
            var t = this.elem
              , e = this.width
              , n = this.height;
            this._appendBranches();
            var r = t.select(".branch.top")
              , i = t.select(".branch.bottom")
              , o = t.select(".branch.left")
              , a = t.select(".branch.right")
              , s = ["M0 0", "l" + -e / 4 + " " + -n / 4, "l" + e / 4 + " " + -n / 4, "l" + e / 4 + " " + n / 4, "z"]
              , l = ["M0 0", "l" + -e / 4 + " " + n / 4, "l" + e / 4 + " " + n / 4, "l" + e / 4 + " " + -n / 4, "z"]
              , c = ["M0 0", "l" + -e / 4 + " " + -n / 4, "l" + -e / 4 + " " + n / 4, "l" + e / 4 + " " + n / 4, "z"]
              , u = ["M0 0", "l" + e / 4 + " " + -n / 4, "l" + e / 4 + " " + n / 4, "l" + -e / 4 + " " + n / 4, "z"];
            r.select(".branch-outline").attr("d", s.join("")),
              i.select(".branch-outline").attr("d", l.join("")),
              o.select(".branch-outline").attr("d", c.join("")),
              a.select(".branch-outline").attr("d", u.join("")),
              r.select(".branch-endpoint").attr("cx", 0).attr("cy", -n / 2),
              i.select(".branch-endpoint").attr("cx", 0).attr("cy", n / 2),
              o.select(".branch-endpoint").attr("cx", -e / 2).attr("cy", 0),
              a.select(".branch-endpoint").attr("cx", e / 2).attr("cy", 0)
          }
        }, {
          key: "hoverBranch",
          value: function(t) {
            return this.elem.selectAll(".branch").classed("hover", !1),
            t && this.elem.select(".branch." + t).classed("hover", !0),
              this
          }
        }]),
        e
    }(l.default);
    e.default = u
  },
  228: function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function() {
      function t(t, e) {
        var n = []
          , r = !0
          , i = !1
          , o = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
          !e || n.length !== e); r = !0)
            ;
        } catch (t) {
          i = !0,
            o = t
        } finally {
          try {
            !r && s.return && s.return()
          } finally {
            if (i)
              throw o
          }
        }
        return n
      }
      return function(e, n) {
        if (Array.isArray(e))
          return e;
        if (Symbol.iterator in Object(e))
          return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
      , o = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , a = n(5)
      , s = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(a)
      , l = n(33)
      , c = function() {
      function t(e, n) {
        r(this, t),
          this.data = e,
          this.context = n
      }
      return o(t, [{
        key: "enter",
        value: function(t) {
          var e = this;
          return this.elem = t,
            this.lines = {},
            s.default.forEach(["cx", "cy"], function(n) {
              e.lines[n] = t.append("line").attr("class", "pos-" + n)
            }),
            this.tick()
        }
      }, {
        key: "tick",
        value: function() {
          var t = this.data.$;
          if (!t)
            return this;
          var e = i(this.context.options.size, 2)
            , n = e[0]
            , r = e[1]
            , o = this.lines
            , a = this.context.getZoomTransform();
          return s.default.forEach({
            vertical: t.getVerticals(),
            horizontal: t.getHorizontals()
          }, function(t, e) {
            s.default.forEach(t, function(t, i) {
              var s = o[i];
              "vertical" === e ? (t = (0,
                l.crispEdges)(a.applyX(t)),
                s.attr("x1", t).attr("y1", 0).attr("x2", t).attr("y2", r)) : (t = (0,
                l.crispEdges)(a.applyY(t)),
                s.attr("x1", 0).attr("y1", t).attr("x2", n).attr("y2", t))
            })
          }),
            this
        }
      }, {
        key: "active",
        value: function(t) {
          return this.lines[t].classed("active", !0),
            this
        }
      }, {
        key: "unactive",
        value: function() {
          return s.default.forEach(this.lines, function(t) {
            return t.classed("active", !1)
          }),
            this
        }
      }]),
        t
    }();
    e.default = c
  },
  229: function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , o = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , n = e.maxStates
          , i = void 0 === n ? 100 : n;
        r(this, t),
          this._history = [],
          this._cursor = -1,
          this._maxStates = i
      }
      return i(t, [{
        key: "current",
        value: function() {
          return this._history[this._cursor] || null
        }
      }, {
        key: "push",
        value: function(t) {
          for (this._history.splice(this._cursor += 1); this._history.length && this._history.length >= this._maxRecord; )
            this._cursor -= 1,
              this._history.shift();
          return this._history.push(t),
            this
        }
      }, {
        key: "replace",
        value: function(t) {
          return this._history.splice(this._cursor, 1, t),
            this
        }
      }, {
        key: "back",
        value: function() {
          return this.canBack() ? this._history[this._cursor -= 1] || null : null
        }
      }, {
        key: "forward",
        value: function() {
          return this.canForward() ? this._history[this._cursor += 1] || null : null
        }
      }, {
        key: "go",
        value: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
            , e = this._cursor + t;
          return e < -1 || e > this._history.length - 1 ? null : this._history[this._cursor = e] || null
        }
      }, {
        key: "canBack",
        value: function() {
          return this._cursor >= 0
        }
      }, {
        key: "canForward",
        value: function() {
          return this._cursor < this._history.length - 1
        }
      }, {
        key: "undo",
        value: function() {
          var t = this.current();
          return this.back(),
            t
        }
      }, {
        key: "redo",
        value: function() {
          return this.forward()
        }
      }, {
        key: "canUndo",
        value: function() {
          return !!this.current()
        }
      }, {
        key: "canRedo",
        value: function() {
          return this.canForward()
        }
      }, {
        key: "length",
        get: function() {
          return this._history.length
        }
      }]),
        t
    }();
    e.default = o
  },
  230: function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = function() {
      function t(t, e) {
        var n = []
          , r = !0
          , i = !1
          , o = void 0;
        try {
          for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
          !e || n.length !== e); r = !0)
            ;
        } catch (t) {
          i = !0,
            o = t
        } finally {
          try {
            !r && s.return && s.return()
          } finally {
            if (i)
              throw o
          }
        }
        return n
      }
      return function(e, n) {
        if (Array.isArray(e))
          return e;
        if (Symbol.iterator in Object(e))
          return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
      , o = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , a = n(5)
      , s = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(a)
      , l = n(32)
      , c = function(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e.default = t,
        e
    }(l)
      , u = n(33)
      , h = function() {
      function t(e, n) {
        r(this, t),
          this.data = e,
          this.context = n,
          this.direction = "",
          this.setDirection()
      }
      return o(t, [{
        key: "enter",
        value: function(t) {
          var e = this
            , n = this.data
            , r = n.source;
          n.target;
          this.elem = t,
            t.append("path").attr("class", "link-bg"),
            t.append("path").attr("class", "link-arrow").attr("marker-end", this.context.getLinkMarkerEnd());
          var i = this.data.branch;
          return i && "exclusive-fork" === r.$.category && (t.append("text").attr("class", "shadow " + i).text(i.toUpperCase()),
            t.append("text").attr("class", "text " + i).text(i.toUpperCase())),
            t.on("mouseenter", function() {
              t.classed("active") || t.select(".link-arrow").attr("marker-end", e.context.getLinkMarkerEnd("hover"))
            }).on("mouseleave", function() {
              t.classed("active") || t.select(".link-arrow").attr("marker-end", e.context.getLinkMarkerEnd("untouched" === e.status ? "" : e.status))
            }).on("mousedown", function() {
              return c.event.preventDefault()
            }),
          this.context.options.selectLinkEnabled && t.on("click", function(t) {
            c.event.stopPropagation(),
              e.context.setActive("link", t)
          }),
            this.tick()
        }
      }, {
        key: "setDirection",
        value: function() {
          var t = this.data
            , e = t.source
            , n = t.target
            , r = t.branch
            , i = this.context.options
            , o = i.linkOffsetStart
            , a = i.linkOffsetEnd
            , l = a + 5
            , c = e.$.getControls()
            , u = n.$.getControls()
            , h = [];
          c.right[0] + o + 10 < u.top[0] && c.right[1] + 10 < u.top[1] - l && h.push("right-top"),
          c.right[0] + o + 10 < u.top[0] && c.right[1] - 10 > u.bottom[1] + l && h.push("right-bottom"),
          c.left[0] - o - 10 > u.top[0] && c.left[1] + 10 < u.top[1] - l && h.push("left-top"),
          c.bottom[1] + o + 10 < u.top[1] - (l + 10) && h.push("bottom-top"),
          c.right[0] + o + 10 < u.left[0] - (l + 10) && h.push("right-left"),
          c.left[0] - (o + 10) > u.right[0] + (l + 10) && h.push("left-right"),
          c.top[0] + 10 < u.left[0] - l && c.top[1] - (o + 10) > u.left[1] && h.push("top-left"),
          c.bottom[0] + 10 < u.left[0] - l && c.bottom[1] + (o + 10) < u.left[1] && h.push("bottom-left"),
          c.top[0] - 10 > u.right[0] + l && c.top[1] - (o + 10) > u.right[1] && h.push("top-right"),
          c.top[1] - (o + 10) > u.bottom[1] + (l + 10) && h.push("top-bottom"),
          u.top[0] + o + 10 - c.left[0] > 0 && h.push("top-top"),
          u.bottom[0] + o + 10 - c.left[0] > 0 && h.push("bottom-bottom");
          var d = void 0;
          if (d = "gateway" === n.type && "join" === n.action ? ["right-top", "right-bottom", "right-left", "top-left", "bottom-left", "left-top", "bottom-top", "top-bottom", "top-right", "left-right"] : ["top-left", "bottom-left", "right-left", "right-top", "right-bottom", "left-top", "bottom-top", "top-bottom", "top-right", "left-right"],
              r) {
            d = ["top-left", "bottom-left", "right-top", "right-left", "right-bottom", "left-top", "bottom-top", "top-bottom", "top-right", "left-right"];
            var f = e.branchLayout || "bottom";
            if ("no" === r)
              switch (f) {
                case "top":
                  f = "bottom";
                  break;
                case "bottom":
                  f = "top";
                  break;
                case "left":
                  f = "right";
                  break;
                case "right":
                  f = "left"
              }
            d = s.default.filter(d, function(t) {
              return t.split("-")[0] === f
            })
          }
          this.direction = s.default.find(d, function(t) {
            return -1 !== s.default.indexOf(h, t)
          });
          var p = s.default.find(e.children, function(t) {
            return n.stepId ? s.default.eq(t.stepId, n.stepId) : s.default.eq(t.uid, n.uid)
          });
          return p && (p.sourcePoint || p.targetPoint) && (this.direction = p.sourcePoint + "-" + p.targetPoint,
          s.default.indexOf(h, this.direction) < 0 && (this.direction = h[0])),
            this.direction
        }
      }, {
        key: "tick",
        value: function() {
          var t = this.direction
            , e = this.data
            , n = e.source
            , r = e.target
            , o = e.branch
            , a = this.context.options
            , l = a.linkOffsetStart
            , c = a.linkOffsetEnd
            , h = a.crispEdges
            , d = n.$.getControls()
            , f = r.$.getControls()
            , p = void 0
            , v = void 0
            , g = void 0
            , y = void 0
            , m = void 0
            , k = function() {};
          if (h || (k = function() {
                v = (0,
                  u.crispEdges)(v),
                  g = (0,
                    u.crispEdges)(g),
                  y = (0,
                    u.crispEdges)(y),
                  m = (0,
                    u.crispEdges)(m)
              }
            ),
            "top-top" === t) {
            var b = i(d.top, 2);
            v = b[0],
              g = b[1];
            var w = i(f.top, 2);
            y = w[0],
              m = w[1],
              g -= l,
              m += c,
              k(),
              p = ["M" + v + " " + g, "V" + (g - 40), "a10 10 0 0 1 10 -10", "H" + (y - 10), "a10 10 0 0 1 10 10", "V" + (m - 10)]
          } else if ("top-left" === t) {
            var _ = i(d.top, 2);
            v = _[0],
              g = _[1];
            var x = i(f.left, 2);
            y = x[0],
              m = x[1],
              g -= l,
              y -= c,
              k(),
              p = ["M" + v + " " + g, "V" + (m + 10), "a10 10 0 0 1 10 -10", "H" + y]
          } else if ("top-right" === t) {
            var E = i(d.top, 2);
            v = E[0],
              g = E[1];
            var L = i(f.right, 2);
            y = L[0],
              m = L[1],
              g -= l,
              y -= c,
              k(),
              p = ["M" + v + " " + g, "V" + (m + 10), "a10 10 0 0 0 -10 -10", "H" + (y + 10)]
          } else if ("bottom-bottom" === t) {
            var M = i(d.bottom, 2);
            v = M[0],
              g = M[1];
            var P = i(f.bottom, 2);
            y = P[0],
              m = P[1],
              g += l,
              m += c,
              k(),
              p = ["M" + v + " " + g, "V" + (g + 40), "a10 10 0 0 0 10 10", "H" + y, "a10 10 0 0 0 10 -10", "V" + m]
          } else if ("bottom-left" === t) {
            var T = i(d.bottom, 2);
            v = T[0],
              g = T[1];
            var j = i(f.left, 2);
            y = j[0],
              m = j[1],
              g += l,
              y -= c,
              k(),
              p = ["M" + v + " " + g, "V" + (m - 10), "a10 10 0 0 0 10 10", "H" + y]
          } else if ("bottom-right" === t) {
            var N = i(d.bottom, 2);
            v = N[0],
              g = N[1];
            var O = i(f.right, 2);
            y = O[0],
              m = O[1],
              g += l,
              y -= c,
              k(),
              p = ["M" + v + " " + g, "V" + (m - 10), "a10 10 0 0 1 -10 10", "H" + (y + 10)]
          } else if ("right-left" === t) {
            var S = i(d.right, 2);
            v = S[0],
              g = S[1];
            var A = i(f.left, 2);
            y = A[0],
              m = A[1],
              v += l,
              y -= c,
              k();
            var z = m > g ? 0 : 1
              , C = Math.min(10, Math.abs(m - g) / 2)
              , I = 1 - 2 * z;
            p = ["M" + v + " " + g, "H" + ((v + y) / 2 - C), "a" + C + " " + C + " 0 0 " + (1 - z) + " " + C + " " + I * C, "V" + (m - I * C), "a" + C + " " + C + " 0 0 " + z + " " + C + " " + I * C, "H" + y]
          } else if ("left-top" === t) {
            var D = i(d.left, 2);
            v = D[0],
              g = D[1];
            var R = i(f.top, 2);
            y = R[0],
              m = R[1],
              v -= l,
              m -= c,
              k(),
              p = ["M" + v + " " + g, "H" + (y + 10), "a10 10 0 0 0 -10 10", "V" + m]
          } else if ("right-top" === t) {
            var B = i(d.right, 2);
            v = B[0],
              g = B[1];
            var $ = i(f.top, 2);
            y = $[0],
              m = $[1],
              v += l,
              m -= c,
              k(),
              p = ["M" + v + " " + g, "H" + (y - 10), "a10 10 0 0 1 10 10", "V" + m]
          } else if ("right-bottom" === t) {
            var H = i(d.right, 2);
            v = H[0],
              g = H[1];
            var U = i(f.bottom, 2);
            y = U[0],
              m = U[1],
              v += l,
              m += c,
              k(),
              p = ["M" + v + " " + g, "H" + (y - 10), "a10 10 0 0 0 10 -10", "V" + m]
          } else if ("bottom-top" === t) {
            var V = i(d.bottom, 2);
            v = V[0],
              g = V[1];
            var G = i(f.top, 2);
            y = G[0],
              m = G[1],
              g += l,
              m -= c,
              k();
            var q = y > v ? 0 : 1
              , F = Math.min(10, Math.abs(y - v) / 2)
              , K = 1 - 2 * q;
            p = ["M" + v + " " + g, "V" + ((g + m) / 2 - F), "a" + F + " " + F + " 0 0 " + q + " " + K * F + " " + F, "H" + (y - K * F), "a" + F + " " + F + " 0 0 " + (1 - q) + " " + K * F + " " + F, "V" + m]
          } else if ("top-bottom" === t) {
            var Z = i(d.top, 2);
            v = Z[0],
              g = Z[1];
            var W = i(f.bottom, 2);
            y = W[0],
              m = W[1],
              g -= l,
              m += c,
              k();
            var X = y > v ? 0 : 1
              , J = Math.min(10, Math.abs(y - v) / 2)
              , Y = 1 - 2 * X;
            p = ["M" + v + " " + g, "V" + ((g + m) / 2 + J), "a" + J + " " + J + " 0 0 " + (1 - X) + " " + Y * J + " " + -J, "H" + (y - Y * J), "a" + J + " " + J + " 0 0 " + X + " " + Y * J + " " + -J, "V" + m]
          } else if ("top-right" === t) {
            var Q = i(d.top, 2);
            v = Q[0],
              g = Q[1];
            var tt = i(f.right, 2);
            y = tt[0],
              m = tt[1],
              g -= l,
              y += c,
              k(),
              p = ["M" + v + " " + g, "V" + (m + 10), "a10 10 0 0 0 -10 -10", "H" + y]
          } else if ("left-right" === t) {
            var et = i(d.left, 2);
            v = et[0],
              g = et[1];
            var nt = i(f.right, 2);
            y = nt[0],
              m = nt[1],
              v -= l,
              y += c,
              k();
            var rt = m > g ? 0 : 1
              , it = Math.min(10, Math.abs(m - g) / 2)
              , ot = 1 - 2 * rt;
            p = ["M" + v + " " + g, "H" + ((v + y) / 2 + it), "a" + it + " " + it + " 0 0 " + rt + " " + -it + " " + ot * it, "V" + (m - ot * it), "a" + it + " " + it + " 0 0 " + (1 - rt) + " " + -it + " " + ot * it, "H" + y]
          } else {
            var at = i(d.right, 2);
            v = at[0],
              g = at[1];
            var st = i(f.left, 2);
            if (y = st[0],
                m = st[1],
                v += l,
                y -= c,
                k(),
                t = "right-left",
              v > y) {
              var lt = i(d.bottom, 2);
              v = lt[0],
                g = lt[1];
              var ct = i(f.top, 2);
              if (y = ct[0],
                  m = ct[1],
                  g += l,
                  m -= c,
                  k(),
                  t = "bottom-top",
                g > m) {
                var ut = i(d.left, 2);
                v = ut[0],
                  g = ut[1];
                var ht = i(f.right, 2);
                if (y = ht[0],
                    m = ht[1],
                    v -= l,
                    y += c,
                    k(),
                    t = "left-right",
                  v < y) {
                  var dt = i(d.top, 2);
                  v = dt[0],
                    g = dt[1];
                  var ft = i(f.bottom, 2);
                  if (y = ft[0],
                      m = ft[1],
                      g -= l,
                      m += c,
                      k(),
                      t = "top-bottom",
                    g < m) {
                    var pt = i(d.center, 2);
                    v = pt[0],
                      g = pt[1];
                    var vt = i(f.center, 2);
                    y = vt[0],
                      m = vt[1],
                      k(),
                      t = "center-center"
                  }
                }
              }
            }
            p = ["M" + v + " " + g, "L" + y + " " + m]
          }
          var gt = s.default.find(n.children, function(t) {
            return r.stepId ? s.default.eq(t.stepId, r.stepId) : s.default.eq(t.uid, r.uid)
          });
          if (gt && (gt.sourcePoint = t.split("-")[0],
              gt.targetPoint = t.split("-")[1]),
              o) {
            var yt = this.elem.selectAll("text")
              , mt = v
              , kt = g;
            switch (t.split("-")[0]) {
              case "top":
                yt.attr("x", mt).attr("y", kt - 20 + 5);
                break;
              case "bottom":
                yt.attr("x", mt).attr("y", kt + 20 + 5);
                break;
              case "left":
                yt.attr("x", mt - 30).attr("y", kt + 5);
                break;
              case "right":
                yt.attr("x", mt + 30).attr("y", kt + 5);
                break;
              default:
                yt.attr("x", mt).attr("y", kt)
            }
          }
          return this.elem.selectAll("path.link-bg, path.link-arrow").attr("d", p.join("")),
            this
        }
      }, {
        key: "setAnimatedArrow",
        value: function(t) {
          function e() {
            _.transition().duration(5e3).attrTween("stroke-dasharray", n).on("end", e)
          }
          function n() {
            var t = 180 / Math.PI
              , e = s.node()
              , n = e.getTotalLength()
              , r = c.interpolateString("0," + n, n + ", " + n);
            return function(i) {
              var o = e.getPointAtLength(i * n)
                , s = o.x - a.x
                , l = o.y - a.y
                , c = s ? Math.atan(l / s) * t : 0;
              return s < 0 && (c += 180),
                _.attr("transform", "translate(" + o.x + ", " + o.y + ") rotate(" + c + ")"),
                a.x = o.x,
                a.y = o.y,
                r(i)
            }
          }
          var r = t[0].substr(1).split(" ")
            , i = r[0]
            , o = r[1]
            , a = {
            x: i,
            y: o
          }
            , s = this.elem.select("path.link-arrow")
            , l = Math.sqrt(Math.pow(8, 2) - Math.pow(4, 2))
            , u = ""
            , h = t[1].substr(0, 1)
            , d = 0;
          if ("v" === h)
            h = "-" === t[1].substr(1, 1) ? "vUp" : "vDown";
          else if ("V" === h) {
            var f = t[0].substr(1).split(" ")[1]
              , p = t[1].substr(1);
            h = +f > +p ? "vUp" : "vDown"
          } else if ("h" === h)
            h = "-" === t[1].substr(1, 1) ? "hLeft" : "hRight";
          else if ("H" === h) {
            var v = t[0].substr(1).split(" ")[1]
              , g = t[1].substr(1);
            h = +v > +g ? "hLeft" : "hRight"
          } else if ("L" === h) {
            var y = t[0].substr(1).split(" ")
              , m = t[1].substr(1).split(" ");
            h = "hRight";
            var k = +m[1] - +y[1]
              , b = +m[0] - +y[0]
              , w = Math.sqrt(Math.pow(k, 2) + Math.pow(b, 2));
            d = Math.PI / 2 - Math.acos((Math.pow(w, 2) + Math.pow(b, 2) - Math.pow(k, 2)) / (2 * b * w)),
              d *= 180 / Math.PI,
            isNaN(d) && (d = 0)
          }
          switch (h) {
            case "vUp":
              u = ["M0 0", "m-4 0", "l4 -" + l, "l4 " + l, "z"];
              break;
            case "vDown":
              u = ["M0 0", "m-4 0", "l4 " + l, "l4 -" + l, "z"];
              break;
            case "hLeft":
              u = ["M0 0", "m0 -4", "l-" + l + " 4", "l" + l + " 4", "z"];
              break;
            case "hRight":
              u = ["M0 0", "m0 -4", "l" + l + " 4", "l-" + l + " 4", "z"]
          }
          var _ = this.elem.select("path.link-triangle");
          _.node() || (_ = this.elem.append("path").attr("class", "link-triangle")),
            _.attr("d", u.join("")).attr("transform", "translate(" + i + ", " + o + ") rotate(" + d + ")"),
            e()
        }
      }, {
        key: "cancelAnimatedArrow",
        value: function() {
          var t = this.elem.select("path.link-triangle");
          t.transition(),
            t.remove()
        }
      }, {
        key: "getText",
        value: function() {
          return this.elem.selectAll("text").text()
        }
      }, {
        key: "setText",
        value: function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          this.elem.selectAll("text").text(t)
        }
      }, {
        key: "active",
        value: function(t) {
          return void 0 === t ? this.elem.classed("active") : (this.elem.classed("active", t),
            this.elem.select(".link-arrow").attr("marker-end", this.context.getLinkMarkerEnd(t && "active")),
            this)
        }
      }, {
        key: "setStatus",
        value: function(t) {
          return this.status = t,
            this.elem.classed("untouched passed skipped", !1).classed(t, !0),
            "untouched" === t ? this.elem.select(".link-arrow").attr("marker-end", this.context.getLinkMarkerEnd()) : this.elem.select(".link-arrow").attr("marker-end", this.context.getLinkMarkerEnd(t)),
            this
        }
      }]),
        t
    }();
    e.default = h
  },
  231: function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , s = n(66)
      , l = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(s)
      , c = n(33)
      , u = function(t) {
      function e(t, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , a = o.radius
          , s = void 0 === a ? 25 : a;
        r(this, e);
        var l = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        return l.radius = s,
          l.ENDPOINT_RADIUS = n.options.endpointRadius,
          l
      }
      return o(e, t),
        a(e, [{
          key: "getControls",
          value: function() {
            var t = this.data
              , e = this.radius
              , n = t._x
              , r = t._y;
            return this.context.options.crispEdges && (n = (0,
              c.crispEdges)(n),
              r = (0,
                c.crispEdges)(r)),
              {
                top: [n, r - e],
                right: [n + e, r],
                bottom: [n, r + e],
                left: [n - e, r],
                center: [n, r]
              }
          }
        }, {
          key: "draw",
          value: function() {
            this.elem.classed("start", !0);
            var t = this.elem.append("g").attr("class", "outline")
              , e = this.radius;
            return t.append("path").attr("class", "node-line").attr("d", ["M" + -e + " 0", "A" + e + " " + e + " 0 1 1 " + e + " 0", "A" + e + " " + e + " 0 1 1 " + -e + " 0", "z"].join("")),
              this.tickBranches(),
              this.emit("drawed"),
              this
          }
        }, {
          key: "_appendBranches",
          value: function() {
            var t = this.elem
              , e = t.selectAll(".branch").data(Array(4)).enter().append("g").attr("class", function(t, e) {
              var n = ["branch"]
                , r = "";
              switch (e) {
                case 0:
                  r = "top";
                  break;
                case 1:
                  r = "bottom";
                  break;
                case 2:
                  r = "left";
                  break;
                case 3:
                  r = "right"
              }
              return n.push(r),
                n.join(" ")
            });
            e.append("path").attr("class", "branch-outline"),
              e.append("circle").attr("class", "branch-endpoint").attr("r", this.ENDPOINT_RADIUS)
          }
        }, {
          key: "tickBranches",
          value: function() {
            var t = this.elem
              , e = this.radius;
            this._appendBranches();
            var n = t.select(".branch.top")
              , r = t.select(".branch.bottom")
              , i = t.select(".branch.left")
              , o = t.select(".branch.right")
              , a = Math.sqrt(Math.pow(e, 2) / 2)
              , s = ["M0 0", "l" + -a + " " + -a, "a" + e + " " + e + " 0 0 1 " + 2 * a + " 0", "z"]
              , l = ["M0 0", "l" + -a + " " + a, "a" + e + " " + e + " 0 0 0 " + 2 * a + " 0", "z"]
              , c = ["M0 0", "l" + -a + " " + -a, "a" + e + " " + e + " 0 0 0 0 " + 2 * a, "z"]
              , u = ["M0 0", "l" + a + " " + -a, "a" + e + " " + e + " 0 0 1 0 " + 2 * a, "z"];
            n.select(".branch-outline").attr("d", s.join("")),
              r.select(".branch-outline").attr("d", l.join("")),
              i.select(".branch-outline").attr("d", c.join("")),
              o.select(".branch-outline").attr("d", u.join("")),
              n.select(".branch-endpoint").attr("cx", 0).attr("cy", -e),
              r.select(".branch-endpoint").attr("cx", 0).attr("cy", e),
              i.select(".branch-endpoint").attr("cx", -e).attr("cy", 0),
              o.select(".branch-endpoint").attr("cx", e).attr("cy", 0)
          }
        }, {
          key: "hoverBranch",
          value: function(t) {
            return this.elem.selectAll(".branch").classed("hover", !1),
            t && this.elem.select(".branch." + t).classed("hover", !0),
              this
          }
        }]),
        e
    }(l.default);
    e.default = u
  },
  232: function(t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function o(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var a = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , s = n(66)
      , l = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(s)
      , c = n(33)
      , u = function(t) {
      function e(t, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          , a = o.width
          , s = void 0 === a ? 96 : a
          , l = o.height
          , c = void 0 === l ? 50 : l
          , u = o.borderRadius
          , h = void 0 === u ? 5 : u
          , d = o.padding
          , f = void 0 === d ? 10 : d;
        r(this, e);
        var p = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        return p.width = p.defaultWidth = s,
          p.height = c,
          p.borderRadius = h,
          p.padding = f,
          p.ENDPOINT_REDIUS = n.options.endpointRadius,
          p
      }
      return o(e, t),
        a(e, [{
          key: "getControls",
          value: function() {
            var t = this.data
              , e = this.width
              , n = this.height
              , r = t._x
              , i = t._y;
            return this.context.options.crispEdges && (r = (0,
              c.crispEdges)(r),
              i = (0,
                c.crispEdges)(i)),
              {
                top: [r, i - n / 2],
                right: [r + e / 2, i],
                bottom: [r, i + n / 2],
                left: [r - e / 2, i],
                center: [r, i]
              }
          }
        }, {
          key: "draw",
          value: function() {
            this.elem.classed("task", !0);
            var t = this.elem.append("g").attr("class", "outline")
              , e = this.width
              , n = this.height
              , r = this.borderRadius
              , i = -e / 2
              , o = -n / 2;
            this.context.options.crispEdges && (i = (0,
              c.crispEdges)(i),
              o = (0,
                c.crispEdges)(o));
            var a = i + e
              , s = o + n;
            return t.append("path").attr("class", "node-line").attr("d", (0,
              c.roundedRectangle)(i, o, a, s, r)),
              this.elem.append("text").attr("x", 0).attr("y", 5),
              this.tickBranches(),
              this.emit("drawed"),
              this.renderText()
          }
        }, {
          key: "reDraw",
          value: function() {
            var t = this.elem.select(".outline")
              , e = this.width
              , n = this.height
              , r = this.borderRadius
              , i = -e / 2
              , o = -n / 2;
            this.context.options.crispEdges && (i = (0,
              c.crispEdges)(i),
              o = (0,
                c.crispEdges)(o));
            var a = i + e
              , s = o + n;
            t.select("path").attr("class", "node-line").attr("d", (0,
              c.roundedRectangle)(i, o, a, s, r)),
              this.tickBranches(),
              this.emit("drawed")
          }
        }, {
          key: "renderText",
          value: function() {
            var t = this.elem.select("text").text(this.data.stepName || "");
            try {
              var e = t.node().getBBox()
                , n = e.width
                , r = (e.height,
                this.padding)
                , i = this.defaultWidth;
              n > i - r ? (this.width = n + r,
                this.reDraw()) : this.width !== i && (this.width = i,
                this.reDraw())
            } catch (t) {
              "Gecko" === navigator.product && "NS_ERROR_FAILURE" === t.name ? console.warn("SVGLocatable.getBBox() fails unless the SVG element it is applied to is attached and rendered. See https://bugzilla.mozilla.org/show_bug.cgi?id=612118") : console.error(t)
            }
            return this
          }
        }, {
          key: "_appendBranches",
          value: function() {
            var t = this.elem
              , e = t.selectAll(".branch").data(Array(4)).enter().append("g").attr("class", function(t, e) {
              var n = ["branch"]
                , r = "";
              switch (e) {
                case 0:
                  r = "top";
                  break;
                case 1:
                  r = "bottom";
                  break;
                case 2:
                  r = "left";
                  break;
                case 3:
                  r = "right"
              }
              return n.push(r),
                n.join(" ")
            });
            e.append("path").attr("class", "branch-outline"),
              e.append("circle").attr("class", "branch-endpoint").attr("r", this.ENDPOINT_REDIUS)
          }
        }, {
          key: "tickBranches",
          value: function() {
            var t = this.elem
              , e = this.width
              , n = this.height;
            this._appendBranches();
            var r = t.select(".branch.top")
              , i = t.select(".branch.bottom")
              , o = t.select(".branch.left")
              , a = t.select(".branch.right")
              , s = ["M0 0", "m" + -e / 2 + " " + -n / 2, "l" + e / 2 + " " + n / 2, "l" + e / 2 + " " + -n / 2, "z"]
              , l = ["M0 0", "m" + -e / 2 + " " + n / 2, "l" + e / 2 + " " + -n / 2, "l" + e / 2 + " " + n / 2, "z"]
              , c = ["M0 0", "m" + -e / 2 + " " + -n / 2, "l" + e / 2 + " " + n / 2, "l" + -e / 2 + " " + n / 2, "z"]
              , u = ["M0 0", "m" + e / 2 + " " + -n / 2, "l" + -e / 2 + " " + n / 2, "l" + e / 2 + " " + n / 2, "z"];
            r.select(".branch-outline").attr("d", s.join("")),
              i.select(".branch-outline").attr("d", l.join("")),
              o.select(".branch-outline").attr("d", c.join("")),
              a.select(".branch-outline").attr("d", u.join("")),
              r.select(".branch-endpoint").attr("cx", 0).attr("cy", -n / 2),
              i.select(".branch-endpoint").attr("cx", 0).attr("cy", n / 2),
              o.select(".branch-endpoint").attr("cx", -e / 2).attr("cy", 0),
              a.select(".branch-endpoint").attr("cx", e / 2).attr("cy", 0)
          }
        }, {
          key: "hoverBranch",
          value: function(t) {
            return this.elem.selectAll(".branch").classed("hover", !1),
            t && this.elem.select(".branch." + t).classed("hover", !0),
              this
          }
        }]),
        e
    }(l.default);
    e.default = u
  },
  32: function(t, e) {
    t.exports = d3
  },
  33: function(t, e, n) {
    "use strict";
    function r(t) {
      function e(t, i, a) {
        if (!o) {
          if (-1 !== s.default.indexOf(i, t))
            return void (o = !0);
          if (t._touched = !0,
              i.length) {
            var l = {
              source: i[i.length - 1],
              target: t
            };
            s.default.some(r, l) || (l.branch = a,
              r.push(l))
          }
          if (i.push(t),
            t.children && t.children.length) {
            var c = i.slice();
            s.default.forEach(t.children, function(t, r) {
              var o = t.detail;
              if (o)
                if (0 === r)
                  e(o, i, t.branch);
                else {
                  var a = c.slice();
                  n.push(a),
                    e(o, a, t.branch)
                }
            })
          }
        }
      }
      var n = []
        , r = []
        , i = !1
        , o = !1
        , a = !1;
      s.default.forEach(t, function(t) {
        delete t._touched,
          "gateway" !== t.type ? t.type = "task" : ("parallel" !== t.subtype && (t.subtype = "exclusive"),
          "join" !== t.action && (t.action = "fork"))
      });
      var l = s.default.find(t, "root");
      return l ? (n = [[]],
        e(l, n[0])) : i = !0,
        a = !i && !o && !s.default.every(t, "_touched"),
        {
          noStart: i,
          circled: o,
          detached: a,
          invalid: i || o || a,
          pathList: n,
          start: l,
          links: r
        }
    }
    function i(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return Math.round(e) % 2 ? Math.round(t - .5) + .5 : Math.round(t)
    }
    function o(t, e, n, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
        , o = t + i
        , a = n - i
        , s = e + i
        , l = r - i;
      return ["M" + t + " " + s, "A" + i + " " + i + " 0 0 1 " + o + " " + e, "H" + a, "A" + i + " " + i + " 0 0 1 " + n + " " + s, "V" + l, "A" + i + " " + i + " 0 0 1 " + a + " " + r, "H" + o, "A" + i + " " + i + " 0 0 1 " + t + " " + l, "z"].join("")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }),
      e.roundedRectangle = e.crispEdges = e.walk = void 0;
    var a = n(5)
      , s = function(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(a);
    e.walk = r,
      e.crispEdges = i,
      e.roundedRectangle = o
  },
  5: function(t, e) {
    t.exports = _
  },
  59: function(t, e, n) {
    "use strict";
    function r() {
      this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function i(t) {
      return "function" == typeof t
    }
    function o(t) {
      return "number" == typeof t
    }
    function a(t) {
      return "object" === (void 0 === t ? "undefined" : l(t)) && null !== t
    }
    function s(t) {
      return void 0 === t
    }
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      }
      : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }
    ;
    t.exports = r,
      r.EventEmitter = r,
      r.prototype._events = void 0,
      r.prototype._maxListeners = void 0,
      r.defaultMaxListeners = 10,
      r.prototype.setMaxListeners = function(t) {
        if (!o(t) || t < 0 || isNaN(t))
          throw TypeError("n must be a positive number");
        return this._maxListeners = t,
          this
      }
      ,
      r.prototype.emit = function(t) {
        var e, n, r, o, l, c;
        if (this._events || (this._events = {}),
          "error" === t && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
          if ((e = arguments[1])instanceof Error)
            throw e;
          var u = new Error('Uncaught, unspecified "error" event. (' + e + ")");
          throw u.context = e,
            u
        }
        if (n = this._events[t],
            s(n))
          return !1;
        if (i(n))
          switch (arguments.length) {
            case 1:
              n.call(this);
              break;
            case 2:
              n.call(this, arguments[1]);
              break;
            case 3:
              n.call(this, arguments[1], arguments[2]);
              break;
            default:
              o = Array.prototype.slice.call(arguments, 1),
                n.apply(this, o)
          }
        else if (a(n))
          for (o = Array.prototype.slice.call(arguments, 1),
                 c = n.slice(),
                 r = c.length,
                 l = 0; l < r; l++)
            c[l].apply(this, o);
        return !0
      }
      ,
      r.prototype.addListener = function(t, e) {
        var n;
        if (!i(e))
          throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e),
          this._events[t] ? a(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
        a(this._events[t]) && !this._events[t].warned && (n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[t].length > n && (this._events[t].warned = !0,
          console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
        "function" == typeof console.trace && console.trace()),
          this
      }
      ,
      r.prototype.on = r.prototype.addListener,
      r.prototype.once = function(t, e) {
        function n() {
          this.removeListener(t, n),
          r || (r = !0,
            e.apply(this, arguments))
        }
        if (!i(e))
          throw TypeError("listener must be a function");
        var r = !1;
        return n.listener = e,
          this.on(t, n),
          this
      }
      ,
      r.prototype.removeListener = function(t, e) {
        var n, r, o, s;
        if (!i(e))
          throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
          return this;
        if (n = this._events[t],
            o = n.length,
            r = -1,
          n === e || i(n.listener) && n.listener === e)
          delete this._events[t],
          this._events.removeListener && this.emit("removeListener", t, e);
        else if (a(n)) {
          for (s = o; s-- > 0; )
            if (n[s] === e || n[s].listener && n[s].listener === e) {
              r = s;
              break
            }
          if (r < 0)
            return this;
          1 === n.length ? (n.length = 0,
            delete this._events[t]) : n.splice(r, 1),
          this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
      }
      ,
      r.prototype.removeAllListeners = function(t) {
        var e, n;
        if (!this._events)
          return this;
        if (!this._events.removeListener)
          return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
            this;
        if (0 === arguments.length) {
          for (e in this._events)
            "removeListener" !== e && this.removeAllListeners(e);
          return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (n = this._events[t],
            i(n))
          this.removeListener(t, n);
        else if (n)
          for (; n.length; )
            this.removeListener(t, n[n.length - 1]);
        return delete this._events[t],
          this
      }
      ,
      r.prototype.listeners = function(t) {
        return this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
      }
      ,
      r.prototype.listenerCount = function(t) {
        if (this._events) {
          var e = this._events[t];
          if (i(e))
            return 1;
          if (e)
            return e.length
        }
        return 0
      }
      ,
      r.listenerCount = function(t, e) {
        return t.listenerCount(e)
      }
  },
  612: function(t, e, n) {
    e = t.exports = n(11)(),
      e.push([t.i, ".flowchart {\n  cursor: -webkit-grab;\n  cursor: grab; }\n  .flowchart .flowchart-bg {\n    fill: #fff;\n    pointer-events: all; }\n  .flowchart .node {\n    cursor: pointer; }\n    .flowchart .node text {\n      fill: #fff;\n      stroke: none;\n      text-anchor: middle;\n      font-size: 12px; }\n  .flowchart .node .branch {\n    visibility: hidden;\n    fill: transparent; }\n    .flowchart .node .branch path {\n      stroke: transparent;\n      stroke-width: 0; }\n  .flowchart .guide {\n    pointer-events: none; }\n    .flowchart .guide line {\n      visibility: hidden;\n      stroke: #f00;\n      stroke-width: 1px; }\n      .flowchart .guide line.active {\n        visibility: visible; }\n  .flowchart .link {\n    cursor: pointer; }\n    .flowchart .link .link-bg {\n      fill: none;\n      stroke: transparent;\n      stroke-width: 10px; }\n    .flowchart .link .link-arrow {\n      fill: none;\n      stroke: #c0c0c0;\n      stroke-width: 1px; }\n    .flowchart .link .link-triangle {\n      fill: #c0c0c0;\n      stroke: none; }\n    .flowchart .link text {\n      fill: #8c8c8c;\n      stroke: none;\n      text-anchor: middle;\n      font-size: 12px; }\n    .flowchart .link .shadow {\n      stroke: #fff;\n      stroke-width: 7px; }\n    .flowchart .link:hover .link-arrow {\n      stroke: #9c9c9c; }\n    .flowchart .link:hover text {\n      fill: #9c9c9c; }\n    .flowchart .link.active .link-arrow {\n      stroke: #167be0; }\n    .flowchart .link.active text {\n      fill: #167be0; }\n  .flowchart .marker {\n    fill: #c0c0c0; }\n    .flowchart .marker.hover {\n      fill: #9c9c9c; }\n    .flowchart .marker.active {\n      fill: #167be0; }\n    .flowchart .marker.passed {\n      fill: #30aa54; }\n  .flowchart.zooming, .flowchart.zooming .node, .flowchart.zooming .link, .flowchart.dragging-node, .flowchart.dragging-node .node, .flowchart.dragging-node .link {\n    cursor: -webkit-grabbing;\n    cursor: grabbing; }\n  .flowchart.linking, .flowchart.linking .node, .flowchart.linking .link {\n    cursor: crosshair; }\n  .flowchart.linking .link {\n    pointer-events: none; }\n  .flowchart.linking.linking-from .node .branch {\n    visibility: visible;\n    fill: transparent; }\n    .flowchart.linking.linking-from .node .branch text {\n      fill: transparent; }\n  .flowchart.linking.linking-from .node .branch:hover .branch-endpoint, .flowchart.linking.linking-from .node .branch.hover .branch-endpoint, .flowchart.linking.linking-to .node .branch:hover .branch-endpoint, .flowchart.linking.linking-to .node .branch.hover .branch-endpoint {\n    visibility: visible;\n    fill: rgba(22, 123, 224, 0.5); }\n  .flowchart .appending-link {\n    visibility: hidden;\n    stroke: #c0c0c0;\n    stroke-width: 1px;\n    pointer-events: none; }\n    .flowchart .appending-link.active {\n      visibility: visible; }\n  .flowchart.readonly .node, .flowchart.readonly .link {\n    pointer-events: none; }\n  .flowchart.readonly .node .outline path {\n    stroke: none;\n    stroke-width: 0;\n    fill: #fff; }\n  .flowchart.readonly .node text {\n    fill: #fff; }\n  .flowchart.readonly .start .outline path {\n    fill: #fe6f0e; }\n  .flowchart.readonly .task .outline path {\n    fill: #46b04a; }\n  .flowchart.readonly .gateway.fork .outline path {\n    fill: #5783d9; }\n  .flowchart.readonly .gateway.join .outline path {\n    fill: #c0c0c0; }\n    .flowchart.readonly .gateway.join .outline path.filled {\n      fill: #fff; }\n    .flowchart.readonly .gateway.join .outline path.stroked {\n      stroke: #fff; }\n  .flowchart.editing .node .outline path {\n    stroke-width: 1.1px;\n    fill: #fff; }\n  .flowchart.editing .node.temp {\n    cursor: -webkit-grabbing;\n    cursor: grabbing; }\n  .flowchart.editing .node .branch {\n    visibility: visible; }\n  .flowchart.editing .start .outline path {\n    stroke: #fe6f0e; }\n  .flowchart.editing .task .outline path {\n    stroke: #46b04a; }\n  .flowchart.editing .task text {\n    fill: #46b04a; }\n  .flowchart.editing .gateway.fork .outline path {\n    stroke: #5783d9; }\n  .flowchart.editing .gateway.fork text {\n    fill: #5783d9; }\n  .flowchart.editing .gateway.join .outline path {\n    stroke: #c0c0c0; }\n    .flowchart.editing .gateway.join .outline path.filled {\n      fill: #c0c0c0; }\n    .flowchart.editing .gateway.join .outline path.stroked {\n      stroke: #c0c0c0; }\n  .flowchart.execution .node .outline path {\n    stroke: #c0c0c0;\n    stroke-width: 1.1px;\n    fill: #fff; }\n    .flowchart.execution .node .outline path.line-animated {\n      stroke-dasharray: 5;\n      animation: line-animated .2s infinite; }\n\n@keyframes line-animated {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: -10; } }\n  .flowchart.execution .node text {\n    fill: #8c8c8c; }\n  .flowchart.execution .node.success .outline path {\n    stroke: #30aa54;\n    fill: #effff4; }\n  .flowchart.execution .node.success text {\n    fill: #30aa54; }\n  .flowchart.execution .node.failed .outline path {\n    stroke: #dd5746;\n    fill: #fff3f2; }\n  .flowchart.execution .node.failed text {\n    fill: #dd5746; }\n  .flowchart.execution .node.executing .outline path {\n    stroke: #167be0;\n    fill: #f1f8ff; }\n  .flowchart.execution .node.executing text {\n    fill: #167be0; }\n  .flowchart.execution .start .outline path {\n    stroke: #30aa54; }\n  .flowchart.execution .link {\n    pointer-events: none; }\n  .flowchart.execution .link.passed .link-arrow {\n    stroke: #30aa54; }\n  .flowchart.execution .link.passed .text {\n    fill: #30aa54; }\n  .flowchart.editing .node.hover .outline path, .flowchart.editing .node:hover .outline path, .flowchart.execution .node.hover .outline path, .flowchart.execution .node:hover .outline path {\n    fill: #e2f0ff;\n    stroke: #e2f0ff; }\n    .flowchart.editing .node.hover .outline path.filled, .flowchart.editing .node:hover .outline path.filled, .flowchart.execution .node.hover .outline path.filled, .flowchart.execution .node:hover .outline path.filled {\n      fill: #167be0; }\n    .flowchart.editing .node.hover .outline path.stroked, .flowchart.editing .node:hover .outline path.stroked, .flowchart.execution .node.hover .outline path.stroked, .flowchart.execution .node:hover .outline path.stroked {\n      stroke: #167be0; }\n  .flowchart.editing .node.hover text, .flowchart.editing .node:hover text, .flowchart.execution .node.hover text, .flowchart.execution .node:hover text {\n    fill: #167be0; }\n  .flowchart.editing .node.active .outline path, .flowchart.execution .node.active .outline path {\n    fill: #e2f0ff;\n    stroke: #167be0;\n    stroke-width: 1.1px; }\n    .flowchart.editing .node.active .outline path.filled, .flowchart.execution .node.active .outline path.filled {\n      fill: #167be0; }\n    .flowchart.editing .node.active .outline path.stroked, .flowchart.execution .node.active .outline path.stroked {\n      stroke: #167be0; }\n  .flowchart.editing .node.active text, .flowchart.execution .node.active text {\n    fill: #167be0; }\n", ""])
  },
  618: function(t, e, n) {
    var r = n(612);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    n(17)(r, {});
    r.locals && (t.exports = r.locals)
  },
  634: function(t, e, n) {
    t.exports = n(200)
  },
  66: function(t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }
    function a(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = function() {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1,
            r.configurable = !0,
          "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n),
        r && t(e, r),
          e
      }
    }()
      , l = n(59)
      , c = r(l)
      , u = n(5)
      , h = r(u)
      , d = n(32)
      , f = function(t) {
      if (t && t.__esModule)
        return t;
      var e = {};
      if (null != t)
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e.default = t,
        e
    }(d)
      , p = function(t) {
      function e(t, n) {
        i(this, e);
        var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
        return r.data = t,
          r.context = n,
          r.options = n.options,
        void 0 === t._x && (t._x = h.default.random(50, n.options.size[0] - 50),
          t._y = h.default.random(25, n.options.size[1] - 25)),
          r
      }
      return a(e, t),
        s(e, [{
          key: "enter",
          value: function(t) {
            return this.elem = t,
            this.data._temp && t.classed("temp", !0),
              t.on("click", function() {
                f.event.stopPropagation()
              }),
              this.draw().tick().initDrags().initClicks()
          }
        }, {
          key: "renderText",
          value: function() {}
        }, {
          key: "tick",
          value: function() {
            var t = this.data
              , e = t._x
              , n = t._y
              , r = t._guide
              , i = t._links;
            return this.elem.attr("transform", "translate(" + e + "," + n + ")"),
            r && r.tick(),
              h.default.forEach(i, function(t) {
                return t.tick()
              }),
              this
          }
        }, {
          key: "active",
          value: function(t) {
            return void 0 === t ? this.elem.classed("active") : (this.elem.classed("active", t),
              this)
          }
        }, {
          key: "hover",
          value: function(t) {
            return void 0 === t ? this.elem.classed("hover") : (this.elem.classed("hover", t),
              this)
          }
        }, {
          key: "initDrags",
          value: function() {
            var t = this;
            if (!this.context.options.dragNodeEnabled)
              return this;
            var e = void 0
              , n = void 0
              , r = void 0
              , i = void 0
              , o = void 0;
            return this.drag = f.drag().on("start", function() {
              f.event.sourceEvent.stopPropagation(),
                t.elem.classed("hover", !0),
                e = t.data._x || 0,
                n = t.data._y || 0,
                r = i = 0,
                o = !1,
                t.context.dragNodeStart(t.data)
            }).on("drag", function() {
              r += f.event.dx,
                i += f.event.dy,
              !o && Math.abs(r) + Math.abs(i) >= 4 && (o = !0),
              o && (t.data._x = e + r,
                t.data._y = n + i,
                t.context.alignToGuide(t.data),
                t.tick()),
                t.context.dragNode(t.data)
            }).on("end", function() {
              t.elem.classed("hover", !1),
              o && t.context.hideGuide();
              var r = {
                _x: e,
                _y: n
              }
                , i = {
                _x: t.data._x,
                _y: t.data._y
              };
              t.context.dragNodeEnd(t.data, {
                from: r,
                to: i
              }, o)
            }),
              this.elem.call(this.drag),
              this
          }
        }, {
          key: "unsetDrags",
          value: function() {
            return this.elem.on(".drag", null),
              this
          }
        }, {
          key: "resetDrags",
          value: function() {
            return this.elem.call(this.drag),
              this
          }
        }, {
          key: "initClicks",
          value: function() {
            var t = this;
            return this.context.options.dragNodeEnabled || !this.context.options.selectNodeEnabled ? this : (this.elem.on("click", function() {
              f.event.stopPropagation(),
                t.context.setActive("node", t.data)
            }),
              this)
          }
        }, {
          key: "getVerticals",
          value: function() {
            return {
              cx: this.data._x
            }
          }
        }, {
          key: "getHorizontals",
          value: function() {
            return {
              cy: this.data._y
            }
          }
        }, {
          key: "setStatus",
          value: function(t) {
            return this.status = t,
              this.elem.classed("wait executing success failed", !1).classed(t, !0),
              "executing" === t ? this.setSideDashScroll() : this.cancelSideDashScroll(),
              this
          }
        }, {
          key: "setSideNodeAnimated",
          value: function() {
            function t() {
              s.transition().duration(2e3).attrTween("transform", e(i.node())).on("end", t)
            }
            function e(t) {
              var e = t.getTotalLength();
              return function(n, r, i) {
                return function(n) {
                  var r = t.getPointAtLength(n * e);
                  return "translate(" + r.x + ", " + r.y + ")"
                }
              }
            }
            var n = this.elem
              , r = void 0
              , i = void 0
              , o = void 0
              , a = void 0;
            r = n.select(".outline"),
              i = r.select("path.node-line"),
              o = i.attr("d").match(/^[Mm]\s*((-?\d+(.\d+)?)\s+(-?\d+(.\d+)?))[A-Za-z]/)[1],
              a = o.split(" ");
            var s = r.append("circle").attr("class", "side-ball").attr("r", 3).attr("transform", "translate(" + a[0] + " " + a[1] + ")");
            t()
          }
        }, {
          key: "cancelSideNodeAnimated",
          value: function() {
            var t = this.elem
              , e = void 0
              , n = void 0;
            e = t.select(".outline"),
              n = e.select("circle.side-ball"),
              n.transition(),
              n.remove()
          }
        }, {
          key: "setSideDashScroll",
          value: function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              this.elem)
              , e = t.select(".node-line");
            e.classed("line-animated", !0)
          }
        }, {
          key: "cancelSideDashScroll",
          value: function() {
            this.elem.select(".node-line").classed("line-animated", !1),
              clearTimeout(this.lineAnimatedTimeout)
          }
        }]),
        e
    }(c.default);
    e.default = p
  }
});
