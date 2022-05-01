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

        // 햄버거 메뉴
        toggle1.classList.add('active');
        toggle2.classList.add('active');
        toggle3.classList.add('active');
    } else{
        moMenu.classList.remove('show');

        // 햄버거 메뉴
        toggle1.classList.remove('active');
        toggle2.classList.remove('active');
        toggle3.classList.remove('active');
    }
});

// 모바일, 탭 - 메뉴 클릭 시 슬라이드 닫히고 메뉴로 이동
const menuGo1 = document.querySelector('.menuGo1');
const menuGo2 = document.querySelector('.menuGo2');
const menuGo3 = document.querySelector('.menuGo3');
const menuGo4 = document.querySelector('.menuGo4');

menuGo1.addEventListener('click', function(){
    moMenu.classList.add('hide');
});
menuGo2.addEventListener('click', function(){
    moMenu.classList.add('hide');
});
menuGo3.addEventListener('click', function(){
    moMenu.classList.add('hide');
});
menuGo4.addEventListener('click', function(){
    moMenu.classList.add('hide');
});


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