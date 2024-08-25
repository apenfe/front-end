window.addEventListener("DOMContentLoaded", (event) => {

    let numberAccount = document.querySelector(".header__number");
    let money = document.querySelector(".header__money");
    let containersIco = document.querySelectorAll(".item__ico");
    let titles = document.querySelectorAll(".item__title");
    let dates = document.querySelectorAll(".item__date");
    let bills = document.querySelectorAll(".item__bill");
    let totals = document.querySelectorAll(".item__total");
    let bgLoads = document.querySelectorAll(".bg-load");
    let bgLoadsText = document.querySelectorAll(".bg-load-text");

    function setInfo() {
        numberAccount.innerText = "ES34 4555 4476348574863878";
        money.innerText = "5.000€";

        containersIco.forEach((containerIco) => {
            containerIco.innerHTML = `<i class="fa-solid fa-credit-card"></i>`;
        });

        titles.forEach((title) => {
            title.innerText = "Empresa";
        });

        dates.forEach((date) => {
            date.innerText = "20/06/2027";
        });

        bills.forEach((bill) => {
            bill.innerText = "-400€";
        });

        totals.forEach((total) => {
            total.innerText = "5000€";
        });

        bgLoads.forEach((bgLoad) => {
            bgLoad.classList.remove("bg-load");
        });

        bgLoadsText.forEach((bgLoadText) => {
            bgLoadText.classList.remove("bg-load-text");
        });

    }

    setTimeout(setInfo, 3000);

});