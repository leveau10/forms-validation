import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    if(input.dataset.tipo == 'preco'){ //input.dataset.tipo é o input do data attribute
        SimpleMaskMoney.setMask(input, {
            prefix: 'BRL ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    } 

    input.addEventListener('blur', (evento) =>{
        valida(evento.target)
    })
})