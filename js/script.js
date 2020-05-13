var friends = ["John", "Will", "Mike","James","Natasha","Jordan","Steve","Johnson","Jonathan","Tony","Robert","James"];

for (var i = 0; i < friends.length; i++) {
  if(friends[i][0]=="J")
  	console.log("Goodbye " + friends[i]);
  else
  	console.log("Hello " + friends[i]);
}
