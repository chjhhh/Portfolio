// 모바일, 탭 - 메뉴 슬라이드
const menuBtn = document.querySelector('.menu-btn');
const moMenu = document.querySelector('.mo-menu');
let isHideMenu = false;

menuBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        moMenu.classList.add('show');
    } else{
        moMenu.classList.remove('show');
    }
});

// 모바일, 탭 - 메뉴 클릭 시 슬라이드 닫히고 메뉴로 이동



// PC - Menu 클릭 시 색상 변경 (완성 X)
/* const activeMenu = document.querySelectorAll('.active');
let active = false;
activeMenu.addEventListener('click', function(){
    active = !active;
    if(active){
        activeMenu.classList.add('color');
    } else{
        activeMenu.classList.remove('color');
    }
}); */