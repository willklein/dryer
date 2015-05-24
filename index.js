#!/usr/bin/env node

var fs = require('fs');
var eslintDryer = require('./eslint');

var args = process.argv.slice(2);
var path = [args[0]];
var threshold = args[1];

eslintDryer(path, threshold);
