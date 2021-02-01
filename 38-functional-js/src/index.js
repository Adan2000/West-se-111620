//Callback
//Higher Order
const bakeCake = (cb) => cb('cake')
const bakePudding = (cb) => cb('pudding')
//Callback
const bake = (str) => {
    return  `Hello Bakers today we will be baking ${str}`
}

bakeCake(bake)

let bakers = ['adam', 'lindsay', 'rose']

let upCaseBakers = bakers.map(baker => baker.toUpperCase())

let timeLeft = (timePassed) => {
    console.log(timePassed)
    return (startTime) => {
        console.log(startTime)
        let time = startTime - timePassed
        return `Bakers ${time} minutes left`
    }
}

// timeLeft(5)(60)

let greeting = () => 'Hello Bakers'

let greatBakingShow = {
    showStart: greeting,
    checkTime: timeLeft,
    endShow: (winner) => `Todays Star Baker is ${winner}`
}

//Pure Function 

let ingredients = {
    sugar: true,
    butter: true
}

let tempIngredients = {
    butter:false,
    bakingPowder: true
}
Object.freeze(ingredients)

// const epIngredients = Object.assign(ingredients, tempIngredients)
let epIngredients = {...ingredients, ...tempIngredients}
// console.log(epIngredients)
// console.log(ingredients)

//this context 

function checkIn(){
    return `hello ${this.name} how is the ${this.task} bake`
}

const bakerRose = {
    name:'Rose',
    task: 'pudding',
    pastBakes: ['fish cake', 'rat cookies'],
    checkIn:checkIn,
    judgeBake: judgeBake
}
let bakerIx = {
    name:'ix',
    task: 'pudding',
    pastBakes: ['bad cake', 'sad cookies'],
    checkIn:checkIn,
    judgeBake: judgeBake
}
function judgeBake(){
    console.log(this)
    // return this.pastBakes.forEach(function(bake){
    //     console.log(this)
    //     console.log(`${this.name} your ${bake} is great!`)
    // }.bind(this))
    return this.pastBakes.forEach(bake => console.log(`${this.name} your ${bake} is great!`))
}