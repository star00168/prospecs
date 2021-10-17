// JavaScript Document

$(function(){
	$('header').addClass('on');
	
	$(".main_menu>li:eq(0)").on("mouseenter",function(){
		$(".sub1").show().css({position:"absolute"});
		$(this).height(165);
	})
	
	$(".main_menu>li:eq(0)").on("mouseleave",function(){
		$(".sub1").hide().css({position:"static"});
		$(this).height('auto');
	})
	
	$(".main_menu>li:eq(1)").on("mouseenter",function(){
		$(".sub2").show().css({position:"absolute"});
		$(this).height(165);
	})
	
	$(".main_menu>li:eq(1)").on("mouseleave",function(){
		$(".sub2").hide().css({position:"static"});
		$(this).height('auto');
	})
	
	$(".main_menu>li:eq(2)").on("mouseenter",function(){
		$(".sub3").show().css({position:"absolute"});
		$(this).height(165);
	})
	
	$(".main_menu>li:eq(2)").on("mouseleave",function(){
		$(".sub3").hide().css({position:"static"});
		$(this).height('auto');
	})
	
	$(".main_menu>li:eq(3)").on("mouseenter",function(){
		$(".sub4").show().css({position:"absolute"});
		$(this).height(165);
	})
	
	$(".main_menu>li:eq(3)").on("mouseleave",function(){
		$(".sub4").hide().css({position:"static"});
		$(this).height('auto');
	})
	
	$(".main_menu>li:eq(4)").on("mouseenter",function(){
		$(".sub5").show().css({position:"absolute"});
		$(this).height(165);
	})
	
	$(".main_menu>li:eq(4)").on("mouseleave",function(){
		$(".sub5").hide().css({position:"static"});
		$(this).height('auto');
	})		
	
});

 $(document).ready(function() {
    
	var swiper = new Swiper('.main_visual .swiper-container',{
		slidesPerView:1,
		loop:true,
		autoplay:{
			delay:4000,
			disableOnInteraction:false,
		},
		
		allowTouchMove:false,
		navigation:{
		    nextEl:'.main_visual .swiper-button-next',
			prevEl:'.main_visual .swiper-button-prev',
		},
		
		pagination:{
			el:'.main_visual .swiper-pagination',
			clickable:true,
		},
		
		breakpoints:{
			1025:{
				allowTouchMove:true,
			}
		}
	});
	
  $('.main_btn_pause').click(function(){
	 swiper.autoplay.stop();
  })
	
  $('.main_btn_play').click(function(){
	 swiper.autoplay.start();
  }) // main slider
    
    var swipe2 = new Swiper('.swiper-container.product_best',{		
 	    slidesPerView:3,
	    spaceBetween:0,
	    loop:true,
	    autoplay:{
		    delay:4000,
		    disableOnInteraction:false,
	    },
		allowTouchMove:false,
		navigation:{
			nextEl:'.section1 .swiper-button-next',
			prevEl:'.section1 .swiper-button-prev',
		},
	    breakpoints:{
		   600:{
			  slidesPerView:1,
		   },
		   1025:{
			   slidesPerView:3,
			   allowTouchMove:true,
		   }
		
	   }	 
   
   }); // swiper-container.product_best end
  	 

 // 동영상 재생
 $('.section3').on('click', function(e){
	  e.preventDefault(); // a 태그 기능정지(새로고침 기능 정지)
	  
	  var videolink = "https://www.youtube.com/watch?v=CMlINxfp3b8"
	  
	  $('.popup').css({'display':'block','opacity':0})
	             .stop()
				 .animate({'opacity':1},400);
	  
	  $('.popup .popup_inner .modal').find('iframe').attr('src',''); // ''빈문자 src가 끊어지게 함
	  $('.popup .popup_inner .modal').find('iframe').attr('src',videolink); // src를 가져오기 attr
	  $('body').css({'overflow':'hidden'}); // body에 스크롤바 없애기
  }); //on(click) 끝
  
  
  
  // 동영상 팝업창
  $('.popup .popup_inner .modal a').on('click', function(e){
	  e.preventDefault(); // a 태그 기능정지(새로고침 기능 정지)
	  
	  $('.popup').stop()
	             .animate({'opacity':0},400,function(){
					 $('.popup').css({'display':'none'})
				 });
	  $('.popup .popup_inner .modal').find('iframe').attr('src',''); //빈문자 src가 끊어지게 함
	  $('body').css({'overflow':'scroll'}); // body에 스크롤바 보이기
  }); //on(click) 끝
  
  
  // 모바일 헤더
  $(".nav_m .btn").click(function(){
        $(".nav_m_header").stop().fadeIn(1000);
  });
  $(".nav_m_header .m1 .close-btn").click(function(){
        $(".nav_m_header").stop().fadeOut(1000);
  });
  
  
  // 업버튼
  $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".up-btn").addClass("on");
        } else {
            $(".up-btn").removeClass("on");
        };
        $(".up-btn a").click(function(){   
            $("html, body").stop().animate({
                scrollTop: 0
            }, 1000);
            
        });
    });
  
  
  // 스토어 슬라이드
  var swipe3 = new Swiper('.store-visual .swiper-container', {
	  slidesPerView:1,
	  loop:true,
	  autoplay: {
		  delay:4000,
		  disableOnInteraction:false,
		},
		
		allowTouchMove:false,
		navigation:{
		    nextEl:'.store-visual .swiper-button-next',
			prevEl:'.store-visual .swiper-button-prev',
		},
		
		pagination:{
			el:'.store-visual .swiper-pagination',
			clickable:true,
		},
		
		breakpoints:{
			1025:{
				allowTouchMove:true,
			}
		}
	});


  // 프로덕트
  $(document).ready(function(){
	  $(".section .sec").hide();
        $(".con-menu2 ul li").eq(0).addClass("selected");
        $(".section .sec").eq(0).show();
        $(".con-menu2 ul li").click(function(){
            $(".con-menu2 ul li").find('a').removeClass();
            $(this).find("a").addClass("selected");
            $(".section .sec").hide();
            var i = $(this).index();
            $(".section .sec").eq(i).show();
        });  
  });
  
  
  // 고객센터
  $(document).ready(function(){
	  $(".fre-box1>ul>li").click(function(){
            $(".arrow1").toggleClass("on");
            $(".fre-box1 .fre-box1-2").slideToggle("on");
        });
        $(".fre-box2>ul>li").click(function(){
            $(".arrow2").toggleClass("on");
            $(".fre-box2 .fre-box2-2").slideToggle("on");
        });
        $(".fre-box3>ul>li").click(function(){
            $(".arrow3").toggleClass("on");
            $(".fre-box3 .fre-box3-2").slideToggle("on");
        });
        $(".fre-box4>ul>li").click(function(){
            $(".arrow4").toggleClass("on");
            $(".fre-box4 .fre-box4-2").slideToggle("on");
        });
		$(".fre-box5>ul>li").click(function(){
            $(".arrow5").toggleClass("on");
            $(".fre-box5 .fre-box5-2").slideToggle("on");
        });
  });
  
  
  // search nav
  $(".notice .switch").hide();
  $(".search-nav ul li").eq(0).addClass("selected");
  $(".notice .switch").eq(0).show();
  $(".search-nav ul li").click(function(){ 
      $(".search-nav ul li").removeClass();
      $(this).addClass("selected");
      $(".notice .switch").hide();
      var i = $(this).index();
      $(".notice .switch").eq(i).show();
  });
 
});

