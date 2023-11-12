const load = () => {

let searchButton = document.getElementById("search")
let result = document.getElementById("result")
let heroInput = document.getElementById("hero-input")

searchButton.addEventListener("click", () => {

    fetch(`superheroes.php?input=${heroInput.value}`)
    .then(response => response.text())
    .then(data => {
        result.innerHTML = data
    })
    .catch(error => alert(error))
})
    
}

document.addEventListener("DOMContentLoaded", load);