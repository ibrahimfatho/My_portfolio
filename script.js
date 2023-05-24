let menu = document.querySelector('#menu-btn');
let dropdown = document.querySelector('.drop-down-menu');

menu.onclick = () => {
    menu.classList.toggle('x')
    dropdown.classList.toggle('open')
}