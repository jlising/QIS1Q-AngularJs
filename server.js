var express = require('express'),
	serveIndex = require('serve-index'),
    app = express(),
    port = 3000;

app.use(serveIndex(__dirname,{'icons': true}));
app.use(express.static(__dirname));

app.listen(port)
console.log("Server running at port " + port + "...\n");
console.log("Browse: http://localhost:" + port);
