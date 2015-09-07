'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  thingid: String,
  text: String
});

module.exports = mongoose.model('Comment', CommentSchema);