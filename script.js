/* Cookies & Cookies — interações leves */
(function () {
  "use strict";

  /* -----------------------------------------------------------
     WhatsApp: centraliza o número num único lugar.
     Enquanto o cliente não passar o número, os botões caem no
     Instagram. Assim que tiver o número, preencha WA_NUMBER
     (formato internacional, só dígitos: 55 + DDD + número).
     ----------------------------------------------------------- */
  var WA_NUMBER = "5561996467543"; // Cookies & Cookies Brasília
  var WA_MESSAGE = "Oi! Vim pelo site e quero pedir cookies 🍪";
  var INSTAGRAM_URL = "https://www.instagram.com/cookiesecookies.df/";

  function waHref() {
    if (!WA_NUMBER) return INSTAGRAM_URL;
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MESSAGE);
  }

  var target = waHref();
  var opensExternally = target !== "#";
  document.querySelectorAll("[data-wa-link]").forEach(function (el) {
    // âncoras internas (#como-pedir) continuam levando à seção;
    // só troca as que apontam para "#" ou já são links diretos.
    var href = el.getAttribute("href");
    if (href === "#" || href === "" || href === null) {
      el.setAttribute("href", target);
      if (opensExternally) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    }
  });

  /* ----------------------------------------------------------- */
  /* Header ganha sombra ao rolar                                */
  /* ----------------------------------------------------------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------------- */
  /* Scroll reveal                                               */
  /* ----------------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ----------------------------------------------------------- */
  /* Hero: vídeo tocando sozinho, em loop                        */
  /*                                                              */
  /* muted + playsinline são o que os navegadores exigem para     */
  /* permitir autoplay; sem isso o mobile recusa. Mesmo assim o   */
  /* autoplay pode ser negado (economia de dados, bateria fraca,  */
  /* preferência do usuário), então só trocamos a imagem pelo     */
  /* vídeo depois que o play() resolve de fato.                   */
  /* ----------------------------------------------------------- */
  (function initHeroVideo() {
    var frame = document.querySelector("[data-hero-frame]");
    var video = document.querySelector("[data-hero-video]");
    if (!frame || !video) return;

    // Fallback 1: usuário pediu menos movimento.
    if (reduced) return;
    // Fallback 2: navegador não toca MP4/H.264.
    if (!video.canPlayType || !video.canPlayType("video/mp4")) return;

    function showFallback() { frame.classList.remove("video-ready"); }

    function showVideo() {
      frame.classList.add("video-ready");

      // Fora da tela o vídeo não precisa decodificar: poupa CPU e bateria
      // enquanto o visitante lê o resto da página.
      //
      // Observa o FRAME, não o <video>: o vídeo fica display:none até aqui,
      // e um elemento de área zero é reportado como "fora da tela" — o
      // observer pausaria o vídeo e abortaria o play() que acabou de sair.
      if (!("IntersectionObserver" in window)) return;
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { video.play().catch(showFallback); }
          else { video.pause(); }
        });
      }, { threshold: 0.1 }).observe(frame);
    }

    var attempt = video.play();
    if (attempt && typeof attempt.then === "function") {
      // Fallback 3: autoplay negado pelo navegador.
      attempt.then(showVideo, showFallback);
    } else {
      showVideo(); // navegadores antigos: play() não devolve promise
    }
    video.addEventListener("error", showFallback, { once: true });
  })();

  /* ----------------------------------------------------------- */
  /* Ano no rodapé                                               */
  /* ----------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ----------------------------------------------------------- */
  /* Status "aberto agora" (horário de Brasília, sem 2ª feira)   */
  /* ----------------------------------------------------------- */
  var statusEl = document.querySelector("[data-open-status]");
  if (statusEl) {
    try {
      var now = new Date();
      // horário local do visitante; Brasília costuma ser o mesmo fuso
      var day = now.getDay(); // 0 dom ... 6 sáb
      var minutes = now.getHours() * 60 + now.getMinutes();
      var openMin = 13 * 60 + 30;
      var closeMin = 21 * 60 + 30;
      var isClosedDay = day === 1; // segunda
      var isOpen = !isClosedDay && minutes >= openMin && minutes < closeMin;

      statusEl.textContent = isOpen
        ? "Aberto agora — até 21h30"
        : "Fechado agora · Terça a domingo, 13h30–21h30";
      statusEl.style.color = isOpen ? "#1fa855" : "";
    } catch (e) {
      /* mantém o texto padrão do HTML */
    }
  }
})();
