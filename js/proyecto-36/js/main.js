window.addEventListener("DOMContentLoaded", (event) => {

    let btn = document.querySelector(".main__btn");
    let notes = document.querySelector(".main__notes");

    btn.addEventListener("click", (e) => {
        createNote();
    });

    function createNote(body = "Inserte nota", title = "Nueva nota", transition = true) {

        let note = document.createElement('article');
        note.classList.add("notes__note");

        note.innerHTML += `
        <header class="note__header">
            <input type="text" class="header__input" value="${title}">
            <i class="note__icon fa-solid fa-trash"></i>
        </header>
        <textarea class="note__body" name="body">${body}</textarea>
        `;

        let input = note.querySelector(".header__input");
        let textarea = note.querySelector(".note__body");
        let trash = note.querySelector(".note__icon");

        input.addEventListener("input", () => {
            update();
        });

        textarea.addEventListener("input", () => {
            update();
        });

        trash.addEventListener("click", () => {

            note.classList.remove("note--visible-no-transition")
            note.classList.remove("note--visible")

            setTimeout(() => {
                note.remove();
                update();
            }, 310);

        });

        notes.appendChild(note);

        if (transition) {
            setTimeout(() => {
                note.classList.add("note--visible");
            }, 10);
        } else {
            note.classList.add("note--visible-no-transition");
        }

    }

    let update = () => {

        let notesArray = [];
        let notesDom = document.querySelectorAll(".notes__note");

        notesDom.forEach(noteDom => {
            let noteInput = noteDom.querySelector(".header__input");
            let noteTestarea = noteDom.querySelector(".note__body");

            let note = {
                "title": noteInput.value,
                "body": noteTestarea.value
            };

            if (note.body.trim() != "" || note.title.trim() != "") {
                notesArray.push(note);
            }

        });

        localStorage.setItem("notes", JSON.stringify(notesArray));

    }

    let getNotes = () => {
        let notesStorage = JSON.parse(localStorage.getItem("notes"));

        if (notesStorage) {

            notesStorage.forEach(note => {
                createNote(note.body, note.title, false);
            });
        }

    }

    getNotes();

});