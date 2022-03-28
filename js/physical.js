$(document).ready(function() {

$("#path1").click(function(){
  $("#path2").show();
});
$("#path2").click(function(){
  $("#path3").show();
});
$("#path3").click(function(){
  $("#window").show();
});
$("#window").click(function(){
  $("#window").css('fill','#6e6e6e');
  $("#door").show();
});
$("#door").click(function(){
  $("#door").hide();
  $("line").show();
  $("#open3").show();
});

$("#open3").click(function(){
  $("#mus1").show();
  $("line").hide();
});
$("#mus1").click(function(){
  $("#mus2").show();
});
$("#mus2").click(function(){
  $("#mus3").show();
});
$("#mus3").click(function(){
  $("#mus4").show();
});
$("#mus1").draggable();
$("#mus2").draggable();
$("#mus3").draggable();
$("#mus4").draggable();
// $("h1").draggable();
// $("#icon1").draggable();
// $("#part1").hover(function(){
// $("#catv2").show();
// });
// $("#part3").click(function(){
// $("#part2").hide();
// });
// $("#catv1").hover(function(){
// $("#s1").append("catcatcatcatcatcatcat");
// });
// $("#icon1").click(function(){
// // $("#img1").css('opacity',"Math.floor(Math.random()*5+5) + Math.ceil(Math.random()*10)/10");
// $("#part2").css("color","#fcdcfa");
// });

})
