$(function() {

    var kWeAreShowingTheStickyHeader = 0;

    $(window).scroll(function() {
        var guildNameBanner = $('#guild-name-banner');
        var guildNameBannerSticky = $('#guild-name-banner-sticky');
        //var guildNameHeight = guildNameBanner.offset().top;
        if ($(this).scrollTop() > 1) {
            //if (!kWeAreShowingTheStickyHeader) {
                guildNameBanner.css('opacity', 0.0);
                guildNameBannerSticky.css('opacity', 1.0);
                guildNameBannerSticky.addClass('guild-name-banner-sticky');
                kWeAreShowingTheStickyHeader = 1;
            //}
        }
        else {
            //if (kWeAreShowingTheStickyHeader) {
                guildNameBanner.animate({ opacity: 1.0 }, 500);
                guildNameBannerSticky.css('opacity', 0.0);
                guildNameBannerSticky.removeClass('guild-name-banner-sticky');
                kWeAreShowingTheStickyHeader = 0;
            //}
        }
    });

    $('#homelink').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#aboutlink').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top - $('#guild-name-banner-sticky').height() + 1
        }, 1000);
    });

    $('#applylink').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#apply").offset().top - $('#guild-name-banner-sticky').height() + 1
        }, 1000);
    });

});