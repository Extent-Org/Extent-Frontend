const { ProvidePlugin }= require("webpack")

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve("buffer"),
    // crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
  }
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
  config.plugins = [
    ...config.plugins,
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ]
  console.log(config.resolve)
  console.log(config.plugins)

  return config
}