$(function(){
	$('.toggle').click(function(){
		$('.layout').toggleClass('ativo');
		$('.menu-responsivo').toggleClass('ativo');
		$(this).toggleClass('ativo');
	});
	
	$('.inicio').click(function(){
		$('.menu-responsivo').removeClass('ativo');
		$('.toggle').removeClass('ativo');
	});
	$('.sobre').click(function(){
		$('.menu-responsivo').removeClass('ativo');
		$('.toggle').removeClass('ativo');
	});
	$('.habilidades').click(function(){
		$('.menu-responsivo').removeClass('ativo');
		$('.toggle').removeClass('ativo');
	});
	$('.portfolio').click(function(){
		$('.menu-responsivo').removeClass('ativo');
		$('.toggle').removeClass('ativo');
	});
	$('.depoimentos').click(function(){
		$('.menu-responsivo').removeClass('ativo');
		$('.toggle').removeClass('ativo');
	});
	$('.contato').click(function(){
		$('.menu-responsivo').removeClass('ativo');
		$('.toggle').removeClass('ativo');
	});
	// Filtrando os projetos do Portfólio
	$('#all').click(function(){
		$(this).addClass('active');
		$('#web').removeClass('active');
		$('#design').removeClass('active');
		$('.design').removeClass('no-display');
		$('.web').removeClass('no-display');
	});
	$('#web').click(function(){
		$(this).addClass('active');
		$('#all').removeClass('active');
		$('#design').removeClass('active');
		$('.design').addClass('no-display');
		$('.web').removeClass('no-display');
	});
	$('#design').click(function(){
		$(this).addClass('active');
		$('#all').removeClass('active');
		$('#web').removeClass('active');
		$('.web').addClass('no-display');
		$('.design').removeClass('no-display');
	});
	//Adicionando classe ativo para o scroll.

	$(window).on('load', function(){
		$('#preloader').fadeOut('slow',function(){
			$(this).remove();
		});
	});

	$(window).scroll(function(){
		if($(this).scrollTop() >= 500) {
			$('.scroll-to-top').addClass('ativo');
		} else {
			$('.scroll-to-top').removeClass('ativo');
		}
	});

	//Quando clicar no botão do GitHub descer a página até a section

	$('.github-btn').click(function(){
		$('html, body, #github').animate({scrollTop: 1200},800);
	});

	// Botão para ir ao topo

	$('.scroll-to-top').click(function(){
		$('html, body').animate({scrollTop: 0},800);
	});

	// Adicionando cor ao menu fixo ao usar a rolagem

	$(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.menu').addClass('navigation-background');
        } else {
            $('.menu').removeClass('navigation-background');
        }
	});

	// Portfólio com Plugin do MagnificPopup

		$('.portfolio-popup').magnificPopup({
        type: 'image',
		
        gallery: { enabled: true },
		zoom: { enabled: true,
		        duration: 500
				
      },
	  
	  
     image:{
           markup: '<div class="mfp-figure portfolio-pop-up">'+
           '<div class="mfp-close"></div>'+
           '<div class="mfp-img"></div>'+
           '<div class="mfp-bottom-bar portfolio_title">'+
           '<div class="mfp-title"></div>'+
           '<div class="mfp-counter"></div>'+
           '</div>'+
           '</div>',

           titleSrc:function(item){
            return item.el.attr('title');
          }
        }
  });

});