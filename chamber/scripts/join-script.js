function setTimestamp() {
    var timestampField = document.getElementById('timestamp');
    var now = new Date();
    timestampField.textContent = "Time started: " + now.toLocaleString();

}

// var submitButton = document.querySelector('input[type="submit"]');
// submitButton.addEventListener('click', (event) => {
//     if (!validateForm()) {
//         event.preventDefault();
//         alert('Please fill out all required fields.');
//     }
// });
