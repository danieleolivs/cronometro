let tela = window.document.getElementById('tempo')
let title = window.document.getElementById('title')
let controlador

hora = 0
minuto = 0
segundo = 0

function iniciar(){
    //realiza as alterações na hora, minuto e segundo
    segundo++
    if(segundo>=60){
        minuto++
        segundo=0
        if(minuto>=60){
            hora++
            minuto=0
        }
    }
}

function adicionar(){
    //chama a função do cronômetro
    iniciar()

    //insere os valores na tela
    tela.innerHTML = (hora > 9 ? hora : "0" + hora) + ":" + (minuto > 9 ? minuto : "0" + minuto) + ":" + (segundo > 9 ? segundo : "0" + segundo)

    title.innerHTML = (hora > 9 ? hora : "0" + hora) + ":" + (minuto > 9 ? minuto : "0" + minuto) + ":" + (segundo > 9 ? segundo : "0" + segundo)
    //cria um loop para altenar os números
    contador()
}

function contador(){
    // a cada 1s chama a função adicionar
    controlador = setTimeout(adicionar, 1000)
}

function parar(){
    //para a função contador
    clearTimeout(controlador)
}

function resetar(){
    //reinia o cronômetro
    tela.innerHTML = "00:00:00"
    title.innerHTML = "Cronômetro"
    hora = 0
    minuto = 0
    segundo = 0
}


