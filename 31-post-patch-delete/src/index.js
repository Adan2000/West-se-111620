const catURL = 'http://localhost:3000/allCats'
let selectedCat = {}
//Runs on Load
getAllCats()
addListeners()


//Data
    //GET
function getAllCats(){
    fetch(catURL)
    .then(res => res.json())
    .then(cats => {
        let catUl = document.querySelector('#cat_ul')
        catUl.innerHTML = ''
        cats.forEach(cat => addToAside(cat))
        loadCat(cats[0])
    })
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
    //POST
function postCat(cat){
    fetch('http://localhost:3000/allCats',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(cat)
    })
    .then(res => res.json())
    .then(cat => {
        loadCat(cat)
        addToAside(cat)
    })
    .catch(error => console.log(error))
}
    //PATCH
function patchCat(cat){
        fetch(`http://localhost:3000/allCats/${cat.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(cat)
        })
        .then(res => res.json())
        .then(cat => {
            let id =  parseInt(cat.id)
            let li = document.getElementById(id)
            li.textContent = cat.name
            loadCat(cat)
        })
        .catch(error => console.log(error))
}



// Change DOM Elements
function loadCat(cat){
    selectedCat = cat
    let container = document.querySelector('#selected_cat_info')
    let h2 = container.querySelector('h2')
    let img = container.querySelector('img')
    let p = container.querySelector('p')
    let editBtn = document.createElement('button')

    h2.textContent = cat.name 
    img.src = cat.image
    p.textContent = cat.catchphrase
    editBtn.textContent = 'Edit'
    editBtn.addEventListener('click', (e) => handleEdit(e, cat))
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
    fetchOne(e.target.id)
}

function handleSubmit(e){
    e.preventDefault()
    let cat = {
        "name": e.target.cat_name.value,
        "image": e.target.cat_image.value,
        "catchphrase": e.target.cat_phrase.value
    }
    // loadCat(cat)
    // addToAside(cat)
    postCat(cat)
}

function handleUpdate(e, cat){
    e.preventDefault()
    let newCat = {
        "id": cat.id,
        "name": e.target.cat_name.value,
        "image": e.target.cat_image.value,
        "catchphrase": e.target.cat_phrase.value
    }
    patchCat(newCat)
}

function handleHide(){
    let form = document.querySelector('form')
    form.classList.toggle('hide')
}

function handleNew(){
    handleHide()
    let form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
}

function handleEdit(e, cat){
    handleHide()
    let form = document.querySelector('form')
    form.addEventListener('submit',(e) => handleUpdate(e,cat))
    form[0].value = cat.name
    form[1].value = cat.image
    form[2].value = cat.catchphrase
    form[3].value = 'Edit Cat'
    
}

 
function addListeners(){
    let catListLi = document.querySelectorAll('#cat_ul li')
    let btn = document.querySelector('#add_cat_btn')
    let catBtn = document.querySelector('#cat_fact_cat_btn')
    let editCatBtn = document.querySelector('#edit_cat_btn')

    catListLi.forEach(function(li){
        li.addEventListener('click', handleClick)
    })

    btn.addEventListener('click',handleNew)
    catBtn.addEventListener('click', randoCatFact)
    
}

