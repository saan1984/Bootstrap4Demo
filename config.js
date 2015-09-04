System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "twbs/bootstrap": "github:twbs/bootstrap@4.0.0-alpha",
    "github:twbs/bootstrap@4.0.0-alpha": {
      "jquery": "github:components/jquery@2.1.4"
    }
  }
});
