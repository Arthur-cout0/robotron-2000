const controle = document.querySelectorAll('.controle')

for (let i = 0; i < controle.length; i++) {
    const element = controle[i];
    const controles = element.children

    const minusbtn = controles[0]
    const input = controles[1]
    const plusbtn = controles[2]
    
    minusbtn.addEventListener('click', () => {
        if (Number(input.value) > 0 && Number(input.value) < 11) input.value = Number(input.value) - 1
        else return
    })
    
    plusbtn.addEventListener('click', () => {
        if (Number(input.value) >= 0 && Number(input.value) < 10) input.value = Number(input.value) + 1
        else return
    })
}