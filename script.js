let characters = []
const charBtn = document.querySelector("#characters")
const jsCharacters = document.querySelector("#HTMLCharacters");

function rickAndMortyAPI() {

    let url = 'https://rickandmortyapi.com/api/character'
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                // Clear HTML Contents and Characters array
                jsCharacters.innerHTML = ""
                characters.length = 0
                
                for (let i = 0; i < data.results.length; i++) {
                    if (data.results[i].name === "Rick Sanchez" || data.results[i].name === "Morty Smith" || data.results[i].name === "Amish Cyborg" || data.results[i].name === "Summer Smith" || data.results[i].name === "Jerry Smith") {
                        characters.push(data.results[i])
                    }
                }

                characters.forEach(char => {
                    // let p = document.createElement("p")
                    // p.innerHTML = char.name
                    // jsCharacters.appendChild(p)
                    let charHTML = `
                        <div class="character-container">
                            <p>${char.name}</p>
                        </div>
                    `

                    jsCharacters.insertAdjacentHTML("beforeend", charHTML)
                })
            })
}

// rickAndMortyAPI();


charBtn.addEventListener("click", rickAndMortyAPI)
