define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var getModel = Backbone.Model.extend({

    initialize: function(){
      //console.log('import select initialize');
    },

  });

  return getModel;
});