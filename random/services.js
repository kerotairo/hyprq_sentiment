window.services = {

    getData: function(success){
        $.ajax({
            url: "./getData.php",
            method: "POST",
            type: "GET",
            success: function(data){
                success(data);
            }
        });
    },
    submit: function(data, success){
        $.ajax({
            url: "./submit.php",
            method: "POST",
            type: "POST",
            data: data,
            success: function(data){
                success(data);
            }
        });
    }
}