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