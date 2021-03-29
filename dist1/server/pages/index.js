exports.ids = [1];
exports.modules = {

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4ffb338f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"text-center py-4 bg-green-500 text-white font-extrabold shadow-lg\"><p>visit <a href=\"https://intense-eyrie-90071.herokuapp.com/admin/\" class=\"text-black\"> here </a> to Add your todo lists</p></div> <div class=\"pt-20 p-4 sm:p-40\"><div class=\"flex flex-col text-center w-full mb-12\"><h1 class=\"text-4xl sm:text-6xl font-medium title-font mb-4 text-gray-900 -mt-10\">Your personal todo list</h1> <p class=\"px-20 lg:w-2/3 text-sm text-gray-400 mx-auto leading-relaxed text-base\">Boost your productivy by using this free todo app</p></div> <div class=\"p-4  bg-green-500 rounded-lg\">"+(_vm._ssrList((_vm.messages),function(message,index){return ("<div class=\"w-full text-white bg-green-500 \"><div class=\"container flex items-center justify-between px-6 py-4 mx-auto\"><div class=\"flex\"><svg viewBox=\"0 0 40 40\" class=\"w-6 h-6 fill-current\"><path d=\"M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z\"></path></svg> <p class=\"mx-3\">"+_vm._ssrEscape(_vm._s(message.greetings))+"</p></div> <button class=\"p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none\"><svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-5 h-5\"><path d=\"M6 18L18 6M6 6L18 18\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></button></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4ffb338f&

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(45);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./graphql/query.js

const messageQuery = external_graphql_tag_default.a`
query messagequery {
    messages {
      greetings
      id
    }
  }
`;
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      messages: [],
      index: "0"
    };
  },

  apollo: {
    messages: {
      prefetch: true,
      query: messageQuery
    }
  },
  props: {},
  methods: {
    abc(id) {
      // console.log("hhhhhhhhhhhhhhhhhhh");
      this.messages.splice(id, 1);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0378c7f7"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map