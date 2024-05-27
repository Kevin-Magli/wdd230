// #Hamburger menu
const menuButton = document.getElementById('menu');
const navigation = document.getElementById('navigation');

const hero = document.getElementById('hero');
const sourceSmall = document.getElementById('hero-small');
const sourceMedium = document.getElementById('hero-medium');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuButton.classList.toggle('active');
});

// #Dark Mode button
const darkButton = document.getElementById('dark');

// auto set dark mode based on browser preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkButton.classList.add('active');

  document.body.style.backgroundColor = '#1E1E1E';
  document.body.style.color = '#D4D4D4';
  document.querySelectorAll('a').forEach(link => {
    link.style.color = '#30cfff';
  });
  if (sourceSmall && sourceMedium && hero) {
    sourceSmall.srcset = 'images/hero-small-dark.webp';
    sourceMedium.srcset = 'images/hero-medium-dark.webp';
    hero.src = 'images/hero-large-dark.webp';
  }
  
}

// button config
if (darkButton) {

  darkButton.addEventListener('click', () => {
    darkButton.classList.toggle('active');
    hero.classList.toggle('active'); 
  
    if (darkButton.classList.contains('active')) {
      document.body.style.backgroundColor = '#1E1E1E';
      document.body.style.color = '#D4D4D4';
      document.querySelectorAll('a').forEach(link => {
        link.style.color = '#30cfff';
      })
      if (sourceSmall && sourceMedium && hero) {
        sourceSmall.srcset = 'images/hero-small-dark.webp';
        sourceMedium.srcset = 'images/hero-medium-dark.webp';
        hero.src = 'images/hero-large-dark.webp';
      }
    } else {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.querySelectorAll('a').forEach(link => {
        link.style.color = '';
      })
      if (sourceSmall && sourceMedium && hero) {
        sourceSmall.srcset = 'images/hero-small.webp';
        sourceMedium.srcset = 'images/hero-medium.webp';
        hero.src = 'images/hero-large.webp';
      }
    }
  });
} else {
  console.error('Dark button element not found');
}

// visit count for index page

const siteKey = document.title;
const welcomeKey = document.getElementById('welcome-visitor');
function updateVisitCount() {
  let visitCountKey = 'visits_' + location.hostname + '_' + siteKey; 
  let visitCount = localStorage.getItem(visitCountKey);

  if (visitCount === null) {
    visitCount = 0;
  } else {
    visitCount = parseInt(visitCount);
  }
  visitCount++;
  localStorage.setItem(visitCountKey, visitCount);
  if (document.getElementById('visits')) {
    document.getElementById('visits').textContent = visitCount;
  }
  if (welcomeKey) {
    updateWelcome();
  } 
  console.log(visitCount);
}


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