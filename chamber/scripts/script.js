const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('nav');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})



function updateWelcome() {
  let visitCountKey = 'visits_' + location.hostname + '_welcome'; 
  let lastVisitDateKey = 'lastVisit_' + location.hostname + '_welcome';
  let visitCount = localStorage.getItem(visitCountKey);
  let fullDay = new Date();

  if (visitCount === null) {
    visitCount = 0;
  } else {
    visitCount = parseInt(visitCount);
  }
  visitCount++;  
  localStorage.setItem(visitCountKey, visitCount);

  let lastVisitDate = localStorage.getItem(lastVisitDateKey);
  if (lastVisitDate !== null) {
    let timeBetweenVisits = fullDay.getTime() - new Date(lastVisitDate).getTime();
    let daysBetweenVisits = Math.ceil(timeBetweenVisits / (1000 * 60 * 60 * 24));

    if (visitCount > 1) {
      if (lastVisitDate !== null) {
        let timeBetweenVisits = fullDay.getTime() - new Date(lastVisitDate).getTime();
        let daysBetweenVisits = Math.ceil(timeBetweenVisits / (1000 * 60 * 60 * 24));
    
        if (daysBetweenVisits < 1) {
          console.log("Back so soon! Awesome!");
        } else {
          document.getElementById('welcome-visitor').textContent = ("You last visited " + daysBetweenVisits + " day" + (daysBetweenVisits > 1 ? "s" : "") + " ago.");
        }
      }
    }
  }
  // Update the last visit date
  localStorage.setItem(lastVisitDateKey, fullDay.toISOString());

  console.log(visitCount);
  console.log(fullDay);
}







updateWelcome();






updateVisitCount();