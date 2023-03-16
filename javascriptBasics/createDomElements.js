
let NewList = document.getElementById("NewList");
let li = document.createElement("li")
console.log(li);
li.textContent="New List"
li.className="listnew";
// li.append()
// NewList.append(li);   //createDomELement using append
// NewList.prepend(li); //createDomELement using prepemd
// NewList.before(li);   //createDomELement using before
// NewList.after(li); //createDomELement using after

// olderMethod

NewList.parentNode.insertBefore(li,NewList); //Before
NewList.parentNode.insertBefore(li,NewList.nextSibling); ///after
