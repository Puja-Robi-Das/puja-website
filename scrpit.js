

    setTimeout(typeEffect, typingSpeed);

}

typeEffect();



// =========================
// SKILLS BAR ANIMATION
// =========================

const skillsSection = document.querySelector(".skills");

const skillBars = document.querySelectorAll(".skill-bar");

window.addEventListener("scroll", () => {

    const sectionTop = skillsSection.offsetTop - 400;

    if(window.scrollY >= sectionTop){

        skillBars.forEach(bar => {

            const width =

            bar.classList.contains("html") ? "95%" :

            bar.classList.contains("css") ? "90%" :

            bar.classList.contains("js") ? "85%" :

            "80%";

            bar.style.width = width;

        });

    }

});


const eduCards = document.querySelectorAll(".edu-card");

eduCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.querySelector(".edu-icon").style.transform = "scale(1.15) rotate(10deg)";
    });

    card.addEventListener("mouseleave", () => {
        card.querySelector(".edu-icon").style.transform = "scale(1) rotate(0)";
    });

});


const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const button = this.querySelector("button");

    button.innerText = "Message Sent ✓";

    setTimeout(() => {
        button.innerText = "Send Message";
        this.reset();
    }, 2000);

});

const date = document.getElementById("date");
const time = document.getElementById("time");

function updateClock(){

    const now = new Date();

    date.innerHTML = now.toLocaleDateString("en-US",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    });

    time.innerHTML = now.toLocaleTimeString();
}

updateClock();

setInterval(updateClock,1000);

const dateEl = document.getElementById("current-date");
const timeEl = document.getElementById("current-time");

function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateEl.textContent = now.toLocaleDateString("en-US", options);

    timeEl.textContent = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}

portfolio code.txt
Displaying portfolio code.txt.