var fs = require('fs');
var _ = require('lodash');
var CLIEngine = require("eslint").CLIEngine;

var generator = require('./generator');
var reporter = require('./reporter');
var rules = require('./rules');

module.exports = function(path, threshold) {
  var rulesRegistry = {};
  var rulesConfig = {};

  _.each(rules.list, function(rule) {
    rulesRegistry[rule] = {
      count: 0,
      failures: []
    };

    rulesConfig[rule] = 2;
  });

  var cli = new CLIEngine({
    useEslintrc: false,
    rules: rulesConfig
  });

  var args = process.argv.slice(2);
  var path = [args[0]];

  var eslintReport = cli.executeOnFiles(path);

  _.each(eslintReport.results, function(result) {
    var filePath = result.filePath;
    var messages = result.messages;

    _.each(messages, function(message) {
      var ruleId = message.ruleId;

      if (ruleId && rulesRegistry[ruleId]) {
        rulesRegistry[ruleId].count++;
        rulesRegistry[ruleId].failures.push(filePath);
      }
    });
  });

  reporter(rulesRegistry, threshold);

  var outputConfig = generator.generate(rulesRegistry, threshold);
  var outputFilename = '.eslintrc';

  fs.writeFile(outputFilename, JSON.stringify(outputConfig, null, 2), function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("ESLint config saved to " + outputFilename);
    }
  });
};
