// all these functions need to be wrapped inside <script> tags

// home_orange_wisdom_fix
jQuery(document).ready(function( $ ) {
    $(".panel-grid").css({'margin-bottom' : '0'}); //the added row creates extra space at the bottom even though we have display: none; for that row, this is the fix
    var quotes = $("#orange_wisdom_quotes_list").children();
    var quotesNum = quotes.length;
    var randomCount = Math.floor(Math.random() * quotesNum);
    $(".orange_wisdom span").html("\"" + quotes[randomCount].textContent + "\"");
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