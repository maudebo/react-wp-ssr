"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("next/node_modules/babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("next/node_modules/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require("next/node_modules/babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _config = require("../config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/maude/react-wp-ssr/frontend/components/PageWrapper.js";


var PageWrapper = function PageWrapper(Comp) {
  return function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);

      return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
      key: "render",
      value: function render() {
        return _react2.default.createElement(Comp, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(args) {
          var headerMenuRes, headerMenu;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch(_config.Config.apiUrl + "/wp-json/menus/v1/menus/header-menu");

                case 2:
                  headerMenuRes = _context.sent;
                  _context.next = 5;
                  return headerMenuRes.json();

                case 5:
                  headerMenu = _context.sent;
                  _context.t0 = _extends3.default;
                  _context.t1 = {
                    headerMenu: headerMenu
                  };

                  if (!Comp.getInitialProps) {
                    _context.next = 14;
                    break;
                  }

                  _context.next = 11;
                  return Comp.getInitialProps(args);

                case 11:
                  _context.t2 = _context.sent;
                  _context.next = 15;
                  break;

                case 14:
                  _context.t2 = null;

                case 15:
                  _context.t3 = _context.t2;
                  return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t3));

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return _class;
  }(_react2.default.Component);
};

exports.default = PageWrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZVdyYXBwZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb25maWciLCJQYWdlV3JhcHBlciIsInByb3BzIiwiYXJncyIsImZldGNoIiwiYXBpVXJsIiwiaGVhZGVyTWVudVJlcyIsImpzb24iLCJoZWFkZXJNZW51IiwiQ29tcCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFjOzs7Ozs7O0FBRXZCLElBQU0sY0FBYyxTQUFkLEFBQWMsa0JBQUE7cUNBQUE7b0NBQUE7O3NCQUFBOzBDQUFBOztvSUFBQTtBQUFBOzs7V0FBQTsrQkFhUCxBQUNQOzZDQUNFLEFBQUMsaUNBQVMsS0FBVixBQUFlOztzQkFBZjt3QkFERixBQUNFLEFBRUg7QUFGRztBQUFBLFVBQUE7QUFmWTtBQUFBO1dBQUE7eUJBQUE7NkdBQUEsQUFFYSxNQUZiOzZCQUFBO3dFQUFBO3NCQUFBOytDQUFBO3FCQUFBO2tDQUFBO3lCQUdjLE1BQ3ZCLGVBRHVCLEFBQ2hCLFNBSkU7O3FCQUdSO0FBSFEsMkNBQUE7a0NBQUE7eUJBTVcsY0FOWCxBQU1XLEFBQWM7O3FCQUFqQztBQU5RLHdDQUFBOzJCQUFBOztnQ0FBQTtBQVFaOzt1QkFDSSxLQVRRLEFBU0gsaUJBVEc7b0NBQUE7QUFBQTtBQUFBOztrQ0FBQTt5QkFTcUIsS0FBQSxBQUFLLGdCQVQxQixBQVNxQixBQUFxQjs7cUJBVDFDO3lDQUFBO2tDQUFBO0FBQUE7O3FCQUFBO2dDQUFBLEFBU2tEOztxQkFUbEQ7eUNBQUE7MEZBQUE7O3FCQUFBO3FCQUFBO2tDQUFBOztBQUFBO3NCQUFBO0FBQUE7O3FDQUFBO2tDQUFBO0FBQUE7O2VBQUE7QUFBQTtBQUFBOztXQUFBO0lBQ0osZ0JBREksQUFDRTtBQUR0QixBQXFCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJQYWdlV3JhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tYXVkZS9yZWFjdC13cC1zc3IvZnJvbnRlbmQifQ==