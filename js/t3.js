$(document).ready(function() {
alert("ATTENTION!");
$("#h1").draggable();
$("#icon1").draggable();
$("#part1").hover(function(){
$("#catv2").show();
});
$("#part3").click(function(){
$("#part2").hide();
});
$("#catv1").hover(function(){
$("#s1").append("catcatcatcatcatcatcat");
});
$("#icon1").click(function(){
// $("#img1").css('opacity',"Math.floor(Math.random()*5+5) + Math.ceil(Math.random()*10)/10");
$("#part2").css("color","#fcdcfa");
});

})
