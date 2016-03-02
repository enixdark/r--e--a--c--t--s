(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}return arr2;
	} else {
		return Array.from(arr);
	}
}

jQuery(document).ready(function ($) {
	var $input = $('#input'),
	    $results = $('#result');

	var keyups = Rx.Observable.fromEvent($input, 'keyup').map(function (e) {
		return e.target.value;
	}).filter(function (text) {
		return text.length > 2;
	});
	var throttled = keyups.throttle(500);
	var suggestions = throttled.distinctUntilChanged();
	// });

	suggestions.subscribe(function (data) {
		console.log("helloworl" + data);

		/* Do something with the data like binding */
		$results.empty();

		$.each([].concat(_toConsumableArray(data)), function (_, value) {
			return $('<p>' + value + '</p>').appendTo($results);
		});
	}, function (error) {
		/* handle any errors */
		$results.empty();
		$('<p>Error: ' + error + '</p>').appendTo($results);
	});
});

},{}]},{},[1])


//# sourceMappingURL=app.js.map
