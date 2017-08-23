window.events = {
    submit: function(){
        $(".submit").click(function(){
            var data  = {
                value: $(this).val(),
                id: $("#ID").val()
            }

            window.services.submit(data, function(result){
                if(result == 1){
                    window.functions.initializeData();
                }
            });
        });
    }
}