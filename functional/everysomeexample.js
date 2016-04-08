//var goodUsers = [
//{ id: 1 },
//{ id: 2 },
//{ id: 3 }
//]
//
//// `checkUsersValid` is the function you'll define
//var testAllValid = checkUsersValid(goodUsers)
//
//  testAllValid([
//      { id: 2 },
//      { id: 1 }
//      ])
//  // => true
//
//  testAllValid([
//      { id: 2 },
//      { id: 4 },
//      { id: 1 }
//      ])
//  // => false
//
//## Arguments
//
//  * goodUsers: a list of valid users
//
//  Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.
//
//## Conditions
//
//  * Do not use any for/while loops or Array#forEach.
//  * Do not create any unnecessary functions e.g. helpers.
//
//## Resources
//
//  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
//  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some
//
//## Boilerplate

  function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      return submittedUsers.every(function(submittedUser) {//submitted user is the singular of submitted users. We are checking every submitted user. 
          return goodUsers.some(function(goodUser) {//We are checking if the submitted user makes at least one of the goodUsers which is why we use somei
            return goodUser.id === submittedUser.id;//Due to the scope of the functions we can pass in submittedUser 
          });
      });
    };
  }

module.exports = checkUsersValid;

