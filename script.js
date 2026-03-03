const resultado = document.getElementById("resultado");
const historial = document.getElementById("historial");
const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function operar(operador){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(n1) || isNaN(n2)){
        resultado.innerHTML = "⚠️ Ingresa números válidos";
        return;
    }

    let res;

    switch(operador){
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/':
            if(n2 === 0){
                resultado.innerHTML = "❌ No se puede dividir entre 0";
                return;
            }
            res = n1 / n2;
            break;
    }

    resultado.innerHTML = "Resultado: " + res;

    const li = document.createElement("li");
    li.textContent = `${n1} ${operador} ${n2} = ${res}`;
    historial.appendChild(li);
}