(function () {


    var co = $('span.co').each(function () {
        var $this = $(this);

        $('<blockqote></blockquote>', {
            class: 'co',
            text: $(this).text()
        }).prependTo($this).closest('p');


        $(this).closest('p').prepend('hi there');

    });

    $('p').filter(function () {
        return $(this).prev();
    });

    $('p').eq(0).after(function () {


    });





        $('h1').appendTo('article');
    
    $('<h2></h2>',
    {
      text: 'hello form javascript',
      class: 'myClass'
    }).insertBefore('p:nth-child(3)');




    $('<h2></h2>',
    {
      text: 'hello form javascript',
      class: 'myClass'
    }).insertAfter('h1');


    $('<h2></h2>',
    {
        text:'hello form javascript',
        class:'myClass'
     }).apppendTo('article');

    $('p').first().before("Hello from the JScript");
    $('h1').after("Hello from the JScript");

    $('article').prepend("Hello from the JScript");
    $('article').append("Hello from the JScript");

})();