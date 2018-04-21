module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "./bundle.js",
	},

	mode: "development",

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.ts?$/, use: "awesome-typescript-loader" }
		],
	},

};