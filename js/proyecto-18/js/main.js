window.addEventListener("DOMContentLoaded", (event) => {

    let cronoMin = document.querySelector('.crono__min');
    let cronoSec = document.querySelector('.crono__sec');

    let btnStart = document.querySelector('.layout__btn-start');
    let btnStop = document.querySelector('.layout__btn-stop');
    let btnReset = document.querySelector('.layout__btn-reset');

    let minutes = 0;
    let seconds = 0;
    let time = null;

    let start = () => {

        if(!time){

            time = setInterval(() => {

                seconds++;

                if(seconds==60){
                    minutes++;
                    seconds=0;
                }

                if(minutes >= 60){
                    alert("Has excedido el tiempo maximo de 60 minutos.")
                    clearInterval(time);
                }

                if(minutes < 10){
                    cronoMin.innerHTML = 0;
                    cronoMin.innerHTML += minutes;

                }else{
                    cronoMin.innerHTML = minutes;
                }

                if(seconds < 10){
                    cronoSec.innerHTML = 0;
                    cronoSec.innerHTML += seconds;
                }else{
                    cronoSec.innerHTML = seconds;
                }

                console.log(minutes+":"+seconds);

            },1000);

        }

    };

    let stop = () => {

        if(time){
            clearInterval(time);
            time = null;
        }

    };

    let reset = () => {

        clearInterval(time);
        time = null;
        seconds = 0;
        minutes = 0;
        cronoSec.innerHTML = seconds + "0";
        cronoMin.innerHTML = minutes + "0";

    };

    btnStart.addEventListener('click', () => {
        start();
    });

    btnStop.addEventListener('click', () => {

        stop();

    });

    btnReset.addEventListener('click', () => {

        reset();

    });

});