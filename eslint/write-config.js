var fs = require('fs');

var outputFilename = '.eslintrc';

module.exports = function(outputConfig) {
  fs.writeFile(outputFilename, JSON.stringify(outputConfig, null, 2), function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("ESLint config saved to " + outputFilename);
    }
  });
};
