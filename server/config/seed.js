/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Comment= require('../api/comment/comment.model');



Thing.find({}).remove(function() {
  Thing.create({
    name : 'Clark Street',
    url : 'assets/images/chicago.jpg',
    credit : 'Jeremy Nelson',
    comment : ['Wow what a great pic', 'awesome!'],
  }, {
    name : 'Fountain',
     url : 'assets/images/chicago1.jpg',
    credit : 'Jeremy Nelson'
  }, {
    name : 'View from my Apt',
     url : 'assets/images/chicago2.jpg',
    credit : 'Jeremy Nelson'
  }, {
    name : 'Movie Theatre',
     url : 'assets/images/chicago3.jpg',
     credit : 'DAve Nelson'
  }, {
    name : 'Macy\'s',
     url : 'assets/images/chicago4.jpg',
      credit : 'Jeremy Nelson'
  }, {
    name : 'Another movie Theatre',
     url : 'assets/images/chicago5.jpg',
    credit : 'Jeremy Nelson'
  }, {
    name : 'Michigan Ocean',
     url : 'assets/images/chicago6.jpg',
    credit : 'Jeremy Nelson'
  },  {
    name : 'Billis Tower',
     url : 'assets/images/chicago8.jpg',
      credit : 'Jeremy Nelson'
  }, {
    name : 'Chicago at Night',
     url : 'assets/images/chicago9.jpg',
      credit : 'Jeremy Nelson'
  }, {
    name : 'Trump Tower',
     url : 'assets/images/chicago10.jpg',
      credit : 'Jeremy Nelson'
  }, {
    name : 'View from my apt',
      url : 'assets/images/chicago11.jpg',
       credit : 'Jeremy Nelson'
  }, {
    name : 'Deployment Ready',
      url : 'assets/images/chicago1.jpg',
       credit : 'Jeremy Nelson'
  });
});

Comment.find({}).remove(function() {
  Comment.create({
    thingid : '55edf2cf46c901641cb1d889',
    text : 'Cool pic'
  }, {
    thingid : '55edf2cf46c901641cb1d890  ',
    text: 'wait I think this is wrong',
  });
});

