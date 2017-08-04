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
            else if (window.outerWidth > 768 && $(this).scrollTop() > 0) {
                $('.navbar').removeClass('transparent-navbar');
                document.getElementById('jupyter-nav-logo').src = '/assets/nav_logo.svg';
                $('.icon-bar').addClass('white-icon-bar');
            }   
            else {
                $('.navbar').addClass('transparent-navbar');
                $('.tab').removeClass('black-tab');
                if (window.location.pathname == '/jupyterlab.html') {
                    document.getElementById('jupyter-nav-logo').src = '/assets/nav-logo-white-type.svg';
                } else {
                    document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';   
                }
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
                    $('.navbar').addClass('transparent-navbar');
                    $('.tab').removeClass('black-tab');
                    if (window.location.pathname == '/jupyterlab.html') {
                        document.getElementById('jupyter-nav-logo').src = '/assets/nav-logo-white-type.svg';
                    } else {
                        document.getElementById('jupyter-nav-logo').src = '/assets/white_nav_logo.svg';   
                    }
                    $('.icon-bar').addClass('white-icon-bar');
                }
            }
        }
    });
});
