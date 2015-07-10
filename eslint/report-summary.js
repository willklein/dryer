var prettyjson = require('prettyjson');

var log = function(data) {
  console.log(prettyjson.render(data));
};

module.exports = function(rulesRegistry, threshold) {
  var totalEnabledRules = 0;
  var warningRules = [];
  var disabledRules = [];

  Object.keys(rulesRegistry).forEach(function(rule, ruleId) {
    var count = rule.count;

    if (count === 0) {
      totalEnabledRules++;
    } else if (count <= threshold) {
      warningRules.push({
        ruleId: ruleId,
        failures: rule.count
      });
    } else {
      disabledRules.push({
        ruleId: ruleId,
        failures: rule.count
      });
    }
  });

  log({
    'Rules enabled with warning': warningRules
  });

  log({
    'Rules disabled': disabledRules
  });

  log({
    'Total enabled': totalEnabledRules,
    'Total enabled with warning': warningRules.length,
    'Total disabled': disabledRules.length
  });
};
