var rules = require('./rules');

module.exports = function(report) {
  var rulesRegistry = {};
  
  rules.list.forEach(function(rule) {
    rulesRegistry[rule] = {
      count: 0,
      failures: []
    };
  });

  report.results.forEach(function(result) {
    var filePath = result.filePath;
    var messages = result.messages;
  
    messages.forEach(function(message) {
      var ruleId = message.ruleId;
  
      if (ruleId && rulesRegistry[ruleId]) {
        rulesRegistry[ruleId].count++;
        rulesRegistry[ruleId].failures.push(filePath);
      }
    });
  });
  
  return rulesRegistry;
};
