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
    
    test: function() {
      $.ajax({
        contentType: "application/json",
        url: "http://74.91.130.13/api/property?propertyId=54',
        type: "GET",
        cache: false,
        success: function(d) {
          console.log(d);
        },
        error: function(response) {
          alert('error');
        }
      })
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
				});
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
      this.test();
    }

  });

  return UpdateView;
  
});
