const opciones = ['piedra', 'papel', 'tijera'];

const botones = document.querySelectorAll('#opciones button');
botones.forEach(boton => {
  boton.addEventListener('click', jugar);
});

function jugar(event) {
  const eleccionUsuario = event.target.id;
  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
  const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
  
  mostrarResultado(eleccionUsuario, eleccionComputadora, resultado);
}

function determinarGanador(eleccionUsuario, eleccionComputadora) {
  if (eleccionUsuario === eleccionComputadora) {
    return 'empate';
  } else if (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') {
    return 'usuario';
  } else if (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') {
    return 'usuario';
  } else if (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel') {
    return 'usuario';
  } else {
    return 'computadora';
  }
}

function mostrarResultado(eleccionUsuario, eleccionComputadora, resultado) {
  const mensaje = document.querySelector('#mensaje');
  mensaje.innerHTML = `Elegiste ${eleccionUsuario}, la computadora eligió ${eleccionComputadora}.`;
  
  if (resultado === 'empate') {
    mensaje.innerHTML += ' ¡Es un empate!';
  } else if (resultado === 'usuario') {
    mensaje.innerHTML += ' ¡Ganaste!';
  } else {
    mensaje.innerHTML += ' ¡Perdiste!';
  }
}
// mejorar algunso aspectos de funcionalidad
// mejorar optimizacion de codigo