webpackHotUpdate(0,{

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(31), RootInstanceProvider = __webpack_require__(32), ReactMount = __webpack_require__(24), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_271uigfeo7 = function () {
  var path = '/Users/admin/Desktop/ReactJSTODO/src/app/containers/Hello.js',
      hash = '4d829901029d3c44e66870dc8f9b9b1ac90a2e7c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/admin/Desktop/ReactJSTODO/src/app/containers/Hello.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 11
        }
      },
      '1': {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 10,
          column: 5
        }
      },
      '2': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 17,
          column: 6
        }
      },
      '3': {
        start: {
          line: 15,
          column: 48
        },
        end: {
          line: 15,
          column: 71
        }
      },
      '4': {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 24,
          column: 1
        }
      },
      '5': {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 16
          },
          end: {
            line: 11,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 18,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 15,
            column: 43
          },
          end: {
            line: 15,
            column: 44
          }
        },
        loc: {
          start: {
            line: 15,
            column: 47
          },
          end: {
            line: 15,
            column: 72
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 20,
            column: 24
          },
          end: {
            line: 20,
            column: 25
          }
        },
        loc: {
          start: {
            line: 20,
            column: 33
          },
          end: {
            line: 24,
            column: 1
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    b: {}
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(108);

var _reactRedux = __webpack_require__(149);

var _reactBootstrap = __webpack_require__(320);

var _reactRouter = __webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_Component) {
  _inherits(Hello, _Component);

  function Hello() {
    _classCallCheck(this, Hello);

    ++cov_271uigfeo7.f[0];
    ++cov_271uigfeo7.s[0];

    var _this = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this));

    ++cov_271uigfeo7.s[1];

    _this.state = {};
    return _this;
  }

  _createClass(Hello, [{
    key: 'render',
    value: function render() {
      ++cov_271uigfeo7.f[1];
      ++cov_271uigfeo7.s[2];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Button,
          { bsStyle: 'primary', onClick: function onClick() {
              ++cov_271uigfeo7.f[2];
              ++cov_271uigfeo7.s[3];
              _reactRouter.browserHistory.goBack();
            } },
          'Back'
        )
      );
    }
  }]);

  return Hello;
}(_react.Component);

var mapStateToProps = (++cov_271uigfeo7.s[4], function (state) {
  ++cov_271uigfeo7.f[3];
  ++cov_271uigfeo7.s[5];

  return {
    state: state
  };
});
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Hello);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(33); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Hello.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)(module)))

/***/ }

})
//# sourceMappingURL=0.2d9d7b373a6d3c33894b.hot-update.js.map