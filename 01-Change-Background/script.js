const button = document.querySelector('button')
const body = document.querySelector('body')

body.style.backgroundColor = 'green'

const colors = ['red', 'green', 'violet', 'blue']
button.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor () {
  const randomColorIndex = parseInt(Math.random() * colors.length)
  body.style.backgroundColor = colors[randomColorIndex]
}
