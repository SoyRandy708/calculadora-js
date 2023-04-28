class CALCULADORA {   
    constructor() {
        this.valorActual = ""
    } 

    borrar = () => {
        pantalla.textContent = pantalla.textContent.slice(0, -1)
        this.valorActual = pantalla.textContent

        if(pantalla.textContent == "") {
            pantalla.textContent = "0"
        }
    }

    borrarTodo = () => {
        pantalla.textContent = "0"
        this.valorActual = pantalla.textContent
    }

    actualizarPantalla = (valor) => {
        if(pantalla.textContent == "0") {
            pantalla.textContent = ""
        }
        
        pantalla.textContent += valor.value
        this.valorActual = pantalla.textContent
    }

    calcular = () => {
        pantalla.textContent = eval(pantalla.textContent)
        this.valorActual = pantalla.textContent
    }
}

const pantalla = document.querySelector(".calculadora__pantalla")
const botones = document.getElementsByClassName("botones__boton")
const botonesArray = Array.from(botones)
const calculadora = new CALCULADORA()


botonesArray.forEach(boton => {
    boton.addEventListener("click", () => {
        seleccionar(boton)
    })
})

const seleccionar = (boton) => {
    switch (boton.value) {
        case "--":
            calculadora.borrar()
        break
        case "C":
            calculadora.borrarTodo()
        break
    
        case "=":
            calculadora.calcular()
        break
    
        default:
            calculadora.actualizarPantalla(boton)
        break
    }
}



