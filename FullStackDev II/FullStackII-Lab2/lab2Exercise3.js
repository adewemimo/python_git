//function to create a random number and have a counting to the random number
const greaterThanSize = function(){
  const size = Math.ceil(Math.random()*100);
  var counter = 0;
  while (counter < size){
    counter++;
    console.log("The current size is "+ size + " and count is " + counter)
  
  }
}
  
greaterThanSize();