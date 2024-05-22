function tabuada(){
    let num = document.getElementById('txtn') // numero //
    let tab = document.getElementById('seltab') // tabuada //
    if (num.value.lengeth == 0) {
        window.alert('Por favor, digite um número!!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = n + 'x' + c + '=' + n*c
            item.value = 'tab' + c
            tab.appendChild(item)
            c++
        }
    }
}

function limparDados() {
    let res = document.getElementById('res')
    res.innerHTML = '<br>Preparando Contagem....'
}

