


// function createlI() {
//     let inputTxt = document.getElementById("inptext");
//     let inpubtn = document.getElementById("inpubtn");
//     let newInputDiv = document.getElementById("newInputDiv");
//     console.log(inputTxt);
//     console.log(inpubtn);
//     console.log(newInputDiv);


//     // create li 

//     inpubtn.addEventListener('click', () => {
//         let li = document.createElement("li")
//         console.log(li);
//         li.className="listnew"
//         let inptextnode = document.createTextNode(inputTxt.value);
//         li.append(inptextnode)
//         console.log(li);
//         newInputDiv.append(li)
//     })

// }
// createlI();

let inputTxt = document.getElementById("inptext");
let inpubtn = document.getElementById("inpubtn");
let NewList = document.getElementById("NewList");
console.log(inputTxt);
console.log(inpubtn);
console.log(NewList);

// create li 

inpubtn.addEventListener('click', () => {
    let AddedLi = document.createElement("li");
    AddedLi.className = "listnew "
    let AddListItemDIV = document.createElement("div");
    let AddRemovediv = document.createElement("div");
    let inptextnode = document.createTextNode(inputTxt.value);
    AddListItemDIV.append(inptextnode)
    AddedLi.append(AddListItemDIV, AddRemovediv);
    console.log(AddedLi);
    AddRemovediv.setAttribute('onclick', "removeList(event)")
    AddRemovediv.innerHTML = `X`;
    NewList.append(AddedLi);
})

function replace() {
    let NewList = document.getElementById("NewList");
    console.log(NewList.children);
    // cloneNode(false)====== return only the base element or the current element, ad by default, it is in cloneNode() is false
    CloneListdefault = NewList.cloneNode();
    CloneListTrue = NewList.cloneNode(true);
    console.log(CloneListdefault);
    console.log(CloneListTrue);
    let cloneEl = document.getElementById("cloneData");
    cloneEl.innerHTML = ''  // set the clone div empty for the next loop irration
    cloneEl.append(CloneListTrue);
}
function removeList(val) {
    existingLi = val.target.parentNode
    // console.log(existingLi);                      // remove method
    //remove
    // existingLi.remove();
    // existingLi.parentNode.removeChild(existingLi); // old method......

}