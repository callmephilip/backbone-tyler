# Backbone Tyler


Backbone.Tyler allows you to have declarative composite views in your backbone apps. Tyler is inspired by what Soundcloud have been doing with Next (http://backstage.soundcloud.com/2012/06/building-the-next-soundcloud/) as far as view rendering is concerned.


## Requirements

Tyler has the following dependencies


* Backbone (https://github.com/documentcloud/backbone) 
* require.js (https://github.com/jrburke/requirejs)  
* Handlebars.js (https://github.com/wycats/handlebars.js)


## Show me some code

Tyler allows you to have your templates organized in the following way 

```html
<h2>This is a container</h2>		
<div>
	{{view "views/ChildView1" name="Stranger" }}
</div>
<div>
	{{view "views/ChildView2" }}
</div>
```

'view' is a handlebars.js helper it takes one required argument that points to the view module (the same way you'd do a normal require call). View accepts a hash of additional arguments that are passed directly to your view. Snippet below shows ChildView1 that uses a name parameter passed from the parent view

```javascript
define(["Backbone","Handlebars"], function(Backbone){
  
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
```

Here's what it takes to make your view composite:

```javascript
define(["jQuery", "backbone.tyler"], function($, compositeTemplate){

	var MyComposite = Backbone.CompositeView.extend({
		template : Handlebars.compile($("#template-container").html())
	});
			

	return MyComposite;
});
```

## Optimization gotcha

If you are using optimization tool to compile your scripts and serve them in one file, please make sure you reference child views in the include section of your build configuration like so: 

```javascript
include: [
	"views/ChildView1",
	"views/ChildView2"
]
```

Check out build.js in the example directory for more details.
