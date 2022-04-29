$(document).ready(function(){
    // 스크롤 내렸을 때 header와 top버튼 보이기
    $(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('header').fadeIn();
            $('.top').fadeIn();
        } else{
            $('header').fadeOut();
            $('.top').fadeOut();
        }
    });

    // 스크롤 내렸을 때 header와 top버튼 보이기
    $(window).scroll(function(){
        let windowWidth = $(window).width();
        if($(this).scrollTop() > 600 && windowWidth > 1200){
            $('.pc-shortcut').fadeIn(); // pc에서만 보이게
        } else{
            $('.pc-shortcut').fadeOut(); // 수정해야 됨
        }
    });


    // 스크롤바 움직일 때 각 티켓 section에 그림자 추가, 삭제
    

    // pc menu 클릭 시 색상 변경 (완성 X)
    let clicked = true;
    $('.active').click(function(){
        if(clicked){
            $(this).css('color', '#6868AC');
        } else{
            $(this).css('color', '#202020');
        }
    });

});