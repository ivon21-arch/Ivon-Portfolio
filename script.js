// Mobile navigation menu

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});
// Contact form

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            alert(
                "Message sent successfully! 🎉\n\n" +
                "Thank you for contacting me. " +
                "I will get back to you soon."
            );

            contactForm.reset();

        } else {

            alert(
                "Sorry, there was a problem sending your message. " +
                "Please try again."
            );

        }

    } catch (error) {

        alert(
            "Unable to send the message. " +
            "Please check your internet connection and try again."
        );

    }

});


// Typing animation

const typingText = document.getElementById("typing-text");

const words = [
    "Web Developer",
    "Programmer",
    "Technology Enthusiast",
    "Digital Solutions Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();