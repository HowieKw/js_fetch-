const BASE_URL = 'https://api.openbrewerydb.org/breweries'
const container = document.getElementById('brewery-list')

function getBreweries(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(breweries => {
        breweries.forEach(renderBrew)
    })
}

function renderBrew(brew) {
    const div = document.createElement('div')
    div.id = `brew-card-${brew.id}`

    const header = document.createElement('h3')
    header.textContent = `Name: ${brew.name}`

    const p = document.createElement('p')
    p.id = `brew-info-${brew.id}`
    p.textContent = `
        Type: ${brew.brewery_type} -
        City: ${brew.city} -
        State: ${brew.state}
        `
    div.append(header, p)
    container.appendChild(div)
}

document.addEventListener('DOMContentLoaded', getBreweries)