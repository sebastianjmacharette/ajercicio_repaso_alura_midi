// queryselector simple

// function playSonidoPom(){
//     const audio = document.querySelector('#sonido_tecla_pom');
//     audio.play();  // Aquí reproduces el sonido
// }

// document.querySelector('.tecla_pom').onclick = playSonidoPom;  // Asignas la función correctamente

 function playSonido(idElementoAudio){
     const audio = document.querySelector(idElementoAudio);
     audio.play();  // Aquí reproduces el sonido
}

  //document.querySelector('.tecla_pom').onclick = playSonidoPom;  // Asignas la función correctamente
 const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


 while (contador < 9) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1]; //traemos el instrumento de la lista
  const idAudio = `#sonido_${instrumento}`; //string dinamico, can comillas invertidas
  console.log(idAudio)
  tecla.onclick = function (){
    playSonido(idAudio);
 
  };
  contador++;

  
 }