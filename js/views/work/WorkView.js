define([
  'jquery',
  'underscore',
  'backbone',
  'models/getModel',
  'collections/work/WorkCollection',
  'views/work/WorkListView',
  'text!templates/work/workTemplate.html'
], function($, _, Backbone, getModel, workCollection, WorkListView, workTemplate){

  var WorkView = Backbone.View.extend({
    el: $("#page"),

		events: {
			//'click .project': 'showProject', moved to render to prevent multiple calls
			'click #overlay': 'closeProject',
			'click #closeProjectDetail': 'closeProject',
			'click #projectClose': 'closeProject',
			'click #arrowLeft':'projectLeft',
			'click #arrowRight':'projectRight'
		},
    
    // Work animation for initial load
    animateWork: function(numThumbs) {
			// make sure all thumbs are loaded
			if($('#bg2').hasClass('bgActive')) {
				$('#page').append('<center><img src="/imgs/loading.gif" alt="Loading" border="0" id="loadingWork" /></center>'); // append loader for slow connections
			} else {
				$('#page').append('<center><img src="/imgs/loader_gray.gif" alt="Loading" border="0" id="loadingWork" /></center>'); // append loader for slow connections
			}
			$('#work .title').fadeIn(500);
			$('#projects img').last().load(function() {
				$('#loadingWork').parent().remove(); // remove loader
				var speed = 1000;
				$('.project').each(function(i) {
					speed = speed + 100;
					$(this).fadeIn(speed);
				});
			});
    },
		
		// Reposition lightbox on window resize
		resize: function() {
			if($('.projectDetail').is(':visible')) {
				if(document.documentElement.scrollHeight <= $(window).height()) {
					$('.projectDetail').css({height:document.documentElement.scrollHeight});
				} else {
					$('.projectDetail').css({height:$(window).height()});
				}
			}
		},
		
		buildProject: function(project, show) {
			$('.projectDetail').html('<center><img src="/imgs/loader_black.gif" id="projectDetailLoader" /></center>'); // clear previous
			var _this = this;
			var thisProject = project;
			var currProjectDetail = '';
			currProjectDetail += '<p class="projectTitle"><span>Project:</span> ' + thisProject.projectTitle + '</p>';
			if(thisProject.linkUrl != null) { currProjectDetail += '<div id="projectDetailImg"><span id="projectDetailImgShadow"></span><a href="' + thisProject.linkUrl + '" target=" _blank"><img src="' + thisProject.imgPath + '" /></a></div>'; }
			else { currProjectDetail += '<div id="projectDetailImg"><span id="projectDetailImgShadow"></span><img src="' + thisProject.imgPath + '" /></div>'; }
			currProjectDetail += '<p class="projectSummary"><span>Summary:</span> ' + thisProject.projectSummary + '</p></div>';
			currProjectDetail += '<p class="projectTech"><span>Technology Used:</span> ' + thisProject.technology + '</p>';
			if(thisProject.linkUrl != null) { currProjectDetail += '<a id="launchProject" class="orangeGradient" href="' + thisProject.linkUrl + '" target=" _blank">Launch Project</a>'; }
			currProjectDetail += '<span id="projectClose">Close</span>'; // for mobile
			currProjectDetail += '<span id="closeProjectDetail">&times;</span>';
			currProjectDetail += '<div id="projectDetailArrows"><span id="arrowLeft">&larr;</span> <span id="arrowRight">&rarr;</span></div>';
			$('.projectDetail').append(currProjectDetail);
			$('#projectDetailImg img').load(function() { // once img is loaded
				$('#projectDetailLoader').remove();
				$('.projectTitle').fadeIn(500);
				$('#projectDetailImg').fadeIn(1000);
				$('.projectSummary').delay(500).fadeIn(1000);
					$('.projectTech').delay(600).fadeIn(1000);
					$('#launchProject').delay(700).fadeIn(1000);
					_this.resize();
			});
		},
		
		// Arrow left
		projectLeft: function() {
			if($('#overlay').is(':visible')) {
				this.changeProject('left');
			}	
		},
		
		// Arrow right
		projectRight: function() {
			if($('#overlay').is(':visible')) {
				this.changeProject('right');
			}
		},
		
		// Project overlay arrow keys
		changeDirection: function(e) {
			if($('#overlay').is(':visible')) {
				if(e.keyCode == 37) {
					this.projectLeft();
				} else if(e.keyCode == 39) {
					this.projectRight();
				}	
			}
		},
		
		// From arrowkey on project overlay
		changeProject: function(direction) {
			var _this = this;
			var projectId = $('.projectDetail').prop('id');
			var splitId = projectId.split('-');
			var thisNum = splitId[1];
			var projectDetailsStorage = $storage('projects').get();
			if(direction == 'left') {
				thisNum--;
				if(thisNum >= 0) {
					_this.buildProject(projectDetailsStorage[thisNum], false);
				} else {
					thisNum = projectDetailsStorage.length - 1;
					_this.buildProject(projectDetailsStorage[thisNum], false);
				}
			} else if(direction == 'right') {
				thisNum++
				if(thisNum == projectDetailsStorage.length) {
					thisNum = 0;
					_this.buildProject(projectDetailsStorage[thisNum], false);
				} else {
					_this.buildProject(projectDetailsStorage[thisNum], false);
				}
			}
			$('.projectDetail').prop('id','project-' + thisNum);
		},
		
		// Open project detail from thumbnail
		showProject: function(e) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			var _this = this;
			var thisId = $(e.currentTarget).prop('id');
			$('.projectDetail').html('<center><img src="/imgs/loader_black.gif" id="projectDetailLoader" /></center>'); // clear previous
			$('#overlay').css({opacity:0}).show();
			$('#projectDetailWrap').css({opacity:0}).show();
			$('#overlay').stop().animate({opacity:.7},350);
			$('.projectDetail').css({height: $(window).height()});
			$('#projectDetailWrap').stop().delay(200).animate({opacity:1}, 350, function() {
				// Populate project details from cache and fade in
				var projectDetailsStorage = $storage('projects').get();
				for(var i=0; i<projectDetailsStorage.length; i++) {
					if(thisId == projectDetailsStorage[i].projId) {
						$('.projectDetail').prop('id','project-' + i);
						_this.buildProject(projectDetailsStorage[i], true);
						return false;
					}
				}
			});
		},
	
		// Close project detail
		closeProject: function(e) {
			$('#projectDetailWrap').stop().animate({opacity:0}, 350, function() {
				$('#projectDetailWrap').hide();
				$('.projectDetail').html('<center><img src="/imgs/loader_white.gif" id="projectDetailLoader" /></center>');
			});
			$('#overlay').stop().delay(200).animate({opacity:0},350, function() {
				$('#overlay').hide();
			});
		},
		
		buildProjectThumbs: function() {
			var _this = this;
			var thisResult = $storage('projects').get();
			for(var i=0; i<thisResult.length; i++) {
				_this.preloadProjectThumbs(thisResult[i].thumbPath);
				var appendThumb = '';
				if(i == 0 || i % 4 === 0) {
					var result = thisResult[i];
					appendThumb += '<div class="projectRow">';
					appendThumb += '<div class="project" id="' + result.projId + '">';
					appendThumb += '<img src="' + result.thumbPath + '" alt="' + result.projectTitle + '" />';
					appendThumb += '<div class="projectOverlay">';
					appendThumb += '<p class="projTitle"><span>' + result.projectTitle + '</span></p>';
					appendThumb += '<p class="projDesc">' + result.minDesc + '</p>';
					appendThumb += '<div class="projMore">More</div>';
					appendThumb += '</div>';
					appendThumb += '</div>';
					appendThumb += '</div>';
					$('#projects').append(appendThumb);
				} else {
					var result = thisResult[i];
					appendThumb += '<div class="project" id="' + result.projId + '">';
					appendThumb += '<img src="' + result.thumbPath + '" alt="' + result.projectTitle + '" id="' + thisResult[i].projId + '_thumb" />';
					appendThumb += '<div class="projectOverlay">';
					appendThumb += '<p class="projTitle"><span>' + result.projectTitle + '</span></p>';
					appendThumb += '<p class="projDesc">' + result.minDesc + '</p>';
					appendThumb += '<div class="projMore">More</div>';
					appendThumb += '</div>';
					appendThumb += '</div>';
					$('.projectRow:last-child').append(appendThumb);
				}
			}
			_this.preloadProjectThumbs("/imgs/work/bg_project_detail_img_shadow.png");
			
			// Animate the page
			this.animateWork(thisResult.length);
		},
		
		// Load project detail to local storage, display project thumbs
		loadProjects: function() {
			var _this = this;
			var projectStorage = $storage('projects').get();
			if(!projectStorage) { // no project data stored locally
				workCollection.fetch({
					success:function(results) {
						$storage('projects').set(results.result.projects);
						_this.buildProjectThumbs();
					},
					error: function(results) {
						alert('error!');
					}
				});
			} else { // rebuild from local cache
				_this.buildProjectThumbs();
			}
		},
		
		// Preload thumbs for smooth animation
		preloadProjectThumbs: function(imgPath) {
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
			jQuery.preLoadImages(imgPath);
		},
    
    render: function(){
			_.bindAll(this);
			$(document).unbind('keydown');
			$(document).bind('keydown', this.changeDirection);
			$('.project').die('click');
			$('.project').live('click', this.showProject);
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(workTemplate);
			$('nav a').removeClass('active');
    	$('.work').addClass('active');
			// Cache projects details to local storage
			this.loadProjects();
    }
  });

  return WorkView;
});
