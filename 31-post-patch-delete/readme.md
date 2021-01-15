# Make Fetch happen
## SWBAT 
- Use and read Arrow functions 
- Explain the difference between synchronous(water fall) vs asynchronous code 
- Explain what asynchronous methods are in the context of JavaScript
- Implement a development server using JSON Server
- build functions using fetch to READ data from our json-webserver 



## JSON Server
JSON server allows us to set up a fast easy server that can respond to requests from our client

```
// install 
npm install -g json-server

// run the server 
json-server --watch db.json

// for the server to run you must include a db.json file with data
{
  "allCats": [
    {
      "id": "0",
      "name": "Party Cat",
      "image": "party_cat.jpeg",
      "catchphrase": "Party on Party Cat"
    },
    {
      "id": 1,
      "name": "Mittens",
      "image": "https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg",
      "catchphrase": "Party cat likes to party"
    },
    {
      "id": 2,
      "name": "Tod",
      "image": "https://i.ytimg.com/vi/h6ExCwtgGe8/maxresdefault.jpg",
      "catchphrase": "Yeah... I'm a dj, but like I don't like to play out at lame venues like this to main stream. CatMittens has really sold out imo. Anyway, check out my sound cloud at todEzyPizza its mostly progressive house and future bass."
    },
    {
      "name": "Rose",
      "image": "assets/gm_cat.jpg",
      "catchphrase": "shout out to the 2 crew",
      "id": 3
    },
    {
      "name": "Rose",
      "image": "assets/gm_cat.jpg",
      "catchphrase": "shout out to the 2 crew",
      "id": 4
    }
  ]
}


```
## .then and Promise

"A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future." - MDN


![promise](https://media.prod.mdn.mozit.cloud/attachments/2018/04/18/15911/32e79f722e83940fdaea297acdb5df92/promises.png)

## FETCH
```
// Read
// GET 
// When making a GET request 
// fetch() will only need a url
 fetch(`http://localhost:3000/allCats/${id}`)
    .then(res => res.json()) // will convert json to something readable 
    .then(cat => loadCat(cat)) 

```