/* ===========================
   PARTICLES JS
   =========================== */
particlesJS("particles-js", {
    particles: {
        number: { value: 85 },
        size: { value: 3 },
        color: { value: "#4aa3ff" },
        line_linked: {
            enable: true,
            distance: 140,
            color: "#4aa3ff",
            opacity: 0.35,
            width: 1
        },
        move: { speed: 2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "grab" }
        }
    }
});


/* ===========================
   AOS (Animate On Scroll)
   =========================== */
AOS.init({
    duration: 900,
    offset: 120,
    once: true
});


/* ===========================
   NAVBAR SHRINK ON SCROLL
   =========================== */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});


/* ===========================
   DARK / LIGHT MODE TOGGLE
   =========================== */
const themeToggle = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.classList.remove("ri-moon-fill");
        themeToggle.classList.add("ri-sun-fill");
    } else {
        themeToggle.classList.remove("ri-sun-fill");
        themeToggle.classList.add("ri-moon-fill");
    }
});


/* ===========================
   EMAILJS CONTACT FORM
   =========================== */

/* You MUST replace the placeholders below: 
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
*/

(function () {
    emailjs.init("YOUR_PUBLIC_KEY_HERE");  // <-- Replace with YOUR EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("YOUR_SERVICE_ID_HERE", "YOUR_TEMPLATE_ID_HERE", params)
        .then(() => {
            alert("Message Sent Successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to send message. Check console for details.");
        });
});
