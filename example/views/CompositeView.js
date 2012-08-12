define(["jQuery", "backbone.tyler"], function($, compositeTemplate){


	var MyComposite = Backbone.CompositeView.extend({
		template : Handlebars.compile($("#template-container").html())
	});
			

	return MyComposite;

});