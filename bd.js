/*
**** Criando o Banco com os vídeos ****
*/

function initData() {
    preencher();
}

function VideoIndex() {

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

}

function VideoJogos() {

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
}

function VideoInformatica() {
    
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
}

function VideoEletronicos() {
    
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
}

function VideoCelulares() {
    
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
}

function preencher() {
    page = window.location.pathname.split("/").pop();
  
    switch (page) {
      case ' ': VideoIndex(); break;
      case 'index.html': VideoIndex(); break;
      case 'jogos.html': VideoJogos(); break;
      case 'informatica.html': VideoInformatica(); break;
      case 'eletronicos.html': VideoEletronicos(); break;
      case 'celulares.html': VideoCelulares(); break;
    }
}

window.onload = initData;