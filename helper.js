//============== Pic Slides =============//
//Question
var qInd = 1;
showSlides(qInd);

// Next/previous controls
function plusSlides(n) {
  showSlides(qInd += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(qInd = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {qInd = 1}
  if (n < 1) {qInd = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[qInd-1].style.display = "block";
  dots[qInd-1].className += " active";
}

//============================================================//
//============== Nav Dropdown Small screens =============//
function navDrop(){
  var x = document.getElementById("links");
  if (x.className == '') {
    x.className = "down";
  }
  else {
    x.className = "";
  }
}