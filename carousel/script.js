const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img')

let index = 1;

function run() {
    index++;
    if (index > img.length - 1) {
        index = 0;
    }

    imgs.style.transform = `translateX(${-index * 500}px)`;

    setTimeout(run, 2000)

}

setTimeout(run, 2000);



    
    // function slideshow() {
    //     imgs.innerHTML = `<img src="assets/img-${index++}.jpg" alt="" />`
    //     if (index > 4) {
    //         index = 1;
    //     }
    // }

    // setInterval(slideshow, 2000);

    
