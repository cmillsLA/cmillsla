// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above,
  'models/work/WorkModel',
  'collections/work/WorkCollection',
  'text!templates/work/workListTemplate.html'

], function($, _, Backbone, WorkModel, WorkCollection, workListTemplate){
  var workListView = Backbone.View.extend({
    el: $("#projects"),

    render: function(){
    	console.log('work list view render');
      
      var data = {
        projects: this.collection.models,
        _: _ 
      };

      var compiledTemplate = _.template( workListTemplate, data );
      $("body").append( compiledTemplate ); 
    }
  });
  return workListView;
});
