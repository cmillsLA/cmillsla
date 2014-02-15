require.config({
  paths: {
    'jquery': 'libs/jquery/jquery-min',
    'underscore': 'libs/underscore/underscore-min',
    'backbone': 'libs/backbone/backbone-min',
		'validate': 'jquery.validate-1.11.1.min',
    'templates': '../templates'
  },

	shim: {
		underscore: {
	  	exports: '_'
	  },
	  backbone: {
	  	deps: ['underscore', 'jquery'],
	    exports: "Backbone"
	  },
		validate: {
	  	deps: ['jquery', 'backbone'],
	    exports: "validate"
	  }
	}

});

require([
  'app'
], function(App){
  App.initialize();
});
