
let valorDolar = 155.50;
let cotizacionPeso = 16.89;

let valorPeso = valorDolar * cotizacionPeso;
valorPeso = valorPeso.toFixed(2)

document.addEventListener("DOMContentLoaded", function () {
    // JavaScript para mostrar/ocultar secciones según la selección
    const tipoConversion = document.getElementById("tipo_conversion");
    const conversorMoneda = document.getElementById("conversor_de_moneda");
    const conversorTemperatura = document.getElementById("conversor_de_temperatura");

    tipoConversion.addEventListener("change", function () {
        if (this.value === "moneda") {
            conversorMoneda.style.display = "block";
            conversorTemperatura.style.display = "none";
        } else if (this.value === "temperatura") {
            conversorMoneda.style.display = "none";
            conversorTemperatura.style.display = "block";
        } else {
            conversorMoneda.style.display = "none";
            conversorTemperatura.style.display = "none";
        }
    });

    // Función para realizar la conversión de moneda
    const convertirMonedaBtn = document.getElementById("convertir_moneda");
    convertirMonedaBtn.addEventListener("click", function () {
        const monedaOrigen = document.getElementById("parametro1_conversion").value;
        const monedaDestino = document.getElementById("parametro2_conversion").value;
        const valor = parseFloat(document.getElementById("valor").value);

        // Realiza la conversión (agregar la lógica adecuada)
        const resultado = realizarConversionMoneda(monedaOrigen, monedaDestino, valor);

        // Muestra la respuesta al usuario
        alert(`Resultado de la conversión: ${resultado}`);
    });

    // Función para realizar la conversión de temperatura
    const convertirTemperaturaBtn = document.getElementById("convertir_temperatura");
    convertirTemperaturaBtn.addEventListener("click", function () {
        const temperaturaOrigen = document.getElementById("temperatura_origen").value;
        const temperaturaDestino = document.getElementById("temperatura_destino").value;
        const valorTemperatura = parseFloat(document.getElementById("valor_temperatura").value);

        // Realiza la conversión (agregar la lógica adecuada)
        const resultado = realizarConversionTemperatura(temperaturaOrigen, temperaturaDestino, valorTemperatura);

        // Muestra la respuesta al usuario
        alert(`Resultado de la conversión: ${resultado}`);
    });

    // Función para realizar la conversión de moneda (por ejemplo, de dólar a euro)
    function realizarConversionMoneda(monedaOrigen, monedaDestino, valor) {
        // Agregar la lógica de conversión aquí y devolver el resultado
        // Por ejemplo, si deseas una conversión simple, puedes hacer algo como:
        if (monedaOrigen === "dolar" && monedaDestino === "euro") {
            return valor * 0.85; // Conversión ficticia
        }
    }

    // Función para realizar la conversión de temperatura (por ejemplo, de Celsius a Fahrenheit)
    function realizarConversionTemperatura(temperaturaOrigen, temperaturaDestino, valorTemperatura) {
        if (temperaturaOrigen === "celsius" && temperaturaDestino === "fahrenheit") {
            return (valorTemperatura * 9/5) + 32;
        } else if (temperaturaOrigen === "fahrenheit" && temperaturaDestino === "celsius") {
            return (valorTemperatura - 32) * 5/9;
        } else if (temperaturaOrigen === "celsius" && temperaturaDestino === "kelvin") {
            return valorTemperatura + 273.15;
        } else if (temperaturaOrigen === "kelvin" && temperaturaDestino === "celsius") {
            return valorTemperatura - 273.15;
        } else {
            // Si la conversión no es válida, puedes devolver un mensaje de error o NaN.
            return "Conversión no válida";
        }
    }
});
