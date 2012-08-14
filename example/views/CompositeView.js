define(["jQuery", "backbone.tyler"], function($){


	var MyComposite = Backbone.CompositeView.extend({
		template : Handlebars.compile($("#template-container").html())
	});
			

	return MyComposite;

});