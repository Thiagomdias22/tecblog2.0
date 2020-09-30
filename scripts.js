function mudarImgFooter(){
  
  footer = document.getElementById('form');

    img = ''

    switch(window.location.pathname.split("/").pop()){
        case 'cadastro.html': img = '../../assets/fundo1.gif'; break;
        case 'contato.html': img = '../../assets/fundo5.gif'; break;
    }

    footer.style.backgroundImage = `url(${img})`;
}

window.onload = mudarImgFooter;

function pegarNomeCadastro() {
  var valor = "";

  valor = document.getElementById('nome').value;
  alert (`${valor}`+' seu cadastro foi realizado com sucesso')
}

function pegarNomeContato() {
  var valor = "";

  valor = document.getElementById('nome').value;
  alert (`${valor}`+' sua mensagem foi enviada com sucesso')
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  }

/*
**** Criando o Scroll****
*/

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollTo(element) {
   document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  scrollTo(".container")
}

/*
**** Criando o Player ****
*/

// player
function play(){
  const audio = document.querySelector('audio')
  audio.play()
  alert('Parabéns você descobriu o Easter egg do site')
}
