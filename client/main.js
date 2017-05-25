Template.main.helpers({
	username : function(){
		return Accounts.user().username;
	}
})
Template.main.events({
	"click #logout" : function(){
		$('#modal-id').modal('hide');
		Meteor.logout();
	}
})