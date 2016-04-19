// all these functions need to be wrapped inside <script> tags

//facilities animation
jQuery(document).ready(function( $ ) {
    if($(window).width() > 980){
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var one_stop_animation = 1400;
            var bgSpeed = 2000;
        
            if(y_scroll_pos > one_stop_animation) {
                $(".one_stop_shop_bg").animate({ right: '30px', opacity: '1' }, bgSpeed, 'linear');
            }
        });
    }
});

//who_we_are animation
jQuery(document).ready(function( $ ) {
    if($(window).width() > 980){
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var lines_animation = 700;
            var branded_animation = 1100;
            var mission_animation = 1800;
            var lineSpeed = 1500;
            var bgSpeed = 2000;
        
            if(y_scroll_pos > lines_animation) {
                $("#orange_segment_1 .line_box").animate({ bottom: '83px' }, lineSpeed, 'linear');
                $("#orange_segment_2 .line_box").animate({ top: '80px' }, lineSpeed, 'linear');
                $("#orange_segment_3 .line_box").animate({ bottom: '83px' }, lineSpeed, 'linear');
                $("#orange_segment_4 .line_box").animate({ top: '80px' }, lineSpeed, 'linear');
                $(".orange_segment_container .line_box").animate({ height: 'auto' }, lineSpeed, 'linear');
            }
            if(y_scroll_pos > branded_animation) {
                $(".branded_entertainment_section .branded_entertainment_bg").animate({ left: '0%', opacity: '1' }, bgSpeed, 'linear');
            }
            if(y_scroll_pos > mission_animation) {
                $(".orange_mission_bg").animate({ right: '30px', opacity: '1' }, bgSpeed, 'linear');
            }
        });
    }
});

// orange_home_js
jQuery(document).ready(function( $ ) {
    $(".panel-grid").css({'margin-bottom' : '0'}); //the added row creates extra space at the bottom even though we have display: none; for that row, this is the fix
    
    //code for quotes at beginning of the page, randomly selects from bottom section in CMS
    var quotes = $("#orange_wisdom_quotes_list").children();
    var quotesNum = quotes.length;
    var randomCount = Math.floor(Math.random() * quotesNum);
    $(".orange_wisdom span").html(quotes[randomCount].textContent);
});

// full_height_screen
jQuery(document).ready(function( $ ) {
    $("body").css({
       'background-color' : '#212020'
    });
});

// hide_footer
jQuery(document).ready(function( $ ) {
    $(".site-footer .footer-content").css({
       'display' : 'none'
    });
});

// make_non_sticky
jQuery(document).ready(function( $ ) {
    $(".nav-sticky .site-header .nav-row").css({
       'position' : 'relative'
    });
});

// screening_room_header
jQuery(document).ready(function( $ ) {
    $(".page-template-page-full .nav-row").css({
       'background-image' : 'none',
       'background-color' : '#212020'
    });
});