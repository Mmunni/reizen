
const openMenu = document.getElementById('open-menu').addEventListener('click', function(){
    let menu = document.getElementById('nav-menu')
      menu.classList.remove('d-none');
    menu.style.right = '0';
     
});
const closeMenu = document.getElementById('close-menu').addEventListener('click', function(){
    let menu = document.getElementById('nav-menu')
      menu.classList.add('d-none');
    menu.style.right = '-100vw';
    
});

window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})