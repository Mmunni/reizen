
const openMenu = document.getElementById('open-menu').addEventListener('click', function(){
    let menu = document.getElementById('nav-menu')
    menu.classList.remove('d-none');
    menu.style.right = '0';
    menu.style.transition = '.8s'
     
});
const closeMenu = document.getElementById('close-menu').addEventListener('click', function(){
    let menu = document.getElementById('nav-menu')
    menu.classList.add('d-none');
    menu.style.right = '-100vw';
    menu.style.transition = '.8s'
    
});