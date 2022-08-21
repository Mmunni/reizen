
const openMenu = document.getElementById('open-menu').addEventListener('click', function(){
    let menu = document.getElementById('nav-menu')
    menu.style.right = '0';
    menu.style.visibility = "visible";    
});
const closeMenu = document.getElementById('close-menu').addEventListener('click', function(){
    let menu = document.getElementById('nav-menu')
    menu.style.right = '-100vw';
    menu.style.visibility = "hidden";   
});