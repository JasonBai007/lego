const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    host: "localhost",
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/lego/" : "/",
  outputDir: "docs",
});
