var uglifycss = require('uglifycss');
var fs = require('fs');
 
var uglified = uglifycss.processFiles(
    [ './src/swal-theme.css'],
    { maxLineLen: 500, expandVars: false }
);

fs.writeFile('./dist/swal-theme.min.css', uglified, (err) => {
    if (err) throw err;
    console.log('Lyric saved!');
});