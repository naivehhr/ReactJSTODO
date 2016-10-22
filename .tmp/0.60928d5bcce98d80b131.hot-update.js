webpackHotUpdate(0,{

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(18), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_7bluh0b6l = function () {
  var path = '/Users/admin/Desktop/ReactJSTODO/src/app/components/common/SubButton.js',
      hash = '92698dd9e95aa35efc6208868678eec2131d034d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/admin/Desktop/ReactJSTODO/src/app/components/common/SubButton.js',
    statementMap: {
      '0': {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 23
        }
      },
      '1': {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 16
        }
      },
      '2': {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 35,
          column: 5
        }
      },
      '3': {
        start: {
          line: 39,
          column: 47
        },
        end: {
          line: 39,
          column: 57
        }
      },
      '4': {
        start: {
          line: 40,
          column: 21
        },
        end: {
          line: 40,
          column: 40
        }
      },
      '5': {
        start: {
          line: 41,
          column: 19
        },
        end: {
          line: 45,
          column: 5
        }
      },
      '6': {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 48,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        loc: {
          start: {
            line: 29,
            column: 21
          },
          end: {
            line: 36,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 38,
            column: 3
          }
        },
        loc: {
          start: {
            line: 38,
            column: 11
          },
          end: {
            line: 49,
            column: 3
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
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0
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

var _reactBootstrap = __webpack_require__(147);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: huhaoran <aran.hu>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   22-10-16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Email:  huhaoran3@ucfgroup.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last modified by:   aran.hu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last modified time: 22-10-16
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @License: © 2016 NCF GROUP ALL RIGHTS RESERVED
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SubButton = function (_Component) {
  _inherits(SubButton, _Component);

  /**
  * http://www.bestcssbuttongenerator.com/#/1
  */
  function SubButton(props) {
    _classCallCheck(this, SubButton);

    ++cov_7bluh0b6l.f[0];
    ++cov_7bluh0b6l.s[0];

    console.log('加载小');
    ++cov_7bluh0b6l.s[1];

    var _this = _possibleConstructorReturn(this, (SubButton.__proto__ || Object.getPrototypeOf(SubButton)).call(this, props));

    ++cov_7bluh0b6l.s[2];

    _this.state = {
      // text: this.props.text,
      // loading: this.props.loading
    };
    return _this;
  }

  _createClass(SubButton, [{
    key: 'render',
    value: function render() {
      ++cov_7bluh0b6l.f[1];

      var _ref = (++cov_7bluh0b6l.s[3], this.props);

      var text = _ref.text;
      var bsStyle = _ref.bsStyle;
      var children = _ref.children;
      var loading = _ref.loading;

      var btnStyle = (++cov_7bluh0b6l.s[4], { bsStyle: 'danger' });
      var divStyle = (++cov_7bluh0b6l.s[5], {
        backgroundColor: 'red',
        width: 100,
        height: 100
      });
      ++cov_7bluh0b6l.s[6];
      return _react2.default.createElement('div', { style: divStyle });
    }
  }]);

  return SubButton;
}(_react.Component);

SubButton.defaultProps = {
  text: 'SubButton',
  loading: false,
  isDisable: false,
  bsStyle: []
};
SubButton.propTypes = {
  isDisable: _react2.default.PropTypes.bool,
  loading: _react2.default.PropTypes.bool,
  // maxLoops: React.PropTypes.number.isRequired,
  // posterFrameSrc: React.PropTypes.string.isRequired,
  text: _react2.default.PropTypes.string
};
exports.default = SubButton;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SubButton.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }

})
//# sourceMappingURL=0.60928d5bcce98d80b131.hot-update.js.map