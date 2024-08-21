window.addEventListener("DOMContentLoaded", event => {

    let emoji = document.querySelector(".emojis__emoji");

    let emojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','🙅‍♂️','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️'];

    let index = 0;

    emoji.addEventListener("mouseout", () => {

        let random = Math.ceil(Math.random() * emojis.length);

        emoji.innerHTML = emojis[random];

    });

});