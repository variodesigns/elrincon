document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const logo = document.getElementById("splash-logo");
    const mainContent = document.getElementById("main-content");

    // Fade logo in
    setTimeout(() => {
        logo.style.opacity = "1";
    }, 200);

    // Hold, then fade out splash
    setTimeout(() => {
        splash.style.opacity = "0";
    }, 1800);

    // Remove splash + reveal main content
    setTimeout(() => {
        splash.style.display = "none";
        mainContent.style.opacity = "1";
    }, 2800);
});

document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const logo = document.getElementById("splash-logo");
    const sideMenu = document.getElementById("side-menu");
    const hamburger = document.getElementById("hamburger");

    // Fade logo in
    setTimeout(() => {
        logo.style.opacity = "1";
    }, 200);

    // Fade out splash
    setTimeout(() => {
        splash.style.opacity = "0";
    }, 1800);

    // Remove splash
    setTimeout(() => {
        splash.style.display = "none";
    }, 2800);

    // Toggle menu
    hamburger.addEventListener("click", () => {
        sideMenu.classList.toggle("open");
    });
});
