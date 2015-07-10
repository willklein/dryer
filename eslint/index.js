var generateReport = require('./generate-report');
var buildRegistry = require('./build-registry');
var reportSummary = require('./report-summary');
var generateConfig = require('./generate-config');
var writeConfig = require('./write-config');

module.exports = function(path, threshold) {
  var report = generateReport(path);
  var rulesRegistry = buildRegistry(report);

  reportSummary(rulesRegistry, threshold);

  var outputConfig = generateConfig(rulesRegistry, threshold);

  writeConfig(outputConfig);
};
