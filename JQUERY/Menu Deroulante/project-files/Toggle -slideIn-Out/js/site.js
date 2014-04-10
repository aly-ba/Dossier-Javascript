$(function(){
	$(function() {

				$(".close-btn").click(function()
				{
					$(".slider").slideUp();
				});

				$(".open-btn").click(function()
				{
					$(".slider").slideDown();
				});


				$(".toggle-btn").click(function()
				{
					$(".slider").slideToggle();
				});
			});
			
});