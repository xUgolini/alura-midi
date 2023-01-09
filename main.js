function tocaSom(idElementAudio) {
    document.querySelectorAll(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const instrumento = listaDeTeclas[contador].classList[1];

    console.log(instrumento);

    listaDeTeclas[contador].onclick = function(){
        tocaSom();
    };
    contador ++;
    console.log(contador);
}