// queryselector simple

// function playSonidoPom(){
//     const audio = document.querySelector('#sonido_tecla_pom');
//     audio.play();  // Aquí reproduces el sonido
// }

// document.querySelector('.tecla_pom').onclick = playSonidoPom;  // Asignas la función correctamente

function playSonido(idElementoAudio) {
  const audio = document.querySelector(idElementoAudio);
  audio.play(); // Aquí reproduces el sonido
}

//document.querySelector('.tecla_pom').onclick = playSonidoPom;  // Asignas la función correctamente
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador< listaDeTeclas.length; contador++) {
  //inicializacion, la condicion y el invremento
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1]; //traemos el instrumento de la lista
  console.log('numero de ID:' + contador)
  const idAudio = `#sonido_${instrumento}`; //string dinamico, can comillas invertidas
  console.log(idAudio);
  tecla.onclick = function () {
    playSonido(idAudio);
  };
  tecla.onkeydown = function(evento){


    if (evento.code === 'Space' || evento.code === 'Enter'){
      tecla.classList.add('activa');
    }
    console.log(evento.code === 'Space' || evento.code === 'Enter')
  }
  tecla.onkeyup = function  (){
    tecla.classList.remove('activa');
  }
  }

 