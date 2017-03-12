// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsDataArray = [
  {
    friendName: "Chikoooooo",
    phoneNumber: "000-000-0000",
    friendPicture: "https://s-media-cache-ak0.pinimg.com/736x/18/a2/4a/18a24a79e8b643580595a0b84fbac547.jpg",
    friendEmail: "chikoo@example.com",
    friendID: "chikoo99",
    surveyScores : [1,3,4,3,5,1,3,2,2,5]
  }

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsDataArray;
