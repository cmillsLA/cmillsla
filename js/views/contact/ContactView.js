define([
  'jquery',
  'underscore',
  'backbone',
	'validate',
  //'collections/contact/submitForm',
  'text!templates/contact/contactTemplate.html'
], function($, _, Backbone, Validate, /*sendForm,*/ contactTemplate){

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
			if($('#contactForm').valid()) {
				var formData = {
					'name': $('#cmName').val(),
					'email': $('#cmEmail').val(),
					'website': $('#cmWeb').val(),
					'project': $('#cmProject input[type=radio]:checked').val(),
					'message': $('#contactMessage').val()
				}
				$.ajax({
						contentType: "application/json",
						url: "/process.php",
					  type: "POST",
						dataType: "json",
					  data: JSON.stringify(formData),
						cache: false,
						success: function(response) {
							$('#contactForm').slideUp(500, function() {
		    				$('#contact').append('<p id="contactThanks">Thank you, your message has been sent.</p>');
		    				$('#contactForm').remove();
		    			});
						},
						error: function(response) {
							$('#contact').append('<p id="contactThanks">There was a problem with your request, please try again.</p>');
						}
				})
				// fetch post doesn't get along with php well
				/*sendForm.fetch({
	    		success: function(r) {
	    			$('#contactForm').slideUp(500, function() {
	    				$('#contact').append('<p>Thank you, for message has been sent.</p>');
	    				$('#contactForm').remove();
	    			});
	    		},
	    		error: function(r) {
	    			// error handling
					}
	    	});*/
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
					cmEmail: { required: true },
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
