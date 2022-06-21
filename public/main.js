const colorUrlLookUp = {
  blackShirt : 'img/tshirts-colors/tshirt-black.png',
  peachShirt : 'img/tshirts-colors/tshirt-peach.png',
  pearShirt : 'img/tshirts-colors/tshirt-pear.png'
}

const artUrlLookUp = {
  artworkOne : 'img/backgrounds/background-1.png',
  artworkTwo : 'img/backgrounds/background-2.png',
  artworkThree : 'img/backgrounds/background-3.png'
}

const accentUrlLookUp = {
  accentOne : 'img/foreground/foreground-1.png',
  accentTwo : 'img/foreground/foreground-2.png',
  accentThree : 'img/foreground/foreground-3.png'
}

// for tshirt color option swap
document.querySelectorAll('#colorSection .tshirtOptions').forEach(element => {
  element.addEventListener("click", colorOptions)
})

function colorOptions () {
  const labelElement = this.parentNode
  const radioInput = labelElement.querySelector('input')
  const colorName = radioInput.value
  const tshirtUrl = colorUrlLookUp[colorName]
  document.querySelector(".displayShirt").src=tshirtUrl
}

// for art option swap
document.querySelectorAll('#artSection .tshirtOptions').forEach(element => {
  element.addEventListener("click", artOptions)
})

function artOptions () {
  const labelElement = this.parentNode
  const radioInput = labelElement.querySelector('input')
  const artName = radioInput.value
  const artUrl = artUrlLookUp[artName]
  document.querySelector(".displayArt").src=artUrl
}

// for art option swap
document.querySelectorAll('#accentSection .tshirtOptions').forEach(element => {
  element.addEventListener("click", accentOptions)
})

function accentOptions () {
  const labelElement = this.parentNode
  const radioInput = labelElement.querySelector('input')
  const artName = radioInput.value
  const artUrl = artUrlLookUp[artName]
  document.querySelector(".displayArt").src=artUrl
}

// for art option swap
document.querySelectorAll('#accentSection .tshirtOptions').forEach(element => {
  element.addEventListener("click", accentOptions)
})

function accentOptions () {
  const labelElement = this.parentNode
  const radioInput = labelElement.querySelector('input')
  const artName = radioInput.value
  const artUrl = artUrlLookUp[artName]
  document.querySelector(".displayArt").src=artUrl
}

// for accent option swap
document.querySelectorAll('#accentSection .tshirtOptions').forEach(element => {
  element.addEventListener("click", accentOptions)
})

function accentOptions () {
  const labelElement = this.parentNode
  const radioInput = labelElement.querySelector('input')
  const accentName = radioInput.value
  const accentUrl = accentUrlLookUp[accentName]
  document.querySelector(".displayAccents").src=accentUrl
}

// adding the other option to render
if (designEjsVar) {
  const tshirtUrl = colorUrlLookUp[designEjsVar.shirtColor]
  document.querySelector(".displayShirt").src=tshirtUrl

  const artUrl = artUrlLookUp[designEjsVar.art]
  document.querySelector(".displayArt").src=artUrl

  const accentUrl = accentUrlLookUp[designEjsVar.accents]
  document.querySelector(".displayAccents").src=accentUrl
}