const load = () => {

let searchButton = document.getElementById("search")

searchButton.addEventListener("click", () => {
    
    fetch("http://localhost:8080/superheroes.php")
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => alert())
})


}

document.addEventListener("DOMContentLoaded", load);