
let menu = document.getElementById('nav-menu')
function closeMenu(){
  menu.style.right = '-100%'
}
function openMenu(){
  menu.style.right = '0'
}

window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


