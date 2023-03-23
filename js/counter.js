const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '2'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        // const increment = target / 200
        const increment = (target - c) / 60

        if (c < target) {
            counter.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})