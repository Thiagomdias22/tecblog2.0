function slider() {
  var sliders = document.querySelectorAll('#sliders li');
  /*
  Define o indice, que será responsavel 
  por informar os slider atual
  */
  var current = 0;
  /*
  Retorna o total de itens do slide.
  Diminui menos 1, devido o primeiro
  item começa com zero. 
  Se temos 2 items, sua posição:
  0,1,2
  */
  var total = sliders.length - 1;
  /*
    Executaremos uma função num intervalo de tempo.
    E defiremos que executará em 2000 milesegundos
  */
  window.setInterval(function(){
    /*
    a variavel index será responsável pela
    posição do elemento que iremos remover a classe
    */
    var index =  current ? current - 1 : total;
    /*Pega o elemento pra remover a classe*/
    sliders[index].className  = '';
    /*Adiciona a classe no elemento atual*/
    sliders[current].className  = 'slider-active';
    /*Calcular a posição do proximo elemento que será exibido*/
    current = current >= total ? 0 : current+1; 	
  }, 3000);

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

window.onload = slider();
