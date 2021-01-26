function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart')

    heart.style.left = Math.random() * 100 + 'vw'

    heart.style.animationDuration = Math.random() * 2 + 3 + 's'
    
    heart.style.fontSize = Math.random() * 5 + 1 + "rem";

    heart.innerText = "💜";

    document.body.appendChild(heart)

    setTimeout(() => {heart.remove()}, 5000)
}

setInterval(createHeart, 500)

