"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("next/node_modules/babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("next/node_modules/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Layout = require("../components/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _error = require("next/dist/lib/error.js");

var _error2 = _interopRequireDefault(_error);

var _PageWrapper = require("../components/PageWrapper.js");

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _Menu = require("../components/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _config = require("../config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/developpeur3/Sites/react-wp-ssr/frontend/pages/post.js?entry";


var Post = function (_Component) {
    (0, _inherits3.default)(Post, _Component);

    function Post() {
        (0, _classCallCheck3.default)(this, Post);

        return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).apply(this, arguments));
    }

    (0, _createClass3.default)(Post, [{
        key: "render",
        value: function render() {
            if (!this.props.post.title) return _react2.default.createElement(_error2.default, { statusCode: 404, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            });

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, _react2.default.createElement(_Menu2.default, { menu: this.props.headerMenu, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, this.props.post.title.rendered), _react2.default.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: this.props.post.content.rendered
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
                var _context$query, slug, apiRoute, res, post;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context$query = context.query, slug = _context$query.slug, apiRoute = _context$query.apiRoute;
                                _context.next = 3;
                                return (0, _isomorphicUnfetch2.default)(_config.Config.apiUrl + "/wp-json/postlight/v1/" + apiRoute + "?slug=" + slug);

                            case 3:
                                res = _context.sent;
                                _context.next = 6;
                                return res.json();

                            case 6:
                                post = _context.sent;
                                return _context.abrupt("return", { post: post });

                            case 8:
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

    return Post;
}(_react.Component);

exports.default = (0, _PageWrapper2.default)(Post);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJmZXRjaCIsIkVycm9yIiwiUGFnZVdyYXBwZXIiLCJNZW51IiwiQ29uZmlnIiwiUG9zdCIsInByb3BzIiwicG9zdCIsInRpdGxlIiwiaGVhZGVyTWVudSIsInJlbmRlcmVkIiwiX19odG1sIiwiY29udGVudCIsImNvbnRleHQiLCJxdWVyeSIsInNsdWciLCJhcGlSb3V0ZSIsImFwaVVybCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O2lDQVVPLEFBQ0w7Z0JBQUksQ0FBQyxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQWhCLEFBQXFCLDhCQUFjLEFBQUMsaUNBQU0sWUFBUCxBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUVuQztBQUZtQzthQUFBLENBQVA7O21DQUd4QixBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsZ0NBQUssTUFBTSxLQUFBLEFBQUssTUFBakIsQUFBdUI7OEJBQXZCO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsTUFGekIsQUFFSSxBQUEyQixBQUMzQjs7NEJBRWdCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixRQUZoQyxBQUM2QixBQUNXO0FBRFgsQUFDckI7OzhCQUZSO2dDQUpSLEFBQ0ksQUFHSSxBQU9YO0FBUFc7QUFDSTs7Ozs7aUhBakJhLEE7Ozs7Ozs7aURBQ0UsUSxBQUFRLE8sQUFBM0Isc0IsQUFBQSxNQUFNLEEsMEJBQUEsQTs7dUNBQ0ksaUNBQ1gsZUFEVyxBQUNKLG9DQURJLEFBQzJCLHNCQUQzQixBQUM0QyxBOztpQ0FEeEQ7QTs7dUNBR2EsSUFBQSxBQUFJLEE7O2lDQUFqQjtBO2lFQUNDLEVBQUUsTUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUEksQSxBQTJCbkI7O2tCQUFlLDJCQUFmLEFBQWUsQUFBWSIsImZpbGUiOiJwb3N0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZXZlbG9wcGV1cjMvU2l0ZXMvcmVhY3Qtd3Atc3NyL2Zyb250ZW5kIn0=