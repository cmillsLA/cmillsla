define([
  'jquery',
  'underscore',
  'backbone',
  'models/postModel'
], function($, _, Backbone, postModel){
	var getUdacs = Backbone.Collection.extend({
	
		model: postModel,
		
		url: 'process.php',

		sync: function(method, model, options) {
			var postObj = {
				'name': $('#cmName').val(),
				'email': $('#cmEmail').val(),
				'website': $('#cmWeb').val(),
				'project': $('#cmProject input[type=radio]:checked').val(),
				'message': $('#contactMessage').val()
			}
			method = 'create';
			options.timeout = 100000;
			options.contentType = "application/json",
			options.dataType = "json";
			options.cache = false;
			options.data = JSON.stringify(postObj);
			return Backbone.sync(method, model, options);
		},
		
		parse: function(response) {
			if(response != null) {
				if (typeof response.data !== 'undefined') {
					this.result = response.data;
				}
			}

			return this.result;
		
		},
	});

return new getUdacs;
});