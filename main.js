document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const logo = document.getElementById("splash-logo");

    // Fade logo in slower
    setTimeout(() => {
        logo.style.opacity = "1";
    }, 300);

    // Fade out splash later
    setTimeout(() => {
        splash.style.opacity = "0";
    }, 2600);

    // Remove splash after fade-out completes
    setTimeout(() => {
        splash.style.display = "none";
    }, 4800);
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

    // ✅ Close slide-out menu when a link is clicked
    document.querySelectorAll("#side-menu a").forEach(link => {
        link.addEventListener("click", () => {
            sideMenu.classList.remove("open");
        });
    });
});

// HERO SLIDESHOW
document.addEventListener("DOMContentLoaded", () => {
    const desktopSlides = document.querySelectorAll(".slide.desktop");
    const mobileSlides = document.querySelectorAll(".slide.mobile");

    const slides = window.innerWidth <= 700 ? mobileSlides : desktopSlides;

    let index = 0;
    slides[index].classList.add("active");

    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 2000);
});
