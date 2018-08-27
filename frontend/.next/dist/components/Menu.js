"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _config = require("../config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/developpeur3/Sites/react-wp-ssr/frontend/components/Menu.js";


var linkStyle = {
    marginRight: 15
};

var Menu = function (_Component) {
    (0, _inherits3.default)(Menu, _Component);

    function Menu() {
        (0, _classCallCheck3.default)(this, Menu);

        return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this));
    }

    (0, _createClass3.default)(Menu, [{
        key: "getSlug",
        value: function getSlug(url) {
            var parts = url.split("/");
            return parts.length > 2 ? parts[parts.length - 2] : "";
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var menuItems = this.props.menu.items.map(function (item, index) {
                if (item.object === "custom") {
                    return _react2.default.createElement(_link2.default, { href: item.url, key: item.ID, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, _react2.default.createElement("a", { style: linkStyle, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    }, item.title));
                }
                var slug = _this2.getSlug(item.url);
                var actualPage = item.object === "category" ? "category" : "post";
                return _react2.default.createElement(_link2.default, {

                    as: "/" + slug,
                    href: "/" + actualPage + "?slug=" + slug + "&apiRoute=" + item.object,
                    key: item.ID,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                }, _react2.default.createElement("a", { style: linkStyle, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, item.title));
            });

            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_link2.default, { href: "/", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement("a", { style: linkStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, "Home")), menuItems);
        }
    }]);

    return Menu;
}(_react.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJDb25maWciLCJsaW5rU3R5bGUiLCJtYXJnaW5SaWdodCIsIk1lbnUiLCJ1cmwiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwibWVudUl0ZW1zIiwicHJvcHMiLCJtZW51IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvYmplY3QiLCJJRCIsInRpdGxlIiwic2x1ZyIsImdldFNsdWciLCJhY3R1YWxQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFjOzs7Ozs7O0FBRXZCLElBQU07aUJBQU4sQUFBa0IsQUFDRDtBQURDLEFBQ2Q7O0lBR0UsQTtrQ0FDRjs7b0JBQWM7NENBQUE7OzJIQUViOzs7OztnQ0FFTyxBLEtBQUssQUFDVDtnQkFBTSxRQUFRLElBQUEsQUFBSSxNQUFsQixBQUFjLEFBQVUsQUFDeEI7bUJBQU8sTUFBQSxBQUFNLFNBQU4sQUFBZSxJQUFJLE1BQU0sTUFBQSxBQUFNLFNBQS9CLEFBQW1CLEFBQXFCLEtBQS9DLEFBQW9ELEFBQ3ZEOzs7O2lDQUVRO3lCQUNMOztnQkFBTSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLE1BQWhCLEFBQXNCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ3pEO29CQUFJLEtBQUEsQUFBSyxXQUFULEFBQW9CLFVBQVUsQUFDMUI7MkNBQ0ksQUFBQyxnQ0FBSyxNQUFNLEtBQVosQUFBaUIsS0FBSyxLQUFLLEtBQTNCLEFBQWdDO3NDQUFoQzt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQSxPQUFHLE9BQUgsQUFBVTtzQ0FBVjt3Q0FBQSxBQUFzQjtBQUF0Qjs0QkFGUixBQUNJLEFBQ0ksQUFBMkIsQUFHdEM7QUFDRDtvQkFBTSxPQUFPLE9BQUEsQUFBSyxRQUFRLEtBQTFCLEFBQWEsQUFBa0IsQUFDL0I7b0JBQU0sYUFBYSxLQUFBLEFBQUssV0FBTCxBQUFnQixhQUFoQixBQUE2QixhQUFoRCxBQUE2RCxBQUM3RDt1Q0FDSSxBQUFDOzs4QkFBRCxBQUVZLEFBQ1I7Z0NBQUEsQUFBVSx3QkFBVixBQUE2QixzQkFBaUIsS0FIbEQsQUFHdUQsQUFDbkQ7eUJBQUssS0FKVCxBQUljOztrQ0FKZDtvQ0FBQSxBQU1JO0FBTko7QUFFSSxpQkFGSixrQkFNSSxjQUFBLE9BQUcsT0FBSCxBQUFVO2tDQUFWO29DQUFBLEFBQXNCO0FBQXRCO3dCQVBSLEFBQ0ksQUFNSSxBQUEyQixBQUd0QztBQXBCRCxBQUFrQixBQXVCbEIsYUF2QmtCOzttQ0F3QmQsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLE9BQUgsQUFBVTs4QkFBVjtnQ0FBQTtBQUFBO2VBRlIsQUFDSSxBQUNJLEFBRUgsVUFMVCxBQUNJLEFBT1A7Ozs7O0FBMUNjLEEsQUErQ25COztrQkFBQSxBQUFlIiwiZmlsZSI6Ik1lbnUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RldmVsb3BwZXVyMy9TaXRlcy9yZWFjdC13cC1zc3IvZnJvbnRlbmQifQ==