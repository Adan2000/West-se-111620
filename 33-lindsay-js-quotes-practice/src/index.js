// Clicking the delete button should delete the respective quote from the
// API and remove it from the page without having to refresh.


const quotesURL = `http://localhost:3000/quotes?_embed=likes`
const quotesPostURL = `http://localhost:3000/quotes`

function renderQuote(quote){
    let quoteUL = document.getElementById("quote-list")
    // create all elements
    // fill those with data from the server
    // append those elements to the dom
    const LI = document.createElement("li")
    const blockQuote = document.createElement("blockquote")
    const pTag = document.createElement("p")
    const footer = document.createElement("footer")
    const br = document.createElement("br")
    const likeBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    const span = document.createElement("span")

    // define classnames on elements
    LI.id = quote.id
    LI.className = 'quote-card'
    blockQuote.className = "blockquote"
    pTag.className = "mb-0"
    footer.className = "blockquote-footer"
    likeBtn.className = 'btn-success'
    deleteBtn.className = 'btn-danger'

    // put the text content into the buttons
    pTag.textContent = quote.quote
    footer.textContent = quote.author
    likeBtn.textContent = "Likes: "
    span.textContent = quote.likes.length
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener("click", () => deleteQuote(quote.id))
    // appending everything together

    // append smaller elements into LI
    likeBtn.append(span)
    blockQuote.append(pTag, footer, br, likeBtn, deleteBtn)
    LI.append(blockQuote)
    quoteUL.append(LI)

}

function deleteQuote(quoteId){
    // fetch delete request
    fetch(quotesPostURL + `/${quoteId}`, {
        method: "DELETE"
    })
        .then(resp => resp.json())
        .then(data => {
            // deleting element off the page
            document.getElementById(quoteId).remove()
        })

}

function fetchQuotes(){
    fetch(quotesURL)
        .then(resp => resp.json())
        .then(quotes => quotes.forEach(quote => renderQuote(quote)))
}

function newQuote(){
    const newQuoteForm = document.querySelector("#new-quote-form")
    newQuoteForm.addEventListener("submit", handleSubmit)
}

function postQuote(quote){
    fetch(quotesPostURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(quote)
    })
        .then(resp => resp.json())
        .then( quote => renderQuote(quote))
}

// handlers

function handleSubmit(e){
    e.preventDefault()
    const quote = {
        quote: e.target.quote.value,
        author: e.target["author"].value,
        likes: []

    }
    postQuote(quote)
    e.target.reset()
}

fetchQuotes()
newQuote()

// grab form element
// on the form, add event listener for submit

