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
    title: "Importação de eletrônicos: tudo o que você precisa saber | Tecmundo",
    duration: "4.29 min",
    thumb: "https://i.ytimg.com/vi/bZqIOAOk-0M/hqdefault.jpg",
    video_id: "bZqIOAOk-0M"
  },
  {
    title: "FINALMENTE PREÇO E DATA DO PS5! E JÁ ESGOTOU A PRE-VENDA! | Ei Nerd",
    duration: "7.33 min",
    thumb: "https://i.ytimg.com/vi/phxigzQFN_I/hqdefault.jpg",
    video_id: "phxigzQFN_I"
  },
  {
    title: "Preço do PS5 no Brasil, Xbox Series X chegando, lançamentos da Apple e +  | Tudo Celular",
    duration: "10.30 min",
    thumb: "https://i.ytimg.com/vi/raxPZR-yDME/hqdefault.jpg",
    video_id: "raxPZR-yDME"
  },
  {
    title: "Qual Smart TV comprar? Conheça os diferentes sistemas operacionais | Tecmundo",
    duration: "6.49 min",
    thumb: "https://i.ytimg.com/vi/DslVZyEwTLg/hqdefault.jpg",
    video_id: "DslVZyEwTLg"
  },
  {
    title: "SMARTPHONES CUSTO BENEFÍCIO, TOP DE LINHA E BARATO em 2020 | André Martins",
    duration: "15.21 min",
    thumb: "https://i.ytimg.com/vi/DTT2uxWH62Q/hqdefault.jpg",
    video_id: "DTT2uxWH62Q"
  },
  {
    title:
      "7 DICAS PARA VOCÊ SUBIR PARA MESTRE NO FREE FIRE! | Laoud Bradoock",
    duration: "12.57 min",
    thumb: "https://i.ytimg.com/vi/2-lAFjkHG6o/hqdefault.jpg",
    video_id: "2-lAFjkHG6o"
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