const DOMNodeCollection = require('./dom_node_collection.js');

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
