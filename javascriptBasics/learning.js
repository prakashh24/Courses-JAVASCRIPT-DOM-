

// // -----------------------------------(20)--------------------------------------
// let inputTxt = document.getElementById("inptext");
// let inpubtn = document.getElementById("inpubtn");
// let NewList  = document.getElementById("NewList");
// console.log(inputTxt);
// console.log(inpubtn);
// console.log(NewList);


// // create li 

// // inpubtn.addEventListener('click', () => {
// //     let li = document.createElement("li")
// //     console.log(li);
// //     li.className="listnew"
// //     let inptextnode = document.createTextNode(inputTxt.value);
// //     li.append(inptextnode)
// //     console.log(li);
// //     NewList.append(li)
// // })

// inpubtn.addEventListener('click', ()=>{
//     let AddedLi =document.createElement("li");
//     AddedLi.className="listnew "
//     let AddListItemDIV = document.createElement("div");
//     let AddRemovediv = document.createElement("div");
//     let inptextnode = document.createTextNode(inputTxt.value);
//     AddListItemDIV.append(inptextnode)
//     AddedLi.append(AddListItemDIV,AddRemovediv);
//     console.log(AddedLi);
//     AddRemovediv.setAttribute('onclick',"removeList(event)")
//     AddRemovediv.innerHTML = `X`;
//     NewList.append(AddedLi);



// })


// // InsertDOM as String"".......(21).................

// let NewList = document.getElementById("NewList");


// NewList.insertAdjacentHTML("afterbegin","<li>List-items</li>");
// NewList.insertAdjacentHTML("afterend","List-items");


// //before
// NewList.insertAdjacentHTML("beforebegin","<li>List-items</li>");
// NewList.insertAdjacentHTML("beforeend","<h3>List-items</h3>");

// //insertAdjacentText
// NewList.insertAdjacentText("afterbegin","<li>List-items</li>");   //element donot works.................
//  const li = document.createElement("li");
//  li.textContent ="Added List"
//  li.className = "listnew"
// //  NewList.insertAdjacentElement('beforebegin',li)
//  NewList.insertAdjacentElement('afterbegin',li)
// //  NewList.insertAdjacentElement('aftereend',li)
// // NewList.insertAdjacentElement('beforeend',li)

//-----------------------Replacing DOM elements using JavaScript   ..........(22).......


// // addEventListener('click', () => {

// //     let NewList = document.getElementById("NewList");
// //     let repalceLi = document.querySelector("#NewList :first-child");
// //     console.log(repalceLi);
// //     const li = document.createElement("li");
// //     li.textContent = "Added List";
// //     li.className = "listnew";
// //     repalceLi.replaceWith(li);

// // })
// function replace(){
//         let NewList = document.getElementById("NewList");
//     let repalceLi = document.querySelector("#NewList :first-child");
//     console.log(repalceLi);
//     const li = document.createElement("li");
//     li.textContent = "Added List";
//     li.className = "listnew";
//     // repalceLi.replaceWith(li);
//     // repalceLi.parentNode.replaceChild(li,repalceLi) // old method to replace .............
//     let text1 = document.createElement("li");
//     text1.textContent="Child1"
//     text1.className ="listnew"
//     let text2 = document.createElement("li");
//     text2.textContent="Child2"
//     text2.className ="listnew"
//     NewList.replaceChildren(text1,text2)

// }


// // How to do cloning DOM elements........................(23) --(24).----------------]
// function replace(){
// let NewList = document.getElementById("NewList");

// console.log(NewList.children);

// // cloneNode(false)====== return only the base element or the current element, ad by default, it is in cloneNode(false) is false
// CloneListdefault = NewList.cloneNode();
// CloneListTrue = NewList.cloneNode(true);
// console.log(CloneListdefault);
// console.log(CloneListTrue);
// let cloneEl = document.getElementById("cloneData"); 
// cloneEl.innerHTML=''  // set the clone div empty for the next loop irration
// cloneEl.append(CloneListTrue); 
// }   
// function removeList(val){
//     existingLi =val.target.parentNode
//     // console.log(existingLi);                      // remove method
//     //remove
//     // existingLi.remove();
//     existingLi.parentNode.removeChild(existingLi); // old method......

// }
//     //to exceute this uncommand the (20) at the top............................................ 

// ==============Loop over the DOM elements...........(25).........

// let courses = [
//     "HTML","CSS","JAVASCRIPT","ANGULAR","REACT"
// ];                                                            // simple example for (for..of loop)===========
// for(const course of courses){
//     console.log("Topics: "+course);
// }   
//   ===============looping over the elements....................
// let arrayli = document.querySelectorAll(".NewList li div");
// console.log(arrayli);
// let newArr =[];

// for(let arr of arrayli){
//     // console.log(arr.innerText);

//     newArr.push(arr.innerText);
// }
// console.log(newArr);

// //forEach..............

// let liarray = [...arrayli].forEach((val) => {
//     console.log(val.innerText);
// });

// console.log(liarray);  // forEach dont return the values...........

// // map method...........
// let liarray1 = [...arrayli].map((val) => {
//     return (val.innerText);
// });

// console.log(liarray1);  // map return the values...........

// //looping using ........ array from 
// const arrayfromLoop = Array.from(arrayli).map((val)  =>{
//     console.log(val.innerText);
// })

// // // //===========Find Child DOM  Elements........(26)...............
// // let newEl = document.querySelector(".NewList");
// // console.log(newEl);


// // //find child using querySelectorALL:NodeList;
// // let getLI = document.querySelectorAll("li");
// // console.log(getLI, getLI.length);

// // // find child element using Childern:HTMLCollections;
// // console.log(newEl.children, newEl.children.length);

// // //childNodes..........
// // console.log(newEl.childNodes);  // ChildNodes show the space btw the elements as the text node so we mostly use the children which returns the html collections

// let newEl1 = document.querySelector(".NewList");
// //firstchild // firstElementchild...........
// console.log(newEl1.firstChild);
// console.log(newEl1.firstElementChild);
// console.log(newEl1.firstElementChild.innerText);

// //lastchild // lastElementchild...........
// console.log(newEl1.lastChild);
// console.log(newEl1.lastElementChild);
// console.log(newEl1.lastElementChild.innerText);


// // // //===========Find parent DOM  Elements........(27)...............

// let ele = document.querySelector(".NewList li div");
// console.log(ele);
// console.log(ele.parentNode);
// console.log(ele.parentElement.parentElement);
// console.log(ele.parentElement.parentElement.parentElement);

// console.log(document.body.parentNode);  //..<html>
// console.log(document.body.parentElement);  //..<html>

// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);  // it returns because type of the document is 9 which document_node and it is not an elements
// console.log(document.nodeType);
// closest()..to get nearest element .....
// console.log(ele.closest("main"));

// let numbers = document.querySelector("ul:last-child li");
// // next Sibilings....
// console.log(numbers.nextSibling.innerText);
// console.log(numbers.nextElementSibling.innerText);
// // previous Sibilings....
// console.log(numbers.previousSibling);
// console.log(numbers.previousElementSibling.innerText);


// // =============html attributes and elements properties=========================

let inputtext = document.querySelector(".inputdiv input");
// console.log(inputtext);

// console.log(inputtext.value);
// console.log(inputtext.name);

// // modifying the values.......
// //  inputtext.value="changed Text";


// //  //  // getting and setting the html attributes.......(30)......

//  // setting attribute ....
// // Element.setAttribute("value", "setAttribute");  // Syntax for set attribute
//  inputtext.setAttribute("value", "setAttribute");

//  //getting attribute..........
// //  Element.getAttribute("default attributes or custom attributes") //syntax...
// let newAttribute = inputtext.getAttribute("place")
// console.log(newAttribute);

// other ways to get attributes
// console.log(inputtext.attributes[3].value); // accessing the attributes using the index value.....
// console.log(inputtext.attributes.name.value) // accessing the attributes using the property name  value.....
// console.log(inputtext.attributes['place'].value)  // accessing the attributes using the bracket notation....


// //html attributes ..... hasAttribute method.........
// console.log(inputtext.hasAttribute('name'));
// console.log(inputtext.hasAttribute('age'));

// // removing the attributes.......
// console.log(inputtext.removeAttribute('place'));


// using dataset object by adding prefix in the custom attribute
// console.log(inputtext.dataset.place);
// console.log(inputtext.dataset['user']);

// //task to show all the atributes of input.........
// for(let arr of inputtext.attributes){
//     console.log(`${arr.name}:${arr.value}`);
// }

// how to set and get style in html attributes...(31)......
// console.log(inputtext.style);

// how to set and get className and classList in html attributes...(31)......

// className.....
// get .........
// console.log(inputtext.className);
// console.log(inputtext.classList);
 
// // set .....
// inputtext.className="newClass"
// console.log(inputtext.className);
// inputtext.setAttribute("class", "Attr-class")
// console.log(inputtext.className);
// inputtext.className += " newClass1 newClass2 newClass3";
// // console.log(inputtext.className);

// // classList
// for(let arra of inputtext.classList){
//     console.log(arra);
// }
// console.log(inputtext.classList.length);
// console.log(inputtext.classList.add("addClass"));
// setTimeout(() => {
// console.log(inputtext.classList.toggle("addClassToggle"));
    
// }, 5000);
// console.log(inputtext.className);

//==================================(32)---------------------
function showdiv(){
    
}


