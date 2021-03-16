(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function frameEnd() {
	var tl = new TimelineMax();

	tl.set(".frame2", { opacity: 1 });
	tl.from(".bg2", .2, { opacity: 0 });

	tl.from(".phone", .3, { y: size.h, opacity: 1 }, "+=.3");
	tl.from(".ill", .3, { scale: 0 });

	tl.from(".t2", .01, { opacity: 0 }, "+=.3");
	tl.from(".cta1", .01, { opacity: 0 }, "+=1.5");
	tl.to(".cta1", .01, { opacity: 0 }, "+=2.5");
	tl.from(".cta2", .2, { opacity: 0 }, "+=.2");

	return tl;
}

function transformOrigin(id, percent) {
	var el = document.getElementById(id);
	var w = el.offsetWidth;
	var h = el.offsetHeight;
	var transformOrigin = {
		x: w * percent.w,
		y: h * percent.h
	};
	var pos = {
		x: -transformOrigin.x / 2,
		y: -transformOrigin.y / 2
	};

	var result = _extends({
		transformOrigin: transformOrigin.x + "px " + transformOrigin.y + "px"
	}, pos);

	return result;
}

function init() {

	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

exports.size = size;
exports.frameEnd = frameEnd;
exports.init = init;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJs = require('./common.js');

var _strikerJs = require('./striker.js');

function start() {

	var tl = (0, _commonJs.init)("468x60");
	// return

	TweenMax.from(".player2", 1.3, { x: "-=80", y: "+=20" });

	(0, _strikerJs.player)(1.5);
	tl.from(".t1a", .15, { x: "-=100", opacity: 0 }, 1);

	tl.add((0, _commonJs.frameEnd)(), 3.1);
}

start();

module.exports = {};

},{"./common.js":1,"./striker.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function player() {
	var speed = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	var obj = arguments.length <= 1 || arguments[1] === undefined ? { x: "+=50", y: "+=20" } : arguments[1];

	var tl = new TimelineMax();

	tl.add("start", 0);
	var total = 4;
	// for(let i=total; i>0;i--){
	for (var i = 1; i <= total; i++) {
		var percent = i / total * .17;

		// let obj = {x:0, y:0, ease:Power4.easeOut}
		if (i !== total) {
			obj = _extends({}, obj);
		}
		// console.log(percent);
		tl.from("#player" + i, .8 * speed, _extends({}, obj), "start+=" + percent);
	}

	// TweenLite.to(".ball", 1.2*speed, {x:0, y:0, ease:Power4.easeOut, delay:.17})
	return tl;
}

exports.player = player;

},{}],4:[function(require,module,exports){
'use strict';

var _commonJsPicksJs = require('../../_common/js/picks.js');

(0, _commonJsPicksJs.start)();

module.exports = {};

},{"../../_common/js/picks.js":2}]},{},[4])


//# sourceMappingURL=main.js.map
