
let imagem = document.querySelector(".img-2")

setInterval(function () {
    if (imagem.style.opacity == 1) {
        imagem.style.opacity = 0
    } else {
        imagem.style.opacity = 1

    }

}, 3000);