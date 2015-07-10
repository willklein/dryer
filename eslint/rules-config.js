var rules = require('./rules');

var rulesRegistry = {};
var rulesConfig = {};

rules.list.forEach(function(rule) {
  rulesRegistry[rule] = {
    count: 0,
    failures: []
  };

  rulesConfig[rule] = 2;
});

module.exports = rulesConfig;
