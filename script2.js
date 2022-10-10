var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
	showSlides2(slideIndex2 += n);
}

// function currentSlide(n) {
// 	showSlides(slideIndex = n);
// }

function showSlides2(n) {
	var i;
	var slides2 = document.getElementsByClassName("mySlides2");
	// var dots = document.getElementsByClassName("dot");

	if (n > slides2.length) {
		slideIndex2 = 1
	}
	if (n < 1) {
		slideIndex2 = slides.length
	}
	for (i=0; i < slides2.length ; i++){
		slides2[i].style.display = "none";
	}
	// for (i = 0; i < dots.length; i++) {
	// 	dots[i].className = dots[i].className.replace("active","");
	// }
	slides2[slideIndex2-1].style.display = "block";
	// dots[slideIndex-1].className+="active";
}

function slowScroll (id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
	return false;
}

