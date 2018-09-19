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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _config = require('../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/maude/react-wp-ssr/frontend/components/Menu.js';


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
    key: 'getSlug',
    value: function getSlug(url) {
      var parts = url.split('/');
      return parts.length > 2 ? parts[parts.length - 2] : '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var menuItems = this.props.menu.items.map(function (item, index) {
        if (item.object === 'custom') {
          return _react2.default.createElement(_link2.default, { href: item.url, key: item.ID, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, _react2.default.createElement('a', { style: linkStyle, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }, item.title));
        }
        var slug = _this2.getSlug(item.url);
        var actualPage = item.object; // === 'category' ? 'category' : 'post';

        return _react2.default.createElement(_link2.default, {
          as: '/' + slug,
          href: '/' + actualPage + '?slug=' + slug + '&apiRoute=' + item.object,
          key: item.ID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, item.title));
      });

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('a', { style: linkStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Home')), menuItems);
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJDb25maWciLCJsaW5rU3R5bGUiLCJtYXJnaW5SaWdodCIsIk1lbnUiLCJ1cmwiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwibWVudUl0ZW1zIiwicHJvcHMiLCJtZW51IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvYmplY3QiLCJJRCIsInRpdGxlIiwic2x1ZyIsImdldFNsdWciLCJhY3R1YWxQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFjOzs7Ozs7O0FBRXZCLElBQU07ZUFBTixBQUFrQixBQUNIO0FBREcsQUFDaEI7O0ksQUFHSTtnQ0FDSjs7a0JBQWM7d0NBQUE7O3VIQUViOzs7Ozs0QixBQUVPLEtBQUssQUFDWDtVQUFNLFFBQVEsSUFBQSxBQUFJLE1BQWxCLEFBQWMsQUFBVSxBQUN4QjthQUFPLE1BQUEsQUFBTSxTQUFOLEFBQWUsSUFBSSxNQUFNLE1BQUEsQUFBTSxTQUEvQixBQUFtQixBQUFxQixLQUEvQyxBQUFvRCxBQUNyRDs7Ozs2QkFFUTttQkFDUDs7VUFBTSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLE1BQWhCLEFBQXNCLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTztZQUM3QyxLQUFBLEFBQUssV0FBVCxBQUFvQixVQUFVLEFBQzVCO2lDQUNFLEFBQUMsZ0NBQUssTUFBTSxLQUFaLEFBQWlCLEtBQUssS0FBSyxLQUEzQixBQUFnQzt3QkFBaEM7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVTt3QkFBVjswQkFBQSxBQUFzQjtBQUF0QjtrQkFGSixBQUNFLEFBQ0UsQUFBMkIsQUFHaEM7QUFDRDtZQUFNLE9BQU8sT0FBQSxBQUFLLFFBQVEsS0FBMUIsQUFBYSxBQUFrQixBQUMvQjtZQUFNLGFBQWEsS0FUd0MsQUFTM0QsQUFBd0IsT0FUbUMsQUFDM0QsQ0FRZ0MsQUFFaEM7OytCQUNFLEFBQUM7b0JBQUQsQUFDVSxBQUNSO3NCQUFBLEFBQVUsd0JBQVYsQUFBNkIsc0JBQWlCLEtBRmhELEFBRXFELEFBQ25EO2VBQUssS0FIUCxBQUdZOztzQkFIWjt3QkFBQSxBQUtFO0FBTEY7QUFDRSxTQURGLGtCQUtFLGNBQUEsT0FBRyxPQUFILEFBQVU7c0JBQVY7d0JBQUEsQUFBc0I7QUFBdEI7Z0JBTkosQUFDRSxBQUtFLEFBQTJCLEFBR2hDO0FBcEJELEFBQWtCLEFBc0JsQixPQXRCa0I7OzZCQXVCaEIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE9BQUgsQUFBVTtvQkFBVjtzQkFBQTtBQUFBO1NBRkosQUFDRSxBQUNFLEFBRUQsVUFMTCxBQUNFLEFBT0g7Ozs7O0FBekNnQixBLEFBNENuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJNZW51LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21hdWRlL3JlYWN0LXdwLXNzci9mcm9udGVuZCJ9