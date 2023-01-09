function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    //'#som_{instrumento}'
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento) {

        console.log(evento.code === 'Space');

        //=== vai comparar o valor e o tipo do dado
        if (evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
       
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}