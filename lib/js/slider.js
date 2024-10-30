jQuery(document).ready( function() {    
    /////////////////////////////////////////////
	// INIT SLIDER ON THE PORTFOLIO WORK PAGE
	/////////////////////////////////////////////
    var workSlider = jQuery('.candy-slider');
    
    if(workSlider.length) {
        var swiperWorkPage = new Swiper('.candy-slider', {
            speed: 350,
            on: {
                paginationRender: function (paginationEl) {
                    setTimeout(function(){
                        jQuery(paginationEl).find('.swiper-pagination-bullet:first-child').removeClass('swiper-pagination-bullet-active');
                        jQuery(paginationEl).find('.swiper-pagination-bullet:first-child').addClass('swiper-pagination-bullet-active-start');
                    }, 0);
                },
                autoplayStart: function() {
                    jQuery(this.$el).addClass('swiper-autoplaying').removeClass('swiper-stopped');
                },
                autoplayStop: function() {
                    jQuery(this.$el).removeClass('swiper-autoplaying').addClass('swiper-stopped');
                }
            },
            loop: 'true',
            autoplay: {
                delay: 2700,
                disableOnInteraction: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    
                    if(!index) {
                        return '<span class="' + className + ' swiper-pagination-bullet-first swiper-pagination-bullet-autoplay"></span>';
                    }
                    return '<span class="' + className + ' swiper-pagination-bullet-autoplay"></span>';
                },
            },
            paginationClickable: true,
        });
        
        swiperWorkPage.on('paginationUpdate', function (swipe, paginationEl) {
            jQuery(paginationEl).find('.swiper-pagination-bullet-first').removeClass('swiper-pagination-bullet-active-start').removeClass('swiper-pagination-bullet-first');
        });
    }
});
