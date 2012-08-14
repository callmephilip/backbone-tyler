// configure requirejs
// http://requirejs.org/docs/api.html#config

requirejs.config({

	
	paths: {     "Backbone": "./libs/backbone",
                 "Underscore": "./libs/underscore",
                 "jQuery": "./libs/jquery",
                 "Handlebars": "./libs/handlebars",
                 "backbone.tyler": "./libs/backbone.tyler"
        },

	// configuration for modules that do not support AMD
	// http://requirejs.org/docs/api.html#config-shim         
	shim: {
        'jQuery' : {
            exports: '$'
        }, 
        'Handlebars': {
            exports: 'Handlebars'
        },
        'Underscore' : {
            exports: '_'
        },
		'Backbone': {
            deps: ['Underscore'],
            exports: 'Backbone'
        },
        'backbone.tyler': ['Backbone',"Handlebars"]
    },
        
	waitSeconds: 15
});

require(["jQuery", "views/CompositeView"],
	function($, CompositeView) {
        	$(document).ready(function(){
               		$("#container").html(new CompositeView().render());
                });
});
