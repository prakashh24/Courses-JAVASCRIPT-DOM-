// setInterval(() =>{
//     // console.log(location.href="http://google.com");
//     // console.log(location.assign("http://google.com"))
    
// },2000)
// console.dir(document.body.children[0].innerHTML="Click");
// // console.log(document.domain);
// var name = "asadda";
// let name = "adcdaad";

// // constructor function................
// function getValue(name1, id){
//     this.name= name1;
//     this.id= id;
//     console.log(`The name is ${this.name} and the id is ${this.id}`);

// }
// let valUser = new getValue("prakash", 24);
// // ======================DOM PROPERTIES AND METHODS..........===============================================

// let user = {
//     name:"Suriya",
//     id:23,
//     getValue(){
//         return `The name is ${this.name} and the id is ${this.id}`
//     }
// };

//display content dynamically..................

// let valUser =user.getValue();
// console.log(valUser);
// // print the document.........
// document.write(valUser);
// // document.body.h1.innerText=`<h1>${valUser}</h1>`;
// document.body.innerHTML=`<h1>${valUser}</h1>`;

// get input from the prompt.........
// let inputName = prompt("enter the user Name: ");
// let inputId = prompt("enter the user ID: ");

// user.name=inputName;
// user.id=inputId;
// let valUser =user.getValue();
// // document.body.innerHTML=`<h1>${valUser}</h1>`;
// document.body.innerHTML=user.getValue();


// //=========================DOM NODES================================
// // console.dir(document)
// // =====================NODE STRUCTURE===============
// console.log(document.body.constructor.name);  ///HTMLBodyElement....
// console.log(document.body instanceof HTMLBodyElement);      //       ^
// console.log(document.body instanceof HTMLElement);          //       |
// console.log(document.body instanceof Element);              //       |
// console.log(document.body instanceof Node);                 //       |  
// console.log(document.body instanceof EventTarget);          //       |

// ====================================DOMContentLoaded=====================
// <!-- <script>
//     document.addEventListener('DOMContentLoaded', () => {
//       let oldh1 = document.getElementById('js');
//       let butn = oldh1.children[0];
//       let heading = oldh1.children[1];    //DOMContentLoaded this wont render the css and changes after once loaded....
//       let image1 = oldh1.children[2];


//       heading.innerHTML = `<h2>JAVASCRIPT DOM!!!!!!!!</h2>`
//       console.log(`image details ${image1.offsetWidth}, ${image1.offsetHeight}`);
//     })  
//     window.onload =function (){
//       console.log("load");
//     }
//     window.addEventListener('load',()=>{   // load event load all the content like css,changes,etc,.... after once loaded.....
//       console.log("load2");
//     })


//   </script> -->
