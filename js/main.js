// 모바일 경고 알람
function moblie() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (moblie()) {
    alert("해당 홈페이지는 pc 기준으로 작성되었습니다. 모바일에서는 제대로 작동하지 않을 수 있습니다.");
}

window.onload = function(){
    // 로딩 화면 제거
    const load = document.querySelector(".load");
    load.style.display = "none";

    // 메인 값 기록
    const main = document.querySelector(".main");
    const mainheight = main.clientHeight;

    // 프로그래스바
    const indicator = document.querySelector(".scrolled-indicator-fill");

    // 네비바
    const nav = document.querySelector(".nav");
    const navs = document.querySelector(".nav_items");

    // 컨테이너
    const container = document.querySelector(".container");

    // 스크롤 이벤트
    document.addEventListener('scroll', function(){

        // 네비바 출력 체크
        if (scrollY != 0) {
            nav.classList.add("move_navin");
            nav.classList.remove("move_navout");
        }
        else {
            nav.classList.add("move_navout");
            nav.classList.remove("move_navin");
        }

        // 네비바 하이라이트
        const target = parseInt((scrollY + (mainheight * 0.2)) / mainheight) * 2 + 1;
        for (var i = 1; i < 10; i += 2){
            if (i == target) {
                navs.childNodes[i].childNodes[0].style.color = "red";
            }
            else{
                navs.childNodes[i].childNodes[0].style.color = "blue";
            }
        }

        // 위치 체킹 내용물 출력
        const check = parseInt(scrollY / mainheight) * 2 + 3;
        if (check < 10){
            container.childNodes[check].style.marginLeft = `${(Math.min(100, ((scrollY % mainheight) * 2 / mainheight) * 100)) - 100}%`;
        }
    
        // 프로그래스바
        const scrollable = document.documentElement.scrollHeight - mainheight;
        percent = Math.ceil((scrollY / scrollable) * 100);
        indicator.style.width = `${percent}%`;
    });

    // 이미지 드래그 체킹용
    const slider = document.querySelector('.scroll-wrap');
    let isMouseDown = false;
    let startX, scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        slider.classList.add('active');

        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
        isMouseDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mouseup', () => {
        isMouseDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;

        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1;
        slider.scrollLeft = scrollLeft - walk;
    });

    // 스크롤 페이지 단위 이동
    const html = document.querySelector(".html");
    var page = parseInt(scrollY / mainheight);
    const lastPage = 4;

    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    window.addEventListener("wheel", function(e){

        if(e.deltaY > 0){
            if(page == lastPage) return;
     
            page++;
        }else if(e.deltaY < 0){
            if(page == 0) return;
     
            page--;
        }
        
        window.scrollTo(0, page * mainheight);
    });

    // 네비바 클릭이벤트 페이지 조절
    document.onclick = function (e) {
        e = e || window.event;
        var element = e.target || e.srcElement;
      
        if (element.tagName == 'A') {
            var name = element.outerText
            if (name == "Main") {
                page = 0
            }
            else if (name == "Intro") {
                page = 1
            }
            else if (name == "Tech") {
                page = 2
            }
            else if (name == "Result") {
                page = 3
            }
            else if (name == "Close") {
                page = 4
            }
        }
    };
}