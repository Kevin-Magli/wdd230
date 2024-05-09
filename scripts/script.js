// Hamburger menu
const menuButton = document.getElementById('menu');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuButton.classList.toggle('active');
});

// Dark Mode button
const darkButton = document.getElementById('dark');

darkButton.addEventListener('click', () => {
  darkButton.classList.toggle('active');

  if (darkButton.classList.contains('active')) {
    document.body.style.backgroundColor = '#1E1E1E';
    document.body.style.color = '#D4D4D4';
    document.querySelectorAll('a').forEach(link => {
      link.style.color = '#3498db';
    })
  } else {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.querySelectorAll('a').forEach(link => {
      link.style.color = '';
    })
  }
})