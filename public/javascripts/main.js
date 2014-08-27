$(document).ready(function() {		
	$('#go').click(function() {			
		window.location = "search?q="+$('#searchForm').val()+'&t='+$('#type').val();
	});
	
		//notifications options
		$(".showOptions").click(function(event) {
			event.preventDefault();
			if ($(this).parent().parent().find('.mov-top').is(":hidden") )
				$(this).parent().parent().find('.mov-top').slideDown();
			
		});
		$('.emailNotification a').click(function(event) {
			event.preventDefault();
			alert('Coming Soon');
		});
		//Responsive menu		
		$('.navbar-toggle').click(function() {
			if ($('.nav-collapse').parent().hasClass('main-nav')) {			
				$('.main-nav').removeClass('main-nav');
				$('.main-content').css('top','80px');
			} else {	
				$('.nav-collapse').parent().addClass('main-nav');
				$('.main-content').css('top','0px');
			}
		});
		//Dropdowns
		$('.dropdown').mouseover(function() {
				$('.dropdown .dropdown-menu').hide();
				$(this).find("ul").show();
				$(this).addClass('expanded');

		});
    $('.dropdown').mouseleave(function() {
        if ($(this).hasClass('expanded')) {
            $('.dropdown .dropdown-menu').hide();
            $(this).find("ul").hide();
            $(this).removeClass("expanded");
        }
    });
});
	