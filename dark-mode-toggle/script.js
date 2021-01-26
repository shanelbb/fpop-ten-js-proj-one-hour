const toggle = document.getElementById('toggle');
const icon = document.getElementById('icon')

toggle.addEventListener('change', (e) => { 
    document.body.classList.toggle('dark', e.target.checked);
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
})