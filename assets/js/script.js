/* -----------------------------------
   1. PRELOADER
----------------------------------- */
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transition = "0.8s";
        setTimeout(() => preloader.style.display = "none", 500);
    }, 1200);
});


/* -----------------------------------
   2. PARTICLES BACKGROUND
----------------------------------- */
particlesJS("particles-js", {
    particles: {
        number: { value: 85 },
        color: { value: "#86c1ff" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#86c1ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.2
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});


/* -----------------------------------
   3. DARK/LIGHT THEME TOGGLE
----------------------------------- */
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        toggleBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    }
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    toggleBtn.innerHTML = "🌙";
}


/* -----------------------------------
   4. NAVBAR SHRINK ON SCROLL
----------------------------------- */
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.padding = "10px 50px";
        navbar.style.background = "rgba(10,14,23,0.95)";
    } else {
        navbar.style.padding = "18px 60px";
        navbar.style.background = "rgba(10,14,23,0.7)";
    }
});


/* -----------------------------------
   5. AOS ANIMATION INITIALIZATION
----------------------------------- */
AOS.init({
    duration: 900,
    once: true
});


/* -----------------------------------
   6. EMAILJS CONTACT FORM
----------------------------------- */
(function () {
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your key
})();

document.getElementById("contact-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    })
        .then(() => {
            alert("Message sent successfully!");
            e.target.reset();
        })
        .catch(() => {
            alert("Failed to send message. Check EmailJS configuration.");
        });
});
