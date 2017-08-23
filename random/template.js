window.template = {

    indexTemplate: function(){
        return $("<div class='container'>" +
                    "<input type='hidden' id='ID'>" +
                    "<div class='text'>" +
                    "</div>" +
                    "<div class='buttons'>" +
                        "<button class='submit' value='1'>Positive</button>" + 
                        "<button class='submit' value='2'>Negative</button>" + 
                        "<button class='submit' value='3'>Not Sure</button>" + 
                        "<button class='submit' value='4'>Split</button>" + 
                    "</div>" +
                "</div>");
    }
}