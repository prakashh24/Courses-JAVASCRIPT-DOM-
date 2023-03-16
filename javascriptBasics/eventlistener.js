let creditspan = document.querySelector("header span");
// console.log(creditspan);

// creditspan.setAttribute("onclick", "alert('hai-set-att')");

// creditspan.onclick = function (){
//     alert('hai- 1');
// }

// // we cannot access multiple values is the draw back....
// creditspan.onclick = function (){
//     alert('hai- 2');
// }

// function creditspanfn(){
//         alert('hai- 1');
//     }
//     creditspan.onclick = creditspanfn;


// ===============================================================addEventListener.........


// creditspan.addEventListener("click",((val) =>{
//     alert("Clicked1")
// }))


// let clickfn = function(){
//     alert("Clicked2");
// }
// creditspan.addEventListener("click",clickfn);
// creditspan.addEventListener("click",((val) =>{
//     alert("Clicked11");
//     alert("Clicked22");
// }))


// creditspan.addEventListener("click",((event) =>{
//     // alert("Clicked1")
//     console.log(event);
// }))

// creditspan.addEventListener("click",((event) =>{
//     // alert("Clicked1")
//     console.log(this);  // in call back fn this refers to the window object..............
//     console.log(event);
// }))

// let clickfn = function(event){
//     console.log(event);
//     console.log(event.target);
//     console.log(this); // here this refers to the current element 
// }
//  creditspan.addEventListener("click",clickfn);

// ===============================================================removeEventListener.........



// let clickfn = function(){
//     console.log("event triggered");
//     creditspan.removeEventListener("click",clickfn);
// }
// creditspan.addEventListener("click",clickfn);


// // // =================================event Bubbling and capturing==============

let formele = document.querySelector("form");
// console.log(formele);
let formdiv = document.querySelector("form div");
let formpele = document.querySelector("form p")

// formele.addEventListener('click',((event)=>{
//     alert("form")
//     // console.log(event);
//     // console.log(event.target.tagName);
//     // console.log(formele.tagName);
//     // console.log(this);
//     console.log(`target: ${event.target.tagName} , this tagName ${formele.tagName}`);

// })
// )
// formdiv.addEventListener('click',((e)=>{
//     alert("div")
//     // stop bubbling .... with stpo propagation method.....
//     // e.stopPropagation();    // wont go higher but executes the same element event and stops bubbling
// })
// )
// formdiv.addEventListener('click',((e)=>{
//     alert("div1")
//     // stop bubbling .... with stpo propagation method.....
//     // e.stopImmediatePropagation();   //wont go higher but executes and bubbling imediately.............
// })
// )
// formdiv.addEventListener('click',((e)=>{
//     alert("div2")
// })
// )
// formpele.addEventListener('click',(()=>{
//     alert("p")
// })
// )

//==============================================task : catch all capturing phase and bubbling phase......

// for(let elem of document.querySelectorAll("form, form *")){
//     console.log(elem);
//     // capturing phase     //form > div > p ||  // by default capturing will wont be excuted we need exciplitly give true(or){capture: true} in has third parameter in the addEventListener method
//     elem.addEventListener('click', ((event)=>{
//         alert(`capturing phase: ${elem.tagName}`); 
//         console.log(`capturing phase: ${elem.tagName}`);
//     }),true)

//     // bubbling  phase     p > div > form
//     elem.addEventListener('click', ((event)=>{
//         alert(`bubbling phase: ${elem.tagName}`);
//         console.log(`bubbling phase: ${elem.tagName}`);
//     }))
// }

// // // // ===============Prevent Default ()=======================
// let formEle = document.querySelector("form");
// let formEleinput = document.querySelector("form input");
// let formEleChk = document.querySelector("form input[type='checkbox']");
// // console.log(formEleinput);

// formEle.addEventListener('submit', (()=>{
//     console.log("form submitted")
// }))




// // // Event Deligation............................

// let numliele = document.querySelectorAll("form li");
// console.log(numliele);

// numliele.forEach((li)=>{
//     li.addEventListener('click',()=>{
//         console.log(li.textContent)
//     })
// })

// let tableEl = document.querySelector('table');

// let selectedtr; // for remove active class

// tableEl.addEventListener('click', (event) => {
//     let Target = event.target;
//     let closestTR = Target.closest("tr");  // to get closest tr element or we can also use parentNode
//     if (Target.tagName == "TH") return;  // ignoring th ....


//     if(selectedtr != undefined){
//         selectedtr.classList.remove("active"); //remove active class
//     }

//     selectedtr= closestTR;
//     closestTR.classList.add("active");
//     console.log(closestTR.children[0].innerText);

//     console.log(closestTR);
//     // alert(closestTR.children[0].innerText)
//     // alert(`target: ${Target.textContent}`)
// })


// // ===================================================task event delegation.....
// document.addEventListener('click', (event) => {
//     let id = event.target.dataset.toogleid
//     console.log(id);

//     if (!id) return;
//     let elem = document.getElementById(id)
//     console.log(elem);
//     elem.hidden = !elem.hidden;
// });

// let formelem = document.querySelector("#Donate_form");

// formele.addEventListener('submit',(event) => {
//     event.preventDefault();
//     let donateinput = document.querySelector("#intNUM");
//     // console.log(donateinput.value);
//     alert(`donate amount ₹${donateinput.value}`)
// })


// // ===================JavaScript Mouse events==========================
// document.addEventListener("mousedown", (event)=>{
//     console.log('mouseDown',event);
// });
// document.addEventListener("mouseup", (event)=>{
//     console.log('mouseUp',event);
// })


let mainDIV = document.querySelector("main div");
// console.log(mainDIV)

// mainDIV.addEventListener("mouseenter", (event)=>{
//     console.log('mouseenter',event);
// })

mainDIV.addEventListener("mousemove", (event)=>{
    console.log('mouseenter',event);
})
