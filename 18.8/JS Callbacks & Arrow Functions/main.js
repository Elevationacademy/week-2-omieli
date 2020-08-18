// // const timer = function(){
// //     console.log(new Date())
// //   }
  
// //   setInterval(timer, 100)


// // setInterval( function () {
// //     console.log( new Date () )
// //   }, 1000)

// // const greet = name => console.log("Hello there, " + name)

// // greet("Jolene") //prints "Hello there, Jolene"

// // const square = num => console.log(num*num)
// // square(4)

// // const add = (x, y) => x + y

// // const sum = add(1, 2) 
// // console.log(sum) //prints 3

// const getFormalTitle = (title, name) => title +" "+ name 

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

/**********************Exercise 1 - Callbacks *****************/
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   const pushPull = func => func()
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"



/**********************Exercise 2 - Callbacks *****************/
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }

// const getTime = (func,time2) => func(new Date())
// getTime(returnTime)



/**********************Exercise 3 - Callbacks***************/
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
  
//   const logData = somthing => alert("All night long!")
//   displayData(alert, logData, "I like to party")


/***********************Exercise 4 - Arrow Functions**************/
// const threeSome = (x,y,z) => console.log(x+y+z)
// threeSome(2,3,4)


/************************Exercise 5 - Arrow Functions ***********/
const capitalize = name => console.log(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia

  
