$(document).ready(function()
{
    $(".product-img").find("img").css("transition", "transform 500ms ease-in-out");

    $(".product-img").hover(
        // Handler for mouseenter
        function()
        {
            $(this).find("img").css("transform", "scale(1.5)");
        },
        // Handler for mouseleave
        function()
        {
            $(this).find("img").css("transform", "scale(1)");
        }
    );
});
$(".product").click(function () {
var audio=new Audio('https://www.fesliyanstudios.com/play-mp3/387');
audio.play();
});
