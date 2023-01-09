function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if (elemento != null & elemento.localName === 'audio') {

        elemento.play();
    }
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
      
        //=== vai comparar o valor e o tipo do dado
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
       
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}