===============
Backbone Tyler
===============

Backbone.Tyler allows you to have declarative composite views in your backbone apps. Tyler is inspired by what Soundcloud have been doing with Next (http://backstage.soundcloud.com/2012/06/building-the-next-soundcloud/) as far as view rendering is concerned.


Requirements
============

Tyler has the following dependencies


* Backbone (https://github.com/documentcloud/backbone) 
* require.js (https://github.com/jrburke/requirejs)  
* Handlebars.js (https://github.com/wycats/handlebars.js)


Show me some code
============
Tyler allows you to have your templates organized in the following way 

	<h2>This is a container</h2>		
	<div>
		{{view "views/ChildView1" name="Stranger" }}
	</div>
	<div>
		{{view "views/ChildView2" }}
	</div>

'view' is a handlebars.js helper it takes on required argument that points to the view module (the same way you'd do a normal require call). View accepts a hash of additional arguments that are passed directly to your view. Snippet below shows ChildView2 that uses a name parameter passed from the parent view

	define(["Backbone","Handlebars"], function(Backbone){
	  
	  var ChildView1 = Backbone.View.extend({
	    tagName:  "div",

	    template: Handlebars.compile($("#template-child-view-2").html()),

	    render: function() {
	      $(this.el).html(this.template());
	      return this.el;
	    }

	  });

	  return ChildView1;
	}); 		

