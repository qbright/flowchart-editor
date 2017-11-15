const typescript = require("rollup-plugin-typescript2");
const sourcemap = require("rollup-plugin-sourcemaps");
const resolve = require("rollup-plugin-node-resolve");
const server = require("rollup-plugin-serve");
const path = require("path");
const uglify = require("rollup-plugin-uglify");

module.exports = {
  input: "./src/main.ts",
  name: "flowEditor",
  output: {
    file: "./dist/bundle.js",
    format: "umd"
  },
  sourcemap: true,
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    sourcemap(),
    resolve(),
    server({
      contentBase: path.resolve(__dirname, "./"),
      port: 8080

    })
  ],
  watch: {
    include: "src/**/*"
  }
}




