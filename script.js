let close = document.querySelector('.close');
let open = document.querySelector('.open');
let nav = document.querySelector('#nav');

open.addEventListener('click', () => {
    nav.style.width = '100%';
});

close.addEventListener('click', () => {
    nav.style.width = '0';
});
