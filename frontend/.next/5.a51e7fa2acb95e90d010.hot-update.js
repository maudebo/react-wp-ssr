webpackHotUpdate(5,{

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Layout = __webpack_require__(395);

var _Layout2 = _interopRequireDefault(_Layout);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(400);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _error = __webpack_require__(373);

var _error2 = _interopRequireDefault(_error);

var _PageWrapper = __webpack_require__(401);

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _serviceList = __webpack_require__(418);

var _serviceList2 = _interopRequireDefault(_serviceList);

var _Menu = __webpack_require__(394);

var _Menu2 = _interopRequireDefault(_Menu);

var _config = __webpack_require__(391);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/maude/react-wp-ssr/frontend/pages/services.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/maude/react-wp-ssr/frontend/pages/services.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/services")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNTFlN2ZhMmFjYjk1ZTkwZDAxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VydmljZXMuanM/MTVmZjQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyLmpzJztcbmltcG9ydCBTZXJ2aWNlTGlzdCBmcm9tIFwiLi9zZXJ2aWNlLWxpc3RcIjtcblxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51LmpzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy5qcyc7XG5cbmNsYXNzIFNlcnZpY2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgeyBzbHVnLCBhcGlSb3V0ZSB9ID0gY29udGV4dC5xdWVyeTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke0NvbmZpZy5hcGlVcmx9L3dwLWpzb24vcG9zdGxpZ2h0L3YxLyR7YXBpUm91dGV9YFxuICAgICk7XG4gICAgY29uc29sZS5sb2coYCR7Q29uZmlnLmFwaVVybH0vd3AtanNvbi9wb3N0bGlnaHQvdjEvJHthcGlSb3V0ZX0/c2x1Zz0ke3NsdWd9YClcbiAgICBjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgc2VydmljZXMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPE1lbnUgbWVudT17dGhpcy5wcm9wcy5oZWFkZXJNZW51fSAvPlxuXG4gICAgICAgIDxkaXY+e3RoaXMucHJvcHMuc2VydmljZXMuYWNmICYmIHRoaXMucHJvcHMuc2VydmljZXMuYWNmLnRpdHJlfTwvZGl2PlxuICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLnNlcnZpY2VzLmFjZiAmJiB0aGlzLnByb3BzLnNlcnZpY2VzLmFjZi5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPFNlcnZpY2VMaXN0IHNlcnZpY2U9e3RoaXMucHJvcHMuc2VydmljZX0gLz5cblxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlV3JhcHBlcihTZXJ2aWNlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9zZXJ2aWNlcy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBSkE7Ozs7Ozs7Ozs7Ozs7QUFqQkE7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7QUFEQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9