module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/404/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/head.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIj8xNzBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4uL25leHQtc2VydmVyL2xpYi9oZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/head\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ \"../next-server/lib/head\"));\n\nconst statusCodes = {\n  400: 'Bad Request',\n  404: 'This page could not be found',\n  405: 'Method Not Allowed',\n  500: 'Internal Server Error'\n};\n\nfunction _getInitialProps({\n  res,\n  err\n}) {\n  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n}\n/**\n* `Error` component used for handling errors.\n*/\n\n\nclass Error extends _react.default.Component {\n  render() {\n    const {\n      statusCode\n    } = this.props;\n    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n    return /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.error\n    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement(\"title\", null, statusCode, \": \", title)), /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: 'body { margin: 0 }'\n      }\n    }), statusCode ? /*#__PURE__*/_react.default.createElement(\"h1\", {\n      style: styles.h1\n    }, statusCode) : null, /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.desc\n    }, /*#__PURE__*/_react.default.createElement(\"h2\", {\n      style: styles.h2\n    }, title, \".\"))));\n  }\n\n}\n\nexports.default = Error;\nError.displayName = 'ErrorPage';\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nconst styles = {\n  error: {\n    color: '#000',\n    background: '#fff',\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: '100vh',\n    textAlign: 'center',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  desc: {\n    display: 'inline-block',\n    textAlign: 'left',\n    lineHeight: '49px',\n    height: '49px',\n    verticalAlign: 'middle'\n  },\n  h1: {\n    display: 'inline-block',\n    borderRight: '1px solid rgba(0, 0, 0,.3)',\n    margin: 0,\n    marginRight: '20px',\n    padding: '10px 23px 10px 0',\n    fontSize: '24px',\n    fontWeight: 500,\n    verticalAlign: 'top'\n  },\n  h2: {\n    fontSize: '14px',\n    fontWeight: 'normal',\n    lineHeight: 'inherit',\n    margin: 0,\n    padding: 0\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2Vycm9yLnRzeD8wNjc3Il0sIm5hbWVzIjpbInN0YXR1c0NvZGVzIiwic3RhdHVzQ29kZSIsInJlcyIsImVyciIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwidGl0bGUiLCJzdHlsZXMiLCJfX2h0bWwiLCJFcnJvciIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiX2dldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJlcnJvciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRlc2MiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImgxIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBLE1BQU1BLFdBQXVDLEdBQUc7QUFDOUMsT0FEOEM7QUFFOUMsT0FGOEM7QUFHOUMsT0FIOEM7QUFJOUMsT0FKRjtBQUFnRCxDQUFoRDs7QUFZQSwwQkFBMEI7QUFBQTtBQUExQjtBQUEwQixDQUExQixFQUdzRDtBQUNwRCxRQUFNQyxVQUFVLEdBQ2RDLEdBQUcsSUFBSUEsR0FBRyxDQUFWQSxhQUF3QkEsR0FBRyxDQUEzQkEsYUFBeUNDLEdBQUcsR0FBR0EsR0FBRyxDQUFOLGFBRDlDO0FBRUEsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdGO0FBQUE7QUFDQTtBQUNBOzs7QUFDZSxvQkFBNEJDLGVBQU1DLFNBQWxDLENBQTREO0FBTXpFQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQSxRQUFpQixLQUF2QjtBQUNBLFVBQU1DLEtBQUssR0FDVCxvQkFDQVAsV0FBVyxDQURYLFVBQ1csQ0FEWCxJQURGO0FBS0Esd0JBQ0U7QUFBSyxXQUFLLEVBQUVRLE1BQU0sQ0FBbEI7QUFBQSxvQkFDRSw2QkFBQyxNQUFELDRCQUNFLDhEQUZKLEtBRUksQ0FERixDQURGLGVBTUUsdURBQ0U7QUFBTyw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBRDFDO0FBQ2tDO0FBQWhDLE1BREYsRUFFR1IsVUFBVSxnQkFBRztBQUFJLFdBQUssRUFBRU8sTUFBTSxDQUFqQjtBQUFBLE9BQUgsVUFBRyxDQUFILEdBRmIsbUJBR0U7QUFBSyxXQUFLLEVBQUVBLE1BQU0sQ0FBbEI7QUFBQSxvQkFDRTtBQUFJLFdBQUssRUFBRUEsTUFBTSxDQUFqQjtBQUFBLGNBWFIsR0FXUSxDQURGLENBSEYsQ0FORixDQURGO0FBYnVFOztBQUFBOzs7QUFBdERFLEssQ0FDWkMsV0FEWUQsR0FDRSxXQURGQTtBQUFBQSxLLENBR1pFLGVBSFlGLEdBR01HLGdCQUhOSDtBQUFBQSxLLENBSVpJLG1CQUpZSixHQUlVRyxnQkFKVkg7QUFnQ3JCLE1BQU1GLE1BQTRDLEdBQUc7QUFDbkRPLE9BQUssRUFBRTtBQUNMQyxTQUFLLEVBREE7QUFFTEMsY0FBVSxFQUZMO0FBR0xDLGNBQVUsRUFITDtBQUtMQyxVQUFNLEVBTEQ7QUFNTEMsYUFBUyxFQU5KO0FBT0xDLFdBQU8sRUFQRjtBQVFMQyxpQkFBYSxFQVJSO0FBU0xDLGNBQVUsRUFUTDtBQVVMQyxrQkFBYyxFQVhtQztBQUM1QyxHQUQ0QztBQWNuREMsTUFBSSxFQUFFO0FBQ0pKLFdBQU8sRUFESDtBQUVKRCxhQUFTLEVBRkw7QUFHSk0sY0FBVSxFQUhOO0FBSUpQLFVBQU0sRUFKRjtBQUtKUSxpQkFBYSxFQW5Cb0M7QUFjN0MsR0FkNkM7QUFzQm5EQyxJQUFFLEVBQUU7QUFDRlAsV0FBTyxFQURMO0FBRUZRLGVBQVcsRUFGVDtBQUdGQyxVQUFNLEVBSEo7QUFJRkMsZUFBVyxFQUpUO0FBS0ZDLFdBQU8sRUFMTDtBQU1GQyxZQUFRLEVBTk47QUFPRkMsY0FBVSxFQVBSO0FBUUZQLGlCQUFhLEVBOUJvQztBQXNCL0MsR0F0QitDO0FBaUNuRFEsSUFBRSxFQUFFO0FBQ0ZGLFlBQVEsRUFETjtBQUVGQyxjQUFVLEVBRlI7QUFHRlIsY0FBVSxFQUhSO0FBSUZJLFVBQU0sRUFKSjtBQUtGRSxXQUFPLEVBdENYO0FBaUNNO0FBakMrQyxDQUFyRCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5cbmNvbnN0IHN0YXR1c0NvZGVzOiB7IFtjb2RlOiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcbiAgNDAwOiAnQmFkIFJlcXVlc3QnLFxuICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgNDA1OiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgNTAwOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbn1cblxuZXhwb3J0IHR5cGUgRXJyb3JQcm9wcyA9IHtcbiAgc3RhdHVzQ29kZTogbnVtYmVyXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe1xuICByZXMsXG4gIGVycixcbn06IE5leHRQYWdlQ29udGV4dCk6IFByb21pc2U8RXJyb3JQcm9wcz4gfCBFcnJvclByb3BzIHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9XG4gICAgcmVzICYmIHJlcy5zdGF0dXNDb2RlID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSEgOiA0MDRcbiAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XG59XG5cbi8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcjxQID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAgJiBFcnJvclByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFcnJvclBhZ2UnXG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRpdGxlID1cbiAgICAgIHRoaXMucHJvcHMudGl0bGUgfHxcbiAgICAgIHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8XG4gICAgICAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVycm9yfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAge3N0YXR1c0NvZGV9OiB7dGl0bGV9XG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICdib2R5IHsgbWFyZ2luOiAwIH0nIH19IC8+XG4gICAgICAgICAge3N0YXR1c0NvZGUgPyA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+e3N0YXR1c0NvZGV9PC9oMT4gOiBudWxsfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVzLmgyfT57dGl0bGV9LjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlczogeyBbazogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllcyB9ID0ge1xuICBlcnJvcjoge1xuICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIGZvbnRGYW1pbHk6XG4gICAgICAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBSb2JvdG8sIFwiU2Vnb2UgVUlcIiwgXCJGaXJhIFNhbnNcIiwgQXZlbmlyLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuXG4gIGRlc2M6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXG4gICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIH0sXG5cbiAgaDE6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCAyM3B4IDEwcHggMCcsXG4gICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gIH0sXG5cbiAgaDI6IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_error */ \"./node_modules/next/dist/pages/_error.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9lcnJvci5qcz83YTg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFFQUFxQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2Vycm9yJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/error.js\n");

/***/ }),

/***/ "./src/pages/404/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/404/index.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/140457/Documents/Study/CNM/cnm-crypto-wallet/src/pages/404/index.tsx\";\n\n\n\n\nconst PageNotFound = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Header, {\n      style: {\n        backgroundColor: 'white'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Content, {\n      className: \"\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        statusCode: 404\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageNotFound);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvNDA0L2luZGV4LnRzeD8xODRhIl0sIm5hbWVzIjpbIlBhZ2VOb3RGb3VuZCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU07QUFDekIsc0JBQ0UscUVBQUMsMkNBQUQ7QUFBQSw0QkFDRSxxRUFBQywyQ0FBRCxDQUFRLE1BQVI7QUFBZSxXQUFLLEVBQUU7QUFBQ0MsdUJBQWUsRUFBRTtBQUFsQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0UscUVBQUMsMkNBQUQsQ0FBUSxPQUFSO0FBQWdCLGVBQVMsRUFBQyxFQUExQjtBQUFBLDZCQUNFLHFFQUFDLGlEQUFEO0FBQWtCLGtCQUFVLEVBQUU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQVZEOztBQVllRCwyRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy80MDQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERlZmF1bHRFcnJvclBhZ2UgZnJvbSAnbmV4dC9lcnJvcidcbmltcG9ydCB7TGF5b3V0fSBmcm9tICdhbnRkJ1xuXG5jb25zdCBQYWdlTm90Rm91bmQgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8TGF5b3V0PlxuICAgICAgPExheW91dC5IZWFkZXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9fT5cbiAgICAgIDwvTGF5b3V0LkhlYWRlcj5cbiAgICAgIDxMYXlvdXQuQ29udGVudCBjbGFzc05hbWU9Jyc+XG4gICAgICAgIDxEZWZhdWx0RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0vPlxuICAgICAgPC9MYXlvdXQuQ29udGVudD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTm90Rm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/404/index.tsx\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });