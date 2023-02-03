//============== Pic Slides =============//
//Question
let qIndex = 1;
showSlides(qIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(qIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(qIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {qIndex = 1}
  if (n < 1) {qIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[qIndex-1].style.display = "block";
  dots[qIndex-1].className += " active";
}

//============================================================//