$(function(){
	
	//resize
	var $win = $(window),
			$wrap = $('#wrap')
	$(window).on('resize',function() {
		$wrap.width($win.width());
	})
	
	
	/*archive strong*/
		gsap.to(".move", {
			scrollTrigger: {
				trigger: ".move",
				scrub: 1,
				start: "top center",
				end: "top 50vh",
//				markers: true
			},
			x: - 1500,
			ease: "none",
			duration: 5
		});
	
	
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
		
		$('.banner-number').text(currentIndex);
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
		$('.banner-number').text(currentIndex);
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
});
