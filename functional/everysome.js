function checkUsersValid(goodUsers) { 
  return function allUsersValid(submittedUsers) {
    submittedUsers.every(function(goodUsers) {
    return goodUsers.some(function(submittedUsers) {
      return goodUsers.id === submittedUsers.id;
    });
    });
  }
}

module.exports = checkUsersValid;

//every 
//
//
//
//some 
