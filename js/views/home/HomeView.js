define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),
    
    // Homepage animation for initial load
    animateHome: function() {
			$('#home h1').fadeIn(500);
    },

    render: function(){      
      this.$el.html(homeTemplate);
      $('nav a').removeClass('active');
    	$('.home').addClass('active');
			this.animateHome();
    }

  });

  return HomeView;
  
});
