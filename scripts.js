/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter form");
    var emailInput = document.getElementById("email");
    var message = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // simulate submission; don't reload the page

        var email = emailInput.value.trim();

        if (email === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent =
                "Thank you! Your email address " + email + " has been added to our mailing list!";
            form.reset();
        }
    });
});