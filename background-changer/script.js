const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.style.backgroundImage = `url(assets/img-${Math.floor(Math.random() * 10 + 1)}.jpg)`;
})

