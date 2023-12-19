onmessage = function ({ data }) {
    let { seconds, minutes, hours } = data

    const incrementTimes = () => {
        seconds++

        if (seconds === 60) {
            seconds = 0
            minutes++
        }

        if (minutes === 60) {
            minutes = 0
            hours++
        }

        postMessage({ seconds, minutes, hours })
    }

    setInterval(incrementTimes, 1000);
}