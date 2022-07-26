const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
window.addEventListener('scroll',toggleHeader,false);
function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        console.log('Header menor')
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute('src','imagens/omnitech-logo-2.png')
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        console.log('HEADER MAIOR')
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        $logo.firstElementChild.setAttribute('src','imagens/omnitech-logo-1.png')
    }
}
