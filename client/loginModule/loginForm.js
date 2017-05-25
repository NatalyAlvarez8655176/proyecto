Template.loginForm.events({
	"click #registerbtn" : function(e){
		e.preventDefault();
		myTemplates.set("registerForm");
	},
	"submit form" :function(e){
		e.preventDefault();
		Meteor.loginWithPassword(e.target.email.value,e.target.password.value);
		console.log("ok");
		$('#modal-id').modal('hide');
		return false;				
	}
});