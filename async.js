// ES6 introduced a more easier way to arrange promises syntactically and for easier user readability.
 
async function timer() {
    try {
        const greeting = await setTimeout(() => console.log('hi there'),1000)
    } catch{
        console.log(err)
    } 
}
timer()