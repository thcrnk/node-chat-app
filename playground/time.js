const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var createdAt = 123142
var date = moment(createdAt);

console.log(date.format('MMM Do YYYY'));
console.log(date.format('h:mm a'));
