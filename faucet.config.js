"use strict";

module.exports = {
  sass: [{
    source: "./lib/styles/index.scss",
    target: "./assets/bundle.css"
  }],
  js: [
    {
      source: "./lib/scripts/index.js",
      target: "./assets/bundle.js"
    }],
  watchDirs: ["./lib", "./components"]
};
