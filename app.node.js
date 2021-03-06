module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(32);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _reactAddonsCssTransitionGroup = __webpack_require__(3);

  var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _coreLocation = __webpack_require__(5);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(9);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(14);
    }, '/500': function _() {
      return __webpack_require__(15);
    }, '/contact': function contact() {
      return __webpack_require__(16);
    }, '/furniture': function furniture() {
      return __webpack_require__(17);
    }, '/': function _() {
      return __webpack_require__(18);
    }, '/resume': function resume() {
      return __webpack_require__(19);
    }, '/work': function work() {
      return __webpack_require__(20);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                var _loader = document.getElementsByClassName('loading')[0];
                if (_loader) {
                  setTimeout(function () {
                    _loader.className += ' cm-hide';
                    setTimeout(function () {
                      _loader.parentNode.removeChild(_loader);
                    }, 250);
                  }, 250);
                }
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("react-addons-css-transition-group");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(24);

  var _coreLocation = __webpack_require__(5);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(6);

  var _historyLibCreateBrowserHistory = __webpack_require__(29);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(30);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(31);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  var ContactForm = _react2['default'].createClass({
    displayName: 'ContactForm',

    getInitialState: function getInitialState() {
      return {
        showForm: true,
        submitting: false,
        validEmail: true
      };
    },
    handleSubmit: function handleSubmit(e) {
      e.preventDefault();
      this.submitForm();
    },
    buildQueryString: function buildQueryString(obj) {
      var _str = '';
      var key = 0;
      for (var i in obj) {
        _str += '&' + i + '=' + obj[i];
        key += 1;
      }
      return _str;
    },
    validateEmail: function validateEmail(str) {
      if (str && str.length > 1) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(str);
      }
      return false;
    },
    submitForm: function submitForm() {
      this.setState({ 'validEmail': true });
      var formData = {
        name: _react2['default'].findDOMNode(this.refs['cm-name']).value,
        email: _react2['default'].findDOMNode(this.refs['cm-email']).value,
        phone: _react2['default'].findDOMNode(this.refs['cm-phone']).value,
        url: _react2['default'].findDOMNode(this.refs['cm-website']).value,
        phone: _react2['default'].findDOMNode(this.refs['cm-phone']).value,
        message: _react2['default'].findDOMNode(this.refs['cm-project']).value
      };
      if (formData.email && this.validateEmail(formData.email)) {
        this.setState({ 'submitting': true });
        var xmlhttp = new XMLHttpRequest();
        var _this = this;
        xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState === 4) {
            var response = JSON.parse(xmlhttp.responseText);
            _this.setState({ 'showForm': false });
            this.setState({ 'submitting': false });
          }
        };
        xmlhttp.open('POST', 'https://script.google.com/macros/s/AKfycbyRqZDn0XZj5ruN-ewJfOdNmBAKveFigbd88WRnm8oFDWACtKU/exec', true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(_this.buildQueryString(formData));
      } else {
        this.setState({ 'validEmail': false });
      }
    },
    render: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'form',
          { disabled: this.state.submitting ? 'disabled' : 'false', onSubmit: this.handleSubmit, className: this.state.showForm ? '' : 'cm-hide' },
          _react2['default'].createElement(
            'label',
            { 'for': 'cm-form-name', className: 'cm-sr' },
            'Name:'
          ),
          _react2['default'].createElement('input', { ref: 'cm-name', className: 'cm-input cm-left', type: 'text', id: 'cm-form-name', placeholder: 'Name' }),
          _react2['default'].createElement(
            'label',
            { 'for': 'cm-form-name', className: 'cm-sr' },
            'Email (required):'
          ),
          _react2['default'].createElement('input', { ref: 'cm-email', className: this.state.validEmail ? 'cm-input cm-right' : 'cm-input cm-right cm-input-error', type: 'text', id: 'cm-form-email', placeholder: 'Email (Required)' }),
          _react2['default'].createElement(
            'label',
            { 'for': 'cm-form-name', className: 'cm-sr' },
            'Phone:'
          ),
          _react2['default'].createElement('input', { ref: 'cm-phone', className: 'cm-input cm-left', type: 'text', id: 'cm-form-phone', placeholder: 'Phone Number' }),
          _react2['default'].createElement(
            'label',
            { 'for': 'cm-form-name', className: 'cm-sr' },
            'Website Url:'
          ),
          _react2['default'].createElement('input', { ref: 'cm-website', className: 'cm-input cm-right', type: 'text', id: 'cm-form-url', placeholder: 'Website URL' }),
          _react2['default'].createElement(
            'label',
            { 'for': 'cm-form-name', className: 'cm-sr' },
            'Project Details:'
          ),
          _react2['default'].createElement('textarea', { ref: 'cm-project', className: 'cm-textarea', type: 'text', id: 'cm-form-project', placeholder: 'Project Details' }),
          _react2['default'].createElement('input', { type: 'submit', className: !this.state.submitting ? 'cm-btn' : 'cm-btn cm-btn-disabled', value: !this.state.submitting ? 'Send' : 'Sending' })
        ),
        _react2['default'].createElement(
          'p',
          { className: this.state.showForm ? 'cm-hide' : '' },
          'Thanks, I will get back to you in the next business day.'
        )
      );
    }

  });

  exports['default'] = ContactForm;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(22);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var Furniture = _react2['default'].createClass({
    displayName: 'Furniture',

    getInitialState: function getInitialState() {
      return {
        shownav: false
      };
    },
    render: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        'Tester'
      );
    }

  });

  exports['default'] = Furniture;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(23);

  var _Navigation = __webpack_require__(11);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Logo = __webpack_require__(10);

  var _Logo2 = _interopRequireDefault(_Logo);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'div',
        { className: 'Layout' },
        _react2['default'].createElement(_Logo2['default'], null),
        _react2['default'].createElement(_Navigation2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'container' },
          children
        )
      ),
      _react2['default'].createElement('div', { className: 'loading' })
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(25);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  function Logo() {
    return _react2['default'].createElement(
      'div',
      { className: 'logo' },
      'Chris Mills',
      _react2['default'].createElement(
        'a',
        { href: '/', onClick: _Link2['default'].handleClick },
        _react2['default'].createElement(
          'span',
          null,
          'Chris Mills'
        )
      )
    );
  }

  exports['default'] = Logo;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(26);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var MainNav = _react2['default'].createClass({
    displayName: 'MainNav',

    getInitialState: function getInitialState() {
      return {
        shownav: false
      };
    },
    openNav: function openNav() {
      this.setState({ shownav: true });
    },
    closeNav: function closeNav() {
      this.setState({ shownav: false });
    },
    render: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'nav',
          { role: 'menu', className: this.state.shownav === true ? 'cm-nav-slide' : null },
          _react2['default'].createElement('div', { className: 'logo' }),
          _react2['default'].createElement(
            'ul',
            null,
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/work', onClick: _Link2['default'].handleClick },
                'Work'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/resume', onClick: _Link2['default'].handleClick },
                'Resumé'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/contact', onClick: _Link2['default'].handleClick },
                'Contact'
              )
            )
          ),
          _react2['default'].createElement('div', { className: 'cm-close', onClick: this.closeNav })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'cm-nav-open', onClick: this.openNav },
          _react2['default'].createElement('span', { className: 'cm-nav-line' }),
          _react2['default'].createElement('span', { className: 'cm-nav-line' }),
          _react2['default'].createElement('span', { className: 'cm-nav-line' })
        )
      );
    }

  });

  function Navigation() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(MainNav, null)
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(27);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var ReactCSSTransitionGroup = __webpack_require__(3);

  var Overlay = _react2['default'].createClass({
    displayName: 'Overlay',

    getInitialState: function getInitialState() {
      return {
        imageStatus: null
      };
    },
    handleImageLoaded: function handleImageLoaded() {
      this.setState({ imageStatus: 'loaded' });
    },
    render: function render() {
      var project = this.props.data;
      var _this = this;
      return _react2['default'].createElement(
        ReactCSSTransitionGroup,
        { transitionName: 'cm', transitionAppear: true },
        _react2['default'].createElement(
          'div',
          { className: 'cm-overlay' },
          _react2['default'].createElement(
            'div',
            { className: 'cm-overlay-content' },
            _react2['default'].createElement('div', { className: 'cm-overlay-close', onClick: this.props.closeOverlay }),
            _react2['default'].createElement(
              'div',
              { className: 'cm-overlay-img-mask' },
              !_this.state.imageStatus ? _react2['default'].createElement('div', { className: 'cm-overlay-img-loading' }) : null,
              _react2['default'].createElement('img', { src: project.image, className: !_this.state.imageStatus ? 'cm-overlay-img cm-img-loading' : 'cm-overlay-img', onLoad: _this.handleImageLoaded })
            ),
            _react2['default'].createElement(
              'h2',
              null,
              project.name
            ),
            _react2['default'].createElement(
              'p',
              null,
              project.description
            ),
            _react2['default'].createElement(
              'div',
              { className: 'cm-center' },
              project.url ? _react2['default'].createElement(
                'a',
                { href: project.url, className: 'cm-btn cm-m14 cm-btn-wide', target: ' _blank' },
                'View Site'
              ) : null
            )
          )
        )
      );
    }
  });

  exports['default'] = Overlay;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(28);

  var _Link = __webpack_require__(4);

  var _Link2 = _interopRequireDefault(_Link);

  var _Overlay = __webpack_require__(12);

  var _Overlay2 = _interopRequireDefault(_Overlay);

  var ReactCSSTransitionGroup = __webpack_require__(3);

  var Project = _react2['default'].createClass({
    displayName: 'Project',

    getInitialState: function getInitialState() {
      return {
        showoverlay: false,
        loading: false,
        project: {}
      };
    },
    handleClick: function handleClick(name) {
      this.setState({ showoverlay: name, loading: true });
    },
    closeOverlay: function closeOverlay() {
      this.setState({ showoverlay: false, loading: true });
    },
    render: function render() {
      var _this = this;
      var _projects = [];
      var filters = [];
      var projects = this.props.data.map(function (project, i) {
        for (var j = 0; j < project.categories.length; j += 1) {
          var _cat = project.categories[j].name;
          if (filters.indexOf(_cat) === -1) {
            filters.push(_cat);
          }
        }
        _projects.push(project);
        return _react2['default'].createElement(
          ReactCSSTransitionGroup,
          { transitionName: 'cm-fast', transitionAppear: true, transitionEnterTimeout: 100 * i },
          _react2['default'].createElement(
            'div',
            { key: i },
            _react2['default'].createElement(
              'div',
              { className: 'project' },
              _react2['default'].createElement(
                'h2',
                { className: 'project-fade project-slide-in' },
                project.name
              ),
              _react2['default'].createElement(
                'p',
                { className: 'project-fade project-slide-in' },
                project.summary
              ),
              _react2['default'].createElement('img', { src: project.thumb }),
              _react2['default'].createElement(
                'button',
                { className: 'project-fade cm-btn', onClick: _this.handleClick.bind(null, project.name) },
                'View'
              ),
              _react2['default'].createElement('div', { className: 'project-shade project-fade' }),
              _this.state.showoverlay === project.name ? _react2['default'].createElement(_Overlay2['default'], { data: project, closeOverlay: _this.closeOverlay }) : null
            )
          )
        );
      });
      return _react2['default'].createElement(
        'div',
        { className: 'projectList' },
        projects
      );
    }

  });

  var Projects = _react2['default'].createClass({
    displayName: 'Projects',

    getInitialState: function getInitialState() {
      return { data: [] };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;
      var _host = 'https://cmillsla-cmills83.rhcloud.com';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', encodeURI(_host + '/api/posts'));
      xhr.onload = function (data) {
        if (xhr.status === 200) {
          if (xhr.responseText) {
            var _response = JSON.parse(xhr.responseText);
            console.log(_response);
            if (_response.success === true) {
              var _data = [];
              for (var i = 0; i < _response.result.length; i += 1) {
                var _result = {
                  name: _response.result[i].title.replace(/(<([^>]+)>)/ig, ''),
                  description: _response.result[i].content.extended.replace(/(<([^>]+)>)/ig, ''),
                  summary: _response.result[i].content.brief.replace(/(<([^>]+)>)/ig, ''),
                  thumb: _response.result[i].thumb.url,
                  image: _response.result[i].image.url,
                  url: _response.result[i].url ? _response.result[i].url : null,
                  categories: _response.result[i].categories
                };
                _data.push(_result);
              }
              _this.setState({ data: _data });
            }
          }
        } else {
          // error.
        }
      };
      xhr.send();
    },
    render: function render() {
      return _react2['default'].createElement(
        ReactCSSTransitionGroup,
        { transitionName: 'cm-fast', transitionAppear: true },
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(Project, { data: this.state.data })
        )
      );
    }

  });

  exports['default'] = Projects;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsContactForm = __webpack_require__(7);

  var _componentsContactForm2 = _interopRequireDefault(_componentsContactForm);

  var ReactCSSTransitionGroup = __webpack_require__(3);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            ReactCSSTransitionGroup,
            { transitionName: 'cm', transitionAppear: true },
            _react2['default'].createElement(
              'h1',
              null,
              'Contact'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'I specialize in responsive web development, Javascript MVC based web applications as well as UI and web design.'
            ),
            _react2['default'].createElement(
              'p',
              null,
              'UI/Web Development, HTML5, CSS3, LESS, Jade, Hbs, responsive, Javascript, jQuery, jQuery Mobile, jQuery UI, Angular.js, Backbone.js, React.js, MongoDB, Node.js, Twitter Bootstrap, JSON, AJAX, Highcharts, svn, git'
            ),
            _react2['default'].createElement(_componentsContactForm2['default'], null)
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsFurniture = __webpack_require__(8);

  var _componentsFurniture2 = _interopRequireDefault(_componentsFurniture);

  var ReactCSSTransitionGroup = __webpack_require__(3);

  var _default = (function (_Component) {
  		_inherits(_default, _Component);

  		function _default() {
  				_classCallCheck(this, _default);

  				_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  		}

  		_createClass(_default, [{
  				key: 'render',
  				value: function render() {
  						return _react2['default'].createElement(
  								'div',
  								null,
  								_react2['default'].createElement(
  										ReactCSSTransitionGroup,
  										{ transitionName: 'cm', transitionAppear: true },
  										_react2['default'].createElement(
  												'h1',
  												null,
  												'Furniture'
  										)
  								)
  						);
  				}
  		}]);

  		return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var ReactCSSTransitionGroup = __webpack_require__(3);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            ReactCSSTransitionGroup,
            { transitionName: 'cm', transitionAppear: true },
            _react2['default'].createElement(
              'div',
              { className: 'cm-welcome' },
              _react2['default'].createElement(
                'h1',
                null,
                'Welcome to the portfolio site of Chris Mills a creative web site and application UI developer in Los Angeles.'
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  		value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var ReactCSSTransitionGroup = __webpack_require__(3);

  var _default = (function (_Component) {
  		_inherits(_default, _Component);

  		function _default() {
  				_classCallCheck(this, _default);

  				_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  		}

  		_createClass(_default, [{
  				key: 'render',
  				value: function render() {
  						return _react2['default'].createElement(
  								'div',
  								null,
  								_react2['default'].createElement(
  										ReactCSSTransitionGroup,
  										{ transitionName: 'cm', transitionAppear: true },
  										_react2['default'].createElement(
  												'h1',
  												null,
  												'Resumé'
  										),
  										_react2['default'].createElement(
  												'p',
  												{ className: 'cm-center' },
  												'Chris Mills',
  												_react2['default'].createElement('br', null),
  												_react2['default'].createElement(
  														'a',
  														{ href: 'https://github.com/cmillsLA', target: ' _blank' },
  														'https://github.com/cmillsLA'
  												),
  												' | ',
  												_react2['default'].createElement(
  														'a',
  														{ href: 'https://github.com/chrismillsnbcu' },
  														'https://github.com/chrismillsnbcu'
  												),
  												_react2['default'].createElement('br', null),
  												_react2['default'].createElement(
  														'em',
  														null,
  														'HTML5, XHTML, CSS3, Javascript, jQuery, Backbone.js, Angular.js, Twitter Bootstrap, json, restful apis/ajax, localstorage, svn, git, node.js, keystone.js, LESS, mocha, jasmine, jade, coffeescript, handlebars'
  												)
  										),
  										_react2['default'].createElement('hr', null),
  										_react2['default'].createElement(
  												'h2',
  												null,
  												'Work History'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'NBC Universal'
  												),
  												_react2['default'].createElement('br', null),
  												'Sr. Front End Developer ( February 2014 - present )',
  												_react2['default'].createElement('br', null),
  												'Maintain and extend javascript ad API with monthly traffic in the billions, used by most news and brand sites.',
  												_react2['default'].createElement('br', null),
  												'Clientside UI Integration, html5 localstorage shopping cart development and integration and front end development for ',
  												_react2['default'].createElement(
  														'a',
  														{ href: 'https://www.nbcumv.com/', target: ' _blank' },
  														'https://www.nbcumv.com/'
  												)
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'Leaf Group'
  												),
  												_react2['default'].createElement('br', null),
  												'Sr. Front End Engineer ( November 2015 – May 2016 ) – Part time contract',
  												_react2['default'].createElement('br', null),
  												'Intranet – html5/css3 into the Zendesk CMS.  Utilized Zendesk API as well as internal endpoints to create a custom people directory and navigation.',
  												_react2['default'].createElement('br', null),
  												'Pixel tracking – Reverse engineered and extended pixel tracking script used across all sites (eHow, Saatchi Art, Society 6, etc.).'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'Service'
  												),
  												_react2['default'].createElement('br', null),
  												'Sr. Front End Engineer ( August 2015 – October 2015 ) – Part time contract',
  												_react2['default'].createElement('br', null),
  												'Built a custom mobile-friendly website for ',
  												_react2['default'].createElement(
  														'a',
  														{ href: 'https://getservice.com', target: ' _blank' },
  														'http://getservice.com'
  												),
  												', powered by restful Java APIs. This site was built using Angular.js, LESS, Bootstrap and Coffeescript.'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'Dex Media'
  												),
  												_react2['default'].createElement('br', null),
  												'UI Engineer (January 2012 - February 2014)',
  												_react2['default'].createElement('br', null),
  												'Developed user interfaces for restful applications using HTML5, CSS3, Backbone.js, jQuery, jQuery Mobile and native javascript in a Java environment.',
  												_react2['default'].createElement('br', null),
  												'Developed an internal iPad app using Backbone.js and jQuery Mobile',
  												_react2['default'].createElement('br', null),
  												'Maintained custom Account Management System',
  												_react2['default'].createElement('br', null),
  												'Developed an application to showcase the new Dex API using jQuery and Highcharts.js'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'Apollo Interactive'
  												),
  												_react2['default'].createElement('br', null),
  												'Front End Developer (August 2008 – January 2012)',
  												_react2['default'].createElement('br', null),
  												'Develop and maintain client sites with HTML5, CSS3, XHTML/CSS, Javascript, JQuery, AJAX Web and Graphic Design – Design landing pages, newsletters, and site additions. Worked in both PHP and .net environments',
  												_react2['default'].createElement('br', null),
  												'Projects Inlcude Jackinthebox.com – Corporate Profile section additions, Chuck E. Cheese’s site maintenance, Curves.com, MyCurves.com, Curves International sites and Curves internet marketing sites.'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'Wireframe.com'
  												),
  												_react2['default'].createElement('br', null),
  												'Front End Developer(August 2007 – August 2008)',
  												_react2['default'].createElement('br', null),
  												'Develop client sites with XHTML/CSS, Javascript, Flash AS2 Projects Inlcude MyNetworkTV.com, InsideEdition.com, NBC Portal, banner ads.'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'Einstein Medical'
  												),
  												_react2['default'].createElement('br', null),
  												'Web Production Artist (November 2006 – August 2007)',
  												_react2['default'].createElement('br', null),
  												'Maintained and developed client sites with XHTML/CSS Web graphic updates.'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'Search Fit'
  												),
  												_react2['default'].createElement('br', null),
  												'Jr. Front End Developer (April 2006 – November 2006)',
  												_react2['default'].createElement('br', null),
  												'Maintained and developed directory sites for SEO and link building'
  										),
  										_react2['default'].createElement(
  												'p',
  												null,
  												_react2['default'].createElement(
  														'strong',
  														null,
  														'SmartDraw.com'
  												),
  												_react2['default'].createElement('br', null),
  												'Web Development Intern (November 2005 – April 2006)',
  												_react2['default'].createElement('br', null),
  												'Web Development Intern',
  												_react2['default'].createElement('br', null),
  												'Updated company website and graphics.'
  										)
  								)
  						);
  				}
  		}]);

  		return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
  	value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsProjects = __webpack_require__(13);

  var _componentsProjects2 = _interopRequireDefault(_componentsProjects);

  var ReactCSSTransitionGroup = __webpack_require__(3);

  var _default = (function (_Component) {
  	_inherits(_default, _Component);

  	function _default() {
  		_classCallCheck(this, _default);

  		_get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
  	}

  	_createClass(_default, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				null,
  				_react2['default'].createElement(
  					ReactCSSTransitionGroup,
  					{ transitionName: 'cm', transitionAppear: true },
  					_react2['default'].createElement(
  						'h1',
  						null,
  						'Work'
  					)
  				),
  				_react2['default'].createElement(
  					ReactCSSTransitionGroup,
  					{ transitionName: 'cm', transitionAppear: true },
  					_react2['default'].createElement(_componentsProjects2['default'], null)
  				)
  			);
  		}
  	}]);

  	return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n@font-face {\n  font-family: 'prox';\n  src: url('/ProximaNova-Semibold.otf');\n}\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.cm-input, .cm-textarea {\n  display: block;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-transition: border-color ease-in-out .15s,\n  -webkit-box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,\n  -webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s,\n  box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,\n  box-shadow ease-in-out .15s;\n  transition:border-color ease-in-out .15s,\n  box-shadow ease-in-out .15s,\n  -webkit-box-shadow ease-in-out .15s;\n  margin:0 0 18px 0;\n}\n.cm-input-error {\n  border:1px solid #ff0000;\n}\n.cm-textarea {\n  height:300px;\n}\n\n/* Desktop */\n@media (min-width: 768px) {\n  .cm-input {\n    width:47%;\n  }\n  .cm-textarea {\n    width:946px;\n  }\n  .cm-left {\n    float:left;\n  }\n  .cm-right {\n    float:right;\n  }\n}\n\n/* Tablet and Mobile */\n@media (max-width: 768px) {\n  .cm-input, .cm-textarea {\n    padding-left:1%;\n    padding-right:1%;\n    width:98%;\n  }\n}", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n@font-face {\n  font-family: 'prox';\n  src: url('/ProximaNova-Semibold.otf');\n}\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nnav ul {\n  list-style:none;\n}\nnav ul li {\n  display:inline-block;\n  margin-right:40px;\n}\nnav a, nav a:hover {\n  font-size:18px;\n  color:#fff;\n  display:inline-block;\n  text-transform:uppercase;\n  text-decoration:none;\n}\nnav a:hover, nav a.active {\n  text-decoration:underline;\n}\nnav .logo {\n  display:none;\n}\n.cm-close, .cm-nav-open {\n  display:none;\n}\n@media (min-width: 768px) {\n  nav {\n    position:absolute;\n    right:75px;\n    top:83px;\n    display:block;\n  }\n}\n@media only screen and (max-width: 768px) {\n  nav {\n    display: block;\n    margin: 0;\n    position: fixed;\n    width: 80vw;\n    background: #000;\n    height: 100vh;\n    left: 0;\n    right: auto;\n    top: 0;\n    z-index: 99;\n    text-align:center;\n    left:-100vw;\n    -webkit-transition: all .25s ease-in-out;\n    -o-transition: all .25s ease-in-out;\n    transition: all .25s ease-in-out;\n  }\n  nav.cm-nav-slide {\n    left:0;\n  }\n  nav ul li {\n    display:block;\n    margin:0;\n  }\n  nav a, nav a:hover {\n    display:block;\n    text-align:left;\n    font-size:24px;\n    float:none;\n    padding:25px 0;\n    background:#000;\n    opacity:.7;\n    text-decoration:none !important;\n    line-height:24px;\n    color:#fff;\n    width:100%;\n    margin:0 0 5px 0;\n  }\n  nav a.active {\n    opacity:1;\n  }\n  nav .logo {\n    position:relative;\n    display:inline-block;\n    top:0;\n    left:0;\n    margin-top:50px;\n  }\n  .cm-close {\n    background:url('/close.png') no-repeat;\n    position:absolute;\n    top:15px;\n    right:25px;\n    width:20px;\n    height:20px;\n    display:block;\n    cursor:pointer;\n    text-indent:-9999px\n  }\n  .cm-nav-open {\n    position: absolute;\n    top: 25px;\n    right: 25px;\n    width: 45px;\n    display: block;\n    cursor:pointer;\n  }\n  .cm-nav-line {\n    background: #fff;\n    height: 5px;\n    display: block;\n    margin-bottom: 8px;\n  }\n}\n@media only screen and (min-width: 1500px) {\n  nav {\n    right:145px;\n    top:77px;\n  }\n  nav a, nav a:hover {\n    font-size:24px;\n  }\n}", ""]);

  // exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n@font-face {\n  font-family: 'prox';\n  src: url('/ProximaNova-Semibold.otf');\n}\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\nhtml, body {\n  margin:0;\n  padding:0;\n}\nbody {\n  background: #3d5470;\n  color:#fff;\n  font-family: \"prox\", Helvetica, sans-serif;\n}\nh1 {\n  font-size:normal;\n}\np {\n  font-size:18px;\n  line-height:30px;\n  padding-bottom:12px;\n}\na, a:hover {\n  color:#3fb2ee;\n  text-decoration:underline;\n}\na:hover {\n  text-decoration:none;\n  color:#67cbff;\n}\n.Layout {\n  border-top:5px solid #191919;\n}\n.container {\n  margin:0 auto 30px auto;\n  width:970px;\n  padding:170px 0 0 0;\n}\n.container-border-top {\n  background:#111;\n  width:100vw;\n  display:block;\n  position:fixed;\n  left:0;\n  top:0;\n  height:5px;\n}\n.loading {\n  background-image: url('/loading.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  width:100vw;\n  height:100vh;\n  background-color: #222;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: .9;\n  -webkit-transition: opacity .5s;\n  -o-transition: opacity .5s;\n  transition:opacity .5s;\n}\n.cm-hide {\n  opacity:0;\n}\n.cm-appear {\n  opacity: 0.01;\n}\n.cm-appear.cm-appear-active {\n   opacity: 1;\n   -webkit-transition: opacity 500ms ease-in-out;\n   -o-transition: opacity 500ms ease-in-out;\n   transition: opacity 500ms ease-in-out;\n}\n.cm-center {\n  text-align:center;\n}\n.cm-fast-appear {\n  opacity: 0.01;\n}\n.cm-fast-appear.cm-fast-appear-active {\n  opacity: 1;\n  -webkit-transition: opacity .25s ease-in-out;\n  -o-transition: opacity .25s ease-in-out;\n  transition: opacity .25s ease-in-out;\n}\n.cm-fast-enter {\n  opacity: 0.01;\n}\n.cm-fast-enter.cm-fast-enter-active {\n  opacity: 1;\n  -webkit-transition: opacity 500ms ease-in;\n  -o-transition: opacity 500ms ease-in;\n  transition: opacity 500ms ease-in;\n}\n.cm-fast-leave {\n  opacity: 1;\n}\n.cm-fast-leave.cm-fast-leave-active {\n  opacity: 0.01;\n  -webkit-transition: opacity 300ms ease-in;\n  -o-transition: opacity 300ms ease-in;\n  transition: opacity 300ms ease-in;\n}\n/* Home */\n.cm-welcome {\n  padding:0;\n  /*display:none;*/\n  background:rgba(0, 0 , 0, .5);\n  position: absolute;\n  bottom: 20%;\n  margin: 0 auto;\n  width: 760px;\n  text-align: center;\n  padding: 20px;\n  left: 50%;\n  margin-left: -400px;\n}\n.cm-welcome h1 {\n  font-weight:normal;\n  font-size:36px;\n  line-height:42px;\n}\n.cm-sr {\n  position:absolute;\n  text-indent:-9999px;\n}\n/* Work */\n.cm-btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-transition: background .25s;\n  -o-transition: background .25s;\n  transition:background .25s;\n  text-align:center;\n  background:#3fb2ee;\n  text-decoration:none;\n  color:#fff;\n}\n.cm-btn:hover {\n  background:#67cbff;\n  color:#fff;\n}\n.cm-btn-wide {\n  padding:10px 44px;\n}\n.cm-btn-disabled {\n  background:#0c70a4 !important;\n}\n.cm-hide {\n  display:none;\n}\n.cm-m14 {\n  margin:14px;\n}\n.cm-center {\n  text-align:center;\n}\nhr {\n  border:1px solid #999;\n  height:0\n}\n/* Thumb Animations */\n#bg\n.projectOverlay {\n  background: #333;\n  background: rgba(3, 3, 3, 0.6);\n  -o-transition: opacity 250ms;\n  transition: opacity 250ms;\n  -webkit-transition: opacity 250ms;\n  -o-transition-delay:1s;\n     transition-delay:1s;\n  -webkit-transition-delay:1s;\n  opacity:0;\n  overflow:hidden;\n  position:absolute;\n  cursor:pointer;\n  top:0;\n  left:.5%;\n  z-index:2;\n  width:100%;\n  height:100%;\n}\n/* Misc */\n.clear {\n  clear:both;\n}\n.pRel {\n  position:relative;\n}\n.block {\n  display:block !important;\n}\n.dNone {\n  display:none !important;\n}\n/* */\n\n/* large displays */\n@media only screen and (min-width: 1500px) {\n  .container {\n    margin:30px auto 30px auto;\n    width:1200px;\n  }\n  .logo {\n    background:url('/imgs/chris_mills_big.png');\n    width:320px;\n    height:67px;\n    position:absolute;\n    left:180px;\n    margin:0;\n    padding:0;\n    top:77px;\n  }\n  .cm-welcome {\n    bottom:25%;\n    width:1160px;\n    margin-left:-540px;\n    width:1020px;\n    padding:30px;\n  }\n  .cm-welcome h1 {\n    font-size:50px;\n    line-height:58px;\n  }\n  .cm-textarea {\n    height:300px;\n    width:1176px !important;\n  }\n}\n\n/* Tablet & Mobile */\n@media (max-width: 768px) {\n  body {\n    background:#3d5470;\n  }\n  .Layout {\n    padding:15px;\n  }\n  .container {\n    width:auto;\n    padding:100px 0 0 0;\n    margin:0 auto;\n  }\n  .logo {\n    left:15px;\n    top:15px;\n  }\n  h1 {\n    font-size:24px;\n  }\n}\n/* Tablet Portrait */\n@media all and (max-width: 1024px) and (min-width: 768px) {\n  nav {\n    right:0 !important;\n  }\n  .logo {\n    left:20px !important;\n  }\n}\n\n/* Mobile */\n@media only screen and (max-width: 767px) {\n  .cm-welcome {\n    position:relative;\n    left:0;\n    top:0;\n    margin:25vh 0 0 0;\n    width:auto;\n  }\n}\n", ""]);

  // exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "", ""]);

  // exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n@font-face {\n  font-family: 'prox';\n  src: url('/ProximaNova-Semibold.otf');\n}\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.logo {\n  background:url('/chris_mills.png') no-repeat;\n  width:278px;\n  height:60px;\n  position:absolute;\n  left:110px;\n  margin:0;\n  padding:0;\n  top:77px;\n}\n\n.logo a{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100%;\n  height:100%;\n  display:block;\n  outline:none;\n}\n\n.logo span {\n  position:absolute;\n  text-indent:-9999px;\n}\n\n@media (max-width: 768px) {\n  .logo {\n    left:5px;\n    top:50px;\n  }\n}", ""]);

  // exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n@font-face {\n  font-family: 'prox';\n  src: url('/ProximaNova-Semibold.otf');\n}\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nnav ul {\n  list-style:none;\n}\nnav ul li {\n  display:inline-block;\n  margin-right:40px;\n}\nnav a, nav a:hover {\n  font-size:18px;\n  color:#fff;\n  display:inline-block;\n  text-transform:uppercase;\n  text-decoration:none;\n}\nnav a:hover, nav a.active {\n  text-decoration:underline;\n}\nnav .logo {\n  display:none;\n}\n.cm-close, .cm-nav-open {\n  display:none;\n}\n@media (min-width: 768px) {\n  nav {\n    position:absolute;\n    right:75px;\n    top:83px;\n    display:block;\n  }\n}\n@media only screen and (max-width: 768px) {\n  nav {\n    display: block;\n    margin: 0;\n    position: fixed;\n    width: 80vw;\n    background: #000;\n    height: 100vh;\n    left: 0;\n    right: auto;\n    top: 0;\n    z-index: 99;\n    text-align:center;\n    left:-100vw;\n    -webkit-transition: all .25s ease-in-out;\n    -o-transition: all .25s ease-in-out;\n    transition: all .25s ease-in-out;\n  }\n  nav.cm-nav-slide {\n    left:0;\n  }\n  nav ul li {\n    display:block;\n    margin:0;\n  }\n  nav a, nav a:hover {\n    display:block;\n    text-align:left;\n    font-size:24px;\n    float:none;\n    padding:25px 0;\n    background:#000;\n    opacity:.7;\n    text-decoration:none !important;\n    line-height:24px;\n    color:#fff;\n    width:100%;\n    margin:0 0 5px 0;\n  }\n  nav a.active {\n    opacity:1;\n  }\n  nav .logo {\n    position:relative;\n    display:inline-block;\n    top:0;\n    left:0;\n    margin-top:50px;\n  }\n  .cm-close {\n    background:url('/close.png') no-repeat;\n    position:absolute;\n    top:15px;\n    right:25px;\n    width:20px;\n    height:20px;\n    display:block;\n    cursor:pointer;\n    text-indent:-9999px\n  }\n  .cm-nav-open {\n    position: absolute;\n    top: 25px;\n    right: 25px;\n    width: 45px;\n    display: block;\n    cursor:pointer;\n  }\n  .cm-nav-line {\n    background: #fff;\n    height: 5px;\n    display: block;\n    margin-bottom: 8px;\n  }\n}\n@media only screen and (min-width: 1500px) {\n  nav {\n    right:145px;\n    top:77px;\n  }\n  nav a, nav a:hover {\n    font-size:24px;\n  }\n}", ""]);

  // exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n@font-face {\n  font-family: 'prox';\n  src: url('/ProximaNova-Semibold.otf');\n}\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.cm-overlay {\n\tposition:fixed;\n\twidth:100vw;\n\theight:100vh;\n\tbackground:rgb(0, 0, 0);\n\tbackground:rgba(0, 0, 0, .7);\n\ttop:0;\n\tleft:0;\n\tz-index:99;\n}\n.cm-overlay-content {\n\tmargin:0 auto;\n\twidth:970px;\n\tposition:relative;\n\tbackground:#000;\n\tmin-height:100vh;\n\theight:100%;\n\tpadding:20px 10px;\n}\n.cm-overlay h2 {\n\tbackground:none;\n\tpadding-top:50px;\n\tpadding-bottom:20px;\n}\n.cm-overlay h2, .cm-overlay p {\n\tposition:relative;\n\ttop:0;\n}\n.cm-overlay-img-mask {\n\tmax-height:60vh;\n\toverflow:hidden;\n\tmargin:20px 0 0 0;\n\tposition:relative;\n}\n.cm-overlay-close {\n\tbackground:url('/close.png') no-repeat;\n\twidth:20px;\n\theight:20px;\n    display: block;\n    text-align: right;\n    cursor:pointer;\n    width:100%;\n    background-position:top right;\n    font-size:0;\n}\n.cm-overlay-img {\n\topacity:1;\n\t-webkit-transition: all .5s ease-in-out;\n\t-o-transition: all .5s ease-in-out;\n\ttransition: all .5s ease-in-out;\n}\n.cm-img-loading {\n\topacity:.01;\n}\n.cm-overlay-img-loading {\n\tbackground-image: url('/loading.svg');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\ttop:10vh;\n\tposition:absolute;\n\tleft:50%;\n\twidth:50px;\n\tmargin-left:-25px;\n\tmin-height:300px;\n\tz-index:2;\n}\n@media (max-width: 768px) {\n\t.cm-overlay-content {\n\t\twidth:auto;\n\t}\n}", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n@font-face {\n  font-family: 'prox';\n  src: url('/ProximaNova-Semibold.otf');\n}\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n.project {\n  background:#000;\n  width:24%;\n  margin:.5%;\n  float:left;\n  -webkit-box-shadow:0 0 5px #444;\n          box-shadow:0 0 5px #444;\n}\n.project-fade {\n\t-webkit-transition: all .5s ease-in-out;\n\t-o-transition: all .5s ease-in-out;\n\ttransition:all .5s ease-in-out;\n\topacity:0;\n}\n.project-shade {\n\tposition:absolute;\n\tz-index:1;\n\tleft:0;\n\ttop:0;\n\twidth:100%;\n\theight:100%;\n\tbackground:rgba(0, 0, 0, .7);\n\tdisplay:block;\n\topacity:0;\n}\n.project-shade div {\n\tdisplay:none;\n}\n.project {\n\tposition:relative;\n\toverflow:hidden;\n}\n.project h2 {\n\tfont-size:18px;\n\tposition:absolute;\n\ttop:0;\n\twidth:100%;\n\tmargin:0;\n\tpadding:20px 10px;\n\tz-index:2;\n\tbackground:#000;\n}\n.project p {\n\tdisplay:block;\n\tmargin:0;\n\tpadding:0 15px;\n\tposition:absolute;\n\ttop:90px;\n\tfont-size:14px;\n\tline-height:18px;\n\tfont-weight:normal;\n\tz-index:2;\n\t-webkit-transition-delay: .25s;\n\t     -o-transition-delay: .25s;\n\t        transition-delay: .25s;\n\twidth:90%;\n}\n.project img {\n\tposition:relative;\n\tz-index:0;\n\tdisplay:block;\n\twidth:100%;\n\theight:auto;\n}\n.project button {\n\tposition:absolute;\n\tbottom:-50px;\n\tleft:50%;\n\twidth:80px;\n\tmargin-left:-40px;\n\topacity:0;\n\tz-index:2;\n}\n.project:hover\n.project-fade {\n\topacity:1;\n}\n.project\n.project-slide-in {\n\tleft:-100%;\n}\n.project:hover\n.project-slide-in {\n\tleft:0;\n}\n.project:hover\nbutton {\n\tbottom:20px;\n}\n@media only screen and (min-width: 1500px) {\n\t.project h2 {\n\t\tfont-size:24px;\n\t}\n\t.project p {\n\t\tfont-size:18px;\n\t\tline-height:26px;\n\t}\n}\n@media (max-width: 768px) {\n\t.project {\n\t\twidth:32%;\n\t}\n\t.project h2 {\n\t\tleft:0 !important;\n\t\topacity:1 !important;\n\t}\n\t.project-shade {\n\t\topacity:.9;\n\t\twidth: 100%;\n\t    height: 100%;\n\t    padding-bottom: 25%;\n\t    padding-left: 25%;\n\t    overflow: hidden;\n\t    display:block;\n\t}\n\t.project-shade div {\n\t\twidth:50%;\n\t\theight:50%;\n\t\topacity:.75;\n\t\tdisplay:block;\n\t\twidth: 0;\n\t    height: 0;\n\t    margin-top:-500px;\n\t    margin-left: -500px;\n\t    border-top: 500px solid transparent;\n\t    border-bottom: 500px solid transparent;\n\t    border-left: 500px solid #0096ff;\n\t}\n\t.project:hover\n\t.project button, .project button {\n\t\tbottom:20% !important;\n\t\twidth:50% !important;\n\t\tmargin-left:-25% !important;\n\t\topacity:1;\n\t}\n}\n@media only screen and (max-width: 767px) {\n\t.Layout {\n\t\ttext-align:center;\t\n\t}\n\t.logo {\n\t\tposition:relative;\n\t\tdisplay:inline-block;\n\t\tleft:-5px;\n\t}\n\t.project {\n\t\twidth:100%;\n\t\tmargin:0 0 30px 0;\n\t}\n\t.project h2 {\n\t\tbackground:none;\n\t\tfont-size:26px;\n\t\tpadding:25% 0 0 0;\n\t}\n\t.project p {\n\t\tdisplay:none;\n\t}\n\t.project:hover\n\t.project button, .project button {\n\t\tbottom:20% !important;\n\t\twidth:50% !important;\n\t\tmargin-left:-25% !important;\n\t}\n}", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);