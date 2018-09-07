module.exports = [
  require("postcss-import")(),
  require("postcss-css-variables")({
    variables: require("./cssVariables")
  }),
  require("postcss-nesting")()
];
