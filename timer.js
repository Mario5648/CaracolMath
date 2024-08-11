let interval;

function startTimer(display) {
    let timer = 0, minutes, seconds;
    interval = setInterval(function () {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        timer++; // Increment the timer each second
    }, 1000);
}