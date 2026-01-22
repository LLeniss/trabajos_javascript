let prompt = (typeof window !== 'undefined') ? window.prompt : require('prompt-sync')();

console.log("========================================");
console.log("  CALCULADORA DE IMC");
console.log("========================================\n");

let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
let altura = parseFloat(prompt("Ingresa tu altura en metros (ej: 1.75):"));

if (isNaN(peso) || isNaN(altura)) {
    console.log("❌ Error: Debes ingresar valores numéricos válidos.");
} else if (peso <= 0 || altura <= 0) {
    console.log("❌ Error: El peso y la altura deben ser mayores que cero.");
} else {
    // Calcular IMC
    let imc = peso / (altura * altura);
    
    console.log("\n========================================");
    console.log("  RESULTADOS");
    console.log("========================================");
    console.log("Peso: " + peso + " kg");
    console.log("Altura: " + altura + " m");
    console.log("IMC: " + imc.toFixed(2));
    
    // Clasificación según la OMS (Organización Mundial de la Salud)
    console.log("\n--- CLASIFICACIÓN ---");
    
    if (imc < 18.5) {
        console.log("📊 Bajo peso");
        console.log("⚠️  Puede indicar desnutrición o problemas de salud.");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("✅ Peso normal");
        console.log("👍 Tu peso está en el rango saludable.");
    } else if (imc >= 25 && imc < 30) {
        console.log("⚠️  Sobrepeso");
        console.log("💡 Se recomienda mejorar hábitos alimenticios y hacer ejercicio.");
    } else if (imc >= 30 && imc < 35) {
        console.log("🔴 Obesidad Grado I");
        console.log("⚠️  Riesgo moderado para la salud.");
    } else if (imc >= 35 && imc < 40) {
        console.log("🔴 Obesidad Grado II");
        console.log("⚠️  Riesgo alto para la salud.");
    } else {
        console.log("🔴 Obesidad Grado III (Mórbida)");
        console.log("⚠️  Riesgo muy alto. Se recomienda consultar a un médico.");
    }
}