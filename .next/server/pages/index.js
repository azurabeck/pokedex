"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/index.js



async function getStaticProps(context) {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokedex/1/").then((serverResponse)=>{
        const getPokemon = serverResponse && serverResponse.json();
        return getPokemon;
    }).then((pokemonList)=>{
        return pokemonList.pokemon_entries;
    });
    return {
        props: {
            pokemons
        }
    };
}
function index(props) {
    const { pokemons  } = props;
    return /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("ul", {
        children: pokemons && pokemons.map((pokemon, i)=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("ul", {
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("li", {
                    children: pokemon.pokemon_species.name
                })
            }, pokemon.entry_number))
    });
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(656));
module.exports = __webpack_exports__;

})();