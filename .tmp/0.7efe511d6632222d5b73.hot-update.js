webpackHotUpdate(0,{

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(32), RootInstanceProvider = __webpack_require__(33), ReactMount = __webpack_require__(27), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_1gmokdbunk = function () {
  var path = '/Users/admin/Desktop/ReactJSTODO/src/app/containers/Todo.js',
      hash = '5c5accd0a56e430f1eed69d61bc6d60bb5533b69',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/admin/Desktop/ReactJSTODO/src/app/containers/Todo.js',
    statementMap: {
      '0': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 12
        }
      },
      '1': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 20,
          column: 6
        }
      },
      '2': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 48
        }
      },
      '3': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 23
        }
      },
      '4': {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 26
        }
      },
      '5': {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 43,
          column: 12
        }
      },
      '6': {
        start: {
          line: 45,
          column: 29
        },
        end: {
          line: 45,
          column: 39
        }
      },
      '7': {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 61,
          column: 6
        }
      },
      '8': {
        start: {
          line: 48,
          column: 46
        },
        end: {
          line: 48,
          column: 68
        }
      },
      '9': {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      },
      '10': {
        start: {
          line: 72,
          column: 2
        },
        end: {
          line: 74,
          column: 4
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 22,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 24,
            column: 2
          },
          end: {
            line: 24,
            column: 3
          }
        },
        loc: {
          start: {
            line: 24,
            column: 20
          },
          end: {
            line: 26,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 11
          },
          end: {
            line: 62,
            column: 3
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 48,
            column: 42
          },
          end: {
            line: 48,
            column: 43
          }
        },
        loc: {
          start: {
            line: 48,
            column: 46
          },
          end: {
            line: 48,
            column: 68
          }
        }
      },
      '4': {
        name: 'mapStateToProps',
        decl: {
          start: {
            line: 65,
            column: 9
          },
          end: {
            line: 65,
            column: 24
          }
        },
        loc: {
          start: {
            line: 65,
            column: 32
          },
          end: {
            line: 69,
            column: 1
          }
        }
      },
      '5': {
        name: 'mapDispatchToProps',
        decl: {
          start: {
            line: 71,
            column: 9
          },
          end: {
            line: 71,
            column: 27
          }
        },
        loc: {
          start: {
            line: 71,
            column: 38
          },
          end: {
            line: 75,
            column: 1
          }
        }
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 50,
            column: 10
          },
          end: {
            line: 58,
            column: 18
          }
        },
        type: 'cond-expr',
        locations: [{
          start: {
            line: 51,
            column: 12
          },
          end: {
            line: 55,
            column: 18
          }
        }, {
          start: {
            line: 56,
            column: 12
          },
          end: {
            line: 58,
            column: 18
          }
        }]
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    b: {
      '0': [0, 0]
    }
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(849);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(215);

var _redux = __webpack_require__(124);

var _Header = __webpack_require__(729);

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = __webpack_require__(730);

var _MainSection2 = _interopRequireDefault(_MainSection);

var _index = __webpack_require__(727);

var IndexActions = _interopRequireWildcard(_index);

var _reactBootstrap = __webpack_require__(714);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_Component) {
  _inherits(Todo, _Component);

  function Todo() {
    _classCallCheck(this, Todo);

    ++cov_1gmokdbunk.f[0];
    ++cov_1gmokdbunk.s[0];

    var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this));

    ++cov_1gmokdbunk.s[1];

    _this.state = {
      isAlert: false
    };
    ++cov_1gmokdbunk.s[2];
    _this.handleTest = _this.handleTest.bind(_this);
    return _this;
  }

  _createClass(Todo, [{
    key: 'handleTest',
    value: function handleTest(parms) {
      ++cov_1gmokdbunk.f[1];
      ++cov_1gmokdbunk.s[3];

      console.log(parms);
    }

    // go() {
    //   console.log('--------');
    //   this.setState({
    //     isAlert: true
    //   });
    // }

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      ++cov_1gmokdbunk.f[2];

      var title = (++cov_1gmokdbunk.s[4], _react2.default.createElement(
        'h3',
        null,
        'Panel title'
      ));
      var pInstance = (++cov_1gmokdbunk.s[5], _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel,
          { header: title },
          'Panel content'
        )
      ));

      var _ref = (++cov_1gmokdbunk.s[6], this.props);

      var todos = _ref.todos;
      var actions = _ref.actions;
      ++cov_1gmokdbunk.s[7];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Button,
          { bsStyle: 'danger', onClick: function onClick() {
              ++cov_1gmokdbunk.f[3];
              ++cov_1gmokdbunk.s[8];
              return _this2.handleTest('123');
            } },
          'Danger'
        ),
        this.state.isAlert ? (++cov_1gmokdbunk.b[0][0], _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.Alert,
            { bsStyle: 'warning' },
            _react2.default.createElement(
              'strong',
              null,
              'Holy guacamole!'
            ),
            ' Best check yo self, you\'re not looking too good.'
          )
        )) : (++cov_1gmokdbunk.b[0][1], _react2.default.createElement(
          'div',
          null,
          'asdf'
        ))
      );
    }
  }]);

  return Todo;
}(_react.Component);

Todo.propTypes = {
  todos: _react.PropTypes.array.isRequired,
  actions: _react.PropTypes.object.isRequired
};


function mapStateToProps(state) {
  ++cov_1gmokdbunk.f[4];
  ++cov_1gmokdbunk.s[9];

  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  ++cov_1gmokdbunk.f[5];
  ++cov_1gmokdbunk.s[10];

  return {
    actions: (0, _redux.bindActionCreators)(IndexActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Todo);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(34); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Todo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }

})
//# sourceMappingURL=0.7efe511d6632222d5b73.hot-update.js.map