//Creating a web appliaction using JS, CSS, HTML 
//with an increment function per click 

//Initializing count at 0 
let counting = document.getElementById("count")
let count = 0

//Increaseing total count +1 everytime it is clicked 
function increment() {
    count = count + 1
    //Updating the element in the HTML document 
    counting.innerText = count 
    //Log it
    console.log(count)
}