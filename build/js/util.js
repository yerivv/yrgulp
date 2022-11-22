"use strict";

var _require = require('./util'),
    rand = _require.rand;

module.exports = {
  rand: rand
};
"use strict";

//modal
var count = 0;
count = 10;
console.log(count);
var modalFull = {
  show: function show(obj) {
    var modal = document.getElementsByClassName('modal');

    if (modal.children('id') == obj) {
      modal.classList.add('show');
    }
  }
};