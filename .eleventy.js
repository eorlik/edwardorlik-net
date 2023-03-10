module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/scripts.js");
    return {
      dir: {
        input: "src",
        output: "public",
      },
    };
  };