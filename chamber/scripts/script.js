const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('nav');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})



function updateWelcome() {
  // Define keys for storing visit count and last visit date
  let visitCountKey = 'visits_' + location.hostname + '_welcome';
  let lastVisitDateKey = 'lastVisit_' + location.hostname + '_welcome';
  
  // Retrieve stored visit count from localStorage
  let visitCount = localStorage.getItem(visitCountKey);
  // Current date and time
  let fullDay = new Date();

  // Initialize visit count if not present in localStorage
  if (visitCount === null) {
    visitCount = 0;
  } else {
    visitCount = parseInt(visitCount);
  }
  
  // Increment visit count
  visitCount++;
  // Store updated visit count in localStorage
  localStorage.setItem(visitCountKey, visitCount);

  // Retrieve last visit date from localStorage
  let lastVisitDate = localStorage.getItem(lastVisitDateKey);
  // Initialize message variable
  let message = '';

  // Initialize timeBetweenVisits and daysBetweenVisits variables
  let timeBetweenVisits = 0;
  let daysBetweenVisits = 0;

  // Check if there's a previous visit date
  if (lastVisitDate !== null) {
    // Calculate time between visits in milliseconds
    timeBetweenVisits = fullDay.getTime() - new Date(lastVisitDate).getTime();
    // Convert time between visits to days as a floating-point number
    daysBetweenVisits = timeBetweenVisits / (1000 * 60 * 60 * 24);

    // Determine the appropriate message based on days between visits
    if (daysBetweenVisits < 1) {
      message = "Back so soon! Awesome!";
    } else {
      // Display the days between visits as a floating-point number with two decimal places
      message = "You last visited " + daysBetweenVisits + " day" + (daysBetweenVisits.toFixed(2) != 1 ? "s" : "") + " ago.";
    }
  } else {
    // If no last visit date, it's the user's first visit
    message = "Welcome! Let us know if you have any questions.";
  }

  // Update the last visit date in localStorage
  localStorage.setItem(lastVisitDateKey, fullDay.toISOString());
  // Display the message
  document.getElementById('welcome-visitor').textContent = message;

  console.log('Visit Count:', visitCount);
  console.log('Last Visit Date:', lastVisitDate);
  console.log('Current Date:', fullDay);
  console.log('Time Between Visits (ms):', timeBetweenVisits);
  console.log('Days Between Visits (float):', daysBetweenVisits);
  console.log('Message:', message);
}


updateWelcome();
