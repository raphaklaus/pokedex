let nido = document.querySelector('#nido');
let nidoTranslatingAnimation = document.querySelector('.nido-translating');

nidoTranslatingAnimation.addEventListener('animationend', function(a){
  if (a.animationName === 'nido-intro-animation')
    nido.classList.add('nido-attack');
}, false)
