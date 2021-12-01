module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  //eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/cms');
  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      includes: '_components',
    }
  }
};