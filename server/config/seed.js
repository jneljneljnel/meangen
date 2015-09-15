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
    upvotes : '2'
  }, {
    name : 'Fountain',
    url : 'assets/images/chicago1.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
  }, {
    name : 'View from my Apt',
    url : 'assets/images/chicago2.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
  }, {
    name : 'Movie Theatre',
    url : 'assets/images/chicago3.jpg',
    credit : 'DAve Nelson',
    upvotes : '0'
  },  {
    name : 'Another movie Theatre',
    url : 'assets/images/chicago5.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '3'
  }, {
    name : 'Michigan Ocean',
    url : 'assets/images/chicago6.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
  },  {
    name : 'Billis Tower',
    url : 'assets/images/chicago8.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
  }, {
    name : 'Chicago at Night',
    url : 'assets/images/chicago9.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
  }, {
    name : 'Trump Tower',
    url : 'assets/images/chicago10.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
  }, {
    name : 'View from my apt',
    url : 'assets/images/chicago11.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
  }, {
    name : 'Deployment Ready',
    url : 'assets/images/chicago1.jpg',
    credit : 'Jeremy Nelson',
    upvotes : '0'
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

