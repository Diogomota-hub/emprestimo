let modal = document.getElementById('modal')

function calcular() {
    let emprestimo = document.getElementById('valor-emprestimo').value
    let jurosPagar = document.getElementById('juros').value
    let totalparcela = document.getElementById('total-parcelas').value
    let valoremprestado = Number(emprestimo)
    let juros = Number(jurosPagar)
    let parcela = Number(totalparcela)
    let juroscalculado = juros / 100

    /*calculo do juros*/
    let valortotal = valoremprestado * juroscalculado * parcela
    modal.show()

    /*incrementar a solução no modal*/
    let paragrafo = document.createElement('p')
    paragrafo.textContent = `Os juros do seu emprestiimo ficaria no valor de ${valortotal}R$`
    modal.appendChild(paragrafo)

    /*Funcionnalidade para não ter nada vazio*/ 
    if (valortotal == 0) {
        alert("Ouve um erro, favor verifique se todos os campos estão preencchidos.")
        location.reload()
    }

}


function fecharmodal() {
    modal.close()
    location.reload()
}

