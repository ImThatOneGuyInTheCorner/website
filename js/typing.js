const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "eeaaaaaaaaaaaaaa."
let idx = 1
let speed = 300 / speedEl.value
speedEl.addEventListener('input', (element) => {
    speed = 300 / element.target.value
})

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length){
        idx = 1
    }
    setTimeout(writeText, speed)
}

async function generateJoke(){
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json'}
    })

    const data = await response.json()
    jokeEl.innerHTML = data.joke
}