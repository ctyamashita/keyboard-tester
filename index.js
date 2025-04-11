document.addEventListener('keydown', e => {
    e.stopPropagation()
    const keyId = e.code;
    if (keyId === 'Tab' || keyId === 'Space') e.preventDefault()
    const keys = document.querySelectorAll(`.${keyId}`)
    keys.forEach(key=>{
        if (key.classList.contains('pressing')) return;

        key.classList.add('pressed');
        key.classList.add('pressing');
    })

    const screenText = document.getElementById('cursor')

    // if (e.key == ' ') {
    //     console.log(document.querySelector('.screen').innerText.split(' '))
    // }

    if (e.key.length == 1) {
        screenText.insertAdjacentHTML('beforebegin', e.key)
    } else {
        screenText.insertAdjacentHTML('beforebegin', `<span class="card-key">${e.key}</span>`)
    }
})

document.addEventListener('keyup', e => {
    const keyId = e.code;
    if (keyId === 'Tab') e.preventDefault()
    const keys = document.querySelectorAll(`.${keyId}`)
    keys.forEach(key=>{    
        key.classList.remove('pressing');
    })

    const screen = document.querySelector('.screen')

    if (screen.innerText.length > 70) {
        screen.innerHTML = '<span id="cursor">_</span>'
    }
})

document.getElementById('kb-layout').addEventListener('change', e => {
    const selectedLayoutId = e.currentTarget.value
    const layouts = document.querySelectorAll('.keyboard-case > div')
    layouts.forEach(layout=>{
        layout.id == selectedLayoutId ? layout.classList.remove('hide') : layout.classList.add('hide')
    })
})

document.getElementById('color-slider').addEventListener('input', e => {
    document.querySelector('.keyboard-border').setAttribute('style', `filter: hue-rotate(${e.currentTarget.value}deg)`)
    // document.querySelector('.slider').setAttribute('data-rotate', e.currentTarget.value)
})

document.querySelector('.reset-btn').addEventListener('click', () => {
    document.querySelectorAll('.key').forEach(key=>key.classList.remove('pressed'))
})