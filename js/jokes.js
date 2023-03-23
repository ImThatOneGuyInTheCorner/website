const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementId('jokeBtn')

generateJoke()

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {Acccept: 'application/json'}
    })

    const data = await response.json()
    jokeEl.innerHTML = data.joke
}