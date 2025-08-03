import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "my_app",
      filename: "remoteEntry.js",
      shared: {
        react: { eager: true, singleton: true },
        "react-dom": { eager: true, singleton: true },
      },
    }),
  ],
});
