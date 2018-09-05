
var slideIndex = 1;
var slideShowTimer = 10000;
var autoAdvanceFunction;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    clearTimeout(autoAdvanceFunction);
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";

    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    dots[slideIndex-1].className += " w3-white";
    autoAdvanceFunction = setTimeout(carousel, slideShowTimer);
}

autoAdvanceFunction = setTimeout(carousel, slideShowTimer);

function carousel() {
    showDivs(slideIndex += 1);;
}
