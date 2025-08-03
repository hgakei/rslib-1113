const path = require("path");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const deps = require("./package.json").dependencies;

module.exports = {
  // style: {
  //   postcss: {
  //     plugins: [require("tailwindcss"), require("autoprefixer")],
  //   },
  // },
  webpack: {
    // configure: (webpackConfig) => {
    //   webpackConfig.output.publicPath = "auto";
    //   webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
    //     (plugin) => plugin.constructor.name !== "ModuleScopePlugin"
    //   );
    //   return webpackConfig;
    // },
    // alias: {
    //   "@": path.resolve(__dirname, "src/"),
    //   react: path.resolve(__dirname, "./node_modules/react"),
    //   "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    // },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "my_app",
          filename: "remoteEntry.js",
          shared: {
            react: { eager: true, singleton: true },
            "react-dom": { eager: true, singleton: true },
          },
        }),
      ],
    },
  },
};
