FlowRouter.route("/",{
	action : function(params,queryParams) {
		BlazeLayout.render("main",{mainmenu:"main"});
	}
});

FlowRouter.route("/estudiantes",{
	action : function(params,queryParams) {
		BlazeLayout.render("estudiantes",{mainmenu:"main"});
	}
});