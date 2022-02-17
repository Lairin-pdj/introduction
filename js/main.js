// 모바일 경고 알람
function moblie(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (moblie()) {
    alert("해당 홈페이지는 pc 기준으로 작성되었습니다. 모바일에서는 제대로 작동하지 않을 수 있습니다.");s
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
    var temp = 0;

    // 스크롤 이벤트
    document.addEventListener('scroll', function(){

        // 네비바 출력 체크
        if (scrollY != 0){
            nav.classList.add("move_navin");
            nav.classList.remove("move_navout");
        }
        else{
            nav.classList.add("move_navout");
            nav.classList.remove("move_navin");
        }

        // 네비바 하이라이트
        const target = parseInt((scrollY + (mainheight * 0.2)) / mainheight) * 2 + 1;
        for (var i = 1; i < 10; i += 2){
            if (i == target){
                navs.childNodes[i].childNodes[0].style.color = "red";
            }
            else{
                navs.childNodes[i].childNodes[0].style.color = "blue";
            }
        }

        // 위치 체킹 내용물 출력
        const check = parseInt((scrollY - (mainheight * 0.1)) / mainheight) * 2 + 3;
        if (temp != check){
            temp = check;
            console.log(temp);
            container.childNodes[check].classList.add("content-slide");
        }

        // 프로그래스바
        const scrollable = document.documentElement.scrollHeight - mainheight;
        percent = Math.ceil((scrollY / scrollable) * 100);
        indicator.style.width = `${percent}%`;
    });
}