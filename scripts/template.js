window.template = {
	indexTemplate: function(){
		var index = $("<div>" +
						"<div class='row' id='foods'>" +
						"</div>" +
					"</div>" +
					"<div id='modalContainer'></div>");
		return index;
	},
	navbarTemplateMain: function(){
		var navbar = $("<div class='navbar-fixed'>" +
							"<nav class='override-navbar'>" +
								"<div id='override-navbar-wrapper' class='nav-wrapper'>" +
								"</div>" +
							"</nav>" +
						"</div>");
		return navbar;
	},
	navbarLoggedInTemplate: function(){
		return $("<a href='#!' data-activates='slide-out' class='left brand-logo button-collapse override-navbar-button-collapse'>" +
					"<i class='material-icons'>menu</i>" +
				"</a>" +
				"<ul id='override-navbarul' class='right override-navbarul'>" +
					"<li>" +
						"<a class='overridde-button-flat waves-effect waves-teal btn-flat' href='javascript:void(0)' onclick='events.submitModal()'>Submit</a>" +
					"</li>" +
				"</ul>");
	},
	navbarNotLoggedInTemplate: function(){
		return $("<ul id='override-navbarul' class='right override-navbarul'>" +
					"<li>" +
						"<a id='loginModal' class='overridde-button-flat waves-effect waves-teal btn-flat' href='javascript:void(0)'>Login</a>" + 
						"<a class='overridde-button-flat waves-effect waves-teal btn-flat' href='javascript:void(0)' onclick='events.submitModal()'>Submit</a>" +
					"</li>" +
				"</ul>");
	},
	sidebarTemplate: function(){
		var sidebar = $("<ul id='slide-out' class='side-nav'>" +
							"<li><div class='userView'>" +
								"<div class='background'>" +
									"<img class='override-sidebar-background-img' src='./images/sidebar-img.jpg'>" +
								"</div>" +
								"<img class='circle' src='./images/sidebar-profile-img.png'>" +
								"<span class='white-text name flow-text'><b>" + localStorage.clientName + "</b></span>" +
								"<span class='white-text email flow-text'><b>" + localStorage.clientContact + "</b></span>" +
							"</div></li>" +
							"<li><a class='waves-effect' href='javascript:void(0)' id='userInfo'><i class='material-icons'>info</i>User Information</a></li>" +
							"<li><div class='divider'></div></li>" +
							"<li><a class='waves-effect' href='javascript:void(0)' id='sidebarSignOut'><i class='material-icons'>exit_to_app</i>Sign Out</a></li>" +
						"</ul>");
		return sidebar;
	},
	//render foods with card template
	cardTemplate: function(id, item, price, image){
		var card = $("<div class='col s12 m6 l3 foodItem'>" +
						"<div class='override-card card sticky-action'>" +
							"<div class='card-image'>" +
								"<img src='" + image + "' width='320' height='140' alt=''/>" +
								"<span class='card-title item'>" + item + "</span>" +
							"</div>" +
							"<div class='card-content'>" +
								"<p class='id'>" + id +"</p>" +
								"<p class='price'>" + price + "</p>" +
							"</div>" +
							"<div class='override-card-action card-action'>" +
								"<button class='waves-effect waves-light btn override-card-button' onclick='specialCase.minusItemCount(\"" + item + "\"" + ", " + "\"" + price + "\"" + ", event)'><i class='material-icons md-light'>remove</i>" +
								"</button>" +
								"<input type='text' readonly='true' class='override-card-input itemCount' value='0'/>" +
								"<button class='waves-effect waves-light btn override-card-button' onclick='specialCase.addItemCount(\"" + item + "\"" + ", " + "\"" + price + "\"" + ", event)'><i class='material-icons md-light'>add</i>" +
								"</button>" +
							"</div>" +
						"</div>" +
					"</div>");
		return card;
	},
	userInfoTemplate: function(){
		var userInfo = $("<div id='containerUserInfo'>" +
							"<div id='userInfoDiv'>" +
								"<form id='userInfoForm'>" +
									"<div id='fullnameTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
										"<input class='mdl-textfield__input override-mdl-textfield__input' type='text' id='fullname' value='" + window.info.client.clientName + "'>" +
										"<label class='mdl-textfield__label' for='fullname'>Full Name</label>" +
										"<div id='fullnameError'></div>" +
									"</div>" +
									"<div id='contactTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
										"<input class='mdl-textfield__input override-mdl-textfield__input' type='text' id='contactnumber' value='" + window.info.client.clientContact + "'>" +
										"<label class='mdl-textfield__label' for='contactnumber'>Contact Number</label>" +
										"<div id='contactError'></div>" +
									"</div>" +
									"<button type='submit' class='userInfoButton waves-effect waves-light btn'>" +
										"Submit" +
									"</button>" +
								"</form>" +
							"</div>" +
							"<div id='userInfoError' class='ui error message'></div>" +
						"</div>");
		if($(".indexMain").length == 0){
			$(".nav-wrapper").html("<a href='./index' class='left brand-logo button-collapse override-navbar-button-collapse'><i class='material-icons'>arrow_back</i></a>");
			$("body").append("<div class='indexMain'></div>");
			$(".indexMain").html(userInfo);
		} else{
			$(".indexMain").html(userInfo);
		}
		(function userInfo(){
			$("#userInfoForm").submit(function(e){
				e.preventDefault();
			
				var data = {
					name: $("#fullname").val(),
					contact: $("#contactnumber").val(),
				}
				window.functions.userInfoUpdate(data);
			});
		})();
		componentHandler.upgradeDom();
	},
	//render small modal with dimmer
	smallModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +
							"<h5> Order Summary </h5>" +
							"<p style='color:red;'>Only 1 order per day</p>" +
						"</div>" +
						"<div id='modalContent' class='modal-content'>" +	
							"<div id='items'></div>" +
							"<div id='total'></div>" +
						"</div>" +	
						"<div class='modal-footer'>" +
							"<button id='modalSubmit' class='modal-action modal-close waves-effect waves-teal btn-flat'>SUBMIT</button>" +
							"<button class='modal-action modal-close waves-effect waves-teal btn-flat'>CANCEL</button>" +
						"</div>" +
					"</div>");
		return modal;
	},
	noOrderModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +	
							"<p> You have no order. </p>" +
						"</div>" +	
						"<div class='modal-footer'>" +
							"<button class='modal-action modal-close waves-effect waves-teal btn-flat'>OK</button>" +
						"</div>" +
					"</div>");
		return modal;
	},
	orderSubmittedModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +	
							"<p> Order submitted. </p>" +
						"</div>" +	
						"<div class='modal-footer'>" +
							"<button class='modal-action modal-close waves-effect waves-teal btn-flat'>OK</button>" +
						"</div>" +
					"</div>");
		return modal;
	},
	alreadyOrderedModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +	
							"<p> You have already ordered. </p>" +
						"</div>" +	
						"<div class='modal-footer'>" +
							"<button class='modal-action modal-close waves-effect waves-teal btn-flat'>OK</button>" +
						"</div>" +
					"</div>");
		return modal;
	},
	userInfoNoUpdateModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +	
							"<p> No update has been made.</p>" +
						"</div>" +	
						"<div class='modal-footer'>" +
							"<button class='modal-action modal-close waves-effect waves-teal btn-flat'>OK</button>" +
						"</div>" +
					"</div>");
		return modal;
	},
	loginModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +	
							"<div id='containerSignIn'>" +
								"<div id='progress'>" +
									"<div class='indeterminate'></div>" +
								"</div>" +
								"<div id='loginDiv'>" +
									"<div id='contactTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
										"<input class='mdl-textfield__input override-mdl-textfield__input' type='text' id='contactnumber'>" +
										"<label class='mdl-textfield__label' for='contactnumber'>Contact Number</label>" +
										"<div id='contactError'></div>" +
									"</div>" +
									"<div id='passwordTextField' class='mdl-textfield mdl-js-textfield 	mdl-textfield--floating-label'>" +
										"<input class='mdl-textfield__input override-mdl-textfield__input' type='password' id='password'>" +
										"<label class='mdl-textfield__label' for='password'>Password</label>" +
										"<div id='passwordError'></div>" +
									"</div>" +
								"</div>" +
							"</div>" +
						"</div>" +		
						"<div class='modal-footer'>" +
							"<button type='submit' class='loginButton modal-action waves-effect waves-teal btn-flat'>SUBMIT</button>" +
							"<button class='createAccount modal-action waves-effect waves-teal btn-flat'>REGISTER</button>" +
						"</div>" +
					"</div>");
		return modal;
	},
	createAccountModal: function(){
		var modal = $("<div class='modal-content'>" +	
						"<div id='containerCreateAccount'>" +
							"<div id='progress'>" +
								"<div class='indeterminate'></div>" +
							"</div>" +
							"<div id='createAccountDiv'>" +
								"<div id='fullnameTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
									"<input class='mdl-textfield__input override-mdl-textfield__input' type='text' id='fullname'>" +
									"<label class='mdl-textfield__label' for='fullname'>Full Name</label>" +
									"<div id='fullnameError'></div>" +
								"</div>" +
								"<div id='contactTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
									"<input class='mdl-textfield__input override-mdl-textfield__input' type='text' id='contactnumber'>" +
									"<label class='mdl-textfield__label' for='contactnumber'>Contact Number</label>" +
									"<div id='contactError'></div>" +
								"</div>" +
								"<div id='passwordTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
									"<input class='mdl-textfield__input override-mdl-textfield__input' type='password' id='password'>" +
									"<label class='mdl-textfield__label' for='password'>Password</label>" +
									"<div id='passwordError'></div>" +
								"</div>" +
								"<div id='errorpasswordTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
									"<input class='mdl-textfield__input override-mdl-textfield__input' type='password' id='repass'>" +
									"<label class='mdl-textfield__label' for='repass'>Re-type Password</label>" +
									"<div id='repassError'></div>" +
								"</div>" +
							"</div>" +
							"<div id='createAccountError' class='ui error message'></div>" +
						"</div>" +
					"</div>" +		
					"<div class='modal-footer'>" +
						"<button class='registerButton modal-action waves-effect waves-teal btn-flat'>SUBMIT</button>" +
					"</div>");
		return modal;
	},
	userInfoModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +	
							"<div id='containerUserInfo'>" +
								"<div id='progress'>" +
									"<div class='indeterminate'></div>" +
								"</div>" +
								"<div id='userInfoDiv'>" +
									"<div id='fullnameTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
										"<input class='mdl-textfield__input override-mdl-textfield__input' type='text' id='fullname' value='" + window.info.client.clientName + "'>" +
										"<label class='mdl-textfield__label' for='fullname'>Full Name</label>" +
										"<div id='fullnameError'></div>" +
									"</div>" +
									"<div id='contactTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
										"<input class='mdl-textfield__input override-mdl-textfield__input' type='text' id='contactnumber' value='" + window.info.client.clientContact + "'>" +
										"<label class='mdl-textfield__label' for='contactnumber'>Contact Number</label>" +
										"<div id='contactError'></div>" +
									"</div>" +
								"</div>" +
							"</div>" +
						"</div>" +		
						"<div class='modal-footer'>" +
							"<button type='submit' class='userSaveButton modal-action waves-effect waves-teal btn-flat'>SAVE</button>" +
							"<button class='modal-action modal-close waves-effect waves-teal btn-flat'>CANCEL</button>" +
						"</div>" +
					"</div>");
		return modal;
	},
	userInfoSavedModal: function(){
		var modal = $("<div class='modal'>" +
						"<div class='modal-content'>" +	
							"<p> Update saved.</p>" +
						"</div>" +	
						"<div class='modal-footer'>" +
							"<button class='modal-action modal-close waves-effect waves-teal btn-flat'>OK</button>" +
						"</div>" +
					"</div>");
		return modal;
	}
}