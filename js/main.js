const main = document.querySelector(".main");
const mainheight = main.clientHeight;
const indicator = document.querySelector(".scrolled-indicator-fill");
const nav = document.querySelector(".nav");
const navs = document.querySelector(".nav_items");
document.addEventListener('scroll', function(){
    if (scrollY != 0){
        nav.classList.add("move_navin");
        nav.classList.remove("move_navout");
    }
    else{
        nav.classList.add("move_navout");
        nav.classList.remove("move_navin");
    }
    // 네비 하이라이트 용
    const target = parseInt((scrollY + (mainheight * 0.2)) / mainheight) * 2 + 1;
    for (var i = 1; i < 10; i += 2){
        if (i == target){
            navs.childNodes[i].childNodes[0].style.color = "red";
        }
        else{
            navs.childNodes[i].childNodes[0].style.color = "blue";
        }
    }

    // 스크롤 체크
    const scrollable = document.documentElement.scrollHeight - mainheight;
    percent = Math.ceil((scrollY / scrollable) * 100);
    indicator.style.width = `${percent}%`;
});