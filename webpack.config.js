var path = require('path');

module.exports = {
    entry: "./main.ts",
    output: {
        filename: "./bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".js"],
        // Alias for knockout.
        alias: {
            "knockout": path.join(__dirname, "node_modules/knockout/build/output/knockout-latest.js"),
            "kendo": "@progress/kendo-ui"
        }
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.ts?$/, loader: "ts-loader" },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" }
        ]
    }
};