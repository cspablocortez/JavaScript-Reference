async function fetchJSON() {
    try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        return jsonData;
    } catch(error) {
        console.error("Error loading JSON: ", error);
    }
}

function populateTable(data) {
    const tableBody = document.getElementById('packages-table').getElementsByTagName('tbody')[0];

    data.packages.forEach(package => {
        const row = tableBody.insertRow();
        const cellID     = row.insertCell(0);
        const cellName   = row.insertCell(1);
        const cellYear   = row.insertCell(2);
        const cellAuthor = row.insertCell(3);
        const cellURL    = row.insertCell(4);

        const anchorElement = document.createElement('a');
        anchorElement.target = '_blank';
        anchorElement.href = package.URL;
        anchorElement.textContent = package.URL;
        cellURL.appendChild(anchorElement);

        cellID.textContent = package.id;
        cellName.textContent = package.name;
        cellYear.textContent = package.year;
        cellAuthor.textContent = package.author;
    });
}

fetchJSON().then(populateTable);