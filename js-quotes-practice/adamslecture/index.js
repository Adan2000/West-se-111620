const rootURL = 'http://localhost:3000/quotes'
const quotesURL = `${rootURL}/?_embed=likes`

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    fetch(rootURL, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            author: e.target.author.value,
            quote: e.target.quote.value,
            likes: []
        })
    }).then(r => r.json()).then(quote => {
        renderQuoteCard(quote)
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getQuotes(quotesURL)
});

function getQuotes(url) {
    fetch(url).then(r => r.json()).then(quotes => {
        quotes.forEach(quote => {
            renderQuoteCard(quote)
        })
    })
}

const renderQuoteCard = quote => {
    newCard = addQuoteToCard(quote, buildQuoteCard())
    document.getElementById('quote-list').append(newCard)
} 

function addQuoteToCard(quote, card) {
    card.id = quote.id
    card.querySelector('p').textContent = quote.quote
    card.querySelector('footer').textContent = quote.author
    card.querySelector('span').textContent = quote.likes.length

    dBtn = card.querySelector('.btn-danger')
    dBtn.addEventListener('click', () => removeQuote(card))

    card.querySelector('.btn-success').addEventListener('click', () => addLike(card))
    card.querySelector('form').addEventListener('submit', (e) => editQuote(e, card))
    
    return card
}

function editQuote(e, card) {
    e.preventDefault()
    fetch(`${rootURL}/${card.id}`, {
        method: 'PATCH', headers: {
            'Content-type': 'application/json'
        }, body: JSON.stringify({
            author: e.target.author.value,
            quote: e.target.quote.value
        })
    }).then(r => r.json()).then(quote => {
        document.getElementById(quote.id).querySelector('p').textContent = quote.quote
        document.getElementById(quote.id).querySelector('footer').textContent = quote.author
    });
}

function addLike(card) {
    fetch(`http://localhost:3000/likes`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            quoteId: parseInt(card.id)
        })
    }).then(r => r.json()).then(like => {
        quote = document.getElementById(like.quoteId)
        likes = quote.querySelector('span').textContent
        likeContainer = document.getElementById(like.quoteId).querySelector('span')
        likeContainer.textContent = parseInt(likes) + 1
    });
};

const removeQuote = card => {
    fetch(`${rootURL}/${card.id}`, {
        method: 'DELETE', headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        document.getElementById(card.id).remove()
    });
};

function buildQuoteCard() {
    const li = document.createElement('li')
    li.className = 'quote-card'
    const bc = document.createElement('blockquote')
    bc.className = 'blockquote'
    const p = document.createElement('p')
    p.className = 'mb-0'
    const foot = document.createElement('footer')
    foot.className = 'blockquote-footer'
    const br = document.createElement('br')
    const lBtn = document.createElement('button')
    lBtn.className = 'btn-success'
    lBtn.textContent = 'Likes: '
    const span = document.createElement('span')
    lBtn.append(span)
    const dBtn = document.createElement('button')
    dBtn.className = 'btn-danger'
    dBtn.textContent = 'Delete'


    const editForm = document.createElement('form')
    const qInput = document.createElement('input')
    
    qInput.type = "text"
    qInput.defaultValue = "Quote"
    qInput.name = 'quote'

    const aInput = document.createElement('input')
    aInput.type = "text"
    aInput.defaultValue = "Author"
    aInput.name = 'author'

    const sInput = document.createElement('input')
    sInput.type = "submit"

    editForm.append(qInput, aInput, sInput)

    bc.append(p, foot, br, lBtn, dBtn, editForm)
    li.append(bc)
    return li
}

