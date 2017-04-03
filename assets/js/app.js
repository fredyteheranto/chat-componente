$(document).ready(function() {
  setTimeout(function () {
    $('.js-aur').fadeIn(100);
  },500);
  // Aparecer y desaparecer
  $('.js-click').on('click',function () {
    //$('.js-cuerpo-chat').addClass('on');
    $('.js-cuerpo-chat').toggle(300);
  });
  $('.cerrar').on('click', function () {
    $('.js-cuerpo-chat').fadeOut();
  });
  var editor = new Quill('#editor', {
    modules: {
      'toolbar': { container: '#toolbar' },
      'link-tooltip': true
    },
    theme: 'snow',
  });
  $('.js-send').on('click',function () {
    var conTeniChat = $('iframe').contents();
    var Valis = conTeniChat.find('.snow');
    //
    if (conTeniChat.find('#quill-1').html() == '') {
      console.log('e');
      Valis.css({'border':'1px solid red'});
      $('.robot').append('<div class="mensaje-autor js-autorerror" style="display:none;"><div class="avatar">  <img src="assets/img/avatar/avat1.png" alt="" class="foto"></div><div class="flecha-izquierda"></div><div class="contenido">Hola, No puedes dejar el campo texto vacio Intenta de nuevo :) "Soy un Robot"</div><div class="fecha"><span>03/24/2015</span><span>10:13</span></div></div>');
      $('.js-autorerror').fadeIn();

      Valis.on('click',function () {
        $(this).css({'border':'none'});
      });
      return false;

    }else {
      var cpCont = conTeniChat.find('#quill-1').html();
      $('.robot').append('<div class="js-amigo mensaje-amigo" style="display:none;"><div class="contenido js-texto cont">'+cpCont+'</div>  <div class="flecha-derecha"></div><div class="avatar"><img src="assets/img/avatar/avat2.png" alt="" class="foto"></div>  <div class="fecha"><span>03/24/2015</span><span>10:13</span></div></div>');
      $('.js-amigo').fadeIn();
      conTeniChat.find('.line').remove();
    }
    setTimeout(function () {
      if ($('.robot').last().html()=='' && $('.js-autorerror').last().is(':visible')) {
        alert('err');
      }else {
        $('.robot').append(' <div class="mensaje-autor js-autor" style="display:none;"><div class="avatar">  <img src="assets/img/avatar/avat1.png" alt="" class="foto"></div><div class="flecha-izquierda"></div><div class="contenido">Excelente, ya estamos chateando Cada vez que me escribas  tardare 2 segundos en  responder  lo mismo que el primer mensaje :) "Soy un Robot"</div><div class="fecha"><span>03/24/2015</span><span>10:13</span></div></div>');
        $('.js-autor').fadeIn();
      var aLtoC =  $('.mensajes').height();
      if (aLtoC => 400) {
        $('.mensajes').addClass('scroll');
        $('.mensajes').css({'overflow-y':'auto'});
      }
      }
    },2000);

    // console.log(conTeniChat);
  })


});
