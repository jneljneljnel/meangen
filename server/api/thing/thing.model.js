'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  url: String,
  credit: String,
  active: Boolean,
  comment: Array
});

module.exports = mongoose.model('Thing', ThingSchema);