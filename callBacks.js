//  a callback is a function that gets passed into another function as a parameter.


//example- 1 ...

// function first(){
//   console.log(1)
// }

// function second(){
//     console.log(2)
// }

// function third(){
// console.log(3)
// }


// example - 1 - this will print 1 then 2 and  after that 3 

///////////////////////////////////////////////////////////////////////////////////////


//example- 2 

// function first(){
//     console.log(1)
//   }
  
//   function second(){
//       setTimeout(()=> console.log(2),0)
//   }
  
//   function third(){
//   console.log(3)
//   }

// first()
// second()
// third()

// example-2 will run 1, 3 and then 2 

/////////////////////////////////////////////////////////////////////////////

function first(){
    console.log(1)
}

function second(callback){
    setTimeout(() => {
        console.log(2);
        callback()
    },0)
}

function third(){
    console.log(3)
}


first()
second(third)

// this will run 1, 2 and 3. the thrird function is passed as a callback function to the second one and in the execution context the third function will get executed only after logging the console.log(2).
 