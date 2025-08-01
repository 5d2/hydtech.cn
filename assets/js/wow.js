/*! WOW - v1.0.1 - 2014-09-03

* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    },
    g = [].indexOf ||
    function(a) {
        for (var b = 0,
        c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return - 1
    };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b) d = b[c],
            null == a[c] && (a[c] = d);
            return a
        },
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        },
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        },
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        },
        a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight: document.documentElement.clientHeight
        },
        a
    } (),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b]
        },
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        },
        a
    } ()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {},
        a
    } ()),
    d = this.getComputedStyle ||
    function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e,
            function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        },
        this
    },
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            this.animationNameCache = new c
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        },
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a],
                e.push(b);
                return e
            }.call(this), this.all = function() {
                var a, c, d, e;
                for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a],
                e.push(b);
                return e
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();
            else {
                for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c],
                this.applyStyle(b, !0);
                this.util().addEvent(window, "scroll", this.scrollHandler),
                this.util().addEvent(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)
            }
            return this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [], e = 0, f = b.length; f > e; e++) d = b[e],
                    g.push(function() {
                        var a, b, e, f;
                        for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a],
                        f.push(this.doSync(c));
                        return f
                    }.call(a));
                    return g
                }
            } (this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        },
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        },
        e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        },
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (!this.stopped) {
                if (null == a && (a = this.element), 1 !== a.nodeType) return;
                for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c],
                g.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b), this.all.push(b), f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        },
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = "" + a.className + " " + this.config.animateClass
        },
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            } (this))
        },
        e.prototype.animate = function() {
            return "requestAnimationFrame" in window ?
            function(a) {
                return window.requestAnimationFrame(a)
            }: function(a) {
                return a()
            }
        } (),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b],
            e.push(a.setAttribute("style", "visibility: visible;"));
            return e
        },
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden": "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none": this.cachedAnimationName(a)
            }),
            a
        },
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            f = [];
            for (c in b) d = b[c],
            a["" + c] = d,
            f.push(function() {
                var b, f, g, h;
                for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b],
                h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                return h
            }.call(this));
            return f
        },
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++) f = i[g],
            c = c || e.getPropertyCSSValue("-" + f + "-" + b);
            return c
        },
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch(c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "": b
        },
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        },
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        },
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        },
        e.prototype.scrollCallback = function() {
            var a;
            return ! this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b],
                a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        },
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop;) a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
            return b
        },
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        },
        e.prototype.util = function() {
            return null != this._util ? this._util: this._util = new b
        },
        e.prototype.disabled = function() {
            return ! this.config.mobile && this.util().isMobile(navigator.userAgent)
        },
        e
    } ()
}).call(this);