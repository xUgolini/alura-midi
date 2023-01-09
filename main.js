function tocaSom(idElementAudio) {
    document.querySelectorAll(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_pom');
    };
    contador ++;
    console.log(contador);
}