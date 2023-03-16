


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
let handleclick = () => {
    let AddedLi = document.createElement("li");
    AddedLi.className = "listnew "
    let AddListItemDIV = document.createElement("div");
    let AddRemovediv = document.createElement("div");
    AddedLi.append(AddListItemDIV, AddRemovediv);
    // let inptextnode = document.createTextNode(inputTxt.value);
    // AddListItemDIV.append(inptextnode)
    AddListItemDIV.textContent = inputTxt.value


    console.log(AddedLi);
    AddRemovediv.setAttribute('onclick', "removeList(event)")
    AddRemovediv.innerHTML = `X`;
    NewList.append(AddedLi);

    // set local storage......
    localStorage.setItem("course", JSON.stringify([...JSON.parse(localStorage.getItem("course") || "[]"), { course: inputTxt.value }]))

    inputTxt.value = ""
}

document.addEventListener("DOMContentLoaded", () => {
    let localData = [...JSON.parse(localStorage.getItem("course"))];
    localData.forEach((val) => {
        let AddedLi = document.createElement("li");
        AddedLi.className = "listnew "
        let AddListItemDIV = document.createElement("div");
        let AddRemovediv = document.createElement("div");
        let inptextnode = document.createTextNode(val.course);
        AddListItemDIV.append(inptextnode)
        AddedLi.append(AddListItemDIV, AddRemovediv);
        console.log(AddedLi);
        AddRemovediv.setAttribute('onclick', "removeList(event)")
        AddRemovediv.innerHTML = `X`;
        NewList.append(AddedLi);

    })
    console.log(localData);
})

// localStorage.setItem("courses",
//         JSON.stringify([...JSON.parse(localStorage.getItem("courses") || "[]"),
//         { course: inputTxt.value }]))


inpubtn.addEventListener('click', handleclick);

function removeList(val) {
    existingLidiv = val.target.parentNode.children[0]
    existingLi = val.target.parentNode;
    // console.log(existingLi);                      // remove method
    //remove
    existingLi.remove();

    // remove from local storage.......

    let localData = [...JSON.parse(localStorage.getItem("course"))];
    console.log(existingLi.innerText);
    localData.forEach((val) => {
        console.log(localData);
        if (val.course === existingLidiv.innerText) {
            // remove from local storage
            localData.splice(localData.indexOf(val), 1);
        }
    });
    localStorage.setItem("course", JSON.stringify(localData))

}

