
$(function () {
    $("body").on("keydown", function (e) {
      let codigo = e.keyCode;
  
      if (codigo == 39) {
        // direita
        $("#morcego").animate({
          left: "+=40",
          right: "-=40",
        });
      } else if (codigo == 37) {
        // esquerda
        $("#morcego").animate({
          right: "+=40",
          left: "-=40",
        });
      } else if (codigo == 38) {
        // cima
        $("#morcego").animate({
          top: "-=40",
          botton: "+=40",
        });
      } else if (codigo == 40) {
        // baixo
        $("#morcego").animate({
          top: "+=40",
          botton: "-=40",
        });
      }
    });
  
    $("[acao-direita]").on("click", function () {
      $("#morcego").animate({
        left: "+=40",
        right: "-=40",
      });
    });
  
    $("[acao-esquerda]").on("click", function () {
      $("#morcego").animate({
        right: "+=40",
        left: "-=40",
      });
    });
  
    $("[acao-sobe]").on("click", function () {
      $("#morcego").animate({
        top: "-=40",
        botton: "+=40",
      });
    });
  
    $("[acao-desce]").on("click", function () {
      $("#morcego").animate({
        top: "+=40",
        botton: "-=40",
      });
    });
  });


  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  const imgs = [];
  let loaded = 0;
  for (let i = 0; i < 10; i++) {
    const img = new Image();
    img.src = `img/zombie-walk-${i + 1}.png`;
    imgs.push(img);
    img.onload = () => {
      loaded++;
      if (loaded == 10) {
        startAnimation(imgs);
      }
    };
  }

  function startAnimation(imgs) {
    let i = 0;
    setInterval(() => {
      const img = imgs[i % imgs.length];
      ctx.clearRect(0, 0, 600, 300);
      ctx.drawImage(img, i * 5, 0, img.width / 2, img.height / 2);
      i++;
    }, 100);
  }


