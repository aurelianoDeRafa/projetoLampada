const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
/** se for com um botão só 
 * 
 const teste = document.getElementById( 'test' );
*/
const lamp = document.getElementById( 'lamp' );

function isLampBroken() {
  /*ele vai returna 1, se a lampa estiver quebrada 
  e -1 se a lampa inteira. entao ela vai ser verdadeira se 
  a imagem estiver quebrada, e false, se nao estiver quebrada */
  
  //ele vai returna true ou false
  return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
  if ( !isLampBroken()) {
    lamp.src = './imagem/ligada.jpg'
  }
  
}

function lampOff() {
  if ( !isLampBroken()) {
    lamp.src = './imagem/desligada.jpg'
  }
  
}

function lampBroken() {
  lamp.src = './imagem/quebrada.jpg'
}

function testeTrueFalse() {
  if(teste.textContent == 'Ligar'){
    lampOn()
    teste.textContent = 'Desligar'
  }else {
    lampOff()
    teste.textContent = 'Ligar'
  }
}


/*O botão vai fica vai fica esperando o click, e quando click 
vai chama a função (lampOn)  */
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken );

/**se fosse com um botao só 
 teste.addEventListener('click', testeTrueFalse);
 * 
 */
