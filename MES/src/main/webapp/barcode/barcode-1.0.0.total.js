/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.2.1",
        r = function(a, b) { return new r.fn.init(a, b) },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) { return b.toUpperCase() };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() { return f.call(this) },
        get: function(a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] },
        pushStack: function(a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b },
        each: function(a) { return r.each(this, a) },
        map: function(a) { return this.pushStack(r.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(f.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === r.type(a) },
        isWindow: function(a) { return null != a && a === a.window },
        isNumeric: function(a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) },
        isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a },
        globalEval: function(a) { p(a) },
        camelCase: function(a) { return a.replace(t, "ms-").replace(u, v) },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(s, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c },
        inArray: function(a, b, c) { return null == b ? -1 : i.call(b, a, c) },
        merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { j["[object " + b + "]"] = b.toLowerCase() });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
            da = function() { m() },
            ea = ta(function(a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" });
        try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) {
            G = {
                apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) {} finally { k === u && b.removeAttribute("id") }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ia(a) { return a[u] = !0, a }

        function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function na(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function oa(a) { return function(b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = ga.support = {}, f = ga.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { return a.getAttribute("id") === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) { return (a + "").replace(ba, ca) }, ga.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ia(function(a) { return function(b) { return ga(a, b).length > 0 } }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return X.test(a.nodeName) },
                input: function(a) { return W.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: pa(function() { return [0] }),
                last: pa(function(a, b) { return [b - 1] }),
                eq: pa(function(a, b, c) { return [c < 0 ? c + b : c] }),
                even: pa(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }),
                odd: pa(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }),
                lt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c }

        function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) { return a === b }, h, !0), l = ta(function(a) { return I(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function(a) { return null == a.getAttribute("disabled") }) || ka(J, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        A = r.expr.match.needsContext;

    function B(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) { return r.isFunction(b) ? r.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function(a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function(a) { return i.call(b, a) > -1 !== c }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) }
    r.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) { return 1 === a.nodeType })) }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) { return this.pushStack(E(this, a || [], !1)) },
        not: function(a) { return this.pushStack(E(this, a || [], !0)) },
        is: function(a) { return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length }
    });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || F, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function K(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    r.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return y(a, "parentNode") }, parentsUntil: function(a, b, c) { return y(a, "parentNode", c) }, next: function(a) { return K(a, "nextSibling") }, prev: function(a) { return K(a, "previousSibling") }, nextAll: function(a) { return y(a, "nextSibling") }, prevAll: function(a) { return y(a, "previousSibling") }, nextUntil: function(a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return y(a, "previousSibling", c) }, siblings: function(a) { return z((a.parentNode || {}).firstChild, a) }, children: function(a) { return z(a.firstChild) }, contents: function(a) { return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes)) } }, function(a, b) { r.fn[a] = function(c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e) } });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) { var b = {}; return r.each(a.match(L) || [], function(a, c) { b[c] = !0 }), b }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? M(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = e || a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function(b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return r.each(arguments, function(a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return j
    };

    function N(a) { return a }

    function O(a) { throw a }

    function P(a, b, c, d) { var e; try { a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d)) } catch (a) { c.apply(void 0, [a]) } }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() { return d },
                    always: function() { return f.done(arguments).fail(arguments), this },
                    "catch": function(a) { return e.then(null, a) },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i)) } };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O)) }).promise()
                    },
                    promise: function(a) { return null != a ? r.extend(a, e) : e }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } };
            if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) P(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function(b) { a.setTimeout(function() { throw b }) };
    var R = r.Deferred();
    r.fn.ready = function(a) { return R.then(a)["catch"](function(a) { r.readyException(a) }), this }, r.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]))
        }
    }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) { e = !0; for (h in c) T(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(r(a), c) })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        U = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function V() { this.expando = r.expando + V.uid++ }
    V.uid = 1, V.prototype = {
        cache: function(a) { var b = a[this.expando]; return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] },
        access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) },
        remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length; while (c--) delete d[b[c]] }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } },
        hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) }
    };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a) }

    function _(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try { c = $(c) } catch (e) {}
                X.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({ hasData: function(a) { return X.hasData(a) || W.hasData(a) }, data: function(a, b, c) { return X.access(a, b, c) }, removeData: function(a, b) { X.remove(a, b) }, _data: function(a, b, c) { return W.access(a, b, c) }, _removeData: function(a, b) { W.remove(a, b) } }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { X.set(this, a) }) : T(this, function(b) { var c; if (f && void 0 === b) { if (c = X.get(f, a), void 0 !== c) return c; if (c = _(f, a), void 0 !== c) return c } else this.each(function() { X.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { X.remove(this, a) }) }
    }), r.extend({
        queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [] },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() { r.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function() { W.remove(a, [b + "queue", c]) }) }) }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { r.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") },
        ea = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function fa(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return r.css(a, b, "") },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ga = {};

    function ha(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e)
    }

    function ia(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a }
    r.fn.extend({ show: function() { return ia(this, !0) }, hide: function() { return ia(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { da(this) ? r(this).show() : r(this).hide() }) } });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c }

    function oa(a, b) { for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval")) }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) { k = 0; while (f = g[k++]) la.test(f.type || "") && c.push(f) }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() { return !0 }

    function wa() { return !1 }

    function xa() { try { return d.activeElement } catch (a) {} }

    function ya(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ya(a, h, c, d, b[h], f); return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() { r.event.add(this, b, e, d, c) })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(L) || [""], j = b.length; while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L) || [""], j = b.length;
                while (j--)
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f })
                    }
            return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
        },
        addProp: function(a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) },
        fix: function(a) { return a[r.expando] ? a : new r.Event(a) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== xa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === xa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1 }, _default: function(a) { return B(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
    }, r.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function(a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: wa,
        isPropagationStopped: wa,
        isImmediatePropagationStopped: wa,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({ on: function(a, b, c, d) { return ya(this, a, b, c, d) }, one: function(a, b, c, d) { return ya(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() { r.event.remove(this, a, c, b) }) } });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) { return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a }

    function Fa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function Ga(a) { var b = Ca.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i))
        }
    }

    function Ia(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function Ja(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d)
        });
        if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k))
        }
        return a
    }

    function Ka(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d)); return a }
    r.extend({
        htmlPrefilter: function(a) { return a.replace(za, "<$1></$2>") },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) {
                    if (b = c[W.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0
                    }
                    c[X.expando] && (c[X.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) { return Ka(this, a, !0) },
        remove: function(a) { return Ka(this, a) },
        text: function(a) { return T(this, function(a) { return void 0 === a ? r.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = ""); return this },
        clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return r.clone(this, a, b) }) },
        html: function(a) {
            return T(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { r.fn[a] = function(a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), e }, pixelMarginRight: function() { return b(), f }, reliableMarginLeft: function() { return b(), g } }))
    }();

    function Oa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function Pa(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = { position: "absolute", visibility: "hidden", display: "block" },
        Ta = { letterSpacing: "0", fontWeight: "400" },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length;
        while (c--)
            if (a = Ua[c] + b, a in Va) return a
    }

    function Xa(a) { var b = r.cssProps[a]; return b || (b = r.cssProps[a] = Wa(a) || a), b }

    function Ya(a, b, c) { var d = ba.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Za(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e))); return g }

    function $a(a, b, c) {
        var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px")
    }
    r.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Oa(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style;
                return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b),
                i = Ra.test(b);
            return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) { if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() { return $a(a, b, d) }) },
            set: function(a, c, d) {
                var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function(a, b) { r.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, La.test(a) || (r.cssHooks[a + b].set = Ya) }), r.fn.extend({
        css: function(a, b) {
            return T(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (Array.isArray(b)) { for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function _a(a, b, c, d, e) { return new _a.prototype.init(a, b, c, d, e) }
    r.Tween = _a, _a.prototype = { constructor: _a, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function() { var a = _a.propHooks[this.prop]; return a && a.get ? a.get(this) : _a.propHooks._default.get(this) }, run: function(a) { var b, c = _a.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() { bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick()) }

    function fb() { return a.setTimeout(function() { ab = void 0 }), ab = r.now() }

    function gb(a, b) {
        var c, d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function hb(a, b, c) {
        for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) }));
        for (d in b)
            if (e = b[d], cb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() { p || ia([a]), W.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ab || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j
    }
    r.Animation = r.extend(kb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return fa(c.elem, a, ba.exec(b), c), c }] }, tweener: function(a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b) }, prefilters: [ib], prefilter: function(a, b) { b ? kb.prefilters.unshift(a) : kb.prefilters.push(a) } }), r.speed = function(a, b, c) { var d = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue) }, d }, r.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = W.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = W.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e) }
        }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { r.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), ab = void 0
        }, r.fx.timer = function(a) { r.timers.push(a), r.fx.start() }, r.fx.interval = 13, r.fx.start = function() { bb || (bb = !0, eb()) }, r.fx.stop = function() { bb = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({ attr: function(a, b) { return T(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { r.removeAttr(this, a) }) } }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: { type: { set: function(a, b) { if (!o.radioValue && "radio" === b && B(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(L);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), lb = { set: function(a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e }
    });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({ prop: function(a, b) { return T(this, r.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = {
        get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { r.propFix[this.toLowerCase()] = this });

    function pb(a) { var b = a.match(L) || []; return b.join(" ") }

    function qb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).addClass(a.call(this, b, qb(this))) });
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) { r(this).removeClass(a.call(this, b, qb(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(L) || [];
                while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = pb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) { r(this).toggleClass(a.call(this, c, qb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(L) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || "")) }) },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var rb = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: { get: function(a) { var b = r.find.attr(a, "value"); return null != b ? b : pb(r.text(a)) } },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() { r.valHooks[this] = { set: function(a, b) { if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({ trigger: function(a, b) { return this.each(function() { r.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { r.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { r.event.simulate(b, a.target, r.event.fix(a)) };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b))
            }
        }
    });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (Array.isArray(b)) r.each(b, function(b, e) { c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({ serialize: function() { return r.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a)) }).map(function(a, b) { var c = r(this).val(); return null == c ? null : Array.isArray(c) ? r.map(c, function(a) { return { name: b.name, value: a.replace(xb, "\r\n") } }) : { name: b.name, value: c.replace(xb, "\r\n") } }).get() } });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(L) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nb(a, b, c, d) {
        var e = {},
            f = a === Jb;

        function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Ob(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a }

    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a) },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) { h = {}; while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return k ? g : null },
                    setRequestHeader: function(a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this },
                    overrideMimeType: function(a) { return null == k && (o.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) { var b = a || x; return e && e.abort(b), A(0, b), this }
                };
            if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() { y.abort("timeout") }, o.timeout));
                try { k = !1, e.send(v, A) } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) { return r.get(a, b, c, "json") },
        getScript: function(a, b) { return r.get(a, void 0, b, "script") }
    }), r.each(["get", "post"], function(a, b) { r[b] = function(a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function(a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({
        wrapAll: function(a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = r.isFunction(a); return this.each(function(c) { r(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function(a) { return this.parent(a).not("body").each(function() { r(this).replaceWith(this.childNodes) }), this }
    }), r.expr.pseudos.hidden = function(a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Rb = { 0: 200, 1223: 204 },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort");
                try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i }
            },
            abort: function() { c && c() }
        }
    }), r.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Tb.pop() || r.expando + "_" + ub++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function() { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { r.fn[b] = function(a) { return this.on(b, a) } }), r.expr.pseudos.animated = function(a) { return r.grep(r.timers, function(b) { return a === b.elem }).length }, r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = { top: 0, left: 0 };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || ra }) }
    }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) { return T(this, function(a, d, e) { var f; return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) }
    }), r.each(["top", "left"], function(a, b) { r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) { if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function(a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return T(this, function(b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.holdReady = function(a) { a ? r.readyWait++ : r.ready(!0) }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() { return r });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function(b) { return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r }, b || (a.jQuery = a.$ = r), r
});
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
! function(A, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (A = "undefined" != typeof globalThis ? globalThis : A || self).html2canvas = e() }(this, function() {
    "use strict";
    /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
    var r = function(A, e) {
        return (r = Object.setPrototypeOf || { __proto__: [] }
            instanceof Array && function(A, e) { A.__proto__ = e } || function(A, e) { for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t]) })(A, e)
    };

    function A(A, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function t() { this.constructor = A }
        r(A, e), A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
    }
    var h = function() {
        return (h = Object.assign || function(A) {
            for (var e, t = 1, r = arguments.length; t < r; t++)
                for (var B in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, B) && (A[B] = e[B]);
            return A
        }).apply(this, arguments)
    };

    function a(A, s, o, i) {
        return new(o = o || Promise)(function(t, e) {
            function r(A) { try { n(i.next(A)) } catch (A) { e(A) } }

            function B(A) { try { n(i.throw(A)) } catch (A) { e(A) } }

            function n(A) {
                var e;
                A.done ? t(A.value) : ((e = A.value) instanceof o ? e : new o(function(A) { A(e) })).then(r, B)
            }
            n((i = i.apply(A, s || [])).next())
        })
    }

    function H(t, r) {
        var B, n, s, o = { label: 0, sent: function() { if (1 & s[0]) throw s[1]; return s[1] }, trys: [], ops: [] },
            A = { next: e(0), throw: e(1), return: e(2) };
        return "function" == typeof Symbol && (A[Symbol.iterator] = function() { return this }), A;

        function e(e) {
            return function(A) {
                return function(e) {
                    if (B) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (B = 1, n && (s = 2 & e[0] ? n.return : e[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, e[1])).done) return s;
                        switch (n = 0, (e = s ? [2 & e[0], s.value] : e)[0]) {
                            case 0:
                            case 1:
                                s = e;
                                break;
                            case 4:
                                return o.label++, { value: e[1], done: !1 };
                            case 5:
                                o.label++, n = e[1], e = [0];
                                continue;
                            case 7:
                                e = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = o.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) { o = 0; continue }
                                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) { o.label = e[1]; break }
                                if (6 === e[0] && o.label < s[1]) { o.label = s[1], s = e; break }
                                if (s && o.label < s[2]) { o.label = s[2], o.ops.push(e); break }
                                s[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        e = r.call(t, o)
                    } catch (A) { e = [6, A], n = 0 } finally { B = s = 0 }
                    if (5 & e[0]) throw e[1];
                    return { value: e[0] ? e[1] : void 0, done: !0 }
                }([e, A])
            }
        }
    }

    function t(A, e, t) {
        if (t || 2 === arguments.length)
            for (var r, B = 0, n = e.length; B < n; B++) !r && B in e || ((r = r || Array.prototype.slice.call(e, 0, B))[B] = e[B]);
        return A.concat(r || e)
    }
    var d = (B.prototype.add = function(A, e, t, r) { return new B(this.left + A, this.top + e, this.width + t, this.height + r) }, B.fromClientRect = function(A, e) { return new B(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) }, B.fromDOMRectList = function(A, e) { e = Array.from(e).find(function(A) { return 0 !== A.width }); return e ? new B(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : B.EMPTY }, B.EMPTY = new B(0, 0, 0, 0), B);

    function B(A, e, t, r) { this.left = A, this.top = e, this.width = t, this.height = r }
    for (var f = function(A, e) { return d.fromClientRect(A, e.getBoundingClientRect()) }, Q = function(A) {
            for (var e = [], t = 0, r = A.length; t < r;) {
                var B, n = A.charCodeAt(t++);
                55296 <= n && n <= 56319 && t < r ? 56320 == (64512 & (B = A.charCodeAt(t++))) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--) : e.push(n)
            }
            return e
        }, g = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
            var t = A.length;
            if (!t) return "";
            for (var r = [], B = -1, n = ""; ++B < t;) {
                var s = A[B];
                s <= 65535 ? r.push(s) : (s -= 65536, r.push(55296 + (s >> 10), s % 1024 + 56320)), (B + 1 === t || 16384 < r.length) && (n += String.fromCharCode.apply(String, r), r.length = 0)
            }
            return n
        }, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), s = 0; s < e.length; s++) n[e.charCodeAt(s)] = s;
    for (var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < o.length; i++) c[o.charCodeAt(i)] = i;

    function w(A, e, t) { return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t)) }
    var U = (l.prototype.get = function(A) { var e; if (0 <= A) { if (A < 55296 || 56319 < A && A <= 65535) return e = this.index[A >> 5], this.data[e = (e << 2) + (31 & A)]; if (A <= 65535) return e = this.index[2048 + (A - 55296 >> 5)], this.data[e = (e << 2) + (31 & A)]; if (A < this.highStart) return e = this.index[e = 2080 + (A >> 11)], e = this.index[e += A >> 5 & 63], this.data[e = (e << 2) + (31 & A)]; if (A <= 1114111) return this.data[this.highValueIndex] } return this.errorValue }, l);

    function l(A, e, t, r, B, n) { this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = B, this.data = n }
    for (var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), F = 0; F < C.length; F++) u[C.charCodeAt(F)] = F;

    function p(A, e, t, r) {
        var B = r[t];
        if (Array.isArray(A) ? -1 !== A.indexOf(B) : A === B)
            for (var n = t; n <= r.length;) { if ((o = r[++n]) === e) return 1; if (o !== D) break }
        if (B === D)
            for (n = t; 0 < n;) {
                var s = r[--n];
                if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s)
                    for (var o, i = t; i <= r.length;) { if ((o = r[++i]) === e) return 1; if (o !== D) break }
                if (s !== D) break
            }
    }

    function E(A, e) {
        for (var t = A; 0 <= t;) {
            var r = e[t];
            if (r !== D) return r;
            t--
        }
        return 0
    }

    function I(t, A) {
        var e = (B = function(A, r) {
                void 0 === r && (r = "strict");
                var B = [],
                    n = [],
                    s = [];
                return A.forEach(function(A, e) {
                    var t = rA.get(A);
                    if (50 < t ? (s.push(!0), t -= 50) : s.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(r) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return n.push(e), B.push(16);
                    if (4 !== t && 11 !== t) return n.push(e), 31 === t ? B.push("strict" === r ? O : q) : t === AA || 29 === t ? B.push(J) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? B.push(q) : B.push(J) : void B.push(t);
                    if (0 === e) return n.push(e), B.push(J);
                    t = B[e - 1];
                    return -1 === iA.indexOf(t) ? (n.push(n[e - 1]), B.push(t)) : (n.push(e), B.push(J))
                }), [n, B, s]
            }(t, (A = A || { lineBreak: "normal", wordBreak: "normal" }).lineBreak))[0],
            r = B[1],
            B = B[2];
        return [e, r = "break-all" === A.wordBreak || "break-word" === A.wordBreak ? r.map(function(A) { return -1 !== [R, J, AA].indexOf(A) ? q : A }) : r, "keep-all" === A.wordBreak ? B.map(function(A, e) { return A && 19968 <= t[e] && t[e] <= 40959 }) : void 0]
    }
    var y, K, m, L, b, D = 10,
        v = 13,
        x = 15,
        M = 17,
        S = 18,
        T = 19,
        G = 20,
        O = 21,
        V = 22,
        k = 24,
        R = 25,
        N = 26,
        P = 27,
        X = 28,
        J = 30,
        Y = 32,
        W = 33,
        Z = 34,
        _ = 35,
        q = 37,
        j = 38,
        z = 39,
        $ = 40,
        AA = 42,
        eA = [9001, 65288],
        tA = "×",
        rA = (m = function(A) {
            var e, t, r, B, n = .75 * A.length,
                s = A.length,
                o = 0;
            "=" === A[A.length - 1] && (n--, "=" === A[A.length - 2] && n--);
            for (var n = new("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n), i = Array.isArray(n) ? n : new Uint8Array(n), Q = 0; Q < s; Q += 4) e = c[A.charCodeAt(Q)], t = c[A.charCodeAt(Q + 1)], r = c[A.charCodeAt(Q + 2)], B = c[A.charCodeAt(Q + 3)], i[o++] = e << 2 | t >> 4, i[o++] = (15 & t) << 4 | r >> 2, i[o++] = (3 & r) << 6 | 63 & B;
            return n
        }(y = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), L = Array.isArray(m) ? function(A) { for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]); return t }(m) : new Uint32Array(m), b = Array.isArray(m) ? function(A) { for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]); return t }(m) : new Uint16Array(m), y = w(b, 12, L[4] / 2), K = 2 === L[5] ? w(b, (24 + L[4]) / 2) : (m = L, b = Math.ceil((24 + L[4]) / 4), m.slice ? m.slice(b, K) : new Uint32Array(Array.prototype.slice.call(m, b, K))), new U(L[0], L[1], L[2], L[3], y, K)),
        BA = [J, 36],
        nA = [1, 2, 3, 5],
        sA = [D, 8],
        oA = [P, N],
        iA = nA.concat(sA),
        QA = [j, z, $, Z, _],
        cA = [x, v],
        aA = (gA.prototype.slice = function() { return g.apply(void 0, this.codePoints.slice(this.start, this.end)) }, gA);

    function gA(A, e, t, r) { this.codePoints = A, this.required = "!" === e, this.start = t, this.end = r }

    function wA(A, e) {
        var t = Q(A),
            r = (e = I(t, e))[0],
            B = e[1],
            n = e[2],
            s = t.length,
            o = 0,
            i = 0;
        return {
            next: function() {
                if (s <= i) return { done: !0, value: null };
                for (var A = tA; i < s && (A = function(A, e, t, r, B) {
                        if (0 === t[r]) return tA;
                        var n = r - 1;
                        if (Array.isArray(B) && !0 === B[n]) return tA;
                        var s = n - 1,
                            o = 1 + n,
                            i = e[n],
                            r = 0 <= s ? e[s] : 0,
                            B = e[o];
                        if (2 === i && 3 === B) return tA;
                        if (-1 !== nA.indexOf(i)) return "!";
                        if (-1 !== nA.indexOf(B)) return tA;
                        if (-1 !== sA.indexOf(B)) return tA;
                        if (8 === E(n, e)) return "÷";
                        if (11 === rA.get(A[n])) return tA;
                        if ((i === Y || i === W) && 11 === rA.get(A[o])) return tA;
                        if (7 === i || 7 === B) return tA;
                        if (9 === i) return tA;
                        if (-1 === [D, v, x].indexOf(i) && 9 === B) return tA;
                        if (-1 !== [M, S, T, k, X].indexOf(B)) return tA;
                        if (E(n, e) === V) return tA;
                        if (p(23, V, n, e)) return tA;
                        if (p([M, S], O, n, e)) return tA;
                        if (p(12, 12, n, e)) return tA;
                        if (i === D) return "÷";
                        if (23 === i || 23 === B) return tA;
                        if (16 === B || 16 === i) return "÷";
                        if (-1 !== [v, x, O].indexOf(B) || 14 === i) return tA;
                        if (36 === r && -1 !== cA.indexOf(i)) return tA;
                        if (i === X && 36 === B) return tA;
                        if (B === G) return tA;
                        if (-1 !== BA.indexOf(B) && i === R || -1 !== BA.indexOf(i) && B === R) return tA;
                        if (i === P && -1 !== [q, Y, W].indexOf(B) || -1 !== [q, Y, W].indexOf(i) && B === N) return tA;
                        if (-1 !== BA.indexOf(i) && -1 !== oA.indexOf(B) || -1 !== oA.indexOf(i) && -1 !== BA.indexOf(B)) return tA;
                        if (-1 !== [P, N].indexOf(i) && (B === R || -1 !== [V, x].indexOf(B) && e[1 + o] === R) || -1 !== [V, x].indexOf(i) && B === R || i === R && -1 !== [R, X, k].indexOf(B)) return tA;
                        if (-1 !== [R, X, k, M, S].indexOf(B))
                            for (var Q = n; 0 <= Q;) {
                                if ((c = e[Q]) === R) return tA;
                                if (-1 === [X, k].indexOf(c)) break;
                                Q--
                            }
                        if (-1 !== [P, N].indexOf(B))
                            for (var c, Q = -1 !== [M, S].indexOf(i) ? s : n; 0 <= Q;) {
                                if ((c = e[Q]) === R) return tA;
                                if (-1 === [X, k].indexOf(c)) break;
                                Q--
                            }
                        if (j === i && -1 !== [j, z, Z, _].indexOf(B) || -1 !== [z, Z].indexOf(i) && -1 !== [z, $].indexOf(B) || -1 !== [$, _].indexOf(i) && B === $) return tA;
                        if (-1 !== QA.indexOf(i) && -1 !== [G, N].indexOf(B) || -1 !== QA.indexOf(B) && i === P) return tA;
                        if (-1 !== BA.indexOf(i) && -1 !== BA.indexOf(B)) return tA;
                        if (i === k && -1 !== BA.indexOf(B)) return tA;
                        if (-1 !== BA.concat(R).indexOf(i) && B === V && -1 === eA.indexOf(A[o]) || -1 !== BA.concat(R).indexOf(B) && i === S) return tA;
                        if (41 === i && 41 === B) { for (var a = t[n], g = 1; 0 < a && 41 === e[--a];) g++; if (g % 2 != 0) return tA }
                        return i === Y && B === W ? tA : "÷"
                    }(t, B, r, ++i, n)) === tA;);
                if (A === tA && i !== s) return { done: !0, value: null };
                var e = new aA(t, A, o, i);
                return o = i, { value: e, done: !1 }
            }
        }
    }

    function UA(A) { return 48 <= A && A <= 57 }

    function lA(A) { return UA(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102 }

    function CA(A) { return 10 === A || 9 === A || 32 === A }

    function uA(A) { return 97 <= (t = e = A) && t <= 122 || 65 <= (e = e) && e <= 90 || 128 <= A || 95 === A; var e, t }

    function FA(A) { return uA(A) || UA(A) || 45 === A }

    function hA(A, e) { return 92 === A && 10 !== e }

    function dA(A, e, t) { return 45 === A ? uA(e) || hA(e, t) : !!uA(A) || 92 === A && 10 !== e }

    function fA(A, e, t) { return 43 === A || 45 === A ? !!UA(e) || 46 === e && UA(t) : UA(46 === A ? e : A) }
    var HA = { type: 2 },
        pA = { type: 3 },
        EA = { type: 4 },
        IA = { type: 13 },
        yA = { type: 8 },
        KA = { type: 21 },
        mA = { type: 9 },
        LA = { type: 10 },
        bA = { type: 11 },
        DA = { type: 12 },
        vA = { type: 14 },
        xA = { type: 23 },
        MA = { type: 1 },
        SA = { type: 25 },
        TA = { type: 24 },
        GA = { type: 26 },
        OA = { type: 27 },
        VA = { type: 28 },
        kA = { type: 29 },
        RA = { type: 31 },
        NA = { type: 32 },
        PA = (XA.prototype.write = function(A) { this._value = this._value.concat(Q(A)) }, XA.prototype.read = function() { for (var A = [], e = this.consumeToken(); e !== NA;) A.push(e), e = this.consumeToken(); return A }, XA.prototype.consumeToken = function() {
            var A = this.consumeCodePoint();
            switch (A) {
                case 34:
                    return this.consumeStringToken(34);
                case 35:
                    var e = this.peekCodePoint(0),
                        t = this.peekCodePoint(1),
                        r = this.peekCodePoint(2);
                    if (FA(e) || hA(t, r)) { var B = dA(e, t, r) ? 2 : 1; return { type: 5, value: this.consumeName(), flags: B } }
                    break;
                case 36:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), IA;
                    break;
                case 39:
                    return this.consumeStringToken(39);
                case 40:
                    return HA;
                case 41:
                    return pA;
                case 42:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), vA;
                    break;
                case 43:
                    if (fA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                    break;
                case 44:
                    return EA;
                case 45:
                    var r = A,
                        B = this.peekCodePoint(0),
                        n = this.peekCodePoint(1);
                    if (fA(r, B, n)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                    if (dA(r, B, n)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                    if (45 === B && 62 === n) return this.consumeCodePoint(), this.consumeCodePoint(), TA;
                    break;
                case 46:
                    if (fA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                    break;
                case 47:
                    if (42 === this.peekCodePoint(0))
                        for (this.consumeCodePoint();;) { var s = this.consumeCodePoint(); if (42 === s && 47 === (s = this.consumeCodePoint())) return this.consumeToken(); if (-1 === s) return this.consumeToken() }
                    break;
                case 58:
                    return GA;
                case 59:
                    return OA;
                case 60:
                    if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), SA;
                    break;
                case 64:
                    var n = this.peekCodePoint(0),
                        o = this.peekCodePoint(1),
                        i = this.peekCodePoint(2);
                    if (dA(n, o, i)) return { type: 7, value: this.consumeName() };
                    break;
                case 91:
                    return VA;
                case 92:
                    if (hA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                    break;
                case 93:
                    return kA;
                case 61:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), yA;
                    break;
                case 123:
                    return bA;
                case 125:
                    return DA;
                case 117:
                case 85:
                    o = this.peekCodePoint(0), i = this.peekCodePoint(1);
                    return 43 !== o || !lA(i) && 63 !== i || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                case 124:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), mA;
                    if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), KA;
                    break;
                case 126:
                    if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), LA;
                    break;
                case -1:
                    return NA
            }
            return CA(A) ? (this.consumeWhiteSpace(), RA) : UA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : uA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: g(A) }
        }, XA.prototype.consumeCodePoint = function() { var A = this._value.shift(); return void 0 === A ? -1 : A }, XA.prototype.reconsumeCodePoint = function(A) { this._value.unshift(A) }, XA.prototype.peekCodePoint = function(A) { return A >= this._value.length ? -1 : this._value[A] }, XA.prototype.consumeUnicodeRangeToken = function() { for (var A = [], e = this.consumeCodePoint(); lA(e) && A.length < 6;) A.push(e), e = this.consumeCodePoint(); for (var t = !1; 63 === e && A.length < 6;) A.push(e), e = this.consumeCodePoint(), t = !0; if (t) return { type: 30, start: parseInt(g.apply(void 0, A.map(function(A) { return 63 === A ? 48 : A })), 16), end: parseInt(g.apply(void 0, A.map(function(A) { return 63 === A ? 70 : A })), 16) }; var r = parseInt(g.apply(void 0, A), 16); if (45 === this.peekCodePoint(0) && lA(this.peekCodePoint(1))) { this.consumeCodePoint(); for (var e = this.consumeCodePoint(), B = []; lA(e) && B.length < 6;) B.push(e), e = this.consumeCodePoint(); return { type: 30, start: r, end: parseInt(g.apply(void 0, B), 16) } } return { type: 30, start: r, end: r } }, XA.prototype.consumeIdentLikeToken = function() { var A = this.consumeName(); return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A } }, XA.prototype.consumeUrlToken = function() {
            var A = [];
            if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return { type: 22, value: "" };
            var e, t = this.peekCodePoint(0);
            if (39 === t || 34 === t) { t = this.consumeStringToken(this.consumeCodePoint()); return 0 === t.type && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), { type: 22, value: t.value }) : (this.consumeBadUrlRemnants(), xA) }
            for (;;) {
                var r = this.consumeCodePoint();
                if (-1 === r || 41 === r) return { type: 22, value: g.apply(void 0, A) };
                if (CA(r)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), { type: 22, value: g.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), xA);
                if (34 === r || 39 === r || 40 === r || (0 <= (e = r) && e <= 8 || 11 === e || 14 <= e && e <= 31 || 127 === e)) return this.consumeBadUrlRemnants(), xA;
                if (92 === r) {
                    if (!hA(r, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), xA;
                    A.push(this.consumeEscapedCodePoint())
                } else A.push(r)
            }
        }, XA.prototype.consumeWhiteSpace = function() { for (; CA(this.peekCodePoint(0));) this.consumeCodePoint() }, XA.prototype.consumeBadUrlRemnants = function() {
            for (;;) {
                var A = this.consumeCodePoint();
                if (41 === A || -1 === A) return;
                hA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
            }
        }, XA.prototype.consumeStringSlice = function(A) {
            for (var e = ""; 0 < A;) {
                var t = Math.min(5e4, A);
                e += g.apply(void 0, this._value.splice(0, t)), A -= t
            }
            return this._value.shift(), e
        }, XA.prototype.consumeStringToken = function(A) {
            for (var e = "", t = 0;;) {
                var r, B = this._value[t];
                if (-1 === B || void 0 === B || B === A) return { type: 0, value: e += this.consumeStringSlice(t) };
                if (10 === B) return this._value.splice(0, t), MA;
                92 !== B || -1 !== (r = this._value[t + 1]) && void 0 !== r && (10 === r ? (e += this.consumeStringSlice(t), t = -1, this._value.shift()) : hA(B, r) && (e += this.consumeStringSlice(t), e += g(this.consumeEscapedCodePoint()), t = -1)), t++
            }
        }, XA.prototype.consumeNumber = function() {
            var A = [],
                e = 4;
            for (43 !== (t = this.peekCodePoint(0)) && 45 !== t || A.push(this.consumeCodePoint()); UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
            var t = this.peekCodePoint(0),
                r = this.peekCodePoint(1);
            if (46 === t && UA(r))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
            t = this.peekCodePoint(0);
            var r = this.peekCodePoint(1),
                B = this.peekCodePoint(2);
            if ((69 === t || 101 === t) && ((43 === r || 45 === r) && UA(B) || UA(r)))
                for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
            return [function(A) {
                var e = 0,
                    t = 1;
                43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = -1), e++);
                for (var r = []; UA(A[e]);) r.push(A[e++]);
                var B = r.length ? parseInt(g.apply(void 0, r), 10) : 0;
                46 === A[e] && e++;
                for (var n = []; UA(A[e]);) n.push(A[e++]);
                var s = n.length,
                    o = s ? parseInt(g.apply(void 0, n), 10) : 0;
                69 !== A[e] && 101 !== A[e] || e++;
                var i = 1;
                43 !== A[e] && 45 !== A[e] || (45 === A[e] && (i = -1), e++);
                for (var Q = []; UA(A[e]);) Q.push(A[e++]);
                var c = Q.length ? parseInt(g.apply(void 0, Q), 10) : 0;
                return t * (B + o * Math.pow(10, -s)) * Math.pow(10, i * c)
            }(A), e]
        }, XA.prototype.consumeNumericToken = function() {
            var A = this.consumeNumber(),
                e = A[0],
                t = A[1],
                r = this.peekCodePoint(0),
                B = this.peekCodePoint(1),
                A = this.peekCodePoint(2);
            return dA(r, B, A) ? { type: 15, number: e, flags: t, unit: this.consumeName() } : 37 === r ? (this.consumeCodePoint(), { type: 16, number: e, flags: t }) : { type: 17, number: e, flags: t }
        }, XA.prototype.consumeEscapedCodePoint = function() {
            var A, e = this.consumeCodePoint();
            if (lA(e)) {
                for (var t = g(e); lA(this.peekCodePoint(0)) && t.length < 6;) t += g(this.consumeCodePoint());
                CA(this.peekCodePoint(0)) && this.consumeCodePoint();
                var r = parseInt(t, 16);
                return 0 === r || 55296 <= (A = r) && A <= 57343 || 1114111 < r ? 65533 : r
            }
            return -1 === e ? 65533 : e
        }, XA.prototype.consumeName = function() {
            for (var A = "";;) {
                var e = this.consumeCodePoint();
                if (FA(e)) A += g(e);
                else {
                    if (!hA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
                    A += g(this.consumeEscapedCodePoint())
                }
            }
        }, XA);

    function XA() { this._value = [] }
    var JA = (YA.create = function(A) { var e = new PA; return e.write(A), new YA(e.read()) }, YA.parseValue = function(A) { return YA.create(A).parseComponentValue() }, YA.parseValues = function(A) { return YA.create(A).parseComponentValues() }, YA.prototype.parseComponentValue = function() {
        for (var A = this.consumeToken(); 31 === A.type;) A = this.consumeToken();
        if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
        this.reconsumeToken(A);
        for (var e = this.consumeComponentValue(); 31 === (A = this.consumeToken()).type;);
        if (32 === A.type) return e;
        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
    }, YA.prototype.parseComponentValues = function() {
        for (var A = [];;) {
            var e = this.consumeComponentValue();
            if (32 === e.type) return A;
            A.push(e), A.push()
        }
    }, YA.prototype.consumeComponentValue = function() {
        var A = this.consumeToken();
        switch (A.type) {
            case 11:
            case 28:
            case 2:
                return this.consumeSimpleBlock(A.type);
            case 19:
                return this.consumeFunction(A)
        }
        return A
    }, YA.prototype.consumeSimpleBlock = function(A) {
        for (var e = { type: A, values: [] }, t = this.consumeToken();;) {
            if (32 === t.type || ce(t, A)) return e;
            this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = this.consumeToken()
        }
    }, YA.prototype.consumeFunction = function(A) {
        for (var e = { name: A.value, values: [], type: 18 };;) {
            var t = this.consumeToken();
            if (32 === t.type || 3 === t.type) return e;
            this.reconsumeToken(t), e.values.push(this.consumeComponentValue())
        }
    }, YA.prototype.consumeToken = function() { var A = this._tokens.shift(); return void 0 === A ? NA : A }, YA.prototype.reconsumeToken = function(A) { this._tokens.unshift(A) }, YA);

    function YA(A) { this._tokens = A }

    function WA(A) { return 15 === A.type }

    function ZA(A) { return 17 === A.type }

    function _A(A) { return 20 === A.type }

    function qA(A) { return 0 === A.type }

    function jA(A, e) { return _A(A) && A.value === e }

    function zA(A) { return 31 !== A.type }

    function $A(A) { return 31 !== A.type && 4 !== A.type }

    function Ae(A) {
        var e = [],
            t = [];
        return A.forEach(function(A) {
            if (4 === A.type) { if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg"); return e.push(t), void(t = []) }
            31 !== A.type && t.push(A)
        }), t.length && e.push(t), e
    }

    function ee(A) { return 17 === A.type || 15 === A.type }

    function te(A) { return 16 === A.type || ee(A) }

    function re(A) { return 1 < A.length ? [A[0], A[1]] : [A[0]] }

    function Be(A, e, t) {
        var r = A[0],
            A = A[1];
        return [Ue(r, e), Ue(void 0 !== A ? A : r, t)]
    }

    function ne(A) { return 15 === A.type && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit) }

    function se(A) {
        switch (A.filter(_A).map(function(A) { return A.value }).join(" ")) {
            case "to bottom right":
            case "to right bottom":
            case "left top":
            case "top left":
                return [ae, ae];
            case "to top":
            case "bottom":
                return Ce(0);
            case "to bottom left":
            case "to left bottom":
            case "right top":
            case "top right":
                return [ae, we];
            case "to right":
            case "left":
                return Ce(90);
            case "to top left":
            case "to left top":
            case "right bottom":
            case "bottom right":
                return [we, we];
            case "to bottom":
            case "top":
                return Ce(180);
            case "to top right":
            case "to right top":
            case "left bottom":
            case "bottom left":
                return [we, ae];
            case "to left":
            case "right":
                return Ce(270)
        }
        return 0
    }

    function oe(A) { return 0 == (255 & A) }

    function ie(A) {
        var e = 255 & A,
            t = 255 & A >> 8,
            r = 255 & A >> 16,
            A = 255 & A >> 24;
        return e < 255 ? "rgba(" + A + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + A + "," + r + "," + t + ")"
    }

    function Qe(A, e) { if (17 === A.type) return A.number; if (16 !== A.type) return 0; var t = 3 === e ? 1 : 255; return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t) }
    var ce = function(A, e) { return 11 === e && 12 === A.type || (28 === e && 29 === A.type || 2 === e && 3 === A.type) },
        ae = { type: 17, number: 0, flags: 4 },
        ge = { type: 16, number: 50, flags: 4 },
        we = { type: 16, number: 100, flags: 4 },
        Ue = function(A, e) {
            if (16 === A.type) return A.number / 100 * e;
            if (WA(A)) switch (A.unit) {
                case "rem":
                case "em":
                    return 16 * A.number;
                default:
                    return A.number
            }
            return A.number
        },
        le = function(A, e) {
            if (15 === e.type) switch (e.unit) {
                case "deg":
                    return Math.PI * e.number / 180;
                case "grad":
                    return Math.PI / 200 * e.number;
                case "rad":
                    return e.number;
                case "turn":
                    return 2 * Math.PI * e.number
            }
            throw new Error("Unsupported angle type")
        },
        Ce = function(A) { return Math.PI * A / 180 },
        ue = function(A, e) {
            if (18 === e.type) { var t = me[e.name]; if (void 0 === t) throw new Error('Attempting to parse an unsupported color function "' + e.name + '"'); return t(A, e.values) }
            if (5 === e.type) {
                if (3 === e.value.length) {
                    var r = e.value.substring(0, 1),
                        B = e.value.substring(1, 2),
                        n = e.value.substring(2, 3);
                    return Fe(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), 1)
                }
                if (4 === e.value.length) {
                    var r = e.value.substring(0, 1),
                        B = e.value.substring(1, 2),
                        n = e.value.substring(2, 3),
                        s = e.value.substring(3, 4);
                    return Fe(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), parseInt(s + s, 16) / 255)
                }
                if (6 === e.value.length) { r = e.value.substring(0, 2), B = e.value.substring(2, 4), n = e.value.substring(4, 6); return Fe(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), 1) }
                if (8 === e.value.length) { r = e.value.substring(0, 2), B = e.value.substring(2, 4), n = e.value.substring(4, 6), s = e.value.substring(6, 8); return Fe(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), parseInt(s, 16) / 255) }
            }
            if (20 === e.type) { e = Le[e.value.toUpperCase()]; if (void 0 !== e) return e }
            return Le.TRANSPARENT
        },
        Fe = function(A, e, t, r) { return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0 },
        he = function(A, e) {
            e = e.filter($A);
            if (3 === e.length) {
                var t = e.map(Qe),
                    r = t[0],
                    B = t[1],
                    t = t[2];
                return Fe(r, B, t, 1)
            }
            if (4 !== e.length) return 0;
            e = e.map(Qe), r = e[0], B = e[1], t = e[2], e = e[3];
            return Fe(r, B, t, e)
        };

    function de(A, e, t) { return t < 0 && (t += 1), 1 <= t && --t, t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A }

    function fe(A, e) { return ue(A, JA.create(e).parseComponentValue()) }

    function He(A, e) { return A = ue(A, e[0]), (e = e[1]) && te(e) ? { color: A, stop: e } : { color: A, stop: null } }

    function pe(A, t) {
        var e = A[0],
            r = A[A.length - 1];
        null === e.stop && (e.stop = ae), null === r.stop && (r.stop = we);
        for (var B = [], n = 0, s = 0; s < A.length; s++) {
            var o = A[s].stop;
            null !== o ? (n < (o = Ue(o, t)) ? B.push(o) : B.push(n), n = o) : B.push(null)
        }
        for (var i = null, s = 0; s < B.length; s++) {
            var Q = B[s];
            if (null === Q) null === i && (i = s);
            else if (null !== i) {
                for (var c = s - i, a = (Q - B[i - 1]) / (1 + c), g = 1; g <= c; g++) B[i + g - 1] = a * g;
                i = null
            }
        }
        return A.map(function(A, e) { return { color: A.color, stop: Math.max(Math.min(1, B[e] / t), 0) } })
    }

    function Ee(A, e, t) {
        var r = "number" == typeof A ? A : (s = e / 2, r = (n = t) / 2, s = Ue((B = A)[0], e) - s, n = r - Ue(B[1], n), (Math.atan2(n, s) + 2 * Math.PI) % (2 * Math.PI)),
            B = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
            n = e / 2,
            s = t / 2,
            e = B / 2,
            t = Math.sin(r - Math.PI / 2) * e,
            e = Math.cos(r - Math.PI / 2) * e;
        return [B, n - e, n + e, s - t, s + t]
    }

    function Ie(A, e) { return Math.sqrt(A * A + e * e) }

    function ye(A, e, B, n, s) {
        return [
            [0, 0],
            [0, e],
            [A, 0],
            [A, e]
        ].reduce(function(A, e) {
            var t = e[0],
                r = e[1],
                r = Ie(B - t, n - r);
            return (s ? r < A.optimumDistance : r > A.optimumDistance) ? { optimumCorner: e, optimumDistance: r } : A
        }, { optimumDistance: s ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner
    }
    var Ke = function(A, e) {
            var t = e.filter($A),
                r = t[0],
                B = t[1],
                n = t[2],
                e = t[3],
                t = (17 === r.type ? Ce(r.number) : le(A, r)) / (2 * Math.PI),
                A = te(B) ? B.number / 100 : 0,
                r = te(n) ? n.number / 100 : 0,
                B = void 0 !== e && te(e) ? Ue(e, 1) : 1;
            if (0 == A) return Fe(255 * r, 255 * r, 255 * r, 1);
            n = r <= .5 ? r * (1 + A) : r + A - r * A, e = 2 * r - n, A = de(e, n, t + 1 / 3), r = de(e, n, t), t = de(e, n, t - 1 / 3);
            return Fe(255 * A, 255 * r, 255 * t, B)
        },
        me = { hsl: Ke, hsla: Ke, rgb: he, rgba: he },
        Le = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 },
        be = {
            name: "background-clip",
            initialValue: "border-box",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.map(function(A) {
                    if (_A(A)) switch (A.value) {
                        case "padding-box":
                            return 1;
                        case "content-box":
                            return 2
                    }
                    return 0
                })
            }
        },
        De = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
        Ke = function(t, A) {
            var r = Ce(180),
                B = [];
            return Ae(A).forEach(function(A, e) {
                if (0 === e) { e = A[0]; if (20 === e.type && -1 !== ["top", "left", "right", "bottom"].indexOf(e.value)) return void(r = se(A)); if (ne(e)) return void(r = (le(t, e) + Ce(270)) % Ce(360)) }
                A = He(t, A);
                B.push(A)
            }), { angle: r, stops: B, type: 1 }
        },
        ve = "closest-side",
        xe = "farthest-side",
        Me = "closest-corner",
        Se = "farthest-corner",
        Te = "ellipse",
        Ge = "contain",
        he = function(r, A) {
            var B = 0,
                n = 3,
                s = [],
                o = [];
            return Ae(A).forEach(function(A, e) {
                var t = !0;
                0 === e ? t = A.reduce(function(A, e) {
                    if (_A(e)) switch (e.value) {
                            case "center":
                                return o.push(ge), !1;
                            case "top":
                            case "left":
                                return o.push(ae), !1;
                            case "right":
                            case "bottom":
                                return o.push(we), !1
                        } else if (te(e) || ee(e)) return o.push(e), !1;
                    return A
                }, t) : 1 === e && (t = A.reduce(function(A, e) {
                    if (_A(e)) switch (e.value) {
                            case "circle":
                                return B = 0, !1;
                            case Te:
                                return !(B = 1);
                            case Ge:
                            case ve:
                                return n = 0, !1;
                            case xe:
                                return !(n = 1);
                            case Me:
                                return !(n = 2);
                            case "cover":
                            case Se:
                                return !(n = 3)
                        } else if (ee(e) || te(e)) return (n = !Array.isArray(n) ? [] : n).push(e), !1;
                    return A
                }, t)), t && (A = He(r, A), s.push(A))
            }), { size: n, shape: B, stops: s, position: o, type: 2 }
        },
        Oe = function(A, e) {
            if (22 === e.type) { var t = { url: e.value, type: 0 }; return A.cache.addImage(e.value), t }
            if (18 !== e.type) throw new Error("Unsupported image type " + e.type);
            t = ke[e.name];
            if (void 0 === t) throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
            return t(A, e.values)
        };
    var Ve, ke = {
            "linear-gradient": function(t, A) {
                var r = Ce(180),
                    B = [];
                return Ae(A).forEach(function(A, e) {
                    if (0 === e) { e = A[0]; if (20 === e.type && "to" === e.value) return void(r = se(A)); if (ne(e)) return void(r = le(t, e)) }
                    A = He(t, A);
                    B.push(A)
                }), { angle: r, stops: B, type: 1 }
            },
            "-moz-linear-gradient": Ke,
            "-ms-linear-gradient": Ke,
            "-o-linear-gradient": Ke,
            "-webkit-linear-gradient": Ke,
            "radial-gradient": function(B, A) {
                var n = 0,
                    s = 3,
                    o = [],
                    i = [];
                return Ae(A).forEach(function(A, e) {
                    var t, r = !0;
                    0 === e && (t = !1, r = A.reduce(function(A, e) {
                        if (t)
                            if (_A(e)) switch (e.value) {
                                case "center":
                                    return i.push(ge), A;
                                case "top":
                                case "left":
                                    return i.push(ae), A;
                                case "right":
                                case "bottom":
                                    return i.push(we), A
                            } else(te(e) || ee(e)) && i.push(e);
                            else if (_A(e)) switch (e.value) {
                                case "circle":
                                    return n = 0, !1;
                                case Te:
                                    return !(n = 1);
                                case "at":
                                    return !(t = !0);
                                case ve:
                                    return s = 0, !1;
                                case "cover":
                                case xe:
                                    return !(s = 1);
                                case Ge:
                                case Me:
                                    return !(s = 2);
                                case Se:
                                    return !(s = 3)
                            } else if (ee(e) || te(e)) return (s = !Array.isArray(s) ? [] : s).push(e), !1;
                        return A
                    }, r)), r && (A = He(B, A), o.push(A))
                }), { size: s, shape: n, stops: o, position: i, type: 2 }
            },
            "-moz-radial-gradient": he,
            "-ms-radial-gradient": he,
            "-o-radial-gradient": he,
            "-webkit-radial-gradient": he,
            "-webkit-gradient": function(r, A) {
                var e = Ce(180),
                    B = [],
                    n = 1;
                return Ae(A).forEach(function(A, e) {
                    var t, A = A[0];
                    if (0 === e) { if (_A(A) && "linear" === A.value) return void(n = 1); if (_A(A) && "radial" === A.value) return void(n = 2) }
                    18 === A.type && ("from" === A.name ? (t = ue(r, A.values[0]), B.push({ stop: ae, color: t })) : "to" === A.name ? (t = ue(r, A.values[0]), B.push({ stop: we, color: t })) : "color-stop" !== A.name || 2 === (A = A.values.filter($A)).length && (t = ue(r, A[1]), A = A[0], ZA(A) && B.push({ stop: { type: 16, number: 100 * A.number, flags: A.flags }, color: t })))
                }), 1 === n ? { angle: (e + Ce(180)) % Ce(360), stops: B, type: n } : { size: 3, shape: 0, stops: B, position: [], type: n }
            }
        },
        Re = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(e, A) { if (0 === A.length) return []; var t = A[0]; return 20 === t.type && "none" === t.value ? [] : A.filter(function(A) { return $A(A) && !(20 === (A = A).type && "none" === A.value || 18 === A.type && !ke[A.name]) }).map(function(A) { return Oe(e, A) }) } },
        Ne = {
            name: "background-origin",
            initialValue: "border-box",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.map(function(A) {
                    if (_A(A)) switch (A.value) {
                        case "padding-box":
                            return 1;
                        case "content-box":
                            return 2
                    }
                    return 0
                })
            }
        },
        Pe = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(A, e) { return Ae(e).map(function(A) { return A.filter(te) }).map(re) } },
        Xe = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(A, e) { return Ae(e).map(function(A) { return A.filter(_A).map(function(A) { return A.value }).join(" ") }).map(Je) } },
        Je = function(A) {
            switch (A) {
                case "no-repeat":
                    return 1;
                case "repeat-x":
                case "repeat no-repeat":
                    return 2;
                case "repeat-y":
                case "no-repeat repeat":
                    return 3;
                default:
                    return 0
            }
        };
    (he = Ve = Ve || {}).AUTO = "auto", he.CONTAIN = "contain";

    function Ye(A, e) { return _A(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : te(A) ? Ue(A, e) : e }
    var We, Ze, _e = { name: "background-size", initialValue: "0", prefix: !(he.COVER = "cover"), type: 1, parse: function(A, e) { return Ae(e).map(function(A) { return A.filter(qe) }) } },
        qe = function(A) { return _A(A) || te(A) },
        he = function(A) { return { name: "border-" + A + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" } },
        je = he("top"),
        ze = he("right"),
        $e = he("bottom"),
        At = he("left"),
        he = function(A) { return { name: "border-radius-" + A, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, e) { return re(e.filter(te)) } } },
        et = he("top-left"),
        tt = he("top-right"),
        rt = he("bottom-right"),
        Bt = he("bottom-left"),
        he = function(A) {
            return {
                name: "border-" + A + "-style",
                initialValue: "solid",
                prefix: !1,
                type: 2,
                parse: function(A, e) {
                    switch (e) {
                        case "none":
                            return 0;
                        case "dashed":
                            return 2;
                        case "dotted":
                            return 3;
                        case "double":
                            return 4
                    }
                    return 1
                }
            }
        },
        nt = he("top"),
        st = he("right"),
        ot = he("bottom"),
        it = he("left"),
        he = function(A) { return { name: "border-" + A + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) { return WA(e) ? e.number : 0 } } },
        Qt = he("top"),
        ct = he("right"),
        at = he("bottom"),
        gt = he("left"),
        wt = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
        Ut = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(A, e) { return "rtl" !== e ? 0 : 1 } },
        lt = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(A, e) { return e.filter(_A).reduce(function(A, e) { return A | Ct(e.value) }, 0) } },
        Ct = function(A) {
            switch (A) {
                case "block":
                case "-webkit-box":
                    return 2;
                case "inline":
                    return 4;
                case "run-in":
                    return 8;
                case "flow":
                    return 16;
                case "flow-root":
                    return 32;
                case "table":
                    return 64;
                case "flex":
                case "-webkit-flex":
                    return 128;
                case "grid":
                case "-ms-grid":
                    return 256;
                case "ruby":
                    return 512;
                case "subgrid":
                    return 1024;
                case "list-item":
                    return 2048;
                case "table-row-group":
                    return 4096;
                case "table-header-group":
                    return 8192;
                case "table-footer-group":
                    return 16384;
                case "table-row":
                    return 32768;
                case "table-cell":
                    return 65536;
                case "table-column-group":
                    return 131072;
                case "table-column":
                    return 262144;
                case "table-caption":
                    return 524288;
                case "ruby-base":
                    return 1048576;
                case "ruby-text":
                    return 2097152;
                case "ruby-base-container":
                    return 4194304;
                case "ruby-text-container":
                    return 8388608;
                case "contents":
                    return 16777216;
                case "inline-block":
                    return 33554432;
                case "inline-list-item":
                    return 67108864;
                case "inline-table":
                    return 134217728;
                case "inline-flex":
                    return 268435456;
                case "inline-grid":
                    return 536870912
            }
            return 0
        },
        ut = {
            name: "float",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "left":
                        return 1;
                    case "right":
                        return 2;
                    case "inline-start":
                        return 3;
                    case "inline-end":
                        return 4
                }
                return 0
            }
        },
        Ft = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(A, e) { return !(20 === e.type && "normal" === e.value || 17 !== e.type && 15 !== e.type) ? e.number : 0 } },
        ht = { name: "line-break", initialValue: (he = We = We || {}).NORMAL = "normal", prefix: !(he.STRICT = "strict"), type: 2, parse: function(A, e) { return "strict" !== e ? We.NORMAL : We.STRICT } },
        dt = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
        ft = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(A, e) { return 20 === e.type && "none" === e.value ? null : Oe(A, e) } },
        Ht = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(A, e) { return "inside" !== e ? 1 : 0 } },
        pt = {
            name: "list-style-type",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "disc":
                        return 0;
                    case "circle":
                        return 1;
                    case "square":
                        return 2;
                    case "decimal":
                        return 3;
                    case "cjk-decimal":
                        return 4;
                    case "decimal-leading-zero":
                        return 5;
                    case "lower-roman":
                        return 6;
                    case "upper-roman":
                        return 7;
                    case "lower-greek":
                        return 8;
                    case "lower-alpha":
                        return 9;
                    case "upper-alpha":
                        return 10;
                    case "arabic-indic":
                        return 11;
                    case "armenian":
                        return 12;
                    case "bengali":
                        return 13;
                    case "cambodian":
                        return 14;
                    case "cjk-earthly-branch":
                        return 15;
                    case "cjk-heavenly-stem":
                        return 16;
                    case "cjk-ideographic":
                        return 17;
                    case "devanagari":
                        return 18;
                    case "ethiopic-numeric":
                        return 19;
                    case "georgian":
                        return 20;
                    case "gujarati":
                        return 21;
                    case "gurmukhi":
                    case "hebrew":
                        return 22;
                    case "hiragana":
                        return 23;
                    case "hiragana-iroha":
                        return 24;
                    case "japanese-formal":
                        return 25;
                    case "japanese-informal":
                        return 26;
                    case "kannada":
                        return 27;
                    case "katakana":
                        return 28;
                    case "katakana-iroha":
                        return 29;
                    case "khmer":
                        return 30;
                    case "korean-hangul-formal":
                        return 31;
                    case "korean-hanja-formal":
                        return 32;
                    case "korean-hanja-informal":
                        return 33;
                    case "lao":
                        return 34;
                    case "lower-armenian":
                        return 35;
                    case "malayalam":
                        return 36;
                    case "mongolian":
                        return 37;
                    case "myanmar":
                        return 38;
                    case "oriya":
                        return 39;
                    case "persian":
                        return 40;
                    case "simp-chinese-formal":
                        return 41;
                    case "simp-chinese-informal":
                        return 42;
                    case "tamil":
                        return 43;
                    case "telugu":
                        return 44;
                    case "thai":
                        return 45;
                    case "tibetan":
                        return 46;
                    case "trad-chinese-formal":
                        return 47;
                    case "trad-chinese-informal":
                        return 48;
                    case "upper-armenian":
                        return 49;
                    case "disclosure-open":
                        return 50;
                    case "disclosure-closed":
                        return 51;
                    default:
                        return -1
                }
            }
        },
        he = function(A) { return { name: "margin-" + A, initialValue: "0", prefix: !1, type: 4 } },
        Et = he("top"),
        It = he("right"),
        yt = he("bottom"),
        Kt = he("left"),
        mt = {
            name: "overflow",
            initialValue: "visible",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.filter(_A).map(function(A) {
                    switch (A.value) {
                        case "hidden":
                            return 1;
                        case "scroll":
                            return 2;
                        case "clip":
                            return 3;
                        case "auto":
                            return 4;
                        default:
                            return 0
                    }
                })
            }
        },
        Lt = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(A, e) { return "break-word" !== e ? "normal" : "break-word" } },
        he = function(A) { return { name: "padding-" + A, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" } },
        bt = he("top"),
        Dt = he("right"),
        vt = he("bottom"),
        xt = he("left"),
        Mt = {
            name: "text-align",
            initialValue: "left",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "right":
                        return 2;
                    case "center":
                    case "justify":
                        return 1;
                    default:
                        return 0
                }
            }
        },
        St = {
            name: "position",
            initialValue: "static",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "relative":
                        return 1;
                    case "absolute":
                        return 2;
                    case "fixed":
                        return 3;
                    case "sticky":
                        return 4
                }
                return 0
            }
        },
        Tt = {
            name: "text-shadow",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function(n, A) {
                return 1 === A.length && jA(A[0], "none") ? [] : Ae(A).map(function(A) {
                    for (var e = { color: Le.TRANSPARENT, offsetX: ae, offsetY: ae, blur: ae }, t = 0, r = 0; r < A.length; r++) {
                        var B = A[r];
                        ee(B) ? (0 === t ? e.offsetX = B : 1 === t ? e.offsetY = B : e.blur = B, t++) : e.color = ue(n, B)
                    }
                    return e
                })
            }
        },
        Gt = {
            name: "text-transform",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "uppercase":
                        return 2;
                    case "lowercase":
                        return 1;
                    case "capitalize":
                        return 3
                }
                return 0
            }
        },
        Ot = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(A, e) { if (20 === e.type && "none" === e.value) return null; if (18 !== e.type) return null; var t = Vt[e.name]; if (void 0 === t) throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"'); return t(e.values) } },
        Vt = {
            matrix: function(A) { A = A.filter(function(A) { return 17 === A.type }).map(function(A) { return A.number }); return 6 === A.length ? A : null },
            matrix3d: function(A) {
                var e = A.filter(function(A) { return 17 === A.type }).map(function(A) { return A.number }),
                    t = e[0],
                    r = e[1];
                e[2], e[3];
                var B = e[4],
                    n = e[5];
                e[6], e[7], e[8], e[9], e[10], e[11];
                var s = e[12],
                    A = e[13];
                return e[14], e[15], 16 === e.length ? [t, r, B, n, s, A] : null
            }
        },
        he = { type: 16, number: 50, flags: 4 },
        kt = [he, he],
        Rt = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(A, e) { e = e.filter(te); return 2 !== e.length ? kt : [e[0], e[1]] } },
        Nt = {
            name: "visible",
            initialValue: "none",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "hidden":
                        return 1;
                    case "collapse":
                        return 2;
                    default:
                        return 0
                }
            }
        };
    (he = Ze = Ze || {}).NORMAL = "normal", he.BREAK_ALL = "break-all";

    function Pt(A, e) { return 0 != (A & e) }

    function Xt(A, e, t) { return (A = A && A[Math.min(e, A.length - 1)]) ? t ? A.open : A.close : "" }
    var Jt = {
            name: "word-break",
            initialValue: "normal",
            prefix: !(he.KEEP_ALL = "keep-all"),
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "break-all":
                        return Ze.BREAK_ALL;
                    case "keep-all":
                        return Ze.KEEP_ALL;
                    default:
                        return Ze.NORMAL
                }
            }
        },
        Yt = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(A, e) { if (20 === e.type) return { auto: !0, order: 0 }; if (ZA(e)) return { auto: !1, order: e.number }; throw new Error("Invalid z-index number parsed") } },
        Wt = function(A, e) {
            if (15 === e.type) switch (e.unit.toLowerCase()) {
                case "s":
                    return 1e3 * e.number;
                case "ms":
                    return e.number
            }
            throw new Error("Unsupported time type")
        },
        Zt = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(A, e) { return ZA(e) ? e.number : 1 } },
        _t = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" },
        qt = {
            name: "text-decoration-line",
            initialValue: "none",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                return e.filter(_A).map(function(A) {
                    switch (A.value) {
                        case "underline":
                            return 1;
                        case "overline":
                            return 2;
                        case "line-through":
                            return 3;
                        case "none":
                            return 4
                    }
                    return 0
                }).filter(function(A) { return 0 !== A })
            }
        },
        jt = {
            name: "font-family",
            initialValue: "",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                var t = [],
                    r = [];
                return e.forEach(function(A) {
                    switch (A.type) {
                        case 20:
                        case 0:
                            t.push(A.value);
                            break;
                        case 17:
                            t.push(A.number.toString());
                            break;
                        case 4:
                            r.push(t.join(" ")), t.length = 0
                    }
                }), t.length && r.push(t.join(" ")), r.map(function(A) { return -1 === A.indexOf(" ") ? A : "'" + A + "'" })
            }
        },
        zt = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" },
        $t = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(A, e) { return ZA(e) ? e.number : !_A(e) || "bold" !== e.value ? 400 : 700 } },
        Ar = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(A, e) { return e.filter(_A).map(function(A) { return A.value }) } },
        er = {
            name: "font-style",
            initialValue: "normal",
            prefix: !1,
            type: 2,
            parse: function(A, e) {
                switch (e) {
                    case "oblique":
                        return "oblique";
                    case "italic":
                        return "italic";
                    default:
                        return "normal"
                }
            }
        },
        tr = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(A, e) { if (0 === e.length) return []; var t = e[0]; return 20 === t.type && "none" === t.value ? [] : e } },
        rr = {
            name: "counter-increment",
            initialValue: "none",
            prefix: !0,
            type: 1,
            parse: function(A, e) {
                if (0 === e.length) return null;
                var t = e[0];
                if (20 === t.type && "none" === t.value) return null;
                for (var r = [], B = e.filter(zA), n = 0; n < B.length; n++) {
                    var s = B[n],
                        o = B[n + 1];
                    20 === s.type && (o = o && ZA(o) ? o.number : 1, r.push({ counter: s.value, increment: o }))
                }
                return r
            }
        },
        Br = {
            name: "counter-reset",
            initialValue: "none",
            prefix: !0,
            type: 1,
            parse: function(A, e) {
                if (0 === e.length) return [];
                for (var t = [], r = e.filter(zA), B = 0; B < r.length; B++) {
                    var n = r[B],
                        s = r[B + 1];
                    _A(n) && "none" !== n.value && (s = s && ZA(s) ? s.number : 0, t.push({ counter: n.value, reset: s }))
                }
                return t
            }
        },
        nr = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(e, A) { return A.filter(WA).map(function(A) { return Wt(e, A) }) } },
        sr = {
            name: "quotes",
            initialValue: "none",
            prefix: !0,
            type: 1,
            parse: function(A, e) {
                if (0 === e.length) return null;
                var t = e[0];
                if (20 === t.type && "none" === t.value) return null;
                var r = [],
                    B = e.filter(qA);
                if (B.length % 2 != 0) return null;
                for (var n = 0; n < B.length; n += 2) {
                    var s = B[n].value,
                        o = B[n + 1].value;
                    r.push({ open: s, close: o })
                }
                return r
            }
        },
        or = {
            name: "box-shadow",
            initialValue: "none",
            type: 1,
            prefix: !1,
            parse: function(n, A) {
                return 1 === A.length && jA(A[0], "none") ? [] : Ae(A).map(function(A) {
                    for (var e = { color: 255, offsetX: ae, offsetY: ae, blur: ae, spread: ae, inset: !1 }, t = 0, r = 0; r < A.length; r++) {
                        var B = A[r];
                        jA(B, "inset") ? e.inset = !0 : ee(B) ? (0 === t ? e.offsetX = B : 1 === t ? e.offsetY = B : 2 === t ? e.blur = B : e.spread = B, t++) : e.color = ue(n, B)
                    }
                    return e
                })
            }
        },
        ir = {
            name: "paint-order",
            initialValue: "normal",
            prefix: !1,
            type: 1,
            parse: function(A, e) {
                var t = [];
                return e.filter(_A).forEach(function(A) {
                    switch (A.value) {
                        case "stroke":
                            t.push(1);
                            break;
                        case "fill":
                            t.push(0);
                            break;
                        case "markers":
                            t.push(2)
                    }
                }), [0, 1, 2].forEach(function(A) {-1 === t.indexOf(A) && t.push(A) }), t
            }
        },
        Qr = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" },
        cr = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) { return WA(e) ? e.number : 0 } },
        ar = (gr.prototype.isVisible = function() { return 0 < this.display && 0 < this.opacity && 0 === this.visibility }, gr.prototype.isTransparent = function() { return oe(this.backgroundColor) }, gr.prototype.isTransformed = function() { return null !== this.transform }, gr.prototype.isPositioned = function() { return 0 !== this.position }, gr.prototype.isPositionedWithZIndex = function() { return this.isPositioned() && !this.zIndex.auto }, gr.prototype.isFloating = function() { return 0 !== this.float }, gr.prototype.isInlineLevel = function() { return Pt(this.display, 4) || Pt(this.display, 33554432) || Pt(this.display, 268435456) || Pt(this.display, 536870912) || Pt(this.display, 67108864) || Pt(this.display, 134217728) }, gr);

    function gr(A, e) {
        this.animationDuration = lr(A, nr, e.animationDuration), this.backgroundClip = lr(A, be, e.backgroundClip), this.backgroundColor = lr(A, De, e.backgroundColor), this.backgroundImage = lr(A, Re, e.backgroundImage), this.backgroundOrigin = lr(A, Ne, e.backgroundOrigin), this.backgroundPosition = lr(A, Pe, e.backgroundPosition), this.backgroundRepeat = lr(A, Xe, e.backgroundRepeat), this.backgroundSize = lr(A, _e, e.backgroundSize), this.borderTopColor = lr(A, je, e.borderTopColor), this.borderRightColor = lr(A, ze, e.borderRightColor), this.borderBottomColor = lr(A, $e, e.borderBottomColor), this.borderLeftColor = lr(A, At, e.borderLeftColor), this.borderTopLeftRadius = lr(A, et, e.borderTopLeftRadius), this.borderTopRightRadius = lr(A, tt, e.borderTopRightRadius), this.borderBottomRightRadius = lr(A, rt, e.borderBottomRightRadius), this.borderBottomLeftRadius = lr(A, Bt, e.borderBottomLeftRadius), this.borderTopStyle = lr(A, nt, e.borderTopStyle), this.borderRightStyle = lr(A, st, e.borderRightStyle), this.borderBottomStyle = lr(A, ot, e.borderBottomStyle), this.borderLeftStyle = lr(A, it, e.borderLeftStyle), this.borderTopWidth = lr(A, Qt, e.borderTopWidth), this.borderRightWidth = lr(A, ct, e.borderRightWidth), this.borderBottomWidth = lr(A, at, e.borderBottomWidth), this.borderLeftWidth = lr(A, gt, e.borderLeftWidth), this.boxShadow = lr(A, or, e.boxShadow), this.color = lr(A, wt, e.color), this.direction = lr(A, Ut, e.direction), this.display = lr(A, lt, e.display), this.float = lr(A, ut, e.cssFloat), this.fontFamily = lr(A, jt, e.fontFamily), this.fontSize = lr(A, zt, e.fontSize), this.fontStyle = lr(A, er, e.fontStyle), this.fontVariant = lr(A, Ar, e.fontVariant), this.fontWeight = lr(A, $t, e.fontWeight), this.letterSpacing = lr(A, Ft, e.letterSpacing), this.lineBreak = lr(A, ht, e.lineBreak), this.lineHeight = lr(A, dt, e.lineHeight), this.listStyleImage = lr(A, ft, e.listStyleImage), this.listStylePosition = lr(A, Ht, e.listStylePosition), this.listStyleType = lr(A, pt, e.listStyleType), this.marginTop = lr(A, Et, e.marginTop), this.marginRight = lr(A, It, e.marginRight), this.marginBottom = lr(A, yt, e.marginBottom), this.marginLeft = lr(A, Kt, e.marginLeft), this.opacity = lr(A, Zt, e.opacity);
        var t = lr(A, mt, e.overflow);
        this.overflowX = t[0], this.overflowY = t[1 < t.length ? 1 : 0], this.overflowWrap = lr(A, Lt, e.overflowWrap), this.paddingTop = lr(A, bt, e.paddingTop), this.paddingRight = lr(A, Dt, e.paddingRight), this.paddingBottom = lr(A, vt, e.paddingBottom), this.paddingLeft = lr(A, xt, e.paddingLeft), this.paintOrder = lr(A, ir, e.paintOrder), this.position = lr(A, St, e.position), this.textAlign = lr(A, Mt, e.textAlign), this.textDecorationColor = lr(A, _t, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color), this.textDecorationLine = lr(A, qt, null !== (t = e.textDecorationLine) && void 0 !== t ? t : e.textDecoration), this.textShadow = lr(A, Tt, e.textShadow), this.textTransform = lr(A, Gt, e.textTransform), this.transform = lr(A, Ot, e.transform), this.transformOrigin = lr(A, Rt, e.transformOrigin), this.visibility = lr(A, Nt, e.visibility), this.webkitTextStrokeColor = lr(A, Qr, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = lr(A, cr, e.webkitTextStrokeWidth), this.wordBreak = lr(A, Jt, e.wordBreak), this.zIndex = lr(A, Yt, e.zIndex)
    }
    for (var wr = function(A, e) { this.content = lr(A, tr, e.content), this.quotes = lr(A, sr, e.quotes) }, Ur = function(A, e) { this.counterIncrement = lr(A, rr, e.counterIncrement), this.counterReset = lr(A, Br, e.counterReset) }, lr = function(A, e, t) {
            var r = new PA,
                t = null != t ? t.toString() : e.initialValue;
            r.write(t);
            var B = new JA(r.read());
            switch (e.type) {
                case 2:
                    var n = B.parseComponentValue();
                    return e.parse(A, _A(n) ? n.value : e.initialValue);
                case 0:
                    return e.parse(A, B.parseComponentValue());
                case 1:
                    return e.parse(A, B.parseComponentValues());
                case 4:
                    return B.parseComponentValue();
                case 3:
                    switch (e.format) {
                        case "angle":
                            return le(A, B.parseComponentValue());
                        case "color":
                            return ue(A, B.parseComponentValue());
                        case "image":
                            return Oe(A, B.parseComponentValue());
                        case "length":
                            var s = B.parseComponentValue();
                            return ee(s) ? s : ae;
                        case "length-percentage":
                            s = B.parseComponentValue();
                            return te(s) ? s : ae;
                        case "time":
                            return Wt(A, B.parseComponentValue())
                    }
            }
        }, Cr = function(A, e) {
            A = function(A) {
                switch (A.getAttribute("data-html2canvas-debug")) {
                    case "all":
                        return 1;
                    case "clone":
                        return 2;
                    case "parse":
                        return 3;
                    case "render":
                        return 4;
                    default:
                        return 0
                }
            }(A);
            return 1 === A || e === A
        }, ur = function(A, e) { this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Cr(e, 3), this.styles = new ar(A, window.getComputedStyle(e, null)), JB(e) && (this.styles.animationDuration.some(function(A) { return 0 < A }) && (e.style.animationDuration = "0s"), null !== this.styles.transform && (e.style.transform = "none")), this.bounds = f(this.context, e), Cr(e, 4) && (this.flags |= 16) }, Fr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), dr = 0; dr < Fr.length; dr++) hr[Fr.charCodeAt(dr)] = dr;

    function fr(A, e, t) { return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t)) }
    var Hr = (pr.prototype.get = function(A) { var e; if (0 <= A) { if (A < 55296 || 56319 < A && A <= 65535) return e = this.index[A >> 5], this.data[e = (e << 2) + (31 & A)]; if (A <= 65535) return e = this.index[2048 + (A - 55296 >> 5)], this.data[e = (e << 2) + (31 & A)]; if (A < this.highStart) return e = this.index[e = 2080 + (A >> 11)], e = this.index[e += A >> 5 & 63], this.data[e = (e << 2) + (31 & A)]; if (A <= 1114111) return this.data[this.highValueIndex] } return this.errorValue }, pr);

    function pr(A, e, t, r, B, n) { this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = B, this.data = n }
    for (var Er = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ir = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), yr = 0; yr < Er.length; yr++) Ir[Er.charCodeAt(yr)] = yr;

    function Kr(A) { return kr.get(A) }

    function mr(A) {
        var t = function(A) {
                for (var e = [], t = 0, r = A.length; t < r;) {
                    var B, n = A.charCodeAt(t++);
                    55296 <= n && n <= 56319 && t < r ? 56320 == (64512 & (B = A.charCodeAt(t++))) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--) : e.push(n)
                }
                return e
            }(A),
            r = t.length,
            B = 0,
            n = 0,
            s = t.map(Kr);
        return {
            next: function() {
                if (r <= B) return { done: !0, value: null };
                for (var A = Rr; B < r && (A = function(A, e) {
                        var t = e - 2,
                            r = A[t],
                            B = A[e - 1],
                            e = A[e];
                        if (2 === B && 3 === e) return Rr;
                        if (2 === B || 3 === B || 4 === B) return "÷";
                        if (2 === e || 3 === e || 4 === e) return "÷";
                        if (B === Tr && -1 !== [Tr, Gr, Or, Vr].indexOf(e)) return Rr;
                        if (!(B !== Or && B !== Gr || e !== Gr && 10 !== e)) return Rr;
                        if ((B === Vr || 10 === B) && 10 === e) return Rr;
                        if (13 === e || 5 === e) return Rr;
                        if (7 === e) return Rr;
                        if (1 === B) return Rr;
                        if (13 === B && 14 === e) { for (; 5 === r;) r = A[--t]; if (14 === r) return Rr }
                        if (15 === B && 15 === e) { for (var n = 0; 15 === r;) n++, r = A[--t]; if (n % 2 == 0) return Rr }
                        return "÷"
                    }(s, ++B)) === Rr;);
                if (A === Rr && B !== r) return { done: !0, value: null };
                var e = function() {
                    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
                    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
                    var t = A.length;
                    if (!t) return "";
                    for (var r = [], B = -1, n = ""; ++B < t;) {
                        var s = A[B];
                        s <= 65535 ? r.push(s) : (s -= 65536, r.push(55296 + (s >> 10), s % 1024 + 56320)), (B + 1 === t || 16384 < r.length) && (n += String.fromCharCode.apply(String, r), r.length = 0)
                    }
                    return n
                }.apply(null, t.slice(n, B));
                return n = B, { value: e, done: !1 }
            }
        }
    }

    function Lr(A) { return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3] }
    var br, Dr, vr, xr, Mr, Sr, Tr = 8,
        Gr = 9,
        Or = 11,
        Vr = 12,
        kr = (vr = function(A) {
            var e, t, r, B, n = .75 * A.length,
                s = A.length,
                o = 0;
            "=" === A[A.length - 1] && (n--, "=" === A[A.length - 2] && n--);
            for (var n = new("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n), i = Array.isArray(n) ? n : new Uint8Array(n), Q = 0; Q < s; Q += 4) e = hr[A.charCodeAt(Q)], t = hr[A.charCodeAt(Q + 1)], r = hr[A.charCodeAt(Q + 2)], B = hr[A.charCodeAt(Q + 3)], i[o++] = e << 2 | t >> 4, i[o++] = (15 & t) << 4 | r >> 2, i[o++] = (3 & r) << 6 | 63 & B;
            return n
        }(br = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="), xr = Array.isArray(vr) ? function(A) { for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]); return t }(vr) : new Uint32Array(vr), Mr = Array.isArray(vr) ? function(A) { for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]); return t }(vr) : new Uint16Array(vr), br = fr(Mr, 12, xr[4] / 2), Dr = 2 === xr[5] ? fr(Mr, (24 + xr[4]) / 2) : (vr = xr, Mr = Math.ceil((24 + xr[4]) / 4), vr.slice ? vr.slice(Mr, Dr) : new Uint32Array(Array.prototype.slice.call(vr, Mr, Dr))), new Hr(xr[0], xr[1], xr[2], xr[3], br, Dr)),
        Rr = "×",
        Nr = function(A, e, t, r, B) {
            var n = "http://www.w3.org/2000/svg",
                s = document.createElementNS(n, "svg"),
                n = document.createElementNS(n, "foreignObject");
            return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), n.setAttributeNS(null, "width", "100%"), n.setAttributeNS(null, "height", "100%"), n.setAttributeNS(null, "x", t.toString()), n.setAttributeNS(null, "y", r.toString()), n.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(n), n.appendChild(B), s
        },
        Pr = function(r) {
            return new Promise(function(A, e) {
                var t = new Image;
                t.onload = function() { return A(t) }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
            })
        },
        Xr = {get SUPPORT_RANGE_BOUNDS() {
                var A = function(A) {
                    if (A.createRange) {
                        var e = A.createRange();
                        if (e.getBoundingClientRect) {
                            var t = A.createElement("boundtest");
                            t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t);
                            e = e.getBoundingClientRect(), e = Math.round(e.height);
                            if (A.body.removeChild(t), 123 === e) return !0
                        }
                    }
                    return !1
                }(document);
                return Object.defineProperty(Xr, "SUPPORT_RANGE_BOUNDS", { value: A }), A
            },
            get SUPPORT_WORD_BREAKING() {
                var A = Xr.SUPPORT_RANGE_BOUNDS && function(A) {
                    var e = A.createElement("boundtest");
                    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
                    var r = A.createRange();
                    e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                    var B = e.firstChild,
                        t = Q(B.data).map(function(A) { return g(A) }),
                        n = 0,
                        s = {},
                        t = t.every(function(A, e) {
                            r.setStart(B, n), r.setEnd(B, n + A.length);
                            var t = r.getBoundingClientRect();
                            n += A.length;
                            A = t.x > s.x || t.y > s.y;
                            return s = t, 0 === e || A
                        });
                    return A.body.removeChild(e), t
                }(document);
                return Object.defineProperty(Xr, "SUPPORT_WORD_BREAKING", { value: A }), A
            },
            get SUPPORT_SVG_DRAWING() {
                var A = function(A) {
                    var e = new Image,
                        t = A.createElement("canvas"),
                        A = t.getContext("2d");
                    if (!A) return !1;
                    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                    try { A.drawImage(e, 0, 0), t.toDataURL() } catch (A) { return !1 }
                    return !0
                }(document);
                return Object.defineProperty(Xr, "SUPPORT_SVG_DRAWING", { value: A }), A
            },
            get SUPPORT_FOREIGNOBJECT_DRAWING() {
                var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function(t) {
                    var A = t.createElement("canvas"),
                        r = 100;
                    A.width = r, A.height = r;
                    var B = A.getContext("2d");
                    if (!B) return Promise.reject(!1);
                    B.fillStyle = "rgb(0, 255, 0)", B.fillRect(0, 0, r, r);
                    var e = new Image,
                        n = A.toDataURL();
                    e.src = n;
                    e = Nr(r, r, 0, 0, e);
                    return B.fillStyle = "red", B.fillRect(0, 0, r, r), Pr(e).then(function(A) {
                        B.drawImage(A, 0, 0);
                        var e = B.getImageData(0, 0, r, r).data;
                        B.fillStyle = "red", B.fillRect(0, 0, r, r);
                        A = t.createElement("div");
                        return A.style.backgroundImage = "url(" + n + ")", A.style.height = "100px", Lr(e) ? Pr(Nr(r, r, 0, 0, A)) : Promise.reject(!1)
                    }).then(function(A) { return B.drawImage(A, 0, 0), Lr(B.getImageData(0, 0, r, r).data) }).catch(function() { return !1 })
                }(document) : Promise.resolve(!1);
                return Object.defineProperty(Xr, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A
            },
            get SUPPORT_CORS_IMAGES() { var A = void 0 !== (new Image).crossOrigin; return Object.defineProperty(Xr, "SUPPORT_CORS_IMAGES", { value: A }), A },
            get SUPPORT_RESPONSE_TYPE() { var A = "string" == typeof(new XMLHttpRequest).responseType; return Object.defineProperty(Xr, "SUPPORT_RESPONSE_TYPE", { value: A }), A },
            get SUPPORT_CORS_XHR() { var A = "withCredentials" in new XMLHttpRequest; return Object.defineProperty(Xr, "SUPPORT_CORS_XHR", { value: A }), A },
            get SUPPORT_NATIVE_TEXT_SEGMENTATION() { var A = !("undefined" == typeof Intl || !Intl.Segmenter); return Object.defineProperty(Xr, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A }
        },
        Jr = function(A, e) { this.text = A, this.bounds = e },
        Yr = function(A, e) {
            var t = e.ownerDocument;
            if (t) {
                var r = t.createElement("html2canvaswrapper");
                r.appendChild(e.cloneNode(!0));
                t = e.parentNode;
                if (t) {
                    t.replaceChild(r, e);
                    A = f(A, r);
                    return r.firstChild && t.replaceChild(r.firstChild, r), A
                }
            }
            return d.EMPTY
        },
        Wr = function(A, e, t) {
            var r = A.ownerDocument;
            if (!r) throw new Error("Node has no owner document");
            r = r.createRange();
            return r.setStart(A, e), r.setEnd(A, e + t), r
        },
        Zr = function(A) { if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) { var e = new Intl.Segmenter(void 0, { granularity: "grapheme" }); return Array.from(e.segment(A)).map(function(A) { return A.segment }) } return function(A) { for (var e, t = mr(A), r = []; !(e = t.next()).done;) e.value && r.push(e.value.slice()); return r }(A) },
        _r = function(A, e) { return 0 !== e.letterSpacing ? Zr(A) : function(A, e) { if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) { var t = new Intl.Segmenter(void 0, { granularity: "word" }); return Array.from(t.segment(A)).map(function(A) { return A.segment }) } return jr(A, e) }(A, e) },
        qr = [32, 160, 4961, 65792, 65793, 4153, 4241],
        jr = function(A, e) {
            for (var t, r = wA(A, { lineBreak: e.lineBreak, wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak }), B = []; !(t = r.next()).done;) ! function() {
                var A, e;
                t.value && (A = t.value.slice(), A = Q(A), e = "", A.forEach(function(A) {-1 === qr.indexOf(A) ? e += g(A) : (e.length && B.push(e), B.push(g(A)), e = "") }), e.length && B.push(e))
            }();
            return B
        },
        zr = function(A, e, t) {
            var B, n, s, o, i;
            this.text = $r(e.data, t.textTransform), this.textBounds = (B = A, A = this.text, s = e, A = _r(A, n = t), o = [], i = 0, A.forEach(function(A) {
                var e, t, r;
                n.textDecorationLine.length || 0 < A.trim().length ? Xr.SUPPORT_RANGE_BOUNDS ? 1 < (r = Wr(s, i, A.length).getClientRects()).length ? (e = Zr(A), t = 0, e.forEach(function(A) { o.push(new Jr(A, d.fromDOMRectList(B, Wr(s, t + i, A.length).getClientRects()))), t += A.length })) : o.push(new Jr(A, d.fromDOMRectList(B, r))) : (r = s.splitText(A.length), o.push(new Jr(A, Yr(B, s))), s = r) : Xr.SUPPORT_RANGE_BOUNDS || (s = s.splitText(A.length)), i += A.length
            }), o)
        },
        $r = function(A, e) {
            switch (e) {
                case 1:
                    return A.toLowerCase();
                case 3:
                    return A.replace(AB, eB);
                case 2:
                    return A.toUpperCase();
                default:
                    return A
            }
        },
        AB = /(^|\s|:|-|\(|\))([a-z])/g,
        eB = function(A, e, t) { return 0 < A.length ? e + t.toUpperCase() : A },
        tB = (A(rB, Sr = ur), rB);

    function rB(A, e) { A = Sr.call(this, A, e) || this; return A.src = e.currentSrc || e.src, A.intrinsicWidth = e.naturalWidth, A.intrinsicHeight = e.naturalHeight, A.context.cache.addImage(A.src), A }
    var BB, nB = (A(sB, BB = ur), sB);

    function sB(A, e) { A = BB.call(this, A, e) || this; return A.canvas = e, A.intrinsicWidth = e.width, A.intrinsicHeight = e.height, A }
    var oB, iB = (A(QB, oB = ur), QB);

    function QB(A, e) {
        var t = oB.call(this, A, e) || this,
            r = new XMLSerializer,
            A = f(A, e);
        return e.setAttribute("width", A.width + "px"), e.setAttribute("height", A.height + "px"), t.svg = "data:image/svg+xml," + encodeURIComponent(r.serializeToString(e)), t.intrinsicWidth = e.width.baseVal.value, t.intrinsicHeight = e.height.baseVal.value, t.context.cache.addImage(t.svg), t
    }
    var cB, aB = (A(gB, cB = ur), gB);

    function gB(A, e) { A = cB.call(this, A, e) || this; return A.value = e.value, A }
    var wB, UB = (A(lB, wB = ur), lB);

    function lB(A, e) { A = wB.call(this, A, e) || this; return A.start = e.start, A.reversed = "boolean" == typeof e.reversed && !0 === e.reversed, A }
    var CB, uB = [{ type: 15, flags: 0, unit: "px", number: 3 }],
        FB = [{ type: 16, flags: 0, number: 50 }],
        hB = "checkbox",
        dB = "radio",
        fB = "password",
        HB = 707406591,
        pB = (A(EB, CB = ur), EB);

    function EB(A, e) {
        var t = CB.call(this, A, e) || this;
        switch (t.type = e.type.toLowerCase(), t.checked = e.checked, t.value = 0 === (e = (A = e).type === fB ? new Array(A.value.length + 1).join("•") : A.value).length ? A.placeholder || "" : e, t.type !== hB && t.type !== dB || (t.styles.backgroundColor = 3739148031, t.styles.borderTopColor = t.styles.borderRightColor = t.styles.borderBottomColor = t.styles.borderLeftColor = 2779096575, t.styles.borderTopWidth = t.styles.borderRightWidth = t.styles.borderBottomWidth = t.styles.borderLeftWidth = 1, t.styles.borderTopStyle = t.styles.borderRightStyle = t.styles.borderBottomStyle = t.styles.borderLeftStyle = 1, t.styles.backgroundClip = [0], t.styles.backgroundOrigin = [0], t.bounds = (e = t.bounds).width > e.height ? new d(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new d(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e), t.type) {
            case hB:
                t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = uB;
                break;
            case dB:
                t.styles.borderTopRightRadius = t.styles.borderTopLeftRadius = t.styles.borderBottomRightRadius = t.styles.borderBottomLeftRadius = FB
        }
        return t
    }
    var IB, yB = (A(KB, IB = ur), KB);

    function KB(A, e) { A = IB.call(this, A, e) || this, e = e.options[e.selectedIndex || 0]; return A.value = e && e.text || "", A }
    var mB, LB = (A(bB, mB = ur), bB);

    function bB(A, e) { A = mB.call(this, A, e) || this; return A.value = e.value, A }
    var DB, vB = (A(xB, DB = ur), xB);

    function xB(A, e) {
        var t, r, B = DB.call(this, A, e) || this;
        B.src = e.src, B.width = parseInt(e.width, 10) || 0, B.height = parseInt(e.height, 10) || 0, B.backgroundColor = B.styles.backgroundColor;
        try { e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement && (B.tree = kB(A, e.contentWindow.document.documentElement), t = e.contentWindow.document.documentElement ? fe(A, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : Le.TRANSPARENT, r = e.contentWindow.document.body ? fe(A, getComputedStyle(e.contentWindow.document.body).backgroundColor) : Le.TRANSPARENT, B.backgroundColor = oe(t) ? oe(r) ? B.styles.backgroundColor : r : t) } catch (A) {}
        return B
    }

    function MB(A) { return "VIDEO" === A.tagName }

    function SB(A) { return "STYLE" === A.tagName }

    function TB(A) { return 0 < A.tagName.indexOf("-") }
    var GB = ["OL", "UL", "MENU"],
        OB = function(e, A, t, r) {
            for (var B = A.firstChild; B; B = s) {
                var n, s = B.nextSibling;
                PB(B) && 0 < B.data.trim().length ? t.textNodes.push(new zr(e, B, t.styles)) : XB(B) && (rn(B) && B.assignedNodes ? B.assignedNodes().forEach(function(A) { return OB(e, A, t, r) }) : (n = VB(e, B)).styles.isVisible() && (RB(B, n, r) ? n.flags |= 4 : NB(n.styles) && (n.flags |= 2), -1 !== GB.indexOf(B.tagName) && (n.flags |= 8), t.elements.push(n), B.slot, B.shadowRoot ? OB(e, B.shadowRoot, n, r) : en(B) || qB(B) || tn(B) || OB(e, B, n, r)))
            }
        },
        VB = function(A, e) { return new($B(e) ? tB : zB(e) ? nB : qB(e) ? iB : WB(e) ? aB : ZB(e) ? UB : _B(e) ? pB : tn(e) ? yB : en(e) ? LB : An(e) ? vB : ur)(A, e) },
        kB = function(A, e) { var t = VB(A, e); return t.flags |= 4, OB(A, e, t, t), t },
        RB = function(A, e, t) { return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || jB(A) && t.styles.isTransparent() },
        NB = function(A) { return A.isPositioned() || A.isFloating() },
        PB = function(A) { return A.nodeType === Node.TEXT_NODE },
        XB = function(A) { return A.nodeType === Node.ELEMENT_NODE },
        JB = function(A) { return XB(A) && void 0 !== A.style && !YB(A) },
        YB = function(A) { return "object" == typeof A.className },
        WB = function(A) { return "LI" === A.tagName },
        ZB = function(A) { return "OL" === A.tagName },
        _B = function(A) { return "INPUT" === A.tagName },
        qB = function(A) { return "svg" === A.tagName },
        jB = function(A) { return "BODY" === A.tagName },
        zB = function(A) { return "CANVAS" === A.tagName },
        $B = function(A) { return "IMG" === A.tagName },
        An = function(A) { return "IFRAME" === A.tagName },
        en = function(A) { return "TEXTAREA" === A.tagName },
        tn = function(A) { return "SELECT" === A.tagName },
        rn = function(A) { return "SLOT" === A.tagName },
        Bn = (nn.prototype.getCounterValue = function(A) { A = this.counters[A]; return A && A.length ? A[A.length - 1] : 1 }, nn.prototype.getCounterValues = function(A) { A = this.counters[A]; return A || [] }, nn.prototype.pop = function(A) {
            var e = this;
            A.forEach(function(A) { return e.counters[A].pop() })
        }, nn.prototype.parse = function(A) {
            var t = this,
                e = A.counterIncrement,
                A = A.counterReset,
                r = !0;
            null !== e && e.forEach(function(A) {
                var e = t.counters[A.counter];
                e && 0 !== A.increment && (r = !1, e.length || e.push(1), e[Math.max(0, e.length - 1)] += A.increment)
            });
            var B = [];
            return r && A.forEach(function(A) {
                var e = t.counters[A.counter];
                B.push(A.counter), (e = e || (t.counters[A.counter] = [])).push(A.reset)
            }), B
        }, nn);

    function nn() { this.counters = {} }

    function sn(r, A, e, B, t, n) { return r < A || e < r ? Fn(r, t, 0 < n.length) : B.integers.reduce(function(A, e, t) { for (; e <= r;) r -= e, A += B.values[t]; return A }, "") + n }

    function on(A, e, t, r) { for (var B = ""; t || A--, B = r(A) + B, e <= (A /= e) * e;); return B }

    function Qn(A, e, t, r, B) { var n = t - e + 1; return (A < 0 ? "-" : "") + (on(Math.abs(A), n, r, function(A) { return g(Math.floor(A % n) + e) }) + B) }

    function cn(A, e, t) { void 0 === t && (t = ". "); var r = e.length; return on(Math.abs(A), r, !1, function(A) { return e[Math.floor(A % r)] }) + t }

    function an(A, e, t, r, B, n) {
        if (A < -9999 || 9999 < A) return Fn(A, 4, 0 < B.length);
        var s = Math.abs(A),
            o = B;
        if (0 === s) return e[0] + o;
        for (var i = 0; 0 < s && i <= 4; i++) {
            var Q = s % 10;
            0 == Q && Pt(n, 1) && "" !== o ? o = e[Q] + o : 1 < Q || 1 == Q && 0 === i || 1 == Q && 1 === i && Pt(n, 2) || 1 == Q && 1 === i && Pt(n, 4) && 100 < A || 1 == Q && 1 < i && Pt(n, 8) ? o = e[Q] + (0 < i ? t[i - 1] : "") + o : 1 == Q && 0 < i && (o = t[i - 1] + o), s = Math.floor(s / 10)
        }
        return (A < 0 ? r : "") + o
    }
    var gn, wn = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] },
        Un = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] },
        ln = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] },
        Cn = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] },
        un = "마이너스",
        Fn = function(A, e, t) {
            var r = t ? ". " : "",
                B = t ? "、" : "",
                n = t ? ", " : "",
                s = t ? " " : "";
            switch (e) {
                case 0:
                    return "•" + s;
                case 1:
                    return "◦" + s;
                case 2:
                    return "◾" + s;
                case 5:
                    var o = Qn(A, 48, 57, !0, r);
                    return o.length < 4 ? "0" + o : o;
                case 4:
                    return cn(A, "〇一二三四五六七八九", B);
                case 6:
                    return sn(A, 1, 3999, wn, 3, r).toLowerCase();
                case 7:
                    return sn(A, 1, 3999, wn, 3, r);
                case 8:
                    return Qn(A, 945, 969, !1, r);
                case 9:
                    return Qn(A, 97, 122, !1, r);
                case 10:
                    return Qn(A, 65, 90, !1, r);
                case 11:
                    return Qn(A, 1632, 1641, !0, r);
                case 12:
                case 49:
                    return sn(A, 1, 9999, Un, 3, r);
                case 35:
                    return sn(A, 1, 9999, Un, 3, r).toLowerCase();
                case 13:
                    return Qn(A, 2534, 2543, !0, r);
                case 14:
                case 30:
                    return Qn(A, 6112, 6121, !0, r);
                case 15:
                    return cn(A, "子丑寅卯辰巳午未申酉戌亥", B);
                case 16:
                    return cn(A, "甲乙丙丁戊己庚辛壬癸", B);
                case 17:
                case 48:
                    return an(A, "零一二三四五六七八九", "十百千萬", "負", B, 14);
                case 47:
                    return an(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", B, 15);
                case 42:
                    return an(A, "零一二三四五六七八九", "十百千萬", "负", B, 14);
                case 41:
                    return an(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", B, 15);
                case 26:
                    return an(A, "〇一二三四五六七八九", "十百千万", "マイナス", B, 0);
                case 25:
                    return an(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", B, 7);
                case 31:
                    return an(A, "영일이삼사오육칠팔구", "십백천만", un, n, 7);
                case 33:
                    return an(A, "零一二三四五六七八九", "十百千萬", un, n, 0);
                case 32:
                    return an(A, "零壹貳參四五六七八九", "拾百千", un, n, 7);
                case 18:
                    return Qn(A, 2406, 2415, !0, r);
                case 20:
                    return sn(A, 1, 19999, Cn, 3, r);
                case 21:
                    return Qn(A, 2790, 2799, !0, r);
                case 22:
                    return Qn(A, 2662, 2671, !0, r);
                case 22:
                    return sn(A, 1, 10999, ln, 3, r);
                case 23:
                    return cn(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                case 24:
                    return cn(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                case 27:
                    return Qn(A, 3302, 3311, !0, r);
                case 28:
                    return cn(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", B);
                case 29:
                    return cn(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", B);
                case 34:
                    return Qn(A, 3792, 3801, !0, r);
                case 37:
                    return Qn(A, 6160, 6169, !0, r);
                case 38:
                    return Qn(A, 4160, 4169, !0, r);
                case 39:
                    return Qn(A, 2918, 2927, !0, r);
                case 40:
                    return Qn(A, 1776, 1785, !0, r);
                case 43:
                    return Qn(A, 3046, 3055, !0, r);
                case 44:
                    return Qn(A, 3174, 3183, !0, r);
                case 45:
                    return Qn(A, 3664, 3673, !0, r);
                case 46:
                    return Qn(A, 3872, 3881, !0, r);
                default:
                    return Qn(A, 48, 57, !0, r)
            }
        },
        hn = "data-html2canvas-ignore",
        dn = (fn.prototype.toIFrame = function(A, r) {
            var e = this,
                B = pn(A, r);
            if (!B.contentWindow) return Promise.reject("Unable to find iframe window");
            var t = A.defaultView.pageXOffset,
                n = A.defaultView.pageYOffset,
                s = B.contentWindow,
                o = s.document,
                A = In(B).then(function() {
                    return a(e, void 0, void 0, function() {
                        var e, t;
                        return H(this, function(A) {
                            switch (A.label) {
                                case 0:
                                    return this.scrolledElements.forEach(bn), s && (s.scrollTo(r.left, r.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === r.top && s.scrollX === r.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(s.scrollX - r.left, s.scrollY - r.top, 0, 0))), e = this.options.onclone, void 0 === (t = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : o.fonts && o.fonts.ready ? [4, o.fonts.ready] : [3, 2];
                                case 1:
                                    A.sent(), A.label = 2;
                                case 2:
                                    return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, En(o)] : [3, 4];
                                case 3:
                                    A.sent(), A.label = 4;
                                case 4:
                                    return "function" == typeof e ? [2, Promise.resolve().then(function() { return e(o, t) }).then(function() { return B })] : [2, B]
                            }
                        })
                    })
                });
            return o.open(), o.write(mn(document.doctype) + "<html></html>"), Ln(this.referenceElement.ownerDocument, t, n), o.replaceChild(o.adoptNode(this.documentElement), o.documentElement), o.close(), A
        }, fn.prototype.createElementClone = function(A) { if (Cr(A, 2), zB(A)) return this.createCanvasClone(A); if (MB(A)) return this.createVideoClone(A); if (SB(A)) return this.createStyleClone(A); var e = A.cloneNode(!1); return $B(e) && ($B(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), "lazy" === e.loading && (e.loading = "eager")), TB(e) ? this.createCustomElementClone(e) : e }, fn.prototype.createCustomElementClone = function(A) { var e = document.createElement("html2canvascustomelement"); return Kn(A.style, e), e }, fn.prototype.createStyleClone = function(A) {
            try {
                var e = A.sheet;
                if (e && e.cssRules) {
                    var t = [].slice.call(e.cssRules, 0).reduce(function(A, e) { return e && "string" == typeof e.cssText ? A + e.cssText : A }, ""),
                        r = A.cloneNode(!1);
                    return r.textContent = t, r
                }
            } catch (A) { if (this.context.logger.error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A }
            return A.cloneNode(!1)
        }, fn.prototype.createCanvasClone = function(e) {
            var A;
            if (this.options.inlineImages && e.ownerDocument) { var t = e.ownerDocument.createElement("img"); try { return t.src = e.toDataURL(), t } catch (A) { this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e) } }
            t = e.cloneNode(!1);
            try {
                t.width = e.width, t.height = e.height;
                var r, B, n = e.getContext("2d"),
                    s = t.getContext("2d");
                return s && (!this.options.allowTaint && n ? s.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0) : (!(r = null !== (A = e.getContext("webgl2")) && void 0 !== A ? A : e.getContext("webgl")) || !1 === (null == (B = r.getContextAttributes()) ? void 0 : B.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e), s.drawImage(e, 0, 0))), t
            } catch (A) { this.context.logger.info("Unable to clone canvas as it is tainted", e) }
            return t
        }, fn.prototype.createVideoClone = function(e) {
            var A = e.ownerDocument.createElement("canvas");
            A.width = e.offsetWidth, A.height = e.offsetHeight;
            var t = A.getContext("2d");
            try { return t && (t.drawImage(e, 0, 0, A.width, A.height), this.options.allowTaint || t.getImageData(0, 0, A.width, A.height)), A } catch (A) { this.context.logger.info("Unable to clone video as it is tainted", e) }
            A = e.ownerDocument.createElement("canvas");
            return A.width = e.offsetWidth, A.height = e.offsetHeight, A
        }, fn.prototype.appendChildNode = function(A, e, t) { XB(e) && ("SCRIPT" === e.tagName || e.hasAttribute(hn) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)) || this.options.copyStyles && XB(e) && SB(e) || A.appendChild(this.cloneNode(e, t)) }, fn.prototype.cloneChildNodes = function(A, e, t) { for (var r, B = this, n = (A.shadowRoot || A).firstChild; n; n = n.nextSibling) XB(n) && rn(n) && "function" == typeof n.assignedNodes ? (r = n.assignedNodes()).length && r.forEach(function(A) { return B.appendChildNode(e, A, t) }) : this.appendChildNode(e, n, t) }, fn.prototype.cloneNode = function(A, e) {
            if (PB(A)) return document.createTextNode(A.data);
            if (!A.ownerDocument) return A.cloneNode(!1);
            var t = A.ownerDocument.defaultView;
            if (t && XB(A) && (JB(A) || YB(A))) {
                var r = this.createElementClone(A);
                r.style.transitionProperty = "none";
                var B = t.getComputedStyle(A),
                    n = t.getComputedStyle(A, ":before"),
                    s = t.getComputedStyle(A, ":after");
                this.referenceElement === A && JB(r) && (this.clonedReferenceElement = r), jB(r) && Mn(r);
                t = this.counters.parse(new Ur(this.context, B)), n = this.resolvePseudoContent(A, r, n, gn.BEFORE);
                TB(A) && (e = !0), MB(A) || this.cloneChildNodes(A, r, e), n && r.insertBefore(n, r.firstChild);
                s = this.resolvePseudoContent(A, r, s, gn.AFTER);
                return s && r.appendChild(s), this.counters.pop(t), (B && (this.options.copyStyles || YB(A)) && !An(A) || e) && Kn(B, r), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (en(A) || tn(A)) && (en(r) || tn(r)) && (r.value = A.value), r
            }
            return A.cloneNode(!1)
        }, fn.prototype.resolvePseudoContent = function(o, A, e, t) {
            var i = this;
            if (e) {
                var r = e.content,
                    Q = A.ownerDocument;
                if (Q && r && "none" !== r && "-moz-alt-content" !== r && "none" !== e.display) {
                    this.counters.parse(new Ur(this.context, e));
                    var c = new wr(this.context, e),
                        a = Q.createElement("html2canvaspseudoelement");
                    Kn(e, a), c.content.forEach(function(A) {
                        if (0 === A.type) a.appendChild(Q.createTextNode(A.value));
                        else if (22 === A.type) {
                            var e = Q.createElement("img");
                            e.src = A.value, e.style.opacity = "1", a.appendChild(e)
                        } else if (18 === A.type) { var t, r, B, n, s; "attr" === A.name ? (e = A.values.filter(_A)).length && a.appendChild(Q.createTextNode(o.getAttribute(e[0].value) || "")) : "counter" === A.name ? (B = (r = A.values.filter($A))[0], r = r[1], B && _A(B) && (t = i.counters.getCounterValue(B.value), s = r && _A(r) ? pt.parse(i.context, r.value) : 3, a.appendChild(Q.createTextNode(Fn(t, s, !1))))) : "counters" === A.name && (B = (t = A.values.filter($A))[0], s = t[1], r = t[2], B && _A(B) && (B = i.counters.getCounterValues(B.value), n = r && _A(r) ? pt.parse(i.context, r.value) : 3, s = s && 0 === s.type ? s.value : "", s = B.map(function(A) { return Fn(A, n, !1) }).join(s), a.appendChild(Q.createTextNode(s)))) } else if (20 === A.type) switch (A.value) {
                            case "open-quote":
                                a.appendChild(Q.createTextNode(Xt(c.quotes, i.quoteDepth++, !0)));
                                break;
                            case "close-quote":
                                a.appendChild(Q.createTextNode(Xt(c.quotes, --i.quoteDepth, !1)));
                                break;
                            default:
                                a.appendChild(Q.createTextNode(A.value))
                        }
                    }), a.className = Dn + " " + vn;
                    t = t === gn.BEFORE ? " " + Dn : " " + vn;
                    return YB(A) ? A.className.baseValue += t : A.className += t, a
                }
            }
        }, fn.destroy = function(A) { return !!A.parentNode && (A.parentNode.removeChild(A), !0) }, fn);

    function fn(A, e, t) {
        if (this.context = A, this.options = t, this.scrolledElements = [], this.referenceElement = e, this.counters = new Bn, this.quoteDepth = 0, !e.ownerDocument) throw new Error("Cloned element does not have an owner document");
        this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1)
    }(he = gn = gn || {})[he.BEFORE = 0] = "BEFORE", he[he.AFTER = 1] = "AFTER";

    function Hn(e) { return new Promise(function(A) {!e.complete && e.src ? (e.onload = A, e.onerror = A) : A() }) }
    var pn = function(A, e) { var t = A.createElement("iframe"); return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(hn, "true"), A.body.appendChild(t), t },
        En = function(A) { return Promise.all([].slice.call(A.images, 0).map(Hn)) },
        In = function(B) {
            return new Promise(function(e, A) {
                var t = B.contentWindow;
                if (!t) return A("No window assigned for iframe");
                var r = t.document;
                t.onload = B.onload = function() { t.onload = B.onload = null; var A = setInterval(function() { 0 < r.body.childNodes.length && "complete" === r.readyState && (clearInterval(A), e(B)) }, 50) }
            })
        },
        yn = ["all", "d", "content"],
        Kn = function(A, e) { for (var t = A.length - 1; 0 <= t; t--) { var r = A.item(t); - 1 === yn.indexOf(r) && e.style.setProperty(r, A.getPropertyValue(r)) } return e },
        mn = function(A) { var e = ""; return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e },
        Ln = function(A, e, t) { A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t) },
        bn = function(A) {
            var e = A[0],
                t = A[1],
                A = A[2];
            e.scrollLeft = t, e.scrollTop = A
        },
        Dn = "___html2canvas___pseudoelement_before",
        vn = "___html2canvas___pseudoelement_after",
        xn = '{\n    content: "" !important;\n    display: none !important;\n}',
        Mn = function(A) { Sn(A, "." + Dn + ":before" + xn + "\n         ." + vn + ":after" + xn) },
        Sn = function(A, e) {
            var t = A.ownerDocument;
            t && ((t = t.createElement("style")).textContent = e, A.appendChild(t))
        },
        Tn = (Gn.getOrigin = function(A) { var e = Gn._link; return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank" }, Gn.isSameOrigin = function(A) { return Gn.getOrigin(A) === Gn._origin }, Gn.setContext = function(A) { Gn._link = A.document.createElement("a"), Gn._origin = Gn.getOrigin(A.location.href) }, Gn._origin = "about:blank", Gn);

    function Gn() {}
    var On = (Vn.prototype.addImage = function(A) { var e = Promise.resolve(); return this.has(A) || (Yn(A) || Pn(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {}), e }, Vn.prototype.match = function(A) { return this._cache[A] }, Vn.prototype.loadImage = function(s) {
        return a(this, void 0, void 0, function() {
            var e, r, t, B, n = this;
            return H(this, function(A) {
                switch (A.label) {
                    case 0:
                        return (e = Tn.isSameOrigin(s), r = !Xn(s) && !0 === this._options.useCORS && Xr.SUPPORT_CORS_IMAGES && !e, t = !Xn(s) && !e && !Yn(s) && "string" == typeof this._options.proxy && Xr.SUPPORT_CORS_XHR && !r, e || !1 !== this._options.allowTaint || Xn(s) || Yn(s) || t || r) ? (B = s, t ? [4, this.proxy(B)] : [3, 2]) : [2];
                    case 1:
                        B = A.sent(), A.label = 2;
                    case 2:
                        return this.context.logger.debug("Added image " + s.substring(0, 256)), [4, new Promise(function(A, e) {
                            var t = new Image;
                            t.onload = function() { return A(t) }, t.onerror = e, (Jn(B) || r) && (t.crossOrigin = "anonymous"), t.src = B, !0 === t.complete && setTimeout(function() { return A(t) }, 500), 0 < n._options.imageTimeout && setTimeout(function() { return e("Timed out (" + n._options.imageTimeout + "ms) loading image") }, n._options.imageTimeout)
                        })];
                    case 3:
                        return [2, A.sent()]
                }
            })
        })
    }, Vn.prototype.has = function(A) { return void 0 !== this._cache[A] }, Vn.prototype.keys = function() { return Promise.resolve(Object.keys(this._cache)) }, Vn.prototype.proxy = function(s) {
        var o = this,
            i = this._options.proxy;
        if (!i) throw new Error("No proxy defined");
        var Q = s.substring(0, 256);
        return new Promise(function(e, t) {
            var r = Xr.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                B = new XMLHttpRequest;
            B.onload = function() {
                var A;
                200 === B.status ? "text" == r ? e(B.response) : ((A = new FileReader).addEventListener("load", function() { return e(A.result) }, !1), A.addEventListener("error", function(A) { return t(A) }, !1), A.readAsDataURL(B.response)) : t("Failed to proxy resource " + Q + " with status code " + B.status)
            }, B.onerror = t;
            var A, n = -1 < i.indexOf("?") ? "&" : "?";
            B.open("GET", i + n + "url=" + encodeURIComponent(s) + "&responseType=" + r), "text" != r && B instanceof XMLHttpRequest && (B.responseType = r), o._options.imageTimeout && (A = o._options.imageTimeout, B.timeout = A, B.ontimeout = function() { return t("Timed out (" + A + "ms) proxying " + Q) }), B.send()
        })
    }, Vn);

    function Vn(A, e) { this.context = A, this._options = e, this._cache = {} }
    var kn = /^data:image\/svg\+xml/i,
        Rn = /^data:image\/.*;base64,/i,
        Nn = /^data:image\/.*/i,
        Pn = function(A) { return Xr.SUPPORT_SVG_DRAWING || !Wn(A) },
        Xn = function(A) { return Nn.test(A) },
        Jn = function(A) { return Rn.test(A) },
        Yn = function(A) { return "blob" === A.substr(0, 4) },
        Wn = function(A) { return "svg" === A.substr(-3).toLowerCase() || kn.test(A) },
        Zn = (_n.prototype.add = function(A, e) { return new _n(this.x + A, this.y + e) }, _n);

    function _n(A, e) { this.type = 0, this.x = A, this.y = e }

    function qn(A, e, t) { return new Zn(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t) }
    var jn = (zn.prototype.subdivide = function(A, e) {
        var t = qn(this.start, this.startControl, A),
            r = qn(this.startControl, this.endControl, A),
            B = qn(this.endControl, this.end, A),
            n = qn(t, r, A),
            r = qn(r, B, A),
            A = qn(n, r, A);
        return e ? new zn(this.start, t, n, A) : new zn(A, r, B, this.end)
    }, zn.prototype.add = function(A, e) { return new zn(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e)) }, zn.prototype.reverse = function() { return new zn(this.end, this.endControl, this.startControl, this.start) }, zn);

    function zn(A, e, t, r) { this.type = 1, this.start = A, this.startControl = e, this.endControl = t, this.end = r }

    function $n(A) { return 1 === A.type }
    var As, es = function(A) {
        var e = A.styles,
            t = A.bounds,
            r = (C = Be(e.borderTopLeftRadius, t.width, t.height))[0],
            B = C[1],
            n = (u = Be(e.borderTopRightRadius, t.width, t.height))[0],
            s = u[1],
            o = (F = Be(e.borderBottomRightRadius, t.width, t.height))[0],
            i = F[1],
            Q = (h = Be(e.borderBottomLeftRadius, t.width, t.height))[0],
            c = h[1];
        (d = []).push((r + n) / t.width), d.push((Q + o) / t.width), d.push((B + c) / t.height), d.push((s + i) / t.height), 1 < (f = Math.max.apply(Math, d)) && (r /= f, B /= f, n /= f, s /= f, o /= f, i /= f, Q /= f, c /= f);
        var a = t.width - n,
            g = t.height - i,
            w = t.width - o,
            U = t.height - c,
            l = e.borderTopWidth,
            C = e.borderRightWidth,
            u = e.borderBottomWidth,
            F = e.borderLeftWidth,
            h = Ue(e.paddingTop, A.bounds.width),
            d = Ue(e.paddingRight, A.bounds.width),
            f = Ue(e.paddingBottom, A.bounds.width),
            A = Ue(e.paddingLeft, A.bounds.width);
        this.topLeftBorderDoubleOuterBox = 0 < r || 0 < B ? ss(t.left + F / 3, t.top + l / 3, r - F / 3, B - l / 3, As.TOP_LEFT) : new Zn(t.left + F / 3, t.top + l / 3), this.topRightBorderDoubleOuterBox = 0 < r || 0 < B ? ss(t.left + a, t.top + l / 3, n - C / 3, s - l / 3, As.TOP_RIGHT) : new Zn(t.left + t.width - C / 3, t.top + l / 3), this.bottomRightBorderDoubleOuterBox = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - C / 3, i - u / 3, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C / 3, t.top + t.height - u / 3), this.bottomLeftBorderDoubleOuterBox = 0 < Q || 0 < c ? ss(t.left + F / 3, t.top + U, Q - F / 3, c - u / 3, As.BOTTOM_LEFT) : new Zn(t.left + F / 3, t.top + t.height - u / 3), this.topLeftBorderDoubleInnerBox = 0 < r || 0 < B ? ss(t.left + 2 * F / 3, t.top + 2 * l / 3, r - 2 * F / 3, B - 2 * l / 3, As.TOP_LEFT) : new Zn(t.left + 2 * F / 3, t.top + 2 * l / 3), this.topRightBorderDoubleInnerBox = 0 < r || 0 < B ? ss(t.left + a, t.top + 2 * l / 3, n - 2 * C / 3, s - 2 * l / 3, As.TOP_RIGHT) : new Zn(t.left + t.width - 2 * C / 3, t.top + 2 * l / 3), this.bottomRightBorderDoubleInnerBox = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - 2 * C / 3, i - 2 * u / 3, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - 2 * C / 3, t.top + t.height - 2 * u / 3), this.bottomLeftBorderDoubleInnerBox = 0 < Q || 0 < c ? ss(t.left + 2 * F / 3, t.top + U, Q - 2 * F / 3, c - 2 * u / 3, As.BOTTOM_LEFT) : new Zn(t.left + 2 * F / 3, t.top + t.height - 2 * u / 3), this.topLeftBorderStroke = 0 < r || 0 < B ? ss(t.left + F / 2, t.top + l / 2, r - F / 2, B - l / 2, As.TOP_LEFT) : new Zn(t.left + F / 2, t.top + l / 2), this.topRightBorderStroke = 0 < r || 0 < B ? ss(t.left + a, t.top + l / 2, n - C / 2, s - l / 2, As.TOP_RIGHT) : new Zn(t.left + t.width - C / 2, t.top + l / 2), this.bottomRightBorderStroke = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - C / 2, i - u / 2, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C / 2, t.top + t.height - u / 2), this.bottomLeftBorderStroke = 0 < Q || 0 < c ? ss(t.left + F / 2, t.top + U, Q - F / 2, c - u / 2, As.BOTTOM_LEFT) : new Zn(t.left + F / 2, t.top + t.height - u / 2), this.topLeftBorderBox = 0 < r || 0 < B ? ss(t.left, t.top, r, B, As.TOP_LEFT) : new Zn(t.left, t.top), this.topRightBorderBox = 0 < n || 0 < s ? ss(t.left + a, t.top, n, s, As.TOP_RIGHT) : new Zn(t.left + t.width, t.top), this.bottomRightBorderBox = 0 < o || 0 < i ? ss(t.left + w, t.top + g, o, i, As.BOTTOM_RIGHT) : new Zn(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = 0 < Q || 0 < c ? ss(t.left, t.top + U, Q, c, As.BOTTOM_LEFT) : new Zn(t.left, t.top + t.height), this.topLeftPaddingBox = 0 < r || 0 < B ? ss(t.left + F, t.top + l, Math.max(0, r - F), Math.max(0, B - l), As.TOP_LEFT) : new Zn(t.left + F, t.top + l), this.topRightPaddingBox = 0 < n || 0 < s ? ss(t.left + Math.min(a, t.width - C), t.top + l, a > t.width + C ? 0 : Math.max(0, n - C), Math.max(0, s - l), As.TOP_RIGHT) : new Zn(t.left + t.width - C, t.top + l), this.bottomRightPaddingBox = 0 < o || 0 < i ? ss(t.left + Math.min(w, t.width - F), t.top + Math.min(g, t.height - u), Math.max(0, o - C), Math.max(0, i - u), As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C, t.top + t.height - u), this.bottomLeftPaddingBox = 0 < Q || 0 < c ? ss(t.left + F, t.top + Math.min(U, t.height - u), Math.max(0, Q - F), Math.max(0, c - u), As.BOTTOM_LEFT) : new Zn(t.left + F, t.top + t.height - u), this.topLeftContentBox = 0 < r || 0 < B ? ss(t.left + F + A, t.top + l + h, Math.max(0, r - (F + A)), Math.max(0, B - (l + h)), As.TOP_LEFT) : new Zn(t.left + F + A, t.top + l + h), this.topRightContentBox = 0 < n || 0 < s ? ss(t.left + Math.min(a, t.width + F + A), t.top + l + h, a > t.width + F + A ? 0 : n - F + A, s - (l + h), As.TOP_RIGHT) : new Zn(t.left + t.width - (C + d), t.top + l + h), this.bottomRightContentBox = 0 < o || 0 < i ? ss(t.left + Math.min(w, t.width - (F + A)), t.top + Math.min(g, t.height + l + h), Math.max(0, o - (C + d)), i - (u + f), As.BOTTOM_RIGHT) : new Zn(t.left + t.width - (C + d), t.top + t.height - (u + f)), this.bottomLeftContentBox = 0 < Q || 0 < c ? ss(t.left + F + A, t.top + U, Math.max(0, Q - (F + A)), c - (u + f), As.BOTTOM_LEFT) : new Zn(t.left + F + A, t.top + t.height - (u + f))
    };
    (he = As = As || {})[he.TOP_LEFT = 0] = "TOP_LEFT", he[he.TOP_RIGHT = 1] = "TOP_RIGHT", he[he.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", he[he.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";

    function ts(A) { return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox] }

    function rs(A) { return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox] }

    function Bs(A) { return 1 === A.type }

    function ns(A, t) { return A.length === t.length && A.some(function(A, e) { return A === t[e] }) }
    var ss = function(A, e, t, r, B) {
            var n = (Math.sqrt(2) - 1) / 3 * 4,
                s = t * n,
                o = r * n,
                i = A + t,
                Q = e + r;
            switch (B) {
                case As.TOP_LEFT:
                    return new jn(new Zn(A, Q), new Zn(A, Q - o), new Zn(i - s, e), new Zn(i, e));
                case As.TOP_RIGHT:
                    return new jn(new Zn(A, e), new Zn(A + s, e), new Zn(i, Q - o), new Zn(i, Q));
                case As.BOTTOM_RIGHT:
                    return new jn(new Zn(i, e), new Zn(i, e + o), new Zn(A + s, Q), new Zn(A, Q));
                default:
                    As.BOTTOM_LEFT;
                    return new jn(new Zn(i, Q), new Zn(i - s, Q), new Zn(A, e + o), new Zn(A, e))
            }
        },
        os = function(A, e, t) { this.offsetX = A, this.offsetY = e, this.matrix = t, this.type = 0, this.target = 6 },
        is = function(A, e) { this.path = A, this.target = e, this.type = 1 },
        Qs = function(A) { this.opacity = A, this.type = 2, this.target = 6 },
        cs = function(A) { this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [] },
        as = (gs.prototype.getEffects = function(e) {
            for (var A = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, r = this.effects.slice(0); t;) {
                var B, n, s = t.effects.filter(function(A) { return !Bs(A) });
                A || 0 !== t.container.styles.position || !t.parent ? (r.unshift.apply(r, s), A = -1 === [2, 3].indexOf(t.container.styles.position), 0 !== t.container.styles.overflowX && (B = ts(t.curves), n = rs(t.curves), ns(B, n) || r.unshift(new is(n, 6)))) : r.unshift.apply(r, s), t = t.parent
            }
            return r.filter(function(A) { return Pt(A.target, e) })
        }, gs);

    function gs(A, e) {
        var t, r;
        this.container = A, this.parent = e, this.effects = [], this.curves = new es(this.container), this.container.styles.opacity < 1 && this.effects.push(new Qs(this.container.styles.opacity)), null !== this.container.styles.transform && (e = this.container.bounds.left + this.container.styles.transformOrigin[0].number, t = this.container.bounds.top + this.container.styles.transformOrigin[1].number, r = this.container.styles.transform, this.effects.push(new os(e, t, r))), 0 !== this.container.styles.overflowX && (t = ts(this.curves), r = rs(this.curves), ns(t, r) ? this.effects.push(new is(t, 6)) : (this.effects.push(new is(t, 2)), this.effects.push(new is(r, 4))))
    }

    function ws(A, e) {
        switch (e) {
            case 0:
                return Hs(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
            case 1:
                return Hs(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
            case 2:
                return Hs(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
            default:
                return Hs(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
        }
    }

    function Us(A) {
        var e = A.bounds,
            A = A.styles;
        return e.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth))
    }

    function ls(A) {
        var e = A.styles,
            t = A.bounds,
            r = Ue(e.paddingLeft, t.width),
            B = Ue(e.paddingRight, t.width),
            n = Ue(e.paddingTop, t.width),
            A = Ue(e.paddingBottom, t.width);
        return t.add(r + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + B), -(e.borderTopWidth + e.borderBottomWidth + n + A))
    }

    function Cs(A, e, t) {
        var r = (B = Es(A.styles.backgroundOrigin, e), n = A, 0 === B ? n.bounds : (2 === B ? ls : Us)(n)),
            B = (s = Es(A.styles.backgroundClip, e), o = A, 0 === s ? o.bounds : (2 === s ? ls : Us)(o)),
            n = ps(Es(A.styles.backgroundSize, e), t, r),
            s = n[0],
            o = n[1],
            t = Be(Es(A.styles.backgroundPosition, e), r.width - s, r.height - o);
        return [Is(Es(A.styles.backgroundRepeat, e), t, n, r, B), Math.round(r.left + t[0]), Math.round(r.top + t[1]), s, o]
    }

    function us(A) { return _A(A) && A.value === Ve.AUTO }

    function Fs(A) { return "number" == typeof A }
    var hs = function(Q, c, a, g) {
            Q.container.elements.forEach(function(A) {
                var e = Pt(A.flags, 4),
                    t = Pt(A.flags, 2),
                    r = new as(A, Q);
                Pt(A.styles.display, 2048) && g.push(r);
                var B, n, s, o, i = Pt(A.flags, 8) ? [] : g;
                e || t ? (B = e || A.styles.isPositioned() ? a : c, t = new cs(r), A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed() ? (n = A.styles.zIndex.order) < 0 ? (s = 0, B.negativeZIndex.some(function(A, e) { return n > A.element.container.styles.zIndex.order ? (s = e, !1) : 0 < s }), B.negativeZIndex.splice(s, 0, t)) : 0 < n ? (o = 0, B.positiveZIndex.some(function(A, e) { return n >= A.element.container.styles.zIndex.order ? (o = e + 1, !1) : 0 < o }), B.positiveZIndex.splice(o, 0, t)) : B.zeroOrAutoZIndexOrTransformedOrOpacity.push(t) : (A.styles.isFloating() ? B.nonPositionedFloats : B.nonPositionedInlineLevel).push(t), hs(r, t, e ? t : a, i)) : ((A.styles.isInlineLevel() ? c.inlineLevel : c.nonInlineLevel).push(r), hs(r, c, a, i)), Pt(A.flags, 8) && ds(A, i)
            })
        },
        ds = function(A, e) {
            for (var t = A instanceof UB ? A.start : 1, r = A instanceof UB && A.reversed, B = 0; B < e.length; B++) {
                var n = e[B];
                n.container instanceof aB && "number" == typeof n.container.value && 0 !== n.container.value && (t = n.container.value), n.listValue = Fn(t, n.container.styles.listStyleType, !0), t += r ? -1 : 1
            }
        },
        fs = function(A, e) { var t = []; return $n(A) ? t.push(A.subdivide(.5, !1)) : t.push(A), $n(e) ? t.push(e.subdivide(.5, !0)) : t.push(e), t },
        Hs = function(A, e, t, r) { var B = []; return $n(A) ? B.push(A.subdivide(.5, !1)) : B.push(A), $n(t) ? B.push(t.subdivide(.5, !0)) : B.push(t), $n(r) ? B.push(r.subdivide(.5, !0).reverse()) : B.push(r), $n(e) ? B.push(e.subdivide(.5, !1).reverse()) : B.push(e), B },
        ps = function(A, e, t) {
            var r = e[0],
                B = e[1],
                n = e[2],
                s = A[0],
                o = A[1];
            if (!s) return [0, 0];
            if (te(s) && o && te(o)) return [Ue(s, t.width), Ue(o, t.height)];
            var i = Fs(n);
            if (_A(s) && (s.value === Ve.CONTAIN || s.value === Ve.COVER)) return Fs(n) ? t.width / t.height < n != (s.value === Ve.COVER) ? [t.width, t.width / n] : [t.height * n, t.height] : [t.width, t.height];
            var Q = Fs(r),
                e = Fs(B),
                A = Q || e;
            if (us(s) && (!o || us(o))) return Q && e ? [r, B] : i || A ? A && i ? [Q ? r : B * n, e ? B : r / n] : [Q ? r : t.width, e ? B : t.height] : [t.width, t.height];
            if (i) {
                var c = 0,
                    a = 0;
                return te(s) ? c = Ue(s, t.width) : te(o) && (a = Ue(o, t.height)), us(s) ? c = a * n : o && !us(o) || (a = c / n), [c, a]
            }
            c = null, a = null;
            if (te(s) ? c = Ue(s, t.width) : o && te(o) && (a = Ue(o, t.height)), null !== (c = null !== (a = null !== c && (!o || us(o)) ? Q && e ? c / r * B : t.height : a) && us(s) ? Q && e ? a / B * r : t.width : c) && null !== a) return [c, a];
            throw new Error("Unable to calculate background-size for element")
        },
        Es = function(A, e) { e = A[e]; return void 0 === e ? A[0] : e },
        Is = function(A, e, t, r, B) {
            var n = e[0],
                s = e[1],
                o = t[0],
                i = t[1];
            switch (A) {
                case 2:
                    return [new Zn(Math.round(r.left), Math.round(r.top + s)), new Zn(Math.round(r.left + r.width), Math.round(r.top + s)), new Zn(Math.round(r.left + r.width), Math.round(i + r.top + s)), new Zn(Math.round(r.left), Math.round(i + r.top + s))];
                case 3:
                    return [new Zn(Math.round(r.left + n), Math.round(r.top)), new Zn(Math.round(r.left + n + o), Math.round(r.top)), new Zn(Math.round(r.left + n + o), Math.round(r.height + r.top)), new Zn(Math.round(r.left + n), Math.round(r.height + r.top))];
                case 1:
                    return [new Zn(Math.round(r.left + n), Math.round(r.top + s)), new Zn(Math.round(r.left + n + o), Math.round(r.top + s)), new Zn(Math.round(r.left + n + o), Math.round(r.top + s + i)), new Zn(Math.round(r.left + n), Math.round(r.top + s + i))];
                default:
                    return [new Zn(Math.round(B.left), Math.round(B.top)), new Zn(Math.round(B.left + B.width), Math.round(B.top)), new Zn(Math.round(B.left + B.width), Math.round(B.height + B.top)), new Zn(Math.round(B.left), Math.round(B.height + B.top))]
            }
        },
        ys = "Hidden Text",
        Ks = (ms.prototype.parseMetrics = function(A, e) {
            var t = this._document.createElement("div"),
                r = this._document.createElement("img"),
                B = this._document.createElement("span"),
                n = this._document.body;
            t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = e, t.style.margin = "0", t.style.padding = "0", t.style.whiteSpace = "nowrap", n.appendChild(t), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", B.style.fontFamily = A, B.style.fontSize = e, B.style.margin = "0", B.style.padding = "0", B.appendChild(this._document.createTextNode(ys)), t.appendChild(B), t.appendChild(r);
            e = r.offsetTop - B.offsetTop + 2;
            t.removeChild(B), t.appendChild(this._document.createTextNode(ys)), t.style.lineHeight = "normal", r.style.verticalAlign = "super";
            r = r.offsetTop - t.offsetTop + 2;
            return n.removeChild(t), { baseline: e, middle: r }
        }, ms.prototype.getMetrics = function(A, e) { var t = A + " " + e; return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t] }, ms);

    function ms(A) { this._data = {}, this._document = A }
    var Ls, he = function(A, e) { this.context = A, this.options = e },
        bs = (A(Ds, Ls = he), Ds.prototype.applyEffects = function(A) {
            for (var e = this; this._activeEffects.length;) this.popEffect();
            A.forEach(function(A) { return e.applyEffect(A) })
        }, Ds.prototype.applyEffect = function(A) { this.ctx.save(), 2 === A.type && (this.ctx.globalAlpha = A.opacity), 0 === A.type && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), Bs(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A) }, Ds.prototype.popEffect = function() { this._activeEffects.pop(), this.ctx.restore() }, Ds.prototype.renderStack = function(e) {
            return a(this, void 0, void 0, function() {
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return e.element.container.styles.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
                        case 1:
                            A.sent(), A.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, Ds.prototype.renderNode = function(e) {
            return a(this, void 0, void 0, function() {
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return Pt(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
                        case 1:
                            return A.sent(), [4, this.renderNodeContent(e)];
                        case 2:
                            A.sent(), A.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, Ds.prototype.renderTextWithLetterSpacing = function(t, A, r) {
            var B = this;
            0 === A ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + r) : Zr(t.text).reduce(function(A, e) { return B.ctx.fillText(e, A, t.bounds.top + r), A + B.ctx.measureText(e).width }, t.bounds.left)
        }, Ds.prototype.createFontStyle = function(A) {
            var e = A.fontVariant.filter(function(A) { return "normal" === A || "small-caps" === A }).join(""),
                t = Gs(A.fontFamily).join(", "),
                r = WA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
            return [
                [A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r
            ]
        }, Ds.prototype.renderTextNode = function(i, Q) {
            return a(this, void 0, void 0, function() {
                var e, t, r, B, n, s, o = this;
                return H(this, function(A) {
                    return r = this.createFontStyle(Q), e = r[0], t = r[1], r = r[2], this.ctx.font = e, this.ctx.direction = 1 === Q.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", r = this.fontMetrics.getMetrics(t, r), B = r.baseline, n = r.middle, s = Q.paintOrder, i.textBounds.forEach(function(t) {
                        s.forEach(function(A) {
                            switch (A) {
                                case 0:
                                    o.ctx.fillStyle = ie(Q.color), o.renderTextWithLetterSpacing(t, Q.letterSpacing, B);
                                    var e = Q.textShadow;
                                    e.length && t.text.trim().length && (e.slice(0).reverse().forEach(function(A) { o.ctx.shadowColor = ie(A.color), o.ctx.shadowOffsetX = A.offsetX.number * o.options.scale, o.ctx.shadowOffsetY = A.offsetY.number * o.options.scale, o.ctx.shadowBlur = A.blur.number, o.renderTextWithLetterSpacing(t, Q.letterSpacing, B) }), o.ctx.shadowColor = "", o.ctx.shadowOffsetX = 0, o.ctx.shadowOffsetY = 0, o.ctx.shadowBlur = 0), Q.textDecorationLine.length && (o.ctx.fillStyle = ie(Q.textDecorationColor || Q.color), Q.textDecorationLine.forEach(function(A) {
                                        switch (A) {
                                            case 1:
                                                o.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top + B), t.bounds.width, 1);
                                                break;
                                            case 2:
                                                o.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top), t.bounds.width, 1);
                                                break;
                                            case 3:
                                                o.ctx.fillRect(t.bounds.left, Math.ceil(t.bounds.top + n), t.bounds.width, 1)
                                        }
                                    }));
                                    break;
                                case 1:
                                    Q.webkitTextStrokeWidth && t.text.trim().length && (o.ctx.strokeStyle = ie(Q.webkitTextStrokeColor), o.ctx.lineWidth = Q.webkitTextStrokeWidth, o.ctx.lineJoin = window.chrome ? "miter" : "round", o.ctx.strokeText(t.text, t.bounds.left, t.bounds.top + B)), o.ctx.strokeStyle = "", o.ctx.lineWidth = 0, o.ctx.lineJoin = "miter"
                            }
                        })
                    }), [2]
                })
            })
        }, Ds.prototype.renderReplacedElement = function(A, e, t) {
            var r;
            t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight && (r = ls(A), e = rs(e), this.path(e), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore())
        }, Ds.prototype.renderNodeContent = function(w) {
            return a(this, void 0, void 0, function() {
                var e, t, r, B, n, s, o, i, Q, c, a, g;
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            this.applyEffects(w.getEffects(4)), e = w.container, t = w.curves, r = e.styles, B = 0, n = e.textNodes, A.label = 1;
                        case 1:
                            return B < n.length ? (s = n[B], [4, this.renderTextNode(s, r)]) : [3, 4];
                        case 2:
                            A.sent(), A.label = 3;
                        case 3:
                            return B++, [3, 1];
                        case 4:
                            if (!(e instanceof tB)) return [3, 8];
                            A.label = 5;
                        case 5:
                            return A.trys.push([5, 7, , 8]), [4, this.context.cache.match(e.src)];
                        case 6:
                            return Q = A.sent(), this.renderReplacedElement(e, t, Q), [3, 8];
                        case 7:
                            return A.sent(), this.context.logger.error("Error loading image " + e.src), [3, 8];
                        case 8:
                            if (e instanceof nB && this.renderReplacedElement(e, t, e.canvas), !(e instanceof iB)) return [3, 12];
                            A.label = 9;
                        case 9:
                            return A.trys.push([9, 11, , 12]), [4, this.context.cache.match(e.svg)];
                        case 10:
                            return Q = A.sent(), this.renderReplacedElement(e, t, Q), [3, 12];
                        case 11:
                            return A.sent(), this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
                        case 12:
                            return e instanceof vB && e.tree ? [4, new Ds(this.context, { scale: this.options.scale, backgroundColor: e.backgroundColor, x: 0, y: 0, width: e.width, height: e.height }).render(e.tree)] : [3, 14];
                        case 13:
                            s = A.sent(), e.width && e.height && this.ctx.drawImage(s, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), A.label = 14;
                        case 14:
                            if (e instanceof pB && (i = Math.min(e.bounds.width, e.bounds.height), e.type === hB ? e.checked && (this.ctx.save(), this.path([new Zn(e.bounds.left + .39363 * i, e.bounds.top + .79 * i), new Zn(e.bounds.left + .16 * i, e.bounds.top + .5549 * i), new Zn(e.bounds.left + .27347 * i, e.bounds.top + .44071 * i), new Zn(e.bounds.left + .39694 * i, e.bounds.top + .5649 * i), new Zn(e.bounds.left + .72983 * i, e.bounds.top + .23 * i), new Zn(e.bounds.left + .84 * i, e.bounds.top + .34085 * i), new Zn(e.bounds.left + .39363 * i, e.bounds.top + .79 * i)]), this.ctx.fillStyle = ie(HB), this.ctx.fill(), this.ctx.restore()) : e.type === dB && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + i / 2, e.bounds.top + i / 2, i / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = ie(HB), this.ctx.fill(), this.ctx.restore())), xs(e) && e.value.length) {
                                switch (c = this.createFontStyle(r), a = c[0], i = c[1], c = this.fontMetrics.getMetrics(a, i).baseline, this.ctx.font = a, this.ctx.fillStyle = ie(r.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = Ss(e.styles.textAlign), g = ls(e), o = 0, e.styles.textAlign) {
                                    case 1:
                                        o += g.width / 2;
                                        break;
                                    case 2:
                                        o += g.width
                                }
                                i = g.add(o, 0, 0, -g.height / 2 + 1), this.ctx.save(), this.path([new Zn(g.left, g.top), new Zn(g.left + g.width, g.top), new Zn(g.left + g.width, g.top + g.height), new Zn(g.left, g.top + g.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Jr(e.value, i), r.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left"
                            }
                            if (!Pt(e.styles.display, 2048)) return [3, 20];
                            if (null === e.styles.listStyleImage) return [3, 19];
                            if (0 !== (c = e.styles.listStyleImage).type) return [3, 18];
                            Q = void 0, c = c.url, A.label = 15;
                        case 15:
                            return A.trys.push([15, 17, , 18]), [4, this.context.cache.match(c)];
                        case 16:
                            return Q = A.sent(), this.ctx.drawImage(Q, e.bounds.left - (Q.width + 10), e.bounds.top), [3, 18];
                        case 17:
                            return A.sent(), this.context.logger.error("Error loading list-style-image " + c), [3, 18];
                        case 18:
                            return [3, 20];
                        case 19:
                            w.listValue && -1 !== e.styles.listStyleType && (a = this.createFontStyle(r)[0], this.ctx.font = a, this.ctx.fillStyle = ie(r.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", g = new d(e.bounds.left, e.bounds.top + Ue(e.styles.paddingTop, e.bounds.width), e.bounds.width, Ye(r.lineHeight, r.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Jr(w.listValue, g), r.letterSpacing, Ye(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), A.label = 20;
                        case 20:
                            return [2]
                    }
                })
            })
        }, Ds.prototype.renderStackContent = function(C) {
            return a(this, void 0, void 0, function() {
                var e, t, r, B, n, s, o, i, Q, c, a, g, w, U, l;
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return Pt(C.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(C.element)];
                        case 1:
                            A.sent(), e = 0, t = C.negativeZIndex, A.label = 2;
                        case 2:
                            return e < t.length ? (l = t[e], [4, this.renderStack(l)]) : [3, 5];
                        case 3:
                            A.sent(), A.label = 4;
                        case 4:
                            return e++, [3, 2];
                        case 5:
                            return [4, this.renderNodeContent(C.element)];
                        case 6:
                            A.sent(), r = 0, B = C.nonInlineLevel, A.label = 7;
                        case 7:
                            return r < B.length ? (l = B[r], [4, this.renderNode(l)]) : [3, 10];
                        case 8:
                            A.sent(), A.label = 9;
                        case 9:
                            return r++, [3, 7];
                        case 10:
                            n = 0, s = C.nonPositionedFloats, A.label = 11;
                        case 11:
                            return n < s.length ? (l = s[n], [4, this.renderStack(l)]) : [3, 14];
                        case 12:
                            A.sent(), A.label = 13;
                        case 13:
                            return n++, [3, 11];
                        case 14:
                            o = 0, i = C.nonPositionedInlineLevel, A.label = 15;
                        case 15:
                            return o < i.length ? (l = i[o], [4, this.renderStack(l)]) : [3, 18];
                        case 16:
                            A.sent(), A.label = 17;
                        case 17:
                            return o++, [3, 15];
                        case 18:
                            Q = 0, c = C.inlineLevel, A.label = 19;
                        case 19:
                            return Q < c.length ? (l = c[Q], [4, this.renderNode(l)]) : [3, 22];
                        case 20:
                            A.sent(), A.label = 21;
                        case 21:
                            return Q++, [3, 19];
                        case 22:
                            a = 0, g = C.zeroOrAutoZIndexOrTransformedOrOpacity, A.label = 23;
                        case 23:
                            return a < g.length ? (l = g[a], [4, this.renderStack(l)]) : [3, 26];
                        case 24:
                            A.sent(), A.label = 25;
                        case 25:
                            return a++, [3, 23];
                        case 26:
                            w = 0, U = C.positiveZIndex, A.label = 27;
                        case 27:
                            return w < U.length ? (l = U[w], [4, this.renderStack(l)]) : [3, 30];
                        case 28:
                            A.sent(), A.label = 29;
                        case 29:
                            return w++, [3, 27];
                        case 30:
                            return [2]
                    }
                })
            })
        }, Ds.prototype.mask = function(A) { this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath() }, Ds.prototype.path = function(A) { this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath() }, Ds.prototype.formatPath = function(A) {
            var r = this;
            A.forEach(function(A, e) {
                var t = $n(A) ? A.start : A;
                0 === e ? r.ctx.moveTo(t.x, t.y) : r.ctx.lineTo(t.x, t.y), $n(A) && r.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
            })
        }, Ds.prototype.renderRepeat = function(A, e, t, r) { this.path(A), this.ctx.fillStyle = e, this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r) }, Ds.prototype.resizeImage = function(A, e, t) { if (A.width === e && A.height === t) return A; var r = (null !== (r = this.canvas.ownerDocument) && void 0 !== r ? r : document).createElement("canvas"); return r.width = Math.max(1, e), r.height = Math.max(1, t), r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), r }, Ds.prototype.renderBackgroundImage = function(f) {
            return a(this, void 0, void 0, function() {
                var h, e, d, t, r, B;
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            h = f.styles.backgroundImage.length - 1, e = function(e) {
                                var t, r, B, n, s, o, i, Q, c, a, g, w, U, l, C, u, F;
                                return H(this, function(A) {
                                    switch (A.label) {
                                        case 0:
                                            if (0 !== e.type) return [3, 5];
                                            t = void 0, r = e.url, A.label = 1;
                                        case 1:
                                            return A.trys.push([1, 3, , 4]), [4, d.context.cache.match(r)];
                                        case 2:
                                            return t = A.sent(), [3, 4];
                                        case 3:
                                            return A.sent(), d.context.logger.error("Error loading background-image " + r), [3, 4];
                                        case 4:
                                            return t && (B = Cs(f, h, [t.width, t.height, t.width / t.height]), o = B[0], g = B[1], w = B[2], c = B[3], a = B[4], s = d.ctx.createPattern(d.resizeImage(t, c, a), "repeat"), d.renderRepeat(o, s, g, w)), [3, 6];
                                        case 5:
                                            1 === e.type ? (F = Cs(f, h, [null, null, null]), o = F[0], g = F[1], w = F[2], c = F[3], a = F[4], C = Ee(e.angle, c, a), l = C[0], B = C[1], i = C[2], u = C[3], Q = C[4], (F = document.createElement("canvas")).width = c, F.height = a, C = F.getContext("2d"), n = C.createLinearGradient(B, u, i, Q), pe(e.stops, l).forEach(function(A) { return n.addColorStop(A.stop, ie(A.color)) }), C.fillStyle = n, C.fillRect(0, 0, c, a), 0 < c && 0 < a && (s = d.ctx.createPattern(F, "repeat"), d.renderRepeat(o, s, g, w))) : 2 === e.type && (u = Cs(f, h, [null, null, null]), o = u[0], i = u[1], Q = u[2], c = u[3], a = u[4], l = 0 === e.position.length ? [ge] : e.position, g = Ue(l[0], c), w = Ue(l[l.length - 1], a), C = function(A, e, t, r, B) {
                                                var n, s, o, i, Q = 0,
                                                    c = 0;
                                                switch (A.size) {
                                                    case 0:
                                                        0 === A.shape ? Q = c = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - B)) : 1 === A.shape && (Q = Math.min(Math.abs(e), Math.abs(e - r)), c = Math.min(Math.abs(t), Math.abs(t - B)));
                                                        break;
                                                    case 2:
                                                        0 === A.shape ? Q = c = Math.min(Ie(e, t), Ie(e, t - B), Ie(e - r, t), Ie(e - r, t - B)) : 1 === A.shape && (n = Math.min(Math.abs(t), Math.abs(t - B)) / Math.min(Math.abs(e), Math.abs(e - r)), o = (s = ye(r, B, e, t, !0))[0], i = s[1], c = n * (Q = Ie(o - e, (i - t) / n)));
                                                        break;
                                                    case 1:
                                                        0 === A.shape ? Q = c = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - B)) : 1 === A.shape && (Q = Math.max(Math.abs(e), Math.abs(e - r)), c = Math.max(Math.abs(t), Math.abs(t - B)));
                                                        break;
                                                    case 3:
                                                        0 === A.shape ? Q = c = Math.max(Ie(e, t), Ie(e, t - B), Ie(e - r, t), Ie(e - r, t - B)) : 1 === A.shape && (n = Math.max(Math.abs(t), Math.abs(t - B)) / Math.max(Math.abs(e), Math.abs(e - r)), o = (s = ye(r, B, e, t, !1))[0], i = s[1], c = n * (Q = Ie(o - e, (i - t) / n)))
                                                }
                                                return Array.isArray(A.size) && (Q = Ue(A.size[0], r), c = 2 === A.size.length ? Ue(A.size[1], B) : Q), [Q, c]
                                            }(e, g, w, c, a), F = C[0], u = C[1], 0 < F && 0 < u && (U = d.ctx.createRadialGradient(i + g, Q + w, 0, i + g, Q + w, F), pe(e.stops, 2 * F).forEach(function(A) { return U.addColorStop(A.stop, ie(A.color)) }), d.path(o), d.ctx.fillStyle = U, F !== u ? (l = f.bounds.left + .5 * f.bounds.width, C = f.bounds.top + .5 * f.bounds.height, F = 1 / (u = u / F), d.ctx.save(), d.ctx.translate(l, C), d.ctx.transform(1, 0, 0, u, 0, 0), d.ctx.translate(-l, -C), d.ctx.fillRect(i, F * (Q - C) + C, c, a * F), d.ctx.restore()) : d.ctx.fill())), A.label = 6;
                                        case 6:
                                            return h--, [2]
                                    }
                                })
                            }, d = this, t = 0, r = f.styles.backgroundImage.slice(0).reverse(), A.label = 1;
                        case 1:
                            return t < r.length ? (B = r[t], [5, e(B)]) : [3, 4];
                        case 2:
                            A.sent(), A.label = 3;
                        case 3:
                            return t++, [3, 1];
                        case 4:
                            return [2]
                    }
                })
            })
        }, Ds.prototype.renderSolidBorder = function(e, t, r) { return a(this, void 0, void 0, function() { return H(this, function(A) { return this.path(ws(r, t)), this.ctx.fillStyle = ie(e), this.ctx.fill(), [2] }) }) }, Ds.prototype.renderDoubleBorder = function(t, r, B, n) {
            return a(this, void 0, void 0, function() {
                var e;
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return r < 3 ? [4, this.renderSolidBorder(t, B, n)] : [3, 2];
                        case 1:
                            return A.sent(), [2];
                        case 2:
                            return e = function(A, e) {
                                switch (e) {
                                    case 0:
                                        return Hs(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                                    case 1:
                                        return Hs(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                                    case 2:
                                        return Hs(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                                    default:
                                        return Hs(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
                                }
                            }(n, B), this.path(e), this.ctx.fillStyle = ie(t), this.ctx.fill(), e = function(A, e) {
                                switch (e) {
                                    case 0:
                                        return Hs(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                                    case 1:
                                        return Hs(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                                    case 2:
                                        return Hs(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                                    default:
                                        return Hs(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
                                }
                            }(n, B), this.path(e), this.ctx.fill(), [2]
                    }
                })
            })
        }, Ds.prototype.renderNodeBackgroundAndBorders = function(c) {
            return a(this, void 0, void 0, function() {
                var e, t, r, B, n, s, o, i, Q = this;
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return (this.applyEffects(c.getEffects(2)), e = c.container.styles, t = !oe(e.backgroundColor) || e.backgroundImage.length, r = [{ style: e.borderTopStyle, color: e.borderTopColor, width: e.borderTopWidth }, { style: e.borderRightStyle, color: e.borderRightColor, width: e.borderRightWidth }, { style: e.borderBottomStyle, color: e.borderBottomColor, width: e.borderBottomWidth }, { style: e.borderLeftStyle, color: e.borderLeftColor, width: e.borderLeftWidth }], B = Ms(Es(e.backgroundClip, 0), c.curves), t || e.boxShadow.length) ? (this.ctx.save(), this.path(B), this.ctx.clip(), oe(e.backgroundColor) || (this.ctx.fillStyle = ie(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(c.container)]) : [3, 2];
                        case 1:
                            A.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function(A) {
                                Q.ctx.save();
                                var t, r, B, n, e = ts(c.curves),
                                    s = A.inset ? 0 : 1e4,
                                    o = (t = -s + (A.inset ? 1 : -1) * A.spread.number, r = (A.inset ? 1 : -1) * A.spread.number, B = A.spread.number * (A.inset ? -2 : 2), n = A.spread.number * (A.inset ? -2 : 2), e.map(function(A, e) {
                                        switch (e) {
                                            case 0:
                                                return A.add(t, r);
                                            case 1:
                                                return A.add(t + B, r);
                                            case 2:
                                                return A.add(t + B, r + n);
                                            case 3:
                                                return A.add(t, r + n)
                                        }
                                        return A
                                    }));
                                A.inset ? (Q.path(e), Q.ctx.clip(), Q.mask(o)) : (Q.mask(e), Q.ctx.clip(), Q.path(o)), Q.ctx.shadowOffsetX = A.offsetX.number + s, Q.ctx.shadowOffsetY = A.offsetY.number, Q.ctx.shadowColor = ie(A.color), Q.ctx.shadowBlur = A.blur.number, Q.ctx.fillStyle = A.inset ? ie(A.color) : "rgba(0,0,0,1)", Q.ctx.fill(), Q.ctx.restore()
                            }), A.label = 2;
                        case 2:
                            s = n = 0, o = r, A.label = 3;
                        case 3:
                            return s < o.length ? 0 !== (i = o[s]).style && !oe(i.color) && 0 < i.width ? 2 !== i.style ? [3, 5] : [4, this.renderDashedDottedBorder(i.color, i.width, n, c.curves, 2)] : [3, 11] : [3, 13];
                        case 4:
                            return A.sent(), [3, 11];
                        case 5:
                            return 3 !== i.style ? [3, 7] : [4, this.renderDashedDottedBorder(i.color, i.width, n, c.curves, 3)];
                        case 6:
                            return A.sent(), [3, 11];
                        case 7:
                            return 4 !== i.style ? [3, 9] : [4, this.renderDoubleBorder(i.color, i.width, n, c.curves)];
                        case 8:
                            return A.sent(), [3, 11];
                        case 9:
                            return [4, this.renderSolidBorder(i.color, n, c.curves)];
                        case 10:
                            A.sent(), A.label = 11;
                        case 11:
                            n++, A.label = 12;
                        case 12:
                            return s++, [3, 3];
                        case 13:
                            return [2]
                    }
                })
            })
        }, Ds.prototype.renderDashedDottedBorder = function(g, w, U, l, C) {
            return a(this, void 0, void 0, function() {
                var e, t, r, B, n, s, o, i, Q, c, a;
                return H(this, function(A) {
                    return this.ctx.save(), Q = function(A, e) {
                        switch (e) {
                            case 0:
                                return fs(A.topLeftBorderStroke, A.topRightBorderStroke);
                            case 1:
                                return fs(A.topRightBorderStroke, A.bottomRightBorderStroke);
                            case 2:
                                return fs(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                            default:
                                return fs(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
                        }
                    }(l, U), e = ws(l, U), 2 === C && (this.path(e), this.ctx.clip()), s = $n(e[0]) ? (t = e[0].start.x, e[0].start.y) : (t = e[0].x, e[0].y), o = $n(e[1]) ? (r = e[1].end.x, e[1].end.y) : (r = e[1].x, e[1].y), B = 0 === U || 2 === U ? Math.abs(t - r) : Math.abs(s - o), this.ctx.beginPath(), 3 === C ? this.formatPath(Q) : this.formatPath(e.slice(0, 2)), n = w < 3 ? 3 * w : 2 * w, s = w < 3 ? 2 * w : w, 3 === C && (s = n = w), o = !0, B <= 2 * n ? o = !1 : B <= 2 * n + s ? (n *= i = B / (2 * n + s), s *= i) : (Q = Math.floor((B + s) / (n + s)), i = (B - Q * n) / (Q - 1), s = (Q = (B - (Q + 1) * n) / Q) <= 0 || Math.abs(s - i) < Math.abs(s - Q) ? i : Q), o && (3 === C ? this.ctx.setLineDash([0, n + s]) : this.ctx.setLineDash([n, s])), 3 === C ? (this.ctx.lineCap = "round", this.ctx.lineWidth = w) : this.ctx.lineWidth = 2 * w + 1.1, this.ctx.strokeStyle = ie(g), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === C && ($n(e[0]) && (c = e[3], a = e[0], this.ctx.beginPath(), this.formatPath([new Zn(c.end.x, c.end.y), new Zn(a.start.x, a.start.y)]), this.ctx.stroke()), $n(e[1]) && (c = e[1], a = e[2], this.ctx.beginPath(), this.formatPath([new Zn(c.end.x, c.end.y), new Zn(a.start.x, a.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2]
                })
            })
        }, Ds.prototype.render = function(B) {
            return a(this, void 0, void 0, function() {
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return this.options.backgroundColor && (this.ctx.fillStyle = ie(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = new as(e = B, null), r = new cs(t), hs(t, r, r, e = []), ds(t.container, e), [4, this.renderStack(r)];
                        case 1:
                            return A.sent(), this.applyEffects([]), [2, this.canvas]
                    }
                    var e, t, r
                })
            })
        }, Ds);

    function Ds(A, e) { A = Ls.call(this, A, e) || this; return A._activeEffects = [], A.canvas = e.canvas || document.createElement("canvas"), A.ctx = A.canvas.getContext("2d"), e.canvas || (A.canvas.width = Math.floor(e.width * e.scale), A.canvas.height = Math.floor(e.height * e.scale), A.canvas.style.width = e.width + "px", A.canvas.style.height = e.height + "px"), A.fontMetrics = new Ks(document), A.ctx.scale(A.options.scale, A.options.scale), A.ctx.translate(-e.x, -e.y), A.ctx.textBaseline = "bottom", A._activeEffects = [], A.context.logger.debug("Canvas renderer initialized (" + e.width + "x" + e.height + ") with scale " + e.scale), A }
    var vs, xs = function(A) { return A instanceof LB || (A instanceof yB || A instanceof pB && A.type !== dB && A.type !== hB) },
        Ms = function(A, e) {
            switch (A) {
                case 0:
                    return ts(e);
                case 2:
                    return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox];
                default:
                    return rs(e)
            }
        },
        Ss = function(A) {
            switch (A) {
                case 1:
                    return "center";
                case 2:
                    return "right";
                default:
                    return "left"
            }
        },
        Ts = ["-apple-system", "system-ui"],
        Gs = function(A) { return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(A) { return -1 === Ts.indexOf(A) }) : A },
        Os = (A(Vs, vs = he), Vs.prototype.render = function(t) {
            return a(this, void 0, void 0, function() {
                var e;
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            return e = Nr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, ks(e)];
                        case 1:
                            return e = A.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ie(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                    }
                })
            })
        }, Vs);

    function Vs(A, e) { A = vs.call(this, A, e) || this; return A.canvas = e.canvas || document.createElement("canvas"), A.ctx = A.canvas.getContext("2d"), A.options = e, A.canvas.width = Math.floor(e.width * e.scale), A.canvas.height = Math.floor(e.height * e.scale), A.canvas.style.width = e.width + "px", A.canvas.style.height = e.height + "px", A.ctx.scale(A.options.scale, A.options.scale), A.ctx.translate(-e.x, -e.y), A.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale), A }
    var ks = function(r) {
            return new Promise(function(A, e) {
                var t = new Image;
                t.onload = function() { A(t) }, t.onerror = e, t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(r))
            })
        },
        Rs = (Ns.prototype.debug = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }, Ns.prototype.getTime = function() { return Date.now() - this.start }, Ns.prototype.info = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, t([this.id, this.getTime() + "ms"], A))
        }, Ns.prototype.warn = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }, Ns.prototype.error = function() {
            for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
        }, Ns.instances = {}, Ns);

    function Ns(A) {
        var e = A.id,
            A = A.enabled;
        this.id = e, this.enabled = A, this.start = Date.now()
    }
    var Ps = (Xs.instanceCount = 1, Xs);

    function Xs(A, e) { this.windowBounds = e, this.instanceName = "#" + Xs.instanceCount++, this.logger = new Rs({ id: this.instanceName, enabled: A.logging }), this.cache = null !== (e = A.cache) && void 0 !== e ? e : new On(this, A) }
    "undefined" != typeof window && Tn.setContext(window);
    var Js = function(u, F) {
            return a(void 0, void 0, void 0, function() {
                var e, t, r, B, n, s, o, i, Q, c, a, g, w, U, l, C;
                return H(this, function(A) {
                    switch (A.label) {
                        case 0:
                            if (!u || "object" != typeof u) return [2, Promise.reject("Invalid element provided as first argument")];
                            if (!(e = u.ownerDocument)) throw new Error("Element is not attached to a Document");
                            if (!(t = e.defaultView)) throw new Error("Document is not attached to a Window");
                            return w = { allowTaint: null !== (U = F.allowTaint) && void 0 !== U && U, imageTimeout: null !== (c = F.imageTimeout) && void 0 !== c ? c : 15e3, proxy: F.proxy, useCORS: null !== (a = F.useCORS) && void 0 !== a && a }, U = h({ logging: null === (g = F.logging) || void 0 === g || g, cache: F.cache }, w), c = { windowWidth: null !== (c = F.windowWidth) && void 0 !== c ? c : t.innerWidth, windowHeight: null !== (a = F.windowHeight) && void 0 !== a ? a : t.innerHeight, scrollX: null !== (g = F.scrollX) && void 0 !== g ? g : t.pageXOffset, scrollY: null !== (w = F.scrollY) && void 0 !== w ? w : t.pageYOffset }, a = new d(c.scrollX, c.scrollY, c.windowWidth, c.windowHeight), g = new Ps(U, a), c = null !== (w = F.foreignObjectRendering) && void 0 !== w && w, w = { allowTaint: null !== (U = F.allowTaint) && void 0 !== U && U, onclone: F.onclone, ignoreElements: F.ignoreElements, inlineImages: c, copyStyles: c }, g.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), U = new dn(g, u, w), (w = U.clonedReferenceElement) ? [4, U.toIFrame(e, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                        case 1:
                            return (r = A.sent(), l = jB(w) || "HTML" === w.tagName ? function(A) {
                                var e = A.body,
                                    t = A.documentElement;
                                if (!e || !t) throw new Error("Unable to get document size");
                                A = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), t = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                                return new d(0, 0, A, t)
                            }(w.ownerDocument) : f(g, w), B = l.width, n = l.height, s = l.left, o = l.top, i = Ys(g, w, F.backgroundColor), l = { canvas: F.canvas, backgroundColor: i, scale: null !== (l = null !== (l = F.scale) && void 0 !== l ? l : t.devicePixelRatio) && void 0 !== l ? l : 1, x: (null !== (l = F.x) && void 0 !== l ? l : 0) + s, y: (null !== (l = F.y) && void 0 !== l ? l : 0) + o, width: null !== (l = F.width) && void 0 !== l ? l : Math.ceil(B), height: null !== (l = F.height) && void 0 !== l ? l : Math.ceil(n) }, c) ? (g.logger.debug("Document cloned, using foreign object rendering"), [4, new Os(g, l).render(w)]) : [3, 3];
                        case 2:
                            return Q = A.sent(), [3, 5];
                        case 3:
                            return g.logger.debug("Document cloned, element located at " + s + "," + o + " with size " + B + "x" + n + " using computed rendering"), g.logger.debug("Starting DOM parsing"), C = kB(g, w), i === C.styles.backgroundColor && (C.styles.backgroundColor = Le.TRANSPARENT), g.logger.debug("Starting renderer for element at " + l.x + "," + l.y + " with size " + l.width + "x" + l.height), [4, new bs(g, l).render(C)];
                        case 4:
                            Q = A.sent(), A.label = 5;
                        case 5:
                            return null !== (C = F.removeContainer) && void 0 !== C && !C || dn.destroy(r) || g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"), g.logger.debug("Finished rendering"), [2, Q]
                    }
                })
            })
        },
        Ys = function(A, e, t) {
            var r = e.ownerDocument,
                B = r.documentElement ? fe(A, getComputedStyle(r.documentElement).backgroundColor) : Le.TRANSPARENT,
                n = r.body ? fe(A, getComputedStyle(r.body).backgroundColor) : Le.TRANSPARENT,
                t = "string" == typeof t ? fe(A, t) : null === t ? Le.TRANSPARENT : 4294967295;
            return e === r.documentElement ? oe(B) ? oe(n) ? t : n : B : t
        };
    return function(A, e) { return Js(A, e = void 0 === e ? {} : e) }
});
/*
 *  BarCode Coder Library (BCC Library)
 *  BCCL Version 2.0
 *
 *  Porting : jQuery barcode plugin
 *  Version : 2.2
 *
 *  Date  : 2019-02-21
 *  Author  : DEMONTE Jean-Baptiste <jbdemonte@gmail.com>
 *            HOUREZ Jonathan
 *
 *  Web site: http://barcode-coder.com/
 *  dual licence :  http://www.cecill.info/licences/Licence_CeCILL_V2-fr.html
 *                  http://www.gnu.org/licenses/gpl.html
 */
! function(g) {
    var s = { barWidth: 1, barHeight: 50, moduleSize: 5, showHRI: !0, addQuietZone: !0, marginHRI: 5, bgColor: "#FFFFFF", color: "#000000", fontSize: 10, output: "css", posX: 0, posY: 0 },
        h = ["NNWWN", "WNNNW", "NWNNW", "WWNNN", "NNWNW", "WNWNN", "NWWNN", "NNNWW", "WNNWN", "NWNWN"];

    function d(r, t, e) {
        var n, o, a, i, c, f = "";
        if (r = function(r, t, e) {
                var n, o, a = !0,
                    i = 0;
                if (t) {
                    for ("int25" === e && r.length % 2 == 0 && (r = "0" + r), n = r.length - 1; - 1 < n; n--) {
                        if (o = R(r.charAt(n)), isNaN(o)) return "";
                        i += a ? 3 * o : o, a = !a
                    }
                    r += ((10 - i % 10) % 10).toString()
                } else r.length % 2 != 0 && (r = "0" + r);
                return r
            }(r, t, e), "int25" === e) {
            for (f += "1010", n = 0; n < r.length / 2; n++)
                for (a = r.charAt(2 * n), i = r.charAt(2 * n + 1), o = 0; o < 5; o++) f += "1", "W" === h[a].charAt(o) && (f += "1"), f += "0", "W" === h[i].charAt(o) && (f += "0");
            f += "1101"
        } else if ("std25" === e) {
            for (f += "11011010", n = 0; n < r.length; n++)
                for (c = r.charAt(n), o = 0; o < 5; o++) f += "1", "W" === h[c].charAt(o) && (f += "11"), f += "0";
            f += "11010110"
        }
        return f
    }
    var v = [
            ["0001101", "0100111", "1110010"],
            ["0011001", "0110011", "1100110"],
            ["0010011", "0011011", "1101100"],
            ["0111101", "0100001", "1000010"],
            ["0100011", "0011101", "1011100"],
            ["0110001", "0111001", "1001110"],
            ["0101111", "0000101", "1010000"],
            ["0111011", "0010001", "1000100"],
            ["0110111", "0001001", "1001000"],
            ["0001011", "0010111", "1110100"]
        ],
        A = ["000000", "001011", "001101", "001110", "010011", "011001", "011100", "010101", "010110", "011010"],
        p = ["00", "01", "10", "11"],
        b = ["11000", "10100", "10010", "10001", "01100", "00110", "00011", "01010", "01001", "00101"];

    function m(r, t) {
        var e, n, o, a, i, c, f, h, l, u, g = "ean8" === t ? 7 : 12,
            s = r;
        if (!(r = r.substring(0, g)).match(new RegExp("^[0-9]{" + g + "}$"))) return "";
        if (r = N(r, t), c = "101", "ean8" === t) { for (e = 0; e < 4; e++) c += v[R(r.charAt(e))][0]; for (c += "01010", e = 4; e < 8; e++) c += v[R(r.charAt(e))][2] } else { for (f = A[R(r.charAt(0))], e = 1; e < 7; e++) c += v[R(r.charAt(e))][R(f.charAt(e - 1))]; for (c += "01010", e = 7; e < 13; e++) c += v[R(r.charAt(e))][2] }
        if (c += "101", "ean13" === t)
            if (2 === (a = s.substring(13, s.length)).length)
                for (c += "0000000000", i = parseInt(a, 10) % 4, e = 0; e < 2; e++) h = R(a.charAt(e)), l = R(p[R(i)][e]), c += v[h][l];
            else if (5 === a.length) { for (c += "0000000000", u = !0, n = o = 0, e = 0; e < 5; e++) u ? o += R(a.charAt(e)) : n += R(a.charAt(e)), u = !u; for (i = (9 * n + 3 * o) % 10, c += "1011", e = 0; e < 5; e++) h = R(a.charAt(e)), l = R(b[R(i)][e]), c += v[h][l], e < 4 && (c += "01") }
        return c
    }

    function N(r, t) {
        var e, n = "ean13" === t ? 12 : 7,
            o = r.substring(13, r.length),
            a = 0,
            i = !0;
        for (e = (r = r.substring(0, n)).length - 1; - 1 < e; e--) a += (i ? 3 : 1) * R(r.charAt(e)), i = !i;
        return r + ((10 - a % 10) % 10).toString() + (o ? " " + o : "")
    }
    var W = ["101011", "1101011", "1001011", "1100101", "1011011", "1101101", "1001101", "1010011", "1101001", "110101", "101101"];
    var x = ["101001101101", "110100101011", "101100101011", "110110010101", "101001101011", "110100110101", "101100110101", "101001011011", "110100101101", "101100101101", "110101001011", "101101001011", "110110100101", "101011001011", "110101100101", "101101100101", "101010011011", "110101001101", "101101001101", "101011001101", "110101010011", "101101010011", "110110101001", "101011010011", "110101101001", "101101101001", "101010110011", "110101011001", "101101011001", "101011011001", "110010101011", "100110101011", "110011010101", "100101101011", "110010110101", "100110110101", "100101011011", "110010101101", "100110101101", "100100100101", "100100101001", "100101001001", "101001001001", "100101101101"];
    var C = ["100010100", "101001000", "101000100", "101000010", "100101000", "100100100", "100100010", "101010000", "100010010", "100001010", "110101000", "110100100", "110100010", "110010100", "110010010", "110001010", "101101000", "101100100", "101100010", "100110100", "100011010", "101011000", "101001100", "101000110", "100101100", "100010110", "110110100", "110110010", "110101100", "110100110", "110010110", "110011010", "101101100", "101100110", "100110110", "100111010", "100101110", "111010100", "111010010", "111001010", "101101110", "101110110", "110101110", "100100110", "111011010", "111010110", "100110010", "101011110"];
    var S = ["11011001100", "11001101100", "11001100110", "10010011000", "10010001100", "10001001100", "10011001000", "10011000100", "10001100100", "11001001000", "11001000100", "11000100100", "10110011100", "10011011100", "10011001110", "10111001100", "10011101100", "10011100110", "11001110010", "11001011100", "11001001110", "11011100100", "11001110100", "11101101110", "11101001100", "11100101100", "11100100110", "11101100100", "11100110100", "11100110010", "11011011000", "11011000110", "11000110110", "10100011000", "10001011000", "10001000110", "10110001000", "10001101000", "10001100010", "11010001000", "11000101000", "11000100010", "10110111000", "10110001110", "10001101110", "10111011000", "10111000110", "10001110110", "11101110110", "11010001110", "11000101110", "11011101000", "11011100010", "11011101110", "11101011000", "11101000110", "11100010110", "11101101000", "11101100010", "11100011010", "11101111010", "11001000010", "11110001010", "10100110000", "10100001100", "10010110000", "10010000110", "10000101100", "10000100110", "10110010000", "10110000100", "10011010000", "10011000010", "10000110100", "10000110010", "11000010010", "11001010000", "11110111010", "11000010100", "10001111010", "10100111100", "10010111100", "10010011110", "10111100100", "10011110100", "10011110010", "11110100100", "11110010100", "11110010010", "11011011110", "11011110110", "11110110110", "10101111000", "10100011110", "10001011110", "10111101000", "10111100010", "11110101000", "11110100010", "10111011110", "10111101110", "11101011110", "11110101110", "11010000100", "11010010000", "11010011100", "11000111010"];
    var w = ["101010011", "101011001", "101001011", "110010101", "101101001", "110101001", "100101011", "100101101", "100110101", "110100101", "101001101", "101100101", "1101011011", "1101101011", "1101101101", "1011011011", "1011001001", "1010010011", "1001001011", "1010011001"];
    var I = ["100100100100", "100100100110", "100100110100", "100100110110", "100110100100", "100110100110", "100110110100", "100110110110", "110100100100", "110100100110"];

    function y(r, t) { return "object" == typeof t ? ("mod10" === t.crc1 ? r = e(r) : "mod11" === t.crc1 && (r = n(r)), "mod10" === t.crc2 ? r = e(r) : "mod11" === t.crc2 && (r = n(r))) : "boolean" == typeof t && t && (r = e(r)), r }

    function e(r) {
        var t, e, n = r.length % 2,
            o = 0,
            a = 0;
        for (t = 0; t < r.length; t++) n ? o = 10 * o + R(r.charAt(t)) : a += R(r.charAt(t)), n = !n;
        for (e = (2 * o).toString(), t = 0; t < e.length; t++) a += R(e.charAt(t));
        return r + ((10 - a % 10) % 10).toString()
    }

    function n(r) {
        var t, e = 0,
            n = 2;
        for (t = r.length - 1; 0 <= t; t--) e += n * R(r.charAt(t)), n = 7 === n ? 2 : n + 1;
        return r + ((11 - e % 11) % 11).toString()
    }
    var H = function() {
        var N = [10, 12, 14, 16, 18, 20, 22, 24, 26, 32, 36, 40, 44, 48, 52, 64, 72, 80, 88, 96, 104, 120, 132, 144, 8, 8, 12, 12, 16, 16],
            W = [10, 12, 14, 16, 18, 20, 22, 24, 26, 32, 36, 40, 44, 48, 52, 64, 72, 80, 88, 96, 104, 120, 132, 144, 18, 32, 26, 36, 36, 48],
            x = [3, 5, 8, 12, 18, 22, 30, 36, 44, 62, 86, 114, 144, 174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558, 5, 10, 16, 22, 32, 49],
            C = [5, 7, 10, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 68, 84, 112, 144, 192, 224, 272, 336, 408, 496, 620, 7, 11, 14, 18, 24, 28],
            S = [8, 10, 12, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 18, 20, 22, 6, 6, 10, 10, 14, 14],
            w = [8, 10, 12, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 14, 16, 18, 20, 22, 24, 18, 20, 22, 16, 14, 24, 16, 16, 22],
            I = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 6, 6, 6, 1, 1, 1, 1, 1, 1],
            y = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 6, 6, 6, 1, 2, 1, 2, 2, 2],
            H = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 4, 4, 6, 6, 8, 8, 1, 1, 1, 1, 1, 1],
            R = [-255, 255, 1, 240, 2, 225, 241, 53, 3, 38, 226, 133, 242, 43, 54, 210, 4, 195, 39, 114, 227, 106, 134, 28, 243, 140, 44, 23, 55, 118, 211, 234, 5, 219, 196, 96, 40, 222, 115, 103, 228, 78, 107, 125, 135, 8, 29, 162, 244, 186, 141, 180, 45, 99, 24, 49, 56, 13, 119, 153, 212, 199, 235, 91, 6, 76, 220, 217, 197, 11, 97, 184, 41, 36, 223, 253, 116, 138, 104, 193, 229, 86, 79, 171, 108, 165, 126, 145, 136, 34, 9, 74, 30, 32, 163, 84, 245, 173, 187, 204, 142, 81, 181, 190, 46, 88, 100, 159, 25, 231, 50, 207, 57, 147, 14, 67, 120, 128, 154, 248, 213, 167, 200, 63, 236, 110, 92, 176, 7, 161, 77, 124, 221, 102, 218, 95, 198, 90, 12, 152, 98, 48, 185, 179, 42, 209, 37, 132, 224, 52, 254, 239, 117, 233, 139, 22, 105, 27, 194, 113, 230, 206, 87, 158, 80, 189, 172, 203, 109, 175, 166, 62, 127, 247, 146, 66, 137, 192, 35, 252, 10, 183, 75, 216, 31, 83, 33, 73, 164, 144, 85, 170, 246, 65, 174, 61, 188, 202, 205, 157, 143, 169, 82, 72, 182, 215, 191, 251, 47, 178, 89, 151, 101, 94, 160, 123, 26, 112, 232, 21, 51, 238, 208, 131, 58, 69, 148, 18, 15, 16, 68, 17, 121, 149, 129, 19, 155, 59, 249, 70, 214, 250, 168, 71, 201, 156, 64, 60, 237, 130, 111, 20, 93, 122, 177, 150],
            z = [1, 2, 4, 8, 16, 32, 64, 128, 45, 90, 180, 69, 138, 57, 114, 228, 229, 231, 227, 235, 251, 219, 155, 27, 54, 108, 216, 157, 23, 46, 92, 184, 93, 186, 89, 178, 73, 146, 9, 18, 36, 72, 144, 13, 26, 52, 104, 208, 141, 55, 110, 220, 149, 7, 14, 28, 56, 112, 224, 237, 247, 195, 171, 123, 246, 193, 175, 115, 230, 225, 239, 243, 203, 187, 91, 182, 65, 130, 41, 82, 164, 101, 202, 185, 95, 190, 81, 162, 105, 210, 137, 63, 126, 252, 213, 135, 35, 70, 140, 53, 106, 212, 133, 39, 78, 156, 21, 42, 84, 168, 125, 250, 217, 159, 19, 38, 76, 152, 29, 58, 116, 232, 253, 215, 131, 43, 86, 172, 117, 234, 249, 223, 147, 11, 22, 44, 88, 176, 77, 154, 25, 50, 100, 200, 189, 87, 174, 113, 226, 233, 255, 211, 139, 59, 118, 236, 245, 199, 163, 107, 214, 129, 47, 94, 188, 85, 170, 121, 242, 201, 191, 83, 166, 97, 194, 169, 127, 254, 209, 143, 51, 102, 204, 181, 71, 142, 49, 98, 196, 165, 103, 206, 177, 79, 158, 17, 34, 68, 136, 61, 122, 244, 197, 167, 99, 198, 161, 111, 222, 145, 15, 30, 60, 120, 240, 205, 183, 67, 134, 33, 66, 132, 37, 74, 148, 5, 10, 20, 40, 80, 160, 109, 218, 153, 31, 62, 124, 248, 221, 151, 3, 6, 12, 24, 48, 96, 192, 173, 119, 238, 241, 207, 179, 75, 150, 1];

        function O(r, t) { return r ^ t }

        function k(r) { var t, e = []; for (t = 0; t < 8; t++) e[t] = r & 128 >> t ? 1 : 0; return e }

        function F(r, t, e, n, o, a, i) {
            var c = X;
            c(r, t, e[0], n - 2, o - 2, a, i), c(r, t, e[1], n - 2, o - 1, a, i), c(r, t, e[2], n - 1, o - 2, a, i), c(r, t, e[3], n - 1, o - 1, a, i), c(r, t, e[4], n - 1, o, a, i), c(r, t, e[5], n, o - 2, a, i), c(r, t, e[6], n, o - 1, a, i), c(r, t, e[7], n, o, a, i)
        }

        function X(r, t, e, n, o, a, i) { n < 0 && (n += a, o += 4 - (a + 4) % 8), o < 0 && (o += i, n += 4 - (i + 4) % 8), 1 !== t[n][o] && (r[n][o] = e, t[n][o] = 1) }
        return function(r, t) {
            var e, n = function(r) {
                    var t, e, n = [],
                        o = 0;
                    for (t = 0; t < r.length; t++) 127 < (e = r.charCodeAt(t)) ? (n[o] = 235, e -= 127, o++) : 48 <= e && e <= 57 && t + 1 < r.length && 48 <= r.charCodeAt(t + 1) && r.charCodeAt(t + 1) <= 57 ? (e = 10 * (e - 48) + (r.charCodeAt(t + 1) - 48), e += 130, t++) : e++, n[o] = e, o++;
                    return n
                }(r),
                o = n.length,
                a = function(r, t) { var e = 0; if ((r < 1 || 1558 < r) && !t) return -1; if ((r < 1 || 49 < r) && t) return -1; for (t && (e = 24); x[e] < r;) e++; return e }(o, t),
                i = x[a],
                c = C[a],
                f = i + c,
                h = I[a],
                l = y[a],
                u = S[a],
                g = w[a],
                s = N[a] - 2 * h,
                d = W[a] - 2 * l,
                v = H[a],
                A = c / v,
                p = [],
                b = [],
                m = [];
            for (function(r, t, e) {
                    var n, o;
                    if (!(e <= t))
                        for (r[t] = 129, o = t + 1; o < e; o++) n = 149 * (o + 1) % 253 + 1, r[o] = (129 + n) % 254
                }(n, o, i), function(r, t, e, n, o) {
                    var a, i, c, f, h, l = 0,
                        u = r / o,
                        g = [];
                    for (c = 0; c < o; c++) {
                        for (a = 0; a < u; a++) g[a] = 0;
                        for (a = c; a < e; a += o)
                            for (l = O(n[a], g[u - 1]), i = u - 1; 0 <= i; i--) g[i] = l ? (f = l, h = t[i], f && h ? z[(R[f] + R[h]) % 255] : 0) : 0, 0 < i && (g[i] = O(g[i - 1], g[i]));
                        for (i = e + c, a = u - 1; 0 <= a; a--) n[i] = g[a], i += o
                    }
                }(c, function(r) {
                    var t, e, n, o, a = [];
                    for (t = 0; t <= r; t++) a[t] = 1;
                    for (t = 1; t <= r; t++)
                        for (e = t - 1; 0 <= e; e--) a[e] = (n = a[e], o = t, n ? o ? z[(R[n] + o) % 255] : n : 0), 0 < e && (a[e] = O(a[e], a[e - 1]));
                    return a
                }(A), i, n, v), e = 0; e < f; e++) p[e] = k(n[e]);
            for (e = 0; e < d; e++) b[e] = [], m[e] = [];
            return s * d % 8 == 4 && (b[s - 2][d - 2] = 1, b[s - 1][d - 1] = 1, b[s - 1][d - 2] = 0, b[s - 2][d - 1] = 0, m[s - 2][d - 2] = 1, m[s - 1][d - 1] = 1, m[s - 1][d - 2] = 1, m[s - 2][d - 1] = 1),
                function(r, t, e, n, o, a) {
                    var i = 0,
                        c = 4,
                        f = 0;
                    do {
                        for (c !== t || f ? r < 3 && c === t - 2 && !f && e % 4 ? (y = o, H = a, R = n[i], z = t, O = e, k = void 0, (k = X)(y, H, R[0], z - 3, 0, z, O), k(y, H, R[1], z - 2, 0, z, O), k(y, H, R[2], z - 1, 0, z, O), k(y, H, R[3], 0, O - 4, z, O), k(y, H, R[4], 0, O - 3, z, O), k(y, H, R[5], 0, O - 2, z, O), k(y, H, R[6], 0, O - 1, z, O), k(y, H, R[7], 1, O - 1, z, O), i++) : c !== t - 2 || f || e % 8 != 4 ? c === t + 4 && 2 === f && e % 8 == 0 && (W = o, x = a, C = n[i], S = t, w = e, I = void 0, (I = X)(W, x, C[0], S - 1, 0, S, w), I(W, x, C[1], S - 1, w - 1, S, w), I(W, x, C[2], 0, w - 3, S, w), I(W, x, C[3], 0, w - 2, S, w), I(W, x, C[4], 0, w - 1, S, w), I(W, x, C[5], 1, w - 3, S, w), I(W, x, C[6], 1, w - 2, S, w), I(W, x, C[7], 1, w - 1, S, w), i++) : (v = o, A = a, p = n[i], b = t, m = e, N = void 0, (N = X)(v, A, p[0], b - 3, 0, b, m), N(v, A, p[1], b - 2, 0, b, m), N(v, A, p[2], b - 1, 0, b, m), N(v, A, p[3], 0, m - 2, b, m), N(v, A, p[4], 0, m - 1, b, m), N(v, A, p[5], 1, m - 1, b, m), N(v, A, p[6], 2, m - 1, b, m), N(v, A, p[7], 3, m - 1, b, m), i++) : (h = o, l = a, u = n[i], g = t, s = e, d = void 0, (d = X)(h, l, u[0], g - 1, 0, g, s), d(h, l, u[1], g - 1, 1, g, s), d(h, l, u[2], g - 1, 2, g, s), d(h, l, u[3], 0, s - 2, g, s), d(h, l, u[4], 0, s - 1, g, s), d(h, l, u[5], 1, s - 1, g, s), d(h, l, u[6], 2, s - 1, g, s), d(h, l, u[7], 3, s - 1, g, s), i++); c < t && 0 <= f && 1 !== a[c][f] && (F(o, a, n[i], c, f, t, e), i++), f += 2, 0 <= (c -= 2) && f < e;);
                        for (c += 1, f += 3; 0 <= c && f < e && 1 !== a[c][f] && (F(o, a, n[i], c, f, t, e), i++), f -= 2, (c += 2) < t && 0 <= f;);
                        c += 3, f += 1
                    } while (c < t || f < e);
                    var h, l, u, g, s, d;
                    var v, A, p, b, m, N;
                    var W, x, C, S, w, I;
                    var y, H, R, z, O, k
                }(0, s, d, p, b, m), b = function(r, t, e, n, o) {
                    var a, i, c = (n + 2) * t,
                        f = (o + 2) * e,
                        h = [];
                    for (h[0] = [], i = 0; i < f + 2; i++) h[0][i] = 0;
                    for (a = 0; a < c; a++)
                        for (h[a + 1] = [], h[a + 1][0] = 0, i = h[a + 1][f + 1] = 0; i < f; i++) h[a + 1][i + 1] = a % (n + 2) == 0 ? i % 2 ? 0 : 1 : a % (n + 2) === n + 1 ? 1 : i % (o + 2) === o + 1 ? a % 2 ? 1 : 0 : i % (o + 2) == 0 ? 1 : (h[a + 1][i + 1] = 0, r[a - 1 - 2 * parseInt(a / (n + 2), 10)][i - 1 - 2 * parseInt(i / (o + 2), 10)]);
                    for (h[c + 1] = [], i = 0; i < f + 2; i++) h[c + 1][i] = 0;
                    return h
                }(b, h, l, u, g)
        }
    }();

    function R(r) { var t = typeof r; return "string" === t ? (r = r.replace(/[^0-9-.]/g, ""), r = parseInt(1 * r, 10), isNaN(r) || !isFinite(r) ? 0 : r) : "number" === t && isFinite(r) ? Math.floor(r) : 0 }

    function z(r, t) { var e, n = ""; for (e = 0; e < t; e++) n += String.fromCharCode(255 & r), r >>= 8; return n }

    function O(r, t, e) { return String.fromCharCode(e) + String.fromCharCode(t) + String.fromCharCode(r) }

    function k(r) {
        var t = parseInt("0x" + r.substr(1), 16),
            e = 255 & t;
        return O((t >>= 8) >> 8, 255 & t, e)
    }

    function F(r) { return r.match(/#[0-91-F]/gi) }

    function X(r) { for (var t, e, n, o, a, i, c, f = "", h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", l = 0; l < r.length;) o = (t = r.charCodeAt(l++)) >> 2, a = (3 & t) << 4 | (e = r.charCodeAt(l++)) >> 4, i = (15 & e) << 2 | (n = r.charCodeAt(l++)) >> 6, c = 63 & n, isNaN(e) ? i = c = 64 : isNaN(n) && (c = 64), f += h.charAt(o) + h.charAt(a) + h.charAt(i) + h.charAt(c); return f }

    function f(r) { var t, e = []; for (e[0] = [], t = 0; t < r.length; t++) e[0][t] = parseInt(r.charAt(t), 10); return e }

    function Y(r, t) { return r.css("padding", "0").css("overflow", "auto").css("width", t + "px").html(""), r }

    function i(r, t, e, n, o, a) {
        var i, c, f, h, l, u, g, s, d, v = e.length,
            A = e[0].length,
            p = F(t.bgColor) ? k(t.bgColor) : O(255, 255, 255),
            b = F(t.color) ? k(t.color) : O(0, 0, 0),
            m = "",
            N = "",
            W = "";
        for (i = 0; i < o; i++) m += p, N += b;
        for (u = (o * A + (l = (4 - o * A * 3 % 4) % 4)) * a * v, i = 0; i < l; i++) W += "\0";
        for (g = "BM" + z(54 + u, 4) + "\0\0\0\0" + z(54, 4) + z(40, 4) + z(o * A, 4) + z(a * v, 4) + z(1, 2) + z(24, 2) + "\0\0\0\0" + z(u, 4) + z(2835, 4) + z(2835, 4) + z(0, 4) + z(0, 4), c = v - 1; 0 <= c; c--) { for (s = "", f = 0; f < A; f++) s += e[c][f] ? N : m; for (s += W, h = 0; h < a; h++) g += s }(d = document.createElement("object")).setAttribute("type", "image/bmp"), d.setAttribute("data", "data:image/bmp;base64," + X(g)), Y(r, o * A + l).append(d)
    }

    function c(r, t, e, n, o, a) {
        var i, c, f, h, l = e.length,
            u = e[0].length,
            g = "",
            s = '<div style="float: left; font-size: 0; background-color: ' + t.bgColor + "; height: " + a + 'px; width: &Wpx"></div>',
            d = '<div style="float: left; font-size: 0; width:0; border-left: &Wpx solid ' + t.color + "; height: " + a + 'px;"></div>';
        for (c = 0; c < l; c++) {
            for (f = 0, h = e[c][0], i = 0; i < u; i++) h === e[c][i] ? f++ : (g += (h ? d : s).replace("&W", f * o), h = e[c][i], f = 1);
            0 < f && (g += (h ? d : s).replace("&W", f * o))
        }
        t.showHRI && (g += '<div style="clear:both; width: 100%; background-color: ' + t.bgColor + "; color: " + t.color + "; text-align: center; font-size: " + t.fontSize + "px; margin-top: " + t.marginHRI + 'px;">' + n + "</div>"), Y(r, o * u).html(g)
    }

    function l(r, t, e, n, o, a) {
        var i, c, f, h, l, u, g, s, d = e.length,
            v = e[0].length,
            A = o * v,
            p = a * d;
        for (t.showHRI && (f = R(t.fontSize), p += R(t.marginHRI) + f), h = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + A + '" height="' + p + '">', h += '<rect width="' + A + '" height="' + p + '" x="0" y="0" fill="' + t.bgColor + '" />', l = '<rect width="&W" height="' + a + '" x="&X" y="&Y" fill="' + t.color + '" />', c = 0; c < d; c++) {
            for (u = 0, g = e[c][0], i = 0; i < v; i++) g === e[c][i] ? u++ : (g && (h += l.replace("&W", u * o).replace("&X", (i - u) * o).replace("&Y", c * a)), g = e[c][i], u = 1);
            u && g && (h += l.replace("&W", u * o).replace("&X", (v - u) * o).replace("&Y", c * a))
        }
        t.showHRI && (h += '<g transform="translate(' + Math.floor(A / 2) + ' 0)">', h += '<text y="' + (p - Math.floor(f / 2)) + '" text-anchor="middle" style="font-family: Arial; font-size: ' + f + 'px;" fill="' + t.color + '">' + n + "</text>", h += "</g>"), h += "</svg>", (s = document.createElement("img")).setAttribute("src", "data:image/svg+xml;base64," + X(h)), Y(r, A).append(s)
    }

    function u(r, t, e, n, o, a, i, c) {
        var f, h, l, u, g, s, d = r.get(0),
            v = e.length,
            A = e[0].length;
        if (d && d.getContext) {
            for ((l = d.getContext("2d")).lineWidth = 1, l.lineCap = "butt", l.fillStyle = t.bgColor, l.fillRect(o, a, A * i, v * c), l.fillStyle = t.color, h = 0; h < v; h++) {
                for (u = 0, g = e[h][0], f = 0; f < A; f++) g === e[h][f] ? u++ : (g && l.fillRect(o + (f - u) * i, a + h * c, i * u, c), g = e[h][f], u = 1);
                u && g && l.fillRect(o + (A - u) * i, a + h * c, i * u, c)
            }
            t.showHRI && (s = l.measureText(n), l.fillText(n, o + Math.floor((A * i - s.width) / 2), a + v * c + t.fontSize + t.marginHRI))
        }
    }
    var M = {
        bmp: function(r, t, e, n) {
            var o = R(t.barWidth),
                a = R(t.barHeight);
            i(r, t, f(e), 0, o, a)
        },
        bmp2: function(r, t, e, n) {
            var o = R(t.moduleSize);
            i(r, t, e, 0, o, o)
        },
        css: function(r, t, e, n) {
            var o = R(t.barWidth),
                a = R(t.barHeight);
            c(r, t, f(e), n, o, a)
        },
        css2: function(r, t, e, n) {
            var o = R(t.moduleSize);
            c(r, t, e, n, o, o)
        },
        svg: function(r, t, e, n) {
            var o = R(t.barWidth),
                a = R(t.barHeight);
            l(r, t, f(e), n, o, a)
        },
        svg2: function(r, t, e, n) {
            var o = R(t.moduleSize);
            l(r, t, e, n, o, o)
        },
        canvas: function(r, t, e, n) {
            var o = R(t.barWidth),
                a = R(t.barHeight),
                i = R(t.posX),
                c = R(t.posY);
            u(r, t, f(e), n, i, c, o, a)
        },
        canvas2: function(r, t, e, n) {
            var o = R(t.moduleSize);
            u(r, t, e, n, R(t.posX), R(t.posY), o, o)
        }
    };
    g.fn.barcode = function(r, t, e) {
        var n, o, a, i, c, f, h = "",
            l = "",
            u = !1;
        if (n = (r = g.extend({ crc: !0, rect: !1 }, "object" == typeof r ? r : { code: r })).code, o = r.crc, a = r.rect, n) {
            switch (e = g.extend(!0, s, e), t) {
                case "std25":
                case "int25":
                    h = d(n, o, t), l = d(n, o, t);
                    break;
                case "ean8":
                case "ean13":
                    h = m(n, t), l = N(n, t);
                    break;
                case "upc":
                    (f = n).length < 12 && (f = "0" + f), h = m(f, "ean13"), (c = n).length < 12 && (c = "0" + c), l = N(c, "ean13").substr(1);
                    break;
                case "code11":
                    h = function(r) {
                        var t, e, n, o, a, i, c, f, h = "0123456789-",
                            l = "10110010";
                        for (n = 0; n < r.length; n++) {
                            if ((o = h.indexOf(r.charAt(n))) < 0) return "";
                            l += W[o] + "0"
                        }
                        for (c = 1, f = i = a = 0, n = r.length - 1; 0 <= n; n--) c = 10 === c ? 1 : c + 1, i += (a = 10 === a ? 1 : a + 1) * (o = h.indexOf(r.charAt(n))), f += c * o;
                        return e = (f += t = i % 11) % 11, l += W[t] + "0", 10 <= r.length && (l += W[e] + "0"), l += "1011001"
                    }(n), l = n;
                    break;
                case "code39":
                    h = function(r) {
                        var t, e, n = "";
                        if (0 <= r.indexOf("*")) return "";
                        for (r = ("*" + r + "*").toUpperCase(), t = 0; t < r.length; t++) {
                            if ((e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*".indexOf(r.charAt(t))) < 0) return "";
                            0 < t && (n += "0"), n += x[e]
                        }
                        return n
                    }(n), l = n;
                    break;
                case "code93":
                    h = function(r, t) {
                        var e, n, o, a, i, c, f, h = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%____*",
                            l = "";
                        if (0 <= r.indexOf("*")) return "";
                        for (r = r.toUpperCase(), l += C[47], n = 0; n < r.length; n++) {
                            if (e = r.charAt(n), o = h.indexOf(e), "_" === e || o < 0) return "";
                            l += C[o]
                        }
                        if (t) {
                            for (c = 1, f = i = a = 0, n = r.length - 1; 0 <= n; n--) c = 15 === c ? 1 : c + 1, i += (a = 20 === a ? 1 : a + 1) * (o = h.indexOf(r.charAt(n))), f += c * o;
                            l += C[e = i % 47], l += C[(f += e) % 47]
                        }
                        return l += C[47], l += "1"
                    }(n, o), l = n;
                    break;
                case "code128":
                    h = function(r) {
                        var t, e, n, o, a, i = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
                            c = 0,
                            f = 0,
                            h = 0;
                        for (t = 0; t < r.length; t++)
                            if (-1 === i.indexOf(r.charAt(t))) return "";
                        for (n = 1 < r.length, t = 0; t < 3 && t < r.length; t++) e = r.charAt(t), n = n && "0" <= e && e <= "9";
                        for (o = S[a = n ? 105 : 104], t = 0; t < r.length;) {
                            if (n)(t === r.length || r.charAt(t) < "0" || "9" < r.charAt(t) || r.charAt(t + 1) < "0" || "9" < r.charAt(t + 1)) && (n = !1, o += S[100], a += 100 * ++c);
                            else {
                                for (f = 0; t + f < r.length && "0" <= r.charAt(t + f) && r.charAt(t + f) <= "9";) f++;
                                (n = 5 < f || t + f - 1 === r.length && 3 < f) && (o += S[99], a += 99 * ++c)
                            }
                            n ? (h = R(r.charAt(t) + r.charAt(t + 1)), t += 2) : (h = i.indexOf(r.charAt(t)), t += 1), o += S[h], a += ++c * h
                        }
                        return o += S[a % 103], o += S[106], o += "11"
                    }(n), l = n;
                    break;
                case "codabar":
                    h = function(r) {
                        var t, e, n;
                        for (n = w[16] + "0", t = 0; t < r.length; t++) {
                            if ((e = "0123456789-$:/.+".indexOf(r.charAt(t))) < 0) return "";
                            n += w[e] + "0"
                        }
                        return n += w[16]
                    }(n), l = n;
                    break;
                case "msi":
                    h = function(r) {
                        var t, e = 0,
                            n = "110";
                        for (r = y(r, !1), t = 0; t < r.length; t++) {
                            if ((e = "0123456789".indexOf(r.charAt(t))) < 0) return "";
                            n += I[e]
                        }
                        return n += "1001"
                    }(n), l = y(n, o);
                    break;
                case "datamatrix":
                    h = H(n, a), l = n, u = !0
            }
            h.length && (!u && e.addQuietZone && (h = "0000000000" + h + "0000000000"), (i = M[e.output + (u ? "2" : "")]) && this.each(function() { i(g(this), e, h, l) }))
        }
        return this
    }
}(jQuery);

function uploadCanvasData(imageId) {
    var canvas = $(imageId).get(0);
    var dataUrl = canvas.toDataURL();
    var blob = dataURItoBlob(dataUrl);

    return blob
}

function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    var bb = new Blob([ab], { "type": mimeString });
    return bb;
}

function printCanvas(canvas, url) {
    var form = new FormData();
    const fileInput = canvas
    const blob = uploadCanvasData(canvas)
    console.log(blob)
    form.append("image", blob, "image")

    var settings = {
        "url": url,
        // "dataType": "jsonp",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form,
    };

    $.ajax(settings);
}

function drawBarcode(elementById, barcodeData, ratio = 3) {
    $(elementById).barcode(barcodeData, "ean13", {
        barWidth: ratio,
        barHeight: ratio * 50,
        fontSize: ratio * 10,
    })
}

function elementPrint(elementById, url) {
    html2canvas(document.querySelector(elementById)).then(canvas => {
        printCanvas(canvas, url)
    });
}