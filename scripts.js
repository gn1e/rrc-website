document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");

    // fade in
    setTimeout(() => {
        container.classList.add("show");
    }, 500); // make that shit for 2 secs ong

    setTimeout(() => {
        container.classList.add("expanded");
    }, 2500); // 2 sec
});

