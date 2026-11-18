document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slide');
  if (slides.length < 2) return;
  var i = 0;
  setInterval(function () {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 5000);
});
