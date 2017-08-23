window.functions = {

    initializeIndex: function(){
        var index = window.template.indexTemplate();

        $("body").html(index);
        window.functions.initializeData();
    },
    initializeData: function(){
        window.services.getData(function(result){
            if(result){
                result = JSON.parse(result);
                result = result[0];

                window.functions.renderData(result);
            }
        });
    },
    renderData: function(data){
        $(".text").html(data.Message);
        $("#ID").val(data.id);

        window.events.submit();
    }
}