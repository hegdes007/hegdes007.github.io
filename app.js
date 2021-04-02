// MOVEMENT ANIMATION
const card = document.querySelector('.card');
const container3d = document.querySelector('.container3d');
const info = document.querySelector('.info');
const darshan = document.querySelector('.darshan img');
const social = document.querySelector('.social');

container3d.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
});

// ANIMATE IN
container3d.addEventListener("mouseenter", (e) => {
  info.style.transform = 'translateZ(75px)';
  darshan.style.transform = 'translateZ(90px) rotate(-4deg)';
  social.style.transform = 'translateZ(100px)';
  card.style.transition = 'none';
});

// ANIMATE OUT
container3d.addEventListener("mouseleave", (e) => {
  info.style.transform = 'translateZ(0px)';
  darshan.style.transform = 'translateZ(0px)';
  social.style.transform = 'translateZ(0px)';
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


// TYPEWRITING EFFECT
const texts = ['Engineer', 'Web Developer', 'Cricket Lover'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 500)
})();

// DARK MODE
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.dark-mode');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('dark');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('dark');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off  
  } else {
    disableDarkMode();
  }
});
