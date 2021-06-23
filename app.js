// API Promises Fetch & Asynchronous Programming

// API 
/*
    Application Programming Interface
        -code that communicates our requests with the server
        -The server then sends our responses
        -Done using HTTP Requests
    HTP Requests
        -Action to be performed on a given resource
        -Occurs between client and server
        -Client sends a request
            -GET
            -POST
            -PUT
            -DELETE
        -Server sends a response back
            -Response Body
            -Status code
*/

// Asynchronous Programming
/*
    - Allows our code to run concurrently with other request, including reponses we wait on from an API.
    -Fetch() method is an asynchronous method, and is part of the brower window, not JavaScript (will not run on Node.js)
*/

//Promises
/*
    Promise represents a value that is unknown when the promise is created, but represents the eventual fulfilled value or rejection.
    Three States:
        -Pening: initial state (not fullfilled or rejected)
        -Fulfilled: completed successfully
        -Rejected: Operation failed
*/
const baseURL = `https://api.spacexdata.com/v2/rockets`

const searchForm = document.querySelector("form")
const spaceShips = document.querySelector("ul")
const button = document.querySelector("#submit")
console.log(button)

button.addEventListener("click", fetchSpace)

function fetchSpace(event) {
    event.preventDefault()
// prevent Default CANCELS the event - this instance button is in form in html and causing issue. If outside, not needed. other examples when it is needed: when websites do not allow you to right click
    fetch(baseURL)
    //then is resulter for a promise
        .then(response => {
            //console.log(response)
            return response.json()
        })
        .then(json => {
            //console.log(json)
            displayRockets(json)
        })
    }

// Always console log object
function displayRockets(rockets) {
    //console.log(`Results: ${rockets}`)
    rockets.forEach(r => {
        let rocket = document.createElement("li")
        rocket.innerText = r.name
        spaceShips.appendChild(rocket)
    })
}