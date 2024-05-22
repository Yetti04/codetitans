
let elements = localStorage.getItem("elements")
  let displayexperts = document.getElementById("searchedItemContainer");
let elementss = JSON.parse(elements) 
const specialist = elementss.filter(elements => elements.category == "experts")
specialist.map(elements => {
  let displaySearch = document.createElement("div");
  displaySearch.setAttribute("class", "displaySearch");
  displaySearch.innerHTML += `
    <div>
                    <img style="width: 200px; height: 200px;" src="${elements.image}" alt="${elements.name}">
                </div>
                    <p>${elements.name}</p>
                    <p>${elements.specialisation}</p>
                    <p>${elements.experience} years experience </p>
                `;
  displayexperts.appendChild(displaySearch);
});