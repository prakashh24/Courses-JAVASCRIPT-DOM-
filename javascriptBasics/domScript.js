//How to select DOM elements.......

// console.log(document.body.children[1]) //old method.......
//type of DOM element selectors.....
// 1 .document.body.children[1]    //old method....
// 2. getelementbyId('')
// 3. getelementbyClassName('')
// . getelementbyTagName('')
// 5. Finding element by css selectors.('')
// 6.querySelector('') and querySelectorAll()
let newpara = document.getElementById("getEle_ID");   // it give only one element as return
// newpara.innerText="text changed by getElementByID"
let inputTxt = document.getElementById("inptext");
let inpubtn = document.getElementById("inpubtn");
let newInputDiv = document.getElementById("newInputDiv");


inpubtn.addEventListener('click', () => {
    newInputDiv.innerHTML += `<li class="listnew">${inputTxt.value}</li>`;
});
let getEletbyclass = document.getElementsByClassName("listnew");
console.log(getEletbyclass);
let listarr = [].map(getEletbyclass,(val) =>{
    val.tectContent;
})