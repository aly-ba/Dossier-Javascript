(function () {
    var dd = $('dd');


    dd.filter(':nth-child(n+4)').addClass('hide');

    $('dl').on('mouseenter', 'dt',function() {

        $(this)
            .next()
              .slideDown()
                .siblings('dd')
                    .slideUp(240);
    });


//dd.Toggle  
    //dd.hide();
    //dd.show();
    //dd.fadeIn();
    //dd.slideDown();
    //.hide();
    //

})();  