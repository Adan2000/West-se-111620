//Arrow functions 
// foo()
// function foo(){
//     console.log('hi')
// }

let foo = () => {
    console.log('hi')
}

let sayHi = () => 'hi'
let myName = name => `Hi my name is ${name}`
let snack = (name, snack) => `Hi my name is ${name} and I like ${snack}`

let square = (num) => {
    return num * num
}

// sayHi()
// myName('rose')
// snack('rose', 'plants')
// fetch()



//Runs on Load
addListeners()
getAllCats()
// loadCat(allCats[0])

//Data
function getAllCats(){
   return fetch('http://localhost:3000/allCats')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => addToAside(cat))
        loadCat(cats[0])
    })
    //cats.forEach(function(cat){
    //    return addToAside(cat)
    // })
}

function fetchOne(id){
    fetch(`http://localhost:3000/allCats/${id}`)
    .then(res => res.json())
    .then(cat => loadCat(cat))
}

function randoCatFact(){
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(res => res.json())
    .then(catsFacts => renderFact(catsFacts[Math.floor(Math.random()*catsFacts.length)].text))

}



// Change DOM Elements
function loadCat(cat){
    let container = document.querySelector('#selected_cat_info')
    let h2 = container.querySelector('h2')
    let img = container.querySelector('img')
    let p = container.querySelector('p')

    h2.textContent = cat.name 
    img.src = cat.image
    p.textContent = cat.catchphrase
}

function addToAside(cat){
    let ul = document.querySelector('#cat_ul')
    let li = document.createElement('li')
    li.id = cat.id
    li.textContent = cat.name
    li.addEventListener('click', handleClick)
    ul.appendChild(li)
}

function renderFact(fact){
    let main = document.querySelector('main')
    let div = document.createElement('div')
    div.textContent = fact
    main.appendChild(div)
}

// event handlers 
function handleClick(e){
    console.log(e.target.id)
    fetchOne(e.target.id)
}

function handleSubmit(e){
    e.preventDefault()
    let cat = {
        "name": e.target.cat_name.value,
        "image": e.target.cat_image.value,
        "catchphrase": e.target.cat_phrase.value
    }
   allCats.push(cat)
   loadCat(cat)
   addToAside(cat)
}

 
function addListeners(){
    let catListLi = document.querySelectorAll('#cat_ul li')
    let form = document.querySelector('form')
    let btn = document.querySelector('#add_cat_btn')
    let catBtn = document.querySelector('#cat_fact_cat_btn')

    catListLi.forEach(function(li){
        li.addEventListener('click', handleClick)
    })

    form.addEventListener('submit',handleSubmit)
    btn.addEventListener('click', function(e){
        let form = document.querySelector('form')
        form.classList.toggle('hide')
    })
    catBtn.addEventListener('click', randoCatFact)
}

