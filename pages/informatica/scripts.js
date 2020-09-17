/*
	Pega todos os elementos li da lista não ordenada
	retornando um objeto NodeList, 
	de acordo com posicionamento encontrado
	no documento

*/
var sliders  = document.querySelectorAll('#sliders li');
/*
 Define o indice, que será responsavel 
 por informar os slider atual
 */
var current  = 0;
/*
 Retorna o total de itens do slide.
 Diminui menos 1, devido o primeiro
 item começa com zero. 
 Se temos 2 items, sua posição:
 0,1,2
*/
var total    = sliders.length - 1;
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

// Fazendo os cards

const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "20 Melhores Truques de Computador para Tornar sua Vida Mais Fácil | Incrivel",
    duration: "13.07 min",
    thumb: "https://i.ytimg.com/vi/Oz-Ac-3l8qY/hqdefault.jpg",
    video_id: "Oz-Ac-3l8qY"
  },
  {
    title: "Técnico em Informática - Dicas e Sugestões para esse Negócio | Ink Mania",
    duration: "12.51 min",
    thumb: "https://i.ytimg.com/vi/Q6-fO5y9FLA/hqdefault.jpg",
    video_id: "Q6-fO5y9FLA"
  },
  {
    title: "COMO SER UM HACKER: Dicas pra quem quer começar na área da segurança da informação | Gabriel Pato",
    duration: "9.34 min",
    thumb: "https://i.ytimg.com/vi/ff0llG4atYs/hqdefault.jpg",
    video_id: "ff0llG4atYs"
  },
  {
    title: "100 Dicas Concurso PCDF: INFORMÁTICA | Estratégia Concursos",
    duration: "6.52 min",
    thumb: "https://i.ytimg.com/vi/l2A6_1i6KCM/hqdefault.jpg",
    video_id: "gl2A6_1i6KCM"
  },
  {
    title: "Como Estudar INFORMÁTICA Para Concursos | Hugo de Freitas",
    duration: "7.48 min",
    thumb: "https://i.ytimg.com/vi/PmqrZAIiRBI/hqdefault.jpg",
    video_id: "PmqrZAIiRBI"
  },
  {
    title:
      "CRIANDO SUA PRIMEIRA LANDING PAGE COM HTML E CSS | Danki Code",
    duration: "29.09 min",
    thumb: "https://i.ytimg.com/vi/V-uFal1XTVw/hqdefault.jpg",
    video_id: "V-uFal1XTVw"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Ação do Modal

const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

// Criando o card para reproduzir os vídeos
document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    modal.classList.remove("active");
    modal.querySelector("iframe").src = ``;
    document.querySelector("body").style.overflow = "initial";
});

// player

const button = document.querySelector('button')
button.addEventListener('click', function(){
  const audio = document.querySelector('audio')
  audio.play()
  alert('Parabéns você descobriu o Easter egg do site')
})