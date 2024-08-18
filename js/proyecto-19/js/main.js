window.addEventListener("DOMContentLoaded", event => {

    // definir variables con DOM
    let articles = document.querySelector(".layout__articles");
    let  title = document.querySelector("#title");
    let  subtitle = document.querySelector("#subtitle");
    let  description = document.querySelector("#description");

    let form = document.querySelector(".form__create");

    let new_articles = [];

    function createArticle(){

        form.addEventListener("submit", (e) => {

            e.preventDefault(); // evita que se refresque la pantalla

            if(title.value && subtitle.value && description.value){

                let article = {
                    title: title.value,
                    subtitle: subtitle.value,
                    description: description.value
                };

                new_articles.push(article);
                localStorage.setItem("articles", JSON.stringify(new_articles));
                new_articles.reverse();
                showArticles();

            }else{
                alert("Faltan datos por rellenar.");
            }

        });

    }

    function showArticles(){

        articles.innerHTML = "";
        new_articles = JSON.parse(localStorage.getItem("articles"));
        new_articles.reverse();

        if(new_articles.length > 0){

            new_articles.forEach(article => {

                articles.innerHTML += layoutArticles(article);
                
            });

        }

    }

    function layoutArticles(article){

        let layout = `<article class="layout__card">
                        <header class="card__header">
                            <p class="header__author">
                                ${article.subtitle}
                            </p>
                        </header>
                        <div class="card__content">
                            <h2 class="content__title">${article.title}</h2>
                            <p class="content__description">${article.description} </p>
    
                            <button class="content__btn">Leer más</button>
                        </div>
                    </article>`;

        return layout;

    }

    createArticle();
    showArticles();

});