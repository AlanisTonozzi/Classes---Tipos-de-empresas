const p = document.getElementById("p")
const botao = document.querySelector("#botao")
const tchau = document.querySelector("#tchau")
// const reset = document.querySelector("#reset")
const div = document.querySelector("#div")

const escreve = () => { 
  p.textContent = "Hello World!"
  showResetButton()
}
const daTchau = () => { 
  p.textContent = "Bye World!"
  showResetButton()
}
const resetAll = () => { 
  p.textContent = ""
  removeResetButton()
}

//adicionam classes
const adicionaClasseEnviar = () => botao.classList.add("enviar")
const adicionaClasseTchau = () => tchau.classList.add("tchau")
//removem classes
const removeClasseEnviar = () => botao.classList.remove("enviar")
const removeTchau = () => reset.classList.remove("tchau")
//remove classes eventos
botao.addEventListener("focusout", removeClasseEnviar)
tchau.addEventListener("focusout",removeTchau)
//adiciona classes eventos
botao.addEventListener("click", adicionaClasseEnviar)
tchau.addEventListener("click",adicionaClasseTchau)
//escreve as coisas
botao.addEventListener("click", escreve)
tchau.addEventListener("click", daTchau)
// reset.addEventListener("click",resetAll)
div.addEventListener("focusout", resetAll)


 // Códigos do lucas

/**
 * Retorna <button id="reset" class="reset">Reset</button>
 * Esse botão também escuta pelo evento click com uma função que limpa o texto do elemento com id "p"
 */
const createResetButton = () => {
  const button = document.createElement('button')
  button.classList.add('reset')
  button.setAttribute('id', 'reset')
  button.appendChild(document.createTextNode('Reset'))
  button.addEventListener('click', resetAll)
  return button
}

/**
 * Recebe um botão e coloca ele junto dos outros botões no DOM.
 */
const appendButton = (btn) => {
  document.querySelector('#div').appendChild(btn)
}

/**
 * Remove o botão reset do DOM.
 */
const removeResetButton = () => {
  const resetButton = document.querySelector('#reset')
  if (resetButton) resetButton.remove()
}

/**
 * Se o botão reset já não estiver no DOM, adiciona ele.
 */
const showResetButton = () => {
  
  // Se o botão já existe, não precisa fazer nada
  const resetButton = document.querySelector('#reset')
  if (resetButton) return undefined
  
  // Se ele não existe, cria e adiciona no DOM
  appendButton(createResetButton())
  
}


