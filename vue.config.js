const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    host: "localhost",
  },
  transpileDependencies: true,
  publicPath: "/lego/",
});
