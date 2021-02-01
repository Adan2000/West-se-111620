//Data Types Js
// undefined
// 1 number 
// 'rose' string
// true bool
// {} object
// []
// function(){}

// BigInt(98437534753897)
// 98437534753897n
// Symbol('foo')

//pass-by-value vs pass-by-reference

let cat = 'rose'
let pet = cat.toUpperCase()

console.log('cat :', cat)
console.log('pet :', pet)

let arr = [1,2,3]
let arr2 = arr
arr2.push(4)
console.log('arr :', arr)
console.log('arr2 :', arr2)

//Grabbing DOM elements 
    //Read
    let btn = document.getElementById('add_cat_btn')
    let selectedCatInfoDiv = document.querySelector('#selected_cat_info')
    let container = document.querySelector('.container')
    let  containers = document.getElementsByClassName('container')
    // console.log(containers[0])
    // console.log(containers[1])
    let lis = document.getElementsByTagName('li')
    let catDiv = document.querySelector('#inner_cat_info')
    let catImage = document.querySelector('#inner_cat_info img')
    console.log(catImage)
    //Create
    let cat = document.createElement('div')
    let p = document.createElement('p')
    //add attributes
    p.id  = 'party-cat-catchphrase'
    p.className ='catchphrase'
    p.textContent = 'Party Cat likes to Party'
    // container.appendChild(p)
    div.appendChild(p)
    console.log(div)
    // catDiv.insertBefore(div, catImage)

    //Update
    btn.textContent = 'Add to Guest List'
    btn.style.background = 'red'
    catImage.src = 'party_cat.jpeg'
    //Delete 
    let ul = document.querySelector('#cat_ul')
    ul.children[2].remove()

//Pulling it all together 