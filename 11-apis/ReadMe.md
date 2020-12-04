## APIs and the Internet 
- Recognize the parts of the request-response lifecycle
- Define client and describe setting up the request
- Define server and describe how the response is formatted
- Identify HTML as a response type
- Identify and define JSON
- Define Application Programming Interface (API)
- Describe the API of a Ruby Array
- Explain the uses of an API on the internet
- Practice making requests to an API and parsing and examining the result
- Practice writing a command line application (CLI)

# Key Questions 
- How do websites get to your computer?
- How do we use data on the internet?

- What can you do on Reddit?
    - Read Posts
    - Create Posts
    - Update your Posts
    - Delete your Posts 

[Reddit ](https://www.reddit.com/r/cute)

[Reddit JSON](https://www.reddit.com/r/cute/.json)

- dev-tools network tab


### What is an Client and What is a Server?
- [Client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)

- Client: Web Browser  
- A web server:  Software, or hardware dedicated to responding to client requests, such as sending it data.

- url is sent to a server > the server sends back data > The browser uses that data to make a web page 

### HTTP: Hypertext Transfer Protocol
- A protocol for communicating between web browsers and web servers.
    - HTTP Request
        - endpoint 
        - method GET(READ)
        - headers
        - body(data)

### JSON: JavaScript Object Notation
- A language-agnostic data format that we can get from websites. 


### API: Application Program Interface 
- "An application programming interface is a computing interface that defines interactions between multiple software intermediaries."
- How web apps can interact with a web server
- Serves up data in JSON hash 

### Ruby gems for working with APIs 
- rest-client is a gem that allows us to make HTTP requests.
- json is a module in the Ruby standard library that allows us to parse and create JSON.
