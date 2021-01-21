const quotesURL = `http://localhost:3000/quotes?_embed=likes`
const likeUrl = `http://localhost:3000/likes`
getQuotes()
let form = document.querySelector('#new-quote-form')
form.addEventListener('submit', handleSubmit)
//form.addEventListener('submit', (e) => {
  //  e.preventDefault()
  // post stuffssss....
//})
//form.addEventListener('submit', (e) => handleSubmit(e, toy))

//data
function getQuotes(){
    fetch(quotesURL)
    .then(res => res.json())
    .then(quotes => quotes.forEach(quote => renderCard(quote)))
}

function postQuote(quote){
    fetch(quotesURL, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(quote)
    })
    .then(res => res.json())
    .then(quote => renderCard(quote))
}

function deleteQuote(id){
    fetch(`http://localhost:3000/quotes/${id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        let oldQuote = document.getElementById(id)
        oldQuote.remove()
        //oldQuote.innerHtml = ''
    })

}

function likeQuote(quote){
    let like = {
        quoteId:quote.id
    }
 
    fetch(likeUrl, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(like)
    })
    .then(res => res.json())
    .then(newLike =>{
        console.log(newLike)
        let li = document.getElementById(quote.id)
        let span = li.querySelector('span')
        quote.likes.push(newLike)
        console.log(quote.likes)
        span.textContent = quote.likes.length
    })
}

//dom
function renderCard(quote){
    let ul = document.getElementById('quote-list')
    let li = document.createElement('li')
    let blockquote = document.createElement('blockquote')
    let p = document.createElement('p')
    let footer = document.createElement('footer')
    let span = document.createElement('span')
    let br = document.createElement('br')
    let btnSuccess = document.createElement('button')
    let btnDanger = document.createElement('button')
   
    
    p.textContent = quote.quote
    footer.textContent = quote.author
    span.textContent = quote.likes.length
    btnDanger.textContent = 'Delete'
    btnSuccess.textContent = 'Likes: '

    li.className = 'quote-card'
    blockquote.className = 'blockquote'
    p.className = 'mb-0'
    footer.className ='blockquote-footer'
    btnSuccess.className = 'btn-success'
    btnDanger.className = 'btn-danger'
    li.id = quote.id
    btnDanger.addEventListener('click', (e) => deleteQuote(quote.id) )
    btnSuccess.addEventListener('click', (e) => likeQuote(quote) )

    btnSuccess.appendChild(span)
    blockquote.append(p,footer, br ,btnSuccess,btnDanger)
    li.appendChild(blockquote)
    ul.appendChild(li)
}

// function renderCard(quote){
//     let ul = document.getElementById('quote-list')
//     let li = document.createElement('li')
//     li.innerHTML = `
//     <blockquote class="blockquote">
//     <p class="mb-0">${quote.quote}</p>
//     <footer class="blockquote-footer">${quote.author}</footer>
//     <br>
//     <button class='btn-success'>Likes: <span>${quote.likes.length}</span></button>
//     <button class='btn-danger'>Delete</button>
//     </blockquote>
//     `
//     ul.appendChild(li)
// }

//handlers

function handleSubmit(e){
    e.preventDefault()
    let quote = {
        quote: e.target.quote.value,
        author: e.target.author.value,
        likes: []
    }
    postQuote(quote)
}

