const sounds = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
]


const audio = document.getElementById('audio')


sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn')

    audio.appendChild(btn)

    btn.addEventListener('click', () => {
        stopSound();
        document.getElementById(sound).play();

        
    })

    btn.innerText = sound

})

function stopSound() {
    sounds.forEach(sound => {
        document.getElementById(sound).load();

    })
}