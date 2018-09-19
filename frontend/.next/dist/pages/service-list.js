'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _error = require('next/dist/lib/error.js');

var _error2 = _interopRequireDefault(_error);

var _PageWrapper = require('../components/PageWrapper.js');

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _Menu = require('../components/Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

var _config = require('../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/maude/react-wp-ssr/frontend/pages/service-list.js';


var ServiceList = function (_Component) {
    (0, _inherits3.default)(ServiceList, _Component);

    function ServiceList() {
        (0, _classCallCheck3.default)(this, ServiceList);

        return (0, _possibleConstructorReturn3.default)(this, (ServiceList.__proto__ || (0, _getPrototypeOf2.default)(ServiceList)).apply(this, arguments));
    }

    (0, _createClass3.default)(ServiceList, [{
        key: 'renderServices',
        value: function renderServices() {
            console.log(this.props);
            return this.props.services.map(function (service, i) {
                return _react2.default.createElement('div', { className: 'col-md-4 card-outer', key: i, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }, _react2.default.createElement('div', { className: 'card', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }, _react2.default.createElement('div', { className: 'img-outer', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, _react2.default.createElement(Link, { to: service.slug, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    }
                }, _react2.default.createElement('img', { className: 'card-img-top', src: service.image['url'] ? service.image['url'] : Placeholder, alt: 'Featured Image', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                }))), _react2.default.createElement('div', { className: 'card-body', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, _react2.default.createElement('h4', { className: 'card-title', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, _react2.default.createElement(Link, { to: service.slug, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                }, service.titre)), _react2.default.createElement('p', { dangerouslySetInnerHTML: { __html: service.description }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                }))));
            });
        }
    }, {
        key: 'renderEmpty',
        value: function renderEmpty() {
            return 'hello';
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props);
            if (!this.props.service) {
                return 'hello';
            }

            return _react2.default.createElement('div', { className: 'services-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, this.props.services.length ? this.renderServices() : this.renderEmpty());
        }
    }]);

    return ServiceList;
}(_react.Component);

exports.default = ServiceList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlcnZpY2UtbGlzdC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImZldGNoIiwiRXJyb3IiLCJQYWdlV3JhcHBlciIsIk1lbnUiLCJDb25maWciLCJTZXJ2aWNlTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsInNlcnZpY2VzIiwibWFwIiwic2VydmljZSIsImkiLCJzbHVnIiwiaW1hZ2UiLCJQbGFjZWhvbGRlciIsInRpdHJlIiwiX19odG1sIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJyZW5kZXJTZXJ2aWNlcyIsInJlbmRlckVtcHR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7eUNBRWUsQUFDYjtvQkFBQSxBQUFRLElBQUksS0FBWixBQUFpQixBQUNqQjt3QkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxHQUFNLEFBQzNDO3VDQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUsdUJBQXNCLEtBQXJDLEFBQTBDO2tDQUExQztvQ0FBQSxBQUNJO0FBREo7aUJBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ssY0FBRCxRQUFNLElBQUksUUFBVixBQUFrQjtrQ0FBbEI7b0NBQUEsQUFDSTtBQURKOzBEQUNTLFdBQUwsQUFBZSxnQkFBZSxLQUFLLFFBQUEsQUFBUSxNQUFSLEFBQWMsU0FBUyxRQUFBLEFBQVEsTUFBL0IsQUFBdUIsQUFBYyxTQUF4RSxBQUFpRixhQUFhLEtBQTlGLEFBQWtHO2tDQUFsRztvQ0FIWixBQUNJLEFBQ0ksQUFDSSxBQUdSO0FBSFE7c0NBR1IsY0FBQSxTQUFLLFdBQUwsQUFBZTtrQ0FBZjtvQ0FBQSxBQUNJO0FBREo7bUNBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQSxBQUEyQjtBQUEzQjttQ0FBNEIsY0FBRCxRQUFNLElBQUksUUFBVixBQUFrQjtrQ0FBbEI7b0NBQUEsQUFBeUI7QUFBekI7MkJBRC9CLEFBQ0ksQUFBMkIsQUFBaUMsQUFDNUQsOENBQUcseUJBQXlCLEVBQUUsUUFBUSxRQUF0QyxBQUE0QixBQUFrQjtrQ0FBOUM7b0NBVmhCLEFBQ0ksQUFDSSxBQU1JLEFBRUksQUFPbkI7QUFQbUI7O0FBWHBCLEFBQU8sQUFtQlYsYUFuQlU7Ozs7c0NBcUJHLEFBQ1Y7bUJBQUEsQUFBTyxBQUFVOzs7O2lDQUVaLEFBQ0w7b0JBQUEsQUFBUSxJQUFJLEtBQVosQUFBaUIsQUFDakI7Z0JBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQixTQUFTLEFBQ3JCO3VCQUFBLEFBQU8sQUFDVjtBQUVEOzttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0s7QUFETDthQUFBLE9BQ0ssQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixTQUNqQixLQURILEFBQ0csQUFBSyxtQkFDTCxLQUpaLEFBQ0ksQUFHUSxBQUFLLEFBSXBCOzs7OztBQTFDcUIsQSxBQTZDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2VydmljZS1saXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hdWRlL3JlYWN0LXdwLXNzci9mcm9udGVuZCJ9