var someVar,
    myVar;

(function () {
    $('button').click(function () {

        var link = $('link');
        $('button').click(function () {
            var $this = $(this),
                stylesheet = $this.data('file');

            link.attr('href', 'css/' + stylesheet + '.css');

            $this
                .siblings('button')
                .removeAttr('disabled')
                .end()
                .attr('disabled', 'disabled');
        });


        var link = $('link');
        $('button').click(function () {
            var stylesheet = $(this).data('file');
            link.attr('href', 'css/' + stylesheet + '.css');
        });


        var stylesheet = $(this).data('file');
        $('link').attr('href', 'css/' + stylesheet + '.css');
        console.log(stylesheet);


        var stylesheet = $(this).attr('data-file');
        $('link').attr('href', 'css/' + stylesheet + '.css');
        console.log(stylesheet);


        var stylesheet = $(this).text().toLowerCase();
        $('link').attr('href', 'css/'+stylesheet+'.css');
        console.log(stylesheet);

        $('link').attr('href', 'css/night.css');


    })();