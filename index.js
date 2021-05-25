// https://www.openbrewerydb.org/ 

const BASE_URL = 'https://api.openbrewerydb.org/breweries/'
const beersList = document.querySelector("#brewery-list")
// First Action Item: when form is submitted, need to make a request to API 

// select and add event listener to the form 
const form = document.querySelector("#brewery-search-form")
// const form = document.getElementById("brewery-search-form")

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    beersList.innerHTML = ''
    event.preventDefault()
    const queryTerm = event.target.firstElementChild.value

    make a request to API 

    fetch(`https://api.openbrewerydb.org/breweries/search?query=${queryTerm}`)
        .then(resp => resp.json())
        .then(breweries => {
            const ul = document.createElement('ul')
            const header = document.createElement('h3')
            header.innerText = `${breweries.length} total breweries`
            beersList.appendChild(header)
            beersList.appendChild(ul)
            const brewsList = breweries.map((brewery) => {
                const li = document.createElement('li')
                li.innerText = `Brewery Name: ${brewery["name"]} - Brewery Type: ${brewery["brewery_type"]} - City: ${brewery["city"]}`
                li.id = brewery["obdb_id"]
                return li 
            })
            brewsList.forEach(brewery => {
                beersList.append(brewery)
            });
        })

    fetch(`https://api.openbrewerydb.org/breweries/search?query=${queryTerm}`)
        .then(resp => resp.json())
        .then(breweries => {
            beersList.innerHTML += `<h2>${breweries.length} total breweries`
            const brewsList = breweries.map((brewery) => {
               const list =  
               `<li>Brewery Name: ${brewery["name"]} - Brewery Type: ${brewery["brewery_type"]} - City: ${brewery["city"]}</li>`
                return list
            })
            console.log(brewsList)
            brewsList.forEach(brewery => {
                beersList.innerHTML += brewery
            });
        })
}