const path = require("node:path");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const { dependencies } = require("./package.json");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== "ModuleScopePlugin"
      );
      return webpackConfig;
    },
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "my_app",
          filename: "remoteEntry.js",
          shared: {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: dependencies.react,
            },
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: dependencies["react-dom"],
            },
          },
        }),
      ],
    },
  },
};
