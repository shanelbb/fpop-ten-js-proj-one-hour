const text = "Graphic Designer & Web Developer"
const p = document.getElementById('auto-text')

let index = 1;

function writeText() {
    p.innerText = text.slice(0, index)
    index++;
    
    if (index > text.length) {
        index = 1
    }
}


setInterval(writeText, 150);