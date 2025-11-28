/* ============================================================
   PRELOADER
============================================================ */
window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) preloader.style.display = "none";
    }, 2000);
});


/* ============================================================
   NAVBAR SHRINK ON SCROLL
============================================================ */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


/* ============================================================
   DARK / LIGHT THEME TOGGLE
============================================================ */
const themeToggleBtn = document.getElementById("theme-toggle");
const root = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        root.classList.toggle("light-theme");

        // Change icon
        if (root.classList.contains("light-theme")) {
            themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        } else {
            themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
        }
    });
}


/* ============================================================
   PARTICLES.JS INITIALIZATION
============================================================ */
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#6bb6ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            color: "#6bb6ff",
            opacity: 0.3
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});


/* ============================================================
   EMAILJS CONTACT FORM HANDLER
============================================================ */

// Replace with your actual IDs
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

emailjs.init(EMAILJS_PUBLIC_KEY);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch((error) => {
                alert("Something went wrong. Try again.");
                console.error("EmailJS Error:", error);
            });
        });
    }
});


/* ============================================================
   FADE-IN ANIMATIONS ON SCROLL
============================================================ */
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(el => observer.observe(el));
