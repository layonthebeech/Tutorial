function getShortMessages(messages) {
  return messages.filter(function(item) { 
    return item.message.length < 50;
  }).map(function(map) {
      return map.message;
  });
}

module.exports = getShortMessages;

