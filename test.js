alert('external file loaded!');

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://chrismills.la/test2.js';
document.body.appendChild(script);
