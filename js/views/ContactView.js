define([
  'jquery',
  'underscore',
  'backbone',
  'collections/contact/submitForm',
  'text!templates/contact/contactTemplate.html'
], function($, _, Backbone, sendForm, contactTemplate){

  var ContactView = Backbone.View.extend({

    el: $("#page"),
    
    events: {
    	'click #submitForm': 'submit'
    },
    
    // Contact animation for initial load
    animateContact: function() {
			var speed = 0;
    	$('#contact p').each(function(i) {
    		speed = speed + 500;
    		$(this).fadeIn(speed);
    	});
    	$('#contactForm').delay(1000).fadeIn(1000);
    },
    
    clearErrors: function() {
    
    },
    
    submit: function(e) {
    	//this.clearErrors();
			if($('#contactForm').valid()) {
				sendForm.fetch({
	    		success: function(r) {
	    			$('#contactForm').slideUp(500, function() {
	    				$('#contact').append('<p>Thank you, for message has been sent.</p>');
	    				$('#contactForm').remove();
	    			});
	    		},
	    		error: function(r) {
	    			$('#contactForm').slideUp(500, function() {
	    				$('#contact').append('<p>Thank you, for message has been sent.</p>');
	    				$('#contactForm').remove();
	    			});
					}
	    	});
			}
    },

		bindValidation: function(e) {
			$('#contactForm',this.el).validate({
				errorClass: 'error',
				errorElement: 'div',
				onkeyup: false,
				validClass: 'valid',
				rules: {
					cmName: { required: true, minlength:2, maxlength:50 },
					cmEmail: { required: true, email: true },
					cmPhone: { number: true, maxlength:13 },
					cmWeb: { url: true },
					contactMessage: { required: true, minlength: 10, maxlength:1000 }
				},
				messages: { // Span tags for error message arrow placement, don't remove
					cmName: '<span></span>Please enter a name.',
					cmEmail: '<span></span>Please enter a valid email address.',
					cmPhone: '<span></span>Please enter a valid phone number.',
					cmWeb: '<span></span>Please enter a valid website url.',
					contactMessage: '<span></span>Please provide details about your project.',
					projectRadio: 'Please select a project type.'
				}
			});
		},

    render: function() {
    	this.$el.html(contactTemplate);
    	$('nav a').removeClass('active');
    	$('.contact').addClass('active');
			this.animateContact();
			this.bindValidation();
    }

  });

  return ContactView;
  
});
