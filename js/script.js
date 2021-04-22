$(function(){
	
	//resize
	var $win = $(window),
			$wrap = $('#wrap')
	$(window).on('resize',function() {
		$wrap.width($win.width());
	})
	
	/*archive strong*/
//gsap.registerPlugin(ScrollTrigger)
//gsap.to(".move", {
//	scrollTrigger: {
//		trigger: ".move",
//		scrub: true,
//		start: "top 300px",
//		end: "top 800px",
//		markers: true
//	},
//	x: 400,
//	rotation: 360,
//	ease: "none",
//	duration: 3
//})

	
	/*main-header*/
	
	//상단 메뉴 고정
/*	var $header = $('header');
	$(window).scroll(function() {
		if($(this).scrollTop() > 0) {
			 $header.addClass('on');
			 } else {
				 $header.removeClass('on');
			 }
	});*/
	
	
	
	
	/*gnb*/
	$('.menu').click(function(){
		$(this).toggleClass('active');
		$('#gnb-area').toggleClass('on');
		$('.tnb').toggleClass('on');	
	});	

	/*arcodian gnb*/
	if ($(window).width() <= 1024) {
		$('.gnb').each(function() {
			var $gnb = $(this),
					$gnbList = $('.gnb-list'),
					$gnbListA = $('.gnb-list > a'),
					$subList = $('.sub-list');
			
			console.log('냥');
			$('.menu').on('click', function(){
				$subList.slideUp();
				$('header h1 a').toggleClass('on');
			})
			$gnbListA.on('click', function() {
				if ($(this).next().css('display') == 'none') {
					$subList.slideUp();
					$(this).next().slideDown();
				} else {
					$subList.slideUp();
				};
			});
		});
	};
	
	/*mv-slider*/
	
	$('.banner-wrap').each(function() {
		var	$bannerWrap = $(this),
			$slide = $bannerWrap.find('.slide'),
			$slideLi = $slide.find('a'),
			$btn = $bannerWrap.find('.btn-banner'),
			sp = 1000,
			currentIndex = 0,
			count = $slideLi.length,
			interval = 3500,
			timer;
		
		$('.banner-number').text(currentIndex+1);
		$('.banner-number.totalNum').text(count);
		
		/*1. slideLi 배치*/
		$slideLi.each(function(i) {
			$(this).css({
				top: 100 * i +'%'
			});
		});
		
	/*슬라이드 실행*/
	function slideShow(i) {
		$slide.stop().animate({
			top: -100 * i + '%'
		},sp);
		currentIndex = i;
		update(); /*사용자 정의 함수*/
		$('.banner-number').text(currentIndex+1);
		$('.banner-number.totalNum').text(count);
	}
	function update() {
		// 첫번째 앵커(슬라이드)라면 -> prev 버튼 숨김
		if (currentIndex == 0) {
			$btn.find('.prev').hide();
		} else {
			$btn.find('.prev').show();
		};
		
		// 마지막 앵커(슬라이드)라면 -> next 버튼 숨김
		if (currentIndex == (count-1)) {
			$btn.find('.next').hide();
		} else {
			$btn.find('.next').show();
		}
	}
		
		// 4. interval 변수에 선언된 시간에 한번 실행
		function startTimer() {
            timer = setInterval(function(){
             var nextIndex = (currentIndex + 1) % count;
             
                 slideShow(nextIndex);
            }, interval);
           }
           
           function stopTimer() {
            clearInterval(timer);
           }

           //6. btn 클릭하면 이전/다음으로 이동
		$btn.on('click', 'a', function() {
			if ($(this).hasClass('next')) {
				slideShow(currentIndex + 1);
			} else {
				slideShow(currentIndex - 1);
			}
        });
        
        slideShow(currentIndex);
        startTimer(); 
	});	

	/*state-bar aniamate*/
	var $stateBarAni = $('.state-bar-ani')
	
	function st() {
		$stateBarAni.animate({
			width: '100%'
		},3500,function(){
			$stateBarAni.css({
				width: 0
			});
		});
	}
	setInterval(function(){
		st();
	});
	
	/*animation*/
	var $story = $('#story');
	var $offset = 300;
	var $storyOST = $story.offset().top - $offset;
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > $storyOST) {
			$story.find('li').addClass('on');
		}
	});
	
 	/*btn-right-area*/
	var $btnRight = $('.btn-right-area')
	var $footerOST = $('footer').offset().top;
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300 ) {
			$btnRight.addClass('on');
		} else if ($(this).scrollTop() < 200 && $(this).scrollTop > 1500){
			$btnRight.removeClass('on');
		} else {
			$btnRight.removeClass('on');
		}
	}) 
	
	
//$('#miele-banner > div:gt(0)').hide();
//
//setInterval(function(){
//    $('#miele-banner > div:first')
//        .fadeOut(1000)
//        .next()
//        .fadeIn(1000)
//        .end()
//        .appendTo('#miele-banner');
//},3000);
	
	$('.miele-banner > div:gt(0)').hide();
	
	function mieleSlide() {
		$('.miele-banner > div:first').fadeOut(2000).next().fadeIn(2000).end().appendTo('.miele-banner');
	}
	
	setInterval(function(){
		mieleSlide();
	},4000);

});






console.log('로딩완료!')