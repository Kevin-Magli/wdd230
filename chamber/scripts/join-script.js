document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Redirect to another page
    window.location.href = 'thankyou.html';
});
