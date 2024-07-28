document.addEventListener("DOMContentLoaded", () => {
    const logoBox = document.getElementById("logoBox");
    const content = document.getElementById("content");

    logoBox.addEventListener("click", () => {
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
