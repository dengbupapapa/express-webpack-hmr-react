webpackJsonp([1],{601:function(e,t,i){(function(e){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=(i(602),i(605)),l=s(a),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},c=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),u=i(2),h=i(623),p=i(630),f=s(p),v=i(631),g=s(v),S=i(633),m=s(S),y=i(164),w=i(634),b=function(t){function i(){return n(this,i),r(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,t),c(i,[{key:"componentWillMount",value:function(){this.liGather=h.ArrImgs.map(function(t,i){return e.createElement("div",{"data-index":i,key:i,style:{background:"url("+t.src+") center center /cover",height:"400px"}})}.bind(this))}},{key:"render",value:function(){return e.createElement("div",null,e.createElement(f["default"],{moreStyle:"fn-pin-rae"},e.createElement(l["default"],{autoplay:!0,className:m["default"].bannerList},this.liGather)),e.createElement(f["default"],{moreStyle:m["default"]["marginTop-300"]},e.createElement(g["default"],d({ArrContent:h.ArrImgs},this.props))))}}]),i}(u.Component),k=function(e){return e.bannerScroll},T=(0,w.createStructuredSelector)({bannerScroll:k});t["default"]=(0,y.connect)(T)(b)}).call(t,i(2))},602:function(e,t,i){"use strict";i(603),i(604)},603:function(e,t){},604:function(e,t){},605:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=i(458),r=s(n),o=i(380),a=s(o),l=i(381),d=s(l),c=i(450),u=s(c),h=i(4),p=s(h),f=i(606),v=s(f),g=i(2),S=s(g);if("undefined"!=typeof window){var m=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||m}var y=function(e){function t(){return(0,a["default"])(this,t),(0,d["default"])(this,e.apply(this,arguments))}return(0,u["default"])(t,e),t.prototype.render=function(){var e=(0,p["default"])({},this.props);"fade"===e.effect&&(e.fade=!0,e.draggable=!1);var t=e.prefixCls;return e.vertical&&(t=t+" "+t+"-vertical"),S["default"].createElement("div",{className:t},S["default"].createElement(v["default"],(0,r["default"])({ref:"slick"},e)))},t}(S["default"].Component);t["default"]=y,y.defaultProps={dots:!0,arrows:!1,prefixCls:"ant-carousel"},e.exports=t["default"]},606:function(e,t,i){"use strict";e.exports=i(607)},607:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},r=i(2),o=s(r),a=i(608),l=i(4),d=s(l),c=i(618),u=s(c),h=i(620),p=s(h),f=i(613),v=s(f),g=o["default"].createClass({displayName:"Slider",mixins:[p["default"]],innerSlider:null,innerSliderRefHandler:function(e){this.innerSlider=e},getInitialState:function(){return{breakpoint:null}},componentWillMount:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map(function(e){return e.breakpoint});t.sort(function(e,t){return e-t}),t.forEach(function(i,s){var n;n=0===s?(0,u["default"])({minWidth:0,maxWidth:i}):(0,u["default"])({minWidth:t[s-1],maxWidth:i}),e.media(n,function(){e.setState({breakpoint:i})})});var i=(0,u["default"])({minWidth:t.slice(-1)[0]});this.media(i,function(){e.setState({breakpoint:null})})}},slickPrev:function(){this.innerSlider.slickPrev()},slickNext:function(){this.innerSlider.slickNext()},slickGoTo:function(e){this.innerSlider.slickGoTo(e)},render:function(){var e,t,i=this;this.state.breakpoint?(t=this.props.responsive.filter(function(e){return e.breakpoint===i.state.breakpoint}),e="unslick"===t[0].settings?"unslick":(0,d["default"])({},this.props,t[0].settings)):e=(0,d["default"])({},v["default"],this.props);var s=this.props.children;return Array.isArray(s)||(s=[s]),s=s.filter(function(e){return!!e}),"unslick"===e?o["default"].createElement("div",null,s):o["default"].createElement(a.InnerSlider,n({ref:this.innerSliderRefHandler},e),s)}});e.exports=g},608:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.InnerSlider=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},r=i(2),o=s(r),a=i(609),l=s(a),d=i(611),c=s(d),u=i(612),h=s(u),p=i(613),f=s(p),v=i(614),g=s(v),S=i(4),m=s(S),y=i(615),w=i(616),b=i(617);t.InnerSlider=o["default"].createClass({displayName:"InnerSlider",mixins:[c["default"],l["default"]],list:null,track:null,listRefHandler:function(e){this.list=e},trackRefHandler:function(e){this.track=e},getInitialState:function(){return n({},h["default"],{currentSlide:this.props.initialSlide})},getDefaultProps:function(){return f["default"]},componentWillMount:function(){this.props.init&&this.props.init(),this.setState({mounted:!0});for(var e=[],t=0;t<o["default"].Children.count(this.props.children);t++)t>=this.state.currentSlide&&t<this.state.currentSlide+this.props.slidesToShow&&e.push(t);this.props.lazyLoad&&0===this.state.lazyLoadedList.length&&this.setState({lazyLoadedList:e})},componentDidMount:function(){this.initialize(this.props),this.adaptHeight(),window&&(window.addEventListener?window.addEventListener("resize",this.onWindowResized):window.attachEvent("onresize",this.onWindowResized))},componentWillUnmount:function(){this.animationEndCallback&&clearTimeout(this.animationEndCallback),window.addEventListener?window.removeEventListener("resize",this.onWindowResized):window.detachEvent("onresize",this.onWindowResized),this.state.autoPlayTimer&&clearInterval(this.state.autoPlayTimer)},componentWillReceiveProps:function(e){this.props.slickGoTo!=e.slickGoTo?this.changeSlide({message:"index",index:e.slickGoTo,currentSlide:this.state.currentSlide}):this.state.currentSlide>=e.children.length?(this.update(e),this.changeSlide({message:"index",index:e.children.length-e.slidesToShow,currentSlide:this.state.currentSlide})):this.update(e)},componentDidUpdate:function(){this.adaptHeight()},onWindowResized:function(){this.update(this.props),this.setState({animating:!1}),clearTimeout(this.animationEndCallback),delete this.animationEndCallback},slickPrev:function(){this.changeSlide({message:"previous"})},slickNext:function(){this.changeSlide({message:"next"})},slickGoTo:function(e){"number"==typeof e&&this.changeSlide({message:"index",index:e,currentSlide:this.state.currentSlide})},render:function(){var e,t=(0,g["default"])("slick-initialized","slick-slider",this.props.className,{"slick-vertical":this.props.vertical}),i={fade:this.props.fade,cssEase:this.props.cssEase,speed:this.props.speed,infinite:this.props.infinite,centerMode:this.props.centerMode,focusOnSelect:this.props.focusOnSelect?this.selectHandler:null,currentSlide:this.state.currentSlide,lazyLoad:this.props.lazyLoad,lazyLoadedList:this.state.lazyLoadedList,rtl:this.props.rtl,slideWidth:this.state.slideWidth,slidesToShow:this.props.slidesToShow,slidesToScroll:this.props.slidesToScroll,slideCount:this.state.slideCount,trackStyle:this.state.trackStyle,variableWidth:this.props.variableWidth};if(this.props.dots===!0&&this.state.slideCount>=this.props.slidesToShow){var s={dotsClass:this.props.dotsClass,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,currentSlide:this.state.currentSlide,slidesToScroll:this.props.slidesToScroll,clickHandler:this.changeSlide,children:this.props.children,customPaging:this.props.customPaging};e=o["default"].createElement(w.Dots,s)}var r,a,l={infinite:this.props.infinite,centerMode:this.props.centerMode,currentSlide:this.state.currentSlide,slideCount:this.state.slideCount,slidesToShow:this.props.slidesToShow,prevArrow:this.props.prevArrow,nextArrow:this.props.nextArrow,clickHandler:this.changeSlide};this.props.arrows&&(r=o["default"].createElement(b.PrevArrow,l),a=o["default"].createElement(b.NextArrow,l));var d=null;this.props.vertical&&(d={height:this.state.listHeight});var c=null;this.props.vertical===!1?this.props.centerMode===!0&&(c={padding:"0px "+this.props.centerPadding}):this.props.centerMode===!0&&(c={padding:this.props.centerPadding+" 0px"});var u=(0,m["default"])({},d,c);return o["default"].createElement("div",{className:t,onMouseEnter:this.onInnerSliderEnter,onMouseLeave:this.onInnerSliderLeave},r,o["default"].createElement("div",{ref:this.listRefHandler,className:"slick-list",style:u,onMouseDown:this.swipeStart,onMouseMove:this.state.dragging?this.swipeMove:null,onMouseUp:this.swipeEnd,onMouseLeave:this.state.dragging?this.swipeEnd:null,onTouchStart:this.swipeStart,onTouchMove:this.state.dragging?this.swipeMove:null,onTouchEnd:this.swipeEnd,onTouchCancel:this.state.dragging?this.swipeEnd:null,onKeyDown:this.props.accessibility?this.keyHandler:null},o["default"].createElement(y.Track,n({ref:this.trackRefHandler},i),this.props.children)),a,e)}})},609:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var n=i(610),r=i(611),o=(s(r),i(4)),a=s(o),l=i(31),d=s(l),c={changeSlide:function(e){var t,i,s,n,r,o=this.props,a=o.slidesToScroll,l=o.slidesToShow,d=this.state,c=d.slideCount,u=d.currentSlide;if(n=c%a!==0,t=n?0:(c-u)%a,"previous"===e.message)s=0===t?a:l-t,r=u-s,this.props.lazyLoad&&(i=u-s,r=i===-1?c-1:i);else if("next"===e.message)s=0===t?a:t,r=u+s,this.props.lazyLoad&&(r=(u+a)%c+t);else if("dots"===e.message||"children"===e.message){if(r=e.index*e.slidesToScroll,r===e.currentSlide)return}else if("index"===e.message&&(r=parseInt(e.index),r===e.currentSlide))return;this.slideHandler(r)},keyHandler:function(e){e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&this.props.accessibility===!0?this.changeSlide({message:this.props.rtl===!0?"next":"previous"}):39===e.keyCode&&this.props.accessibility===!0&&this.changeSlide({message:this.props.rtl===!0?"previous":"next"}))},selectHandler:function(e){this.changeSlide(e)},swipeStart:function(e){var t,i;this.props.swipe===!1||"ontouchend"in document&&this.props.swipe===!1||this.props.draggable===!1&&e.type.indexOf("mouse")!==-1||(t=void 0!==e.touches?e.touches[0].pageX:e.clientX,i=void 0!==e.touches?e.touches[0].pageY:e.clientY,this.setState({dragging:!0,touchObject:{startX:t,startY:i,curX:t,curY:i}}))},swipeMove:function(e){if(!this.state.dragging)return void e.preventDefault();if(!this.state.animating){this.props.vertical&&this.props.swipeToSlide&&this.props.verticalSwiping&&e.preventDefault();var t,i,s,r=this.state.touchObject;i=(0,n.getTrackLeft)((0,a["default"])({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state)),r.curX=e.touches?e.touches[0].pageX:e.clientX,r.curY=e.touches?e.touches[0].pageY:e.clientY,r.swipeLength=Math.round(Math.sqrt(Math.pow(r.curX-r.startX,2))),this.props.verticalSwiping&&(r.swipeLength=Math.round(Math.sqrt(Math.pow(r.curY-r.startY,2)))),s=(this.props.rtl===!1?1:-1)*(r.curX>r.startX?1:-1),this.props.verticalSwiping&&(s=r.curY>r.startY?1:-1);var o=this.state.currentSlide,l=Math.ceil(this.state.slideCount/this.props.slidesToScroll),d=this.swipeDirection(this.state.touchObject),c=r.swipeLength;this.props.infinite===!1&&(0===o&&"right"===d||o+1>=l&&"left"===d)&&(c=r.swipeLength*this.props.edgeFriction,this.state.edgeDragged===!1&&this.props.edgeEvent&&(this.props.edgeEvent(d),this.setState({edgeDragged:!0}))),this.state.swiped===!1&&this.props.swipeEvent&&(this.props.swipeEvent(d),this.setState({swiped:!0})),t=this.props.vertical?i+c*(this.state.listHeight/this.state.listWidth)*s:i+c*s,this.props.verticalSwiping&&(t=i+c*s),this.setState({touchObject:r,swipeLeft:t,trackStyle:(0,n.getTrackCSS)((0,a["default"])({left:t},this.props,this.state))}),Math.abs(r.curX-r.startX)<.8*Math.abs(r.curY-r.startY)||r.swipeLength>4&&e.preventDefault()}},getNavigableIndexes:function(){var e=void 0,t=0,i=0,s=[];for(this.props.infinite?(t=this.props.slidesToShow*-1,i=this.props.slidesToShow*-1,e=2*this.state.slideCount):e=this.state.slideCount;t<e;)s.push(t),t=i+this.props.slidesToScroll,i+=this.props.slidesToScroll<=this.props.slidesToShow?this.props.slidesToScroll:this.props.slidesToShow;return s},checkNavigable:function(e){var t=this.getNavigableIndexes(),i=0;if(e>t[t.length-1])e=t[t.length-1];else for(var s in t){if(e<t[s]){e=i;break}i=t[s]}return e},getSlideCount:function(){var e=this,t=this.props.centerMode?this.state.slideWidth*Math.floor(this.props.slidesToShow/2):0;if(this.props.swipeToSlide){var i=void 0,s=d["default"].findDOMNode(this.list),n=s.querySelectorAll(".slick-slide");Array.from(n).every(function(s){if(e.props.vertical){if(s.offsetTop+e.getHeight(s)/2>e.state.swipeLeft*-1)return i=s,!1}else if(s.offsetLeft-t+e.getWidth(s)/2>e.state.swipeLeft*-1)return i=s,!1;return!0});var r=Math.abs(i.dataset.index-this.state.currentSlide)||1;return r}return this.props.slidesToScroll},swipeEnd:function(e){if(!this.state.dragging)return void e.preventDefault();var t=this.state.touchObject,i=this.state.listWidth/this.props.touchThreshold,s=this.swipeDirection(t);if(this.props.verticalSwiping&&(i=this.state.listHeight/this.props.touchThreshold),this.setState({dragging:!1,edgeDragged:!1,swiped:!1,swipeLeft:null,touchObject:{}}),t.swipeLength)if(t.swipeLength>i){e.preventDefault();var r=void 0,o=void 0;switch(s){case"left":case"down":o=this.state.currentSlide+this.getSlideCount(),r=this.props.swipeToSlide?this.checkNavigable(o):o,this.state.currentDirection=0;break;case"right":case"up":o=this.state.currentSlide-this.getSlideCount(),r=this.props.swipeToSlide?this.checkNavigable(o):o,this.state.currentDirection=1;break;default:r=this.state.currentSlide}this.slideHandler(r)}else{var l=(0,n.getTrackLeft)((0,a["default"])({slideIndex:this.state.currentSlide,trackRef:this.track},this.props,this.state));this.setState({trackStyle:(0,n.getTrackAnimateCSS)((0,a["default"])({left:l},this.props,this.state))})}},onInnerSliderEnter:function(e){this.props.autoplay&&this.props.pauseOnHover&&this.pause()},onInnerSliderLeave:function(e){this.props.autoplay&&this.props.pauseOnHover&&this.autoPlay()}};t["default"]=c},610:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.getTrackLeft=t.getTrackAnimateCSS=t.getTrackCSS=void 0;var n=i(31),r=s(n),o=i(4),a=s(o),l=function(e,t){return t.reduce(function(t,i){return t&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing",e)},d=t.getTrackCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var t,i,s=e.slideCount+2*e.slidesToShow;e.vertical?i=s*e.slideHeight:t=e.variableWidth?(e.slideCount+2*e.slidesToShow)*e.slideWidth:e.centerMode?(e.slideCount+2*(e.slidesToShow+1))*e.slideWidth:(e.slideCount+2*e.slidesToShow)*e.slideWidth;var n={opacity:1,WebkitTransform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transform:e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",transition:"",WebkitTransition:"",msTransform:e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)"};return t&&(0,a["default"])(n,{width:t}),i&&(0,a["default"])(n,{height:i}),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?n.marginTop=e.left+"px":n.marginLeft=e.left+"px"),n};t.getTrackAnimateCSS=function(e){l(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=d(e);return t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase,t},t.getTrackLeft=function(e){l(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,i,s=0,n=0;if(e.fade)return 0;if(e.infinite)e.slideCount>=e.slidesToShow&&(s=e.slideWidth*e.slidesToShow*-1,n=e.slideHeight*e.slidesToShow*-1),e.slideCount%e.slidesToScroll!==0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow&&(e.slideIndex>e.slideCount?(s=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideWidth*-1,n=(e.slidesToShow-(e.slideIndex-e.slideCount))*e.slideHeight*-1):(s=e.slideCount%e.slidesToScroll*e.slideWidth*-1,n=e.slideCount%e.slidesToScroll*e.slideHeight*-1));else if(e.slideCount%e.slidesToScroll!==0&&e.slideIndex+e.slidesToScroll>e.slideCount&&e.slideCount>e.slidesToShow){var o=e.slidesToShow-e.slideCount%e.slidesToScroll;s=o*e.slideWidth}if(e.centerMode&&(e.infinite?s+=e.slideWidth*Math.floor(e.slidesToShow/2):s=e.slideWidth*Math.floor(e.slidesToShow/2)),t=e.vertical?e.slideIndex*e.slideHeight*-1+n:e.slideIndex*e.slideWidth*-1+s,e.variableWidth===!0){var a;e.slideCount<=e.slidesToShow||e.infinite===!1?i=r["default"].findDOMNode(e.trackRef).childNodes[e.slideIndex]:(a=e.slideIndex+e.slidesToShow,i=r["default"].findDOMNode(e.trackRef).childNodes[a]),t=i?i.offsetLeft*-1:0,e.centerMode===!0&&(i=e.infinite===!1?r["default"].findDOMNode(e.trackRef).children[e.slideIndex]:r["default"].findDOMNode(e.trackRef).children[e.slideIndex+e.slidesToShow+1],t=i?i.offsetLeft*-1:0,t+=(e.listWidth-i.offsetWidth)/2)}return t}},611:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},r=i(2),o=s(r),a=i(31),l=s(a),d=i(610),c=i(4),u=s(c),h={initialize:function(e){var t,i=l["default"].findDOMNode(this.list),s=o["default"].Children.count(e.children),n=this.getWidth(i),r=this.getWidth(l["default"].findDOMNode(this.track));if(e.vertical)t=this.getWidth(l["default"].findDOMNode(this));else{var a=e.centerMode&&2*parseInt(e.centerPadding);t=(this.getWidth(l["default"].findDOMNode(this))-a)/e.slidesToShow}var c=this.getHeight(i.querySelector('[data-index="0"]')),h=c*e.slidesToShow,p=e.rtl?s-1-e.initialSlide:e.initialSlide;this.setState({slideCount:s,slideWidth:t,listWidth:n,trackWidth:r,currentSlide:p,slideHeight:c,listHeight:h},function(){var t=(0,d.getTrackLeft)((0,u["default"])({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),i=(0,d.getTrackCSS)((0,u["default"])({left:t},e,this.state));this.setState({trackStyle:i}),this.autoPlay()})},update:function(e){var t,i=l["default"].findDOMNode(this.list),s=o["default"].Children.count(e.children),n=this.getWidth(i),r=this.getWidth(l["default"].findDOMNode(this.track));if(e.vertical)t=this.getWidth(l["default"].findDOMNode(this));else{var a=e.centerMode&&2*parseInt(e.centerPadding);t=(this.getWidth(l["default"].findDOMNode(this))-a)/e.slidesToShow}var c=this.getHeight(i.querySelector('[data-index="0"]')),h=c*e.slidesToShow;e.autoplay||this.pause(),this.setState({slideCount:s,slideWidth:t,listWidth:n,trackWidth:r,slideHeight:c,listHeight:h},function(){var t=(0,d.getTrackLeft)((0,u["default"])({slideIndex:this.state.currentSlide,trackRef:this.track},e,this.state)),i=(0,d.getTrackCSS)((0,u["default"])({left:t},e,this.state));this.setState({trackStyle:i})})},getWidth:function(e){return e.getBoundingClientRect().width||e.offsetWidth},getHeight:function(e){return e.getBoundingClientRect().height||e.offsetHeight},adaptHeight:function(){if(this.props.adaptiveHeight){var e='[data-index="'+this.state.currentSlide+'"]';if(this.list){var t=l["default"].findDOMNode(this.list);t.style.height=t.querySelector(e).offsetHeight+"px"}}},canGoNext:function(e){var t=!0;return e.infinite||(e.centerMode?e.currentSlide>=e.slideCount-1&&(t=!1):(e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1)),t},slideHandler:function(e){var t,i,s,n,r,o=this;if(!this.props.waitForAnimate||!this.state.animating){if(this.props.fade){if(i=this.state.currentSlide,this.props.infinite===!1&&(e<0||e>=this.state.slideCount))return;return t=e<0?e+this.state.slideCount:e>=this.state.slideCount?e-this.state.slideCount:e,this.props.lazyLoad&&this.state.lazyLoadedList.indexOf(t)<0&&this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(t)}),r=function(){o.setState({animating:!1}),o.props.afterChange&&o.props.afterChange(t),delete o.animationEndCallback},this.setState({animating:!0,currentSlide:t},function(){this.animationEndCallback=setTimeout(r,this.props.speed)}),this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,t),void this.autoPlay()}if(t=e,i=t<0?this.props.infinite===!1?0:this.state.slideCount%this.props.slidesToScroll!==0?this.state.slideCount-this.state.slideCount%this.props.slidesToScroll:this.state.slideCount+t:t>=this.state.slideCount?this.props.infinite===!1?this.state.slideCount-this.props.slidesToShow:this.state.slideCount%this.props.slidesToScroll!==0?0:t-this.state.slideCount:t,s=(0,d.getTrackLeft)((0,u["default"])({slideIndex:t,trackRef:this.track},this.props,this.state)),n=(0,d.getTrackLeft)((0,u["default"])({slideIndex:i,trackRef:this.track},this.props,this.state)),this.props.infinite===!1&&(s=n),this.props.beforeChange&&this.props.beforeChange(this.state.currentSlide,i),this.props.lazyLoad){for(var a=!0,l=[],c=t;c<t+this.props.slidesToShow;c++)a=a&&this.state.lazyLoadedList.indexOf(c)>=0,a||l.push(c);a||this.setState({lazyLoadedList:this.state.lazyLoadedList.concat(l)})}if(this.props.useCSS===!1)this.setState({currentSlide:i,trackStyle:(0,d.getTrackCSS)((0,u["default"])({left:n},this.props,this.state))},function(){this.props.afterChange&&this.props.afterChange(i)});else{var h={animating:!1,currentSlide:i,trackStyle:(0,d.getTrackCSS)((0,u["default"])({left:n},this.props,this.state)),swipeLeft:null};r=function(){o.setState(h),o.props.afterChange&&o.props.afterChange(i),delete o.animationEndCallback},this.setState({animating:!0,currentSlide:i,trackStyle:(0,d.getTrackAnimateCSS)((0,u["default"])({left:s},this.props,this.state))},function(){this.animationEndCallback=setTimeout(r,this.props.speed)})}this.autoPlay()}},swipeDirection:function(e){var t,i,s,n;return t=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,t),n=Math.round(180*s/Math.PI),n<0&&(n=360-Math.abs(n)),n<=45&&n>=0||n<=360&&n>=315?this.props.rtl===!1?"left":"right":n>=135&&n<=225?this.props.rtl===!1?"right":"left":this.props.verticalSwiping===!0?n>=35&&n<=135?"down":"up":"vertical"},play:function(){var e;if(!this.state.mounted)return!1;if(this.props.rtl)e=this.state.currentSlide-this.props.slidesToScroll;else{if(!this.canGoNext(n({},this.props,this.state)))return!1;e=this.state.currentSlide+this.props.slidesToScroll}this.slideHandler(e)},autoPlay:function(){this.state.autoPlayTimer||this.props.autoplay&&this.setState({autoPlayTimer:setInterval(this.play,this.props.autoplaySpeed)})},pause:function(){this.state.autoPlayTimer&&(clearInterval(this.state.autoPlayTimer),this.setState({autoPlayTimer:null}))}};t["default"]=h},612:function(e,t){"use strict";var i={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,listWidth:null,listHeight:null,slideCount:null,slideWidth:null,slideHeight:null,swipeLeft:null,touchObject:{startX:0,startY:0,curX:0,curY:0},lazyLoadedList:[],initialized:!1,edgeDragged:!1,swiped:!1,trackStyle:{},trackWidth:0};e.exports=i},613:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var n=i(2),r=s(n),o={className:"",accessibility:!0,adaptiveHeight:!1,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e){return r["default"].createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:!1,pauseOnHover:!0,responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,afterChange:null,beforeChange:null,edgeEvent:null,init:null,swipeEvent:null,nextArrow:null,prevArrow:null};e.exports=o},614:function(e,t,i){var s,n;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e.push(s);else if(Array.isArray(s))e.push(i.apply(null,s));else if("object"===n)for(var o in s)r.call(s,o)&&s[o]&&e.push(o)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=i:(s=[],n=function(){return i}.apply(t,s),!(void 0!==n&&(e.exports=n)))}()},615:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.Track=void 0;var n=i(2),r=s(n),o=i(4),a=s(o),l=i(614),d=s(l),c=function(e){var t,i,s,n,r;return r=e.rtl?e.slideCount-1-e.index:e.index,s=r<0||r>=e.slideCount,e.centerMode?(n=Math.floor(e.slidesToShow/2),i=(r-e.currentSlide)%e.slideCount===0,r>e.currentSlide-n-1&&r<=e.currentSlide+n&&(t=!0)):t=e.currentSlide<=r&&r<e.currentSlide+e.slidesToShow,(0,d["default"])({"slick-slide":!0,"slick-active":t,"slick-center":i,"slick-cloned":s})},u=function(e){var t={};return void 0!==e.variableWidth&&e.variableWidth!==!1||(t.width=e.slideWidth),e.fade&&(t.position="relative",t.left=-e.index*e.slideWidth,t.opacity=e.currentSlide===e.index?1:0,t.transition="opacity "+e.speed+"ms "+e.cssEase,t.WebkitTransition="opacity "+e.speed+"ms "+e.cssEase),t},h=function(e,t){return null===e.key||void 0===e.key?t:e.key},p=function(e){var t,i=[],s=[],n=[],o=r["default"].Children.count(e.children);return r["default"].Children.forEach(e.children,function(l,p){var f=void 0,v={message:"children",index:p,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};f=!e.lazyLoad|(e.lazyLoad&&e.lazyLoadedList.indexOf(p)>=0)?l:r["default"].createElement("div",null);var g,S=u((0,a["default"])({},e,{index:p})),m=c((0,a["default"])({index:p},e));g=f.props.className?(0,d["default"])(m,f.props.className):m;var y=function(t){f.props&&f.props.onClick&&f.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(v)};if(i.push(r["default"].cloneElement(f,{key:"original"+h(f,p),"data-index":p,className:g,tabIndex:"-1",style:(0,a["default"])({outline:"none"},f.props.style||{},S),onClick:y})),e.infinite&&e.fade===!1){var w=e.variableWidth?e.slidesToShow+1:e.slidesToShow;p>=o-w&&(t=-(o-p),s.push(r["default"].cloneElement(f,{key:"precloned"+h(f,t),"data-index":t,className:g,style:(0,a["default"])({},f.props.style||{},S),onClick:y}))),p<w&&(t=o+p,n.push(r["default"].cloneElement(f,{key:"postcloned"+h(f,t),"data-index":t,className:g,style:(0,a["default"])({},f.props.style||{},S),onClick:y})))}}),e.rtl?s.concat(i,n).reverse():s.concat(i,n)};t.Track=r["default"].createClass({displayName:"Track",render:function(){var e=p.call(this,this.props);return r["default"].createElement("div",{className:"slick-track",style:this.props.trackStyle},e)}})},616:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.Dots=void 0;var n=i(2),r=s(n),o=i(614),a=s(o),l=function(e){var t;return t=Math.ceil(e.slideCount/e.slidesToScroll)};t.Dots=r["default"].createClass({displayName:"Dots",clickHandler:function(e,t){t.preventDefault(),this.props.clickHandler(e)},render:function(){var e=this,t=l({slideCount:this.props.slideCount,slidesToScroll:this.props.slidesToScroll}),i=Array.apply(null,Array(t+1).join("0").split("")).map(function(t,i){var s=i*e.props.slidesToScroll,n=i*e.props.slidesToScroll+(e.props.slidesToScroll-1),o=(0,a["default"])({"slick-active":e.props.currentSlide>=s&&e.props.currentSlide<=n}),l={message:"dots",index:i,slidesToScroll:e.props.slidesToScroll,currentSlide:e.props.currentSlide},d=e.clickHandler.bind(e,l);return r["default"].createElement("li",{key:i,className:o},r["default"].cloneElement(e.props.customPaging(i),{onClick:d}))});return r["default"].createElement("ul",{className:this.props.dotsClass,style:{display:"block"}},i)}})},617:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.NextArrow=t.PrevArrow=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},r=i(2),o=s(r),a=i(614),l=s(a),d=i(611),c=s(d);t.PrevArrow=o["default"].createClass({displayName:"PrevArrow",clickHandler:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var i,s={key:"0","data-role":"none",className:(0,l["default"])(e),style:{display:"block"},onClick:t};return i=this.props.prevArrow?o["default"].cloneElement(this.props.prevArrow,s):o["default"].createElement("button",n({key:"0",type:"button"},s)," Previous")}}),t.NextArrow=o["default"].createClass({displayName:"NextArrow",clickHandler:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)},render:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});c["default"].canGoNext(this.props)||(e["slick-disabled"]=!0,t=null);var i,s={key:"1","data-role":"none",className:(0,l["default"])(e),style:{display:"block"},onClick:t};return i=this.props.nextArrow?o["default"].cloneElement(this.props.nextArrow,s):o["default"].createElement("button",n({key:"1",type:"button"},s)," Next")}})},618:function(e,t,i){var s=i(619),n=function(e){var t=/[height|width]$/;return t.test(e)},r=function(e){var t="",i=Object.keys(e);return i.forEach(function(r,o){var a=e[r];r=s(r),n(r)&&"number"==typeof a&&(a+="px"),t+=a===!0?r:a===!1?"not "+r:"("+r+": "+a+")",o<i.length-1&&(t+=" and ")}),t},o=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(i,s){t+=r(i),s<e.length-1&&(t+=", ")}),t):r(e)};e.exports=o},619:function(e,t){var i=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()};e.exports=i},620:function(e,t,i){var s=i(621),n=s&&i(622),r=i(618),o={media:function(e,t){e=r(e),"function"==typeof t&&(t={match:t}),s&&n.register(e,t),this._responsiveMediaHandlers||(this._responsiveMediaHandlers=[]),this._responsiveMediaHandlers.push({query:e,handler:t})},componentWillUnmount:function(){this._responsiveMediaHandlers&&this._responsiveMediaHandlers.forEach(function(e){s&&n.unregister(e.query,e.handler)})}};e.exports=o},621:function(e,t){var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=i},622:function(e,t,i){var s;!function(n,r,o){var a=window.matchMedia;"undefined"!=typeof e&&e.exports?e.exports=o(a):(s=function(){return r[n]=o(a)}.call(t,i,t,e),!(void 0!==s&&(e.exports=s)))}("enquire",this,function(e){"use strict";function t(e,t){var i,s=0,n=e.length;for(s;s<n&&(i=t(e[s],s),i!==!1);s++);}function i(e){return"[object Array]"===Object.prototype.toString.apply(e)}function s(e){return"function"==typeof e}function n(e){this.options=e,!e.deferSetup&&this.setup()}function r(t,i){this.query=t,this.isUnconditional=i,this.handlers=[],this.mql=e(t);var s=this;this.listener=function(e){s.mql=e,s.assess()},this.mql.addListener(this.listener)}function o(){if(!e)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!e("only all").matches}return n.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},r.prototype={addHandler:function(e){var t=new n(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var i=this.handlers;t(i,function(t,s){if(t.equals(e))return t.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(e){e.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";t(this.handlers,function(t){t[e]()})}},o.prototype={register:function(e,n,o){var a=this.queries,l=o&&this.browserIsIncapable;return a[e]||(a[e]=new r(e,l)),s(n)&&(n={match:n}),i(n)||(n=[n]),t(n,function(t){a[e].addHandler(t)}),this},unregister:function(e,t){var i=this.queries[e];return i&&(t?i.removeHandler(t):(i.clear(),delete this.queries[e])),this}},new o})},623:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ArrImgs=void 0;var n=i(624),r=(s(n),i(625)),o=s(r),a=i(626),l=s(a),d=i(627),c=s(d),u=i(628),h=s(u),p=i(629),f=s(p);t.ArrImgs=[{src:o["default"],alt:"showImage1",title:"强大与孤独1",contents:["只有自己经历过才会有所体会",1,1,1]},{src:l["default"],alt:"showImage2",title:"强大与孤独2",contents:["只有自己经历过才会有所体会",2,2,2]},{src:c["default"],alt:"showImage3",title:"强大与孤独3",contents:["只有自己经历过才会有所体会",3,3,3]},{src:h["default"],alt:"showImage4",title:"强大与孤独4",contents:["只有自己经历过才会有所体会",4,4,4]},{src:f["default"],alt:"showImage5",title:"强大与孤独5",contents:["只有自己经历过才会有所体会",5,5,5]}]},624:function(e,t){e.exports={banner:"banner__banner-2h30N",showImageBox:"banner__showImageBox-3_u8-",showImage:"banner__showImage-2BSO2",iconsBox:"banner__iconsBox-1_t9k",on:"banner__on-1jtAd","state-base-start":"banner__state-base-start-1vQu0","state-base-end":"banner__state-base-end-1IrVa"}},625:function(e,t,i){e.exports=i.p+"images/4902d6164d9bd3bee1ba54d43ec801d6.jpg"},626:function(e,t,i){e.exports=i.p+"images/3b70b0034fc9cd5f33201d75da2c79b7.jpg"},627:function(e,t,i){e.exports=i.p+"images/d3ee3b57384f9543de2a4d68e486091c.jpg"},628:function(e,t,i){e.exports=i.p+"images/3b6c15e4333da35d0d51740e4af48151.jpg"},629:function(e,t,i){e.exports=i.p+"images/957b46de1310b6aedab9fdbdebfedefc.jpg"},630:function(e,t,i){(function(e){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=i(2),l=function(t){function i(){return s(this,i),n(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return r(i,t),o(i,[{key:"render",value:function(){return e.createElement("div",{className:"layoutBox"+(this.props.moreStyle?" "+this.props.moreStyle:"")},this.props.children)}}]),i}(a.Component);t["default"]=l}).call(t,i(2))},631:function(e,t,i){(function(e){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),l=i(2),d=i(632),c=s(d),u=function(t){function i(){return n(this,i),r(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,t),a(i,[{key:"handleWheel",value:function(e){}},{key:"render",value:function(){var t=this.props,i=t.ArrContent,s=t.bannerScroll,n=i[s],r=n.contents.map(function(t,i){return e.createElement("li",{key:i,className:0==i?c["default"].checked:""},t)});return e.createElement("div",{className:c["default"].TextDesBox,onWheel:this.handleWheel},e.createElement("ul",null,e.createElement("li",{className:c["default"].title},n.title),r))}}]),i}(l.Component);t["default"]=u}).call(t,i(2))},632:function(e,t){e.exports={TextDesBox:"textDes__TextDesBox-3QTEj",title:"textDes__title-IQXQ4",checked:"textDes__checked-3PcoQ"}},633:function(e,t){e.exports={bannerList:"indexType2__bannerList-1GJPR","marginTop-300":"indexType2__marginTop-300-sngib"}}});
//# sourceMappingURL=indexType2.chunk.js.map?ab6fc8f3e23e341ddb97