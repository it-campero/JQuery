// const $btn = document.getElementById("send");
// $btn.addEventListener("click", (e) => alert("click en el botón💥"));


framework = ["JQuery", "Bootstrap"];

$(document).ready(() => {
    $(".flex-btn").click(() => {
        alert(`Hola, estoy utilizando ${framework[0]}`);
    });
});