function novoElemento(tagName, className) {
  const elem = document.createElement(tagName)
  elem.className = className
  return elem
}

function Barreira(reversa = false) {
  this.elemento = novoElemento('div', 'barreira')

  const borda = novoElemento('div', 'borda')
  const corpo = novoElemento('div', 'corpo')
  this.elemento.appendChild(reversa ? corpo : borda)
  this.elemento.appendChild(reversa ? borda : corpo)

  this.setAltura = altura => (corpo.style.height = `${altura}px`)
}

function ParDeBarreira(altura, abertura, x){
  this.elemento = novoElemento('div', 'par-de-barreiras')

  this.superior = new Barreira(true)
  this.inferio = new Barreira(false)
  
}
