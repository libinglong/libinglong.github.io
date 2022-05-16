!function () {
    "use strict";

    function n() {
        const n = document.getElementById("anchor-rewrite"), o = window.location.hash.substr(1);
        n && o && function (n, o) {
            const e = [n];
            for (console.debug(n); o[n];) {
                if (n = o[n], e.includes(n)) return void console.error("Skipping circular anchor update");
                e.push(n)
            }
            window.location.hash = n
        }(o, JSON.parse(n.innerHTML))
    }

    window.addEventListener("load", n), window.addEventListener("hashchange", n)
}();
!function () {
    var t = function (t, n, e) {
        if ("function" != typeof t) throw new TypeError("Expected a function");
        return setTimeout((function () {
            t.apply(void 0, e)
        }), n)
    };
    var n = function (t) {
        return t
    };
    var e = function (t, n, e) {
        switch (e.length) {
            case 0:
                return t.call(n);
            case 1:
                return t.call(n, e[0]);
            case 2:
                return t.call(n, e[0], e[1]);
            case 3:
                return t.call(n, e[0], e[1], e[2])
        }
        return t.apply(n, e)
    }, r = Math.max;
    var o = function (t, n, o) {
        return n = r(void 0 === n ? t.length - 1 : n, 0), function () {
            for (var c = arguments, i = -1, u = r(c.length - n, 0), a = Array(u); ++i < u;) a[i] = c[n + i];
            i = -1;
            for (var l = Array(n + 1); ++i < n;) l[i] = c[i];
            return l[n] = o(a), e(t, this, l)
        }
    };
    var c = function (t) {
        return function () {
            return t
        }
    }, i = {};
    (function (t) {
        (function () {
            var n = "object" == typeof t && t && t.Object === Object && t;
            i = n
        }).call(this)
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    var u = "object" == typeof self && self && self.Object === Object && self, a = i || u || Function("return this")(),
        l = a.Symbol, f = Object.prototype, s = f.hasOwnProperty, d = f.toString, p = l ? l.toStringTag : void 0;
    var v = function (t) {
        var n = s.call(t, p), e = t[p];
        try {
            t[p] = void 0;
            var r = !0
        } catch (t) {
        }
        var o = d.call(t);
        return r && (n ? t[p] = e : delete t[p]), o
    }, b = Object.prototype.toString;
    var y = function (t) {
        return b.call(t)
    }, h = l ? l.toStringTag : void 0;
    var g = function (t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : h && h in Object(t) ? v(t) : y(t)
    };
    var m = function (t) {
        var n = typeof t;
        return null != t && ("object" == n || "function" == n)
    };
    var j, w = function (t) {
            if (!m(t)) return !1;
            var n = g(t);
            return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n
        }, O = a["__core-js_shared__"],
        S = (j = /[^.]+$/.exec(O && O.keys && O.keys.IE_PROTO || "")) ? "Symbol(src)_1." + j : "";
    var x = function (t) {
        return !!S && S in t
    }, E = Function.prototype.toString;
    var L = function (t) {
            if (null != t) {
                try {
                    return E.call(t)
                } catch (t) {
                }
                try {
                    return t + ""
                } catch (t) {
                }
            }
            return ""
        }, N = /^\[object .+?Constructor\]$/, C = Function.prototype, T = Object.prototype, $ = C.toString,
        _ = T.hasOwnProperty,
        k = RegExp("^" + $.call(_).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var q = function (t) {
        return !(!m(t) || x(t)) && (w(t) ? k : N).test(L(t))
    };
    var A = function (t, n) {
        return null == t ? void 0 : t[n]
    };
    var F = function (t, n) {
        var e = A(t, n);
        return q(e) ? e : void 0
    }, P = function () {
        try {
            var t = F(Object, "defineProperty");
            return t({}, "", {}), t
        } catch (t) {
        }
    }(), I = P ? function (t, n) {
        return P(t, "toString", {configurable: !0, enumerable: !1, value: c(n), writable: !0})
    } : n, R = Date.now;
    var D = function (t) {
        var n = 0, e = 0;
        return function () {
            var r = R(), o = 16 - (r - e);
            if (e = r, o > 0) {
                if (++n >= 800) return arguments[0]
            } else n = 0;
            return t.apply(void 0, arguments)
        }
    }(I);
    var G = /\s/;
    var M = function (t) {
        for (var n = t.length; n-- && G.test(t.charAt(n));) ;
        return n
    }, U = /^\s+/;
    var z = function (t) {
        return t ? t.slice(0, M(t) + 1).replace(U, "") : t
    };
    var B = function (t) {
        return null != t && "object" == typeof t
    };
    var H = function (t) {
        return "symbol" == typeof t || B(t) && "[object Symbol]" == g(t)
    }, J = /^[-+]0x[0-9a-f]+$/i, K = /^0b[01]+$/i, Q = /^0o[0-7]+$/i, V = parseInt;
    var W = function (t) {
        if ("number" == typeof t) return t;
        if (H(t)) return NaN;
        if (m(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = m(n) ? n + "" : n
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = z(t);
        var e = K.test(t);
        return e || Q.test(t) ? V(t.slice(2), e ? 2 : 8) : J.test(t) ? NaN : +t
    }, X = function (t, e) {
        return D(o(t, e, n), t + "")
    }((function (n, e, r) {
        return t(n, W(e) || 0, r)
    }));
    !function () {
        "use strict";

        function t(t) {
            const e = t.querySelector("code").cloneNode(!0);
            for (const t of e.querySelectorAll(".hide-when-unfolded")) t.parentNode.removeChild(t);
            const r = e.innerText;
            r && window.navigator.clipboard.writeText(r + "\n").then(n.bind(this))
        }

        function n() {
            this.classList.add("clicked")
        }

        function e() {
            this.classList.remove("clicked")
        }

        function r(t) {
            const n = t.querySelector("code"), e = !n.classList.contains("unfolded");
            n.classList.remove(e ? "folding" : "unfolding"), n.classList.add(e ? "unfolding" : "folding"), X((function () {
                n.classList.remove(e ? "unfolding" : "folding"), n.classList.toggle("unfolded")
            }), 1100), o(this, !e)
        }

        function o(t, n) {
            const e = n ? "Expanded folded text" : "Collapse foldable text";
            t.classList.remove(n ? "fold-button" : "unfold-button"), t.classList.add(n ? "unfold-button" : "fold-button"), t.querySelector("span.label").innerText = e, t.title = e
        }

        !function () {
            for (const t of document.querySelectorAll(".doc pre.highlight")) {
                const e = document.createElement("div");
                e.className = "codetools", n(t, e) && t.appendChild(e)
            }

            function n(n, i) {
                let u = 0;
                return function (t) {
                    return !!t.querySelector("span.hide-when-folded")
                }(n) && (!function (t, n) {
                    const e = c();
                    o(e, !0), e.addEventListener("click", r.bind(e, t)), n.appendChild(e)
                }(n, i), u++), window.navigator.clipboard && (!function (n, r) {
                    const o = c("Copy to clipboard", "copy-button");
                    o.addEventListener("click", t.bind(o, n)), o.addEventListener("mouseleave", e.bind(o)), o.addEventListener("blur", e.bind(o));
                    const i = document.createElement("span");
                    o.appendChild(i), i.className = "copied", r.appendChild(o)
                }(n, i), u++), u > 0
            }

            function c(t, n) {
                const e = document.createElement("button");
                e.className = n, e.title = t, e.type = "button";
                const r = document.createElement("span");
                return r.appendChild(document.createTextNode(t)), r.className = "label", e.appendChild(r), e
            }
        }()
    }()
}();
!function () {
    function e(n) {
        return n instanceof Map ? n.clear = n.delete = n.set = function () {
            throw new Error("map is read-only")
        } : n instanceof Set && (n.add = n.clear = n.delete = function () {
            throw new Error("set is read-only")
        }), Object.freeze(n), Object.getOwnPropertyNames(n).forEach((function (t) {
            var a = n[t];
            "object" != typeof a || Object.isFrozen(a) || e(a)
        })), n
    }

    var n = e, t = e;
    n.default = t;

    class a {
        constructor(e) {
            void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
        }

        ignoreMatch() {
            this.isMatchIgnored = !0
        }
    }

    function i(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function r(e, ...n) {
        const t = Object.create(null);
        for (const n in e) t[n] = e[n];
        return n.forEach((function (e) {
            for (const n in e) t[n] = e[n]
        })), t
    }

    const s = e => !!e.kind;

    class o {
        constructor(e, n) {
            this.buffer = "", this.classPrefix = n.classPrefix, e.walk(this)
        }

        addText(e) {
            this.buffer += i(e)
        }

        openNode(e) {
            if (!s(e)) return;
            let n = e.kind;
            e.sublanguage || (n = `${this.classPrefix}${n}`), this.span(n)
        }

        closeNode(e) {
            s(e) && (this.buffer += "</span>")
        }

        value() {
            return this.buffer
        }

        span(e) {
            this.buffer += `<span class="${e}">`
        }
    }

    class l {
        constructor() {
            this.rootNode = {children: []}, this.stack = [this.rootNode]
        }

        get top() {
            return this.stack[this.stack.length - 1]
        }

        get root() {
            return this.rootNode
        }

        add(e) {
            this.top.children.push(e)
        }

        openNode(e) {
            const n = {kind: e, children: []};
            this.add(n), this.stack.push(n)
        }

        closeNode() {
            if (this.stack.length > 1) return this.stack.pop()
        }

        closeAllNodes() {
            for (; this.closeNode();) ;
        }

        toJSON() {
            return JSON.stringify(this.rootNode, null, 4)
        }

        walk(e) {
            return this.constructor._walk(e, this.rootNode)
        }

        static _walk(e, n) {
            return "string" == typeof n ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((n => this._walk(e, n))), e.closeNode(n)), e
        }

        static _collapse(e) {
            "string" != typeof e && e.children && (e.children.every((e => "string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e => {
                l._collapse(e)
            })))
        }
    }

    class c extends l {
        constructor(e) {
            super(), this.options = e
        }

        addKeyword(e, n) {
            "" !== e && (this.openNode(n), this.addText(e), this.closeNode())
        }

        addText(e) {
            "" !== e && this.add(e)
        }

        addSublanguage(e, n) {
            const t = e.root;
            t.kind = n, t.sublanguage = !0, this.add(t)
        }

        toHTML() {
            return new o(this, this.options).value()
        }

        finalize() {
            return !0
        }
    }

    function g(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    const d = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    const u = "[a-zA-Z]\\w*", b = "[a-zA-Z_]\\w*", m = "\\b\\d+(\\.\\d+)?",
        h = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", f = "\\b(0b[01]+)",
        p = {begin: "\\\\[\\s\\S]", relevance: 0},
        _ = {className: "string", begin: "'", end: "'", illegal: "\\n", contains: [p]},
        E = {className: "string", begin: '"', end: '"', illegal: "\\n", contains: [p]},
        v = {begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},
        N = function (e, n, t = {}) {
            const a = r({className: "comment", begin: e, end: n, contains: []}, t);
            return a.contains.push(v), a.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                relevance: 0
            }), a
        }, y = N("//", "$"), w = N("/\\*", "\\*/"), x = N("#", "$"), O = {className: "number", begin: m, relevance: 0},
        M = {className: "number", begin: h, relevance: 0}, k = {className: "number", begin: f, relevance: 0}, R = {
            className: "number",
            begin: m + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        }, A = {
            begin: /(?=\/[^/\n]*\/)/,
            contains: [{
                className: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [p, {begin: /\[/, end: /\]/, relevance: 0, contains: [p]}]
            }]
        }, S = {className: "title", begin: u, relevance: 0}, T = {className: "title", begin: b, relevance: 0},
        C = {begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0};
    var D = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: /\b\B/,
        IDENT_RE: u,
        UNDERSCORE_IDENT_RE: b,
        NUMBER_RE: m,
        C_NUMBER_RE: h,
        BINARY_NUMBER_RE: f,
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
            const n = /^#![ ]*\//;
            return e.binary && (e.begin = function (...e) {
                return e.map((e => g(e))).join("")
            }(n, /.*\b/, e.binary, /\b.*/)), r({
                className: "meta",
                begin: n,
                end: /$/,
                relevance: 0,
                "on:begin": (e, n) => {
                    0 !== e.index && n.ignoreMatch()
                }
            }, e)
        },
        BACKSLASH_ESCAPE: p,
        APOS_STRING_MODE: _,
        QUOTE_STRING_MODE: E,
        PHRASAL_WORDS_MODE: v,
        COMMENT: N,
        C_LINE_COMMENT_MODE: y,
        C_BLOCK_COMMENT_MODE: w,
        HASH_COMMENT_MODE: x,
        NUMBER_MODE: O,
        C_NUMBER_MODE: M,
        BINARY_NUMBER_MODE: k,
        CSS_NUMBER_MODE: R,
        REGEXP_MODE: A,
        TITLE_MODE: S,
        UNDERSCORE_TITLE_MODE: T,
        METHOD_GUARD: C,
        END_SAME_AS_BEGIN: function (e) {
            return Object.assign(e, {
                "on:begin": (e, n) => {
                    n.data._beginMatch = e[1]
                }, "on:end": (e, n) => {
                    n.data._beginMatch !== e[1] && n.ignoreMatch()
                }
            })
        }
    });

    function L(e, n) {
        "." === e.input[e.index - 1] && n.ignoreMatch()
    }

    function B(e, n) {
        n && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = L, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
    }

    function $(e, n) {
        Array.isArray(e.illegal) && (e.illegal = function (...e) {
            return "(" + e.map((e => g(e))).join("|") + ")"
        }(...e.illegal))
    }

    function I(e, n) {
        if (e.match) {
            if (e.begin || e.end) throw new Error("begin & end are not supported with match");
            e.begin = e.match, delete e.match
        }
    }

    function j(e, n) {
        void 0 === e.relevance && (e.relevance = 1)
    }

    const z = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

    function P(e, n, t = "keyword") {
        const a = {};
        return "string" == typeof e ? i(t, e.split(" ")) : Array.isArray(e) ? i(t, e) : Object.keys(e).forEach((function (t) {
            Object.assign(a, P(e[t], n, t))
        })), a;

        function i(e, t) {
            n && (t = t.map((e => e.toLowerCase()))), t.forEach((function (n) {
                const t = n.split("|");
                a[t[0]] = [e, U(t[0], t[1])]
            }))
        }
    }

    function U(e, n) {
        return n ? Number(n) : function (e) {
            return z.includes(e.toLowerCase())
        }(e) ? 0 : 1
    }

    function K(e, {plugins: n}) {
        function t(n, t) {
            return new RegExp(g(n), "m" + (e.case_insensitive ? "i" : "") + (t ? "g" : ""))
        }

        class a {
            constructor() {
                this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
            }

            addRule(e, n) {
                n.position = this.position++, this.matchIndexes[this.matchAt] = n, this.regexes.push([n, e]), this.matchAt += function (e) {
                    return new RegExp(e.toString() + "|").exec("").length - 1
                }(e) + 1
            }

            compile() {
                0 === this.regexes.length && (this.exec = () => null);
                const e = this.regexes.map((e => e[1]));
                this.matcherRe = t(function (e, n = "|") {
                    let t = 0;
                    return e.map((e => {
                        t += 1;
                        const n = t;
                        let a = g(e), i = "";
                        for (; a.length > 0;) {
                            const e = d.exec(a);
                            if (!e) {
                                i += a;
                                break
                            }
                            i += a.substring(0, e.index), a = a.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? i += "\\" + String(Number(e[1]) + n) : (i += e[0], "(" === e[0] && t++)
                        }
                        return i
                    })).map((e => `(${e})`)).join(n)
                }(e), !0), this.lastIndex = 0
            }

            exec(e) {
                this.matcherRe.lastIndex = this.lastIndex;
                const n = this.matcherRe.exec(e);
                if (!n) return null;
                const t = n.findIndex(((e, n) => n > 0 && void 0 !== e)), a = this.matchIndexes[t];
                return n.splice(0, t), Object.assign(n, a)
            }
        }

        class i {
            constructor() {
                this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
            }

            getMatcher(e) {
                if (this.multiRegexes[e]) return this.multiRegexes[e];
                const n = new a;
                return this.rules.slice(e).forEach((([e, t]) => n.addRule(e, t))), n.compile(), this.multiRegexes[e] = n, n
            }

            resumingScanAtSamePosition() {
                return 0 !== this.regexIndex
            }

            considerAll() {
                this.regexIndex = 0
            }

            addRule(e, n) {
                this.rules.push([e, n]), "begin" === n.type && this.count++
            }

            exec(e) {
                const n = this.getMatcher(this.regexIndex);
                n.lastIndex = this.lastIndex;
                let t = n.exec(e);
                if (this.resumingScanAtSamePosition()) if (t && t.index === this.lastIndex) ; else {
                    const n = this.getMatcher(0);
                    n.lastIndex = this.lastIndex + 1, t = n.exec(e)
                }
                return t && (this.regexIndex += t.position + 1, this.regexIndex === this.count && this.considerAll()), t
            }
        }

        if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
        return e.classNameAliases = r(e.classNameAliases || {}), function n(a, s) {
            const o = a;
            if (a.isCompiled) return o;
            [I].forEach((e => e(a, s))), e.compilerExtensions.forEach((e => e(a, s))), a.__beforeBegin = null, [B, $, j].forEach((e => e(a, s))), a.isCompiled = !0;
            let l = null;
            if ("object" == typeof a.keywords && (l = a.keywords.$pattern, delete a.keywords.$pattern), a.keywords && (a.keywords = P(a.keywords, e.case_insensitive)), a.lexemes && l) throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
            return l = l || a.lexemes || /\w+/, o.keywordPatternRe = t(l, !0), s && (a.begin || (a.begin = /\B|\b/), o.beginRe = t(a.begin), a.endSameAsBegin && (a.end = a.begin), a.end || a.endsWithParent || (a.end = /\B|\b/), a.end && (o.endRe = t(a.end)), o.terminatorEnd = g(a.end) || "", a.endsWithParent && s.terminatorEnd && (o.terminatorEnd += (a.end ? "|" : "") + s.terminatorEnd)), a.illegal && (o.illegalRe = t(a.illegal)), a.contains || (a.contains = []), a.contains = [].concat(...a.contains.map((function (e) {
                return function (e) {
                    e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((function (n) {
                        return r(e, {variants: null}, n)
                    })));
                    if (e.cachedVariants) return e.cachedVariants;
                    if (H(e)) return r(e, {starts: e.starts ? r(e.starts) : null});
                    if (Object.isFrozen(e)) return r(e);
                    return e
                }("self" === e ? a : e)
            }))), a.contains.forEach((function (e) {
                n(e, o)
            })), a.starts && n(a.starts, s), o.matcher = function (e) {
                const n = new i;
                return e.contains.forEach((e => n.addRule(e.begin, {
                    rule: e,
                    type: "begin"
                }))), e.terminatorEnd && n.addRule(e.terminatorEnd, {type: "end"}), e.illegal && n.addRule(e.illegal, {type: "illegal"}), n
            }(o), o
        }(e)
    }

    function H(e) {
        return !!e && (e.endsWithParent || H(e.starts))
    }

    function Z(e) {
        const n = {
            props: ["language", "code", "autodetect"], data: function () {
                return {detectedLanguage: "", unknownLanguage: !1}
            }, computed: {
                className() {
                    return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                }, highlighted() {
                    if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, i(this.code);
                    let n = {};
                    return this.autoDetect ? (n = e.highlightAuto(this.code), this.detectedLanguage = n.language) : (n = e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), n.value
                }, autoDetect() {
                    return !this.language || (e = this.autodetect, Boolean(e || "" === e));
                    var e
                }, ignoreIllegals: () => !0
            }, render(e) {
                return e("pre", {}, [e("code", {class: this.className, domProps: {innerHTML: this.highlighted}})])
            }
        };
        return {
            Component: n, VuePlugin: {
                install(e) {
                    e.component("highlightjs", n)
                }
            }
        }
    }

    const G = {
        "after:highlightElement": ({el: e, result: n, text: t}) => {
            const a = q(e);
            if (!a.length) return;
            const r = document.createElement("div");
            r.innerHTML = n.value, n.value = function (e, n, t) {
                let a = 0, r = "";
                const s = [];

                function o() {
                    return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
                }

                function l(e) {
                    function n(e) {
                        return " " + e.nodeName + '="' + i(e.value) + '"'
                    }

                    r += "<" + F(e) + [].map.call(e.attributes, n).join("") + ">"
                }

                function c(e) {
                    r += "</" + F(e) + ">"
                }

                function g(e) {
                    ("start" === e.event ? l : c)(e.node)
                }

                for (; e.length || n.length;) {
                    let n = o();
                    if (r += i(t.substring(a, n[0].offset)), a = n[0].offset, n === e) {
                        s.reverse().forEach(c);
                        do {
                            g(n.splice(0, 1)[0]), n = o()
                        } while (n === e && n.length && n[0].offset === a);
                        s.reverse().forEach(l)
                    } else "start" === n[0].event ? s.push(n[0].node) : s.pop(), g(n.splice(0, 1)[0])
                }
                return r + i(t.substr(a))
            }(a, q(r), t)
        }
    };

    function F(e) {
        return e.nodeName.toLowerCase()
    }

    function q(e) {
        const n = [];
        return function e(t, a) {
            for (let i = t.firstChild; i; i = i.nextSibling) 3 === i.nodeType ? a += i.nodeValue.length : 1 === i.nodeType && (n.push({
                event: "start",
                offset: a,
                node: i
            }), a = e(i, a), F(i).match(/br|hr|img|input/) || n.push({event: "stop", offset: a, node: i}));
            return a
        }(e, 0), n
    }

    const W = {}, Q = e => {
        console.error(e)
    }, X = (e, ...n) => {
        console.log(`WARN: ${e}`, ...n)
    }, V = (e, n) => {
        W[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), W[`${e}/${n}`] = !0)
    }, J = i, Y = r, ee = Symbol("nomatch");
    var ne = function (e) {
        const t = Object.create(null), i = Object.create(null), r = [];
        let s = !0;
        const o = /(^(<[^>]+>|\t|)+|\n)/gm,
            l = "Could not find the language '{}', did you forget to load/include a language module?",
            g = {disableAutodetect: !0, name: "Plain text", contains: []};
        let d = {
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: null,
            __emitter: c
        };

        function u(e) {
            return d.noHighlightRe.test(e)
        }

        function b(e, n, t, a) {
            let i = "", r = "";
            "object" == typeof n ? (i = e, t = n.ignoreIllegals, r = n.language, a = void 0) : (V("10.7.0", "highlight(lang, code, ...args) has been deprecated."), V("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), r = e, i = n);
            const s = {code: i, language: r};
            M("before:highlight", s);
            const o = s.result ? s.result : m(s.language, s.code, t, a);
            return o.code = s.code, M("after:highlight", o), o
        }

        function m(e, n, i, o) {
            function c(e, n) {
                const t = N.case_insensitive ? n[0].toLowerCase() : n[0];
                return Object.prototype.hasOwnProperty.call(e.keywords, t) && e.keywords[t]
            }

            function g() {
                null != O.subLanguage ? function () {
                    if ("" === R) return;
                    let e = null;
                    if ("string" == typeof O.subLanguage) {
                        if (!t[O.subLanguage]) return void k.addText(R);
                        e = m(O.subLanguage, R, !0, M[O.subLanguage]), M[O.subLanguage] = e.top
                    } else e = h(R, O.subLanguage.length ? O.subLanguage : null);
                    O.relevance > 0 && (A += e.relevance), k.addSublanguage(e.emitter, e.language)
                }() : function () {
                    if (!O.keywords) return void k.addText(R);
                    let e = 0;
                    O.keywordPatternRe.lastIndex = 0;
                    let n = O.keywordPatternRe.exec(R), t = "";
                    for (; n;) {
                        t += R.substring(e, n.index);
                        const a = c(O, n);
                        if (a) {
                            const [e, i] = a;
                            if (k.addText(t), t = "", A += i, e.startsWith("_")) t += n[0]; else {
                                const t = N.classNameAliases[e] || e;
                                k.addKeyword(n[0], t)
                            }
                        } else t += n[0];
                        e = O.keywordPatternRe.lastIndex, n = O.keywordPatternRe.exec(R)
                    }
                    t += R.substr(e), k.addText(t)
                }(), R = ""
            }

            function u(e) {
                return e.className && k.openNode(N.classNameAliases[e.className] || e.className), O = Object.create(e, {parent: {value: O}}), O
            }

            function b(e, n, t) {
                let i = function (e, n) {
                    const t = e && e.exec(n);
                    return t && 0 === t.index
                }(e.endRe, t);
                if (i) {
                    if (e["on:end"]) {
                        const t = new a(e);
                        e["on:end"](n, t), t.isMatchIgnored && (i = !1)
                    }
                    if (i) {
                        for (; e.endsParent && e.parent;) e = e.parent;
                        return e
                    }
                }
                if (e.endsWithParent) return b(e.parent, n, t)
            }

            function f(e) {
                return 0 === O.matcher.regexIndex ? (R += e[0], 1) : (C = !0, 0)
            }

            function p(e) {
                const n = e[0], t = e.rule, i = new a(t), r = [t.__beforeBegin, t["on:begin"]];
                for (const t of r) if (t && (t(e, i), i.isMatchIgnored)) return f(n);
                return t && t.endSameAsBegin && (t.endRe = new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), t.skip ? R += n : (t.excludeBegin && (R += n), g(), t.returnBegin || t.excludeBegin || (R = n)), u(t), t.returnBegin ? 0 : n.length
            }

            function _(e) {
                const t = e[0], a = n.substr(e.index), i = b(O, e, a);
                if (!i) return ee;
                const r = O;
                r.skip ? R += t : (r.returnEnd || r.excludeEnd || (R += t), g(), r.excludeEnd && (R = t));
                do {
                    O.className && k.closeNode(), O.skip || O.subLanguage || (A += O.relevance), O = O.parent
                } while (O !== i.parent);
                return i.starts && (i.endSameAsBegin && (i.starts.endRe = i.endRe), u(i.starts)), r.returnEnd ? 0 : t.length
            }

            let E = {};

            function v(t, a) {
                const r = a && a[0];
                if (R += t, null == r) return g(), 0;
                if ("begin" === E.type && "end" === a.type && E.index === a.index && "" === r) {
                    if (R += n.slice(a.index, a.index + 1), !s) {
                        const n = new Error("0 width match regex");
                        throw n.languageName = e, n.badRule = E.rule, n
                    }
                    return 1
                }
                if (E = a, "begin" === a.type) return p(a);
                if ("illegal" === a.type && !i) {
                    const e = new Error('Illegal lexeme "' + r + '" for mode "' + (O.className || "<unnamed>") + '"');
                    throw e.mode = O, e
                }
                if ("end" === a.type) {
                    const e = _(a);
                    if (e !== ee) return e
                }
                if ("illegal" === a.type && "" === r) return 1;
                if (T > 1e5 && T > 3 * a.index) {
                    throw new Error("potential infinite loop, way more iterations than matches")
                }
                return R += r, r.length
            }

            const N = w(e);
            if (!N) throw Q(l.replace("{}", e)), new Error('Unknown language: "' + e + '"');
            const y = K(N, {plugins: r});
            let x = "", O = o || y;
            const M = {}, k = new d.__emitter(d);
            !function () {
                const e = [];
                for (let n = O; n !== N; n = n.parent) n.className && e.unshift(n.className);
                e.forEach((e => k.openNode(e)))
            }();
            let R = "", A = 0, S = 0, T = 0, C = !1;
            try {
                for (O.matcher.considerAll(); ;) {
                    T++, C ? C = !1 : O.matcher.considerAll(), O.matcher.lastIndex = S;
                    const e = O.matcher.exec(n);
                    if (!e) break;
                    const t = v(n.substring(S, e.index), e);
                    S = e.index + t
                }
                return v(n.substr(S)), k.closeAllNodes(), k.finalize(), x = k.toHTML(), {
                    relevance: Math.floor(A),
                    value: x,
                    language: e,
                    illegal: !1,
                    emitter: k,
                    top: O
                }
            } catch (t) {
                if (t.message && t.message.includes("Illegal")) return {
                    illegal: !0,
                    illegalBy: {msg: t.message, context: n.slice(S - 100, S + 100), mode: t.mode},
                    sofar: x,
                    relevance: 0,
                    value: J(n),
                    emitter: k
                };
                if (s) return {illegal: !1, relevance: 0, value: J(n), emitter: k, language: e, top: O, errorRaised: t};
                throw t
            }
        }

        function h(e, n) {
            n = n || d.languages || Object.keys(t);
            const a = function (e) {
                const n = {relevance: 0, emitter: new d.__emitter(d), value: J(e), illegal: !1, top: g};
                return n.emitter.addText(e), n
            }(e), i = n.filter(w).filter(O).map((n => m(n, e, !1)));
            i.unshift(a);
            const r = i.sort(((e, n) => {
                if (e.relevance !== n.relevance) return n.relevance - e.relevance;
                if (e.language && n.language) {
                    if (w(e.language).supersetOf === n.language) return 1;
                    if (w(n.language).supersetOf === e.language) return -1
                }
                return 0
            })), [s, o] = r, l = s;
            return l.second_best = o, l
        }

        const f = {
            "before:highlightElement": ({el: e}) => {
                d.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n"))
            }, "after:highlightElement": ({result: e}) => {
                d.useBR && (e.value = e.value.replace(/\n/g, "<br>"))
            }
        }, p = /^(<[^>]+>|\t)+/gm, _ = {
            "after:highlightElement": ({result: e}) => {
                d.tabReplace && (e.value = e.value.replace(p, (e => e.replace(/\t/g, d.tabReplace))))
            }
        };

        function E(e) {
            let n = null;
            const t = function (e) {
                let n = e.className + " ";
                n += e.parentNode ? e.parentNode.className : "";
                const t = d.languageDetectRe.exec(n);
                if (t) {
                    const n = w(t[1]);
                    return n || (X(l.replace("{}", t[1])), X("Falling back to no-highlight mode for this block.", e)), n ? t[1] : "no-highlight"
                }
                return n.split(/\s+/).find((e => u(e) || w(e)))
            }(e);
            if (u(t)) return;
            M("before:highlightElement", {el: e, language: t}), n = e;
            const a = n.textContent, r = t ? b(a, {language: t, ignoreIllegals: !0}) : h(a);
            M("after:highlightElement", {el: e, result: r, text: a}), e.innerHTML = r.value, function (e, n, t) {
                const a = n ? i[n] : t;
                e.classList.add("hljs"), a && e.classList.add(a)
            }(e, t, r.language), e.result = {
                language: r.language,
                re: r.relevance,
                relavance: r.relevance
            }, r.second_best && (e.second_best = {
                language: r.second_best.language,
                re: r.second_best.relevance,
                relavance: r.second_best.relevance
            })
        }

        const v = () => {
            if (v.called) return;
            v.called = !0, V("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead.");
            document.querySelectorAll("pre code").forEach(E)
        };
        let N = !1;

        function y() {
            if ("loading" === document.readyState) return void (N = !0);
            document.querySelectorAll("pre code").forEach(E)
        }

        function w(e) {
            return e = (e || "").toLowerCase(), t[e] || t[i[e]]
        }

        function x(e, {languageName: n}) {
            "string" == typeof e && (e = [e]), e.forEach((e => {
                i[e.toLowerCase()] = n
            }))
        }

        function O(e) {
            const n = w(e);
            return n && !n.disableAutodetect
        }

        function M(e, n) {
            const t = e;
            r.forEach((function (e) {
                e[t] && e[t](n)
            }))
        }

        "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", (function () {
            N && y()
        }), !1), Object.assign(e, {
            highlight: b, highlightAuto: h, highlightAll: y, fixMarkup: function (e) {
                return V("10.2.0", "fixMarkup will be removed entirely in v11.0"), V("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), n = e, d.tabReplace || d.useBR ? n.replace(o, (e => "\n" === e ? d.useBR ? "<br>" : e : d.tabReplace ? e.replace(/\t/g, d.tabReplace) : e)) : n;
                var n
            }, highlightElement: E, highlightBlock: function (e) {
                return V("10.7.0", "highlightBlock will be removed entirely in v12.0"), V("10.7.0", "Please use highlightElement now."), E(e)
            }, configure: function (e) {
                e.useBR && (V("10.3.0", "'useBR' will be removed entirely in v11.0"), V("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")), d = Y(d, e)
            }, initHighlighting: v, initHighlightingOnLoad: function () {
                V("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), N = !0
            }, registerLanguage: function (n, a) {
                let i = null;
                try {
                    i = a(e)
                } catch (e) {
                    if (Q("Language definition for '{}' could not be registered.".replace("{}", n)), !s) throw e;
                    Q(e), i = g
                }
                i.name || (i.name = n), t[n] = i, i.rawDefinition = a.bind(null, e), i.aliases && x(i.aliases, {languageName: n})
            }, unregisterLanguage: function (e) {
                delete t[e];
                for (const n of Object.keys(i)) i[n] === e && delete i[n]
            }, listLanguages: function () {
                return Object.keys(t)
            }, getLanguage: w, registerAliases: x, requireLanguage: function (e) {
                V("10.4.0", "requireLanguage will be removed entirely in v11."), V("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
                const n = w(e);
                if (n) return n;
                throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
            }, autoDetection: O, inherit: Y, addPlugin: function (e) {
                !function (e) {
                    e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = n => {
                        e["before:highlightBlock"](Object.assign({block: n.el}, n))
                    }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = n => {
                        e["after:highlightBlock"](Object.assign({block: n.el}, n))
                    })
                }(e), r.push(e)
            }, vuePlugin: Z(e).VuePlugin
        }), e.debugMode = function () {
            s = !1
        }, e.safeMode = function () {
            s = !0
        }, e.versionString = "10.7.2";
        for (const e in D) "object" == typeof D[e] && n(D[e]);
        return Object.assign(e, D), e.addPlugin(f), e.addPlugin(G), e.addPlugin(_), e
    }({});

    function te(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null;
            var n
        })).join("")
    }

    var ae = function (e) {
        const n = [{className: "strong", begin: /\*{2}([^\n]+?)\*{2}/}, {
            className: "strong",
            begin: te(/\*\*/, /((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/, /(\*(?!\*)|\\[^\n]|[^*\n\\])*/, /\*\*/),
            relevance: 0
        }, {className: "strong", begin: /\B\*(\S|\S[^\n]*?\S)\*(?!\w)/}, {
            className: "strong",
            begin: /\*[^\s]([^\n]+\n)+([^\n]+)\*/
        }], t = [{className: "emphasis", begin: /_{2}([^\n]+?)_{2}/}, {
            className: "emphasis",
            begin: te(/__/, /((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/, /(_(?!_)|\\[^\n]|[^_\n\\])*/, /__/),
            relevance: 0
        }, {className: "emphasis", begin: /\b_(\S|\S[^\n]*?\S)_(?!\w)/}, {
            className: "emphasis",
            begin: /_[^\s]([^\n]+\n)+([^\n]+)_/
        }, {
            className: "emphasis",
            begin: "\\B'(?!['\\s])",
            end: "(\\n{2}|')",
            contains: [{begin: "\\\\'\\w", relevance: 0}],
            relevance: 0
        }];
        return {
            name: "AsciiDoc",
            aliases: ["adoc"],
            contains: [e.COMMENT("^/{4,}\\n", "\\n/{4,}$", {relevance: 10}), e.COMMENT("^//", "$", {relevance: 0}), {
                className: "title",
                begin: "^\\.\\w.*$"
            }, {begin: "^[=\\*]{4,}\\n", end: "\\n^[=\\*]{4,}$", relevance: 10}, {
                className: "section",
                relevance: 10,
                variants: [{begin: "^(={1,6})[ \t].+?([ \t]\\1)?$"}, {begin: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"}]
            }, {className: "meta", begin: "^:.+?:", end: "\\s", excludeEnd: !0, relevance: 10}, {
                className: "meta",
                begin: "^\\[.+?\\]$",
                relevance: 0
            }, {className: "quote", begin: "^_{4,}\\n", end: "\\n_{4,}$", relevance: 10}, {
                className: "code",
                begin: "^[\\-\\.]{4,}\\n",
                end: "\\n[\\-\\.]{4,}$",
                relevance: 10
            }, {
                begin: "^\\+{4,}\\n",
                end: "\\n\\+{4,}$",
                contains: [{begin: "<", end: ">", subLanguage: "xml", relevance: 0}],
                relevance: 10
            }, {className: "bullet", begin: "^(\\*+|-+|\\.+|[^\\n]+?::)\\s+"}, {
                className: "symbol",
                begin: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
                relevance: 10
            }, {begin: /\\[*_`]/}, {begin: /\\\\\*{2}[^\n]*?\*{2}/}, {begin: /\\\\_{2}[^\n]*_{2}/}, {begin: /\\\\`{2}[^\n]*`{2}/}, {begin: /[:;}][*_`](?![*_`])/}, ...n, ...t, {
                className: "string",
                variants: [{begin: "``.+?''"}, {begin: "`.+?'"}]
            }, {className: "code", begin: /`{2}/, end: /(\n{2}|`{2})/}, {
                className: "code",
                begin: "(`.+?`|\\+.+?\\+)",
                relevance: 0
            }, {className: "code", begin: "^[ \\t]", end: "$", relevance: 0}, {
                begin: "^'{3,}[ \\t]*$",
                relevance: 10
            }, {
                begin: "(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]",
                returnBegin: !0,
                contains: [{begin: "(link|image:?):", relevance: 0}, {
                    className: "link",
                    begin: "\\w",
                    end: "[^\\[]+",
                    relevance: 0
                }, {className: "string", begin: "\\[", end: "\\]", excludeBegin: !0, excludeEnd: !0, relevance: 0}],
                relevance: 10
            }]
        }
    };

    function ie(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null;
            var n
        })).join("")
    }

    var re = function (e) {
        const n = {}, t = {begin: /\$\{/, end: /\}/, contains: ["self", {begin: /:-/, contains: [n]}]};
        Object.assign(n, {
            className: "variable",
            variants: [{begin: ie(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")}, t]
        });
        const a = {className: "subst", begin: /\$\(/, end: /\)/, contains: [e.BACKSLASH_ESCAPE]}, i = {
            begin: /<<-?\s*(?=\w+)/,
            starts: {contains: [e.END_SAME_AS_BEGIN({begin: /(\w+)/, end: /(\w+)/, className: "string"})]}
        }, r = {className: "string", begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, n, a]};
        a.contains.push(r);
        const s = {
            begin: /\$\(\(/,
            end: /\)\)/,
            contains: [{begin: /\d+#[0-9a-f]+/, className: "number"}, e.NUMBER_MODE, n]
        }, o = e.SHEBANG({
            binary: `(${["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"].join("|")})`,
            relevance: 10
        }), l = {
            className: "function",
            begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            returnBegin: !0,
            contains: [e.inherit(e.TITLE_MODE, {begin: /\w[\w\d_]*/})],
            relevance: 0
        };
        return {
            name: "Bash",
            aliases: ["sh", "zsh"],
            keywords: {
                $pattern: /\b[a-z._-]+\b/,
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
            },
            contains: [o, e.SHEBANG(), l, s, e.HASH_COMMENT_MODE, i, r, {
                className: "",
                begin: /\\"/
            }, {className: "string", begin: /'/, end: /'/}, n]
        }
    };
    const se = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        oe = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        le = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        ce = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        ge = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

    function de(e) {
        return function (...e) {
            return e.map((e => function (e) {
                return e ? "string" == typeof e ? e : e.source : null
            }(e))).join("")
        }("(?=", e, ")")
    }

    var ue = function (e) {
        const n = (e => ({
            IMPORTANT: {className: "meta", begin: "!important"},
            HEXCOLOR: {className: "number", begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},
            ATTRIBUTE_SELECTOR_MODE: {
                className: "selector-attr",
                begin: /\[/,
                end: /\]/,
                illegal: "$",
                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            }
        }))(e), t = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
        return {
            name: "CSS",
            case_insensitive: !0,
            illegal: /[=|'\$]/,
            keywords: {keyframePosition: "from to"},
            classNameAliases: {keyframePosition: "selector-tag"},
            contains: [e.C_BLOCK_COMMENT_MODE, {begin: /-(webkit|moz|ms|o)-(?=[a-z])/}, e.CSS_NUMBER_MODE, {
                className: "selector-id",
                begin: /#[A-Za-z0-9_-]+/,
                relevance: 0
            }, {
                className: "selector-class",
                begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                relevance: 0
            }, n.ATTRIBUTE_SELECTOR_MODE, {
                className: "selector-pseudo",
                variants: [{begin: ":(" + le.join("|") + ")"}, {begin: "::(" + ce.join("|") + ")"}]
            }, {className: "attribute", begin: "\\b(" + ge.join("|") + ")\\b"}, {
                begin: ":",
                end: "[;}]",
                contains: [n.HEXCOLOR, n.IMPORTANT, e.CSS_NUMBER_MODE, ...t, {
                    begin: /(url|data-uri)\(/,
                    end: /\)/,
                    relevance: 0,
                    keywords: {built_in: "url data-uri"},
                    contains: [{className: "string", begin: /[^)]/, endsWithParent: !0, excludeEnd: !0}]
                }, {className: "built_in", begin: /[\w-]+(?=\()/}]
            }, {
                begin: de(/@/),
                end: "[{;]",
                relevance: 0,
                illegal: /:/,
                contains: [{className: "keyword", begin: /@-?\w[\w]*(-\w+)*/}, {
                    begin: /\s/,
                    endsWithParent: !0,
                    excludeEnd: !0,
                    relevance: 0,
                    keywords: {$pattern: /[a-z-]+/, keyword: "and or not only", attribute: oe.join(" ")},
                    contains: [{begin: /[a-z-]+(?=:)/, className: "attribute"}, ...t, e.CSS_NUMBER_MODE]
                }]
            }, {className: "selector-tag", begin: "\\b(" + se.join("|") + ")\\b"}]
        }
    };
    var be = function (e) {
        return {
            name: "Diff",
            aliases: ["patch"],
            contains: [{
                className: "meta",
                relevance: 10,
                variants: [{begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/}, {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/}, {begin: /^--- +\d+,\d+ +----$/}]
            }, {
                className: "comment",
                variants: [{begin: /Index: /, end: /$/}, {begin: /^index/, end: /$/}, {
                    begin: /={3,}/,
                    end: /$/
                }, {begin: /^-{3}/, end: /$/}, {begin: /^\*{3} /, end: /$/}, {
                    begin: /^\+{3}/,
                    end: /$/
                }, {begin: /^\*{15}$/}, {begin: /^diff --git/, end: /$/}]
            }, {className: "addition", begin: /^\+/, end: /$/}, {
                className: "deletion",
                begin: /^-/,
                end: /$/
            }, {className: "addition", begin: /^!/, end: /$/}]
        }
    };
    var me = function (e) {
        return {
            name: "Dockerfile",
            aliases: ["docker"],
            case_insensitive: !0,
            keywords: "from maintainer expose env arg user onbuild stopsignal",
            contains: [e.HASH_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
                starts: {end: /[^\\]$/, subLanguage: "bash"}
            }],
            illegal: "</"
        }
    };
    var he = function (e) {
        return {
            name: "Gradle",
            case_insensitive: !0,
            keywords: {keyword: "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine"},
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.REGEXP_MODE]
        }
    };

    function fe(e) {
        return function (...e) {
            return e.map((e => function (e) {
                return e ? "string" == typeof e ? e : e.source : null
            }(e))).join("")
        }("(?=", e, ")")
    }

    function pe(e, n = {}) {
        return n.variants = e, n
    }

    var _e = function (e) {
        const n = "[A-Za-z0-9_$]+",
            t = pe([e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{begin: /\w+@/, relevance: 0}, {className: "doctag", begin: "@[A-Za-z]+"}]
            })]), a = {className: "regexp", begin: /~?\/[^\/\n]+\//, contains: [e.BACKSLASH_ESCAPE]},
            i = pe([e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]),
            r = pe([{begin: /"""/, end: /"""/}, {begin: /'''/, end: /'''/}, {
                begin: "\\$/",
                end: "/\\$",
                relevance: 10
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], {className: "string"});
        return {
            name: "Groovy",
            keywords: {
                built_in: "this super",
                literal: "true false null",
                keyword: "byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
            },
            contains: [e.SHEBANG({binary: "groovy", relevance: 10}), t, r, a, i, {
                className: "class",
                beginKeywords: "class interface trait enum",
                end: /\{/,
                illegal: ":",
                contains: [{beginKeywords: "extends implements"}, e.UNDERSCORE_TITLE_MODE]
            }, {className: "meta", begin: "@[A-Za-z]+", relevance: 0}, {
                className: "attr",
                begin: n + "[ \t]*:",
                relevance: 0
            }, {begin: /\?/, end: /:/, relevance: 0, contains: [t, r, a, i, "self"]}, {
                className: "symbol",
                begin: "^[ \t]*" + fe(n + ":"),
                excludeBegin: !0,
                end: n + ":",
                relevance: 0
            }],
            illegal: /#|<\//
        }
    };

    function Ee(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null;
            var n
        })).join("")
    }

    var ve = function (e) {
        const n = "HTTP/(2|1\\.[01])", t = {
            className: "attribute",
            begin: Ee("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"),
            starts: {
                contains: [{
                    className: "punctuation",
                    begin: /: /,
                    relevance: 0,
                    starts: {end: "$", relevance: 0}
                }]
            }
        }, a = [t, {begin: "\\n\\n", starts: {subLanguage: [], endsWithParent: !0}}];
        return {
            name: "HTTP",
            aliases: ["https"],
            illegal: /\S/,
            contains: [{
                begin: "^(?=" + n + " \\d{3})",
                end: /$/,
                contains: [{className: "meta", begin: n}, {className: "number", begin: "\\b\\d{3}\\b"}],
                starts: {end: /\b\B/, illegal: /\S/, contains: a}
            }, {
                begin: "(?=^[A-Z]+ (.*?) " + n + "$)",
                end: /$/,
                contains: [{
                    className: "string",
                    begin: " ",
                    end: " ",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {className: "meta", begin: n}, {className: "keyword", begin: "[A-Z]+"}],
                starts: {end: /\b\B/, illegal: /\S/, contains: a}
            }, e.inherit(t, {relevance: 0})]
        }
    }, Ne = "\\.([0-9](_*[0-9])*)", ye = "[0-9a-fA-F](_*[0-9a-fA-F])*", we = {
        className: "number",
        variants: [{begin: `(\\b([0-9](_*[0-9])*)((${Ne})|\\.)?|(${Ne}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`}, {begin: `\\b([0-9](_*[0-9])*)((${Ne})[fFdD]?\\b|\\.([fFdD]\\b)?)`}, {begin: `(${Ne})[fFdD]?\\b`}, {begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b"}, {begin: `\\b0[xX]((${ye})\\.?|(${ye})?\\.(${ye}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`}, {begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"}, {begin: `\\b0[xX](${ye})[lL]?\\b`}, {begin: "\\b0(_*[0-7])*[lL]?\\b"}, {begin: "\\b0[bB][01](_*[01])*[lL]?\\b"}],
        relevance: 0
    };
    var xe = function (e) {
        var n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
            t = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
            a = {className: "meta", begin: "@" + n, contains: [{begin: /\(/, end: /\)/, contains: ["self"]}]};
        const i = we;
        return {
            name: "Java",
            aliases: ["jsp"],
            keywords: t,
            illegal: /<\/|#/,
            contains: [e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{begin: /\w+@/, relevance: 0}, {className: "doctag", begin: "@[A-Za-z]+"}]
            }), {
                begin: /import java\.[a-z]+\./,
                keywords: "import",
                relevance: 2
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "class",
                beginKeywords: "class interface enum",
                end: /[{;=]/,
                excludeEnd: !0,
                relevance: 1,
                keywords: "class interface enum",
                illegal: /[:"\[\]]/,
                contains: [{beginKeywords: "extends implements"}, e.UNDERSCORE_TITLE_MODE]
            }, {beginKeywords: "new throw return else", relevance: 0}, {
                className: "class",
                begin: "record\\s+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                excludeEnd: !0,
                end: /[{;=]/,
                keywords: t,
                contains: [{beginKeywords: "record"}, {
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: t,
                    relevance: 0,
                    contains: [e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                className: "function",
                begin: "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: t,
                contains: [{
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: t,
                    relevance: 0,
                    contains: [a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, i, a]
        }
    };
    const Oe = "[A-Za-z$_][0-9A-Za-z$_]*",
        Me = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        ke = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        Re = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);

    function Ae(e) {
        return Se("(?=", e, ")")
    }

    function Se(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null;
            var n
        })).join("")
    }

    var Te = function (e) {
        const n = Oe, t = "<>", a = "</>", i = {
                begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e, n) => {
                    const t = e[0].length + e.index, a = e.input[t];
                    "<" !== a ? ">" === a && (((e, {after: n}) => {
                        const t = "</" + e[0].slice(1);
                        return -1 !== e.input.indexOf(t, n)
                    })(e, {after: t}) || n.ignoreMatch()) : n.ignoreMatch()
                }
            }, r = {$pattern: Oe, keyword: Me, literal: ke, built_in: Re}, s = "\\.([0-9](_?[0-9])*)",
            o = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", l = {
                className: "number",
                variants: [{begin: `(\\b(${o})((${s})|\\.)?|(${s}))[eE][+-]?([0-9](_?[0-9])*)\\b`}, {begin: `\\b(${o})\\b((${s})\\b|\\.)?|(${s})\\b`}, {begin: "\\b(0|[1-9](_?[0-9])*)n\\b"}, {begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"}, {begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"}, {begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"}, {begin: "\\b0[0-7]+n?\\b"}],
                relevance: 0
            }, c = {className: "subst", begin: "\\$\\{", end: "\\}", keywords: r, contains: []}, g = {
                begin: "html`",
                end: "",
                starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, c], subLanguage: "xml"}
            }, d = {
                begin: "css`",
                end: "",
                starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, c], subLanguage: "css"}
            }, u = {className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, c]}, b = {
                className: "comment",
                variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [{
                        className: "doctag",
                        begin: "@[A-Za-z]+",
                        contains: [{className: "type", begin: "\\{", end: "\\}", relevance: 0}, {
                            className: "variable",
                            begin: n + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0
                        }, {begin: /(?=[^\n])\s/, relevance: 0}]
                    }]
                }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
            }, m = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, g, d, u, l, e.REGEXP_MODE];
        c.contains = m.concat({begin: /\{/, end: /\}/, keywords: r, contains: ["self"].concat(m)});
        const h = [].concat(b, c.contains),
            f = h.concat([{begin: /\(/, end: /\)/, keywords: r, contains: ["self"].concat(h)}]), p = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: r,
                contains: f
            };
        return {
            name: "Javascript",
            aliases: ["js", "jsx", "mjs", "cjs"],
            keywords: r,
            exports: {PARAMS_CONTAINS: f},
            illegal: /#(?![$_A-z])/,
            contains: [e.SHEBANG({label: "shebang", binary: "node", relevance: 5}), {
                label: "use_strict",
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, g, d, u, b, l, {
                begin: Se(/[{,\n]\s*/, Ae(Se(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, n + "\\s*:"))),
                relevance: 0,
                contains: [{className: "attr", begin: n + Ae("\\s*:"), relevance: 0}]
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [b, e.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{begin: e.UNDERSCORE_IDENT_RE, relevance: 0}, {
                            className: null,
                            begin: /\(\s*\)/,
                            skip: !0
                        }, {begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: r, contains: f}]
                    }]
                }, {begin: /,/, relevance: 0}, {
                    className: "",
                    begin: /\s/,
                    end: /\s*/,
                    skip: !0
                }, {
                    variants: [{begin: t, end: a}, {begin: i.begin, "on:begin": i.isTrulyOpeningTag, end: i.end}],
                    subLanguage: "xml",
                    contains: [{begin: i.begin, end: i.end, skip: !0, contains: ["self"]}]
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "function",
                end: /[{;]/,
                excludeEnd: !0,
                keywords: r,
                contains: ["self", e.inherit(e.TITLE_MODE, {begin: n}), p],
                illegal: /%/
            }, {beginKeywords: "while if switch catch for"}, {
                className: "function",
                begin: e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                contains: [p, e.inherit(e.TITLE_MODE, {begin: n})]
            }, {variants: [{begin: "\\." + n}, {begin: "\\$" + n}], relevance: 0}, {
                className: "class",
                beginKeywords: "class",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"[\]]/,
                contains: [{beginKeywords: "extends"}, e.UNDERSCORE_TITLE_MODE]
            }, {
                begin: /\b(?=constructor)/,
                end: /[{;]/,
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {begin: n}), "self", p]
            }, {
                begin: "(get|set)\\s+(?=" + n + "\\()",
                end: /\{/,
                keywords: "get set",
                contains: [e.inherit(e.TITLE_MODE, {begin: n}), {begin: /\(\)/}, p]
            }, {begin: /\$[(.]/}]
        }
    };
    var Ce = function (e) {
        const n = {literal: "true false null"}, t = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
            a = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE],
            i = {end: ",", endsWithParent: !0, excludeEnd: !0, contains: a, keywords: n}, r = {
                begin: /\{/,
                end: /\}/,
                contains: [{
                    className: "attr",
                    begin: /"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE],
                    illegal: "\\n"
                }, e.inherit(i, {begin: /:/})].concat(t),
                illegal: "\\S"
            }, s = {begin: "\\[", end: "\\]", contains: [e.inherit(i)], illegal: "\\S"};
        return a.push(r, s), t.forEach((function (e) {
            a.push(e)
        })), {name: "JSON", contains: a, keywords: n, illegal: "\\S"}
    }, De = "\\.([0-9](_*[0-9])*)", Le = "[0-9a-fA-F](_*[0-9a-fA-F])*", Be = {
        className: "number",
        variants: [{begin: `(\\b([0-9](_*[0-9])*)((${De})|\\.)?|(${De}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`}, {begin: `\\b([0-9](_*[0-9])*)((${De})[fFdD]?\\b|\\.([fFdD]\\b)?)`}, {begin: `(${De})[fFdD]?\\b`}, {begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b"}, {begin: `\\b0[xX]((${Le})\\.?|(${Le})?\\.(${Le}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`}, {begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"}, {begin: `\\b0[xX](${Le})[lL]?\\b`}, {begin: "\\b0(_*[0-7])*[lL]?\\b"}, {begin: "\\b0[bB][01](_*[01])*[lL]?\\b"}],
        relevance: 0
    };
    var $e = function (e) {
        const n = {
                keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                literal: "true false null"
            }, t = {className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@"},
            a = {className: "subst", begin: /\$\{/, end: /\}/, contains: [e.C_NUMBER_MODE]},
            i = {className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE}, r = {
                className: "string",
                variants: [{begin: '"""', end: '"""(?=[^"])', contains: [i, a]}, {
                    begin: "'",
                    end: "'",
                    illegal: /\n/,
                    contains: [e.BACKSLASH_ESCAPE]
                }, {begin: '"', end: '"', illegal: /\n/, contains: [e.BACKSLASH_ESCAPE, i, a]}]
            };
        a.contains.push(r);
        const s = {
                className: "meta",
                begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
            }, o = {
                className: "meta",
                begin: "@" + e.UNDERSCORE_IDENT_RE,
                contains: [{begin: /\(/, end: /\)/, contains: [e.inherit(r, {className: "meta-string"})]}]
            }, l = Be, c = e.COMMENT("/\\*", "\\*/", {contains: [e.C_BLOCK_COMMENT_MODE]}),
            g = {variants: [{className: "type", begin: e.UNDERSCORE_IDENT_RE}, {begin: /\(/, end: /\)/, contains: []}]},
            d = g;
        return d.variants[1].contains = [g], g.variants[1].contains = [d], {
            name: "Kotlin",
            aliases: ["kt", "kts"],
            keywords: n,
            contains: [e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{className: "doctag", begin: "@[A-Za-z]+"}]
            }), e.C_LINE_COMMENT_MODE, c, {
                className: "keyword",
                begin: /\b(break|continue|return|this)\b/,
                starts: {contains: [{className: "symbol", begin: /@\w+/}]}
            }, t, s, o, {
                className: "function",
                beginKeywords: "fun",
                end: "[(]|$",
                returnBegin: !0,
                excludeEnd: !0,
                keywords: n,
                relevance: 5,
                contains: [{
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {className: "type", begin: /</, end: />/, keywords: "reified", relevance: 0}, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    endsParent: !0,
                    keywords: n,
                    relevance: 0,
                    contains: [{
                        begin: /:/,
                        end: /[=,\/]/,
                        endsWithParent: !0,
                        contains: [g, e.C_LINE_COMMENT_MODE, c],
                        relevance: 0
                    }, e.C_LINE_COMMENT_MODE, c, s, o, r, e.C_NUMBER_MODE]
                }, c]
            }, {
                className: "class",
                beginKeywords: "class interface trait",
                end: /[:\{(]|$/,
                excludeEnd: !0,
                illegal: "extends implements",
                contains: [{beginKeywords: "public protected internal private constructor"}, e.UNDERSCORE_TITLE_MODE, {
                    className: "type",
                    begin: /</,
                    end: />/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0
                }, {className: "type", begin: /[,:]\s*/, end: /[<\(,]|$/, excludeBegin: !0, returnEnd: !0}, s, o]
            }, r, {className: "meta", begin: "^#!/usr/bin/env", end: "$", illegal: "\n"}, l]
        }
    };

    function Ie(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null;
            var n
        })).join("")
    }

    var je = function (e) {
        const n = {begin: /<\/?[A-Za-z_]/, end: ">", subLanguage: "xml", relevance: 0}, t = {
            variants: [{
                begin: /\[.+?\]\[.*?\]/,
                relevance: 0
            }, {
                begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                relevance: 2
            }, {
                begin: Ie(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                relevance: 2
            }, {begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1}, {begin: /\[.+?\]\(.*?\)/, relevance: 0}],
            returnBegin: !0,
            contains: [{
                className: "string",
                relevance: 0,
                begin: "\\[",
                end: "\\]",
                excludeBegin: !0,
                returnEnd: !0
            }, {
                className: "link",
                relevance: 0,
                begin: "\\]\\(",
                end: "\\)",
                excludeBegin: !0,
                excludeEnd: !0
            }, {className: "symbol", relevance: 0, begin: "\\]\\[", end: "\\]", excludeBegin: !0, excludeEnd: !0}]
        }, a = {
            className: "strong",
            contains: [],
            variants: [{begin: /_{2}/, end: /_{2}/}, {begin: /\*{2}/, end: /\*{2}/}]
        }, i = {
            className: "emphasis",
            contains: [],
            variants: [{begin: /\*(?!\*)/, end: /\*/}, {begin: /_(?!_)/, end: /_/, relevance: 0}]
        };
        a.contains.push(i), i.contains.push(a);
        let r = [n, t];
        return a.contains = a.contains.concat(r), i.contains = i.contains.concat(r), r = r.concat(a, i), {
            name: "Markdown",
            aliases: ["md", "mkdown", "mkd"],
            contains: [{
                className: "section",
                variants: [{begin: "^#{1,6}", end: "$", contains: r}, {
                    begin: "(?=^.+?\\n[=-]{2,}$)",
                    contains: [{begin: "^[=-]*$"}, {begin: "^", end: "\\n", contains: r}]
                }]
            }, n, {
                className: "bullet",
                begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                end: "\\s+",
                excludeEnd: !0
            }, a, i, {className: "quote", begin: "^>\\s+", contains: r, end: "$"}, {
                className: "code",
                variants: [{begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"}, {begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"}, {
                    begin: "```",
                    end: "```+[ ]*$"
                }, {begin: "~~~", end: "~~~+[ ]*$"}, {begin: "`.+?`"}, {
                    begin: "(?=^( {4}|\\t))",
                    contains: [{begin: "^( {4}|\\t)", end: "(\\n)$"}],
                    relevance: 0
                }]
            }, {begin: "^[-\\*]{3,}", end: "$"}, t, {
                begin: /^\[[^\n]+\]:/,
                returnBegin: !0,
                contains: [{
                    className: "symbol",
                    begin: /\[/,
                    end: /\]/,
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0}]
            }]
        }
    };
    var ze = function (e) {
        const n = {
                keyword: "rec with let in inherit assert if else then",
                literal: "true false or and null",
                built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
            }, t = {className: "subst", begin: /\$\{/, end: /\}/, keywords: n},
            a = {className: "string", contains: [t], variants: [{begin: "''", end: "''"}, {begin: '"', end: '"'}]},
            i = [e.NUMBER_MODE, e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a, {
                begin: /[a-zA-Z0-9-_]+(\s*=)/,
                returnBegin: !0,
                relevance: 0,
                contains: [{className: "attr", begin: /\S+/}]
            }];
        return t.contains = i, {name: "Nix", aliases: ["nixos"], keywords: n, contains: i}
    };
    var Pe = function (e) {
        var n = "[ \\t\\f]*", t = n + "[:=]" + n, a = "[ \\t\\f]+", i = "(" + t + "|" + "[ \\t\\f]+)",
            r = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+", s = "([^\\\\:= \\t\\f\\n]|\\\\.)+", o = {
                end: i,
                relevance: 0,
                starts: {className: "string", end: /$/, relevance: 0, contains: [{begin: "\\\\\\\\"}, {begin: "\\\\\\n"}]}
            };
        return {
            name: ".properties",
            case_insensitive: !0,
            illegal: /\S/,
            contains: [e.COMMENT("^\\s*[!#]", "$"), {
                returnBegin: !0,
                variants: [{begin: r + t, relevance: 1}, {begin: r + a, relevance: 0}],
                contains: [{className: "attr", begin: r, endsParent: !0, relevance: 0}],
                starts: o
            }, {
                begin: s + i,
                returnBegin: !0,
                relevance: 0,
                contains: [{className: "meta", begin: s, endsParent: !0, relevance: 0}],
                starts: o
            }, {className: "attr", relevance: 0, begin: s + n + "$"}]
        }
    };

    function Ue(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null;
            var n
        })).join("")
    }

    var Ke = function (e) {
        const n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", t = {
                keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
                built_in: "proc lambda",
                literal: "true false nil"
            }, a = {className: "doctag", begin: "@[A-Za-z]+"}, i = {begin: "#<", end: ">"},
            r = [e.COMMENT("#", "$", {contains: [a]}), e.COMMENT("^=begin", "^=end", {
                contains: [a],
                relevance: 10
            }), e.COMMENT("^__END__", "\\n$")], s = {className: "subst", begin: /#\{/, end: /\}/, keywords: t}, o = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, s],
                variants: [{begin: /'/, end: /'/}, {begin: /"/, end: /"/}, {begin: /`/, end: /`/}, {
                    begin: /%[qQwWx]?\(/,
                    end: /\)/
                }, {begin: /%[qQwWx]?\[/, end: /\]/}, {begin: /%[qQwWx]?\{/, end: /\}/}, {
                    begin: /%[qQwWx]?</,
                    end: />/
                }, {begin: /%[qQwWx]?\//, end: /\//}, {begin: /%[qQwWx]?%/, end: /%/}, {
                    begin: /%[qQwWx]?-/,
                    end: /-/
                }, {
                    begin: /%[qQwWx]?\|/,
                    end: /\|/
                }, {begin: /\B\?(\\\d{1,3})/}, {begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/}, {begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/}, {begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/}, {begin: /\B\?\\(c|C-)[\x20-\x7e]/}, {begin: /\B\?\\?\S/}, {
                    begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
                    returnBegin: !0,
                    contains: [{begin: /<<[-~]?'?/}, e.END_SAME_AS_BEGIN({
                        begin: /(\w+)/,
                        end: /(\w+)/,
                        contains: [e.BACKSLASH_ESCAPE, s]
                    })]
                }]
            }, l = "[0-9](_?[0-9])*", c = {
                className: "number",
                relevance: 0,
                variants: [{begin: `\\b([1-9](_?[0-9])*|0)(\\.(${l}))?([eE][+-]?(${l})|r)?i?\\b`}, {begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"}, {begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"}, {begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"}, {begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"}, {begin: "\\b0(_?[0-7])+r?i?\\b"}]
            }, g = {className: "params", begin: "\\(", end: "\\)", endsParent: !0, keywords: t}, d = [o, {
                className: "class",
                beginKeywords: "class module",
                end: "$|;",
                illegal: /=/,
                contains: [e.inherit(e.TITLE_MODE, {begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"}), {
                    begin: "<\\s*",
                    contains: [{begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE, relevance: 0}]
                }].concat(r)
            }, {
                className: "function",
                begin: Ue(/def\s+/, (u = n + "\\s*(\\(|;|$)", Ue("(?=", u, ")"))),
                relevance: 0,
                keywords: "def",
                end: "$|;",
                contains: [e.inherit(e.TITLE_MODE, {begin: n}), g].concat(r)
            }, {begin: e.IDENT_RE + "::"}, {
                className: "symbol",
                begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                relevance: 0
            }, {className: "symbol", begin: ":(?!\\s)", contains: [o, {begin: n}], relevance: 0}, c, {
                className: "variable",
                begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
            }, {
                className: "params",
                begin: /\|/,
                end: /\|/,
                relevance: 0,
                keywords: t
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                keywords: "unless",
                contains: [{
                    className: "regexp",
                    contains: [e.BACKSLASH_ESCAPE, s],
                    illegal: /\n/,
                    variants: [{begin: "/", end: "/[a-z]*"}, {begin: /%r\{/, end: /\}[a-z]*/}, {
                        begin: "%r\\(",
                        end: "\\)[a-z]*"
                    }, {begin: "%r!", end: "![a-z]*"}, {begin: "%r\\[", end: "\\][a-z]*"}]
                }].concat(i, r),
                relevance: 0
            }].concat(i, r);
        var u;
        s.contains = d, g.contains = d;
        const b = [{begin: /^\s*=>/, starts: {end: "$", contains: d}}, {
            className: "meta",
            begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
            starts: {end: "$", contains: d}
        }];
        return r.unshift(i), {
            name: "Ruby",
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            keywords: t,
            illegal: /\/\*/,
            contains: [e.SHEBANG({binary: "ruby"})].concat(b).concat(r).concat(d)
        }
    };
    var He = function (e) {
        const n = {className: "subst", variants: [{begin: "\\$[A-Za-z0-9_]+"}, {begin: /\$\{/, end: /\}/}]}, t = {
            className: "string",
            variants: [{begin: '"""', end: '"""'}, {
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE]
            }, {begin: '[a-z]+"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE, n]}, {
                className: "string",
                begin: '[a-z]+"""',
                end: '"""',
                contains: [n],
                relevance: 10
            }]
        }, a = {className: "type", begin: "\\b[A-Z][A-Za-z0-9_]*", relevance: 0}, i = {
            className: "title",
            begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
            relevance: 0
        }, r = {
            className: "class",
            beginKeywords: "class object trait type",
            end: /[:={\[\n;]/,
            excludeEnd: !0,
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                beginKeywords: "extends with",
                relevance: 10
            }, {
                begin: /\[/,
                end: /\]/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [a]
            }, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [a]
            }, i]
        }, s = {className: "function", beginKeywords: "def", end: /[:={\[(\n;]/, excludeEnd: !0, contains: [i]};
        return {
            name: "Scala",
            keywords: {
                literal: "true false null",
                keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t, {
                className: "symbol",
                begin: "'\\w[\\w\\d_]*(?!')"
            }, a, s, r, e.C_NUMBER_MODE, {className: "meta", begin: "@[A-Za-z]+"}]
        }
    };
    var Ze = function (e) {
        return {
            name: "Shell Session",
            aliases: ["console"],
            contains: [{
                className: "meta",
                begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
                starts: {end: /[^\\](?=\s*$)/, subLanguage: "bash"}
            }]
        }
    };

    function Ge(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function Fe(...e) {
        return e.map((e => Ge(e))).join("")
    }

    function qe(...e) {
        return "(" + e.map((e => Ge(e))).join("|") + ")"
    }

    var We = function (e) {
        const n = e.COMMENT("--", "$"), t = ["true", "false", "unknown"],
            a = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"],
            i = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"],
            r = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"],
            s = i,
            o = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update   ", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter((e => !i.includes(e))),
            l = {begin: Fe(/\b/, qe(...s), /\s*\(/), keywords: {built_in: s}};
        return {
            name: "SQL",
            case_insensitive: !0,
            illegal: /[{}]|<\//,
            keywords: {
                $pattern: /\b[\w\.]+/,
                keyword: function (e, {exceptions: n, when: t} = {}) {
                    const a = t;
                    return n = n || [], e.map((e => e.match(/\|\d+$/) || n.includes(e) ? e : a(e) ? `${e}|0` : e))
                }(o, {when: e => e.length < 3}),
                literal: t,
                type: a,
                built_in: ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"]
            },
            contains: [{
                begin: qe(...r),
                keywords: {$pattern: /[\w\.]+/, keyword: o.concat(r), literal: t, type: a}
            }, {
                className: "type",
                begin: qe("double precision", "large object", "with timezone", "without timezone")
            }, l, {className: "variable", begin: /@[a-z0-9]+/}, {
                className: "string",
                variants: [{begin: /'/, end: /'/, contains: [{begin: /''/}]}]
            }, {
                begin: /"/,
                end: /"/,
                contains: [{begin: /""/}]
            }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, n, {
                className: "operator",
                begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                relevance: 0
            }]
        }
    };

    function Qe(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }

    function Xe(e) {
        return Ve("(?=", e, ")")
    }

    function Ve(...e) {
        return e.map((e => Qe(e))).join("")
    }

    function Je(...e) {
        return "(" + e.map((e => Qe(e))).join("|") + ")"
    }

    var Ye = function (e) {
        const n = Ve(/[A-Z_]/, Ve("(", /[A-Z0-9_.-]*:/, ")?"), /[A-Z0-9_.-]*/),
            t = {className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},
            a = {begin: /\s/, contains: [{className: "meta-keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/}]},
            i = e.inherit(a, {begin: /\(/, end: /\)/}), r = e.inherit(e.APOS_STRING_MODE, {className: "meta-string"}),
            s = e.inherit(e.QUOTE_STRING_MODE, {className: "meta-string"}), o = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [{className: "attr", begin: /[A-Za-z0-9._:-]+/, relevance: 0}, {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [{
                        className: "string",
                        endsParent: !0,
                        variants: [{begin: /"/, end: /"/, contains: [t]}, {
                            begin: /'/,
                            end: /'/,
                            contains: [t]
                        }, {begin: /[^\s"'=<>`]+/}]
                    }]
                }]
            };
        return {
            name: "HTML, XML",
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
            case_insensitive: !0,
            contains: [{
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [a, s, r, i, {
                    begin: /\[/,
                    end: /\]/,
                    contains: [{className: "meta", begin: /<![a-z]/, end: />/, contains: [a, i, s, r]}]
                }]
            }, e.COMMENT(/<!--/, /-->/, {relevance: 10}), {
                begin: /<!\[CDATA\[/,
                end: /\]\]>/,
                relevance: 10
            }, t, {className: "meta", begin: /<\?xml/, end: /\?>/, relevance: 10}, {
                className: "tag",
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: {name: "style"},
                contains: [o],
                starts: {end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"]}
            }, {
                className: "tag",
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: {name: "script"},
                contains: [o],
                starts: {end: /<\/script>/, returnEnd: !0, subLanguage: ["javascript", "handlebars", "xml"]}
            }, {className: "tag", begin: /<>|<\/>/}, {
                className: "tag",
                begin: Ve(/</, Xe(Ve(n, Je(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [{className: "name", begin: n, relevance: 0, starts: o}]
            }, {
                className: "tag",
                begin: Ve(/<\//, Xe(Ve(n, />/))),
                contains: [{className: "name", begin: n, relevance: 0}, {begin: />/, relevance: 0, endsParent: !0}]
            }]
        }
    };
    var en = function (e) {
        var n = "true false yes no null", t = "[\\w#;/?:@&=+$,.~*'()[\\]]+", a = {
                className: "string",
                relevance: 0,
                variants: [{begin: /'/, end: /'/}, {begin: /"/, end: /"/}, {begin: /\S+/}],
                contains: [e.BACKSLASH_ESCAPE, {
                    className: "template-variable",
                    variants: [{begin: /\{\{/, end: /\}\}/}, {begin: /%\{/, end: /\}/}]
                }]
            }, i = e.inherit(a, {variants: [{begin: /'/, end: /'/}, {begin: /"/, end: /"/}, {begin: /[^\s,{}[\]]+/}]}),
            r = {
                className: "number",
                begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
            }, s = {end: ",", endsWithParent: !0, excludeEnd: !0, keywords: n, relevance: 0},
            o = {begin: /\{/, end: /\}/, contains: [s], illegal: "\\n", relevance: 0},
            l = {begin: "\\[", end: "\\]", contains: [s], illegal: "\\n", relevance: 0}, c = [{
                className: "attr",
                variants: [{begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)"}, {begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'}, {begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]
            }, {className: "meta", begin: "^---\\s*$", relevance: 10}, {
                className: "string",
                begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
            }, {
                begin: "<%[%=-]?",
                end: "[%-]?%>",
                subLanguage: "ruby",
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            }, {className: "type", begin: "!\\w+!" + t}, {className: "type", begin: "!<" + t + ">"}, {
                className: "type",
                begin: "!" + t
            }, {className: "type", begin: "!!" + t}, {
                className: "meta",
                begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
            }, {className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"}, {
                className: "bullet",
                begin: "-(?=[ ]|$)",
                relevance: 0
            }, e.HASH_COMMENT_MODE, {beginKeywords: n, keywords: {literal: n}}, r, {
                className: "number",
                begin: e.C_NUMBER_RE + "\\b",
                relevance: 0
            }, o, l, a], g = [...c];
        return g.pop(), g.push(i), s.contains = g, {name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: c}
    };
    !function () {
        "use strict";
        ne.registerLanguage("asciidoc", ae), ne.registerLanguage("bash", re), ne.registerLanguage("css", ue), ne.registerLanguage("diff", be), ne.registerLanguage("dockerfile", me), ne.registerLanguage("gradle", he), ne.registerLanguage("groovy", _e), ne.registerLanguage("http", ve), ne.registerLanguage("java", xe), ne.registerLanguage("javascript", Te), ne.registerLanguage("json", Ce), ne.registerLanguage("kotlin", $e), ne.registerLanguage("markdown", je), ne.registerLanguage("nix", ze), ne.registerLanguage("properties", Pe), ne.registerLanguage("ruby", Ke), ne.registerLanguage("scala", He), ne.registerLanguage("shell", Ze), ne.registerLanguage("bash", Ze), ne.registerLanguage("sql", We), ne.registerLanguage("xml", Ye), ne.registerLanguage("yaml", en);
        for (const e of document.querySelectorAll("pre.highlight > code")) ne.highlightBlock(e)
    }()
}();
!function () {
    "use strict";

    function t(t) {
        const e = n('<div class="tabs"></div>');
        return t.prepend(e), e
    }

    function e(t, e) {
        const o = t.querySelector(".title").textContent, c = t.querySelectorAll(".content").item(0),
            s = function (t, e) {
                let n = t.nextElementSibling;
                for (; n;) {
                    if (n.matches(e)) return n;
                    n = n.nextElementSibling
                }
            }(t, ".colist");
        s && c.append(s);
        const r = n('<div class="tab">' + o + "</div>");
        return r.dataset.blockName = o, c.dataset.blockName = o, e.append(r), {tabElement: r, content: c}
    }

    function n(t) {
        const e = document.createElement("template");
        return e.innerHTML = t, e.content.firstChild
    }

    function o(t) {
        let e = t.previousElementSibling;
        for (; e && !e.classList.contains("primary");) e = e.previousElementSibling;
        return e
    }

    function c(t) {
        const e = this.textContent;
        window.localStorage.setItem(t, e);
        for (const n of document.querySelectorAll(".tab")) r(n) === t && n.textContent === e && s(n)
    }

    function s(t) {
        for (const e of t.parentNode.children) e.classList.remove("selected");
        t.classList.add("selected");
        for (const e of t.parentNode.parentNode.children) e.classList.contains("content") && (t.dataset.blockName === e.dataset.blockName ? e.classList.remove("hidden") : e.classList.add("hidden"))
    }

    function r(t) {
        const e = [];
        for (t of t.parentNode.querySelectorAll(".tab")) e.push(t.textContent.toLowerCase());
        return e.sort().join("-")
    }

    window.addEventListener("load", (function () {
        (function () {
            for (const n of document.querySelectorAll(".primary")) {
                if (n.querySelector("div.switch")) return void console.debug("Skipping tabs due to existing blockswitches");
                e(n, t(n)).tabElement.classList.add("selected"), n.querySelector(".title").remove(), n.classList.add("tabs-content")
            }
            for (const t of document.querySelectorAll(".secondary")) {
                const n = o(t);
                if (n) {
                    const o = e(t, n.querySelector(".tabs"));
                    o.content.classList.add("hidden"), n.append(o.content), t.remove()
                } else console.error("Found secondary block with no primary sibling")
            }
        })(), function () {
            for (const t of document.querySelectorAll(".tab")) {
                const e = r(t);
                t.addEventListener("click", c.bind(t, e)), t.textContent === window.localStorage.getItem(e) && s(t)
            }
        }()
    }))
}();
!function () {
    var t = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }, e = {};
    (function (t) {
        (function () {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e = n
        }).call(this)
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    var n = "object" == typeof self && self && self.Object === Object && self, o = e || n || Function("return this")(),
        r = function () {
            return o.Date.now()
        }, i = /\s/;
    var c = function (t) {
        for (var e = t.length; e-- && i.test(t.charAt(e));) ;
        return e
    }, u = /^\s+/;
    var a = function (t) {
        return t ? t.slice(0, c(t) + 1).replace(u, "") : t
    }, l = o.Symbol, f = Object.prototype, d = f.hasOwnProperty, s = f.toString, m = l ? l.toStringTag : void 0;
    var v = function (t) {
        var e = d.call(t, m), n = t[m];
        try {
            t[m] = void 0;
            var o = !0
        } catch (t) {
        }
        var r = s.call(t);
        return o && (e ? t[m] = n : delete t[m]), r
    }, p = Object.prototype.toString;
    var g = function (t) {
        return p.call(t)
    }, h = l ? l.toStringTag : void 0;
    var y = function (t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : h && h in Object(t) ? v(t) : g(t)
    };
    var w = function (t) {
        return null != t && "object" == typeof t
    };
    var E = function (t) {
        return "symbol" == typeof t || w(t) && "[object Symbol]" == y(t)
    }, b = /^[-+]0x[0-9a-f]+$/i, L = /^0b[01]+$/i, j = /^0o[0-7]+$/i, x = parseInt;
    var S = function (e) {
        if ("number" == typeof e) return e;
        if (E(e)) return NaN;
        if (t(e)) {
            var n = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = t(n) ? n + "" : n
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = a(e);
        var o = L.test(e);
        return o || j.test(e) ? x(e.slice(2), o ? 2 : 8) : b.test(e) ? NaN : +e
    }, T = Math.max, O = Math.min;
    var N = function (e, n, o) {
        var i, c, u, a, l, f, d = 0, s = !1, m = !1, v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function p(t) {
            var n = i, o = c;
            return i = c = void 0, d = t, a = e.apply(o, n)
        }

        function g(t) {
            return d = t, l = setTimeout(y, n), s ? p(t) : a
        }

        function h(t) {
            var e = t - f;
            return void 0 === f || e >= n || e < 0 || m && t - d >= u
        }

        function y() {
            var t = r();
            if (h(t)) return w(t);
            l = setTimeout(y, function (t) {
                var e = n - (t - f);
                return m ? O(e, u - (t - d)) : e
            }(t))
        }

        function w(t) {
            return l = void 0, v && i ? p(t) : (i = c = void 0, a)
        }

        function E() {
            var t = r(), e = h(t);
            if (i = arguments, c = this, f = t, e) {
                if (void 0 === l) return g(f);
                if (m) return clearTimeout(l), l = setTimeout(y, n), p(f)
            }
            return void 0 === l && (l = setTimeout(y, n)), a
        }

        return n = S(n) || 0, t(o) && (s = !!o.leading, u = (m = "maxWait" in o) ? T(S(o.maxWait) || 0, n) : u, v = "trailing" in o ? !!o.trailing : v), E.cancel = function () {
            void 0 !== l && clearTimeout(l), d = 0, i = f = c = l = void 0
        }, E.flush = function () {
            return void 0 === l ? a : w(r())
        }, E
    };
    var q = function (e, n, o) {
        var r = !0, i = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return t(o) && (r = "leading" in o ? !!o.leading : r, i = "trailing" in o ? !!o.trailing : i), N(e, n, {
            leading: r,
            maxWait: n,
            trailing: i
        })
    };
    !function () {
        "use strict";
        let t, e, n, o, r, i, c = null, u = !1;

        function a() {
            v();
            const t = r.get(window.location.hash), e = g(window.location.hash);
            t && E(e) && (u = !0, b("activating window location hash"), y(t.parentElement)), f()
        }

        window.addEventListener("load", (function () {
            if (t = document.querySelector("#toc"), e = document.querySelector("#toggle-toc"), n = document.querySelector("#content"), !t || !n) return;
            o = function () {
                const e = r(), o = [];
                for (let t = 0; t <= e; t++) o.push("h" + (t + 1) + "[id]");
                return n.querySelectorAll(o);

                function r() {
                    let e = 1;
                    for (const n of t.querySelectorAll("ul", "ol")) e = Math.max(e, i(n));
                    return e
                }

                function i(e) {
                    let n = 0;
                    for (; e && e !== t;) n += "UL" === e.nodeName || "OL" === e.nodeName ? 1 : 0, e = e.parentElement;
                    return e ? n : -1
                }
            }(), r = function () {
                const e = new Map;
                for (const n of t.querySelectorAll("li > a")) {
                    const t = n.getAttribute("href");
                    t && e.set(t, n)
                }
                return e
            }(), i = function () {
                const t = new Map;
                for (const e of o) {
                    const n = h(e);
                    if (n) {
                        const o = r.get(n);
                        if (o) {
                            const n = o.parentElement;
                            t.set(e, n)
                        }
                    }
                }
                return t
            }(), a(), window.addEventListener("hashchange", a), window.addEventListener("scroll", l), window.addEventListener("scroll", f), window.addEventListener("resize", d), t.addEventListener("click", s), e.addEventListener("click", m)
        }));
        const l = q((function () {
            v(), u || p()
        }), 50, {leading: !0}), f = N((function () {
            if (b("scrolling ended"), v(), u = !1, c) {
                E(g(h(c))) || p()
            } else p()
        }), 50), d = q((function () {
            v()
        }), 50, {leading: !0});

        function s(t) {
            if ("A" === t.target.nodeName) {
                const e = t.target.parentElement;
                if (e && "back-to-index" === e.id) return;
                u = !0, b("activating clicked toc element"), y(t.target.parentElement)
            }
        }

        function m(t) {
            t.stopPropagation();
            document.body.classList.toggle("show-toc") ? document.documentElement.addEventListener("click", m) : document.documentElement.removeEventListener("click", m)
        }

        function v() {
            const t = window.getComputedStyle(document.documentElement),
                e = parseInt(t.getPropertyValue("--layout-banner-height"), 10);
            w() >= e ? document.body.classList.add("fixed-toc") : document.body.classList.remove("fixed-toc")
        }

        function p() {
            b("activating top header element");
            const t = function () {
                const t = w() + 45;
                for (let e = 0; e < o.length; ++e) if (o[e].offsetTop > t) return o[e - 1 >= 0 ? e - 1 : 0];
                return o[o.length - 1]
            }();
            y(i.get(t))
        }

        function g(t) {
            for (let e = 0; e < o.length; ++e) if (h(o[e]) === t) return o[e];
            return null
        }

        function h(t) {
            const e = t.querySelector("a[href]");
            return e ? e.getAttribute("href") : null
        }

        function y(e) {
            if (e && e !== c) for (b("activating " + e.textContent), function (e) {
                if (e) for (e.classList.remove("active"); e.parentElement && e.parentElement !== t;) e.parentElement.classList.remove("expanded"), e = e.parentElement
            }(c), c = e, e.classList.add("active"); e.parentElement && e.parentElement !== t;) e.parentElement.classList.add("expanded"), e = e.parentElement
        }

        function w() {
            return document.documentElement.scrollTop || document.body.scrollTop
        }

        function E(t) {
            if (!t) return !1;
            const e = t.getBoundingClientRect();
            return e.top >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        }

        function b(t) {
            false
        }
    }()
}();
//# sourceMappingURL=site.js.map
