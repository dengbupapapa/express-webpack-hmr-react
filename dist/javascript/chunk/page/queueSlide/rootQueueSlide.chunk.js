webpackJsonp([5],{630:function(e,t,n){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),p=function(t){function n(){return r(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"render",value:function(){return e.createElement("div",{className:"layoutBox"+(this.props.moreStyle?" "+this.props.moreStyle:"")},this.props.children)}}]),n}(s.Component);t["default"]=p}).call(t,n(2))},640:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),l=n(641),c=r(l),h=function(t){function n(e){o(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.retraceSlideArr=[],t.state={nowPathname:t.props.location.pathname,prevPathname:"",renderComponent:!0},t}return s(n,t),p(n,[{key:"componentDidMount",value:function(){this.state.renderComponent&&this.setState({renderComponent:!1})}},{key:"componentWillReceiveProps",value:function(e){var t=this.state,n=(t.nowPathname,t.prevPathname,e.location.pathname),r=this.props,i=r.location.pathname;r.animateType;this.setState({nowPathname:n,prevPathname:i})}},{key:"animateTypeFun",value:function(e,t){var n=e.animateType,r=e.parentPath,o=e.sonPath,a=e.runpath,s=e.children,p=e.location.pathname,u=t.nowPathname,l=t.prevPathname,c=void 0,h=this.retraceSlideArr;if("levelSlide"==n)a=[r,o],c=p==r;else if("retraceSlide"==n){var f=h.indexOf(u),d=h.includes(u);d?h=h.slice(0,f+1):h.push(u),this.retraceSlideArr=h,c=d}else"queueSlide"==n&&(c=a.indexOf(p)<a.indexOf(l));return{pathname:p,children:s,runpath:[].concat(i(a),[""]),prevPathname:l,className:c?"reverse-"+n:n}}},{key:"render",value:function(){var t=this.animateTypeFun(this.props,this.state),n=t.children,r=t.pathname,i=t.runpath,o=t.prevPathname,a=t.className,s=i&&i.includes(r)&&i.includes(o);return e.createElement(c["default"],{component:"div",className:"transition-wrapper",transitionName:a,transitionAppear:!1,transitionEnter:s,transitionLeave:s,transitionEnterTimeout:500,transitionLeaveTimeout:500},s?(0,u.cloneElement)(n,{key:r}):n)}}]),n}(u.Component);t["default"]=h}).call(t,n(2))},641:function(e,t,n){e.exports=n(642)},642:function(e,t,n){"use strict";function r(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}}}var i=n(4),o=n(3),a=n(643),s=n(645),p=o.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:s.propTypes.name,transitionAppear:o.PropTypes.bool,transitionEnter:o.PropTypes.bool,transitionLeave:o.PropTypes.bool,transitionAppearTimeout:r("Appear"),transitionEnterTimeout:r("Enter"),transitionLeaveTimeout:r("Leave")},getDefaultProps:function(){return{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return o.createElement(s,{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},e)},render:function(){return o.createElement(a,i({},this.props,{childFactory:this._wrapChild}))}});e.exports=p},643:function(e,t,n){"use strict";var r=n(4),i=n(3),o=(n(110),n(644)),a=n(12),s=i.createClass({displayName:"ReactTransitionGroup",propTypes:{component:i.PropTypes.any,childFactory:i.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:a.thatReturnsArgument}},getInitialState:function(){return{children:o.getChildMapping(this.props.children)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidMount:function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t)},componentWillReceiveProps:function(e){var t;t=o.getChildMapping(e.children);var n=this.state.children;this.setState({children:o.mergeChildMappings(n,t)});var r;for(r in t){var i=n&&n.hasOwnProperty(r);!t[r]||i||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(r in n){var a=t&&t.hasOwnProperty(r);!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},performAppear:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillAppear?t.componentWillAppear(this._handleDoneAppearing.bind(this,e)):this._handleDoneAppearing(e)},_handleDoneAppearing:function(e){var t=this.refs[e];t.componentDidAppear&&t.componentDidAppear(),delete this.currentlyTransitioningKeys[e];var n;n=o.getChildMapping(this.props.children),n&&n.hasOwnProperty(e)||this.performLeave(e)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e];t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var n;n=o.getChildMapping(this.props.children),n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e];t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var n;n=o.getChildMapping(this.props.children),n&&n.hasOwnProperty(e)?this.performEnter(e):this.setState(function(t){var n=r({},t.children);return delete n[e],{children:n}})},render:function(){var e=[];for(var t in this.state.children){var n=this.state.children[t];n&&e.push(i.cloneElement(this.props.childFactory(n),{ref:t,key:t}))}var o=r({},this.props);return delete o.transitionLeave,delete o.transitionName,delete o.transitionAppear,delete o.transitionEnter,delete o.childFactory,delete o.transitionLeaveTimeout,delete o.transitionEnterTimeout,delete o.transitionAppearTimeout,delete o.component,i.createElement(this.props.component,o,e)}});e.exports=s},644:function(e,t,n){"use strict";var r=n(122),i={getChildMapping:function(e,t){return e?r(e):e},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},i=[];for(var o in e)t.hasOwnProperty(o)?i.length&&(r[o]=i,i=[]):i.push(o);var a,s={};for(var p in t){if(r.hasOwnProperty(p))for(a=0;a<r[p].length;a++){var u=r[p][a];s[r[p][a]]=n(u)}s[p]=n(p)}for(a=0;a<i.length;a++)s[i[a]]=n(i[a]);return s}};e.exports=i},645:function(e,t,n){"use strict";var r=n(3),i=n(32),o=n(646),a=n(647),s=n(30),p=17,u=r.createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:r.PropTypes.oneOfType([r.PropTypes.string,r.PropTypes.shape({enter:r.PropTypes.string,leave:r.PropTypes.string,active:r.PropTypes.string}),r.PropTypes.shape({enter:r.PropTypes.string,enterActive:r.PropTypes.string,leave:r.PropTypes.string,leaveActive:r.PropTypes.string,appear:r.PropTypes.string,appearActive:r.PropTypes.string})]).isRequired,appear:r.PropTypes.bool,enter:r.PropTypes.bool,leave:r.PropTypes.bool,appearTimeout:r.PropTypes.number,enterTimeout:r.PropTypes.number,leaveTimeout:r.PropTypes.number},transition:function(e,t,n){var r=i.findDOMNode(this);if(!r)return void(t&&t());var s=this.props.name[e]||this.props.name+"-"+e,p=this.props.name[e+"Active"]||s+"-active",u=null,l=function(e){e&&e.target!==r||(clearTimeout(u),o.removeClass(r,s),o.removeClass(r,p),a.removeEndEventListener(r,l),t&&t())};o.addClass(r,s),this.queueClassAndNode(p,r),n?(u=setTimeout(l,n),this.transitionTimeouts.push(u)):a.addEndEventListener(r,l)},queueClassAndNode:function(e,t){this.classNameAndNodeQueue.push({className:e,node:t}),this.timeout||(this.timeout=setTimeout(this.flushClassNameAndNodeQueue,p))},flushClassNameAndNodeQueue:function(){this.isMounted()&&this.classNameAndNodeQueue.forEach(function(e){o.addClass(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},componentWillAppear:function(e){this.props.appear?this.transition("appear",e,this.props.appearTimeout):e()},componentWillEnter:function(e){this.props.enter?this.transition("enter",e,this.props.enterTimeout):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e,this.props.leaveTimeout):e()},render:function(){return s(this.props.children)}});e.exports=u},646:function(e,t,n){"use strict";function r(e,t){for(var n=e;n.parentNode;)n=n.parentNode;var r=n.querySelectorAll(t);return Array.prototype.indexOf.call(r,e)!==-1}var i=n(8),o={addClass:function(e,t){return/\s/.test(t)?i(!1):void 0,t&&(e.classList?e.classList.add(t):o.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return/\s/.test(t)?i(!1):void 0,t&&(e.classList?e.classList.remove(t):o.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?o.addClass:o.removeClass)(e,t)},hasClass:function(e,t){return/\s/.test(t)?i(!1):void 0,e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1},matchesSelector:function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||function(t){return r(e,t)};return n.call(e,t)}};e.exports=o},647:function(e,t,n){"use strict";function r(){var e=s("animationend"),t=s("transitionend");e&&p.push(e),t&&p.push(t)}function i(e,t,n){e.addEventListener(t,n,!1)}function o(e,t,n){e.removeEventListener(t,n,!1)}var a=n(46),s=n(100),p=[];a.canUseDOM&&r();var u={addEndEventListener:function(e,t){return 0===p.length?void window.setTimeout(t,0):void p.forEach(function(n){i(e,n,t)})},removeEndEventListener:function(e,t){0!==p.length&&p.forEach(function(n){o(e,n,t)})}};e.exports=u},654:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(546),l=n(2),c=n(640),h=r(c),f=n(630),d=r(f),m=function(t){function n(){return i(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,t),p(n,[{key:"render",value:function(){var t=this.props,n=t.location.pathname,r=t.children;return e.createElement(d["default"],{moreStyle:"fn-h-100"},e.createElement("div",null,e.createElement(u.Link,{to:"/queueSlide1",className:"/queueSlide1"==n?"fn-font-s18":""},"queueSlide1")," ",e.createElement(u.Link,{to:"/queueSlide2",className:"/queueSlide2"==n?"fn-font-s18":""},"queueSlide2")," ",e.createElement(u.Link,{to:"/queueSlide3",className:"/queueSlide3"==n?"fn-font-s18":""},"queueSlide3")),e.createElement(h["default"],s({},this.props,{animateType:"queueSlide",runpath:["/queueSlide1","/queueSlide2","/queueSlide3"]}),e.createElement("div",{className:"fn-bgd-fff"},r)))}}]),n}(l.Component);t["default"]=m}).call(t,n(2))}});
//# sourceMappingURL=rootQueueSlide.chunk.js.map?ab6fc8f3e23e341ddb97