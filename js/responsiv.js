$(function (){
    $('.side_bare_icon').click(function (){
      $('#side_bar_open_effect').show();
      $('#side_bar').fadeIn("slow");
    });
    
    $('#side_bar header .close').click(function (){
      $('#side_bar').hide();  
      $('#side_bar_open_effect').hide();
    });
    
    isDropDownMenuHidden = true;
    $('body > header .nav_one .item:nth-child(2) ul li > div .icon').click(function (){
        if(isDropDownMenuHidden){
          $(this).find('+ .drop_down_menu').fadeIn("slow");
          isDropDownMenuHidden = false;
      }
      else{
          $(this).find('+ .drop_down_menu').fadeOut("slow");
          isDropDownMenuHidden = true;
      }
   });
});