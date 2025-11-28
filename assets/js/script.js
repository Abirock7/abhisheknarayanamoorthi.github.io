/* ================= PRELOADER ================= */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
        }, 500);
    }, 1200);
});

/* ================= SCROLL ANIMATIONS ================= */

const scrollElements = document.querySelectorAll(".fade-left, .fade-right");

function elementInView(el, offset = 150) {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
    );
}

function displayScrollElement(element) {
    element.classList.add("show");
}

function handleScrollAnimation() {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });
}

window.addEventListener("scroll", handleScrollAnimation);


/* ================= CERTIFICATION MODAL ================= */

function openCert(pdfPath) {
    const modal = document.getElementById("certModal");
    const frame = document.getElementById("certFrame");
    frame.src = pdfPath;
    modal.style.display = "flex";
}

function closeCert() {
    const modal = document.getElementById("certModal");
    const frame = document.getElementById("certFrame");
    frame.src = "";
    modal.style.display = "none";
}

window.openCert = openCert;
window.closeCert = closeCert;


/* ================= CONTACT FORM (EmailJS) ================= */

(function () {
    emailjs.init("JDuXFTC6nyMtcC5RF");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        user_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_fupqn7e", "template_qfnpq0u", params)
        .then(() => {
            alert("Message Sent Successfully!");
            document.getElementById("contactForm").reset();
        }, () => {
            alert("Failed to send message.");
        });
});


/* ================= PARTICLES JS ================= */

particlesJS("particles-js", {
    particles: {
        number: { value: 85 },
        size: { value: 3 },
        color: { value: "#3EA6FF" },
        line_linked: {
            enable: true,
            distance: 140,
            color: "#3EA6FF",
            opacity: 0.4,
            width: 1
        },
        move: {
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            }
        }
    }
});
