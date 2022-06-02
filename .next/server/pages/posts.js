(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 7001:
/***/ ((module) => {

// Exports
module.exports = {
	"postsList": "Posts_postsList__AKbLs",
	"postsTitle": "Posts_postsTitle__s_bcX"
};


/***/ }),

/***/ 6662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ posts),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
// EXTERNAL MODULE: ./components/Layout/index.js + 3 modules
var Layout = __webpack_require__(2296);
// EXTERNAL MODULE: ./styles/Posts.module.scss
var Posts_module = __webpack_require__(7001);
var Posts_module_default = /*#__PURE__*/__webpack_require__.n(Posts_module);
;// CONCATENATED MODULE: ./pages/posts.js





const Posts = ({ posts  })=>{
    const router = (0,router_.useRouter)();
    const handleClick = (id)=>{
        router.push(`/posts/${id}`);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Posts_module_default()).posts,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Posts_module_default()).postsTitle,
                        children: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0441\u0442\u043E\u0432"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (Posts_module_default()).postsList,
                        children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Card.Body, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card.Title, {
                                            children: post.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Card.Text, {
                                            children: post.body
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_namespaceObject.Button, {
                                            variant: "primary",
                                            onClick: ()=>handleClick(post.id)
                                            ,
                                            children: "Read more"
                                        })
                                    ]
                                })
                            }, post.id)
                        )
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const posts = (Posts);
async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return {
        props: {
            posts
        }
    };
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,783,296], () => (__webpack_exec__(6662)));
module.exports = __webpack_exports__;

})();