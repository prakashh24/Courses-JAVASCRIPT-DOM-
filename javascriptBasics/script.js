// let a = [1,2,3,3,33,34,34,35,33];
// console.log(a.indexOf(34))

// //  for(let arr of a){
// //      console.log(arr")
// //  }
// let new_arr =(a.filter((el) =>{
//     return el
//     // console.log(el);
//     }))
// let new_arr1= new Set(new_arr);

// console.log(new_arr1);
// console.log([...new_arr1]);


// let students =[
//     { name:"Sam",id: 100},
//     { name:"Sam",id: 100},
//     { name:"Sam",id: 100},
//     { name:"Sendhil",id: 101},
//     { name:"Shiva",id: 102},
//     ];

//     let [...new_students] =students.filter((el) =>{
//         return (el.name == "Sam");
//            })
//   console.log(new_students);
//       let [...new_students1] = students.map((el) => {
//           return (el.name)
//           });
//       console.log(new_students1);
//============================================================switch case ===================================================
// let amount = 6000;

// switch(true){
//     case (amount > 60000):
//         console.log("buy iphone phone");  
//         break;
//     case (amount > 10000):
//         console.log("buy android phone");
//         break;
//         case (amount > 5000) && (amount <10000):
//         console.log("buy basic phone");    
//         break;

// }
//=====================================for ===========================================
// for(let i=0;i<=5;i++){
//     if (i % 2 !== 0){
//         console.log("value is odd " +i);
//     }else{
//         console.log("value is even " +i);
//     }
// }
//========while loop==========================================================
// let j=17;
// while(j >= 1){
//     if ((j% 2 ) !== 0){
//         console.log("value is odd " +j);
//     }else{
//                 console.log("value is even " +j);
//             }
//     j--;
// }
// 54321
// ==================================================entries method======================================

// object = > array
// ================
// let a = {
//     name:"suriya",
//     age : 24
// }
// let data = Object.entries(a);
// console.log(data);


// array==>object
// ================

// let b =[ [ 'name', 'suriya' ], [ 'age', 24 ] ]
// let data = Object.fromEntries(b);
// console.log(data);

// =================================================================

// add(5431 );
// function add(a){
//     console.log(a)
// }
// let students =
//     { name:"Sam",id: 100}
//     console.log(students.name)
//=================================================
// var number = 12354987,
//     output = [],
//     sNumber = number.toString();


// for(var i=0; i < sNumber.length;i++){
//     console.log(sNumber[i]);
//     output.push(sNumber[i]);
// }

// console.log(typeof(sNumber));
// console.log(output);
// ==============================split,reduce=======================================
// function add(num){
//     let str = String(num);
//     let spl = str.split("")
//     console.log(typeof str);
//     let addd1 = spl.map((el) =>{
//         return parseInt (el);

//     })
//     console.log(addd1)
//     let fin = addd1.reduce((a,b) =>{
//         return a+b

//     })
//     console.log(fin);
//     if (fin <= 10 ){
//         return fin 
//     }else{
//         return add(fin);
//     }
// }
// add(51);
//------------------------------------------------
// function add(num){
//     // let NumStr = String(num)
//     // console.log(typeof NumStr);
//     let newArr = String(num).split('').map(Number).reduce((a,b) =>{
//         return a+b
//     })
//     console.log(newArr);
//     if(newArr <= 10){
//         return newArr
//     }else{
//         add(newArr);
//     }
// }
// add(85)

// ======================================for---in--loop==============================================================
// let employee =
//     {
//         name:"Jagan",
//         FrameWork: "React"
//     }

//     for(let key in employee){
//         console.log(key+":",employee[key]);
//     }


// let array1 = ["red","green", "Blue"];
// let arr = [];
// for(let index in array1){
//     console.log(array1[index]);
//     arr.push(array1[index]);
// }
// console.log(arr)
//======================================for---of--loop=====================================

// let array1 = ["red","green", "Blue"];
// let arr = [];
// for(let value of array1){
//     console.log(value);
//     arr.push(value);
// }
// console.log(arr)
//===========================objects oop(encapsulation)=========================
// let person = {
//     name :"shiva",
//     age : 23,
//     interest : ["interested in javascrpit "],
//     address:{
//         city:"chennai",
//         state: "TamilNadu"
//     },
//     greeting:function(){
//         let msg = `My Name is ${this.name}, and age is ${this.age}`;
//         console.log(msg);

//     }
// }
// console.log(person.greeting());


//////////////////////{Normal function method}////////////////////////////////
//   let person = {
//         name :"shiva",
//         // age : 23,
//         // interest : ["interested in javascrpit "],
//         address:{
//             city:"chennai",
//             state: "TamilNadu"
//         },
//         greeting:function(){
//             let msg = `My Name is ${this.name}, and age is ${this.age}`;
//             console.log(msg);

//         }
//     }
//     console.log(person.greeting());

//////////////////////{factory function method}////////////////////////////////
// function createPerson(name,age,interest){
//     return {
//      name :name,
//      age : age,
//     interest :interest ,
//     // address:{
//     //     city:"chennai",
//     //     state: "TamilNadu"
//     // },
//     greeting:function(){
//         let msg = `My Name is ${this.name}, and age is ${this.age} and ${this.interest}`;
//         console.log(msg);
//     }};
// }
// let shiva = createPerson("ShivaRama",24,["interested in javascrpit "]);
// let SriRam = createPerson("SriRam",27,["interested in typescript "]);
// shiva.greeting();
// SriRam.greeting();


//////////////////////{constructor function method}////////////////////////////////
// function person(name, age, interest){
//     this.name = name,
//     this.age= age,
//     this.interest= interest,
//     this.greeting = function(){
//         let msg = `My Name is ${this.name}, and age is ${this.age} and ${this.interest}`;
//         console.log(msg);
//     }
// }
// shiva = new person("Shiva", 24, ["interested in javascrpit "]) // new key create an empty object and map all //this value reference 
// shiva.greeting();

//=================DYNAMIC NATURE OF OBJECTS==============================================

// const person ={
//     name:"prakash"
// }
// person.age =23;
// person.city = "chennai";
// delete person.age;
// console.log(person);

//========================================= //Constructor property in javascript............

// let name = " Stanley" // ==>new String("Stanley"); --string literals
// let age = 24 // ==> new Number(24) --- number literals,......boolean,,,,,,

//  console.log(name,age);

// let name = String("Stanley");
// let age = new Number (24); // if you want remove new keyword
//  console.log(name,age);

// =======================================FIND INDEX=====================
// let students =[
//     { name:"Sam",id: 100},
//     { name:"Sam",id: 140},
//     { name:"Sam",id: 400},
//     { name:"Sendhil",id: 101},
//     { name:"Shiva",id: 102},
//     ];
//    console.log(findIndex(indval));
//    indval(ca){
//     students.map((el) =>{
//         return el.name == "Shiva"
//     })
//    }

//===============================data types examples........

// primitive data types are:{
//     Number, String, Boolean, Symbol, undefined, null


// let cart = 4
// function updatecart(cart){
//     cart++;
//     console.log(cart);
// }
// updatecart(cart);
// console.log(cart);

// }



//  // reference datatypes are {
// //     objects, array, function
// // }


// let cartObj = {items:5};

// function updatecart(cart){
//     cart.items++;
//      // console.log(cart);
// }
// updatecart(cartObj);
// console.log(cartObj);

//===========enumeration properties of object==========================


// let users = {
//     name : "chirstopher",
//     getFullName(){
//         console.log(`My Name is ${this.name}`);
//     }
// }

// for( let key in users){
//     console.log(key,users[key]);
// }
// for( let key1 of Object.keys(users)){
//     console.log(key1,"," +users[key1]);
// }
// for( let key1 of Object.entries(users)){
//     console.log(key1);
// }
// if('name' in users){
//     console.log("!yes")
// }

//===================================cloning object in javascripts========================
// let users = {
//     name : "chirstopher",
//     getFullName(){
//         console.log(`My Name is ${this.name}`);
//     }
// }
// let newUser = Object.assign({
//     age:23,
//     framework:"Angular 13"
// },users);
// console.log("using object,assign method");
// console.log(newUser.getFullName() );

// let another ={};
// for(let key in users){
//     another[key] = users[key];
// }
// console.log("using forIn loop");
// console.log(another);

// let newUserspread = { ...users}
// console.log("cloning using spread operators");
// console.log(newUserspread);


//==================Math. methods===================
// console.log(Math.PI)
// console.log(Math.abs(-3));
// console.log(Math.ceil(0.2));
// console.log(Math.ceil(1.2));
// console.log(Math.random() * (10 - 1) + 1);
// console.log(Math.round(1.2));
// console.log(Math.round(1.5));
// console.log(Math.max(1,212,22,334,5,555,3)); //return maximum value
// console.log(Math.min(1,212,22,334,5,555,3)); //return minimum value
// let mark = [1,212,22,334,5,555,3]
// // let result = Math.max(...mark)
// let result = Math.min(...mark)
//  console.log(result);

//======================javascript STRING METHODS=============================

// let firstName ="Prakash       "
// let lastName = "E"

// let FullName = new String("Prakash E")
// console.log(firstName.length);
// console.log(firstName.charAt(6))
// console.log(firstName.concat(" ", lastName))
// console.log(firstName.includes("Prak"));
// console.log(firstName.includes("PRAK")); //CASE SENSITIVE
// console.log(firstName.startsWith("prak"));
// console.log(firstName.endsWith("sh"));
// console.log(firstName.indexOf("a"));
// // const str = 'The quick brown fox jumps over the lazy dog.';
// // for(let i=0; i <= str.length;i++){
// // console.log(str[i]);
// // }

// console.log(firstName.repeat(8))
// console.log(firstName.replace("prakash" , "PRAKASH"));
// let newText = "Hello: W orld"
// console.log(newText.split(":",2)) // split the string using first parameter
// console.log(newText.split(" ",3))
// console.log(newText.substr(1)) //return value from this index value
// console.log(firstName.toLowerCase()) //return value into lowercase
// console.log(firstName.toUpperCase()) //return value into upperCase
// console.log(firstName.trim().concat(" ", lastName)) //return value into trim space


//====================TEMPLATE LITERALS===========================
// let course ="JavaScript"
// let newstr ="Iam Practicesing Basics \n\""+course+"\" "
// let newStr2 =`Iam Practicesing Basics 
// "`+course+`"`
// let newStr3 =`Iam Practicesing Basics "${course}"`
// console.log(newstr);
// console.log(newStr2);
// console.log(newStr3);


//===============================DATE OBJECTS==========================
// let date = Date();
// console.log(date);
// let newDate = new Date();
// let anotherDate = new Date(1977,11,2) //year/mon/day
// anotherDate.setFullYear(2000);
// console.log(newDate.getDay()); //0(sun) -- 6(sat)
// console.log(newDate.getFullYear()); //(2023)
// console.log(anotherDate.getFullYear()); //(1977)

// let [month, date1, year] = new Date().toLocaleDateString("en-IN").split("/");
// console.log(month, date1, year);
// console.log(new Date().toLocaleDateString("en-IN").split("/"));


//========================================(A-----R-----R----A-----Y)==========================================================================================


//====================================add values in array===========================


// let color =["red", "yellow", "green"];
// // color[3] ="orange"
// //adding using push method..............,
// color.push("orange", "violet(push)");  //new value added at the end of array
// // adding using unshift method..............,
// color.unshift("purple(unshift)"); //new value added at the begining of array
// // adding using slice method..............,
// color.splice(3, 0, "brown(splice)")

// console.log(color);

// ==================Finding the value in the array=======================
// let color =["red", "yellow", "green", "orange","yellow", "violet"]; // [primitive datatypes]
// console.log(color.indexOf("yellow"));
// console.log(color.lastIndexOf("yellow"));
// console.log(color.indexOf("yellow") !== -1);
// console.log(color.includes("yellow"));
// console.log(color.includes("pink"));

//==========================FIND AND FIND INDEX METHOD IN REFERENCE DATA TYPE===========================
// let employee = [
//     {id: 1, name:"Suriya", framewok:"Angular 13", is_Active: true},
//     {id: 2, name:"Prakash", framewok:"Angular 13", is_Active: false},
//     {id: 3, name:"Shiva", framewok:"React", is_Active: true}
//     ]

//     // console.log(employee.includes({id: 1, name:"Suriya", framewok:"Angular 13", is_Active: true}))
//    let findemp = employee.find(function(em) {
//         return em.id === 2
//     })
//     console.log(findemp);
//     let findEmpIndex = employee.findIndex(function(em) {
//         return em.name === "Shiva"
//     })
//     console.log(findEmpIndex);



//==============================ARROW FUNCTION=================================================
//arrow function
// let employee = [
//     {id: 1, name:"Suriya", framewok:"Angular 13", is_Active: true},
//     {id: 2, name:"Prakash", framewok:"Angular 13", is_Active: false},
//     {id: 3, name:"Shiva", framewok:"React", is_Active: true}
//     ]

//     // console.log(employee.includes({id: 1, name:"Suriya", framewok:"Angular 13", is_Active: true}))
// //   let finEmp = employee.find(function(em) {
// //         return em.id === 2
// //     })
// //     console.log(finEmp);
// //     let findEmpIndex = employee.findIndex(function(em) {
// //         return em.id === 2
// //     })
// //     console.log(findEmpIndex);
//     let finEmp = employee.find((em) => em.id === 2);
//       console.log(finEmp );//"find method using arrow function"
//     let findEmpIndex = employee.findIndex((em) => em.name === "Suriya");
//     console.log(findEmpIndex);//"findIndex method using arrow function"


//=======================================(Removing) value from an array==================================

// const number = [1,2,3,4,5,6];
// const number2 = [1,2,3,4,5,6];
// const number3 = [1,2,3,4,5,6];

// //end
// //push x pop
// number.pop();
// console.log(number);

// //Start
// //unshift x shift
// number2.shift();
// console.log(number2);

// //middle 
// // splice == splice

// number3.splice(2,2) //start index, delete value count[1,2,*,*,5,6]
// console.log(number3);

//==========================="CONCAT()" IN ARRAY IN BOTH REFERNCE AND PRIMITIVE DATATYPES=======================
// let Angular_Developers =[{
//     name:"prakash"  
// }];

// let React_Developers = ["surya", "Naveen", "Shiva", "jagan", "Ehzil", "Paari"];
// Angular_Developers[0].name= "Prakash E"  //reference datatype change its value in its all accurance 
// //"Combine" two differnt array
// let UI_Developers = Angular_Developers.concat(React_Developers);
// console.log(UI_Developers);


// // "Extract" from an array
// let filteredArray = UI_Developers.slice(1,4);
// console.log(filteredArray);
// ================Spread operator==================================
//spread operator(...)
// let Angular_Developers =["prakash", "surya", "Naveen"];

// let React_Developers = ["Shiva", "jagan", "Ehzil", "Paari"];

// let UIdev =[...Angular_Developers, ...React_Developers];
// console.log(UIdev)

//====================IRRATING IN JS ARRAYS===========================
//An element inside an array can be any type, differnt elements of the same array of different datatypes
// const colors = ["red", "yellow", "green"];

// //using for of loop............
// for(let color of colors){
//     console.log(color)
// }

// //using for in loop......
// for(let color in colors){
//     console.log(color, colors[color])
// }

// // using forEach to irrate......
// colors.forEach((color, index) =>{
//     console.log(index, color)
// })


//============================spliting array and joining an array============================
// const colors = ["red", "yellow", "green"];

// let allColors = colors.join(",  "); // we can give separaters inside the brackets
// console.log(allColors);

// let FullName = "Prakash Elangovan";
// let splitedName = FullName.split(" ");
// let firstName = splitedName[0];
// let lastName = splitedName[1];
// console.log(splitedName);
// console.log(`my FirstName is ${firstName} and LastName is ${lastName}`)

// //example 2
// let postTitle = "THIS IS MY NEW POST!!!!!!"
// let splitPost = postTitle.toLowerCase().split(" ");
// console.log(splitPost);
// let postSlug = splitPost.join("_");
// console.log(postSlug);


//==================SORTING AN ARRAY AND ARRAY OF OBJECTS=====================
// let students_id =[2,4,5,7,1,3,7,9,];
// let students2 =[2,4,5,7,1,3,7,9,];
// // students_id.sort();//default sort arrange the values in ascending order
// students_id.sort((a,b) =>{
//     return b-a          //to sort in descending order
// })
// students2.reverse();  // to show the in reverse format
// console.log(students_id);
// console.log(students2);

// //===============using array of objects==================
// let studentInfo = [
//     {
//         id:1,
//         name:"SAM"
//     },
//     {
//         id:4,
//         name: "Sarath"
//     },
//     {
//         id:3,
//         name:"Jerry"
//     },
//     {
//         id:2,
//         name:"Joshua"
//     }
//     ];

//     studentInfo.sort((a, b) =>{
//         let Aname = a.name.toLowerCase();
//         let Bname = b.name.toLowerCase();
//         if(Aname < Bname) return -1;  //use a mala
//         if(Aname > Bname) return  1;
//         return 0;
//     });
//     console.log(studentInfo);

//===============================Every and some method.====================

// let personAge =[9,34,56,32,65,76,9];

// let isAllowed = personAge.every((value, index, array) =>{
//     console.log(value, index);
//     return value >18
// })
// console.log(isAllowed);
// let isAllowed2 = personAge.some((value, index, array) =>{
//     console.log(value, index);
//     return value >18
// })
// console.log(isAllowed2);

// //Example 2:

// let numbers = [1,3,4,5,6,7];
// let isEven = numbers.every((value) =>{
//     return value % 2 == 0
// });
// console.log(isEven);
// let IsOdd = numbers.some((value) =>{
//     return value % 2 == 0
// });
// console.log(IsOdd);
// //every method check the every is true or not and return the value(t/f)
// //whereas some method return true when one element in that is true it wont check further


//==================================using Every and some methods in reference datatype(array and Objects) ....testing
// let basket =[
//     { id: 1, name: "Mobile", isDelevirable: true},
//     { id: 2, name: "T.V", isDelevirable: false},
//     { id: 1, name: "A.C", isDelevirable: true}
//     ]

//     let newBasket = basket.every((value) =>{
//         return value.isDelevirable == true;
//     });
//     console.log(newBasket);
//     let newBasket2 = basket.some((value) =>{
//         return value.isDelevirable == true;
//     });
//     console.log(newBasket2);

//====================================Filter in array and objects==============================================
// simple primitive array...................
// let personAge= [24,5,12,22,45];
//  let adults = personAge.filter((value) =>{
//      return value > 18 //return only age above 18
//  })
//  console.log(adults) // filtered values

// //  ex:2
// let numbers =[1,2,3,4,5,6,7,8,9,10];

// let evenNumbers = numbers.filter((value) =>{
//     return value % 2 == 0
// });
// console.log("EvenNumber",evenNumbers);
// let oddNumbers = numbers.filter((value) =>{
//     return value % 2 == 1
// });
// console.log("OddNumber",oddNumbers);
// //====================================== Using filter method in array of objects=========================================
// let cart =[
//     {id: 1, items: "Samsung phone", cost: 15000},
//     {id: 1, items: "Apple phone", cost: 59999},
//     {id: 1, items: "Microsoft phone", cost: 20000},
//     ]

//     let filteredcart = cart.filter((value) =>{
//         return value.cost < 20000
//     });
//     console.log(filteredcart);

//====================================== Using  FIND  method in array of objects=================================

// let cart =[
//     {id: 1, items: "Samsung phone", cost: 15000},
//     {id: 1, items: "Apple phone", cost: 59999},
//     {id: 1, items: "Microsoft phone", cost: 10000},
//     ]

//     let filteredcart_Filter = cart.filter((value) =>{
//         return value.cost < 20000   // filter method returns the all the filtered objects of the which match the conditions
//     });                             // return----- [{all matched list}, {list},.............]
//      let filteredcart_Find = cart.find((value) =>{
//         return value.cost < 20000 //find method returns only the first accurance of the objects which match the conditions
//     });                           //return-----{only first value}
//     console.log(filteredcart_Filter)
//     console.log(filteredcart_Find);

//====================MAP method in array and array of objects=================================

// let counts = [1,2,3,4,5,6];
// let countMap = counts.map((val) =>{
//     return val * 5;
// });
// console.log(countMap);
// //example 2:
// let personInfo = [
//     {id: 1, firstName: "Kishore", lastName: "Kumar"},
//     {id: 2, firstName: "Stanley", lastName: "Joshua"},
//     {id: 3, firstName: "javis", lastName: "arachi"},
//     ];
//     let personMap = personInfo.map((val) =>{
//         let fullName =  [val.firstName,val.lastName].join(" "); //using map method to concat the objects properties...............
//         let NewPerson ={id: val.id, fullName:fullName} ;
//         return NewPerson
//     });
//     console.log(personInfo);
//     console.log(personMap);

// //=========================================USING ALL ARRAY METHODS=================================
// //....................................... without chaining methods.......................
// let products = [
//     { id: 1, title: "android Phone", cost: 7500 },
//     { id: 2, title: "Play Station", cost: 98000 },
//     { id: 3, title: "headphone", cost: 2500 },
// ];
// let sortbycost = products.sort((a, b) => {
//     return a.cost - b.cost //ascending
//     // return b.cost - a.cost //cending
// });
// let sortbytitle = sortbycost.sort((a, b) => {
//     if (a.title < b.title) return -1;
//     if (a.title > b.title) return 1;
// });
// let filtervalue = sortbytitle.filter((value) => {
//     return value.cost < 8000
// });
// let final = filtervalue.map((val) => {
//     return val.title + " - ₹" + val.cost
// })

// console.log(sortbycost);
// console.log(filtervalue);
// console.log(final)
// //............................................using chaining methods...................................
// let products1 = [
//     { id: 1, title: "android Phone", cost: 7500 },
//     { id: 2, title: "Play Station", cost: 98000 },
//     { id: 3, title: "headphone", cost: 2500 },
// ];
// let sortbycost1 = products1.sort((a, b) => {
//     return a.cost - b.cost //ascending
//     // return b.cost - a.cost //cending
// }).sort((a, b) => {
//     if (a.title < b.title) return -1;
//     if (a.title > b.title) return 1;
// }).filter((value) => {
//     return value.cost < 8000
// }).map((val) => {
//     let newtitle = val.title + " - ₹" + val.cost
//     let newProducts = { id: val.id, title: newtitle }
//     return newProducts
// })
// console.log("chaining array functions", sortbycost1);

// //=======================================REDUCE METHODS============================================
// let collections = [1,2,3,4,5,6];
// let total = collections.reduce((previousValue, currentValue) =>{
//     // console.log("previousvalue", previousValue)
//     // console.log("currentValue", currentValue)
//     return previousValue + currentValue;
// });
// console.log(total);

// //reduce in array of objects.....................
// let products = [
//     { id: 1, title: "android Phone", cost: 7500 },
//     { id: 2, title: "Play Station", cost: 98000 },
//     { id: 3, title: "headphone", cost: 2500 },
// ];
// totalCost = products.reduce((accumulator, currentVal) =>{
//     return accumulator + currentVal.cost;
// },1)
// console.log(totalCost)

// //---------------------------------alternative methods for call back functions-----------------------


// let collections = [1,2,3,4,5,6];
// let total = collections.reduce((previousValue, currentValue) =>{
//     // console.log("previousvalue", previousValue)
//     // console.log("currentValue", currentValue)
//     return previousValue + currentValue;
// });
// console.log(total);

// //reduce in array of objects.....................
// let products = [
//     { id: 1, title: "android Phone", cost: 7500 },
//     { id: 2, title: "Play Station", cost: 98000 },
//     { id: 3, title: "headphone", cost: 2500 },
// ];
// // totalCost = products.reduce((accumulator, currentVal) =>{
// //     return accumulator + currentVal.cost;
// // },1)
// // function addCost(accumulator, currentVal){
// //     return accumulator + currentVal.cost;
// // }
// let addCost1 = (accumulator, currentVal) => accumulator + currentVal.cost;
// //other methods for call back functions
// totalCost = products.reduce(addCost1,1)
// console.log(totalCost)

// //======================Sort() ,Find(), Filter(), map() and reduce() Diferrences==============================
// let number = [9,8,37,1,48];
// let sortnum = number.sort();
// console.log(sortnum);

// //find method.....................
// let findval = number.find((value) =>{
//     return value >10
// });
// console.log(findval);

// //filter method...............
// let filterval = number.filter((value) =>{
//     return value >10
// })
// console.log(filterval);

// //map method..........................
// let mapval = number.map((val) =>{
//     return "#$" +val
// });
// console.log(mapval)

// //===============================Function Declaration and Function Expression==========================
// let no1 = 1;
// let no2 = 232;

// // Normal Function declaration..........
// function add(){
//     let result = no1 + no2;
//     console.log(result)
// }
// add();

// //function declaration end with {}
// //function Expression ends with {};

// //function expression....  (Named function expression......)
// let AddNo = function add(){
//     let result = no1 + no2;
//     console.log(result,"Named function expression..........")
// };
// AddNo();
// //anonymous Fuctions.........
// let Addno =function () {
//     let result = no1 + no2;
//     console.log(result,"anonymous Fuctions..........")
// };
// Addno();
// // Arrow Fuctions.........
// let Addno1 = () => {
//     let result = no1 + no2;
//     console.log(result,"Arrow Fuctions..........")
// };
// Addno1();

// //Constructor function...............
// const AddNo2 = new Function(console.log(no1 + no2, "Constructor function.........."));
// // AddNo2();

// //====================JAVA SCRIPT HOISTING============================
// addNODeclaration(); 
// Function Declaration....................
// function addNODeclaration(){
//     console.log("FUNCTION DECLARATION");
// }
// addNODeclaration();
// // AddExpFn();    //Since it is an expression we cant call the function expression before the intialization
// //Function Expression............
//  let AddExpFn = function AddNoExpression(){
//      console.log("FUNCTION EXPRESSION");
//  };
// AddExpFn();


// //JAVASCIPT HOISTIONG..................
// // In javaScript, Hoisting is a default behavior of moving all the declarations at the top of the scope before the execution


// //==========================Immediately Invoked Function Expression===================
// let no1 = 1;
// let no2 = 232;

// // Immediately Invoked Function Expression.................
// // this function executes immediately after the function defined..........
// (function add(num1, num2){
//     let result = num1 + num2;
//     console.log(result)
// })(no1, no2);
// //using IIFE in arrow function................
// ((num1, num2) =>{
// let result = num1 + num2;
//     console.log(result)
// })(no1, no2);


//============================= Functions arguments=======================
// function totalExpense(item1, item2, item3){ // prarmeters //receiving values for the functions
//     return item1 + item2 + item3

// }
// let result = totalExpense(10,33,44) // arguments..............passing value to function
//  console.log(`Result: ₹${result}`);

//  //arguments functions........................
//  let total= 0
//   function totalexpense() {
//     for (const iterator of arguments) {
//        total += iterator;
//     }
//     return total

//   }
//   let result1 = totalexpense(10,33,44,10,22,1,10);// arguments..............passing value to function
//  console.log(`Result: ₹${result1}`);


// // ==========================================REST OPERATORS=====================================
// function totalexpense(loan,...tot_exp) { //(...sometxt)  it is rest operator and not the spread operator[...sometxt] and in function if we use ... then it is the rest operator
//     let tot = tot_exp.reduce((a,b) =>{
//        return  a+b;
//     });
//     return tot - loan

//     }
//     let result1 = totalexpense(100,10,33,44,10,22,1,10);// arguments ===>passing value to function
//    console.log(`Result: ₹${result1}`);

//    // //===================================== Funtion default parameters====================== 
// function calcTax(cost, tax = 18){  // if there is no arguments passed for the tax then its takes the default values which mentioned in a parameters.......

//       tax = tax ?? 18;
//         let taxamount =  (cost * (tax/100));
//         console.log(`The total cost is ₹${cost}

//     and tax ${tax}% amount is ₹${taxamount}

//     and the totalAmount is ₹${cost + taxamount}`)
//     }
//     calcTax(52);

// //=======================Getter and setter function ========================================
// let user = 
//     {
//         firstName:"Sanjay",
//         lastName:"Raj",
//     //     fullName: function(){
//     // console.log(user.firstName + ' '+user.lastName)        
//     //     }
//         get fullName(){
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set fullName(val){
//             let nameSplit = val.split(" ");
//             // console.log(val);
//             this.firstName =nameSplit[0];
//             this.lastName = nameSplit[1] || "";
//         }
//     };
//     user.fullName = "Jagan kumar"
//     console.log(user.fullName);

// // =======================Try and catch block=======================
// let user = 
//     {
//         firstName:"Sanjay",
//         lastName:"Raj",
//     //     fullName: function(){
//     // console.log(user.firstName + ' '+user.lastName)        
//     //     }
//         get fullName(){
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set fullName(val){
//             // if(typeof val != "string"){
//             //     const err = new Error("The value is not a String")
//             //     console.log(err)
//             // }
//             if( typeof val != "string"){
//                 const err = new Error("The value is not a string");
//                 // console.log(err);
//                 throw err;
//             }
//             if(val.length <= 3){
//                 const errr = new Error("Name is Invalid");
//                 throw errr
//             }
//             let nameSplit = val.split(" ");
//             // console.log(val);
//             this.firstName =nameSplit[0];
//             this.lastName = nameSplit[1] || "";
//         }
//     };
//     try{
//         user.fullName = "a";
//     }catch(ex){
//         alert(ex)
//     }
//     console.log(user.fullName);

// // ==========================Global and local scope variable=========================
// let  user = "prakash " //gobal variable

// function greet(name){
//     let user = "Anitha" //local variable
//     let message = name+ user;
//     logg(message);

// }
// function logg(mess){
//     console.log(mess)
// }
// greet("Hello ");
// console.log(user)

// //================= Difference btw var let and const==============================
// var User ="Surya"; 
// let User = "Shiva";
// const User = "Jagan"; // same as let but if we wants not to change the value then we can use const...............

// function displayfunc(){
//     for( var i=1;i<=10;i++){            // var ==> fucntional Scope
//         console.log("Number is #"+i)    //let ==>  block scope.
//         let j = "hello"
//         console.log(j)
//     }
//     console.log(i);
//     // console.log(j);   we cant access let outside the block.....
// }
// displayfunc();
// // console.log(i); // we cant access var outside the function.....

// // if we use (var) in a gobal scope or in parent then it is merged with the window object...............like,,,.(User ,,,,window.User)
// // but when use (let) in gobal scope it wont merge with the window objects......


// // ================================THIS KEYWORD======================================

// //if we use this in  method ==> it refers /returns the  obj.....
// // if we use this in function then its refer to the windows or gobal(function ==>global (window , global))

// let userInfo1= {
//     name: "Shiva",
//     displayInfo() {
//         console.log(this.name)
//     }
// }
// // this in Normal  function..........
// // function thisFUNCTIONDemo(){
// //     console.log(this);
// // }
// // thisFUNCTIONDemo();

// // this in constructor function..........
// function ThisInConstrFun(course) {
//     this.CourseName = course;
//     console.log(this);
// }
// let NewCourse = new ThisInConstrFun("Angular");

// // userInfo.displayInfo();

// //EXAMPLE 2............
// // // this keyword in callback Fucntions..............
// let userInfo = {
//     name: "Shiva",
//     Framework :"React",
//     skill:["html", "css", "javascript"],
//     displayInfo() {
//         console.log(this.name)
//     },
//     showDetails(){
//         // console.log(this.skill)
//         this.skill.forEach(function (val) {
//             console.log(this.Framework+"-"+(val).toUpperCase())
//         },this,{newSkill: "react"})
//     }
// }
// userInfo.showDetails();

// // ===============================Details about (BIND) Keyword
// function dispalyThis(course,js){
//     console.log(course);
//     console.log(js);
//     console.log(this);
// }

// dispalyThis.call({course:"JAVASCIRPT"},"ANGULAR","JS");
// dispalyThis.apply({course:"JAVASCIRPT APPLY"},["ANGULAR", "JS"]);  //both are same but change in passing arguments
// let newBind = dispalyThis.bind({course:"JAVASCIRPT BIND"},"ANGULAR","JS");
// newBind(); // bind is use to bind the value and return as new function.....................

// // // this keyword in callback Fucntions..............IN BIND METHOD======================================
// let userInfo = {
//     name: "Shiva",
//     Framework :"React",
//     skill:["html", "css", "javascript"],
//     displayInfo() {
//         console.log(this.name)
//     },
//     showDetails(){
//         // console.log(this.skill)
//         this.skill.forEach(function (val) {
//             console.log(this.Framework+"- in bind"+(val).toUpperCase())
//         }.bind(this))
//     }
// }
// userInfo.showDetails();

// // // this keyword in callback Fucntions..............IN ARROW FUNCTION (ES6)======================================
// let userInfo = {
//     name: "Shiva",
//     Framework :"React",
//     skill:["html", "css", "javascript"],
//     displayInfo() {
//         console.log(this.name)
//     },
//     showDetails(){
//         // console.log(this.skill)
//         this.skill.forEach( (val) => {
//             console.log(this.Framework+"- in arrow"+(val).toUpperCase())
//         })
//     }
// }
// userInfo.showDetails();
