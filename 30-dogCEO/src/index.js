const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetchAllDogImage()
fetchAllDogBreeds()
addEventListeners()
addOptions()
let allDogs = []

//Data
function fetchAllDogImage(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => dogs.message.forEach(dog => buildDogImages(dog)))
}

function fetchAllDogBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        allDogs = Object.keys(breeds.message)
        allDogs.forEach(dog => renderDogBreeds(dog) )
    })
}

//DOM
function buildDogImages(dog){
    let dogImgContainer = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = dog
    img.style.width = '200px'
    dogImgContainer.appendChild(img)
}

function renderDogBreeds(dog){
    console.log(dog)
    let dogUl = document.querySelector('.dog-breeds')
    let li = document.createElement('li')
    li.textContent = dog
    li.id = dog
    li.addEventListener('click', handleClick)
    // li.addEventListener('click', (e) => handleClick(e,li))
    dogUl.appendChild(li)
}

function addOptions(){
    let abc = ['all','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p','q','r','s', 't', 'u', 'v', 'w','x','y','z']
    let select = document.querySelector('select')
    select.innerHTML = ''

    abc.forEach(letter => {
        let op = document.createElement('option')
        op.value = letter
        op.textContent = letter
        select.appendChild(op)
    })

}

//Event Handlers 
// function handleClick(e,li){
function handleClick(e){
    let li = document.getElementById(e.target.id)
    li.style.color = 'blue'
}

function handleChange(e){
    let dogBreeds = document.querySelector('.dog-breeds')
    let filteredDogs = []
    if(e.target.value == 'all'){
        filteredDogs = allDogs
    }else {
        filteredDogs = allDogs.filter(dog => dog.startsWith(e.target.value))
    }
    dogBreeds.innerHTML = ''
    filteredDogs.forEach(dog => renderDogBreeds(dog))
}

//Add Events
function addEventListeners(){
    let select = document.querySelector('select')
    select.addEventListener('change', handleChange)
}