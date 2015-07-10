var reduce = require('lodash').reduce;

module.exports = function(registry, threshold) {
  var rules = reduce(registry, function(result, value, key) {
    var level = 0;
    var count = value.count;

    if (count === 0) {
      level = 2;
    } else if (count <= threshold) {
      level = 1;
    }

    result[key] = level;

    return result;
  }, {});

  return {
    rules: rules
  };
};
