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
  console.log(visitCount);
}


const baseURL = "https://kevin-magli.github.io/wdd230/";
const linksURL = "https://kevin-magli.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    displayLinks(data);
  } else {
    console.error('Error: ' + response.statusText);
  }
}


function displayLinks(data) {
  const container = document.getElementById('links-container');
  container.innerHTML = '';

  data.weeks.forEach(week => {
    const weekHeader = document.createElement('h3');
    weekHeader.textContent = week.week;

    const linksText = week.links.map(link => `<a href="${baseURL + link.url}">${link.title}</a>`).join(' | ');

    const weekLinks = document.createElement('p');
    weekLinks.innerHTML = linksText;

    container.appendChild(weekHeader);
    container.appendChild(weekLinks);
  });
}


updateVisitCount();

getLinks();