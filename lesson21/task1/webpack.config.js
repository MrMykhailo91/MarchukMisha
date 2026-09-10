const path = require("path");

module.exports = {
	entry: "./src/script.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				type: "javascript/esm",
				use: {
					loader: "babel-loader",
					options: {
						presets: [require("@babel/preset-env")],
						sourceType: "unambiguous",
					},
				},
			},
		],
	},
	mode: "development",
};
