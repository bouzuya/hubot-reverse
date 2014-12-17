// Description
//   A Hubot script that responds a reversed message
//
// Configuration:
//   HUBOT_REVERSE_P
//
// Commands:
//   None
//
// Author:
//   bouzuya <m@bouzuya.net>
//
var config, _ref;

config = {
  p: parseFloat((_ref = process.env.HUBOT_REVERSE_P) != null ? _ref : '0.01')
};

module.exports = function(robot) {
  return robot.hear(/(.+)$/i, function(res) {
    var message;
    if (!(Math.random() < config.p)) {
      return;
    }
    message = res.match[1];
    return res.send(message.split('').reverse().join(''));
  });
};
