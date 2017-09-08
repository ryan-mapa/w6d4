/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = arg => {
  let element = document.querySelectorAll(arg);
  let dom = new DOMNodeCollection(Array.from(element));
  return dom;
};

// $(() => {
//   let div = $('div').addClass("id");
//   console.log(div);
// });


document.addEventListener('DOMContentLoaded', function(){
  let div = window.$l('div');
  // console.log(div.nodes[0].outerHTML["key"]);
  div.html("class");
  console.log("poop");
}, false);

// and here's the trick (works everywhere)
// function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// // use like
// r(function(){
//     alert('DOM Ready!');
// });

window.$l.extend = (base, ...others) => {
  others.forEach((obj) => {
    for (let property in obj) {
      base[property] = obj[property];
    }
  });
  return base;
};

window.$l.ajax = (option) => {
  const xhr = new XMLHttpRequest();
  const defaults = {
    success: () => {},
    error: () => {},
    url: '',
    method: "GET",
    data: {},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  };
  let options = window.$l.extend(defaults, option);

  if (options.method === 'GET') {
    
  }

};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(nodes){
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach(cb);
  }

  html(html){
    if (typeof html === "string") {
      this.each(node => node.innerHTML = html);
    } else {
      if (this.nodes.length > 0) {
        return this.nodes[0].innerHTML;
      }
    }
  }


  empty(){
    this.html('');
  }

  find(selector) {
    let found = [];
    this.each(node => {
      const nodeList = node.querySelectorAll(selector);
      found = found.concat(Array.from(nodeList));
    });
    return new DOMNodeCollection(found);
  }

  on(evnt, callback){
    this.each(node => node.addEventListener(evnt, callback));

  }

  off(evnt){
    this.each(node => node.removeEventListener(evnt));
  }

  attr(key, val){
    if (typeof val === "string") {
     this.each( node => node.setAttribute(key, val) );
   } else {
     return this.nodes[0].getAttribute(key);
   }
  }

  addClass(cls){
    this.each(el => el.classList.add(cls));
  }

  removeClass(cls){
    this.each(el => el.classList.remove(cls));
  }



}

module.exports = DOMNodeCollection;


//<div class="div1"> <ul> </ul> </div>


/***/ })
/******/ ]);