document.addEventListener("DOMContentLoaded", () => {
    const inputBusqueda = document.getElementById("search-input");
    const botones = document.querySelectorAll("button[data-animal]");

    function filtroAnimalesRaza(boton, texto) {
        return boton.dataset.animal.toLowerCase().includes(texto.toLowerCase());
    }

    function filtroBusqueda() {
        const texto = inputBusqueda.value;
        botones.forEach((boton) => {
            if (texto === "") {
                boton.style.display = "";
            } else {
                if (filtroAnimalesRaza(boton, texto)) {
                    boton.style.display = "";
                } else {
                    boton.style.display = "none";
                }
            }
        });
    }

    inputBusqueda.addEventListener("input", filtroBusqueda);
});