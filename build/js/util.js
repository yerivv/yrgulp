// const {rand} = require('./util');
// module.exports = {rand};
"use strict";
"use strict";

var toobar = document.querySelector('toolbar');
document.addEventListener("scroll", function (event) {
  if (document.scrollTop > 0) {
    toobar.classList.add('scroll');
  } else {}
}); // document.addEventListener('scroll', function() {
//     if (beforePosition == 0) {
//         // if(beforePosition < afterPosition ){
//         //     console.log('아래로');
//         // } else {
//         //     console.log('위로');
//         // }
//         toobar.classList.remove('scroll');
//     } else {
//         toobar.classList.add('scroll');
//     }
//     beforePosition = afterPosition;
// });