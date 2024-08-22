window.addEventListener("DOMContentLoaded", (event) => {

    let left = document.querySelector(".main__article--left");
    let right = document.querySelector(".main__article--right");

    left.addEventListener("mouseenter", ()=>{

        left.classList.add("active");
        right.classList.add("inactive");
        
    });

    left.addEventListener("mouseleave", ()=>{

        left.classList.remove("active");
        right.classList.remove("inactive");
        
    });

    right.addEventListener("mouseenter", ()=>{
        left.classList.add("inactive");
        right.classList.add("active");
    });

    right.addEventListener("mouseleave", ()=>{

        left.classList.remove("inactive");
        right.classList.remove("active");
        
    });

});