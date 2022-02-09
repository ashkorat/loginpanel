module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
      libraryTarget: "commonjs"
    },
    externals: {
        ...externals,
        "remote-component.config.js": "remote-component.config.js"
      },
  };