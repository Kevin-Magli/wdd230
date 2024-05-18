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
    link.style.color = '#3498db';
  });
}

// button config
darkButton.addEventListener('click', () => {
  darkButton.classList.toggle('active');
  hero.classList.toggle('active');

  if (darkButton.classList.contains('active')) {
    document.body.style.backgroundColor = '#1E1E1E';
    document.body.style.color = '#D4D4D4';
    document.querySelectorAll('a').forEach(link => {
      link.style.color = '#3498db';
    })
    sourceSmall.srcset = 'images/hero-small-dark.webp';
    sourceMedium.srcset = 'images/hero-medium-dark.webp';
    hero.src = 'images/hero-large-dark.webp';
  } else {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.querySelectorAll('a').forEach(link => {
      link.style.color = '';
    })
    sourceSmall.srcset = 'images/hero-small.webp';
    sourceMedium.srcset = 'images/hero-medium.webp';
    hero.src = 'images/hero-large.webp';
  }
})