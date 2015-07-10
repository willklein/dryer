var CLIEngine = require("eslint").CLIEngine;
var rulesConfig = require('./rules-config');

module.exports = function(path) {
  var cli = new CLIEngine({
    useEslintrc: false,
    rules: rulesConfig
  });

  return cli.executeOnFiles(path);
};
