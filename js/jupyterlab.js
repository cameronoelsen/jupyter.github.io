//This file is the custom script for the JupyterLab page
$(document).ready(function() {
    
    //Used to reveal notebook output on scroll for JupyterLab's notebook section
    window.sr = ScrollReveal();
    sr.reveal('.lab-notebook-cell-output-text', {duration: 1000, delay: 350, reset: true}, 50);
    
    //Used to move the collaboration section header on the JupyterLab page at small screen sizes. This puts
    //the images and the navigation closer to each other for usability.
    var isAboveImages = false;
    var positionCollabSectionHeader = function() {
        if (window.outerWidth < 768) {
            $('#lab-collab-about-section-header').insertBefore('#collab-preview-tab-1');
            isAboveImages = true;
        } else if (window.outerWidth > 768 && isAboveImages == true) {
            $('#lab-collab-about-section-header').insertBefore('.lab-collab-preview-nav');
            isAboveImages = false;
            console.log("larger");
        }   
    };
    positionCollabSectionHeader();
    $(window).bind('resize', function() {
        positionCollabSectionHeader(); 
    });
    
    // Used for create typing effect on JupyterLab page on Collaboration section
    var tab2HasRun = false,
        tab3HasRun = false;

    $('.lab-collab-preview-nav .lab-collab-preview-nav-item').on('click', function() {
        if ($(this).data('tab') == 'tab-2' && !tab2HasRun) {
            $('#typeout-cell-1').typist({
                text: '# Analyzing Traffic Data',
                blinkSpeed: .05,
                cursorStyles: {color: '#2196F3', width: '2px'},
                speed: 15
            });

            $('#typeout-cell-2')
                .on('end_type.typist', function() {
                    $('.lab-collab-cell-output').addClass('show-collab-cell-output');
                })
                .typist({
                    text: 'plt.scatter(df3[‘hour’])',
                    blinkSpeed: .05,
                    cursorStyles: {color: '#BB4430', width: '2px'},
                    speed: 10
                });

            tab2HasRun = true;
        } else if ($(this).data('tab') == 'tab-3' && !tab3HasRun) {
            $('#lab-collab-chat-entry-1').addClass('animate-chat-entry-1');
            $('#lab-collab-chat-entry-2').addClass('animate-chat-entry-2');

            $('#typeout-chat-2').typist({
                text: "Yes! I'll add it to the notebook now.",
                speed: 15
            });   

            tab3HasRun = true;
        }
    });
    
    //Preview section for extension section on JupyterLab page
    $('div.lab-ext-preview-nav div.lab-ext-preview-nav-item').click(function() {
       var previous_tab_id = $('.lab-ext-preview-nav-item.nav-active').attr('data-tab');
       var current_tab_id = $(this).attr('data-tab');

       //If the screen is larger than 767, animate the extension slide items
       if ($(window).outerWidth() > 767) {
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
               }, 300);
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
       } else {
           $('#' + previous_tab_id).removeClass('ext-active');
           $('#' + current_tab_id).addClass('ext-active');
       }
       
       
       $('div.lab-ext-preview-nav div.lab-ext-preview-nav-item').removeClass('nav-active');
       $(this).addClass('nav-active');
   });
    
    //Used to create the navigation for the real-time collaboration section on JupyterLab page
    $('ul.lab-collab-preview-nav li.lab-collab-preview-nav-item').click(function() {
        var current_tab_id = $(this).attr('data-tab');
        
        $('.lab-collab-preview-nav-item').removeClass('nav-active');
        $(this).addClass('nav-active');
        
        $('div.lab-collab-preview').removeClass('preview-active');
        $('#collab-preview-' + current_tab_id).addClass('preview-active');
        
    });
    
    //Create the Lorenz Attractor animation inside computer in JupyterLab Native section
    
    var lorenzVid = document.getElementById('lab-native-lorenz-vid');
    
    // init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var lorenzAnimation = new ScrollMagic.Scene({triggerElement: ".lab-native", duration: 200})
					.addTo(controller)
					.on("enter", function () {
						lorenzVid.play();
					});
    // build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".lab-loading-screen-bg", duration: 600, offset: 100})
					.addTo(controller)
					.on("progress", function (e) {
                        var offset = 68 * e.progress;
                        var value = -175 - offset;
						$('#lab-header-preview').css("margin-top", value);
					});
});