'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  url: String,
  credit: String,
  active: Boolean,
  upvotes: type: Number
});

module.exports = mongoose.model('Thing', ThingSchema);