window.services = {
	//register new client
    register: function(data, success){
        $.ajax({
            url: "./services/registration.php",
            data: data,
            type: "POST",
			method: "POST",
            success: function(data){
                success(data);
            },
            error: function(xhr){
				console.log(xhr);
			}
        });
    },
	//validate login client
    login: function(data, success){
        $.ajax({
            url: "./services/login.php",
            data: data,
            type: "POST",
			method: "POST",
            success: function(data){
                success(data);
            },
            error: function(xhr){
                console.log(xhr);
            }
        });
    },
	//get foods from db
	getFoods: function(success){
		$.ajax({
            url: "./services/fetchItems.php",
            type: "GET",
            success: function(data){
                success(data);
            },
            error: function(xhr){
                console.log(xhr);
            }
        });
	},
	//submit order from client
	postOrder: function(data, success){
		$.ajax({
			url: "./services/ordering.php",
			data: data,
			type: "POST",
			method: "POST",
			success: function(data){
				success(data);
			},
			error: function(xhr){
				console.log(xhr);
			}
		});
	},
	//check if user is logged in
	checkLoginSession: function(success){
		$.ajax({
			url: "./services/checkLoginSession.php",
			type: "GET",
			success: function(data){
				success(data);
			}
		});
	},
	signOut: function(success){
		$.ajax({
			url: "./services/logout.php",
			type: "GET",
			success: function(data){
				success(data);
			}
		});
	},
	updateInfo: function(data, success){
		$.ajax({
			url: "./services/updateUserInfo.php",
			type: "POST",
			data: data,
			method: "POST",
			success: function(data){
				success(data);
			}
		});
	}
}