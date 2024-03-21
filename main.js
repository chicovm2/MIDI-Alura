function tocarSom (seletorAudio) {    
    const elemento = document.querySelector(seletorAudio).play();
    if (elemento === null) {
        alert('Elemento Não encontrado')
    }
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;     // template string
    tecla.onclick = function () {
        tocarSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
