// Ejercicio 9: Gastos mensuales
let gastos = [
  [1135,2500,900,1600,2800,650,1100],
  [1750,1890,1900,1300,898,1750,2800],
  [1700,1150,1690,1900,1770,500,2560],
  [800,1250,1430,2100,1980,1270,950]
];

// a) Total semana 2
let totalSemana2 = gastos[1].reduce((a,b)=>a+b,0);
console.log("Total semana 2:", totalSemana2);

// b) Total día 3
let totalDia3 = 0;
for (let semana of gastos) totalDia3 += semana[2];
console.log("Total día 3:", totalDia3);

// c) Total mensual
let totalMes = 0;
for (let semana of gastos) {
  for (let dia of semana) totalMes += dia;
}
console.log("Total mensual:", totalMes);

// d) Semana con más gastos
let maxSemana = 0;
let indiceSemana = 0;

for (let i = 0; i < gastos.length; i++) {
  let suma = gastos[i].reduce((a,b)=>a+b,0);
  if (suma > maxSemana) {
    maxSemana = suma;
    indiceSemana = i + 1;
  }
}

console.log("Semana con más gastos:", indiceSemana);
