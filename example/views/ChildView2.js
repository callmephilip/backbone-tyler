define(["Backbone","Handlebars"], function(Backbone){
  
  var ChildView2 = Backbone.View.extend({
    tagName:  "div",

    template: Handlebars.compile($("#template-child-view-2").html()),

    render: function() {
      $(this.el).html(this.template());
      return this.el;
    }

  });

  return ChildView2;
});