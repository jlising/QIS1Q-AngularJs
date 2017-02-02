var express = require('express'),
	serveIndex = require('serve-index'),
    app = express();

app.use(serveIndex(__dirname));
app.use(express.static(__dirname));

app.listen(8080)
