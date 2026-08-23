console.log("STTP JavaScript is connected.");


const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thanks! Your message has been received.");
    });
}


const classSignupForm = document.querySelector("#class-signup-form");

console.log(classSignupForm);

if (classSignupForm) {
    classSignupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thanks for signing up!");
    });
}