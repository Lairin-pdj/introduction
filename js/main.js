const header = document.querySelector("header");
const headerheight = header.clientHeight;
document.addEventListener('scroll', function(){
    const scrollposition = scrollY;
    const nav = document.querySelector("nav");
    const check = headerheight - nav.clientHeight;
    if (check <= scrollposition){
        nav.classList.add('fix');
    }
    else {
        nav.classList.remove('fix');
    }
});