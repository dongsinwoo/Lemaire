$(document).ready(function(){

    // cursor가져오기
    $(function() {
        var prefix = function() {
          var a = window.getComputedStyle(document.documentElement, ""),
            b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
          return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
        }();

        //마우스커서 따라다니게끔 설정하기
        $(document).mousemove(function(e) {
            mouseX = e.pageX + 15;
            mouseY = e.pageY - $(window).scrollTop() + 15;
            $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
          });
        
        })

        // cursor바꾸기
        $('.bl').mouseenter(function(){
           $('.theBall-outer').addClass('zoom');

        });
        $('.bl').mouseleave(function(){
            $('.theBall-outer').removeClass('zoom');
        });

        $('.bl2').hover(function(){
            $('.theBall-outer').addClass('zoom2');
        },function(){
            $('.theBall-outer').removeClass('zoom2');
        });

        // $('.bl2').mouseenter(function(){
        //     $('.theBall-outer').addClass('zoom2');
        // });
        // $('.bl2').mouseleave(function(){
        //     $('.theBall-outer').removeClass('zoom2');
        // });

        $('.bl3').hover(function(){
            $('.theBall-outer').addClass('zoom3');
        },function(){
            $('.theBall-outer').removeClass('zoom3');
        });

        // $('.bl3').mouseenter(function(){
        //     $('.theBall-outer').addClass('zoom3');
        // });
        // $('.bl3').mouseleave(function(){
        //     $('.theBall-outer').removeClass('zoom3');
        // });
    

    function media(){
        const ww = $(window).width();

        if(ww>1000){
            // 서브메뉴연결
            $(".main-menu li").mouseenter(function(){
                const result = $(this).attr("data-alt");

                $('.sub-menu').removeClass('active');
                $(`#${result}`).addClass('active');

                // 서브메뉴박스 보이게처리
                $('.sub-menu-box').addClass('active');

                //서브 메뉴박스 마우스 엔터시에 헤더색상 변경
                $('.header-logo svg').addClass('active');
                $('.header-area').addClass('active');
            })

            $(".sub-menu-box").mouseleave(function(){
                //서브메뉴박스 안보이게
                $(this).removeClass('active');

                //마우스 리브시에 헤더색상 제거
                $('.header-logo svg').removeClass('active');
                $('.header-area').removeClass('active');
            })

        }else{
            $('#hamburger').click(function(){
                $(this).toggleClass('active');
                $('.main-menu').toggleClass('active');
            });
        }
    }
    // 함수 호출 
    media();   

    //섹션별로 헤더색상 변경해주기
    $(window).scroll(function(){
        const sct = $(this).scrollTop();
        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const sec3 = $('.sec-3').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const sec5 = $('.sec-5').offset().top;
        const footer = $('.footer').offset().top;

        if(sct >= banner && sct < sec1){
            $('.header-logo svg').removeClass('active');
            $('.header-area').removeClass('active');
            $('.header-logo').removeClass('active');
            $('#hamburger span').removeClass('active');
        }else if(sct >= sec1 && sct < sec2){
            $('.header-logo svg').addClass('active');
            $('.header-area').addClass('active');
            $('.header-logo').addClass('active');
            $('#hamburger span').addClass('active');
        }else if(sct >= sec2 && sct < sec4){
            $('.header-logo svg').removeClass('active');
            $('.header-area').removeClass('active');
            $('.header-logo').removeClass('active');
            $('#hamburger span').removeClass('active');
        }else if (sct >= sec5){
            $('.header-logo svg').addClass('active');
            $('.header-area').addClass('active');
            $('#hamburger span').addClass('active');
        }
    })

   
    // 섹션4 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        direction:"vertical",
        slidePerVies:"auto",
        spaceBetween:0,
        slidePerGroup:1,
        speed:1500,
        loop:true,
        autoplay: {
            delay:1500,
            disableOnInteraction:false,
            
        }
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        
      });

    //   상단이동버튼
    const btn = $('.top-btn');

    $(window).scroll(function(){
        
        if($(window).scrollTop()>300){
            btn.fadeIn()
        }else{
            btn.fadeOut()
        }
    });

    btn.on('click',function(e){
        e.preventDefault();

        $('html,bodt').animate({
            scrollTop : 0
        },100);
    })





    // aos
    AOS.init();






























})//end;