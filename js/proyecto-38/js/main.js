window.addEventListener("DOMContentLoaded", (event) => {

    let audios = document.querySelectorAll(".audios__item");
    let btns = document.querySelectorAll(".sounds__btn");

    let start = () => {

        btns.forEach((btn) => {

            btn.addEventListener("click", () => {

                let id = btn.getAttribute("data-audio");
                let audio = document.querySelector("#" + id);

                stop();

                audio.play();
                audio.volume = 0.3;

            });

        });

    }

    let stop = () => {

        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

    }

    start();

});