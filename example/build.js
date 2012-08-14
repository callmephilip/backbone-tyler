({
    paths: { "Backbone": "./libs/backbone",
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


    //NB: 
    //because the view helper loads modules dynamically at runtime, we need to link view modules used in composites 
    //so the optimizer picks them up 
    //one possible alternative is to 
	
    include: [
        "views/ChildView1",
        "views/ChildView2"
    ],

    name: "page.js", //module to build
    out: "page.compiled.js" //destination
})
