$("#change1").click(function () {
    $("#p1").text("Finally something readable")
});
$(".change2").click(function () {
    $("#p2").html("Finally something <b>readable<b>")
});
$("h1").css({
    "color": "pink", 
    "font-size": "50px"
})
$("#hide").click(function() {
    $("#p3").hide("slow")
})
$("#show").click(function() {
    $("#p3").show("slow")
})
$("#toggle").click(function() {
    $("#p3").toggle("slow")
})
$("#img1").fadeIn("slow")
$("#img1").fadeOut("slow")
$("#img1").fadeToggle("slow")

/*$("#ul").slideUp("slow")
$("#ul").slideDown("slow")
$("#ul").slideToggle("slow")
$("#ul").slideDown("slow")*/

let count=3
$("#add").click(function() {
    count++
    $("#ul").append("<li>Thursday</li>")
})
$("#pre").click(function() {
    count++
    $("#ul").prepend("<li>Thursday</li>")
})
$("#del").click(function() {
    $("#ul li:last").remove()
})

$("#set").click(function(){
    $("#img2").attr("src", "alter.jpg")
})
$("#set2").click(function(){
    $("#link").attr("href", "https://yandex.kz")
    $("#link").text("Yandex")
})

$("#animateBtn").click(function() {
  $("#square").animate({
    width: "200px",
    height: "200px",
    left: "100px",
    top: "100px",
    opacity: 0.5
  }, 1000); 
});
$("#startBtn").click(function() {
  $("#box")
    .animate({ left: "200px" }, 600)  
    .animate({ top: "200px" }, 600)    
    .animate({ width: "50px", height: "50px" }, 500) 
    .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 700); 
});


$("#bounce").click(function () {
  let $ball = $("#ball");

  
  $ball.animate({ left: "1000px" }, 1000, function () {
    
    for (let i = 0; i <= 20; i++) {
      
      let leftPos = 1000 - i * 50;

      
      let topPos = 300 - Math.pow(i - 10, 2)*2; 

      $ball.animate(
        { left: leftPos + "px", top: topPos + "px" },
        100
      );
    }
  });
});
