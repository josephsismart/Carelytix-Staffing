$(".analyst").show();
function seeAvailJobs(a){
	$(".whoweneed").slideUp();
	$("."+a).show();
	//$("."+a).slideUp();
}

function hideAvailJobs(a){
	$(".whoweneed").slideDown();
	$("."+a).hide();
	//$("."+a).slideUp();
}