document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the response message
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.classList.remove('hidden');

    // Optionally, reset the form
    this.reset();

    // Hide the response message after 3 seconds
    setTimeout(() => {
        responseMessage.classList.add('hidden');
    }, 3000); // Change the time in milliseconds as needed
});