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
    title: "Singapura dá 💰 para usuários de Apple Watch, telha solar aprovada no Brasil  | Tecmundo",
    duration: "8.21 min",
    thumb: "https://i.ytimg.com/vi/wXi04aZgSBw/hqdefault.jpg",
    video_id: "wXi04aZgSBw"
  },
  {
    title: "Os 5 celulares mais comprados pelos leitores do TecMundo em maio 2020 | Tecmundo",
    duration: "4.06 min",
    thumb: "https://i.ytimg.com/vi/2BsEoUnQDts/hqdefault.jpg",
    video_id: "2BsEoUnQDts"
  },
  {
    title: "Android 11: as principais novidades do novo Android! | Tecmundo",
    duration: "6.05 min",
    thumb: "https://i.ytimg.com/vi/KSfT4j25-i0/hqdefault.jpg",
    video_id: "KSfT4j25-i0"
  },
  {
    title: "Samsung Galaxy S10+: Unboxing e apresentação | Tecmundo",
    duration: "9.28 min",
    thumb: "https://i.ytimg.com/vi/INZuVJu1CLc/hqdefault.jpg",
    video_id: "INZuVJu1CLc"
  },
  {
    title: "Os smartphones ainda têm pra onde evoluir? | Tecmundo",
    duration: "6 min",
    thumb: "https://i.ytimg.com/vi/yJSWNkgIlF0/hqdefault.jpg",
    video_id: "yJSWNkgIlF0"
  },
  {
    title:
      "Samsung Galaxy S10+: Review/Análise | Tecmundo",
    duration: "19.10 min",
    thumb: "https://i.ytimg.com/vi/GXbsEEIAX7A/hqdefault.jpg",
    video_id: "GXbsEEIAX7A"
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