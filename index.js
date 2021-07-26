const BASE_URL = "https://api.openbrewerydb.org/breweries";
const container = document.getElementById('brewery-list')

function renderBrew(brew) {
  const card = document.createElement("div");
  card.id = `brew-${brew.id}`;

  const header = document.createElement("h3");
  header.id = "brew-header";
  header.textContent = brew.name;

  const p = document.createElement("p");
  p.id = "brew-info";
  p.textContent = `
    Type: ${brew.brewery_type} - 
    City: ${brew.city} - 
    State: ${brew.state}
    `;

  card.append(header, p)
  container.appendChild(card)
}

function fetchBrews() {
  fetch(BASE_URL)
    .then((resp) => resp.json())
    .then((brews) => {
      brews.forEach(brew => renderBrew(brew));
    });
}

function init() {
  fetchBrews();
}

init();
