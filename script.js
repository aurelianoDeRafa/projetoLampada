/**
 * Aqui vamos pegar os botões que liga de desliga
 */
const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );

/** se for com um botão só 
 * 
   const teste = document.getElementById( 'test' );
*/

/**
 * aqui vamos pegar o (id) da imagem, para poder trocar as imagem desligada para ligada 
 */
const lamp = document.getElementById( 'lamp' );

function isLampBroken() {
  /*ele vai retornar 1, se a lâmpada estiver quebrada, 
  e -1 se a lampa inteira. entao ela vai ser verdadeira se 
  a imagem estiver quebrada, e false, se nao estiver quebrada */
  
  //ele vai retornar true ou false
  return lamp.src.indexOf ('quebrada') > -1
}

/**
 * essa função vai ligar lâmpada .
 * 
 * Mas primeiro ela vai verificar se a lâmpada está quebrada, caso não esteja, ela vai ligar
 */
function lampOn() {
  if ( !isLampBroken()) {
    lamp.src = './imagem/ligada.jpg'
  }
  
}

/**
 * essa função vai  desligar .
 * 
 *Mas primeiro ela vai verificar se a lâmpada está quebrada, caso nao esteja, ela vai desligar
 */
function lampOff() {
  if ( !isLampBroken()) {
    lamp.src = './imagem/desligada.jpg'
  }
  
}

/**
 * aqui, quando voce clica duas vezes na lâmpada ( desligada ou ligada) , ela vai quebrar
 */
function lampBroken() {
  lamp.src = './imagem/quebrada.jpg'
}


/**Essa função vai funcionar se no html estiver so um botão */
function testeTrueFalse() {
  if(teste.textContent == 'Ligar'){
    lampOn()
    teste.textContent = 'Desligar'
  }else {
    lampOff()
    teste.textContent = 'Ligar'
  }
}

/**aqui adicionamos atividades no botões 
 * 
/*O botão vai fica  esperando o click, e quando click 
 *vai chama a função ex: (lampOn)  */
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn); //aqui você vai passa o mouse por cime e vai ligar a lâmpada
lamp.addEventListener('mouseleave', lampOff);//aqui você vai passa o mouse por cime e vai desligar a lâmpada
lamp.addEventListener('dblclick', lampBroken );

/**se fosse com um botao só 
 teste.addEventListener('click', testeTrueFalse);
 * 
 */
