alert('external file loaded!');

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://chrismills.la/test2.js';
document.getElementsByTagName("head")[0].appendChild(script);

//document.write('<script type="text/javascript" src="http://chrismills.la/test2.js"><\/script>');
