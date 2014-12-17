# Description
#   A Hubot script that responds a reversed message
#
# Configuration:
#   HUBOT_REVERSE_P
#
# Commands:
#   None
#
# Author:
#   bouzuya <m@bouzuya.net>
#
config =
  p: parseFloat(process.env.HUBOT_REVERSE_P ? '0.01')

module.exports = (robot) ->
  robot.hear /(.+)$/i, (res) ->
    return unless Math.random() < config.p
    message = res.match[1]
    res.send message.split('').reverse().join('')
