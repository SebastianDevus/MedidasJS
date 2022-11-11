// Cria variáveis vazias para os campos necessários
let campoMedida = "";
let exibeMedidaCm = "";
let exibeMedidaMetro = "";
let exibeMedidaKm = "";
let exibeMedidas = "";

// Executa setup após o documento estar carregado
document.addEventListener("DOMContentLoaded", setup);

function setup() {
    // Pega os campos necessários e armazena nas variáveis
    campoMedida = document.getElementById("medidaInserida");
    exibeMedidaCm = document.getElementById("exibeMedidaCm");
    exibeMedidaMetro = document.getElementById("exibeMedidaMetro");
    exibeMedidaKm = document.getElementById("exibeMedidaKm");
    exibeMedidas = document.getElementById("exibeMedidas");

    // Caso aperte enter, evite ação padrão e executa calculaExibeMedidas
    campoMedida.addEventListener("keydown", (evt) => {
        if (evt.key == "Enter") {
            evt.preventDefault();

            calculaExibeMedidas();
        }
    });

    // Em caso de mudança, executa calculaExibeMedidas
    campoMedida.addEventListener("change", calculaExibeMedidas);
}

// Pega e exibe as medidas
function calculaExibeMedidas() {
    // Converte medidas
    const medidaEmMetros = Number(campoMedida.value)
    const medidaEmCm = medidaEmMetros * 100;
    const medidaEmKm = medidaEmMetros / 1000;

    // Adiciona texto aos campos de exibição
    exibeMedidaCm.innerText = `${medidaEmCm} cm`;
    exibeMedidaMetro.innerText = `${medidaEmMetros} m`;
    exibeMedidaKm.innerText = `${medidaEmKm} km`;

    // Altera a propriedade hidden da div parente dos campos de exibição 
    exibeMedidas.hidden = 0;
}