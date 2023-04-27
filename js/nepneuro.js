$(function() {
//ocultar btn subir
	$('.subir').fadeOut();
//inicio funcao scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
//navegacao principal transicoes
        if (scroll >= 200) {
            $(".navegacao").addClass('navegacao-fixa');
            $(".logo-nav").addClass('logo-nav-exibe');
        } else {
            $(".navegacao").removeClass("navegacao-fixa");
            $(".logo-nav").removeClass('logo-nav-exibe');
        }
//btn subir transicoes
        if ($(this).scrollTop() > 220) {
            $('.subir').fadeIn();
        } else {
            $('.subir').fadeOut();
        }
    });
//btn subir acao subir
    $('.subir').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});