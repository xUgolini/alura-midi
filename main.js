function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador ++;
    console.log(contador);
}