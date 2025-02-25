"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user/login";
exports.ids = ["pages/api/user/login"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/user/login.js */ \"(api)/./pages/api/user/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/user/login\",\n        pathname: \"/api/user/login\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_user_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnVzZXIlMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTJGYXBpJTJGdXNlciUyRmxvZ2luLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQ3NEO0FBQ3REO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxxREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMscURBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCAnZGVmYXVsdCcpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgJ2NvbmZpZycpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci9sb2dpblwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXIvbG9naW5cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./config/connectDb.js":
/*!*****************************!*\
  !*** ./config/connectDb.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://irfanusuf33:robolox@robolox.xnj0z.mongodb.net/TechtronixTAsk?retryWrites=true&w=majority&appName=robolox\";\nconst connectDb = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n        console.log(\"Connected to database\");\n    } catch (error) {\n        console.error(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvY29ubmVjdERiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUtnQztBQUVoQyxNQUFNQyxNQUFNO0FBRVosTUFBTUMsWUFBWTtJQUdoQixJQUFJRiw2REFBb0IsQ0FBQyxFQUFFLENBQUNJLFVBQVUsRUFBRTtRQUN0QztJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1KLHVEQUFnQixDQUFDQztRQUN2QkssUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQ0E7SUFDaEI7QUFDRjtBQUVBLGlFQUFlTixTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9pcmZhbl91c3VmL2NvZGluZy90ZWNodHJvbml4LU5leHRqcy9jb25maWcvY29ubmVjdERiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9pcmZhbnVzdWYzMzpyb2JvbG94QHJvYm9sb3gueG5qMHoubW9uZ29kYi5uZXQvVGVjaHRyb25peFRBc2s/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9cm9ib2xveFwiXG5cbmNvbnN0IGNvbm5lY3REYiA9IGFzeW5jICgpID0+IHtcblxuXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHVyaSk7XG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gZGF0YWJhc2VcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjtcblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXJpIiwiY29ubmVjdERiIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/connectDb.js\n");

/***/ }),

/***/ "(api)/./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    tasks: [\n        {\n            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n            ref: \"Task\"\n        }\n    ]\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlck1vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxhQUFhRCxzREFBZSxDQUNoQztJQUNFRyxVQUFVO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0MsT0FBTztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO1FBQU1FLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNJLE9BQU87UUFDTDtZQUNFTixNQUFNSix3REFBZSxDQUFDVyxLQUFLLENBQUNDLFFBQVE7WUFDcENDLEtBQUs7UUFDUDtLQUNEO0FBQ0gsR0FFQTtJQUNFQyxZQUFZO0FBQ2Q7QUFHSyxNQUFNQyxPQUFPZix3REFBZSxDQUFDZSxJQUFJLElBQUlmLHFEQUFjLENBQUMsUUFBUUMsWUFBWSIsInNvdXJjZXMiOlsiL2hvbWUvaXJmYW5fdXN1Zi9jb2RpbmcvdGVjaHRyb25peC1OZXh0anMvbW9kZWxzL3VzZXJNb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICB1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVmOiBcIlRhc2tcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwidGFza3MiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/userModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/login.js":
/*!*********************************!*\
  !*** ./pages/api/user/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _config_connectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/connectDb */ \"(api)/./config/connectDb.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ \"(api)/./models/userModel.js\");\n/* harmony import */ var _utils_messagehandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/messagehandler */ \"(api)/./utils/messagehandler.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function login(req, res) {\n    try {\n        if (req.method !== \"POST\") return (0,_utils_messagehandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res, 400, \"Only POST Method is allowed\");\n        await (0,_config_connectDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const { email, password } = req.body;\n        if (email === \"\" || password === \"\") {\n            (0,_utils_messagehandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res, 400, \"All credentials Required!\");\n        }\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__.User.findOne({\n            email\n        });\n        if (user) {\n            const verifyPass = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n            if (verifyPass) {\n                const userId = user._id;\n                const secretKey = \"heellothisisthessecretKey\";\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                    userId\n                }, secretKey);\n                (0,_utils_messagehandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res, 200, \"Logged in succesfully\", token, userId);\n            } else {\n                (0,_utils_messagehandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res, 400, \"Pass incorrect\");\n            }\n        } else {\n            (0,_utils_messagehandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(res, 404, \"user not Found\");\n        }\n    } catch (error) {\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNEO0FBQ1U7QUFDL0I7QUFDRztBQUVoQixlQUFlSyxNQUFNQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSTtRQUNGLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUNqQixPQUFPTixpRUFBY0EsQ0FBQ0ssS0FBSyxLQUFLO1FBRWxDLE1BQU1QLDZEQUFTQTtRQUVmLE1BQU0sRUFBRVMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUVwQyxJQUFJRixVQUFVLE1BQU1DLGFBQWEsSUFBSTtZQUNuQ1IsaUVBQWNBLENBQUNLLEtBQUssS0FBSztRQUMzQjtRQUVBLE1BQU1LLE9BQU8sTUFBTVgsbURBQUlBLENBQUNZLE9BQU8sQ0FBQztZQUFFSjtRQUFNO1FBQ3hDLElBQUlHLE1BQU07WUFDUixNQUFNRSxhQUFhLE1BQU1YLHFEQUFjLENBQUNPLFVBQVVFLEtBQUtGLFFBQVE7WUFFL0QsSUFBSUksWUFBWTtnQkFDZCxNQUFNRSxTQUFTSixLQUFLSyxHQUFHO2dCQUN2QixNQUFNQyxZQUFZO2dCQUNsQixNQUFNQyxRQUFRZix3REFBUSxDQUFDO29CQUFFWTtnQkFBTyxHQUFHRTtnQkFFbkNoQixpRUFBY0EsQ0FBQ0ssS0FBSyxLQUFLLHlCQUF5QlksT0FBUUg7WUFDNUQsT0FBTztnQkFDTGQsaUVBQWNBLENBQUNLLEtBQUssS0FBSztZQUMzQjtRQUNGLE9BQU87WUFDTEwsaUVBQWNBLENBQUNLLEtBQUssS0FBSztRQUMzQjtJQUNGLEVBQUUsT0FBT2MsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO0lBQ2Q7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUvaXJmYW5fdXN1Zi9jb2RpbmcvdGVjaHRyb25peC1OZXh0anMvcGFnZXMvYXBpL3VzZXIvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REYiBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2Nvbm5lY3REYlwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvdXNlck1vZGVsXCI7XG5pbXBvcnQgbWVzc2FnZWhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL21lc3NhZ2VoYW5kbGVyXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIilcbiAgICAgIHJldHVybiBtZXNzYWdlaGFuZGxlcihyZXMsIDQwMCwgXCJPbmx5IFBPU1QgTWV0aG9kIGlzIGFsbG93ZWRcIik7XG5cbiAgICBhd2FpdCBjb25uZWN0RGIoKTtcblxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgIGlmIChlbWFpbCA9PT0gXCJcIiB8fCBwYXNzd29yZCA9PT0gXCJcIikge1xuICAgICAgbWVzc2FnZWhhbmRsZXIocmVzLCA0MDAsIFwiQWxsIGNyZWRlbnRpYWxzIFJlcXVpcmVkIVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIGNvbnN0IHZlcmlmeVBhc3MgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgIGlmICh2ZXJpZnlQYXNzKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIuX2lkO1xuICAgICAgICBjb25zdCBzZWNyZXRLZXkgPSBcImhlZWxsb3RoaXNpc3RoZXNzZWNyZXRLZXlcIjtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJJZCB9LCBzZWNyZXRLZXkpO1xuXG4gICAgICAgIG1lc3NhZ2VoYW5kbGVyKHJlcywgMjAwLCBcIkxvZ2dlZCBpbiBzdWNjZXNmdWxseVwiLCB0b2tlbiAsIHVzZXJJZCApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZWhhbmRsZXIocmVzLCA0MDAsIFwiUGFzcyBpbmNvcnJlY3RcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VoYW5kbGVyKHJlcywgNDA0LCBcInVzZXIgbm90IEZvdW5kXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0RGIiLCJVc2VyIiwibWVzc2FnZWhhbmRsZXIiLCJiY3J5cHQiLCJqd3QiLCJsb2dpbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwidXNlciIsImZpbmRPbmUiLCJ2ZXJpZnlQYXNzIiwiY29tcGFyZSIsInVzZXJJZCIsIl9pZCIsInNlY3JldEtleSIsInRva2VuIiwic2lnbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.js\n");

/***/ }),

/***/ "(api)/./utils/messagehandler.js":
/*!*********************************!*\
  !*** ./utils/messagehandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst messagehandler = (res, statusCode, message, payload, userId)=>{\n    return res.status(statusCode).json({\n        message: message,\n        payload: payload,\n        userId: userId\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messagehandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tZXNzYWdlaGFuZGxlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBSUEsTUFBTUEsaUJBQWlCLENBQUNDLEtBQUtDLFlBQVlDLFNBQVNDLFNBQVVDO0lBQzFELE9BQU9KLElBQ0pLLE1BQU0sQ0FBQ0osWUFDUEssSUFBSSxDQUFDO1FBQUVKLFNBQVNBO1FBQVNDLFNBQVNBO1FBQVVDLFFBQVFBO0lBQU07QUFDL0Q7QUFFQSxpRUFBZUwsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvaXJmYW5fdXN1Zi9jb2RpbmcvdGVjaHRyb25peC1OZXh0anMvdXRpbHMvbWVzc2FnZWhhbmRsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5jb25zdCBtZXNzYWdlaGFuZGxlciA9IChyZXMsIHN0YXR1c0NvZGUsIG1lc3NhZ2UsIHBheWxvYWQgLCB1c2VySWQpID0+IHtcbiAgcmV0dXJuIHJlc1xuICAgIC5zdGF0dXMoc3RhdHVzQ29kZSlcbiAgICAuanNvbih7IG1lc3NhZ2U6IG1lc3NhZ2UsIHBheWxvYWQ6IHBheWxvYWQgLCB1c2VySWQgOnVzZXJJZH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZWhhbmRsZXI7XG4iXSwibmFtZXMiOlsibWVzc2FnZWhhbmRsZXIiLCJyZXMiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInBheWxvYWQiLCJ1c2VySWQiLCJzdGF0dXMiLCJqc29uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/messagehandler.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fuser%2Flogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();