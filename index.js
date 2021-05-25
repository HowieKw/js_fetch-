// https://www.openbrewerydb.org/ 

const BASE_URL = 'https://api.openbrewerydb.org/breweries'
const container = document.querySelector("#recent-breweries-list")
const resultsContainer = document.querySelector("#brewery-list")
// attach an event listener to domcontentloaded

document.addEventListener('DOMContentLoaded', fetchBreweries)

function fetchBreweries() {
    // make a fetch request
    fetch(`${BASE_URL}?per_page=5&sort=+created_at`)
    .then(resp => resp.json())
    .then(breweries => {
        appendBrewsToDom(breweries)
    })
    // fetch(BASE_URL + "?per_page=5&sort=+created_at`")
    // append the response to my dom
}

function appendBrewsToDom(breweries){
    modifyArray(breweries)

     
}

function modifyArray(breweries) {
    const brews = breweries.map((brewery) => {
        const li = document.createElement('li')
        li.innerText = `Name: ${brewery["name"]} - Location: ${brewery["city"]}, ${brewery["state"]} - Type: ${brewery["type"]}`
        console.log(li)
        return li 
     // return `<li>Name: ${brewery["name"]} - Location: ${brewery["city"]}, ${brewery["state"]} - Type: ${brewery["type"]}</li>`
     })
     // append each li to dom
     const ul = document.createElement('ul')
     ul.id = "brewery-list-ul"
     container.append(ul)

     brews.forEach((brew) => {
         // const ul = document.querySelector("#brewery-list")
         ul.append(brew)
     })
}

//------------------------------------------------------------

const form = document.querySelector("#brewery-search-form")
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    resultsContainer.innerHTML = ""
    const queryTerm = event.target.firstElementChild.value
    console.log(queryTerm)
    fetch(`${BASE_URL}/search?query=${queryTerm}`)
    .then(resp => resp.json())
    .then(breweries => {
        const header = document.createElement('h3')
        header.innerText = `${breweries.length} results found`
        resultsContainer.append(header)
        const brews = breweries.map((brewery) => {
           const li = document.createElement('li')
           li.innerText = `Name: ${brewery["name"]} - Location: ${brewery["city"]}, ${brewery["state"]} - Type: ${brewery["type"]}`
           return li 
        // return `<li>Name: ${brewery["name"]} - Location: ${brewery["city"]}, ${brewery["state"]} - Type: ${brewery["type"]}</li>`
        })

        // append each li to dom
        const ul = document.createElement('ul')
        ul.id = "brewery-list-results"
        resultsContainer.append(ul)

        brews.forEach((brew) => {
            // const ul = document.querySelector("#brewery-list")
            ul.append(brew)
        })
    })

}