const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
} = require("customize-cra");

const path = require('path')


module.exports = override(
  fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  addLessLoader({
    lessOptions:{
      javascriptEnabled: true,
      modifyVars: { "@primary-color": "#1DA57A" }
    }
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src'),
    "components":path.resolve(__dirname, 'src/components'),
    "Icon":path.resolve(__dirname, 'src/Icon'),
    "pages":path.resolve(__dirname, 'src/pages'),
    "store":path.resolve(__dirname, 'src/store'),
    "utils":path.resolve(__dirname, 'src/utils'),
    "config":path.resolve(__dirname, 'src/config'),
    "layouts":path.resolve(__dirname, 'src/layouts'),
    "consts":path.resolve(__dirname, 'src/consts'),
    
  }),
);
