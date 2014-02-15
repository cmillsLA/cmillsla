define([
  'jquery',
  'underscore',
  'backbone',
  'models/getModel'
], function($, _, Backbone, getModel){
  var workList = Backbone.Collection.extend({

    model: getModel,

		url: '/json/work.json',

    sync: function(method, model, options) {
			// local cache
      options.timeout = 10000;
      options.contentType = "application/json";
			options.cache = false;
			options.dataType = "json";
      return Backbone.sync(method, model, options);
    },

    parse: function(response) {
			this.result = response;
			return response;
    },

  });

  return new workList;
});