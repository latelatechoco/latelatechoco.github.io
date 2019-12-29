$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;

      trigger.click(function () {
        hamburger_cross();      
      });

      function hamburger_cross() {

        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });


  // 头像翻转
  var turn = function(target,time,opts){
  target.find('a').hover(function(){
      $(this).find('img').stop().animate(opts[0],time,function(){
          $(this).hide().next().show();
          $(this).next().animate(opts[1],time);
      });
  },function(){
      $(this).find('.info').animate(opts[0],time,function(){
          $(this).hide().prev().show();
          $(this).prev().animate(opts[1],time);
      });
  });
}
var verticalOpts = [{'width':0},{'width':'180px'}];
turn($('#vertical'),100,verticalOpts);
