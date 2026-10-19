// SA-PLD1: Práctica de Lógica de Programación 1
// Comparación y ordenamiento de 3 números

function compararNumeros() {
  const contenedorResultado = document.getElementById("resultado");

  // 1. Captura de datos por prompt
  const entrada1 = prompt("Ingresa el primer número:");
  const entrada2 = prompt("Ingresa el segundo número:");
  const entrada3 = prompt("Ingresa el tercer número:");

  // Conversión a tipo numérico
  const num1 = Number(entrada1);
  const num2 = Number(entrada2);
  const num3 = Number(entrada3);

  // 2. Validación de entradas (verificar que no sean texto vacío ni NaN)
  if (
    entrada1 === null || entrada2 === null || entrada3 === null ||
    entrada1.trim() === "" || entrada2.trim() === "" || entrada3.trim() === "" ||
    isNaN(num1) || isNaN(num2) || isNaN(num3)
  ) {
    const mensajeError = "Error: Por favor ingresa únicamente valores numéricos válidos en los tres campos.";
    console.error(mensajeError);
    contenedorResultado.innerHTML = `<p style="color: #dc2626; font-weight: bold;">${mensajeError}</p>`;
    return;
  }

  // 3. Caso especial: Verificar si los 3 números son iguales
  if (num1 === num2 && num2 === num3) {
    const mensajeIguales = `Los tres números ingresados son iguales: ${num1}, ${num2}, ${num3}.`;
    console.log(mensajeIguales);
    contenedorResultado.innerHTML = `
      <p style="color: #16a34a; font-weight: bold;">${mensajeIguales}</p>
    `;
    return;
  }

  // 4. Ordenamiento
  const numeros = [num1, num2, num3];

  // Orden de mayor a menor (descendente)
  const mayorAMenor = [...numeros].sort((a, b) => b - a);

  // Orden de menor a mayor (ascendente)
  const menorAMayor = [...numeros].sort((a, b) => a - b);

  // 5. Salida en consola
  console.log("Números ingresados:", num1, num2, num3);
  console.log("De mayor a menor:", mayorAMenor.join(", "));
  console.log("De menor a mayor:", menorAMayor.join(", "));

  // 6. Salida en el DOM (en la página web)
  contenedorResultado.innerHTML = `
    <h3>Resultados del análisis</h3>
    <p><strong>Valores ingresados:</strong> ${num1}, ${num2}, ${num3}</p>
    <hr style="margin: 0.8rem 0; border: 0; border-top: 1px solid #e2e8f0;">
    <p><strong>De mayor a menor:</strong> ${mayorAMenor.join(", ")}</p>
    <p><strong>De menor a mayor:</strong> ${menorAMayor.join(", ")}</p>
  `;
}

// Ejecutar el script al cargar
compararNumeros();