// A promise is a JavaScript object that allows you to make asynchronous(aka async) calls. It produces a value when the async operation completes successfully or produces an error if it doesn't complete. 
//let promise = new Promise(function(resolve, reject) { // Do something and either resolve or reject })

const promise =  new Promise((resolve, reject)=>{
    resolve('Hi there')
})
// to get the resolved data from the promise we should use 'then'

promise.then((data)=>{
    console.log(data)
})
// we will get 'Hi there'


const promiseError =  new Promise((resolve, reject)=>{
    reject('there is an error')
})
// to get an error update we should use 'catch'

promiseError .then((data)=>{
    console.log('resolved')
})
.catch((err)=>{
    console.log(err)
})

/////////////////////////////////////////////////////////////////////////////////////////////////
const promiseExample = new Promise((resolve, reject) => {
    setTimeout(() => resolve('updated data'), 2000)
})
promiseExample.then((data)=> {
    console.log(data)
})