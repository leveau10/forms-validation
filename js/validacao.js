export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}



function validaDataNascimento(input){
    const dataRecebida = new Date(input.value); //data recebida do forms
    let mensagem = '';

    if (!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar'
    }

    input.setCustomValidity(mensagem);
}

function maiorQue18(data){
    const dataAtual = new Date() //data de hoje é sem params
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) //somando data do forms + 18 anos

    return dataMais18 <= dataAtual //comparando data de hoje com a data+18
}