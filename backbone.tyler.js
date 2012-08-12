(function(_, Backbone, Handlebars){

	Handlebars.views = Handlebars.views || {};
	Handlebars.childViewClassName = "hbars-child-view";
	
	/* Support for composite views */
	
	Handlebars.getChildView = function(id){
		return Handlebars.views[id];
	};
	
	Handlebars.registerHelper('view', function(path, attributes) {
		var id = _.uniqueId("hbars-view");
		Handlebars.views[id] = {
			path : path, attributes : attributes
		};
		return new Handlebars.SafeString("<div class='" + Handlebars.childViewClassName + "' id='" + id + "'></div>");
	});
	
	
	/* END */
	
	//Composite view
	Backbone.CompositeView = Backbone.View.extend({
		render : function(){
		  $(this.el).html(this.template()); 
		  
		  $(this.el).find("." + Handlebars.childViewClassName).each(function(){
			var childViewData = Handlebars.getChildView($(this).attr("id"));
			
			if(typeof childViewData === 'undefined'){
			  throw "Child view data not found id = " + $(this).attr("id");
			}
	
			require([childViewData.path], _.bind(function(v){
			  $(this).html(new v(childViewData.attributes.hash).render());  
			},this));
			
		  });
		  
		  return this.el;
		}
	});	

})(_, Backbone, Handlebars);
