webpackJsonp([2],{637:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=(n(546),n(2)),c=function(t){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),u(n,[{key:"componentDidMount",value:function(){this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave.bind(this))}},{key:"routerWillLeave",value:function(e){var t=e.query.title;t&&this.props.setRetraceSlideTitle(t)}},{key:"render",value:function(){return e.createElement("div",{className:"fn-h-rate100 fn-w-rate100 fn-bgd-000 fn-font-s48"},"老子是背景")}}]),n}(a.Component);t["default"]=c}).call(t,n(2))}});
//# sourceMappingURL=indexType5.chunk.js.map?ab6fc8f3e23e341ddb97