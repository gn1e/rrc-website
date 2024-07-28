document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const content = document.querySelector(".content");

    // fade in
    setTimeout(() => {
        container.classList.add("show");
    }, 500); // delay because smooth idk
s
    setTimeout(() => {
        container.classList.add("expand");
    }, 2500); // 2 sec

    // show that shit ong
    setTimeout(() => {
        content.classList.add("show");
    }, 3500); // 1 sec
});
