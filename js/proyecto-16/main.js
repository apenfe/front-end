window.addEventListener("DOMContentLoaded", () => {

    console.log(screen.width, screen.height, window.location.href);

    let data = document.querySelector("#data");

    data.innerHTML += `<h2>Altura: ${window.innerHeight}, Anchura: ${window.innerWidth}.</h2><br>`;
    data.innerHTML += `<h2>URL: ${window.location.href}</h2>`;

    window.open("https://bropincel.es","blank");

});