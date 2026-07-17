const heroButtons = document.querySelectorAll(".hero-btn");
const navButton = document.querySelector(".btn");
heroButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        
    });
});
navButton.addEventListener("click", function() {

});
function bookTrip() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let passengers = document.getElementById("passengers").value;

    let message = 
    "Hello TravelPro,%0A" +
    "I would like to book a trip.%0A%0A" +
    "Name: " + name + "%0A" +
    "Phone: " + phone + "%0A" +
    "Destination: " + destination + "%0A" +
    "Travel Date: " + date + "%0A" +
    "Passengers: " + passengers;

    let whatsappNumber = "254794791277";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + message,
        "_blank"
    );

}
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
