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

// 
var AjaxRequest = __webpack_require__(1);
var MainView = __webpack_require__(2);
var DropdownView = __webpack_require__(4)

var url = 'http://localhost:3000/api/main';

window.addEventListener('load', function(){

  var ajaxRequest = new AjaxRequest(url);
  var mainView = new MainView();
  var dropdownView = new DropdownView()

  ajaxRequest.getData(mainView.render);
  ajaxRequest.getData(dropdownView.render);
  
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Constructor
var AjaxRequest = function(url){
  this.url = url;
  this.data = [];
}

// Methods

AjaxRequest.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText;
        // console.log(jsonString);
        //localStorage.setItem('countries', jsonString);
        this.data = JSON.parse(jsonString);
        callback(this.data);
      }
    }.bind(this);
    request.send();
  }
}

module.exports = AjaxRequest;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var DescriptionView = __webpack_require__(3);

// Constructor
var MainView = function(){

}

// Methods

MainView.prototype = {

  render: function(data){
    // console.log(data);

    var button = document.querySelector('#button-submit');
    button.addEventListener('click', function(event){
      event.preventDefault();
      
      var input = document.querySelector('#search-text').value;

      var term = data.find(function(element,){
        return element.name === input;
      });

      var descriptionView = new DescriptionView();
      descriptionView.render(term);

    });
  }
}


module.exports = MainView;





/***/ }),
/* 3 */
/***/ (function(module, exports) {

// Constructor
var DescriptionView = function(){

}

// Methods

DescriptionView.prototype = {

  render: function(term){

    
    var section = document.querySelector('#description-section');
        while (section.firstChild){ section.removeChild(section.firstChild); };
    var pName = document.createElement('p');
    pName.innerText = term.name;
    section.appendChild(pName)
    var pDescription = document.createElement('p');
    pDescription.innerText = term.description;
    section.appendChild(pDescription);

    var testButton = document.createElement('button');
      section.appendChild(testButton);
      // Changed class attribute to id attribute.
      testButton.outerHTML = '<button type="button" id="test-button" alt="test understanding">Test Understanding</button>'
      // This is new; you need to select the test button separately.
      button = document.querySelector('#test-button');
      button.addEventListener('click', function(event){
        event.preventDefault();
        // console.log("test button clicked");
        //link from here to another view which allows us to add the fade function
        var descriptionView = new DescriptionView();
        descriptionView.getKeyword(term);
      })
  },

  getKeyword: function(term) {
    // console.log(term.keywords);
    var section = document.querySelector('#description-section');
    var descriptionView = new DescriptionView();
    descriptionView.fade(section)
  },

  fade: function(keyWord){
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            keyWord.style.display = 'none';
        }
        keyWord.style.opacity = op;
        keyWord.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    // console.log("section faded");
  }


}

module.exports = DescriptionView;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var DescriptionView = __webpack_require__(3);

// Constructor
var DropdownView = function(){

}

// Methods
DropdownView.prototype = {

  render: function(data){
    console.log(data);
 
      var descriptionView = new DescriptionView();
      var dropDown = document.querySelector("#dropdown-content");
        while (dropDown.firstChild){ dropDown.removeChild(dropDown.firstChild); };
      for (var element of data){  
        var anchor = document.createElement('a')
        anchor.innerText = element.name;
        anchor.href = "#"
        anchor.addEventListener('click', function(e){
          e.preventDefault();
          for (var object of data){
            if (object.name === this.innerText){
              descriptionView.render(object);
            }
          }
          
        })
        var section = dropDown.appendChild(anchor)
      }


      // Close the dropdown menu if the user clicks outside of it
      // window.onclick = function(event) {
      //   if (!event.target.matches('.dropbtn')) {

      //     // var dropdowns = document.getElementsByClassName("dropdown-content");
      //     var i;
      //     for (i = 0; i < dropdowns.length; i++) {
      //       var openDropdown = dropdowns[i];
      //       if (openDropdown.classList.contains('show')) {
      //         openDropdown.classList.remove('show');
      //       }
      //     }
      //   }
      // }
    }
  }

    // ******================================================================

   
 

module.exports = DropdownView;






/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map