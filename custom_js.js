// all these functions need to be wrapped inside <script> tags

//lines animation
jQuery(document).ready(function( $ ) {
    if($(window).width() > 980){
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var lines_animation = 700;
            var animateSpeed = 1500;
        
            if(y_scroll_pos > lines_animation) {
                $("#orange_segment_1 .line_box").animate({ bottom: '83px' }, animateSpeed, 'linear');
                $("#orange_segment_2 .line_box").animate({ top: '80px' }, animateSpeed, 'linear');
                $("#orange_segment_3 .line_box").animate({ bottom: '83px' }, animateSpeed, 'linear');
                $("#orange_segment_4 .line_box").animate({ top: '80px' }, animateSpeed, 'linear');
                $(".orange_segment_container .line_box").animate({ height: 'auto' }, animateSpeed, 'linear');
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
    
    //code for all animations on home page
    if($(window).width() > 980){      
        var $animation_elements = $('.animation_element');
        var $window = $(window);
        console.log($animation_elements);

        function check_if_in_view() {
          var window_height = $window.height();
          var window_top_position = $window.scrollTop();
          var window_bottom_position = (window_top_position + window_height);
          console.log("window_top: " + window_top_position);
          console.log("window_bottom: " + window_bottom_position);
         
          $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
         
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
              $element.addClass('in_view');
              console.log(element_top_position);
            } else {
              $element.removeClass('in_view');
            }
          });
        }

        $window.on('resize', check_if_in_view);
        $window.on('scroll', check_if_in_view);
        $window.trigger('scroll');
    }
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