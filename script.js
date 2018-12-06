
$(document).ready(function() {
   $("#button").click(function(){
     var text = $("#text").val();
     var newMessage = $(".your-message").clone();
     newMessage.text(text);
     $(".app-screen-center").append(newMessage);

     function newUsermessage(){
       newUsermessage = $(".user-message").clone();
       newUsermessage.text("ok");
       $(".app-screen-center").append(newUsermessage);
     }
       setTimeout(newUsermessage, 3000);
   })
 });
