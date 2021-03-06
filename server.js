var path, express, app, webpackDevMiddleware, webpackHotMiddleware, webpack, webpackConfig, arg, compiler;

path = require("path");
express = require('express');
app = express();
webpackDevMiddleware = require("webpack-dev-middleware");
webpackHotMiddleware = require("webpack-hot-middleware");
webpack = require('webpack');
webpackConfig = require('./webpack.config.js');
arg = require('./arguments.config.js');
compiler = webpack(webpackConfig);


if (arg.env) {

	app.use(webpackDevMiddleware(compiler, {
		//hot: true,
		//filename: 'bundle.js',
		publicPath: webpackConfig.output.publicPath,
		stats: {
			colors: true,
		},
		//historyApiFallback: true,
		//noInfo:true
	}));

	app.use(webpackHotMiddleware(compiler, {
		//log: console.log,
		path: '/__webpack_hmr',
		//heartbeat: 10 * 1000,
	}));

	// app.use('/', express.static(path.join(__dirname, 'dist'), {
	// 	index: './WEB-INF/index.html'
	// }));

	app.get('*', function(req, res, next) {

		var filepath = path.join(compiler.outputPath, 'WEB-INF/index.html');

		// 使用webpack提供的outputFileSystem
		compiler.outputFileSystem.readFile(filepath, function(err, result) {
			if (err) {
				// something error
				return next(err);
			}
			res.set('content-type', 'text/html');
			res.send(result);
			res.end();

		});

		//next();

	});

} else {

	// app.get('*', express.static(path.join(__dirname, 'dist'), {
	// 	index: './WEB-INF/index.html'
	// }));

	app.use(express.static(path.join(__dirname, 'dist')));

	app.use('*', function(req, res) {
		res.sendFile(path.join(__dirname, './dist/WEB-INF/index.html'))
			//next();
	});

}


app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port'));
});