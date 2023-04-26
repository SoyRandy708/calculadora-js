let pantalla = document.querySelector(".calculadora__pantalla")
const botones = document.getElementsByClassName("botones__boton")
const botonesArray = Array.from(botones)

botonesArray.forEach(boton => {
    boton.addEventListener("click", () => {
        calculadora(boton)
    })
})

const calculadora = (boton) => {
    console.log(boton.value)
    switch (boton.value) {
        case "C":
            borrar()
        break
    
        case "=":
            calcular(boton)
        break
    
        default:
            mostrar(boton)
        break
    }
}

const borrar = () => {
    pantalla.textContent = "0"
}

const calcular = () => {
    pantalla.textContent = eval(pantalla.textContent)
}

const mostrar = (boton) => {
    if(pantalla.textContent == "0") {
        pantalla.textContent = ""
    }
    pantalla.textContent += boton.value
}