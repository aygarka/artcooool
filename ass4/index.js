$(".first").mouseover(function(){
    $(this).css("color", "black");
  });
  $(".first").mouseout(function(){
    $(this).css("color", "#FCF3CF");
  });
$(".second").mouseover(function(){
      $(".second").css("color", "black");
    });
  $(".second").mouseout(function(){
      $(".second").css("color", "#FCF3CF");
    });
$(".third").mouseover(function(){
        $(".third").css("color", "black");
      });
    $(".third").mouseout(function(){
        $(".third").css("color", "#FCF3CF");})
$(".button_block").click(function(){
  alert("We recieved your contacts. Thank you!");
}
);
$(".oproekte").mouseover(function(){
    $(this).css("color", "white");
  });
$(".oproekte1").mouseover(function(){
      $(".oproekte1").css("color", "white");
    });
    $(".button_block").click(function () {
    var audio=new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    audio.play();
    });
$(".number").mouseover(function(){
        $(this).css("color", "blue");
      });
      $(".number").mouseout(function(){
          $(this).css("color", "#bfbfbf");
        });
        function isNumberKey(evt){  <!--Function to accept only numeric values-->
            //var e = evt || window.event;
        	var charCode = (evt.which) ? evt.which : evt.keyCode
            if (charCode != 46 && charCode > 31
        	&& (charCode < 48 || charCode > 57))
                return false;
                return true;
        	}

            function ValidateAlpha(evt)
            {
                var keyCode = (evt.which) ? evt.which : evt.keyCode
                if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)

                return false;
                    return true;
            }
