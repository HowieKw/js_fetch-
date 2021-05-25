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

    // make a request to API 

    // fetch(`https://api.openbrewerydb.org/breweries/search?query=${queryTerm}`)
    //     .then(resp => resp.json())
    //     .then(breweries => {
    //         const ul = document.createElement('ul')
    //         const header = document.createElement('h3')
    //         header.innerText = `${breweries.length} total breweries`
    //         beersList.appendChild(header)
    //         beersList.appendChild(ul)
    //         const brewsList = breweries.map((brewery) => {
    //             const li = document.createElement('li')
    //             li.innerText = `Brewery Name: ${brewery["name"]} - Brewery Type: ${brewery["brewery_type"]} - City: ${brewery["city"]}`
    //             li.id = brewery["obdb_id"]
    //             return li 
    //         })
    //         brewsList.forEach(brewery => {
    //             beersList.append(brewery)
    //         });
    //     })

    requestBreweries(queryTerm)
}

function requestBreweries(queryTerm) {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${queryTerm}`)
    .then(resp => resp.json())
    .then(breweries => {
        addBreweries(breweries)
    })
}

function addBreweries(breweries) {
    beersList.innerHTML += `<h2>${breweries.length} total breweries`
        const brewsList = breweries.map((brewery) => {
           const list =  
           `<li>Brewery Name: ${brewery["name"]} - Brewery Type: ${brewery["brewery_type"]} - City: ${brewery["city"]}</li>`
            return list
        })
        brewsList.forEach(brewery => {
            beersList.innerHTML += brewery
        });
}



// return 5 most recent breweries upon page load


// document.addEventListener('DOMContentLoaded', fetchBrews())

// function fetchBrews(){
//     const recentBrews = document.querySelector("#recent-breweries-list")
    
//     fetch('https://api.openbrewerydb.org/breweries?per_page=5&sort=+created_at')
//     .then(resp => resp.json())
//     .then(breweries => {
//         const brews = breweries.map((brewery) => {
//             return `<li>Brewery Name: ${brewery["name"]} - Brewery Type: ${brewery["brewery_type"]} - City: ${brewery["city"]}</li>`
//         })

//         brews.forEach((brew) => {
//             recentBrews.innerHTML += brew
//         })
//     })
// }
