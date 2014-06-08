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

    fbInit: function() {
      console.log('fb init');
      $window.fbAsyncInit = function() {

        FB.init({
          appId      : '221418578022709', // App ID
          channelUrl : 'channel.html', // Channel File
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
          xfbml      : true  // parse XFBML
        });

        auth.getStatus();

      };

      (function(d){
        // load the Facebook javascript SDK

        var js,
          id = 'facebook-jssdk',
          ref = d.getElementsByTagName('script')[0];

        if (d.getElementById(id)) {
          return;
        }

        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "http://connect.facebook.net/en_US/all.js";

        ref.parentNode.insertBefore(js, ref);

      }(document));
    },
    
    test: function() {
      /*$.ajax({
        contentType: "application/json",
        url: "http://74.91.130.13/portfolio/reviews",
        type: "GET",
        cache: false,
        success: function(d) {
          console.log(d);
        },
        error: function(response) {
          alert('error');
        }
      });*/
      $.ajax({
        beforeSend: function (xhr){
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("Content-Type", "application/json");
        },
        type: "GET",
        contentType: "application/json; charset=UTF-8",
        dataType: "json",
        url: 'http://74.91.130.13/portfolio/reviews',
        success: function(d) {
          console.log(d);
        },
        error: function(response) {
          alert('error');
        }
      });
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
      this.fbInit();
    }

  });

  return UpdateView;
  
});
