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
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    video_id: "GykTLqODQuU"
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
    video_id: "rAzHvYnQ8DY"
  },
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
    video_id: "ghTrp1x_1As"
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
    video_id: "GSqR2i-Pq6o"
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
    video_id: "2alg7MQ6_sI"
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