var li = jQuery('ul li').css('color', 'green');
jQuery('ul li').addClass('emphasis');
$('ul li').addClass('emphasis');
$('li:first').addClass('emphasis');

$(document).ready(function () {
$('li:first').addClass('emphasis');
});

$('ul.emphasis').children('li').css('color', 'green');
$('ul.emphasis').find('li').css('color', 'blue');

$('ul.emphasis').children('li:first').addClass('emphasis');
$('ul.emphasis').children('li:first').first().addClass('emphasis');
$('ul.emphasis').children('li:nth-child(2)').text('added with jQuery');
$('ul.emphasis').children('li').eq(2).text('added with jQuery');

$('ul.emphasis')
    .children('li')
        .eq(3)
        .next().text('added with jQuery');
$('ul.emphasis')
    .children('li')
        .eq(3)
        .prev().text('added with jQuery');

$('li').parent('.container').removeClass('container');
$('li').parents('.container').removeClass('container');
$('li').closest('div.container').removeClass('container');