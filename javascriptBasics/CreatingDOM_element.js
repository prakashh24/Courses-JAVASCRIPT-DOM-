function createalert(message){
    // <!-- Alert -->
//   <div class="alert text-center text-danger">
//     <strong>✅alert message</strong>
//   </div> 

let main = document.getElementById("main")
// create div element........
let div1= document.createElement("div");

//append the text node with the element 
let textNode = document.createTextNode(message);

//assign class name
div1.className= "alert";

// div1.textContent= "✅alert message  text content";    // try to avoid using innertext to add text within the elements........

div1.append(textNode);
main.prepend(div1)
console.log(main);
}
createalert("✅alert message");
// createalert("✅New alert message");