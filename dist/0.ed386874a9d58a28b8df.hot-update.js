webpackHotUpdate(0,{19:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),c=(function(e){e&&e.__esModule}(a),n(10)),s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return i(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/api/authvalidate",{method:"post",headers:{"Content-Type":"application/json","x-access-token":window.localStorage.getItem("accessToken")},body:JSON.stringify({})}).then(function(e){return e.json()}).then(function(t){403===t.statuscode?(console.info("Invalid Token!!"),PubSub.publish("IS_LOGIN",{status:!1,token:window.localStorage.getItem("accessToken")}),e.props.history.push("/login")):console.info("valid Token!!")})}},{key:"render",value:function(){return""}}]),t}(a.Component);t.default=(0,c.withRouter)(s)}});