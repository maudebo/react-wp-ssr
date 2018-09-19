'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _serviceList = require('./service-list');

var _serviceList2 = _interopRequireDefault(_serviceList);

var _Menu = require('../components/Menu.js');

var _Menu2 = _interopRequireDefault(_Menu);

var _config = require('../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/maude/react-wp-ssr/frontend/pages/services.js?entry';


var Services = function (_Component) {
  (0, _inherits3.default)(Services, _Component);

  function Services() {
    (0, _classCallCheck3.default)(this, Services);

    return (0, _possibleConstructorReturn3.default)(this, (Services.__proto__ || (0, _getPrototypeOf2.default)(Services)).apply(this, arguments));
  }

  (0, _createClass3.default)(Services, [{
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_Menu2.default, { menu: this.props.headerMenu, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.props.services.acf && this.props.services.acf.titre), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, this.props.services.acf && this.props.services.acf.description), _react2.default.createElement(_serviceList2.default, { service: this.props.service, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
        var _context$query, slug, apiRoute, res, services;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context$query = context.query, slug = _context$query.slug, apiRoute = _context$query.apiRoute;
                _context.next = 3;
                return (0, _isomorphicUnfetch2.default)(_config.Config.apiUrl + '/wp-json/postlight/v1/' + apiRoute);

              case 3:
                res = _context.sent;

                console.log(_config.Config.apiUrl + '/wp-json/postlight/v1/' + apiRoute + '?slug=' + slug);
                _context.next = 7;
                return res.json();

              case 7:
                services = _context.sent;
                return _context.abrupt('return', { services: services });

              case 9:
              case 'end':
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

  return Services;
}(_react.Component);

exports.default = (0, _PageWrapper2.default)(Services);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlcnZpY2VzLmpzIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJFcnJvciIsIlBhZ2VXcmFwcGVyIiwiU2VydmljZUxpc3QiLCJNZW51IiwiQ29uZmlnIiwiU2VydmljZXMiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJoZWFkZXJNZW51Iiwic2VydmljZXMiLCJhY2YiLCJ0aXRyZSIsImRlc2NyaXB0aW9uIiwic2VydmljZSIsImNvbnRleHQiLCJxdWVyeSIsInNsdWciLCJhcGlSb3V0ZSIsImFwaVVybCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7O0FBRXhCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7NkJBV0ssQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2pCOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxnQ0FBSyxNQUFNLEtBQUEsQUFBSyxNQUFqQixBQUF1QjtvQkFBdkI7c0JBREYsQUFDRSxBQUVBO0FBRkE7MEJBRUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsY0FBTSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBSHZELEFBR0UsQUFBeUQsQUFDekQsd0JBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBTTtBQUFOO0FBQUEsY0FBTSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBSnZELEFBSUUsQUFBeUQsQUFDekQsOEJBQUEsQUFBQyx1Q0FBWSxTQUFTLEtBQUEsQUFBSyxNQUEzQixBQUFpQztvQkFBakM7c0JBTkosQUFDRSxBQUtFLEFBSUw7QUFKSzs7Ozs7OzJHQWxCdUIsQTs7Ozs7OztpQ0FDQSxRLEFBQVEsT0FBM0IsQSxzQixBQUFBLE0sQUFBTSwwQkFBQSxBOzt1QkFDSSxpQ0FDYixlQURhLEFBQ04sb0NBRE0sQSxBQUN5Qjs7bUJBRHJDO0EsK0JBR047O3dCQUFBLEFBQVEsSUFBTyxlQUFmLEFBQXNCLG9DQUF0QixBQUFxRCxzQkFBckQsQUFBc0U7O3VCQUMvQyxJQUFBLEEsQUFBSTs7bUJBQXJCO0E7aURBQ0MsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFSWSxBLEFBMEJ2Qjs7a0JBQWUsMkJBQWYsQUFBZSxBQUFZIiwiZmlsZSI6InNlcnZpY2VzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21hdWRlL3JlYWN0LXdwLXNzci9mcm9udGVuZCJ9