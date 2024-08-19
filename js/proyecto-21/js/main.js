window.addEventListener("DOMContentLoaded", (event) => {

    // elementos del dom
    let inventarioDOM = document.querySelector(".main__inventario");
    let cajas = document.querySelectorAll(".inventario__caja");

    let estanteriaDOM = document.querySelectorAll(".almacen__estanteria");

    // identifivador personalizado para cada elemento

    cajas.forEach( (caja, i) => { // el segundo paramentro en doreach es el index

        caja.setAttribute("id", "caja"+i );

        caja.addEventListener("dragstart", (e) => {

            e.dataTransfer.setData("id",e.target.id);

        });

    });

    // establecer cada hueco de la estanteria como un sitio donde soltar

    estanteriaDOM.forEach( (estanteria, i) => {

        estanteria.addEventListener("dragover", e => {
            e.preventDefault();
        });

        estanteria.addEventListener("drop", e => {
            e.preventDefault();

            let cajaId = e.dataTransfer.getData("id");

            if(cajaId && cajaId != ""){

                let caja = document.querySelector("#"+cajaId);

                if(estanteria.lastChild == null){
                    e.target.appendChild(caja);
                    estanteria.style.boxShadow = "none";
                }else{
                    alert("Esta estanteria esta ocupada.");
                }

                estanteriaDOM.forEach( (estanteria) => {

                    if(estanteria.lastChild == null){
                        estanteria.style.boxShadow = "0px 0px 8px gray inset";
                    }
            
                });

                if(inventarioDOM.innerHTML.trim() == ""){
                    alert("Todas las cajas han sido colocadas")
                }

            }

        }); 

    });

});