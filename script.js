const heroSwitch = document.getElementById('heroSwitch');
const switchElement = document.getElementById('switch');
const heroImage = document.querySelector('.hero_image');

heroSwitch.addEventListener('click', function() {
  switchElement.classList.toggle('freedom');
  heroSwitch.classList.toggle('freedom');

  heroImage.classList.toggle('freedom');
});
