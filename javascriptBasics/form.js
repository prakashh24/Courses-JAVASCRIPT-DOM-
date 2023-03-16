// let formel = document.forms.Feedback_form;
// console.log(formel);

// accessing form input by its name======
// let nameEl = formel.element.fullName; //(or)

// let nameEl = formel.fullName;
// let radioEl = formel.radioForm;
// let emailEl = formel.Email;
// let textAreaEl = formel.textarea;
// let chkboxEl = formel.checkbox;

// console.log(nameEl,radioEl,emailEl,textAreaEl,chkboxEl);

//other way to access the form elements

// ........................................Object Destructuring...................................
// const {fullName,radioForm,Email,textarea,checkbox}=formel.elements;

// console.log(fullName,radioForm,Email,textarea,checkbox);

//====================== formData Event.................
// formel.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     console.log([...new FormData(formel)]);    
// })


// // =====================================#42 - Javascript Form Submit and FormData Event =============
// let handleForm = (event) => {
//     event.preventDefault();

//     //Backend API.....
//     // console.log([...new FormData(formel)]); 
//     const formDATA = new FormData(formel);
//     console.log([...formDATA]);
//     console.log("Api Key: ", formDATA.get("api-key"))
// }
// let handleFormData = (event) => {
//     const formdata = event.formData;
//     console.log("FormDataEvent");
//     formdata.append("api-key", "dssfdfsafafdgfd");       // modify the form values using name and keys
//     console.log([...formdata.entries()]);
//     console.log([...formdata.values()]);
//     console.log([...formdata.keys()]);
//     console.log(formdata.get("Email"));
//     // console.log(formdata.delete("textarea"));
//     console.log(formdata.has("Age"));
//     console.log(formdata.getAll("Email")); // it works in case of check box
//     console.log(formdata);
// }
// formel.addEventListener('submit', handleForm); //formData
// formel.addEventListener('formdata', handleFormData); //formData event


// // ====================================#43 - Transforming HTML FormData to Server===================

// let handleForm = (event) => {
//     event.preventDefault();

//     //Backend API.....
//     // console.log([...new FormData(formel)]); 
//     const formDATA = new FormData(formel);
//     console.log(formDATA);
//     let Data = [...formDATA.entries()];
//     // console.log(Data);

//     // encodeURIComponent
//     let dataString = Data.map(([key, value]) => {
//         return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//     }).join("&")
//     console.log(dataString);

//     // url search params.....
//     let dataString2 = new URLSearchParams(formDATA).toString();
//     console.log('urlSearchParams',dataString2);


//     // 2.JSON METHOD....
//     // let JsonData = Object.fromEntries(formDATA);
//     let JsonData = JSON.stringify(Object.fromEntries(formDATA));   //it convert the normal object into JSON Object...
//     console.log('Backend body:',JsonData);
// }
// formel.addEventListener('submit', handleForm);


// //=============================================//////========= #44 - Posting FormData via Fetch API==========/////==========

// let formel = document.forms.Feedback_form;
// const handleSubmit = (event) => {
//     event.preventDefault();
//     let formData = new FormData(formel);
//     // console.log([...formData.values()]);
//     // JSON METHOD>>>>
//     let JsonData = JSON.stringify(Object.fromEntries(formData));
//     // console.log(JsonData);

//     // // Send to backend....
//     // //========================================================  1.XMLHttpRequest.....

//     // let XHR = new XMLHttpRequest();

//     // XHR.open("GET", "https://reqres.in/api/users/2", true);
//     // XHR.onload = function () {
//     //     let obj = JSON.parse(XHR.responseText)   // responseText by default it is string explicitly we convert it into JSON obj
//     //     console.log(obj);
//     //     document.getElementById("response").innerText = obj.data.avatar;
//     // }
//     // XHR.send();

// // ==============================================================// 2. Fetch Method........

//     fetch("https://reqres.in/api/users?page=2",
//         {
//             method: "GET",
//             // headers:{
//             //     // 'content-type':'application/x=www=form-urlencoded'  // MIME
//             //     'content-type':'application/json'  // MIME
//             // },
//             // body: JsonData,
//         }).then((res) => res.json()).then((data) => {
//             console.log("API DATA:", data.data);
//             document.getElementById("response").innerText = JSON.stringify(data.data)
//         })
// }
// formel.addEventListener('submit', handleSubmit)



// //===============================////=======#45 - Javascript Forms: Handling Input Events===///=======================

// let formel = document.forms.Feedback_form;
// // console.log(formel);
// let inputEl = formel.elements.fullName;
// //1. attributes.....
// // console.log(inputEl.value);
// // inputEl.readonly = true;

// // // 2 .Events......

// inputEl.addEventListener('focus',()=>console.log("focus Event"))
// inputEl.addEventListener('blur',()=>console.log("blur Event",));
// inputEl.addEventListener('input',()=>console.log("input Event",));
// inputEl.addEventListener('change',()=>console.log("change Event",));

// // // other events ..
// inputEl.addEventListener('cut',()=>alert("cut Event"));
// inputEl.addEventListener('copy',()=>alert("copy Event"));
// inputEl.addEventListener('paste',()=>alert("paste Event"));

// const handleSubmit = (event) => {
//     event.preventDefault();
    
// }
// formel.addEventListener('submit', handleSubmit)




//=========================================#46 - Handling Radio Input Elements=====================

// let formel = document.forms.Feedback_form;
// let radioEl = formel.elements.radioForm;
// let radiodiv = document.getElementById('radiodiv')
// console.log(radioEl[1].value);

// let arrRadio = [...radioEl];
// console.log(arrRadio);

// // events..........
// // radiodiv.addEventListener('change',(e)=>{

// //     let filterdRadia = arrRadio.find((fin)=>{
// //         return fin.checked
// //     })
// //     console.log('Find:',filterdRadia.value);  // method 1
// //     // console.log("Radio Changed");
// //     console.log("Event Target:",e.target.value);   // simple method2...... to get radio button checked value ....
// // });

// // task:
// radiodiv.addEventListener('change',((e)=>{
//     // const checked = arrRadio.find((fn)=> fn.checked);
//     const checked = e.target;
//     if (checked.value === "FullStack") {
//         setTimeout(()=>{
//             alert("you have selected the FullStack");
//         },1000)
        
//     }
// }))

//  // //========================#47 - Handling Checkbox Input Elements====================

// let formel = document.forms.Feedback_form;
// let termschk = formel.elements.terms;
// console.log(termschk);

// // termschk.checked = true;
// // termschk.indeterminate = true // both true and false // netural............

// // // events........
// // termschk.addEventListener('change',(e)=>{
// //     // console.log(e);
// //     console.log(e.target.checked);
// // })

// // // methods........
// // termschk.select();
// // termschk.checked=true;

// // task .......
// termschk.addEventListener('change',(e)=>{
//     // console.log(e);
//     alert('checkbox changed')
//     console.log(e.target.checked);
// })

// //======================#48 - Handling HTML Select Tag Elements===================

let formel = document.forms.Feedback_form;
let selectEl = formel.elements.selectTag;
console.log(selectEl);

// add elements..............

const newSlct = document.createElement("option");
newSlct.value = 5;
newSlct.text="five";

let constu_selct = new Option("six","6")

selectEl.add(newSlct);
selectEl.add(constu_selct);
