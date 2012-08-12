define([], function(){
  
  var ChildView1 = Backbone.View.extend({
    tagName:  "div",

    template: Handlebars.compile($("#template-child-view-1").html()),

	initialize : function(attributes){
		this.name = attributes.name;
	},

    render: function() {
      $(this.el).html(this.template({ name : this.name }));
      return this.el;
    }

  });

  return ChildView1;
});