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
    title: "TÔ DANDO MUITA BALA DE RAZE E JETT NO VALORANT | Tecnosh",
    duration: "14.50 min",
    thumb: "https://i.ytimg.com/vi/7gytQCLaBeE/hqdefault.jpg",
    video_id: "7gytQCLaBeE"
  },
  {
    title: "Quando o SOUZONES Volta a Jogar de JETT (VALORANT Jett Gameplay) | Souzones",
    duration: "19.48 min",
    thumb: "https://i.ytimg.com/vi/FgjS_jc4UHo/hqdefault.jpg",
    video_id: "FgjS_jc4UHo"
  },
  {
    title: "COMO NÃO JOGAR FALL GUYS! | Alanzoka",
    duration: "11.13 min",
    thumb: "https://i.ytimg.com/vi/G4JaDtAL7E0/hqdefault.jpg",
    video_id: "G4JaDtAL7E0"
  },
  {
    title: "NOITADA DO ALANZOKA COM OS AMIGOS NO FALL GUYS | Alanzoka Brazil Baby",
    duration: "12.41 min",
    thumb: "https://i.ytimg.com/vi/lHx-Jt6cCwQ/hqdefault.jpg",
    video_id: "lHx-Jt6cCwQ"
  },
  {
    title: "CHEGUEI NO GTA AGORA, O QUE FAZER? (Como jogar GTA Online - Introdução para iniciantes) | WyzeWolf",
    duration: "23.27 min",
    thumb: "https://i.ytimg.com/vi/tc-Rbq3wd3g/hqdefault.jpg",
    video_id: "tc-Rbq3wd3g"
  },
  {
    title:"GTA V #1 - O INÍCIO ÉPICO!!! (GTA 5 em Português PT-BR) | BRKsEDU",
    duration: "31.26 min",
    thumb: "https://i.ytimg.com/vi/I6-Ar6J_5bg/hqdefault.jpg",
    video_id: "I6-Ar6J_5bg"
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