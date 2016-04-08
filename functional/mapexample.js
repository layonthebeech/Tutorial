/*function doubleAll(numbers) {
  var result = []
    for (var i = 0; i < numbers.length; i++) {
      result.push(numbers[i] * 2)
    }
  return result
}

module.exports = doubleAll
*/


function doubleAll(numbers) {
  return numbers.map(function(item) {//numbers is an array and you're going to map a function that takes in item which is the individual number
    return  item * 2;               //then you will multiply in the individual number by 2 and return it 
  });
}

module.exports = doubleAll;



