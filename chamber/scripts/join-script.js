function setTimestamp() {
    var timestampField = document.getElementsById('timestamp');
    var now = new Date();
    timestampField.value = "Started: " + now.toLocaleString();
}

// var submitButton = document.querySelector('input[type="submit"]');
// submitButton.addEventListener('click', (event) => {
//     if (!validateForm()) {
//         event.preventDefault();
//         alert('Please fill out all required fields.');
//     }
// });
