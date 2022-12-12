const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const path = require("path");

// process.env.NODE_ENV will be set to 'production if npm run build-static

if (process.env.NODE_ENV === "development") {
  // console.log("development", process.env.NODE_ENV);
  module.exports = withPlugins([withImages, withFonts], {
    basePath: "",
    trailingSlash: true,
    images: {
      disableStaticImages: true,
    },

    webpack(config, options) {
      config.resolve.modules.push(path.resolve("./"));
      return config;
    },

    env: {
      // PHP_ENDPOINT: "http://127.0.0.1:8000/index.php",
      PHP_ENDPOINT: "http://2021.thelogconnection.com/_php/index.php",
      PDF_ENDPOINT: "http://127.0.0.1:8000/pdf/generate_pdf.php",
      // IMG_BASE_URL: "http://localhost:3000",
      IMG_BASE_URL: "http://2021.thelogconnection.com/_assets",
      DATA_BASE_URL: "http://localhost:3000/_data",
    },
  });
} else {
  // console.log("production");
  module.exports = withPlugins([withImages, withFonts], {
    basePath: "",
    trailingSlash: true,
    images: {
      disableStaticImages: true,
    },

    webpack(config, options) {
      config.resolve.modules.push(path.resolve("./"));
      return config;
    },

    env: {
      PHP_ENDPOINT: "http://2021.thelogconnection.com/_php/index.php",
      IMG_BASE_URL: "http://2021.thelogconnection.com/_assets",
      PDF_ENDPOINT:
        "http://2021.thelogconnection.com/_php/pdf/generate_pdf.php",
      DATA_BASE_URL: "http://2021.thelogconnection.com/_data",
    },
  });
}
