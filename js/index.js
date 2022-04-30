// 모바일, 탭 - 메뉴 슬라이드
const menuBtn = document.querySelector('.menu-btn');
const moMenu = document.querySelector('.mo-menu');
let isHideMenu = false;

// 햄버거 메뉴
const toggle1 = document.querySelector('.toggle1');
const toggle2 = document.querySelector('.toggle2');
const toggle3 = document.querySelector('.toggle3');

menuBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        moMenu.classList.add('show');
        toggle1.classList.add('active');
        toggle2.classList.add('active');
        toggle3.classList.add('active');
    } else{
        moMenu.classList.remove('show');
        toggle1.classList.remove('active');
        toggle2.classList.remove('active');
        toggle3.classList.remove('active');
    }
});

// 모바일, 탭 - 메뉴 클릭 시 슬라이드 닫히고 메뉴로 이동



// PC - Menu 클릭 시 색상 변경 (완성 X)


// UI/UX modal
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const open = document.querySelector('.open');

open.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.toggle('show');

    if(modal.classList.contains('show')){
        body.style.overflow = 'hidden';
    }
});

modal.addEventListener('click', function(e){
    if(e.target === modal){
        modal.classList.toggle('show');

        if(!modal.classList.contains('show')){
            body.style.overflow = 'auto';
        }
    }
});