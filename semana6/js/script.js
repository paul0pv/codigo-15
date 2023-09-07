const  nombre = "Paulo",
apellido = "Panduro",
dni = "74714693",
datos = nombre + " " + apellido + " " + dni,
datos2 = `Datos: ${nombre}, ${apellido}, ${dni}`;

console.log("Concatenacion", datos);
console.log("Template string", datos2);

console.log("info");
console.error("Error en consola");
console.warn("Warning en consola");


console.log("suma1" , 2+2);
console.log("suma2" , 2+"2");
console.log("resta1" , 10 - 2);
console.log("resta2" , 10 - "2");
console.log("multiplicacion" , 2*2);
console.log("division" , 1000/4);
console.log("residuo modulo", 40%6);
console.log("raiz cuadrada", Math.sqrt(100));
console.log("potencia", Math.pow(4, 0.5));
console.log("potencia2", 4**6);
console.log("PI", Math.PI);

console.log("Igualdad", 2 == "2");
console.log("Igualdad2",2 === "2");

console.log("Distincion", 2 != "2");
console.log("Distincion2", 2 !== "2");

console.log(10 > 100);
console.log(100 > 10);
console.log(10 < 100);
console.log(100 < 10);
console.log(10 <= 100);
console.log(10 >= 100);

let edad = 28;

if (edad >= 18) {
    console.log("La persona es mayor de edad")
} else {
    console.log("La persona es menor de edad")
};

const first_n = prompt("First number: "),
operator = prompt("Operation (+,-,*,/): "),
second_n = prompt("second number: ")

function calcular4(n1, n2, operador) {
  try {
    return eval(`${n1}${operador}${n2}`) === Infinity
      ? "Operacion No valida"
      : eval(`${n1}${operador}${n2}`);
  } catch (err) {
    return err;
  }
}

function calcular5(n1, n2, operador) {
  try {
    const res = eval(`${n1}${operador}${n2}`);
    return isFinite(res) ? res : "Operacion No valida";
  } catch (err) {
    return err;
  }
}

calcular4(first_n, second_n, operator);
calcular5(first_n, second_n, operator);