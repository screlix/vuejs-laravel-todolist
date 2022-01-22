"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_components_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "register",
  data: function data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      token: "",
      user_id: "",
      errors: null
    };
  },
  computed: {
    errorsLi: function errorsLi() {
      return this.errors;
    }
  },
  methods: {
    setErr: function setErr(err) {
      var fr = {
        email: null,
        password: null
      };
      err.email ? fr.email = err.email[0] : fr.email = null;
      err.password ? fr.password = err.password[0] : fr.password = null;
      this.errors = fr;
    },
    register: function register() {
      var _this = this;

      axios.post("/api/register", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (data) {
        _this.token = data.data.token;
        _this.user_id = data.data.user.id;

        _this.$store.commit("setToken", _this.token);

        _this.$store.commit("setuserid", _this.user_id);

        window.location.href = "/";
      })["catch"](function (error) {
        _this.setErr(error.response.data.errors);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/vue/components/register.vue":
/*!**************************************************!*\
  !*** ./resources/js/vue/components/register.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_99bf0836___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=99bf0836& */ "./resources/js/vue/components/register.vue?vue&type=template&id=99bf0836&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/vue/components/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_99bf0836___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_99bf0836___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/components/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/components/register.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/vue/components/register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/components/register.vue?vue&type=template&id=99bf0836&":
/*!*********************************************************************************!*\
  !*** ./resources/js/vue/components/register.vue?vue&type=template&id=99bf0836& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_99bf0836___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_99bf0836___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_99bf0836___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=99bf0836& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/register.vue?vue&type=template&id=99bf0836&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/register.vue?vue&type=template&id=99bf0836&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/components/register.vue?vue&type=template&id=99bf0836& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "p-4 bg-white rounded register" }, [
    _c("h2", { staticClass: "text-center" }, [_vm._v("Register")]),
    _vm._v(" "),
    _c("div", { staticClass: "bg-light p-3" }, [
      _c("div", { staticClass: "form-group mb-3" }, [
        _c("label", { staticClass: "mb-2", attrs: { for: "" } }, [
          _vm._v("Name"),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.name,
              expression: "name",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            name: "name",
            id: "name",
            placeholder: "Enter name",
          },
          domProps: { value: _vm.name },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.name = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group mb-3" }, [
        _c("label", { staticClass: "mb-2", attrs: { for: "" } }, [
          _vm._v("Email"),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "text",
            name: "email",
            id: "email",
            placeholder: "Enter Email",
          },
          domProps: { value: _vm.email },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.email = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group mb-3" }, [
        _c("label", { staticClass: "mb-2", attrs: { for: "" } }, [
          _vm._v("Password"),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.password,
              expression: "password",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Enter Password",
          },
          domProps: { value: _vm.password },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.password = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group mb-3" }, [
        _c("label", { staticClass: "mb-2", attrs: { for: "" } }, [
          _vm._v("Confirm Password"),
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.password_confirmation,
              expression: "password_confirmation",
            },
          ],
          staticClass: "form-control",
          attrs: {
            type: "password",
            name: "password_confirmation",
            id: "password_confirmation",
            placeholder: "Enter Password",
          },
          domProps: { value: _vm.password_confirmation },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.password_confirmation = $event.target.value
            },
          },
        }),
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary form-control mb-2",
          attrs: { type: "button" },
          on: {
            click: function ($event) {
              return _vm.register()
            },
          },
        },
        [_vm._v("\n            Register\n        ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 text-center mb-3" }, [
        _c(
          "label",
          [
            _vm._v("Already have an account?\n                "),
            _c("router-link", { attrs: { to: "/sign" } }, [
              _vm._v("Login Now!"),
            ]),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _vm.errorsLi
        ? _c("ul", { staticClass: "bg-danger rounded ErrUl" }, [
            _vm.errorsLi.email
              ? _c("li", [_vm._v(_vm._s(_vm.errorsLi.email) + " "), _c("br")])
              : _vm._e(),
            _vm._v(" "),
            _vm.errorsLi.password
              ? _c("li", [_vm._v(_vm._s(_vm.errorsLi.password))])
              : _vm._e(),
          ])
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);