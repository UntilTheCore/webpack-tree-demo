module.exports = {
	mode: 'development', // production
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{
				test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
				use: ['url-loader?limit=38792'],
			},
		],
	},
}
