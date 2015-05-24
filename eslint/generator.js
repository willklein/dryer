var _ = require('lodash');

module.exports = {
  generate: function(registry, threshold) {
    var rules = _.reduce(registry, function(result, value, key) {
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
  }
};
