define([
  'jquery',
  'underscore',
  'backbone',
	'validate',
  //'collections/contact/submitForm',
  'text!templates/update/updateTemplate.html'
], function($, _, Backbone, Validate, /*sendForm,*/ updateTemplate){

  var UpdateView = Backbone.View.extend({

    el: $("#page"),
    
    events: {
    	//'click #submitForm': 'submit'
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

    render: function() {
    	this.$el.html(updateTemplate);
    }

  });

  return UpdateView;
  
});
