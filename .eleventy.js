
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};
eleventyConfig.addShortcode("warning", function(text) {
  return `<div class='warning'>⚠️ ${text}</div>`;
});

return {
  dir: {
      input: "src",  
      output: "_site" 
  }
};