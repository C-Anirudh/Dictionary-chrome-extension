$(function(){
    $('#on-off').click(function(){
        if( $("#on-off").val() == "ON")
        {
            $("#on-off").val("OFF");
            $("#on-off").css({"background-color": "red", "color": "white"});   
        }
        else
        {
            $("#on-off").val("ON");
            $("#on-off").css({"background-color": "green", "color": "white"  })
        }
    });
});