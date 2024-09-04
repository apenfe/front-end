window.addEventListener("DOMContentLoaded", () => {

    let input = document.querySelector(".form__input");
    let form = document.querySelector(".main__form");
    let list = document.querySelector(".form__list");

    let loadList = () => {

        let tasks = JSON.parse(localStorage.getItem("tasks"));

        if (tasks) {

            tasks.forEach(task => {
                add(task.text, task.completed);
            });

        }

    };

    let saveAndUpdate = () => {

        let allTask = document.querySelectorAll(".list__task");
        let newTasks = [];

        allTask.forEach(item => {

            let task = item.querySelector(".task__text");
            let check = item.querySelector(".task__check");

            let taskObj = {
                text: task.innerText,
                completed: check.checked,
            };

            newTasks.push(taskObj);

        });

        localStorage.setItem("tasks", JSON.stringify(newTasks));

    };

    let deleteTask = (task) => {
        task.remove();
    };

    let add = (task, completed = false) => {

        if (task.trim() != "") {

            let item = document.createElement("li");
            item.classList.add("list__item");

            item.innerHTML = `
                <div class="list__task">
                    <input type="checkbox" class="task__check">
                    <p class="task__text">
                        ${task}
                    </p>
                </div>
                <i class="fa-solid fa-trash list__delete"></i>
            `;

            // Establece el estado del checkbox
            let checkBox = item.querySelector(".task__check");
            checkBox.checked = completed; // Aquí estableces si está marcado o no

            if (completed) {
                item.classList.add("list__item--completed");
            }

            list.appendChild(item);

            saveAndUpdate();

            input.value = "";

            let btnDelete = item.querySelector(".list__delete");

            btnDelete.addEventListener("click", () => {
                deleteTask(item);
                saveAndUpdate();
            });

            checkBox.addEventListener("change", () => {
                if (checkBox.checked) {
                    item.classList.add("list__item--completed");
                } else {
                    item.classList.remove("list__item--completed");
                }
                //item.classList.toggle("list__item--completed");
                saveAndUpdate();
            });

        }

    };

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        let task = input.value;
        add(task);

    });

    loadList();

});