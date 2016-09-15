var lang = localStorage ? (localStorage.getItem('user-lang') || 'id') : 'id';
var file = 'translations/' + lang + '.js';
var extjsFile = 'ext/locale/ext-lang-' + lang + '.js';

document.write('<script type="text/javascript" src="' + file + '"></script>');
document.write('<script type="text/javascript" src="' + extjsFile + '"></script>');