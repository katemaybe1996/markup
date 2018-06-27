
var menuElem = document.getElementById('iconsHeader');
    var titleElem = menuElem.querySelector('.imgMenu');

    titleElem.onclick = function toggleClass(){

    	if   (  document.getElementById('menuT').style.display == "none" )
             {  document.getElementById('menuT').style.display = "block";   }
        else {  document.getElementById('menuT').style.display = "none"; }
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}