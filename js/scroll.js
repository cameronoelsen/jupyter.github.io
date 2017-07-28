$(document).ready(function() {
    if (window.outerWidth < 768) {
                $('.navbar').removeClass('transparent-navbar');
                $('.navbar').addClass('navbar-white');
                $('.tab').addClass('black-tab');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
    }
    $(window).bind('resize', function() {
        if (window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/jupyterlab.html') {
            if (window.outerWidth < 768) {
                $('.navbar').removeClass('transparent-navbar');
                $('.navbar').addClass('navbar-white');
                $('.tab').addClass('black-tab');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
            }
            else {
                $('.navbar').addClass('transparent-navbar');
                $('.tab').removeClass('black-tab');
                document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';
                $('.icon-bar').addClass('white-icon-bar');
            }
        }
    });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) {
            $(".navbar").addClass("navbar-scroll");
            // $(".navbar").stop().animate({opacity: 0});

            // For Transparent Custom Navbar
            if (window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/jupyterlab.html') {
                $('.navbar').removeClass('transparent-navbar');
                $('.tab').addClass('black-tab');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').removeClass('white-icon-bar');
            }
        }
        else {
            $(".navbar").removeClass("navbar-scroll");
            // $(".navbar").stop().animate({opacity: 1});

            // For JupyterCon Custom Navbar
            if (window.location.pathname == '/' || window.location.pathname == '/index.html' || window.location.pathname == '/jupyterlab.html') {
                if (window.outerWidth < 768) {
                    $('.navbar').removeClass('transparent-navbar');
                }
                else {
                    console.log(window.location.pathname);
                    $('.navbar').addClass('transparent-navbar');
                    $('.tab').removeClass('black-tab');
                    document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';
                    $('.icon-bar').addClass('white-icon-bar');
                }
            }
        }
    });
    
    //Used to animate a parallax effect for JupyterLab page's notebook section
    $('#lab-notebook-parallax').parallax({imageSrc: './assets/jupyterlab-space-bg.jpeg'});
    
});
