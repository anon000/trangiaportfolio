const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu a");

/* TOGGLE MENU */
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/* CLICK LINK -> SMOOTH SCROLL + CLOSE MENU */
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }

        navMenu.classList.remove("active");
    });
});

const typingText = document.querySelector(".typing");

const text = "Web Developer";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        typingText.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingText.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();