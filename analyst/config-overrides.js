const {
  override,
  fixBabelImports,
  addWebpackAlias
  // addLessLoader,
} = require("customize-cra");

const path = require('path')


module.exports = override(
  fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  // })
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src'),
    "components":path.resolve(__dirname, 'src/components'),
    "Icon":path.resolve(__dirname, 'src/Icon'),
    "pages":path.resolve(__dirname, 'src/pages'),
    "consts":path.resolve(__dirname, 'src/components'),
    "store":path.resolve(__dirname, 'src/store'),
    "utils":path.resolve(__dirname, 'src/utils'),
    "config":path.resolve(__dirname, 'src/config'),
  }),
);

// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
//   return config;
// }
