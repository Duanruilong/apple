$(function(){
    var $logo = $('.nav a:not(.logo)');
    var $s_icon = $logo.filter('.search_icon');
    var $s_btn = $('.search_btn');
    var $s_box = $('.search_box');
    var $search = $('.search');
    var $s_list = $('.s_list');

    $s_icon.click(function(){
        $logo.css({transform:"scale(0,0)"});
        $s_btn.css({display:"block"})
        $s_box.css({display:'block'})
        $search.css({display:'block'})
        $s_list.css({display:'block'})
        
        setTimeout(function(){
               $search.addClass("active");
               setTimeout(function(){
                  $('.s_list div').addClass('active')
                   setTimeout(function(){
                        $('.s_list li:nth-child(2)').addClass('active')
                        $('.s_list li:nth-child(3)').addClass('active')
                        $('.s_list li:nth-child(4)').addClass('active')
                        $('.s_list li:nth-child(5)').addClass('active')
                   },100)
               },500)
           },0)
    })

    $s_btn.click(function(){
       $logo.css({
           transform:"scale(1,1)"
       })
       $search.removeClass("active");
        $('.s_list div').removeClass('active');
         $('.s_list li:nth-child(2)').removeClass('active')
         $('.s_list li:nth-child(3)').removeClass('active')
        $('.s_list li:nth-child(4)').removeClass('active')
        $('.s_list li:nth-child(5)').removeClass('active')
       $s_btn.css({
           display:"none"
       })
       $s_box.css({
           display:"none"
       })
    })
   

     // 底下
    var $gen = $(' .nei2 h3');
    var $fen = $(' .nei2 .fen2')
    $gen.click(function(){
      $fen.eq($gen.index(this)).slideToggle();
      console.log($gen);
      console.log($fen)
    })

    //min-nav
    var $n_btn = $('.min-nav .nav_btn');
    var $n_list = $('.min-nav .nav_list');
    var $n_shop = $('.min-nav .nav_box .shop');
    $n_btn.click(function(){
         $n_shop.toggleClass('s-active');
        $('.nav_btn span:nth-of-type(1)').toggleClass('active1');
         $('.nav_btn span:nth-of-type(2)').toggleClass('active2')
        
          setTimeout(function(){
                         $('.nav_list li:nth-child(1)').toggleClass('active')
                        $('.nav_list li:nth-child(2)').toggleClass('active')
                        $('.nav_list li:nth-child(3)').toggleClass('active')
                        $('.nav_list li:nth-child(4)').toggleClass('active')
                        $('.nav_list li:nth-child(5)').toggleClass('active')
                         $('.nav_list li:nth-child(6)').toggleClass('active')
                   },100)

        //$n_btn.addClass("active");
        $(this).toggleClass("active");
        $w_t =  window.innerHeight - 44;
        $n_list.css({height:$w_t + 'px',zIndex: '999999'})
        if($(this).hasClass("active")){

            $n_list.slideDown();
           

        }else{
            $n_list.slideUp();
            // $n_shop.toggleClass('s-active')
        }
    })

   

})