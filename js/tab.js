$(document).ready(function() {
    //Preview section for extension section on JupyterLab page
   $('div.lab-ext-preview-nav div.lab-ext-preview-nav-item').click(function() {
       var previous_tab_id = $('.lab-ext-preview-nav-item.nav-active').attr('data-tab');
       var current_tab_id = $(this).attr('data-tab');
       
       //If the tab is on the right side of the previous tab
       if (current_tab_id > previous_tab_id) {
           //Move tab content to left
           $('#' + current_tab_id).addClass('ext-active');
           $('#' + previous_tab_id).addClass('move-ext-preview-left-out');
           $('#' + current_tab_id).addClass('move-ext-preview-right-in');
           window.setTimeout(function() {
               $('#' + previous_tab_id).removeClass('ext-active');
               $('#' + previous_tab_id).removeClass('move-ext-preview-left-out');
               $('#' + current_tab_id).removeClass('move-ext-preview-right-in');
           }, 1000);
       } 
       
       
       else if (current_tab_id < previous_tab_id){
           //Move tab content to right
           $('#' + current_tab_id).addClass('ext-active');
           $('#' + previous_tab_id).addClass('move-ext-preview-right-out');
           $('#' + current_tab_id).addClass('move-ext-preview-left-in');
           window.setTimeout(function() {
               $('#' + previous_tab_id).removeClass('ext-active');
               $('#' + previous_tab_id).removeClass('move-ext-preview-right-out');
               $('#' + current_tab_id).removeClass('move-ext-preview-left-in');
           }, 300);
       }
       
       
       $('div.lab-ext-preview-nav div.lab-ext-preview-nav-item').removeClass('nav-active');
       $(this).addClass('nav-active');
   });
    
    $('ul.lab-collab-preview-nav li.lab-collab-preview-nav-item').click(function() {
        var current_tab_id = $(this).attr('data-tab');
        
        $('.lab-collab-preview-nav-item').removeClass('nav-active');
        $(this).addClass('nav-active');
        
        $('div.lab-collab-preview').removeClass('preview-active');
        $('#collab-preview-' + current_tab_id).addClass('preview-active');
        
    });
});