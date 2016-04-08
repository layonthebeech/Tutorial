function getShortMessages(messages) { 
  return messages.filter(function(item) {
   return item.message.length < 50;
  }).map(function(item) {
    return item.message;
  });
}
module.exports = getShortMessages;

//My initial code returned the object with the key and the value and they only want the value
//their solution was to add map to it
// The map() method creates a new array with the results of calling a provided function on every element in this array.
