const card = document.querySelector('.card');
const carFront= document.getElementsByClassName('card-front');
card.addEventListener('click', function() {
  card.classList.toggle('is-flipped');
});