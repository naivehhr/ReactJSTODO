webpackHotUpdate(0,{

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(31), RootInstanceProvider = __webpack_require__(32), ReactMount = __webpack_require__(24), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_p5jksx364 = function () {
  var path = '/Users/admin/Desktop/ReactJSTODO/src/routes.js',
      hash = '33ee73642a9714fb30e32808d68ca859150a9582',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/admin/Desktop/ReactJSTODO/src/routes.js',
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {}
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(220);

var _App = __webpack_require__(732);

var _App2 = _interopRequireDefault(_App);

var _Todo = __webpack_require__(734);

var _Todo2 = _interopRequireDefault(_Todo);

var _Hello = __webpack_require__(733);

var _Hello2 = _interopRequireDefault(_Hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Todo2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'hello', component: _Hello2.default })
  )
);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(33); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module)))

/***/ }

})
//# sourceMappingURL=0.a3bee84dd130d70e59f8.hot-update.js.map