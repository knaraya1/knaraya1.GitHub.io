// Payment Form Submission Handler
document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const receiverName = document.getElementById("receiverName").value;
    const receiverAccount = document.getElementById("receiverAccount").value;
    const bankName = document.getElementById("bankName").value;
    const paymentAmount = document.getElementById("paymentAmount").value;

    alert(`Payment Submitted!\nReceiver: ${receiverName}\nAccount: ${receiverAccount}\nBank: ${bankName}\nAmount: $${paymentAmount}`);
});

// Profile Form Submission Handler
document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    alert(`Profile Updated!\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}`);
});


document.getElementById("validation_link_html").setAttribute("href", "https://validator.w3.org/check?uri=" + location.href);
        document.getElementById("validation_link_css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

        const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor link behavior
        const targetID = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        document.querySelectorAll('section').forEach((section) => { // Added parentheses
            section.style.display = 'none';
        });

        targetSection.style.display = 'block';
    });
});