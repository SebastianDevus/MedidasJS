let campoMedida = document.getElementById("medidaInserida");

campoMedida.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        event.preventDefault();

        pegaExibeMedidas();
    }
});

campoMedida.addEventListener("change", event => {
    pegaExibeMedidas();
});

function pegaExibeMedidas() {
    const medidaEmMetros = Number(event.target.value)
    const medidaEmCm = medidaEmMetros * 100;
    const medidaEmKm = medidaEmMetros / 1000;
    
    const exibeMedidaCm = document.getElementById("exibeMedidaCm");
    const exibeMedidaMetro = document.getElementById("exibeMedidaMetro");
    const exibeMedidaKm = document.getElementById("exibeMedidaKm");
    
    const exibeMedidas = document.getElementById("exibeMedidas");
    exibeMedidas.hidden = 0;

    exibeMedidaCm.innerHTML = `${medidaEmCm} cm`;
    exibeMedidaMetro.innerHTML = `${medidaEmMetros} m`;
    exibeMedidaKm.innerHTML = `${medidaEmKm} km`;    
}