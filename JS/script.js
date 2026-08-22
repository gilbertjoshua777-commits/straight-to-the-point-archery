console.log("STTP JavaScript is connected.");

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function(event) {event.preventDefault();
alert("Thanks! Your message has been received.");
});