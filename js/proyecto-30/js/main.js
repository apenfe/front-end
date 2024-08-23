window.addEventListener("DOMContentLoaded", (event) => {

    let followers = document.querySelectorAll(".socials__number");
    let counter = 0;

    followers.forEach((follower) => {

        let max = parseInt(follower.getAttribute("data-target"));

        let inter = setInterval(() => { // se podria decir que se estan creando 4 hilos en paralelo

            let actual = parseInt(follower.innerHTML);
            counter = max / 400;

            if(actual > max){
                follower.innerHTML = max;
                clearInterval(inter);
            }else{
                follower.innerHTML = Math.ceil(counter + actual);
            }

        }, 10);

    });
 
});