const button = document.querySelector('button')
const body = document.querySelector('body')
const span = document.getElementById('hex-value')
body.style.backgroundColor = 'white'

const colors = ['red', 'green', 'violet', 'blue']
button.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor () {
  const randomColorIndex = parseInt(Math.random() * colors.length)
  body.style.backgroundColor = colors[randomColorIndex]
  span.textContent = colors[randomColorIndex]
}
