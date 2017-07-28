$(document).ready(function() {
   $('div.lab-ext-preview-nav div.lab-ext-preview-nav-item').click(function() {
       var tab_id = $(this).attr('data-tab');
       
       $('div.lab-ext-preview-nav div.lab-ext-preview-nav-item').removeClass('nav-active');
       $('.lab-ext-preview-content').removeClass('ext-active');
       
       $(this).addClass('nav-active');
       $("#" + tab_id).addClass('ext-active');
   })
});