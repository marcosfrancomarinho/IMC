
let nome = document.getElementById("nome");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let result = document.getElementById("result");
let img = document.getElementsByClassName("img");
let calc = document.getElementById("calc");
let clean = document.getElementById("clean");
let historico = document.querySelector("#historico");
let history = document.querySelector("#history");
let paciente = [];

calc.addEventListener("click", calcular);
clean.addEventListener("click", limpar);
historico.addEventListener("click", relatorio)


function check() {
    if (peso.value.length == 0 || altura.value.length == 0 || peso.value <= 0 || altura.value <= 0) {
        return true
    } else {
        return false
    }
};
function create(n, h, w) {
    return {
        nome: n,
        altura: Number(h),
        peso: Number(w),
        imc: function () {
            return (this.peso / this.altura ** 2).toFixed(2);
        },
        situacao: function () {
            if (this.imc() < 17) {
                return "Muito Abaixo do Peso";
            } else if (this.imc() >= 17 && this.imc() <= 18.49) {
                return "Abaixo do Peso"
            } else if (this.imc() >= 18.5 && this.imc() <= 24.99) {
                return "Peso Normal";
            } else if (this.imc() >= 25 && this.imc() <= 29.99) {
                return "Acima do Peso";
            } else if (this.imc() >= 30 && this.imc() <= 34.99) {
                return "Obesidade Grau I";
            } else if (this.imc() >= 35 && this.imc() <= 39.99) {
                return "Obesidade Grau II (SEVERA)";
            } else {
                return "Obesidade Grau III (MÓRBIDA)";
            }
        }
    }
};
function selectionImg(num, i) {
    switch (num) {
        case "Muito Abaixo do Peso":
            img[0].style.border = "2.8px dotted black";
            img[0].style.padding = "2px";
            result.innerHTML = paciente[i].imc();
            break;
        case "Abaixo do Peso":
            img[1].style.border = "2.8px dotted black";
            img[1].style.padding = "2px";
            result.innerHTML = paciente[i].imc();
            break;
        case "Peso Normal":
            img[2].style.border = "2.8px dotted black";
            img[2].style.padding = "2px";
            result.innerHTML = paciente[i].imc();
            break;
        case "Acima do Peso":
            img[3].style.border = "2.8px dotted black";
            img[3].style.padding = "2px";
            result.innerHTML = paciente[i].imc();
            break;
        case "Obesidade Grau I":
            img[4].style.border = "2.8px dotted black";
            img[4].style.padding = "2px";
            result.innerHTML = paciente[i].imc();
            break;
        case "Obesidade Grau II (SEVERA)":
            img[5].style.border = "2.8px dotted black";
            img[5].style.padding = "2px";
            result.innerHTML = paciente[i].imc();
            break;
        case "Obesidade Grau III (MÓRBIDA)":
            img[6].style.border = "2.8px dotted black";
            img[6].style.padding = "2px";
            result.innerHTML = paciente[i].imc();
            break;
        default:
            alert("ERROR");
    }
};
function clickclean() {
    for (let c = 0; c <= 6; c++) {
        img[c].style.border = "none";
        img[c].style.padding = "0";
    }
};
 function limpar () {
    for (let d = 0; d <= 6; d++) {
        img[d].style.border = "none";
    }
    history.innerHTML = " ";
    result.innerHTML = "0.00";
    nome.value = " ";
    altura.value = " ";
    peso.value = " ";
    nome.focus();
};
 function calcular () {
    if (check()) {
        alert("ERROR - CAMPO VAZIO OU VALOR INVÁLIDO!!")
    }
    else {
        let j = Number(paciente.length)
        clickclean()
        paciente.push(create(nome.value, altura.value, peso.value));
        selectionImg(paciente[j].situacao(), j);
    }
    
};
function relatorio(){
    for(let v in paciente){
        history.innerHTML += `<b>NOME</b>: ${paciente[v].nome} - <b>PESO</b>: ${paciente[v].peso}kg  -<b> ALTURA </b>:${paciente[v].altura}m - <b>IMC</b>: ${paciente[v].imc()} - <b>SITUAÇAO</b>: ${paciente[v].situacao()}.<br>`
    }
}



