(function() {
    $('div.container').delegate('h2','click', function () {

        // console.log(this);

        $(this).clone().appendTo('body');
    });



    //$('h2').bind('click', function () {

    //    // console.log(this);

    //    $(this).clone(true).appendTo('body');
    //});


    $('h2').live('click', function () {

        // console.log(this);

        $(this).clone().appendTo('body');
    });
})();