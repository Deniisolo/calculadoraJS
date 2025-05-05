function calcular(num1, num2, operacion) {
    if (operacion === "+") return num1 + num2;
    if (operacion === "-") return num1 - num2;
    if (operacion === "*") return num1 * num2;
    if (operacion === "/") return num1 / num2;
    return "Operación no válida";
  }
  
  const resultado = calcular(10, 5, "+");
  console.log("Resultado:", resultado); 