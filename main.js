const form = document.getElementById('form-valor');

function validaForm(numero1, numero2) {
    if (numero2 > numero1) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numberA = document.getElementById('first-number');
    const numberB = document.getElementById('second-number');
    const mensagemInsucesso = `O número B: ${numeropri.value} não é maior que o número A: ${numeroseg.value}`;
    
    formValido = validaForm(Number(numeropri.value), Number(numeroseg.value));
    if (!formValido) {
        alert(mensagemInsucesso)
    } else {
        alert("Formulário submetido com sucesso")

        numberA.value = ' ';
        numberB.value = ' ';
    }

})

console.log(form);