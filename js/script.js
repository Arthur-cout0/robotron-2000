const controle = document.querySelectorAll('.controle')

for (let element of controle) {
    const controles = element.children
    const btns = [controles[0], controles[2]]

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.innerHTML == '-' && Number(controles[1].value) > 0) controles[1].value = Number(controles[1].value) - 1
            if (btn.innerHTML == '+' && Number(controles[1].value) < 10) controles[1].value = Number(controles[1].value) + 1
        })
    })
}

const robo = document.querySelector('.robo')

const lista_cores_robo = {
    'azul' : './img/robotron-azul.png',
    'amarelo' : './img/robotron-amarelo.png',
    'branco' : './img/robotron-branco.png',
    'preto' : './img/robotron-preto.png',
    'vermelho' : './img/robotron-vermelho.png',
    'rosa' : './img/robotron-rosa.png'
}

let cor_atual = 1

robo.addEventListener('click', () => {
    if (cor_atual == Object.keys(lista_cores_robo).length
    ) cor_atual = 1
    else cor_atual++
    robo.src = lista_cores_robo[Object.keys(lista_cores_robo)[cor_atual - 1]]
})