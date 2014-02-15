define([
  'jquery', 
  'underscore', 
  'backbone',
	'validate',
	'router',
	'scripts'
], function($, _, Backbone, validate, Router, scripts){
  var initialize = function(){
    Router.initialize();
  };

  return { 
    initialize: initialize
  };
});
