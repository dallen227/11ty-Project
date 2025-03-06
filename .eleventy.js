
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("warning", function(text) {
      return `<div class='warning'>⚠️ ${text}</div>`;
  });

  return {
      dir: {
          input: ".", 
          output: "_site"
      }
  };
};