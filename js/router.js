// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
	//'three',
	'scripts',
  'views/home/HomeView',
  'views/work/WorkView',
  'views/contact/ContactView',
  'views/update/UpdateView'
], function($, _, Backbone, scripts, HomeView, WorkView, ContactView, UpdateView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'work': 'showWork',
      'contact': 'showContact',
      'update': 'showUpdate',
      '*actions': 'defaultAction'
    }
  });
	
	bindBackground = function() {
		$('#bg1').bind('click', function() {
			setBackground('#666666');
			$('#background div').removeClass('bgActive');
			$(this).addClass('bgActive');
		});
		$('#bg2').bind('click', function() {
			setBackground('#c2c6bd');
			$('#background div').removeClass('bgActive');
			$(this).addClass('bgActive');
		});
		$('#bg3').bind('click', function() {
			setBackground('#333333');
			$('#background div').removeClass('bgActive');
			$(this).addClass('bgActive');
		});
		$('#bg4').bind('click', function() {
			setBackground('#999999');
			$('#background div').removeClass('bgActive');
			$(this).addClass('bgActive');
		});
	}
	
	setBackground = function(color) {
		var can = document.getElementById('bgCanvas');
		var ctx = can.getContext('2d');
		if(!color) {
			ctx.fillStyle = '#666666';
		} else {
			ctx.fillStyle = color;
		}
		ctx.fillRect(0, 0, can.width, can.height);
		ctx.fill();
		$('#bgCanvas').fadeIn(750);
	}
	
	preloadLoaders = function() {
		(function($) {
  		var cache = [];
  		$.preLoadImages = function() {
    		var args_len = arguments.length;
    		for (var i = args_len; i--;) {
      		var cacheImage = document.createElement('img');
      		cacheImage.src = arguments[i];
      		cache.push(cacheImage);
    		}
  		}
		})(jQuery)
		jQuery.preLoadImages('/imgs/loading.gif','/imgs/loader_black.gif','/imgs/loader_gray.gif','/imgs/loader_white.gif','/imgs/chris_mills.png','/imgs/chris_mills_mobile.png','/imgs/chris_mills_big.png');
	}
  
  var initialize = function() {
		
		$storage('background').set(''); // clear background cache on refresh
		$('#bgCanvas').hide();

    var app_router = new AppRouter;
    
    el: $("#page"),
    
    app_router.on('route:showWork', function (actions) {
        var workView = new WorkView();
				workView.render();
				$(window).bind("resize.app", _.bind(workView.resize, this));
    });
    
    app_router.on('route:showContact', function (actions) {
        var contactView = new ContactView();
        contactView.render();
				$(window).unbind("resize.app");
    });

    app_router.on('route:showUpdate', function (actions) {
      var updateView = new UpdateView();
      updateView.render();
      $(window).unbind("resize.app");
    });

    app_router.on('route:defaultAction', function (actions) {
        var homeView = new HomeView();
        homeView.render();
    });

		preloadLoaders();
		
		bindBackground();
		setTimeout('setBackground()', 100);

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
  
});
