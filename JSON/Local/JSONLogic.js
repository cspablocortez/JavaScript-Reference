async function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeroes = await response.json();

    populateHeader(superHeroes);
    populateHeroes(superHeroes)
}

function populateHeader(obj) {
    const header = document.querySelector('header');
    const H1 = document.createElement('h1');
    H1.textContent = obj.squadName;
    header.appendChild(H1);

    const paragraph = document.createElement('p');
    paragraph.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(paragraph);
}

function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;
    console.log(heroes);
}


populate();