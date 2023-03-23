const container = document.getElementById('container')
const colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange', 'pink']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const SQUARES = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(square) {
    const color = colors[Math.floor(Math.random() * 5)]
    square.style.background = color
}

function removeColor(square) {
    square.style.background = '#1f1f1f'
}